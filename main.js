var valor = location.href.split("?")
var tam = valor.length-1
var arquivo = valor[0].split("/")[valor[0].split("/").length-1]

console.log(valor)

if (location.href == "PerguntasRespostas") {
    window.href="PerguntasRespostas?"
}

if (valor[tam] == "Resposta01" && arquivo == "perguntasrespostas-e5c00.web.app") {
    window.location.href = "templates/pergunta02.html?"
} else if (valor[tam] == "Resposta02" && arquivo == "pergunta02.html") {
    window.location.href = "pergunta03.html?"
} else if (valor[tam] == "Resposta03" && arquivo == "pergunta03.html") {
    window.location.href = "pergunta04.html"
}