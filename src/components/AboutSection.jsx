const AboutSection = ({ about }) => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold mb-8 text-black">About Myself</h2>
      <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
        {about}
      </p>
    </div>
  </section>
);
export default AboutSection;
