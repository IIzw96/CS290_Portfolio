import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useHistory } from 'react-router';
import '../App.css';

function HomePage( {setExerciseToEdit} ) {

    const [exercises, setExercises] = useState([]);
    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            setExercises(exercises.filter(m => m._id !== _id));
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise");
    }

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    useEffect( () => {
        loadExercises();
    }, []);

    return (
        <>
            <h1>Exercise Tracker</h1>
            <ExerciseList exercises={exercises} onDelete={onDelete} onEdit={onEdit}> </ExerciseList>
            <Link to="/add-exercise"> Add Exercise </Link>
        </>
    );
}

export default HomePage;