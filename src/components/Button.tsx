import { Link } from "react-router-dom";

interface ButtonProps {
  path?: string;
  text: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ path, text, type }: ButtonProps) => {
  const baseStyles =
    "cursor-pointer px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-lg hover:from-pink-600 hover:to-violet-700 transition-all duration-300";

  if (path) {
    return (
      <Link to={`/${path}`} className={baseStyles}>
        {text}
      </Link>
    );
  } else {
    return (
      <button type={type} className={baseStyles}>
        {text}
      </button>
    );
  }
};

export default Button;
