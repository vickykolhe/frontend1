import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import Card from "../components/cards/Card"; // Assuming Card is the reusable card component

const allGames = [
  // Dummy data – replace with real game objects or fetched data
  {
    id: 1,
    title: "Game 1",
    image: "/images/game1.jpeg",
    user: "User1",
  },
  {
    id: 2,
    title: "Game 2",
    image: "/images/game2.jpeg",
    user: "User2",
  },
  {
    id: 3,
    title: "Game 3",
    image: "/images/game3.jpeg",
    user: "User3",
  },
  {
    id: 4,
    title: "Game 4",
    image: "/images/game4.jpeg",
    user: "User4",
  },
  {
    id: 5,
    title: "Game 5",
    image: "/images/game5.jpeg",
    user: "User5",
  },
  {
    id: 6,
    title: "Game 6",
    image: "/images/game6.jpeg",
    user: "User6",
  },
  {
    id: 7,
    title: "Game 7",
    image: "/images/game4.jpeg",
    user: "User7",
  },
  {
    id: 8,
    title: "Game 8",
    image: "/images/game3.jpeg",
    user: "User8",
  },
  {
    id: 9,
    title: "Game 9",
    image: "/images/game1.jpeg",
    user: "User9",
  },
  {
    id: 10,
    title: "Game 10",
    image: "/images/game5.jpeg",
    user: "User10",
  },
  // Add more if needed
];

const ITEMS_PER_PAGE = 4;

const Latestgames = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allGames.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleGames = allGames.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-[#340808] to-[#761010]  px-6 md:px-36 py-12">
        <h2 className="text-4xl font-normaltext text-normalcolor mb-8">
          Latest Games
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleGames.map((game) => (
            <Card
              key={game.id}
              title={game.title}
              image={game.image}
              user={game.user}
            />
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full ${
              currentPage === 1 ? "bg-gray-500" : "bg-logocolor"
            }`}
          >
            Previous
          </button>
          <span className="text-lg">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full ${
              currentPage === totalPages ? "bg-gray-500" : "bg-logocolor"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Latestgames;
