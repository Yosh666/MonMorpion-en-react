import React from 'react';
import Letter from './Letter';
//import Wordlist from './Wordlist'
//ASK
/*prkoi je n'arrive pas a juste récupérer le tableau et comment je fais pr péter l'objet*/
const wordlist= [
    "PANGOLIN",
    "SCOLOPENDRE",
    "HIPPOCAMPE",
    "CARCAJOU",
    "FENNEC",
    "MACAQUES",
    "AXOLOTL",
    "CAMELEON",
    "AUTRUCHE",
    "IGUANE",
    "TARENTULE",
]
    const mysteryWord= wordlist[(Math.floor(Math.random()*wordlist.length))]
 class Word extends React.Component{
    
   state={
       letters:[],
       usedLetters:[],
   }
    playLetter=(letterPush)=>{
        let usedLetters= this.state.usedLetters
        //let error = false
        if (usedLetters.indexOf(letterPush)===-1){
            /*this.setState({
                usedLetters:[...usedLetters,letterPush]
            })*/
            usedLetters.push(letterPush)
        }
        console.log(usedLetters)
        /*else{
            error= true
        }*/
        this.setState({
            usedLetters:usedLetters,
        })
        this.generateWord()
    }
    generateWord=()=>{  
         let letters=[]   
        console.log(mysteryWord)
        for(let i= 0;i<mysteryWord.length; i++){
            let letter= mysteryWord.charAt(i)
            let reveal=this.state.usedLetters.indexOf(letter)!==-1? true:false
            
            letters.push(
                <Letter reveal={reveal} key={i} letter={letter}/>
            )
        }
        this.setState({
            letters:letters,
        })        
    }
    
    componentDidMount(){
        window.addEventListener('keyup',(e)=>{
             this.playLetter(e.key.toUpperCase())
        })
        this.generateWord()
        
    }
    render(){
        return(
            <div>
                <p>{this.state.letters} </p>
            </div>
        )
    }
      
    

 }
 export default Word