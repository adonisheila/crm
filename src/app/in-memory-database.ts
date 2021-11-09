import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

import { Category } from './pages/categories/shared/category.model';
import { Entry } from './pages/entries/shared/entry.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    const categories: Category[] = [
      {
        id: 1,
        name: 'ELECTRODOMESTICOS',
        description: 'televisores'
      },
      {
        id: 2,
        name: 'FRUTAS',
        description: 'manzana peras'
      },
      {
        id: 3,
        name: 'JUGUETES',
        description: 'juguetes para niños'
      },
      {
        id: 4,
        name: 'COMIDA',
        description: 'comida a domicilio'
      },
      {
        id: 5,
        name: 'TRANSPORTE',
        description: 'uber'
      },
      {
        id: 6,
        name: 'INMUEBLES',
        description: 'Escritorios,muebles,comodas, etc'
      },
      {
        id: 7,
        name: 'TICKES',
        description: 'cine,conciertos,partidos etc.'
      },
      {
        id: 8,
        name: 'MEDICINA',
        description: 'pastillas,remedios,cosaas de haceo personal etc.'
      },
      {
        id: 9,
        name: 'COSAS DEL HOGAR',
        description: 'escobas ,palas,vasos,licuadora etc.'
      },
      {
        id: 10,
        name: 'COMIDA DE MASCOTAS',
        description: 'comida canina'
      },
      {
        id: 11,
        name: 'VIDEO JUEGOS',
        description: 'juegos electronicos'
      }
    ];

    const entries: Entry[] = [
      {
        id: 1,
        name: 'video juegos',
        categoryId: categories[10].id,
        category: categories[10],
        paid: true, date: "14/01/2019",
        amount: "70,80", type: "expense",
        description: "cualquier descripcion"
      } as Entry,
      {
        id: 2,
        name: 'Medicina',
        categoryId: categories[7].id,
        category: categories[7],
        paid: false,
        date: "14/02/2019",
        amount: "15,00",
        type: "expense"
      } as Entry,
      {
        id: 3,
        name: 'Transporte',
        categoryId: categories[4].id,
        category: categories[4],
        paid: true,
        date: "15/03/2019",
        amount: "40,00",
        type: "revenue"
      } as Entry,
      {
        id: 4,
        name: 'Comida china',
        categoryId: categories[3].id,
        category: categories[3],
        paid: true,
        date: "16/03/2019",
        amount: "15,00",
        type: "expense"
      } as Entry,
      {
        id: 5,
        name: 'Comida para mascotas',
        categoryId: categories[9].id,
        category: categories[9],
        paid: true,
        date: "17/04/2019",
        amount: "30,00",
        type: "expense"
      } as Entry,
      {
        id: 6,
        name: 'electrodomesticos',
        categoryId: categories[0].id,
        category: categories[0],
        paid: false,
        date: '17/10/2019',
        amount: '15,00',
        type: 'expense'
      } as Entry,
      {
        id: 11,
        name: 'muebles',
        categoryId: categories[5].id,
        category: categories[5],
        paid: true,
        date: "17/05/2019",
        amount: "30,00",
        type: "expense"
      } as Entry,
      {
        id: 12,
        name: 'video juegos',
        categoryId: categories[10].id,
        category: categories[10],
        paid: false,
        date: "23/10/2019",
        amount: "15,00",
        type: "expense"
      } as Entry,
      {
        id: 13,
        name: 'escobas,palas',
        categoryId: categories[8].id,
        category: categories[8],
        paid: false,
        date: "25/06/2019",
        amount: "30,00",
        type: "expense"
      } as Entry,
      {
        id: 14,
        name: 'conciertos',
        categoryId: categories[6].id,
        category: categories[6],
        paid: true,
        date: "25/07/2019",
        amount: "2980,00",
        type: "revenue"
      } as Entry,
      {
        id: 19,
        name: 'Monopolio',
        categoryId: categories[2].id,
        category: categories[2],
        paid: false,
        date: "07/11/2019",
        amount: "15,00",
        type: "expense"
      } as Entry,
      {
        id: 21,
        name: 'televisor',
        categoryId: categories[0].id,
        category: categories[0],
        paid: true,
        date: "17/11/2019",
        amount: "30,00",
        type: "expense"
      } as Entry,
      {
        id: 22,
        name: 'escritorio',
        categoryId: categories[5].id,
        category: categories[5],
        paid: true,
        date: "18/08/2019",
        amount: "15,00",
        type: "expense"
      } as Entry,
      {
        id: 23,
        name: 'papas fritas',
        categoryId: categories[3].id,
        category: categories[3],
        paid: false,
        date: "21/02/2019",
        amount: "130,00",
        type: "expense"
      } as Entry,
      {
        id: 44,
        name: 'Uber',
        categoryId: categories[4].id,
        category: categories[4],
        paid: true,
        date: "28/09/2019",
        amount: "15,00",
        type: "expense"
      } as Entry,
      {
        id: 55,
        name: 'Cine',
        categoryId: categories[6].id,
        category: categories[6],
        paid: false,
        date: "28/12/2019",
        amount: "30,00",
        type: "expense"
      } as Entry
    ];
    return { categories, entries };
  }
}
