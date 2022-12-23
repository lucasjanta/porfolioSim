const projetos = document.querySelector('#projetoslink');
const github = document.querySelector('.github');
const twitter = document.querySelector('.twitter');
const codePen = document.querySelector('.codePen');

projetos.addEventListener('click', function() {
    window.open('projetos.html', '_self');
  });

  github.addEventListener('click', function() {
    window.open('https://github.com/lucasjanta', '_blank');
  });

  twitter.addEventListener('click', function() {
    window.open('https://twitter.com/lucasjanta', '_blank');
  });

  codePen.addEventListener('click', function() {
    window.open('https://codepen.io/lucasjanta', '_blank');
  });