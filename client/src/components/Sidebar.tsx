"use client";

import React, { useState } from 'react';
import { IconButton, Box, useDisclosure, Text, Collapse, VStack, Link } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
    const [showServices, setShowServices] = useState(false);

    const toggleServices = () => {
        setShowServices(!showServices);
    };

    return (
        <div>
            <IconButton
                mt="10px"
                icon={isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
                onClick={isOpen ? onClose : onOpen} aria-label={''}            />

            <Box
                display={isOpen ? 'block' : 'none'}
                position="fixed"
                top="0"
                left="0"
                width="200px"
                height="100%"
                bg="gray.200"
            >
                <Box display="flex" mt="10px" alignItems="center" w="100%">
                    <Text fontSize="xl" fontWeight="bold" ml="4">TodoList</Text>
                    <IconButton
                        ml="7"
                        icon={isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
                        onClick={isOpen ? onClose : onOpen} aria-label={''}                    />
                </Box>
                <VStack align="start" spacing="4" mt="4">
                    <Box
                        onClick={toggleServices}
                        _hover={{ textDecor: "none", bg: "gray.300" }}
                        p="4"
                        w="100%"
                        style={{ cursor: "pointer" }}
                    >
                        ジャンル
                    </Box>
                    <Collapse in={showServices} animateOpacity>
                        <VStack spacing="4" pl="5">
                            <Link href="/" _hover={{ textDecor: "none", bg: "gray.300" }} p="2" w="100%">
                            家事
                            </Link>
                            <Link href="/work" _hover={{ textDecor: "none", bg: "gray.300" }} p="2" w="100%">
                            仕事
                            </Link>
                            <Link href="/study" _hover={{ textDecor: "none", bg: "gray.300" }} p="2" w="100%">
                            勉強
                            </Link>
                        </VStack>
                    </Collapse>
                    <Link
                        href="/contact"
                        _hover={{ textDecor: "none", bg: "gray.300" }}
                        p="4"
                        w="100%"
                    >
                        お問い合わせ
                    </Link>
                </VStack>
            </Box>
        </div>
    );
}

export default Sidebar;
