import Image from 'next/image';
import React from 'react';

const support = () => {
    return (
        <div className='bg-darkBlue text-black py-5 px-4 md:px-16 border-b border-gray-700'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-8'>
                <div className='flex-1 space-y-3'>
                    <p className='mt-5 text-3xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:leading-tight font-poppins'>
                        <span className='relative inline-flex sm:inline'>
                            <span className='bg-gradient-to-r from-red-300 via-violet-400 to-red-400 blur-lg filter opacity-30 w-full h-full absolute inset-0'></span>
                             <span className='relative'>Let Us Knoe For Your Support</span>
                        </span>
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolorem nemo autem! Iure repellendus quo eaque, vero ratione pariatur commodi dolore, omnis fugit cupiditate harum id accusamus nulla consequatur qui magni. Quibusdam, voluptatibus dignissimos!</p>
                    <div className='flex flex-wrap gap-4'>
                        <a href='#' className='bg-violet-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-violet-800 transition'>
                            Contact Us
                        </a>

                        <a href='#' className='bg-gray-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition'>
                            Call for Support
                        </a>
                    </div>
                </div>
                <div className='flex-1 flex justify-center'>
                <Image 
                        src="/assets/images/support1.png"
                        alt='Support'
                        width={500}
                        height={400}
                        className='rounded-lg'
                />    
                </div>
            </div>
        </div>
    );
};

export default support;