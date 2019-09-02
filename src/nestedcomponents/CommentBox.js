import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';



class CommentBox extends React.Component {
    render() {
        return (
            <div>
                <div>Hello, I am the comment box component</div>
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        )
    }
};

export default CommentBox;