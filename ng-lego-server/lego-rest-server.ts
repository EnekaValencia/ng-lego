var express = require('express');
const bodyParser = require('body-parser');
const app = express();

class Lego {
  constructor(
    public id: number,
    public paquete: string,
    public modelo: number,
    public fechaCreacion: string,
    public descripcion: string,
    public shortDescription: string,
    public precio: number,
    public imagen: string,
    public tiendas: string[],
  ) { }
}

const legos: Lego[] = [
  new Lego(
    0,
    "Policia",
    1,
    "12/12/2019 12:00:00",
    "Crea una comisaria de policia de LEGO. Atrapa a los criminales y encierralos. ¡Usa el nuevo helicoptero para buscarlos y el nuevo coche para atraparlos!",
    "Comisaria de Policia",
    25.99,
    "https://alijuguetes.es/1660-large_default/comisaria-de-policia-de-lego-city.jpg",
    ["Toys'r us", "ToyPlanet", "Jueguettos", "Eroski"]
    
  ),
  new Lego(
    1,
    "Bomberos",
    1,
    "12/6/2019 12:00:00",
    "Crea una estación de bomberos y apaga todos los incencios de la ciudad.",
    "Estación de Bomberos",
    23.99,
    "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201812/10/00197630152409____1__640x640.jpg",
    ["ToyPlanet", "Jueguettos", "Game", "FNAC"]
  ),
  new Lego(
    2,
    "Equipo Rescate",
    1,
    "12/3/2018 12:10:30",
    "Crea un puesto de rescate. !Hay una persona en peligro! Arma la nueva lancha de rescate y acude a la ayuda.",
    "Puesto de Rescate",
    20.99,
    "https://www.nx3arquitectura.com/wp-content/uploads/2018/07/lego-city-unidad-de-respuesta-4x4-60165.jpg",
    ["ToyPlanet", "Caprabo", "Mercadona", "FNAC"]
  ),
  new Lego(
    3,
    "Policia",
    2,
    "1/1/2021 14:30:00",
    "Crea una comisaria de policia de LEGO. Atrapa a los criminales y encierralos. ¡Ahora cuenta con perros para poder capturar a los criminales!",
    "Comisaria de Policia",
    30.79,
    "https://images-na.ssl-images-amazon.com/images/I/91L7GJV0R1L._AC_SL1500_.jpg",
    ["Toy'r us", "Lidl", "Aldi", "Juguettos"]
  ),
  new Lego(
    4,
    "Bomberos",
    2,
    "2/3/2020 19:45:30",
    "Crea una estación de bomberos y apaga todos los incencios de la ciudad. ¡Construye el nuevo camión para apagar el fuego lo antes posible!",
    "Estación de Bomberos",
    29.99,
    "https://juguettos.com/2381517-thickbox_default/lego-city-fire-brigada-de-bomberos-del-distrito-centro-60216.jpg",
    ["Juguettos", "Eroski", "Aldi", "ToyPlanet"]
  ),
  new Lego(
    5,
    "Formula 1",
    1,
    "13/5/2020 18:15:00",
    "Construye los Ferraris de Massa y Schumacher, compite en la pista, ¡O no!, has pinchado, ¡rápido! debes ir al pitLane para un cambio de ruedas,",
    "PitLane Ferrari F1",
    60.99,
    "https://images.brickset.com/sets/images/8672-1.jpg?200512020416",
    ["Toys'r us", "Juguettos", "ToyPlanet", "Eroski"]
  )
]





function getLegos(): any[] {
  return legos;
}

app.use(function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

app.post('/legos', bodyParser.json(), (req: any, res: any) => {

  let legoNew = new Lego(
    legos.length + 1,
    req.body.paquete,
    req.body.modelo,
    req.body.fechaCreacion,
    req.body.descripcion,
    req.body.shortDescription,
    req.body.precio,
    req.body.imagen,
    req.body.tiendas
  );
  legos.push(legoNew);
  res.status(200).send({ 
    id: legoNew.id,
    paquete: legoNew.paquete,
    modelo: legoNew.modelo,
    fechaCreacion: legoNew.fechaCreacion,
    descripcion: legoNew.descripcion,
    shortDescription: legoNew.shortDescription,
    precio: legoNew.precio,
    imagen: legoNew.imagen,
    tiendas: legoNew.tiendas
   });
 
})

app.get('/', (req: any, res: any) => {
  res.send('The URL of products is http://localhost:8000/legos');
});

app.get('/legos', (req: any, res: any) => {
  res.json(getLegos());
});


function getLegosById(legoId: number): any {
  let p: any;
  p = legos.find(p => p.id == legoId);
  return p;
}

app.get('/legos/:id', (req: any, res: any) => {
  res.json(getLegosById(parseInt(req.params.id)));
});



function updateLegosById(req:any, legoId: number): any {
  let p: any;
  p = legos.find(p => p.id == legoId);
  let index = legos.indexOf(p);

  p.paquete =  req.body.paquete,
  p.modelo =  req.body.modelo,
  p.fechaCreacion =  req.body.fechaCreacion,
  p.descripcion =  req.body.descripcion,
  p.shortDescription =  req.body.shortDescription,
  p.precio =  req.body.precio,
  p.imagen =  req.body.imagen,
  p.tiendas = req.body.tiendas
  
  legos[index] = p;
  return p;
}

app.put('/legos/:id', function (req:any, res:any) {
  res.json(updateLegosById(req, parseInt(req.params.id)));
  res.send('Got a UPDATE request at /user');
});


function deleteLegosById(legoId: number): any {
  let p: any;
  p = legos.find(p => p.id == legoId);
  let index = legos.indexOf(p);
  delete legos[index];
  return p;
}

app.delete('/legos/:id', function (req:any, res:any) {
  res.json(deleteLegosById(parseInt(req.params.id)));
  res.send('Got a DELETE request at /user');
});



const server = app.listen(8000, "localhost", () => {
  const { address, port } = server.address();

  console.log('Listening on %s %s', address, port);
});




