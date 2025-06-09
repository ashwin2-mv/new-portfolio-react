import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";

const ProjectsSection = ({ projects }) => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 border border-gray-300 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold mb-3 text-black">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-200 text-gray-800 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 text-sm">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-black hover:text-gray-600 transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-black hover:text-gray-600 transition-colors"
              >
                <Github size={14} />
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default ProjectsSection;
