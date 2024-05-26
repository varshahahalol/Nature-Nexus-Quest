import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Score from './Score';
function App() {
 const[submit,setSubmitbtn]=useState(false);
  const quizData = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Text Makeup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<style>", "<css>", "<script>", "<link>"],
      answer: "<style>"
    },
    {
      question: "Choose the correct HTML element for the largest heading:",
      options: ["<h1>", "<heading>", "<h6>", "<head>"],
      answer: "<h1>"
    },
    {
      question: "Which HTML element is used to define the title of a document?",
      options: ["<meta>", "<title>", "<head>", "<header>"],
      answer: "<title>"
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<newline>"],
      answer: "<br>"
    }
  ];
    const[index,setIndex]=useState(0);
    const[arrAns,setarrAnswer]=useState(Array(quizData.length).fill(null));
    const[selectedOption,setSelectOption]=useState("");
    const[showscore,setScored]=useState(false);
    function handleAns(option){
      setSelectOption(option);
      let newarr=[...arrAns];
      
       if(option==quizData[index].answer){
        newarr[index]=quizData[index].answer;
        setarrAnswer(newarr);
       }

       }
    function totalscore(){
     return arrAns.reduce((scores,answer,index)=>{
        if(answer === quizData[index].answer){
         return scores+1;}
        return scores;
      },0);
    };
    function nextq(){
      
        if(index<quizData.length-1){
          setIndex(index+1);
          setSelectOption("");
       }
         
      }
      function prevs(){
        setSubmitbtn(false);
        if(index==0){
          setIndex(quizData.length-1);
        }else{
          setIndex(index-1);
        }

      }
    
  function handleOption(option){
    
    handleAns(option);
  }  
  return (


    <div className='container'>
     
      {showscore?<h1>Total Score:{totalscore()}/{quizData.length}</h1>:(
        <div>
            <h1>Q.{index+1})&emsp;{quizData[index].question}</h1>
           <ul type="none"> {quizData[index].options.map((option)=>(
            
              <li >
                <label>
            <input type="radio" name={index} checked={selectedOption === option} value={option} 
            onChange={()=>handleOption(option)} />
            {option}
            </label>
            </li>
           
            
            ))}
            </ul>
            &emsp;<button className='pre' onClick={prevs}>Prev </button>
           {index==quizData.length-1?<button className='submit' onClick={()=>setScored(true)}>Submit</button>
            : <button className='nextbtn' onClick={nextq}>Next 
            </button>}
            
            
            </div>
    )}
    
    </div>
          
  );
}

export default App;
