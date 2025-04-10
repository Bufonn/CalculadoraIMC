import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Calcula a classificação do IMC
const getClassification = (imc) => {
    const value = parseFloat(imc);
    if (value < 18.5) return 'Abaixo do peso';
    if (value < 25) return 'Peso normal';
    if (value < 30) return 'Sobrepeso';
    if (value < 35) return 'Obesidade grau 1';
    if (value < 40) return 'Obesidade grau 2';
    return 'Obesidade grau 3 (URGENTE!)';
};

//Exibe a classificação baseada no IMC
export default function Classification({ imc }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Classificação: {getClassification(imc)}</Text>
        </View>
    );
}

//estilização
const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        color: '#555',
    },

});
