import { useState, useEffect } from "react";

export default function NextImg(number) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % number)
         }, 5000);

         return () => clearInterval(interval)
    }, [])

    return index;
}