import MuestraSismica from "./MuestraSismica";
import Estado from "./Estado";

class SerieTemporal{
    condicionAlarma: String;
    fechaHoraInicioRegistroMuestra: Date;
    fechaHoraRegistro: Date;
    frecuenciaMuestreo: Number;
    muestraSismica: MuestraSismica[];
    estado: Estado;

    
    public getdatos() : string {
        return this.condicionAlarma + this.fechaHoraInicioRegistroMuestra.toString() + this.fechaHoraRegistro.toString() + this.frecuenciaMuestreo.toString 
    }
     constructor(condicionAlarma: String, fechaHoraInicioRegistroMuestra: Date, fechaHoraRegistro: Date, frecuenciaMuestreo: Number, muestraSismica: MuestraSismica[]){
        this.condicionAlarma = condicionAlarma;
        this.fechaHoraInicioRegistroMuestra = fechaHoraInicioRegistroMuestra;
        this.fechaHoraRegistro = fechaHoraRegistro;
        this.frecuenciaMuestreo = frecuenciaMuestreo;
        this.muestraSismica = muestraSismica
     }
}

export default SerieTemporal