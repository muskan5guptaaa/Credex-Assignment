
import React from "react";

export default function HowItWorks() {
    const steps = ["Upload License", "Get Valuation", "Get Paid"];
    return (
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-around">
          {steps.map((step, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl mb-2">🔁</div>
              <h3 className="font-semibold">{step}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  