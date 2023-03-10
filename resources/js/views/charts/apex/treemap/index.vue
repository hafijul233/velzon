<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "../../../../../app.config";
import PageHeader from "@/components/page-header";

import {colorRangeChart, distributedChart, multiSeriesChart, treemapChart,} from "./data";

/**
 * Treemap chart
 */
export default {
    page: {
        title: "Treemap Charts",
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
            treemapChart: treemapChart,
            multiSeriesChart: multiSeriesChart,
            distributedChart: distributedChart,
            colorRangeChart: colorRangeChart,
            title: "Treemaps Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Treemaps Charts",
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
                        <b-card-title>Basic Treemap Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="treemapChart.chartOptions" :series="treemapChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Multi-Dimensional Treemap Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="multiSeriesChart.chartOptions" :series="multiSeriesChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>
                            Distributed Treemap Chart (Different Color for each Cell)
                        </b-card-title>

                    </b-card-header>

                    <b-card-body>
                        <apexchart :options="distributedChart.chartOptions" :series="distributedChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Treemap Chart with Color Ranges</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="colorRangeChart.chartOptions" :series="colorRangeChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
