# 🏡 RoamNest — Travel Listing & Booking Platform

A full-stack travel listing application inspired by Airbnb, built with **Node.js**, **Express**, **MongoDB**, and **EJS**.

🌐 **Live Demo:** [roam-nest-mauve.vercel.app](https://roam-nest-mauve.vercel.app)

---

## ✨ Features

### Core
- Browse listings across **10 categories** — Mountains, Castles, Arctic, Domes, Boats, and more
- **Search** by title, location, country, category, or price
- **Add, edit, and delete** your own listings with Cloudinary image uploads
- Leave **star ratings and written reviews**

### v2.0 Additions
- 🤖 **RoamBot Chatbot** — Floating assistant for bookings, pricing, categories, and navigation help
- ❤️ **Wishlist** — Save and manage favourite listings
- 📅 **Booking System** — Pick dates, select guests, and see a live price total before confirming
- 💰 **Price Filter** — Filter listings by max price directly from the homepage

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Frontend | EJS, Bootstrap 5, Font Awesome |
| Database | MongoDB Atlas + Mongoose |
| Auth | Passport.js (Local Strategy) |
| File Uploads | Multer + Cloudinary |
| Sessions | express-session + connect-mongo |

---

## 📁 Project Structure

```
RoamNest/
│
└── roamnest/
    ├── app.js                        ← Main server entry point
    ├── .env.example                  ← Environment variable template
    │
    ├── models/
    │   ├── listing.js
    │   ├── review.js
    │   ├── user.js
    │   ├── wishlist.js
    │   └── booking.js
    │
    ├── routes/
    │   ├── listing.js
    │   ├── review.js
    │   ├── user.js
    │   ├── wishlist.js
    │   ├── booking.js
    │   └── chatbot.js
    │
    ├── controllers/
    │
    ├── views/
    │   ├── layouts/
    │   │   └── boilerplate.ejs       ← Includes RoamBot widget
    │   ├── includes/
    │   ├── listings/
    │   ├── wishlist/
    │   └── bookings/
    │
    └── public/                       ← Static assets (CSS, JS, images)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (free tier works)
- Cloudinary account (free tier works)

### 1. Clone & Install

```bash
git clone https://github.com/ARtoRiAs10/RoamNest.git
cd RoamNest/roamnest
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
ATLASDB_URL=mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/roamnest
SECRET=your_long_random_secret_here
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 3. Seed the Database (Optional)

Populate the database with sample listings:

```bash
node init/index.js
```

### 4. Run the App

```bash
# Development (auto-reload with nodemon)
npm run dev

# Production
npm start
```

Visit: **http://localhost:8080/listings**

---

## 📋 All Commands

```bash
npm install          # Install dependencies
npm run dev          # Start with nodemon (development)
npm start            # Start with node (production)
node init/index.js   # Seed database with sample listings
```

---

## 🔗 Routes Reference

### Listings

| Method | Route | Description |
|---|---|---|
| GET | `/listings` | Browse all listings |
| GET | `/listings/new` | Create listing form |
| POST | `/listings` | Submit new listing |
| GET | `/listings/:id` | View listing details + booking panel |
| PUT | `/listings/:id` | Update listing |
| DELETE | `/listings/:id` | Delete listing |
| GET | `/listings/filter/:q` | Filter by category |
| GET | `/listings/search?q=` | Search listings |

### Auth

| Method | Route | Description |
|---|---|---|
| GET / POST | `/signup` | Register new account |
| GET / POST | `/login` | Log in |
| GET | `/logout` | Log out |

### Wishlist

| Method | Route | Description |
|---|---|---|
| GET | `/wishlist` | View saved listings |
| POST | `/wishlist/:listingId` | Toggle save / unsave |

### Bookings

| Method | Route | Description |
|---|---|---|
| GET | `/bookings/my` | View my bookings |
| POST | `/bookings/:listingId` | Create a booking |
| POST | `/bookings/:id/cancel` | Cancel a booking |

### RoamBot

| Method | Route | Description |
|---|---|---|
| POST | `/api/chat` | Send a message to RoamBot |

---

## 🤖 RoamBot Chatbot

A floating assistant (bottom-right corner of every page) that answers questions about:

- How to book a listing
- Pricing and price ranges
- Browsing categories and using search
- Managing your wishlist
- Listing your own property
- Account and login help

Quick-reply chips appear on first open for the most common topics.

---

## 📅 How Booking Works

1. Open any listing page
2. Select **check-in / check-out dates** in the right-side booking panel
3. Choose **number of guests**
4. Watch the **live total price** calculate automatically
5. Click **Book Now** — booking confirmed instantly
6. View and cancel bookings at `/bookings/my`

---

## 🐛 Roadmap

- [ ] Map integration (Mapbox / Leaflet)
- [ ] Email notifications for bookings
- [ ] Payment gateway (Razorpay)
- [ ] Admin dashboard
- [ ] Real-time availability calendar

---

## 👤 Author

**Gaurav Kumar**

- GitHub: [@ARtoRiAs10](https://github.com/ARtoRiAs10)
- LinkedIn: [chhatrapati-sahu](https://www.linkedin.com/in/gaurav-kumar-96a16b232/)

---

## 📄 License

[Apache-2.0](../LICENSE)
