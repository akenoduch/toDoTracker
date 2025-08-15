import React, { useEffect, useState, FunctionComponent } from 'react';  
import { View, TouchableOpacity, Image, ScrollView, useColorScheme, Animated, Easing } from 'react-native';
import Header from '../components/Header';
import SidebarMenu from '../components/SidebarMenu';
import EditPopup from '../components/EditPopup'; 
import { homeStyles } from '../../assets/styles/HomeStyle';
import Card from '../components/card';
import PopupCreate from '../components/PopupCreate';
import { GradientBackground } from '../components/GradientBackground';
import { createTask } from '../firebase/firestore/createTask';
import { fetchOnlyMyTodoList } from '../firebase/firestore/read';
import { getAuth } from 'firebase/auth';
import { updateTask } from '../firebase/firestore/updateTask';
import { deleteTask } from '../firebase/firestore/deleteTask';
import { completeTask } from '../firebase/firestore/completeTask';
import { StatusBar } from 'expo-status-bar';

interface CardData {
  key: string;
  title: string;
  content: string;
  date?: string;
  isCompleted: boolean;
}

const HomeScreen: FunctionComponent = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [editModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const onDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };
  const isDarkMode = useColorScheme() === 'dark';
  const styles = homeStyles(isDarkMode ? 'dark' : 'light');
  
  const [cardsData, setCardsData] = useState<CardData[]>([]);

  const handleAddCard = async (title: string, content: string) => {
    try {
      const cardKey = await createTask({ title, content });
      setCardsData([...cardsData, { key: cardKey, title, content, isCompleted: false }]);
    } catch (error) {
      console.error(error);
    }
  };  

  const handleEditPress = (card: CardData) => {
    setSelectedCard(card);
    setEditModalVisible(true);
  };

  const handleSave = async (newTitle: string, newContent: string) => {
    if (selectedCard) {
      const updatedCards = cardsData.map(card => {
        if (card.key === selectedCard.key) {
          return { ...card, title: newTitle, content: newContent };
        }
        return card;
      });
      setCardsData(updatedCards);
      setSelectedCard(null);
      
      try {
        await updateTask({ taskId: selectedCard.key, title: newTitle, content: newContent });
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };

  const handleDeleteCard = async (cardKey: string) => {
    try {
      await deleteTask(cardKey);
      setCardsData(cardsData.filter(card => card.key !== cardKey));
    } catch (error) {
      console.error("Error deleting card: ", error);
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const querySnapshot = await fetchOnlyMyTodoList(user.uid);
        const allCards: CardData[] = querySnapshot.docs.map((doc) => {
          return {
            key: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            isCompleted: doc.data().isCompleted,
            date: doc.data().date,
          };
        });
  
        const filteredCards = allCards.filter(card => {
          const taskDate = new Date(card.date);
          const selectedDateString = selectedDate.toISOString().split('T')[0]; 
          const taskDateString = taskDate.toISOString().split('T')[0]; 
          return taskDateString === selectedDateString;
        });
  
        setCardsData(filteredCards);
      }
    };
  
    fetchTasks();
  }, [selectedDate]);  
  
  const handleCheckboxChange = async (taskId, newIsCompleted) => {
    setCardsData(prevCardsData =>
      prevCardsData.map(card =>
        card.key === taskId ? { ...card, isCompleted: newIsCompleted } : card
      )
    );
    await completeTask({ taskId, isCompleted: newIsCompleted });
  };
  
  const pulseAnim = new Animated.Value(1);

  const handlePulseAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 4,
          duration: 900,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 900,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    if (cardsData.length === 0) {
      handlePulseAnimation();
    }
  }, [cardsData]);
  
  return (
    <>
    <StatusBar style="light" backgroundColor="#272430" />
    <View style={styles.container}>
      <GradientBackground />
      {menuVisible && <SidebarMenu onClose={() => setMenuVisible(false)} />}
      <Header 
        onOpenMenu={() => setMenuVisible(true)} 
        onDateChange={onDateChange}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <ScrollView style={styles.scrollview}>
        {cardsData.map((card) => (
          <Card
            key={card.key}
            cardId={card.key}
            title={card.title}
            content={card.content}
            isCompleted={card.isCompleted}
            onDelete={() => handleDeleteCard(card.key)}
            onEdit={() => handleEditPress(card)}
            onCheckboxChange={handleCheckboxChange}
          />
        ))}
        <View style={{ height: 300 }} />
      </ScrollView>
      <TouchableOpacity
          style={[
            styles.addButton,
            {
              transform: [
                {
                  scale: pulseAnim,
                },
              ],
            },
          ]}
          onPress={() => setModalVisible(true)}
        >
          <Image source={require('../../assets/icons/add.png')} style={styles.icon} />
      </TouchableOpacity>
      <PopupCreate 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)}
        onAddCard={handleAddCard}
        selectedDate={selectedDate}
      />
      <EditPopup
        visible={editModalVisible}
        onClose={() => setEditModalVisible(false)}
        onSave={handleSave}
        currentTitle={selectedCard?.title ?? ''}
        currentContent={selectedCard?.content ?? ''}
      />
    </View>
    </>
  );
};

export default HomeScreen;
