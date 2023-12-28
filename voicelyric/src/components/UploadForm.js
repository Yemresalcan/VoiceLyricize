"use client"
import UploadIcon from '@/components/UploadIcon'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function UploadForm() {

    const [isUploading, setisUploading] = useState(false)
    const router = useRouter()

    async function upload(ev) {
        ev.preventDefault();
        const files= ev.target.files;
        if(files.length >0) {
            const file = files[0];
            setisUploading(true);
            const res =  await axios.postForm('/api/upload', {
                file,
            });
            setisUploading(false);
            const newName= res.data.newName;
            router.push('/'+newName)
        }
    }



    return (
        <>
        {isUploading && (
            <div className='bg-black/90 text-white fixed inset-0 flex items-center'>
                <div className='w-full text-center'>
                <h2 className='text-4xl mb-4'>Yükleniyor</h2>
                <h3 className='text-xl'>Lütfen Bekleyin..</h3>
                </div>
            </div>
        )}
        <label className='bg-green-400 py-2 px-6 
        rounded-full inline-flex gap-2 border-2 border-green-700
        cursor-pointer'>
            <UploadIcon />
            <span>Hemen Başla </span>
            <input onChange={upload} type='file' className='hidden' />
        </label>
        </>
    )
}