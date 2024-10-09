const { MongoClient } = require('mongodb');

const dbName = 'ws_109_tmp'
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const connection = async () => {
    await client.connect();
    const db = client.db(dbName);

    return db;
}



// InserData in Databse 

const insertData = async () => {
    const db = await connection();
    const collection = db.collection('users');

    const response = await collection.insertOne({
        name: 'Jayant',
        age: 21
    })

    console.log(response)
}


// insertData();

// END








// READ DATA

const readData = async () => {
    const db = await connection();
    const collection = db.collection('users');

    const response = await collection.find().toArray();

    console.log(response);
};

// readData();

// END





// DELETE DATA

const deleteData = async () => {
    const db = await connection();
    const collection = db.collection('users');

    const response = await collection.deleteOne({
        name: 'Jayant'
    });

    console.log(response);
}

// deleteData();

// END






// UPDATE DATA

const updateData = async () => {
    const db = await connection();
    const collection = db.collection('users');

    const response = await collection.updateOne({
        name: 'Jayant'
        },
        {
            $set: { name: 'Goldy Brar' }
        }
    )
};

// updateData();