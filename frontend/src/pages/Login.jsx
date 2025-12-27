import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[420px] bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Login Page
        </h2>

        <div className="mb-5">
          <label className="block text-sm mb-1">Email id</label>
          <input
            type="email"
            className="w-full border-b outline-none py-2"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border-b outline-none py-2"
            placeholder="Enter password"
          />
        </div>

        <button className="w-full border rounded-md py-2 hover:bg-gray-100">
          Sign in
        </button>

        <div className="text-center mt-4 text-sm text-blue-600">
          <Link to="/signup">Forget Password? | Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
