"use client";

import {React,useState} from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HStack,Input,Button,List,ListItem,Checkbox } from '@chakra-ui/react';

const Todolist = () => {
    const [task, setTask] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleAddTask = () => {
        if (taskInput.trim() !== '') {
            setTask([...task, { text: taskInput, completed: false }]);
        }
        setTaskInput('');
    };

    const handleDeleteTask = () => {
        
    };

    return (
        <>
            <HStack>
                <Input
                    placeholder="新しいタスクを入力"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <Button onClick={handleAddTask} colorScheme="teal">追加</Button>
            </HStack>

            <List spacing={3} width="100%">
                {task.map((task, index) => (
                <ListItem key={index}>
                    <HStack>
                        <Checkbox
                            isChecked={task.completed}
                            onClick={handleDeleteTask()}
                        >
                            {task.text}
                        </Checkbox>
                    </HStack>
                </ListItem>
                ))}
            </List>
        </>
    );
}

export default Todolist;