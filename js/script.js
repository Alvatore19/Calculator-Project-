// Variables
const pantalla = document.querySelector("output");

let operandoAnterior = "";
let operandoActual = "";
let operador = undefined;
let buttons = document.querySelectorAll("button");

// Procesos de los botones
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // 1. Si es un número (0-9 o punto)
        if (button.dataset.number) {
            agregarNumero(button.dataset.number);
        }

        // 2. Si es una operación aritmética (+, -, *, /)
        if (button.dataset.operator) {
            agregarOperador(button.dataset.operator);
        }

        // 3. Si es una operacion algebraica (raiz, potencia, integral, etc.)
        if (button.dataset.action) {
            agregarOperacionAlgebraica(button.dataset.action);
        }

        // 3. Si es una acción especial (igual, limpiar, trigonometría)
        if (button.dataset.action) {
            switch (button.dataset.action) {
                case "equal":
                    calcular();
                    break;
                case "clear":
                    limpiar();
                    break;
                case "sqrt":
                    raiz();
                    break;
                case "pow":
                    potencia();
                    break;
                case "integral":
                    integral();
                    break;
                case "sen":
                    seno();
                    break;
                case "cos":
                    coseno();
                    break;
                case "tan":
                    tangente();
                    break;
                case "close":
                    parentesisCerrado();
                    break;
                case "+":
                    suma();
                    break;
                case "subtract":
                    resta();
                    break;
                case "multiply":
                    multiplicacion();
                    break;
                case "divide":
                    division();
                    break;
                case "ln":
                    logaritmoNatural();
                    break;
                case "log":
                    logaritmo();
                    break;
                case "fx":
                    funcion();
                    break;
                case "pi":
                    pi();
                    break;
                case "open":
                    parentesisAbierto();
                    break;
            }
        }
    });
});

const agregarNumero = (numero) => {
    if (numero === "." && operandoActual.includes(".")) {
        return;
    }

    if (operandoActual === "0" && numero !== ".") {
        operandoActual = numero;
    } else {
        operandoActual = operandoActual + numero;
    }

    actualizarPantalla();
};

const agregarOperador = (operadorPresionado) => {
    if (operandoActual === "") {
        operandoActual = "0";
    }

    operandoAnterior = operandoAnterior + operandoActual;
    operandoActual = operadorPresionado;

    actualizarPantalla();
};

const agregarOperacionAlgebraica = (operacionAlgebraica) => {
    if (operandoActual === "") {
        operandoActual = "0";
    }

    operandoAnterior = operandoAnterior + operandoActual;
    operandoActual = operacionAlgebraica;

    actualizarPantalla();
};

const calcular = (resultado) => {};

const limpiar = () => {
    operandoActual = "0";
    actualizarPantalla();
};

const actualizarPantalla = () => {
    pantalla.textContent = operandoActual;
};
