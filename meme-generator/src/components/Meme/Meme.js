import './Meme.css'
import {test} from './memes.js'
export default function Meme() {

    function generateRandomNumber() {
        let random = Math.floor(Math.random() * (100));
        if(test.success) {
            console.log(test.data.memes[random].id)
        }
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
            <button onClick={generateRandomNumber} className='button' type='button'>Get a new meme image  🖼</button>
        </form>
    )
}