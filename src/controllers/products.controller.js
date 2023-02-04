import { Product } from "../models/Product.js";
import { AuthS } from "../models/Auth.js";

export const getProducts = async (req, res) => {
  try {
    const Products = await Product.findAll({

      include: {
        model: AuthS,
        attributes:['username']
    }
      
    });
    //console.log(Products)
    res.status(200).send(Products);
  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  try {
    const Produc = await Product.findOne({
      where: {
        id,
      }
    });
    console.log("Product:", Produc);
    res.status(200).send(Produc);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct= async (req, res) => {
  const { title, description,price,userId } = req.body;

  try {
    const newProduct = await Product.create({
      title,
      description,
      price,
      userId
    });

    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, description,price } = req.body;
 
  try {
    const Produc = await Product.findByPk(id);
    Produc.title = title;
    Produc.description = description;
    Produc.price = price;
    await Produc.save();

    res.status(200).send(Produc);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Product.destroy({
      where: {
        id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// export const getProductWorkpackages = async (req, res) => {
//   const { id } = req.params;
//   console.log("Product id is: ", id);
//   try {
//     const workpackages = await Workpackage.findAll({
//       attributes: [
//         "id",
//         "ProductId",
//         "title",
//         "description",
//         "completed",
//         "checked",
//       ],
//       where: { ProductId: id },
//     });
//     console.log("workpackages; ", workpackages);
//     res.json(workpackages);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };
