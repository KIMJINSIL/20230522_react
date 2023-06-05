import { Box } from "@chakra-ui/react";
import {useEffect} from "react"

export default function KakaoMap(){
    useEffect(()=>{
        const mapContainer = document.getElementById('map')
        const mapOption = { 
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption); 
        
        // 마커가 표시될 위치입니다 
        const markerPosition  = new window.kakao.maps.LatLng(33.450701, 126.570667); 
        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
            position: markerPosition
        });
        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        // 마커가 드래그 가능하도록 설정합니다 
        marker.setDraggable(true);

        
    }, [])
    return <Box as="div" id="map" w="full" h="300px"></Box>
}