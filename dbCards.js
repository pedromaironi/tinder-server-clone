import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
  name: String,
  description: String,
  age: String,
  imgUrl: String,
});

export default mongoose.model('cards', cardSchema);