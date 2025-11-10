import { Link } from "react-router";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">Welcome back</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-full px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-full px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-indigo-700 text-white font-medium py-3 rounded-full hover:bg-indigo-800 transition duration-300"
          >
            Log in
          </button>

          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-indigo-700 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>

          <button
            type="button"
            className="w-full border border-indigo-600 text-indigo-700 font-medium py-3 rounded-full flex items-center justify-center gap-2 hover:bg-indigo-700 hover:text-white transition duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Log in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
