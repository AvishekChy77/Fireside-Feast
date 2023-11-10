import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div>Hello world!</div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
