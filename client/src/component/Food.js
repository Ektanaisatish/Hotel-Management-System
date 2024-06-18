import React, { useState } from "react";

function Food({ food }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMenuName, setEditedMenuName] = useState(food.menuName);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setEditedMenuName(e.target.value);
  };

  const handleSave = () => {
    // You can implement the logic to save the edited menu name here
    setIsEditing(false);
  };

  return (
    <div className="row">
      {isEditing ? (
        <>
          <input
            value={editedMenuName}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{food.menuName}</h3>
          <p>{food.description}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Food;
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Carousel from "react-bootstrap/Carousel";
// import { useNavigate } from "react-router-dom";

//   console.log(food);
//   const [show, setShow] = useState(false);
//   const [selectedItem, setsSelectedItem] = useState("");
//   console.log("select", selectedItem);
// //   const navigate = useNavigate();
// //   const handleClose = () => setShow(false);
//   const handleShow = (id) => {
//     const data = food?.filter((item) => item._id === id);
//     console.log(id);
//     setShow(true);
//     setsSelectedItem(data);
//   };
// //   const handleCheckout = (id,row) => {
// //     console.log(id);

// //     navigate(`/booking`, {
// //       state: {
// //        data: selectedItem,
// //       },
// //     });
//     // const handleCheckout = async (id, row) => {
//     //   try {
//     //     const response = await fetch(`/api/booking/${id}`); // Replace "/api/booking/" with your actual API endpoint
//     //     if (!response.ok) {
//     //       throw new Error('Failed to fetch data');
//     //     }
//     //     const data = await response.json();
//     //     console.log('Fetched data:', data);
//     //   } catch (error) {
//     //     console.error('Error fetching data:', error);
//     //   }
//     // };

//   //};
//   return (
//     <div className="row">
//       {food.map((fetchFoods) => {
//         return (
//           <div className="col-md-3">
//             <div className="card" style={{ width: "auto" }}>
//             {/* <Modal.Header> */}
//             <Modal.Title>{selectedItem[0]?.name}</Modal.Title>
//           {/* </Modal.Header> */}
//               {/* <img src={fetchFoods?.imageurls?.[0]} alt="quail" /> */}
//               <h3> {fetchFoods?.name}</h3>
//               {/* <p>Max Count: (room.maxcount)</p>
//                <p>Phone Number: (room.phonenumber)</p>
//                <p>Type: (room. type)</p> */}
//               <div class="card-body">
//                 <p> {fetchFoods?.description}</p>
//                 {/* <div style={{ float: "right" }}>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => handleShow(fetchRooms?._id)}
//                   >
//                     View Details
//                   </button>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       {/* <div>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header>
//             <Modal.Title>{selectedItem[0]?.name}</Modal.Title>
//           </Modal.Header> */}
//           {/* <Modal.Body>
//             <Carousel className="photos">
//               {selectedItem[0]?.imageurls &&
//                 selectedItem[0].imageurls.map((url, index) => (
//                   // <p>{url}</p>
//                   // <img src={url} alt='fjdfhd'/>

//                   <Carousel.Item key={index}>
//                     <img src={url} alt="img" />
//                   </Carousel.Item>
//                 ))}
//             </Carousel>
//             <p>{selectedItem[0]?.description}</p>
//           </Modal.Body> */}
//           {/* <Modal.Footer>
//             <Button
//               variant="secondary"
//               onClick={() => handleCheckout(selectedItem[0]?._id)}
//             >
//               Book now
//             </Button> */}
//             {/* <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer> */}
//         {/* </Modal>
//       </div> */}
//     </div>
//   );
// }
