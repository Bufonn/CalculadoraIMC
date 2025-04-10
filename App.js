import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';
import Result from './src/components/Result';
import Classification from './src/components/Classification';
import IdealWeight from './src/components/IdealWeight';

export default function App() {
  const [imc, setImc] = useState(null);//Var para IMC
  const [altura, setAltura] = useState('');//Var para Altura

  //eecebe o IMC e a altura inserida e atualiza conforme a utilização do app
  const InfoCalculo = (imcValue, alturaValue) => {
    setImc(imcValue);
    setAltura(alturaValue);
  };

  return (
    //SafeAreaView serve para não deixar a barrinha com as informações como Horas ou bateria ocultas
    //Permite o Scroll
    //onCalculate é responsável por pegar os dados do usuário e calcular o IMC
    <SafeAreaView style={styles.container}> 

      <ScrollView contentContainerStyle={styles.content}>

        <Title title="Calculadora de IMC" />
        <FormIMC onCalculate={InfoCalculo} />

        {imc && (
          //Não consegui comentar ali dentro, mas o Result só exibe o valor do IMC
          //Classification exibe a classificação do IMC De acordo com a Tabela
          //e o IdealWeight Calcula e exibe o peso idal mínimo e máximo com base na altura
          <View>
            <Result imc={imc} />
            <Classification imc={imc} />
            <IdealWeight altura={parseFloat(altura)} />
          </View>
        )}

      </ScrollView>

    </SafeAreaView>
  );
}


//Estilização
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 20,
  },

});
