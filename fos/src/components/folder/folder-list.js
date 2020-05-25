import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'


class FolderList extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            folderList: [],
            redirect: false
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8000/folder/folder-list/", {
            params: {
                user_id: 2
            }
        })
          .then(result => {
            this.setState({ 
                folderList: result.data.folders 
            });
        })
    }

    // setRedirect = () => {
    //     this.setState({
    //         redirect: true
    //     })
    // }
    // renderRedirect = () => {
    //     if (this.state.redirect) {
    //         return <Redirect to='/target' />
    //     }
    // }

    render() {
        return (
            <div>
                {
                    this.state.folderList.map(
                        folder=> 
                            <li>
                                {/* {this.state.renderRedirect()}
                                <button onClick={this.setRedirect}>{ folder.name }</button> */}
                                { folder.name }
                            </li>
                    )
                }
            </div>
        )
    }
}

export default FolderList