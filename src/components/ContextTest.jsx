import { info } from "autoprefixer";
import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const ContextTest = () => {
  let [test, setTest] = useState(" ");
  let { name, setName } = useContext(UserContext);

  let handleInput = (e) => {
    setTest(e.target.value);
  };

  let handleSubmit = () => {
    setName(test);
  };

  return (
    <div>
      <input
        onChange={handleInput}
        type="text"
        className="border border-slate-600 py-1"
      />
      <button onClick={handleSubmit} className="bg-slate-300 px-2 py-1 rounded-md ml-1">submit</button>
    </div>
  );
};

export default ContextTest;
