import React, { useState } from "react";

function TodosthList() {
    const [todosths, setTodosths] = useState(
        [
            { id: 1, title: 'Learn React-I', completed: false, editing: false },
            { id: 2, title: 'Learn React-II', completed: false, editing: true },
            { id: 3, title: 'Learn React-III', completed: false, editing: false },
        ]
    )

    const [newTodosth, setNewTodosth] = useState({
        // id: Date.now(),
        title: 'Learn React Redux',
        completed: false,
        editing: false
    })

    const onAddTodosth = () => {
        // alert("Add todosth")
        // todosths.push(newTodosth)
        // console.log(todosths)
        const newTodosths = [...todosths, newTodosth]
        setTodosths(newTodosths)
    }

    const onNewTodosthChange = (event) => {
        const newTodosth = {
            ...newTodosth,
            id: Date.now(),
            title: event.target.value
        }
        setNewTodosth(newTodosth)
    }

    // const onDeleteTodosth = (todosth) => {
    //     const newTodosth = todosths.filter(t => t.id !== todosth.id)
    //     setTodosths(newTodosth)
    // }   // Check the following compressed version:
    const onDeleteTodosth = (todosth) => setTodosths(todosths.filter(t => t.id !== todosth.id))

    // const onEditTodosth = (todosth) => {
    //     const newTodosths = todosths.map(t => {
    //         if (t.id === todosth.id) {
    //             return {
    //                 ...t,
    //                 editing: !t.editing
    //             }
    //         } else {
    //             return t
    //         }
    //     })
    //     setTodosths(newTodosths)
    // }    // Check the following compressed version:
    const onEditTodosth = (todosth) => {
        setTodosths(todosths.map(t => t.id == todosth.id ? {...t, editing: !t.editing} : t))
    }

    // const onEditTodosthTitleChange = (todosth, event) => {
    //     const newTodosths = todosths.map(t => {
    //         if (t.id === todosth.id) {
    //             return {
    //                 ...t,
    //                 title: event.target.value
    //             }
    //         } else {
    //             return t
    //         }
    //     })
    //     setTodosths(newTodosths)
    // }   // Check the following compressed version:
    const onEditTodosthTitleChange = (todosth, event) => {
        setTodosths(todosths.map(t => t.id === todosth.id ? {...t, title: event.target.value} : t))
    }


    return (
        <div className="container-fluid">
            <h1>Todosth List</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <button 
                        onClick={ onAddTodosth }
                        className="btn btn-primary float-end">
                        Add
                    </button>
                    <input
                        onChange={ onNewTodosthChange }
                        // onChange={ onNewTodosthChange() } --> Caution: it will cause infinity loop
                        // onChange={ (event) => onNewTodosthChange(event) }  // --> A safe syntex for the previous satement.

                        type="text"
                        className="form-control w-75" />
                </li>
                {todosths.map(todosth => (
                    <li key={todosth.id} className='list-group-item'>

                        {/* Delete botton */}
                        <button
                            onClick = {() => onDeleteTodosth(todosth)}
                            className="btn btn-danger float-end">
                            Delete
                        </button>

                        {/* Edit botton */}
                        <button 
                            onClick = {() => onEditTodosth(todosth)}
                            className="btn btn-warning float-end me-2">
                            {todosth.editing ? "OK" : "Edit"}
                        </button>

                        {!todosth.editing &&
                            <span>{todosth.title}</span>
                        }

                        {todosth.editing &&
                            <input
                                onChange = {(event) => onEditTodosthTitleChange(todosth, event)} 
                                className="form-control w-50" type="text" value={todosth.title} />
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default TodosthList;