import Navbar from "@/components/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <div className="bg-gradient">
      <Navbar />
      <div className="text-center p-4">
        <h1 className="section-heading">MOID UDDIN</h1>
        <p className="text-large">Date of Birth: 30 August 1999</p>
        <p className="text-large">Email: moiduddin990@gmail.com</p>
        <p className="text-large">Gender: Male</p>
        <p className="text-large">Phone: 03002977077</p>
      </div>
      <Image
        src="/images/profile.jpg"
        alt="Profile Picture"
        className="profile-image"
        width={256}
        height={256}
      />
    </div>
  );
};

export default Home;
