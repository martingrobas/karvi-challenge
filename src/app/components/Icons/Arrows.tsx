import React from 'react'

export const Arrows = ({...r}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...r}>
      <path
        fill="#566DED"
        fillRule="evenodd"
        d="M6.275 2.891L9.61 6.225a.625.625 0 11-.884.884L6.458 4.842v8.491a.625.625 0 11-1.25 0v-8.49L2.942 7.108a.625.625 0 01-.884-.884L5.391 2.89a.623.623 0 01.884 0zm7.267 3.776a.625.625 0 111.25 0v8.49l2.266-2.266a.625.625 0 11.884.884l-3.333 3.334a.623.623 0 01-.884 0l-3.334-3.334a.625.625 0 11.884-.884l2.267 2.267V6.667z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default Arrows