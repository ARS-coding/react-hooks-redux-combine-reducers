import React from "react";
import { useSelector } from "react-redux";

function Authors() {
  const authors = useSelector((rootState) => {
    return rootState.authors;
  });

  return (
    <div>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>{author.authorName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Authors;
