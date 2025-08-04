import { useEffect, useState } from 'react';
import axios from 'axios';

const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLiveOnly, setShowLiveOnly] = useState(false);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/matches'); // Backend API
        setMatches(res.data);
      } catch (err) {
        console.error("Error fetching matches:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const filteredMatches = showLiveOnly
    ? matches.filter((match) => match.status === 'Live')
    : matches;

  if (loading) return <p className="text-center text-lg mt-8">Loading matches...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700"> Indian Premier League</h1>
      
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setShowLiveOnly(!showLiveOnly)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {showLiveOnly ? 'Show All Matches' : 'Show Live Matches Only'}
        </button>
      </div>

      {filteredMatches.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No matches found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredMatches.map((match, idx) => (
            <div key={idx} className="bg-white rounded shadow p-4 border hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {match.team1} vs {match.team2}
              </h2>
              <p className="text-gray-700">{match.team1}: {match.score1} ({match.overs1} overs, {match.wickets1} wickets)</p>
              <p className="text-gray-700">{match.team2}: {match.score2} ({match.overs2} overs, {match.wickets2} wickets)</p>
              <p className="mt-2 text-sm">
                Status:{' '}
                <span className={match.status === 'Live' ? 'text-green-600 font-medium' : 'text-gray-500'}>
                  {match.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchList;
