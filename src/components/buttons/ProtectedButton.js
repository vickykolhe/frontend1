// import React from "react";
// import { useAuth } from "../../context/AuthContext";

// const ProtectedButton = ({ to, children, onClick, onAuthRequired }) => {
//   const { currentUser } = useAuth();

//   return (
//     <button onClick={() => (currentUser ? onClick() : onAuthRequired())}>
//       {children}
//     </button>
//   );
// };

// export default ProtectedButton;

import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedButton = ({
  to,
  children,
  onClick,
  onAuthRequired,
  className,
}) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (currentUser) {
      if (to) {
        navigate(to); // Navigate to the given path
      } else if (onClick) {
        onClick(); // Or call custom click handler
      }
    } else {
      onAuthRequired?.(); // Trigger login/signup modal
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default ProtectedButton;
