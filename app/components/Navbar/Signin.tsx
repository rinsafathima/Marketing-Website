"use client"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';



const LoginForm = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    };

    const openModal = () => {
        setIsOpen(true)
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
       
        const email = event.target.email.value;
        const pws = event.target.password.value;

        // Replace 'http://localhost:8080/api/auth/signin' with your Spring Boot backend endpoint
        try {
            const response = await fetch('http://localhost:8888/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, pws }),
            });

            console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            // Handle login success here (e.g., redirect, store JWT, etc.)
            closeModal(); // Close modal on successful login
        } catch (error) {
            console.error('Failed to login:', error);
            // Handle login failure here (e.g., show error message)
        }
    };

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className='hidden md:block'>
                    <button type="button" className='flex justify-end text-xl font-medium bg-navyblue text-white py-4 px-4 lg:px-8 navbutton rounded-full hover:text-white hover:bg-pink' onClick={openModal}>
                        Sign In
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-md space-y-8">
                                            <div>
                                                <div className="flex items-center justify-center">
                                                    {/* <Image src="/images/Logo/Logo.svg" alt="logo" width={46} height={46} /> */}
                                                    <Link href="/" className='text-2xl font-semibold text-black ml-4'>
                                                        DietMunch
                                                    </Link>
                                                </div>
                                                <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-black">
                                                    Sign in to your account
                                                </h2>
                                            </div>
                                            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                                <input type="hidden" name="remember" defaultValue="true" />
                                                <div className="-space-y-px rounded-md shadow-sm">
                                                    <div>
                                                        <label htmlFor="email-address" className="sr-only">
                                                            Email address
                                                        </label>
                                                        <input
                                                            id="email-address"
                                                            name="email"
                                                            type="email"
                                                            autoComplete="email"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-lightgrey border-opacity-40 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Email address"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="password" className="sr-only">
                                                            Password
                                                        </label>
                                                        <input
                                                            id="password"
                                                            name="password"
                                                            type="password"
                                                            autoComplete="current-password"
                                                            required
                                                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-lightgrey border-opacity-40 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <input
                                                            id="remember-me"
                                                            name="remember-me"
                                                            type="checkbox"
                                                            className="h-4 w-4 rounded border-black text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                            Remember me
                                                        </label>
                                                    </div>

                                                    <div className="text-sm">
                                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                            Forgot your password?
                                                        </a>
                                                    </div>
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-black hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                    >
                                                        Sign in
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>


                                    {/* <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={handleSubmit}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div> */}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default LoginForm;
