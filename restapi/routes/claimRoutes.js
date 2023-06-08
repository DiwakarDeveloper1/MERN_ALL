const express = require("express");
const {
  GetClaims,
  GetClaim,
  AddClaim,
  DeletClaim,
  UpdateClaim,
} = require("../controllers/claimController");
const router = express.Router();

router.get("/claims", GetClaims);
router.get("/claims/:id", GetClaim);
router.post("/claims", AddClaim);
router.delete("/claims/:id", DeletClaim);
router.put("/claims/:id", UpdateClaim);

module.exports = router;
