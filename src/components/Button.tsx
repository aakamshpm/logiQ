import { Link } from "react-router-dom";

interface ButtonProps {
  path?: string;
  text: string;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
}

const Button = ({ path, text, type, loading = false }: ButtonProps) => {
  const baseStyles =
    "cursor-pointer px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-lg hover:from-pink-600 hover:to-violet-700 transition-all duration-300 flex items-center justify-center gap-2";

  const disabledStyles = loading ? "opacity-70 cursor-not-allowed" : "";

  if (path) {
    return (
      <Link to={`/${path}`} className={`${baseStyles} ${disabledStyles}`}>
        {text}
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        className={`${baseStyles} ${disabledStyles}`}
        disabled={loading}
      >
        {loading && (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
        )}
        {text}
      </button>
    );
  }
};

export default Button;
