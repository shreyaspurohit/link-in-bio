'use client'

import {useEffect, useState} from 'react';
import {ShareFatIcon} from '@phosphor-icons/react/dist/ssr';

export default function ShareButton({nativeShareTitle, urlTitle, url} : {nativeShareTitle: string, urlTitle: string, url: string}) {
    const [canShare, setCanShare] = useState(false);
    useEffect(() => {
        if (typeof navigator !== undefined && navigator.canShare !== undefined) {
            setCanShare(navigator.canShare({title: urlTitle, url: url}));
        }
    }, [urlTitle, url]);

    const handleShare = () => {
        if (navigator.canShare !== undefined) {
            navigator.share({
                title: urlTitle,
                url: url,
            }).then(() => {
                console.log('Shared successfully');
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        }
    }
    return (
        <button title={nativeShareTitle} className="flex-1 m-auto cursor-pointer" disabled={!canShare} onClick={handleShare}>            
            {canShare && <ShareFatIcon weight="regular" size={36} alt="Share" className="ml-auto duration-100 transition-transform hover:scale-115" />}
        </button>
    )
}
