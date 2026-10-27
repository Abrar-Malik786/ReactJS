import { useState } from "react";
export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });
  // let [fullName, setFullName] = useState("");
  // let [username, setUsername] = useState("");
  // let handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };
  // let handleUsername = (event) => {
  //   setUsername(event.target.value);
  // };
  return (
    <form>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        placeholder="enter full name"
        value={formData.fullName}
        onChange={handleNameChange}
        id="fullName"
      />
      <br />
      <br />
      <br />
      <br />
      <label htmlFor="username">username</label>
      <input
        type="text"
        placeholder="enter full name"
        value={username}
        onChange={handleUsername}
        id="username"
      />
      <button>Submit</button>
    </form>
  );

