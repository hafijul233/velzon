<script>
import Layout from "../../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../../app.config";

import {
    basicLineChart,
    brushAreaChart,
    brushLineChart,
    dashedLineChart,
    gradientLineChart,
    lineAnnotation,
    lineDatalabelChart,
    missingDataChart,
    realtimeLineChart,
    steplineChart,
    syncingAreaChart,
    zoomableChart,
} from "./data";

/**
 * Line chart component
 */
export default {
    page: {
        title: "Line Charts",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    data() {
        return {
            basicLineChart: basicLineChart,
            zoomableChart: zoomableChart,
            lineDatalabelChart: lineDatalabelChart,
            lineAnnotation: lineAnnotation,
            syncingAreaChart: syncingAreaChart,
            brushLineChart: brushLineChart,
            brushAreaChart: brushAreaChart,
            steplineChart: steplineChart,
            gradientLineChart: gradientLineChart,
            realtimeLineChart: realtimeLineChart,
            dashedLineChart: dashedLineChart,
            missingDataChart: missingDataChart,
            title: "Line Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Line Charts",
                    active: true,
                },
            ],

        };
    },
    components: {
        Layout,
        PageHeader,
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Basic Line Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="basicLineChart.chartOptions" :series="basicLineChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Zoomable Timeseries</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="zoomableChart.chartOptions" :series="zoomableChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Line with Data Labels</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="lineDatalabelChart.chartOptions" :series="lineDatalabelChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Dashed Line</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="dashedLineChart.chartOptions" :series="dashedLineChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Line with Annotations</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="lineAnnotation.chartOptions" :series="lineAnnotation.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Brush Charts</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <div>
                            <apexchart :options="brushLineChart.chartOptions" :series="brushLineChart.series" class="apex-charts" dir="ltr"
                                       height="230"></apexchart>

                            <apexchart :options="brushAreaChart.chartOptions" :series="brushAreaChart.series" class="apex-charts" dir="ltr"
                                       height="130"></apexchart>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Stepline Charts</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="steplineChart.chartOptions" :series="steplineChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Gradient Charts</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="gradientLineChart.chartOptions" :series="gradientLineChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Missing Data/ Null Value Charts</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="missingDataChart.chartOptions" :series="missingDataChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>

        </b-row>
    </Layout>
</template>
