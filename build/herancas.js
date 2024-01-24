"use strict";
class Conta {
    numero;
    dataConta;
    titular;
    saldoConta;
    constructor(titular) {
        this.dataConta = this.dataCriacaoConta();
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    ;
    alterarNomeTitular(nome) {
        this.titular = nome;
    }
    dataCriacaoConta() {
        return new Date().toLocaleDateString();
    }
    ;
    gerarNumeroConta() {
        return Math.floor(Math.random() * 10000) + 1;
    }
    ;
    info() {
        console.log(`Conta criada: ${this.dataConta} \nTitular: ${this.titular}\nConta nº: ${this.numero}`);
    }
    ;
    saldo() {
        return `Saldo atual: ${this.saldoConta}\n==================================`;
    }
    ;
    deposito(valor) {
        this.saldoConta = this.saldoConta + valor;
        console.log("==================================\nProcessando o depósito...");
    }
    ;
    saque(valor) {
        if (valor > this.saldoConta) {
            return "Não é possível realizar a operação de saque. Saldo insulficiente.\n==================================";
        }
        else {
            this.saldoConta = this.saldoConta - valor;
            return `Processando saque...\nValor sacado: ${valor}\nSaldo atual: ${this.saldoConta}`;
        }
    }
    ;
}
;
class ContaPF extends Conta {
    cpf;
    tipo = "Tipo Conta: PF";
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    ;
    corrigirNomeTitular(nome) {
        super.alterarNomeTitular(nome);
        return `==================================\nNome foi alterado com sucesso.\nTitular: ${nome}\n==================================`;
    }
    infoPF() {
        console.log("=================================");
        console.log("=================================");
        console.log(this.tipo);
        super.info();
        console.log(`CPF.: ${this.cpf}`);
        console.log("=================================");
        console.log("=================================");
    }
    ;
    deposditoPF(montante) {
        if (montante > 1000) {
            return "==================================\nDepósito cancelado.\nValor de depósito é maior do que o permitido para o tipo de conta\n==================================";
        }
        else
            super.deposito(montante);
        return `O depósito foi processado e logo constará em sua conta.\nValor depositado: ${montante}\n==================================`;
    }
    ;
    saquePF(montante) {
        console.log('==================================');
        console.log(super.saque(montante));
        console.log('==================================');
    }
    ;
}
;
class ContaPJ extends Conta {
    cnpj;
    tipo = "Tipo Conta..: PJ";
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    ;
    get infoPJ() {
        return `=================================\nConta criada: ${this.dataCriacaoConta()}\n${this.tipo}\nTitular.....: ${this.titular}\nConta nº....: ${this.gerarNumeroConta()}\nCNPJ........: ${this.cnpj}\n=================================`;
    }
    ;
    deposditoPJ(montante) {
        super.deposito(montante);
        return `O depósito foi processado e logo constará em sua conta.\nValor depositado: ${montante}\n==================================`;
    }
    ;
    saquePJ(montante) {
        console.log('==================================');
        console.log(super.saque(montante));
        console.log('==================================');
    }
    ;
    corrigirNomeTitularPJ(nome) {
        super.alterarNomeTitular(nome);
        return `==================================\nNome foi alterado com sucesso.\nTitular: ${nome}\n==================================`;
    }
}
;
const conta1PF = new ContaPF('08754790654', "Thiago Candido Salvador");
const conta2PJ = new ContaPJ('177582/0001-91', "Thiago Candido Salvador-08754790654");
console.log(conta1PF.corrigirNomeTitular('Thiago Candido Salvador'));
conta1PF.infoPF();
console.log(conta1PF.deposditoPF(900));
conta1PF.saquePF(700);
console.log(conta1PF.saldo());
console.log(conta2PJ.infoPJ);
console.log(conta2PJ.deposditoPJ(900));
console.log(conta2PJ.saldo());
