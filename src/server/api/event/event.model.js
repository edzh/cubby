import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  competitionId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'competition',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  round: {
    type: String,
    required: true
  },
  beginTime: {
    type: String
  },
  endTime: {
    type: String
  }
});

export const Event = mongoose.model('event', eventSchema);
