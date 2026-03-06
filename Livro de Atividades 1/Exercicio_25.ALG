Algoritmo "Atividade_25"

Var

n, maior, menor, i: inteiro


Inicio


maior <- 0
menor <- 0

para i de 1 ate 10 faca
     escreva("Insira valores a frente: ")
     leia (n)

     se (n > maior) entao
        maior <- (maior * 0) + n
     senao
     se (n < menor) entao
        menor <- (menor * 0) + n
     fimse
     fimse

fimpara

escreval ("O maior número entre os digitados foi:", maior, " e o menor foi:" ,menor)


Fimalgoritmo
