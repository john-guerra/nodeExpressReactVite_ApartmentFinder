import express from "express";

const router = express.Router();

// Sample data for listings
const listings = [
  { id: 1, title: "Cozy Apartment", price: 1200 },
  { id: 2, title: "Spacious Villa", price: 3500 },
  { id: 3, title: "Modern Condo", price: 2000 },
  { id: 4, title: "Downtown Loft", price: 2500 },
  { id: 5, title: "Suburban House", price: 1800 },
];

// GET /listings - Retrieve all listings
router.get("/listings", (req, res) => {
  console.log("GET /api/listings called", req.query);
  let query = req.query.q;
  if (query) {
    query = query.toString().toLocaleLowerCase();
    return res.json(
      listings.filter((l) => l.title.toLocaleLowerCase().includes(query))
    );
  } else res.json(listings);
});

router.post("/listings/create", (req, res) => {
  console.log("POST /api/listings/create called", req.body);
  const { title, price } = req.body;
  if (!title || !price) {
    return res.status(400).json({ error: "Title and price are required" });
  }

  const newListing = {
    id: listings.length + 1,
    title,
    price,
  };
  listings.push(newListing);
  res.status(201).json({ msg: "New listing created", data: newListing });
});

export default router;
