import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../Context/AuthContext";
import { use } from "react";

export default function Login() {
const { logIn, googleSign, setUser} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then((res) => {
        // if (loading) {
        //   return <Loading></Loading>;
        // }
        setUser(res.user)
        toast.success("Successfully Sign in");
        navigate(`${location.state ? location.state : ""}`);
      })
      .catch(() => {
        toast.error("Auth/Invalid-credential");
      });
  };

  const handleGoogle = () => {
    googleSign()
      .then((res) => {
        setUser(res.user);
        toast.success("Google sign In Successfully");
        navigate(`${location.state ? location.state : ""}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">Welcome back</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name='email'
            placeholder="Email"
            className="w-full border border-gray-300 rounded-full px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />

          <input
            type="password"
            name="password"
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
            onClick={handleGoogle}
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
