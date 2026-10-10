import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const exibirInformacao = () => {
  Alert.alert("APP Scholar", "Desenvolvido para gestão acadêmica mobile.");
};

export default function Sobre ({aoNavegar}) {
  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Sobre o App</Text>

      <View style={styles.tabela}>
        <Text style={styles.subtitulo}>
          O APP Easy Scholar Trata-se de um aplicativo de gestão escolar desenvolvido para centralizar, organizar e armazenar informações essenciais sobre alunos, responsáveis e professores. A ferramenta otimiza a rotina acadêmica ao facilitar o controle de frequência, a organização de turmas, disciplinas e horários, além do agendamento de atividades e avaliações.
        </Text>

        <View style={styles.linhaTabela} />

        <Text style={styles.subtitulo}>
          O sistema também permite acompanhar o histórico escolar de ex-alunos e consultar notas bimestrais, pareceres de professores e coordenadores, bem como o status de aprovação ou reprovação. Adicionalmente, garante acesso rápido e seguro aos dados cadastrais e de contato (como telefone, e-mail, CPF, idade e data de nascimento) para suporte operacional ou situações de emergência.
        </Text>
      </View>


      <TouchableOpacity 
        style={styles.botao}onPress={() => aoNavegar('Home')}>
        <Text style={styles.textoBotao}>Voltar a Homepage</Text>
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
  tabela: {
    width: '93%',
    backgroundColor: '#404A4C',
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
  linhaTabela: {
    borderBottomWidth: 1,
    borderBottomColor: '#696969',
    marginVertical: 10,
  },
  botao: {
    width: '80%',
    backgroundColor: '#343434',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#696969',
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DDDDDD',
  },
});