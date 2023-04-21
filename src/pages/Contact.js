export default function Contact() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12">
        <aside className="col-span-12 md:col-span-6 flex flex-col justify-center items-center">
          <h3 className="font-extrabold text-3xl">Hello</h3>
          <p>------------------------</p>
          <p className="font-bold mb-2">Want to get in contact? </p>
          <p className="font-medium">Anisha Sapkota, Web Developer</p>
          <a
            className="font-medium text-blue-600 hover:underline"
            href="mailto:anisha.sapkota@gmail.com"
          >
            anisha.sapkota79@gmail.com
          </a>
          <p className="font-medium">I would love to hear from you!</p>
        </aside>
        <div className="col-span-12 md:col-span-6 p-4">
          <form className="max-w-2xl shadow-lg rounded p-4">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="John Smith"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Email address:
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="jsmith@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-md font-medium text-gray-900"
              >
                Message:
              </label>
              <textarea
                id="message"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your message..."
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md max-w-fit px-7 py-3 mb-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>{" "}
    </>
  );
}
