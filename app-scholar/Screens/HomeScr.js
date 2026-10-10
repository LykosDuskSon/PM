import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, Alert, View, TextInput, ScrollView } from 'react-native';

const exibirMensagem = () => {
  Alert.alert("APP Scholar", "Botão pressionado com sucesso!");
};

export default function Home ({aoNavegar}) {

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.titulo}>Easy Scholar</Text>
      <Text style={styles.subtitulo}>Sistema Academico Mobile</Text>
      
      <TouchableOpacity 
        style={styles.botao} onPress={() => aoNavegar('AreaDosAlunos')}>
        <Text style={styles.textoBotao}>Area dos Alunos</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.botao} onPress={() => aoNavegar('Professores')}>
        <Text style={styles.textoBotao}>Professores</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.botao} onPress={() => aoNavegar('Coordenadores')}>
        <Text style={styles.textoBotao}>Coordenadores</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.botao} onPress={() => aoNavegar('Outros')}>
        <Text style={styles.textoBotao}>Outros</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.botao} onPress={() => aoNavegar('Sobre')}>
        <Text style={styles.textoBotao}>Sobre</Text>
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
  },

  logo: {
    width: 180,
    height: 200,
    marginBottom: 20,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#696969',
  },

  subtitulo: {
    fontSize: 18,
    marginBottom: 40,
    color: '#aBaBaB',
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