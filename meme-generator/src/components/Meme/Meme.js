import './Meme.css'
export default function Meme() {
    return (
        <form className='form'>
            <div className='inputs'>
                <div className='input-group'>
            <label for="top">Top Text:</label>
            <input type="text" id="fname" name="top" placeholder="Shut up"/>
            </div>
            <div className='input-group'>
            <label for="bottom">Bottom Text:</label>
            <input type="text" id="fname" name="bottom" placeholder="And take my money"/>
            </div>
            </div>
            <button className='button' type='submit'>Get a new meme image  🖼</button>
        </form>
    )
}