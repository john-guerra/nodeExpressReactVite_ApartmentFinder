import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useState } from "react";
const DEFAULT_LISTING = { title: "", price: 1000 };

export default function CreateListingForm({reloadListings}) {
  const [listing, setListing] = useState(DEFAULT_LISTING);

  const onSubmit = async (evt) => {
    evt.preventDefault();
    console.log("🏓 onSubmit", listing);

    const res = await fetch("/api/listings/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listing),
    });

    if (!res.ok) {
      console.error("Failed to create listing:", res.statusText);
      return;
    }

    const data = await res.json();
    console.log("Listing created successfully:", data);
    setListing(DEFAULT_LISTING); // Reset form after submission

    reloadListings();
  };

  return (
    <Form onSubmit={onSubmit}>
      <h3>Create New Listing</h3>
      <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={listing.title}
          onChange={(e) => setListing({ ...listing, title: e.target.value })}
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Price" className="mb-3">
        <Form.Control
          type="number"
          placeholder="Enter Price"
          value={listing.price}
          onChange={(e) => setListing({ ...listing, price: +e.target.value })}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
