import VotingList from "../VotingList.jsx";

export default function IndexPage() {
  console.log("Hello from React!");

  fetch("/api/listings")
    .then((res) => res.json())
    .then((data) => console.log("Listings data:", data));

  return (
    <>
      <h1>Index Page</h1>

      <section>
        <p>This is the index page of the React application.</p>
        
      </section>
      <section>
        <h2>Voting</h2>
        
        <VotingList />
      </section>
    </>
  );
}
