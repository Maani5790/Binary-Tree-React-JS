import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Node {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
    this.isExpanded = false;
  }
}

function generateNodes(depth) {
  if (depth === -10) {
    return new Node("Node " + depth);
  }
  const children = [generateNodes(depth - 1), generateNodes(depth - 1)];
  return new Node("Node " + depth, children);
}

const Tree = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="node" onClick={handleToggle}>{node.value}</div>
      {isExpanded && (
        <div className="children">
          {node.children.map((child, index) => (
            <div className="child" key={index}>
              <Tree node={child} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const App = () => {
  const root = generateNodes(4);

  return (
    <div className="container">
      <Tree node={root} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
