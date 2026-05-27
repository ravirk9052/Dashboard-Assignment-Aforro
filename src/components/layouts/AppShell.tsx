import { Outlet } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import TopBar from "./TopBar";

const AppShell = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray">
      <SideNavigation />

      <main className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        <TopBar />
        <div className="p-(--d-20) flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppShell;
