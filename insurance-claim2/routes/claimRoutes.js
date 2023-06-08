const express = require("express");
const {
  createClaim,
  deleteClaimById,
  getClaimById,
  getClaims,
  getClaimsByPolicyId,
  updateClaimStatusById,
} = require("../controllers/claimControllers.js");

const router = express.Router();

router.route("/").get(getClaims).post(createClaim);
router.route("/policy/:id").get(getClaimsByPolicyId);
router
  .route("/:id")
  .get(getClaimById)
  .post(updateClaimStatusById)
  .delete(deleteClaimById);

module.exports = router;
