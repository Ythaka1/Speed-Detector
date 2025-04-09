/* eslint-disable react/prop-types */
function YourBotArmy({ army, releaseBot, dischargeBot }) {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Bot Army</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {army.map((bot) => (
            <div
              key={bot.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={bot.avatar_url}
                alt={bot.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{bot.name}</h3>
                <p className="text-gray-600">{bot.bot_class}</p>
                <div className="mt-4 space-y-2">
                  <button
                    onClick={() => releaseBot(bot)}
                    className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors"
                  >
                    Release
                  </button>
                  <button
                    onClick={() => dischargeBot(bot)}
                    className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
                  >
                    Discharge
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default YourBotArmy;
  