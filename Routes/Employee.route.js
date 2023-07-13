const express = require("express");
const { EmpModal } = require("../Modals/Employee.model");

const empRoutes = express.Router();

// GET ROUTE
empRoutes.get("/", async (req, res) => {
  try {
    let Emp = await EmpModal.findOne();
    res.status(200).json({ msg: Emp });
  } catch (error) {
    res.status(404).json({ msg: "Emp details not found" });
  }
});

// POST ROUTE
empRoutes.post("/employees", async (req, res) => {
  try {
    let Emp = await EmpModal.create(req.body);
    await Emp.save();
    res.status(200).json({ msg: "success fully created details" });
  } catch (error) {
    res.status(400).json({ msg: "error creating details" });
  }
});

//Update Route
empRoutes.patch("/employees/:id", async (req, res) => {
    try {
      let Emp = await EmpModal.create(req.body);
      await Emp.save();
      res.status(200).json({ msg: "success fully created details" });
    } catch (error) {
      res.status(400).json({ msg: "error creating details" });
    }
});


//Delete Route
empRoutes.delete("/employees/:id", async (req, res) => {
    try {
      let Emp = await EmpModal.create(req.body);
      await Emp.save();
      res.status(200).json({ msg: "success fully created details" });
    } catch (error) {
      res.status(400).json({ msg: "error creating details" });
    }
}); 


module.exports = { empRoutes };
