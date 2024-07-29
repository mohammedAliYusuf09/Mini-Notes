import { createContext, useReducer, useState } from "react";

const dataArray = [
    {
        id: 1,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
        date: "2024-07-01"
    },
    {
        id: 2,
        body: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit.",
        date: "2024-07-02"
    },
    {
        id: 3,
        body: "Nunc scelerisque viverra mauris in aliquam sem fringilla. Mauris a diam maecenas sed enim ut sem viverra aliquet. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Aliquam ut porttitor leo a diam sollicitudin.",
        date: "2024-07-03"
    },
    {
        id: 4,
        body: "Amet est placerat in egestas erat imperdiet. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Dictum sit amet justo donec enim diam vulputate ut pharetra. Non nisi est sit amet facilisis magna etiam tempor orci.",
        date: "2024-07-04"
    },
    {
        id: 5,
        body: "Nisl nisi scelerisque iaculis purus. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Elementum eu facilisis sed. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus.",
        date: "2024-07-05"
    },
    {
        id: 6,
        body: "Sed vulputate mi sit amet mauris commodo quis imperdiet. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor.",
        date: "2024-07-06"
    },
    {
        id: 7,
        body: "Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor.",
        date: "2024-07-07"
    },
    {
        id: 8,
        body: "Ut tristique et egestas quis ipsum suspendisse ultrices. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Dictum sit amet justo donec enim diam vulputate ut pharetra.",
        date: "2024-07-08"
    },
    {
        id: 9,
        body: "Ultrices sagittis orci a scelerisque purus semper eget duis. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus a. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.",
        date: "2024-07-09"
    },
    {
        id: 10,
        body: "Nunc sed augue lacus viverra vitae congue eu consequat ac. Egestas erat imperdiet augue egestas. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.",
        date: "2024-07-10"
    }
];

export const noteContext = createContext({
    notes: [],
})

const noteReducer =(current, action)=> {
    switch (action.type) {
        case "ADD_NOTE":
            return [
                ...current, action.payload]
            break;
        case "DELETE_NOTE":
            return current.filter(item=> item.id !== action.id)    
            break;    
        default:
            current;
    }
}

const Notesstroe = ({children})=> {
    const [notes, dispachNotelist] = useReducer(noteReducer, dataArray);
    const [layout, setLayout] = useState(true);

    const addNote = (id, noteText, newDate)=> {
        const addNoteAction = {
            type: "ADD_NOTE",
            payload: {
                id,
                body : noteText,
                date : newDate,
            }
        }
        dispachNotelist(addNoteAction);
    }

    const deleteNote = (id) => {
        const deleteAction = {
            type: "DELETE_NOTE",
            id,
        }
        dispachNotelist(deleteAction);
    }








    return <noteContext.Provider value={{notes, layout, setLayout, addNote, deleteNote}}>{children}</noteContext.Provider>
}

export default Notesstroe;