import React from "react";
import Link from "next/link";
import LoginForm from "./Signin";
import RegistrationForm from "./Register";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#banner-section', current: true },
    { name: 'About Us', href: '#aboutus-section', current: true },
    { name: 'FAQ', href: '#faq-section', current: true},
    { name: 'Gallery', href: '#gallery-section', current: true },
    { name: 'Cook', href: '#cook-section', current: true },
    { name: 'Meal Plan', href: '/MealPlan', current: true },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                        <button className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded">
                            Sign In
                        </button>
                        <LoginForm/>
                        <button className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded">
                            Register
                        </button>
                        <RegistrationForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
