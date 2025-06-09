import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = ({ profile }) => (
  <footer className="bg-black text-white py-8 text-center">
    <div className="max-w-6xl mx-auto px-6">
      <p className="mb-4">&copy; 2024 {profile.name}. All rights reserved.</p>
      <div className="flex justify-center gap-6">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  </footer>
);
export default Footer;
