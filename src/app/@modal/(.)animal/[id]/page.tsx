"use client";
import { type Animal, animals } from "animals";
import React from "react";
import { 
    ModalOverlay, 
    ModalContainer, 
    ModalHeader,
    ModalTitle
} from "~/components/modal";

export default function Animal({ params }: { params: { id: string } }) {

    const animal:Animal | undefined = animals.find(
        (animal) => animal.id === params.id
    );

    const [showDialog, setShowDialog] = React.useState(true);

    if(!animal) return <div>Animal not found</div>
    
    return (
        <ModalOverlay className="p-4" open={showDialog}>
            <ModalContainer 
                className="w-full h-full bg-cover bg-center bg-no-repeat p-5 sm:p-10 relative flex items-end"
                style={{ backgroundImage: `url(${animal.imageSrc})` }}
            >
                <ModalHeader className="w-full flex justify-between">
                    <button 
                        className="modal-close-button rounded-full bg-neutral-700/50 p-2 z-20" 
                        onClick={() => {
                            setShowDialog(false);
                            window.history.back();
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                            <path d="M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 0 0-1.414-1.414L12 10.586z" />
                        </svg>
                    </button>
                    <button 
                        className="fullscreen-button rounded-full bg-neutral-700/50 p-2 z-20" 
                        onClick={() => window.location.reload()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M44 4S33.59 2.201 30 8c-2.672 4.317 1 9 1 9M44 4L31 17M44 4s1.799 10.41-4 14c-4.317 2.672-9-1-9-1m0 0l-3 3m3 11l-3-3m16 16s-10.41 1.799-14-4c-2.672-4.317 1-9 1-9l13 13Zm0 0s1.799-10.41-4-14c-4.317-2.672-9 1-9 1l13 13Zm0 0L31 31l13 13ZM17.264 17l3 3m-16-16s10.41-1.799 14 4c2.672 4.317-1 9-1 9l-13-13Zm0 0s-1.8 10.41 4 14c4.316 2.672 9-1 9-1l-13-13Zm0 0l13 13l-13-13Zm13 27l3-3m-16 16s10.41 1.799 14-4c2.672-4.317-1-9-1-9l-13 13Zm0 0s-1.8-10.41 4-14c4.316-2.672 9 1 9 1l-13 13Zm0 0l13-13l-13 13Z"/>
                        </svg>
                    </button>
                </ModalHeader> 
                <ModalTitle className="absolute bottom-10">
                    {animal.name}
                </ModalTitle>
            </ModalContainer>
        </ModalOverlay>
    )
}