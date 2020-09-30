import React from 'react'

const Container =  ({ children, className}) => (
  <div className={`container px-16 mx-auto text-center justify-center
     ${className}`}
  >
    {children}
  </div>
)

export default Container