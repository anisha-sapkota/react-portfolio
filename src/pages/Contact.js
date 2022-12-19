export default function Contact() {
  return (
    <div className="container mx-auto my-2 max-w-7xl px-2 sm:px-6 lg:px-8">
      <h2 className="text-4xl mb-2">Contact</h2>
      <form className="max-w-2xl">
        <div class="mb-6">
          <label
            for="name"
            class="block mb-2 text-md font-medium text-gray-900"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John Smith"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-md font-medium text-gray-900"
          >
            Email address:
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="jsmith@example.com"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-md font-medium text-gray-900"
          >
            Message:
          </label>
          <textarea
            id="message"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Your message..."
            rows={4}
            required
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md max-w-fit px-5 py-2.5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
