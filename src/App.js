import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx'
import slimg1 from './assets/sl-img-1.png';
import slimg2 from './assets/sl-img-2.jpg';
import slimg3 from './assets/sl-img-3.jpg';
import slimg4 from './assets/sl-img-4.jpg';
import slimg5 from './assets/sl-img-5.jpg';

function App() {
  const slides = [
    {
       image: slimg1,
    },
    {
       image: slimg2,
    },
    {
       image: slimg3,
    },
    {
       image: slimg4,
    },
    {
       image: slimg5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides. length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1; 
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow*/}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5
       text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow*/}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5
       text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
    {slides.map((slide, slideIndex) => (
    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='test-2xl cursor-pointer'>
    <RxDotFilled /> 
    </div>      
    ))}
    </div>
    </div>
  );
}
export default App;
