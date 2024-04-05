'use client'

import DigitalInvite from "./components/page";

// import React, { useEffect, useState } from "react";
// import DigitalInvite from "./[digitalinvite]/components/page";

export default function Home({params}) {
    // const [eventData, setEventData] = useState(null);

    const eventString = params.digitalinvite
    const parts = eventString.split('_');
    const eveDate = parts[0] ;
    const groomName = parts[1] ;
    const brideName = parts[2] ;
    const loc_ = parts[3] ; 

    const eventData = {
        eventDate: eveDate,
        groomName: groomName,
        brideName: brideName,
        loc_: loc_
      };
    // useEffect(() => {

    //     const getQueryParam = (name) => {
    //         const urlParams = new URLSearchParams(window.location.search);
    //         return urlParams.get(name);
    //     }
    //     const encodedData = getQueryParam('data');

    //     if (encodedData) {
    //         try {
    //             const jsonData = decodeURIComponent(encodedData);
    //             const eventData = JSON.parse(jsonData);
    //             setEventData(eventData);
    //             console.log(eventData)
    //         } catch (error) {
    //             console.error("Error parsing JSON data:", error);
    //         }
    //     } else {
    //         console.error("No JSON data found in URL.");
    //     }
    // }, []);

    return (
        <div>
            {eventData ? (
                <DigitalInvite eventData={eventData} />
                // <>{params.digitalinvite}</>
            ) : (
                <p>No event data found.</p>
            )}
        </div>
    );
}
