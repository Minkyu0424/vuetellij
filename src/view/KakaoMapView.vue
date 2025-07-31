<template>
  <h1>지도</h1>
  <div id="map" ref="mapContainer" style="width:500px;height:400px;"></div>

</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";

const mapContainer = ref(null);
const loadMap = () => {
  const script = document.createElement('script');
  script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_API_KEY}&autoload=false`;
  document.head.appendChild(script);

  script.onload = () => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      }
      const mapInstance = new window.kakao.maps.Map(mapContainer.value, options);
    })
  }
}

onMounted(()=> loadMap())
</script>
