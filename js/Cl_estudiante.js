export default class Cl_estudiante{
    constructor(cedula, sexo, notaP1, notaP2, notaP3){
        this.cedula = cedula ;
        this.sexo = sexo ;
        this.notaP1 = notaP1;
        this.notaP2 = notaP2;
        this.notaP3 = notaP3
    }
    set cedula(c){
        this._cedula = c;
    }
    get cedula(){
        return this._cedula;
    }
    set sexo(s){
        this._sexo = s;
    }
    get sexo(){
        return this._sexo;
    }
    set notaP1(n){
        this._notaP1 = +n;
    }
    get notaP1(){
        return this._notaP1;
    }
    set notaP2(n){
        this._notaP2 = +n;
    }
    get notaP2(){
        return this._notaP2;
    }
    set notaP3(n){
        this._notaP3 = +n;
    }
    get notaP3(){
        return this._notaP3;
    }
    notaTotal(){
        return this.notaP1+this.notaP2+this.notaP3;
    }
}