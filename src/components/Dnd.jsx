import React, { useState, useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AppContext from '../context/AppContext';
import { FaArrowsAlt } from 'react-icons/fa';
import '@styles/DndWords.scss';

const Dnd = () => {
    const { alphabet } = useContext(AppContext);
	const { def } = alphabet;

    let listWords = [];
    let definitions = [...def];
    definitions.splice(0,4).forEach((v,k) => {
        listWords.push({
            id: (k+1).toString(),
            word: v.word,
            definition: v.definition
        })
    });
    const [words, setWords] = useState(listWords);

    const reorder = (list, startIndex, endIndex) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };
    
    return (
        <DragDropContext
            onDragEnd={(result) => {
                const { source, destination } = result;
                if (!destination) {
                    return;
                }
                if (
                    source.index === destination.index &&
                    source.droppableId === destination.droppableId
                ) {
                    return;
                }

                setWords((prevTasks) =>
                    reorder(prevTasks, source.index, destination.index)
                );
            }}
        >
            <div className="dnd-words">
                <Droppable droppableId="words">
                    {(droppableProvided) => (
                        <div
                            {...droppableProvided.droppableProps}
                            ref={droppableProvided.innerRef}
                            className="words-container"
                        >
                            <div className='words-column-even'>
                                {words && words.map((task, index) => {
                                    return index % 2 == 0 && 
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(draggableProvided) => (
                                            <div
                                                {...draggableProvided.draggableProps}
                                                ref={draggableProvided.innerRef}
                                                {...draggableProvided.dragHandleProps}
                                                className="word-container"
                                            >
                                                <div className='word-title'>
                                                    {task.word}
                                                    <div className='word-icon'><FaArrowsAlt /></div>
                                                </div>
                                                <div className='word-definition'>
                                                    {task.definition}&nbsp;&nbsp;
                                                    <button>Ver todo</button>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                })}
                            </div>

                            <div className='words-column-odd'>
                                {words && words.map((task, index) => {
                                    return index % 2 != 0 && 
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(draggableProvided) => (
                                            <div
                                                {...draggableProvided.draggableProps}
                                                ref={draggableProvided.innerRef}
                                                {...draggableProvided.dragHandleProps}
                                                className="word-container"
                                            >
                                                <div className='word-title'>
                                                    {task.word}
                                                    <div className='word-icon'><FaArrowsAlt /></div>
                                                </div>
                                                <div className='word-definition'>
                                                    {task.definition}&nbsp;&nbsp;
                                                    <button>Ver todo</button>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                })}
                            </div>
                            {droppableProvided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    )
}

export default Dnd;