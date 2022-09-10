import arrow from './images/icon-arrow-down.svg';
import { useState } from 'react';

const Dropdown = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="drop-container">
      <div className="question-container" onClick={() => setOpen(!open)}>
        <div className={!open ? "question" : "question --active"}>{question}</div>
        <img className={!open ? "drop-arrow" : "drop-arrow --flip"} src={arrow} alt="Drop Arrow" />
      </div>
      {open ? <div className="answer">{answer}</div> : null}
    </div>
  );
};

export default Dropdown;
