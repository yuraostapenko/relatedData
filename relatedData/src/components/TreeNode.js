import React from 'react';
import './TreeNode.css';
import {  FaFolder } from 'react-icons/fa';
import PropTypes from 'prop-types';
  
const TreeNode = ({node, addChildRoot, id }) => { 
          
    return (
        <div onClick={ addChildRoot } data-child={id}>
            <span   className='mainRootFolder' role="button">
            <FaFolder className={ node.state === 'up' ? 'fafolderGreen' : 'fafolderRed' }/>
            { node.id }
            { node.show ? node.nodes.map(el => 
            <span className='childRootFolder' key={el.id}>
            <FaFolder className={node.state === 'up' ? 'fafolderGreen' : 'fafolderRed'}/>
            { el.id }  
            </span> ) : null }         
                </span>
        </div>
);
}

  TreeNode.propTypes = {
    node: PropTypes.object,
    id: PropTypes.string,
    addChildRoot: PropTypes.func,
};
  
  export default TreeNode;