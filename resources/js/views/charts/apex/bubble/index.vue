<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "../../../../../app.config";
import PageHeader from "@/components/page-header";

import {bubble3DChart, simpleBubbleChart} from "./data";

/**
 * Bubble Charts component
 */
export default {
    page: {
        title: "Bubble Charts",
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
            simpleBubbleChart: simpleBubbleChart,
            bubble3DChart: bubble3DChart,
            title: "Bubble Charts",
            items: [
                {
                    text: "Apexcharts",
                    href: "/",
                },
                {
                    text: "Bubble Charts",
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
                        <b-card-title>Simple Bubble Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="simpleBubbleChart.chartOptions" :series="simpleBubbleChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>3D Bubble Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="bubble3DChart.chartOptions" :series="bubble3DChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
