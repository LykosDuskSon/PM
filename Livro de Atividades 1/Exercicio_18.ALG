Algoritmo "DOR_DEPRESSÃO_E_SOFRIMENTO_18"

Var

salario: real
parcela: real

Inicio

escreva ("Insira o seu salario: ")
leia (salario)
escreva ("Insira o valor da parcela: ")
leia (parcela)

se (parcela  <= salario * 0.3) entao
   escreva ("Aprovado")
senao
     escreva ("Negado")
fimse

Fimalgoritmo