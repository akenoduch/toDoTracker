import React, { FC } from 'react';
import { Text, useColorScheme, TouchableOpacity, Image, View } from 'react-native';
import { cardStyles } from '../../assets/styles/cardStyle';
import { textVariants } from '../utils/textVariants';
import CustomCheckbox from './CustomCheckbox';

interface CardProps {
  cardId: string;
  title: string;
  content: string;
  isCompleted: boolean;
  onDelete: () => void;
  onEdit: () => void;
  onCheckboxChange: (cardId: string, isCompleted: boolean) => void; 
}

const Card: FC<CardProps> = ({ cardId, title, content, isCompleted, onDelete, onEdit, onCheckboxChange }) => {
    const scheme = useColorScheme();
    const theme = scheme !== 'dark' ? 'light' : 'dark';
    const styles = cardStyles(theme);
    const textStyles = textVariants(theme);

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                <Image source={require('../../assets/icons/trash.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onEdit} style={styles.editButton}>
                <Image source={require('../../assets/icons/edit.png')} style={styles.icon} />
            </TouchableOpacity>
            <View style={styles.checkbox}>
            <CustomCheckbox
                value={isCompleted}
                onValueChange={() => onCheckboxChange(cardId, !isCompleted)}
            />
            </View>
            <Text style={[styles.title, textStyles.cardTitle]}>{title}</Text>
            <Text style={[styles.content, textStyles.cardContent]}>{content}</Text>
        </View>
    );
};

export default Card;
