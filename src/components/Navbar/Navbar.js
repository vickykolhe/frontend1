// import React from "react";
// import { useAuth } from "../../context/AuthContext";
// import { signOut } from "firebase/auth";
// import { auth } from "../../firebase/config";
// import CustomButton from "../buttons/CustomButton";
// import CustomButtonReverse from "../buttons/CustomButtonReverse";

// const Navbar = ({ onLoginClick }) => {
//   const { currentUser } = useAuth();

//   return (
//     <nav className="navbar">
//       <h1 className="text-logocolor font-jersey text-custom ml-24">KHELIO</h1>

//       <div>
//         {currentUser ? (
//           <>
//             <span>{currentUser.email}</span>
//             <button onClick={() => signOut(auth)}>Logout</button>
//           </>
//         ) : (
//           <div className="flex gap-3 ml-24">
//             <button onClick={onLoginClick}><CustomButton text="Login" textClassName="text-normalcolor font-normaltext text-normallogin p-0.5 pl-2 "  /></button>
//             <button onClick={onLoginClick}><CustomButtonReverse text="SignUp" textClassName="text-normalcolor font-normaltext text-normallogin p-0.5 pl-2 " /></button>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CustomButton from "../buttons/CustomButton";
import CustomButtonReverse from "../buttons/CustomButtonReverse";
import { FaUserCircle } from "react-icons/fa";
import ProtectedButton from "../buttons/ProtectedButton";

const Navbar = ({ setShowAuth, onLoginClick }) => {
  const { currentUser } = useAuth();

  return (
    <nav className="navbar w-full px-6 py-1 flex justify-between items-center shadow-md bg-[#1a1a1a] z-50 relative top-0 z-50">
      {/* Logo */}
      <h1 className="text-logocolor font-jersey text-custom ml-16">KHELIO</h1>

      {/* Nav Links */}
      <ul className="flex gap-8 ml-8">
        <li>
          <Link
            to="/"
            className=" font-normaltext text-normalcolor text-navlinks hover:text-logocolor transition"
          >
            HOME
          </Link>
        </li>
        <li>
          <ProtectedButton
            to="/ChatPage"
            onAuthRequired={() => setShowAuth(true)}
            className=" font-normaltext text-normalcolor text-navlinks hover:text-logocolor transition"
          >
            CREATE
          </ProtectedButton>
        </li>
        <li>
          <Link
            to="/about"
            className=" font-normaltext text-normalcolor text-navlinks hover:text-logocolor transition"
          >
            ABOUT
          </Link>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex items-center gap-3 mr-2 mt-2">
        {currentUser ? (
          <>
            <Link to="/profile">
              <FaUserCircle className="text-5xl mr-6 ml-20 mb-1 text-white hover:text-logocolor transition-all hover:scale-110 hover:bg" />
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={onLoginClick}
              className="px-1 py-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg"
            >
              <CustomButton
                text="Login"
                textClassName="text-normalcolor font-normaltext text-normallogin p-0.5 pl-2"
              />
            </button>
            <button
              onClick={onLoginClick}
              className="px-1 py-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg"
            >
              <CustomButtonReverse
                text="SignUp"
                textClassName="text-normalcolor font-normaltext text-normallogin p-0.5 pl-2"
              />
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
