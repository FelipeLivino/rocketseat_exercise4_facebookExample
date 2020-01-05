import React, {Component} from 'react';

import Header from './Header';
import PostList from './PostList';

class FacebookMain extends Component{
    render(){
        return(
            <>
            <Header/>
            <PostList/>
            </>
        );
    }
}

export default FacebookMain;