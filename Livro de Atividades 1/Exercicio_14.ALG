Algoritmo "DOR_DEPRESSÃO_E_SOFRIMENTO_14"

Var

valor: real
desconto: real

Inicio

escreva ("Insira o valor total de sua compra em R$: ")
leia(valor)

desconto <- (valor - (valor / 10))

se(valor > 100) entao
   escreva ("Você tem direito a 10% de desconto, fazendo o valor da sua compra ser de:", desconto)
senao
     escreva ("O valor de sua compra foi o padrão, volte sempre")
fimse

Fimalgoritmo