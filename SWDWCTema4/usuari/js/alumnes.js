class Alumne{
    constructor(nom, llinatges, curs,moduls){
        this.nom = nom;
        this.llinatges = llinatges;
        this.curs = curs;
        this.moduls = moduls;
    };
    afegirModul(newModul){
    }
    get NomComplet(){
        return this.llinatges + this.nom;
    }
}