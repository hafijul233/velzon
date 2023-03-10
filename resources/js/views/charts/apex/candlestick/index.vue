<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "../../../../../app.config";
import PageHeader from "@/components/page-header";

import {basicCandlestickChart, categoryXaxisChart, comboCandlestickBrushChart, comboCandlestickChart,} from "./data";

/**
 * Candlestick Charts component
 */
export default {
    page: {
        title: "Candlestick Charts",
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
            basicCandlestickChart: basicCandlestickChart,
            comboCandlestickBrushChart: comboCandlestickBrushChart,
            comboCandlestickChart: comboCandlestickChart,
            categoryXaxisChart: categoryXaxisChart,
            title: "Candlestick Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Candlestick Charts",
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
                    <b-card-header class="
              justify-content-between
              d-flex
              align-items-center
            ">
                        <b-card-title>Basic Candlestick Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="basicCandlestickChart.chartOptions" :series="basicCandlestickChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="
              justify-content-between
              d-flex
              align-items-center
            ">
                        <b-card-title>Candlestick Synced with Brush Chart (Combo)</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="comboCandlestickBrushChart.chartOptions" :series="comboCandlestickBrushChart.series" class="apex-charts"
                                   dir="ltr"
                                   height="200"></apexchart>
                        <apexchart :options="comboCandlestickChart.chartOptions" :series="comboCandlestickChart.series" class="apex-charts" dir="ltr"
                                   height="150"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="
              justify-content-between
              d-flex
              align-items-center
            ">
                        <b-card-title>Category X-Axis</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="categoryXaxisChart.chartOptions" :series="categoryXaxisChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
