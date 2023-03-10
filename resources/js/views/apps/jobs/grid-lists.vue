<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

export default {
    page: {
        title: "Job Grid Lists",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Job Grid Lists",
            items: [
                {
                    text: "Jobs",
                    href: "/",
                },
                {
                    text: "Job Grid Lists",
                    active: true,
                },
            ],
            searchQuery: null,
            page: 1,
            perPage: 7,
            value: null,
            value1: null,
            status: null,
            status1: null,
            pages: [],
            jobgrid: [
                {
                    id: 1,
                    img: require("@/assets/images/companies/img-1.png"),
                    designation: "Education Training",
                    name: "Micro Design",
                    location: "Escondido,California",
                    postDate: "15 Sep, 2022",
                    status: "Active",
                    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
                    tags: ["Full Time", "Freelance", "Urgent"],
                }, {
                    id: 2,
                    img: require("@/assets/images/companies/img-2.png"),
                    designation: "Magento Developer",
                    name: "Themesbrand",
                    location: "Stordorf, Germany",
                    postDate: "15 Sep, 2022",
                    status: "Active",
                    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
                    tags: ["Part Time", "Freelance"],
                }, {
                    id: 3,
                    img: require("@/assets/images/companies/img-3.png"),
                    designation: "Product Designer",
                    name: "Themesbrand",
                    location: "Cullera, Spain",
                    postDate: "14 Sep, 2022",
                    status: "Close",
                    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
                    tags: ["Full Time", "Private"],
                }, {
                    id: 4,
                    img: require("@/assets/images/companies/img-5.png"),
                    designation: "React Developer",
                    name: "iTest Factory",
                    location: "Haren, Germany",
                    postDate: "13 Sep, 2022",
                    status: "New",
                    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
                    tags: ["Full Time", "Freelance", "Urgent"],
                }, {
                    id: 5,
                    img: require("@/assets/images/companies/img-6.png"),
                    designation: "UI/UX Designer",
                    name: "Creative Team",
                    location: "Vinninga, Sweden",
                    postDate: "13 Sep, 2022",
                    status: "Close",
                    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
                    tags: ["Part Time"],
                }, {
                    id: 6,
                    img: require("@/assets/images/companies/img-7.png"),
                    designation: "Marketing Director",
                    name: "Themesbrand",
                    location: "Zhoukou, China",
                    postDate: "12 Sep, 2022",
                    status: "New",
                    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
                    tags: ["Freelance", "Urgent"],
                }, {
                    id: 7,
                    img: require("@/assets/images/companies/img-8.png"),
                    designation: "Full Stack Engineer",
                    name: "Syntyce Solutions",
                    location: "Boroaia, Romania",
                    postDate: "11 Sep, 2022",
                    status: "Active",
                    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
                    tags: ["Full Time"],
                }, {
                    id: 8,
                    img: require("@/assets/images/companies/img-1.png"),
                    designation: "Project Manager",
                    name: "Themesbrand",
                    location: "Pazmand, Hungary",
                    postDate: "11 Sep, 2022",
                    status: "Active",
                    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
                    tags: ["Full Time", "Freelance"],
                }, {
                    id: 9,
                    img: require("@/assets/images/companies/img-2.png"),
                    designation: "HTML Developer",
                    name: "Themesbrand",
                    location: "Donsieders, Germany",
                    postDate: "10 Sep, 2022",
                    status: "Active",
                    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
                    tags: ["Part Time", "Freelance"],
                }, {
                    id: 10,
                    img: require("@/assets/images/companies/img-3.png"),
                    designation: "Business Associate",
                    name: "Themesbrand",
                    location: "Sermerieu, France",
                    postDate: "09 Sep, 2022",
                    status: "Active",
                    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
                    tags: ["Full Time", "Freelance", "Urgent"],
                }, {
                    id: 11,
                    img: require("@/assets/images/companies/img-5.png"),
                    designation: "Assistant / Store Keeper",
                    name: "Force Medicines",
                    location: "San Lorenzo, Philippines",
                    postDate: "08 Sep, 2022",
                    status: "Close",
                    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
                    tags: ["Part Time"],
                }, {
                    id: 12,
                    img: require("@/assets/images/companies/img-6.png"),
                    designation: "Product Sales Specialist",
                    name: "Themesbrand",
                    location: "Pazmand, Hungary",
                    postDate: "08 Sep, 2022",
                    status: "Active",
                    description: "As a Product Designer, you will work within a Product Delivery Team fused with UX, engineering, product and data talent.",
                    tags: ["Full Time", "Private"],
                }
            ]

        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.jobgrid);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.name.toLowerCase().includes(search) ||
                        data.designation.toLowerCase().includes(search) ||
                        data.postDate.toLowerCase().includes(search) ||
                        data.description.toLowerCase().includes(search) ||
                        data.location.toLowerCase().includes(search)
                    );
                });
            } else if (this.status !== null || this.value !== null) {
                return this.displayedPosts.filter((data) => {
                    if (this.status != null && this.value != null) {
                        if (data.tags.includes(this.value)) {
                            if (this.status == data.status) {
                                return data;
                            } else if (this.status == 'All') {
                                return data;
                            }
                        } else if (this.value == 'All' && this.status == 'All') {
                            return data;
                        } else if (this.value == 'All') {
                            if (data.status == this.status) {
                                return data;
                            }
                        }
                    } else if (this.status === data.status) {
                        return data;
                    } else if (data.tags.includes(this.value)) {
                        return data;
                    } else {
                        return null;
                    }
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        jobgrid() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        SearchData() {
            this.resultQuery;
            this.status = this.status1;
            this.value = this.value1;
        },
        setPages() {
            let numberOfPages = Math.ceil(this.jobgrid.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(jobgrid) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return jobgrid.slice(from, to);
        }
    },
    components: {
        Layout,
        PageHeader,
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-body>
                        <b-form>
                            <b-row class="g-3">
                                <b-col sm="12" xxl="4">
                                    <div class="search-box">
                                        <input id="searchJob" v-model="searchQuery"
                                               autocomplete="off"
                                               class="form-control search bg-light border-light"
                                               placeholder="Search for jobs or companies..."
                                               type="text">
                                        <i class="ri-search-line search-icon"></i>
                                    </div>
                                </b-col>
                                <b-col sm="4" xxl="3">
                                    <input id="datepicker" class="form-control bg-light border-light"
                                           data-date-format="d M, Y"
                                           data-provider="flatpickr" data-range-date="true" placeholder="Select date"
                                           type="text">
                                </b-col>
                                <b-col sm="4" xxl="2">
                                    <div class="input-light">
                                        <select id="idType" v-model="value1" class="form-control"
                                                data-choices
                                                data-choices-search-false name="choices-idType">
                                            <option selected value="All">All</option>
                                            <option value="Full Time">Full Time</option>
                                            <option value="Part Time">Part Time</option>
                                            <option value="Intership">Intership</option>
                                            <option value="Freelance">Freelance</option>
                                        </select>
                                    </div>
                                </b-col>
                                <b-col sm="4" xxl="2">
                                    <div class="input-light">
                                        <select id="idStatus" v-model="status1" class="form-control"
                                                data-choices
                                                data-choices-search-false name="choices-single-default">
                                            <option selected value="All">All</option>
                                            <option value="Active">Active</option>
                                            <option value="New">New</option>
                                            <option value="Close">Close</option>
                                        </select>
                                    </div>
                                </b-col>
                                <b-col sm="4" xxl="1">
                                    <b-button class="w-100" type="button" variant="primary" @click="SearchData">
                                        <i class="ri-equalizer-fill me-1 align-bottom"></i> Filters
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="12">
                <div class="d-flex align-items-center mb-4">
                    <div class="flex-grow-1">
                        <p class="text-muted fs-14 mb-0">Result: <span id="total-result">{{ resultQuery.length }}</span>
                        </p>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="dropdown">
                            <b-link id="dropdownMenuLink" aria-expanded="false" class="text-muted fs-14 dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#" role="button">
                                All View
                            </b-link>
                            <ul aria-labelledby="dropdownMenuLink" class="dropdown-menu">
                                <li>
                                    <b-link class="dropdown-item" href="#">Action</b-link>
                                </li>
                                <li>
                                    <b-link class="dropdown-item" href="#">Another action</b-link>
                                </li>
                                <li>
                                    <b-link class="dropdown-item" href="#">Something else here</b-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
        <b-row id="job-list">
            <b-col id="job-widget" lg="3" md="6" style="display: block;">
                <b-card class="card-height-100 bg-info bg-job" no-body>
                    <b-card-body class="p-5">
                        <h2 class="lh-base text-white">Velzon invites young professionals for an intership!</h2>
                        <p class="text-white-75 mb-0 fs-14">Don't miss your opportunity to improve your skills!</p>
                        <div class="mt-5 pt-2">
                            <b-button class="w-100" type="button" variant="light">
                                View More
                                <i class="ri-arrow-right-line align-bottom"></i>
                            </b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col v-for="(data, index) of resultQuery" :key="index" lg="3" md="6">
                <b-card no-body>
                    <b-card-body>
                        <b-button aria-pressed="true" class="btn-icon float-end" data-bs-toggle="button"
                                  type="button"
                                  variant="soft-primary">
                            <i class="mdi mdi-cards-heart fs-16"></i>
                        </b-button>
                        <div class="avatar-sm mb-4">
                            <div class="avatar-title bg-light rounded"><img :src="data.img" alt="" class="avatar-xxs">
                            </div>
                        </div>
                        <b-link href="#!">
                            <h5>{{ data.designation }}</h5>
                        </b-link>
                        <p class="text-muted">{{ data.name }}</p>
                        <div class="d-flex gap-4 mb-3">
                            <div><i class="ri-map-pin-2-line text-primary me-1 align-bottom"></i>{{ data.location }}
                            </div>
                            <div><i class="ri-time-line text-primary me-1 align-bottom"></i>{{ data.postDate }}</div>
                        </div>
                        <p class="text-muted">{{ data.description }}</p>
                        <div class="hstack gap-2">
              <span v-for="(tag, index) of data.tags" :key="index">
                &nbsp;<span :class="{
                  'badge-soft-success': tag == 'Full Time',
                  'badge-soft-warning': tag == 'Part Time',
                  'badge-soft-danger': tag == 'Urgent',
                  'badge-soft-primary': tag == 'Freelance',
                  'badge-soft-info': tag == 'Private'
                }" class="badge"> {{ tag }}</span>
              </span>
                        </div>
                        <div class="mt-4 hstack gap-2">
                            <b-link class="btn btn-soft-primary w-100" href="#!">Apply Job</b-link>
                            <b-link class="btn btn-soft-success w-100" href="/jobs/details">Overview</b-link>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>


        </b-row>
        <b-row id="pagination-element" class="g-0 justify-content-end mb-4">
            <b-col sm="6">
                <div
                    v-if="pages.length > 1"
                    class="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                    <div class="page-item">
                        <b-link v-if="page != 1" id="page-prev" class="page-link" href="#" @click="page--">Previous
                        </b-link>
                    </div>
                    <span id="page-num" class="pagination">
            <div v-for="(pageNumber, index) in pages" :key="index"
                 :class="{ active: pageNumber == page, disabled: pageNumber == '...', }" class="page-item"
                 @click="page = pageNumber">
              <b-link class="page-link clickPageNumber" href="javascript:void(0);">{{ pageNumber }}</b-link>
            </div>
          </span>
                    <div class="page-item">
                        <b-link v-if="page < pages.length" id="page-next" class="page-link" href="#" @click="page++">
                            Next
                        </b-link>
                    </div>
                </div>
            </b-col>
        </b-row>

    </Layout>
</template>
