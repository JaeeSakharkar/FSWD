const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "university";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();

    const db = client.db(dbName);
    const students = db.collection("students");

    const newStudent = {
      name: "jaey",
      rollNumber: "U22CSE103",
      department: "Computer Science",
      year: 2,
    };
    await students.insertOne(newStudent);

    const allStudents = await students.find().toArray();
    console.log(allStudents);

    await students.updateOne(
      { rollNumber: "U22CSE102" },
      { $set: { year: 3 } }
    );

    await students.deleteOne({ rollNumber: "U22CSE102" });

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
  }
}

main();
