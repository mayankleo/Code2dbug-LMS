import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  taskType: { type: String, enum: ['quiz', 'upload'], required: true },
});

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  // (From your notes)
  content: { type: String }, // Link to tutorial/content
  tasks: [taskSchema],
});

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  // (From your notes: Web App, Data Science, etc.)
  stream: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 500, // (From your notes)
  },
  modules: [moduleSchema],
}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
