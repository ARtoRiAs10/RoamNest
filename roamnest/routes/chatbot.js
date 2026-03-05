const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");

// Simple rule-based chatbot that understands WanderLust context
router.post("/", async (req, res) => {
  const { message, listingContext } = req.body;
  const msg = (message || "").toLowerCase().trim();

  try {
    let reply = "";

    // Greeting
    if (/^(hi|hello|hey|hola|namaste|good morning|good evening|howdy)/.test(msg)) {
      const greetings = [
        "Hello! Welcome to RoamNest 🪺 I'm your travel assistant. Ask me about listings, bookings, pricing, or anything about your stay!",
        "Hey there! 👋 I'm NestBot — ready to help you find your perfect nest anywhere in the world. What can I do for you?",
        "Hi! NestBot here ✈️ Ready to help you explore amazing stays. What are you looking for?",
      ];
      reply = greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Search / find listings
    else if (/search|find|show|list|available|destination/.test(msg)) {
      const count = await Listing.countDocuments();
      reply = `We currently have ${count} amazing listings available! 🏠 You can browse by category (Mountains, Beaches, Castles, Arctic, etc.) or use the search bar at the top. Want me to help narrow it down?`;
    }

    // Price / cost queries
    else if (/price|cost|rate|cheap|expensive|budget|afford/.test(msg)) {
      const cheapest = await Listing.findOne().sort({ price: 1 }).select("title price");
      const expensive = await Listing.findOne().sort({ price: -1 }).select("title price");
      if (cheapest && expensive) {
        reply = `Our listings range from ₹${cheapest.price.toLocaleString("en-IN")}/night to ₹${expensive.price.toLocaleString("en-IN")}/night. Use the price filter on the listings page to find something within your budget! 💰`;
      } else {
        reply = "Use the price filter on the listings page to find stays within your budget! 💰";
      }
    }

    // Booking queries
    else if (/book|reservation|reserve|stay|check.?in|check.?out/.test(msg)) {
      reply = `Booking is easy! 📅\n1. Browse listings and open one you like\n2. Scroll down to the booking section\n3. Select your check-in and check-out dates\n4. Choose number of guests\n5. Click "Book Now"\n\nYou can view all your bookings at /bookings/my`;
    }

    // Wishlist queries
    else if (/wishlist|favorite|favourite|save|heart|like/.test(msg)) {
      reply = `You can save any listing to your Wishlist by clicking the ❤️ button on the listing page. View all your saved listings at /wishlist. Perfect for planning your next trip! 🌟`;
    }

    // Cancellation
    else if (/cancel|refund|change/.test(msg)) {
      reply = `To cancel a booking, go to My Bookings (/bookings/my) and click the "Cancel" button next to your reservation. Please note cancellation policies vary by listing. 📋`;
    }

    // Categories
    else if (/categor|type|beach|mountain|treehouse|villa|heritage|desert|island|farm|arctic|snow|loft|city/.test(msg)) {
      reply = `RoamNest has 10 handpicked categories to explore! 🗺️\n• 🏖️ Beaches\n• 🏙️ City Lofts\n• 🏔️ Mountains\n• 🌲 Treehouses\n• 💎 Luxury Villas\n• 🏛️ Heritage Homes\n• ☀️ Desert Stays\n• 🏝️ Island Getaways\n• 🌿 Farm Stays\n• ❄️ Arctic & Snow\n\nClick any filter on the home page to explore!`;
    }

    // Review queries
    else if (/review|rating|feedback|comment/.test(msg)) {
      reply = `Reviews help the community! ⭐ After your stay, visit the listing page and scroll to the "Leave a Review" section. Rate from 1-5 stars and share your experience. You need to be logged in to submit reviews.`;
    }

    // Contact / support
    else if (/contact|support|help|problem|issue|complaint/.test(msg)) {
      reply = `For support, you can:\n📧 Reach us via our social links in the footer\n🐛 Report issues on our GitHub page\n💬 Keep chatting with me for quick answers!\n\nWhat specific issue can I help you with?`;
    }

    // Login / signup
    else if (/login|sign.?up|register|account|password/.test(msg)) {
      reply = `Account management:\n• **Sign Up**: Click "Sign Up" in the navbar to create a free account\n• **Login**: Click "Login" to access your account\n• **Benefits**: Bookmark listings, make bookings, leave reviews, and list your own property!\n\nNeed help with a specific issue?`;
    }

    // Add listing
    else if (/add|create|list|host|property|own/.test(msg)) {
      reply = `Want to become a host? 🏡 It's easy!\n1. Click "Add your home" in the navbar\n2. Fill in listing details (title, description, price, location)\n3. Upload a photo of your property\n4. Select a category\n5. Click Submit!\n\nYou need to be logged in to list a property.`;
    }

    // Weather / location
    else if (/weather|climate|season|best time|when to go/.test(msg)) {
      reply = `Great question! 🌤️ The best time to visit depends on the destination:\n• Mountains: Summer (Jun-Sep) for hiking, Winter for snow sports\n• Beaches: Mar-Nov\n• Arctic: Dec-Mar for Northern Lights\n• Farms: Spring/Autumn for harvest season\n\nCheck each listing's description for local tips!`;
    }

    // Goodbye
    else if (/bye|goodbye|see you|thanks|thank you|cheers/.test(msg)) {
      reply = `Thank you for using RoamNest! 🪺 Happy travels and may you find your perfect nest. See you soon! 🌍`;
    }

    // If listing context provided
    else if (listingContext) {
      reply = `Regarding "${listingContext.title}" in ${listingContext.location}:\n💰 Price: ₹${Number(listingContext.price).toLocaleString("en-IN")}/night\n\nYou can book this listing using the booking form, or save it to your wishlist with the ❤️ button. Anything specific you'd like to know?`;
    }

    // Fallback
    else {
      const fallbacks = [
        "I'm not sure about that, but I'm happy to help with bookings, wishlists, listings, pricing, or categories! What would you like to know? 😊",
        "Hmm, I didn't quite catch that. Try asking me about: bookings, pricing, categories, how to list your space, or how reviews work! 🤔",
        "I'm still learning! 🤖 But I can help with: finding listings, making bookings, managing your wishlist, and understanding how RoamNest works. What do you need?",
      ];
      reply = fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }

    res.json({ reply });
  } catch (err) {
    console.error("Chatbot error:", err);
    res.json({ reply: "Oops! Something went wrong. Please try again! 🔄" });
  }
});

module.exports = router;
