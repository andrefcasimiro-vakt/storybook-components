import React from 'react';

interface IProps {
  orientation?: 'up' | 'down' | 'left' | 'right'
  onClick?: (event: any) => void
}

const Caret = ({ orientation = 'down', onClick}: IProps) => orientation === 'up'
  ? <svg fill='white' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg' onClick={onClick}>
      <path d='M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' />
    </svg>
: <svg fill='white' strokeWidth='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg' onClick={onClick}>
    <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' />
  </svg>

export default (Caret)
