const CustomButtonReverse = ({ text = "Get Started", textClassName = "" }) => {
  return (
    <div className="relative w-[104px] h-[50px] cursor-pointer">
      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="50"
        viewBox="0 0 104 50"
        fill="none"
        className="absolute inset-0"
      >
        <g filter="url(#filter0_d_137_1173)">
          <path
            d="M99.5154 31.9935L104 7.35484L9 0L13.4846 38L99.5154 31.9935Z"
            fill="#CE2021"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_137_1173"
            x="0"
            y="0"
            width="104"
            height="50"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-5" dy="8" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.471154 0 0 0 0 0.387343 0 0 0 0 0.387343 0 0 0 0.35 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_137_1173"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_137_1173"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      {/* Centered Button Text */}
      <span
        className={`absolute inset-0 flex  justify-center ${textClassName} `}
      >
        {text}
      </span>
    </div>
  );
};
export default CustomButtonReverse;
