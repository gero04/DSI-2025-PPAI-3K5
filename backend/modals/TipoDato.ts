class TipoDato{
    unidadMedida: String;
    denominacion: String;
    valorUmbral: number;

    constructor(unidadMedida:String, denominacion: String, valorUmbral: number){
        this.denominacion = denominacion;
        this.unidadMedida = unidadMedida;
        this.valorUmbral = valorUmbral
    }

    getDatos(){
        return (this.denominacion.toString()) + (this.unidadMedida.toString()) + (this.valorUmbral.toString)
    }

    esTuDenominacion(denominacion:String){
        return (denominacion == this.denominacion)
    }

    getDenominacion(){
        return this.denominacion
    }
}

export default TipoDato