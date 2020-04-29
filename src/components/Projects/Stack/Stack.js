import React from "react";
import "./Stack.css";

export default function Stack(props) {
  if (props.stack) {
    const stack = props.stack.map((element) => (
      <li key={element.toLowerCase()} className='technology'>
        {element}
      </li>
    ));
    return <ul className='stacks'>{stack}</ul>;
  }
}
