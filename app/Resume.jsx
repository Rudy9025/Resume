/* eslint-disable */
"use client";
import React from "react";
import Styles from "./page.module.css";
import Image from "next/image";
import { useState, useEffect, useRef ,useMemo } from "react";
import Link from "next/link";
import { setCookie, getCookie } from 'cookies-next';

const socialLinks = [
  {
    key: "github",
    icon2: "/svg/github1.svg",
    icon: "/svg/github.svg",
    hoverIcon: "/svg/on-github.svg",
    url: "https://github.com/Rudy9025",
  },
  {
    key: "linkedin",
    icon2: "/svg/linkedin1.svg",
    icon: "/svg/linkedin.svg",
    hoverIcon: "/svg/on-linkedin.svg",
    url: "https://www.linkedin.com/in/Rudy9025",
  },
  {
    key: "twitter",
    icon2: "/svg/twitter1.svg",
    icon: "/svg/twitter.svg",
    hoverIcon: "/svg/on-twitter.svg",
    url: "https://x.com/IphoneRudy",
  },
  {
    key: "instagram",
    icon2: "/svg/instagram1.svg",
    icon: "/svg/instagram.svg",
    hoverIcon: "/svg/on-instagram.svg",
    url: "https://www.instagram.com/__rudy.x/",
  },
  {
    key: "profile",
    icon2: "/svg/profile1.svg",
    icon: "/svg/profile.svg",
    hoverIcon: "/svg/on-profile.svg",
    url: "https://rudys-portfolio.vercel.app/",
  },
];

const initialProjects = [
  { id: 1, name: "AI Companion", githubLink: "https://github.com/Rudy9025/Rudys.Ai.Girlfriend", liveLink: "https://rudys-girlfriend-ai.onrender.com/", count: 1589, description:"Virtual Companion with AI Chat and 3D Dance" },
  { id: 2, name: "Ubuntu Themed Personal Portfolio", githubLink: "https://github.com/Rudy9025/Rudys.Portfolio", liveLink: "https://rudys-portfolio.vercel.app/", count: 564,  description:"Ubuntu-Inspired NextJs Portfolio with EmailJS Contact" },
  { id: 3, name: "Car Configurator", githubLink: "https://github.com/Rudy9025/Rudys.Car.Configurator", liveLink: "https://main--rudys-car-configurator.netlify.app/", count: 741,  description:"Customize Luxury Cars in 3D Virtual Showroom Experience" },
  { id: 4, name: "Base Conversions", githubLink: "https://github.com/Rudy9025/Base.Conversions", liveLink: "https://www.npmjs.com/package/base-conversions", count: 909 ,  description:"Effortless Base Conversions with JavaScript npm package"}
];

