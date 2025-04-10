import React from 'react';
import { Text, StyleSheet } from 'react-native';

//Exibe o título do aplicativo
export default function Title({ title }) {
  return <Text style={styles.title}>{title}</Text>;
}

//estilização
const styles = StyleSheet.create({

  title: {
    fontSize: 28,
    ontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },

});
