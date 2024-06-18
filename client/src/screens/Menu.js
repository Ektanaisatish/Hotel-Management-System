// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Food from "../component/Food";

// function MenuSearch() {
//     const [fooditems, setfooditems] = useState([]);
//     console.log("fooditems", fooditems);
//     const [loading, setloading] = useState();
//     const [error, setError] = useState();

//     useEffect(() => {
//       const fetchFoods = async () => {
//         try {
//           const response = await axios.get("http://localhost:5000/api/fooditems");
//           setfooditems(response.data);
//           setloading(false);
//         } catch (error) {
//           setError(error.message);
//           setloading(false);
//         }
//       };

//       fetchFoods();
//     }, []);
//     return (
//         <div>
//           <div className="rows">
//             {loading ? (
//               <h1>Loading....</h1>
//             ) : error ? (
//               <h1>Error</h1>
//             ) : (
//                 fooditems.map((fetchFoods) => {
//                 return (
//                   <div className="com-md-9">
//                     <Food food={fetchFoods} />
//                   </div>
//                 );
//               })
//             )}
//           </div>
//         </div>
//       );

// }
// export default MenuSearch;
//------------

import React, { useState, useEffect } from "react";
import axios from "axios";
import Food from "../component/Food";

function MenuSearch() {
    const [fooditems, setFoodItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newFoodItem, setNewFoodItem] = useState({
      menuName: "",
      description: "",
    });
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
      fetchFoods();
    }, []);

    const fetchFoods = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/fooditems");
        setFoodItems(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const addFoodItem = async () => {
      try {
        setLoading(true);
        await axios.post("http://localhost:5000/api/create", newFoodItem);
        // Refresh the list of food items after adding a new one
        fetchFoods();
        // Clear the form fields after adding a new item
        setNewFoodItem({ menuName: "", description: "" });
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const searchFoodItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/fooditems?search=${searchQuery}`);
        setFoodItems(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewFoodItem({ ...newFoodItem, [name]: value });
      };

    //   const handleUpdate = async (foodItemId) => {
    //       try {
    //         setLoading(true);
    //         // Get the updated food item from the list
    //         const updatedFoodItem = fooditems.find(item => item.id === foodItemId);
    //         // Send a PUT request to update the food item
    //         await axios.put(`http://localhost:5000/api/fooditems/${foodItemId}`, updatedFoodItem);
    //         // Fetch the updated list of food items
    //         fetchFoods();
    //       } catch (error) {
    //         setError(error.message);
    //         setLoading(false);
    //       }
    //     };

    return (
      <div>
        <div>
          <h2>Add Menu</h2>
          <input type="text" name="menuName" value={newFoodItem.menuName} onChange={handleInputChange} placeholder="menuName" />
          <input type="text" name="description" value={newFoodItem.description} onChange={handleInputChange} placeholder="Description" />

          <button onClick={addFoodItem}>Add</button>
        </div>

        <div>
          <h2>Search Menu</h2>
          <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Query" />
          <button onClick={searchFoodItems}>Search</button>
        </div>
        <div className="rows">
          {loading ? (
            <h1>Loading....</h1>
          ) : error ? (
            <h1>Error</h1>
          ) : (
            fooditems.map((foodItem) => (
              <div className="com-md-9">
                <Food key={foodItem.id} food={foodItem} />
              </div>
            ))
          )}
        </div>
      </div>
    );
}

export default MenuSearch;
