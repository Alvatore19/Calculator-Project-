# Calculadora Web 🧮

Una calculadora web moderna, accesible y de alto rendimiento construida con HTML, Tailwind CSS y Vanilla JavaScript. A diferencia de calculadoras básicas que evalúan operaciones de una en una, este proyecto implementa un motor matemático personalizado capaz de procesar, ordenar y evaluar ecuaciones complejas respetando la jerarquía de operaciones.

## 🚀 Características Principales

* **Interfaz de Usuario (UI) Moderna:** Diseño inspirado en la paleta de colores "One Dark" de Atom/VS Code, logrando un aspecto limpio y profesional enfocado en el desarrollo.
* **Totalmente Accesible:** Uso riguroso de etiquetas semánticas (`<output>`), atributos `aria-label` para lectores de pantalla y estados visuales (`focus`, `hover`) para navegación por teclado.
* **Motor de Evaluación Matemático:** No utiliza la función insegura `eval()`. En su lugar, emplea estructuras de datos avanzadas para resolver ecuaciones jerárquicas.
* **Soporte Algebraico y Trigonométrico:** Capacidad para manejar funciones avanzadas como Seno, Coseno, Tangente, Logaritmos y Raíces.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica.
* **Tailwind CSS (v4):** Estilado por utilidades, CSS Grid para la disposición de botones y diseño responsivo.
* **JavaScript (ES6+):** Lógica del DOM, manejo de eventos y algoritmos matemáticos.

## 🧠 Arquitectura Lógica (Under the Hood)

El núcleo de esta calculadora procesa las expresiones matemáticas a través de un motor de 4 fases, aplicando conceptos avanzados de Ciencias de la Computación y Estructuras de Datos:

1. **Tokenización:** Una función basada en Expresiones Regulares (Regex) que descompone una cadena de texto continua (ej. `7+5*2`) en un arreglo de unidades lógicas ("tokens").
2. **Algoritmo Shunting Yard:** Implementación del algoritmo de Edsger Dijkstra que utiliza una estructura de Pila (Stack) para convertir la notación matemática estándar (Infija) a Notación Postfija (Polaca Inversa), ordenando los operadores por su precedencia.
3. **Árbol Binario de Expresiones (AST):** Construcción de un árbol jerárquico donde las hojas representan los operandos (números) y los nodos internos representan los operadores.
4. **Evaluación Recursiva:** Un recorrido de tipo "Post-orden" (Izquierda -> Derecha -> Raíz) sobre el árbol binario para resolver la ecuación matemáticamente de forma infalible.

## 💻 Instalación y Ejecución

Este proyecto no requiere dependencias pesadas ni procesos de compilación complejos. 

1. Clona este repositorio:
   ```bash
   git clone [https://github.com/Alvatore19/Calculator-Project-.git](https://github.com/Alvatore19/Calculator-Project-.git)