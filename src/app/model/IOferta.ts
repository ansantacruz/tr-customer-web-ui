export interface IOferta {
    autor: IAutor;
    ofertaRealizada: IOfertaRealizada;
  }

  interface IOfertaRealizada {
    ofertaTodo: string;
    valorOferta: string;
    negociable: string;
    detalle: IDetalle[];
  }

  interface IDetalle {
    nombreRepuesto: string;
    marcaRepuesto: string;
    tipoRepuesto: string;
    motocicleta: IMotocicleta;
    valorUnitario: string;
    valorTotal: string;
    cantidad: number;
  }

  interface IMotocicleta {
    nombreMotocicleta: string;
    marcaMotocicleta: string;
    modeloMotocicleta: string;
    tipoMotocicleta: string;
  }

  interface IAutor {
    nombre: string;
    identificacion: string;
    calificacion: number;
    direccion: string;
    avatar: string;
  }