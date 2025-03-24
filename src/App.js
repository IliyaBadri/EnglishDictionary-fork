import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Welcome from "./components/Welcome";

function App() {
  const [searchValue, setSearchValue] = useState("welcome");
  const [wordInformation, setWordInformation] = useState({
    loaded: false,
    word: "",
    phonetic: "",
    phonetics: [],
    meanings: [],
    sourceUrls: []
  });
  const [welcomeScreen, setWelcomeScreen] = useState(true);

  async function loadData() {
    try {
      const blankWordData = {
        loaded: false,
        word: "",
        phonetic: "",
        phonetics: [],
        meanings: [],
        sourceUrls: []
      };
      setWordInformation(blankWordData);
      const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
      const apiResponse = await fetch(apiUrl);
      const apiData = await apiResponse.json();

      if(apiData.title !== undefined || apiData[0] === undefined){
        console.log(apiData.title);
        return;
      }

      const finalResult = apiData[0];

      const newWordInformation = {
        loaded: true,
        word: finalResult.word,
        phonetic: finalResult.phonetic,
        phonetics: finalResult.phonetics,
        meanings: finalResult.meanings,
        sourceUrls: finalResult.sourceUrls
      };

      setWordInformation(newWordInformation);
    } catch (error) {
      console.log(error);
    }
  }

  function changeScreen(){
    setWelcomeScreen(false);
    loadData();
  }

  return (
    <div className="main-container">
      <div className="search-box"></div>
      {
        welcomeScreen ? 
        <Welcome screenChangeFunction={changeScreen} /> 
        : 
        <div><div className="search-box">
          <input placeholder="Type a word . . ." value={searchValue} onChange={(element) => { setSearchValue(element.target.value) }}></input>
          <button onClick={() => {loadData()}}>Search</button>
        </div> <Card info={wordInformation} /></div>
      }
    </div>
  );
}

export default App;
