"use client";
import React from 'react';

interface BookProps {
  name?: string;
  alias?: string;
  price?: number;
}

const Book: React.FC<BookProps> = () => {
  return (
    <div>Book</div>
  )
}

export default Book