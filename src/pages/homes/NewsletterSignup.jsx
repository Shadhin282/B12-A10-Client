import React from 'react';
import { Mail } from 'lucide-react';
export const NewsletterSignup = () => {
  return <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with HomeNest
          </h2>
          <p className="mb-8 text-white/90">
            Subscribe to our newsletter to receive the latest property listings,
            market insights, and real estate tips directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Enter your email address" className="px-4 py-3 rounded-md flex-grow text-gray-900 focus:outline-none" />
            <button className="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-sm text-white/80">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from HomeNest.
          </p>
        </div>
      </div>
    </section>;
};