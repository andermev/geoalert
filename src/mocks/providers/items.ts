import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Alerta de riesgo sismico",
    "profilePic": "assets/img/speakers/issue1.png",
    "about": "Alerta de riesgo sismico.",
    "user": "Andres Gomez",
    "location": {
      "latitude" : "6.264983",
      "longitude" : "-75.567009",
    }
  };


  constructor() {
    let items = [
      {
        "name": "Alerta de riesgo sismico",
        "profilePic": "assets/img/speakers/issue1.png",
        "about": "Alerta de riesgo sismico.",
        "user": "Andres Gomez",
        "location": {
          "latitude" : "6.264983",
          "longitude" : "-75.567009",
        }
      },
      {
        "name": "Notificacion de aumento de quebrada",
        "profilePic": "assets/img/speakers/issue2.png",
        "about": "Notificacion de aumento de quebrada.",
        "user": "Carolina Perez",
        "location": {
          "latitude" : "6.264983",
          "longitude" : "-75.567009",
        }
      },
      {
        "name": "Notificacion de aumento de quebrada",
        "profilePic": "assets/img/speakers/issue3.png",
        "about": "Notificacion de aumento de quebrada.",
        "user": "Laura Restrepo",
        "location": {
          "latitude" : "6.264983",
          "longitude" : "-75.567009",
        }
      },
      {
        "name": "Notificacion de vientos muy fuertes",
        "profilePic": "assets/img/speakers/issue1.png",
        "about": "Notificacion de vientos muy fuertes.",
        "user": "Javier Ortega",
        "location": {
          "latitude" : "6.264983",
          "longitude" : "-75.567009",
        }
      },
      {
        "name": "Alerta de desbordamiento de rio",
        "profilePic": "assets/img/speakers/issue2.png",
        "about": "Alerta de desbordamiento de rio.",
        "user": "Camilo Quiroz",
        "location": {
          "latitude" : "6.264983",
          "longitude" : "-75.567009",
        }
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
