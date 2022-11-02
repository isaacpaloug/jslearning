function persona(nom, llinatge, edat) {
  this.nom = nom;
  this.llinatge = llinatge;
  this.edat = edat;
  this.tornaJson = function(){
    let missatge = `{"nom":"${this.nom},"llinatge":"${this.llinatge}","edat":${this.edat}}`;
    return missatge;
  }
}

function convertJSON(objecte) {
    let json = JSON.stringify(objecte);
    return json;
}