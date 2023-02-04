import { AuthS } from "../models/Auth.js";
import  jwt  from 'jsonwebtoken';
export const getLoginUser = async (req, res) => {
  const { username, password } = req.query;
  console.log(username, password);
  try {
    const user = await AuthS.findOne({
      where: {
        username,
      },
    });
    //console.log(user);
    if (!user) return res.status(400).send("Username not exist");

    if (password != user.password)
      return res.status(400).send("password incorrect");
    var token = jwt.sign({ id: user.id }, "mysecretkey");
    console.log(token);
    res.status(200).send({
      token,
      id:user.id
    });
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const newuser = await AuthS.create({
      username,
      password,
    });

    res.json(newuser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};







