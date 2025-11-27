import React, { useState } from "react";
import { useProperty } from "../../contexts/PropertyContext";
import AgentCard from "./AgentCard";

function AgentList() {
  const { agents } = useProperty();
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [image, setImage] = useState("");

  function handleChangeFname(e) {
    setFname(e.target.value);
  }
  function handleChangeLname(e) {
    setLname(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangeTel(e) {
    setTel(e.target.value);
  }
  function handleChangeImage(e) {
    setImage(e.target.value);
  }
  console.log(agents);
  function handleAddAgent(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h2>Agents</h2>
      <form onSubmit={handleAddAgent}>
        <div>
          <label htmlFor="fName">First Name:</label>
          <input
            type="text"
            name="fName"
            id="fName"
            value={fName}
            onChange={handleChangeFname}
          />
        </div>
        <div>
          <label htmlFor="lName">Last Name:</label>
          <input
            type="text"
            name="lName"
            id="lName"
            value={lName}
            onChange={handleChangeLname}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <label htmlFor="tel">Tel:</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            value={tel}
            onChange={handleChangeTel}
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="image"
            src=""
            alt=""
            id="image"
            value={image}
            onChange={handleChangeImage}
          />
        </div>
        <button type="submit" className="cursor-pointer">
          Add Agent
        </button>
      </form>
      <div className="grid grid-cols-4 gap-4">
        {agents?.map((agent) => (
          <AgentCard
            key={agent.id}
            fName={agent.firstName}
            lName={agent.lastName}
            email={agent.email}
            image={agent.profileImage}
          />
        ))}
      </div>
    </div>
  );
}

export default AgentList;
