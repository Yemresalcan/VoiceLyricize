"use client"

import BoltIcon from "@/components/BoltIcon";
import TranscriptionItem from "@/components/TranscriptionItem";
import { clearTranscriptionItems } from "@/libs/awsTranscriptionHelpers";
import axios from "axios"
import { useEffect, useState } from "react";

export default function newFilepage({ params }) {
    const filename = params.filename
    const [isTranscribing, setIsTranscribing] = useState(false)
    const [isFetchingInfo, setisFetchingInfo] = useState(false)
    const [awsTranscriptionItems, setAwsTranscriptionItems] = useState([])

    useEffect(() => {
      getTranscription()
    }, [filename])


function getTranscription(){
    setisFetchingInfo(true);
    axios.get('/api/transcribe?filename=' + filename).then((res) => {
        setisFetchingInfo(false);
        const status = res.data.status;
        const transcription = res.data?.transcription;
        if (status === 'IN_PROGRESS') {
            setIsTranscribing(true);
            setTimeout(  getTranscription(), 3000);
        }
        else{
             setIsTranscribing(false);
           
                setAwsTranscriptionItems(
                    clearTranscriptionItems(transcription.results.items));
        }
     });
}

if (isTranscribing) {
    return (
        <div>
            Videonuz çevriliyor...
        </div>
    )
}

if (isFetchingInfo) {
    return (
        <div>
            Bilgileriniz alınıyor...
        </div>
    )
}


    return (
        <div>
            <div className="grid grid-cols-2 gap-16">
 
            <div className="max-w-xs">
                <h2 className="text-2xl mb-4 text-slate-500">Çeviri</h2>
            <div className="grid grid-cols-3 sticky top-0 bg-slate-500/50 p-2 
            rounded-md">
                <div>Başlangıç  </div>
                <div>Bitiş  </div>
                <div>İçerik </div>
            </div>
            {awsTranscriptionItems.length > 0 && awsTranscriptionItems.map((item) => (<TranscriptionItem item = {item} />
            ))}
            </div>
            <div>
            <h2 className="text-2xl mb-4 text-slate-500">Video</h2>
            <div className="mb-4">
                <button
                className="bg-green-400 py-2 px-6 
                rounded-full inline-flex gap-2 border-2 border-green-700
                cursor-pointer">
                    <BoltIcon/>
                    <span> Alt yazıyı ekle</span>
                </button>
            </div>
            <div className="rounded-xl overflow-hidden">
            <video 
            controls
            src={"https://voicelyric.s3.eu-north-1.amazonaws.com/" + filename}>

            </video>
            </div>
         
            </div>
        </div>
    </div>
    )
}   