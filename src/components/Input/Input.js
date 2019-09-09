// import React, { useState } from "react";

// import styles from "./Input.module.css";
// import Button from "../Button/Button";

// const Input = (props) => {
//   const [inputState, setInputState] = useState("");

//   return (
//     <div className={styles.inputDiv}>
//       <form onSubmit={props.submitted} className={styles.inputForm}>
//         <input
//           onChange={(event) => setInputState(event.target.value)}
//           value={inputState}
//           className={styles.inputField}
//           type='text'
//         />
//         <Button clear>Clear</Button>
//         <Button>Ask</Button>
//       </form>
//     </div>
//   );
// };

// export default Input;


import React, { useState } from "react";

import styles from "./Input.module.css";
import Button from "../Button/Button";

const Input = (props) => {
  const [inputState, setInputState] = useState("");

  const handleSubmit = (event) => {
      event.preventDefault();
      props.submitted();
  }

  const handleClear = (event) => {
    event.preventDefault();
    setInputState('');
}

  return (
    <div className={styles.inputDiv}>
      <div className={styles.inputForm}>
        <input
          onChange={(event) => setInputState(event.target.value)}
          value={inputState}
          className={styles.inputField}
          type='text'
        />
        <Button submitted={handleClear} clear>Clear</Button>
        <Button submitted={handleSubmit}>Ask</Button>
      </div>
    </div>
  );
};

export default Input;
