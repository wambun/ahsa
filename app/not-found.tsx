import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[500px] flex flex-col items-center justify-center px-4 py-24">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. Please head back
          to the homepage or contact us if you think this is an error.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
          >
            Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-semibold transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
