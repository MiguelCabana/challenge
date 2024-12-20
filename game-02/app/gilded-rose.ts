
/* IMPORT CLASS ITEMS */
import { Item } from "./items";

/* CLASS GILDEDROSE */
export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    let message: Array<String> = [""];
    let items_update_today: Array<Item> = [];

    for (let i = 0; i < this.items.length; i++) {
      let quality = this.items[i].quality;

      try {
        /* La calidad de un artículo nunca puede ser negativa && La calidad de un artículo nunca puede superar 50.*/
        if (quality < 0 && quality < 50) {
          message.push(
            `El articulo ${this.items[i].name} tiene un QUALITY negativo o es superior a 50`
          );
        } else {
          message.push(
            `EL articulo ${this.items[i].name} tiene un QUALITY positivo y es menor a 50`
          );
          /* "Sulfuras", siendo un artículo legendario, nunca necesita ser vendido ni pierde calidad. */
          if (this.items[i].name === "Sulfuras") {
            message.push(`SELLIN: ${this.items[i].sellIn}`);
            message.push(`QUALITY: ${this.items[i].quality}`);
            message.push("----------------------------------------------");
            continue;
          }

          /* Una vez que la fecha límite de venta ha pasado, la calidad se degrada el doble de rápido. */
          if (this.items[i].sellIn < 0) {
            this.items[i].quality = this.items[i].quality - 2;
            message.push(
              `${this.items[i].name} a superado sus dias de SELLIN , su nuevo valor de QUALITY ES ${this.items[i].quality}`
            );
          }

          /* El "Aged Brie" en realidad aumenta su calidad cuanto más tiempo pasa. */
          if (this.items[i].name === "Aged Brie") {
            /* El "Aged Brie" en realidad aumenta su calidad cuanto más tiempo pasa. */
            if (this.items[i].sellIn > 0) {
              message.push(`Quality anterior: ${this.items[i].quality} `);
              this.items[i].quality = this.items[i].quality + 1;
            }
          }

          /*"Backstage passes", al igual que el Aged Brie, aumenta su calidad a medida que se acerca su valor SellIn: */
          if (this.items[i].name === "Backstage passes") {
            /* La calidad aumenta en 2 cuando quedan 10 días o menos && no exceda 50 de calidad*/
            if (this.items[i].sellIn <= 10 && this.items[i].sellIn > 5) {
              this.items[i].quality = Math.min(this.items[i].quality + 2, 50);
              message.push(
                `El articulo ${this.items[i].name} a aumentado su QUALITY: ${this.items[i].quality}`
              );

              /* La calidad aumenta en 3 cuando quedan 5 días o menos, */
            } else if (this.items[i].sellIn <= 5 && this.items[i].sellIn > 0) {
              this.items[i].quality = Math.min(this.items[i].quality + 3, 50);
              message.push(
                `El articulo ${this.items[i].name} a aumentado su QUALITY: ${this.items[i].quality}`
              );

              /* La calidad baja a 0 después del concierto 'Backstage passes' */
            } else if (this.items[i].sellIn < 0) {
              this.items[i].quality = 0;
              this.items[i].sellIn = 0;
              message.push(
                `El articulo ${this.items[i].name} se ah restablecido su QUALITY: ${this.items[i].quality}`
              );
              message.push(
                `El articulo ${this.items[i].name} se ah restablecido su SELLIN: ${this.items[i].sellIn}`
              );
            }
          }

          /*"Sulfuras", siendo un artículo legendario, nunca necesita ser vendido ni pierde calidad. */
          if (this.items[i].name === "Sulfuras") {
            this.items[i].quality = this.items[i].quality;
            message.push(
              `Este articulo ${this.items[i].name} es legendario, no puede ser vendido.`
            );
          }

          /* Los artículos "Conjured" pierden calidad el doble de rápido que los artículos normales. */
          if (this.items[i].name === "Conjured" || this.items[i].sellIn < 0) {
            /* Normal  = 1 , Doble de normal = 2 */
            message.push(`QUALITY anterior: ${this.items[i].quality}`);
            this.items[i].quality = this.items[i].quality - 2;
            message.push(
              `Este articulo ${this.items[i].name} a disminuido su QUALITY: ${this.items[i].quality}.`
            );
          }

          message.push(`QUALITY actualizado: ${this.items[i].quality}`);
          message.push(`SELLIN actual: ${this.items[i].sellIn}`);
          message.push("----------------------------------------------");

          /* Al final de cada día, nuestro sistema reduce ambos valores para cada artículo. */
          let update_name_articule = this.items[i].name;
          let update_today_sellIn = Math.max(this.items[i].sellIn - 1, 0);
          let update_today_quality = Math.max(this.items[i].quality - 1, 0);

          // Creamos un nuevo objeto Item con los valores actualizados
          let updatedItem = new Item(
            update_name_articule,
            update_today_sellIn,
            update_today_quality
          );
          items_update_today.push(updatedItem);
        }
      } catch (error) {
        message.push(
          `Error al procesar el artículo ${this.items[i].name}: ${error}`
        );
      }
    }

    return {
      message: message,
      itemsUpdateToday: items_update_today,
    };
  }
}



