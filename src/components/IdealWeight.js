import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//calcula os pesos ideais com base na altura
const calculateIdealWeight = (altura) => {
    const min = 18.5 * (altura * altura);
    const max = 24.9 * (altura * altura);
    return { min: min.toFixed(2), max: max.toFixed(2) };//toFixed é uma função que pode definiar quantas casas decimais o número vai ter
};

//exibe o peso ideal mínimo e máximo
export default function IdealWeight({ altura }) {
    if (!altura || isNaN(altura)) return null;//isNaN é outra função que verifica se o valor de uma var não é um número
                                                //Se o Valor da var não puder ser convertido em um número, ele retorna True
                                                    //Caso contrário, retornar False

    //executa o cálculo e armazena os resultados
    const { min, max } = calculateIdealWeight(altura);

    //OutPuts(Exibe os valores)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Peso Ideal Mínimo: {min} kg</Text>
            <Text style={styles.text}>Peso Ideal Máximo: {max} kg</Text>
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
        fontSize: 16,
        color: '#666',
    },

});
