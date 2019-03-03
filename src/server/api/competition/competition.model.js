import mongoose from 'mongoose';

const competitionSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    },
    name: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    address: {
      type: String
    }
  },
  { timestamps: true }
);

export const Competition = mongoose.model('competition', competitionSchema);
