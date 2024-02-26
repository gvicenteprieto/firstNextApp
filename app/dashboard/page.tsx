import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <p>
        Welcome to{' '}
        <strong
          className={`text-xl text-green-600 md:text-3xl md:leading-normal`}
        >
          Dashboard Page
        </strong>
      </p>
      {/* <div className="mt-4 flex grow flex-col md:flex-row">
        <div className="flex flex-col justify-center rounded-lg bg-gray-50 px-6 py-1 md:w-2/5 md:px-20">
          <Link
            href="/"
            className="flex items-center gap-5 self-start rounded-lg bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Home</span> <ArrowRightIcon className="w-7 md:w-6" />
          </Link>
        </div>
      </div> */}
{/* <h1>uno dos tres</h1> */}
      {/* <div >
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-3 md:w-2/5 md:px-20">
          <Link
            href="/dashboard/customers"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Customers</span> <ArrowRightIcon className="w-7 md:w-6" />
          </Link>
        </div>
      </div>

      <div >
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-3 md:w-2/5 md:px-20">
          <Link
            href="/dashboard/invoices"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Invoices</span> <ArrowRightIcon className="w-7 md:w-6" />
          </Link>
        </div>
      </div> */}


      
    </main>
  );
}
