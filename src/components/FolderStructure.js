// FolderTree.js

import React from 'react';
import './FolderStructure.css'

const FolderTree = (props) => {

  console.log(props)
  return (
    <ul>
      <li>
        {props.folder.name}
        {props.folder.children && props.folder.children.length > 0 && (
          <FolderTreeList folders={props.folder.children} />
        )}
      </li>
    </ul>
  );
};

const FolderTreeList = ({ folders }) => {
  return (
    <ul>
      {folders.map((folder, index) => (
        <FolderTree key={index} folder={folder} />
      ))}
    </ul>
  );
};

const FolderStructure = (props) => {
  return (
    <div>
      {/* <h1>Folder Structure</h1> */}
      {props.data && <FolderTree folder={props.data} />}
    </div>
  );
};

export default FolderStructure;
