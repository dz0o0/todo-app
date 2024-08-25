"use client";

import React, { useState } from 'react';
import { HStack, Input, Button, List, ListItem, Checkbox } from '@chakra-ui/react';
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_TASKS = gql`
  query {
    tasks {
      id
      taskName
      completed
    }
  }
`;

const CREATE_TASK = gql`
  mutation($createTaskInput: CreateTaskInput!) {
    createTask(createTaskInput: $createTaskInput) {
      id
      taskName
      completed
    }
  }
`;

const REMOVE_TASK = gql`
  mutation($id: Int!) {
    removeTask(id: $id) {
      id
    }
  }
`;

const Todolist = () => {
    const [taskInput, setTaskInput] = useState('');
    const { loading, error, data } = useQuery(GET_TASKS);
    const [createTask] = useMutation(CREATE_TASK, {
        refetchQueries: [{ query: GET_TASKS }]
    });
    const [removeTask] = useMutation(REMOVE_TASK, {
        refetchQueries: [{ query: GET_TASKS }]
    });

    const handleAddTask = async () => {
        if (taskInput.trim() !== '') {
            await createTask({ variables: { createTaskInput: { exampleField: 1 /* ここをタスク名に合わせる必要があります */, taskName: taskInput } } });
        }
        setTaskInput('');
    };

    const handleDeleteTask = async (id: number) => {
        await removeTask({ variables: { id } });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

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
                {data.tasks.map((task: { id: number, taskName: string, completed: boolean }) => (
                    <ListItem key={task.id}>
                        <HStack>
                            <Checkbox
                                isChecked={task.completed}
                                onChange={() => handleDeleteTask(task.id)}
                            >
                                {task.taskName}
                            </Checkbox>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default Todolist;
