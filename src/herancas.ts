abstract class Conta{

    private readonly numero:number; // readonly: uma vez aribuído um valor à variável, esse valor não poderá ser alteado mais
    private readonly dataConta:string; 
    protected titular:string;
    private saldoConta:number;

    constructor(titular:string)
    {
        this.dataConta = this.dataCriacaoConta();
        this.numero=this.gerarNumeroConta();
        this.titular=titular;
        this.saldoConta = 0;
    };


   protected alterarNomeTitular(nome:string)
    {
        this.titular = nome;
    }

    
    protected dataCriacaoConta():string
    {
        return new Date().toLocaleDateString()
    };

    protected gerarNumeroConta():number
    {
        return Math.floor(Math.random()*10000)+1;
    };

    protected info():void
    {
        console.log(`Conta criada: ${this.dataConta} \nTitular: ${this.titular}\nConta nº: ${this.numero}`)
    };

    public saldo():string
    {
        return `Saldo atual: ${this.saldoConta}\n==================================`;
    };

    protected deposito(valor:number)
    {
        this.saldoConta = this.saldoConta + valor;
        console.log("==================================\nProcessando o depósito...")
    };

    protected saque(valor:number):string
    {
        if(valor > this.saldoConta)
        {
            return "Não é possível realizar a operação de saque. Saldo insulficiente.\n==================================";
        }
        else
        {
            this.saldoConta = this.saldoConta - valor;
            return `Processando saque...\nValor sacado: ${valor}\nSaldo atual: ${this.saldoConta}`;
        }
    };
};

//Início classe ContaPF
class ContaPF extends Conta
{
    private cpf:string;
    private tipo:String = "Tipo Conta: PF";
    constructor(cpf:string, titular:string)
    {
        super(titular);
        this.cpf=cpf;
    };

    public corrigirNomeTitular(nome:string):string
    {
            super.alterarNomeTitular(nome)
            return `==================================\nNome foi alterado com sucesso.\nTitular: ${nome}\n==================================`;
    }

    public infoPF():void
    {
        console.log("=================================")
        console.log("=================================")
        console.log(this.tipo);
        super.info();
        console.log(`CPF.: ${this.cpf}`);
        console.log("=================================")
        console.log("=================================")
    };

    public deposditoPF(montante:number):string
    {
        if(montante > 1000)
        {
            return"==================================\nDepósito cancelado.\nValor de depósito é maior do que o permitido para o tipo de conta\n==================================";
        }
        else
            super.deposito(montante);
            return `O depósito foi processado e logo constará em sua conta.\nValor depositado: ${montante}\n==================================`;
    };

    public saquePF(montante:number):void
    {
        console.log('==================================');
        console.log(super.saque(montante));
        console.log('==================================');
    };
};
//Fim bloco da classe ContaPF

//Início classe ContaPJ
class ContaPJ extends Conta
{
    private cnpj:string;
    private tipo:String = "Tipo Conta..: PJ";
    constructor(cnpj:string, titular:string)
    {
        super(titular);
        this.cnpj=cnpj;

    };

    //método getter apenas para didática do código.
     get infoPJ()  
    {   
        return `=================================\nConta criada: ${this.dataCriacaoConta()}\n${this.tipo}\nTitular.....: ${this.titular}\nConta nº....: ${this.gerarNumeroConta()}\nCNPJ........: ${this.cnpj}\n=================================`;
    };

    public deposditoPJ(montante:number):string
    {
            super.deposito(montante);
            return `O depósito foi processado e logo constará em sua conta.\nValor depositado: ${montante}\n==================================`;
    };

    public saquePJ(montante:number):void
    {
        console.log('==================================');
        console.log(super.saque(montante));
        console.log('==================================');
    };

    public corrigirNomeTitularPJ(nome:string):string
    {
            super.alterarNomeTitular(nome)
            return `==================================\nNome foi alterado com sucesso.\nTitular: ${nome}\n==================================`;
    }
};

const conta1PF=new ContaPF('08754790654',"Thiago Candido Salvador");
const conta2PJ=new ContaPJ('177582/0001-91',"Thiago Candido Salvador-08754790654");

console.log(conta1PF.corrigirNomeTitular('Thiago Candido Salvador'))
conta1PF.infoPF();
console.log(conta1PF.deposditoPF(900));
//console.log(conta1PF.saldo());
conta1PF.saquePF(700);
console.log(conta1PF.saldo());
console.log(conta2PJ.infoPJ)
console.log(conta2PJ.deposditoPJ(900));
console.log(conta2PJ.saldo());

