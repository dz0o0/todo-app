"use client";

import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HStack, Input, Button, List, ListItem, Checkbox } from '@chakra-ui/react';

const Todolist = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleAddTask = () => {
        if (taskInput.trim() !== '') {
            setTasks([...tasks, { text: taskInput, completed: false }]);
        }
        setTaskInput('');
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
        setTasks(newTasks);
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
                {tasks.map((task, index) => (
                    <ListItem key={index}>
                        <HStack>
                            <Checkbox
                                isChecked={task.completed}
                                onChange={() => handleDeleteTask(index)}
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
