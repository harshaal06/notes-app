import React, {useEffect, useState} from "react";
import axios from 'axios';
import './Home.css';

function Home() {
    const [notes, setNotes] = useState([]);

    const loadNotes = async () =>{
        const response = await axios.get('http://localhost:5000/notes');

        setNotes(response.data.data);
    }

    useEffect(()=>{
        loadNotes();
    }, []);
    
    return (
    <div>
        <h1>Home</h1>
        {
            notes.map((note, index) => {
                return(
                    <div>
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                        <span>{note.category}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Home