const Resume = () => {
  const row2Ref = useRef(null);

  const [activeIcon, setActiveIcon] = useState("");
  const [isDarkHovered, setIsDarkHovered] = useState(false);
  const [circle, setCircle] = useState("/svg/circle.svg");
  const [heart, setHeart] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const [arrow, setArrow] = useState(
    isDark ? "/svg/link1.svg" : "/svg/link.svg"
  );

   const heartCookie = useMemo(() => getCookie('heart'), [heart]);
   const isDarkCookie = useMemo(() => getCookie('isDark'), [isDark]);

   useEffect(() => {
     if (heartCookie) {
       setHeart(heartCookie === 'true');
     }
     if (isDarkCookie) {
       setIsDark(isDarkCookie === 'true');
     }
   }, [heartCookie, isDarkCookie]);


  const handleDarkModeToggle = () => {
     setIsDark(!isDark);
     setCookie('isDark', isDark ? 'false' : 'true', { maxAge: 31536000, path: '/' });
   };

   const handleLikeToggle = () => {
     setHeart(prev => !prev);
     setCookie('heart', heart ? 'false' : 'true', { maxAge: 31536000, path: '/' });
   };
 
  useEffect(() => {
    setArrow(isDark ? "/svg/link1.svg" : "/svg/link.svg");
  }, [isDark]);

  const handleMouseEnter = () => {
    setArrow("/svg/on-link.svg");
  };

  const handleMouseLeave = () => {
    setArrow(isDark ? "/svg/link1.svg" : "/svg/link.svg");
  };

  const handleScroll = (e) => {
    if (row2Ref.current) {
      row2Ref.current.scrollTop += e.deltaY;
      e.preventDefault();
    }
  };

  const githubSrc = isDark ? "/svg/github1.svg" : "/svg/github.svg";
  const linkSrc = isDark ? "/svg/link1.svg" : "/svg/link.svg";
  

  return (
    <>
      <div
        className={Styles.container}
        style={{
          backgroundColor: isDark ? "#212121" : "whitesmoke",
          transition: "background-color 0.6s ease",
        }}
      >
        <section
          onWheel={handleScroll}
          className={Styles.row1}
          style={{ color: isDark ? "white" : "#212121" }}
        >
          <div className={Styles.cardwrapper}>
          <div className={`${Styles.name} ${!isDark ? Styles.dark : Styles.light}`}>
            <span data-title="R">R</span>
            <span data-title="U">U</span>
            <span data-title="D">D</span> 
            <span data-title="R" className={Styles.specialS}>R</span>
            <span data-title="E">E</span>
            <span data-title="S">S</span>
            <span data-title="H">H</span>
            &nbsp;
            <span data-title="G">G</span>
        </div>
 
            <div className={Styles.profession}>Software Engineer</div>
            <div className={Styles.mail}>
              <a
                href="mailto:r9025305010@gmail.com"
                target="_blank"
                style={{
                  borderBottom: "0.25vh dashed #8c8c8c",
                  color: isDark ? "white" : "#212121",
                }}
                className={
                  isDark ? Styles.hoverShadowDark : Styles.hoverShadowLight
                }
              >
                hi@rudy.me
              </a>
            </div>
            <div className={Styles.socialLinks}>
              {socialLinks.map(({ key, icon, icon2, hoverIcon, url }) => (
                <Image
                  key={key}
                  className={Styles.imglinks}
                  src={activeIcon === key ? hoverIcon : isDark ? icon2 : icon}
                  height={10}
                  width={10}
                  onMouseEnter={() => setActiveIcon(key)}
                  onMouseLeave={() => setActiveIcon("")}
                  onClick={() => window.open(url)}
                />
              ))}
            </div>
          </div>
          <div className={Styles.extras}>
            <div className={Styles.darkLight}>
              <Image
                src={
                  isDarkHovered
                    ? isDark
                      ? "/svg/on-sun.svg"
                      : "/svg/on-moon.svg"
                    : isDark
                    ? "/svg/sun.svg"
                    : "/svg/moon.svg"
                }
                height={31}
                width={31}
                title={isDark ? "Light Mode" : "Dark Mode"}
                onMouseEnter={() => setIsDarkHovered(true)}
                onMouseLeave={() => setIsDarkHovered(false)}
                onClick={handleDarkModeToggle}
                className={Styles.transition}
              />
            </div>
            <div className={Styles.Heart}>
              <Image
                src={heart ? "/svg/on-heart.svg" : "/svg/heart.svg"}
                height={31}
                width={31}
                title="Like"
                onClick={handleLikeToggle}
                className={Styles.transition}
              />
            </div>
            <div className={Styles.pdfversion}>
              <Link
                href="/resume.pdf"
                download
                style={{ color: isDark ? "white" : "#404040" }}
                className={
                  isDark ? Styles.pdfversionDark : Styles.pdfversionLight
                }
              >
                PDF Version
              </Link>
            </div>
          </div>
        </section>

        <section  onWheel={handleScroll}
          className={Styles.row2}
          style={{ color: isDark ? "white" : "#212121" }}
          ref={row2Ref}
        >
          <div className={Styles.cardwrapper}>
            <div className={Styles.about}>
              <div className={Styles.SideHeading}>About</div>
                <div className={Styles.insideContent}>
                My name is Rudresh G, a master of computer science student and an Application Developer. My passion for software lies with dreaming up ideas and making them come true with elegant interfaces. I take great care in the experience, architecture, and code quality of the things I build.
                 <br />
                 <br />

                I am also an open-source enthusiast and maintainer. I love how collaboration and knowledge sharing happens through open-source and I am happy to see what I do could eventually feedback to the community and industry. 
                </div>
               <div className={Styles.Exprerience}>
              <div className={Styles.SideHeading}>Projects</div>
                <div className={Styles.projectsContainer}>
                {initialProjects.map((project) => (
      <div key={project.id} className={Styles.projectCard}>
        <div className={Styles.title}>
          {project.name}
          <Image
            src={githubSrc}
            height={10}
            width={10}
            onMouseEnter={(e) => (e.currentTarget.src = "/svg/on-github.svg")}
            onMouseLeave={(e) => (e.currentTarget.src = githubSrc)}
            onClick={() => window.open(project.githubLink)}
            alt="GitHub Link"
          />
          <Image
            src={linkSrc}
            height={10}
            width={10}
            onMouseEnter={(e) => (e.currentTarget.src = "/svg/on-link.svg")}
            onMouseLeave={(e) => (e.currentTarget.src = linkSrc)}
            onClick={() => window.open(project.liveLink)}
            alt="Arrow Link"
          />
        </div>
        <div className={Styles.shortdescription}>{project.description} </div>
        <div className={Styles.star}>
  <Image
     src="/svg/star.svg"
    height={10}
    width={10}
   />{" "}
  <span style={{ opacity: 0.5 }}>&nbsp;{project.count}</span>
</div>

      </div>
    ))}
    <div onClick={()=>window.open('https://github.com/Rudy9025?tab=repositories')} className={`${isDark ? Styles.pdfversionDark : Styles.pdfversionLight} ${Styles.moreProjects}`}>
       More Projects...
    </div>
                </div>

                <div className={Styles.SideHeading}>Work Experience</div>
                <div className={Styles.Company}>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => window.open("https://www.bosch.in/")}
                  >
                    <b className={Styles.bosch}>BOSCH India</b> 
                  </span>
                  &nbsp;
                  <span
                    style={{
                      opacity: "0.5",
                      fontSize: "clamp(0.7rem, 1.6vw, 2.5rem)",
                    }}
                  >
                    Software Development Intern{" "}
                  </span>
                </div>

                <div className={Styles.period}>
                  <span style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ opacity: "0.5", marginRight: "0.3em" }}>
                      Jun 2024 - Sep 2024 | onsite | certificate
                    </span>
                    <Image
                      height={0}
                      width={0}
                      className={Styles.imglinks}
                      src={arrow}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      style={{ height: "1em", width: "1em" }}
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1WPAdurn-eQ4U9uSZCHCyT2X7gyIYmLvH/view"
                        )
                      }
                    />
                  </span>
                </div>

                <div className={Styles.workProjects} style={{marginTop:"0.4em"}}>
                   <p className={Styles.title}>Family Day Application &nbsp;<c style={{opacity:"0.5",fontSize:"clamp(0.6rem, 1.35vw, 2.3rem)"}}>Full Stack Application </c></p>
                  <ul>
                    <li>
                    &ensp;&ensp;<span>
                      <Image
                        onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                        onMouseLeave={() => setCircle("/svg/circle.svg")}
                        src={circle}
                        height={12}
                        width={12}
                      />
                      </span>
                      &ensp;
                      <span>
                        Built a Next.js application with MySQL for secure
                        employee and family member registrations for the Family
                        Day 2024 event.
                      </span>
                    </li>
                    <li>
                    &ensp;&ensp;<span>
                      <Image
                        onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                        onMouseLeave={() => setCircle("/svg/circle.svg")}
                        src={circle}
                        height={12}
                        width={12}
                      />
                      </span>
                      &ensp;
                      <span>
                        Implemented robust authentication, session management,
                        and protected routes for secure admin data uploads in
                        multiple formats.{" "}
                      </span>
                    </li>
                    <li>
                     &ensp; &ensp;<span>
                      <Image
                        onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                        onMouseLeave={() => setCircle("/svg/circle.svg")}
                        src={circle}
                        height={12}
                        width={12}
                      />
                      </span>
                      &ensp;
                      <span>
                        Developed an intuitive employee interface for family
                        member addition and created an admin portal for
                        generating comprehensive participation reports.{" "}
                      </span>
                    </li>
                    <li>
                    &ensp; &ensp;<span>
                      <Image
                        onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                        onMouseLeave={() => setCircle("/svg/circle.svg")}
                        src={circle}
                        height={12}
                        width={12}
                      />
                      </span>
                      &ensp;
                      <span>
                        Leveraged Next.js features like SSR and SSG, along with
                        React Hooks, to enhance user experience, performance,
                        and application scalability.{" "}
                      </span>
                    </li>
                  </ul>
                </div>

                <div className={Styles.workProjects}>
                   <p className={Styles.title}>SMT Changeover Info Application &nbsp;<c style={{opacity:"0.5",fontSize:"clamp(0.6rem, 1.35vw, 2.3rem)"}}>Data Pipeline Application </c></p>
                  <ul>
                    <li>
                    &ensp;&ensp;<span>
                      <Image
                        onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                        onMouseLeave={() => setCircle("/svg/circle.svg")}
                        src={circle}
                        height={12}
                        width={12}
                      />
                      </span>
                      &ensp;
                      <span>
                      Developed a scalable ReactJS application with an ExpressJS and NodeJS backend for SMT changeover.
                      </span>
                    </li>
                    <li>
                    &ensp;&ensp;<span>
                      <Image
                        onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                        onMouseLeave={() => setCircle("/svg/circle.svg")}
                        src={circle}
                        height={12}
                        width={12}
                      />
                      </span>
                      &ensp;
                      <span>
                      Designed a modular architecture to support a data pipeline for 14 SMT production lines.
                      </span>
                    </li>
                    <li>
                     &ensp;&ensp;<span>
                      <Image
                        onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                        onMouseLeave={() => setCircle("/svg/circle.svg")}
                        src={circle}
                        height={12}
                        width={12}
                      />
                      </span>
                      &ensp;
                      <span>
                      Created a real-time FIDS display with automatic refresh every 10 minutes for data accuracy.
                      </span>
                    </li>
                    <li>
                    &ensp;&ensp;<span>
                      <Image
                        onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                        onMouseLeave={() => setCircle("/svg/circle.svg")}
                        src={circle}
                        height={12}
                        width={12}
                      />
                      </span>
                      &ensp;
                      <span>
                      Utilized Oracle MySQL queries within the data pipeline to ensure integrity and consistency across databases.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className={Styles.workProjects}>
                   <p className={Styles.title}>SSO Integration &nbsp;<c style={{opacity:"0.5",fontSize:"clamp(0.6rem, 1.35vw, 2.3rem)"}}>Azure AD SSO Solution </c></p>
                  <ul>
                    <li>
                    &ensp;&ensp;<span>
                      <Image
                        onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                        onMouseLeave={() => setCircle("/svg/circle.svg")}
                        src={circle}
                        height={12}
                        width={12}
                      />
                      </span>
                      &ensp;
                      <span>
                      Implemented SSO using Azure AD for federated identity management across multiple applications.
                      </span>
                    </li>
                    <li>
                    &ensp;&ensp;<span>
                      <Image
                        onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                        onMouseLeave={() => setCircle("/svg/circle.svg")}
                        src={circle}
                        height={12}
                        width={12}
                      />
                      </span>
                      &ensp;
                      <span>
                      Utilized jwt-decode to extract claims from JWT tokens, ensuring secure authentication and data protection.
                      </span>
                    </li>
                    <li>
                     &ensp;&ensp;<span>
                      <Image
                        onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                        onMouseLeave={() => setCircle("/svg/circle.svg")}
                        src={circle}
                        height={12}
                        width={12}
                      />
                      </span>
                      &ensp;
                      <span>
                      Stored authenticated user credentials in sessionStorage for seamless access across applications and sessions.
                      </span>
                    </li>
                   </ul>
                </div>

                <div className={Styles.workProjects}>
                  <p className={Styles.title}>
                    Internet Information Services &nbsp;
                    <c
                      style={{
                        opacity: "0.5",
                        fontSize: "clamp(0.6rem, 1.35vw, 2.3rem)",
                      }}
                    >
                      IIS Web Application Deployment{" "}
                    </c>
                  </p>
                  <ul>
                    <li>
                      &ensp;&ensp;
                      <span>
                        <Image
                          onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                          onMouseLeave={() => setCircle("/svg/circle.svg")}
                          src={circle}
                          height={12}
                          width={12}
                        />
                      </span>
                      &ensp;
                      <span>
                        Executed IIS deployments with load balancing and
                        auto-scaling for high availability and security.
                      </span>
                    </li>
                    <li>
                      &ensp;&ensp;
                      <span>
                        <Image
                          onMouseEnter={() => setCircle("/svg/on-circle.svg")}
                          onMouseLeave={() => setCircle("/svg/circle.svg")}
                          src={circle}
                          height={12}
                          width={12}
                        />
                      </span>
                      &ensp;
                      <span>
                        Used RDP for remote server management, configuring HTTPS
                        with selective ports for secure access.
                      </span>
                    </li>
                  </ul>
                </div>

               

                <div className={Styles.SideHeading}>Stacks</div>
                  <div className={Styles.stack}>
                    <table>
                     <tbody>
                      <tr>  <td>Frontend</td> <td>JavaScript, React, Threejs, Next, Vite</td>  </tr>
                      <tr>  <td>Backend</td> <td>Node, Express, Docker, Kafka </td>  </tr>
                      <tr>  <td>Database</td> <td>MySQL, MongoDB, Oracle</td>  </tr>
                      <tr>  <td>Tools</td> <td>Postman, Blender</td>  </tr>
                      <tr>  <td>Version Controls</td> <td>Github, BitBucket</td>  </tr>
                      <tr>  <td>Languages</td> <td>Python, Java, HTML</td>  </tr>
                     </tbody>
                   </table>
                 </div>

                 <div className={Styles.SideHeading}>Education</div>
                  <div className={Styles.Education}>
                     <div className={Styles.edu}>
                  <span><strong>Computer Science, Master of Computer Applications</strong>, Jain (Deemed-to-be University), Bangalore</span> 
                    <p> Aug 2023 – June 2025 </p>
                     </div>
                     <div className={Styles.edu}>
                    <span><b>Computer Science, Bachelor of Computer Applications</b>, Presidency University, Bangalore</span>
                     <p>Jun 2020 – June 2023 </p>  
                    </div>

                  </div>


                  <div className={Styles.SideHeading}>Achievements and Honors</div>
          <div className={Styles.Achievements}>
            <div className={Styles.ach}>
           <span> <span style={{fontWeight:"600"}}>Achieved the prestigious Gold Medal</span> in the BCA Department at Presidency University, showcasing exceptional
           academic prowess and dedication | <b>Live&nbsp;</b><Image
            src={linkSrc}
            height={10}
            width={10}
            onMouseEnter={(e) => (e.currentTarget.src = "/svg/on-link.svg")}
            onMouseLeave={(e) => (e.currentTarget.src = linkSrc)}
            onClick={() => window.open('https://drive.google.com/file/d/1iAcqlLFM6dnYtpakdbP3lEYwLlLpam-M/view')}
            alt="Arrow Link" />  
            </span>  
             </div>
            <div className={Styles.ach}>
           <span><span style={{fontWeight:"600"}}>Graduated with High Honors in Computer Science</span> from Presidency University, reflecting outstanding academic performance.  
            </span>  
             </div>
            <div className={Styles.ach}>
           <span><span style={{fontWeight:"600"}}>Secured the second-place</span> position in the Inter-College Volleyball Championship   
            </span>  
             </div>
            <div className={Styles.ach}>
           <span><span style={{fontWeight:"600"}}>  LeetCode Biweekly Contest 125</span>, attained an impressive ranking of 1006 out of global participants
            </span>  
             </div>

          </div>
                  
          <div className={Styles.SideHeading}>Certifications</div>
          <div className={Styles.certifications}>
            <div className={Styles.certify}>
           <span> <span style={{fontWeight:"600"}}>Agile methodologies</span> including Scrum practices at JPMorgan Chase & Co.
