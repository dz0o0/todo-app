"use client";

import {React,useState} from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box,Text,HStack,Input,Button,List,ListItem,Checkbox } from '@chakra-ui/react';

export default function Work() {
    const [task, setTask] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleAddTask = () => {
        if (taskInput.trim() !== '') {
            setTask([...task, { text: taskInput, completed: false }]);
            setTaskInput('');
        }
    };

    const handleToggleTask = (index) => {
        const newTask = [...task];
        newTask[index].completed = !newTask[index].completed;
        setTask(newTask);
    };

    return (
        <ChakraProvider>
            <Box maxW="md" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="lg">
                <Text fontSize='4xl'>仕事</Text>
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
                            onChange={() => handleToggleTask(index)}
                        >
                            {task.text}
                        </Checkbox>
                        </HStack>
                    </ListItem>
                    ))}
                </List>
            </Box>
        </ChakraProvider>
    );
}
