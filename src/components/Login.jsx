import  { useEffect } from 'react';

const Login = () => {
    useEffect(() => {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
    
        // Cleanup function to restore scrolling
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);
  return (
    <>
   <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="absolute top-10 left-10 flex items-center">
        <div className="w-8 h-8 bg-white rounded-full"></div>
        <span className="ml-2 text-white font-bold text-lg">Logo</span>
      </div>
      <div className="bg-white p-14 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Welcome To</h2>
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">VENDATA</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="example.email@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter at least 8+ characters"
            />
                <button
              className="bg-teal-700 hover:bg-teal-800 text-white w-full font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log In
            </button>
          </div>
        

        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Not a member yet? <a href="#" className="text-teal-600 hover:text-teal-800">Sign Up</a>
        </p>
      </div>
       {/* Top Right Semi-Circle */}
       <div className="absolute top-0 right-0 w-72 h-72 bg-gray-800 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        {/* Bottom Left Semi-Circle */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-800 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
    </div>
    </>
  )
}

export default Login
