class contaBancaria {
    constructor(agencia, numero, tipo,) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "Saldo insuficiente."
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero,);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }
}   

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero, cartaoDebito) {
        super(agencia, numero);
        this.tipo = "Poupança";
        this._cartaoDebito = cartaoDebito;
    }

    get cartaoDebito() {
        return this._cartaoDebito;
    }

    set cartaoDebito(valor) {
        this._cartaoDebito = valor;
    }
} 

class contaUniversitaria extends contaBancaria   {
    constructor(agencia, numero, cartaoDebito) {
        super(agencia, numero);
        this.tipo = "Universitaria";
        this._cartaoDebito = cartaoDebito;
    }

    get cartaoDebito() {

        return this._cartaoDebito;
    }

    set cartaoDebito(valor) {
        this._cartaoDebito = valor;
    }
    sacar(valor) {
        if (valor > 500) {
            return "Seu limite de saque é de R$ 500,00."
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}  

