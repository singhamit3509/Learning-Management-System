import Image from 'next/image';
import React from 'react';

const element = () => {
    return (
        <div className=' min-h-screen px-0 py-6'>
            <div className='w-full bg-orange-50 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10'>
                <div className='md:w-1/2 text-center md:text-left pt-10 pb-10'>
                    <h3 className='text-blue-600 font-semibold text-lg mb-2'>Fack Track Your Learning</h3>
                    <h2 className='text-gray-800 font-bold text-5xl mb-4'>Learn By Doing</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam quam recusandae ratione exercitationem laborum dicta nemo dolorem ducimus illo.</p>
                </div>
                <div className='md:w-1/2 flex justify-center mt-6 md:mt-0'>
                <Image
                    src="/assets/images/boy.png"
                    alt='Learning By Doing'
                    width={500}
                    height={400}
                    className='rounded-lg'
                />
                </div>
            </div>

            <div className='w-full bg-red-50 p-6 flex flex-col md:flex-row items-center pt-5 pb-10 pl-10'>
                <div className='md:w-1/2 flex justify-center mb-6 md:mb-0'>
                    <Image
                    src="/assets/images/girl.png"
                    alt='Put Your Learning'
                    width={500}
                    height={400}
                    className='rounded-lg'
                />
                </div>
                <div className='md:w-1/2 text-center md:text-left '>
                    <h3 className='text-green-600 font-semibold text-lg mb-2'>Step by step lessons</h3>
                    <h2 className='text-gray-800 font-bold text-5xl mb-4'>Put Your Learning Into <br/> Practise</h2>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam quam recusandae ratione exercitationem laborum dicta nemo dolorem ducimus illo.</p>
                </div>
                </div>
        </div>
    );
};

export default element;