import { Schema, model } from 'mongoose';

const dutySchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 1,
    max: 110
  },
  description: {
    type: String,
    required: false,
    min: 2,
    max: 256
  },
  type: {
    type: String,
    required: true,
    min: 1,
    max: 55
  },
  price: {
    type: Number,
    required: false
  },
  done: {
    type: Boolean,
    default: false
  }, 
  specialInput:  {
    type: Object,
    required: true
  }
}, { 
  minimize: false 
});

export default model('to_dos', dutySchema);

// TODO CHECK
// moongoDB collections setup
// maybe change sub_tasks to tasks