"use client";

import {React,useState} from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box,Text,HStack,Input,Button,List,ListItem,Checkbox } from '@chakra-ui/react';
import Todolist from '@/components/Todolist';

export default function Work() {
    return (
        <ChakraProvider>
            <Box maxW="md" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="lg">
                <Text fontSize='4xl'>仕事</Text>
                <Todolist />
            </Box>
        </ChakraProvider>
    );
}
