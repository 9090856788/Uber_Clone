import mongoose from "mongoose";

const dbConnection = () => {
  try {
    mongoose
      .connect(`DB_URL`)
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
