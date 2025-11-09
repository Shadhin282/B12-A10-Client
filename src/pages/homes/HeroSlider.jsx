import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const slides = [{
  id: 1,
  title: 'Find Your Dream Home',
  description: 'Discover the perfect property that fits your lifestyle and budget with our extensive listings.',
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1673&q=80',
  buttonText: 'Browse Properties'
}, {
  id: 2,
  title: 'Sell Your Property Fast',
  description: 'List your property with us and reach thousands of potential buyers in your area.',
  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1753&q=80',
  buttonText: 'List Property'
}, {
  id: 3,
  title: 'Expert Real Estate Advice',
  description: 'Our team of professionals is ready to guide you through every step of your real estate journey.',
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  buttonText: 'Contact Us'
}];
export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <div className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center p-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8">{slide.description}</p>
              <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>)}
      {/* Navigation buttons */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors" onClick={prevSlide}>
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 p-2 rounded-full hover:bg-black/50 transition-colors" onClick={nextSlide}>
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`} onClick={() => setCurrentSlide(index)}></button>)}
      </div>
    </div>;
};