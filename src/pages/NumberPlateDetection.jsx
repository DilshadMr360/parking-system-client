import { useState } from 'react';

function NumberPlateDetection() {
  // State to store uploaded video file
  const [videoFile, setVideoFile] = useState(null);
  // State to store camera stream
  const [cameraStream, setCameraStream] = useState(null);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  // Function to open camera
  const handleOpenCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStream(stream);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mt-8 mb-6">Number Plate Detection Page</h1>

      {/* Camera Button */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4 sm:mb-0" onClick={handleOpenCamera}>
        Open Camera
      </button>

      {/* Upload Video Button */}
      <label htmlFor="upload" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
        Upload Video
      </label>
      <input
        type="file"
        id="upload"
        accept="video/*"
        className="hidden"
        onChange={handleFileUpload}
      />

      {/* Display uploaded video or camera stream */}
      {videoFile && (
        <div className="mt-6">
          <video controls className="w-full">
            <source src={URL.createObjectURL(videoFile)} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {cameraStream && (
        <div className="mt-6">
          <video autoPlay playsInline className="w-full">
            <source src={URL.createObjectURL(cameraStream)} />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

export default NumberPlateDetection;
