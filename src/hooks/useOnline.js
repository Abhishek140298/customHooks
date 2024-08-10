import React, { useState, useEffect } from 'react'


export const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true)
    useEffect(() => {


        const onOnline = (event) => {

            setIsOnline(true)
        }

        const onOffline = (event) => {

            setIsOnline(false)
        }

        window.addEventListener('online', onOnline)
        window.addEventListener('offline', onOffline)

        return () => {
            window.removeEventListener('online', onOnline)
            window.removeEventListener('offline', onOffline)
        }

    }, [])

    return isOnline

}