"use client"

import BoltIcon from "@/components/BoltIcon";
import ResultVideo from "@/components/ResultVideo";
import TranscriptionEditor from "@/components/TranscriptionEditor";
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


    function getTranscription() {
        setisFetchingInfo(true);
        axios.get('/api/transcribe?filename=' + filename).then((res) => {
            setisFetchingInfo(false);
            const status = res.data.status;
            const transcription = res.data?.transcription;
            if (status === 'IN_PROGRESS') {
                setIsTranscribing(true);
                setTimeout(getTranscription(), 3000);
            }
            else {
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
        <TranscriptionEditor awsTranscriptionItems={awsTranscriptionItems}
            setAwsTranscriptionItems={setAwsTranscriptionItems} />
        
        </div>
                <div>
                    <h2 className="text-2xl mb-4 text-slate-500">Video</h2>
                    <ResultVideo
                     filename={filename}
                     transcriptionItems={awsTranscriptionItems}
                    />
                </div>
            </div>
        </div>
    )
}   