import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Vidplayer from './vidplayer';
import MCQ from './vidmcq';
import Score from './Score';
import Navbar from './Navbar';
import SRT from './srt';

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
  
  const VideoQuizData = [
    {
      question: "What was the main theme of the video?",
      options: [
        "Technology advancements",
        "Environmental conservation",
        "Wildlife photography",
        "Urban development"
      ],
      answer: "Environmental conservation"
    },
    {
      question: "Where was the video primarily filmed?",
      options: [
        "Africa",
        "Asia",
        "South America",
        "North America"
      ],
      answer: "Africa"
    },
    // Add more questions as needed
  ];

  const SrtQuizData= [
    {
      question: "You are walking in a park and see a stray dog looking hungry and lost. What do you do?",
      options: [
        "Try to catch the dog and take it home with you.",
        "Ignore the dog and continue with your walk. ",
        "Call a local animal rescue organization to report the stray dog and provide its location."
      ],
      answer: "Call a local animal rescue organization to report the stray dog and provide its location."
    },
    {
      question: "You are at a friend's house for a party. You notice that the host has accidentally left the kitchen tap running. What do you do?",
      options: [
        "Quietly turn off the tap and let the host know about the mistake. ",
        "Turn off the tap without informing the host. ",
        "Ignore the tap and assume the host will notice it later. "
      ],
      answer: "Quietly turn off the tap and let the host know about the mistake."
    },
    {
      question: "At your workplace, you see a colleague struggling with a task that you are familiar with. What do you do?",
      options: [
        "Offer your assistance and guide them through the task. ",
        "Watch them struggle and do nothing since it's not your responsibility.",
        "Wait until they ask for help, then assist them if they do. "
      ],
      answer: "Offer your assistance and guide them through the task."
    },
    {
      question: "While shopping at a grocery store, you see a small child who seems to be lost and looking for their parent. What do you do?",
      options: [
        "Approach the child and ask if they need help, then assist them in finding a store employee.",
        "Ignore the child, assuming their parent will find them soon.",
        "Keep an eye on the child from a distance until a store employee notices. "
      ],
      answer: "Approach the child and ask if they need help, then assist them in finding a store employee."
    },
    {
      question: "You are a member of a local community group. During a meeting, a member makes a suggestion that you know has already been tried and failed. What do you do?",
      options: [
        "Respectfully remind the group of the previous attempt and suggest a different approach.",
        "Say nothing and let the group potentially repeat the same mistake.",
        "Discuss it privately with the member after the meeting."
      ],
      answer: "Respectfully remind the group of the previous attempt and suggest a different approach."
    }
  ];

    const[index,setIndex]=useState(0);
    const[arrAns,setarrAnswer]=useState(Array(quizData.length).fill(null));
    const[selectedOption,setSelectOption]=useState("");
    const[showscore,setScored]=useState(false);
    
    function handleAns(option){
      setSelectOption(option);
      let newarr=[...arrAns];
      
       if(option===quizData[index].answer){
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
        if(index===0){
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
      <Navbar/>
      <h className="title">NATURE NEXUS QUEST</h>
      <h1> QUIZ</h1>
      {showscore ? (
        <Score total={totalscore()} max={quizData.length} />
      ) : (
        <>
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

           {index===quizData.length-1?
           <button className='submit' onClick={()=>setScored(true)}>Submit</button>
            : 
            <button className='nextbtn' onClick={nextq}>Next </button>}
            </div>
            </div>
            <div className='vid'>
          <h1>VIDEO COMPREHENSION</h1>
          <div className='video-container'>
            <Vidplayer url='https://youtu.be/WfXRTZdyIe0?si=fgmNVcATOirYAVFH' /> 
          </div>
          <div className='quiz-container'>
            <MCQ quizData={VideoQuizData} />
          </div>
        </div>
        <div className='srt'>
          <h1>SITUATION RESPONSE TEST</h1>
          <div className='srt-container'>
            <SRT quizData={SrtQuizData}/>
          </div>
        </div>
        </>
    )}
    
    </div>
          
  );
}

export default App;
