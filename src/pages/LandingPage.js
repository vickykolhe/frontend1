// import React, { useState } from "react";
// import Navbar from "../components/Navbar/Navbar";
// import ProtectedButton from "../components/buttons/ProtectedButton";
// import AuthModal from "../components/Auth/AuthModal";

// const LandingPage = () => {
//   const [showAuth, setShowAuth] = useState(false);

//   return (
//     <div>
//       <Navbar onLoginClick={() => setShowAuth(true)} />
//       <div
//         className="hero-section flex items-center justify- text-white text-center h-[87vh] bg-cover bg-center"
//         style={{
//           backgroundImage: `url('/images/back_image.jpg')`,
//         }}
//       >
//       <div className="pl-10">
//         <h1 className="text-2xl font-normaltext mb-4">What does your <span className="text-logocolor">Imagination</span> say today?</h1>
//         <ProtectedButton
//           onClick={() => alert("Protected Action")}
//           onAuthRequired={() => setShowAuth(true)}
//         >
//           Get Started
//         </ProtectedButton>
//         </div>
//       </div>
//       {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
//     </div>
//   );
// };

// export default LandingPage;

import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProtectedButton from "../components/buttons/ProtectedButton";
import AuthModal from "../components/Auth/AuthModal";
import Card from "../components/cards/Card";
import { motion } from "framer-motion";
import Footer from "../components/footer/Footer";
import Button from "../components/buttons/Button";

const cards = [
  {
    title: "Card 1",
    username: "abcd",
    image: "/images/game1.jpeg",
  },
  {
    title: "Card 2",
    username: "lmno",
    image: "/images/game2.jpeg",
  },
  {
    title: "Card 3",
    username: "pqrs",
    image: "/images/game3.jpeg",
  },
  {
    title: "Card 4",
    username: "tuvw",
    image: "/images/game4.jpeg",
  },
  {
    title: "Card 5",
    username: "qwer",
    image: "/images/game5.jpeg",
  },
  {
    title: "Caed 6",
    username: "tomy",
    image: "/images/game6.jpeg",
  },
];

const LandingPage = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div>
      <>
        <Navbar
          onLoginClick={() => setShowAuth(true)}
          setShowAuth={setShowAuth}
        />
        {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      </>

      <div
        className="hero-section  flex items-start justify-start text-white h-[87vh] bg-cover bg-center px-6 md:px-36 relative"
        style={{
          backgroundImage: ` linear-gradient(to bottom, rgba(0,0,0,0) 60%, #000 120%), url('/images/back_image.jpg')`,
        }}
      >
        <div className="w-full max-w-3xl mt-24">
          <h1 className="text-4xl md:text-7xl font-normaltext mb-12 leading-snug">
            What does your{" "}
            <span className="text-imagination block md:inline">
              Imagination
            </span>{" "}
            say
            <span className="block md:block">today?</span>
          </h1>
          <ProtectedButton
            to="/chatpage"
            onAuthRequired={() => setShowAuth(true)}
          >
            <div className="ml-24 mt-4">
              <Button />
            </div>
          </ProtectedButton>
        </div>
      </div>

      {/* Scrollable Card Section */}
      <div
        className="px-6 md:px-36 py-12 z-10 relative"
        style={{
          background:
            "linear-gradient(322.11deg, #761010 10.96%, #671011 38.74%, #340808 55.25%, #000000 89.04%)",
        }}
      >
        {/* Header Row with Title + Button */}
        <div className="flex justify-between items-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-normaltext text-normalcolor mb-5 mt-8"
          >
            Popular Games
          </motion.h2>
          <ProtectedButton
            to="/populargames"
            onAuthRequired={() => setShowAuth(true)}
          >
            {/* <Link
            to="/populargames
          "
          > */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-logocolor text-white rounded-full px-6 py-3 shadow-lg cursor-pointer hover:scale-105 hover:brightness-110 transition duration-300"
            >
              <span className="text-base font-semibold">View More →</span>
            </motion.div>
            {/* </Link> */}
          </ProtectedButton>
        </div>

        {/* Scrollable Card Container */}
        <div className="flex overflow-x-auto no-scrollbar space-x-7 scroll-smooth transition-all duration-500 ease-in-out">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ amount: 0.1 }}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </div>

        {/* Header Row with Title + Button */}
        <div className="flex justify-between items-center mb-5 mt-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-normaltext text-normalcolor mb-5 mt-8"
          >
            Latest Games
          </motion.h2>
          <ProtectedButton
            to="/Latestgames"
            onAuthRequired={() => setShowAuth(true)}
          >
            {/* <Link
            to="/profile
          "
          > */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-logocolor text-white rounded-full px-6 py-3 shadow-lg cursor-pointer hover:scale-105 hover:brightness-110 transition duration-300"
            >
              <span className="text-base font-semibold">View More →</span>
            </motion.div>
          </ProtectedButton>
        </div>

        {/* Scrollable Card Container */}
        <div className="flex overflow-x-auto no-scrollbar space-x-7 scroll-smooth transition-all duration-500 ease-in-out">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.1 }}
            >
              <Card {...card} />
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <Footer />
      </div>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
};

export default LandingPage;
