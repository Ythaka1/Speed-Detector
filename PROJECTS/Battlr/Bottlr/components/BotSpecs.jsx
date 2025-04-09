/* eslint-disable react/prop-types */
function BotSpecs({ bot, onEnlist, onBack }) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={bot.avatar_url}
          alt={bot.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">{bot.name}</h2>
          <p className="text-gray-600 mt-2">{bot.catchphrase}</p>
          <div className="mt-4 space-y-2">
            <p className="text-gray-700"><strong>Health:</strong> {bot.health}</p>
            <p className="text-gray-700"><strong>Damage:</strong> {bot.damage}</p>
            <p className="text-gray-700"><strong>Armor:</strong> {bot.armor}</p>
          </div>
          <div className="mt-6 space-y-2">
            <button
              onClick={onEnlist}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Enlist
            </button>
            <button
              onClick={onBack}
              className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition-colors"
            >
              Back to List
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default BotSpecs;
  