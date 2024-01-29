import Flag from 'react-flagkit';

import clubLogo from '../assets/clublogo.png';

const PlayerCard = ({ name, lastName, position, overall, country, roleAttributes, onClick }) => {
  const countryCode = {
    Argentina: "AR",
    Belgium: "BE",
    Brazil: "BR",
    Colombia: "CO",
    Croatia: "HR",
    England: "GB-ENG",
    France: "FR",
    Germany: "DE",
    Italy: "IT",
    Mexico: "MX",
    Netherlands: "NL",
    Portugal: "PT",
    Senegal: "SN",
    Spain: "ES",
    UnitedStates: "US",
    Uruguay: "UY"
  };
  const { pace, shooting, passing, dribbling, defending, physical} = roleAttributes;
  
  return (
    <div className="transform hover:scale-105 transition duration-300 ease-in-out bg-gradient-to-br from-yellow-400 to-black rounded overflow-hidden shadow-lg m-4" onClick={onClick}>
      <div className="flex justify-between items-center px-6 py-4">
        <div className="">
          <div className="font-bold text-xl mb-2">{name}</div>
          <div className="font-bold text-xl mb-2">{lastName}</div>
          <p className="font-bold text-gray-700">{position}</p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold">{overall}</div>
          <div className="text-sm font-semibold">Overall</div>
        </div>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <img className="w-12 h-12" src={clubLogo} alt="Club Logo" />
        <Flag country={countryCode[country]} size={48} />
      </div>
      <div className="px-6 pt-4 pb-2">
        <div className="grid grid-cols-3 gap-2">
          <StatChip label="PAC" value={pace} />
          <StatChip label="SHO" value={shooting} />
          <StatChip label="PAS" value={passing} />
          <StatChip label="DRI" value={dribbling} />
          <StatChip label="DEF" value={defending} />
          <StatChip label="PHY" value={physical} />
        </div>
      </div>
    </div>
  );
};

const StatChip = ({ label, value }) => {
  return (
    <span className="inline-flex items-center justify-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
      {label}: {value}
    </span>
  );
};

export default PlayerCard;
