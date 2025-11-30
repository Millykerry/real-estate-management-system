import { useProperty } from "../../contexts/PropertyContext";

function TenantCard({ fName, lName, image, property, unit, id }) {
  const { handleDeleteTenant } = useProperty();
  return (
    <div className="p-4 rounded-md shadow-md flex gap-4 flex-col">
      <div className="w-full rounded-md">
        <img src={image} alt={lName} className="w-full rounded-md" />
      </div>
      <div className="flex gap-4 flex-col">
        <h3>
          {fName} {lName}
        </h3>
        <p>{property}</p>
        <p>{unit}</p>
        <div className="grid grid-cols-2 gap-4">
          <button className="rounded-md bg-amber-400 px-4 py-2">Edit</button>
          {/* <button className="rounded-md bg-green-600 px-4 py-2">View</button> */}
          <button
            className="rounded-md bg-red-600 px-4 py-2"
            onClick={() => handleDeleteTenant(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TenantCard;
