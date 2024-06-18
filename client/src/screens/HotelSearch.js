import React, { useState, useEffect } from "react";
import axios from "axios";
import Room from "../component/Room";
//import Room from "../component/Room";

/*import { set } from "mongoose";

import { useFetcher } from "react-router-dom";
*/

function HotelSearch() {
  const [rooms, setrooms] = useState([]);
  console.log("rooms", rooms);
  const [loading, setloading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/rooms");
        setrooms(response.data);
        setloading(false);
      } catch (error) {
        setError(error.message);
        setloading(false);
      }
    };

    fetchRooms();
  }, []);

  //     useEffect(async()=>{
  //         try {
  //             const data = (await axios.get('/api/rooms/getallrooms')).data
  //             setrooms(data)
  //         } catch (error) {
  //             console.log(error)
  //         }
  //     },[])
  return (
    <div>
      <div className="rows">
        {loading ? (
          <h1>Loading....</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          rooms.map((fetchRooms) => {
            return (
              <div className="com-md-9">
                <Room room={rooms} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
export default HotelSearch;
