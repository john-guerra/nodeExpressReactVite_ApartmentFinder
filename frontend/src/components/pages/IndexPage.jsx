import VotingList from "../VotingList.jsx";
import ApartmentListingsList from "../ApartmentListingsList.jsx";

export default function IndexPage() {
  console.log("Hello from React!");


  return (
    <>
      <h1>Index Page</h1>

      <section>
        <ApartmentListingsList />
      </section>
      <section>
        <h2>Voting</h2>

        <VotingList />
      </section>
    </>
  );
}
