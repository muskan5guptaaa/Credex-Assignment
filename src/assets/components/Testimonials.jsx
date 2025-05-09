import React from "react";

export default function Testimonials() {
    const reviews = [
      { name: "John Doe", role: "CTO", company: "TechCorp", comment: "Amazing platform!" },
      { name: "Jane Smith", role: "IT Manager", company: "Innovate Inc", comment: "Very easy and fast." }
    ];
  
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10">Customer Testimonials</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 border rounded shadow w-80">
              <p className="italic mb-2">"{r.comment}"</p>
              <p className="font-bold">{r.name}</p>
              <p className="text-sm">{r.role}, {r.company}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  