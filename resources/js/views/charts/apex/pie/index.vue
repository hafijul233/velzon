<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "../../../../../app.config";
import PageHeader from "@/components/page-header";

import {
    donutChart,
    gradientDonutChart,
    imagePieChart,
    monochromePieChart,
    patternDonutChart,
    simplePieChart,
    updatingDonutChart,
} from "./data";

/**
 * Pie chart component
 */
export default {
    page: {
        title: "Pie Charts",
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
            simplePieChart: simplePieChart,
            donutChart: donutChart,
            updatingDonutChart: updatingDonutChart,
            gradientDonutChart: gradientDonutChart,
            patternDonutChart: patternDonutChart,
            imagePieChart: imagePieChart,
            monochromePieChart: monochromePieChart,
            title: "Pie Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Pie Charts",
                    active: true,
                },
            ],
        };
    },
    methods: {
        appendData: function () {
            var arr = this.updatingDonutChart.series.slice();
            arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
            this.updatingDonutChart.series = arr;
        },

        removeData: function () {
            if (this.updatingDonutChart.series.length === 1) return;
            var arr = this.updatingDonutChart.series.slice();
            arr.pop();
            this.updatingDonutChart.series = arr;
        },

        randomize: function () {
            this.updatingDonutChart.series = this.updatingDonutChart.series.map(function () {
                return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
            });
        },

        reset: function () {
            this.updatingDonutChart.series = [44, 55, 13, 33];
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
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Simple Pie Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="simplePieChart.chartOptions" :series="simplePieChart.series" class="apex-charts" dir="ltr"
                                   height="300"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Simple Donut Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="donutChart.chartOptions" :series="donutChart.series" class="apex-charts" dir="ltr"
                                   height="300"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Updating Donut Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="updatingDonutChart.chartOptions" :series="updatingDonutChart.series" class="apex-charts" dir="ltr"
                                   height="300"></apexchart>

                        <div class="d-flex align-items-start flex-wrap gap-2 justify-content-center mt-4">
                            <b-button id="add" size="sm" variant="light" @click="appendData">
                                + ADD
                            </b-button>

                            <b-button id="remove" size="sm" variant="light" @click="removeData">
                                - REMOVE
                            </b-button>

                            <b-button id="randomize" size="sm" variant="light" @click="randomize">
                                RANDOMIZE
                            </b-button>

                            <b-button id="reset" size="sm" variant="light" @click="reset">
                                RESET
                            </b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Monochrome Pie Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="monochromePieChart.chartOptions" :series="monochromePieChart.series" class="apex-charts" dir="ltr"
                                   height="300"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Gradient Donut Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="gradientDonutChart.chartOptions" :series="gradientDonutChart.series" class="apex-charts" dir="ltr"
                                   height="300"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Patterned Donut Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="patternDonutChart.chartOptions" :series="patternDonutChart.series" class="apex-charts" dir="ltr"
                                   height="300"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="justify-content-between d-flex align-items-center">
                        <b-card-title>Pie Chart with Image Fill</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="imagePieChart.chartOptions" :series="imagePieChart.series" class="apex-charts" dir="ltr"
                                   height="300"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
