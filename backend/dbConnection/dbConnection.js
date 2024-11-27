import mongoose from "mongoose";

const dbConnection = () => {
  try {
    mongoose
      .connect(`mongodb+srv://Kanhu143:Kanhu143@uber.w2qan.mongodb.net/?retryWrites=true&w=majority&appName=uber`)
      .then(() => {
        console.log(` Mongoose Database connected successfully`);
      })
      .catch((err) => {
        console.log(`There is some error during database connection: ${err}`);
      });
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
