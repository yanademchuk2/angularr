import React, { useState } from 'react';

function Article({ title, content }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <article>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleLike}>Like</button>
      <p>Likes: {likes}</p>
    </article>
  );
}

export default Article;
