import React from 'react';
import './Card.css';

const Card = (props) => {
    const {
        loaded,
        word,
        phonetic,
        phonetics,
        meanings,
        sourceUrls,
    } = props.info;

    const audioUrl = props.info.audio;

    return (
        <div className='card-container'>
            {
                !loaded ? (
                <h1>Loading. . .</h1>
                )
                :(
                <>
                    <h1>{word}</h1>
                    <p>{phonetic}</p>

                    {
                        phonetics.length > 0 ? (
                            <p>Pronounciation: </p>
                        )
                        : (
                            (<></>)
                        )
                    }
                    
                    {
                        phonetics.map((pronounciation, index) => {
                            if(pronounciation.audio === ""){
                                return (<></>)
                            }
                            return (
                                <audio key={Math.random()} controls>
                                    <source src={pronounciation.audio} type="audio/ogg"></source>
                                </audio>
                            )
                        })
                    }

                    {
                        meanings.map((meaning, index) => {
                            return (
                                <div key={index}>
                                    <h2 className='part-of-speech'>{meaning.partOfSpeech} :</h2>
                                    {
                                        meaning.definitions.length > 0 ?(
                                            <></>
                                        ) : (
                                            <>
                                                <p>Defenitions: </p>
                                                <ul>
                                                {
                                                    meaning.definitions.map((defenition) => {
                                                        return (<li key={Math.random()}>{defenition.definition}</li>)
                                                    })
                                                }
                                                </ul>
                                            </>
                                        )
                                    }
                                    
                                    
                                </div>
                            )
                        })
                    }
                    {
                        sourceUrls.length > 0
                    }
                </>
                )
            }

            <div className='link-container'>
                <a href="https://about.me/subhranshu">@Subhranhsu {new Date().getFullYear()}</a>
            </div>


        </div>
    );
}

export default Card;

