import Navbar from "@/components/Navbar";

const Skills = () => {
  return (
    <div className="bg-gradient">
      <Navbar />
      <div className="text-center p-4">
        <h2 className="section-heading">My Skills</h2>
        <ul className="text-large">
          <li>HTML</li>
          <li>CSS</li>
          <li>TypeScript</li>
          <li>Speaking Skills</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
