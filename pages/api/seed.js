import nc from "next-connect";
import Product from "../../models/Product";
import db from "../../utils/database";
import data from "../../utils/data";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
});

export default handler;
