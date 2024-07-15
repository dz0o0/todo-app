"use client";

import React from 'react';
import { Button,IconButton,Box,useDisclosure } from '@chakra-ui/react'
import { ArrowLeftIcon,ArrowRightIcon } from '@chakra-ui/icons'

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <IconButton
        icon={isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        onClick={isOpen ? onClose : onOpen}
      />
      <Box
        display={isOpen ? 'block' : 'none'}
        position="fixed"
        top="0"
        left="0"
        width="200px"
        height="100%"
        bg="gray.200">
          <IconButton
            mt="10px"
            ml="140px"
            icon={isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />}
            onClick={isOpen ? onClose : onOpen}
          />
      </Box>
    </div>
  )
}

export default Sidebar;