Algoritmo "DOR_DEPRESSÃO_E_SOFRIMENTO_9"

Var

n: inteiro
ip: inteiro

Inicio

escreva ("Digite o número que quer saber se é impar ou par: ")
leia (n)

ip <- n mod 2


se (ip = 0) entao
   escreva ("Este número é par")
senao (ip <> 0) entao
      escreva ("Este número é impar")

fimse

Fimalgoritmo