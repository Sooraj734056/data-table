import React from "react";
import { FaRocket, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

const Features: React.FC = () => {
  const features: { icon: React.ReactNode; title: string; desc: string }[] = [
    {
      icon: FaRocket({ className: "mx-auto text-blue-500 text-4xl mb-4" }),
      title: "Fast Performance",
      desc: "Our platform ensures lightning-fast loading and smooth user experience.",
    },
    {
      icon: FaMobileAlt({ className: "mx-auto text-blue-500 text-4xl mb-4" }),
      title: "Responsive Design",
      desc: "Looks perfect on all devices, from mobiles to desktops.",
    },
    {
      icon: FaShieldAlt({ className: "mx-auto text-blue-500 text-4xl mb-4" }),
      title: "Secure",
      desc: "Your data is safe with our top-notch security measures.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            {feature.icon}
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
