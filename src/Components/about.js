import React from 'react'
import './about.sass'
import laptop from './icons/laptop.png'

let header = ''
let text = ''

const about = (props) => { 
    if (props.lang === 'pl') { 
        header='Witaj na mojej stronie!'
        text = `Cześć!
        Jestem poczatkujacym programista front-end, zaczynajacym przygode z programowaniem.
        Na tej stronie znajdziesz moje ostatnie projekty i technologie ktorych uzywam.
        Kazdego dnia ucze sie czegos nowego i obecnie skupiam sie na back-endzie.
        Jesli widzisz we mnie kandydata do Twojej firmy lub masz dla mnie jakies zlecenie, zapraszam do kontaktu :)`
    }
    else if (props.lang === 'en') {
        header='Welcome on my page!'
        text = `Hey there!
        I am a junior web-developer, starting my journey with programming.
        On that website you can find my last projects and technologies which I use.
        I'm learning new things all the time and right now focusing on back-end technologies.
        In case you would see me in your team or have any task for me to do, feel free to contact :)`
    }
    else if (props.lang === 'de') {
        header='Willkommen auf meiner Seite!'
        text = `Ich bin Junior Web-Entwickler und starte meine Karriere mit dem Programmieren.
        Auf dieser Website finden Sie meine neuesten Projekte und Technologien, die ich benutze.
        Jeden Tag lerne ich etwas Neues und gerade konzentiere ich mich auf Back-End Technologien.
        Wenn Sie sich mich als Teil Ihres Teams vorstellen können oder anderweitig einen Auftrag für mich haben, melden Sie sich gerne bei mir. Ich freue mich auf Ihre Nachricht :) `
    }



    return (
    <React.Fragment>
        <h3>{header}</h3>
        <span className='about__text'>
            <img className='about__laptop' src={laptop} alt='laptop' />
            <span className='about__innertxt'>{text}</span>
        </span>
    </React.Fragment>
)}

export default about