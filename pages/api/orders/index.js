import dbConnect from "../../../utilities/mongo";
import Order from "../../../models/Order";
const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();
  if (method === "GET") {
    const orders = await Order.find();
    res.status(200).json(orders);
  }
  if (method === "POST") {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default handler;
