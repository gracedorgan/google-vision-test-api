import mongoose, { Schema } from 'mongoose';

const PhotoSchema = new Schema({
  img: String,
  vis_tag: String,
  tag_correct: String,
}, {
  toJSON: {
    virtuals: true,
  },
});


// create model class
const PhotoModel = mongoose.model('Photo', PhotoSchema);

export default PhotoModel;
