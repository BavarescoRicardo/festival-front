class Evento {

    constructor(descricao: string, codigo: number, local: string, dataInicio: Date, dataFim: Date) {
        this.descricao = descricao;
        this.codigo = codigo;
        this.local = local;
    }

    // Getter Setter 
    public get descricao(): string {
        return this.descricao;
    }

    public set descricao(descricao: string) {
        this.descricao = descricao;
    }

    public get codigo(): number {
        return this.codigo;
    }

    public set codigo(codigo: number) {
        this.codigo = codigo;
    }
    
    public get local(): string {
        return this.local;
    }

    public set local(local: string) {
        this.local = local;
    }    

    public get dataInicio(): Date {
        return this.dataInicio;
    }

    public set dataInicio(dataInicio: Date) {
        this.dataInicio = dataInicio;
    }

    public get dataFim(): Date {
        return this.dataFim;
    }

    public set dataFim(dataFim: Date) {
        this.dataFim = dataFim;
    }    
}
