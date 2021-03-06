import {houseData} from './house.mjs';

let members = houseData.results[0].members;

let defMembers = members.sort(function(a, b) {
  return a.missed_votes - b.missed_votes;
});

let defMembersup = defMembers.slice(-10);

let defmembersUP = defMembersup.sort(function(a,b){
  return b.votes_with_party_pct - a.votes_with_party_pct;
})

let defMembersdown = defMembers.slice(0,10);

//create function to build a table in js 
buildTable1(defmembersUP);
function buildTable1(membersArr) {
  document.getElementById("tbody1").innerHTML = ""; //traemos el elemento con id tbody y dentro le añadimos un texto vacio
  for (var i = 0; i < membersArr.length; i++) { //para cada i menor que array.length
      var row = document.createElement("tr"); //let row crear un elemento tr
      var link = document.createElement("a"); //let link crear un elemento a normalmente es un hipervinculo o algo parecido
      link.textContent = membersArr[i].first_name + " " + (membersArr[i].middle_name || "") + " " + membersArr[i].last_name; //el contenido de text content es el first middle y last name en cada indice i del array
      link.setAttribute("href", membersArr[i].url) //link que es crear un elemento a tiene a su vez un setAttribute que le da un atributo id name role href etc al elemento
      row.insertCell().append(link); //a row que es crear un tr le aplicamos insertCell que crea una celda y con append añadimos link dentro de la celda
      row.insertCell().innerHTML = membersArr[i].missed_votes;
      row.insertCell().innerHTML = membersArr[i].missed_votes_pct;
      document.getElementById("tbody1").append(row) //nos traemos tbody y le añadimos row
  }
}

buildTable2(defMembersdown);
function buildTable2(membersArr) {
  document.getElementById("tbody2").innerHTML = ""; //traemos el elemento con id tbody y dentro le añadimos un texto vacio
  for (var i = 0; i < membersArr.length; i++) { //para cada i menor que array.length
      var row = document.createElement("tr"); //let row crear un elemento tr
      var link = document.createElement("a"); //let link crear un elemento a normalmente es un hipervinculo o algo parecido
      link.textContent = membersArr[i].first_name + " " + (membersArr[i].middle_name || "") + " " + membersArr[i].last_name; //el contenido de text content es el first middle y last name en cada indice i del array
      link.setAttribute("href", membersArr[i].url) //link que es crear un elemento a tiene a su vez un setAttribute que le da un atributo id name role href etc al elemento
      row.insertCell().append(link); //a row que es crear un tr le aplicamos insertCell que crea una celda y con append añadimos link dentro de la celda
      row.insertCell().innerHTML = membersArr[i].missed_votes;
      row.insertCell().innerHTML = membersArr[i].missed_votes_pct;
      document.getElementById("tbody2").append(row) //nos traemos tbody y le añadimos row
  }
}


