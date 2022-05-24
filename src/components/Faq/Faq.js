import React, { useState } from 'react';
import "./Faq.css"
import FaqIn from './FaqIn';
import Questions from "./Questions"
const Faq = () => {
    const [question, setQustion] = useState(Questions);
    return (
        <div className='container'>
            <h2 className='mt-5'>Common FAQ</h2>
            <div className='faq'>
                {question.map((item, idx) => <FaqIn idx={idx} question={item.question} answer={item.answer} />)}
            </div>
        </div>
    );
};

export default Faq;