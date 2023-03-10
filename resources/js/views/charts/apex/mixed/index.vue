<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "../../../../../app.config";
import PageHeader from "@/components/page-header";

import {lineAreaChart, lineColumnAreaChart, mixedLineChart, yAxisChart,} from "./data";

/**
 * Mixed chart component
 */
export default {
    page: {
        title: "Mixed Charts",
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
            mixedLineChart: mixedLineChart,
            yAxisChart: yAxisChart,
            lineAreaChart: lineAreaChart,
            lineColumnAreaChart: lineColumnAreaChart,
            title: "Mixed Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Mixed Charts",
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
                        <b-card-title>Line & Column Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="mixedLineChart.chartOptions" :series="mixedLineChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Multiple Y-Axis Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="yAxisChart.chartOptions" :series="yAxisChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
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
                        <b-card-title>Line & Area Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="lineAreaChart.chartOptions" :series="lineAreaChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Line, Column & Area Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="lineColumnAreaChart.chartOptions" :series="lineColumnAreaChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
