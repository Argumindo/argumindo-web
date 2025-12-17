import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-pink-50 to-rose-100">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-8xl font-bold text-[#ED4C84]">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>
        <p className="text-gray-600 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#ED4C84] text-white font-medium rounded-lg hover:bg-[#E91E63] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}

