import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import FolderList from './components/folder/folder-list.js'
import FileUpload from './components/folder/file/file-upload.js';
import FileList from './components/folder/file/file-list.js';

function App() {
    return (
        <div className="App">
          {/* <header className="App-header">
                <FolderList />
                <FileUpload />
          </header> */}
          <BrowserRouter>
            <div>
              <div className="header">
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/files">Files</NavLink><small>(Access without token only)</small>
                <NavLink activeClassName="active" to="/folder">Folder</NavLink><small>(Access with token only)</small>
              </div>
              <div className="content">
                <Switch>
                  <Route path="/files" component={FileList} />
                  <Route path="/folder" component={FolderList} />
                </Switch>
              </div>
            </div>
      </BrowserRouter>
      </div>
  );
}

export default App;
