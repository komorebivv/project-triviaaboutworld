import { useState } from "react"

const Trivia = ({id, title, post, image, removeTrivia }) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <section className="trivia">
            <img className="trivia-img" src={image}/>
            <h3>{title}</h3>
            <p>{readMore ? post : `${post.substring(0, 200)}`}<button className="read-btn" onClick = {() => (setReadMore(!readMore))}>{readMore ? 'slow less' : 'read more...'} </button></p>
            <button className="btn delete-btn" onClick = {() => removeTrivia(id)}>Boring...</button>
        </section>
    )
}


export default Trivia