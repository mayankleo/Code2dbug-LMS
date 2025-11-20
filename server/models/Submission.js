import mongoose from 'mongoose';

// This links a student, a course, and a task to a submitted file
const submissionSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  course: {
    type: mongoose.Schena.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  task: {
    // We might need a more robust way, but this is a start
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  fileUrl: {
    type: String,
    required: true, // This will be the path from /public/uploads/
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
  // (From your notes)
  adminFeedback: {
    type: String,
  },
}, {
  timestamps: true,
});

const Submission = mongoose.model('Submission', submissionSchema);
export default Submission;
