import React from 'react';
import resume from '../../file/Sajia_Bintea_Jahangir.pdf'

const About = () => {
  return (
    <div className=" max-h-screen bg-gradient-to-b from-black to-gray-800 text-white pt-20" id='about'>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div>
          <p className=" text-justify text-xl">I'm a Front End Developer.I'm well experienced on HTML, CSS, JavaScript & Reactjs. I have done several projects based on the mentioned laguages and technology.I have also experience with Nodejs,Expressjs, MongoDB and firebase.I'm a curious minded first learner individual who is always ready to explore new technologies. I'm an undergrade CSE student of Jahangirnagar University,Dhaka ,Bangladesh.I'm also a development enthusiast who is very much interested in building websites.</p>
          <a href={resume} download ><button className='btn btn-primary text-white mt-10'> Explore My Resume</button></a>
        </div>
      </div>
    </div>
  );
};

export default About;