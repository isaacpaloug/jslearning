class Alumne {
  constructor(nom, llinatges, curs, moduls) {
    this.nom = nom;
    this.llinatges = llinatges;
    this.curs = curs;
    this.moduls = this.llevarRepetits(moduls);
  }
  // afegirModul(newModul){
  // }
  llevarRepetits(moduls) {
    let modulsNoRep = new Set();
    for (let iterator of moduls) {
      modulsNoRep.add(iterator);
    }
    return modulsNoRep;
  }
  get NomComplet() {
    return this.llinatges + this.nom;
  }

  afegirModul(modul){
    this.moduls.add(modul);
  }
  borrarModul(modul) {
    this.moduls.delete(modul);
  }
}
