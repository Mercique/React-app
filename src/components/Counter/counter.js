// Обновление - state 

// функциональный подход
// import { useState } from "react";

// export const Counter = () => {
//   // const countState = useState(0);
//   // const count = countState[0];
//   // const setCount = countState[1];
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h3>{count}</h3>
//       <button
//         onClick={() => {
//           const newCount = count + 1;
//           setCount(newCount);
//         }}
//       >
//         Click
//       </button>
//     </div>
//   );
// };

// Классовый подход
import React from "react";

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  updateCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h3>{ this.state.count }</h3>
        <button type="button" onClick={ this.updateCount }>Click</button>
      </div>
    )
  }
}
