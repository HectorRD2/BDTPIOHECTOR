const { MongoClient } = require('mongodb');

// URI de conexión a MongoDB (ajusta según tu configuración)
const uri = 'mongodb://localhost:27017';

// Crear un cliente de MongoDB
const client = new MongoClient(uri);

async function main() {
    try {
        // Conexión al servidor
        await client.connect();
        console.log('Conectado a MongoDB');

        // Seleccionar base de datos y colección
        const database = client.db('miBaseDeDatos');
        const collection = database.collection('peliculasFavoritas');

        // **1. Insertar documentos**
        console.log('Insertando documentos...');
        const peliculas = [
            { titulo: 'Interestelar', genero: 'Ciencia ficción', año: 2014 },
            { titulo: 'El Señor de los Anillos', genero: 'Fantasía', año: 2001 },
            { titulo: 'Matrix', genero: 'Acción', año: 1999 },
        ];
        const insertResult = await collection.insertMany(peliculas);
        console.log(`${insertResult.insertedCount} documentos insertados.\n`);

        // **2. Consultar documentos**
        console.log('Consultando documentos...');
        const consulta = await collection.find({ genero: 'Ciencia ficción' }).toArray();
        console.log('Documentos encontrados:');
        console.log(consulta, '\n');

        // **3. Actualizar documentos**
        console.log('Actualizando documento...');
        const updateResult = await collection.updateOne(
            { titulo: 'Matrix' }, // Filtro
            { $set: { genero: 'Ciencia ficción', año: 1999 } } // Actualización
        );
        console.log(`Documentos actualizados: ${updateResult.modifiedCount}\n`);

        // **4. Eliminar documentos**
        console.log('Eliminando documento...');
        const deleteResult = await collection.deleteOne({ titulo: 'El Señor de los Anillos' });
        console.log(`Documentos eliminados: ${deleteResult.deletedCount}\n`);

        // **5. Mostrar toda la colección**
        console.log('Estado final de la colección:');
        const finalData = await collection.find().toArray();
        console.log(finalData);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        // Cerrar conexión al cliente
        await client.close();
        console.log('Conexión cerrada.');
    }
}

// Ejecutar el programa
main().catch(console.dir);
