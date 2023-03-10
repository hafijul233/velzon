<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import SwiperCore, {Navigation, Pagination, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/swiper-bundle.css";
import Portfolio from "./portfolio.vue";
import MarketGraph from "./market-graph.vue";
import News from "./news.vue";
import RecentActivity from "./recent-activity.vue";
import TopProgram from "./top-performers.vue";
import Currencies from "./currencies.vue";
import Trading from "./trading.vue";

SwiperCore.use([Thumbs, Pagination, Navigation]);

export default {
    page: {
        title: "Crypto",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Crypto",
            items: [
                {
                    text: "Dashboards",
                    href: "/",
                },
                {
                    text: "Crypto",
                    active: true,
                },
            ],
            chartcolors: {
                colors: ["#f17171"],
            },
            cyptoWidgets: [
                {
                    id: 1,
                    icon: "ri-money-dollar-circle-fill",
                    label: "Total Invested",
                    counter: "2390.68",
                    badge: "ri-arrow-up-s-fill",
                    badgeColor: "success",
                    percentage: "6.24",
                },
                {
                    id: 2,
                    icon: "ri-arrow-up-circle-fill",
                    label: "Total Change",
                    counter: "19523.25",
                    badge: "ri-arrow-up-s-fill",
                    badgeColor: "success",
                    percentage: "3.67",
                },
                {
                    id: 3,
                    icon: "ri-arrow-down-circle-fill",
                    label: "Day Change",
                    counter: "14799.44",
                    badge: "ri-arrow-down-s-fill",
                    badgeColor: "danger",
                    percentage: "4.80",
                },
            ],
            cryptoSlider: [
                {
                    id: 1,
                    img: require("@/assets/images/svg/crypto-icons/btc.svg"),
                    label: "Bitcoin",
                    price: "$1,523,647",
                    change: "+13.11%",
                    changeClass: "success",
                    coinName: "btc",
                    chartsColor: "#0ab39c",
                    chartOptions: {
                        chart: {
                            width: "100%",
                            height: 46,
                            type: "area",
                            sparkline: {
                                enabled: true,
                            },
                            toolbar: {
                                show: false,
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            curve: "smooth",
                            width: 1.5,
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                shadeIntensity: 1,
                                inverseColors: false,
                                opacityFrom: 0.45,
                                opacityTo: 0.05,
                                stops: [50, 100, 100, 100],
                            },
                        },
                        colors: ["#0ab39c"],
                    },
                    series: [
                        {
                            name: "Bitcoin",
                            data: [85, 68, 35, 90, 8, 11, 26, 54],
                        },
                    ],
                },
                {
                    id: 2,
                    img: require("@/assets/images/svg/crypto-icons/ltc.svg"),
                    label: "Litecoin",
                    price: "$2,145,687",
                    change: "+15.08%",
                    changeClass: "success",
                    coinName: "ltc",
                    chartsColor: "#0ab39c",
                    chartOptions: {
                        chart: {
                            width: "100%",
                            height: 46,
                            type: "area",
                            sparkline: {
                                enabled: true,
                            },
                            toolbar: {
                                show: false,
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            curve: "smooth",
                            width: 1.5,
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                shadeIntensity: 1,
                                inverseColors: false,
                                opacityFrom: 0.45,
                                opacityTo: 0.05,
                                stops: [50, 100, 100, 100],
                            },
                        },
                        colors: ["#0ab39c"],
                    },
                    series: [
                        {
                            name: "Litecoin",
                            data: [25, 50, 41, 87, 12, 36, 9, 54],
                        },
                    ],
                },
                {
                    id: 3,
                    img: require("@/assets/images/svg/crypto-icons/eth.svg"),
                    label: "Eathereum",
                    price: "$3,312,870",
                    change: "+08.57%",
                    changeClass: "success",
                    coinName: "etc",
                    chartsColor: "#0ab39c",
                    chartOptions: {
                        chart: {
                            width: "100%",
                            height: 46,
                            type: "area",
                            sparkline: {
                                enabled: true,
                            },
                            toolbar: {
                                show: false,
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            curve: "smooth",
                            width: 1.5,
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                shadeIntensity: 1,
                                inverseColors: false,
                                opacityFrom: 0.45,
                                opacityTo: 0.05,
                                stops: [50, 100, 100, 100],
                            },
                        },
                        colors: ["#0ab39c"],
                    },
                    series: [
                        {
                            name: "Eathereum",
                            data: [36, 21, 65, 22, 35, 50, 29, 44],
                        },
                    ],
                },
                {
                    id: 4,
                    img: require("@/assets/images/svg/crypto-icons/bnb.svg"),
                    label: "Binance",
                    price: "$1,820,045",
                    change: "-09.21%",
                    changeClass: "danger",
                    coinName: "bnb",
                    chartsColor: "#F06548",
                    chartOptions: {
                        chart: {
                            width: "100%",
                            height: 46,
                            type: "area",
                            sparkline: {
                                enabled: true,
                            },
                            toolbar: {
                                show: false,
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            curve: "smooth",
                            width: 1.5,
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                shadeIntensity: 1,
                                inverseColors: false,
                                opacityFrom: 0.45,
                                opacityTo: 0.05,
                                stops: [50, 100, 100, 100],
                            },
                        },
                        colors: ["#F06548"],
                    },
                    series: [
                        {
                            name: "Binance",
                            data: [30, 58, 29, 89, 12, 36, 9, 54],
                        },
                    ],
                },
                {
                    id: 5,
                    img: require("@/assets/images/svg/crypto-icons/dash.svg"),
                    label: "Dash",
                    price: "$9,458,153",
                    change: "+12.07%",
                    changeClass: "success",
                    coinName: "dash",
                    chartsColor: "#0ab39c",
                    chartOptions: {
                        chart: {
                            width: "100%",
                            height: 46,
                            type: "area",
                            sparkline: {
                                enabled: true,
                            },
                            toolbar: {
                                show: false,
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            curve: "smooth",
                            width: 1.5,
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                shadeIntensity: 1,
                                inverseColors: false,
                                opacityFrom: 0.45,
                                opacityTo: 0.05,
                                stops: [50, 100, 100, 100],
                            },
                        },
                        colors: ["#0ab39c"],
                    },
                    series: [
                        {
                            name: "Dash",
                            data: [24, 68, 39, 86, 29, 42, 11, 58],
                        },
                    ],
                },
                {
                    id: 6,
                    img: require("@/assets/images/svg/crypto-icons/usdt.svg"),
                    label: "Tether",
                    price: "$5,201,458",
                    change: "+14.99%",
                    changeClass: "success",
                    coinName: "usdt",
                    chartsColor: "#0ab39c",
                    chartOptions: {
                        chart: {
                            width: "100%",
                            height: 46,
                            type: "area",
                            sparkline: {
                                enabled: true,
                            },
                            toolbar: {
                                show: false,
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            curve: "smooth",
                            width: 1.5,
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                shadeIntensity: 1,
                                inverseColors: false,
                                opacityFrom: 0.45,
                                opacityTo: 0.05,
                                stops: [50, 100, 100, 100],
                            },
                        },
                        colors: ["#0ab39c"],
                    },
                    series: [
                        {
                            name: "Dash",
                            data: [13, 76, 12, 85, 25, 60, 9, 54],
                        },
                    ],
                },
                {
                    id: 7,
                    img: require("@/assets/images/svg/crypto-icons/neo.svg"),
                    label: "NEO",
                    price: "$6,147,957",
                    change: "-05.07%",
                    changeClass: "danger",
                    coinName: "neo",
                    chartsColor: "#F06548",
                    chartOptions: {
                        chart: {
                            width: "100%",
                            height: 46,
                            type: "area",
                            sparkline: {
                                enabled: true,
                            },
                            toolbar: {
                                show: false,
                            },
                        },
                        dataLabels: {
                            enabled: false,
                        },
                        stroke: {
                            curve: "smooth",
                            width: 1.5,
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                shadeIntensity: 1,
                                inverseColors: false,
                                opacityFrom: 0.45,
                                opacityTo: 0.05,
                                stops: [50, 100, 100, 100],
                            },
                        },
                        colors: ["#F06548"],
                    },
                    series: [
                        {
                            name: "Neo",
                            data: [9, 66, 41, 89, 12, 36, 25, 54],
                        },
                    ],
                },
            ],
            chartOptions: {
                chart: {
                    width: 130,
                    height: 46,
                    type: "area",
                    sparkline: {
                        enabled: true,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "smooth",
                    width: 1.5,
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                        stops: [50, 100, 100, 100],
                    },
                },
                colors: ["#67b173"],
            },
        };
    },
    components: {
        Layout,
        PageHeader,
        Portfolio,
        MarketGraph,
        RecentActivity,
        TopProgram,
        News,
        Currencies,
        Trading,
        Swiper,
        SwiperSlide,
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>

        <b-row>
            <b-col xxl="3">
                <Portfolio/>
            </b-col>

            <b-col class="order-first" order-xxl="0" xxl="9">
                <b-row>
                    <b-col v-for="(item, index) of cyptoWidgets" :key="index" lg="4" md="6">
                        <b-card no-body>
                            <b-card-body>
                                <div class="d-flex align-items-center">
                                    <div class="avatar-sm flex-shrink-0">
                    <span class="avatar-title bg-light text-primary rounded-circle fs-3">
                      <i :class="`${item.icon} align-middle`"></i>
                    </span>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <p class="text-uppercase fw-semibold fs-12 text-muted mb-1">
                                            {{ item.label }}
                                        </p>
                                        <h4 class="mb-0">
                                            $
                                            <span class="counter-value">
                        {{ item.counter }}
                      </span>
                                        </h4>
                                    </div>
                                    <div class="flex-shrink-0 align-self-end">
                    <span :class="`badge badge-soft-${item.badgeColor}`">
                      <i :class="`${item.badge} align-middle me-1`"></i>
                      {{ item.percentage }} %
                      <span></span>
                    </span>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col xl="12">
                        <MarketGraph/>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <swiper :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :breakpoints="{
  640: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2.5,
  },
  1024: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 5,
  },
}" :loop="false" :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }" :slidesPerView="1" :spaceBetween="24" class="cryptoSlider">
                    <template v-for="(item, index) of cryptoSlider" :key="index">
                        <swiper-slide>
                            <b-card no-body>
                                <b-card-body>
                                    <div class="float-end">
                                        <div class="dropdown">
                                            <b-link aria-expanded="false" aria-haspopup="true" class="text-reset"
                                                    data-bs-toggle="dropdown"
                                                    href="#">
                        <span class="text-muted fs-18">
                          <i class="mdi mdi-dots-horizontal"></i>
                        </span>
                                            </b-link>
                                            <div class="dropdown-menu dropdown-menu-end">
                                                <b-link class="dropdown-item" href="#">Details</b-link>
                                                <b-link class="dropdown-item" href="#">Cancel</b-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <img :src="item.img" alt
                                             class="bg-light rounded-circle p-1 avatar-xs img-fluid"/>
                                        <h6 class="ms-2 mb-0 fs-14">{{ item.label }}</h6>
                                    </div>
                                    <b-row class="align-items-end g-0">
                                        <b-col cols="6">
                                            <h5 class="mb-1 mt-4">{{ item.price }}</h5>
                                            <p class="text-success fs-13 fw-medium mb-0">
                                                {{ item.change }}
                                                <span class="text-muted ms-2 fs-10 text-uppercase">({{
                                                        item.coinName
                                                    }})</span>
                                            </p>
                                        </b-col>
                                        <b-col cols="6">
                                            <apexchart :key="item.id" :options="item.chartOptions" :series="item.series.length > 0 ? item.series : []"
                                                       class="apex-charts"
                                                       dir="ltr"
                                                       height="50"></apexchart>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                        </swiper-slide>
                    </template>
                </swiper>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="8">
                <Currencies/>
            </b-col>
            <b-col xl="4">
                <Trading/>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6" xxl="4">
                <RecentActivity/>
            </b-col>
            <b-col lg="6" xxl="4">
                <TopProgram/>
            </b-col>
            <b-col lg="6" xxl="4">
                <News/>
            </b-col>
        </b-row>
    </Layout>
</template>
