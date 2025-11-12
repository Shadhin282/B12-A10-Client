import React, { useEffect, useState } from 'react';
import { HeroSlider } from './HeroSlider';
import {WhyChooseUs} from './WhyChooseUs';
import {FeaturedProperties} from './FeaturedProperties';
import {Testimonials} from './Testimonials';
import {NewsletterSignup} from './NewsletterSignup';
import Loader from '../../components/Loader';

const Home = () => {
  const [loading, setLoading] = useState(true)
   const [featuredProperties,setFeaturedProperties] = useState([])
  console.log(featuredProperties)
  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:5000/recent-properties')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setFeaturedProperties(data)
        setLoading(false)
    })
  },[])
    return (
        <div className="w-full ">
      <HeroSlider />
        {
         loading? <Loader></Loader> : <FeaturedProperties featuredProperties={featuredProperties} />
      }
      <WhyChooseUs />
      <Testimonials />
      <NewsletterSignup />
    </div>
    );
};

export default Home;