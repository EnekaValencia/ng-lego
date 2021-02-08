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
    ];
    return { legos: legos };
  }
}
