import React from "react";


export default function WhyChooseUs() {
    const reasons = [
      { icon: "⚡", title: "Fast Payouts" },
      { icon: "🔒", title: "Secure Platform" },
      { icon: "💰", title: "Best Prices" },
      { icon: "📞", title: "24/7 Support" },
    ];
  
    return (
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="p-4 bg-white rounded shadow">
              <div className="text-3xl mb-2">{r.icon}</div>
              <h3 className="font-semibold">{r.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  