/* eslint-disable react/prop-types */
function BotCollection({ bots, enlistBot }) {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Bots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bots.map((bot) => (
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
                <button
                  onClick={() => enlistBot(bot)}
                  className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Enlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default BotCollection;
  