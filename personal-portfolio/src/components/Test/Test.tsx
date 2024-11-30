import { useState } from "react";
import { Box } from "@mui/material";
import'./Test.css';

const Test = () => {
    const [visitedCells, setVisitedCells] = useState<number[][]>([]);
        
    const sample1 = [
        ['S', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 'E'],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],     
    ];

    const handleClick = (row: number, cell: number) => {
        console.log(row, cell);
        const newVisitedCells = [...visitedCells];
        console.log(newVisitedCells);
        if (newVisitedCells.find(visitedCell => visitedCell[0] === row && visitedCell[1] === cell)) {
            newVisitedCells.splice(newVisitedCells.findIndex(visitedCell => visitedCell[0] === row && visitedCell[1] === cell), 1);
            setVisitedCells(newVisitedCells);
        } else {
            newVisitedCells.push([row, cell]);
            setVisitedCells(newVisitedCells);
        }
    }

    const handleSubmit = () => {
        console.log(`Visited cells: 
        ${visitedCells.map(visitedCell => `(${visitedCell[0]}, ${visitedCell[1]})`)}`);                           
    }

    return (
        <Box className='test-container-5x5'>
            {sample1.map((row, i) => (
                <Box key={i} className='row'>
                    {row.map((cell, j) => {
                        if (cell === 1) {
                            return (
                                <img 
                                    key={j}
                                    className='cell wall'
                                    src={'https://cdn3.iconfinder.com/data/icons/phuzion/PNG/Apps/Firewall.png'} 
                                    alt='wall' 
                                />                                
                            );
                        } else if (cell === 'S') {
                            return (
                                <img 
                                    key={j}
                                    className='cell start'
                                    src={'https://cdn1.iconfinder.com/data/icons/construction-vector-icons-2/65/81-512.png'}
                                    alt='start' 
                                />                                
                            );
                        } else if (cell === 'E') {
                            return (
                                <img 
                                    key={j}
                                    className='cell end'
                                    src={'https://cdn0.iconfinder.com/data/icons/emergency-service-filledoutline/64/EXIT-exit_door-arrow-signal-signaling-512.png'}
                                    alt='end' 
                                />                                
                            );
                        } else {
                            return (
                                <div key={j} className='cell path' onClick={() => handleClick(i + 1, j + 1)}>
                                    {visitedCells.map((visitedCell, k) => {
                                        if (visitedCell[0] === i + 1 && visitedCell[1] === j + 1) {
                                            return (
                                                <img 
                                                    key={k}
                                                    className='cell visited'
                                                    src={'https://cdn2.iconfinder.com/data/icons/human-1-1/48/14-512.png'}
                                                    alt='visited'
                                                /> 
                                            );
                                        }
                                    })}                                    
                                </div>
                            );
                        }    
                    })}
                </Box>
            ))}

            <button onClick={handleSubmit} id='submit-game'
            >Submit</button>
        </Box>
    );
    }

export default Test;