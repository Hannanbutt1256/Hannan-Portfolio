import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import webannotator from "../../assets/webannotator.png";
import fnd from "../../assets/fnd.png";
import tbs from "../../assets/tbs.png";
import tb from "../../assets/tb.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={fnd}
          link="https://github.com/Hannanbutt1256/Urde-Fake-News-Detection-System"
          h3="FND"
          p="Urdu Fake News Detection System"
        />
        <ProjectCard
          src={webannotator}
          link="https://newsannotate.com/Account/Login?ReturnUrl=%2F"
          h3="newsannotate.com"
          p="App for News Annotation"
        />
        <ProjectCard
          src={tbs}
          link="https://github.com/Hannanbutt1256/TicketBookingSystem"
          h3="Ticket Booking System"
          p="Console App to manage bookings."
        />
        <ProjectCard
          src={tb}
          link="https://github.com/Hannanbutt1256/MovieAPI_Project"
          h3="Telegram Movie Bot"
          p="API to fetch Movie details for Telegram Bot"
        />
      </div>
    </section>
  );
}

export default Projects;
