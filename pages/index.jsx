import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const sectionClass =
    'flex flex-col items-center justify-center min-h-screen bg-gray-100 ' +
    'p-8';
  return (
    <div>
      <Head>
        <title>Restaurant Delivery</title>
      </Head>
      <section className={sectionClass}>
        <h1 className="text-4xl font-bold mb-4">Welcome to QuickBite</h1>
        <p className="mb-6 text-center max-w-xl">
          Get your favorite meals delivered fast. Sign up or log in to order now!
        </p>
        <div className="space-x-4">
          <Link href="/auth/customer-login" className="px-4 py-2 bg-blue-500 text-white rounded">
            Customer Login
          </Link>
          <Link href="/auth/owner-login" className="px-4 py-2 bg-green-500 text-white rounded">
            Restaurant Owner Login
          </Link>
        </div>
      </section>
    </div>
  );
}
