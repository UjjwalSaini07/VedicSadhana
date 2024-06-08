import React, { useRef, useState } from 'react'

export default function AudioRead({ slok ,speech}) {

    const [speakSloke, setspeakSloke] = useState(true);
    const [togglebtn, settogglebtn] = useState(false);
    const select = useRef();

    // const speech = useRef(new SpeechSynthesisUtterance()).current;

    const readAloud = () => {
        if (speakSloke) {
            speech.text = slok;
            window.speechSynthesis.speak(speech)
        }
        else {
            const synth = window.speechSynthesis;
            synth.cancel()
        }
    }

    const readAloudToggle = () => {
        setspeakSloke(!speakSloke)
        readAloud();
    }
    
    const changeVoice = (event) => {
        const voices = window.speechSynthesis.getVoices()
        speech.voice = voices[event.target.value];
    }

    const replaceBtnWithSelect = () => {
        settogglebtn(!togglebtn)
        const voices = window.speechSynthesis.getVoices()
        setTimeout(() => {
            voices.forEach((voice, index) => {
                const opt = document.createElement('option')
                opt.text = voice.name;
                opt.value = index;
                select.current.appendChild(opt);
            })
        }, 0);
    }
    const replaceSelectWithBtn = () => {
        settogglebtn(!togglebtn)
    }

    return (
        <>
            {!togglebtn ? <button className="AudioReadbtn" onClick={readAloudToggle} onDoubleClick={replaceBtnWithSelect}>
                <i className="fa-solid fa-volume-high"></i>
            </button> :
                <select className='select-voice' ref={select} onChange={changeVoice} onDoubleClick={replaceSelectWithBtn}></select>}
        </>
    )
}