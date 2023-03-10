<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "../../../../../app.config";
import PageHeader from "@/components/page-header";

import {
    areaIrregularChart,
    areaMonthsChart,
    areaNegativeChart,
    areaNullValueChart,
    areaStackedChart,
    areaYearsChart,
    basicAreaChart,
    datetimeAreaChart,
    splineAreaChart,
} from "./data";

/**
 * Area charts component
 */
export default {
    page: {
        title: "Area charts",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    data() {
        return {
            basicAreaChart: basicAreaChart,
            splineAreaChart: splineAreaChart,
            datetimeAreaChart: datetimeAreaChart,
            areaMonthsChart: areaMonthsChart,
            areaYearsChart: areaYearsChart,
            areaStackedChart: areaStackedChart,
            areaIrregularChart: areaIrregularChart,
            areaNullValueChart: areaNullValueChart,
            areaNegativeChart: areaNegativeChart,
            title: "Area Charts",
            items: [
                {
                    text: "Charts",
                    href: "/",
                },
                {
                    text: "Area Charts",
                    active: true,
                },
            ],
            selection: "one_year",
        };
    },
    components: {
        Layout,
        PageHeader
    },
    methods: {
        updateData: function (timeline) {
            this.selection = timeline;
            switch (timeline) {
                case "one_month":
                    this.$refs.chart.zoomX(
                        new Date("28 Jan 2013").getTime(),
                        new Date("27 Feb 2013").getTime()
                    );
                    break;
                case "six_months":
                    this.$refs.chart.zoomX(
                        new Date("27 Sep 2012").getTime(),
                        new Date("27 Feb 2013").getTime()
                    );
                    break;
                case "one_year":
                    this.$refs.chart.zoomX(
                        new Date("27 Feb 2012").getTime(),
                        new Date("27 Feb 2013").getTime()
                    );
                    break;
                case "all":
                    this.$refs.chart.zoomX(
                        new Date("23 Jan 2012").getTime(),
                        new Date("27 Feb 2013").getTime()
                    );
                    break;
                default:
            }
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
                    <b-card-header>
                        <b-card-title class="mb-0">Basic Area Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="basicAreaChart.chartOptions" :series="basicAreaChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Spline Area Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="splineAreaChart.chartOptions" :series="splineAreaChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Area Chart - Datetime X - Axis Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <div class="toolbar d-flex align-items-start justify-content-center flex-wrap gap-2">
                            <b-button id="one_month" :class="{ active: selection === 'one_month' }" class="timeline-btn" size="sm" type="button"
                                      variant="soft-primary" @click="updateData('one_month')">
                                1M
                            </b-button>
                            <b-button id="six_months" :class="{ active: selection === 'six_months' }" class="timeline-btn" size="sm"
                                      type="button"
                                      variant="soft-primary" @click="updateData('six_months')">
                                6M
                            </b-button>
                            <b-button id="one_year" :class="{ active: selection === 'one_year' }" class="timeline-btn" size="sm" type="button"
                                      variant="soft-primary" @click="updateData('one_year')">
                                1Y
                            </b-button>
                            <b-button id="all" :class="{ active: selection === 'all' }" class="timeline-btn" size="sm" type="button"
                                      variant="soft-primary"
                                      @click="updateData('all')">
                                ALL
                            </b-button>
                        </div>
                        <apexchart ref="chart" :options="datetimeAreaChart.chartOptions" :series="datetimeAreaChart.series" class="apex-charts"
                                   dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Area with Negative Values Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="areaNegativeChart.chartOptions" :series="areaNegativeChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Area Chart - Github Style</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <div class="bg-light">
                            <div id="area_chart-months" class="apex-charts" dir="ltr"></div>
                            <apexchart :options="areaMonthsChart.chartOptions" :series="areaMonthsChart.series" class="apex-charts" dir="ltr"
                                       height="130"></apexchart>
                        </div>

                        <div class="github-style d-flex align-items-center my-2">
                            <div class="flex-shrink-0 me-2">
                                <img alt="" class="avatar-sm rounded"
                                     data-hovercard-user-id="634573"
                                     src="@/assets/images/users/avatar-2.jpg"/>
                            </div>
                            <div class="flex-grow-1">
                                <b-link class="font-size-14 text-dark fw-medium" href="#">coder</b-link>
                                <div class="cmeta text-muted font-size-11">
                                    <span class="commits text-dark fw-medium"></span> commits
                                </div>
                            </div>
                        </div>

                        <div class="bg-light">
                            <apexchart :options="areaYearsChart.chartOptions" :series="areaYearsChart.series" class="apex-charts" dir="ltr"
                                       height="170"></apexchart>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Stacked Area Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="areaStackedChart.chartOptions" :series="areaStackedChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Irregular Timeseries Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="areaIrregularChart.chartOptions" :series="areaIrregularChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Area Chart With Null Values Chart</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="areaNullValueChart.chartOptions" :series="areaNullValueChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
