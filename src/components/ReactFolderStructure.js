import FolderTree, { testData } from 'react-folder-tree';
import 'react-folder-tree/dist/style.css';

const ReactFolderStructure = ({ data }) => {

    
    const testData = {
        "name": "root",
        "type": "application/folder",
        "children": [
            {
                "name": "ftp-root",
                "type": "application/folder",
                "children": [
                    {
                        "name": "fota",
                        "type": "application/folder",
                        "children": [
                            {
                                "name": "063963e7ad480749d04e17c409ece31a",
                                "type": false
                            },
                            {
                                "name": "2282f1e80721beb78c49151d906bb37f",
                                "type": false
                            },
                            {
                                "name": "IDBI Bank passbook (1).pdf",
                                "type": "application/pdf"
                            },
                            {
                                "name": "aadhar.pdf",
                                "type": "application/pdf"
                            },
                            {
                                "name": "message.txt",
                                "type": "text/plain"
                            },
                            {
                                "name": "postdata.txt",
                                "type": "text/plain"
                            },
                            {
                                "name": "undefined",
                                "type": false
                            },
                            {
                                "name": "veryNewMessage.txt",
                                "type": "text/plain"
                            },
                            {
                                "name": "xyz",
                                "type": "application/folder",
                                "children": []
                            }
                        ]
                    },
                    {
                        "name": "objectkey.txt",
                        "type": "text/plain"
                    },
                    {
                        "name": "ssb",
                        "type": "application/folder",
                        "children": []
                    },
                    {
                        "name": "test",
                        "type": "application/folder",
                        "children": [
                            {
                                "name": "ftp",
                                "type": "application/folder",
                                "children": []
                            }
                        ]
                    }
                ]
            }
        ]
    }

    const onTreeStateChange = (state, event) => console.log(state, event);

    const onNameClick = (obj) => {
        console.log('onNameClick event triggered')
        console.log(obj)
        console.log('node-data',obj.nodeData)
        
        // defaultOnClick();
        // console.log(nodeData)
    };

    return (
        <FolderTree
            data={testData}
            onChange={onTreeStateChange}
            onNameClick={onNameClick}
        />
    );


};

export default ReactFolderStructure;