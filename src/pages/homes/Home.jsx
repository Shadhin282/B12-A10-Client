import React from 'react';
import { HeroSlider } from './HeroSlider';
import {WhyChooseUs} from './WhyChooseUs';
import {FeaturedProperties} from './FeaturedProperties';
import {Testimonials} from './Testimonials';
import {NewsletterSignup} from './NewsletterSignup';
import Loader from '../../components/Loader';

const Home = () => {
    return (
        <div className="w-full">
      <HeroSlider />
        {
          <Loader></Loader> && <FeaturedProperties />
      }
      <WhyChooseUs />
      <Testimonials />
      <NewsletterSignup />
    </div>
    );
};

export default Home;