import React, { useState } from 'react'

import axios from 'axios';

export const PostCreate = () => {
    const [title, setTitle] = useState("");
    const onSubmite = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        });
        setTitle('');
    }
  return (
    <div>
        <form onSubmit={onSubmite}>
            <div className='form-group'>
                <label>Title</label>
                <input
                    type='text'
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    className='form-control'/>
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}
