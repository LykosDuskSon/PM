import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';

const exibirInformacao = () => {
  Alert.alert("APP Scholar", "Desenvolvido para gestão acadêmica mobile.");
};

export default function CadastrarAlunos ({aoNavegar}) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Cadastro de Aluno</Text>

      <View style={styles.tabela}>
        
        <TextInput
          style={styles.input}
          placeholder = "Nome:"
          placeholderTextColor = "DDDDDD"
        />

        <View style={styles.linhaTabela} />

        <TextInput
          style={styles.input}
          placeholder = "Telefone:"
          placeholderTextColor = "DDDDDD"
        />
        
        <View style={styles.linhaTabela} />

        <TextInput
          style={styles.input}
          placeholder = "CPF:"
          placeholderTextColor = "DDDDDD"
        />
        
        <View style={styles.linhaTabela} />

        <TextInput
          style={styles.input}
          placeholder = "Data de Nascimento:"
          placeholderTextColor = "DDDDDD"
        />

        <View style={styles.linhaTabela} />
        
        <TextInput
          style={styles.input}
          placeholder = "Idade:"
          placeholderTextColor = "DDDDDD"
        />

        <View style={styles.linhaTabela} />




      </View>

      <View style={styles.containerBotoes}>
        <TouchableOpacity 
          style={styles.botaoCadastrar}onPress={() => aoNavegar('Alunos')}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.botao}onPress={() => aoNavegar('Alunos')}>
          <Text style={styles.textoBotao}>Retornar</Text>

        </TouchableOpacity>

       </View>  
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

  tabela: {
    width: '93%',
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#211B15',
    marginBottom: 20,
  },

  subtitulo: {
    fontSize: 15,
    color: '#DDDDDD',
    textAlign: 'justify',
  },

  input: {
    fontSize: 15,
    color: '#404A4C',
    backgroundColor: '#EBEBEB',
    borderRadius: 3,
    borderColor: '#404A4C',
    borderWidth: 1,
    padding: 7,
  },

  linhaTabela: {
    borderBottomWidth: 1,
    borderBottomColor: '#696969',
    marginVertical: 10,
  },

  botaoCadastrar: {
    flex: 1,
    backgroundColor: '#404A4C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#343434',
  },

  botao: {
    flex: 1,
    backgroundColor: '#696969',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#343434',
  },

  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '93%',
    gap: 10,
  },


  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DDDDDD',
  },
});