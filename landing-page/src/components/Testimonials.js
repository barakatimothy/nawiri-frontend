import React from 'react';

const testimonials = [
  { name: 'Customer 1', quote: 'Amazing service! Highly recommend.' },
  { name: 'Customer 2', quote: 'Their support is top-notch.' },
  { name: 'Customer 3', quote: 'Very satisfied with the results.' },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-lg italic">"{testimonial.quote}"</p>
              <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
