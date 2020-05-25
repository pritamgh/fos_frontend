import React from 'react';
import axios from 'axios';


class FileList extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            fileList: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8000/folder/file/file-list/", {
            params: {
                user_id: 2,
                folder_id: 1,
                page: 1,
                limit: 2
            }
        })
          .then(result => {
            this.setState({ fileList: result.data.files });
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.fileList.map(file=> 
                        <a href={ file.url }>
                            { file.name }
                        </a>
                    )
                }
            </div>
        )
    }
}

export default FileList