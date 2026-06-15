import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!");
      return;
    }

    setSending(true);
    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await fetch("https://portfolio-backend-zh1h.onrender.com/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(
          "Message sent successfully! I will get back to you soon.",
          { id: loadingToast },
        );
        setFormData({ name: "", email: "", message: "" }); // Form clear kar dein
      } else {
        toast.error("Failed to send message. Please try again.", {
          id: loadingToast,
        });
      }
    } catch (error) {
      toast.error("Server connection error.", { id: loadingToast });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="px-8 py-16 w-full max-w-7xl mx-auto" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Side: Text and Button */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-white mb-4">
            Let's work together
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            I'm currently available for freelance work or full-time
            opportunities. If you have a project in mind, let's talk!
          </p>
          {/* WhatsApp Click-to-Chat Link */}
          <a
            href="https://wa.me/923053820963"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            WhatsApp Me <span>→</span>
          </a>
        </div>

        {/* Middle: Contact Info */}
        <div className="flex flex-col gap-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="text-primary">
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
            <span className="text-gray-300 text-sm">usamashafaqat22@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-primary">
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
            <span className="text-gray-300 text-sm">+92 305 3820963</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-primary">
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
            <span className="text-gray-300 text-sm">Sadiqabad,Pakistan</span>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-gray-300 text-sm">Available for work</span>
          </div>
        </div>

        {/* Right Side: Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full bg-cardBg border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full bg-cardBg border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
            className="w-full bg-cardBg border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none"
          ></textarea>

          <button
            type="submit"
            disabled={sending}
            className={`w-full font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${sending ? "bg-gray-600 text-gray-300 cursor-not-allowed" : "bg-primary hover:bg-purple-700 text-white shadow-lg shadow-primary/20"}`}
          >
            {sending ? "Sending..." : "Send Message"}
            {!sending && (
              <svg
                className="w-4 h-4"
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
    </section>
  );
};

export default Contact;
