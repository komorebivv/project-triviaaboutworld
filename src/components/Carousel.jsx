import React from 'react';
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const dataSlides = [ 
        {id: 1, textHeader: 'Welcome to TriviaAboutWorld', textParagraph: 'Learn something new about world!', img: require('../img/1.jpg').default },
        {id: 2, textHeader: 'You can learn here...', textParagraph: '...about everything',  img: require('../img/2.jpg').default },
        {id: 3, textHeader: 'So check this!', textParagraph: 'Click random trivia, or find something...',  img: require('../img/3.jpg').default},
    ]

    const [slides, setSlides] = useState(dataSlides)

    useEffect(() => {
        const lastIndex = slides.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, slides]);
    
      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);

    
    
    return (
        <>
        <header>
          <div class="box"></div>
          <div className="container">
        <div className='slides container'>
            {slides.map((slide, slideIndex) => {let {id, textHeader, textParagraph, img} = slide;
            // more stuff
            let position = 'carousel-img nextSlide';
            if (slideIndex === index) {
                console.log(index, slideIndex);
                position = 'carousel-img activeSlide'
            }
            if (
                slideIndex === index - 1 ||
                (index === 0 && slideIndex === slides.length - 1)
              ) {
                position = 'carousel-img lastSlide';
              }
            return <div key={id}>
                    <div className={position} style={{backgroundImage: `url(${img})`}}> 
                    <div className="textSlider">
                    <h2> { textHeader } </h2>
                    <p> { textParagraph } </p></div>
                    <div className="buttons">
                    <button className="prev-img">
                    <FaChevronLeft onClick = {() => setIndex(index - 1)}/>
                    </button>
                    <button className="next-img">
                    <FaChevronRight onClick = {() => setIndex(index + 1)}/>
                    </button> </div>
                </div>
            </div>
            
            })}</div><Link to="/trivias"><button className="btn" style={{marginTop: 40}}>CHECK SOME TRIVIAS</button></Link></div>
               </header>
        </>
    )

} /* <div className="textSlider">
        <h2> { slides[index].textHeader } </h2>
        <p> { slides[index].textParagraph } </p></div> */

export default Carousel