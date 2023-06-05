import { Box, Image, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";
import KakaoMap from "./KakaoMap";

export default function Detail(){
    return (
        <>
        <Layout canGoBack title="디테일 페이지">
            <VStack py="110" bg="#222" w="full" spacing="8">
                <Box>
                    <Image src="https://cdn.pixabay.com/photo/2017/06/21/20/51/thanksgiving-2428514_640.jpg"/>
                </Box>
                <VStack w="full" alignItems="flex-start" px="4" spacing="1">
                    <Text color="#fff" fontSize="20" fontWeight="700">대구 스파벨리</Text>
                    <Text color="#fff">대구 최고의 여름 테마파크</Text>
                </VStack>
                <Box w="95%" h="2px" bg="#777" />
                <VStack w="full" alignItems="flex-start" px="4" spacing="1">
                    <Text color="#fff" fontWeight="600">운영시간</Text>
                    <Text color="#fff" fontSize="14">10:00 ~ 17:00</Text>
                </VStack>
                <VStack w="full" alignItems="flex-start" px="4" spacing="1">
                    <Text color="#fff" fontWeight="600">입장인원</Text>
                    <Text color="#fff" fontSize="14">120명</Text>
                </VStack>
                <VStack w="full" alignItems="flex-start" px="4" spacing="1">
                    <Text color="#fff" fontWeight="600">이용요금</Text>
                    <Text color="#fff" fontSize="14">20,000원</Text>
                </VStack>
                {/*카카오 지도*/}
                <KakaoMap/>
            </VStack>
        </Layout>
        </>
        )
}