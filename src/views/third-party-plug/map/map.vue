<template>
  <div class="map-container">
    <a-input
      class="search-input"
      v-model="addressKeyWord"
      placeholder="请输入地名关键词"
    ></a-input>
    <baidu-map
      ref="map"
      class="baidu-map-view"
      :center="center"
      :zoom="zoom"
      @ready="onHandler"
      :scroll-wheel-zoom="true"
    >
      <!-- 地图;类型 -->
      <bm-map-type
        :map-types="['BMAP_HYBRID_MAP', 'BMAP_NORMAL_MAP']"
        anchor="BMAP_ANCHOR_TOP_RIGHT"
      ></bm-map-type>

      <!-- 城市 搜索 列表 -->
      <bm-city-list
        anchor="BMAP_ANCHOR_TOP_RIGHT"
        :offset="{ width: 100, height: 10 }"
      ></bm-city-list>

      <!-- 搜索 -->
      <bm-local-search
        :keyword="addressKeyWord"
        :panel="false"
        :auto-viewport="true"
      ></bm-local-search>

      <!-- 定位 -->
      <bm-geolocation
        anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
        :showAddressBar="true"
        :autoLocation="true"
      ></bm-geolocation>

      <!-- 标记 点 -->
      <bm-marker
        :position="postionMap"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      >
      </bm-marker>

      <!-- 距离 -->
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>

      <!-- 公交路线规划 -->
      <bm-transit
        :start="addressKeyWord"
        end="莼湖"
        :auto-viewport="true"
        location="宁波"
      ></bm-transit>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: "Map",
  data() {
    return {
      addressKeyWord: "",
      center: {
        lng: 0,
        lat: 0,
      },
      zoom: 3,
      postionMap: {
        lng: 121.470864,
        lat: 29.633718,
      },
    };
  },
  methods: {
    onHandler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 121.470864;
      this.center.lat = 29.633718;
      this.zoom = 15;
    },
  },
};
</script>

<style lang="less">
.search-input {
  margin: 10px 0;
  box-shadow: 0 0 13px rgba(0, 0, 0, 0.2);
}

.baidu-map-view {
  width: 100%;
  height: 300px;
}
</style>
