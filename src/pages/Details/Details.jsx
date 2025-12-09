import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { ShoppingCart, Tag, Clock, CheckCircle } from 'lucide-react';

export const Details = () => {
    const service = useLoaderData();
    const {title, img, price, _id, description } = service;

        const [message, setMessage] = useState(null);

    const handleCheckout = () => {
        setMessage(`Processing checkout... Redirecting to /checkout/${_id}`);
        setTimeout(() => setMessage(null), 3000);
    };
  return (
           <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">

                
                <Link to="/"
                    className="inline-block text-blue-600 hover:text-blue-800 font-semibold mb-6 transition">
                    ← Back to Services
                </Link>

                <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-6 lg:p-12">

                       
                        <div className="lg:col-span-2 space-y-6">

                            
                            <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
                                <img
                                    src={img}
                                    alt={title}
                                    className="w-full h-64 sm:h-96 md:h-[420px] object-cover hover:scale-[1.02] transition duration-500"
                                />
                            </div>

                            
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
                                {title}
                            </h1>

                            
                            <div className="flex space-x-6 text-gray-600 dark:text-gray-300 items-center">
                                <div className="flex items-center gap-2">
                                    <Tag size={22} className="text-indigo-500" />
                                    <p className="text-2xl font-semibold">${price}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Clock size={22} className="text-orange-400" />
                                    <p className="text-lg">Estimated: 1-3 Hours</p>
                                </div>
                            </div>

                            
                            <p className="text-white  text-lg leading-relaxed">
                                {description}
                            </p>

                        </div>

                        
                        <div className="lg:col-span-1 bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-inner border border-gray-200 dark:border-gray-600 h-fit sticky top-10 space-y-6">

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b pb-3">
                                What's Included
                            </h2>

                            <ul className="space-y-3 text-gray-800 dark:text-gray-200">
                                <li className="flex items-start gap-2"><CheckCircle className="text-green-500" /> Premium Parts & Service</li>
                                <li className="flex items-start gap-2"><CheckCircle className="text-green-500" /> Engine Diagnostic Check</li>
                                <li className="flex items-start gap-2"><CheckCircle className="text-green-500" /> Oil + Filter Change</li>
                                <li className="flex items-start gap-2"><CheckCircle className="text-green-500" /> Quality Inspection</li>
                            </ul>

                            
                            <div className="pt-6 border-t border-gray-300 dark:border-gray-600 space-y-4">

                                <div className="flex justify-between">
                                    <span className="text-xl font-medium text-gray-900 dark:text-gray-100">Total:</span>
                                    <span className="text-3xl font-bold text-indigo-600">${price}</span>
                                </div>

                                {/* Checkout Button redirects normally */}
                                <Link to={`/checkout/${_id}`}>
                                    <button
                                        onClick={handleCheckout}
                                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg font-semibold flex justify-center items-center gap-2 transition"
                                    >
                                        <ShoppingCart size={22} /> Proceed to Checkout
                                    </button>
                                </Link>

                                <p className="text-xs text-center text-gray-500 dark:text-gray-300">Service ID: {_id}</p>
                            </div>

                        </div>
                    </div>
                </div>

                
                {message && (
                    <div className="fixed bottom-5 right-5 bg-blue-600 text-white px-5 py-3 rounded-lg shadow-xl animate-bounce">
                        {message}
                    </div>
                )}
            </div>
        </div>
  )
}
