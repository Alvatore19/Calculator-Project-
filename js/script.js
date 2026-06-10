// Variables
let expresion = "";
const pantalla = document.querySelector("output");
let buttons = document.querySelectorAll("button");

// Procesos de los botones
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // 1. Si es un número (0-9 o punto)
        if (button.dataset.number) {
            agregarNumero(button.dataset.number);
        }

        // 2. Si es una operación aritmética (+, -, *, /)
        else if (button.dataset.operator) {
            agregarOperador(button.dataset.operator);
        }

        // 3. Si es una operacion algebraica (raiz, potencia, integral, etc.)
        else if (button.dataset.action) {
            const accion = button.dataset.action;

            switch (accion) {
                // --- Acciones de Ejecución ---
                case "=":
                    calcular();
                    break;
                case "Del":
                    limpiar();
                    break;
                case "C":
                    limpiarTodo();
                    break;

                // --- Acciones que se agregan a la pantalla ---
                case "sqrt":
                case "^":
                case "π":
                case "log":
                case "ln":
                case "(":
                case ")":
                case "∫":
                case "sen":
                case "cos":
                case "tan":
                    agregarOperacionAlgebraica(accion);
                    break;
            }
        }
    });
});

// Procesos 
const calcular = (resultado) => {
    
};

const agregarNumero = (numero) => {
    let operadores = expresion.split(/[\+\-\*\/\^\(\)]/);
    let ultimoN = operadores[operadores.length - 1];

    // Validacion para los puntos
    if (numero === "." && ultimoN.includes(".")) {
        alert("Expresion invalida");
        return;
    }

    // Remplaza el "0" o el "." de ser necesario
    if (expresion === "0" && numero !== ".") {
        expresion = numero;
    } else {
        expresion += numero;
    }

    actualizarPantalla();
};

const agregarOperador = (operadorPresionado) => {
    if (expresion === "") {
        alert("Expresion invalida");
        return;
    }

    let ultimoCaracter = expresion.slice(-1);

    if (["+", "-", "*", "/", "^"].includes(ultimoCaracter)) {
        alert("Operadores Invalidos");
        return;
    }

    expresion += operadorPresionado;
    actualizarPantalla();
};

const agregarOperacionAlgebraica = (operacionAlgebraica) => {
    if (expresion === "0") {
        expresion = operacionAlgebraica;
    } else {
        expresion += operacionAlgebraica;
    }

    actualizarPantalla();
};

const limpiar = () => {
    let ultimoCaracter = expresion.slice(0, -1);

    expresion = ultimoCaracter;

    if (expresion === "") {
        expresion = "0";
    }

    actualizarPantalla();
};

const limpiarTodo = () => {
    expresion = "0";
    actualizarPantalla();
};

const actualizarPantalla = () => {
    pantalla.textContent = expresion;
};
