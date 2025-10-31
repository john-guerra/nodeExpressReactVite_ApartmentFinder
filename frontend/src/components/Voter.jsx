export default function Voter({ id, name, votes = 0, setVotes }) {
  function onVote() {
    setVotes(id);
    console.log("🗳️ Voted for ", name, votes);
  }

  console.log("👩🏼‍🎨 Render Voter ", name);
  return (
    <div>
      Vote for <strong>{name}</strong># Votes{" "}
      <span id="numVotes">({votes})</span>
      <button onClick={onVote}>🤙🏼</button>
    </div>
  );
}
