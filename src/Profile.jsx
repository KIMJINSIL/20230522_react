import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";

export default function Profile() {
    return (
    <Layout>
        <VStack as="form" w="full" minH="100vh" py="140px" px="4" spacing="8" bg="#eee">
            <VStack spacing="6">
                <Avatar size="xl" bg="#fff" name='김진실' src="https://cdn.pixabay.com/photo/2017/06/21/20/51/thanksgiving-2428514_640.jpg" />
                <VStack spacing="0">
                    <Text fontSize="20" fontWeight="600">김진실</Text>
                    <Text fontSize="14">거룩한 꿈쟁이</Text>
                </VStack>
                <HStack w="80%" spacing="6" textAlign="center">
                    <Box border="1px" rounded="xl" px="20px" py="1" w="140px"color="#858">Contact</Box>
                    <Box border="1px" rounded="xl" px="20px" py="1" w="140px"color="#858">Follow</Box>
                </HStack>
            </VStack>
        </VStack>
    </Layout>
    )
}