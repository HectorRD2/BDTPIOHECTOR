🔴🟡🟢  
# Emanuel_Achito_Gamboa ⎯ ❐ ⤬


Este proyecto demuestra cómo gestionar y manipular datos en una base de datos MongoDB utilizando Node.js. Aquí se realizan operaciones básicas como insertar, consultar, actualizar y eliminar datos de forma eficiente.



🖥️ Explicación del Código
Este es el funcionamiento del código en el archivo

1: Hacemos una conexion a MongoDB Con Js (JavasCript) 🔗
```js
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
```

2: Insertamos los Datos en nuestro archivo .js 📥

```js
const peliculas = [
    { titulo: 'Interestelar', genero: 'Ciencia ficción', año: 2014 },
    { titulo: 'El Señor de los Anillos', genero: 'Fantasía', año: 2001 },
    { titulo: 'Matrix', genero: 'Acción', año: 1999 }
];
const insertResult = await collection.insertMany(peliculas);
```

3: Consultar los Datos 🔍


```js
const consulta = await collection.find({ genero: 'Ciencia ficción' }).toArray();
```


4: Actualizar los Datos ✍️

```js
const updateResult = await collection.updateOne(
    { titulo: 'Matrix' },
    { $set: { genero: 'Ciencia ficción', año: 1999 } }
);
```

5: Eliminar los Datos 🚮

```js
const deleteResult = await collection.deleteOne({ titulo: 'El Señor de los Anillos' });
```


6: Mostrar los Datos Restantes 👀

```js
const finalData = await collection.find().toArray();
```j




