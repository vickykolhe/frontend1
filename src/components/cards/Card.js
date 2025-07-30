// const Card = ({ title, description, image }) => {
//   return (
//     <div className="min-w-[250px] bg-black text-black rounded-xl shadow-md overflow-hidden m-2">
//       <img src={image} alt={title} className="w-full h-40 object-cover" />
//       <div className="p-4">
//         <h3 className="font-bold text-lg mb-2">{title}</h3>
//         <p className="text-sm">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;

// import React from "react";
// import { useState } from "react";
// import styled from "styled-components";
// import { FaUser, FaHeart, FaShareAlt, FaBookmark } from "react-icons/fa";
// import CustomButton from "../buttons/CustomButton";

// const Card = ({ image, title, username }) => {
//   const [liked, setLiked] = useState(false);
//   const [bookmarked, setBookmarked] = useState(false);

//   return (
//     <StyledWrapper>
//       <div className="card">
//         {/* Top-right Share */}
//         <button className="share-button">
//           <FaShareAlt />
//         </button>

//         {/* Title */}
//         <h3 className="card-title text-normalcolor font-normaltext">{title}</h3>

//         {/* Image */}
//         <img src={image} alt="Card Visual" className="card-image" />

//         {/* Username */}
//         <div className="flex justify-between w-full ">
//           <div className="username text-normalcolor font-normaltext">
//             <FaUser className="icon" />
//             <span>{username}</span>
//           </div>

//           {/* Like & Bookmark */}
//           <div className="actions">
//             <button
//               onClick={() => setLiked(!liked)}
//               style={{
//                 backgroundColor: liked ? "#bb0808" : "white",
//                 color: liked ? "white" : "black",
//               }}
//             >
//               <FaHeart />
//             </button>
//             <button
//               onClick={() => setBookmarked(!bookmarked)}
//               style={{
//                 backgroundColor: bookmarked ? "#bb0808" : "white",
//                 color: bookmarked ? "white" : "black",
//               }}
//             >
//               <FaBookmark />
//             </button>
//           </div>
//         </div>

//         {/* Play Button */}
//         <div className="play-button">
//           <button>
//             <CustomButton
//               text="Play"
//               textClassName="text-normalcolor font-normaltext text-normallogin p-0.5 pl-2"
//             />
//           </button>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .card {
//     width: 280px;
//     height: 350px;
//     border-radius: 20px;
//     background: linear-gradient(145deg, #110c0cff, #000000ff);
//     box-shadow: 0px 8px 20px rgba(73, 10, 10, 0.74);
//     overflow: hidden;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 18px 18px 24px;
//   }

//   .share-button {
//     position: absolute;
//     top: 18px;
//     right: 15px;
//     background: white;
//     border: none;
//     font-size: 16px;
//     padding: 8px;
//     border-radius: 50%;
//     cursor: pointer;
//     box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
//   }

//   .share-button:hover {
//     background-color: #bb0808ff;
//   }

//   .card-title {
//     font-size: 26px;
//     margin-bottom: 10px;
//   }

//   .card-image {
//     width: 100%;
//     height: 150px;
//     object-fit: cover;
//     border-radius: 12px;
//     margin-bottom: 12px;
//   }

//   .username {
//     display: flex;
//     align-items: center;
//     font-size: 20px;
//     gap: 8px;
//     margin-bottom: 14px;
//   }

//   .icon {
//     font-size: 18px;
//     color: #ffffff;
//   }

//   .actions {
//     display: flex;
//     gap: 8px;
//     margin-top: 10px;
//     margin-bottom: 20px;
//   }

//   .actions button {
//     background-color: white;
//     border: none;
//     font-size: 16px;
//     padding: 8px;
//     border-radius: 50%;
//     cursor: pointer;
//     box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
//   }

//   .actions button:hover {
//     background-color: #bb0808ff;
//   }

//   .play-button {
//     margin-top: 1px;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//   }
// `;

// export default Card;

