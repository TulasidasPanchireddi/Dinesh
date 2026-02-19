import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <div className="bg-indigo-600 text-white px-4 sm:px-6 py-3 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center">
        <h1 className="text-lg sm:text-xl font-bold">
          Admin Dashboard
        </h1>
        <button
          onClick={() => navigate("/")}
          className="bg-white text-indigo-600 px-4 py-1 rounded hover:bg-gray-200 text-sm"
        >
          Logout
        </button>
      </div>

      {/* Cards */}
      <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-sm sm:text-base font-semibold text-gray-600">
            Total Employees
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-indigo-600 mt-2">
            128
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-sm sm:text-base font-semibold text-gray-600">
            Departments
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-indigo-600 mt-2">
            8
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-sm sm:text-base font-semibold text-gray-600">
            Reports Generated
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-indigo-600 mt-2">
            24
          </p>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
