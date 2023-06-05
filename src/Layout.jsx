import { Text, Box, HStack, VStack} from "@chakra-ui/react";
// import { Children } from "react";
import{AiFillApple, AiFillHome, AiOutlineArrowLeft} from "react-icons/ai"
import{ImProfile} from "react-icons/im"
import{IoIosContact} from "react-icons/io"
import { Link, useLocation, useNavigate } from "react-router-dom";

const GNB = [
  {title: "홈", href: "/", icon: AiFillHome},
  {title: "프로필", href: "/profile", icon: ImProfile},
  {title: "연락처", href: "/contact", icon: IoIosContact}
]

export default function Layout({children, canGoBack, title}) {
  
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  const handleClick = () => {
    navigate(-1)
  }

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
            {
              canGoBack 
              ? 
              (<Box
                position="absolute" left="20px" cursor="pointer" onClick={handleClick}>
                <AiOutlineArrowLeft color="#fff" size="20px" />
              </Box>) 
              : 
              null
            }
            {
              canGoBack ? (<Text color="#fff" >{title}</Text>) : (<AiFillApple size={32} color="#eee"/>)
            }
          </Box>

          {/*본문*/}
          {children}

          {/*tail*/}
          {
            canGoBack 
            ? 
            null 
            : 
            (<Box 
              w="inherit" h="120px" 
              bg="#222" 
              position="fixed" bottom={0}
              >
              <HStack 
                h="inherit" 
                justifyContent="space-around" 
                alignItems="center"
                >
                {GNB.map((item) => (
                  <Box w="full">
                  <Link to={item.href}>
                    <VStack w="full" color="#eee">
                      <item.icon color={location.pathname === item.href ? "#eeeeaa" : "white"}/>
                      <Text color={location.pathname === item.href ? "#eeeeaa" : "white"}>{item.title}</Text>
                    </VStack>
                  </Link>
                  </Box>
                ))}
                
  
                
              </HStack>
            </Box>)
          }
          
        </VStack>
      </Box>    
    </>
  );
}

