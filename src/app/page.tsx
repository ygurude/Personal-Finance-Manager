'use client';

import { useState } from 'react';
import { FiDollarSign, FiPieChart, FiTrendingUp, FiShield, FiStar } from 'react-icons/fi';

const PRIMARY_COLOR = 'teal-600';
const PRIMARY_COLOR_LIGHT = 'teal-500';
const PRIMARY_COLOR_BG = 'teal-50';
const PRIMARY_COLOR_DARK = 'teal-700';
const ACCENT_COLOR = 'orange-400';

type Review = {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
};

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features: Feature[] = [
    {
      icon: <FiDollarSign className="w-8 h-8 text-white-500" />,
      title: 'Track Expenses',
      description: 'Effortlessly monitor your spending and identify saving opportunities.'
    },
    {
      icon: <FiPieChart className="w-8 h-8 text-white-400" />,
      title: 'Budget Planning',
      description: 'Create and manage budgets that work for your financial goals.'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-white-400" />,
      title: 'Investment Tracking',
      description: 'Monitor your investments and watch your portfolio grow.'
    },
    {
      icon: <FiShield className="w-8 h-8 text-white-400" />,
      title: 'Secure & Private',
      description: 'Bank-level security to keep your financial data safe.'
    }
  ];

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Freelance Designer',
      content: 'This app transformed how I manage my finances. The interface is clean and intuitive.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Miller',
      role: 'Marketing Manager',
      content: 'Finally, a finance app that makes budgeting simple and even kind of fun!',
      rating: 5
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Software Engineer',
      content: 'The investment tracking feature is a game-changer for my portfolio management.',
      rating: 4
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FiStar 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-orange-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-teal-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <FiDollarSign className="h-8 w-8 text-teal-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">Dhan</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">Features</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium">About</a>
              <div className="flex space-x-2 ml-4">
                <a href="/login" className="bg-white text-teal-600 border border-teal-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-50 transition-colors">
                  Login
                </a>
                <a href="/signup" className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-700 transition-colors">
                  Sign Up
                </a>
              </div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50">Features</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50">Pricing</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50">About</a>
              <div className="mt-2 space-y-2">
                <a href="/login" className="block w-full text-left px-3 py-2 text-base font-medium text-teal-600 hover:bg-teal-50 border border-teal-600 rounded-md">
                  Login
                </a>
                <a href="/signup" className="block w-full text-left px-3 py-2 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-md">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Take Control of Your</span>
            <span className="block text-teal-600">Financial Future</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Dhan helps you track expenses, create budgets, and achieve your financial goals with ease. 
            Start your journey to financial freedom today.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/signup"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#features"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage your money
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <div key={index} className="relative">
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
                    {feature.icon}
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by thousands of users
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-teal-50 p-8 rounded-lg">
                <div className="flex items-center">
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <blockquote className="mt-4">
                  <p className="text-lg text-gray-700">"{review.content}"</p>
                </blockquote>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to take control of your finances?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-teal-200">
            Join thousands of users who trust Dhan to manage their money.
          </p>
          <a
            href="/signup"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-teal-600 bg-white hover:bg-teal-50 sm:w-auto"
          >
            Sign up for free
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms</a>
            </div>
            <div className="px-5 py-2">
              <a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact</a>
            </div>
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Dhan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
