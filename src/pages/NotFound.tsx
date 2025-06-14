import {
  ExclamationTriangleIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0018] backdrop-blur-sm"></div>

      <div className="relative z-10 text-center p-8 max-w-2xl">
        <div className="inline-flex items-center justify-center bg-violet-900/30 border border-violet-700/50 rounded-full p-4 mb-6">
          <ExclamationTriangleIcon className="w-12 h-12 text-violet-400" />
        </div>

        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-fuchsia-400 mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-violet-200 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white font-medium hover:opacity-90 transition-opacity"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
