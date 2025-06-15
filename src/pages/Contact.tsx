import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../components/Button";
import { useSnackbar } from "notistack";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    projectType: "personal",
    userType: "individual",
    projectDescription: "",
  });

  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

    try {
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, {
        publicKey: PUBLIC_KEY,
      });

      if (response) {
        enqueueSnackbar("Our Team will get in touch with you soon!", {
          variant: "success",
        });
      }
    } catch (error) {
      enqueueSnackbar("An error occurred while sending your request.", {
        variant: "error",
      });
    } finally {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        projectType: "personal",
        userType: "individual",
        projectDescription: "",
      });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dark background with subtle texture */}
      <div className="absolute inset-0 z-0 bg-[#0a0018]" />

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-300 font-semibold">
            Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl p-8 sm:p-10 border border-gray-700/50">
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                />
              </div>

              {/* Location Field */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-300"
                >
                  Location (City/Country)
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                />
              </div>
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Project Type *
              </label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {["Personal", "Institution", "Enterprise"].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      id={`project-${type.toLowerCase()}`}
                      name="projectType"
                      type="radio"
                      checked={formData.projectType === type.toLowerCase()}
                      onChange={handleChange}
                      value={type.toLowerCase()}
                      className="h-4 w-4 border-gray-500 focus:ring-violet-600 text-violet-700 bg-gray-700"
                    />
                    <label
                      htmlFor={`project-${type.toLowerCase()}`}
                      className="ml-3 block text-sm font-medium text-gray-300"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* User Type */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                You are *
              </label>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {["Student", "Professional", "Business Owner"].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      id={`user-${type.toLowerCase().replace(" ", "-")}`}
                      name="userType"
                      type="radio"
                      checked={
                        formData.userType ===
                        type.toLowerCase().replace(" ", "-")
                      }
                      onChange={handleChange}
                      value={type.toLowerCase().replace(" ", "-")}
                      className="h-4 w-4 border-gray-500 focus:ring-violet-600 text-violet-700 bg-gray-700"
                    />
                    <label
                      htmlFor={`user-${type.toLowerCase().replace(" ", "-")}`}
                      className="ml-3 block text-sm font-medium text-gray-300"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label
                htmlFor="projectDescription"
                className="block text-sm font-medium text-gray-300"
              >
                Tell us about your project *
              </label>
              <textarea
                id="projectDescription"
                name="projectDescription"
                rows={5}
                value={formData.projectDescription}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-700/50 border border-gray-600 rounded-lg shadow-sm py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent"
                required
              />
            </div>

            <div className="flex justify-end">
              <Button text="Submit Request" type="submit" loading={loading} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
