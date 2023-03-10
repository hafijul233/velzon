<script>
import {LCircleMarker, LIcon, LMap, LMarker, LTileLayer} from "@vue-leaflet/vue-leaflet";
import {latLng} from "leaflet";

export default {
    name: "Icon",
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
        LCircleMarker,
    },
    data() {
        return {
            zoom: 10,
            center: latLng(47.41322, -1.219482),
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            staticAnchor: [16, 37],
            circle: {
                center: [47.41322, -1.0482],
                radius: 6,
                color: "red",
            },
        };
    },
};
</script>

<template>
    <l-map :center="center" :zoom="zoom" style="height: 400px; width: 100%">
        <l-tile-layer :attribution="attribution" :url="url"/>
        <l-circle-marker
            :color="circle.color"
            :lat-lng="circle.center"
            :radius="circle.radius"
        />
        <l-marker :lat-lng="circle.center"></l-marker>
        <l-marker :lat-lng="[47.41322, -1.189482]">
            <l-icon :icon-anchor="staticAnchor">
                <img height="25" src="@/assets/images/logo-dark.png"/>
                <img src="@/assets/images/leaflet/marker-icon.png"/>
            </l-icon>
        </l-marker>
    </l-map>
</template>

