<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import PageHeader from "@/components/page-header";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
    page: {
        title: "Sellers",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    data() {
        return {
            title: "Sellers",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Sellers",
                    active: true,
                },
            ],
            modalShow: false,
            searchQuery: null,
            date: null,
            value: null,
            chartOptions: {
                chart: {
                    type: "area",
                    height: 50,
                    sparkline: {
                        enabled: true,
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.45,
                        opacityTo: 0.05,
                        stops: [20, 100, 100, 100],
                    },
                },
                stroke: {
                    curve: "smooth",
                    width: 2,
                },
                colors: ["#f44336"],
                tooltip: {
                    fixed: {
                        enabled: false,
                    },
                    x: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return "";
                            },
                        },
                    },
                    marker: {
                        show: false,
                    },
                },
            },
            sellersList: [
                {
                    id: 1,
                    isTrending: true,
                    img: require("@/assets/images/companies/img-1.png"),
                    label: "Force Medicines",
                    name: "David Marshall",
                    stock: "452",
                    balance: "$45,415",
                    series: [{data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]}],
                    chartcolor: "#f44336",
                },
                {
                    id: 2,
                    isTrending: false,
                    img: require("@/assets/images/companies/img-2.png"),
                    label: "Micro Design",
                    name: "Katia Stapleton",
                    stock: "784",
                    balance: "$97,642",
                    series: [{data: [12, 14, 2, 47, 42, 15, 35, 75, 20, 67, 89]}],
                    chartcolor: "#67b173",
                },
                {
                    id: 3,
                    isTrending: false,
                    img: require("@/assets/images/companies/img-3.png"),
                    label: "Nesta Technologies",
                    name: "Harley Fuller",
                    stock: "320",
                    balance: "$27,102",
                    series: [{data: [45, 20, 8, 42, 30, 5, 35, 79, 22, 54, 64]}],
                    chartcolor: "#ffc84b",
                },
                {
                    id: 4,
                    isTrending: true,
                    img: require("@/assets/images/companies/img-4.png"),
                    series: [{data: [26, 15, 48, 12, 47, 19, 35, 19, 85, 68, 50]}],
                    chartcolor: "#67b173",
                    label: "iTest Factory",
                    name: "Oliver Tyler",
                    stock: "159",
                    balance: "$14,933",
                },
                {
                    id: 5,
                    isTrending: false,
                    img: require("@/assets/images/companies/img-5.png"),
                    series: [{data: [60, 67, 12, 49, 6, 78, 63, 51, 33, 8, 16]}],
                    chartcolor: "#ffc84b",
                    label: "Meta4Systems",
                    name: "Zoe Dennis",
                    stock: "363",
                    balance: "$73,426",
                },
                {
                    id: 6,
                    isTrending: true,
                    img: require("@/assets/images/companies/img-6.png"),
                    series: [{data: [78, 63, 51, 33, 8, 16, 60, 67, 12, 49]}],
                    chartcolor: "#67b173",
                    label: "Digitech Galaxy",
                    name: "John Roberts",
                    stock: "412",
                    balance: "$34,241",
                },
                {
                    id: 7,
                    isTrending: true,
                    img: require("@/assets/images/companies/img-7.png"),
                    series: [{data: [15, 35, 75, 20, 67, 8, 42, 30, 5, 35]}],
                    chartcolor: "#f44336",
                    label: "Syntyce Solutions",
                    name: "Demi Allen",
                    stock: "945",
                    balance: "$17,200",
                },
                {
                    id: 8,
                    isTrending: false,
                    img: require("@/assets/images/companies/img-8.png"),
                    series: [{data: [45, 32, 68, 55, 36, 10, 48, 25, 74, 54]}],
                    chartcolor: "#ffc84b",
                    label: "Zoetic Fashion",
                    name: "James Bowen",
                    stock: "784",
                    balance: "$97,642",
                },
            ],
        };
    },
    components: {
        Layout,
        PageHeader,
        Multiselect,
        flatPickr
    },
    computed: {
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.sellersList.filter((data) => {
                    return (
                        data.balance.toLowerCase().includes(search) ||
                        data.chartcolor.toLowerCase().includes(search) ||
                        data.label.toLowerCase().includes(search) ||
                        data.name.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.sellersList;
            }
        },
    }
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-card no-body>
            <b-card-header class="border-0 rounded">
                <b-row class="g-2">
                    <b-col xl="3">
                        <div class="search-box">
                            <input v-model="searchQuery" class="form-control search"
                                   placeholder="Search for sellers & owner name or something..." type="text"/>
                            <i class="ri-search-line search-icon"></i>
                        </div>
                    </b-col>
                    <b-col class="ms-auto" xxl="3">
                        <div>
                            <Multiselect v-model="value" :close-on-select="true" :create-option="true" :options="[
                  { value: '', label: 'Select Categories' },
                  { value: 'All', label: 'All' },
                  { value: 'Retailer', label: 'Retailer' },
                  { value: 'Health & Medicine', label: 'Health & Medicine' },
                  { value: 'Manufacturer', label: 'Manufacturer' },
                  { value: 'Food Service', label: 'Food Service' },
                  { value: 'Computers & Electronics', label: 'Computers & Electronics' },

                ]"
                                         :searchable="true" class="form-control"/>
                        </div>
                    </b-col>
                    <b-col lg="auto">
                        <div class="hstack gap-2">
                            <b-button type="button" variant="danger">
                                <i class="ri-equalizer-fill me-1 align-bottom"></i> Filters
                            </b-button>
                            <b-button variant="success" @click="modalShow = !modalShow">
                                <i class="ri-add-fill me-1 align-bottom"></i> Add Seller
                            </b-button>
                        </div>
                    </b-col>
                </b-row>
            </b-card-header>
        </b-card>

        <b-row class="mt-4">
            <b-col v-for="(item, index) of resultQuery" :key="index" lg="6" xl="3">
                <b-card class="ribbon-box right overflow-hidden" no-body>
                    <b-card-body class="text-center p-4">
                        <div v-if="item.isTrending == true" class="ribbon ribbon-info ribbon-shape trending-ribbon">
                            <i class="ri-flashlight-fill text-white align-bottom"></i>
                            <span class="trending-ribbon-text">Trending</span>
                        </div>
                        <img :src="item.img" alt="" height="45"/>
                        <h5 class="mb-1 mt-4">
                            <router-link class="link-primary" to="/ecommerce/seller-details">{{
                                    item.label
                                }}
                            </router-link>
                        </h5>
                        <p class="text-muted mb-4">{{ item.name }}</p>
                        <b-row class="justify-content-center">
                            <b-col lg="8">
                                <apexchart :options="{ ...chartOptions, ...{ colors: [item.chartcolor] } }"
                                           :series="item.series" class="apex-charts" dir="ltr"
                                           height="50"></apexchart>
                            </b-col>
                        </b-row>
                        <b-row class="mt-4">
                            <b-col class="border-end-dashed border-end" lg="6">
                                <h5>{{ item.stock }}</h5>
                                <span class="text-muted">Item Stock</span>
                            </b-col>
                            <b-col lg="6">
                                <h5>{{ item.balance }}</h5>
                                <span class="text-muted">Wallet Balance</span>
                            </b-col>
                        </b-row>
                        <div class="mt-4">
                            <router-link class="btn btn-light w-100" to="/ecommerce/seller-details">View Details
                            </router-link>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row class="g-0 text-center text-sm-start align-items-center mb-3">
            <b-col sm="6">
                <div>
                    <p class="mb-sm-0">Showing 1 to 8 of 12 entries</p>
                </div>
            </b-col>
            <b-col sm="6">
                <ul class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                    <li class="page-item disabled">
                        <b-link class="page-link" href="#"><i class="mdi mdi-chevron-left"></i></b-link>
                    </li>
                    <li class="page-item active">
                        <b-link class="page-link" href="#">1</b-link>
                    </li>
                    <li class="page-item">
                        <b-link class="page-link" href="#">2</b-link>
                    </li>
                    <li class="page-item">
                        <b-link class="page-link" href="#">3</b-link>
                    </li>
                    <li class="page-item">
                        <b-link class="page-link" href="#">4</b-link>
                    </li>
                    <li class="page-item">
                        <b-link class="page-link" href="#">5</b-link>
                    </li>
                    <li class="page-item">
                        <b-link class="page-link" href="#"><i class="mdi mdi-chevron-right"></i></b-link>
                    </li>
                </ul>
            </b-col>
        </b-row>

        <b-modal v-model="modalShow" body-class="p-0" centered class="v-modal-custom" content-class="border-0 mt-3"
                 hide-footer
                 modal-class="zoomIn" size="lg" title="Add Seller">
            <div class="modal-content border-0 mt-3">
                <ul class="nav nav-tabs nav-tabs-custom nav-success p-2 pb-0 bg-light" role="tablist">
                    <li class="nav-item">
                        <b-link aria-selected="true" class="nav-link active" data-bs-toggle="tab"
                                href="#personalDetails"
                                role="tab">
                            Personal Details
                        </b-link>
                    </li>
                    <li class="nav-item">
                        <b-link aria-selected="false" class="nav-link" data-bs-toggle="tab" href="#businessDetails"
                                role="tab">
                            Business Details
                        </b-link>
                    </li>
                    <li class="nav-item">
                        <b-link aria-selected="false" class="nav-link" data-bs-toggle="tab" href="#bankDetails"
                                role="tab">
                            Bank Details
                        </b-link>
                    </li>
                </ul>
            </div>
            <div class="modal-body">
                <div class="tab-content">
                    <div id="personalDetails" class="tab-pane active" role="tabpanel">
                        <b-form action="#">
                            <b-row>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="firstnameInput">First Name</label>
                                        <input id="firstnameInput" class="form-control"
                                               placeholder="Enter your firstname"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="lastnameInput">Last Name</label>
                                        <input id="lastnameInput" class="form-control" placeholder="Enter your lastname"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="contactnumberInput">Contact Number</label>
                                        <input id="contactnumberInput" class="form-control"
                                               placeholder="Enter your number"
                                               type="number"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="phonenumberInput">Phone Number</label>
                                        <input id="phonenumberInput" class="form-control"
                                               placeholder="Enter your number"
                                               type="number"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="emailidInput">Email</label>
                                        <input id="emailidInput" class="form-control" placeholder="Enter your email"
                                               type="email"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="birthdayidInput">Date of Birth</label>
                                        <flat-pickr v-model="date" class="form-control flatpickr-input"
                                                    placeholder="Enter your date of birth">
                                        </flat-pickr>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="mb-3">
                                        <label class="form-label" for="cityidInput">City</label>
                                        <input id="cityidInput" class="form-control" placeholder="Enter your city"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="mb-3">
                                        <label class="form-label" for="countryidInput">Country</label>
                                        <input id="countryidInput" class="form-control" placeholder="Enter your country"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="mb-3">
                                        <label class="form-label" for="zipcodeidInput">Zip Code</label>
                                        <input id="zipcodeidInput" class="form-control" placeholder="Enter your zipcode"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="12">
                                    <div class="mb-3">
                                        <label class="form-label" for="exampleFormControlTextarea1">Description</label>
                                        <textarea id="exampleFormControlTextarea1" class="form-control"
                                                  placeholder="Enter description"
                                                  rows="3"></textarea>
                                    </div>
                                </b-col>
                                <b-col lg="12">
                                    <div class="hstack gap-2 justify-content-end">
                                        <b-button class="link-success text-decoration-none fw-medium" type="button"
                                                  variant="link"
                                                  @click="modalShow = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-button>
                                        <b-button type="button" variant="primary">
                                            <i class="ri-save-3-line align-bottom me-1"></i> Save
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-form>
                    </div>
                    <div id="businessDetails" class="tab-pane" role="tabpanel">
                        <b-form action="#">
                            <b-row>
                                <b-col lg="12">
                                    <div class="mb-3">
                                        <label class="form-label" for="companynameInput">Company Name</label>
                                        <input id="companynameInput" class="form-control"
                                               placeholder="Enter your company name"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="choices-single-default">Company Type</label>
                                        <select id="choices-single-default" class="form-control" data-trigger
                                                name="choices-single-default">
                                            <option value="">Select type</option>
                                            <option selected value="All">All</option>
                                            <option value="Merchandising">Merchandising</option>
                                            <option value="Manufacturing">Manufacturing</option>
                                            <option value="Partnership">Partnership</option>
                                            <option value="Corporation">Corporation</option>
                                        </select>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="pancardInput">Pan Card Number</label>
                                        <input id="pancardInput" class="form-control"
                                               placeholder="Enter your pan-card number"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="mb-3">
                                        <label class="form-label" for="websiteInput">Website</label>
                                        <input id="websiteInput" class="form-control" placeholder="Enter your URL"
                                               type="url"/>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="mb-3">
                                        <label class="form-label" for="faxInput">Fax</label>
                                        <input id="faxInput" class="form-control" placeholder="Enter your fax"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="mb-3">
                                        <label class="form-label" for="companyemailInput">Email</label>
                                        <input id="companyemailInput" class="form-control"
                                               placeholder="Enter your email"
                                               type="email"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="worknumberInput">Number</label>
                                        <input id="worknumberInput" class="form-control" placeholder="Enter your number"
                                               type="number"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="companylogoInput">Company Logo</label>
                                        <input id="companylogoInput" class="form-control" type="file"/>
                                    </div>
                                </b-col>
                                <b-col lg="12">
                                    <div class="hstack gap-2 justify-content-end">
                                        <b-button class="link-success text-decoration-none fw-medium" variant="link"
                                                  @click="modalShow = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-button>
                                        <b-button type="submit" variant="primary">
                                            <i class="ri-save-3-line align-bottom me-1"></i> Save
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-form>
                    </div>
                    <div id="bankDetails" class="tab-pane" role="tabpanel">
                        <b-form action="#">
                            <b-row>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="banknameInput">Bank Name</label>
                                        <input id="banknameInput" class="form-control"
                                               placeholder="Enter your bank name"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="branchInput">Branch</label>
                                        <input id="branchInput" class="form-control" placeholder="Branch" type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="12">
                                    <div class="mb-3">
                                        <label class="form-label" for="accountnameInput">Account Holder Name</label>
                                        <input id="accountnameInput" class="form-control"
                                               placeholder="Enter account holder name"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="accountnumberInput">Account Number</label>
                                        <input id="accountnumberInput" class="form-control"
                                               placeholder="Enter account number"
                                               type="number"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="ifscInput">IFSC</label>
                                        <input id="ifscInput" class="form-control" placeholder="IFSC" type="number"/>
                                    </div>
                                </b-col>
                                <b-col lg="12">
                                    <div class="hstack gap-2 justify-content-end">
                                        <b-button class="link-success text-decoration-none fw-medium" variant="link"
                                                  @click="modalShow = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-button>
                                        <b-button type="submit" variant="primary">
                                            <i class="ri-save-3-line align-bottom me-1"></i> Save
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-form>
                    </div>
                </div>
            </div>
        </b-modal>

    </Layout>
</template>
