import logo from "./logo.svg";
import "./App.css";
import { CustomerForm } from "./component/CustomerForm";
import { CustomerTable } from "./component/CustomerTable";
import { useState } from "react";

const App = () => {
  const [list, setList] = useState([]);

  const addUser = (userObj) => {
    setList([...list, userObj]);
  };

  return (
    <>
      <div className="container pt-4 ">
        <h2 className="text-center pt-2 ">Customer List</h2>
        <hr />
        <h1 className="text-center pt-2"></h1>
        <hr />
        {/* form component */}
        <CustomerForm addUser={addUser} />
        {/* table component */}
        <CustomerTable list={list} />
      </div>
    </>
  );
};

export default App;
