const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware.js");
const Wishlist = require("../models/wishlist.js");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");

// Get user wishlist
router.get(
  "/",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const wishlists = await Wishlist.find({ user: req.user._id }).populate(
      "listing"
    );
    const listings = wishlists
      .map((w) => w.listing)
      .filter((l) => l !== null);
    res.render("wishlist/index.ejs", { listings });
  })
);

// Toggle wishlist (add or remove)
router.post(
  "/:listingId",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { listingId } = req.params;
    const existing = await Wishlist.findOne({
      user: req.user._id,
      listing: listingId,
    });
    if (existing) {
      await Wishlist.findByIdAndDelete(existing._id);
      req.flash("success", "Removed from wishlist!");
    } else {
      await Wishlist.create({ user: req.user._id, listing: listingId });
      req.flash("success", "Added to wishlist ❤️");
    }
    res.redirect("back");
  })
);

module.exports = router;
