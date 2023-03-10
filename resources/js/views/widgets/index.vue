<script>
import {CountTo} from "vue3-count-to";
import {ActivityIcon, AlertTriangleIcon, ClockIcon, ExternalLinkIcon, UsersIcon,} from "@zhuowenli/vue-feather-icons";

import SwiperCore, {Navigation, Pagination, Thumbs} from "swiper";

import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/swiper-bundle.css";
import usaJson from "../../components/widgets/USA.json";
import worldJson from "../../components/widgets/world.json";

import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import SessionsCounties from "../dashboard/analytics/sessions-countries.vue";
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/lupuorrc.json";

var echarts = require("echarts");

SwiperCore.use([Thumbs, Navigation, Pagination]);

function getChartColorsArray(colors) {
    colors = JSON.parse(colors);
    return colors.map(function (value) {
        var newValue = value.replace(" ", "");
        if (newValue.indexOf(",") === -1) {
            var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
            if (color) {
                color = color.replace(" ", "");
                return color;
            } else return newValue;
        } else {
            var val = value.split(',');
            if (val.length == 2) {
                var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                return rgbaColor;
            } else {
                return newValue;
            }
        }
    });
}

function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = "w" + (i + 1).toString();
        var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y,
        });
        i++;
    }
    return series;
}

