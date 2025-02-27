import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark py-36">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-text-light dark:text-text-dark">
            <TypeAnimation
              sequence={[
                "Digital Frontier Chronicles",
                500,
                "Tech Innovation Ecosystem",
                500,
                "Tech Innovation Ecosystem",
                500,
                "Code Evolution Insights",
                500,
                "AI Revolution Decoded",
                500,
                "Developer Universe Today",
                500,
                "Silicon Valley Thinking",
                500,
                "Next-Gen Tech Narratives",
                500,
                "Quantum Computing Future",
                500,
                "DevOps Transformation Hub",
                500,
              ]}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-md md:text-2xl text-text-secondary-light dark:text-text-secondary-dark">
            Exploring the intersection of technology, innovation, and human
            experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
