import  { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    useEffect(() => {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
    
        // Cleanup function to restore scrolling
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="absolute top-10 left-10 flex items-center">
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <span className="ml-2 text-white font-bold text-lg">Logo</span>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Create an account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">User name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-2 border border-gray-300 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="example.email@gmail.com"
              className="w-full p-2 border border-gray-300 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter at least 8+ characters"
              className="w-full p-2 border border-gray-300 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Enter at least 8+ characters"
              className="w-full p-2 border border-gray-300 rounded-xl mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-700 text-white p-2 rounded-xl mt-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:bg-gray-800"
          >
            Sign up
          </button>
          <p className="text-center text-gray-600 mt-4">
            Been here before? <Link to="/login" className="text-indigo-600">Log in</Link>
          </p>
        </form>
      </div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gray-800 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        {/* Bottom Left Semi-Circle */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-800 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
    </div>
    </div>
  )
}

export default Signup
