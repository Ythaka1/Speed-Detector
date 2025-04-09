import { useEffect, useState } from "react";
import BotCollection from "../components/BotCollection";
import YourBotArmy from "../components/YourBotArmy";
import SortBar from "../components/SortBar"; // Assuming you want to add sorting functionality

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const enlistBot = (bot) => {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  // Discharge should only affect the UI, not the db.json
  const dischargeBot = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id)); // Remove from the army in UI
  };

  const handleSort = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sortedBots);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Bot Battlr
      </h1>
      <SortBar onSort={handleSort} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BotCollection bots={bots} enlistBot={enlistBot} />
        <YourBotArmy
          army={army}
          releaseBot={releaseBot}
          dischargeBot={dischargeBot}
        />
      </div>
    </div>
  );
}

export default App;
