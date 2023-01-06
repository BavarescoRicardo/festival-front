class Conta {
    nome: string;
    codigo: number;
    senha: string;

    constructor(nm: string, sm: number, ps: string) {
        this.nome = nm;
        this.codigo = sm;
        this.senha = ps;
    }

    // Getter Setter 
    public get courses() {
        return this.nome;
    }

    public set courses(nome: string) {
        this.nome = nome;
    }
}
