import React from 'react';
import { Star } from 'lucide-react';
const testimonials = [{
  id: 1,
  name: 'Sarah Johnson',
  role: 'Home Buyer',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  rating: 5,
  text: "HomeNest made finding my dream home a breeze! The platform is intuitive, and the team was incredibly helpful throughout the entire process. I couldn't be happier with my new home."
}, {
  id: 2,
  name: 'Michael Rodriguez',
  role: 'Property Investor',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  rating: 5,
  text: 'As a property investor, I need a reliable platform to find potential investments. HomeNest has consistently delivered quality listings and excellent service. Highly recommended!'
}, {
  id: 3,
  name: 'Emily Chen',
  role: 'First-time Seller',
  image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
  rating: 4,
  text: 'I was nervous about selling my first property, but the team at HomeNest guided me through every step. Their marketing strategy helped me get multiple offers above my asking price!'
}];
export const Testimonials = () => {
  return <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold  mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients who
            have found their perfect properties through HomeNest.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-gray-50 dark:bg-black/90 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <h3 className="font-bold ">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />)}
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-3  text-primary border-2 border-primary rounded-md hover:bg-primary hover:text-white transition-colors font-medium">
            Read More Testimonials
          </button>
        </div>
      </div>
    </section>;
};