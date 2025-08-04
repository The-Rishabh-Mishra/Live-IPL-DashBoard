
import dotenv from 'dotenv';
import Match from './models/Match.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const insertData = async () => {
  await Match.deleteMany(); 
  await Match.insertMany([
    {
      team1: 'CSK',
      team2: 'MI',
      score1: '180/4',
      score2: '175/7',
      overs1: '20',
      overs2: '20',
      wickets1: 4,
      wickets2: 7,
      status: 'Completed',
    },
    {
      team1: 'RCB',
      team2: 'KKR',
      score1: '90/1',
      score2: '0/0',
      overs1: '10',
      overs2: '0',
      wickets1: 1,
      wickets2: 0,
      status: 'Live',
    },
  ]);
  console.log('Dummy Matches Inserted');
  process.exit();
};

insertData();
