<script>
import {MoreHorizontalIcon} from "@zhuowenli/vue-feather-icons";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import animationData from "@/components/widgets/gsqxdxog.json";

import Lottie from "@/components/widgets/lottie.vue";

export default {
    page: {
        title: "Project List",
        meta: [{
            name: "description",
            content: appConfig.description
        }],
    },
    data() {
        return {
            title: "Project List",
            items: [{
                text: "Projects",
                href: "/",
            },
                {
                    text: "Project List",
                    active: true,
                },
            ],
            defaultOptions: {animationData: animationData},
            removeProjectModal: false,
            projectListWidgets1: [{
                id: 1,
                time: "Updated 3hrs ago",
                img: require("@/assets/images/brands/slack.png"),
                label: "Slack brand logo design",
                caption: "Create a Brand logo design for a velzon admin.",
                number: "18/42",
                progressBar: "34%",
                subItem: [{
                    id: 1,
                    imgFooter: require("@/assets/images/users/avatar-2.jpg")
                },
                    {
                        id: 2,
                        imgNumber: "+"
                    },
                ],
                date: "10 Jul, 2021",
            },
                {
                    id: 2,
                    time: "Last update : 08 May",
                    img: require("@/assets/images/brands/dribbble.png"),
                    label: "Redesign - Landing page",
                    caption: "Resign a landing page design. as per abc minimal design.",
                    number: "22/56",
                    progressBar: "54%",
                    subItem: [{
                        id: 1,
                        imgFooter: require("@/assets/images/users/avatar-3.jpg")
                    },
                        {
                            id: 2,
                            imgNumber: "S",
                            bgColor: "secondary"
                        },
                        {
                            id: 3,
                            imgFooter: require("@/assets/images/users/avatar-4.jpg")
                        },
                        {
                            id: 4,
                            imgNumber: "+"
                        },
                    ],
                    date: "18 May, 2021",
                },
                {
                    id: 3,
                    time: "Updated 2hrs ago",
                    img: require("@/assets/images/brands/mail_chimp.png"),
                    label: "Chat Application",
                    caption: "Create a Chat application for business messaging needs. Collaborate efficiently with secure direct messages and group chats.",
                    number: "14/20",
                    progressBar: "65%",
                    subItem: [{
                        id: 1,
                        imgFooter: require("@/assets/images/users/avatar-5.jpg")
                    },
                        {
                            id: 2,
                            imgNumber: "M",
                            bgColor: "warning"
                        },
                        {
                            id: 3,
                            imgNumber: "+"
                        },
                    ],
                    date: "21 Feb, 2021",
                },
                {
                    id: 4,
                    time: "Last update : 21 Jun",
                    img: require("@/assets/images/brands/dropbox.png"),
                    label: "Project App",
                    caption: "Create a project application for a project management and task management.",
                    number: "20/34",
                    progressBar: "78%",
                    subItem: [{
                        id: 1,
                        imgNumber: "K",
                        bgColor: "info"
                    },
                        {
                            id: 2,
                            imgNumber: "M",
                            bgColor: "danger"
                        },
                        {
                            id: 3,
                            imgNumber: "+"
                        },
                    ],
                    date: "03 Aug, 2021",
                },
            ],

            projectListWidgets2: [{
                id: 1,
                label: "Multipurpose landing template",
                status: "Inprogess",
                statusClass: "warning",
                deadline: "18 Sep, 2021",
                subItem: [{
                    id: 1,
                    imgNumber: "D",
                    bgColor: "danger"
                },
                    {
                        id: 2,
                        imgTeam: require("@/assets/images/users/avatar-5.jpg")
                    },
                    {
                        id: 3,
                        imgTeam: require("@/assets/images/users/avatar-6.jpg")
                    },
                    {
                        id: 4,
                        imgNumber: "+"
                    },
                ],
                progressBar: "50%",
            },
                {
                    id: 2,
                    label: "Dashboard UI",
                    status: "Completed",
                    statusClass: "success",
                    deadline: "10 Jun, 2021",
                    subItem: [{
                        id: 1,
                        imgTeam: require("@/assets/images/users/avatar-7.jpg")
                    },
                        {
                            id: 2,
                            imgTeam: require("@/assets/images/users/avatar-8.jpg")
                        },
                        {
                            id: 3,
                            imgNumber: "+"
                        },
                    ],
                    progressBar: "95%",
                },
                {
                    id: 3,
                    label: "Vector Images",
                    status: "Inprogess",
                    statusClass: "warning",
                    deadline: "08 Apr, 2021",
                    subItem: [{
                        id: 1,
                        imgNumber: "C",
                        bgColor: "info"
                    },
                        {
                            id: 2,
                            imgNumber: "+"
                        },
                    ],
                    progressBar: "41%",
                },
                {
                    id: 4,
                    label: "Authentication",
                    status: "Inprogess",
                    statusClass: "warning",
                    deadline: "22 Nov, 2021",
                    subItem: [{
                        id: 1,
                        imgTeam: require("@/assets/images/users/avatar-8.jpg")
                    },
                        {
                            id: 2,
                            imgNumber: "+"
                        },
                    ],
                    progressBar: "35%",
                },
            ],
            projectListWidgets3: [{
                id: 1,
                img: require("@/assets/images/brands/dribbble.png"),
                label: "Kanban Board",
                status: "Inprogess",
                statusClass: "warning",
                deadline: "08 Dec, 2021",
                number: "17/20",
                progressBar: "71%",
                subItem: [{
                    id: 1,
                    imgNumber: "D",
                    bgColor: "danger"
                },
                    {
                        id: 2,
                        imgTeam: require("@/assets/images/users/avatar-5.jpg")
                    },
                    {
                        id: 3,
                        imgNumber: "+"
                    },
                ],
            },
                {
                    id: 2,
                    img: require("@/assets/images/brands/slack.png"),
                    label: "Ecommerce app",
                    status: "Inprogess",
                    statusClass: "warning",
                    deadline: "20 Nov, 2021",
                    number: "11/45",
                    progressBar: "20%",
                    subItem: [{
                        id: 1,
                        imgTeam: require("@/assets/images/users/avatar-9.jpg")
                    },
                        {
                            id: 2,
                            imgTeam: require("@/assets/images/users/avatar-10.jpg")
                        },
                        {
                            id: 3,
                            imgNumber: "+"
                        },
                    ],
                },
                {
                    id: 3,
                    img: require("@/assets/images/brands/dropbox.png"),
                    label: "Redesign - Landing page",
                    status: "Inprogess",
                    statusClass: "warning",
                    deadline: "10 Jul, 2021",
                    number: "13/26",
                    progressBar: "54%",
                    subItem: [{
                        id: 1,
                        imgTeam: require("@/assets/images/users/avatar-3.jpg")
                    },
                        {
                            id: 2,
                            imgNumber: "S",
                            bgColor: "secondary"
                        },
                        {
                            id: 3,
                            imgTeam: require("@/assets/images/users/avatar-4.jpg")
                        },
                        {
                            id: 4,
                            imgNumber: "+"
                        },
                    ],
                },
                {
                    id: 4,
                    img: require("@/assets/images/brands/mail_chimp.png"),
                    label: "Multipurpose landing template",
                    status: "Completed",
                    statusClass: "success",
                    deadline: "18 Sep, 2021",
                    number: "25/32",
                    progressBar: "75%",
                    subItem: [{
                        id: 1,
                        imgNumber: "D",
                        bgColor: "danger"
                    },
                        {
                            id: 2,
                            imgTeam: require("@/assets/images/users/avatar-5.jpg")
                        },
                        {
                            id: 3,
                            imgTeam: require("@/assets/images/users/avatar-6.jpg")
                        },
                        {
                            id: 4,
                            imgNumber: "+"
                        },
                    ],
                },
            ],
        };
    },
    components: {
        Layout,
        PageHeader,
        Multiselect,
        MoreHorizontalIcon,
        lottie: Lottie,
    },
    methods: {
        toggleFavourite(ele) {
            ele.target.closest('.favourite-btn').classList.toggle("active");
        },

        removeProject() {
            this.removeProjectModal = true;
            document.getElementById("removeProjectModal")
            addEventListener("click", (e) => {
                document
                    .getElementById("remove-project")
                    .addEventListener("click", () => {
                        if (e.target.closest('.project-card')) {
                            e.target.closest('.project-card').remove();
                        }
                        this.removeProjectModal = false;
                    });
            });
        }
    }
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row class="g-4 mb-3">
            <b-col sm="auto">
                <div>
                    <router-link class="btn btn-success" to="/apps/projects-create"><i
                        class="ri-add-line align-bottom me-1"></i>
                        Add New
                    </router-link>
                </div>
            </b-col>
            <b-col sm>
                <div class="d-flex justify-content-sm-end gap-2">
                    <div class="search-box ms-2">
                        <input class="form-control" placeholder="Search..." type="text"/>
                        <i class="ri-search-line search-icon"></i>
                    </div>

                    <Multiselect v-model="value" :close-on-select="true"
                                 :create-option="true"
                                 :options="[
              { value: 'Status', label: 'Status' },
              { value: 'Active', label: 'Active' },
              { value: 'Block', label: 'Block' },
            ]" :searchable="true" class="multiselect form-control w-lg w-auto m-0"/>
                </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col v-for="(item, index) of projectListWidgets1" :key="index" class="project-card" sm="6" xxl="3">
                <b-card class="card-height-100" no-body>
                    <b-card-body>
                        <div class="d-flex flex-column h-100">
                            <div class="d-flex">
                                <div class="flex-grow-1">
                                    <p class="text-muted mb-4">{{ item.time }}</p>
                                </div>
                                <div class="flex-shrink-0">
                                    <div class="d-flex gap-1 align-items-center">
                                        <b-button class="btn avatar-xs mt-n1 p-0 favourite-btn" type="button"
                                                  variant="transparent"
                                                  @click="toggleFavourite">
                      <span class="avatar-title bg-transparent fs-15">
                        <i class="ri-star-fill"></i>
                      </span>
                                        </b-button>
                                        <div class="dropdown">
                                            <button
                                                aria-expanded="true"
                                                aria-haspopup="true"
                                                class="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15"
                                                data-bs-toggle="dropdown">
                                                <MoreHorizontalIcon class="icon-sm"></MoreHorizontalIcon>
                                            </button>

                                            <div class="dropdown-menu dropdown-menu-end">
                                                <router-link class="dropdown-item" to="/apps/projects-overview"><i
                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                    View
                                                </router-link>
                                                <router-link class="dropdown-item" to="/apps/projects-create"><i
                                                    class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                    Edit
                                                </router-link>
                                                <div class="dropdown-divider"></div>
                                                <b-link class="dropdown-item" @click="removeProject">
                                                    <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                    Remove
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex mb-2">
                                <div class="flex-shrink-0 me-3">
                                    <div class="avatar-sm">
                    <span class="avatar-title bg-soft-warning rounded p-2">
                      <img :src="item.img" alt="" class="img-fluid p-1"/>
                    </span>
                                    </div>
                                </div>
                                <div class="flex-grow-1">
                                    <h5 class="mb-1 fs-15">
                                        <router-link class="text-dark" to="/apps/projects-overview">{{
                                                item.label
                                            }}
                                        </router-link>
                                    </h5>
                                    <p class="text-muted text-truncate-two-lines mb-3">
                                        {{ item.caption }}
                                    </p>
                                </div>
                            </div>
                            <div class="mt-auto">
                                <div class="d-flex mb-2">
                                    <div class="flex-grow-1">
                                        <div>Tasks</div>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <div>
                                            <i class="ri-list-check align-bottom me-1 text-muted"></i>
                                            {{ item.number }}
                                        </div>
                                    </div>
                                </div>
                                <div class="progress progress-sm animated-progess">
                                    <div :style="`width: ${item.progressBar};`" aria-valuemax="100" aria-valuemin="0"
                                         aria-valuenow="34"
                                         class="progress-bar bg-success" role="progressbar"></div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                    <b-card-footer class="bg-transparent border-top-dashed py-2">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1">
                                <div class="avatar-group">
                                    <b-link v-for="(subitem, index) of item.subItem" :key="index"
                                            v-b-tooltip.hover
                                            class="avatar-group-item" href="javascript: void(0);"
                                            title="Darline Williams">
                                        <div v-if="!subitem.imgNumber" class="avatar-xxs">
                                            <img :src="subitem.imgFooter" alt="" class="rounded-circle img-fluid"/>
                                        </div>
                                        <div v-if="!subitem.imgFooter" class="avatar-xxs">
                                            <div
                                                class="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                                {{ subitem.imgNumber }}
                                            </div>
                                        </div>
                                    </b-link>
                                </div>
                            </div>
                            <div class="flex-shrink-0">
                                <div class="text-muted">
                                    <i class="ri-calendar-event-fill me-1 align-bottom"></i>
                                    {{ item.date }}
                                </div>
                            </div>
                        </div>
                    </b-card-footer>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col v-for="(item, index) of projectListWidgets2" :key="index" class="project-card" sm="6" xxl="3">
                <b-card no-body>
                    <b-card-body>
                        <div class="p-3 mt-n3 mx-n3 bg-soft-danger rounded-top">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1">
                                    <h5 class="mb-0 fs-14">
                                        <router-link class="text-dark" to="/apps/projects-overview">{{
                                                item.label
                                            }}
                                        </router-link>
                                    </h5>
                                </div>
                                <div class="flex-shrink-0">
                                    <div class="d-flex gap-1 align-items-center my-n2">
                                        <b-button class="btn avatar-xs p-0 favourite-btn active" type="button"
                                                  variant="transparent"
                                                  @click="toggleFavourite">
                      <span class="avatar-title bg-transparent fs-15">
                        <i class="ri-star-fill"></i>
                      </span>
                                        </b-button>
                                        <div class="dropdown">
                                            <button
                                                aria-expanded="true"
                                                aria-haspopup="true"
                                                class="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15"
                                                data-bs-toggle="dropdown">
                                                <MoreHorizontalIcon class="icon-sm"></MoreHorizontalIcon>
                                            </button>

                                            <div class="dropdown-menu dropdown-menu-end">
                                                <router-link class="dropdown-item" to="/apps/projects-overview"><i
                                                    class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                                    View
                                                </router-link>
                                                <router-link class="dropdown-item" to="/apps/projects-create"><i
                                                    class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                    Edit
                                                </router-link>
                                                <div class="dropdown-divider"></div>
                                                <b-link class="dropdown-item" @click="removeProject">
                                                    <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                    Remove
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="py-3">
                            <b-row class="gy-3">
                                <b-col cols="6">
                                    <div>
                                        <p class="text-muted mb-1">Status</p>
                                        <div :class="`badge badge-soft-${item.statusClass} fs-12`">
                                            {{ item.status }}
                                        </div>
                                    </div>
                                </b-col>
                                <b-col cols="6">
                                    <div>
                                        <p class="text-muted mb-1">Deadline</p>
                                        <h5 class="fs-14">{{ item.deadline }}</h5>
                                    </div>
                                </b-col>
                            </b-row>

                            <div class="d-flex align-items-center mt-3">
                                <p class="text-muted mb-0 me-2">Team :</p>
                                <div class="avatar-group">
                                    <b-link v-for="(subItem, index) of item.subItem" :key="index"
                                            v-b-tooltip.hover
                                            class="avatar-group-item" href="javascript: void(0);" title="Donna Kline">
                                        <div v-if="!subItem.imgTeam" class="avatar-xxs">
                                            <div :class="`avatar-title rounded-circle bg-${subItem.bgColor}`">
                                                {{ subItem.imgNumber }}
                                            </div>
                                        </div>
                                        <div v-if="!subItem.imgNumber" class="avatar-xxs">
                                            <img :src="subItem.imgTeam" alt="" class="rounded-circle img-fluid"/>
                                        </div>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex mb-2">
                                <div class="flex-grow-1">
                                    <div>Progress</div>
                                </div>
                                <div class="flex-shrink-0">
                                    <div>50%</div>
                                </div>
                            </div>
                            <div class="progress progress-sm animated-progess">
                                <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="50"
                                     class="progress-bar bg-success"
                                     role="progressbar" style="width: 50%"></div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col v-for="(item, index) of projectListWidgets3" :key="index" class="project-card" sm="6" xxl="3">
                <b-card no-body>
                    <b-card-body>
                        <div class="p-3 mt-n3 mx-n3 bg-soft-secondary rounded-top">
                            <div class="d-flex gap-1 align-items-center justify-content-end my-n2">
                                <b-button class="btn avatar-xs p-0 favourite-btn active" type="button"
                                          variant="transparent" @click="toggleFavourite">
                  <span class="avatar-title bg-transparent fs-15">
                    <i class="ri-star-fill"></i>
                  </span>
                                </b-button>
                                <div class="dropdown">
                                    <button aria-expanded="true"
                                            aria-haspopup="true"
                                            class="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15"
                                            data-bs-toggle="dropdown">
                                        <MoreHorizontalIcon class="icon-sm"></MoreHorizontalIcon>
                                    </button>

                                    <div class="dropdown-menu dropdown-menu-end">
                                        <router-link class="dropdown-item" to="/apps/projects-overview"><i
                                            class="ri-eye-fill align-bottom me-2 text-muted"></i>
                                            View
                                        </router-link>
                                        <router-link class="dropdown-item" to="/apps/projects-create"><i
                                            class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                            Edit
                                        </router-link>
                                        <div class="dropdown-divider"></div>
                                        <b-link class="dropdown-item" @click="removeProject">
                                            <i class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                            Remove
                                        </b-link>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center pb-3">
                                <img :src="item.img" alt="" height="32"/>
                            </div>
                        </div>

                        <div class="py-3">
                            <h5 class="fs-14 mb-3">
                                <router-link class="text-dark" to="/apps/projects-overview">{{
                                        item.label
                                    }}
                                </router-link>
                            </h5>
                            <b-row class="gy-3">
                                <b-col cols="6">
                                    <div>
                                        <p class="text-muted mb-1">Status</p>
                                        <div :class="`badge badge-soft-${item.statusClass} fs-12`">
                                            {{ item.status }}
                                        </div>
                                    </div>
                                </b-col>
                                <b-col cols="6">
                                    <div>
                                        <p class="text-muted mb-1">Deadline</p>
                                        <h5 class="fs-14">{{ item.deadline }}</h5>
                                    </div>
                                </b-col>
                            </b-row>

                            <div class="d-flex align-items-center mt-3">
                                <p class="text-muted mb-0 me-2">Team :</p>
                                <div class="avatar-group">
                                    <b-link v-for="(subItem, index) of item.subItem" :key="index"
                                            v-b-tooltip.hover
                                            class="avatar-group-item" href="javascript: void(0);" title="Donna Kline">
                                        <div v-if="!subItem.imgTeam" class="avatar-xxs">
                                            <div :class="`avatar-title rounded-circle bg-${subItem.bgColor}`">
                                                {{ subItem.imgNumber }}
                                            </div>
                                        </div>
                                        <div v-if="!subItem.imgNumber" class="avatar-xxs">
                                            <img :src="subItem.imgTeam" alt="" class="rounded-circle img-fluid"/>
                                        </div>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex mb-2">
                                <div class="flex-grow-1">
                                    <div>Tasks</div>
                                </div>
                                <div class="flex-shrink-0">
                                    <div>
                                        <i class="ri-list-check align-bottom me-1 text-muted"></i>
                                        {{ item.number }}
                                    </div>
                                </div>
                            </div>
                            <div class="progress progress-sm animated-progess">
                                <div :style="`width: ${item.progressBar};`" aria-valuemax="100" aria-valuemin="0"
                                     aria-valuenow="71"
                                     class="progress-bar bg-success" role="progressbar"></div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row class="g-0 text-center text-sm-start align-items-center mb-4">
            <b-col sm="6">
                <div>
                    <p class="mb-sm-0 text-muted">
                        Showing <span class="fw-semibold">1</span> to
                        <span class="fw-semibold">10</span> of
                        <span class="fw-semibold text-decoration-underline">12</span>
                        entries
                    </p>
                </div>
            </b-col>
            <b-col sm="6">
                <ul class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                    <li class="page-item disabled">
                        <b-link class="page-link" href="#">Previous</b-link>
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
                        <b-link class="page-link" href="#">Next</b-link>
                    </li>
                </ul>
            </b-col>
        </b-row>

        <b-modal id="removeProjectModal" v-model="removeProjectModal" centered class="v-modal-custom"
                 hide-footer modal-class="zoomIn">
            <div class="mt-2 text-center">
                <lottie :height="100" :options="defaultOptions" :width="100"
                        class="avatar-xl"
                        colors="primary:#f7b84b,secondary:#f06548"/>
                <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                    <h4>Are you Sure ?</h4>
                    <p class="text-muted mx-4 mb-0">Are you Sure You want to Remove this Project ?</p>
                </div>
            </div>
            <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                <b-button class="w-sm" type="button" variant="light" @click="removeProjectModal = false">Close
                </b-button>
                <b-button id="remove-project" class="w-sm" type="button" variant="danger">Yes, Delete It!</b-button>
            </div>
        </b-modal>

    </Layout>
</template>
