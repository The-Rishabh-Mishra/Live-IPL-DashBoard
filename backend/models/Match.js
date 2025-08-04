import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  team1: String,
  team2: String,
  score1: String,
  score2: String,
  overs1: String,
  overs2: String,
  wickets1: Number,
  wickets2: Number,
  status: String // Live or Completed
});

const Match = mongoose.model('Match', matchSchema);
export default Match;
