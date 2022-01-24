const DO4 = new Audio("assets/sounds/DO4.mp3");
const REb4 = new Audio("assets/sounds/REb4.mp3");
const RE4 = new Audio("assets/sounds/RE4.mp3");
const MIb4 = new Audio("assets/sounds/MIb4.mp3");
const MI4 = new Audio("assets/sounds/MI4.mp3");
const FA4 = new Audio("assets/sounds/FA4.mp3");
const SOLb4 = new Audio("assets/sounds/SOLb4.mp3");
const SOL4 = new Audio("assets/sounds/SOL4.mp3");
const LAb4 = new Audio("assets/sounds/LAb4.mp3");
const LA4 = new Audio("assets/sounds/LA4.mp3");
const SIb4 = new Audio("assets/sounds/SIb4.mp3");
const SI4 = new Audio("assets/sounds/SI4.mp3");
const DO5 = new Audio("assets/sounds/DO5.mp3");
const REb5 = new Audio("assets/sounds/REb5.mp3");
const RE5 = new Audio("assets/sounds/RE5.mp3");
const MIb5 = new Audio("assets/sounds/MIb5.mp3");
const MI5 = new Audio("assets/sounds/MI5.mp3");

const reproducirNota = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0), 2000);
};

const tocarTecla = (idTecla, nota) => {
  const tecla = document.querySelector(idTecla);
  reproducirNota(nota);
  tecla.classList.add("active");
  setTimeout(() => tecla.classList.remove("active"), 100);
};

const teclas = [
    { id: ".DO4", nota: DO4, key: 81 },
    { id: ".REb4", nota: REb4, key: 50 },
    { id: ".RE4", nota: RE4, key: 87 },
    { id: ".MIb4", nota: MIb4, key: 51 },
    { id: ".MI4", nota: MI4, key: 69 },
    { id: ".FA4", nota: FA4, key: 82 },
    { id: ".SOLb4", nota: SOLb4, key: 53 },
    { id: ".SOL4", nota: SOL4, key: 84 },
    { id: ".LAb4", nota: LAb4, key: 54 },
    { id: ".LA4", nota: LA4, key: 89 },
    { id: ".SIb4", nota: SIb4, key: 55 },
    { id: ".SI4", nota: SI4, key: 85 },
    { id: ".DO5", nota: DO5, key: 73 },
    { id: ".REb5", nota: REb5, key: 57 },
    { id: ".RE5", nota: RE5, key: 79 },
    { id: ".MIb5", nota: MIb5, key: 48 },
    { id: ".MI5", nota: MI5, key: 80 },
            
];

teclas.forEach(({ id, nota }) => {
    const tecla = document.querySelector(id);
    tecla.addEventListener("click", () => tocarTecla(id, nota));
});

window.addEventListener("keydown", ({ keyCode }) => {
  const teclaPresionada = teclas.filter(({ key }) => key === keyCode);
  if (teclaPresionada[0]) {
    const { id, nota } = teclaPresionada[0];
    tocarTecla(id, nota);
  }
});

