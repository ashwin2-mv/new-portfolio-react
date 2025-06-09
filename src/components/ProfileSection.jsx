import { MapPin } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

const ProfileSection = ({ profile, qualifications }) => (
  <section className="py-20 text-center">
    <div className="max-w-4xl mx-auto px-6">
      <img
        src={profile.image}
        alt={profile.name}
        className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-black object-cover"
      />
      <h1 className="text-5xl font-bold mb-2 text-black">{profile.name}</h1>
      <h2 className="text-2xl text-gray-600 mb-8 font-light">
        {profile.title}
      </h2>

      <div className="flex justify-center gap-8 mb-8 flex-wrap text-sm">
        <div className="flex items-center gap-2">
          <Mail size={16} />
          <span>{profile.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>{profile.phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{profile.location}</span>
        </div>
      </div>

      <div className="flex justify-center gap-6 mb-12">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
        >
          <Github size={20} />
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-6 text-black">Qualifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {qualifications.map((qual, index) => (
            <div key={index} className="p-4 border border-gray-300 text-left">
              {qual}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default ProfileSection;
