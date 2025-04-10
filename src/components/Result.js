import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Exibe o valor do IMC calculado
export default function Result({ imc }) {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>IMC: {imc}</Text>
    </View>
  );
}


//estilização
const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    marginVertical: 20,
  },

  result: {
    fontSize: 22,
    fontWeight: '600',
    color: '#444',
  },

});
