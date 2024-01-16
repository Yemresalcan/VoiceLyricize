'use client';
import UploadIcon from "@/components/UploadIcon";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ToastContainer,toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export default function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);

  const [uploadCount, setUploadCount] = useState(() => {
    // Initialize upload count from localStorage or default to 0
    const storedCount = localStorage.getItem('uploadCount');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });
  const router = useRouter();

  const notify = () => toast.error("Dosya boyutu 4MB'dan fazla olamaz!");
 



  useEffect(() => {
    // Update localStorage whenever uploadCount changes
    localStorage.setItem('uploadCount', uploadCount.toString());

    if (uploadCount > 0 && uploadCount < 3) {
      // Perform any action you need when an upload is completed
      console.log(`Upload completed. Remaining uploads: ${3 - uploadCount}`);
    }
  }, [uploadCount]);

  async function upload(ev) {
    ev.preventDefault();
    const files = ev.target.files;
    if (files.length > 0 && uploadCount < 3) {
      const file = files[0];
      setIsUploading(true);
      const res = await axios.postForm('/api/upload', {
        file,
      });
      setIsUploading(false);
      const newName = res.data.newName;
      router.push('/' + newName);

      // Increment the upload count
      setUploadCount((prevCount) => prevCount + 1);
    }
  }

  const remainingUploads = 3 - uploadCount;

  return (
    <>


      {isUploading && (
        <div className="bg-black/90 text-white fixed inset-0 flex items-center">
          <div className="w-full text-center">
            <h2 className="text-4xl mb-4">Uploading</h2>
            <h3 className="text-xl">Please wait...</h3>
          </div>
        </div>
      )}
      {uploadCount < 3 && (
        <div>
               <div>
        <button className="bg-red-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer py-2 "       onClick={notify}>Önemli !</button>
        <ToastContainer />
      </div>
          <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer mt-2">
            <UploadIcon />
            <span>Dosya Yükle</span>
            <input onChange={upload} type="file" className="hidden" />
          </label>
          <p className="text-2xl my-1 font-bold">Kalan Yükleme :  {remainingUploads}</p>
     
        </div>
        
      )}

    </>
  );
}
