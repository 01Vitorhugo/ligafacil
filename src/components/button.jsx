import { Link } from "react-router-dom";

const Button = ({ label, onClick, to }) => {
  return (
    <Link to={to}>
      <button
        onClick={onClick}
        className="w-[173px] h-[43px] rounded-lg text-colorPrin border border-colorInput flex justify-center items-center cursor-pointer"
      >
        <p>{label}</p>
      </button>
    </Link>
  );
};

export default Button;
