import { useState } from "react";
import TotalVotes from "./TotalVotes.jsx";
import Voter from "./Voter.jsx";

const initialCandidates = [
  { id: 0, name: "John", votes: 0 },
  { id: 1, name: "Alexis", votes: 0 },
  { id: 2, name: "Guerra", votes: 0 },
  { id: 3, name: "Gomez", votes: 0 },
  { id: 4, name: "Pedro", votes: 0 },
];

export default function VotingList() {
  let [candidates, setCandidates] = useState(initialCandidates);

  const renderCandidate = (candidate) => (
    <Voter
      key={candidate.id}
      id={candidate.id}
      name={candidate.name}
      votes={candidate.votes}
      setVotes={(voterId) => {
        setCandidates((prevCandidates) =>
          prevCandidates.map((c) =>
            c.id === voterId ? { ...c, votes: c.votes + 1 } : c
          )
        );
      }}
    />
  );

  return (
    <div>
      <TotalVotes
        totalVotes={candidates.reduce((p, c) => p + (c?.votes || 0), 0)}
      />
      <h2>Candidates </h2>
      {candidates.map(renderCandidate)}
    </div>
  );
}
