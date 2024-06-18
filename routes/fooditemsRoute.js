const express = require("express");
const router = express.Router();
const Foods = require("../models/food");

router.get("/fooditems", async (req, res) => {
  try {
    const { search } = req.query;

    // Build the search criteria
    const searchCriteria = {
      $or: [
        { menuName: { $regex: new RegExp(search, 'i') } },
        { description: { $regex: new RegExp(search, 'i') } }
      ]
    };

    // Find food items based on search criteria
    const fooditems = await Foods.find(search ? searchCriteria : {});

    res.json(fooditems);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});


router.post("/create", async (req, res) => {
  try {
    const { menuName, description } = req.body;
    console.log(req.body)

    const fooded = new Foods({
      menuName,
      description,
    });

    await fooded.save();

    res.status(200).json({
      status: "success",
      message: "Food item created successfully",
      data: fooded,
    });
  } catch (error) {
    console.error("Error creating food item:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: null,
    });
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const { menuName, description } = req.body;
    const itemId = req.params.id;

    // Find the food item by ID
    const fooded = await Foods.findById(itemId);

    // Check if the food item exists
    if (!fooded) {
      return res.status(404).json({
        status: "error",
        message: "Food item not found",
        data: null,
      });
    }

    // Update the fields
    fooded.menuName = menuName;
    fooded.description = description;

    // Save the updated document
    await fooded.save();

    res.status(200).json({
      status: "success",
      message: "Food item updated successfully",
      data: fooded,
    });
  } catch (error) {
    console.error("Error updating food item:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: null,
    });
  }
});


module.exports = router;


