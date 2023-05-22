import { Text,Button, Box, HStack, VStack, Grid, GridItem } from "@chakra-ui/react";
import { Children } from "react";
import{AiFillApple,AiFillHome} from "react-icons/ai"
import{ImProfile} from "react-icons/im"
import{IoIosContact} from "react-icons/io"
import { Link } from "react-router-dom";

export default function Layout({children}) {
  return (
    <>
      <Box 
        w="full" 
        display="flex" justifyContent="center"
        >
        <VStack w="sm">
          {/*헤더 */}
          <Box 
            display="flex" justifyContent="center" alignItems="center"
            position="fixed" top="0"
            w="inherit" h="120px" 
            bg="#222" 
            zIndex="9"
            >
            <AiFillApple size={32} color="#eee"/>
          </Box>

          {/*본문*/}
          {children}

          {/*tail*/}
          <Box 
            w="inherit" h="120px" 
            bg="#222" 
            position="fixed" bottom={0}
            >
            <HStack 
              h="inherit" 
              justifyContent="space-around" 
              alignItems="center"
              >
              <Link to="/">
                <VStack w="full" color="#eee">
                  <AiFillHome/>
                  <Text>홈</Text>
                </VStack>
              </Link>

              <Link to="/profile">
                <VStack w="full" color="#eee">
                  <ImProfile/>
                  <Text>프로필</Text>
                </VStack>
              </Link>

              <Link to="/contact">
                <VStack w="full" color="#eee">
                  <IoIosContact/>
                  <Text>연락처</Text>
                </VStack>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Box>    
    </>
  );
}

