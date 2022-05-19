import React from 'react';
import ReactDOM from 'react-dom';    
import CommentDetail from './CommentDetail';
import faker from '@faker-js/faker';
import ApprovalCard from './ApprovalCard';
import './style/App.css';

const App = () => {
    return (
    <div className='ui container comments'>
        <ApprovalCard>
            <CommentDetail author='Gloria' timeAgo="Today at 4:45 P.M." content="Nice blog post" avatar={faker.image.image()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author='Stella' timeAgo="Today at 3 P.M." content="I like the subject" avatar={faker.image.image()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author='Flavia' timeAgo="Today at 7 A.M." content="I like the writing" avatar={faker.image.image()}/>
        </ApprovalCard>
        
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));