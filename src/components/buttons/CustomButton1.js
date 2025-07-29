const CustomButton = ({
  text = "Get Started",
  textClassName = "",
}) => {
  return (
    <div className="relative w-[400px] h-[120px]  transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="120"
        viewBox="0 0 100 50" 
        fill="none"
        className="absolute inset-0 w-full h-full transition-all duration-300 group-hover:brightness-110"
      >
        <path
          d="M13.4846 31.9935L9 7.35484L104 0L99.5154 38L13.4846 31.9935Z"
          fill="#CE2021"
        />
      </svg>

      <span
        className={`absolute inset-0 flex justify-center group-hover:translate-x-1${textClassName}`}
      >
        {text}
      </span>
    </div>
  );
};

export default CustomButton;
