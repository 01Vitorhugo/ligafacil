


const Button = ({ label, onClick }) => {

    
  return (
    <button onClick={onClick} className="w-[173px] h-[43px]  rounded-lg text-colorPrin border border-colorInput flex justify-center items-center">
      <p>{label}</p>
    </button>
  );
};

export default Button;