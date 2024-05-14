const infos = {
  nome: "Andreina Lima",
  cargo: "Desenvolvedora Front-End",
  imagem: "https://github.com/AndreinaLima.png",

  github: "https://github.com/AndreinaLima",
  email: "mailto:andreinaadelima14@gmail.com",
  linkedin: "https://www.linkedin.com/in/andreinalima/",
  minibio:
    "Tenho 24 anos, estudo Ciência da Computação na UFCG e me encanto com o aprendizado contínuo e a rotina empolgante! 👾 Estou sempre antenada na área, em busca de novas ideias e soluções. ",
}

document.getElementById('imagem').src = infos.imagem;
document.getElementById("nome").innerHTML = infos.nome;
document.getElementById("cargo").innerHTML = infos.cargo;
document.getElementById("minibio").innerHTML = infos.minibio;

document.getElementById("github").href = infos.github;
document.getElementById("email").href = infos.email;
document.getElementById("linkedin").href = infos.linkedin;