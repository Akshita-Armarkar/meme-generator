import './Meme.css'
import {test} from './memes.js';
import {useState} from 'react'
export default function Meme() {

    const [meme, setMeme] = useState({
        topText : 'top text', 
        bottomText : 'bottom text', 
        randomImage : 'https://i.imgflip.com/30b1gx.jpg'
    })
    const [allMemeImages, setAllMemeImages] = useState(test);

    function memeGenerator() { 
        setMeme(prev => {
            return {...prev, randomImage : allMemeImages.data.memes[Math.floor(Math.random() * (100))].url}
        }
        )
    }

    function setInputs(e) {
        e.target.name === 'top' ?  setMeme( prev => {
            return {...prev, topText : e.target.value}
        }) : setMeme( prev => {
            return {...prev, bottomText : e.target.value}
        }) 

        console.log(meme)
    }

    return (
        <form className='form'>
            <div className='inputs'>
                <div className='input-group'>
            <label htmlFor="top">Top Text:</label>
            <input type="text" id="fnametop" name="top" placeholder="Shut up" onChange={setInputs}/>
            </div>
            <div className='input-group'>
            <label htmlFor="bottom">Bottom Text:</label>
            <input type="text" id="fnamebottom" name="bottom" placeholder="And take my money" onChange={setInputs}/>
            </div>
            </div>
            <div className='output'>
                <span>{meme.topText}</span>
            <img src={meme.randomImage} alt='memeimage' className='output-image'/>
                <span>{meme.bottomText}</span>
            </div>
            <button onClick={memeGenerator} className='button' type='button'>Get a new meme image  🖼</button>
        </form>
    )
}