import React from 'react';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </ul>
    </nav>
  );
}
