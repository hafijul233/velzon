<script>
import {VueDraggableNext} from 'vue-draggable-next';
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/gsqxdxog.json";

export default {
    page: {
        title: "Kanban Board",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Kanban Board",
            items: [
                {
                    text: "Tasks",
                    href: "/",
                },
                {
                    text: "Kanban Board",
                    active: true,
                },
            ],
            modalShow: false,
            modalShow1: false,
            modalShow2: false,
            modalShow3: false,
            config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: "M j, Y",
                altInput: true,
                dateFormat: "d M, Y",
            },
            date: null,
            date1: null,
            defaultOptions: {animationData: animationData},
            unassigned: [
                {
                    title: "Profile Page Satructure",
                    description: "Profile Page means a web page accessible to the public or to guests.",
                    features: ["Admin"],
                    users: [require("@/assets/images/users/avatar-6.jpg"), require("@/assets/images/users/avatar-5.jpg")],
                    id: "#VL2436",
                    watch: "04",
                    message: "19",
                    file: "2"
                },
                {
                    title: "Velzon - Admin Layout Design",
                    description: "The dashboard is the front page of the Administration UI.",
                    features: ["Layout", "Admin", "Dashboard"],
                    users: [require("@/assets/images/users/avatar-7.jpg"), require("@/assets/images/users/avatar-6.jpg"), require("@/assets/images/users/avatar-1.jpg")],
                    id: "#VL2436",
                    watch: "04",
                    message: "19",
                    file: "2",
                    date: " 07 Jan, 2022"
                }
            ],
            todo: [
                {
                    title: "Admin Layout Design",
                    description: "Landing page template with clean, minimal and modern design.",
                    features: ["Design", "Wensite"],
                    users: [require("@/assets/images/users/avatar-10.jpg"), require("@/assets/images/users/avatar-3.jpg")],
                    id: "#VL2436",
                    watch: "13",
                    message: "52",
                    file: "17",
                    date: " 07 Jan, 2022"
                },
                {
                    title: "Marketing & Sales",
                    description: "Sales and marketing are two business functions within an organization.",
                    features: ["Marketing", "Business"],
                    users: [require("@/assets/images/users/avatar-9.jpg"), require("@/assets/images/users/avatar-8.jpg")],
                    id: "#VL2436",
                    watch: "24",
                    message: "10",
                    file: "10",
                    date: " 27 Dec, 2021"
                },
            ],
            inprogress: [
                {
                    title: "Brand Logo Design ",
                    description: "BrandCrowd's brand logo maker allows you to generate and customize stand-out brand logos in minutes.",
                    features: ["Logo", "Design", "UI/UX"],
                    users: [require("@/assets/images/users/avatar-10.jpg"), require("@/assets/images/users/avatar-3.jpg")],
                    id: "#VL2436",
                    watch: "24",
                    message: "10",
                    file: "10",
                    date: " 22 Dec, 2022"
                },
                {
                    title: "Change Old App Icon",
                    description: "Change app icons on Android: How do you change the look of your apps.",
                    features: ["Marketing", "Business"],
                    users: [require("@/assets/images/users/avatar-9.jpg"), require("@/assets/images/users/avatar-8.jpg")],
                    id: "#VL2436",
                    watch: "64",
                    message: "35",
                    file: "23",
                    date: " 24 Oct, 2021"
                },
            ],
            reviews: [
                {
                    title: "Product Features Analysis",
                    description: "An essential part of strategic planning is running a product feature analysis.",
                    features: ["Project", "Analysis"],
                    users: [require("@/assets/images/users/avatar-5.jpg"), require("@/assets/images/users/avatar-6.jpg")],
                    id: "#VL2436",
                    watch: "14",
                    message: "31",
                    file: "07",
                    date: " 05 Jan, 2022"
                },
                {
                    title: "Create a Graph of Sketch",
                    description: "To make a pie chart with equal slices create a perfect circle by selecting an Oval Tool.",
                    features: ["Sketch", "Marketing", "Design"],
                    users: [require("@/assets/images/users/avatar-4.jpg"), require("@/assets/images/users/avatar-8.jpg"), require("@/assets/images/users/avatar-2.jpg"), require("@/assets/images/users/avatar-1.jpg")],
                    id: "#VL2436",
                    watch: "64",
                    message: "35",
                    file: "23",
                    date: " 24 Oct, 2021"
                },
            ],
            completed: [
                {
                    title: "Create a Blog Template UI",
                    description: "Landing page template with clean, minimal and modern design.",
                    features: ["Design", "Website"],
                    users: [require("@/assets/images/users/avatar-8.jpg"), require("@/assets/images/users/avatar-7.jpg"), require("@/assets/images/users/avatar-6.jpg")],
                    id: "#VL2451",
                    watch: "24",
                    message: "10",
                    file: "10",
                    date: " 05 Jan, 2022"
                },
            ],
            newData: [
                {
                    title: "Banner Design for FB & Twitter",
                    image: require("@/assets/images/small/img-4.jpg"),
                    features: ["UI/UX", "Graphic"],
                    users: [require("@/assets/images/users/avatar-8.jpg"), require("@/assets/images/users/avatar-7.jpg"), require("@/assets/images/users/avatar-6.jpg")],
                    id: "#VL2451",
                    watch: "24",
                    message: "10",
                    file: "10",
                    date: " 05 Jan, 2022"
                },
            ],
            enabled: true,

            dragging: false
        };
    },
    methods: {
        log(event) {
            console.log(event);
        },

        deleteTask() {
            this.modalShow3 = true;
            document.getElementById("deleteTask")
            addEventListener("click", (e) => {
                document
                    .getElementById("delete-record")
                    .addEventListener("click", () => {
                        if (e.target.closest('.tasks-list')) {
                            e.target.closest('.tasks-list').remove();
                        }
                        this.modalShow3 = false;
                    });
            });
        },

        addNewTask() {
            // var projectName = document.getElementById("projectName").value;
            // var sub_tasks = document.getElementById("sub-tasks").value;
            // var task_description = document.getElementById("task-description").value;
            // var formFile = document.getElementById("formFile").value;
            // var due_date = document.getElementById("due-date").value;
            // var categories = document.getElementById("categories").value;
            // var tasks_progress = document.getElementById("tasks-progress").value;

            // var list = document.querySelectorAll('.tasks-list');
            // list.forEach(element => {
            //     // var listName = element.childNodes[0].childNodes[0].children[0].childNodes[0].data;
            //     // console.log(listName)
            // })

            // for (var k in list) {
            //     if (list) {
            //         var n = k;
            //         var listName = list[k].childNodes[0].childNodes[0].children[k].childNodes[0];
            //         console.log(listName)
            //         console.log('n',n)
            //     }
            // }
        }
    },
    components: {
        Layout,
        PageHeader,
        draggable: VueDraggableNext,
        lottie: Lottie,
        flatPickr
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>

        <b-card no-body>
            <b-card-body>
                <b-row class="g-2">
                    <b-col lg="auto">
                        <div class="hstack gap-2">
                            <b-button variant="primary" @click="modalShow1 = !modalShow1"><i
                                class="ri-add-line align-bottom me-1"></i> Create Board
                            </b-button>
                        </div>
                    </b-col>
                    <b-col class="col-auto" lg="3">
                        <div class="search-box">
                            <input class="form-control search" placeholder="Search for project, tasks..." type="text">
                            <i class="ri-search-line search-icon"></i>
                        </div>
                    </b-col>
                    <div class="col-auto ms-sm-auto">
                        <div id="newMembar" class="avatar-group">
                            <b-link v-b-tooltip.hover class="avatar-group-item" href="javascript: void(0);"
                                    title="Nancy">
                                <img alt="" class="rounded-circle avatar-xs" src="@/assets/images/users/avatar-5.jpg">
                            </b-link>
                            <b-link v-b-tooltip.hover class="avatar-group-item" href="javascript: void(0);"
                                    title="Frank">
                                <img alt="" class="rounded-circle avatar-xs" src="@/assets/images/users/avatar-3.jpg">
                            </b-link>
                            <b-link v-b-tooltip.hover class="avatar-group-item" href="javascript: void(0);"
                                    title="Tonya">
                                <img alt="" class="rounded-circle avatar-xs" src="@/assets/images/users/avatar-10.jpg">
                            </b-link>
                            <b-link v-b-tooltip.hover class="avatar-group-item" href="javascript: void(0);"
                                    title="Thomas">
                                <img alt="" class="rounded-circle avatar-xs" src="@/assets/images/users/avatar-8.jpg">
                            </b-link>
                            <b-link v-b-tooltip.hover class="avatar-group-item" href="javascript: void(0);"
                                    title="Herbert">
                                <img alt="" class="rounded-circle avatar-xs" src="@/assets/images/users/avatar-2.jpg">
                            </b-link>
                            <b-link class="avatar-group-item"
                                    @click="modalShow = !modalShow">
                                <div class="avatar-xs">
                                    <div class="avatar-title rounded-circle">
                                        +
                                    </div>
                                </div>
                            </b-link>
                        </div>
                    </div>
                </b-row>
            </b-card-body>
        </b-card>

        <div id="kanbanboard" class="tasks-board mb-3">
            <div class="tasks-list">
                <div class="d-flex mb-3">
                    <div class="flex-grow-1">
                        <h6 class="fs-14 text-uppercase fw-semibold mb-0">Unassigned
                            <b-badge class="align-bottom ms-1" tag="small" variant="success">2</b-badge>
                        </h6>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="dropdown card-header-dropdown">
                            <b-link aria-expanded="false" aria-haspopup="true" class="text-reset dropdown-btn"
                                    data-bs-toggle="dropdown" href="#">
                                <span class="fw-medium text-muted fs-12">Priority<i
                                    class="mdi mdi-chevron-down ms-1"></i></span>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">Priority</b-link>
                                <b-link class="dropdown-item" href="#">Date Added</b-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tasks-wrapper px-3 mx-n3" data-simplebar>
                    <div id="unassigned-task" class="tasks">
                        <draggable :group="{ name: 'todo' }" :list="unassigned" class="dragArea">
                            <b-card v-for="(data, index) of unassigned" :key="index" class="tasks-box" no-body>
                                <b-card-body>
                                    <div class="d-flex mb-2">
                                        <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                            <router-link to="/apps/tasks-details">{{ data.title }}</router-link>
                                        </h6>
                                        <div class="dropdown">
                                            <b-link id="dropdownMenuLink1" aria-expanded="false" class="text-muted"
                                                    data-bs-toggle="dropdown" href="javascript:void(0);"><i
                                                class="ri-more-fill"></i></b-link>
                                            <ul aria-labelledby="dropdownMenuLink1" class="dropdown-menu">
                                                <li>
                                                    <router-link class="dropdown-item" to="/apps/tasks-details"><i
                                                        class="ri-eye-fill align-bottom me-2 text-muted"></i> View
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" href="#"><i
                                                        class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                        Edit
                                                    </b-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" @click="deleteTask"><i
                                                        class="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                        Delete
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p class="text-muted">{{ data.description }}</p>
                                    <div class="mb-3">
                                        <div class="d-flex mb-1">
                                            <div class="flex-grow-1">
                                                <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                                    100%</h6>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <span class="text-muted">{{ data.date }}</span>
                                            </div>
                                        </div>
                                        <div class="progress rounded-3 progress-sm">
                                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="15"
                                                 class="progress-bar bg-danger" role="progressbar"
                                                 style="width: 15%"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <b-badge v-for="(item, index) of data.features" :key="index"
                                                     class="badge-soft-primary me-1" variant="soft-primary">{{ item }}
                                            </b-badge>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="avatar-group">
                                                <b-link v-for="(item, index) of data.users" :key="index"
                                                        v-b-tooltip.hover class="avatar-group-item"
                                                        href="javascript: void(0);"
                                                        title="Alexis">
                                                    <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-card-body>
                                <b-card-footer class="border-top-dashed">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="text-muted mb-0">#VL2436</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <ul class="link-inline mb-0">
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-eye-line align-bottom"></i> 04
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-question-answer-line align-bottom"></i> 19
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-attachment-2 align-bottom"></i> 02
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </b-card-footer>
                            </b-card>
                        </draggable>
                    </div>
                </div>
                <div class="my-3">
                    <b-button class="w-100" variant="soft-info" @click="modalShow2 = !modalShow2">Add More</b-button>
                </div>
            </div>
            <div class="tasks-list">
                <div class="d-flex mb-3">
                    <div class="flex-grow-1">
                        <h6 class="fs-14 text-uppercase fw-semibold mb-0">To Do
                            <b-badge class="align-bottom ms-1" tag="small"
                                     variant="secondary">2
                            </b-badge>
                        </h6>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="dropdown card-header-dropdown">
                            <b-link aria-expanded="false" aria-haspopup="true" class="text-reset dropdown-btn"
                                    data-bs-toggle="dropdown" href="#">
                                <span class="fw-medium text-muted fs-12">Priority<i
                                    class="mdi mdi-chevron-down ms-1"></i></span>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">Priority</b-link>
                                <b-link class="dropdown-item" href="#">Date Added</b-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tasks-wrapper px-3 mx-n3" data-simplebar>
                    <div id="todo-task" class="tasks">
                        <draggable :list="todo" class="dragArea" group="todo">
                            <b-card v-for="(data, index) of todo" :key="index" class="tasks-box" no-body>
                                <b-card-body>
                                    <div class="d-flex mb-2">
                                        <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                            <router-link to="/apps/tasks-details">{{ data.title }}</router-link>
                                        </h6>
                                        <div class="dropdown">
                                            <b-link id="dropdownMenuLink1" aria-expanded="false" class="text-muted"
                                                    data-bs-toggle="dropdown" href="javascript:void(0);"><i
                                                class="ri-more-fill"></i></b-link>
                                            <ul aria-labelledby="dropdownMenuLink1" class="dropdown-menu">
                                                <li>
                                                    <router-link class="dropdown-item" to="/apps/tasks-details"><i
                                                        class="ri-eye-fill align-bottom me-2 text-muted"></i> View
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" href="#"><i
                                                        class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                        Edit
                                                    </b-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" @click="deleteTask"><i
                                                        class="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                        Delete
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p class="text-muted">{{ data.description }}</p>
                                    <div class="mb-3">
                                        <div class="d-flex mb-1">
                                            <div class="flex-grow-1">
                                                <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                                    100%</h6>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <span class="text-muted">{{ data.date }}</span>
                                            </div>
                                        </div>
                                        <div class="progress rounded-3 progress-sm">
                                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="15"
                                                 class="progress-bar bg-danger" role="progressbar"
                                                 style="width: 15%"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <b-badge v-for="(item, index) of data.features" :key="index"
                                                     class="badge-soft-primary me-1" variant="soft-primary">{{ item }}
                                            </b-badge>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="avatar-group">
                                                <b-link v-for="(item, index) of data.users" :key="index"
                                                        v-b-tooltip.hover class="avatar-group-item"
                                                        href="javascript: void(0);"
                                                        title="Alexis">
                                                    <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-card-body>
                                <b-card-footer class="border-top-dashed">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="text-muted mb-0">#VL2436</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <ul class="link-inline mb-0">
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-eye-line align-bottom"></i> 04
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-question-answer-line align-bottom"></i> 19
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-attachment-2 align-bottom"></i> 02
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </b-card-footer>
                            </b-card>
                        </draggable>
                    </div>
                </div>
                <div class="my-3">
                    <b-button class="w-100" variant="soft-info" @click="modalShow2 = !modalShow2">Add More</b-button>
                </div>
            </div>
            <div class="tasks-list">
                <div class="d-flex mb-3">
                    <div class="flex-grow-1">
                        <h6 class="fs-14 text-uppercase fw-semibold mb-0">Inprogress
                            <b-badge class="bg-warning align-bottom ms-1" tag="small">2</b-badge>
                        </h6>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="dropdown card-header-dropdown">
                            <b-link aria-expanded="false" aria-haspopup="true" class="text-reset dropdown-btn"
                                    data-bs-toggle="dropdown" href="#">
                                <span class="fw-medium text-muted fs-12">Priority<i
                                    class="mdi mdi-chevron-down ms-1"></i></span>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">Priority</b-link>
                                <b-link class="dropdown-item" href="#">Date Added</b-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tasks-wrapper px-3 mx-n3" data-simplebar>
                    <div id="inprogress-task" class="tasks">
                        <draggable :list="inprogress" class="dragArea" group="reviews">
                            <b-card v-for="(data, index) of inprogress" :key="index" class="tasks-box" no-body>
                                <b-card-body>
                                    <div class="d-flex mb-2">
                                        <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                            <router-link to="/apps/tasks-details">{{ data.title }}</router-link>
                                        </h6>
                                        <div class="dropdown">
                                            <b-link id="dropdownMenuLink1" aria-expanded="false" class="text-muted"
                                                    data-bs-toggle="dropdown" href="javascript:void(0);"><i
                                                class="ri-more-fill"></i></b-link>
                                            <ul aria-labelledby="dropdownMenuLink1" class="dropdown-menu">
                                                <li>
                                                    <router-link class="dropdown-item" to="/apps/tasks-details"><i
                                                        class="ri-eye-fill align-bottom me-2 text-muted"></i> View
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" href="#"><i
                                                        class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                        Edit
                                                    </b-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" @click="deleteTask"><i
                                                        class="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                        Delete
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p class="text-muted">{{ data.description }}</p>
                                    <div class="mb-3">
                                        <div class="d-flex mb-1">
                                            <div class="flex-grow-1">
                                                <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                                    100%</h6>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <span class="text-muted">{{ data.date }}</span>
                                            </div>
                                        </div>
                                        <div class="progress rounded-3 progress-sm">
                                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="15"
                                                 class="progress-bar bg-danger" role="progressbar"
                                                 style="width: 15%"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <b-badge v-for="(item, index) of data.features" :key="index"
                                                     class="badge-soft-primary me-1" variant="soft-primary">{{ item }}
                                            </b-badge>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="avatar-group">
                                                <b-link v-for="(item, index) of data.users" :key="index"
                                                        v-b-tooltip.hover class="avatar-group-item"
                                                        href="javascript: void(0);"
                                                        title="Alexis">
                                                    <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-card-body>
                                <b-card-footer class="border-top-dashed">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="text-muted mb-0">#VL2436</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <ul class="link-inline mb-0">
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-eye-line align-bottom"></i> 04
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-question-answer-line align-bottom"></i> 19
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-attachment-2 align-bottom"></i> 02
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </b-card-footer>
                            </b-card>
                        </draggable>
                    </div>
                </div>
                <div class="my-3">
                    <b-button class="w-100" variant="soft-info" @click="modalShow2 = !modalShow2">Add More</b-button>
                </div>
            </div>
            <div class="tasks-list">
                <div class="d-flex mb-3">
                    <div class="flex-grow-1">
                        <h6 class="fs-14 text-uppercase fw-semibold mb-0">In Reviews
                            <b-badge class="bg-info align-bottom ms-1" tag="small">3</b-badge>
                        </h6>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="dropdown card-header-dropdown">
                            <b-link aria-expanded="false" aria-haspopup="true" class="text-reset dropdown-btn"
                                    data-bs-toggle="dropdown" href="#">
                                <span class="fw-medium text-muted fs-12">Priority<i
                                    class="mdi mdi-chevron-down ms-1"></i></span>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">Priority</b-link>
                                <b-link class="dropdown-item" href="#">Date Added</b-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tasks-wrapper px-3 mx-n3" data-simplebar>
                    <div id="reviews-task" class="tasks">
                        <draggable :list="reviews" class="dragArea" group="reviews">
                            <b-card v-for="(data, index) of reviews" :key="index" class="tasks-box" no-body>
                                <b-card-body>
                                    <div class="d-flex mb-2">
                                        <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                            <router-link to="/apps/tasks-details">{{ data.title }}</router-link>
                                        </h6>
                                        <div class="dropdown">
                                            <b-link id="dropdownMenuLink1" aria-expanded="false" class="text-muted"
                                                    data-bs-toggle="dropdown" href="javascript:void(0);"><i
                                                class="ri-more-fill"></i></b-link>
                                            <ul aria-labelledby="dropdownMenuLink1" class="dropdown-menu">
                                                <li>
                                                    <router-link class="dropdown-item" to="/apps/tasks-details"><i
                                                        class="ri-eye-fill align-bottom me-2 text-muted"></i> View
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" href="#"><i
                                                        class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                        Edit
                                                    </b-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" @click="deleteTask"><i
                                                        class="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                        Delete
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p class="text-muted">{{ data.description }}</p>
                                    <div class="mb-3">
                                        <div class="d-flex mb-1">
                                            <div class="flex-grow-1">
                                                <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                                    100%</h6>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <span class="text-muted">{{ data.date }}</span>
                                            </div>
                                        </div>
                                        <div class="progress rounded-3 progress-sm">
                                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="15"
                                                 class="progress-bar bg-danger" role="progressbar"
                                                 style="width: 15%"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <b-badge v-for="(item, index) of data.features" :key="index"
                                                     class="badge-soft-primary me-1" variant="soft-primary">{{ item }}
                                            </b-badge>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="avatar-group">
                                                <b-link v-for="(item, index) of data.users" :key="index"
                                                        v-b-tooltip.hover class="avatar-group-item"
                                                        href="javascript: void(0);"
                                                        title="Alexis">
                                                    <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-card-body>
                                <b-card-footer class="border-top-dashed">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="text-muted mb-0">#VL2436</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <ul class="link-inline mb-0">
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-eye-line align-bottom"></i> 04
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-question-answer-line align-bottom"></i> 19
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-attachment-2 align-bottom"></i> 02
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </b-card-footer>
                            </b-card>
                        </draggable>
                    </div>
                </div>
                <div class="my-3">
                    <b-button class="w-100" variant="soft-info" @click="modalShow2 = !modalShow2">Add More</b-button>
                </div>
            </div>
            <div class="tasks-list">
                <div class="d-flex mb-3">
                    <div class="flex-grow-1">
                        <h6 class="fs-14 text-uppercase fw-semibold mb-0">Completed
                            <b-badge class="align-bottom ms-1" tag="small" variant="success">1</b-badge>
                        </h6>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="dropdown card-header-dropdown">
                            <b-link aria-expanded="false" aria-haspopup="true" class="text-reset dropdown-btn"
                                    data-bs-toggle="dropdown" href="#">
                                <span class="fw-medium text-muted fs-12">Priority<i
                                    class="mdi mdi-chevron-down ms-1"></i></span>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">Priority</b-link>
                                <b-link class="dropdown-item" href="#">Date Added</b-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tasks-wrapper px-3 mx-n3" data-simplebar>
                    <div id="completed-task" class="tasks">
                        <draggable :list="completed" class="dragArea" group="newData">
                            <b-card v-for="(data, index) of completed" :key="index" class="tasks-box" no-body>
                                <b-card-body>
                                    <div class="d-flex mb-2">
                                        <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                            <router-link to="/apps/tasks-details">{{ data.title }}</router-link>
                                        </h6>
                                        <div class="dropdown">
                                            <b-link id="dropdownMenuLink1" aria-expanded="false" class="text-muted"
                                                    data-bs-toggle="dropdown" href="javascript:void(0);"><i
                                                class="ri-more-fill"></i></b-link>
                                            <ul aria-labelledby="dropdownMenuLink1" class="dropdown-menu">
                                                <li>
                                                    <router-link class="dropdown-item" to="/apps/tasks-details"><i
                                                        class="ri-eye-fill align-bottom me-2 text-muted"></i> View
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" href="#"><i
                                                        class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                        Edit
                                                    </b-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" @click="deleteTask"><i
                                                        class="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                        Delete
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p class="text-muted">{{ data.description }}</p>
                                    <div class="mb-3">
                                        <div class="d-flex mb-1">
                                            <div class="flex-grow-1">
                                                <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                                    100%</h6>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <span class="text-muted">{{ data.date }}</span>
                                            </div>
                                        </div>
                                        <div class="progress rounded-3 progress-sm">
                                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="15"
                                                 class="progress-bar bg-danger" role="progressbar"
                                                 style="width: 15%"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <b-badge v-for="(item, index) of data.features" :key="index"
                                                     class="badge-soft-primary me-1" variant="soft-primary">{{ item }}
                                            </b-badge>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="avatar-group">
                                                <b-link v-for="(item, index) of data.users" :key="index"
                                                        v-b-tooltip.hover class="avatar-group-item"
                                                        href="javascript: void(0);"
                                                        title="Alexis">
                                                    <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-card-body>
                                <b-card-footer class="border-top-dashed">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="text-muted mb-0">#VL2436</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <ul class="link-inline mb-0">
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-eye-line align-bottom"></i> 04
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-question-answer-line align-bottom"></i> 19
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-attachment-2 align-bottom"></i> 02
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </b-card-footer>
                            </b-card>
                        </draggable>
                    </div>
                </div>
                <div class="my-3">
                    <b-button class="w-100" variant="soft-info" @click="modalShow2 = !modalShow2">Add More</b-button>
                </div>
            </div>
            <div class="tasks-list">
                <div class="d-flex mb-3">
                    <div class="flex-grow-1">
                        <h6 class="fs-14 text-uppercase fw-semibold mb-0">new
                            <b-badge class="align-bottom ms-1" tag="small" variant="success">1</b-badge>
                        </h6>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="dropdown card-header-dropdown">
                            <b-link aria-expanded="false" aria-haspopup="true" class="text-reset dropdown-btn"
                                    data-bs-toggle="dropdown" href="#">
                                <span class="fw-medium text-muted fs-12">Priority<i
                                    class="mdi mdi-chevron-down ms-1"></i></span>
                            </b-link>
                            <div class="dropdown-menu dropdown-menu-end">
                                <b-link class="dropdown-item" href="#">Priority</b-link>
                                <b-link class="dropdown-item" href="#">Date Added</b-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tasks-wrapper px-3 mx-n3" data-simplebar>
                    <div id="new-task" class="tasks">
                        <draggable :list="newData" class="dragArea" group="newData">
                            <b-card v-for="(data, index) of newData" :key="index" class="tasks-box" no-body>
                                <b-card-body>
                                    <div class="d-flex mb-2">
                                        <h6 class="fs-15 mb-0 flex-grow-1 text-truncate">
                                            <router-link to="/apps/tasks-details">{{ data.title }}</router-link>
                                        </h6>
                                        <div class="dropdown">
                                            <b-link id="dropdownMenuLink1" aria-expanded="false" class="text-muted"
                                                    data-bs-toggle="dropdown" href="javascript:void(0);"><i
                                                class="ri-more-fill"></i></b-link>
                                            <ul aria-labelledby="dropdownMenuLink1" class="dropdown-menu">
                                                <li>
                                                    <router-link class="dropdown-item" to="/apps/tasks-details"><i
                                                        class="ri-eye-fill align-bottom me-2 text-muted"></i> View
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" href="#"><i
                                                        class="ri-edit-2-line align-bottom me-2 text-muted"></i>
                                                        Edit
                                                    </b-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" @click="deleteTask"><i
                                                        class="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>
                                                        Delete
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p class="text-muted">{{ data.description }}</p>
                                    <div class="mb-3">
                                        <div class="d-flex mb-1">
                                            <div class="flex-grow-1">
                                                <h6 class="text-muted mb-0"><span class="text-secondary">15%</span> of
                                                    100%</h6>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <span class="text-muted">{{ data.date }}</span>
                                            </div>
                                        </div>
                                        <div class="progress rounded-3 progress-sm">
                                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="15"
                                                 class="progress-bar bg-danger" role="progressbar"
                                                 style="width: 15%"></div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                            <b-badge v-for="(item, index) of data.features" :key="index"
                                                     class="badge-soft-primary me-1" variant="soft-primary">{{ item }}
                                            </b-badge>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <div class="avatar-group">
                                                <b-link v-for="(item, index) of data.users" :key="index"
                                                        v-b-tooltip.hover class="avatar-group-item"
                                                        href="javascript: void(0);"
                                                        title="Alexis">
                                                    <img :src="item" alt="" class="rounded-circle avatar-xxs">
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-card-body>
                                <b-card-footer class="border-top-dashed">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <h6 class="text-muted mb-0">#VL2436</h6>
                                        </div>
                                        <div class="flex-shrink-0">
                                            <ul class="link-inline mb-0">
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-eye-line align-bottom"></i> 04
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-question-answer-line align-bottom"></i> 19
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item">
                                                    <b-link class="text-muted" href="javascript:void(0)"><i
                                                        class="ri-attachment-2 align-bottom"></i> 02
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </b-card-footer>
                            </b-card>
                        </draggable>
                    </div>
                </div>
                <div class="my-3">
                    <b-button class="w-100" variant="soft-info" @click="modalShow2 = !modalShow2">Add More</b-button>
                </div>
            </div>
        </div>


        <b-modal v-model="modalShow" class="v-modal-custom" content-class="border-0" header-class="p-3 bg-soft-warning"
                 hide-footer title="Add Member">
            <b-form>
                <b-row class="g-3">
                    <b-col lg="12">
                        <label class="form-label" for="submissionidInput">Submission ID</label>
                        <input id="submissionidInput" class="form-control" placeholder="Submission ID" type="number">
                    </b-col>
                    <b-col lg="12">
                        <label class="form-label" for="profileimgInput">Profile Images</label>
                        <input id="profileimgInput" class="form-control" type="file">
                    </b-col>
                    <b-col lg="6">
                        <label class="form-label" for="firstnameInput">First Name</label>
                        <input id="firstnameInput" class="form-control" placeholder="Enter firstname" type="text">
                    </b-col>
                    <b-col lg="6">
                        <label class="form-label" for="lastnameInput">Last Name</label>
                        <input id="lastnameInput" class="form-control" placeholder="Enter lastname" type="text">
                    </b-col>
                    <b-col lg="12">
                        <label class="form-label" for="designationInput">Designation</label>
                        <input id="designationInput" class="form-control" placeholder="Designation" type="text">
                    </b-col>
                    <b-col lg="12">
                        <label class="form-label" for="titleInput">Title</label>
                        <input id="titleInput" class="form-control" placeholder="Title" type="text">
                    </b-col>
                    <b-col lg="6">
                        <label class="form-label" for="numberInput">Phone Number</label>
                        <input id="numberInput" class="form-control" placeholder="Phone number" type="text">
                    </b-col>
                    <b-col lg="6">
                        <label class="form-label" for="joiningdateInput">Joining Date</label>

                        <flat-pickr v-model="date" :config="config" class="form-control" placeholder="Select date">
                        </flat-pickr>
                    </b-col>
                    <b-col lg="12">
                        <label class="form-label" for="emailInput">Email ID</label>
                        <input id="emailInput" class="form-control" placeholder="Email" type="email">
                    </b-col>
                </b-row>
            </b-form>
            <div class="modal-footer v-modal-footer">
                <b-button type="button" variant="light" @click="modalShow = false"><i
                    class="ri-close-line align-bottom me-1"></i> Close
                </b-button>
                <b-button id="addMember" type="button" variant="success">Add Member</b-button>
            </div>
        </b-modal>

        <b-modal v-model="modalShow1" centered class="v-modal-custom" content-class="border-0"
                 header-class="p-3 bg-soft-info" hide-footer title="Add Board">
            <b-form action="#">
                <b-row>
                    <b-col lg="12">
                        <label class="form-label" for="boardName">Board Name</label>
                        <input id="boardName" class="form-control" placeholder="Enter board name" type="text">
                    </b-col>
                    <div class="mt-4">
                        <div class="hstack gap-2 justify-content-end">
                            <b-button type="button" variant="light" @click="modalShow1 = false">Close</b-button>
                            <b-button id="addNewBoard" type="button" variant="success">Add Board</b-button>
                        </div>
                    </div>
                </b-row>
            </b-form>
        </b-modal>

        <b-modal v-model="modalShow2" centered class="v-modal-custom" content-class="border-0"
                 header-class="p-3 bg-soft-info" hide-footer size="lg" title="Create New Task">
            <b-form action="#">
                <b-row class="g-3">
                    <b-col lg="12">
                        <label class="form-label" for="projectName">Project Name</label>
                        <input id="projectName" class="form-control" placeholder="Enter project name" type="text">
                    </b-col>
                    <b-col lg="12">
                        <label class="form-label" for="sub-tasks">Task Title</label>
                        <input id="sub-tasks" class="form-control" placeholder="Task title" type="text">
                    </b-col>
                    <b-col lg="12">
                        <label class="form-label" for="task-description">Task Description</label>
                        <textarea id="task-description" class="form-control" rows="3"></textarea>
                    </b-col>
                    <b-col lg="12">
                        <label class="form-label" for="formFile">Tasks Images</label>
                        <input id="formFile" class="form-control" type="file">
                    </b-col>
                    <b-col lg="12">
                        <label class="form-label" for="tasks-progress">Add Team Member</label>
                        <div data-simplebar style="height: 95px;">
                            <ul class="list-unstyled vstack gap-2 mb-0">
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input id="anna-adame" class="form-check-input me-3" type="checkbox" value="">
                                        <label class="form-check-label d-flex align-items-center" for="anna-adame">
                                            <span class="flex-shrink-0">
                                                <img alt="" class="avatar-xxs rounded-circle"
                                                     src="@/assets/images/users/avatar-1.jpg"/>
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Anna Adame
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input id="frank-hook" class="form-check-input me-3" type="checkbox" value="">
                                        <label class="form-check-label d-flex align-items-center" for="frank-hook">
                                            <span class="flex-shrink-0">
                                                <img alt="" class="avatar-xxs rounded-circle"
                                                     src="@/assets/images/users/avatar-3.jpg"/>
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Frank Hook
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input id="alexis-clarke" class="form-check-input me-3" type="checkbox"
                                               value="">
                                        <label class="form-check-label d-flex align-items-center" for="alexis-clarke">
                                            <span class="flex-shrink-0">
                                                <img alt="" class="avatar-xxs rounded-circle"
                                                     src="@/assets/images/users/avatar-6.jpg"/>
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Alexis Clarke
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input id="herbert-stokes" class="form-check-input me-3" type="checkbox"
                                               value="">
                                        <label class="form-check-label d-flex align-items-center" for="herbert-stokes">
                                            <span class="flex-shrink-0">
                                                <img alt="" class="avatar-xxs rounded-circle"
                                                     src="@/assets/images/users/avatar-2.jpg"/>
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Herbert Stokes
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input id="michael-morris" class="form-check-input me-3" type="checkbox"
                                               value="">
                                        <label class="form-check-label d-flex align-items-center" for="michael-morris">
                                            <span class="flex-shrink-0">
                                                <img alt="" class="avatar-xxs rounded-circle"
                                                     src="@/assets/images/users/avatar-7.jpg"/>
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Michael Morris
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input id="nancy-martino" class="form-check-input me-3" type="checkbox"
                                               value="">
                                        <label class="form-check-label d-flex align-items-center" for="nancy-martino">
                                            <span class="flex-shrink-0">
                                                <img alt="" class="avatar-xxs rounded-circle"
                                                     src="@/assets/images/users/avatar-5.jpg"/>
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Nancy Martino
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input id="thomas-taylor" class="form-check-input me-3" type="checkbox"
                                               value="">
                                        <label class="form-check-label d-flex align-items-center" for="thomas-taylor">
                                            <span class="flex-shrink-0">
                                                <img alt="" class="avatar-xxs rounded-circle"
                                                     src="@/assets/images/users/avatar-8.jpg"/>
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Thomas Taylor
                                            </span>
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check d-flex align-items-center">
                                        <input id="tonya-noble" class="form-check-input me-3" type="checkbox" value="">
                                        <label class="form-check-label d-flex align-items-center" for="tonya-noble">
                                            <span class="flex-shrink-0">
                                                <img alt="" class="avatar-xxs rounded-circle"
                                                     src="@/assets/images/users/avatar-10.jpg"/>
                                            </span>
                                            <span class="flex-grow-1 ms-2">
                                                Tonya Noble
                                            </span>
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </b-col>
                    <b-col lg="4">
                        <label class="form-label" for="due-date">Due Date</label>

                        <flat-pickr v-model="date1" class="form-control" placeholder="Select date">
                        </flat-pickr>
                    </b-col>
                    <b-col lg="4">
                        <label class="form-label" for="categories">Tags</label>
                        <input id="categories" class="form-control" placeholder="Enter tag" type="text">
                    </b-col>
                    <b-col lg="4">
                        <label class="form-label" for="tasks-progress">Tasks Progress</label>
                        <input id="tasks-progress" class="form-control" maxlength="3" placeholder="Enter progress"
                               type="text">
                    </b-col>
                    <div class="mt-4">
                        <div class="hstack gap-2 justify-content-end">
                            <b-button type="button" variant="light" @click="modalShow2 = false">Close</b-button>
                            <b-button type="button" variant="success" @click="addNewTask">Add Task</b-button>
                        </div>
                    </div>
                </b-row>
            </b-form>
        </b-modal>

        <b-modal id="deleteTask" v-model="modalShow3" centered class="v-modal-custom" hide-footer modal-class="zoomIn">
            <div class="mt-2 text-center">
                <lottie :height="100" :options="defaultOptions" :width="100"
                        class="avatar-xl" colors="primary:#f7b84b,secondary:#f06548"/>
                <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                    <h4>Are you sure ?</h4>
                    <p class="text-muted mx-4 mb-0">Are you sure you want to remove this tasks ?</p>
                </div>
            </div>
            <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                <b-button class="w-sm" data-bs-dismiss="modal" type="button" variant="light">Close</b-button>
                <b-button id="delete-record" class="w-sm" type="button" variant="danger">Yes, Delete It!</b-button>
            </div>
        </b-modal>

    </Layout>
</template>
