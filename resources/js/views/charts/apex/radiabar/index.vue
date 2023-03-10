<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "../../../../../app.config";
import PageHeader from "@/components/page-header";

import {
    basicRadialBarChart,
    circleAngleChart,
    gradientRadialbarChart,
    multiRadialbarChart,
    semiRadialbarChart,
    strokedRadialbarChart,
} from "./data";

/**
 * Radaialbar chart component
 */
export default {
    page: {
        title: "Radialbar Charts",
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
            basicRadialBarChart: basicRadialBarChart,
            multiRadialbarChart: multiRadialbarChart,
            circleAngleChart: circleAngleChart,
            gradientRadialbarChart: gradientRadialbarChart,
            strokedRadialbarChart: strokedRadialbarChart,
            semiRadialbarChart: semiRadialbarChart,
            title: "Radialbar Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Radialbar Charts",
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
                        <b-card-title>Basic Radialbar Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="basicRadialBarChart.chartOptions" :series="basicRadialBarChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Multiple Radialbar</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <div id="multiple_radialbar" class="apex-charts" dir="ltr"></div>
                        <apexchart :options="multiRadialbarChart.chartOptions" :series="multiRadialbarChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Circle Chart - Custom Angle</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="circleAngleChart.chartOptions" :series="circleAngleChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Gradient Circle Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="gradientRadialbarChart.chartOptions" :series="gradientRadialbarChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row class="mb-4">
            <b-col lg="6">
                <b-card class="h-100 mb-xl-0" no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Stroked Circular Gauge</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="strokedRadialbarChart.chartOptions" :series="strokedRadialbarChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card class="h-100 mb-xl-0" no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Semi Circular Gauge</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="semiRadialbarChart.chartOptions" :series="semiRadialbarChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
