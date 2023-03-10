<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

export default {
    page: {
        title: "Deals",
        meta: [{
            name: "description",
            content: appConfig.description
        }],
    },
    components: {
        Layout,
        PageHeader,
        Multiselect,
        flatPickr
    },
    data() {
        return {
            title: "Deals",
            items: [{
                text: "CRM",
                href: "/",
            },
                {
                    text: "Deals",
                    active: true,
                },
            ],
            modalShow: false,
            value: null,
            date: null,
            timeConfig: {
                enableTime: false,
                dateFormat: "d M, Y",
            },
        };
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-card no-body>
            <b-card-body>
                <b-row class="g-3">
                    <b-col md="3">
                        <div class="search-box">
                            <input class="form-control search" placeholder="Search for deals..." type="text">
                            <i class="ri-search-line search-icon"></i>
                        </div>
                    </b-col>
                    <b-col class="ms-auto" md="auto">
                        <div class="d-flex hastck gap-2 flex-wrap">
                            <div class="d-flex align-items-center gap-2">
                                <span class="text-muted flex-shrink-0">Sort by: </span>

                                <Multiselect v-model="value" :close-on-select="true" :create-option="true"
                                             :options="[
                                        { value: 'Owner', label: 'Owner' },
                                        { value: 'Company', label: 'Company' },
                                        { value: 'Date', label: 'Date' },

                                    ]" :searchable="true" class="form-control" style="width:130px;"/>

                            </div>
                            <b-button variant="success" @click="modalShow = !modalShow">
                                <i class="ri-add-fill align-bottom me-1"></i> Add Deals
                            </b-button>
                            <div class="dropdown">
                                <button id="dropdownMenuButton1" aria-expanded="false"
                                        class="btn btn-soft-info btn-icon fs-14"
                                        data-bs-toggle="dropdown" type="button">
                                    <i class="ri-settings-4-line"></i>
                                </button>
                                <ul aria-labelledby="dropdownMenuButton1" class="dropdown-menu">
                                    <li>
                                        <b-link class="dropdown-item" href="#">Copy</b-link>
                                    </li>
                                    <li>
                                        <b-link class="dropdown-item" href="#">Move to pipline</b-link>
                                    </li>
                                    <li>
                                        <b-link class="dropdown-item" href="#">Add to exceptions</b-link>
                                    </li>
                                    <li>
                                        <b-link class="dropdown-item" href="#">Switch to common form view</b-link>
                                    </li>
                                    <li>
                                        <b-link class="dropdown-item" href="#">Reset form view to default</b-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>

        <b-row class="row-cols-xxl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
            <b-col>
                <b-card no-body>
                    <b-link v-b-toggle.leadDiscovered class="card-header bg-soft-danger" role="button">
                        <h5 class="card-title text-uppercase fw-semibold mb-1 fs-15">Lead Discovered</h5>
                        <p class="text-muted mb-0">$265,200 <span class="fw-medium">4 Deals</span></p>
                    </b-link>
                </b-card>
                <b-collapse id="leadDiscovered" visible>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.leadDiscovered1 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-1.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Managing sales team meeting</h6>
                                    <p class="text-muted mb-0">$87k - 01 Jan, 2022</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="leadDiscovered1" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.leadDiscovered2 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-2.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Airbnb React Development</h6>
                                    <p class="text-muted mb-0">$20.3k - 24 Dec, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="leadDiscovered2" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1 ribbon-box ribbon-fill ribbon-sm" no-body>
                        <div class="ribbon ribbon-info"><i class="ri-flashlight-fill"></i></div>
                        <b-card-body>
                            <b-link v-b-toggle.leadDiscovered3 class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-3.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Discovery Capital</h6>
                                    <p class="text-muted mb-0">$124.3k - 29 Dec, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="leadDiscovered3" class="border-top border-top-dashed show" visible>
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card no-body>
                        <b-card-body>
                            <b-link v-b-toggle.leadDiscovered4 class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-4.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Airbnb React Development</h6>
                                    <p class="text-muted mb-0">$33.6k - 24 Dec, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="leadDiscovered4" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                </b-collapse>
            </b-col>

            <b-col>
                <b-card no-body>
                    <b-link v-b-toggle.contactInitiated class="card-header bg-soft-success" role="button">
                        <h5 class="card-title text-uppercase fw-semibold mb-1 fs-15">Contact Initiated</h5>
                        <p class="text-muted mb-0">$108,700 <span class="fw-medium">5 Deals</span></p>
                    </b-link>
                </b-card>
                <b-collapse id="contactInitiated" visible>
                    <b-card class="mb-1 ribbon-box ribbon-fill ribbon-sm" no-body>
                        <div class="ribbon ribbon-info"><i class="ri-flashlight-fill"></i></div>
                        <b-card-body>
                            <b-link v-b-toggle.contactInitiated1 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-5.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Custom Mobile Apps</h6>
                                    <p class="text-muted mb-0">$28.7k - 13 Dec, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="contactInitiated1" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.contactInitiated2 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/brands/github.png"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Investment Deal for Zoetic Fashion</h6>
                                    <p class="text-muted mb-0">$32.8k - 10 Oct, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="contactInitiated2" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Zoetic Fashion
                                    <b-badge class="badge-soft-warning" tag="small" variant="soft-warning">25
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Today at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.contactInitiated3 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-6.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Modern Design</h6>
                                    <p class="text-muted mb-0">$23k - 03 Oct, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="contactInitiated3" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Micro Design
                                    <b-badge class="badge-soft-success" tag="small" variant="soft-success">2
                                        Month
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Today at 11:58AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.contactInitiated4 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-7.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Hotel Logo Design</h6>
                                    <p class="text-muted mb-0">$10.9k - 05 Jan, 2022</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="contactInitiated4" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card no-body>
                        <b-card-body>
                            <b-link v-b-toggle.contactInitiated5 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/brands/mail_chimp.png"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Managing Sales</h6>
                                    <p class="text-muted mb-0">$13.3k - 04 Sep, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="contactInitiated5" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                </b-collapse>
            </b-col>

            <b-col>
                <b-card no-body>
                    <b-link v-b-toggle.needsIdentified class="card-header bg-soft-warning" role="button">
                        <h5 class="card-title text-uppercase fw-semibold mb-1 fs-15">Needs Identified</h5>
                        <p class="text-muted mb-0">$708,200 <span class="fw-medium">7 Deals</span></p>
                    </b-link>
                </b-card>
                <b-collapse id="needsIdentified" visible>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.needsIdentified1 class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-9.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Art Studio Design</h6>
                                    <p class="text-muted mb-0">$147.5k - 24 Sep, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="needsIdentified1" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Alexis Clarke
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">7
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Alexis</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.needsIdentified2 class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-8.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Billing Page Bug</h6>
                                    <p class="text-muted mb-0">$15.8k - 17 Dec, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="needsIdentified2" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Meta4Systems
                                    <b-badge class="badge-soft-warning" variant="soft-warning">35
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Mary</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.needsIdentified3 class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/brands/dribbble.png"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Food Selection Platform</h6>
                                    <p class="text-muted mb-0">$72.5k - 04 Jan, 2022</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="needsIdentified3" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Syntyce Solutions
                                    <b-badge class="badge-soft-danger" variant="soft-danger">15
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1 ribbon-box ribbon-fill ribbon-sm" no-body>
                        <div class="ribbon ribbon-info"><i class="ri-flashlight-fill"></i></div>
                        <b-card-body>
                            <b-link v-b-toggle.needsIdentified4 class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-1.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Skote React Development</h6>
                                    <p class="text-muted mb-0">$89.8 - 21 Nov, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="needsIdentified4" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Themesbrand
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">3
                                        Month
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1 ribbon-box ribbon-fill ribbon-sm" no-body>
                        <div class="ribbon ribbon-info"><i class="ri-flashlight-fill"></i></div>
                        <b-card-body>
                            <b-link v-b-toggle.needsIdentified5 class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-2.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Velzon - Admin Dashboard</h6>
                                    <p class="text-muted mb-0">$126.7k - 30 Dec, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="needsIdentified5" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Themesbrand
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">3 Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Nancy</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.needsIdentified6 class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/companies/img-6.png"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Wood Elements Design</h6>
                                    <p class="text-muted mb-0">$120.2k - 24 Nov, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="needsIdentified6" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">iTest Factory
                                    <b-badge class="badge-soft-warning" tag="small" variant="soft-warning">42
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card no-body>
                        <b-card-body>
                            <b-link v-b-toggle.needsIdentified7 class="d-flex align-items-center">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-10.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">PayPal SEO audit</h6>
                                    <p class="text-muted mb-0">$135.7k - 23 Nov, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="needsIdentified7" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Meta4Systems
                                    <b-badge class="badge-soft-success" tag="small" variant="soft-success">6
                                        Month
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                </b-collapse>
            </b-col>

            <b-col>
                <b-card no-body>
                    <b-link v-b-toggle.meetingArranged class="card-header bg-soft-info" role="button">
                        <h5 class="card-title text-uppercase fw-semibold mb-1 fs-15">Meeting Arranged</h5>
                        <p class="text-muted mb-0">$44,900 <span class="fw-medium">3 Deals</span></p>
                    </b-link>
                </b-card>
                <b-collapse id="meetingArranged" visible>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.meetingArranged1 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/companies/img-5.png"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">SASS app workflow diagram</h6>
                                    <p class="text-muted mb-0">$17.8k - 01 Jan, 2022</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="meetingArranged1" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">10
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.meetingArranged2 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-3.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Uber new brand system</h6>
                                    <p class="text-muted mb-0">$24.5k - 22 Dec, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="meetingArranged2" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card no-body>
                        <b-card-body>
                            <b-link v-b-toggle.meetingArranged3 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/companies/img-8.png"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">TripAdvisor</h6>
                                    <p class="text-muted mb-0">$2.6k - 12 Dec, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="meetingArranged3" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                </b-collapse>
            </b-col>

            <b-col>
                <b-card no-body>
                    <b-link v-b-toggle.offerAccepted class="card-header bg-soft-secondary" role="button">
                        <h5 class="card-title text-uppercase fw-semibold mb-1 fs-15">Offer Accepted</h5>
                        <p class="text-muted mb-0">$819,300 <span class="fw-medium">8 Deals</span></p>
                    </b-link>
                </b-card>
                <b-collapse id="offerAccepted" visible>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.offerAccepted1 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-10.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Coupon Website</h6>
                                    <p class="text-muted mb-0">$27.4k - 07 Jan, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="offerAccepted1" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1 ribbon-box ribbon-fill ribbon-sm" no-body>
                        <div class="ribbon ribbon-info"><i class="ri-flashlight-fill"></i></div>
                        <b-card-body>
                            <b-link v-b-toggle.offerAccepted2 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/brands/slack.png"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Marketing Automation Demo</h6>
                                    <p class="text-muted mb-0">$94.8 - 19 Nov, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="offerAccepted2" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-warning" tag="small" variant="soft-warning">47
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.offerAccepted3 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-4.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">New Email Design Templates</h6>
                                    <p class="text-muted mb-0">$136.9k - 05 Jan, 2022</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="offerAccepted3" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.offerAccepted4 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-7.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Create New Components</h6>
                                    <p class="text-muted mb-0">$45.9k - 26 Dec, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="offerAccepted4" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-success" tag="small" variant="soft-success">4
                                        Month
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1 ribbon-box ribbon-fill ribbon-sm" no-body>
                        <div class="ribbon ribbon-info"><i class="ri-flashlight-fill"></i></div>
                        <b-card-body>
                            <b-link v-b-toggle.offerAccepted5 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/companies/img-3.png"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">New Test Tickets</h6>
                                    <p class="text-muted mb-0">$118k - 01 Jan, 2022</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="offerAccepted5" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1 ribbon-box ribbon-fill ribbon-sm" no-body>
                        <div class="ribbon ribbon-info"><i class="ri-flashlight-fill"></i></div>
                        <b-card-body>
                            <b-link v-b-toggle.offerAccepted6 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-6.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Recover Deleted Folder</h6>
                                    <p class="text-muted mb-0">$87.3k - 03 Jan, 2022</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="offerAccepted6" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">14
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card class="mb-1" no-body>
                        <b-card-body>
                            <b-link v-b-toggle.offerAccepted7 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/brands/github.png"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Github SEO audit</h6>
                                    <p class="text-muted mb-0">$241.2k - 21 Sep, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="offerAccepted7" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                    <b-card no-body>
                        <b-card-body>
                            <b-link v-b-toggle.offerAccepted8 class="d-flex align-items-center" role="button">
                                <div class="flex-shrink-0">
                                    <img alt="" class="avatar-xs rounded-circle"
                                         src="@/assets/images/users/avatar-2.jpg"/>
                                </div>
                                <div class="flex-grow-1 ms-3">
                                    <h6 class="fs-14 mb-1">Urban Modern Design</h6>
                                    <p class="text-muted mb-0">$67.8k - 09 Oct, 2021</p>
                                </div>
                            </b-link>
                        </b-card-body>
                        <b-collapse id="offerAccepted8" class="border-top border-top-dashed">
                            <b-card-body>
                                <h6 class="fs-14 mb-1">Nesta Technologies
                                    <b-badge class="badge-soft-danger" tag="small" variant="soft-danger">4
                                        Days
                                    </b-badge>
                                </h6>
                                <p class="text-muted">As a company grows however, you find it's not as easy to shout
                                    across</p>
                                <ul class="list-unstyled vstack gap-2 mb-0">
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-question-answer-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Meeting with Thomas</h6>
                                                <small class="text-muted">Yesterday at 9:12AM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-mac-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Product Demo</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 avatar-xxs text-muted">
                                                <i class="ri-earth-line"></i>
                                            </div>
                                            <div class="flex-grow-1">
                                                <h6 class="mb-0">Marketing Team Meeting</h6>
                                                <small class="text-muted">Monday at 04:41PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </b-card-body>
                            <b-card-footer class="hstack gap-2">
                                <b-button class="w-100" size="sm" variant="warning"><i
                                    class="ri-phone-line align-bottom me-1"></i> Call
                                </b-button>
                                <b-button class="w-100" size="sm" variant="info"><i
                                    class="ri-question-answer-line align-bottom me-1"></i> Message
                                </b-button>
                            </b-card-footer>
                        </b-collapse>
                    </b-card>
                </b-collapse>
            </b-col>
        </b-row>

        <!-- <b-modal v-model="modalShow" body-class="p-0" header-class="bg-light p-3" hide-footer title="Create Deals"
            class="v-modal-custom" centered>
            <form>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="dealTitle" class="form-label">Deal Title</label>
                        <input type="email" class="form-control" id="dealTitle" placeholder="Enter title">
                    </div>
                    <div class="mb-3">
                        <label for="dealValue" class="form-label">Value (USD)</label>
                        <input type="text" class="form-control" id="dealValue" placeholder="Enter value">
                    </div>
                    <div class="mb-3">
                        <label for="dealOwner" class="form-label">Deals Owner</label>
                        <input type="text" class="form-control" id="dealOwner" placeholder="Enter owner name">
                    </div>
                    <div class="mb-3">
                        <label for="dueDate" class="form-label">Due Date</label>
                        <flat-pickr placeholder="Select date" v-model="date" :config="timeConfig"
                            class="form-control flatpickr-input" id="adddate"></flat-pickr>
                    </div>
                    <div class="mb-3">
                        <label for="contactNumber" class="form-label">Contact</label>
                        <input type="text" class="form-control" id="contactNumber" placeholder="Enter contact number">
                    </div>
                    <div class="mb-3">
                        <label for="contactNumber" class="form-label">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            placeholder="Enter description"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <b-button type="button" variant="light" @click="modalShow = false">Close
                    </b-button>
                    <b-button type="button" variant="success"><i class="ri-save-line align-bottom me-1"></i> Save
                    </b-button>
                </div>
            </b-form>
        </b-modal> -->

        <b-modal v-model="modalShow" body-class="" centered class="v-modal-custom" header-class="bg-light p-3"
                 hide-footer title="Create Deals">
            <b-form id="deals-form" class="needs-validation" novalidate onsubmit="return false">
                <div class="mb-3">
                    <label class="form-label" for="deatType">Deals Type</label>
                    <select id="deatType" aria-label="Default select example" class="form-select" data-choices required>
                        <option data-custom-properties="[object Object]" value="">Select deals type</option>
                        <option value="Lead Disovered">Lead Disovered</option>
                        <option value="Contact Initiated">Contact Initiated</option>
                        <option value="Need Identified">Need Identified</option>
                        <option value="Meeting Arranged">Meeting Arranged</option>
                        <option value="Offer Accepted">Offer Accepted</option>
                    </select>
                    <div class="invalid-feedback">
                        Please write an deals owner name.
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="dealTitle">Deal Title</label>
                    <input id="dealTitle" class="form-control" placeholder="Enter title" required type="text">
                    <div class="invalid-feedback">
                        Please write a title.
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="dealValue">Value (USD)</label>
                    <input id="dealValue" class="form-control" placeholder="Enter value" required step="0.01"
                           type="number">
                    <div class="invalid-feedback">
                        Please write a value.
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="dealOwner">Deals Owner</label>
                    <input id="dealOwner" class="form-control" placeholder="Enter owner name" required type="text">
                    <div class="invalid-feedback">
                        Please write an deals owner name.
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="dueDate">Due Date</label>
                    <flat-pickr id="adddate" v-model="date" :config="timeConfig"
                                class="form-control flatpickr-input" placeholder="Select date"></flat-pickr>
                    <div class="invalid-feedback">
                        Please select a due date.
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="dealEmail">Email</label>
                    <input id="dealEmail" class="form-control" placeholder="Enter email" required type="email">
                    <div class="invalid-feedback">
                        Please write a email.
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label" for="contactNumber">Contact</label>
                    <input id="contactNumber" class="form-control" placeholder="Enter contact number" required
                           type="text">
                    <div class="invalid-feedback">
                        Please add a contact.
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label" for="contactDescription">Description</label>
                    <textarea id="contactDescription" class="form-control" placeholder="Enter description" required
                              rows="3"></textarea>
                    <div class="invalid-feedback">
                        Please add a description.
                    </div>
                </div>
                <div class="modal-footer v-modal-footer">
                    <b-button id="close-modal" type="button" variant="light" @click="modalShow = false"> Close
                    </b-button>
                    <b-button type="submit" variant="success"><i class="ri-save-line align-bottom me-1"></i> Save
                    </b-button>
                </div>
            </b-form>
        </b-modal>
    </Layout>
</template>
