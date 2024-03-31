import React from 'react';

const Book = ({ title, author, pages }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Pages: {pages}</p>
    </div>
  );
};

export default Book;
