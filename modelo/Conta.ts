class Conta {

    constructor(nome: string, codigo: number, pass: string) {
        this.nome = nome;
        this.codigo = codigo;
        this.senha = pass;
    }

    // Getter Setter 
    public get nome(): string {
        return this.nome;
    }

    public set nome(nome: string) {
        this.nome = nome;
    }

    public get codigo(): number {
        return this.codigo;
    }

    public set codigo(codigo: number) {
        this.codigo = codigo;
    }
    
    public get senha(): string {
        return this.senha;
    }

    public set senha(senha: string) {
        this.senha = senha;
    }    
}
