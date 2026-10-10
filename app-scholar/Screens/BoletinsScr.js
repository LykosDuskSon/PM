import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const exibirInformacao = () => {
  Alert.alert("APP Scholar", "Desenvolvido para gestão acadêmica mobile.");
};
 
export default function Boletins ({aoNavegar}) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Boletins</Text>

      <TouchableOpacity 
        style={styles.botao}onPress={() => aoNavegar('Home')}>
        <Text style={styles.textoBotao}>Cadastrar Boletim</Text>
      </TouchableOpacity>      

      <TouchableOpacity 
        style={styles.botao}onPress={() => aoNavegar('Home')}>
        <Text style={styles.textoBotao}>Gerenciar Boletins</Text>
      </TouchableOpacity>      

      <TouchableOpacity 
        style={styles.botao}onPress={() => aoNavegar('AreaDosAlunos')}>
        <Text style={styles.textoBotao}> Voltar a Area Anterior </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
    padding: 20,
  },
  
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#696969',
    marginBottom: 15,
  },

  botao: {
    width: '75%',
    backgroundColor: '#343434',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#696969'
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DDDDDD',
  },
});