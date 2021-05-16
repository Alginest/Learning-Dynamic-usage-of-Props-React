import React from 'react'
import ReactDom from 'react-dom'
// Css Import
import './index.css'
// Setup Vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
  title: 'I love u to the moon and back.',
  author: 'Amelia Hepworth',
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg',
  title: '0ur class is a Family.',
  author: 'Sam Dendruf',
}

// APP
function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

// Main Component
const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img style={{ width: '300px' }} src={props.img} alt='1' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
