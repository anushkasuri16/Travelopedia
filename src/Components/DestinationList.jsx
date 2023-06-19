import React, { useState } from "react";
import {
 
  useGetAllDestinationQuery,

} from "../api/destinationAPI";
import Destination from "./Destination";

function DestinationList() {
  const { data, isSuccess, isLoading } =
    useGetAllDestinationQuery();
  
 
  let content;

  if (isLoading) {
    content = <p>Loading</p>;
  } else if (isSuccess) {
    console.log(data);
    content = data.map((destination) => {
      return (
       <Destination destination={destination} key={destination.id}/>
      );
    });
  }
  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
