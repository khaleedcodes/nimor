import React from "react";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    alert("Form submitted");
  };

  return (
    <section className="py-16 bg-gray-100 rounded-xl mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Start Your Project</h2>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 bg-white focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a type</option>
              <option value="website">Website</option>
              <option value="ecommerce">E-commerce</option>
              <option value="mobile">Mobile App</option>
              <option value="branding">Branding</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tell us a bit about your project goals..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit Project Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
