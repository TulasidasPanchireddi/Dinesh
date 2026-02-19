import React from 'react'

const Footer = ({mode}) => {
  return (
    <div className={mode?'dark':'light'}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores officia qui corrupti soluta molestiae officiis quia voluptatibus delectus, tempora ipsum accusantium? Odio, autem rem. Aliquam incidunt nesciunt cumque nulla?</p>
    </div>
  )
}

export default Footer
