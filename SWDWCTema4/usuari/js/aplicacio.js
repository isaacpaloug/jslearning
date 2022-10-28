function aplicacio(nom, tipus, descripcio, preu) {
  this.nom = nom;
  this.tipus = tipus;
  this.descripcio = descripcio;
  this.preu = preu;
  this.toString = function () {
    let missatge =
      "[ Nom = " +
      this.nom +
      " Tipus = " +
      this.tipus +
      " Descripcio = " +
      this.descripcio +
      " Preu = " +
      this.preu +
      " ]";
    return missatge;
  };
}
aplicacio.prototype.getAplicacioCompleta = function () {
  let missatge =
    "[ Nom = " +
    this.nom +
    " Tipus = " +
    this.tipus +
    " Descripcio = " +
    this.descripcio +
    " Preu = " +
    this.preu +
    " ]";
  return missatge;
};
