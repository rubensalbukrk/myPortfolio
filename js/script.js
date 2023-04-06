//ACESSANDO ELEMENTO
const contents = document.querySelectorAll(".contents");
const button = document.querySelectorAll(".button");
const skills = document.getElementById("pagskills");
const projects = document.getElementById("pagprojects");
const about = document.getElementById("pagabout");
const mensagem =  document.querySelector(".mensagemOn");

const showProject = () => {
    mensagem.classList.value = "mensagemOff";
    projects.classList.value = "contents";
    skills.classList.value = "hide";
    about.classList.value = "hide";
}
const showSkills = () => {
    mensagem.classList.value = "mensagemOff";
   skills.classList.value = "contents";
   about.classList.value = "hide";
   projects.classList.value = "hide";
}

const showAbout = () => {
    mensagem.classList.value = "mensagemOff";
    about.classList.value = "contents";
    projects.classList.value = "hide";
    skills.classList.value = "hide";

}

const xClose = () => {
    projects.classList.value = "hide";
    skills.classList.value = "hide";
    about.classList.value = "hide";
    mensagem.classList.value = "mensagemOn";
    
}