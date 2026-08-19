import { Outlet, Link } from "react-router-dom";

const LayoutComponent = () => {
  return (
    <div>
      <Link to="/"> Login</Link>
      <Link to="/home"> home</Link>
      <Link to="/infinity"> Infinity</Link>

      <Outlet />
    </div>
  );
};

export default LayoutComponent;
