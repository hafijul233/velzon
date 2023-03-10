<script>
import Layout from "../../../../layouts/main.vue";
import appConfig from "../../../../../app.config";
import PageHeader from "@/components/page-header";

import {
    basicColumnChart,
    chartYearOption,
    columnDatalabelChart,
    columnMarkersChart,
    columnNegativeChart,
    columnRotatedLabel,
    columnStackedChart,
    distributedColumnchart,
    dynamicQuarterLoadedChart,
    quarterChartOption,
    rangeColumnChart,
    stackedColumnsChart
} from "./data";

/**
 * Column Charts component
 */
export default {
    page: {
        title: "Column chart",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    data() {
        return {
            basicColumnChart: basicColumnChart,
            columnDatalabelChart: columnDatalabelChart,
            stackedColumnsChart: stackedColumnsChart,
            columnStackedChart: columnStackedChart,
            columnMarkersChart: columnMarkersChart,
            columnRotatedLabel: columnRotatedLabel,
            columnNegativeChart: columnNegativeChart,
            rangeColumnChart: rangeColumnChart,
            chartYearOption: chartYearOption,
            quarterChartOption: quarterChartOption,
            distributedColumnchart: distributedColumnchart,
            dynamicQuarterLoadedChart: dynamicQuarterLoadedChart,
            title: "Column Charts",
            items: [
                {
                    text: "Charts",
                    href: "/",
                },
                {
                    text: "Column Charts",
                    active: true,
                },
            ],
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
                        <b-card-title>Basic Column Charts</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="basicColumnChart.chartOptions" :series="basicColumnChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Column with Data Labels</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="columnDatalabelChart.chartOptions" :series="columnDatalabelChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Stacked Column Charts</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="stackedColumnsChart.chartOptions" :series="stackedColumnsChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Stacked Column 100</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="columnStackedChart.chartOptions" :series="columnStackedChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Column with Markers</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="columnMarkersChart.chartOptions" :series="columnMarkersChart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                        <div id="column_markers" class="apex-charts" dir="ltr"></div>
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
                        <b-card-title>Column with Rotated Labels</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="columnRotatedLabel.chartOptions" :series="columnRotatedLabel.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Column with Nagetive Values</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="columnNegativeChart.chartOptions" :series="columnNegativeChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Range Column Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="rangeColumnChart.chartOptions" :series="rangeColumnChart.series" class="apex-charts" dir="ltr"
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
                        <b-card-title>Dynamic Loaded Chart</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <div id="dynamicloadedchart-wrap">
                            <div id="chart-year">
                                <apexchart ref="chart" :options="chartYearOption.chartOptions" :series="chartYearOption.series" height="330"
                                           type="bar"></apexchart>
                            </div>
                            <div id="chart-quarter">
                                <apexchart ref="chartQuarter" :options="dynamicQuarterLoadedChart.chartOptions" :series="dynamicQuarterLoadedChart.series"
                                           height="330"
                                           type="bar"></apexchart>
                            </div>
                        </div>
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
                        <b-card-title>Distributed Columns Charts</b-card-title>

                    </b-card-header>
                    <b-card-body>
                        <apexchart :options="distributedColumnchart.chartOptions" :series="distributedColumnchart.series" class="apex-charts" dir="ltr"
                                   height="350"></apexchart>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
