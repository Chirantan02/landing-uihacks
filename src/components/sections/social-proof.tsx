import React from "react";

export function SocialProof() {
  return (
    <section className="py-24 bg-background/50 backdrop-blur-xl border-y border-border">
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Trusted by leading brands worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of businesses that trust Zeneca to power their virtual try-on experiences
          </p>
        </div>

        {/* Logo Cloud */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="flex items-center justify-center col-span-1 px-8"
            >
              {/* Replace with actual company logos */}
              <div className="h-12 text-muted-foreground">{logo}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 mt-24 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-card/40 backdrop-blur-xl border border-border rounded-2xl hover:border-border/60 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 overflow-hidden rounded-full bg-blue-500/10">
                  {/* Replace with actual customer photos */}
                  <div className="absolute inset-0 flex items-center justify-center text-blue-400">
                    👤
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-4 text-sm font-medium text-muted-foreground">
                {testimonial.company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const logos = [
  "Company 1",
  "Company 2",
  "Company 3",
  "Company 4",
  "Company 5",
  "Company 6",
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "E-commerce Director",
    company: "Fashion Co.",
    quote: "Zeneca has transformed our online shopping experience. Our customers love the virtual try-on feature, and we've seen a 40% reduction in returns.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StyleTech",
    quote: "The integration was seamless, and the AI accuracy is impressive. Our conversion rates have increased by 25% since implementing Zeneca.",
  },
  {
    name: "Emma Williams",
    role: "Digital Marketing Manager",
    company: "Trendy Brands",
    quote: "The analytics and insights provided by Zeneca have been invaluable for our business. We can now make data-driven decisions about our virtual try-on strategy.",
  },
]; 