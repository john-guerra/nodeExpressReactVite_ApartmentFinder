import { useState, useEffect, useCallback } from "react";

import VotingList from "../VotingList.jsx";
import ApartmentListingsList from "../ApartmentListingsList.jsx";
import CreateListingForm from "../CreateListingForm.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function IndexPage() {
  const [listings, setListings] = useState([]);
  const [query, setQuery] = useState("");

  const reloadListings = useCallback(async () => {
    const res = await fetch(`/api/listings?q=${query}`);
    if (!res.ok) {
      console.error("Failed to fetch listings:", res.statusText);
      return;
    }
    const data = await res.json();
    setListings(data);
  }, [query]);

  useEffect(() => {
    const timeout = setTimeout(reloadListings, 300); // Debounce for 300ms

    // Cleanup function to clear the timeout if query changes before timeout completes
    return () => {
      console.log("Fetching effect cleanup");
      clearTimeout(timeout);
    };
  }, [reloadListings, query]);

  
  return (
    <>
      <Container>
        <h1>Index Page</h1>

        <section>
          <Row>
            <Col md={8} xs={12}>
              <ApartmentListingsList
                listings={listings}
                query={query}
                setQuery={setQuery}
              />
            </Col>
            <Col md={4} xs={12}>
              <CreateListingForm reloadListings={reloadListings} />
            </Col>
          </Row>
        </section>
        <section>
          <h2>Voting</h2>

          <VotingList />
        </section>
      </Container>
    </>
  );
}
