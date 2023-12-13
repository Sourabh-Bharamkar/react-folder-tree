import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FolderStructure from './components/FolderStructure';
import axios from 'axios'; // Import Axios
import ReactFolderStructure from './components/ReactFolderStructure'


function App() {

  const [folderData, setFolderData] = useState(null);

  // useEffect(() => {
  //   // Use Axios to fetch data from Node.js backend endpoint
  //   axios.get('http://localhost:3001/ftp/s3/folderStructure?accountName=ftp-root')
  //     .then((response) => {
  //       console.log(response.data.folderStructureObject);
  //       setFolderData(response.data.folderStructureObject)
  //     }
  //     )
  //     .catch((error) => console.error('Error fetching folder structure:', error));
  // }, []);

  return (
    <div>
      <h1>Folder Structure</h1>
      <ReactFolderStructure data={folderData}></ReactFolderStructure>
    </div>
  );
}

export default App;
