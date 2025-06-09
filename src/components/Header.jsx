import { Download } from "lucide-react";

const Header = ({ profile }) => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8,Resume content would be here";
    link.download = `${profile.name.replace(" ", "_")}_Resume.pdf`;
    link.click();
  };

  return (
    <header className="bg-black text-white py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-4 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <Download size={16} />
            Download Resume
          </button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
