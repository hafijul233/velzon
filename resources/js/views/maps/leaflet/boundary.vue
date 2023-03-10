<script>
import {latLng, latLngBounds} from "leaflet";
import {LMap, LMarker, LTileLayer} from "@vue-leaflet/vue-leaflet";

export default {
    name: "SetBounds",
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    data() {
        return {
            zoom: 6,
            center: latLng(47.41322, -1.219482),
            bounds: latLngBounds([
                [40.70081290280357, -74.26963806152345],
                [40.82991732677597, -74.08716201782228]
            ]),
            maxBounds: latLngBounds([
                [40.70081290280357, -74.26963806152345],
                [40.82991732677597, -74.08716201782228]
            ]),
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            marker: latLng(47.41322, -1.219482)
        };
    }
};
</script>

<template>
    <div>
        <l-map :bounds="bounds" :center="center" :max-bounds="maxBounds" :zoom="zoom"
               style="height: 400px; width: 100%">
            <l-tile-layer :attribution="attribution" :url="url"/>
            <l-marker :lat-lng="marker"/>
        </l-map>
    </div>
</template>
