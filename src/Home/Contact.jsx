import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have any questions or want to work with us? Feel free to reach out —
            we’d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Get in Touch
            </h2>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-700">Email</p>
                <p className="text-gray-600">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-700">Phone</p>
                <p className="text-gray-600">+880 1XXXXXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-700">Address</p>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
