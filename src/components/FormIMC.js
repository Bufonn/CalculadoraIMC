import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

//entrada de peso e altura e cálculo do IMC
export default function FormIMC({ onCalculate }) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const calcularIMC = () => {
    const pesoNumero = parseFloat(peso);
    const alturaNumero = parseFloat(altura);

    //Verificação (Se é número e maior que zero)
    if (!pesoNumero || !alturaNumero || pesoNumero <= 0 || alturaNumero <= 0) {
      Alert.alert('Erro', 'Insira valores numéricos válidos para peso e altura.');
      return;
    }
     //Calcula o IMC
    const imcCalculated = (pesoNumero / (alturaNumero * alturaNumero)).toFixed(2);//toFixed é uma função que pode definiar quantas casas decimais o número vai ter

     //Chama o onCalculate para atualizar o componente App, passando o IMC e a altura
    onCalculate(imcCalculated, altura);
  };

  return (
    
    //container do Formulário
    <View style={styles.form}>
      <Text style={styles.label}> Peso (kg):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 70"
        keyboardType="numeric"//Teclado Númerico
        value={peso}
        onChangeText={setPeso}//Atualiza o peso
      />
      <Text style={styles.label}> Altura (m):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 1.75"
        keyboardType="numeric" //Teclado Númerico
        value={altura}
        onChangeText={setAltura}//Atualiza a altura
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
    </View>
  );
}


//estilização
const styles = StyleSheet.create({

  form: {
    marginBottom: 20,
  },

  label: {
    fontSize: 16,
    marginVertical: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },

});
