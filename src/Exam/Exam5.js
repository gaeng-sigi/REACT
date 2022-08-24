import { useState, useEffect } from 'react';
import "./Exam3.css";

export default function Exam5() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState('aaa');
    
    function countUp() {
        setCounter(preVal => preVal + 1 );
    }

    function countDown() {
        if (counter > 0) {
            setCounter(preVal => preVal - 1);
        }
    }

    const onChangedText = (e) => {
        setKeyword(e.target.value);
    }

    useEffect(() => {
        if(keyword.length > 5 ) {
            console.log("AAA");
        }
    }, [keyword])

    return (
        <div>
            <input
                type="text"
                placeholder='Search here...'
                value={keyword}
                onChange={onChangedText}
            />
            <h1>{counter}</h1>
            <button onClick={countUp} className="red">+</button>
            <button onClick={countDown} className="blue">-</button>
        </div>
    )
}
