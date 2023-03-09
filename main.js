const inp = document.getElementById("input");
const infoText = document.getElementById("info-text")
const meaningcontainer = document.getElementById('meaning-container')
const titleEl = document.getElementById("title")
const meaningEl = document.getElementById("Meaning")
const audioEl = document.getElementById("audio")
             async function fetchAPI(word){
                          try {

                                       meaningcontainer.style.display = "none";
                                       infoText.style.display = "block";
                                       infoText.innerText = `Searching the meaning of "${word}"`;
                                       const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
                                       const result = await fetch(url).then((res) => res.json());
                                       if(result.title){
                                                    titleEl.innerText = word;
                                                    meaningEl.innerText = "N/A";
                                                    audioEl.style.display = "none";
                                       }
                                       else{
                                                    titleEl.innerText = result[0].word;
                                                    meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
                                                    audioEl.style.display = "inline-block";
                                       }
                                       infoText.style.display = "none";
                                       meaningcontainer.style.display = "block";
                                       titleEl.innerText = result[0].word;
                                       meaningEl.innerText = result[0].meanings[0].definitions[0].definition;
                                       audioEl.src = result[0].phonetics[0].audio;
                                       
                          } catch (error) {
                                     console.log(error);  
                                     infoText.innerText = "an error happend please try again";
                          }
    
             }          



inp.addEventListener("keyup" , (e) => {
             if(e.target.value && e.key === "Enter"){
                          fetchAPI(e.target.value);
             }
})