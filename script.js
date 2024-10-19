const bloques = document.querySelectorAll('.Bloques div');
const rightBlock = document.getElementById('right-block');
const navImage = document.getElementById('navImage');

const defaultColor = '#161616';
const nav = document.querySelector('nav');
navImage.classList.add('sleeping');

bloques.forEach((bloque) => {
  const color = getComputedStyle(bloque).backgroundColor;

  bloque.addEventListener('mouseover', () => {
    rightBlock.style.backgroundColor = color;
    rightBlock.style.transform = "scale(1.02)";
    bloqueDerechoImagen.style.width = "15vw";
    nav.style.backgroundColor = '#1D97D4'; 
    navImage.src = 'coralina2.png';
    navImage.classList.remove('sleeping');
    navImage.classList.add('wake');
  });

  bloque.addEventListener('mouseout', () => {
    rightBlock.style.backgroundColor = defaultColor;
    rightBlock.style.transform = "scale(1)";
    bloqueDerechoImagen.style.width = "5vw";
    nav.style.backgroundColor = '#161616';
    navImage.src = 'coralina.png';
    navImage.classList.remove('wake');
    navImage.classList.add('sleeping');
  });
});

const blocks = document.querySelectorAll('.Bloques div');

blocks.forEach((block) => {
  const height = block.clientHeight;
  const width = block.clientWidth;

  block.addEventListener('mousemove', (e) => {
    const xVal = e.layerX;
    const yVal = e.layerY;
    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);


    const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)';
    block.style.transform = string;
  });

  block.addEventListener('mouseout', () => {
    block.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
  });
});

const bloqueDerechoTitulo = document.querySelector('.right-block h2');
const bloqueDerechoImagen = document.querySelector('.right-block img');
const bloqueDerechoDescripcion = document.querySelector('.right-block h3');

const tituloPorDefecto = '<span class="coralia-color">Coralina</span> se encuentra durmiendo...';
const imagenPorDefecto = 'sleep.png';
const descripcionPorDefecto = 'Escoge un bloque del lado izquierdo para despertarla.';

bloqueDerechoTitulo.innerHTML = tituloPorDefecto;

bloques.forEach((bloque) => {
  const titulo = bloque.getAttribute('data-titulo');
  const imagenSrc = bloque.getAttribute('data-imagen');
  const descripcion = bloque.getAttribute('data-descripcion');

  bloque.addEventListener('mouseover', () => {
    if (titulo === 'Coralina') {
      bloqueDerechoTitulo.innerHTML = `<span class="coralia-color">${titulo}</span>`;
    } else {
      bloqueDerechoTitulo.innerText = titulo;
    }
    bloqueDerechoImagen.src = imagenSrc;
    bloqueDerechoDescripcion.innerText = descripcion;
  });

  bloque.addEventListener('mouseout', () => {
    bloqueDerechoTitulo.innerHTML = tituloPorDefecto;
    bloqueDerechoImagen.src = imagenPorDefecto;
    bloqueDerechoDescripcion.innerText = descripcionPorDefecto;
  });
});