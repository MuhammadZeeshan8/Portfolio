import React from "react";
const certifications = [
  {
    id: 1,
    name: "Aspire Leadership Course",
    description: "Harvard University",
    image: "./assets/checkmark.png"
  },
  {
    id: 2,
    name: "Python For Everybody",
    description: "University of Michigan",
    image: "./assets/checkmark.png"
  },
  {
    id: 3,
    name: "C++ Basics: Selection and Iteration",
    description: "Codio",
    image: "./assets/checkmark.png"
  },
  {
    id: 4,
    name: "Introduction to Generative AI",
    description: "Google Cloud",
    image: "./assets/checkmark.png"
  },
  {
    id: 5,
    name: "Outreach Technical Coordinator",
    description: "IET on Campus ITU",
    image: "./assets/checkmark.png"
  },
  {
    id: 6,
    name: "Cloud Foundation",
    description: "Great Learning",
    image: "./assets/checkmark.png"
  },
  {
    id: 7,
    name: "Entrepreneurship",
    description: "Information Technology University (ITU)",
    image: "./assets/checkmark.png"
  },
  {
    id: 8,
    name: "NDG Linux Essentials",
    description: "Cisco Networking Academy",
    image: "./assets/checkmark.png"
  }
];

const Certifications = () => {
  return (
    <section id="Certifications">
      <div className="max-w-4xl mx-auto py-24 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-8 text-white text-center">
          Certifications
        </h2>
        <div className="flex flex-wrap justify-center items-center space-x-8">
          {certifications.map((certification) => (
            <div key={certification.id} className="p-4 w-full max-w-xs text-center">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img
                  src={certification.image}
                  alt={certification.name}
                  className="w-12 h-12 mb-3 mx-auto"
                />
                <h2 className="title-font font-medium text-2xl text-white">
                  {certification.name}
                </h2>
                <p className="text-gray-400">{certification.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
