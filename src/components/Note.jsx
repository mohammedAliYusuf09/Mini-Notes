import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { noteContext } from '../Store/store';

export const Note = ({item}) => {

    const {deleteNote} = useContext(noteContext);


    const newBody = ()=>{
        if(item.body.length > 100){
            const smole = item.body.substring(0, 100) + '...';
            return smole;
        }else {
            return item.body;
        }
    }
    const edit = newBody();

    const handelDelete = ()=> {
        deleteNote(item.id);
    }


    return (
        <div className="note-box h-52 w-52 bg-white p-5 rounded-md relative border shadow-emerald-500">
            <p className='note-body pt-4'>{edit}</p>
            <p className='date absolute bottom-1 right-2'>{item.date}</p>
            <button className='absolute top-0 right-0 bg-red-500 p-2 text-white rounded-md'onClick={handelDelete}><MdDelete /></button>
        </div>
    )
}
