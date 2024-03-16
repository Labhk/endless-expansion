import React from 'react';

const HomePageSection = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen py-16">
      <div className="mx-auto max-w-screen-xl h-full px-4 py-10 flex justify-center items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent">
            Endless Expansion
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Enter the Infinite: Endless Expansion, where the game never ends, & the adventure knows no bounds!
          </p>
        </div>
      </div>

      {/* Section of Cards */}
      <div className="max-w-screen-xl mx-auto px-4 ">
        <div className="flex flex-wrap justify-center gap-4">
          {/* Your cards go here */}
          <div className="bg-gray-800 rounded-lg shadow-md p-4 w-full sm:w-auto">
            <img className="w-full rounded-md mb-4" src="https://picsum.photos/200" alt="Card Image" />
            <p className="text-gray-00 font-medium">Word Vista</p>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md p-4 w-full sm:w-auto">
            <img className="w-full rounded-md mb-4" src="https://picsum.photos/202" alt="Card Image" />
            <p className="text-gray-00 underline font-bold">More Coming soon....</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomePageSection;
