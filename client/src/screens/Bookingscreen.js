// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Bookingscreen() {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [room, setroom] = useState(null);
//   const queryParams = new URLSearchParams();
//   const term = queryParams.get("id");
//   console.log(term);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.post("/api/rooms/getroombyid", {
//           roomid: term,
//         });
//         setroom(data);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//         setError(true);
//       }
//     };

//     fetchData(); // Call the async function immediately
//   }, [term]); // Make sure to include match.params.roomid as a dependency

//   return (
//     <div>
//       {loading ? (
//         <h1>Loading....</h1>
//       ) : error ? (
//         <h1>Error</h1>
//       ) : room ? (
//         <div>
//           <div className="row">
//             <div className="col-md-5">
//               <h1>Bookings details</h1>
//               <hr />
//               <p>Name: </p>
//               <p>From Date: </p>
//               <p>To Date: </p>
//               <p>Max count: {room.maxcount}</p>
//             </div>
//           </div>
//         </div>
//       ) : null}{" "}
//       {/* Render null if room is null */}
//     </div>
//   );
// }

// export default Bookingscreen;
import React from "react";
import { useLocation } from "react-router-dom";
function Bookingscreen() {
  const location = useLocation();
  const data = location.state && location.state.data;
  console.log(data)
  return (
    <div>
      <h1>Bookingscreen</h1>
      
    </div>
  );
}

export default Bookingscreen;
