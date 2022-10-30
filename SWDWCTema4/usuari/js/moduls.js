class Modul {
  constructor(nom, codi, curs) {
    this.nom = nom;
    this.codi = codi;
    this.curs = curs;
    this.toString = function () {
      let missatge =
        "[ Nom = " +
        this.nom +
        " Codi = " +
        this.codi +
        " Curs = " +
        this.curs +
        " ]";
      return missatge;
    };
  }
}
