"use client";
import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { GetResumeATS_Score } from '../utils/actions';
import pdfToText from "react-pdftotext";
const ResumeATS_Score = () => {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState(null);
  const [Score, setScore] = useState("");
  const [ExtractedText, setExtractedText] = useState('');
   {/*Handle File and  FileName to Display on the The Screen*/}
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFileName(selectedFile.name);
      setFile(selectedFile);
    } else {
      alert('To get Score Please Upload Your Resume.');
    }
  };

  {/*Handle The Score button to get the Score from the Backend */}
  const handleGetScore = () => {
    if(!file){
        alert("Please Upload File");
        return ;
    }
    try{
     pdfToText(file)
    .then((text) => setExtractedText(text))
    .catch((error) => console.error("Failed to extract text from pdf"));
     setScore(GetResumeATS_Score(ExtractedText));
    }catch(e){
        setScore("Error Getting Score, Please Try Again");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 text-white">
      <div className="bg-gray-800 shadow-xl rounded-2xl p-6 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Resume ATS Score</h1>
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex items-center gap-2 justify-center border border-gray-600 rounded-lg px-4 py-2 hover:border-blue-400 transition-colors duration-300"
        >
          <Upload className="w-5 h-5 text-gray-300" />
          <span className="text-sm text-gray-300">Upload Resume (PDF)</span>
          <input
            id="file-upload"
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* Uploaded File Info */}
        {fileName && (
          <p className="mt-3 text-green-400 text-sm font-medium">Uploaded: {fileName}</p>
        )}

        {/* Button To Get The Score */}
        <button
          onClick={handleGetScore}
          disabled={!file}
          className={`mt-5 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
            file
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
          }`}
        >
          Get Score
        </button>
      </div>
     {
        Score && <div>
            <h3> {Score}</h3>
           
            </div>
     }
    </div>
  );
};

export default ResumeATS_Score;
