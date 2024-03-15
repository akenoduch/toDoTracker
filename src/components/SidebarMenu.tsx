import React, { useState, useEffect } from 'react';
import { Modal, View, Text, Image, TouchableOpacity, useColorScheme, Alert, Linking } from 'react-native';
import { sidebarStyles } from '../../assets/styles/SidebarStyle';
import { getAuth, signOut } from 'firebase/auth';

interface SidebarMenuProps {
  onClose: () => void;
}

const openURL = async (url) => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Não foi possível abrir a URL: ${url}`);
  }
};

const SidebarMenu = ({ onClose }) => {
  const [userName, setUserName] = useState('');
  const isDarkMode = useColorScheme() === 'dark';
  const styles = sidebarStyles(isDarkMode ? 'dark' : 'light');
  const auth = getAuth();

  useEffect(() => {
    const user = auth.currentUser;
    setUserName(user?.displayName || 'Usuário');
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(getAuth());
      Alert.alert("Logout", "Você saiu da sua conta.");
      onClose();
    } catch (error) {
      console.error('Logout failed', error);
      Alert.alert("Erro no Logout", "Não foi possível sair da conta.");
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.fullScreen}>
        <View style={styles.menuContainer}>
          <Image source={require('../../assets/logo/taskTracker.png')} style={styles.menuLogo}/>
          <Text style={styles.hello}>Olá {userName}!</Text>
          <Text style={styles.hello2}>Acesse os links abaixo e conheça melhor meu trabalho.</Text>
          <TouchableOpacity 
            style={styles.menuItemContainer}
            onPress={() => openURL('https://www.linkedin.com/in/felipe-vilemondes/')}>
            <Image
              source={require('../../assets/icons/linkedin.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuItemText}>Felipe Vilemondes</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItemContainer}
            onPress={() => openURL('https://github.com/akenoduch')}>
            <Image
              source={require('../../assets/icons/github.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuItemText}>github.com/akenoduch</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItemContainer}
            onPress={() => openURL('https://akenoduch.github.io/Portfolio/')}>
            <Image
              source={require('../../assets/icons/portfolio.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.menuItemText}>Portfólio</Text>
          </TouchableOpacity>
          {/* Botão de Logout */}
          <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.transparentArea} 
          onPress={onClose} 
          activeOpacity={1}
        />
      </View>
    </Modal>
  );
};

export default SidebarMenu;