Demonstrated proficiency in User Stories, Backlog Refinement, Daily Standups, and Sprint Reviews and
Retrospectives.  <b>Live&nbsp;</b><Image
            src={linkSrc}
            height={10}
            width={10}
            onMouseEnter={(e) => (e.currentTarget.src = "/svg/on-link.svg")}
            onMouseLeave={(e) => (e.currentTarget.src = linkSrc)}
            onClick={() => window.open('https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/5QiaMtZ4k8ngYKn4D_JPMorgan%20Chase%20&%20Co._gTZ7Hgjtnw73febug_1698066017681_completion_certificate.pdf')}
            alt="Arrow Link" />  
            </span>  
             </div>
             <div className={Styles.certify}>
           <span><span style={{fontWeight:"600"}}>  Hackerrank </span>Certificate Course in various domains from Hackerrank&nbsp; 
           <b>Live&nbsp;</b><Image
            src={linkSrc}
            height={10}
            width={10}
            onMouseEnter={(e) => (e.currentTarget.src = "/svg/on-link.svg")}
            onMouseLeave={(e) => (e.currentTarget.src = linkSrc)}
            onClick={() => window.open('https://www.hackerrank.com/profile/rudy9025')}
            alt="Arrow Link" /> 
            </span>  
             </div>
             
 
          </div>


          <div className={Styles.SideHeading}>Interests</div>
          <div className={Styles.Interests}>
            <div className={Styles.hobby}>
           <span>   I enjoy building awesome Software as a service (SaaS) that solve practical problems. </span>  
             </div>
             <div className={Styles.hobby}>
           <span> When I am not coding my next project, I like to spend my time travelling or playing volleyball. And I also have interest in Data
           Science & RestFul APIs!  </span>  
             </div>
           </div>



          <div className={Styles.SideHeading}>Languages</div>
          <div className={Styles.Languages}>
            <div className={Styles.lang}>
           <span> <b>English</b> (Fluent),<b> Hindi</b> (intermediate), <b>Telugu</b> (Native speaker), <b>Kannada</b> (intermediate), <b>Tamil</b> (Fluent)  </span>  
             </div>
              
           </div>




              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resume;
