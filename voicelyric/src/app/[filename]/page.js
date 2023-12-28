"use client"

import axios from "axios"
import { useEffect, useState } from "react";

export default function newFilepage({ params }) {
    const filename = params.filename

    useEffect(() => {
        axios.get('api/transcribe?filename=' + filename);
    }, [filename])


    return (
        <div>
            {filename}
        </div>
    )
}   