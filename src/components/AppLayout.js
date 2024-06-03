import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="mt-20">
      <Outlet />
    </div>
  );
};

export default AppLayout;
