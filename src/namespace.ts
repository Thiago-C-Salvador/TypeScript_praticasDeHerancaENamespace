namespace Veiculos
{
    enum Cores {"Preto", "Branco", "Verde", "Vermelho", "Amarelo", "Azul", "Prata"}
    abstract class Carro
    {
        private nome:string;
        private motor:Motores.Motor;
        private cor: string
        constructor(nome:string, motor: Motores.Motor, cor:Cores)
        {
            this.nome = nome;
            this.motor= motor;
            this.cor = Cores[cor];
        }
        public retificadoSim()
        {
            this.motor.retificado = true;
        }

        public naoRetificado()
        {
            this.motor.retificado = false;
        }

        get corCar()
        {
            return this.cor
        }

        get nomeCar()
        {
            return this.nome;
        }

        get retificado()
        {
            return (this.motor.retificado? "Sim" : "Não")
        }
        
        get pontenciaMotorCar()
        {
            return this.motor.potenciaMotor;
        }

        get cilindros ()
        {
            return this.motor.qntCilindros;
        }
    };
    export class CarroEsportivo extends Carro
    {
        constructor(nome:string, motor:Motores.Motor, cor:Cores)
        {
            super(nome, motor, cor)
        }
    }

    export class CarroPopular extends Carro
    {
        constructor(nome:string, cor:Cores)
        {
            super(nome, new Motores.Motor(3,160), cor)
        }
    }
};

namespace Motores
{
    export class Turbo
    {
        private forca:number;
        constructor(forca:number)
        {
            this.forca=forca;
        }

        get forcaTurbo()
        {
            return this.forca;
        }
    }

    export class Motor
    {
        private retifica:boolean=false;
        private cilindros:number;
        private potencia: number;
        constructor(cilindros:number, potencia:number,turbo?:Turbo)
        {   
            this.retifica = false;
            this.cilindros = cilindros;
            this.potencia = potencia + (turbo ? turbo.forcaTurbo : 0)
        }

        set retificado(retificado:boolean)
        {
            this.retifica=retificado;
        }

        get retificado()
        {
            return this.retifica;
        }

        get potenciaMotor()
        {
            return this.potencia;
        }

        get qntCilindros()
        {
            return this.cilindros;
        }

    };
};

const car1 = new Veiculos.CarroEsportivo("Mustang",new Motores.Motor(6, 350, new Motores.Turbo(300)), 0);

const car2 = new Veiculos.CarroPopular("Gol G5", 5);

car2.retificadoSim();


console.log(`Modelo Esportivo:\nNome......: ${car1.nomeCar}\nCor.......: ${car1.corCar}\nRetificado: ${car1.retificado}\nPontência.: ${car1.pontenciaMotorCar}\nCilindros.: ${car1.cilindros}`);
console.log("======================================\n======================================")
console.log(`Modelo Popular:\nNome......: ${car2.nomeCar}\nCor.......: ${car2.corCar}\nRetificado: ${car2.retificado}\nPontência.: ${car2.pontenciaMotorCar}\nCilindros.: ${car2.cilindros}`);
