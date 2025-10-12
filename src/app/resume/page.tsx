'use client'
import { useState } from 'react'

export default function ResumePage() {
  const resumePath = '/AKASH_IIITSM_PD.pdf'
  const downloadFileName = 'AKASH_IIITSM_PD.pdf'
  const [loadError, setLoadError] = useState(false)

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
        <object
          data={resumePath}
          type="application/pdf"
          width="100%"
          height="100%"
          onError={() => setLoadError(true)}
        >
          <p className="text-center text-gray-600 text-sm mt-4">
            Your browser does not support embedded PDF viewing. Please use the{' '}
            <a
              href={resumePath}
              download={downloadFileName}
              className="text-blue-600 underline hover:text-blue-800 transition-colors"
            >
              Download Resume
            </a>{' '}
            link above.
          </p>
        </object>
      </div>

      {loadError && (
        <p className="text-center text-gray-600 text-sm mt-4">
          Failed to load the PDF. Please{' '}
          <a
            href={resumePath}
            download={downloadFileName}
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            download it here
          </a>
          .
        </p>
      )}
    </main>
  )
}
