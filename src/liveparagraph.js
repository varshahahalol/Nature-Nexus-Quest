import {React} from react;
import {useState} from react;
export default function LivePara(){
    const[text,setText]=useState("");

    return(
        <>
        <h1>Live Paragraph writer</h1>
        <p>Paragraph Text: {text}</p>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        </>
    )
}