const Lead = require("../models/Lead");
const express = require("express");

const {
  getLeads,
  createLead,
} = require("../controllers/leadController");

const router = express.Router();


// GET ALL LEADS
router.get("/", getLeads);


// CREATE LEAD
router.post("/", createLead);


// DASHBOARD STATS
router.get("/stats/overview", async (req, res) => {
  try {

    const totalLeads = await Lead.countDocuments();

    const newLeads = await Lead.countDocuments({
      status: "New",
    });

    const contactedLeads = await Lead.countDocuments({
      status: "Contacted",
    });

    const qualifiedLeads = await Lead.countDocuments({
      status: "Qualified",
    });

    const convertedLeads = await Lead.countDocuments({
      status: "Converted",
    });

    res.json({
      totalLeads,
      newLeads,
      contactedLeads,
      qualifiedLeads,
      convertedLeads,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// UPDATE LEAD STATUS
router.put("/:id", async (req, res) => {

  try {

    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedLead);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// GET SINGLE LEAD
router.get("/:id", async (req, res) => {

  try {

    const lead = await Lead.findById(req.params.id);

    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    res.json(lead);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// DELETE LEAD
router.delete("/:id", async (req, res) => {

  try {

    await Lead.findByIdAndDelete(req.params.id);

    res.json({
      message: "Lead deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;