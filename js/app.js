var p4 = document.getElementById("person4Name");
var p4HW = document.getElementById("person4HomeWorld");
var p14 = document.getElementById("person14Name");
var p14Species = document.getElementById("person14Species");
var filmList = document.getElementById("filmList");

const filmReq = new XMLHttpRequest();
const oReq = new XMLHttpRequest();
const p4HWReq = new XMLHttpRequest();
const p14Req = new XMLHttpRequest();
const p14SpeciesReq = new XMLHttpRequest();

function filmListner() {
  for (let i = 0; i < this.response.results.length; i++) {
    var films = document.createElement("li");
    var planetList = document.createElement("ul");
    films.innerHTML = this.response.results[i].title;
    filmList.appendChild(films);
    films.appendChild(planetList);
    for (let j = 0; j < this.response.results[i].planets.length; j++) {
      let planetLi = document.createElement("li");
      planetList.appendChild(planetLi);
      const planetReq = new XMLHttpRequest();
      planetReq.addEventListener("load", function() {
        planetLi.innerText = planetReq.response.name;
      });
      planetReq.responseType = "json";
      planetReq.open("GET", this.response.results[i].planets[j]);
      planetReq.send();
    }
  }
}

function p14SpeciesListener() {
  p14Species.innerText = this.response.name;
}

function p14Listener() {
  p14.innerText = this.response.name;
}

function HW4() {
  p4HW.innerText = this.response.name;
}
function reqListner() {
  p4.innerText = this.response.name;
}

oReq.addEventListener("load", reqListner);
oReq.responseType = "json";
oReq.open("GET", "https://swapi.co/api/people/4/");
oReq.send();

p4HWReq.addEventListener("load", HW4);
p4HWReq.responseType = "json";
p4HWReq.open("GET", "https://swapi.co/api/planets/1/");
p4HWReq.send();

p14Req.addEventListener("load", p14Listener);
p14Req.responseType = "json";
p14Req.open("GET", "https://swapi.co/api/people/14/");
p14Req.send();

p14SpeciesReq.addEventListener("load", p14SpeciesListener);
p14SpeciesReq.responseType = "json";
p14SpeciesReq.open("GET", "https://swapi.co/api/species/1/");
p14SpeciesReq.send();

filmReq.addEventListener("load", filmListner);
filmReq.responseType = "json";
filmReq.open("GET", "https://swapi.co/api/films/");
filmReq.send();