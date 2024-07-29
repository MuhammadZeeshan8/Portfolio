/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faTrophy } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div>
      <section id="About" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-4 text-white tracking-wide">
              About Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400">
            Hi, I'm Muhammad Zeeshan, an undergraduate student at Information Technology University (ITU) Lahore,
            studing a degree in Electrical Engineering. I strive to blend creativity with technical skills and leadership qualities.
            During my semesters, I have successfully created mobile applications in Java and explored various aspects of digital marketing,
            continuously enhancing my programming skills. In addition to my technical expertise, I am actively involved in several societies.
            I have served as a member of the Program Committee for IEEE Lahore, a Campus Ambassador for NUST (NERC), and a Marketing Co-Lead for the GYM Societies.
            Through these roles, I have hosted events to help students improve their skills while simultaneously developing my own.
            </p>
          </div>
          <div className="flex justify-center space-x-4 p-4">
            <div className="p-4 w-full max-w-xs">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-center">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="text-yellow-500 w-12 h-12 mb-3 inline-block"
                />
                <h2 className="title-font font-medium text-3xl text-white">
                  Education
                </h2>
                <p className="text-gray-400"> BS Electrical Engineering  <br></br> Information Technology University (ITU) Lahore</p>
              </div>
            </div>
            <div className="p-4 w-full max-w-xs">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-center">
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="text-yellow-500 w-12 h-12 mb-3 inline-block"
                />
                <h2 className="title-font font-medium text-3xl text-white">
                  Experience
                </h2>
                <p className="text-gray-400">1 year Expirence in Mobile Application development<br></br> Project Mangement</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
