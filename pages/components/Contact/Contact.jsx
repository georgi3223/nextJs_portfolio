import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-gray-800">
      <div className="container mx-auto px-4 text-white">
        <h2 className="text-4xl font-bold mb-6 text-center text-black">Contact</h2>
        <div className="flex justify-center">
          <a href="https://github.com/georgi3223" className="mr-2">
            <Image src="/github.png" alt="GitHub" width={40} height={40} />
          </a>
          <a href="https://www.linkedin.com/in/georgi-nyagolov-26668a23a/">
            <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
