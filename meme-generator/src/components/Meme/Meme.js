import './Meme.css'
export default function Meme() {
    return (
        <form className='form'>
            <div className='inputs'>
                <div className='input-group'>
            <label for="top">Top Text:</label>
            <input type="text" id="fname" name="top"/>
            </div>
            <div className='input-group'>
            <label for="bottom">Bottom Text:</label>
            <input type="text" id="fname" name="bottom"/>
            </div>
            </div>
            <button className='button' type='submit'>Get a new meme image  🖼</button>
        </form>
    )
}