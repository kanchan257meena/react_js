import React, { useState } from "react";

const ToDoList_5 = () => {
  let [Input, Setinput] = useState("");
  let [data, Setdata] = useState([]);

  function fun1(a) {
    Setinput(a.target.value);
  }

  function fun2() {
    Setdata([...data, Input]);
    Setinput("");
  }

  function fun3(id) {
    let newData = data.filter((x, y) => {
      return y != id;
    });
    Setdata(newData);
  }

  return (
    <div>
      <h1>To do list</h1>
      <input
        style={{ height: "30px" }}
        onChange={fun1}
        type="text"
        placeholder="enter your data"
        value={Input}
      />
      <button onClick={fun2}>Add</button>

      {data.map((a, b) => {
        return (
          <div>
            <li> {a}</li>

            <button style={{ backgroundColor: " " }} onClick={() => fun3(b)}>
              Delete
            </button>
            {/* here we are using arrow function so that function will only be called on click */}
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList_5;
