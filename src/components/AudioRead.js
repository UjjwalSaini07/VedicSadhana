import React, { useRef, useState, useEffect } from 'react';

export default function AudioRead({ slok, speech }) {
    const [speakSloke, setspeakSloke] = useState(true);
    const [togglebtn, settogglebtn] = useState(false);
    const selectRef = useRef(null);

    const readAloud = () => {
        if (speakSloke) {
            speech.text = slok;
            window.speechSynthesis.speak(speech);
        } else {
            window.speechSynthesis.cancel();
        }
    };

    const changeVoice = (event) => {
        const selectedVoice = window.speechSynthesis.getVoices()[event.target.value];
        speech.voice = selectedVoice;
        readAloud();
        settogglebtn(false); // Switch back to button view
    };

    const replaceBtnWithSelect = () => {
        settogglebtn(true); // Switch to select dropdown
    };

    const replaceSelectWithBtn = () => {
        settogglebtn(false); // Switch back to button view
    };

    const handleBlur = () => {
        settogglebtn(false); // Switch back to button view on blur
    };

    useEffect(() => {
        // Initialize voices when component mounts
        const voices = window.speechSynthesis.getVoices();
        if (voices.length === 0) {
            // Wait until voices are loaded
            window.speechSynthesis.onvoiceschanged = () => {
                const updatedVoices = window.speechSynthesis.getVoices();
                populateVoices(updatedVoices);
            };
        } else {
            populateVoices(voices);
        }
    }, []);

    const populateVoices = (voices) => {
        if (selectRef.current) {
            selectRef.current.innerHTML = ''; // Clear existing options
            voices.forEach((voice, index) => {
                const option = document.createElement('option');
                option.text = voice.name;
                option.value = index;
                selectRef.current.appendChild(option);
            });
        }
    };

    const toggleReadAloud = () => {
        setspeakSloke(!speakSloke);
        readAloud();
    };

    return (
        <>
            {!togglebtn ? (
                <button className="AudioReadbtn" onClick={toggleReadAloud} onDoubleClick={replaceBtnWithSelect}>
                    <i className="fa-solid fa-volume-high"></i>
                </button>
            ) : (
                <select className='select-voice' ref={selectRef} onChange={changeVoice} onBlur={handleBlur}>
                    {window.speechSynthesis.getVoices().map((voice, index) => (
                        <option key={index} value={index}>{voice.name}</option>
                    ))}
                </select>
            )}
        </>
    );
}
