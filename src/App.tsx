import "./App.css";
import NavBar from "./components/NavBar";
import nikhilimage from "./assets/nikhilchinnala-removebg.png";
import java from "./assets/java.svg";
import css from "./assets/css.svg";
import html from "./assets/html5.svg";
import mui from "./assets/material-ui.svg";
import mysql from "./assets/mysql.svg";
import spring from "./assets/spring.svg";
import tailwind from "./assets/tailwind.svg";
import react from "./assets/reactjs.svg";
import github from "./assets/github.svg";
import k8s from "./assets/kubernetes.svg";
import javascript from "./assets/javascript.svg";
import jenkins from "./assets/jenkins.svg";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import gmail from "./assets/gmail.svg";
import phone from "./assets/phone.svg";

function App() {
  return (
    <>
      <div className="h-1/2 bg-gradient-to-t from-indigo-300 to-transparent lg:h-screen relative w-full z-30">
        {/* header nav bar */}
        <NavBar />
        {/* Introduction */}
        {/* image */}
        <img
          className=" hidden lg:block absolute right-0 bottom-0  mx-auto h-3/6 "
          src={nikhilimage}
          alt="nikhil_chinnala"
        />
        {/* circles */}
        <div
          className="hidden lg:block absolute right-0 bottom-0 bg-gradient-to-tl 
      from-transparent to-indigo-200 w-big h-big rounded-tl-full  -z-10 overflow-hidden"
        />
        <div
          className="hidden lg:block absolute right-0 bottom-0 bg-gradient-to-tl 
      from-transparent to-indigo-300 w-medium h-medium rounded-tl-full  -z-20"
        />
        {/* title for large screen*/}
        {/* <div className="hidden lg:block text-gray-900 absolute bottom-2  md:left-0 pl-8 font-bold mx-auto uppercase xl:text-5xl  md:text-4xl">
          Full Stack Developer
        </div> */}
        {/* tech logos */}
        <div className="hidden lg:absolute overflow-hidden lg:grid grid-cols-4 gap-20 top-60 left-16">
          <img className="h-16 w-16" src={java} />
          <img className="h-16 w-16" src={react} />
          <img className="h-16 w-16" src={spring} />
          <img className="h-16 w-16" src={tailwind} />
          <img className="h-16 w-16" src={javascript} />
          <img className="h-16 w-16" src={mui} />
          <img className="h-16 w-16" src={html} />
          <img className="h-16 w-16" src={css} />
          <img className="h-16 w-16" src={mysql} />
          <img className="h-16 w-16" src={k8s} />
          <img className="h-16 w-16" src={github} />
          <img className="h-16 w-16" src={jenkins} />
        </div>

        {/* intro section */}
        <div className="flex flex-col gap-4 min-h-40 justify-center w-4/5 left-0 right-0  mx-auto top-24 bg-white absolute  lg:left-1/2 lg:top-48 lg:w-1/3 rounded-lg shadow-lg text-sm p-4 -z-10">
          <h1 className="text-indigo-600 text-xl">Hello, it's Nikhil </h1>
          <p>
            I have overall 8 years of expreience in delivering web applications
            and worked for several MNCs
          </p>

          <a
            className="bg-indigo-400 text-white rounded-sm w-fit p-2 text-lg text-center hover:bg-white hover:text-indigo-600"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div
        id="about"
        className="container mx-auto h-fit w-full bg-slate-200  lg:p-20"
      >
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <h1 className="text-4xl text-gray-900 font-bold uppercase text-center w-10/12">
            About me
          </h1>
          <div className="h-2 w-12 bg-indigo-500 rounded-lg" />
        </div>
        <div className="py-8 h-full  w-full">
          <p className=" hidden text-center w-full italic md:block md:p-4 text-xl">
            Hello, Are you curious about my previous works and know more about
            me? Here, you can find my previous work experiences
          </p>
          <div className="flex flex-col justify-center lg:flex-row w-auto">
            <div className=" w-full lg:w-4/6 p-8 font-inter text-xl flex flex-col gap-8 place-content-center">
              <p className="text-xl font-bold">Get to know me!</p>
              <p>
                I'm a web developer building responsive web applications for all
                types of businesses based on client customized requirements
                before expected deadline. You can find some of my works in
                <a
                  href="#projects"
                  className="text-indigo-900 uppercase font-bold"
                >
                  &nbsp; projects &nbsp;
                </a>
                section.
              </p>
              <p>
                I'm open to any job opportunities to help your team to improve
                or build any web application.
                <a
                  href="#projects"
                  className="text-indigo-900 uppercase font-bold"
                >
                  &nbsp; contact &nbsp;
                </a>
              </p>
            </div>
            <div className="w-full p-8 font-inter flex flex-col gap-8 place-content-center">
              <p className="text-xl font-bold">Professional Experience</p>
              <div>
                <p className="font-bold">Mphasis Ltd. 2015 - 2018</p>
                <p>
                  Worked as java developer to build backend applications to
                  integrate mainframe systems with UI
                </p>
              </div>
              <div>
                <p className="font-bold">
                  Ericsson Global India Pvt Ltd. 2018 - 2021
                </p>
                <p>
                  Worked as full stack developer to build backend heavy web
                  application of Notification engine
                </p>
              </div>
              <div>
                <p className="font-bold">Netcracker 2021 - 2022</p>
                <p>
                  Worked as full stack developer to build SFA to enhance lead
                  generation life cycle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="container mx-auto h-fit bg-slate-200 lg:p-20"
      >
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl text-gray-900 font-bold uppercase text-center w-10/12">
            Projects
          </h1>
          <div className="h-2 w-12 bg-indigo-500 rounded-lg" />
        </div>
        <div className="w-full h-full">
          <h1 className="text-center text-4xl py-40 font-bold text-indigo-600">
            Coming soon
          </h1>
        </div>
      </div>
      <div
        id="contact"
        className="container mx-auto h-fit bg-slate-200 lg:p-20"
      >
        <div className="flex flex-col items-center gap-4 w-full ">
          <h1 className="text-4xl text-gray-900 font-bold uppercase text-center w-10/12">
            Contact
          </h1>
          <div className="h-2 w-12 bg-indigo-500 rounded-lg" />
        </div>
        <div className=" h-full flex flex-col lg:flex-row justify-center">
          <div className="text-lg lg:p-16 font-inter w-full  align-middle flex italic">
            You can contact me using any of the option on right. I will get back
            to you as soon as possible
          </div>
          <div className=" w-screen flex flex-col gap-4 lg:p-16 items-start py-16">
            <div className="flex gap-4 items-start">
              <img src={phone} alt="Phone" className="h-8 w-8" />
              <p>+1 551 260 xxxx</p>
            </div>

            <div className="flex gap-4 w-full ">
              <img src={gmail} alt="Gmail" className="h-8 w-8" />
              <p>nikhil.guess@gmail.com</p>
            </div>

            <div className="flex gap-4">
              <img src={linkedin} alt="Linkedin" className="h-8 w-8" />
              <a href="https://www.linkedin.com/feed/">
                Linkedin of Nikhil XXXXXXXX
              </a>
            </div>

            <div className="flex gap-4">
              <img src={instagram} alt="Instagram" className="h-8 w-8" />
              <a href="https://www.instagram.com/">
                Instagram of Nikhil XXXXXXXX
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
