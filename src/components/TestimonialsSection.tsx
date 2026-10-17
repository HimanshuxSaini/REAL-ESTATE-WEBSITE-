import React from 'react';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Jagannath Properties helped me find the perfect plot in Sonipat. The team was very professional and supportive throughout the process.",
      name: "Amit Sharma",
      location: "Sonipat",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      propertyPurchased: "120 Gaj Plot in Sector 34"
    },
    {
      id: 2,
      quote: "Smooth and transparent dealing. Highly recommended for anyone looking for property in Delhi NCR.",
      name: "Pooja Verma",
      location: "Delhi NCR",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      propertyPurchased: "3 BHK Apartment in Rohini"
    },
    {
      id: 3,
      quote: "Great experience! They guided me at every step and helped me get the right property within my budget.",
      name: "Rakesh Kumar",
      location: "Rohtak",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      propertyPurchased: "Independent Kothi in Model Town"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-[#f2ebe2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header - Matches Screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <p className="text-xs sm:text-sm font-bold tracking-widest text-[#b47b3b] uppercase">
            CLIENT TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142620] tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Real experiences from people who found their dream properties with us.
          </p>
        </div>

        {/* 3 Cards Grid - Matches Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-[#e8ded1] shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between text-left relative group hover:border-[#b47b3b]/60"
            >
              <div>
                {/* Quote Icon - Matches Screenshot */}
                <div className="text-[#b47b3b] mb-4">
                  <Quote className="w-8 h-8 opacity-80" />
                </div>

                {/* Quote Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-medium italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & 5 Stars - Matches Screenshot */}
              <div className="flex items-center justify-between pt-4 border-t border-[#eee5d8]">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* 5 Golden Stars */}
                <div className="flex items-center gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
