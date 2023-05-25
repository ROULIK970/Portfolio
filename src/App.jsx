import { useState } from "react";
import "./App.css";
import image from "./assets/Screenshot_3.png";
import Quiz_img from "./assets/Quiziccal.png";
import Tenzies_img from "./assets/Tenzies.png";
import Type_img from "./assets/Type-game.png";
import resume from "./assets/Web D Resume (5).pdf";

function App() {
  const [selectedElement, setSelectedElement] = useState("element_1");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (elementId) => {
    setSelectedElement(elementId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      alert("Fill out the form!");
    } else {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbxK3dCHMEYPOMzcwNzT09xJ8keUp1Cx0LgatvuZQmkBJysYEt1osxPi7w9B4oxvrbZ1/exec";

      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => {
          if (response.ok) {
            console.log("Form submitted successfully!");
            setEmail("");
            setName("");
            setMessage("");
          } else {
            throw new Error("Error submitting form");
          }
        })
        .catch((error) => {
          console.error("Error submitting form:", error.message);
        });
    }
  };

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="header" id="header">
        <nav>
          <ul style={{ right: menuOpen ? "0" : "-200%" }}>
            <li>
              <a href="#header">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <i className="fas fa-times" onClick={closeMenu}></i>
          </ul>
          <i className="fas fa-bars" onClick={openMenu}></i>
        </nav>
        <div className="header-intro">
          <div className="header-text">
            <p>Software Developer</p>
            <h1>
              Hello, I am <span>Pritsh Bordoloi</span> from India. <br />
              Welcome to my website!
            </h1>
            <a href={resume} download className="header-btn">
              <i className="fas fa-download"></i>
              Download CV
            </a>
          </div>
          <div className="header-img"></div>
        </div>
      </div>

      {/* about */}

      <div className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={image} alt="" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About me</h1>
              <p>
                Highly motivated and enthusiastic Junior Front-end Developer
                with a passion for building intuitive and user-friendly web
                applications. Proficient in React, Redux, HTML, CSS, SCSS and
                Vanilla Javascript.I have accumulated in depth knowledge of Web
                Development/Vanilla JS/React from mentors like Colt Steele from
                Udemy, Bob Ziroll from Scrimba(Completed both the Learn React
                for free and the Advanced React course) and HTML, CSS from
                FreeCodeCamp. I possess excellent problem-solving skills and a
                strong work ethic. Seeking a challenging role in a dynamic and
                fast-paced environment.
              </p>
              <div className="tab-titles">
                <p
                  className={`tab-links ${
                    selectedElement === "element_1" && "active-link"
                  }`}
                  id="element_1"
                  onClick={() => handleClick("element_1")}
                >
                  Skills
                </p>
                <p
                  className={`tab-links ${
                    selectedElement === "element_2" && "active-link"
                  }`}
                  id="element_2"
                  onClick={() => handleClick("element_2")}
                >
                  Experience
                </p>
                <p
                  className={`tab-links ${
                    selectedElement === "element_3" && "active-link"
                  }`}
                  id="element_3"
                  onClick={() => handleClick("element_3")}
                >
                  Education
                </p>
              </div>
              {selectedElement === "element_1" && (
                <div className="tab-contents">
                  <ul>
                    <li>
                      <span>Frontend Development</span>
                      <br />
                      Developing Client side applications
                    </li>
                    <li>
                      <span>UI/UX Designer</span>
                      <br />
                      Designing responsive Web apps and email templates
                    </li>
                    <li>
                      <span>Git</span>
                      <br />
                      Git version control proficiency
                    </li>
                  </ul>
                </div>
              )}
              {selectedElement === "element_2" && (
                <div className="tab-contents">
                  <ul>
                    <li>
                      <span>Junior Frontend Developer Intern</span>
                      <br />
                      Arity Technologies.{" "}
                      <span className="letter-of-rec">LOR updating soon!</span>
                    </li>
                    <li>
                      <span>Editorial Intern</span>
                      <br />
                      Pepperscript
                    </li>
                  </ul>
                </div>
              )}
              {selectedElement === "element_3" && (
                <div className="tab-contents">
                  <ul>
                    <li>
                      <span>BA(Hons) in Philosophy</span>
                      <br />
                      BAnaras Hindu University
                    </li>
                    <li>
                      <span>Highschool graduate in Science</span>
                      <br />
                      Salt Brook Academy, Assam
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* portfolio */}

      <div className="portfolio" id="Portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src={Quiz_img} height="350px" alt="quiz_game" />
              <div className="layer">
                <h3>Quizzical Game</h3>
                <p>
                  A two-paged MCQ quiz game that checks the score upon
                  completion using Quiziccal API.Hooks like useEffect, useState,
                  useContext and functional components were used in the
                  application of this project.
                </p>
                <a href="https://github.com/ROULIK970/Quiziccal">
                  <i className="fas fa-external-link-alt"></i>
                  Source Code
                </a>
                <br />
                <a href="https://genuine-selkie-f7fe11.netlify.app/">
                  <i className="fas fa-external-link-alt"></i>
                  Go Live
                </a>
              </div>
            </div>
            <div className="work">
              <img src={Type_img} height="350px" alt="type_game" />
              <div className="layer">
                <h3>How fast can you type?</h3>
                <p>A test game to test your type speed</p>
                <a href="https://github.com/ROULIK970/Typing-Game/tree/master">
                  <i className="fas fa-external-link-alt"></i>
                  Source Code
                </a>
                <br />
                <a href="https://fastidious-nasturtium-254fd3.netlify.app/">
                  <i className="fas fa-external-link-alt"></i>
                  Go Live
                </a>
              </div>
            </div>
            <div className="work">
              <img src={Tenzies_img} height="350px" alt="Tenzies_game" />
              <div className="layer">
                <h3>Tenzies</h3>
                <p>
                  A fun game of dice using react hooks and function components
                  where you roll the dice until all the dice are of the same
                  value.
                </p>
                <a href="https://github.com/ROULIK970/Tenzies-Game">
                  <i className="fas fa-external-link-alt"></i>
                  Source Code
                </a>
                <br />
                <a href="https://candid-daffodil-bc8876.netlify.app/">
                  <i className="fas fa-external-link-alt"></i>
                  Go Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="contact" id="Contact">
        <div className="container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p>
                <i className="fas fa-paper-plane"></i>{" "}
                bordoloipritish97@gmail.com
              </p>
              <p>
                <i className="fas fa-phone-square-alt"></i> 7002169563
              </p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/pritish-bordoloi-a9819bbb/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/ROULIK970">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://gitlab.com/LittleFeather">
                  <i className="fab fa-gitlab"></i>
                </a>
                <a href="https://twitter.com/PritishBor86578">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="contact-right">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                />
                <textarea
                  value={message}
                  rows="6"
                  placeholder="Your Message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="header-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2023 Pritish. All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
