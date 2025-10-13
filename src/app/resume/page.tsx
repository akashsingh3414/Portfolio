'use client';

import { useEffect, useState } from 'react';

export default function ResumePage() {
  const resumePath = '/AKASH_IIITSM_PD.pdf';
  const downloadFileName = 'AKASH_IIITSM_PD.pdf';
  const pdfUrl = `${resumePath}#toolbar=0&navpanes=0&scrollbar=0`;

  const [status, setStatus] = useState<'loading' | 'ok' | 'error'>('loading');

  const checkPDF = async () => {
    setStatus('loading');
    try {
      const response = await fetch(resumePath, { method: 'HEAD' });
      if (!response.ok) {
        setStatus('error');
        return;
      }
      const contentType = response.headers.get('Content-Type');
      if (!contentType || !contentType.includes('pdf')) {
        setStatus('error');
        return;
      }
      setStatus('ok');
    } catch {
      setStatus('error');
    }
  };

  useEffect(() => {
    checkPDF();
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-4">
      <div className="flex justify-center mb-6">
        <a
          href={resumePath}
          download={downloadFileName}
          className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-[1.02]"
        >
          Download Resume (PDF)
        </a>
      </div>

      <hr className="mb-6" />

      <div className="w-full h-[850px] border border-gray-300 rounded-lg overflow-hidden shadow-xl bg-gray-50 flex items-center justify-center">
        {status === 'loading' && (
          <p className="text-gray-600 text-lg">Loading resume...</p>
        )}

        {status === 'error' && (
          <div className="text-center text-muted-foreground p-4">
            <p className="text-lg font-semibold mb-2">
              Unable to display the resume
            </p>
            <p className="text-sm text-gray-600 mb-4">
              An error occurred while loading the document. Please try again.
            </p>
            <button
              onClick={checkPDF}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        )}

        {status === 'ok' && (
          <iframe
            src={pdfUrl}
            width="100%"
            height="100%"
            style={{ border: 'none', backgroundColor: '#f9fafb' }}
            title="Resume Viewer"
            onError={() => setStatus('error')}
          />
        )}
      </div>
    </main>
  );
}
