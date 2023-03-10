<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import Swal from "sweetalert2";

export default {
    page: {
        title: "Team",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Team",
            items: [
                {
                    text: "Pages",
                    href: "/",
                },
                {
                    text: "Team",
                    active: true,
                },
            ],
            modalShow: false,
            teammember: [
                {
                    "id": 12,
                    "coverImg": require("@/assets/images/small/img-9.jpg"),
                    "bookmark": false,
                    "memberImg": require("@/assets/images/users/avatar-2.jpg"),
                    "memberName": "Nancy Martino",
                    "position": "Team Leader & HR",
                    "projects": "225",
                    "tasks": "197"
                }, {
                    "id": 11,
                    "coverImg": require("@/assets/images/small/img-12.jpg"),
                    "bookmark": true,
                    "memberImg": "",
                    "nickname": "HB",
                    "memberName": "Henry Baird",
                    "position": "Full Stack Developer",
                    "projects": "352",
                    "tasks": "376"
                }, {
                    "id": 10,
                    "coverImg": require("@/assets/images/small/img-11.jpg"),
                    "bookmark": false,
                    "memberImg": require("@/assets/images/users/avatar-3.jpg"),
                    "memberName": "Frank Hook",
                    "position": "Project Manager",
                    "projects": "164",
                    "tasks": "182"
                }, {
                    "id": 9,
                    "coverImg": require("@/assets/images/small/img-1.jpg"),
                    "bookmark": true,
                    "memberImg": require("@/assets/images/users/avatar-8.jpg"),
                    "memberName": "Jennifer Carter",
                    "position": "UI/UX Designer",
                    "projects": "241",
                    "tasks": "204"
                }, {
                    "id": 8,
                    "coverImg": require("@/assets/images/small/img-10.jpg"),
                    "bookmark": false,
                    "memberImg": "",
                    "nickname": "ME",
                    "memberName": "Megan Elmore",
                    "position": "Team Leader & Web Developer",
                    "projects": "201",
                    "tasks": "263"
                }, {
                    "id": 7,
                    "coverImg": require("@/assets/images/small/img-2.jpg"),
                    "bookmark": false,
                    "memberImg": require("@/assets/images/users/avatar-4.jpg"),
                    "memberName": "Alexis Clarke",
                    "position": "Backend Developer",
                    "projects": "132",
                    "tasks": "147"
                }, {
                    "id": 6,
                    "coverImg": require("@/assets/images/small/img-4.jpg"),
                    "bookmark": true,
                    "memberImg": "",
                    "nickname": "NC",
                    "memberName": "Nathan Cole",
                    "position": "Front-End Developer",
                    "projects": "352",
                    "tasks": "376"
                }, {
                    "id": 5,
                    "coverImg": require("@/assets/images/small/img-7.jpg"),
                    "bookmark": true,
                    "memberImg": require("@/assets/images/users/avatar-6.jpg"),
                    "memberName": "Joseph Parker",
                    "position": "Full Stack Developer",
                    "projects": "64",
                    "tasks": "93"
                }, {
                    "id": 4,
                    "coverImg": require("@/assets/images/small/img-3.jpg"),
                    "bookmark": false,
                    "memberImg": require("@/assets/images/users/avatar-5.jpg"),
                    "memberName": "Erica Kernan",
                    "position": "Web Designer",
                    "projects": "345",
                    "tasks": "298"
                }, {
                    "id": 3,
                    "coverImg": require("@/assets/images/small/img-5.jpg"),
                    "bookmark": true,
                    "memberImg": "",
                    "nickname": "DP",
                    "memberName": "Donald Palmer",
                    "position": "Wed Developer",
                    "projects": "97",
                    "tasks": "135"
                }, {
                    "id": 2,
                    "coverImg": require("@/assets/images/small/img-8.jpg"),
                    "bookmark": false,
                    "memberImg": require("@/assets/images/users/avatar-7.jpg"),
                    "memberName": "Jack Gough",
                    "position": "React Js Developer",
                    "projects": "87",
                    "tasks": "121"
                }, {
                    "id": 1,
                    "coverImg": require("@/assets/images/small/img-6.jpg"),
                    "bookmark": false,
                    "memberImg": "",
                    "nickname": "MW",
                    "memberName": "Marie Ward",
                    "position": "Backend Developer",
                    "projects": "145",
                    "tasks": "210"
                }
            ]
        };
    },
    name: "Widgets",
    methods: {
        deletefolder(event) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                cancelButtonColor: "#f46a6a",
                confirmButtonColor: "#34c38f",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.value) {
                    this.teammember.splice(this.teammember.indexOf(event), 1);
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
            });
        },
        toggleFavourite(ele) {
            ele.target.closest('.favourite-btn').classList.toggle("active");
        }
    },
    mounted() {

        var list = document.querySelectorAll(".team-list");

        function onButtonGroupClick(event) {
            if (event.target.id === 'list-view-button' || event.target.parentElement.id === 'list-view-button') {
                document.getElementById("list-view-button").classList.add("active");
                document.getElementById("grid-view-button").classList.remove("active");
                Array.from(list).forEach(function (el) {
                    el.classList.add("list-view-filter");
                    el.classList.remove("grid-view-filter");
                });

            } else {
                document.getElementById("grid-view-button").classList.add("active");
                document.getElementById("list-view-button").classList.remove("active");
                Array.from(list).forEach(function (el) {
                    el.classList.remove("list-view-filter");
                    el.classList.add("grid-view-filter");
                });
            }
        }

        if (list) {
            var buttonGroups = document.querySelectorAll('.filter-button');
            if (buttonGroups) {
                Array.from(buttonGroups).forEach(function (btnGroup) {
                    btnGroup.addEventListener('click', onButtonGroupClick);
                });
            }
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
        <b-card no-body>
            <b-card-body>
                <b-row class="g-2">
                    <b-col sm="4">
                        <div class="search-box">
                            <input id="searchMemberList" class="form-control" placeholder="Search for name or designation..."
                                   type="text">
                            <i class="ri-search-line search-icon"></i>
                        </div>
                    </b-col>
                    <b-col class="ms-auto" sm="auto">
                        <div class="list-grid-nav hstack gap-1">
                            <button id="grid-view-button" class="btn btn-soft-info nav-link btn-icon fs-14 active filter-button"
                                    type="button"><i
                                class="ri-grid-fill"></i></button>
                            <button id="list-view-button" class="btn btn-soft-info nav-link  btn-icon fs-14 filter-button"
                                    type="button"><i
                                class="ri-list-unordered"></i></button>
                            <b-dropdown class="btn-icon fs-14" no-caret right toggle-class="arrow-none"
                                        variant="soft-info">
                                <template #button-content><i class="ri-more-2-fill"></i>
                                </template>
                                <b-dropdown-item href="#">
                                    All
                                </b-dropdown-item>
                                <b-dropdown-item href="#">
                                    Last Week
                                </b-dropdown-item>
                                <b-dropdown-item href="#">
                                    Last Month
                                </b-dropdown-item>
                                <b-dropdown-item href="#">
                                    Last Year
                                </b-dropdown-item>
                            </b-dropdown>
                            <b-button class="addMembers-modal" variant="success" @click="modalShow = !modalShow"><i
                                class="ri-add-fill me-1 align-bottom"></i> Add Members
                            </b-button>
                        </div>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>

        <b-row>
            <b-col lg="12">
                <div>
                    <div id="teamlist">
                        <b-row id="team-member-list" class="team-list grid-view-filter">

                            <b-col v-for="(teamData, index) of this.teammember" :key="index">
                                <b-card class="team-box" no-body>
                                    <div class="team-cover">
                                        <img :src="teamData.coverImg" alt="" class="img-fluid"/>
                                    </div>
                                    <b-card-body class="p-4">
                                        <b-row class="align-items-center team-row">
                                            <b-col class="team-settings">
                                                <b-row>
                                                    <b-col>
                                                        <div class="flex-shrink-0 me-2">
                                                            <b-button :class="{
                                  'active': teamData.bookmark == true
                                }" class="btn-icon rounded-circle btn-sm favourite-btn"
                                                                      type="button"
                                                                      variant="light" @click="toggleFavourite">
                                                                <i class="ri-star-fill fs-14"></i>
                                                            </b-button>
                                                        </div>
                                                    </b-col>
                                                    <b-col class="text-end dropdown">
                                                        <a aria-expanded="false" data-bs-toggle="dropdown"
                                                           href="javascript:void(0);">
                                                            <i class="ri-more-fill fs-17"></i>
                                                        </a>
                                                        <ul class="dropdown-menu dropdown-menu-end">
                                                            <li><a class="dropdown-item edit-list"
                                                                   data-edit-id="{{teamData.id}}"
                                                                   href="#addmemberModal"
                                                                   @click="modalShow = !modalShow"><i
                                                                class="ri-pencil-line me-2 align-bottom text-muted"></i>Edit</a>
                                                            </li>
                                                            <li><a class="dropdown-item remove-list"
                                                                   @click="deletefolder(teamData)"><i
                                                                class="ri-delete-bin-5-line me-2 align-bottom text-muted"></i>Remove</a>
                                                            </li>
                                                        </ul>
                                                    </b-col>
                                                </b-row>
                                            </b-col>
                                            <b-col col lg="4">
                                                <div class="team-profile-img">
                                                    <div class="avatar-lg img-thumbnail rounded-circle flex-shrink-0">

                                                        <img v-if="teamData.memberImg" :src="teamData.memberImg"
                                                             alt=""
                                                             class="member-img img-fluid d-block rounded-circle"/>
                                                        <div
                                                            v-if="!teamData.memberImg"
                                                            class="avatar-title border bg-light text-primary rounded-circle text-uppercase">{{ teamData.nickname }}
                                                        </div>
                                                    </div>
                                                    <div class="team-content">
                                                        <a aria-controls="member-overview" class="member-name"
                                                           data-bs-toggle="offcanvas"
                                                           href="#member-overview">
                                                            <h5 class="fs-16 mb-1">{{ teamData.memberName }}</h5>
                                                        </a>
                                                        <p class="text-muted member-designation mb-0">
                                                            {{ teamData.position }}</p>
                                                    </div>
                                                </div>
                                            </b-col>
                                            <b-col col lg="4">
                                                <b-row class="text-muted text-center">
                                                    <b-col class="border-end border-end-dashed" cols="6">
                                                        <h5 class="mb-1 projects-num">{{ teamData.projects }}</h5>
                                                        <p class="text-muted mb-0">Projects</p>
                                                    </b-col>
                                                    <b-col cols="6">
                                                        <h5 class="mb-1 tasks-num">{{ teamData.tasks }}</h5>
                                                        <p class="text-muted mb-0">Tasks</p>
                                                    </b-col>
                                                </b-row>
                                            </b-col>
                                            <b-col col lg="2">
                                                <div class="text-end">
                                                    <b-link class="btn btn-light view-btn" href="/pages/profile">View
                                                        Profile
                                                    </b-link>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                        </b-row>
                        <div class="text-center mb-3">
                            <a class="text-success" href="javascript:void(0);"><i
                                class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load More </a>
                        </div>
                    </div>
                    <div id="noresult" class="py-4 mt-4 text-center" style="display: none;">
                        <lord-icon colors="primary:#405189,secondary:#0ab39c" src="https://cdn.lordicon.com/msoeawqm.json"
                                   style="width:72px;height:72px"
                                   trigger="loop"></lord-icon>
                        <h5 class="mt-4">Sorry! No Result Found</h5>
                    </div>
                    <!-- Modal -->

                    <b-modal v-model="modalShow" centered class="v-modal-custom" content-class="border-0" hide-footer
                             hide-header hide-header-close>
                        <form id="memberlist-form" autocomplete="off" class="needs-validation" novalidate>
                            <b-row>
                                <b-col lg="12">
                                    <input id="memberid-input" class="form-control" type="hidden" value="">
                                    <div class="px-1 pt-1">
                                        <div
                                            class="modal-team-cover position-relative mb-0 mt-n4 mx-n4 rounded-top overflow-hidden">
                                            <img id="cover-img" alt="" class="img-fluid"
                                                 src="@/assets/images/small/img-9.jpg"/>
                                            <div class="d-flex position-absolute start-0 end-0 top-0 p-3">
                                                <div class="flex-grow-1">
                                                    <h5 id="createMemberLabel" class="modal-title text-white">Add New
                                                        Members</h5>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <div class="d-flex gap-3 align-items-center">
                                                        <div>
                                                            <label class="mb-0" data-bs-placement="top"
                                                                   data-bs-toggle="tooltip"
                                                                   for="cover-image-input" title="Select Cover Image">
                                                                <div class="avatar-xs">
                                                                    <div
                                                                        class="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                                        <i class="ri-image-fill"></i>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                            <input id="cover-image-input" accept="image/png, image/gif, image/jpeg"
                                                                   class="form-control d-none" type="file"
                                                                   value="">
                                                        </div>
                                                        <button id="createMemberBtn-close" class="btn-close btn-close-white"
                                                                type="button"
                                                                @click="modalShow = !modalShow"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-center mb-4 mt-n5 pt-2">
                                        <div class="position-relative d-inline-block">
                                            <div class="position-absolute bottom-0 end-0">
                                                <label class="mb-0" data-bs-placement="right" data-bs-toggle="tooltip"
                                                       for="member-image-input"
                                                       title="Select Member Image">
                                                    <div class="avatar-xs">
                                                        <div
                                                            class="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                                                            <i class="ri-image-fill"></i>
                                                        </div>
                                                    </div>
                                                </label>
                                                <input id="member-image-input" accept="image/png, image/gif, image/jpeg" class="form-control d-none"
                                                       type="file"
                                                       value="">
                                            </div>
                                            <div class="avatar-lg">
                                                <div class="avatar-title bg-light rounded-circle">
                                                    <img id="member-img" class="avatar-md rounded-circle h-auto"
                                                         src="@/assets/images/users/user-dummy-img.jpg"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="teammembersName">Name</label>
                                        <input id="teammembersName" class="form-control" placeholder="Enter name"
                                               required type="text">
                                        <div class="invalid-feedback">Please Enter a member name.</div>
                                    </div>

                                    <div class="mb-4">
                                        <label class="form-label" for="designation">Designation</label>
                                        <input id="designation" class="form-control" placeholder="Enter designation"
                                               required type="text">
                                        <div class="invalid-feedback">Please Enter a designation.</div>
                                    </div>
                                    <input id="project-input" class="form-control" type="hidden" value="">
                                    <input id="task-input" class="form-control" type="hidden" value="">

                                    <div class="hstack gap-2 justify-content-end">
                                        <b-button type="button" variant="light" @click="modalShow = false">Close
                                        </b-button>
                                        <b-button id="addNewMember" type="submit" variant="success">Add Member
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </form>
                    </b-modal>

                    <div id="member-overview" class="offcanvas offcanvas-end border-0" tabindex="-1">
                        <div class="offcanvas-body profile-offcanvas p-0">
                            <div class="team-cover">
                                <img alt="" class="img-fluid" src="@/assets/images/small/img-9.jpg"/>
                            </div>
                            <div class="p-3">
                                <div class="team-settings">
                                    <b-row>
                                        <b-col>
                                            <div class="bookmark-icon flex-shrink-0 me-2">
                                                <input id="favourite13" class="bookmark-input bookmark-hide"
                                                       type="checkbox">
                                                <label class="btn-star" for="favourite13">
                                                    <svg height="20" width="20">
                                                        <use xlink:href="#icon-star"/>
                                                    </svg>
                                                </label>
                                            </div>
                                        </b-col>
                                        <b-col class="text-end dropdown">
                                            <a id="dropdownMenuLink14" aria-expanded="false"
                                               data-bs-toggle="dropdown"
                                               href="javascript:void(0);">
                                                <i class="ri-more-fill fs-17"></i>
                                            </a>
                                            <ul aria-labelledby="dropdownMenuLink14"
                                                class="dropdown-menu dropdown-menu-end">
                                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                    class="ri-eye-line me-2 align-middle"></i>View</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                    class="ri-star-line me-2 align-middle"></i>Favorites</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0);"><i
                                                    class="ri-delete-bin-5-line me-2 align-middle"></i>Delete</a></li>
                                            </ul>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>
                            <div class="p-3 text-center">
                                <img alt="" class="avatar-lg img-thumbnail rounded-circle mx-auto profile-img"
                                     src="@/assets/images/users/avatar-2.jpg">
                                <div class="mt-3">
                                    <h5 class="fs-15 profile-name">Nancy Martino</h5>
                                    <p class="text-muted profile-designation">Team Leader & HR</p>
                                </div>
                                <div class="hstack gap-2 justify-content-center mt-4">
                                    <div class="avatar-xs">
                                        <a class="avatar-title bg-soft-secondary text-secondary rounded fs-16"
                                           href="javascript:void(0);">
                                            <i class="ri-facebook-fill"></i>
                                        </a>
                                    </div>
                                    <div class="avatar-xs">
                                        <a class="avatar-title bg-soft-success text-success rounded fs-16"
                                           href="javascript:void(0);">
                                            <i class="ri-slack-fill"></i>
                                        </a>
                                    </div>
                                    <div class="avatar-xs">
                                        <a class="avatar-title bg-soft-info text-info rounded fs-16"
                                           href="javascript:void(0);">
                                            <i class="ri-linkedin-fill"></i>
                                        </a>
                                    </div>
                                    <div class="avatar-xs">
                                        <a class="avatar-title bg-soft-danger text-danger rounded fs-16"
                                           href="javascript:void(0);">
                                            <i class="ri-dribbble-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <b-row class="g-0 text-center">
                                <b-col cols="6">
                                    <div class="p-3 border border-dashed border-start-0">
                                        <h5 class="mb-1 profile-project">124</h5>
                                        <p class="text-muted mb-0">Projects</p>
                                    </div>
                                </b-col>
                                <b-col cols="6">
                                    <div class="p-3 border border-dashed border-start-0">
                                        <h5 class="mb-1 profile-task">81</h5>
                                        <p class="text-muted mb-0">Tasks</p>
                                    </div>
                                </b-col>
                            </b-row>
                            <div class="p-3">
                                <h5 class="fs-15 mb-3">Personal Details</h5>
                                <div class="mb-3">
                                    <p class="text-muted text-uppercase fw-semibold fs-12 mb-2">Number</p>
                                    <h6>+(256) 2451 8974</h6>
                                </div>
                                <div class="mb-3">
                                    <p class="text-muted text-uppercase fw-semibold fs-12 mb-2">Email</p>
                                    <h6>nancymartino@email.com</h6>
                                </div>
                                <div>
                                    <p class="text-muted text-uppercase fw-semibold fs-12 mb-2">Location</p>
                                    <h6 class="mb-0">Carson City - USA</h6>
                                </div>
                            </div>
                            <div class="p-3 border-top">
                                <h5 class="fs-15 mb-4">File Manager</h5>
                                <div class="d-flex mb-3">
                                    <div class="flex-shrink-0 avatar-xs">
                                        <div class="avatar-title bg-soft-danger text-danger rounded fs-16">
                                            <i class="ri-image-2-line"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1"><a href="javascript:void(0);">Images</a></h6>
                                        <p class="text-muted mb-0">4469 Files</p>
                                    </div>
                                    <div class="text-muted">
                                        12 GB
                                    </div>
                                </div>
                                <div class="d-flex mb-3">
                                    <div class="flex-shrink-0 avatar-xs">
                                        <div class="avatar-title bg-soft-secondary text-secondary rounded fs-16">
                                            <i class="ri-file-zip-line"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1"><a href="javascript:void(0);">Documents</a></h6>
                                        <p class="text-muted mb-0">46 Files</p>
                                    </div>
                                    <div class="text-muted">
                                        3.46 GB
                                    </div>
                                </div>
                                <div class="d-flex mb-3">
                                    <div class="flex-shrink-0 avatar-xs">
                                        <div class="avatar-title bg-soft-success text-success rounded fs-16">
                                            <i class="ri-live-line"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1"><a href="javascript:void(0);">Media</a></h6>
                                        <p class="text-muted mb-0">124 Files</p>
                                    </div>
                                    <div class="text-muted">
                                        4.3 GB
                                    </div>
                                </div>
                                <div class="d-flex">
                                    <div class="flex-shrink-0 avatar-xs">
                                        <div class="avatar-title bg-soft-primary text-primary rounded fs-16">
                                            <i class="ri-error-warning-line"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="mb-1"><a href="javascript:void(0);">Others</a></h6>
                                        <p class="text-muted mb-0">18 Files</p>
                                    </div>
                                    <div class="text-muted">
                                        846 MB
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="offcanvas-foorter border p-3 hstack gap-3 text-center position-relative">
                            <b-button class="w-100" variant="light"><i
                                class="ri-question-answer-fill align-bottom ms-1"></i> Send
                                Message
                            </b-button>
                            <b-link class="btn btn-primary w-100" href="/pages/profile"><i
                                class="ri-user-3-fill align-bottom ms-1"></i> View Profile
                            </b-link>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </Layout>
</template>
