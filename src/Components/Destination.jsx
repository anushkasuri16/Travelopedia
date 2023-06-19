import React, { useState } from "react";
import {
  useDeleteDestinationMutation,
  useUpdateDestinationMutation,
} from "../api/destinationAPI";
function Destination({ destination }) {
  const [deleteNewDestination] = useDeleteDestinationMutation();
  const [isUpadting, setIsUpdating] = useState(false);
  const [newCity, setNewCity] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [updateDestination] = useUpdateDestinationMutation();
  const handleUpdate = () => {
    let city = "",
      country = "";
    if (newCity == "") {
      city = destination.city;
    } else {
      city = newCity;
    }
    if (newCountry == "") {
      country = destination.country;
    } else {
      country = newCountry;
    }

    updateDestination({
      id: destination.id,
      city: city,
      country: country,
      daysNeeded: destination.daysNeeded,
    });
    setNewCity("");
    setNewCountry("");
    setIsUpdating(!isUpadting);
  };

  return (
    <div
      className="row py-1"
      style={{
        borderBottom: "1px solid #333",
        borderTop: "1px solid #333",
      }}
    >
      <div className="col-4 offset-2">
        <div className="row">
          {" "}
          <div className="col-6 p-1">
            {isUpadting ? (
              <input
                type="text"
                placeholder="city"
                className="form-control"
                defaultValue={destination.city}
                onChange={(e) => setNewCity(e.target.value)}
              ></input>
            ) : (
              <span>{destination.city}</span>
            )}
          </div>
          <div className="col-6 p-1">
            {isUpadting ? (
              <input
                type="text"
                placeholder="country"
                className="form-control"
                defaultValue={destination.country}
                onChange={(e) => setNewCountry(e.target.value)}
              ></input>
            ) : (
              <span>{destination.country}</span>
            )}
          </div>
        </div>
      </div>

      <div className="col-1 text-warning">{destination.daysNeeded} days</div>
      <div className="col-1">
        <button
          onClick={() => setIsUpdating(!isUpadting)}
          className="btn btn-warning form-control"
        >
          {isUpadting ? "Cancel" : "Edit"}
        </button>
      </div>
      {isUpadting ? (
        <div className="col-1">
          <button
            onClick={() => { handleUpdate();}}
            className="btn btn-primary form-control"
          >
            Update
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="col-1">
        <button
          onClick={() => deleteNewDestination({ id: destination.id })}
          className="btn btn-danger form-control"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Destination;
