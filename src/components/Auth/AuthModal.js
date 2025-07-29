//first basic

// import React, { useState } from "react";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/config";

// const AuthModal = ({ onClose }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(true);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isLogin) {
//         await signInWithEmailAndPassword(auth, email, password);
//       } else {
//         await createUserWithEmailAndPassword(auth, email, password);
//       }
//       onClose();
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="modal-backdrop">
//       <div className="modal">
//         <h2>{isLogin ? "Login" : "Sign Up"}</h2>
//         <form onSubmit={handleSubmit}>
//           <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//           <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
//           <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
//         </form>
//         <p onClick={() => setIsLogin(!isLogin)}>
//           {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
//         </p>
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default AuthModal;


//2 proper working

// import React, { useState } from "react";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase/config";
// import CustomButton from "../buttons/CustomButton";

// const AuthModal = ({ onClose }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(true);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isLogin) {
//         await signInWithEmailAndPassword(auth, email, password);
//       } else {
//         await createUserWithEmailAndPassword(auth, email, password);
//       }
//       onClose();
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" >
//       <div
//   className="rounded-lg shadow-lg p-8 w-[90%] max-w-md relative"
//   style={{
//     backgroundImage: `url('/images/592d2a1c-82ee-4698-9072-9d91d5cfdab4.jpg')`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   }}
// >
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-4 text-white hover:text-logocolor text-3xl"
//         >
//           &times;
//         </button>

//         <h2 className="text-3xl mb-4 text-center text-white font-normaltext">
//           {isLogin ? "Login" : "SignUp"}
//         </h2>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input
//             className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-logocolor"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-logocolor"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <div className="flex justify-center">
//           <button
//   type="submit"
//   className="py-2"
// >
//   <CustomButton
//     text={isLogin ? "Login" : "SignUp"}
//     textClassName="text-normalcolor font-normaltext text-normallogin p-0.5 pl-2"
//   />
// </button>
// </div>
//         </form>

//         <p
//           onClick={() => setIsLogin(!isLogin)}
//           className="text-sm text-center mt-4 text-blue-600 cursor-pointer hover:underline"
//         >
//           {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthModal;



//3 working with animation

import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import CustomButton from "../buttons/CustomButton";

const AuthModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [buttonOffset, setButtonOffset] = useState(0); // Track button movement

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  const isFormValid = () => email.trim() !== "" && password.trim() !== "";

  return (
    <div className="fixed inset-0 bg-white bg-opacity-30 flex items-center justify-center z-50">
      <div
        className="rounded-lg shadow-lg p-8 w-[90%] max-w-md relative"
        style={{
          backgroundImage: `url('/images/592d2a1c-82ee-4698-9072-9d91d5cfdab4.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-white hover:text-logocolor text-3xl"
        >
          &times;
        </button>

        <h2 className="text-3xl mb-4 text-center text-white font-normaltext">
          {isLogin ? "Login" : "SignUp"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-logocolor"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setButtonOffset(0)}
          />
          <input
            type="password"
            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-logocolor"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setButtonOffset(0)}
          />

          {/* Moving Button */}
          <div className="flex justify-center overflow-hidden h-[60px] relative">
            <div
              onMouseEnter={() => {
                if (!isFormValid()) {
                  const offset = Math.random() > 0.5 ? 150 : -150;
                  setButtonOffset((prev) =>
                    prev === offset ? -offset : offset
                  );
                }
              }}
              style={{
                transform: `translateX(${buttonOffset}px)`,
                transition: "transform 0.3s ease",
              }}
            >
              <button type="submit" className="py-2">
                <CustomButton
                  text={isLogin ? "Login" : "SignUp"}
                  textClassName="text-normalcolor font-normaltext text-normallogin p-0.5 pl-2"
                />
              </button>
            </div>
          </div>
        </form>

        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-center mt-4 text-blue-600 cursor-pointer hover:underline"
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;



