<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "../../../../../app.config";
import PageHeader from "@/components/page-header";

import {
    barImagesChart,
    barMarkersChart,
    barNegativeChart,
    basicBarChart,
    customDatalabelsChart,
    groupedBarChart,
    patternedBarChart,
    reversedBarChart,
    stackedBar100Chart,
    stackedBarChart,
} from "./data";

/**
 * Bar charts component
 */
export default {
    page: {
        title: "Bar charts",
        meta: [
            {
                name: "description",
                content: appConfig.description
            },
        ],
    },
    data() {
        return {
            title: "Bar Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Bar Charts",
                    active: true,
                },
            ],
            basicBarChart: basicBarChart,
            customDatalabelsChart: customDatalabelsChart,
            stackedBarChart: stackedBarChart,
            stackedBar100Chart: stackedBar100Chart,
            barNegativeChart: barNegativeChart,
            barMarkersChart: barMarkersChart,
            reversedBarChart: reversedBarChart,
            patternedBarChart: patternedBarChart,
            groupedBarChart: groupedBarChart,
            barImagesChart: barImagesChart,
        };
    },
    components: {
        Layout,
        PageHeader
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
                        <b-card-title>Basic Bar Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="basicBarChart.chartOptions" :series="basicBarChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Custom DataLabels Bar</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="customDatalabelsChart.chartOptions" :series="customDatalabelsChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Stacked Bar Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="stackedBarChart.chartOptions" :series="stackedBarChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Stacked Bars 100</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="stackedBar100Chart.chartOptions" :series="stackedBar100Chart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Bar with Negative Values</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="barNegativeChart.chartOptions" :series="barNegativeChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Bar with Marker</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="barMarkersChart.chartOptions" :series="barMarkersChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Reversed Bar Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="reversedBarChart.chartOptions" :series="reversedBarChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Patterned Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="patternedBarChart.chartOptions" :series="patternedBarChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Grouped Bar Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="groupedBarChart.chartOptions" :series="groupedBarChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>

        </b-row>
    </Layout>
</template>
