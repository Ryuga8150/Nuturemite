import React from "react";

const Newsletter = () => {
  return (
    <section className="py-12 flex flex-col items-center justify-center">
      <div className="bg-yellow-50 p-6 rounded-lg flex items-center justify-between max-w-2xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold">Join Our Newsletter</h2>
          <p className="text-sm text-gray-600">
            Join over 1,000 satisfied real estate customers today
          </p>
        </div>
        <form className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
