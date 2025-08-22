import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import GraphImg from "../assets/graph.png";
function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser")) || [];
  const saved = JSON.parse(localStorage.getItem("users")) || [];

  return (
    <>
      <NavBar />
      <SideBar />
      <div className="min-h-screen ml-0  bg-white border-gray-200 dark:bg-[#030C1B] sm:ml-60">
        <div className="mx-10 pt-10">
          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <Card bgColor="bg-[#6BAAFC]">
              <div className="flex justify-between h-full">
                <h1 className="text-xl font-bold text-white self-start">
                  Shipped Orders
                </h1>
                <h1 className="text-7xl font-bold text-white self-center">
                  67
                </h1>
              </div>
            </Card>
            <Card bgColor="bg-[#EF5E7A]">
              <div className="flex justify-between h-full flex-wrap">
                <h1 className="text-xl font-bold text-white self-start">
                  Pending Orders
                </h1>
                <h1 className="text-7xl font-bold text-white self-center">
                  67
                </h1>
              </div>
            </Card>
            <Card bgColor="bg-[#D623FE]">
              <div className="flex justify-between h-full flex-wrap">
                <h1 className="text-xl font-bold text-white self-start">
                  New Orders
                </h1>
                <h1 className="text-7xl font-bold text-white self-center">
                  67
                </h1>
              </div>
            </Card>
          </div>
          <div className="pt-10 mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left column (Inbox + Recent Activity stacked) */}
              <div className="flex flex-col gap-6">
                {/* Card 1: Inbox */}
                <Card bgColor="dark:bg-[#171A3B]">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold dark:text-white">Inbox</h2>
                    <a href="#" className="text-sm text-blue-400">
                      View details
                    </a>
                  </div>
                  <div className="space-y-2 dark:text-white text-sm">
                    <div className="flex justify-between">
                      <p>Waiting for order#12345</p>
                      <span className="text-gray-400">4:39</span>
                    </div>
                    <div className="flex justify-between">
                      <p>Customer support id#22234</p>
                      <span className="text-gray-400">11:07</span>
                    </div>
                  </div>
                </Card>

                {/* Card 2: Recent Activity */}
                <Card bgColor="dark:bg-[#171A3B]">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold dark:text-white">
                      Recent Activity
                    </h2>
                    <a href="#" className="text-sm text-blue-400">
                      View all
                    </a>
                  </div>
                  <ul className="space-y-4 text-sm">
                    <li className="flex justify-between items-center dark:text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        Confirm order update
                      </div>
                      <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                        URGENT
                      </span>
                    </li>
                    <li className="flex justify-between items-center dark:text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        Finish shipping update
                      </div>
                      <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                        URGENT
                      </span>
                    </li>
                    <li className="flex justify-between items-center dark:text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full border border-gray-400"></span>
                        Create new order
                      </div>
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                        NEW
                      </span>
                    </li>
                    <li className="flex justify-between items-center dark:text-white">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        Update payment report
                      </div>
                      <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">
                        DEFAULT
                      </span>
                    </li>
                  </ul>
                </Card>
              </div>

              <div className="">
                <Card bgColor="dark:bg-[#171A3B]">
                  <h2 className="text-lg font-bold dark:text-white mb-1">
                    Today’s Sales
                  </h2>
                  <p className="text-xs text-gray-400 mb-4">30 Sept 2021</p>
                  <div className="w-full h-72 dark:bg-[#1E2045] rounded-lg overflow-hidden">
                    <img
                      src={GraphImg}
                      alt="image description"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
