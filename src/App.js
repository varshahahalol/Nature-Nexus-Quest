import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Score from './Score';
import Navbar from './Navbar';

function App() {
 const[submit,setSubmitbtn]=useState(false);
  const quizData = [
    {
      question: "What is the largest rainforest in the world?",
      options: [
        "The Congo Rainforest",
        "The Amazon Rainforest",
        "The Daintree Rainforest",
        "The Valdivian Temperate Rainforest"
      ],
      answer: "The Amazon Rainforest"
    },
    {
      question: "Which gas is most responsible for trapping heat in the Earth's atmosphere?",
      options: ["Methane (CH4)", "Nitrous Oxide (N2O)", "Carbon Dioxide (CO2)", "Oxygen (O2)"],
      answer: "Carbon Dioxide (CO2)"
    },
    {
      question: "What is the name of the process by which plants convert sunlight into energy?",
      options: [" Cellular Respiration", "Photosynthesis", "Fermentation", " Transpiration"],
      answer: "Photosynthesis"
    },
    {
      question: "What percentage of the Earth's surface is covered by oceans?",
      options: ["50%", " 60%", "71%", "75%"],
      answer: "71%"
    },
    {
      question: "Which country has the highest biodiversity in the world?",
      options: ["Australia", "Indonesia", "Brazil", " India"],
      answer: "Brazil"
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
      <Navbar/><h1 className="title">NATURE NEXUS QUEST</h1>{Navbar.js}
      {showscore?<h1>Total Score:{totalscore()}/{quizData.length}</h1>:(
        <div>
            <h1>{index+1})&emsp;{quizData[index].question}</h1>
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
            <div className='button-container'>
            <button className='pre' onClick={prevs}>Prev </button>

           {index==quizData.length-1?
           <button className='submit' onClick={()=>setScored(true)}>Submit</button>
            : 
            <button className='nextbtn' onClick={nextq}>Next </button>}
            </div>
            </div>
    )}
    
    </div>
          
  );
}

export default App;
