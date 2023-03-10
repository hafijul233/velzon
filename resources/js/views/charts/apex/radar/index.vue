<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "../../../../../app.config";
import PageHeader from "@/components/page-header";

import {basicRadarChart, polygonRadarChart, radarMultiseriesChart,} from "./data";

/**
 * Radar chart component
 */
export default {
    page: {
        title: "Radar Charts",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        Layout,
        PageHeader
    },
    data() {
        return {
            basicRadarChart: basicRadarChart,
            radarMultiseriesChart: radarMultiseriesChart,
            polygonRadarChart: polygonRadarChart,
            title: "Radar Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Radar Charts",
                    active: true,
                },
            ],
        };
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Basic Radar Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="basicRadarChart.chartOptions" :series="basicRadarChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Radar Chart - Multiple series</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="radarMultiseriesChart.chartOptions" :series="radarMultiseriesChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Radar Chart - Polygon Fill</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="polygonRadarChart.chartOptions" :series="polygonRadarChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
