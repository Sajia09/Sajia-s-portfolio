import React from 'react';
import img1 from '../../images/banner5.jpg'
import resume from '../../file/Sajia_Bintea_Jahangir.pdf';
import TypeWriterEffect from 'react-typewriter-effect';
const Banner = () => {
    return (
        <div className="hero  lg:min-h-screen" style={{ backgroundImage: `url(${img1})` }} id='home'>
            <div className="hero-content text-right text-white">
                <div className="max-w-lg">
                    <TypeWriterEffect
                        textStyle={{ fontSize:'40px', fontWeight:'bold' }}
                        startDelay={100}
                        cursorColor="black"
                        text="Welcome to My Portfolio"
                        typeSpeed={100}
                        eraseSpeed={100}
                    />
                    <TypeWriterEffect
                        textStyle={{ fontSize:'18px', fontWeight:'semibold',textAlign:'jusfity' }}
                        startDelay={200}
                        cursorColor="black"
                        text="Hello, This is Sajia.I'm a Junior Front End Developer.I'm an undergrade CSE student who is also a web development ethusiast.I am a Front-End Developer who focuses on developing user interface of a website.I design and develop websites and webapplication using HTML, CSS, JavaScript, Reactjs. I have sufficent knowledge in Nodejs and MongoDB."
                        typeSpeed={40}
                        eraseSpeed={100}
                    />
                    <p className="mb-5 text-white text-justify font-semibold"> </p>
                    <a href={resume} download ><button className='btn btn-primary text-white'> Download Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;