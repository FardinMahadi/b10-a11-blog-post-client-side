import { useState } from "react";
import {
  Bounce,
  Flip,
  Slide,
  toast,
  ToastContainer,
  Zoom,
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newslatter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Thank you for subscribing to our newsletter!", {
      draggable: true,
      transition: Flip,
    });
    setEmail("");
  };

  return (
    <section className="bg-background-light dark:bg-background-dark py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-text-light dark:text-text-dark">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8">
            Stay updated with our latest news and updates delivered to your
            inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-background-secondary-light dark:bg-background-secondary-dark border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Newslatter;
