import { use } from "react";
import { Link } from "react-router";
import AuthContext from "../Context/AuthContext";
import { toast } from "react-toastify";

const SignUp = () => {
   const { createUser, setUser, googleSign,updateUser } = use(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    // const userInfo = {name,photo}
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordPattern.test(password)) {
      toast.error("kindly provide require password.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("successfully create account");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage, errorCode);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, errorCode);
      });
  };

  const handleGoogle = () => {
    googleSign()
      .then((res) => {
        
        setUser(res.user);
        toast.success("Google sign In Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">Create an account</h2>

        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="text"
            name='name'
            placeholder="Name"
            className="w-full border border-gray-300 rounded-full px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />

          <input
            type="email"
            name='email'
            placeholder="Email"
            className="w-full border border-gray-300 rounded-full px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />

          <input
            type="text"
            name='photo'
            placeholder="Photo URL"
            className="w-full border border-gray-300 rounded-full px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />

          <input
            type="password"
            name='password'
            placeholder="Password"
            className="w-full border border-gray-300 rounded-full px-4 py-3 text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-indigo-700 text-white font-medium py-3 rounded-full hover:bg-indigo-800 transition duration-300"
          >
            Sign up
          </button>

          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-700 font-semibold hover:underline"
            >
              Log in
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
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
