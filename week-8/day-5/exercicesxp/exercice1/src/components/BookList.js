import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from '../redux/booksSlice';

const BookList = () => {
  const [genre, setGenre] = useState('All');

  const allBooks = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const sciFiBooks = useSelector(selectScienceFictionBooks);

  let displayedBooks = allBooks;
  if (genre === 'Horror') displayedBooks = horrorBooks;
  if (genre === 'Fantasy') displayedBooks = fantasyBooks;
  if (genre === 'Science Fiction') displayedBooks = sciFiBooks;

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>📚 Book Inventory</h1>

      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '6px',
          fontSize: '16px',
          marginBottom: '20px',
        }}
      >
        <option value="All">All Genres</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Science Fiction">Science Fiction</option>
      </select>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {displayedBooks.map((book) => (
          <li
            key={book.id}
            style={{
              margin: '10px auto',
              width: '60%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '8px',
            }}
          >
            <strong>{book.title}</strong> — {book.author}  
            <span style={{ color: '#666' }}> ({book.genre})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
