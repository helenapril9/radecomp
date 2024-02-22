import React from 'react';
import '../Decomposition.css';

export default function NewsList(props) {
    return (
        <ul className='news-list'>{props.children(props.items)}</ul>
    )

}