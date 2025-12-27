import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[420px] bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Sign Up Page
        </h2>

        <div className="mb-4">
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            className="w-full border-b outline-none py-2"
            placeholder="Enter name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email id</label>
          <input
            type="email"
            className="w-full border-b outline-none py-2"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border-b outline-none py-2"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">Re-enter password</label>
          <input
            type="password"
            className="w-full border-b outline-none py-2"
            placeholder="Confirm password"
          />
        </div>

        <button className="w-full border rounded-md py-2 hover:bg-gray-100">
          Sign Up
        </button>

        <div className="text-center mt-4 text-sm text-blue-600">
          <Link to="/">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
}
