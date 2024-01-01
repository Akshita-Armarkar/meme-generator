import './Meme.css'
import {test} from './memes.js';
import {useState} from 'react'
export default function Meme() {

    const [random, setRandom] = useState(0)

    function generateRandomNumber() {
        setRandom(Math.floor(Math.random() * (100)))
        console.log(random);
    }

    return (
        <form className='form'>
            <div className='inputs'>
                <div className='input-group'>
            <label htmlFor="top">Top Text:</label>
            <input type="text" id="fname" name="top" placeholder="Shut up"/>
            </div>
            <div className='input-group'>
            <label htmlFor="bottom">Bottom Text:</label>
            <input type="text" id="fname" name="bottom" placeholder="And take my money"/>
            </div>
            </div>
            <img src={test.data.memes[random].url} alt='memeimage' className='output-image'/>
            <button onClick={generateRandomNumber} className='button' type='button'>Get a new meme image  🖼</button>
        </form>
    )
}