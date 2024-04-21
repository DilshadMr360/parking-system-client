import { useState } from 'react';
import axios from 'axios';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';

const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'dsnznxazm' 
  }
});

function NumberPlateDetection() {

  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [processedVideoPublicId, setProcessedVideoPublicId] = useState('');
  const [videoLink, setVideoLink] = useState('');


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setProcessing(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Set the processed video public ID received from the backend response
      setProcessedVideoPublicId(response.data.processed_public_id);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setProcessing(false);
    }
  };

  const handleChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handlePasteLink = () => {
    setProcessedVideoPublicId(videoLink);
  };


  const handleCameraDetection = async () => {
    try {
      // Request webcam processing
      const response = await axios.post('http://localhost:5000/webcam');
      // Set the processed video public ID received from the backend response
      setProcessedVideoPublicId(response.data.processed_video_url);
    } catch (error) {
      console.error('Error processing webcam:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mt-8 mb-6">Number Plate Detection Page</h1>

      <div className="">
        {/* Upload Video Button */}
        <div className="">
          <label htmlFor="upload" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Choose a Video File
          </label>
          <input
            type="file"
            id="upload"
            accept="video/*"
            className="hidden"
            onChange={handleFileChange}
          />
          {file && (
             <div className="mt-2">
             <p className="text-gray-500">Selected File: {file.name}</p>
           </div>
          )}
        <button onClick={handleUpload} disabled={!file || processing} className="">
                {processing ? 'Processing...' : 'Upload Video'}
              </button>
        </div>

        {/* Or Paste a Video Link */}
        <div className="link-container">
          <label htmlFor="video-link">Or paste a video link:</label>
          <input type="text" id="video-link" value={videoLink} onChange={handleChange} placeholder="Paste Video Link" className="border border-gray-400 py-2 px-4 rounded mr-2" />
          <button onClick={handlePasteLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Play Video</button>
        </div>

        {/* Turn On Camera Button */}
      
        {/* <button onClick={handleWeaponDetection} className="weapon-detection-button">Weapon Detection</button> */}
          <button onClick={handleCameraDetection} className="bg-red-500 py-2 px-4 text-white font-bold">Turn On Camera</button>
      </div>
      {processedVideoPublicId && (
          <div className='player-wrapper'>
            <AdvancedVideo
              cldVid={cloudinary.video(processedVideoPublicId)}
              width='100%'
              height='100%'
              controls
              autoPlay
              muted
            />
          </div>
       )}
      </div>
  );
}

export default NumberPlateDetection;
