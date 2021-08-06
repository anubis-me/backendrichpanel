const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (cb) => {
	MongoClient.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
		.then((client) => {
			if (client) console.log("Connected to Database");
			_db = client.db();
			cb();
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

const getDb = () => {
	if (_db) return _db;
	throw "Database not Connected";
};

module.exports = { mongoConnect, getDb };
