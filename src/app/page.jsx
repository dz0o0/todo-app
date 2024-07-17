"use client";

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Box,Text } from '@chakra-ui/react';
import Todolist from '../components/Todolist';

export default function Home() {
    return (
        <ChakraProvider>
            <Box maxW="md" mx="auto" mt={8} p={4} borderWidth={1} borderRadius="lg">
                <Text fontSize='4xl'>家事</Text>
                <Todolist />
            </Box>
        </ChakraProvider>
    );
}
