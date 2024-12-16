"use client"; // Enable client-side behavior

import React, { useState, useEffect } from "react";
import Hero from "@/Components/Hero/Hero";
import Loading from "@/Components/loadingLogo/Loading";


export default function HomePage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set a timer to change loading state after 3 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        // Cleanup the timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, []);

    

    return (
        <main>
            {
             isLoading ? ( <Loading />) : (
             < Hero />
            )
            }
            
        
        </main>
    );
}
