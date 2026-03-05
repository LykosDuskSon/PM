Algoritmo "DOR_DEPRESSÃO_E_SOFRIMENTO_11"

Var

nota1: real
nota2: real
nota3: real
media: real

Inicio

escreva ("Insira a 1° nota do aluno: ")
leia (nota1)
escreva ("Insira a 2° nota do aluno: ")
leia (nota2)
escreva ("Insira a 3° nota do aluno: ")
leia (nota3)

media <- (nota1 + nota2 + nota3) / 3

se (media >= 7) então
   escreva ("Aprovado")
senao
     escreva ("Reprovado")
fimse

Fimalgoritmo