export default {
    page: {
        title: "Widgets",
        meta: [{
            name: "description",
            content: appConfig.description
        }],
    },
    data() {
        return {
            title: "Widgets",
            items: [{
                text: "Velzon",
                href: "/",
            },
                {
                    text: "Widgets",
                    active: true,
                },
            ],
            searchQuery: null,

            candidateList: [{
                id: "1",
                name: "Anna Adame",
                img: require("@/assets/images/users/avatar-1.jpg"),
                username: "@Anna",
                designation: "Web Developer"
            },
                {
                    id: "2",
                    name: "Patricia Cavin",
                    img: require("@/assets/images/users/avatar-2.jpg"),
                    username: "@Patricia",
                    designation: "Web Developer"
                },
                {
                    id: "3",
                    name: "Jason Tran",
                    img: require("@/assets/images/users/avatar-3.jpg"),
                    username: "@Jason",
                    designation: "Magento Developer"
                },
                {
                    id: "4",
                    name: "Cheryl Moore",
                    img: require("@/assets/images/users/avatar-4.jpg"),
                    username: "@Cheryl",
                    designation: "Product Designer"
                },
                {
                    id: "5",
                    name: "Jennifer Bailey",
                    img: require("@/assets/images/users/avatar-5.jpg"),
                    username: "@Jennifer",
                    designation: "Marketing Director"
                },
            ],
            audienceChartOptions: {
                series: [{
                    name: "Last Year",
                    data: [
                        25.3, 12.5, 20.2, 18.5, 40.4, 25.4, 15.8, 22.3, 19.2, 25.3, 12.5,
                        20.2,
                    ],
                },
                    {
                        name: "Current Year",
                        data: [
                            36.2, 22.4, 38.2, 30.5, 26.4, 30.4, 20.2, 29.6, 10.9, 36.2, 22.4,
                            38.2,
                        ],
                    },
                ],
                chartOptions: {
                    chart: {
                        type: "bar",
                        height: 306,
                        stacked: true,
                        toolbar: {
                            show: false,
                        },
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: "30%",
                            borderRadius: 6,
                        },
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    legend: {
                        show: true,
                        position: "bottom",
                        horizontalAlign: "center",
                        fontWeight: 400,
                        fontSize: "8px",
                        offsetX: 0,
                        offsetY: 0,
                        markers: {
                            width: 9,
                            height: 9,
                            radius: 4,
                        },
                    },
                    stroke: {
                        show: true,
                        width: 2,
                        colors: ["transparent"],
                    },
                    grid: {
                        show: false,
                    },
                    colors: getChartColorsArray('["--vz-success", "--vz-light"]'),
                    xaxis: {
                        categories: [
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ],
                        axisTicks: {
                            show: false,
                        },
                        axisBorder: {
                            show: true,
                            strokeDashArray: 1,
                            height: 1,
                            width: "100%",
                            offsetX: 0,
                            offsetY: 0,
                        },
                    },
                    yaxis: {
                        show: false,
                    },
                    fill: {
                        opacity: 1,
                    },
                },
            },
            portfolioChart: {
                series: [19405, 40552, 15824, 30635],
                chartOptions: {
                    labels: ["Bitcoin", "Ethereum", "Litecoin", "Dash"],
                    chart: {
                        type: "donut",
                        height: 210,
                    },
                    plotOptions: {
                        pie: {
                            size: 100,
                            offsetX: 0,
                            offsetY: 0,
                            donut: {
                                size: "70%",
                                labels: {
                                    show: true,
                                    name: {
                                        show: true,
                                        fontSize: "18px",
                                        offsetY: -5,
                                    },
                                    value: {
                                        show: true,
                                        fontSize: "20px",
                                        color: "#343a40",
                                        fontWeight: 500,
                                        offsetY: 5,
                                        formatter: function (val) {
                                            return "$" + val;
                                        },
                                    },
                                    total: {
                                        show: true,
                                        fontSize: "13px",
                                        label: "Total value",
                                        color: "#9599ad",
                                        fontWeight: 500,
                                        formatter: function (w) {
                                            return (
                                                "$" +
                                                w.globals.seriesTotals.reduce(function (a, b) {
                                                    return a + b;
                                                }, 0)
                                            );
                                        },
                                    },
                                },
                            },
                        },
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    legend: {
                        show: false,
                    },
                    yaxis: {
                        labels: {
                            formatter: function (value) {
                                return "$" + value;
                            },
                        },
                    },
                    stroke: {
                        lineCap: "round",
                        width: 2,
                    },
                    colors: getChartColorsArray('["--vz-primary", "--vz-info", "--vz-warning", "--vz-success"]'),
                },
            },
            topReferralsChart: {
                series: [{
                    name: "Jan",
                    data: generateData(20, {
                        min: -30,
                        max: 55,
                    }),
                },
                    {
                        name: "Feb",
                        data: generateData(20, {
                            min: -30,
                            max: 55,
                        }),
                    },
                    {
                        name: "Mar",
                        data: generateData(20, {
                            min: -30,
                            max: 55,
                        }),
                    },
                    {
                        name: "Apr",
                        data: generateData(20, {
                            min: -30,
                            max: 55,
                        }),
                    },
                    {
                        name: "May",
                        data: generateData(20, {
                            min: -30,
                            max: 55,
                        }),
                    },
                    {
                        name: "Jun",
                        data: generateData(20, {
                            min: -30,
                            max: 55,
                        }),
                    },
                    {
                        name: "Jul",
                        data: generateData(20, {
                            min: -30,
                            max: 55,
                        }),
                    },
                    {
                        name: "Aug",
                        data: generateData(20, {
                            min: -30,
                            max: 55,
                        }),
                    },
                    {
                        name: "Sep",
                        data: generateData(20, {
                            min: -30,
                            max: 55,
                        }),
                    },
                ],
                chartOptions: {
                    chart: {
                        height: 310,
                        type: "heatmap",
                        toolbar: {
                            show: false,
                        },
                    },
                    legend: {
                        show: false,
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    stroke: {
                        width: 1,
                    },
                    title: {
                        style: {
                            fontWeight: 500,
                        },
                    },
                    colors: getChartColorsArray(
                        '["--vz-success", "--vz-info", "--vz-primary", "--vz-warning", "--vz-secondary"]'),
                },
            },


            chartcolors: {colors: ["#f06548"]},
            chartoptions: {
                chart: {
                    width: 140,
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
                colors: ["#0ab39c"]
            },
            defaultOptions: {animationData: animationData},
        };
    },
    computed: {
        displayedPosts() {
            return this.candidateList;
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.name.toLowerCase().includes(search) ||
                        data.username.toLowerCase().includes(search) ||
                        data.designation.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    methods: {

        selectBank() {
            if (document.querySelector('input[name=listGroupRadioGrid]:checked')) {
                document.getElementById("notification-overlay").style.visibility = "visible";
                document.getElementById("notification-overlay").style.opacity = "1";

                var checkedElem = document.querySelector('input[name=listGroupRadioGrid]:checked').parentElement;
                var payamount = checkedElem.querySelector(".pay-amount").innerHTML;
                document.querySelector("#notification-overlay .success-pay").innerHTML = payamount;
            } else {
                document.getElementById("notification-warn").classList.remove("d-none");
                setTimeout(() => document.getElementById("notification-warn").classList.add("d-none"), 2000);
            }
        },

        selectBankback() {
            document.getElementById("notification-overlay").style.visibility = "hidden";
            document.getElementById("notification-overlay").style.opacity = "0";
        },

        plusamount() {
            event.target.previousElementSibling.value++;
            var itemAmount =
                event.target.parentElement.parentElement.previousElementSibling.querySelector(
                    ".product-price"
                ).value;

            var priceselection =
                event.target.parentElement.parentElement.nextElementSibling.querySelector(
                    ".product-line-price"
                );
            var productQty =
                event.target.parentElement.querySelector(".product-quantity").value;

            this.updateQuantity(productQty, itemAmount, priceselection);
        },

        minusamount() {
            event.target.nextElementSibling.value--;
            var itemAmount =
                event.target.parentElement.parentElement.previousElementSibling.querySelector(
                    ".product-price"
                ).value;
            var priceselection =
                event.target.parentElement.parentElement.nextElementSibling.querySelector(
                    ".product-line-price"
                );
            var productQty =
                event.target.parentElement.querySelector(".product-quantity").value;
            this.updateQuantity(productQty, itemAmount, priceselection);
        },

        showdetail(data) {
            document.getElementById('candidate-img').setAttribute('src', data.img);
            document.querySelector('#candidate-name').innerHTML = data.name;
            document.querySelector('#candidate-position').innerHTML = data.username;
        },

        customcreditcard() {
            var cardNumInput = document.getElementById("card-num-input");
            var cardNumElem = document.getElementById("card-num-elem");

            var cardHolderInput = document.getElementById("card-holder-input"),
                cardHolderElem = document.getElementById("card-holder-elem");

            var expiryMonthInput = document.getElementById("expiry-month-input"),
                expiryMonthElem = document.getElementById("expiry-month-elem");

            var expiryYearInput = document.getElementById("expiry-year-input"),
                expiryYearElem = document.getElementById("expiry-year-elem");

            var cvcInput = document.getElementById("cvc-input"),
                cvcElem = document.getElementById("cvc-elem");

            var cardForm = document.getElementById("custom-card-form");

            cardNumInput.onkeydown = function (e) {
                var key = e.keyCode || e.charCode;

                var is_digit = key >= 48 && key <= 57 || key >= 96 && key <= 105;
                var is_delete = key == 8 || key == 46;

                if (is_digit || is_delete) {
                    var text = e.target.value;
                    var len = text.length;

                    if (is_digit && (len == 4 || len == 9 || len == 14)) cardNumInput.value = text + " ";
                } else return false;
            };


            cardNumInput.onkeyup = function (e) {
                var key = e.keyCode || e.charCode;

                var is_digit = key >= 48 && key <= 57 || key >= 96 && key <= 105;
                var is_delete = key == 8 || key == 46;

                if (is_digit || is_delete) {
                    var text = e.target.value;
                    var len = text.length;
                    var digits = "XXXX XXXX XXXX XXXX".split('');

                    if (is_digit && (len == 4 || len == 9 || len == 14)) digits[len] = " ";

                    for (var i = 0; i < len; i++) {
                        digits[i] = text.charAt(i);
                    }
                    cardNumElem.innerText = digits.join('');

                } else return false;
            };

            cardHolderInput.onkeyup = function (e) {
                cardHolderElem.innerText = e.target.value;
            };

            expiryMonthInput.onchange = function (e) {
                if (!e.target.value) expiryMonthElem.innerText = "00";

                expiryMonthElem.innerText = e.target.value;
            };

            expiryYearInput.onchange = function (e) {
                if (!e.target.value) expiryYearElem.innerText = "0000";
                expiryYearElem.innerText = e.target.value;
            };

            cvcInput.onkeyup = function (e) {
                var text = e.target.value;
                var digits = ['_', '_', '_'];

                for (var i = 0; i < text.length; i++) {
                    digits[i] = text.charAt(i);
                }
                cvcElem.innerText = digits.join('');
            };

            cardForm.onsubmit = function (e) {
                e.preventDefault();
            };
        },
    },
    name: "Widgets",
    components: {
        Layout,
        PageHeader,
        UsersIcon,
        ActivityIcon,
        ClockIcon,
        ExternalLinkIcon,
        AlertTriangleIcon,
        CountTo,
        SessionsCounties,
        Swiper,
        SwiperSlide,
        lottie: Lottie,
    },
    mounted() {
        let chartuser = document.getElementById("users-by-country");
        let chartDom = document.getElementById("sales-by-locations");

        let userChart = echarts.init(chartuser);
        let myChart = echarts.init(chartDom);
        let option;
        let useroption;

        echarts.registerMap("USA", usaJson, {
            Alaska: {
                left: -131,
                top: 25,
                width: 15,
            },
            Hawaii: {
                left: -110,
                top: 28,
                width: 5,
            },
            "Puerto Rico": {
                left: -76,
                top: 26,
                width: 2,
            },
        });
        option = {
            tooltip: {
                trigger: "item",
                showDelay: 0,
                transitionDuration: 0.2,
            },
            series: [{
                name: "USA PopEstimates",
                type: "map",
                roam: true,
                map: "USA",
                emphasis: {
                    label: {
                        show: true,
                    },
                },
                data: [{
                    name: "Alabama",
                    value: 4822023
                },
                    {
                        name: "Alaska",
                        value: 731449
                    },
                    {
                        name: "Arizona",
                        value: 6553255
                    },
                    {
                        name: "Arkansas",
                        value: 2949131
                    },
                    {
                        name: "California",
                        value: 38041430
                    },
                    {
                        name: "Colorado",
                        value: 5187582
                    },
                    {
                        name: "Connecticut",
                        value: 3590347
                    },
                    {
                        name: "Delaware",
                        value: 917092
                    },
                    {
                        name: "District of Columbia",
                        value: 632323
                    },
                    {
                        name: "Florida",
                        value: 19317568
                    },
                    {
                        name: "Georgia",
                        value: 9919945
                    },
                    {
                        name: "Hawaii",
                        value: 1392313
                    },
                    {
                        name: "Idaho",
                        value: 1595728
                    },
                    {
                        name: "Illinois",
                        value: 12875255
                    },
                    {
                        name: "Indiana",
                        value: 6537334
                    },
                    {
                        name: "Iowa",
                        value: 3074186
                    },
                    {
                        name: "Kansas",
                        value: 2885905
                    },
                    {
                        name: "Kentucky",
                        value: 4380415
                    },
                    {
                        name: "Louisiana",
                        value: 4601893
                    },
                    {
                        name: "Maine",
                        value: 1329192
                    },
                    {
                        name: "Maryland",
                        value: 5884563
                    },
                    {
                        name: "Massachusetts",
                        value: 6646144
                    },
                    {
                        name: "Michigan",
                        value: 9883360
                    },
                    {
                        name: "Minnesota",
                        value: 5379139
                    },
                    {
                        name: "Mississippi",
                        value: 2984926
                    },
                    {
                        name: "Missouri",
                        value: 6021988
                    },
                    {
                        name: "Montana",
                        value: 1005141
                    },
                    {
                        name: "Nebraska",
                        value: 1855525
                    },
                    {
                        name: "Nevada",
                        value: 2758931
                    },
                    {
                        name: "New Hampshire",
                        value: 1320718
                    },
                    {
                        name: "New Jersey",
                        value: 8864590
                    },
                    {
                        name: "New Mexico",
                        value: 2085538
                    },
                    {
                        name: "New York",
                        value: 19570261
                    },
                    {
                        name: "North Carolina",
                        value: 9752073
                    },
                    {
                        name: "North Dakota",
                        value: 699628
                    },
                    {
                        name: "Ohio",
                        value: 11544225
                    },
                    {
                        name: "Oklahoma",
                        value: 3814820
                    },
                    {
                        name: "Oregon",
                        value: 3899353
                    },
                    {
                        name: "Pennsylvania",
                        value: 12763536
                    },
                    {
                        name: "Rhode Island",
                        value: 1050292
                    },
                    {
                        name: "South Carolina",
                        value: 4723723
                    },
                    {
                        name: "South Dakota",
                        value: 833354
                    },
                    {
                        name: "Tennessee",
                        value: 6456243
                    },
                    {
                        name: "Texas",
                        value: 26059203
                    },
                    {
                        name: "Utah",
                        value: 2855287
                    },
                    {
                        name: "Vermont",
                        value: 626011
                    },
                    {
                        name: "Virginia",
                        value: 8185867
                    },
                    {
                        name: "Washington",
                        value: 6897012
                    },
                    {
                        name: "West Virginia",
                        value: 1855413
                    },
                    {
                        name: "Wisconsin",
                        value: 5726398
                    },
                    {
                        name: "Wyoming",
                        value: 576412
                    },
                    {
                        name: "Puerto Rico",
                        value: 3667084
                    },
                ],
            },],
        };
        myChart.setOption(option);
        option && myChart.setOption(option);

        echarts.registerMap("world", worldJson, {
            Alaska: {
                left: -131,
                top: 25,
                width: 15,
            },
            Hawaii: {
                left: -110,
                top: 28,
                width: 5,
            },
            "Puerto Rico": {
                left: -76,
                top: 26,
                width: 2,
            },
        });
        useroption = {
            tooltip: {
                trigger: "item",
                showDelay: 0,
                transitionDuration: 0.2,
            },
            series: [{
                name: "World",
                type: "map",
                map: "world",
                label: {
                    show: false,
                },
            },],
        };

        userChart.setOption(useroption);
        useroption && userChart.setOption(useroption);
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col cols="12">
                <h5 class="text-decoration-underline mb-3 pb-1">Tile Boxs</h5>
            </b-col>
        </b-row>

        <b-row>
            <b-col md="6" xl="3">
                <b-card class="card-animate" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <p class="text-uppercase fw-medium text-muted mb-0">
                                    Total Earnings
                                </p>
                            </div>
                            <div class="flex-shrink-0">
                                <h5 class="text-success fs-14 mb-0">
                                    <i class="ri-arrow-right-up-line fs-13 align-middle"></i>
                                    +16.24 %
                                </h5>
                            </div>
                        </div>
                        <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    $
                                    <count-to :duration="5000" :endVal="559" :startVal="0"></count-to>
                                    k
                                </h4>
                                <b-link class="text-decoration-underline" href="">View net earnings</b-link>
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-success rounded fs-3">
                  <i class="bx bx-dollar-circle text-success"></i>
                </span>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>


            <b-col md="6" xl="3">
                <b-card class="card-animate bg-info" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <p class="text-uppercase fw-medium text-white-50 mb-0">
                                    Orders
                                </p>
                            </div>
                            <div class="flex-shrink-0">
                                <h5 class="text-warning fs-14 mb-0">
                                    <i class="ri-arrow-right-down-line fs-13 align-middle"></i>
                                    -3.57 %
                                </h5>
                            </div>
                        </div>
                        <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4 text-white">
                                    <count-to :duration="5000" :endVal="36894" :startVal="0"
                                              class="counter-value"></count-to>
                                </h4>
                                <b-link class="text-decoration-underline text-white-50" href="">View all orders</b-link>
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-light rounded fs-3">
                  <i class="bx bx-shopping-bag text-white"></i>
                </span>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>


            <b-col md="6" xl="3">
                <b-card class="card-animate" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <p class="text-uppercase fw-medium text-muted mb-0">
                                    Customers
                                </p>
                            </div>
                            <div class="flex-shrink-0">
                                <h5 class="text-success fs-14 mb-0">
                                    <i class="ri-arrow-right-up-line fs-13 align-middle"></i>
                                    +29.08 %
                                </h5>
                            </div>
                        </div>
                        <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    <count-to :duration="5000" :endVal="183" :startVal="0"></count-to>
                                    M
                                </h4>
                                <b-link class="text-decoration-underline" href="">See details</b-link>
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-warning rounded fs-3">
                  <i class="bx bx-user-circle text-warning"></i>
                </span>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>


            <b-col md="6" xl="3">
                <b-card class="card-animate" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <p class="text-uppercase fw-medium text-muted mb-0">
                                    My Balance
                                </p>
                            </div>
                            <div class="flex-shrink-0">
                                <h5 class="text-muted fs-14 mb-0">+0.00 %</h5>
                            </div>
                        </div>
                        <div class="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 class="fs-22 fw-semibold ff-secondary mb-4">
                                    $
                                    <count-to :duration="5000" :endVal="165" :startVal="0"></count-to>
                                    k
                                </h4>
                                <b-link class="text-decoration-underline" href="">Withdraw money</b-link>
                            </div>
                            <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-primary rounded fs-3">
                  <i class="bx bx-wallet text-primary"></i>
                </span>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>

        </b-row>

        <b-row>
            <b-col xl="12">
                <b-card class="crm-widget" no-body>
                    <b-card-body class="p-0">
                        <b-row class="row-cols-md-3 row-cols-1">
                            <b-col class="border-end" lg>
                                <div class="py-4 px-3">
                                    <h5 class="text-muted text-uppercase fs-13">
                                        Campaign Sent
                                        <i class="
                        ri-arrow-up-circle-line
                        text-success
                        fs-18
                        float-end
                        align-middle
                      "></i>
                                    </h5>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <i class="ri-space-ship-line display-6 text-muted"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h2 class="mb-0">
                                                <count-to :duration="5000" :endVal="197" :startVal="0"></count-to>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </b-col>

                            <b-col class="border-end" lg>
                                <div class="mt-3 mt-md-0 py-4 px-3">
                                    <h5 class="text-muted text-uppercase fs-13">
                                        Annual Profit
                                        <i class="
                        ri-arrow-up-circle-line
                        text-success
                        fs-18
                        float-end
                        align-middle
                      "></i>
                                    </h5>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <i class="ri-exchange-dollar-line display-6 text-muted"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h2 class="mb-0">
                                                $
                                                <count-to :duration="5000" :endVal="489" :startVal="0"></count-to>
                                                k
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </b-col>

                            <b-col class="border-end" lg>
                                <div class="mt-3 mt-md-0 py-4 px-3">
                                    <h5 class="text-muted text-uppercase fs-13">
                                        Lead Coversation
                                        <i class="
                        ri-arrow-down-circle-line
                        text-danger
                        fs-18
                        float-end
                        align-middle
                      "></i>
                                    </h5>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <i class="ri-pulse-line display-6 text-muted"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h2 class="mb-0">
                                                <count-to :duration="5000" :endVal="32" :startVal="0"></count-to>
                                                %
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </b-col>

                            <b-col class="border-end" lg>
                                <div class="mt-3 mt-lg-0 py-4 px-3">
                                    <h5 class="text-muted text-uppercase fs-13">
                                        Daily Average Income
                                        <i class="
                        ri-arrow-up-circle-line
                        text-success
                        fs-18
                        float-end
                        align-middle
                      "></i>
                                    </h5>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <i class="ri-trophy-line display-6 text-muted"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h2 class="mb-0">
                                                $
                                                <count-to :duration="5000" :endVal="1596" :startVal="0"></count-to>
                                                0
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </b-col>

                            <b-col lg>
                                <div class="mt-3 mt-lg-0 py-4 px-3">
                                    <h5 class="text-muted text-uppercase fs-13">
                                        Annual Deals
                                        <i class="
                        ri-arrow-down-circle-line
                        text-danger
                        fs-18
                        float-end
                        align-middle
                      "></i>
                                    </h5>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <i class="ri-service-line display-6 text-muted"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h2 class="mb-0">
                                                <count-to :duration="5000" :endVal="2659" :startVal="0"></count-to>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </b-col>

                        </b-row>

                    </b-card-body>

                </b-card>

            </b-col>

        </b-row>

        <b-row>
            <b-col md="6" xl="3">
                <b-card class="card-animate" no-body>
                    <b-card-body>
                        <div class="d-flex justify-content-between">
                            <div>
                                <p class="fw-medium text-muted mb-0">Users</p>
                                <h2 class="mt-4 ff-secondary fw-semibold">
                                    <count-to :duration="5000" :endVal="28" :startVal="0"></count-to>
                                    k
                                </h2>
                                <p class="mb-0 text-muted">
                                    <b-badge class="bg-light text-success mb-0">
                                        <i class="ri-arrow-up-line align-middle"></i> 16.24 %
                                    </b-badge>
                                    vs. previous month
                                </p>
                            </div>
                            <div>
                                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-soft-info rounded-circle fs-2">
                    <UsersIcon class="text-info"></UsersIcon>
                  </span>
                                </div>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>


            <b-col md="6" xl="3">
                <b-card class="card-animate" no-body>
                    <b-card-body>
                        <div class="d-flex justify-content-between">
                            <div>
                                <p class="fw-medium text-muted mb-0">Sessions</p>
                                <h2 class="mt-4 ff-secondary fw-semibold">
                                    <count-to :duration="5000" :endVal="97" :startVal="0"></count-to>
                                    k
                                </h2>
                                <p class="mb-0 text-muted">
                                    <b-badge class="bg-light text-danger mb-0">
                                        <i class="ri-arrow-down-line align-middle"></i> 3.96 %
                                    </b-badge>
                                    vs. previous month
                                </p>
                            </div>
                            <div>
                                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-soft-info rounded-circle fs-2">
                    <ActivityIcon class="text-info"></ActivityIcon>
                  </span>
                                </div>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>


            <b-col md="6" xl="3">
                <b-card class="card-animate bg-primary" no-body>
                    <b-card-body>
                        <div class="d-flex justify-content-between">
                            <div>
                                <p class="fw-medium text-white-50 mb-0">Avg. Visit Duration</p>
                                <h2 class="mt-4 ff-secondary fw-semibold text-white">
                                    <count-to :duration="5000" :endVal="3" :startVal="0"></count-to>
                                    m
                                    <count-to :duration="5000" :endVal="40" :startVal="0"></count-to>
                                    sec
                                </h2>
                                <p class="mb-0 text-white-50">
                                    <b-badge class="mb-0" variant="soft-light">
                                        <i class="ri-arrow-down-line align-middle"></i> 0.24 %
                                    </b-badge>
                                    vs. previous month
                                </p>
                            </div>
                            <div>
                                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-soft-light rounded-circle fs-2">
                    <ClockIcon class="text-white"></ClockIcon>
                  </span>
                                </div>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>


            <b-col md="6" xl="3">
                <b-card class="card-animate" no-body>
                    <b-card-body>
                        <div class="d-flex justify-content-between">
                            <div>
                                <p class="fw-medium text-muted mb-0">Bounce Rate</p>
                                <h2 class="mt-4 ff-secondary fw-semibold">
                                    <count-to :duration="5000" :endVal="33" :startVal="0"></count-to>
                                    %
                                </h2>
                                <p class="mb-0 text-muted">
                                    <b-badge class="bg-light text-success mb-0">
                                        <i class="ri-arrow-up-line align-middle"></i> 7.05 %
                                    </b-badge>
                                    vs. previous month
                                </p>
                            </div>
                            <div>
                                <div class="avatar-sm flex-shrink-0">
                  <span class="avatar-title bg-soft-info rounded-circle fs-2">
                    <ExternalLinkIcon class="text-info"></ExternalLinkIcon>
                  </span>
                                </div>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>

        </b-row>

        <b-row>
            <b-col md="6" xl="3">
                <b-card class="bg-success card-height-100" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center">
                            <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-light text-white rounded-2 fs-2">
                  <i class="bx bx-shopping-bag"></i>
                </span>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <p class="text-uppercase fw-medium text-white-50 mb-3">
                                    Total Sales
                                </p>
                                <h4 class="fs-4 mb-3 text-white">
                                    <count-to :duration="5000" :endVal="2045" :startVal="0"></count-to>
                                </h4>
                                <p class="text-white-50 mb-0">From 1930 last year</p>
                            </div>
                            <div class="flex-shrink-0 align-self-center">
                                <b-badge class="fs-12" variant="soft-light"><i
                                    class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>6.11 %<span> </span>
                                </b-badge>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>
            </b-col>


            <b-col md="6" xl="3">
                <b-card class="card-height-100" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center">
                            <div class="avatar-sm flex-shrink-0">
                <span class="
                    avatar-title
                    bg-soft-warning
                    text-warning
                    rounded-2
                    fs-2
                  ">
                  <i class="bx bxs-user-account"></i>
                </span>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <p class="text-uppercase fw-medium text-muted mb-3">
                                    Number of Users
                                </p>
                                <h4 class="fs-4 mb-3">
                                    <count-to :duration="5000" :endVal="7522" :startVal="0"></count-to>
                                </h4>
                                <p class="text-muted mb-0">From 9530 last year</p>
                            </div>
                            <div class="flex-shrink-0 align-self-center">
                                <b-badge class="badge-soft-danger fs-12" variant="soft-danger"><i
                                    class="ri-arrow-down-s-line fs-13 align-middle me-1"></i>10.35 %<span> </span>
                                </b-badge>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>
            </b-col>


            <b-col md="6" xl="3">
                <b-card class="card-height-100" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center">
                            <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-danger text-danger rounded-2 fs-2">
                  <i class="bx bxs-badge-dollar"></i>
                </span>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <p class="text-uppercase fw-medium text-muted mb-3">
                                    Total Revenue
                                </p>
                                <h4 class="fs-4 mb-3">
                                    $
                                    <count-to :duration="5000" :endVal="2845" :startVal="0"></count-to>
                                </h4>
                                <p class="text-muted mb-0">From $1,750.04 last year</p>
                            </div>
                            <div class="flex-shrink-0 align-self-center">
                                <b-badge class="badge-soft-success fs-12" variant="soft-success"><i
                                    class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>22.96 %<span> </span>
                                </b-badge>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>
            </b-col>


            <b-col md="6" xl="3">
                <b-card class="card-height-100" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center">
                            <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info text-info rounded-2 fs-2">
                  <i class="bx bx-store-alt"></i>
                </span>
                            </div>
                            <div class="flex-grow-1 ms-3">
                                <p class="text-uppercase fw-medium text-muted mb-3">
                                    Number of Stores
                                </p>
                                <h4 class="fs-4 mb-3">
                                    $
                                    <count-to :duration="5000" :endVal="405" :startVal="0"></count-to>
                                    k
                                </h4>
                                <p class="text-muted mb-0">From 308 last year</p>
                            </div>
                            <div class="flex-shrink-0 align-self-center">
                                <b-badge class="badge-soft-success fs-12" variant="soft-success"><i
                                    class="ri-arrow-up-s-line fs-13 align-middle me-1"></i>16.31 %<span> </span>
                                </b-badge>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>
            </b-col>

        </b-row>

        <b-row>
            <b-col md="6" xl="3">
                <b-card class="card-height-100" no-body>
                    <b-card-body>
                        <b-dropdown class="float-end" no-caret right
                                    toggle-class="text-decoration-none arrow-none p-0" variant="link">
                            <template #button-content><span class="text-muted fs-18"><i
                                class="mdi mdi-dots-vertical"></i></span>
                            </template>
                            <b-dropdown-item href="#">Favorite</b-dropdown-item>
                            <b-dropdown-item href="#">Apply Now</b-dropdown-item>
                        </b-dropdown>

                        <div class="mb-4 pb-2">
                            <img alt="" class="avatar-sm" src="@/assets/images/companies/img-3.png">
                        </div>
                        <b-link href="#!">
                            <h6 class="fs-15 fw-semibold">Marketing Director <span class="text-muted fs-13">(2-4 Yrs Exp.)</span>
                            </h6>
                        </b-link>
                        <p class="text-muted mb-0"><i class="ri-building-line align-bottom"></i> Themesbrand <span
                            class="ms-2"><i
                            class="ri-map-pin-2-line align-bottom"></i> California</span></p>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="6" xl="3">
                <b-card class="card-height-100" no-body>
                    <b-card-body>
                        <b-dropdown class="float-end" no-caret right
                                    toggle-class="text-decoration-none arrow-none p-0" variant="link">
                            <template #button-content><span class="text-muted fs-18"><i
                                class="mdi mdi-dots-vertical"></i></span>
                            </template>
                            <b-dropdown-item href="#">Favorite</b-dropdown-item>
                            <b-dropdown-item href="#">Apply Now</b-dropdown-item>
                        </b-dropdown>
                        <div class="mb-4 pb-2">
                            <img alt="" class="avatar-sm" src="@/assets/images/companies/img-4.png">
                        </div>
                        <b-link href="#!">
                            <h6 class="fs-15 fw-semibold">Sr. Web Designer <span
                                class="text-muted fs-13">(2+ Yrs Exp.)</span></h6>
                        </b-link>
                        <p class="text-muted mb-0"><i class="ri-building-line align-bottom"></i> Themesbrand <span
                            class="ms-2"><i
                            class="ri-map-pin-2-line align-bottom"></i> California</span></p>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="6" xl="3">
                <b-card class="card-height-100 bg-soft-primary shadow-none bg-opacity-10" no-body>
                    <b-card-body>
                        <b-dropdown class="float-end" no-caret right
                                    toggle-class="text-decoration-none arrow-none p-0" variant="link">
                            <template #button-content><span class="text-muted fs-18"><i
                                class="mdi mdi-dots-vertical"></i></span>
                            </template>
                            <b-dropdown-item href="#">Favorite</b-dropdown-item>
                            <b-dropdown-item href="#">Apply Now</b-dropdown-item>
                        </b-dropdown>
                        <div class="mb-4 pb-2">
                            <img alt="" class="avatar-sm" src="@/assets/images/companies/img-6.png">
                        </div>
                        <b-link href="#!">
                            <h6 class="fs-15 fw-semibold">Sr. Web Designer <span
                                class="text-muted fs-13">(2+ Yrs Exp.)</span></h6>
                        </b-link>
                        <p class="text-muted mb-0"><i class="ri-building-line align-bottom"></i> Themesbrand <span
                            class="ms-2"><i
                            class="ri-map-pin-2-line align-bottom"></i> California</span></p>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="6" xl="3">
                <b-card class="card-height-100 bg-soft-info shadow-none bg-opacity-10" no-body>
                    <b-card-body>
                        <b-dropdown class="float-end" no-caret right
                                    toggle-class="text-decoration-none arrow-none p-0" variant="link">
                            <template #button-content><span class="text-muted fs-18"><i
                                class="mdi mdi-dots-vertical"></i></span>
                            </template>
                            <b-dropdown-item href="#">Favorite</b-dropdown-item>
                            <b-dropdown-item href="#">Apply Now</b-dropdown-item>
                        </b-dropdown>
                        <div class="mb-4 pb-2">
                            <img alt="" class="avatar-sm" src="@/assets/images/companies/img-8.png">
                        </div>
                        <b-link href="#!">
                            <h6 class="fs-15 fw-semibold">Sr. Web Designer <span
                                class="text-muted fs-13">(2+ Yrs Exp.)</span></h6>
                        </b-link>
                        <p class="text-muted mb-0"><i class="ri-building-line align-bottom"></i> Themesbrand <span
                            class="ms-2"><i
                            class="ri-map-pin-2-line align-bottom"></i> California</span></p>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="12">
                <h5 class="text-decoration-underline mb-3 mt-2 pb-3">Other Widgets</h5>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="4">
                <b-card no-body>
                    <b-card-body class="p-0">
                        <b-alert class="border-0 rounded-top rounded-0 m-0 d-flex align-items-center" show
                                 variant="warning">
                            <alert-triangle-icon class="text-warning me-2 icon-sm"></alert-triangle-icon>
                            <div class="flex-grow-1 text-truncate">
                                Your free trial expired in <b>17</b> days.
                            </div>
                            <div class="flex-shrink-0">
                                <router-link class="text-reset text-decoration-underline" to="/pages/profile">
                                    <b>Upgrade</b>
                                </router-link>
                            </div>
                        </b-alert>

                        <b-row class="align-items-end">
                            <b-col sm="8">
                                <div class="p-3">
                                    <p class="fs-16 lh-base">
                                        Upgrade your plan from a
                                        <span class="fw-semibold">Free trial</span>, to ‘Premium
                                        Plan’ <i class="mdi mdi-arrow-right"></i>
                                    </p>
                                    <div class="mt-3">
                                        <router-link class="btn btn-success" to="/pages/profile">Upgrade Account!
                                        </router-link>
                                    </div>
                                </div>
                            </b-col>
                            <b-col sm="4">
                                <div class="px-3">
                                    <img alt="" class="img-fluid" src="@/assets/images/user-illustarator-2.png"/>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>

                </b-card>
            </b-col>

            <b-col xl="4">
                <b-card class="bg-primary" no-body>
                    <b-card-body class="p-0">
                        <b-alert class="rounded-top alert-solid alert-label-icon border-0 rounded-0 m-0 d-flex align-items-center"
                                 show
                                 variant="danger">
                            <i class="ri-error-warning-line label-icon"></i>
                            <div class="flex-grow-1 text-truncate">
                                Your free trial expired in <b>17</b> days.
                            </div>
                            <div class="flex-shrink-0">
                                <router-link class="text-reset text-decoration-underline" to="/pages/profile">
                                    <b>Upgrade</b>
                                </router-link>
                            </div>
                        </b-alert>

                        <b-row class="align-items-end">
                            <b-col sm="8">
                                <div class="p-3">
                                    <p class="fs-16 lh-base text-white">
                                        Upgrade your plan from a
                                        <span class="fw-semibold">Free trial</span>, to ‘Premium
                                        Plan’ <i class="mdi mdi-arrow-right"></i>
                                    </p>
                                    <div class="mt-3">
                                        <router-link class="btn btn-info" to="/pages/profile">Upgrade Account!
                                        </router-link>
                                    </div>
                                </div>
                            </b-col>
                            <b-col sm="4">
                                <div class="px-3">
                                    <img alt="" class="img-fluid" src="@/assets/images/user-illustarator-1.png"/>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>

                </b-card>
            </b-col>

            <b-col xl="4">
                <b-card no-body>
                    <b-card-body class="p-0">
                        <b-alert class="border-0 rounded-top rounded-0 m-0 d-flex align-items-center" show
                                 variant="warning">
                            <div class="flex-grow-1 text-truncate">
                                We will choose a gift for you in <b>5</b> days.
                            </div>
                            <div class="flex-shrink-0">
                                <router-link class="text-reset text-decoration-underline" to="/pages/profile"><b>Get
                                    Free Gift</b>
                                </router-link>
                            </div>
                        </b-alert>
                        <div class="d-flex p-3">
                            <div class="flex-shrink-0">
                                <div class="avatar-md me-3">
                  <span class="avatar-title bg-soft-danger rounded-circle fs-1">
                    <i class="ri-gift-2-line text-danger"></i>
                  </span>
                                </div>
                            </div>
                            <div>
                                <p class="fs-16 lh-base">
                                    Personalized <span class="fw-semibold">Gift Boxes</span>, with
                                    attitude, Let's collect your Xmas box
                                    <i class="mdi mdi-arrow-right"></i>
                                </p>
                                <div class="mt-3">
                                    <router-link class="btn btn-secondary" to="/pages/profile">Get a Free Gift
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>
            </b-col>

        </b-row>

        <b-row>
            <b-col lg="4">
                <b-card no-body>
                    <b-card-body>
                        <h5 class="fs-15 fw-semibold">Brand Logo Design - MD</h5>
                        <p class="text-muted">Graphics Work</p>
                        <div class="d-flex flex-wrap justify-content-evenly">
                            <p class="text-muted mb-0">
                                <i class="
                    mdi mdi-numeric-1-circle
                    text-success
                    fs-18
                    align-middle
                    me-2
                  "></i>Completed
                            </p>
                            <p class="text-muted mb-0">
                                <i class="
                    mdi mdi-numeric-3-circle
                    text-info
                    fs-18
                    align-middle
                    me-2
                  "></i>In Progress
                            </p>
                            <p class="text-muted mb-0">
                                <i class="
                    mdi mdi-numeric-2-circle
                    text-primary
                    fs-18
                    align-middle
                    me-2
                  "></i>To Do
                            </p>
                        </div>
                    </b-card-body>
                    <b-progress class="animated-progress rounded-bottom rounded-0" style="height: 6px">
                        <b-progress-bar :value="30" class="rounded-0" variant="success"/>
                        <b-progress-bar :value="50" class="rounded-0" variant="info"/>
                        <b-progress-bar :value="20" class="rounded-0" variant="primary"/>
                    </b-progress>
                </b-card>
            </b-col>

            <b-col lg="4">
                <b-card no-body>
                    <b-card-body>
                        <h5 class="fs-15 fw-semibold">Redesign - Landing Page</h5>
                        <p class="text-muted">UI/UX Design</p>
                        <div class="d-flex flex-wrap justify-content-evenly">
                            <p class="text-muted mb-0">
                                <i class="
                    mdi mdi-numeric-3-circle
                    text-success
                    fs-18
                    align-middle
                    me-2
                  "></i>Completed
                            </p>
                            <p class="text-muted mb-0">
                                <i class="
                    mdi mdi-numeric-0-circle
                    text-info
                    fs-18
                    align-middle
                    me-2
                  "></i>In Progress
                            </p>
                            <p class="text-muted mb-0">
                                <i class="
                    mdi mdi-numeric-8-circle
                    text-primary
                    fs-18
                    align-middle
                    me-2
                  "></i>To Do
                            </p>
                        </div>
                    </b-card-body>
                    <b-progress class="animated-progress rounded-bottom rounded-0" style="height: 6px">
                        <b-progress-bar :value="30" class="rounded-0" variant="success"/>
                        <b-progress-bar :value="0" class="rounded-0" variant="info"/>
                        <b-progress-bar :value="70" class="rounded-0" variant="primary"/>
                    </b-progress>
                </b-card>
            </b-col>

            <b-col lg="4">
                <b-card no-body>
                    <b-card-body>
                        <h5 class="fs-15 fw-semibold">Ecommerce App for Web</h5>
                        <p class="text-muted">CRM Project</p>
                        <div class="d-flex flex-wrap justify-content-evenly">
                            <p class="text-muted mb-0">
                                <i class="
                    mdi mdi-numeric-10-circle
                    text-success
                    fs-18
                    align-middle
                    me-2
                  "></i>Completed
                            </p>
                            <p class="text-muted mb-0">
                                <i class="
                    mdi mdi-numeric-3-circle
                    text-info
                    fs-18
                    align-middle
                    me-2
                  "></i>In Progress
                            </p>
                            <p class="text-muted mb-0">
                                <i class="
                    mdi mdi-numeric-2-circle
                    text-primary
                    fs-18
                    align-middle
                    me-2
                  "></i>To Do
                            </p>
                        </div>
                    </b-card-body>
                    <b-progress class="animated-progress rounded-bottom rounded-0" style="height: 6px">
                        <b-progress-bar :value="60" class="rounded-0" variant="success"/>
                        <b-progress-bar :value="25" class="rounded-0" variant="info"/>
                        <b-progress-bar :value="15" class="rounded-0" variant="primary"/>
                    </b-progress>
                </b-card>
            </b-col>

        </b-row>

        <b-row>
            <b-col xxl="5">
                <b-card class="card-height-100" no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Upcoming Activities</b-card-title>
                        <div class="flex-shrink-0">
                            <b-dropdown class="card-header-dropdown" no-caret right
                                        toggle-class="text-decoration-none arrow-none p-0" variant="link">
                                <template #button-content><span class="text-muted fs-18"><i
                                    class="mdi mdi-dots-vertical"></i></span>
                                </template>
                                <b-dropdown-item href="#">Edit</b-dropdown-item>
                                <b-dropdown-item href="#">Remove</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </b-card-header>

                    <b-card-body class="pt-0">
                        <ul class="list-group list-group-flush border-dashed">
                            <li class="list-group-item ps-0">
                                <b-row class="align-items-center g-3">
                                    <b-col sm="auto">
                                        <div class="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                                            <div class="text-center">
                                                <h5 class="mb-0">25</h5>
                                                <div class="text-muted">Tue</div>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col>
                                        <h5 class="text-muted mt-0 mb-1 fs-13">
                                            12:00am - 03:30pm
                                        </h5>
                                        <b-link class="text-reset fs-14 mb-0" href="#">Meeting for campaign with sales
                                            team
                                        </b-link>
                                    </b-col>
                                    <b-col sm="auto">
                                        <div class="avatar-group">
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Stine Nielsen"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-1.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Jansh Brown"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-2.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Dan Gibson"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-3.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link href="javascript: void(0);">
                                                    <div class="avatar-xxs">
                            <span class="
                                avatar-title
                                rounded-circle
                                bg-info
                                text-white
                              ">
                              5
                            </span>
                                                    </div>
                                                </b-link>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>

                            </li>

                            <li class="list-group-item ps-0">
                                <b-row class="align-items-center g-3">
                                    <b-col cols="auto">
                                        <div class="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                                            <div class="text-center">
                                                <h5 class="mb-0">20</h5>
                                                <div class="text-muted">Wed</div>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col>
                                        <h5 class="text-muted mt-0 mb-1 fs-13">
                                            02:00pm - 03:45pm
                                        </h5>
                                        <b-link class="text-reset fs-14 mb-0" href="#">Adding a new event with
                                            attachments
                                        </b-link>
                                    </b-col>
                                    <b-col sm="auto">
                                        <div class="avatar-group">
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Frida Bang"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-4.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Malou Silva"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-5.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Simon Schmidt"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-6.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Tosh Jessen"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-7.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link href="javascript: void(0);">
                                                    <div class="avatar-xxs">
                            <span class="
                                avatar-title
                                rounded-circle
                                bg-success
                                text-white
                              ">
                              3
                            </span>
                                                    </div>
                                                </b-link>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>

                            </li>

                            <li class="list-group-item ps-0">
                                <b-row class="align-items-center g-3">
                                    <b-col cols="auto">
                                        <div class="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                                            <div class="text-center">
                                                <h5 class="mb-0">17</h5>
                                                <div class="text-muted">Wed</div>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col>
                                        <h5 class="text-muted mt-0 mb-1 fs-13">
                                            04:30pm - 07:15pm
                                        </h5>
                                        <b-link class="text-reset fs-14 mb-0" href="#">Create new project Bundling
                                            Product
                                        </b-link>
                                    </b-col>
                                    <b-col sm="auto">
                                        <div class="avatar-group">
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Nina Schmidt"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-8.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Stine Nielsen"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-1.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Jansh Brown"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-2.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link href="javascript: void(0);">
                                                    <div class="avatar-xxs">
                            <span class="
                                avatar-title
                                rounded-circle
                                bg-primary
                                text-white
                              ">
                              4
                            </span>
                                                    </div>
                                                </b-link>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>

                            </li>

                            <li class="list-group-item ps-0">
                                <b-row class="align-items-center g-3">
                                    <b-col cols="auto">
                                        <div class="avatar-sm p-1 py-2 h-auto bg-light rounded-3">
                                            <div class="text-center">
                                                <h5 class="mb-0">12</h5>
                                                <div class="text-muted">Tue</div>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col>
                                        <h5 class="text-muted mt-0 mb-1 fs-13">
                                            10:30am - 01:15pm
                                        </h5>
                                        <b-link class="text-reset fs-14 mb-0" href="#">Weekly closed sales won checking
                                            with sales team
                                        </b-link>
                                    </b-col>
                                    <b-col sm="auto">
                                        <div class="avatar-group">
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Stine Nielsen"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-1.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Jansh Brown"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-5.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link class="d-inline-block" data-bs-original-title="Dan Gibson"
                                                        data-bs-placement="top"
                                                        data-bs-toggle="tooltip" href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xxs"
                                                         src="@/assets/images/users/avatar-2.jpg"/>
                                                </b-link>
                                            </div>
                                            <div class="avatar-group-item">
                                                <b-link href="javascript: void(0);">
                                                    <div class="avatar-xxs">
                            <span class="
                                avatar-title
                                rounded-circle
                                bg-warning
                                text-white
                              ">
                              9
                            </span>
                                                    </div>
                                                </b-link>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>

                            </li>

                        </ul>

                        <b-row class="align-items-center mt-2 text-center text-sm-start">
                            <b-col sm>
                                <div class="text-muted">
                                    Showing<span class="fw-semibold">4</span> of
                                    <span class="fw-semibold">125</span> Results
                                </div>
                            </b-col>
                            <b-col sm="auto">
                                <ul class="
                    pagination pagination-separated pagination-sm
                    justify-content-center justify-content-sm-start
                    mb-0
                  ">
                                    <li class="page-item disabled">
                                        <b-link class="page-link" href="#">←</b-link>
                                    </li>
                                    <li class="page-item">
                                        <b-link class="page-link" href="#">1</b-link>
                                    </li>
                                    <li class="page-item active">
                                        <b-link class="page-link" href="#">2</b-link>
                                    </li>
                                    <li class="page-item">
                                        <b-link class="page-link" href="#">3</b-link>
                                    </li>
                                    <li class="page-item">
                                        <b-link class="page-link" href="#">→</b-link>
                                    </li>
                                </ul>
                            </b-col>
                        </b-row>
                    </b-card-body>

                </b-card>

            </b-col>

            <b-col xxl="7">
                <b-row>
                    <b-col xl="6">
                        <b-card class="card-height-100" no-body>
                            <b-card-header class="align-items-center d-flex">
                                <b-card-title class="mb-0 flex-grow-1">My Tasks</b-card-title>
                                <div class="flex-shrink-0">
                                    <b-dropdown class="card-header-dropdown" no-caret right
                                                toggle-class="text-decoration-none arrow-none p-0" variant="link">
                                        <template #button-content><span class="text-muted"><i
                                            class="ri-settings-4-line align-middle me-1 fs-15"></i>Settings</span>
                                        </template>
                                        <b-dropdown-item href="#">Edit</b-dropdown-item>
                                        <b-dropdown-item href="#">Remove</b-dropdown-item>
                                    </b-dropdown>
                                </div>
                            </b-card-header>


                            <b-card-body class="p-0">
                                <div class="align-items-center p-3 justify-content-between d-flex">
                                    <div class="flex-shrink-0">
                                        <div class="text-muted">
                                            <span class="fw-semibold">4</span> of
                                            <span class="fw-semibold">10</span> remaining
                                        </div>
                                    </div>
                                    <b-button size="sm" variant="success">
                                        <i class="ri-add-line align-middle me-1"></i> Add Task
                                    </b-button>
                                </div>


                                <div data-simplebar style="max-height: 257px">
                                    <ul class="list-group list-group-flush border-dashed px-3">
                                        <li class="list-group-item ps-0">
                                            <div class="d-flex align-items-start">
                                                <div class="form-check ps-0 flex-sharink-0">
                                                    <input id="task_one" class="form-check-input ms-0" type="checkbox"/>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <label class="form-check-label mb-0 ps-2" for="task_one">Review and
                                                        make sure nothing slips
                                                        through
                                                        cracks</label>
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <p class="text-muted fs-12 mb-0">15 Sep, 2021</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item ps-0">
                                            <div class="d-flex align-items-start">
                                                <div class="form-check ps-0 flex-sharink-0">
                                                    <input id="task_two" class="form-check-input ms-0" type="checkbox"/>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <label class="form-check-label mb-0 ps-2" for="task_two">Send
                                                        meeting invites for sales
                                                        upcampaign</label>
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <p class="text-muted fs-12 mb-0">20 Sep, 2021</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item ps-0">
                                            <div class="d-flex align-items-start">
                                                <div class="form-check flex-sharink-0 ps-0">
                                                    <input id="task_three" class="form-check-input ms-0"
                                                           type="checkbox"/>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <label class="form-check-label mb-0 ps-2" for="task_three">Weekly
                                                        closed sales won checking
                                                        with sales
                                                        team</label>
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <p class="text-muted fs-12 mb-0">24 Sep, 2021</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item ps-0">
                                            <div class="d-flex align-items-start">
                                                <div class="form-check ps-0 flex-sharink-0">
                                                    <input id="task_four" class="form-check-input ms-0"
                                                           type="checkbox"/>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <label class="form-check-label mb-0 ps-2" for="task_four">Add notes
                                                        that can be viewed from
                                                        the individual
                                                        view</label>
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <p class="text-muted fs-12 mb-0">27 Sep, 2021</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item ps-0">
                                            <div class="d-flex align-items-start">
                                                <div class="form-check ps-0 flex-sharink-0">
                                                    <input id="task_five" class="form-check-input ms-0"
                                                           type="checkbox"/>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <label class="form-check-label mb-0 ps-2" for="task_five">Move stuff
                                                        to another page</label>
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <p class="text-muted fs-12 mb-0">27 Sep, 2021</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="list-group-item ps-0">
                                            <div class="d-flex align-items-start">
                                                <div class="form-check ps-0 flex-sharink-0">
                                                    <input id="task_six" class="form-check-input ms-0" type="checkbox"/>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <label class="form-check-label mb-0 ps-2" for="task_six">Styling
                                                        wireframe design and
                                                        documentation for
                                                        velzon admin</label>
                                                </div>
                                                <div class="flex-shrink-0 ms-2">
                                                    <p class="text-muted fs-12 mb-0">27 Sep, 2021</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                                <div class="p-3">
                                    <b-link class="text-muted text-decoration-underline" href="javascript:void(0);">Show
                                        more...
                                    </b-link>
                                </div>
                            </b-card-body>

                        </b-card>

                    </b-col>

                    <b-col xl="6">
                        <b-card class="card-height-100" no-body>
                            <b-card-header class="
                  border-bottom-dashed
                  align-items-center
                  d-flex
                ">
                                <b-card-title class="mb-0 flex-grow-1">Recent Activity</b-card-title>
                                <div class="flex-shrink-0">
                                    <b-button size="sm" variant="soft-primary">
                                        View All Activity
                                    </b-button>
                                </div>
                            </b-card-header>

                            <b-card-body class="p-0">
                                <div class="p-3" data-simplebar style="max-height: 364px;">
                                    <div class="acitivity-timeline acitivity-main">
                                        <div class="acitivity-item d-flex">
                                            <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                <div class="avatar-title bg-soft-success text-success rounded-circle">
                                                    <i class="ri-shopping-cart-2-line"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Purchase by James Price</h6>
                                                <p class="text-muted mb-1">Product noise evolve smartwatch</p>
                                                <small class="mb-0 text-muted">02:14 PM Today</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                <div class="avatar-title bg-soft-primary text-primary rounded-circle">
                                                    <i class="ri-stack-fill"></i>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Added new <span
                                                    class="fw-semibold">style collection</span></h6>
                                                <p class="text-muted mb-1">By Nesta Technologies</p>
                                                <div class="d-inline-flex gap-2 border border-dashed p-2 mb-2 w-75">
                                                    <b-link class="bg-light rounded p-1"
                                                            href="/ecommerce/product-details">
                                                        <img alt="" class="img-fluid d-block"
                                                             src="@/assets/images/products/img-8.png"/>
                                                    </b-link>
                                                    <b-link class="bg-light rounded p-1"
                                                            href="/ecommerce/product-details">
                                                        <img alt="" class="img-fluid d-block"
                                                             src="@/assets/images/products/img-2.png"/>
                                                    </b-link>
                                                    <b-link class="bg-light rounded p-1"
                                                            href="/ecommerce/product-details">
                                                        <img alt="" class="img-fluid d-block"
                                                             src="@/assets/images/products/img-10.png"/>
                                                    </b-link>
                                                </div>
                                                <p class="mb-0 text-muted"><small>9:47 PM Yesterday</small>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <img alt="" class="avatar-xs rounded-circle acitivity-avatar"
                                                     src="@/assets/images/users/avatar-2.jpg">
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Natasha Carey have liked the products</h6>
                                                <p class="text-muted mb-1">Allow users to like products in your
                                                    WooCommerce store.</p>
                                                <small class="mb-0 text-muted">25 Dec, 2021</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-xs acitivity-avatar">
                                                    <div class="avatar-title rounded-circle bg-secondary">
                                                        <i class="mdi mdi-sale fs-14"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Today offers by
                                                    <b-link class="link-secondary"
                                                            href="/ecommerce/seller-details">Digitech Galaxy
                                                    </b-link>
                                                </h6>
                                                <p class="text-muted mb-2">Offer is valid on orders of Rs.500 Or above
                                                    for selected products
                                                    only.</p>
                                                <small class="mb-0 text-muted">12 Dec, 2021</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-xs acitivity-avatar">
                                                    <div class="avatar-title rounded-circle bg-soft-danger text-danger">
                                                        <i class="ri-bookmark-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Favoried Product</h6>
                                                <p class="text-muted mb-2">Esther James have favorited product.</p>
                                                <small class="mb-0 text-muted">25 Nov, 2021</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-xs acitivity-avatar">
                                                    <div class="avatar-title rounded-circle bg-secondary">
                                                        <i class="mdi mdi-sale fs-14"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Flash sale starting <span class="text-primary">Tomorrow.</span>
                                                </h6>
                                                <p class="text-muted mb-0">Flash sale by
                                                    <b-link class="link-secondary fw-medium"
                                                            href="javascript:void(0);">Zoetic Fashion
                                                    </b-link>
                                                </p>
                                                <small class="mb-0 text-muted">22 Oct, 2021</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item py-3 d-flex">
                                            <div class="flex-shrink-0">
                                                <div class="avatar-xs acitivity-avatar">
                                                    <div class="avatar-title rounded-circle bg-soft-info text-info">
                                                        <i class="ri-line-chart-line"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Monthly sales report</h6>
                                                <p class="text-muted mb-2"><span class="text-danger">
                            2 days left</span> notification to submit the monthly sales report.
                                                    <b-link
                                                        class="link-warning text-decoration-underline"
                                                        href="javascript:void(0);">Reports
                                                        Builder
                                                    </b-link>
                                                </p>
                                                <small class="mb-0 text-muted">15 Oct</small>
                                            </div>
                                        </div>
                                        <div class="acitivity-item d-flex">
                                            <div class="flex-shrink-0">
                                                <img alt="" class="avatar-xs rounded-circle acitivity-avatar"
                                                     src="@/assets/images/users/avatar-3.jpg"/>
                                            </div>
                                            <div class="flex-grow-1 ms-3">
                                                <h6 class="mb-1">Frank Hook Commented</h6>
                                                <p class="text-muted mb-2 fst-italic">" A product that has reviews is
                                                    more likable to be sold
                                                    than a product. "</p>
                                                <small class="mb-0 text-muted">26 Aug, 2021</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-card-body>

                        </b-card>

                    </b-col>

                </b-row>

            </b-col>

        </b-row>

        <b-row>
            <b-col md="6" xl="4">
                <b-card class="card-height-100" no-body>
                    <div class="d-flex">
                        <div class="flex-grow-1 p-3">
                            <h5 class="mb-3">Application</h5>
                            <p class="mb-0 text-muted">
                                <b-badge class="bg-light text-success mb-0"><i
                                    class="ri-arrow-up-line align-middle"></i> 16.24 %
                                </b-badge>
                                vs. previous month
                            </p>
                        </div>
                        <div>
                            <apexchart :options="{ ...chartoptions }" :series="[{
                name: 'Results',
                data: [0, 36, 110, 95, 130]
              }]" class="apex-charts" dir="ltr" height="90px" width="140px"></apexchart>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" xl="4">
                <b-card class="card-height-100" no-body>
                    <div class="d-flex">
                        <div class="flex-grow-1 p-3">
                            <h5 class="mb-3">Interviewed</h5>
                            <p class="mb-0 text-muted">
                                <b-badge class="bg-light text-success mb-0"><i
                                    class="ri-arrow-up-line align-middle"></i> 34.24 %
                                </b-badge>
                                vs. previous month
                            </p>
                        </div>
                        <div>
                            <apexchart :options="{ ...chartoptions, ...chartcolors }" :series="[{
                name: 'Results',
                data: [0, 98, 85, 90, 67]
              }]" class="apex-charts" dir="ltr" height="90px" width="140px"></apexchart>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col md="6" xl="4">
                <b-card class="card-height-100" no-body>
                    <div class="d-flex">
                        <div class="flex-grow-1 p-3">
                            <h5 class="mb-3">Hired</h5>
                            <p class="mb-0 text-muted">
                                <b-badge class="bg-light text-success mb-0"><i
                                    class="ri-arrow-up-line align-middle"></i> 6.67 %
                                </b-badge>
                                vs. previous month
                            </p>
                        </div>
                        <div>
                            <apexchart :options="{ ...chartoptions }" :series="[{
                name: 'Results',
                data: [0, 110, 95, 75, 120]
              }]" class="apex-charts" dir="ltr" height="90px" width="140px"></apexchart>
                        </div>
                    </div>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="12">
                <h5 class="text-decoration-underline mb-3 mt-2 pb-3">
                    Chart & Map Widgets
                </h5>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="6" xxl="4">
                <b-card class="card-height-100" no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Live Users By Country</b-card-title>
                        <div class="flex-shrink-0">
                            <b-button size="sm" variant="soft-primary">
                                Export Report
                            </b-button>
                        </div>
                    </b-card-header>


                    <b-card-body>
                        <div id="users-by-country" style="height: 269px"></div>

                        <div class="table-responsive table-card mt-3">
                            <table class="
                  table table-borderless table-sm table-centered
                  align-middle
                  table-nowrap
                  mb-1
                ">
                                <thead class="
                    text-muted
                    border-dashed border border-start-0 border-end-0
                    bg-soft-light
                  ">
                                <tr>
                                    <th>Duration (Secs)</th>
                                    <th style="width: 30%">Sessions</th>
                                    <th style="width: 30%">Views</th>
                                </tr>
                                </thead>
                                <tbody class="border-0">
                                <tr>
                                    <td>0-30</td>
                                    <td>2,250</td>
                                    <td>4,250</td>
                                </tr>
                                <tr>
                                    <td>31-60</td>
                                    <td>1,501</td>
                                    <td>2,050</td>
                                </tr>
                                <tr>
                                    <td>61-120</td>
                                    <td>750</td>
                                    <td>1,600</td>
                                </tr>
                                <tr>
                                    <td>121-240</td>
                                    <td>540</td>
                                    <td>1,040</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>


            <b-col xl="6" xxl="4">
                <SessionsCounties/>

            </b-col>


            <b-col xxl="4">
                <b-card class="card-height-100" no-body>
                    <b-card-header class="border-0 align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Audiences Metrics</b-card-title>
                        <div class="hstack gap-1 justify-content-end">
                            <b-button size="sm" variant="soft-secondary">
                                ALL
                            </b-button>
                            <b-button size="sm" variant="soft-secondary">
                                1M
                            </b-button>
                            <b-button size="sm" variant="soft-secondary">
                                6M
                            </b-button>
                            <b-button size="sm" variant="soft-primary">
                                1Y
                            </b-button>
                        </div>
                    </b-card-header>

                    <b-card-header class="p-0">
                        <b-alert class="alert-warning alert-solid alert-label-icon border-0 rounded-0 m-0 d-flex align-items-center"
                                 role="alert"
                                 variant="">
                            <i class="ri-error-warning-line label-icon"></i>
                            <div class="flex-grow-1 text-truncate">
                                Your free trial expired in <b>17</b> days.
                            </div>
                            <div class="flex-shrink-0">
                                <router-link class="text-reset text-decoration-underline" to="/pages/profile">
                                    <b>Upgrade</b>
                                </router-link>
                            </div>
                        </b-alert>
                    </b-card-header>
                    <b-card-header class="p-0 border-0 bg-soft-light">
                        <b-row class="g-0 text-center">
                            <b-col cols="6" sm="4">
                                <div class="p-3 border border-dashed border-start-0">
                                    <h5 class="mb-1">
                                        <count-to :duration="5000" :endVal="854" :startVal="0"></count-to>
                                        <span class="text-success ms-1 fs-12">49%<i
                                            class="ri-arrow-right-up-line ms-1 align-middle"></i></span>
                                    </h5>
                                    <p class="text-muted mb-0">Avg. Session</p>
                                </div>
                            </b-col>

                            <b-col cols="6" sm="4">
                                <div class="p-3 border border-dashed border-start-0">
                                    <h5 class="mb-1">
                                        <count-to :duration="5000" :endVal="1278" :startVal="0"></count-to>
                                        <span class="text-success ms-1 fs-12">60%<i
                                            class="ri-arrow-right-up-line ms-1 align-middle"></i></span>
                                    </h5>
                                    <p class="text-muted mb-0">Conversion Rate</p>
                                </div>
                            </b-col>

                            <b-col cols="6" sm="4">
                                <div class="p-3 border border-dashed border-start-0 border-end-0">
                                    <h5 class="mb-1">
                                        <count-to :duration="5000" :endVal="3" :startVal="0"></count-to>
                                        m
                                        <count-to :duration="40" :endVal="3" :startVal="0"></count-to>
                                        sec
                                    </h5>
                                    <p class="text-muted mb-0">Avg. Ses. Duration</p>
                                </div>
                            </b-col>

                        </b-row>
                    </b-card-header>


                    <b-card-body class="p-0 pb-2">
                        <div>
                            <apexchart :options="audienceChartOptions.chartOptions" :series="audienceChartOptions.series" class="apex-charts" dir="ltr"
                                       height="306"></apexchart>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>

        </b-row>

        <b-row>
            <b-col xl="6" xxl="4">
                <b-card class="card-height-100" no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Sales by Locations</b-card-title>
                        <div class="flex-shrink-0">
                            <b-button size="sm" variant="soft-primary">
                                Export Report
                            </b-button>
                        </div>
                    </b-card-header>


                    <b-card-body>
                        <div id="sales-by-locations" style="height: 269px"></div>

                        <div class="px-2 py-2 mt-1">
                            <p class="mb-1">New Maxico <span class="float-end">75%</span></p>

                            <b-progress :value="75" class="mt-2" striped style="height: 6px" variant="primary"/>

                            <p class="mt-3 mb-1">
                                California <span class="float-end">47%</span>
                            </p>

                            <b-progress :value="47" class="mt-2" striped style="height: 6px" variant="primary"/>

                            <p class="mt-3 mb-1">Texas <span class="float-end">82%</span></p>

                            <b-progress :value="82" class="mt-2" striped style="height: 6px" variant="primary"/>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>


            <b-col xl="6" xxl="4">
                <b-card class="card-height-100" no-body>
                    <b-card-header class="border-bottom-dashed align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">My Portfolio</b-card-title>
                        <div>
                            <b-dropdown right size="sm" text="BTC" variant="soft-primary">
                                <b-dropdown-item href="#">BTC</b-dropdown-item>
                                <b-dropdown-item href="#">USD</b-dropdown-item>
                                <b-dropdown-item href="#">Euro</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <apexchart :options="portfolioChart.chartOptions" :series="portfolioChart.series" class="apex-charts" dir="ltr"
                                   height="210"></apexchart>

                        <ul class="list-group list-group-flush border-dashed mb-0">
                            <li class="list-group-item px-0">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 avatar-xs">
                    <span class="avatar-title bg-light p-1 rounded-circle">
                      <img alt="" class="img-fluid" src="@/assets/images/svg/crypto-icons/btc.svg"/>
                    </span>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <h6 class="mb-1">Bitcoin</h6>
                                        <p class="fs-12 mb-0 text-muted">
                                            <i class="
                          mdi mdi-circle
                          fs-10
                          align-middle
                          text-primary
                          me-1
                        "></i>BTC
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h6 class="mb-1">BTC 0.00584875</h6>
                                        <p class="text-success fs-12 mb-0">$19,405.12</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item px-0">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 avatar-xs">
                    <span class="avatar-title bg-light p-1 rounded-circle">
                      <img alt="" class="img-fluid" src="@/assets/images/svg/crypto-icons/eth.svg"/>
                    </span>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <h6 class="mb-1">Ethereum</h6>
                                        <p class="fs-12 mb-0 text-muted">
                                            <i class="mdi mdi-circle fs-10 align-middle text-info me-1"></i>ETH
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h6 class="mb-1">ETH 2.25842108</h6>
                                        <p class="text-danger fs-12 mb-0">$40552.18</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item px-0">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 avatar-xs">
                    <span class="avatar-title bg-light p-1 rounded-circle">
                      <img alt="" class="img-fluid" src="@/assets/images/svg/crypto-icons/ltc.svg"/>
                    </span>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <h6 class="mb-1">Litecoin</h6>
                                        <p class="fs-12 mb-0 text-muted">
                                            <i class="
                          mdi mdi-circle
                          fs-10
                          align-middle
                          text-warning
                          me-1
                        "></i>LTC
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h6 class="mb-1">LTC 10.58963217</h6>
                                        <p class="text-success fs-12 mb-0">$15824.58</p>
                                    </div>
                                </div>
                            </li>

                            <li class="list-group-item px-0 pb-0">
                                <div class="d-flex">
                                    <div class="flex-shrink-0 avatar-xs">
                    <span class="avatar-title bg-light p-1 rounded-circle">
                      <img alt="" class="img-fluid" src="@/assets/images/svg/crypto-icons/dash.svg"/>
                    </span>
                                    </div>
                                    <div class="flex-grow-1 ms-2">
                                        <h6 class="mb-1">Dash</h6>
                                        <p class="fs-12 mb-0 text-muted">
                                            <i class="
                          mdi mdi-circle
                          fs-10
                          align-middle
                          text-success
                          me-1
                        "></i>DASH
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0 text-end">
                                        <h6 class="mb-1">DASH 204.28565885</h6>
                                        <p class="text-success fs-12 mb-0">$30635.84</p>
                                    </div>
                                </div>
                            </li>

                        </ul>

                    </b-card-body>

                </b-card>

            </b-col>


            <b-col xxl="4">
                <b-card class="card-height-100" no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Top Referrals Pages</b-card-title>
                        <div class="flex-shrink-0">
                            <b-button size="sm" variant="soft-primary">
                                Export Report
                            </b-button>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <apexchart :options="topReferralsChart.chartOptions" :series="topReferralsChart.series" class="apex-charts" dir="ltr"
                                   height="310"></apexchart>

                        <b-row class="g-3">
                            <b-col md="6">
                                <div class="d-flex mb-3">
                                    <div class="flex-grow-1">
                                        <p class="text-truncate text-muted fs-14 mb-0">
                                            <i class="mdi mdi-circle align-middle text-primary me-2"></i>www.google.com
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <p class="mb-0">24.58%</p>
                                    </div>
                                </div>

                                <div class="d-flex mb-3">
                                    <div class="flex-grow-1">
                                        <p class="text-truncate text-muted fs-14 mb-0">
                                            <i class="mdi mdi-circle align-middle text-warning me-2"></i>www.medium.com
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <p class="mb-0">12.22%</p>
                                    </div>
                                </div>

                                <div class="d-flex">
                                    <div class="flex-grow-1">
                                        <p class="text-truncate text-muted fs-14 mb-0">
                                            <i class="mdi mdi-circle align-middle text-secondary me-2"></i>Other
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <p class="mb-0">17.58%</p>
                                    </div>
                                </div>

                            </b-col>
                            <b-col md="6">
                                <div class="d-flex mb-3">
                                    <div class="flex-grow-1">
                                        <p class="text-truncate text-muted fs-14 mb-0">
                                            <i class="mdi mdi-circle align-middle text-info me-2"></i>www.youtube.com
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <p class="mb-0">17.51%</p>
                                    </div>
                                </div>

                                <div class="d-flex mb-3">
                                    <div class="flex-grow-1">
                                        <p class="text-truncate text-muted fs-14 mb-0">
                                            <i class="mdi mdi-circle align-middle text-success me-2"></i>www.meta.com
                                        </p>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <p class="mb-0">23.05%</p>
                                    </div>
                                </div>

                            </b-col>
                        </b-row>

                        <div class="mt-2 text-center">
                            <b-link class="text-muted text-decoration-underline" href="javascript:void(0);">Show All
                            </b-link>
                        </div>
                    </b-card-body>

                </b-card>
            </b-col>

        </b-row>

        <b-row>
            <b-col cols="12">
                <h5 class="text-decoration-underline mb-3 mt-2 pb-3">Ecommerce Widgets</h5>
            </b-col>
        </b-row>

        <b-row>
            <b-col md="6" xl="3">
                <b-card class="card-height-100" no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Hot Products</b-card-title>
                        <div class="flex-shrink-0">
                            <b-link aria-expanded="false" aria-haspopup="true" class="text-muted" data-bs-toggle="dropdown"
                                    href="#">
                                View All
                            </b-link>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <swiper :autoplay="true" :pagination="{
              el: '.swiper-pagination',
              clickable: true,
            }" :slidesPerView="auto" :spaceBetween="30"
                                class="swiper mySwiper">
                            <swiper-slide style="max-width: 200px;">
                                <div>
                                    <div class="bg-soft-info rounded">
                                        <img alt="" src="@/assets/images/products/img-3.png"
                                             style="max-height: 210px;max-width: auto;"/>
                                    </div>
                                    <div class="pt-3">
                                        <h5 class="text-secondary">$99.94</h5>
                                        <b-link href="#!">
                                            <h6 class="fs-15 lh-base text-truncate mb-0">350 ml Glass Grocery
                                                Container</h6>
                                        </b-link>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide style="max-width: 200px;">
                                <div>
                                    <div class="bg-soft-success rounded">
                                        <img alt="" src="@/assets/images/products/img-4.png"
                                             style="max-height: 210px;max-width: auto;"/>
                                    </div>
                                    <div class="pt-3">
                                        <h5 class="text-secondary">$99.94</h5>
                                        <b-link href="#!">
                                            <h6 class="fs-15 lh-base text-truncate mb-0">Fabric Dual Tone Living Room
                                                Chair</h6>
                                        </b-link>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide style="max-width: 200px;">
                                <div>
                                    <div class="bg-soft-warning rounded">
                                        <img alt="" src="@/assets/images/products/img-5.png"
                                             style="max-height: 210px;max-width: auto;"/>
                                    </div>
                                    <div class="pt-3">
                                        <h5 class="text-secondary">$99.94</h5>
                                        <b-link href="#!">
                                            <h6 class="fs-15 lh-base text-truncate mb-0">Crux Motorsports Helmet</h6>
                                        </b-link>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide style="max-width: 200px;">
                                <div>
                                    <div class="bg-soft-secondary rounded">
                                        <img alt="" src="@/assets/images/products/img-6.png"
                                             style="max-height: 210px;max-width: auto;"/>
                                    </div>
                                    <div class="pt-3">
                                        <h5 class="text-secondary">$99.94</h5>
                                        <b-link href="#!">
                                            <h6 class="fs-15 lh-base text-truncate mb-0">Half Sleeve T-Shirts
                                                (Blue)</h6>
                                        </b-link>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="6" xl="3">
                <b-card class="card-height-100" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center mb-3">
                            <div class="avatar-sm me-3 flex-shrink-0">
                                <div class="avatar-title bg-soft-info rounded">
                                    <img alt="" class="avatar-xs" src="@/assets/images/products/img-6.png">
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <p class="text-muted mb-2">Adidas</p>
                                <h5 class="fs-15 mb-0">Half Sleeve T-Shirts (Blue)</h5>
                            </div>
                        </div>
                        <p class="text-muted pb-1">If you couldn't relate to the information in the previous point, you
                            might be
                            looking for the singlet T-shirt, which is also known as the half T-shirt.</p>

                        <b-row class="mb-4">
                            <b-col xl="6">
                                <h6 class="fs-14 mb-2">Sizes</h6>
                                <ul class="clothes-size list-unstyled hstack gap-2 mb-0">
                                    <li>
                                        <input id="color-1" disabled name="sizes" type="radio"/>
                                        <label
                                            class="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle"
                                            for="color-1">S</label>
                                    </li>
                                    <li>
                                        <input id="color-2" name="sizes" type="radio"/>
                                        <label
                                            class="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle"
                                            for="color-2">M</label>
                                    </li>
                                    <li>
                                        <input id="color-3" name="sizes" type="radio"/>
                                        <label
                                            class="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle"
                                            for="color-3">L</label>
                                    </li>
                                    <li>
                                        <input id="color-4" name="sizes" type="radio"/>
                                        <label
                                            class="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle"
                                            for="color-4">XL</label>
                                    </li>
                                </ul>
                            </b-col>


                            <b-col xl="6">
                                <div>
                                    <h6 class="fs-14 mb-2">Colors</h6>
                                    <div class="d-flex flex-wrap gap-2 select-color">
                                        <div v-b-tooltip.hover data-bs-toggle="tooltip" title="Out of Stock">
                                            <button class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-primary"
                                                    disabled
                                                    type="button">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div v-b-tooltip.hover data-bs-toggle="tooltip" title="03 Items Available">
                                            <button class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-secondary"
                                                    type="button">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div v-b-tooltip.hover data-bs-toggle="tooltip" title="03 Items Available">
                                            <button class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-success"
                                                    type="button">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div v-b-tooltip.hover data-bs-toggle="tooltip" title="02 Items Available">
                                            <button class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-info"
                                                    type="button">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </b-col>

                        </b-row>


                        <div class="d-flex mb-4 align-items-center">
                            <div class="flex-grow-1">
                                <h5 class="text-primary fs-18 mb-0"><span>$22.45</span> <small
                                    class="text-decoration-line-through text-muted fs-13">$37.45</small></h5>
                            </div>

                            <div class="input-step flex-shrink-0">
                                <button class="minus" type="button" @click="minusamount()">–</button>
                                <input class="product-quantity" max="100" min="0" readonly type="number" value="2">
                                <button class="plus" type="button" @click="plusamount()">+</button>
                            </div>
                        </div>

                        <b-link class="btn btn-soft-danger d-block" href="#!">Add to Cart</b-link>

                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="6" xl="3">
                <b-card no-body>
                    <b-card-body class="position-relative">
                        <h5 class="mb-3">Select Bank</h5>
                        <div class="vstack gap-2">
                            <div class="form-check card-radio">
                                <input id="listGroupRadioGrid1" class="form-check-input" name="listGroupRadioGrid"
                                       type="radio">
                                <label class="form-check-label" for="listGroupRadioGrid1">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-xs">
                                                <div class="avatar-title bg-soft-success text-success fs-18 rounded">
                                                    <i class="ri-visa-fill"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1">Visa Card</h6>
                                            <b class="pay-amount">$8,500</b>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            <div class="form-check card-radio">
                                <input id="listGroupRadioGrid2" class="form-check-input" name="listGroupRadioGrid"
                                       type="radio">
                                <label class="form-check-label" for="listGroupRadioGrid2">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-xs">
                                                <div class="avatar-title bg-soft-info text-info fs-18 rounded">
                                                    <i class="ri-bank-card-2-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1">Credit Card</h6>
                                            <b class="pay-amount">$8,326</b>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            <div class="form-check card-radio">
                                <input id="listGroupRadioGrid3" class="form-check-input" name="listGroupRadioGrid"
                                       type="radio">
                                <label class="form-check-label" for="listGroupRadioGrid3">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-xs">
                                                <div class="avatar-title bg-soft-danger text-danger fs-18 rounded">
                                                    <i class="ri-mastercard-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1">Mastercard Card</h6>
                                            <b class="pay-amount">$8,400</b>
                                        </div>
                                    </div>
                                </label>
                            </div>

                        </div>

                        <b-button id="confirm-btn" class="w-100 mt-3" type="button" variant="success"
                                  @click="selectBank">Confirm
                        </b-button>

                        <div id="notification-warn" class="position-absolute top-0 start-0 end-0 d-none">
                            <div class="alert alert-warning" role="alert">
                                Select at list one item
                            </div>
                        </div>

                        <div id="notification-overlay" class="notification-elem">
                            <div class="text-center">
                                <lottie :height="120" :options="defaultOptions"
                                        :width="120"
                                        colors="primary:#0ab39c,secondary:#405189"/>
                                <div class="mt-4 pt-2">
                                    <h5 class="mb-1 success-pay">$6,201 Payment Successfully</h5>
                                    <p class="text-muted mx-4">Aww yeah, you successfully read this important
                                        message.</p>

                                    <div>
                                        <b-button id="back-btn" class="w-sm" size="sm" type="button" variant="success"
                                                  @click="selectBankback">Back to Home
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>

            <b-col md="6" xl="3">
                <b-card class="card-height-100" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center mb-3">
                            <div class="avatar-sm me-3 flex-shrink-0">
                                <div class="avatar-title bg-soft-danger rounded">
                                    <img alt="" class="avatar-xs" src="@/assets/images/products/img-8.png">
                                </div>
                            </div>
                            <div class="flex-grow-1">
                                <p class="text-muted mb-2">Adidas</p>
                                <h5 class="fs-15 mb-0">Half Sleeve T-Shirts (Pink)</h5>
                            </div>
                        </div>
                        <p class="text-muted pb-1">If you couldn't relate to the information in the previous point, you
                            might be
                            looking for the singlet T-shirt, which is also known as the half T-shirt.</p>

                        <b-row class="mb-4">
                            <b-col xl="6">
                                <h6 class="fs-14 mb-2">Sizes</h6>
                                <ul class="clothes-size list-unstyled hstack gap-2 mb-0">
                                    <li>
                                        <input id="color-1" disabled name="sizes" type="radio"/>
                                        <label
                                            class="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle"
                                            for="color-1">S</label>
                                    </li>
                                    <li>
                                        <input id="color-2" name="sizes" type="radio"/>
                                        <label
                                            class="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle"
                                            for="color-2">M</label>
                                    </li>
                                    <li>
                                        <input id="color-3" name="sizes" type="radio"/>
                                        <label
                                            class="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle"
                                            for="color-3">L</label>
                                    </li>
                                    <li>
                                        <input id="color-4" name="sizes" type="radio"/>
                                        <label
                                            class="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle"
                                            for="color-4">XL</label>
                                    </li>
                                </ul>
                            </b-col>


                            <b-col xl="6">
                                <div>
                                    <h6 class="fs-14 mb-2">Colors</h6>
                                    <div class="d-flex flex-wrap gap-2 select-color">
                                        <div v-b-tooltip.hover data-bs-toggle="tooltip" title="Out of Stock">
                                            <button class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-primary"
                                                    disabled
                                                    type="button">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div v-b-tooltip.hover data-bs-toggle="tooltip" title="03 Items Available">
                                            <button class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-secondary"
                                                    type="button">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div v-b-tooltip.hover data-bs-toggle="tooltip" title="03 Items Available">
                                            <button class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-success"
                                                    type="button">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                        <div v-b-tooltip.hover data-bs-toggle="tooltip" title="02 Items Available">
                                            <button class="btn avatar-xs p-0 d-flex align-items-center justify-content-center border rounded-circle fs-22 text-info"
                                                    type="button">
                                                <i class="ri-checkbox-blank-circle-fill"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </b-col>

                        </b-row>


                        <div class="d-flex mb-4 align-items-center">
                            <div class="flex-grow-1">
                                <h5 class="text-primary fs-18 mb-0"><span>$48.20</span> <small
                                    class="text-decoration-line-through text-muted fs-13">$124.10</small></h5>
                            </div>

                            <div class="input-step flex-shrink-0">
                                <button class="minus" type="button" @click="minusamount()">–</button>
                                <input class="product-quantity" max="100" min="0" readonly type="number" value="2">
                                <button class="plus" type="button" @click="plusamount()">+</button>
                            </div>
                        </div>

                        <b-link class="btn btn-soft-danger d-block" href="#!">Add to Cart</b-link>

                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="5">
                <b-card no-body>
                    <b-row class="g-0">
                        <b-col lg="6">
                            <b-card-body class="border-end">
                                <div class="search-box">
                                    <input id="searchList" v-model="searchQuery" autocomplete="off"
                                           class="form-control bg-light border-light"
                                           placeholder="Search candidate..." type="text">
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                                <div class="px-3 mx-n3" data-simplebar style="max-height: 190px">
                                    <ul id="candidate-list" class="list-unstyled mb-0 pt-2">

                                        <li v-for="(data, index) of resultQuery" :key="index" @click="showdetail(data)">
                                            <b-link class="d-flex align-items-center py-2" href="javascript:void(0);">
                                                <div class="flex-shrink-0 me-2">
                                                    <div class="avatar-xs">
                                                        <img :src="data.img" alt=""
                                                             class="img-fluid rounded-circle candidate-img">
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1">
                                                    <h5 class="fs-13 mb-1 text-truncate"><span
                                                        class="candidate-name">{{ data.name }}</span> <span
                                                        class="text-muted fw-normal">{{ data.username }}</span></h5>
                                                    <div class="d-none candidate-position">{{ data.designation }}</div>
                                                </div>
                                            </b-link>
                                        </li>
                                    </ul>
                                </div>
                            </b-card-body>
                        </b-col>
                        <b-col lg="6">
                            <b-card-body class="text-center">
                                <div class="avatar-md mb-3 mx-auto">
                                    <img id="candidate-img" alt="" class="img-thumbnail rounded-circle shadow-none"
                                         src="@/assets/images/users/avatar-1.jpg">
                                </div>

                                <h5 id="candidate-name" class="mb-0">Anna Adame</h5>
                                <p id="candidate-position" class="text-muted">Web Developer</p>

                                <div class="d-flex gap-2 justify-content-center mb-3">
                                    <button v-b-tooltip.hover class="btn avatar-xs p-0" title="Google" type="button">
                    <span class="avatar-title rounded-circle bg-light text-body">
                      <i class="ri-google-line"></i>
                    </span>
                                    </button>

                                    <button v-b-tooltip.hover class="btn avatar-xs p-0" title="Linkedin" type="button">
                    <span class="avatar-title rounded-circle bg-light text-body">
                      <i class="ri-linkedin-line"></i>
                    </span>
                                    </button>
                                    <button v-b-tooltip.hover class="btn avatar-xs p-0" title="Dribbble" type="button">
                    <span class="avatar-title rounded-circle bg-light text-body">
                      <i class="ri-dribbble-fill"></i>
                    </span>
                                    </button>
                                </div>

                                <div>
                                    <b-button class="rounded-pill w-sm" type="button" variant="success"><i
                                        class="ri-add-fill me-1 align-bottom"></i> Follow
                                    </b-button>
                                </div>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>

            </b-col>

        </b-row>

        <b-row>
            <b-col cols="12">
                <h5 class="text-decoration-underline mb-3 mt-2 pb-3">Credit Card</h5>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="4">
                <b-card class="card-height-100 " no-body>
                    <b-card-header>
                        <h5 class="card-title mb-0">Credit Card - Custom</h5>
                    </b-card-header>
                    <b-card-body>
                        <div class="mx-auto" style="max-width: 350px">
                            <div class="text-bg-info bg-gradient p-4 rounded-3 mb-3">
                                <div class="d-flex">
                                    <div class="flex-grow-1">
                                        <i class="bx bx-chip h1 text-warning"></i>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <i class="bx bxl-visa display-2 mt-n3"></i>
                                    </div>
                                </div>
                                <div id="card-num-elem" class="card-number fs-20">
                                    XXXX XXXX XXXX XXXX
                                </div>

                                <b-row class="mt-4">
                                    <b-col cols="4">
                                        <div>
                                            <div class="text-white-50">Card Holder</div>
                                            <div id="card-holder-elem" class="fw-medium fs-14">Full Name</div>
                                        </div>
                                    </b-col>
                                    <b-col cols="4">
                                        <div class="expiry">
                                            <div class="text-white-50">Expires</div>
                                            <div class="fw-medium fs-14">
                                                <span id="expiry-month-elem">00</span>
                                                /
                                                <span id="expiry-year-elem">0000</span>
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col cols="4">
                                        <div>
                                            <div class="text-white-50">CVC</div>
                                            <div id="cvc-elem" class="fw-medium fs-14">---</div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                        </div>


                        <form id="custom-card-form" autocomplete="off">
                            <div class="mb-3">
                                <label class="form-label" for="card-num-input">Card Number</label>
                                <input id="card-num-input" class="form-control" maxlength="19"
                                       placeholder="0000 0000 0000 0000"
                                       @keypress="(e) => customcreditcard(e)"/>
                            </div>

                            <div class="mb-3">
                                <label class="form-label" for="card-holder-input">Card Holder</label>
                                <input id="card-holder-input" class="form-control" placeholder="Enter holder name"
                                       type="text"
                                       @keypress="(e) => customcreditcard(e)"/>
                            </div>

                            <b-row>
                                <b-col lg="4">
                                    <div>
                                        <label class="form-label" for="expiry-month-input">Expiry Month</label>
                                        <select id="expiry-month-input" class="form-select"
                                                @change="(e) => customcreditcard(e)">
                                            <option></option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>
                                </b-col>


                                <b-col lg="4">
                                    <div>
                                        <label class="form-label" for="expiry-year-input">Expiry Year</label>
                                        <select id="expiry-year-input" class="form-select"
                                                @change="(e) => customcreditcard(e)">
                                            <option></option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                            <option value="2030">2030</option>
                                        </select>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="cvc">
                                        <label class="form-label" for="cvc-input">CVC</label>
                                        <input id="cvc-input" class="form-control" maxlength="3" type="text"
                                               @keypress="(e) => customcreditcard(e)"/>
                                    </div>
                                </b-col>
                            </b-row>
                            <b-button class="w-100 mt-3" type="submit" variant="danger">Pay Now</b-button>
                        </form>
                    </b-card-body>
                </b-card>
            </b-col>


            <b-col xl="4">
                <b-card no-body>
                    <b-card-header>
                        <h5 class="card-title mb-0">Credit Card - card js plugin</h5>
                    </b-card-header>
                    <b-card-body>
                        <div class="card-wrapper mb-3"></div>

                        <div class="form-container active">
                            <form id="card-form-elem" action="" autocomplete="off">
                                <div class="mb-3">
                                    <label class="form-label" for="card-number-input">Card Number</label>
                                    <input id="card-number-input" class="form-control" placeholder="Card number"
                                           type="tel">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="card-name-input">Card Holder</label>
                                    <input id="card-name-input" class="form-control" placeholder="Full name"
                                           type="text">
                                </div>
                                <b-row>
                                    <b-col sm="6">
                                        <div class="mb-3">
                                            <label class="form-label" for="card-expiry-input">Expiry</label>
                                            <input id="card-expiry-input" class="form-control" placeholder="MM/YY"
                                                   type="tel">
                                        </div>
                                    </b-col>
                                    <b-col sm="6">
                                        <div class="mb-3">
                                            <label class="form-label" for="card-cvc-input">CVC</label>
                                            <input id="card-cvc-input" class="form-control" placeholder="CVC"
                                                   type="number">
                                        </div>
                                    </b-col>
                                </b-row>
                                <b-button class="w-100" type="submit" variant="danger">Pay Now</b-button>
                            </form>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>

        </b-row>

    </Layout>
</template>
