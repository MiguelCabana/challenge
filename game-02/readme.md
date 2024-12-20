# Game 02
# Gilded Rose Specification Use

**************** VERSION INGLISH  ****************


GildedRose Project
This project is an implementation of a system for updating the quality of items in an inventory. It is written in TypeScript and consists of three main files. Below are the instructions for using the project and an explanation of its file structure.

Project Structure
The project consists of the following files:

item.ts: Contains the definition of the Item class, representing an item in the inventory.
gildedRose.ts: Contains the definition of the GildedRose class, which handles the logic for updating the quality of items.
app-home.ts: The main file that creates instances of the items and passes them to the GildedRose class to update the quality.

How it Works
The Item class defines an item with three properties: name (the name of the item), sellIn (the number of days until the item becomes obsolete), and quality (the quality of the item).
The GildedRose class has a method updateQuality() that handles the logic for updating the items' quality based on specific rules for each type of item.
In app-home.ts, instances of the Item class are created and passed to the GildedRose class for quality update.

Requirements
Node.js: Ensure that you have Node.js installed on your machine.
TypeScript: TypeScript is required to compile the code to JavaScript.
Installation and Usage
Clone the repository:

bash
git clone https://github.com/MiguelCabana/challenge/tree/main/game-02
cd gildedrose
Install TypeScript dependencies:

If TypeScript is not installed globally, install it as a development dependency:

bash
npm install --save-dev typescript
Compile the TypeScript code to JavaScript:

To compile the .ts files into .js, run:

bash
npx tsc
This will generate the JavaScript files in the dist folder.

Run the JavaScript code:

Once the code is compiled, you can run the main file:

bash
node dist/app-home.js
File Structure Explanation
item.ts: Defines the Item class, which is responsible for storing the basic properties of each item.

gildedRose.ts: Contains the core logic for updating the quality of items, applying the rules for different types of items like "Aged Brie", "Backstage passes", "Sulfuras", etc.

app-home.ts: This file ties everything together. It creates the item instances and passes them to the GildedRose object, then displays the results after the quality has been updated.

Example Execution
The app-home.ts file creates four items and then calls updateQuality() to update their qualities:

typescript
let item1 = new Item('Sulfuras', 50, 50);
let item2 = new Item('Aged Brie', 2, 5);
let item3 = new Item('Backstage passes', 5, 2);
let item4 = new Item('Conjured', 25, 8);

let updateQuality = new GildedRose([item1, item2, item3, item4]);

let results = updateQuality.updateQuality();

console.log(results['message']);
console.log(results.itemsUpdateToday);
This code will output the results of the items after their quality has been updated.




**************** VERSION ESPAÑOL  ****************

Este proyecto es una implementación de un sistema de actualización de la calidad de artículos en un inventario. Está escrito en TypeScript y está compuesto por tres archivos principales. A continuación se detallan las instrucciones para usarlo y entender la estructura del código.

Estructura del Proyecto
El proyecto está compuesto por los siguientes archivos:

item.ts: Contiene la definición de la clase Item, que representa un artículo en el inventario.
gildedRose.ts: Contiene la definición de la clase GildedRose, que maneja la lógica de actualización de la calidad de los artículos.
app-home.ts: El archivo principal que crea las instancias de los artículos y los pasa a la clase GildedRose para actualizar la calidad.

¿Cómo funciona?

La clase Item define un artículo con tres propiedades: name (nombre del artículo), sellIn (días hasta que el artículo se vuelva obsoleto) y quality (calidad del artículo).

La clase GildedRose tiene un método updateQuality() que se encarga de actualizar la calidad de los artículos según reglas específicas para cada tipo de artículo.
En el archivo app-home.ts, se crean instancias de la clase Item y luego se pasan a la clase GildedRose para actualizar la calidad de los artículos.
Requisitos

Node.js: Asegúrate de tener Node.js instalado en tu máquina.
TypeScript: Se necesita TypeScript para compilar el código a JavaScript.

Instalación y Uso
Clonar el repositorio:

bash
git clone https://github.com/MiguelCabana/challenge/tree/main/game-02
cd gildedrose
Instalar las dependencias de TypeScript:

Si no has instalado TypeScript en tu máquina, instala las dependencias:

bash
npm install --save-dev typescript
Compilar el código TypeScript a JavaScript:

Para compilar los archivos .ts a .js, ejecuta:

bash
npx tsc
Esto generará los archivos JavaScript en la carpeta dist.

Ejecutar el código JavaScript:

Una vez que el código esté compilado, puedes ejecutar el archivo principal:

bash
node dist/app-home.js
Explicación de la Estructura
item.ts: Define la clase Item que es responsable de almacenar las propiedades básicas de cada artículo.

gildedRose.ts: Contiene la lógica principal de actualización de la calidad de los artículos, donde se aplican las reglas para diferentes tipos de artículos como "Aged Brie", "Backstage passes", "Sulfuras", etc.

app-home.ts: Es el archivo que conecta todo. Crea las instancias de los artículos y las pasa al objeto GildedRose, luego muestra los resultados después de actualizar la calidad.

Ejemplo de ejecución
El archivo app-home.ts crea cuatro artículos y luego llama a updateQuality() para actualizar sus cualidades:

typescript
let item1 = new Item('Sulfuras', 50, 50);
let item2 = new Item('Aged Brie', 2, 5);
let item3 = new Item('Backstage passes', 5, 2);
let item4 = new Item('Conjured', 25, 8);

let actualizarQuality = new GildedRose([item1, item2, item3, item4]);

let resultados = actualizarQuality.updateQuality();

console.log(resultados['message']);
console.log(resultados.itemsUpdateToday);
Este código muestra los resultados de los artículos después de la actualización.
