<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "../../../../../app.config";
import PageHeader from "@/components/page-header";

import {basicHeatmapChat, colorHeatmapChart, multipleSeriesHeatmapChart, shadesHeatmapChart,} from "./data";

/**
 * Heatmap chart component
 */
export default {
    page: {
        title: "Heatmap Charts",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        Layout, PageHeader
    },
    data() {
        return {
            multipleSeriesHeatmapChart: multipleSeriesHeatmapChart,
            basicHeatmapChat: basicHeatmapChat,
            colorHeatmapChart: colorHeatmapChart,
            shadesHeatmapChart: shadesHeatmapChart,
            title: "Heatmap Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Heatmap Charts",
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
                        <b-card-title>Basic Heatmap Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="basicHeatmapChat.chartOptions" :series="basicHeatmapChat.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>

                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Heatmap - Multiple Series</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="multipleSeriesHeatmapChart.chartOptions" :series="multipleSeriesHeatmapChart.series" class="apex-charts"
                                   dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Heatmap Color Range</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="colorHeatmapChart.chartOptions" :series="colorHeatmapChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Heatmap - Range Without Shades</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="shadesHeatmapChart.chartOptions" :series="shadesHeatmapChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
