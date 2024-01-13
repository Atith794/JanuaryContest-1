import react from 'react';
import '../style/style.css';

const calculator = ()=>{

    const[operand1,setOperand1] = react.useState();
    const[operand2,setOperand2] = react.useState();
    const[click,setClick] = react.useState(false);
    const[result,setResult] = react.useState("");

    function plus(){
        setClick(true);
        const res = parseFloat(operand1)+parseFloat(operand2);
        setResult(res);
    }
    function minus(){
        setClick(true);
        const res = parseFloat(operand1)-parseFloat(operand2);
        setResult(res);
    }

    function multiply(){
        setClick(true);
        const res = parseFloat(operand1)*parseFloat(operand2);
        setResult(res);
    }

    function divide(){
        setClick(true);
        const res = parseFloat(operand1)/parseFloat(operand2);
        setResult(res);
    }



    return (
        <div className='headingdiv'>
            <h1 className="heading">React calculator</h1>
            <input type='text' placeholder='Num 1' className='input1' onChange={(e)=>setOperand1(e.target.value)}/>
            <input type='text' placeholder='Num 2' className='input2' onChange={(e)=>setOperand2(e.target.value)}/>
            <div className="buttons">
                <button className="buttonpl" onClick={plus}>+</button>
                <button className="buttonm" onClick={minus}>-</button>
                <button className="buttonp" onClick={multiply}>*</button>
                <button className="buttond" onClick={divide}>/</button>
            </div>
            {   
                click?((operand1 !== "" && operand2 !== "")?(<div>
                <h1 className='successMessage'>Success</h1>
                <p className='result'>Result:{result}</p>
                </div>):(<div>
                <h1 className='errorMessage'>Error</h1>
                <p className='errresult1'>{(operand1 === "")?"Number 1 should not be empty":""}</p>
                <p className='errresult2'>{(operand2 === "")?"Number 2 should not be empty":""}</p>
            </div>)):""
}

             
        </div>
        
        
    )


}

export default calculator;