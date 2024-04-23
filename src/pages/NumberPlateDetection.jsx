import { useState } from 'react';
import axios from 'axios';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { database } from './FirebaseConfig';
import Swal from 'sweetalert2';
const cloudinary = new Cloudinary({
  cloud: {
    cloudName: 'dsnznxazm'
  }
});

function NumberPlateDetection() {

  const navigate = useNavigate()


  const [file, setFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [processedVideoPublicId, setProcessedVideoPublicId] = useState('');
  const [videoLink, setVideoLink] = useState('');


  // const handleClick = () =>{
  //   signOut(database).then(val=>{
  //     console.log(val,"val")
  //     navigate('/')
  //   })
  // }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setProcessing(true);
    const formData = new FormData();
    formData.append('file', file);
    try {
      const response = await axios.post('http://localhost:5000/upload_plate', formData, {
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





  /////////////////////////////////////////////

  const [file2, setFile2] = useState(null);
  const [processing2, setProcessing2] = useState(false);
  const [processedVideoPublicId2, setProcessedVideoPublicId2] = useState('');
  const [videoLink2, setVideoLink2] = useState('');

  const handleFileChange2 = (e) => {
    setFile2(e.target.files[0]);
  };


  const handleUpload2 = async () => {
    setProcessing2(true);
    const formData = new FormData();
    formData.append('file', file2);
    try {
      const response = await axios.post('http://localhost:5000/upload_parking', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Set the processed video public ID received from the backend response
      setProcessedVideoPublicId2(response.data.processed_public_id);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setProcessing2(false);
    }
  };

  const handleChange2 = (e) => {
    setVideoLink2(e.target.value);
  };

  const handlePasteLink2 = () => {
    setProcessedVideoPublicId2(videoLink2);
  };




  //////////////////////////////

  const handleClick = () => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'logout',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout',
      confirmButtonColor: '#DD6B55',
      cancelButtonText: 'No, cancel',

    }).then((result) => {
      if (result.isConfirmed) {
        signOut(database)
          .then(() => {
            console.log('User signed out successfully');
            navigate('/');
          })
          .catch((error) => {
            console.error('Error signing out:', error);
            // Handle error
          });
      }
    });
  };




  return (
    <div className='bg-gray-800 text-white min-h-screen'>
      <div className="flex justify-between items-center mx-9">
        <h1 className=' w-full md:w-11/12 text-md md:text-3xl font-bold mt-8 mb-6 text-center'>Intelligent Smart Parking Solution with Real-Time Number Plate Detection</h1>
        <button onClick={handleClick} className="bg-red-500 md:py-2 md: md:px-4 md:mt-2 md:w-24 w-24 -mt-2 py-3 text-white font-bold rounded ">
          Log Out
        </button>
      </div>



      <div className='flex flex-col md:flex-row w-full -mt-5 '>


        {/* Number Plate Full VIEW*/}

        <div className="container  px-4 sm:px-6  lg:px-8  w-full md:w-6/12 md:items-start">
          <h1 className="text-2xl font-bold mt-8 mb-6  text-center">Number Plate Detection </h1>


          <div className="flex flex-col space-y-4">
            {/* Upload Video Button */}
            <div className="flex flex-col space-y-2 text-center">
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
                <div>
                  <p className="text-gray-500">Selected File: {file.name}</p>
                </div>
              )}
              <button onClick={handleUpload} disabled={!file || processing} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {processing ? 'Processing...' : 'Upload Video'}
              </button>
            </div>

            {/* Or Paste a Video Link */}
            <div className="flex items-center space-x-2">
              <label htmlFor="video-link" className="mr-2 ">Paste a video link:</label>
              <input type="text" id="" value={videoLink} onChange={handleChange} placeholder="Paste Video Link" className="border border-gray-400 py-2 px-4 rounded w-[600px]" />
              <button onClick={handlePasteLink} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Play
              </button>
            </div>


          </div>

          {processedVideoPublicId && (
            <div className='player-wrapper mt-8'>
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


        {/* Parking SLot FULL VIEW*/}


        <div className="container  px-4 sm:px-6  lg:px-8 w-full md:w-6/12 md:items-start">
          <h1 className="text-2xl font-bold mt-8 mb-6  text-center">Parking Slot Detection </h1>

          <div className="flex flex-col space-y-4">
            {/* Upload Video Button */}
            <div className="flex flex-col space-y-2 text-center">
              <label htmlFor="upload-parking" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Choose a Video File
              </label>
              <input
                type="file"
                id="upload-parking"
                accept="video/*"
                className="hidden"
                onChange={handleFileChange2}
              />
              {file2 && (
                <div>
                  <p className="text-gray-500">Selected File: {file2.name}</p>
                </div>
              )}
              <button onClick={handleUpload2} disabled={!file2 || processing2} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {processing2 ? 'Processing...' : 'Upload Video'}
              </button>
            </div>

            {/* Or Paste a Video Link */}
            <div className="flex items-center space-x-2">
              <label htmlFor="video-link" className="mr-2 ">Paste a video link:</label>
              <input type="text" id="" value={videoLink2} onChange={handleChange2} placeholder="Paste Video Link" className="border border-gray-400 py-2 px-4 rounded w-[600px]" />
              <button onClick={handlePasteLink2} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Play
              </button>
            </div>


          </div>

          {processedVideoPublicId2 && (
            <div className='player-wrapper mt-8'>
              <AdvancedVideo
                cldVid={cloudinary.video(processedVideoPublicId2)}
                width='100%'
                height='100%'
                controls
                autoPlay
                muted
              />
            </div>
          )}
        </div>

        {/* Parking SLot End VIEW*/}

        {/* END Number Plate Full VIEW*/}


      </div>

    </div>


  );
}

export default NumberPlateDetection;
