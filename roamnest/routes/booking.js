const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware.js");
const Booking = require("../models/booking.js");
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");

// View user's bookings
router.get(
  "/my",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("listing")
      .sort({ createdAt: -1 });
    res.render("bookings/my.ejs", { bookings });
  })
);

// Create a booking
router.post(
  "/:listingId",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { listingId } = req.params;
    const listing = await Listing.findById(listingId);
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }

    const { checkIn, checkOut, guests } = req.body;
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    if (checkOutDate <= checkInDate) {
      req.flash("error", "Check-out must be after check-in!");
      return res.redirect(`/listings/${listingId}`);
    }

    const nights = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );
    const totalPrice = nights * listing.price;

    await Booking.create({
      listing: listingId,
      user: req.user._id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests: guests || 1,
      totalPrice,
    });

    req.flash(
      "success",
      `🎉 Booking confirmed for ${nights} night(s)! Total: ₹${totalPrice.toLocaleString("en-IN")}`
    );
    res.redirect("/bookings/my");
  })
);

// Cancel a booking
router.post(
  "/:bookingId/cancel",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const booking = await Booking.findById(req.params.bookingId);
    if (!booking || !booking.user.equals(req.user._id)) {
      req.flash("error", "Unauthorized!");
      return res.redirect("/bookings/my");
    }
    booking.status = "cancelled";
    await booking.save();
    req.flash("success", "Booking cancelled.");
    res.redirect("/bookings/my");
  })
);

module.exports = router;
