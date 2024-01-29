import { useState } from 'react';
import axios from 'axios';

import PlayerCard from './components/PlayerCard';
import PlayerModal from './components/PlayerModal';

function App() {
  const [playerAmount, setPlayerAmount] = useState(0);
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    console.log('click')
    setSelectedPlayer(player);
  };

  const handleCloseModal = () => {
    setSelectedPlayer(null);
  };

  const handleGenerateClick = () => {
    axios.post('http://localhost:3000/create-player-list', {
      amount: playerAmount
    })
    .then(response => {
      // Aqui você pode atualizar o estado com os dados recebidos, por exemplo:
      setPlayers(response.data);
      console.log('Players generated:', response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      <div className="container mx-auto">
        <div className="mb-4">
          <label htmlFor="playerAmount" className="block text-sm font-medium text-gray-200">
            Players amount
          </label>
          <div className="mt-1">
          <input
            type="number"
            id="playerAmount"
            name="playerAmount"
            min="0"
            max="500"
            value={playerAmount}
            onChange={(e) => setPlayerAmount(e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md bg-gray-800 border-gray-600 placeholder-gray-400 text-white w-32"
            placeholder="Enter amount"
          />
          </div>
        </div>
        <button
          onClick={handleGenerateClick}
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate
        </button>
        {/* Renderização dos jogadores gerados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {players.map(player => (
            <PlayerCard 
              key={player.id} {...player} onClick={() => handlePlayerClick(player)} />
          ))}
          <PlayerModal player={selectedPlayer} onClose={handleCloseModal} />
        </div>
      </div>
    </div>
  );
}

export default App;
