import { useState, useEffect } from "react";

import Listing from "./Listing.jsx";

export default function ApartmentListingsList() {
  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const reloadListings = async () => {
      const res = await fetch(`/api/listings?q=${query}`);
      if (!res.ok) {
        console.error("Failed to fetch listings:", res.statusText);
        return;
      }
      const data = await res.json();
      setListings(data);
    };

    const timeout = setTimeout(reloadListings, 300); // Debounce for 300ms

    // Cleanup function to clear the timeout if query changes before timeout completes
    return () => {
      console.log("Fetching effect cleanup");
      clearTimeout(timeout);
    };
  }, [query]);

  function renderListing(listing) {
    return (
      <Listing key={listing.id} title={listing.title} price={listing.price} />
    );
  }

  const onQuery = (evt) => {
    console.log("🏓 onQuery", evt.target.value);
    setQuery(evt.target.value);
  };

  console.log("👩🏼‍🎨 Render ApartmentListingsList ", listings);
  return (
    <div>
      <h2>Apartment Listings</h2>
      <input
        value={query}
        onChange={onQuery}
        placeholder="Filter listings..."
      />
      {!listings?.length ? (
        <div>Loading listings...</div>
      ) : (
        listings.map(renderListing)
      )}
    </div>
  );
}
