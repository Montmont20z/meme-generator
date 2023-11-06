import React, {useEffect} from 'react'
import meme_face from '../images/meme face.png'

export default function Main(){
    //make an api call
    useEffect( () => {
            fetch("https://api.imgflip.com/get_memes")
                .then(response => response.json())
                .then(data => {setAllMeme(data.data.memes)})
                .catch(error => {console.error('Error fetching data', error)})
        }, []
    )
    //meme related data
    let [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3si4.jpg"
    })
    
    // default data
    const [allMeme, setAllMeme] = React.useState(null)

    function getRandomImage(){
        const memeArray = allMeme
        let randomNumber = Math.floor(Math.random()* memeArray.length)
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: memeArray[randomNumber].url
            }
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme( prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })

    }

    return (
        <main className='main'>
            <div className='main-form'>
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className='main-form-top'
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className='main-form-bottom'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getRandomImage} className='main-form-button' >Get a new meme image <img src={meme_face} className='meme_face'/></button>
            </div>
            <div className='main-container'>
                <img src={meme.randomImage} className='main-container-img' alt=""/>
                <h2 className='main-container-text top'>{meme.topText}</h2>
                <h2 className='main-container-text bottom'>{meme.bottomText}</h2>
            </div>
        </main>
    )
}

