export default function ResumePage() {
  const resumePath = '/AKASH_IIITSM_PD.pdf';
  const downloadFileName = 'AKASH_IIITSM_PD.pdf';

  return (
    <main className="max-w-4xl mx-auto p-4">
      
      <div className="flex justify-center mb-6">
        <a
          href={resumePath}
          download={downloadFileName}
          className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.02]"
          title="Download Resume PDF"
          aria-label="Download Resume PDF"
        >
          Download Resume (PDF)
        </a>
      </div>

      <hr className="mb-6"/>
      
      <div className="w-full h-[850px] border-2 border-gray-300 rounded-lg overflow-hidden shadow-xl bg-gray-100">
        <iframe
          src={resumePath}
          width="100%"
          height="100%"
          title="Resume Preview"
          aria-label="Resume Preview"
          scrolling="auto"
        >
          <p>
            Your browser does not support embedded PDF viewing. Please use the 
            <a href={resumePath} download>Download Resume</a> link above.
          </p>
        </iframe>
      </div>
    </main>
  );
}