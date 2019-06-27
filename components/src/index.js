import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                date="Today at 4:00PM" 
                text="Very awesome post" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author={faker.name.firstName()} 
                date="Yesterday at 11:00AM" 
                text="Meh..." 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Mary" 
                date="May 26, 2019" 
                text="What am I doing here?" 
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);