import React, { useState, FC } from 'react';
import { Modal, View, TouchableOpacity, ModalProps, TextInput, Button, Alert, useColorScheme, Text } from 'react-native';
import { popupCreateStyles } from '../../assets/styles/PopupCreateStyles';

interface PopupCreateProps extends ModalProps {
  onClose: () => void;
  onAddCard: (title: string, content: string, key: string) => void;
}

const PopupCreate: FC<PopupCreateProps & { selectedDate: Date }> = ({ visible, onClose, onAddCard, selectedDate, ...otherProps }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const isDarkMode = useColorScheme() === 'dark';
  const styles = popupCreateStyles(isDarkMode ? 'dark' : 'light');

  const handleAdd = () => {
    if (!title.trim()) {
      Alert.alert("Título vazio","Por favor, insira um título para sua tarefa.");
      return;
    }
    const newKey = `card-${selectedDate.getTime()}`;
    onAddCard(title, content, newKey);
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
      {...otherProps}
    >
      <TouchableOpacity style={styles.modalOverlay} onPress={onClose} activeOpacity={1}>
        <View style={styles.modalContent} onStartShouldSetResponder={() => true}>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Criar tarefa</Text>
            <TextInput
              placeholder="Título do Card"
              placeholderTextColor={'white'}
              value={title}
              onChangeText={setTitle}
              style={styles.input}
              maxLength={32}
            />
            <TextInput
              placeholder="Conteúdo do Card"
              placeholderTextColor={'white'}
              value={content}
              onChangeText={setContent}
              style={styles.input}
              multiline
              maxLength={150}
            />
            <TouchableOpacity
              style={{ backgroundColor: '#3c1f7b', padding: 10, borderRadius: 5 }}
              onPress={handleAdd}
            >
              <Text style={{ textAlign: 'center', color: 'white' }}>Salvar</Text>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
    </Modal>
  );
};

export default PopupCreate;
