<script>
import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";

export default {
    methods: {
        toggleFavourite(ele) {
            ele.target.closest('.favourite-btn').classList.toggle("active");
        }
    },
    page: {
        title: "Overview",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Overview",
            items: [
                {
                    text: "Pages",
                    href: "/",
                },
                {
                    text: "Overview",
                    active: true,
                },
            ],
        };
    },
    components: {
        Layout
    },

};
</script>

<template>
    <Layout>

        <b-row>
            <b-col lg="12">
                <b-card class="mt-n4 mx-n4" no-body>
                    <div class="bg-soft-warning">
                        <b-card-body class="pb-0 px-4">
                            <b-row class="mb-3">
                                <b-col md>
                                    <b-row class="align-items-center g-3">
                                        <b-col md="auto">
                                            <div class="avatar-md">
                                                <div class="avatar-title bg-white rounded-circle">
                                                    <img alt="" class="avatar-xs"
                                                         src="@/assets/images/brands/slack.png">
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col md>
                                            <div>
                                                <h4 class="fw-bold">Velzon - Admin & Dashboard</h4>
                                                <div class="hstack gap-3 flex-wrap">
                                                    <div><i class="ri-building-line align-bottom me-1"></i> Themesbrand
                                                    </div>
                                                    <div class="vr"></div>
                                                    <div>Create Date : <span class="fw-medium">15 Sep, 2021</span></div>
                                                    <div class="vr"></div>
                                                    <div>Due Date : <span class="fw-medium">29 Dec, 2021</span></div>
                                                    <div class="vr"></div>
                                                    <b-badge class="bg-info fs-12" pill>New</b-badge>
                                                    <b-badge class="bg-danger fs-12" pill variant="danger">High
                                                    </b-badge>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col md="auto">
                                    <div class="hstack gap-1 flex-wrap">
                                        <button class="btn py-0 fs-16 favourite-btn active" type="button">
                                            <i class="ri-star-fill" @click="toggleFavourite"></i>
                                        </button>
                                        <button class="btn py-0 fs-16 text-body" type="button">
                                            <i class="ri-share-line"></i>
                                        </button>
                                        <button class="btn py-0 fs-16 text-body" type="button">
                                            <i class="ri-flag-line"></i>
                                        </button>
                                    </div>
                                </b-col>
                            </b-row>

                            <ul class="nav nav-tabs-custom border-bottom-0" role="tablist">
                                <li class="nav-item">
                                    <b-link class="nav-link active fw-semibold" data-bs-toggle="tab"
                                            href="#project-overview" role="tab">
                                        Overview
                                    </b-link>
                                </li>
                                <li class="nav-item">
                                    <b-link class="nav-link fw-semibold" data-bs-toggle="tab" href="#project-documents"
                                            role="tab">
                                        Documents
                                    </b-link>
                                </li>
                                <li class="nav-item">
                                    <b-link class="nav-link fw-semibold" data-bs-toggle="tab" href="#project-activities"
                                            role="tab">
                                        Activities
                                    </b-link>
                                </li>
                                <li class="nav-item">
                                    <b-link class="nav-link fw-semibold" data-bs-toggle="tab" href="#project-team"
                                            role="tab">
                                        Team
                                    </b-link>
                                </li>
                            </ul>
                        </b-card-body>
                    </div>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="12">
                <div class="tab-content text-muted">
                    <div id="project-overview" class="tab-pane fade show active" role="tabpanel">
                        <b-row>
                            <b-col lg="8" xl="9">
                                <b-card no-body>
                                    <b-card-body>
                                        <div class="text-muted">
                                            <h6 class="mb-3 fw-semibold text-uppercase">Summary</h6>
                                            <p>It will be as simple as occidental in fact, it will be Occidental. To an
                                                English person, it will seem like simplified English, as a skeptical
                                                Cambridge friend of mine told me what Occidental is. The European
                                                languages are members of the same family. Their separate existence is a
                                                myth. For science, music, sport, etc, Europe uses the same vocabulary.
                                                The languages only differ in their grammar, their pronunciation and
                                                their most common words.</p>

                                            <ul class="ps-4 vstack gap-2">
                                                <li>Product Design, Figma (Software), Prototype</li>
                                                <li>Four Dashboards : Ecommerce, Analytics, Project,etc.</li>
                                                <li>Create calendar, chat and email app pages.</li>
                                                <li>Add authentication pages.</li>
                                                <li>Content listing.</li>
                                            </ul>

                                            <div>
                                                <b-button class="link-success p-0" type="button" variant="link">Read
                                                    more
                                                </b-button>
                                            </div>

                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                                <b-row>

                                                    <b-col lg="3" sm="6">
                                                        <div>
                                                            <p class="mb-2 text-uppercase fw-medium">Create Date :</p>
                                                            <h5 class="fs-15 mb-0">15 Sep, 2021</h5>
                                                        </div>
                                                    </b-col>
                                                    <b-col lg="3" sm="6">
                                                        <div>
                                                            <p class="mb-2 text-uppercase fw-medium">Due Date :</p>
                                                            <h5 class="fs-15 mb-0">29 Dec, 2021</h5>
                                                        </div>
                                                    </b-col>
                                                    <b-col lg="3" sm="6">
                                                        <div>
                                                            <p class="mb-2 text-uppercase fw-medium">Priority :</p>
                                                            <b-badge class="bg-danger fs-12" tag="div">High</b-badge>
                                                        </div>
                                                    </b-col>
                                                    <b-col lg="3" sm="6">
                                                        <div>
                                                            <p class="mb-2 text-uppercase fw-medium">Status :</p>
                                                            <b-badge class="bg-warning fs-12" tag="div">Inprogess
                                                            </b-badge>
                                                        </div>
                                                    </b-col>
                                                </b-row>
                                            </div>

                                            <div class="pt-3 border-top border-top-dashed mt-4">
                                                <h6 class="mb-3 fw-semibold text-uppercase">Resources</h6>
                                                <b-row class="g-3">
                                                    <b-col lg="6" xxl="4">
                                                        <div class="border rounded border-dashed p-2">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0 me-3">
                                                                    <div class="avatar-sm">
                                                                        <div
                                                                            class="avatar-title bg-light text-secondary rounded fs-24">
                                                                            <i class="ri-folder-zip-line"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="flex-grow-1 overflow-hidden">
                                                                    <h5 class="fs-13 mb-1">
                                                                        <b-link class="text-body text-truncate d-block"
                                                                                href="#">
                                                                            App
                                                                            pages.zip
                                                                        </b-link>
                                                                    </h5>
                                                                    <div>2.2MB</div>
                                                                </div>
                                                                <div class="flex-shrink-0 ms-2">
                                                                    <div class="d-flex gap-1">
                                                                        <button
                                                                            class="btn btn-icon text-muted btn-sm fs-18"
                                                                            type="button">
                                                                            <i
                                                                                class="ri-download-2-line"></i></button>
                                                                        <div class="dropdown">
                                                                            <button
                                                                                aria-expanded="false"
                                                                                class="btn btn-icon text-muted btn-sm fs-18 dropdown"
                                                                                data-bs-toggle="dropdown"
                                                                                type="button">
                                                                                <i class="ri-more-fill"></i>
                                                                            </button>
                                                                            <ul class="dropdown-menu">
                                                                                <li>
                                                                                    <b-link class="dropdown-item"
                                                                                            href="#"><i
                                                                                        class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                                        Rename
                                                                                    </b-link>
                                                                                </li>
                                                                                <li>
                                                                                    <b-link class="dropdown-item"
                                                                                            href="#"><i
                                                                                        class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                                        Delete
                                                                                    </b-link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </b-col>
                                                    <b-col lg="6" xxl="4">
                                                        <div class="border rounded border-dashed p-2">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0 me-3">
                                                                    <div class="avatar-sm">
                                                                        <div
                                                                            class="avatar-title bg-light text-secondary rounded fs-24">
                                                                            <i class="ri-file-ppt-2-line"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="flex-grow-1 overflow-hidden">
                                                                    <h5 class="fs-13 mb-1">
                                                                        <b-link class="text-body text-truncate d-block"
                                                                                href="#">
                                                                            Velzon
                                                                            admin.ppt
                                                                        </b-link>
                                                                    </h5>
                                                                    <div>2.4MB</div>
                                                                </div>
                                                                <div class="flex-shrink-0 ms-2">
                                                                    <div class="d-flex gap-1">
                                                                        <button
                                                                            class="btn btn-icon text-muted btn-sm fs-18"
                                                                            type="button">
                                                                            <i
                                                                                class="ri-download-2-line"></i></button>
                                                                        <div class="dropdown">
                                                                            <button
                                                                                aria-expanded="false"
                                                                                class="btn btn-icon text-muted btn-sm fs-18 dropdown"
                                                                                data-bs-toggle="dropdown"
                                                                                type="button">
                                                                                <i class="ri-more-fill"></i>
                                                                            </button>
                                                                            <ul class="dropdown-menu">
                                                                                <li>
                                                                                    <b-link class="dropdown-item"
                                                                                            href="#"><i
                                                                                        class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                                        Rename
                                                                                    </b-link>
                                                                                </li>
                                                                                <li>
                                                                                    <b-link class="dropdown-item"
                                                                                            href="#"><i
                                                                                        class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                                        Delete
                                                                                    </b-link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </b-col>
                                                </b-row>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header class="align-items-center d-flex">
                                        <b-card-title class="mb-0 flex-grow-1">Comments</b-card-title>
                                        <div class="flex-shrink-0">
                                            <div class="dropdown card-header-dropdown">
                                                <b-link aria-expanded="false" aria-haspopup="true"
                                                        class="text-reset dropdown-btn" data-bs-toggle="dropdown"
                                                        href="#">
                                                    <span class="text-muted">Recent<i
                                                        class="mdi mdi-chevron-down ms-1"></i></span>
                                                </b-link>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <b-link class="dropdown-item" href="#">Recent</b-link>
                                                    <b-link class="dropdown-item" href="#">Top Rated</b-link>
                                                    <b-link class="dropdown-item" href="#">Previous</b-link>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-header>

                                    <b-card-body>

                                        <div class="px-3 mx-n3 mb-2" data-simplebar style="height: 300px;">
                                            <div class="d-flex mb-4">
                                                <div class="flex-shrink-0">
                                                    <img alt="" class="avatar-xs rounded-circle"
                                                         src="@/assets/images/users/avatar-8.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="fs-13">Joseph Parker <small class="text-muted ms-2">20
                                                        Dec 2021 - 05:47AM</small></h5>
                                                    <p class="text-muted">I am getting message from customers that when
                                                        they place order always get error message .</p>
                                                    <b-link class="badge text-muted bg-light"
                                                            href="javascript: void(0);"><i
                                                        class="mdi mdi-reply"></i>
                                                        Reply
                                                    </b-link>
                                                    <div class="d-flex mt-4">
                                                        <div class="flex-shrink-0">
                                                            <img alt="" class="avatar-xs rounded-circle"
                                                                 src="@/assets/images/users/avatar-10.jpg"/>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h5 class="fs-13">Alexis Clarke <small
                                                                class="text-muted ms-2">22 Dec 2021 -
                                                                02:32PM</small></h5>
                                                            <p class="text-muted">Please be sure to check your Spam
                                                                mailbox to see if your email filters have identified the
                                                                email from Dell as spam.</p>
                                                            <b-link class="badge text-muted bg-light"
                                                                    href="javascript: void(0);"><i
                                                                class="mdi mdi-reply"></i> Reply
                                                            </b-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex mb-4">
                                                <div class="flex-shrink-0">
                                                    <img alt="" class="avatar-xs rounded-circle"
                                                         src="@/assets/images/users/avatar-6.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="fs-13">Donald Palmer <small class="text-muted ms-2">24
                                                        Dec 2021 - 05:20PM</small></h5>
                                                    <p class="text-muted">If you have further questions, please contact
                                                        Customer Support from the “Action Menu” on your
                                                        <b-link
                                                            class="text-decoration-underline"
                                                            href="javascript:void(0);">Online Order Support
                                                        </b-link>
                                                        .
                                                    </p>
                                                    <b-link class="badge text-muted bg-light"
                                                            href="javascript: void(0);"><i
                                                        class="mdi mdi-reply"></i>
                                                        Reply
                                                    </b-link>
                                                </div>
                                            </div>
                                            <div class="d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt="" class="avatar-xs rounded-circle"
                                                         src="@/assets/images/users/avatar-10.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h5 class="fs-13">Alexis Clarke <small class="text-muted ms-2">26
                                                        min ago</small></h5>
                                                    <p class="text-muted">Your
                                                        <b-link class="text-decoration-underline"
                                                                href="javascript:void(0)">Online Order Support
                                                        </b-link>
                                                        provides you with the most current status of your order. To help
                                                        manage your order refer to the “Action Menu” to initiate return,
                                                        contact Customer Support and more.
                                                    </p>
                                                    <b-row class="g-2 mb-3">
                                                        <b-col cols="6" lg="1" sm="2">
                                                            <img alt="" class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-4.jpg">
                                                        </b-col>
                                                        <b-col cols="6" lg="1" sm="2">
                                                            <img alt="" class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-5.jpg">
                                                        </b-col>
                                                    </b-row>
                                                    <b-link class="badge text-muted bg-light"
                                                            href="javascript: void(0);"><i
                                                        class="mdi mdi-reply"></i>
                                                        Reply
                                                    </b-link>
                                                    <div class="d-flex mt-4">
                                                        <div class="flex-shrink-0">
                                                            <img alt="" class="avatar-xs rounded-circle"
                                                                 src="@/assets/images/users/avatar-6.jpg"/>
                                                        </div>
                                                        <div class="flex-grow-1 ms-3">
                                                            <h5 class="fs-13">Donald Palmer <small
                                                                class="text-muted ms-2">8 sec ago</small></h5>
                                                            <p class="text-muted">Other shipping methods are available
                                                                at checkout if you want your purchase delivered faster.
                                                            </p>
                                                            <b-link class="badge text-muted bg-light"
                                                                    href="javascript: void(0);"><i
                                                                class="mdi mdi-reply"></i> Reply
                                                            </b-link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <form class="mt-4">
                                            <b-row class="g-3">
                                                <b-col cols="12">
                                                    <label class="form-label text-body"
                                                           for="exampleFormControlTextarea1">Leave a Comments</label>
                                                    <textarea id="exampleFormControlTextarea1"
                                                              class="form-control bg-light border-light"
                                                              placeholder="Enter your comment..."
                                                              rows="3"></textarea>
                                                </b-col>
                                                <b-col class="text-end" cols="12">
                                                    <b-button class="btn-icon me-1" type="button"
                                                              variant="ghost-secondary"><i
                                                        class="ri-attachment-line fs-16"></i>
                                                    </b-button>
                                                    <b-link class="btn btn-success" href="javascript:void(0);">Post
                                                        Comments
                                                    </b-link>
                                                </b-col>
                                            </b-row>
                                        </form>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                            <b-col lg="4" xl="3">
                                <b-card no-body>
                                    <b-card-body>
                                        <h5 class="card-title mb-4">Skills</h5>
                                        <div class="d-flex flex-wrap gap-2 fs-16">
                                            <b-badge class="fw-medium badge-soft-secondary" tag="div"
                                                     variant="soft-secondary">UI/UX
                                            </b-badge>
                                            <b-badge class="fw-medium badge-soft-secondary" tag="div"
                                                     variant="soft-secondary">Figma
                                            </b-badge>
                                            <b-badge class="fw-medium badge-soft-secondary" tag="div"
                                                     variant="soft-secondary">HTML
                                            </b-badge>
                                            <b-badge class="fw-medium badge-soft-secondary" tag="div"
                                                     variant="soft-secondary">CSS
                                            </b-badge>
                                            <b-badge class="fw-medium badge-soft-secondary" tag="div"
                                                     variant="soft-secondary">Javascript
                                            </b-badge>
                                            <b-badge class="fw-medium badge-soft-secondary" tag="div"
                                                     variant="soft-secondary">C#
                                            </b-badge>
                                            <b-badge class="fw-medium badge-soft-secondary" tag="div"
                                                     variant="soft-secondary">Nodejs
                                            </b-badge>
                                        </div>
                                    </b-card-body>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header class="align-items-center d-flex border-bottom-dashed">
                                        <b-card-title class="mb-0 flex-grow-1">Members</b-card-title>
                                        <div class="flex-shrink-0">
                                            <b-button size="sm" type="button" variant="soft-danger"><i
                                                class="ri-share-line me-1 align-bottom"></i> Invite Member
                                            </b-button>
                                        </div>
                                    </b-card-header>

                                    <b-card-body>
                                        <div class="mx-n3 px-3" data-simplebar style="height: 235px;">
                                            <div class="vstack gap-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <img alt="" class="img-fluid rounded-circle"
                                                             src="@/assets/images/users/avatar-2.jpg">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link class="text-body d-block" href="#">Nancy Martino
                                                            </b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button size="sm" type="button" variant="light">Message
                                                            </b-button>
                                                            <div class="dropdown">
                                                                <button
                                                                    aria-expanded="false"
                                                                    class="btn btn-icon btn-sm fs-16 text-muted dropdown"
                                                                    data-bs-toggle="dropdown"
                                                                    type="button">
                                                                    <i class="ri-more-fill"></i>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <div
                                                            class="avatar-title bg-soft-danger text-danger rounded-circle">
                                                            HB
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link class="text-body d-block" href="#">Henry Baird
                                                            </b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button size="sm" type="button" variant="light">Message
                                                            </b-button>
                                                            <div class="dropdown">
                                                                <button
                                                                    aria-expanded="false"
                                                                    class="btn btn-icon btn-sm fs-16 text-muted dropdown"
                                                                    data-bs-toggle="dropdown"
                                                                    type="button">
                                                                    <i class="ri-more-fill"></i>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <img alt="" class="img-fluid rounded-circle"
                                                             src="@/assets/images/users/avatar-3.jpg">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link class="text-body d-block" href="#">Frank Hook
                                                            </b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button size="sm" type="button" variant="light">Message
                                                            </b-button>
                                                            <div class="dropdown">
                                                                <button
                                                                    aria-expanded="false"
                                                                    class="btn btn-icon btn-sm fs-16 text-muted dropdown"
                                                                    data-bs-toggle="dropdown"
                                                                    type="button">
                                                                    <i class="ri-more-fill"></i>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <img alt="" class="img-fluid rounded-circle"
                                                             src="@/assets/images/users/avatar-4.jpg">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link class="text-body d-block" href="#">Jennifer Carter
                                                            </b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button size="sm" type="button" variant="light">Message
                                                            </b-button>
                                                            <div class="dropdown">
                                                                <button
                                                                    aria-expanded="false"
                                                                    class="btn btn-icon btn-sm fs-16 text-muted dropdown"
                                                                    data-bs-toggle="dropdown"
                                                                    type="button">
                                                                    <i class="ri-more-fill"></i>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <div
                                                            class="avatar-title bg-soft-success text-success rounded-circle">
                                                            AC
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link class="text-body d-block" href="#">Alexis Clarke
                                                            </b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button size="sm" type="button" variant="light">Message
                                                            </b-button>
                                                            <div class="dropdown">
                                                                <button
                                                                    aria-expanded="false"
                                                                    class="btn btn-icon btn-sm fs-16 text-muted dropdown"
                                                                    data-bs-toggle="dropdown"
                                                                    type="button">
                                                                    <i class="ri-more-fill"></i>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar-xs flex-shrink-0 me-3">
                                                        <img alt="" class="img-fluid rounded-circle"
                                                             src="@/assets/images/users/avatar-7.jpg">
                                                    </div>
                                                    <div class="flex-grow-1">
                                                        <h5 class="fs-13 mb-0">
                                                            <b-link class="text-body d-block" href="#">Joseph Parker
                                                            </b-link>
                                                        </h5>
                                                    </div>
                                                    <div class="flex-shrink-0">
                                                        <div class="d-flex align-items-center gap-1">
                                                            <b-button size="sm" type="button" variant="light">Message
                                                            </b-button>
                                                            <div class="dropdown">
                                                                <button
                                                                    aria-expanded="false"
                                                                    class="btn btn-icon btn-sm fs-16 text-muted dropdown"
                                                                    data-bs-toggle="dropdown"
                                                                    type="button">
                                                                    <i class="ri-more-fill"></i>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item"
                                                                                href="javascript:void(0);"><i
                                                                            class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header class="align-items-center d-flex border-bottom-dashed">
                                        <b-card-title class="mb-0 flex-grow-1">Attachments</b-card-title>
                                        <div class="flex-shrink-0">
                                            <b-button size="sm" type="button" variant="soft-info"><i
                                                class="ri-upload-2-fill me-1 align-bottom"></i> Upload
                                            </b-button>
                                        </div>
                                    </b-card-header>

                                    <b-card-body>

                                        <div class="vstack gap-2">
                                            <div class="border rounded border-dashed p-2">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm">
                                                            <div
                                                                class="avatar-title bg-light text-secondary rounded fs-24">
                                                                <i class="ri-folder-zip-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="fs-13 mb-1">
                                                            <b-link class="text-body text-truncate d-block" href="#">
                                                                App-pages.zip
                                                            </b-link>
                                                        </h5>
                                                        <div>2.2MB</div>
                                                    </div>
                                                    <div class="flex-shrink-0 ms-2">
                                                        <div class="d-flex gap-1">
                                                            <button class="btn btn-icon text-muted btn-sm fs-18"
                                                                    type="button"><i
                                                                class="ri-download-2-line"></i></button>
                                                            <div class="dropdown">
                                                                <button
                                                                    aria-expanded="false"
                                                                    class="btn btn-icon text-muted btn-sm fs-18 dropdown"
                                                                    data-bs-toggle="dropdown"
                                                                    type="button">
                                                                    <i class="ri-more-fill"></i>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li>
                                                                        <b-link class="dropdown-item" href="#"><i
                                                                            class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                            Rename
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item" href="#"><i
                                                                            class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                            Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="border rounded border-dashed p-2">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm">
                                                            <div
                                                                class="avatar-title bg-light text-secondary rounded fs-24">
                                                                <i class="ri-file-ppt-2-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="fs-13 mb-1">
                                                            <b-link class="text-body text-truncate d-block" href="#">
                                                                Velzon-admin.ppt
                                                            </b-link>
                                                        </h5>
                                                        <div>2.4MB</div>
                                                    </div>
                                                    <div class="flex-shrink-0 ms-2">
                                                        <div class="d-flex gap-1">
                                                            <button class="btn btn-icon text-muted btn-sm fs-18"
                                                                    type="button"><i
                                                                class="ri-download-2-line"></i></button>
                                                            <div class="dropdown">
                                                                <button
                                                                    aria-expanded="false"
                                                                    class="btn btn-icon text-muted btn-sm fs-18 dropdown"
                                                                    data-bs-toggle="dropdown"
                                                                    type="button">
                                                                    <i class="ri-more-fill"></i>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li>
                                                                        <b-link class="dropdown-item" href="#"><i
                                                                            class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                            Rename
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item" href="#"><i
                                                                            class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                            Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="border rounded border-dashed p-2">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm">
                                                            <div
                                                                class="avatar-title bg-light text-secondary rounded fs-24">
                                                                <i class="ri-folder-zip-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="fs-13 mb-1">
                                                            <b-link class="text-body text-truncate d-block" href="#">
                                                                Images.zip
                                                            </b-link>
                                                        </h5>
                                                        <div>1.2MB</div>
                                                    </div>
                                                    <div class="flex-shrink-0 ms-2">
                                                        <div class="d-flex gap-1">
                                                            <button class="btn btn-icon text-muted btn-sm fs-18"
                                                                    type="button"><i
                                                                class="ri-download-2-line"></i></button>
                                                            <div class="dropdown">
                                                                <button
                                                                    aria-expanded="false"
                                                                    class="btn btn-icon text-muted btn-sm fs-18 dropdown"
                                                                    data-bs-toggle="dropdown"
                                                                    type="button">
                                                                    <i class="ri-more-fill"></i>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li>
                                                                        <b-link class="dropdown-item" href="#"><i
                                                                            class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                            Rename
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item" href="#"><i
                                                                            class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                            Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="border rounded border-dashed p-2">
                                                <div class="d-flex align-items-center">
                                                    <div class="flex-shrink-0 me-3">
                                                        <div class="avatar-sm">
                                                            <div
                                                                class="avatar-title bg-light text-secondary rounded fs-24">
                                                                <i class="ri-image-2-line"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="flex-grow-1 overflow-hidden">
                                                        <h5 class="fs-13 mb-1">
                                                            <b-link class="text-body text-truncate d-block" href="#">
                                                                bg-pattern.png
                                                            </b-link>
                                                        </h5>
                                                        <div>1.1MB</div>
                                                    </div>
                                                    <div class="flex-shrink-0 ms-2">
                                                        <div class="d-flex gap-1">
                                                            <button class="btn btn-icon text-muted btn-sm fs-18"
                                                                    type="button"><i
                                                                class="ri-download-2-line"></i></button>
                                                            <div class="dropdown">
                                                                <button
                                                                    aria-expanded="false"
                                                                    class="btn btn-icon text-muted btn-sm fs-18 dropdown"
                                                                    data-bs-toggle="dropdown"
                                                                    type="button">
                                                                    <i class="ri-more-fill"></i>
                                                                </button>
                                                                <ul class="dropdown-menu">
                                                                    <li>
                                                                        <b-link class="dropdown-item" href="#"><i
                                                                            class="ri-pencil-fill align-bottom me-2 text-muted"></i>
                                                                            Rename
                                                                        </b-link>
                                                                    </li>
                                                                    <li>
                                                                        <b-link class="dropdown-item" href="#"><i
                                                                            class="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                                                                            Delete
                                                                        </b-link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mt-2 text-center">
                                                <b-button type="button" variant="success">View more</b-button>
                                            </div>
                                        </div>
                                    </b-card-body>
                                </b-card>
                            </b-col>
                        </b-row>
                    </div>
                    <div id="project-documents" class="tab-pane fade" role="tabpanel">
                        <b-card no-body>
                            <b-card-body>
                                <div class="d-flex align-items-center mb-4">
                                    <h5 class="card-title flex-grow-1">Documents</h5>
                                </div>
                                <b-row>
                                    <b-col lg="12">
                                        <div class="table-responsive table-card">
                                            <table class="table table-borderless align-middle mb-0">
                                                <thead class="table-light">
                                                <tr>
                                                    <th scope="col">File Name</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Size</th>
                                                    <th scope="col">Upload Date</th>
                                                    <th scope="col" style="width: 120px;">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar-sm">
                                                                <div
                                                                    class="avatar-title bg-light text-secondary rounded fs-24">
                                                                    <i class="ri-folder-zip-line"></i>
                                                                </div>
                                                            </div>
                                                            <div class="ms-3 flex-grow-1">
                                                                <h5 class="fs-14 mb-0">
                                                                    <b-link class="text-dark"
                                                                            href="javascript:void(0)">
                                                                        Artboard-documents.zip
                                                                    </b-link>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Zip File</td>
                                                    <td>4.57 MB</td>
                                                    <td>12 Dec 2021</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <b-link aria-expanded="true"
                                                                    class="btn btn-soft-secondary btn-sm btn-icon"
                                                                    data-bs-toggle="dropdown"
                                                                    href="javascript:void(0);">
                                                                <i class="ri-more-fill"></i>
                                                            </b-link>
                                                            <ul class="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-eye-fill me-2 align-bottom text-muted"></i>View
                                                                    </b-link>
                                                                </li>
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-download-2-fill me-2 align-bottom text-muted"></i>Download
                                                                    </b-link>
                                                                </li>
                                                                <li class="dropdown-divider"></li>
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>Delete
                                                                    </b-link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar-sm">
                                                                <div
                                                                    class="avatar-title bg-light text-danger rounded fs-24">
                                                                    <i class="ri-file-pdf-fill"></i>
                                                                </div>
                                                            </div>
                                                            <div class="ms-3 flex-grow-1">
                                                                <h5 class="fs-14 mb-0">
                                                                    <b-link class="text-dark"
                                                                            href="javascript:void(0);">Bank Management
                                                                        System
                                                                    </b-link>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>PDF File</td>
                                                    <td>8.89 MB</td>
                                                    <td>24 Nov 2021</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <b-link aria-expanded="true"
                                                                    class="btn btn-soft-secondary btn-sm btn-icon"
                                                                    data-bs-toggle="dropdown"
                                                                    href="javascript:void(0);">
                                                                <i class="ri-more-fill"></i>
                                                            </b-link>
                                                            <ul class="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-eye-fill me-2 align-bottom text-muted"></i>View
                                                                    </b-link>
                                                                </li>
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-download-2-fill me-2 align-bottom text-muted"></i>Download
                                                                    </b-link>
                                                                </li>
                                                                <li class="dropdown-divider"></li>
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>Delete
                                                                    </b-link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar-sm">
                                                                <div
                                                                    class="avatar-title bg-light text-secondary rounded fs-24">
                                                                    <i class="ri-video-line"></i>
                                                                </div>
                                                            </div>
                                                            <div class="ms-3 flex-grow-1">
                                                                <h5 class="fs-14 mb-0">
                                                                    <b-link class="text-dark"
                                                                            href="javascript:void(0);">Tour-video.mp4
                                                                    </b-link>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>MP4 File</td>
                                                    <td>14.62 MB</td>
                                                    <td>19 Nov 2021</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <b-link aria-expanded="true"
                                                                    class="btn btn-soft-secondary btn-sm btn-icon"
                                                                    data-bs-toggle="dropdown"
                                                                    href="javascript:void(0);">
                                                                <i class="ri-more-fill"></i>
                                                            </b-link>
                                                            <ul class="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-eye-fill me-2 align-bottom text-muted"></i>View
                                                                    </b-link>
                                                                </li>
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-download-2-fill me-2 align-bottom text-muted"></i>Download
                                                                    </b-link>
                                                                </li>
                                                                <li class="dropdown-divider"></li>
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>Delete
                                                                    </b-link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar-sm">
                                                                <div
                                                                    class="avatar-title bg-light text-success rounded fs-24">
                                                                    <i class="ri-file-excel-fill"></i>
                                                                </div>
                                                            </div>
                                                            <div class="ms-3 flex-grow-1">
                                                                <h5 class="fs-14 mb-0">
                                                                    <b-link class="text-dark"
                                                                            href="javascript:void(0);">
                                                                        Account-statement.xsl
                                                                    </b-link>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>XSL File</td>
                                                    <td>2.38 KB</td>
                                                    <td>14 Nov 2021</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <b-link aria-expanded="true"
                                                                    class="btn btn-soft-secondary btn-sm btn-icon"
                                                                    data-bs-toggle="dropdown"
                                                                    href="javascript:void(0);">
                                                                <i class="ri-more-fill"></i>
                                                            </b-link>
                                                            <ul class="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-eye-fill me-2 align-bottom text-muted"></i>View
                                                                    </b-link>
                                                                </li>
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-download-2-fill me-2 align-bottom text-muted"></i>Download
                                                                    </b-link>
                                                                </li>
                                                                <li class="dropdown-divider"></li>
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>Delete
                                                                    </b-link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar-sm">
                                                                <div
                                                                    class="avatar-title bg-light text-warning rounded fs-24">
                                                                    <i class="ri-folder-fill"></i>
                                                                </div>
                                                            </div>
                                                            <div class="ms-3 flex-grow-1">
                                                                <h5 class="fs-14 mb-0">
                                                                    <b-link class="text-dark"
                                                                            href="javascript:void(0);">Project
                                                                        Screenshots
                                                                        Collection
                                                                    </b-link>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Floder File</td>
                                                    <td>87.24 MB</td>
                                                    <td>08 Nov 2021</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <b-link aria-expanded="true"
                                                                    class="btn btn-soft-secondary btn-sm btn-icon"
                                                                    data-bs-toggle="dropdown"
                                                                    href="javascript:void(0);">
                                                                <i class="ri-more-fill"></i>
                                                            </b-link>
                                                            <ul class="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-eye-fill me-2 align-bottom text-muted"></i>View
                                                                    </b-link>
                                                                </li>
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-download-2-fill me-2 align-bottom text-muted"></i>Download
                                                                    </b-link>
                                                                </li>
                                                                <li class="dropdown-divider"></li>
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>Delete
                                                                    </b-link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar-sm">
                                                                <div
                                                                    class="avatar-title bg-light text-danger rounded fs-24">
                                                                    <i class="ri-image-2-fill"></i>
                                                                </div>
                                                            </div>
                                                            <div class="ms-3 flex-grow-1">
                                                                <h5 class="fs-14 mb-0">
                                                                    <b-link class="text-dark"
                                                                            href="javascript:void(0);">Velzon-logo.png
                                                                    </b-link>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>PNG File</td>
                                                    <td>879 KB</td>
                                                    <td>02 Nov 2021</td>
                                                    <td>
                                                        <div class="dropdown">
                                                            <b-link aria-expanded="true"
                                                                    class="btn btn-soft-secondary btn-sm btn-icon"
                                                                    data-bs-toggle="dropdown"
                                                                    href="javascript:void(0);">
                                                                <i class="ri-more-fill"></i>
                                                            </b-link>
                                                            <ul class="dropdown-menu dropdown-menu-end">
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-eye-fill me-2 align-bottom text-muted"></i>View
                                                                    </b-link>
                                                                </li>
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-download-2-fill me-2 align-bottom text-muted"></i>Download
                                                                    </b-link>
                                                                </li>
                                                                <li class="dropdown-divider"></li>
                                                                <li>
                                                                    <b-link class="dropdown-item"
                                                                            href="javascript:void(0);"><i
                                                                        class="ri-delete-bin-5-fill me-2 align-bottom text-muted"></i>Delete
                                                                    </b-link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="text-center mt-3">
                                            <b-link class="text-success " href="javascript:void(0);"><i
                                                class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i> Load
                                                more
                                            </b-link>
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>
                    </div>
                    <div id="project-activities" class="tab-pane fade" role="tabpanel">
                        <b-card no-body>
                            <b-card-body>
                                <h5 class="card-title">Activities</h5>
                                <div class="acitivity-timeline py-3">
                                    <div class="acitivity-item d-flex">
                                        <div class="flex-shrink-0">
                                            <img alt="" class="avatar-xs rounded-circle acitivity-avatar"
                                                 src="@/assets/images/users/avatar-1.jpg"/>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1">Oliver Phillips
                                                <b-badge class="bg-soft-primary text-primary align-middle"
                                                         variant="soft-primary">New
                                                </b-badge>
                                            </h6>
                                            <p class="text-muted mb-2">We talked about a project on linkedin.</p>
                                            <small class="mb-0 text-muted">Today</small>
                                        </div>
                                    </div>
                                    <div class="acitivity-item py-3 d-flex">
                                        <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                            <div class="avatar-title bg-soft-success text-success rounded-circle">
                                                N
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1">Nancy Martino
                                                <b-badge class="bg-soft-secondary text-secondary align-middle"
                                                         variant="soft-secondary">In
                                                    Progress
                                                </b-badge>
                                            </h6>
                                            <p class="text-muted mb-2"><i
                                                class="ri-file-text-line align-middle ms-2"></i> Create new project
                                                Buildng product</p>
                                            <div class="avatar-group mb-2">
                                                <b-link class="avatar-group-item" data-bs-original-title="Christi"
                                                        data-bs-placement="top" data-bs-toggle="tooltip"
                                                        href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xs"
                                                         src="@/assets/images/users/avatar-4.jpg"/>
                                                </b-link>
                                                <b-link class="avatar-group-item" data-bs-original-title="Frank Hook"
                                                        data-bs-placement="top" data-bs-toggle="tooltip"
                                                        href="javascript: void(0);"
                                                        title="">
                                                    <img alt="" class="rounded-circle avatar-xs"
                                                         src="@/assets/images/users/avatar-3.jpg"/>
                                                </b-link>
                                                <b-link class="avatar-group-item" data-bs-original-title=" Ruby"
                                                        data-bs-placement="top" data-bs-toggle="tooltip"
                                                        href="javascript: void(0);"
                                                        title="">
                                                    <div class="avatar-xs">
                                                        <div class="avatar-title rounded-circle bg-light text-primary">
                                                            R
                                                        </div>
                                                    </div>
                                                </b-link>
                                                <b-link class="avatar-group-item" data-bs-original-title="more"
                                                        data-bs-placement="top" data-bs-toggle="tooltip"
                                                        href="javascript: void(0);"
                                                        title="">
                                                    <div class="avatar-xs">
                                                        <div class="avatar-title rounded-circle">
                                                            2+
                                                        </div>
                                                    </div>
                                                </b-link>
                                            </div>
                                            <small class="mb-0 text-muted">Yesterday</small>
                                        </div>
                                    </div>
                                    <div class="acitivity-item py-3 d-flex">
                                        <div class="flex-shrink-0">
                                            <img alt="" class="avatar-xs rounded-circle acitivity-avatar"
                                                 src="@/assets/images/users/avatar-2.jpg"/>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1">Natasha Carey
                                                <b-badge class="bg-soft-success text-success align-middle"
                                                         variant="soft-success">Completed
                                                </b-badge>
                                            </h6>
                                            <p class="text-muted mb-2">Adding a new event with attachments</p>
                                            <b-row>
                                                <b-col xxl="4">
                                                    <b-row class="border border-dashed gx-2 p-2 mb-2">
                                                        <b-col cols="4">
                                                            <img alt="" class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-2.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt="" class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-3.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt="" class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-4.jpg"/>
                                                        </b-col>
                                                    </b-row>
                                                </b-col>
                                            </b-row>
                                            <small class="mb-0 text-muted">25 Nov</small>
                                        </div>
                                    </div>
                                    <div class="acitivity-item py-3 d-flex">
                                        <div class="flex-shrink-0">
                                            <img alt="" class="avatar-xs rounded-circle acitivity-avatar"
                                                 src="@/assets/images/users/avatar-6.jpg"/>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1">Bethany Johnson</h6>
                                            <p class="text-muted mb-2">added a new member to velzon dashboard</p>
                                            <small class="mb-0 text-muted">19 Nov</small>
                                        </div>
                                    </div>
                                    <div class="acitivity-item py-3 d-flex">
                                        <div class="flex-shrink-0">
                                            <div class="avatar-xs acitivity-avatar">
                                                <div class="avatar-title rounded-circle bg-soft-danger text-danger">
                                                    <i class="ri-shopping-bag-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1">Your order is placed
                                                <b-badge class="bg-soft-danger text-danger align-middle ms-1"
                                                         variant="soft-danger">Out of
                                                    Delivery
                                                </b-badge>
                                            </h6>
                                            <p class="text-muted mb-2">These customers can rest assured their order has
                                                been placed.</p>
                                            <small class="mb-0 text-muted">16 Nov</small>
                                        </div>
                                    </div>
                                    <div class="acitivity-item py-3 d-flex">
                                        <div class="flex-shrink-0">
                                            <img alt="" class="avatar-xs rounded-circle acitivity-avatar"
                                                 src="@/assets/images/users/avatar-7.jpg"/>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1">Lewis Pratt</h6>
                                            <p class="text-muted mb-2">They all have something to say beyond the words
                                                on the page. They can come across as casual or neutral, exotic or
                                                graphic. </p>
                                            <small class="mb-0 text-muted">22 Oct</small>
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
                                            <p class="text-muted mb-2"><span class="text-danger">2 days left</span>
                                                notification to submit the monthly sales report.
                                                <b-link
                                                    class="link-warning text-decoration-underline"
                                                    href="javascript:void(0);">Reports Builder
                                                </b-link>
                                            </p>
                                            <small class="mb-0 text-muted">15 Oct</small>
                                        </div>
                                    </div>
                                    <div class="acitivity-item d-flex">
                                        <div class="flex-shrink-0">
                                            <img alt="" class="avatar-xs rounded-circle acitivity-avatar"
                                                 src="@/assets/images/users/avatar-8.jpg"/>
                                        </div>
                                        <div class="flex-grow-1 ms-3">
                                            <h6 class="mb-1">New ticket received
                                                <b-badge class="bg-soft-success text-success align-middle"
                                                         variant="soft-success">Completed
                                                </b-badge>
                                            </h6>
                                            <p class="text-muted mb-2">User <span class="text-secondary">Erica245</span>
                                                submitted a ticket.</p>
                                            <small class="mb-0 text-muted">26 Aug</small>
                                        </div>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                    </div>
                    <div id="project-team" class="tab-pane fade" role="tabpanel">
                        <b-row class="g-4 mb-3">
                            <b-col sm>
                                <div class="d-flex">
                                    <div class="search-box me-2">
                                        <input class="form-control" placeholder="Search member..." type="text">
                                        <i class="ri-search-line search-icon"></i>
                                    </div>
                                </div>
                            </b-col>
                            <b-col sm="auto">
                                <div>
                                    <b-button type="button" variant="danger"><i
                                        class="ri-share-line me-1 align-bottom"></i> Invite Member
                                    </b-button>
                                </div>
                            </b-col>
                        </b-row>

                        <div class="team-list list-view-filter">
                            <b-card class="team-box" no-body>
                                <b-card-body class="px-4">
                                    <b-row class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <b-row class="align-items-center">
                                                <b-col>
                                                    <div class="flex-shrink-0 me-2">
                                                        <button class="btn fs-16 p-0 favourite-btn" type="button">
                                                            <i class="ri-star-fill"></i>
                                                        </button>
                                                    </div>
                                                </b-col>
                                                <div class="col text-end dropdown">
                                                    <b-link aria-expanded="false" data-bs-toggle="dropdown"
                                                            href="javascript:void(0);">
                                                        <i class="ri-more-fill fs-17"></i>
                                                    </b-link>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                            </b-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </b-row>
                                        </div>
                                        <b-col cols lg="4">
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <img alt="" class="img-fluid d-block rounded-circle"
                                                         src="@/assets/images/users/avatar-2.jpg"/>
                                                </div>
                                                <div class="team-content">
                                                    <b-link class="d-block" href="#">
                                                        <h5 class="fs-16 mb-1">Nancy Martino</h5>
                                                    </b-link>
                                                    <p class="text-muted mb-0">Team Leader & HR</p>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols lg="4">
                                            <b-row class="text-muted text-center">
                                                <b-col class="border-end border-end-dashed" cols="6">
                                                    <h5 class="mb-1">225</h5>
                                                    <p class="text-muted mb-0">Projects</p>
                                                </b-col>
                                                <b-col cols="6">
                                                    <h5 class="mb-1">197</h5>
                                                    <p class="text-muted mb-0">Tasks</p>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col lg="2">
                                            <div class="text-end">
                                                <router-link class="btn btn-light view-btn" to="/pages/profile">View
                                                    Profile
                                                </router-link>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                            <b-card class="team-box" no-body>
                                <b-card-body class="px-4">
                                    <b-row class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <b-row class="align-items-center">
                                                <b-col>
                                                    <div class="flex-shrink-0 me-2">
                                                        <button class="btn fs-16 p-0 favourite-btn active"
                                                                type="button">
                                                            <i class="ri-star-fill"></i>
                                                        </button>
                                                    </div>
                                                </b-col>
                                                <div class="col text-end dropdown">
                                                    <b-link aria-expanded="false" data-bs-toggle="dropdown"
                                                            href="javascript:void(0);">
                                                        <i class="ri-more-fill fs-17"></i>
                                                    </b-link>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                            </b-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </b-row>
                                        </div>
                                        <b-col cols lg="4">
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-soft-danger text-danger rounded-circle">
                                                        HB
                                                    </div>
                                                </div>
                                                <div class="team-content">
                                                    <b-link class="d-block" href="#">
                                                        <h5 class="fs-16 mb-1">Henry Baird</h5>
                                                    </b-link>
                                                    <p class="text-muted mb-0">Full Stack Developer</p>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols lg="4">
                                            <b-row class="text-muted text-center">
                                                <b-col class="border-end border-end-dashed" cols="6">
                                                    <h5 class="mb-1">352</h5>
                                                    <p class="text-muted mb-0">Projects</p>
                                                </b-col>
                                                <b-col cols="6">
                                                    <h5 class="mb-1">376</h5>
                                                    <p class="text-muted mb-0">Tasks</p>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col lg="2">
                                            <div class="text-end">
                                                <router-link class="btn btn-light view-btn" to="/pages/profile">View
                                                    Profile
                                                </router-link>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                            <b-card class="team-box" no-body>
                                <b-card-body class="px-4">
                                    <b-row class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <b-row class="align-items-center">
                                                <b-col>
                                                    <div class="flex-shrink-0 me-2">
                                                        <button class="btn fs-16 p-0 favourite-btn active"
                                                                type="button">
                                                            <i class="ri-star-fill"></i>
                                                        </button>
                                                    </div>
                                                </b-col>
                                                <div class="col text-end dropdown">
                                                    <b-link aria-expanded="false" data-bs-toggle="dropdown"
                                                            href="javascript:void(0);">
                                                        <i class="ri-more-fill fs-17"></i>
                                                    </b-link>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                            </b-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </b-row>
                                        </div>
                                        <b-col cols lg="4">
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <img alt="" class="img-fluid d-block rounded-circle"
                                                         src="@/assets/images/users/avatar-3.jpg"/>
                                                </div>
                                                <div class="team-content">
                                                    <b-link class="d-block" href="#">
                                                        <h5 class="fs-16 mb-1">Frank Hook</h5>
                                                    </b-link>
                                                    <p class="text-muted mb-0">Project Manager</p>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols lg="4">
                                            <b-row class="text-muted text-center">
                                                <b-col class="border-end border-end-dashed" cols="6">
                                                    <h5 class="mb-1">164</h5>
                                                    <p class="text-muted mb-0">Projects</p>
                                                </b-col>
                                                <b-col cols="6">
                                                    <h5 class="mb-1">182</h5>
                                                    <p class="text-muted mb-0">Tasks</p>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col lg="2">
                                            <div class="text-end">
                                                <router-link class="btn btn-light view-btn" to="/pages/profile">View
                                                    Profile
                                                </router-link>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                            <b-card class="team-box" no-body>
                                <b-card-body class="px-4">
                                    <b-row class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <b-row class="align-items-center">
                                                <b-col>
                                                    <div class="flex-shrink-0 me-2">
                                                        <button class="btn fs-16 p-0 favourite-btn" type="button">
                                                            <i class="ri-star-fill"></i>
                                                        </button>
                                                    </div>
                                                </b-col>
                                                <div class="col text-end dropdown">
                                                    <b-link aria-expanded="false" data-bs-toggle="dropdown"
                                                            href="javascript:void(0);">
                                                        <i class="ri-more-fill fs-17"></i>
                                                    </b-link>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                            </b-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </b-row>
                                        </div>
                                        <b-col cols lg="4">
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <img alt="" class="img-fluid d-block rounded-circle"
                                                         src="@/assets/images/users/avatar-8.jpg"/>
                                                </div>
                                                <div class="team-content">
                                                    <b-link class="d-block" href="#">
                                                        <h5 class="fs-16 mb-1">Jennifer Carter</h5>
                                                    </b-link>
                                                    <p class="text-muted mb-0">UI/UX Designer</p>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols lg="4">
                                            <b-row class="text-muted text-center">
                                                <b-col class="border-end border-end-dashed" cols="6">
                                                    <h5 class="mb-1">225</h5>
                                                    <p class="text-muted mb-0">Projects</p>
                                                </b-col>
                                                <b-col cols="6">
                                                    <h5 class="mb-1">197</h5>
                                                    <p class="text-muted mb-0">Tasks</p>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col lg="2">
                                            <div class="text-end">
                                                <router-link class="btn btn-light view-btn" to="/pages/profile">View
                                                    Profile
                                                </router-link>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                            <b-card class="team-box" no-body>
                                <b-card-body class="px-4">
                                    <b-row class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <b-row class="align-items-center">
                                                <b-col>
                                                    <div class="flex-shrink-0 me-2">
                                                        <button class="btn fs-16 p-0 favourite-btn" type="button">
                                                            <i class="ri-star-fill"></i>
                                                        </button>
                                                    </div>
                                                </b-col>
                                                <div class="col text-end dropdown">
                                                    <b-link aria-expanded="false" data-bs-toggle="dropdown"
                                                            href="javascript:void(0);">
                                                        <i class="ri-more-fill fs-17"></i>
                                                    </b-link>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                            </b-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </b-row>
                                        </div>
                                        <b-col cols lg="4">
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <div
                                                        class="avatar-title bg-soft-success text-success rounded-circle">
                                                        ME
                                                    </div>
                                                </div>
                                                <div class="team-content">
                                                    <b-link class="d-block" href="#">
                                                        <h5 class="fs-16 mb-1">Megan Elmore</h5>
                                                    </b-link>
                                                    <p class="text-muted mb-0">Team Leader & Web Developer</p>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols lg="4">
                                            <b-row class="text-muted text-center">
                                                <b-col class="border-end border-end-dashed" cols="6">
                                                    <h5 class="mb-1">201</h5>
                                                    <p class="text-muted mb-0">Projects</p>
                                                </b-col>
                                                <b-col cols="6">
                                                    <h5 class="mb-1">263</h5>
                                                    <p class="text-muted mb-0">Tasks</p>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col lg="2">
                                            <div class="text-end">
                                                <router-link class="btn btn-light view-btn" to="/pages/profile">View
                                                    Profile
                                                </router-link>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                            <b-card class="team-box" no-body>
                                <b-card-body class="px-4">
                                    <b-row class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <b-row class="align-items-center">
                                                <b-col>
                                                    <div class="flex-shrink-0 me-2">
                                                        <button class="btn fs-16 p-0 favourite-btn" type="button">
                                                            <i class="ri-star-fill"></i>
                                                        </button>
                                                    </div>
                                                </b-col>
                                                <div class="col text-end dropdown">
                                                    <b-link aria-expanded="false" data-bs-toggle="dropdown"
                                                            href="javascript:void(0);">
                                                        <i class="ri-more-fill fs-17"></i>
                                                    </b-link>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                            </b-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </b-row>
                                        </div>
                                        <b-col cols lg="4">
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <img alt="" class="img-fluid d-block rounded-circle"
                                                         src="@/assets/images/users/avatar-4.jpg"/>
                                                </div>
                                                <div class="team-content">
                                                    <b-link class="d-block" href="#">
                                                        <h5 class="fs-16 mb-1">Alexis Clarke</h5>
                                                    </b-link>
                                                    <p class="text-muted mb-0">Backend Developer</p>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols lg="4">
                                            <b-row class="text-muted text-center">
                                                <b-col class="border-end border-end-dashed" cols="6">
                                                    <h5 class="mb-1">132</h5>
                                                    <p class="text-muted mb-0">Projects</p>
                                                </b-col>
                                                <b-col cols="6">
                                                    <h5 class="mb-1">147</h5>
                                                    <p class="text-muted mb-0">Tasks</p>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col lg="2">
                                            <div class="text-end">
                                                <router-link class="btn btn-light view-btn" to="/pages/profile">View
                                                    Profile
                                                </router-link>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                            <b-card class="team-box" no-body>
                                <b-card-body class="px-4">
                                    <b-row class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <b-row class="align-items-center">
                                                <b-col>
                                                    <div class="flex-shrink-0 me-2">
                                                        <button class="btn fs-16 p-0 favourite-btn" type="button">
                                                            <i class="ri-star-fill"></i>
                                                        </button>
                                                    </div>
                                                </b-col>
                                                <div class="col text-end dropdown">
                                                    <b-link aria-expanded="false" data-bs-toggle="dropdown"
                                                            href="javascript:void(0);">
                                                        <i class="ri-more-fill fs-17"></i>
                                                    </b-link>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                            </b-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </b-row>
                                        </div>
                                        <b-col cols lg="4">
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <div class="avatar-title bg-soft-info text-info rounded-circle">
                                                        NC
                                                    </div>
                                                </div>
                                                <div class="team-content">
                                                    <b-link class="d-block" href="#">
                                                        <h5 class="fs-16 mb-1">Nathan Cole</h5>
                                                    </b-link>
                                                    <p class="text-muted mb-0">Front-End Developer</p>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols lg="4">
                                            <b-row class="text-muted text-center">
                                                <b-col class="border-end border-end-dashed" cols="6">
                                                    <h5 class="mb-1">352</h5>
                                                    <p class="text-muted mb-0">Projects</p>
                                                </b-col>
                                                <b-col cols="6">
                                                    <h5 class="mb-1">376</h5>
                                                    <p class="text-muted mb-0">Tasks</p>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col lg="2">
                                            <div class="text-end">
                                                <router-link class="btn btn-light view-btn" to="/pages/profile">View
                                                    Profile
                                                </router-link>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                            <b-card class="team-box" no-body>
                                <b-card-body class="px-4">
                                    <b-row class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <b-row class="align-items-center">
                                                <b-col>
                                                    <div class="flex-shrink-0 me-2">
                                                        <button class="btn fs-16 p-0 favourite-btn" type="button">
                                                            <i class="ri-star-fill"></i>
                                                        </button>
                                                    </div>
                                                </b-col>
                                                <div class="col text-end dropdown">
                                                    <b-link aria-expanded="false" data-bs-toggle="dropdown"
                                                            href="javascript:void(0);">
                                                        <i class="ri-more-fill fs-17"></i>
                                                    </b-link>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                            </b-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </b-row>
                                        </div>
                                        <b-col cols lg="4">
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <img alt="" class="img-fluid d-block rounded-circle"
                                                         src="@/assets/images/users/avatar-7.jpg"/>
                                                </div>
                                                <div class="team-content">
                                                    <b-link class="d-block" href="#">
                                                        <h5 class="fs-16 mb-1">Joseph Parker</h5>
                                                    </b-link>
                                                    <p class="text-muted mb-0">Team Leader & HR</p>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols lg="4">
                                            <b-row class="text-muted text-center">
                                                <b-col class="border-end border-end-dashed" cols="6">
                                                    <h5 class="mb-1">64</h5>
                                                    <p class="text-muted mb-0">Projects</p>
                                                </b-col>
                                                <b-col cols="6">
                                                    <h5 class="mb-1">93</h5>
                                                    <p class="text-muted mb-0">Tasks</p>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col lg="2">
                                            <div class="text-end">
                                                <router-link class="btn btn-light view-btn" to="/pages/profile">View
                                                    Profile
                                                </router-link>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                            <b-card class="team-box" no-body>
                                <b-card-body class="px-4">
                                    <b-row class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <b-row class="align-items-center">
                                                <b-col>
                                                    <div class="flex-shrink-0 me-2">
                                                        <button class="btn fs-16 p-0 favourite-btn" type="button">
                                                            <i class="ri-star-fill"></i>
                                                        </button>
                                                    </div>
                                                </b-col>
                                                <div class="col text-end dropdown">
                                                    <b-link aria-expanded="false" data-bs-toggle="dropdown"
                                                            href="javascript:void(0);">
                                                        <i class="ri-more-fill fs-17"></i>
                                                    </b-link>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                            </b-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </b-row>
                                        </div>
                                        <b-col cols lg="4">
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <img alt="" class="img-fluid d-block rounded-circle"
                                                         src="@/assets/images/users/avatar-5.jpg"/>
                                                </div>
                                                <div class="team-content">
                                                    <b-link class="d-block" href="#">
                                                        <h5 class="fs-16 mb-1">Erica Kernan</h5>
                                                    </b-link>
                                                    <p class="text-muted mb-0">Web Designer</p>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols lg="4">
                                            <b-row class="text-muted text-center">
                                                <b-col class="border-end border-end-dashed" cols="6">
                                                    <h5 class="mb-1">345</h5>
                                                    <p class="text-muted mb-0">Projects</p>
                                                </b-col>
                                                <b-col cols="6">
                                                    <h5 class="mb-1">298</h5>
                                                    <p class="text-muted mb-0">Tasks</p>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col lg="2">
                                            <div class="text-end">
                                                <router-link class="btn btn-light view-btn" to="/pages/profile">View
                                                    Profile
                                                </router-link>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                            <b-card class="team-box" no-body>
                                <b-card-body class="px-4">
                                    <b-row class="align-items-center team-row">
                                        <div class="col team-settings">
                                            <b-row class="align-items-center">
                                                <b-col>
                                                    <div class="flex-shrink-0 me-2">
                                                        <button class="btn fs-16 p-0 favourite-btn" type="button">
                                                            <i class="ri-star-fill"></i>
                                                        </button>
                                                    </div>
                                                </b-col>
                                                <div class="col text-end dropdown">
                                                    <b-link aria-expanded="false" data-bs-toggle="dropdown"
                                                            href="javascript:void(0);">
                                                        <i class="ri-more-fill fs-17"></i>
                                                    </b-link>
                                                    <ul class="dropdown-menu dropdown-menu-end">
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-eye-fill text-muted me-2 align-bottom"></i>View
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-star-fill text-muted me-2 align-bottom"></i>Favourite
                                                            </b-link>
                                                        </li>
                                                        <li>
                                                            <b-link class="dropdown-item" href="javascript:void(0);"><i
                                                                class="ri-delete-bin-5-fill text-muted me-2 align-bottom"></i>Delete
                                                            </b-link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </b-row>
                                        </div>
                                        <b-col cols lg="4">
                                            <div class="team-profile-img">
                                                <div class="avatar-lg img-thumbnail rounded-circle">
                                                    <div
                                                        class="avatar-title border bg-light text-primary rounded-circle">
                                                        DP
                                                    </div>
                                                </div>
                                                <div class="team-content">
                                                    <b-link class="d-block" href="#">
                                                        <h5 class="fs-16 mb-1">Donald Palmer</h5>
                                                    </b-link>
                                                    <p class="text-muted mb-0">Wed Developer</p>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col cols lg="4">
                                            <b-row class="text-muted text-center">
                                                <b-col class="border-end border-end-dashed" cols="6">
                                                    <h5 class="mb-1">97</h5>
                                                    <p class="text-muted mb-0">Projects</p>
                                                </b-col>
                                                <b-col cols="6">
                                                    <h5 class="mb-1">135</h5>
                                                    <p class="text-muted mb-0">Tasks</p>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                        <b-col lg="2">
                                            <div class="text-end">
                                                <router-link class="btn btn-light view-btn" to="/pages/profile">View
                                                    Profile
                                                </router-link>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                        </div>

                        <b-row class="g-0 text-center text-sm-start align-items-center mb-3">
                            <b-col sm="6">
                                <div>
                                    <p class="mb-sm-0">Showing 1 to 10 of 12 entries</p>
                                </div>
                            </b-col>
                            <b-col sm="6">
                                <ul
                                    class="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                                    <li class="page-item disabled">
                                        <b-link class="page-link" href="#"><i class="mdi mdi-chevron-left"></i></b-link>
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
                                        <b-link class="page-link" href="#">4</b-link>
                                    </li>
                                    <li class="page-item">
                                        <b-link class="page-link" href="#">5</b-link>
                                    </li>
                                    <li class="page-item">
                                        <b-link class="page-link" href="#"><i class="mdi mdi-chevron-right"></i>
                                        </b-link>
                                    </li>
                                </ul>
                            </b-col>
                        </b-row>
                    </div>
                </div>
            </b-col>
        </b-row>
    </Layout>
</template>
