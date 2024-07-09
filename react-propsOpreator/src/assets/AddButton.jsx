import React, { useState } from "react";
import Empty from "./Empty";

function AddButton() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);

  // console.log(name) chl rha hai yaha tk!
  function handleSubmit() {
    const dataModel = {
      // yeh data or state ka name data same ho rha tha!
      name,
      email,
      password,
      message,
    };

    setData(dataModel);
    // console.log(data)
  }
  return (
    <center>
      <br></br>
      <div>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <br></br>
      <br></br>
      <div>
        <label>Email: </label>
        <input
          type="email"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <br></br>
      <br></br>
      <div>
        <label>Password: </label>
        <input
          type="password"
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <br></br>
      <br></br>
      <div>
        <label> Message: </label>
        <input
          type="text-area"
          placeholder="Enter your message"
          onChange={(e) => setMessage(e.target.value)}
        ></input>
      </div>
      <br></br>
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
      <br></br>
      {data ? ( // ? work on true comditon! neeche wala code!
        <div>
          <h1>Your Data</h1>
          <h4>Name: {data.name}</h4>

          <h4>Email: {data.email}</h4>

          <h4>Password: {data.password}</h4>

          <h4>Message: {data.message}</h4>
        </div>
      ) : (
        <Empty></Empty> // if conditon fail means data nhi hoga tb yeh hoga!
      )}
    </center>
  );
}

export default AddButton;
