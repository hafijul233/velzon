<script>
import {CountTo} from "vue3-count-to";

export default {
    components: {
        CountTo,
    },

    data() {
        return {
            chartcolors: {
                colors: ["#f06548"]
            },
            chartOptions: {
                chart: {
                    type: "radialBar",
                    width: 105,
                    sparkline: {
                        enabled: true,
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 0,
                            size: '70%'
                        },
                        track: {
                            margin: 1
                        },
                        dataLabels: {
                            show: true,
                            name: {
                                show: false
                            },
                            value: {
                                show: true,
                                fontSize: '16px',
                                fontWeight: 600,
                                offsetY: 8,
                            }
                        }
                    },
                },
                colors: ["#0ab39c"]
            }
        };
    }
};
</script>

<template>

    <b-col xl="6">
        <div class="d-flex flex-column h-100">
            <b-row>
                <b-col md="6" xl="6">
                    <b-card class="card-animate overflow-hidden" no-body>
                        <div class="position-absolute start-0 widget-pattern" style="z-index: 0;">
                            <svg height="120" version="1.2" viewBox="0 0 200 120" width="200"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path id="Shape 8" class="s0"
                                      d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"/>
                            </svg>
                        </div>
                        <b-card-body style="z-index:1 ;">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Total Jobs</p>
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                        <count-to :duration="5000" :endVal="36894" :startVal="0"></count-to>
                                    </h4>
                                </div>
                                <div class="flex-shrink-0">
                                    <apexchart :options="{ ...chartOptions }" :series='[95]' class="apex-charts" dir="ltr" height="90px"
                                               width="105px"></apexchart>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col md="6" xl="6">
                    <b-card class="card-animate overflow-hidden" no-body>
                        <div class="position-absolute start-0 widget-pattern" style="z-index: 0;">
                            <svg height="120" version="1.2" viewBox="0 0 200 120" width="200"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path id="Shape 8" class="s0"
                                      d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"/>
                            </svg>
                        </div>
                        <b-card-body style="z-index:1 ;">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Apply Jobs</p>
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                        <count-to :duration="5000" :endVal="28410" :startVal="0"></count-to>
                                    </h4>
                                </div>
                                <div class="flex-shrink-0">
                                    <apexchart :options="{ ...chartOptions }" :series='[97]' class="apex-charts" dir="ltr" height="90px"
                                               width="105px"></apexchart>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col md="6" xl="6">
                    <b-card class="card-animate overflow-hidden" no-body>
                        <div class="position-absolute start-0 widget-pattern" style="z-index: 0;">
                            <svg height="120" version="1.2" viewBox="0 0 200 120" width="200"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path id="Shape 8" class="s0"
                                      d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"/>
                            </svg>
                        </div>
                        <b-card-body style="z-index:1 ;">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3">New Jobs</p>
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                        <count-to :duration="5000" :endVal="4305" :startVal="0"></count-to>
                                    </h4>
                                </div>
                                <div class="flex-shrink-0">
                                    <apexchart :options="{ ...chartOptions }" :series='[80]' class="apex-charts" dir="ltr" height="90px"
                                               width="105px"></apexchart>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col md="6" xl="6">
                    <b-card class="card-animate overflow-hidden" no-body>
                        <div class="position-absolute start-0 widget-pattern" style="z-index: 0;">
                            <svg height="120" version="1.2" viewBox="0 0 200 120" width="200"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path id="Shape 8" class="s0"
                                      d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"/>
                            </svg>
                        </div>
                        <b-card-body style="z-index:1 ;">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Interview</p>
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                        <count-to :duration="5000" :endVal="5021" :startVal="0"></count-to>
                                    </h4>
                                </div>
                                <div class="flex-shrink-0">

                                    <apexchart :options="{ ...chartOptions, ...chartcolors }" :series='[89]' class="apex-charts" dir="ltr" height="90px"
                                               width="105px"></apexchart>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col md="6" xl="6">
                    <b-card class="card-animate overflow-hidden" no-body>
                        <div class="position-absolute start-0 widget-pattern" style="z-index: 0;">
                            <svg height="120" version="1.2" viewBox="0 0 200 120" width="200"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path id="Shape 8" class="s0"
                                      d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"/>
                            </svg>
                        </div>
                        <b-card-body style="z-index:1 ;">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3"> Hired</p>
                                    <h4 class="fs-22 fw-semibold ff-secondary mb-0">
                                        <count-to :duration="5000" :endVal="3948" :startVal="0"></count-to>
                                    </h4>
                                </div>
                                <div class="flex-shrink-0">
                                    <apexchart :options="{ ...chartOptions }" :series='[64]' class="apex-charts" dir="ltr" height="90px"
                                               width="105px"></apexchart>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>

                <b-col md="6" xl="6">
                    <b-card class="card-animate overflow-hidden" no-body>
                        <div class="position-absolute start-0 widget-pattern" style="z-index: 0;">
                            <svg height="120" version="1.2" viewBox="0 0 200 120" width="200"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path id="Shape 8" class="s0"
                                      d="m189.5-25.8c0 0 20.1 46.2-26.7 71.4 0 0-60 15.4-62.3 65.3-2.2 49.8-50.6 59.3-57.8 61.5-7.2 2.3-60.8 0-60.8 0l-11.9-199.4z"/>
                            </svg>
                        </div>
                        <b-card-body style="z-index:1 ;">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1 overflow-hidden">
                                    <p class="text-uppercase fw-medium text-muted text-truncate mb-3">Rejected</p>
                                    <h4 class="fs-22 fw-semibold ff-econdary mb-0">
                                        <count-to :duration="5000" :endVal="1340" :startVal="0"></count-to>
                                    </h4>
                                </div>
                                <div class="flex-shrink-0">
                                    <apexchart :options="{ ...chartOptions, ...chartcolors }" :series='[20]' class="apex-charts" dir="ltr" height="90px"
                                               width="105px"></apexchart>
                                </div>
                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </b-col>
</template>
