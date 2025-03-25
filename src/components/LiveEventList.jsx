import React, { useState, useEffect } from "react";
import { FaSearch, FaChevronDown, FaFutbol, FaBasketballBall, FaTableTennis, FaVolleyballBall, FaBaseballBall, FaBowlingBall, FaHockeyPuck } from "react-icons/fa";

const LiveEvent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [matches, setMatches] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [expanded, setExpanded] = useState(null); // Track only one expanded dropdown
  const [liveInfo, setLiveInfo] = useState([]);
  const [selectedSport, setSelectedSport] = useState(null);

  useEffect(() => {
    // Simulating match data fetching with real team names
    setTimeout(() => {
      setMatches([
        { id: 1, score: "1 - 2", teams: "FC Barcelona vs Real Madrid", league: "La Liga", time: "12:30", gameId: "101", event: "Football", result: "1-2", dc: "1", overUnder: "O", odds: [1.23, 3.45, 2.12], more: 150 },
        { id: 2, score: "0 - 1", teams: "Manchester United vs Liverpool", league: "English Premier League", time: "13:00", gameId: "102", event: "Football", result: "0-1", dc: "X", overUnder: "U", odds: [2.1, 3.0, 1.9], more: 100 },
        { id: 3, score: "2 - 2", teams: "Atletico Madrid vs Sevilla FC", league: "La Liga", time: "14:30", gameId: "103", event: "Football", result: "2-2", dc: "1X", overUnder: "O", odds: [1.5, 2.8, 2.0], more: 120 },
        { id: 4, score: "0 - 1", teams: "Juventus vs Inter Milan", league: "Serie A", time: "16:00", gameId: "104", event: "Football", result: "0-1", dc: "X2", overUnder: "O", odds: [1.9, 3.2, 2.3], more: 110 },
        { id: 5, score: "3 - 1", teams: "Los Angeles Lakers vs Miami Heat", league: "NBA", time: "17:30", gameId: "105", event: "Basketball", result: "3-1", dc: "1", overUnder: "O", odds: [1.5, 2.1, 3.0], more: 140 },
        { id: 6, score: "1 - 1", teams: "CSKA Moscow vs Fenerbahçe", league: "EuroLeague", time: "18:00", gameId: "106", event: "Basketball", result: "1-1", dc: "X", overUnder: "U", odds: [1.8, 2.3, 2.5], more: 130 },
        { id: 7, score: "0 - 0", teams: "Roger Federer vs Rafael Nadal", league: "ATP Tour", time: "19:00", gameId: "107", event: "Tennis", result: "0-0", dc: "1X", overUnder: "O", odds: [1.4, 3.1, 2.0], more: 100 },
        { id: 8, score: "1 - 2", teams: "Serena Williams vs Naomi Osaka", league: "WTA", time: "20:00", gameId: "108", event: "Tennis", result: "1-2", dc: "1X", overUnder: "U", odds: [1.6, 2.7, 2.4], more: 90 },
        { id: 9, score: "1 - 0", teams: "New York Yankees vs Boston Red Sox", league: "MLB", time: "21:30", gameId: "109", event: "Baseball", result: "1-0", dc: "X2", overUnder: "O", odds: [1.9, 3.5, 1.8], more: 160 },
        { id: 10, score: "3 - 2", teams: "Doosan Bears vs Kia Tigers", league: "KBO", time: "22:00", gameId: "110", event: "Baseball", result: "3-2", dc: "1", overUnder: "O", odds: [1.7, 3.0, 2.1], more: 140 },
      ]);
    }, 500);
  }, []);

  useEffect(() => {
    // Simulating competitions data fetching
    setTimeout(() => {
      setCompetitions([
        { name: "Football", count: 2088, icon: <FaFutbol />, leagues: ["La Liga", "English Premier League", "Serie A"] },
        { name: "Basketball", count: 416, icon: <FaBasketballBall />, leagues: ["NBA", "EuroLeague"] },
        { name: "Tennis", count: 151, icon: <FaTableTennis />, leagues: ["ATP Tour", "WTA"] },
        { name: "Volleyball", count: 216, icon: <FaVolleyballBall />, leagues: ["CEV Champions League", "FIVB World Cup"] },
        { name: "Baseball", count: 250, icon: <FaBaseballBall />, leagues: ["MLB", "KBO"] },
        { name: "Hockey", count: 125, icon: <FaHockeyPuck />, leagues: ["NHL", "KHL"] },
        { name: "Bowling", count: 33, icon: <FaBowlingBall />, leagues: ["PBA Tour"] },
      ]);
      setLiveInfo([
        { id: 1, event: "Brazil - Germany", status: "Live", time: "12:30" },
        { id: 2, event: "Spain - Argentina", status: "Live", time: "12:00" },
        { id: 3, event: "USA - Italy", status: "Live", time: "14:30" },
        { id: 4, event: "France - Portugal", status: "Live", time: "15:00" },
      ]);
    }, 500);
  }, []);

  const toggleExpand = (name) => {
    // Toggle the dropdown, ensuring only one is open at a time
    setExpanded((prev) => (prev === name ? null : name));
    setSelectedSport((prevSport) => (prevSport === name ? null : name));
  };

  return (
    <div className="bg-gray-800 text-white font-sans flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-full lg:w-1/5 bg-gray-700 p-4 overflow-y-auto">
          <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <div className="mt-4">
            <div className="flex space-x-4 mb-4">
              <span className="px-4 py-2 bg-gray-600 rounded cursor-pointer">Pre-Match</span>
              <span className="px-4 py-2 bg-gray-600 rounded cursor-pointer">Live</span>
            </div>
            <div className="flex space-x-2 text-sm">
              <span className="px-3 py-1 bg-gray-600 rounded cursor-pointer">Today</span>
              <span className="px-3 py-1 bg-gray-600 rounded cursor-pointer">Tomorrow</span>
              <span className="px-3 py-1 bg-gray-600 rounded cursor-pointer">Week</span>
              <span className="px-3 py-1 bg-yellow-500 rounded cursor-pointer">All</span>
            </div>
          </div>

          {/* Popular Competitions */}
          <div className="mt-4">
            <div className="text-yellow-500 mb-2">Popular competitions</div>
            <div className="max-h-96 overflow-y-auto">
              {competitions.map((comp) => (
                <div key={comp.name} className="mb-4">
                  <div className="flex justify-between items-center bg-gray-600 p-2 rounded cursor-pointer">
                    <div className="flex items-center gap-2">
                      {comp.icon} {comp.name} ({comp.count})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/5 p-4 overflow-y-auto">
          <div className="flex space-x-3 mb-4 text-sm">
            <a href="/home" className="text-yellow-500 hover:text-white">Home</a>
            <span className="text-yellow-500">|</span>
            <a href="/live-event-list" className="text-yellow-500 hover:text-white">Live Event List</a>
            <span className="text-yellow-500">|</span>
            <a href="/multi-view" className="text-yellow-500 hover:text-white">Multi View</a>
            <span className="text-yellow-500">|</span>
            <a href="#calendar" className="text-yellow-500 hover:text-white">Calendar</a>
            <span className="text-yellow-500">|</span>
            <a href="#results" className="text-yellow-500 hover:text-white">Results</a>
          </div>

          {/* Dropdown Tabs for Sports */}
          <div className="space-y-4">
            {competitions.map((comp) => (
              <div key={comp.name} className="relative mb-2">
                <button
                  onClick={() => toggleExpand(comp.name)}
                  className="w-full text-left px-4 py-2 bg-gray-600 text-white rounded focus:outline-none flex justify-between items-center"
                >
                  <div className="flex items-center gap-2">
                    {comp.icon} {comp.name}
                  </div>
                  <FaChevronDown className={`transition-transform ${expanded === comp.name ? 'rotate-180' : ''}`} />
                </button>
                {/* Dropdown content with leagues and matches */}
                <div
                  className={`absolute left-0 w-full bg-gray-700 p-4 rounded transition-all duration-300 
                  ${expanded === comp.name ? 'max-h-[400px] z-50 overflow-y-auto' : 'max-h-0 overflow-hidden z-0'}`}
                  style={{ zIndex: expanded === comp.name ? 100 : 0 }}
                >
                  {expanded === comp.name &&
                    comp.leagues.map((league) => (
                      <div key={league} className="mb-4">
                        <div className="text-lg font-semibold text-yellow-500 mb-2">{league}</div>
                        <div className="bg-gray-600 p-2 rounded">
                          <LiveMatchesTable matches={matches.filter((match) => match.league === league)} />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section for Live Info */}
        <div className="w-full lg:w-1/4 p-4 bg-gray-700 lg:py-4 overflow-y-auto">
          <LiveInfo liveInfo={liveInfo} />
        </div>
      </div>
    </div>
  );
};

// Search Component
const SearchInput = ({ searchQuery, setSearchQuery }) => (
  <div className="relative">
    <input
      className="w-full p-2 pl-8 bg-gray-600 text-white rounded"
      placeholder="Find your match/league..."
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <FaSearch className="absolute top-3 left-2 text-gray-400" />
  </div>
);

// Live Matches Table Component
const LiveMatchesTable = ({ matches }) => (
  <div className="bg-gray-700 p-4 rounded overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-gray-400">
          <th className="p-2">Time</th>
          <th className="p-2">Game ID</th>
          <th className="p-2">Event</th>
          <th className="p-2">Result</th>
          <th className="p-2">DC</th>
          <th className="p-2">O/U</th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match) => (
          <tr key={match.id} className="text-gray-300">
            <td className="p-2">{match.time}</td>
            <td className="p-2">{match.gameId}</td>
            <td className="p-2">{match.event}</td>
            <td className="p-2">{match.result}</td>
            <td className="p-2">{match.dc}</td>
            <td className="p-2">{match.overUnder}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Live Info Section
const LiveInfo = ({ liveInfo }) => (
  <div className="bg-gray-600 p-4 rounded">
    <h3 className="text-lg font-semibold text-yellow-500 mb-2">Live Info</h3>
    <div className="space-y-4">
      {liveInfo.map((info) => (
        <div key={info.id} className="bg-gray-700 p-2 rounded">
          <div className="text-sm font-semibold">{info.event}</div>
          <div className="text-xs">{info.time}</div>
          <div className="text-xs">{info.status}</div>
        </div>
      ))}
    </div>
  </div>
);

export default LiveEvent;
