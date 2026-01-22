import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const Dashboard = ({ onLogout }) => {
  const roiData = [
    { month: "Jan", roi: 10 },
    { month: "Feb", roi: 12 },
    { month: "Mar", roi: 15 },
    { month: "Apr", roi: 18 },
    { month: "May", roi: 20 },
  ];

  const investmentData = [
    { name: "Crop Farming", value: 40 },
    { name: "Livestock", value: 30 },
    { name: "Greenhouse", value: 20 },
    { name: "Processing", value: 10 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#0B3D2E]">
          Investor Dashboard
        </h1>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </header>
      <main className="p-6">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Invested</h3>
            <p className="text-2xl font-bold text-[#0B3D2E]">₦2,500,000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Active Investments</h3>
            <p className="text-2xl font-bold text-[#0B3D2E]">3</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Expected Returns</h3>
            <p className="text-2xl font-bold text-[#F5C400]">₦375,000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">ROI Growth</h3>
            <p className="text-2xl font-bold text-green-600">+20%</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">ROI Growth Over Time</h3>
            <LineChart width={400} height={300} data={roiData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="roi" stroke="#0B3D2E" />
            </LineChart>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">
              Investment Distribution
            </h3>
            <BarChart width={400} height={300} data={investmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#F5C400" />
            </BarChart>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Investment Status</h3>
          <div className="bg-white p-4 rounded-lg shadow">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left">Investment</th>
                  <th className="text-left">Status</th>
                  <th className="text-left">ROI</th>
                  <th className="text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td>Crop Farming</td>
                  <td>Active</td>
                  <td>15%</td>
                  <td>
                    <button className="text-[#0B3D2E] hover:underline">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td>Livestock</td>
                  <td>Active</td>
                  <td>18%</td>
                  <td>
                    <button className="text-[#0B3D2E] hover:underline">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Greenhouse</td>
                  <td>Completed</td>
                  <td>20%</td>
                  <td>
                    <button className="text-[#0B3D2E] hover:underline">
                      Download Report
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