import React, { useState } from "react";
import styled from "styled-components";
import {
  FaUser,
  FaHeart,
  FaShareAlt,
  FaBookmark,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLink,
  FaTimes,
  FaRegCopy,
} from "react-icons/fa";
import CustomButton from "../buttons/CustomButton";

const Card = ({ image, title, username }) => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareLink = window.location.href; // Replace with your actual game link if needed

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <StyledWrapper>
      <div className="card">
        {/* Top-right Share */}
        <button className="share-button" onClick={() => setShowModal(true)}>
          <FaShareAlt />
        </button>

        {/* Title */}
        <h3 className="card-title text-normalcolor font-normaltext">{title}</h3>

        {/* Image */}
        <img src={image} alt="Card Visual" className="card-image" />

        {/* Username */}
        <div className="flex justify-between w-full">
          <div className="username text-normalcolor font-normaltext">
            <FaUser className="icon" />
            <span>{username}</span>
          </div>

          {/* Like & Bookmark */}
          <div className="actions">
            <button
              onClick={() => setLiked(!liked)}
              style={{
                backgroundColor: liked ? "#bb0808" : "white",
                color: liked ? "white" : "black",
              }}
            >
              <FaHeart />
            </button>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              style={{
                backgroundColor: bookmarked ? "#bb0808" : "white",
                color: bookmarked ? "white" : "black",
              }}
            >
              <FaBookmark />
            </button>
          </div>
        </div>

        {/* Play Button */}
        <div className="play-button">
          <button>
            <CustomButton
              text="Play"
              textClassName="text-normalcolor font-normaltext text-normallogin p-0.5 pl-2"
            />
          </button>
        </div>
      </div>

      {/* Share Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowModal(false)}>
              <FaTimes />
            </button>
            <h2 className="text-white mb-4 text-2xl font-normaltext">
              Share this game
            </h2>
            <div className="share-link">
              <FaLink />
              <input type="text" value={shareLink} readOnly />
              <button onClick={handleCopy} className="copy-btn" title="Copy">
                {copied ? "Copied!" : <FaRegCopy />}
              </button>
            </div>
            <div className="share-icons">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareLink)}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${shareLink}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareLink}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 280px;
    height: 350px;
    border-radius: 20px;
    background: linear-gradient(145deg, #110c0cff, #000000ff);
    box-shadow: 0px 8px 20px rgba(73, 10, 10, 0.74);
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 18px 24px;
  }

  .share-button {
    position: absolute;
    top: 18px;
    right: 15px;
    background: white;
    border: none;
    font-size: 16px;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .share-button:hover {
    background-color: #bb0808ff;
    color: white;
  }

  .card-title {
    font-size: 26px;
    margin-bottom: 10px;
  }

  .card-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 12px;
  }

  .username {
    display: flex;
    align-items: center;
    font-size: 20px;
    gap: 8px;
    margin-bottom: 14px;
  }

  .icon {
    font-size: 18px;
    color: #ffffff;
  }

  .actions {
    display: flex;
    gap: 8px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .actions button {
    background-color: white;
    border: none;
    font-size: 16px;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .actions button:hover {
    background-color: #bb0808ff;
    color: white;
  }

  .play-button {
    margin-top: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  /* Modal styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .modal-content {
    background: linear-gradient(145deg, #110c0cff, #000000ff);
    padding: 24px;
    border-radius: 16px;
    text-align: center;
    width: 320px;
    position: relative;
    border: 1px solid white;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }

  .share-link {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #222;
    padding: 10px 12px;
    border-radius: 8px;
    margin-bottom: 20px;
    color: white;
  }

  .share-link input {
    background: transparent;
    border: none;
    color: white;
    width: 100%;
    font-size: 14px;
    outline: none;
  }

  .copy-btn {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }

  .share-icons {
    display: flex;
    justify-content: center;
    gap: 16px;
    font-size: 24px;
  }

  .share-icons a {
    color: white;
    transition: color 0.3s;
  }

  .share-icons a:hover {
    color: #bb0808;
  }
`;

export default Card;
