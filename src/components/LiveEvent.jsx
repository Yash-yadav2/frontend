import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaFutbol,
  FaBasketballBall,
  FaTableTennis,
  FaVolleyballBall,
  FaBaseballBall,
  FaBowlingBall,
  FaHockeyPuck,
  FaChessKnight,
  FaGamepad,
  FaHandRock,
  FaTimes,
} from "react-icons/fa";

const LiveEvent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [matches, setMatches] = useState([]);
  const [competitions, setCompetitions] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [liveInfo, setLiveInfo] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMatches([
        {
          id: 1,
          score: "1 - 2",
          teams: "Team A vs Team B",
          league: "South Korea. K1 League",
          time: "12:30",
          odds: [1.23, 3.45, 2.12],
          more: 150,
        },
        {
          id: 2,
          score: "0 - 1",
          teams: "Team C vs Team D",
          league: "English Premier League",
          time: "13:00",
          odds: [2.1, 3.0, 1.9],
          more: 100,
        },
        {
          id: 3,
          score: "0 - 1",
          teams: "Team C vs Team D",
          league: "English Premier League",
          time: "13:00",
          odds: [2.1, 3.0, 1.9],
          more: 100,
        },
      ]);
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setCompetitions([
        { name: "Football", count: 2088, icon: <FaFutbol /> },
        { name: "Basketball", count: 416, icon: <FaBasketballBall /> },
        { name: "Tennis", count: 151, icon: <FaTableTennis /> },
        { name: "Volleyball", count: 216, icon: <FaVolleyballBall /> },
        { name: "Baseball", count: 98, icon: <FaBaseballBall /> },
        { name: "Bowling", count: 59, icon: <FaBowlingBall /> },
        { name: "Hockey", count: 134, icon: <FaHockeyPuck /> },
        { name: "Chess", count: 25, icon: <FaChessKnight /> },
        { name: "Esports", count: 120, icon: <FaGamepad /> },
        { name: "Rugby", count: 45, icon: <FaHandRock /> },
      ]);
      setLiveInfo([
        { id: 1, event: "Algeria - England", status: "Live", time: "12:30" },
        { id: 2, event: "Spain - Germany", status: "Live", time: "12:00" },
      ]);
    }, 500);
  }, []);

  const toggleExpand = (name) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="bg-gray-800 text-white font-sans">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-1/5 bg-gray-700 p-4">
          <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <div className="mt-4">
            {/* Pre-Match and Live in one row without space */}
            <div className="flex">
              <span className="flex-1 px-4 py-2 text-center cursor-pointer bg-gray-600 hover:bg-gray-500 active:bg-gray-500">
                Pre-Match
              </span>
              <span className="flex-1 px-4 py-2 text-center cursor-pointer bg-gray-600 hover:bg-gray-500 active:bg-gray-500">
                Live 181
              </span>
            </div>

            {/* Filters in one row without space */}
            <div className="flex text-sm">
              <span className="flex-1 px-3 py-2 bg-gray-600 text-center cursor-pointer hover:bg-gray-500 hover:text-yellow-500">
                Today
              </span>
              <span className="flex-1 px-3 py-2 bg-gray-600 text-center cursor-pointer hover:bg-gray-500 hover:text-yellow-500">
                Tomorrow
              </span>
              <span className="flex-1 px-3 py-2 bg-gray-600 text-center cursor-pointer hover:bg-gray-500 hover:text-yellow-500">
                Week
              </span>
              <span className="flex-1 px-3 py-2 bg-gray-600 text-center cursor-pointer hover:bg-gray-500 hover:text-yellow-500">
                All
              </span>
            </div>
          </div>

          <CompetitionList
            competitions={competitions}
            expanded={expanded}
            toggleExpand={toggleExpand}
          />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/5 p-4">
          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
            <a href="/home" className="text-yellow-500 hover:text-white">
              Home
            </a>
            <span className="text-yellow-500">|</span>
            <a
              href="/live-event-list"
              className="text-yellow-500 hover:text-white"
            >
              Live Event List
            </a>
            <span className="text-yellow-500">|</span>
            <a href="/multi-view" className="text-yellow-500 hover:text-white">
              Multi View
            </a>
            <span className="text-yellow-500">|</span>
            <a href="#calendar" className="text-yellow-500 hover:text-white">
              Calendar
            </a>
            <span className="text-yellow-500">|</span>
            <a href="#results" className="text-yellow-500 hover:text-white">
              Results
            </a>
          </div>
          {/* Promotional Image */}
          <div className="mb-4 hidden lg:block">
            <img
              alt="Promotional banner with football players"
              className="w-full rounded"
              src="https://cdn-sp-bn.kertn.net/assets/cms/App_Data/10413bce-d59c-4673-a425-8c0920bacd8a/Files/Multi%20bet%20of%20the%20day/desktop%20vol.%2020.webp"
            />
          </div>

          {/* Live Betting Text and Icons */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-yellow-500 text-lg font-semibold">
              Live Betting
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <FaFutbol className="text-white text-lg hover:text-yellow-500 cursor-pointer transition duration-300" />
              <FaBasketballBall className="text-white text-lg hover:text-yellow-500 cursor-pointer transition duration-300" />
              <FaTableTennis className="text-white text-lg hover:text-yellow-500 cursor-pointer transition duration-300" />
              <FaVolleyballBall className="text-white text-lg hover:text-yellow-500 cursor-pointer transition duration-300" />
              <FaBaseballBall className="text-white text-lg hover:text-yellow-500 cursor-pointer transition duration-300" />
              <FaBowlingBall className="text-white text-lg hover:text-yellow-500 cursor-pointer transition duration-300" />
              <FaHockeyPuck className="text-white text-lg hover:text-yellow-500 cursor-pointer transition duration-300" />
              <FaChessKnight className="text-white text-lg hover:text-yellow-500 cursor-pointer transition duration-300" />
              <FaGamepad className="text-white text-lg hover:text-yellow-500 cursor-pointer transition duration-300" />
              <FaHandRock className="text-white text-lg hover:text-yellow-500 cursor-pointer transition duration-300" />
            </div>
          </div>

          <LiveMatchesTable matches={matches} />
        </div>

        {/* Right Section for Live Info */}
        <div className="w-full lg:w-1/4 p-4 bg-gray-700 lg:py-4">
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

// Competition List Component
const CompetitionList = ({ competitions, expanded, toggleExpand }) => (
  <div className="mt-4">
    <div className="text-yellow-500 mb-2">Popular competitions</div>
    <div className="max-h-96 overflow-y-auto">
      {competitions.map((comp) => (
        <div key={comp.name} className="mb-2">
          <div
            className="flex justify-between items-center bg-gray-600 p-2 rounded cursor-pointer"
            onClick={() => toggleExpand(comp.name)}
          >
            <span className="flex items-center gap-2">
              {comp.icon} {comp.name} ({comp.count})
            </span>
         
          </div>
          {expanded[comp.name] && (
            <div className="pl-4 text-sm text-gray-300">Leagues and Matches...</div>
          )}
        </div>
      ))}
    </div>
  </div>
);

// Live Matches Table Component
const LiveMatchesTable = ({ matches }) => (
  <div className="bg-gray-700 p-4 rounded overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-gray-400">
          <th className="p-2">Score</th>
          <th className="p-2">Teams</th>
          <th className="p-2">Time</th>
          <th className="p-2">1</th>
          <th className="p-2">X</th>
          <th className="p-2">2</th>
          <th className="p-2">More</th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match) => (
          <tr key={match.id} className="hover:bg-gray-600">
            <td className="p-2">
              <div className="match-score">
                <span>{match.score}</span>
              </div>
            </td>
            <td className="p-2">
              <div className="match-teams">
                <span>{match.teams}</span>
              </div>
              <div className="match-league text-sm text-gray-400">
                <span>{match.league}</span>
              </div>
            </td>
            <td className="p-2">
              <div className="match-time">
                <span>{match.time}</span>
              </div>
            </td>
            {match.odds.map((odd, index) => (
              <td key={index} className="p-2">
                <div className="match-odds">
                  <span>{odd}</span>
                </div>
              </td>
            ))}
            <td className="p-2">
              <div className="indicator">
                <span>+{match.more}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Live Info Component
const LiveInfo = ({ liveInfo }) => (
  <div className="w-full p-4 bg-gray-700 rounded mb-4">
    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-4">
        <span className="text-sm hover:text-yellow-500 cursor-pointer">
          Live Info
        </span>
        <span className="text-sm">32</span>
        <span className="text-sm hover:text-yellow-500 cursor-pointer">
          Live TV
        </span>
        <span className="text-sm">37</span>
      </div>
      <div className="flex space-x-2">
        <i className="fas fa-cog hover:text-yellow-500 cursor-pointer"></i>
        <i className="fas fa-user hover:text-yellow-500 cursor-pointer"></i>
      </div>
    </div>

    {/* Live Info Section */}
    <div className="bg-gray-700 p-4 rounded mb-4">
      {liveInfo.map((info) => (
        <div key={info.id} className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold">{info.event}</span>
          <span
            className={`text-xs ${
              info.status === "Live" ? "text-green-500" : "text-red-500"
            }`}
          >
            {info.status}
          </span>
          <span className="text-xs">{info.time}</span>
        </div>
      ))}
    </div>

    {/* Bet Slip Section */}
    <div className="bg-yellow-500 p-4 rounded text-center">
      <button className="text-sm hover:bg-yellow-400">BET SLIP</button>
    </div>
  </div>
);

export default LiveEvent;