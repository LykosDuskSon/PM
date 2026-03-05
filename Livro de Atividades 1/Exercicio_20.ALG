Algoritmo "DOR_DEPRESSÃO_E_SOFRIMENTO_20"

Var

peso: real
altura: real
imc: real

Inicio

escreva ("Insira seu peso: ")
leia (peso)
escreva ("Insira sua altura: ")
leia (altura)

imc <- peso / (altura ^ 2)

escreval ("O seu IMC é de: ", imc)

se (imc < 18.5) entao
   escreva ("na tabela de IMC você é classificado como baixo peso")
senao
se (imc < 24.9) entao
   escreva ("na tabela de IMC você é classificado como normal")
senao
se (imc < 29.9) entao
   escreva ("na tabela de IMC você é classificado como pré Obeso")
senao
se (imc < 34.9) entao
   escreva ("na tabela de IMC você é classificado como obeso I")
senao
se (imc < 39,9) entao
   escreva ("na tabela de IMC você é classificado como obeso II")
senao
se (imc > 40.0) entao
   escreva ("na tabela de IMC você é classificado como obeso III")
   
fimse
fimse
fimse
fimse
fimse
fimse

Fimalgoritmo