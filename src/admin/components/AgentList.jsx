import React from "react";
import { useProperty } from "../../contexts/PropertyContext";
import AgentCard from "./AgentCard";

function AgentList() {
  const { agents } = useProperty();
  console.log(agents);

  return (
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
  );
}

export default AgentList;
