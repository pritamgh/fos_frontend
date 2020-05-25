import React from 'react';
import axios from 'axios';


class FolderCreate extends React.Component {

	state = {
		file: null,
		folder_id: null,
		user_id: null,
	}

	// On file select (from the pop up) 
    onFileChange = event => { 
        // Update the state 
        this.setState({ 
      		file: event.target.files[0],
      		folder_id: 1,
      		user_id: 2
      	}); 
     
    };

    // On file upload (click the upload button) 
    onFileUpload = () => { 
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
       	"file", 
        this.state.file, 
        this.state.file.name ,
      ); 
      formData.append(
      	"user_id", this.state.user_id
      );
      formData.append(
      	"folder_id", this.state.folder_id
      );
     
      // Details of the uploaded file 
      console.log(this.state.file); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("http://localhost:8000/folder/folder-create/", formData);
    };

	render() {
		return (
			<div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
		)
	}
}

export default FolderCreate