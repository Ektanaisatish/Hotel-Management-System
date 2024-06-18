// import React ,{ useState } from "react";
// import {Modal,Button} from 'react-bootstrap/Button';

// function Room({ room}) {
// //     const [show, setShow] = useState(false);

// //   const handleClose = () => setShow(false);
// //   const handleShow = () => setShow(true);
// return (
// <div className="row bs">
// <div className="col-md-4">
// <img src={room.imageurls[0]} className="smalling" />
// </div>
// <div className="col-md-7">
// <h1>(room.name)</h1>
// <b>
// ("")
// <p>Max Count: (room.maxcount)</p>imageurls
// <p>Phone Number: (room.phonenumber)</p>
// <p>Type: (room. type)</p>
// </b>
// <div style={{ float: "right"}}>
// <button className="btn btn-primary">View Details</button>
// </div>
//      </div>
// {/*
// <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal> */}

// </div>
// );
//  }

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
function Room({ room }) {
  console.log(room);
  const [show, setShow] = useState(false);
  const [selectedItem, setsSelectedItem] = useState("");
  console.log("select", selectedItem);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    const data = room?.filter((item) => item._id === id);
    console.log(id);
    setShow(true);
    setsSelectedItem(data);
  };
  const handleCheckout = (id,row) => {
    console.log(id);
    
    navigate(`/booking`, {
      state: {
       data: selectedItem,
      },
    });
    const handleCheckout = async (id, row) => {
      try {
        const response = await fetch(`/api/booking/${id}`); // Replace "/api/booking/" with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  


    
  };
  return (
    <div className="row">
      {room.map((fetchRooms) => {
        return (
          <div className="col-md-3">
            <div className="card" style={{ width: "auto" }}>
              <img src={fetchRooms?.imageurls?.[0]} alt="quail" />
              <h3> {fetchRooms?.name}</h3>
              {/* <p>Max Count: (room.maxcount)</p>
               <p>Phone Number: (room.phonenumber)</p>
               <p>Type: (room. type)</p> */}
              <div class="card-body">
                <p> {fetchRooms?.description}</p>
                <div style={{ float: "right" }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleShow(fetchRooms?._id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>{selectedItem[0]?.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Carousel className="photos">
              {selectedItem[0]?.imageurls &&
                selectedItem[0].imageurls.map((url, index) => (
                  // <p>{url}</p>
                  // <img src={url} alt='fjdfhd'/>

                  <Carousel.Item key={index}>
                    <img src={url} alt="img" />
                  </Carousel.Item>
                ))}
            </Carousel>
            <p>{selectedItem[0]?.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => handleCheckout(selectedItem[0]?._id)}
            >
              Book now
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Room;
