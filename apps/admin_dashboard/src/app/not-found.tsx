import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50 p-6 text-center">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="text-gray-500">The page you are looking for does not exist.</p>
      <Link href="/" className="text-sm font-medium text-teal-700 hover:underline">
        Back to home
      </Link>
    </div>
  );
}
