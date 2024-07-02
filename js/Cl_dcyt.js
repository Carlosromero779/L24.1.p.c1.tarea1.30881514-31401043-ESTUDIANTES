export default class Cl_dcyt{
    constructor(){
        this.mayorNota = 0;
        this.contEstudiFemeAprobada = 0;
        this.acumNotas = 0;
        this.contEstudi = 0;
    }
    procesarEstudiante(estudi){
        if(estudi.notaTotal() > this.mayorNota)
            this.mayorNota = estudi.notaTotal();

        if(estudi.sexo=="F" && estudi.notaTotal()>= 48)
            this.contEstudiFemeAprobada++;
       
        this.acumNotas+= estudi.notaTotal();
        this.contEstudi++;

    }
    devolverMayorNota(){
        return this.mayorNota;
    }
    devolverEstudiFemeniApro(){
        return this.contEstudiFemeAprobada;
    }
    devolverPromedioNotas(){
        return this.acumNotas/this.contEstudi;
    }
}