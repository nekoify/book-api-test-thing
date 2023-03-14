import * as mongoose from "mongoose";
export interface IFBook extends mongoose.Document {
    title: string;
    author: string;
    rating: string;
    desc: string;
  }
  
  export const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    rating: {type: String, required: true},
    desc: { type: String, required: true },
  });

const Book = mongoose.model<IFBook>("Book", BookSchema);
export default Book;