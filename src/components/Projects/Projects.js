import React from 'react';
import img1 from '../../images/Screenshot (859).png';
import img2 from '../../images/Screenshot (861).png';
import img3 from '../../images/Screenshot (860).png';

const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white h-min-screen pt-20"
    >
      <div className="max-w-screen-lg py-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        <div className="rounded overflow-hidden hover:scale-105 duration-500 shadow-lg border-2">
          <img className="w-full" src={img1} alt="Mountain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Reader's Pick</div>
            <p className='text-justify'>
              Reader's Pick is a reseller book website where buyers can buy and sellers can add books for sale.To develop this website Reactjs, MongoDB, Nodejs, Expressjs  is used.Tailwind CSS component library daisy ui used.

            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://readers-pick.web.app/">Live Site</a></span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://github.com/Sajia09/Reader-s-Pick-Client-Site">Github Client</a></span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://github.com/Sajia09/Reader-s-Pick-Server-Site">Github Server</a></span>

          </div>
        </div>

        <div className="rounded overflow-hidden hover:scale-105 duration-500 shadow-lg  border-2">
          <img className="w-full" src={img2} alt="River" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Photozone</div>
            <p className='text-justify'>
              This project is a full stack project based on reactjs about a photographers services.Firebase authentication system is used for user login,signup and authentication.User can login & write reviews of the services.

            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://assignment-11-client-sit-b11d6.web.app/">Live Site</a></span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://github.com/Sajia09/Photozone-Client-Site">Github Client</a></span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://github.com/Sajia09/Photozone-Server-Site">Github Server</a></span>

          </div>
        </div>


        <div className="rounded overflow-hidden shadow-lg hover:scale-105 duration-500 border-2">
          <img className="w-full" src={img3} alt="Forest" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Learn IT Education</div>
            <p className="text-justify">
              LearnIT Education is a full stack education website developed using React.Firebase authentication system is used for user login,signup and authentication.Mongodb is used as backend database.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://assignment10-client-site.web.app/">Live Site</a></span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://github.com/Sajia09/Learn-IT-Client-Site">Github Client</a></span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a href="https://github.com/Sajia09/Learn-IT-Server-Site">Github Server</a></span>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;