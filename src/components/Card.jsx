import React from "react";
import "./Card.css";

const Card = (props) => {
    const {
        loaded = false,
        word = "",
        phonetic = "",
        phonetics = [],
        meanings = [],
        sourceUrls = []
    } = props.info;

    return (
        <div className="card-container">
            {
                !loaded ? (
                    <h1>Loading. . .</h1>
                ) : (
                    <>
                    <h1>{word}</h1>
                    <p>{phonetic}</p>

                    {
                        phonetics.length > 0 && (
                        <>
                            <p>Pronunciation: </p>
                            {
                                phonetics
                                    .filter((pronunciation) => {
                                        return pronunciation.audio
                                    })
                                    .map((pronunciation, index) => {
                                        return (
                                            <>
                                            <audio key={`audio-${index}`} controls controlsList="nodownload">
                                                <source src={pronunciation.audio} type="audio/ogg" />
                                            </audio>
                                            <br/>
                                            </>
                                        )
                                    })
                            }
                        </>
                        )
                    }

                    {
                        meanings.map((meaning, index) => {
                            return (
                                <div key={`meaning-${index}`}>
                                    <h2 className="title-bar">{meaning.partOfSpeech}: </h2>
                                    {
                                        meaning.definitions.length > 0 && (
                                            <>
                                            <p>Definitions: </p>
                                            <ul>
                                            {
                                                meaning.definitions.map((definition, definitionIndex) => {
                                                    return (<li key={`definition-${index}-${definitionIndex}`}>{definition.definition}</li>)
                                                })
                                            }
                                            </ul>
                                            </>
                                        )
                                    }
                                    {
                                        meaning.synonyms.length > 0 && (
                                            <>
                                            <p>Synonyms: </p>
                                            <ul>
                                            {
                                                meaning.synonyms.map((synonym, synonymIndex) => {
                                                    return (<li key={`synonym-${index}-${synonymIndex}`}>{synonym}</li>)
                                                })
                                            }
                                            </ul>
                                            </>
                                        )
                                    }
                                    {
                                        meaning.antonyms.length > 0 && (
                                            <>
                                            <p>Antonyms: </p>
                                            <ul>
                                            {
                                                meaning.antonyms.map((antonym, antonymIndex) => {
                                                    return (<li key={`antonym-${index}-${antonymIndex}`}>{antonym}</li>)
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
                        sourceUrls.length > 0 && (
                            <>
                            <h2 className="title-bar-sources">Sources: </h2>
                            <ul>
                            {
                                sourceUrls.map((sourceUrl, index) => {
                                    return (<li key={`source-${index}`}><a className="source-link" href={sourceUrl} target="_blank" rel="noopener noreferrer">{sourceUrl}</a></li>)
                                })
                            }
                            </ul>
                            </>
                        )
                    }
                    </>
                )
            }

            <div className="link-container">
                <a className="bottom-link" href="https://about.me/subhranshu">@Subhranhsu {new Date().getFullYear()}</a>
            </div>
        </div>
    );
}

export default Card;

