import Estado from "./Estado";

class CambioEstado{
    fechaHoraInicio: Date;
    fechaHoraFin: Date;
    estado: Estado;

    public esEstadoActual(): Boolean{
        return this.fechaHoraFin == null;
    }

    constructor(fechaHoraInicio: Date, estado: Estado){
        this.fechaHoraInicio = fechaHoraInicio;
        this.estado = estado;
    }

    public setFechaHoraFin(fechaHoraFin : Date) {
        this.fechaHoraFin = fechaHoraFin;
    }
    
}

export default CambioEstado