import { UrlResolver } from '@angular/compiler';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class LegoData implements InMemoryDbService {

  createDb() {
    let legos = [
      {
        "id": 0,
        "paquete": "Policia",
        "modelo": 1,
        "fechaCreacion": "12/12/2019 12:00:00",
        "descripcion": "Crea una comisaria de policia de LEGO. Atrapa a los criminales y encierralos. ¡Usa el nuevo helicoptero para buscarlos y el nuevo coche para atraparlos!",
        "shortDescription": "Comisaria de Policia",
        "precio": 25.99,
        "imagen":'./../../assets/images/policia1.jpeg',
        "tiendas": ["Toys'r us", "ToyPlanet", "Jueguettos", "Eroski"],
      },
      {
        "id": 1,
        "paquete": "Bomberos",
        "modelo": 1,
        "fechaCreacion": "12/6/2019 12:00:00",
        "descripcion": "Crea una estación de bomberos y apaga todos los incencios de la ciudad",
        "shortDescription": "Estación de Bomberos",
        "precio": 23.99,
        "imagen":'./../../assets/images/bomberos1.jpg',
        "tiendas": ["ToyPlanet", "Jueguettos", "Game", "FNAC"],
      },
      {
        "id": 2,
        "paquete": "Equipo Rescate",
        "modelo": 1,
        "fechaCreacion": "12/3/2018 12:10:30",
        "descripcion": "Crea un puesto de rescate. !Hay una persona en peligro! Arma el nuevo helicópter de rescate y acude a la ayuda.",
        "shortDescription": "Puesto de Rescate",
        "precio": 20.99,
        "imagen": "http://placehold.it/820x320",
        "tiendas": ["ToyPlanet", "Caprabo", "Mercadona", "FNAC"]
      },
      {
        "id": 3,
        "paquete": "Policia",
        "modelo": 2,
        "fechaCreacion": "1/1/2021 14:30:00",
        "descripcion": "Crea una comisaria de policia de LEGO. Atrapa a los criminales y encierralos. ¡Ahora cuenta con perros para poder capturar a los criminales!",
        "shortDescription": "Comisaria de Policia",
        "price": 30.79,
        "imagen": "http://placehold.it/820x320",
        "tiendas": ["Toy'r us", "Lidl", "Aldi", "Juguettos"]
      },
      {
        "id": 4,
        "paquete": "Bomberos",
        "modelo": 2,
        "fechaCreacion": "2/3/2020 19:45:30",
        "descripcion": "Crea una estación de bomberos y apaga todos los incencios de la ciudad. ¡Construye el nuevo camión para apagar el fuego lo antes posible!",
        "shortDescription": "Estación de Bomberos",
        "price": 29.99,
        "imagen": "http://placehold.it/820x320",
        "tiendas": ["Juguettos", "Eroski", "Aldi", "ToyPlanet"]
      },
      {
        "id": 5,
        "paquete": "Formula 1",
        "modelo": 1,
        "fechaCreacion": "13/5/2020 18:15:00",
        "descripcion": "Construye los Ferraris de Massa y Schumacher, compite en la pista, ¡O no!, has pinchado, ¡rápido! debes ir al pitLane para un cambio de ruedas,",
        "shortDescription": "PitLane Ferrari F1",
        "price": 60.99,
        "imagen": "http://placehold.it/820x320",
        "tiendas": ["Toys'r us", "Juguettos", "ToyPlanet", "Eroski"]
      }

    ];
    return { legos: legos };
  }
}
