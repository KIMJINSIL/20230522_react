import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const dataTour = [
    {text : "6월 이벤트", image : "https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_960_720.jpg"},
    {text : "7월 이벤트", image : "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_640.jpg"},
    {text : "8월 이벤트", image : "https://cdn.pixabay.com/photo/2020/02/16/20/29/nyc-4854718_640.jpg"},
  ];
  
  const dataCity = [
    {text : "뉴욕 둘러보기", image : "https://cdn.pixabay.com/photo/2019/12/23/17/15/sunset-4715004_640.jpg"},
    {text : "브루클린 둘러보기", image : "https://cdn.pixabay.com/photo/2016/05/14/18/24/bridge-1392285_640.jpg"},
    {text : "시카고 둘러보기", image : "https://cdn.pixabay.com/photo/2015/08/15/23/44/chicago-theatre-890350_640.jpg"},
    {text : "LA 둘러보기", image : "https://cdn.pixabay.com/photo/2013/06/04/17/08/hollywood-116225_640.jpg"},
  ]

export default function Home(){
    return (
    <Layout>
        <VStack 
            spacing="8" 
            w="inherit" 
            py="140px" px="4" 
            alignItems="flex-start"
            >
            {/*최신상품 컨테이너*/}
            <VStack w="full" alignItems="flex-start">
              <Text fontWeight="600" fontSize="24">
                최신상품
              </Text>
              <Grid 
                w="full" 
                gridTemplateColumns="repeat(2,1fr)"
                gridGap="2">
                  {dataCity.map((list,index)=>(
                      <GridItem 
                        key={index}
                        h="200px" 
                        border="1px" rounded="md" borderColor="gray.300" 
                        bgImage={`url(${list.image})`}
                        bgSize="cover"
                        bgPosition="center center"
                        position="relative"
                        overflow="hidden"
                        >
                        <Link to="/detail">
                          <Box 
                            position="absolute" top="0" left="0" 
                            w="full" h="full" 
                            bgGradient="linear(to-b, rgba(0,0,0,0.3), rgba(0,0,0,0.7))"
                          >
                              <Text 
                                color="white" 
                                w="full"
                                position="absolute" bottom="0" 
                                align="center" 
                                fontWeight="600" 
                                py="4"
                              >
                                {list.text}
                              </Text>
                          </Box>
                        </Link>
                      </GridItem>
                    ))
                  }
              </Grid>
            </VStack>

            {/*이벤트 컨테이너*/}
            <VStack w="full" alignItems="flex-start">
              <Text fontWeight="600" fontSize="24">
                이벤트
              </Text>
              <Grid w="full" gap="4">
                {dataTour.map((item, index)=>(
                    <GridItem 
                      key={index}
                      rounded="lg"
                      w="full"
                      h="120px"
                      bgImage={`url(${item.image})`}
                      bgSize="cover"
                      bgPosition="center center"
                      position="relative"
                      overflow="hidden"
                      >
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        w="full"
                        h="full"
                        bgGradient="linear(to-b, rgba(0,0,0,0.2),rgba(0,0,0,0.7))"
                        >
                        <Text 
                          position="absolute"
                          top="50%"
                          left="50%"
                          transform="translate(-50%, -50%)"
                          fontWeight="600"
                          fontSize="18"
                          color="white"
                          >
                          {item.text}
                        </Text>
                      </Box>                 
                    </GridItem>
                  ))
                }
                
              </Grid>
            </VStack>
        </VStack>
    </Layout>
    );
}