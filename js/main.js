


let studenti = [
	{ nome: "Wayne Barnett", ruolo: "Founder & CEO", immagine: "./img/wayne-barnett-founder-ceo.jpg" },
	{ nome: "Angela Caroll", ruolo: "Chief Editor", immagine: "./img/angela-caroll-chief-editor.jpg" },
	{ nome: "Walter Gordon", ruolo: "Office Manager", immagine: "./img/walter-gordon-office-manager.jpg" },
	{ nome: "Angela Lopez", ruolo: "Social Media Manager", immagine: "./img/angela-lopez-social-media-manager.jpg" },
	{ nome: "Scott Estrada", ruolo: "Developer", immagine: "./img/scott-estrada-developer.jpg" },
	{ nome: "Barbara Ramos", ruolo: "Graphic Designer", immagine: "./img/barbara-ramos-graphic-designer.jpg" }
];




const ulList = document.getElementById("lista");

for (let i = 0; i < studenti.length; i++) {
    const player = studenti[i];
    console.log(`Nome giocatore: ${player.nome}, Ruolo: ${player.ruolo}`);

    // Creiamo una stringa HTML per rappresentare l'elemento <li> con le informazioni del giocatore
    const li = `<li>Nome giocatore: ${player.nome}, Ruolo: ${player.ruolo}, <img src="${player.immagine}"></li>`;

    // Aggiungiamo la stringa HTML alla proprietà innerHTML dell'elemento <ul>
    ulList.innerHTML += li;
}


 






