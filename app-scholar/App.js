import React, { useState } from 'react';
import Home from './Screens/HomeScr';
import Sobre from './Screens/SobreScr';
import Outros from './Screens/OutrosScr';
import AreaDosAlunos from './Screens/AreaDosAlunosScr'
import Alunos from './Screens/AlunosScr'
import Boletins from './Screens/BoletinsScr'
import Matriculas from './Screens/MatriculasScr'
import Responsaveis from './Screens/ResponsaveisScr'
import Professores from './Screens/ProfessoresScr'
import Coordenadores from './Screens/CoordenadoresScr'
import Avaliacoes from './Screens/AvaliacoesScr'
import Cursos from './Screens/CursosScr'
import Diciplinas from './Screens/DiciplinasScr'
import Turmas from './Screens/TurmasScr'
import CadastrarAlunos from './Screens/CadAlunoScr';



export default function App() {
 
  const [telaAtual, setTelaAtual] = useState('Home');


  const navegarPara = (nomeTela) => {
    setTelaAtual(nomeTela);
  };

  if (telaAtual === 'Outros') {
    return <Outros aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'Sobre') {
    return <Sobre aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'AreaDosAlunos') {
    return <AreaDosAlunos aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'Alunos') {
    return <Alunos aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'Boletins') {
    return <Boletins aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'Matriculas') {
    return <Matriculas aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'Responsaveis') {
    return <Responsaveis aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'Professores') {
    return <Professores aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'Coordenadores') {
    return <Coordenadores aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'Avaliacoes') {
    return <Avaliacoes aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'Cursos') {
    return <Cursos aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'Diciplinas') {
    return <Diciplinas aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'Turmas') {
    return <Turmas aoNavegar={navegarPara} />;
  }

  if (telaAtual === 'CadastrarAlunos') {
    return <CadastrarAlunos aoNavegar={navegarPara} />;
  }


  return <Home aoNavegar={navegarPara} />;
}