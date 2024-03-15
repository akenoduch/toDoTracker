import React, { useEffect, useState, FC } from 'react';
import { Modal, View, TouchableOpacity, TextInput, Button, Alert, useColorScheme, Text } from 'react-native';
import { editPopupStyles } from '../../assets/styles/EditPopupStyles';

interface EditPopupProps {
  visible: boolean;
  onClose: () => void;
  onSave: (title: string, content: string) => void;
  currentTitle: string;
  currentContent: string;
}

const EditPopup: FC<EditPopupProps> = ({ visible, onClose, onSave, currentTitle, currentContent }) => {
  const [title, setTitle] = useState(currentTitle);
  const [content, setContent] = useState(currentContent);

  const isDarkMode = useColorScheme() === 'dark';
  const styles = editPopupStyles(isDarkMode ? 'dark' : 'light');

  useEffect(() => {
    setTitle(currentTitle);
    setContent(currentContent);
  }, [currentTitle, currentContent]);

  const handleSave = () => {
    if (!title.trim()) {
        Alert.alert("Título vazio", "Por favor, insira um título para o card.");
        return;
      }
    onSave(title, content);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.modalOverlay} onPress={onClose} activeOpacity={1}>
        <View style={styles.modalContent} onStartShouldSetResponder={() => true}>
        <Text style={styles.modalTitle}>Editar tarefa</Text>
            <TextInput
              placeholder="Título do Card"
              placeholderTextColor={'white'}
              value={title}
              onChangeText={setTitle}
              style={styles.input}
            />
            <TextInput
              placeholder="Conteúdo do Card"
              placeholderTextColor={'white'}
              value={content}
              onChangeText={setContent}
              style={styles.input}
              multiline
            />
            <TouchableOpacity
              style={{ backgroundColor: '#3c1f7b', padding: 10, borderRadius: 5 }}
              onPress={handleSave}
            >
              <Text style={{ textAlign: 'center', color: 'white' }}>Salvar</Text>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
    </Modal>
  );
};

export default EditPopup;