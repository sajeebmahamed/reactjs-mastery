import React from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const {id} = useParams()
    return (
        <div>
            <h1>Hello {id}</h1>
        </div>
    );
};

export default Comments;