<script>
import {GoogleMap, Marker, Polygon} from "vue3-google-map";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

/**
 * Google-map component
 */
export default {
    page: {
        title: "Google Map",
        meta: [{name: "description", content: appConfig.description}],
    },
    components: {Layout, PageHeader, GoogleMap, Marker, Polygon},
    data() {
        return {
            title: "Google Maps",
            items: [
                {
                    text: "Maps",
                    href: "/",
                },
                {
                    text: "Google Maps",
                    active: true,
                },
            ],
            markers: [
                {
                    position: {lat: 10.0, lng: 10.0},
                },
                {
                    position: {lat: 15.0, lng: 13.0},
                },
            ],
            pov: null,
            pano: null,
            edited: null,
            paths: [
                [
                    {lat: 1.38, lng: 103.8},
                    {lat: 1.38, lng: 103.81},
                    {lat: 1.39, lng: 103.81},
                    {lat: 1.39, lng: 103.8},
                ],
                [
                    {lat: 1.382, lng: 103.802},
                    {lat: 1.382, lng: 103.808},
                    {lat: 1.388, lng: 103.808},
                    {lat: 1.388, lng: 103.802},
                ],
            ],
            scope: "usa",
            geographyConfig: {
                highlightBorderColor: "#bada55",
                highlightBorderWidth: 3,
            },
            fills: {
                Republican: "#CC4731",
                Democrat: "#306596",
                "Heavy Democrat": "#667FAF",
                "Light Democrat": "#A9C0DE",
                "Heavy Republican": "#CA5E5B",
                "Light Republican": "#EAA9A8",
                defaultFill: "#EDDC4E",
            },
            data: {
                AZ: {
                    fillKey: "Republican",
                    electoralVotes: 5,
                },
                CO: {
                    fillKey: "Light Democrat",
                    electoralVotes: 5,
                },
                DE: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                FL: {
                    fillKey: "UNDECIDED",
                    electoralVotes: 29,
                },
                GA: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                HI: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                ID: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                IL: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                IN: {
                    fillKey: "Republican",
                    electoralVotes: 11,
                },
                IA: {
                    fillKey: "Light Democrat",
                    electoralVotes: 11,
                },
                KS: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                KY: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                LA: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                MD: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                ME: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                MA: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                MN: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                MI: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                MS: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                MO: {
                    fillKey: "Republican",
                    electoralVotes: 13,
                },
                MT: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                NC: {
                    fillKey: "Light Republican",
                    electoralVotes: 32,
                },
                NE: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                NV: {
                    fillKey: "Heavy Democrat",
                    electoralVotes: 32,
                },
                NH: {
                    fillKey: "Light Democrat",
                    electoralVotes: 32,
                },
                NJ: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                NY: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                ND: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                NM: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                OH: {
                    fillKey: "UNDECIDED",
                    electoralVotes: 32,
                },
                OK: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                OR: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                PA: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                RI: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                SC: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                SD: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                TN: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                TX: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                UT: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                WI: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                VA: {
                    fillKey: "Light Democrat",
                    electoralVotes: 32,
                },
                VT: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                WA: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                WV: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                WY: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                CA: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                CT: {
                    fillKey: "Democrat",
                    electoralVotes: 32,
                },
                AK: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                AR: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
                AL: {
                    fillKey: "Republican",
                    electoralVotes: 32,
                },
            },
            popupData: "",
        };
    },
    methods: {
        /**
         * street view data update
         */
        updatePov(pov) {
            this.pov = pov;
        },
        /**
         * street view data update
         */
        updatePano(pano) {
            this.pano = pano;
        },
        /**
         * polygon editing
         */
        updateEdited(mvcArray) {
            let paths = [];
            for (let i = 0; i < mvcArray.getLength(); i++) {
                let path = [];
                for (let j = 0; j < mvcArray.getAt(i).getLength(); j++) {
                    let point = mvcArray.getAt(i).getAt(j);
                    path.push({lat: point.lat(), lng: point.lng()});
                }
                paths.push(path);
            }
            this.edited = paths;
        },

        popupTemplate({geography, datum}) {
            this.popupData = `${geography.properties.name}\nElectoral Votes: ${datum.electoralVotes}`;
        },
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-body>
                        <b-card-title>Basic</b-card-title>
                        <p class="card-title-dsec">Example of google maps.</p>
                        <GoogleMap :center="{ lat: 2, lng: 2 }" :zoom="5"
                                   api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
                                   style="height: 300px"></GoogleMap>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-body>
                        <b-card-title>Markers</b-card-title>
                        <p class="card-title-dsec">Example of google maps.</p>
                        <GoogleMap :center="{ lat: 11, lng: 12 }" :zoom="3"
                                   api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
                                   style="height: 300px">
                            <Marker v-for="(m, index) in markers" :key="index" :clickable="true" :draggable="true"
                                    :position="m.position" @click="center = m.position"></Marker>
                        </GoogleMap>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-body>
                        <b-card-title>Polygon Editing</b-card-title>
                        <p class="card-title-dsec">Example of google maps.</p>
                        <GoogleMap :center="{ lat: 1.38, lng: 103.8 }" :zoom="12"
                                   api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
                                   style="height: 300px">
                            <Polygon :editable="true" :paths="paths" @paths_changed="updateEdited($event)"></Polygon>
                        </GoogleMap>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-body>
                        <b-card-title>Map type</b-card-title>
                        <p class="card-title-dsec">Example of google maps.</p>
                        <GoogleMap :center="{ lat: 4, lng: 4 }" :zoom="3"
                                   api-key="AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE"
                                   map-type-id="terrain" style="height: 300px"></GoogleMap>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
