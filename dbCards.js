import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  name: String,
  age: Number,
  description: String,
  imgUrl: String,
});

export default mongoose.model('cards', cardSchema);