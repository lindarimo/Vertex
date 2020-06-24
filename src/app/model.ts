export class Specialista {
    public id: string;
    public area: string;
    public visita: string;
    public servizio: string;
    public nome: string;
    public cognome: string;
    public specializzazione: string;
    public ruolo: string;
    public cv: string;
}

export class Servizio {
    public id: string;
    public servizio: string;
    public dettaglio: string[];
}
