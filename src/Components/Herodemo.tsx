const HeroSection = () => {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Welcome to Your Website
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We provide amazing services that help you achieve your goals. Our team
          is dedicated to delivering the best solutions tailored to your needs.
        </p>
        <div className="mt-6">
          <a
            href="#services"
            className="px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-md shadow hover:bg-blue-600"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
