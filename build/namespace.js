"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Preto"] = 0] = "Preto";
        Cores[Cores["Branco"] = 1] = "Branco";
        Cores[Cores["Verde"] = 2] = "Verde";
        Cores[Cores["Vermelho"] = 3] = "Vermelho";
        Cores[Cores["Amarelo"] = 4] = "Amarelo";
        Cores[Cores["Azul"] = 5] = "Azul";
        Cores[Cores["Prata"] = 6] = "Prata";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        retificadoSim() {
            this.motor.retificado = true;
        }
        naoRetificado() {
            this.motor.retificado = false;
        }
        get corCar() {
            return this.cor;
        }
        get nomeCar() {
            return this.nome;
        }
        get retificado() {
            return (this.motor.retificado ? "Sim" : "Não");
        }
        get pontenciaMotorCar() {
            return this.motor.potenciaMotor;
        }
        get cilindros() {
            return this.motor.qntCilindros;
        }
    }
    ;
    class CarroEsportivo extends Carro {
        constructor(nome, motor, cor) {
            super(nome, motor, cor);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(3, 160), cor);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
;
var Motores;
(function (Motores) {
    class Turbo {
        forca;
        constructor(forca) {
            this.forca = forca;
        }
        get forcaTurbo() {
            return this.forca;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        retifica = false;
        cilindros;
        potencia;
        constructor(cilindros, potencia, turbo) {
            this.retifica = false;
            this.cilindros = cilindros;
            this.potencia = potencia + (turbo ? turbo.forcaTurbo : 0);
        }
        set retificado(retificado) {
            this.retifica = retificado;
        }
        get retificado() {
            return this.retifica;
        }
        get potenciaMotor() {
            return this.potencia;
        }
        get qntCilindros() {
            return this.cilindros;
        }
    }
    Motores.Motor = Motor;
    ;
})(Motores || (Motores = {}));
;
const car1 = new Veiculos.CarroEsportivo("Mustang", new Motores.Motor(6, 350, new Motores.Turbo(300)), 0);
const car2 = new Veiculos.CarroPopular("Gol G5", 5);
car2.retificadoSim();
console.log(`Modelo Esportivo:\nNome......: ${car1.nomeCar}\nCor.......: ${car1.corCar}\nRetificado: ${car1.retificado}\nPontência.: ${car1.pontenciaMotorCar}\nCilindros.: ${car1.cilindros}`);
console.log("======================================\n======================================");
console.log(`Modelo Popular:\nNome......: ${car2.nomeCar}\nCor.......: ${car2.corCar}\nRetificado: ${car2.retificado}\nPontência.: ${car2.pontenciaMotorCar}\nCilindros.: ${car2.cilindros}`);
