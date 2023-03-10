<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "../../../../../app.config";
import PageHeader from "@/components/page-header";

import {basicScatterChart, dateTimeScatterChart, scatterImagesChart,} from "./data";

/**
 * Scatter chart component
 */
export default {
    page: {
        title: "Scatter Charts",
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
            basicScatterChart: basicScatterChart,
            dateTimeScatterChart: dateTimeScatterChart,
            scatterImagesChart: scatterImagesChart,
            title: "Scatter Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Scatter Charts",
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
                        <b-card-title>Basic Scatter Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="basicScatterChart.chartOptions" :series="basicScatterChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Scatter - Datetime Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="dateTimeScatterChart.chartOptions" :series="dateTimeScatterChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Scatter Images Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="scatterImagesChart.chartOptions" :series="scatterImagesChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
