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

import React from "react";
import styled from "styled-components";
import { FaUser, FaHeart, FaShareAlt, FaBookmark } from "react-icons/fa";
import CustomButton from "../buttons/CustomButton";

const Card = ({ image, title, username }) => {
  return (
    <StyledWrapper>
      <div className="card">
        {/* Top-right Share */}
        <button className="share-button">
          <FaShareAlt />
        </button>

        {/* Title */}
        <h3 className="card-title text-normalcolor font-normaltext">{title}</h3>

        {/* Image */}
        <img src={image} alt="Card Visual" className="card-image" />

        {/* Username */}
        <div className="flex justify-between w-full ">
          <div className="username text-normalcolor font-normaltext">
            <FaUser className="icon" />
            <span>{username}</span>
          </div>

          {/* Like & Bookmark */}
          <div className="actions">
            <button>
              <FaHeart />
            </button>
            <button>
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
  }

  .play-button {
    margin-top: 1px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export default Card;
