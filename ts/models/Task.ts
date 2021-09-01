import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
    parentId: {
        type: String,
        required: true,
        min: 1,
        max: 110
    },
    name: {
        type: String,
        required: true,
        min: 1,
        max: 110
    },
    price: {
        type: Number,
        required: false
    },
    done: {
        type: Boolean,
        default: false
    }
})

export default model('sub_tasks', taskSchema)