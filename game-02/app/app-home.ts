/* IMPORT CLASS NECCESSARYS */
import { Item } from "./items";
import { GildedRose } from "./gilded-rose";

/* CALL CLASSS AND FUNCTIONS */

                 /* (NAME,SELLIN,QUALITY) */
let item1 = new Item('Sulfuras','Infinity',50);
let item2 = new Item('Aged Brie',2,5);
let item3 = new Item('Backstage passes',-1,2);
let item4 = new Item('Conjured',25,8);

let actualizarCalidad = new GildedRose([item1,item2,item3,item4]);
let resultados = actualizarCalidad.updateQuality();

console.log(resultados['message']);
console.log('********* VALORES DE LOS ARTICULOS AL FINALIZAR EL DIA *********');
console.log(resultados.itemsUpdateToday);