import { Button } from "@/components/ui/button";

/* eslint-disable react/prop-types */
function SortBar({ onSort }) {
    return (
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Sort Bots</h2>
        <div className="flex space-x-4">
          <Button
            onClick={() => onSort("health")}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Sort by Health
          </Button>
          <Button
            onClick={() => onSort("damage")}
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
          >
            Sort by Damage
          </Button>
          <Button 
            onClick={() => onSort("armor")}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 transition-colors"
          >
            Sort by Armor
          </Button>
        </div>
      </div>
    );
  }
  
  export default SortBar;