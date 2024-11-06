import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="bg-gradient">
      <Navbar />
      <div className="text-center p-4">
        <h2 className="section-heading">About Me</h2>
        <h3 className="section-heading">My Education</h3>
        <ul className="text-large">
          <li>O-Levels in Science</li>
          <li>A-Levels in Pre-Engineering</li>
        </ul>
        <h3 className="section-heading">My Career Objective</h3>
        <ul className="text-large">
          <li>To work in a challenging environment where I can apply my skills and grow professionally.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
