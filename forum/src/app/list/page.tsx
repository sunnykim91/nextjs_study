import { connectDB } from "../utils/database";

export default async function List() {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    console.log(result);

    return (
        <div className="list-bg">
            {result.map((el) => {
                return (
                    <div key={el.id} className="list-item">
                        <h4>{el.title}</h4>
                        <p>{el.content}</p>
                    </div>
                );
            })}
        </div>
    );
}
