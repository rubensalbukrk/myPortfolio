
//ACESSANDO ELEMENTOS DOM
const contents = document.querySelectorAll(".contents");
const button = document.querySelectorAll(".button");
const skills = document.getElementById("pagskills");
const projects = document.getElementById("pagprojects");
const contato = document.getElementById("pagcontato");
const mensagem =  document.querySelector(".mensagemOn");
const texto = document.querySelector(".texto");
//**EMAIL */

//CONSUMIR API FETCH
const url = "https://jsonplaceholder.typicode.com/posts"
const loadingElement = document.querySelector("#loading")
const posts = document.querySelector("#posts-container")


function loadingContent(){
    loadingElement.id = "aaa"
}
loadingContent()

const showProject = () => {
    mensagem.classList.value = "mensagemOff";
    projects.classList.value = "contents";
    skills.classList.value = "hide";
    contato.classList.value = "hide";
}
const showSkills = () => {
    mensagem.classList.value = "mensagemOff";
   skills.classList.value = "contents";
   contato.classList.value = "hide";
   projects.classList.value = "hide";
}

const showAbout = () => {
    mensagem.classList.value = "mensagemOff";
    contato.classList.value = "contents";
    projects.classList.value = "hide";
    skills.classList.value = "hide";

}

const xClose = () => {
    projects.classList.value = "hide";
    skills.classList.value = "hide";
    contato.classList.value = "hide";
    mensagem.classList.value = "mensagemOn";
    
}