const ProgressBar = ({ label, value }) => (
  <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
    <div className="flex justify-between bg-blue-600 text-xs font-medium text-blue-100 p-0.5 leading-none rounded-l-full" 
      style={{ width: `${value}%` }}>
      <span>{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  </div>
);

const PlayerModal = ({ player, onClose }) => {
  if (!player) return null;
  console.log(player)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <button onClick={onClose} className="float-right bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
        <h2 className="text-xl font-bold mb-2">{player.name} {player.lastName}</h2>
        <h3 className="text-xl font-bold mb-2">Age: {player.age}</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p>Position: {player.position}</p>
            <p>Overall: {player.overall}</p>
          </div>
          <div>
            <p>Country: {player.country}</p>
            <p>City: {player.city}</p>
          </div>
          <div>
            <p>Height: {player.athletics.heightInMeters}m</p>
            <p>Weight: {player.athletics.weightInKg}kg</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2">Attributes</h3>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(player.athletics.attributes).map(([key, value]) => (
              <ProgressBar key={key} label={key} value={value} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Role Attributes</h3>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(player.roleAttributes).map(([key, value]) => (
              <ProgressBar key={key} label={key} value={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerModal;
