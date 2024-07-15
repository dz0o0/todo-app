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
    </div>
  )
}

export default Sidebar;