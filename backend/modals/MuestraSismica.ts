import DetalleMuestraSismica from "./DetalleMuestraSismica"

class MuestraSismica{
    fechaHoraMuestra: Date;
    detalle: DetalleMuestraSismica[];

    constructor(fechaHoraMuestra: Date, detalle: DetalleMuestraSismica[]){
        this.fechaHoraMuestra = fechaHoraMuestra;
        this.detalle = detalle;
    }

    public getDatos(): String{
        return (this.detalle + this.fechaHoraMuestra.toString())
    }
}

export default MuestraSismica