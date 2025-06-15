import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Account Deleted | OtaMap',
  description: 'Your account has been successfully deleted',
};

export default function AccountDeleted() {
  return (
    <main className="container mx-auto px-4 py-12 flex flex-col items-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Account Deleted</h1>
        <div className="mb-6">
          <svg
            className="mx-auto h-12 w-12 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p className="text-gray-600 mb-6">
          Your account has been successfully deleted. All your personal data will be removed from our systems within 30 days.
        </p>
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}