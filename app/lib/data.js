import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  // const regex = new RegExp(q, "i");

  // const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const users = await User.find();
    //   const users = await User.find({ username: { $regex: regex } })
    //     .limit(ITEM_PER_PAGE)
    //     .skip(ITEM_PER_PAGE * (page - 1));
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};