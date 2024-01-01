import BoltIcon from "./BoltIcon";
import { useEffect, useRef, useState } from "react";
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL,fetchFile } from '@ffmpeg/util';

export default function ResultVideo({ filename,transcriptionItems }) {
    const videoUrl="https://voicelyric.s3.eu-central-1.amazonaws.com/"+filename;
    const [loaded, setLoaded] = useState(false);
    const ffmpegRef = useRef(new FFmpeg());
    const videoRef = useRef(null);


    useEffect(() => {
       videoRef.current.src=videoUrl;
    }, 
   
    
    [])


    const load = async () => {
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
        const ffmpeg = ffmpegRef.current;
     
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });
        setLoaded(true);
    }

    const transcode = async () => {
        const ffmpeg = ffmpegRef.current;
        await ffmpeg.writeFile(filename,await fetchFile(videoUrl));
        console.log(transcriptionItems);
        ffmpeg.on('log', ({ message }) => {
            console.log(message);
        });
        await ffmpeg.exec(['-i', filename, 'output.mp4']);
        const data = await ffmpeg.readFile('output.mp4');
        videoRef.current.src =
            URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'}));
    }












    return (
        <>
            <div className="mb-4">
                <button
                    onClick={transcode}
                    className="bg-green-400 py-2 px-6 
        rounded-full inline-flex gap-2 border-2 border-green-700
        cursor-pointer">
                    <BoltIcon />
                    <span> Alt yazıyı ekle</span>
                </button>
            </div>
            <div className="rounded-xl overflow-hidden">
                <video
                    data-video={0}
                    ref={videoRef}
                    controls>
                </video>
            </div>
        </>
    )
}
