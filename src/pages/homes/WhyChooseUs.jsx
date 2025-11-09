import React from 'react';
import { Search, Award, Shield, Clock } from 'lucide-react';
const features = [{
  icon: <Search className="w-10 h-10 text-primary" />,
  title: 'Wide Range of Properties',
  description: 'Browse through thousands of listings to find the perfect property that meets all your requirements and preferences.'
}, {
  icon: <Award className="w-10 h-10 text-primary" />,
  title: 'Trusted by Thousands',
  description: 'With years of experience and thousands of satisfied customers, we are a name you can trust for all your real estate needs.'
}, {
  icon: <Shield className="w-10 h-10 text-primary" />,
  title: 'Secure Transactions',
  description: 'Our platform ensures that all transactions are secure and transparent, giving you peace of mind throughout the process.'
}, {
  icon: <Clock className="w-10 h-10 text-primary" />,
  title: 'Fast & Efficient Service',
  description: 'Our dedicated team works tirelessly to provide quick responses and efficient service to help you find your dream property.'
}];
export const WhyChooseUs = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At HomeNest, we're dedicated to making your property journey smooth
            and successful. Here's why thousands of clients trust us with their
            real estate needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>)}
        </div>
        <div className="mt-16 bg-primary/5 p-8 rounded-lg border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Ready to Find Your Dream Home?
              </h3>
              <p className="text-gray-600">
                Join thousands of satisfied customers who found their perfect
                property with HomeNest.
              </p>
            </div>
            <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>;
};