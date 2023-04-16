import { ConnectOptions, MongoClient } from "mongodb";

declare global {
    interface GlobalThis {
        _mongo?: MongoClient;
    }
}

const url =
    "mongodb+srv://tjsgnl2002:91Tjsgnl^&*@cluster0.cfpnjmt.mongodb.net/test";
const options = { useNewUrlParser: true } as ConnectOptions;
let connectDB;

if (process.env.NODE_ENV === "development") {
    if (!globalThis._mongo) {
        globalThis._mongo = new MongoClient(url, options).connect();
    }
    connectDB = globalThis._mongo;
} else {
    connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
