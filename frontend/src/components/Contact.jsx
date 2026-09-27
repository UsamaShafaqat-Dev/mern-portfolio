import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // NOTE: Make sure your backend API handles 'projectType' and 'budget'
      const res = await fetch(
        "https://portfolio-backend-zh1h.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        toast.error("Message send karne mein masla aaya.");
      }
    } catch (error) {
      toast.error("Network error, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-24 px-8 pb-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left Side: Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            Let's work together
          </h2>
          <p className="text-gray-400 mb-10 max-w-md leading-relaxed">
            I'm currently available for freelance work or full-time
            opportunities. If you have a project in mind, let's talk!
          </p>

          <a
            href="https://wa.me/923053820963"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-fit mb-12 shadow-lg shadow-primary/25"
          >
            WhatsApp Me →
          </a>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="text-primary bg-cardBg p-3 rounded-full border border-gray-800">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <span className="font-medium">usamashafaqat22@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="text-primary bg-cardBg p-3 rounded-full border border-gray-800">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <span className="font-medium">+92 305 3820963</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="text-primary bg-cardBg p-3 rounded-full border border-gray-800">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <span className="font-medium">Sadiqabad, Pakistan</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300 mt-8">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
              <span className="font-semibold text-sm uppercase tracking-wider text-green-400">
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2">
          <form
            onSubmit={handleSubmit}
            className="bg-cardBg border border-gray-800 p-8 rounded-3xl shadow-xl flex flex-col gap-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-background border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-background border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <select
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className={`w-full bg-background border border-gray-800 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors ${formData.projectType ? "text-white" : "text-gray-500"}`}
              >
                <option value="" disabled hidden>
                  Project Type
                </option>
                <option value="MERN Stack Web App">MERN Stack Web App</option>
                <option value="Flutter Mobile App">Flutter Mobile App</option>
                <option value="Landing Page / Portfolio">
                  Landing Page / Portfolio
                </option>
                <option value="E-commerce Store">E-commerce Store</option>
                <option value="Other">Other</option>
              </select>

              <select
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className={`w-full bg-background border border-gray-800 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors ${formData.budget ? "text-white" : "text-gray-500"}`}
              >
                <option value="" disabled hidden>
                  Estimated Budget
                </option>
                <option value="Less than $500">Less than $500</option>
                <option value="$500 - $1,000">$500 - $1,000</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000+">$5,000+</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Your Message (Tell me about your project)"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-background border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 flex justify-center items-center gap-2 mt-2 disabled:opacity-70 shadow-lg shadow-primary/25"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && (
                <svg
                  className="w-5 h-5 transform rotate-[-45deg] mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
