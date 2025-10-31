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
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium aliquid sapiente dicta dolor fugit id. Fugit veniam placeat soluta explicabo rem ad ut eaque consequatur fugiat, iusto nulla molestias quia?</div>
      </section>
    </>
  );
}
