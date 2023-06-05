import { Button, Input, Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";
import { useState } from "react";

export default function Contact(){
    const [name, setName] = useState("")
    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
    return (
    <Layout>
        <VStack as="form" w="full" py="140px" alignItems="flex-start" px="4" spacing="8" bg="#eee">
            <Text fontWeight="700" fontSize="20">무료상담신청</Text>
            <VStack w="full" alignItems="flex-start">
                <Text fontWeight="600">이름</Text>
                <Input 
                    onChange={handleChange} 
                    value={name}
                    placeholder="이름을 입력해 주세요" border="2px solid rgba(0,0,0,0.1)"></Input>
            </VStack>
            <VStack w="full" alignItems="flex-start">
                <Text fontWeight="600">연락처</Text>
                <Input placeholder="연락처를 입력해 주세요" border="2px solid rgba(0,0,0,0.1)"></Input>
            </VStack>
            <VStack w="full" alignItems="flex-start">
                <Text fontWeight="600">이메일</Text>
                <Input placeholder="이메일을 입력해 주세요" border="2px solid rgba(0,0,0,0.1)"></Input>
            </VStack>
            <RadioGroup>
            <Stack direction='row'>
                <Radio value='1'>남성</Radio>
                <Radio value='2'>여성</Radio>
            </Stack>
            </RadioGroup>
            <Button colorScheme='blue'>전송하기</Button>
        </VStack>
    </Layout>
    )
}