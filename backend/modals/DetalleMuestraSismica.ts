import TipoDato from "./TipoDato";

class DetalleMuestraSismica{
    valor: Number
    tipoDato: TipoDato

    constructor(valor: Number, tipoDato: TipoDato){
        this.valor = valor;
        this.tipoDato = tipoDato;
    }

    getDatos(){
        return (this.valor.toString())+(this.tipoDato.getDatos())
    }
}

export default DetalleMuestraSismica 