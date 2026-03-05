Algoritmo "DOR_DEPRESSÃO_E_SOFRIMENTO_24"

Var

n,c,s: inteiro


Inicio

escreva ("Insira um numero a ser somado (quando quizer finalizar insira 0):")
leia (n)

enquanto n <> 0 faça
         c <- c + 1
         s <- s + n
         escreva("Digite outro número: ")
         leia(n)
fimenquanto

escreva ("A quantidade de números digitados foi:", c)
escreva ("soma total:", s)

Fimalgoritmo