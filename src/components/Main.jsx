import React, { useContext } from 'react'
import { Note } from './Note'
import { noteContext } from '../Store/store'

export const Main = () => {
    const {notes} = useContext(noteContext);

    return (
        <div className="main bg-yellow-50 pt-10 pb-20">
            <div className="container grid-art">
                {notes.map(item=> <Note key={item.id} item={item}/>)}  
            </div>
        </div>
    )
}
