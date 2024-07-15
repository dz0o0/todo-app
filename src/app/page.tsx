import Sidebar from '../components/Sidebar';
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Sidebar />
      </ChakraProvider>
    </>
  );
}
