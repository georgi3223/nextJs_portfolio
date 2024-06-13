import React from &apos;react&apos;;
import Image from &apos;next/image&apos;;

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:mb-6 items-center gap-6 ">
        
          <div className="flex-1">
            <Image src="/dev.png" alt="About Me" width={500} height={500} className="rounded-md shadow-lg" />
          </div>
       
          <div className="flex-1 bg-white p-6 rounded-md shadow-lg">
            <p className="text-gray-700 mb-4">
              Hello! I am passionate and aspiring junior web developer. I have a strong foundation in web development technologies and a keen interest in creating user-friendly and visually appealing websites and applications.
            </p>
            <p className="text-gray-700 mb-4">
              I am proficient in HTML, CSS, and JavaScript, and I am constantly expanding my skills by exploring modern frameworks and libraries such as React and Vue.js. My goal is to become a well-rounded developer who can build both front-end and back-end solutions.
            </p>
            <p className="text-gray-700 mb-4">
              During my education and personal projects, I have gained experience in working collaboratively in a team environment and delivering high-quality code. I believe that continuous learning is essential in this fast-paced industry, and I am always eager to learn and implement the latest technologies and best practices.
            </p>
            <p className="text-gray-700 mb-4">
              I am looking for opportunities to contribute my skills and passion to a dynamic and innovative team where I can grow professionally while making a positive impact on exciting web development projects.
            </p>
            <p className="text-gray-700 mb-4">
              When I&apos;m not coding, you can find me exploring new coding challenges, reading tech blogs, or enjoying outdoor activities. I am also a strong believer in giving back to the community and actively participate in open-source projects.
            </p>
            <p className="text-gray-700">
              Let&apos;s connect and collaborate on exciting projects together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
