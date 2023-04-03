const corAgendados = "#55ffd5"
const corTotais = "#1100ff"
const corPendentes = "#ff0a00"
const corEmprestados = "#ff00f1"
const livroShow = document.querySelector("#livroShow")


fetch("dados.json").then((resposta) =>{
 resposta.json().then((dados) =>{
  dados.livros.map((livro) =>{
  
const sectionLivrosUni = document.createElement("section")
sectionLivrosUni.classList.add("livroUni")


const divLivro = document.createElement("div")
divLivro.classList.add("livro")

const divFiltro = document.createElement("div")
divFiltro.classList.add("filtro")

const divInfo = document.createElement("div")
divInfo.classList.add("info")


const paragrafoNomeLivro = document.createElement("p")
paragrafoNomeLivro.innerText = livro.nomeDoLivro

const paragrafoTomboLivro = document.createElement("p")
paragrafoTomboLivro.innerText = livro.tomboDoLivro

const paragrafoNomeAluno = document.createElement("p")
paragrafoNomeAluno.innerText = livro.aluno

const paragrafoTurmaAluno = document.createElement("p")
paragrafoTurmaAluno.innerText = livro.turmaDoAluno

const paragrafoSerieAluno = document.createElement("p")
paragrafoSerieAluno.innerText = livro.serieDoAluno




const button = document.createElement("button")
button.innerText = "receber"


divInfo.append(paragrafoNomeLivro, paragrafoTomboLivro, paragrafoNomeAluno, paragrafoTurmaAluno, paragrafoSerieAluno)
divLivro.append(divFiltro, divInfo)
sectionLivrosUni.append(divLivro, button)

livroShow.appendChild(sectionLivrosUni)
  })
 })
})



