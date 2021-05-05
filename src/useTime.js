import { useEffect, useState } from "react";
import { presentationTime } from "./utils";

export const useTime = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    
    const getCurrentDate = () => {
        return Date.now();
    }

    useEffect(() => {
        setTimeout(() => {
            setStartDate(getCurrentDate())
        }, presentationTime);
    }, [])

    const getEndDate = () => {
        setEndDate(getCurrentDate())
    }

    const calculateTime = () => {
        return (endDate - startDate) / 1000;
    }

    return {
        getEndDate,
        calculateTime,
    }

}

