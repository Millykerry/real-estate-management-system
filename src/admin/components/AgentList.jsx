import React from "react";
import { useProperty } from "../../contexts/PropertyContext";
import AgentCard from "./AgentCard";

function AgentList() {
  const { agents } = useProperty();
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
          <input type="text" name="fName" id="fName" />
        </div>
        <div>
          <label htmlFor="lName">Last Name:</label>
          <input type="text" name="lName" id="lName" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="tel">Tel:</label>
          <input type="tel" name="tel" id="tel" />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input type="image" src="" alt="" id="image" />
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
