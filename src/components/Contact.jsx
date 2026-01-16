import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // "success" | "error"
  const [toastMessage, setToastMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const showToast = (type, message) => {
    setStatus(type);
    setToastMessage(message);

    setTimeout(() => {
      setStatus(null);
      setToastMessage("");
    }, 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (loading) return;

    const form = formRef.current;
    const name = form.from_name.value.trim();
    const email = form.from_email.value.trim();

    if (!name) {
      showToast("error", "Name cannot be empty.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("error", "Please enter a valid email address.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        showToast("success", "Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        showToast("error", "Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#07070A] text-white flex items-center relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#7C7CFF]/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-[#7C7CFF]/10 rounded-full blur-[140px]" />

      {/* Toast */}
      {status && (
        <div
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-md text-sm font-medium
            ${
              status === "success"
                ? "bg-[#7C7CFF]/90 text-black shadow-[0_0_30px_rgba(124,124,255,0.6)]"
                : "bg-red-500/90 text-white shadow-[0_0_30px_rgba(239,68,68,0.6)]"
            }
          `}
        >
          {toastMessage}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
           
             <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-[#7C7CFF]">
              Contact
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or any queries.
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="
            max-w-xl mx-auto space-y-6
            rounded-xl p-8
            bg-white/5 backdrop-blur
            border border-white/10
            shadow-[0_0_40px_rgba(124,124,255,0.15)]
          "
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="
              w-full bg-transparent
              border border-white/20 rounded-md
              px-4 py-3 text-white
              placeholder:text-gray-500
              focus:border-[#7C7CFF] focus:ring-1 focus:ring-[#7C7CFF]
              outline-none transition
            "
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="
              w-full bg-transparent
              border border-white/20 rounded-md
              px-4 py-3 text-white
              placeholder:text-gray-500
              focus:border-[#7C7CFF] focus:ring-1 focus:ring-[#7C7CFF]
              outline-none transition
            "
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="
              w-full bg-transparent
              border border-white/20 rounded-md
              px-4 py-3 text-white
              placeholder:text-gray-500
              focus:border-[#7C7CFF] focus:ring-1 focus:ring-[#7C7CFF]
              outline-none transition resize-none
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-md
              bg-[#7C7CFF] text-black font-medium
              hover:shadow-[0_0_30px_rgba(124,124,255,0.5)]
              hover:scale-[1.02]
              active:scale-95
              disabled:opacity-60 disabled:cursor-not-allowed
              transition
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
