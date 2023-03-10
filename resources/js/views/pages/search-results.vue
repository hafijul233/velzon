<script>
import SwiperCore from "swiper";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/swiper-bundle.css";
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

SwiperCore.use([]);

export default {
    page: {
        title: "Search Results",
        meta: [{
            name: "description",
            content: appConfig.description
        }],
    },
    data() {
        return {
            title: "Search Results",
            items: [{
                text: "Pages",
                href: "/",
            },
                {
                    text: "Search Results",
                    active: true,
                },
            ],
        };
    },
    components: {
        Layout,
        PageHeader,
        Swiper,
        SwiperSlide,
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="border-0">
                        <b-row class="justify-content-center mb-4">
                            <b-col lg="6">
                                <b-row class="g-2">
                                    <b-col>
                                        <div class="position-relative mb-3">
                                            <input class="
                          form-control form-control-lg
                          bg-light
                          border-light
                        " placeholder="Search here.." type="text" value="Admin Dashboard"/>
                                            <b-link aria-controls="offcanvasExample" class="
                          btn btn-link
                          link-success
                          btn-lg
                          position-absolute
                          end-0
                          top-0
                        " data-bs-target="#offcanvasExample"
                                                    data-bs-toggle="offcanvas"><i class="ri-mic-fill"></i>
                                            </b-link>
                                        </div>
                                    </b-col>
                                    <div class="col-auto">
                                        <b-button size="lg" type="submit" variant="primary">
                                            <i class="mdi mdi-magnify me-1"></i> Search
                                        </b-button>
                                    </div>
                                </b-row>
                            </b-col>
                            <b-col lg="12">
                                <h5 class="fs-16 fw-semibold text-center mb-0">
                                    Showing results for "<span
                                    class="text-primary fw-medium fst-italic">Admin Dashboard</span>
                                    "
                                </h5>
                            </b-col>
                        </b-row>

                        <div id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" class="offcanvas offcanvas-top"
                             tabindex="-1">
                            <div class="offcanvas-body">
                                <button aria-label="Close" class="btn-close text-reset float-end" data-bs-dismiss="offcanvas"
                                        type="button"></button>
                                <div class="
                    d-flex
                    flex-column
                    h-100
                    justify-content-center
                    align-items-center
                  ">
                                    <div class="search-voice">
                                        <i class="ri-mic-fill align-middle"></i>
                                        <span class="voice-wave"></span>
                                        <span class="voice-wave"></span>
                                        <span class="voice-wave"></span>
                                    </div>
                                    <h4>Talk to me, what can I do for you?</h4>
                                </div>
                            </div>
                        </div>
                    </b-card-header>
                    <div>
                        <ul class="nav nav-tabs nav-tabs-custom" role="tablist">
                            <li class="nav-item">
                                <b-link aria-selected="false" class="nav-link active" data-bs-toggle="tab" href="#all"
                                        role="tab">
                                    <i class="ri-search-2-line text-muted align-bottom me-1"></i>
                                    All Results
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link id="images-tab" aria-selected="true" class="nav-link" data-bs-toggle="tab" href="#images"
                                        role="tab">
                                    <i class="ri-image-fill text-muted align-bottom me-1"></i>
                                    Images
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link aria-selected="false" class="nav-link" data-bs-toggle="tab" href="#news"
                                        role="tab">
                                    <i class="ri-list-unordered text-muted align-bottom me-1"></i>
                                    News
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link aria-selected="false" class="nav-link" data-bs-toggle="tab" href="#video"
                                        role="tab">
                                    <i class="ri-video-line text-muted align-bottom me-1"></i>
                                    Videos
                                </b-link>
                            </li>
                            <li class="nav-item ms-auto">
                                <b-dropdown class="fw-medium text-reset mb-n1" no-caret right
                                            toggle-class="arrow-none" variant="transparent">
                                    <template #button-content><i class="ri-settings-4-line align-middle me-1"></i>
                                        Settings
                                    </template>
                                    <b-dropdown-item href="#">
                                        Search Settings
                                    </b-dropdown-item>
                                    <b-dropdown-item href="#">
                                        Advanced Search
                                    </b-dropdown-item>
                                    <b-dropdown-item href="#">
                                        Search History
                                    </b-dropdown-item>
                                    <b-dropdown-item href="#">
                                        Search Help
                                    </b-dropdown-item>
                                    <b-dropdown-divider></b-dropdown-divider>
                                    <b-dropdown-item href="#">
                                        Dark Mode:Off
                                    </b-dropdown-item>
                                </b-dropdown>
                            </li>
                        </ul>
                    </div>
                    <b-card-body class="p-4">
                        <div class="tab-content text-muted">
                            <div id="all" class="tab-pane active" role="tabpanel">
                                <div class="pb-3">
                                    <h5 class="mb-1">
                                        <b-link href="javascript:void(0);">Velzon - Responsive Bootstrap 5 Admin
                                            Dashboard
                                        </b-link>
                                    </h5>
                                    <p class="text-success mb-2">
                                        https://themesbrand.com/velzon/index.html
                                    </p>
                                    <p class="text-muted mb-2">
                                        Velzon admin is super flexible, powerful, clean, modern &
                                        responsive admin template based on
                                        <span class="fw-semibold">bootstrap 5</span> stable with
                                        unlimited possibilities. You can simply change to any layout
                                        or mode by changing a couple of lines of code. You can start
                                        small and large projects or update design in your existing
                                        project using Velzon it is very quick and easy as it is
                                        beautiful, adroit, and delivers the ultimate user
                                        experience.
                                    </p>
                                    <ul class="
                      list-inline
                      d-flex
                      align-items-center
                      g-3
                      text-muted
                      fs-14
                      mb-0
                    ">
                                        <li class="list-inline-item me-3">
                                            <i class="ri-thumb-up-line align-middle me-1"></i>10
                                        </li>
                                        <li class="list-inline-item me-3">
                                            <i class="ri-question-answer-line align-middle me-1"></i>8
                                        </li>
                                        <li class="list-inline-item">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <i class="ri-user-line"></i>
                                                </div>
                                                <div class="flex-grow-1 fs-13 ms-1">
                                                    <span class="fw-medium">Themesbrand</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="border border-dashed"></div>

                                <div class="py-3">
                                    <h5 class="fs-13 mb-3 text-muted fst-italic">
                                        Showing results Images
                                    </h5>
                                    <b-row>
                                        <b-col lg="10" xl="4">
                                            <b-row class="g-2">
                                                <b-col md="3" sm="6">
                                                    <div>
                                                        <b-link class="image-popup d-block">
                                                            <img alt="" class="img-fluid d-block rounded"
                                                                 src="@/assets/images/small/img-1.jpg"/>
                                                        </b-link>
                                                    </div>
                                                </b-col>
                                                <b-col md="3" sm="6">
                                                    <div>
                                                        <b-link class="image-popup d-block">
                                                            <img alt="" class="img-fluid d-block rounded"
                                                                 src="@/assets/images/small/img-3.jpg"/>
                                                        </b-link>
                                                    </div>
                                                </b-col>
                                                <b-col md="3" sm="6">
                                                    <div>
                                                        <b-link class="image-popup d-block">
                                                            <img alt="" class="img-fluid d-block rounded"
                                                                 src="@/assets/images/small/img-4.jpg"/>
                                                        </b-link>
                                                    </div>
                                                </b-col>
                                                <b-col md="3" sm="6">
                                                    <div class="search-more-results rounded">
                                                        <b-link class="d-block" href="javascript:void(0);"
                                                                onclick="myFunction()">
                                                            <img alt="" class="img-fluid d-block rounded"
                                                                 src="@/assets/images/small/img-5.jpg"/>

                                                            <div class="bg-overlay"></div>
                                                            <div class="nav-icon">
                                                                <i class="ri-image-fill align-middle me-1"></i>
                                                                99+
                                                            </div>
                                                        </b-link>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                </div>

                                <div class="border border-dashed"></div>

                                <div class="py-3">
                                    <h5 class="mb-1">
                                        <b-link href="javascript:void(0);">Skote - Admin & Dashboard Template by
                                            Themesbrand
                                        </b-link>
                                    </h5>
                                    <p class="text-success mb-2">
                                        https://themesbrand.com/skote/
                                    </p>
                                    <p class="text-muted mb-2">
                                        Skote is an admin dashboard template that is a beautifully
                                        crafted, clean & minimal designed admin template with Dark,
                                        Light Layouts with RTL options. You can build any type of
                                        web application like Saas based interface, eCommerce,
                                        Crypto, CRM, CMS, Project management apps, Admin Panels,
                                        etc.
                                    </p>
                                    <ul class="
                      list-inline
                      d-flex
                      align-items-center
                      g-3
                      text-muted
                      fs-14
                      mb-0
                    ">
                                        <li class="list-inline-item me-3">
                                            <i class="ri-thumb-up-line align-middle me-1"></i>485
                                        </li>
                                        <li class="list-inline-item me-3">
                                            <i class="ri-question-answer-line align-middle me-1"></i>167
                                        </li>
                                        <li class="list-inline-item">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <i class="ri-user-line"></i>
                                                </div>
                                                <div class="flex-grow-1 fs-13 ms-1">
                                                    <span class="fw-medium">Themesbrand</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="border border-dashed"></div>

                                <div class="py-3">
                                    <h5 class="mb-1">
                                        <b-link href="javascript:void(0);">Minia - React Js Admin & Dashboard Template
                                        </b-link>
                                    </h5>
                                    <p class="text-success mb-2">
                                        https://themesbrand.com/minia/react/
                                    </p>
                                    <p class="text-muted mb-2">
                                        Minia react is a simple and beautiful admin template built
                                        with Bootstrap ^5.1.3. It has
                                        <span class="fw-semibold">5+ different layouts and 3 modes</span>
                                        ( Dark, Light & RTL ) which are managed by SCSS only. You
                                        can simply change to any layouts or mode by changing a
                                        couple of lines code.
                                    </p>
                                    <ul class="
                      list-inline
                      d-flex
                      align-items-center
                      g-3
                      text-muted
                      fs-14
                      mb-0
                    ">
                                        <li class="list-inline-item me-3">
                                            <i class="ri-thumb-up-line align-middle me-1"></i>69
                                        </li>
                                        <li class="list-inline-item me-3">
                                            <i class="ri-question-answer-line align-middle me-1"></i>43
                                        </li>
                                        <li class="list-inline-item">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <i class="ri-user-line"></i>
                                                </div>
                                                <div class="flex-grow-1 fs-13 ms-1">
                                                    <span class="fw-medium">Themesbrand</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="border border-dashed"></div>

                                <div class="py-3">
                                    <h5 class="mb-1">
                                        <b-link href="javascript:void(0);">Doson - Angular Admin & Dashboard Template by
                                            Themesbrand
                                        </b-link>
                                    </h5>
                                    <p class="text-success mb-2">
                                        https://themesbrand.com/dason/angular/
                                    </p>
                                    <p class="text-muted mb-2">
                                        Dason is a simple and beautiful admin template built with
                                        Bootstrap ^5.1.3. It has 5+ different layouts and 3 modes (
                                        Dark, Light & RTL ) which are managed by SCSS only. You can
                                        simply change to any layouts or mode by changing a couple of
                                        lines code.
                                    </p>
                                    <ul class="
                      list-inline
                      d-flex
                      align-items-center
                      g-3
                      text-muted
                      fs-14
                      mb-0
                    ">
                                        <li class="list-inline-item me-3">
                                            <i class="ri-thumb-up-line align-middle me-1"></i>102
                                        </li>
                                        <li class="list-inline-item me-3">
                                            <i class="ri-question-answer-line align-middle me-1"></i>36
                                        </li>
                                        <li class="list-inline-item">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <i class="ri-user-line"></i>
                                                </div>
                                                <div class="flex-grow-1 fs-13 ms-1">
                                                    <span class="fw-medium">Themesbrand</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <ul class="
                      pagination pagination-separated
                      justify-content-center
                      mb-0
                    ">
                                        <li class="page-item disabled">
                                            <b-link class="page-link" href="javascript:void(0);"><i
                                                class="mdi mdi-chevron-left"></i></b-link>
                                        </li>
                                        <li class="page-item active">
                                            <b-link class="page-link" href="javascript:void(0);">1</b-link>
                                        </li>
                                        <li class="page-item">
                                            <b-link class="page-link" href="javascript:void(0);">2</b-link>
                                        </li>
                                        <li class="page-item">
                                            <b-link class="page-link" href="javascript:void(0);">3</b-link>
                                        </li>
                                        <li class="page-item">
                                            <b-link class="page-link" href="javascript:void(0);">4</b-link>
                                        </li>
                                        <li class="page-item">
                                            <b-link class="page-link" href="javascript:void(0);">5</b-link>
                                        </li>
                                        <li class="page-item">
                                            <b-link class="page-link" href="javascript:void(0);"><i
                                                class="mdi mdi-chevron-right"></i>
                                            </b-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="images" class="tab-pane" role="tabpanel">
                                <b-row>
                                    <b-col lg="12">
                                        <div class="images-menu mb-3">
                                            <swiper :loop="true"
                                                    :slidesPerView="8"
                                                    :spaceBetween="5" class="swiper responsive-swiper rounded gallery-light pb-4">
                                                <swiper-slide>
                                                    <div class="swiper-slide">
                                                        <div class="
                                d-flex
                                align-items-center
                                border border-dashed
                                rounded
                                p-2
                              ">
                                                            <div class="flex-shrink-0">
                                                                <img alt="" class="rounded"
                                                                     src="@/assets/images/small/img-12.jpg" width="65"/>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link class="stretched-link fw-medium"
                                                                        href="javascript:void(0);">Bootstrap
                                                                </b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <div class="swiper-slide">
                                                        <div class="
                                d-flex
                                align-items-center
                                border border-dashed
                                rounded
                                p-2
                              ">
                                                            <div class="flex-shrink-0">
                                                                <img alt="" class="rounded"
                                                                     src="@/assets/images/small/img-11.jpg" width="65"/>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link class="stretched-link fw-medium"
                                                                        href="javascript:void(0);">Website
                                                                </b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <div class="swiper-slide">
                                                        <div class="
                                d-flex
                                align-items-center
                                border border-dashed
                                rounded
                                p-2
                              ">
                                                            <div class="flex-shrink-0">
                                                                <img alt="" class="rounded"
                                                                     src="@/assets/images/small/img-10.jpg" width="65"/>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link class="stretched-link fw-medium"
                                                                        href="javascript:void(0);">Responsive
                                                                </b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <div class="swiper-slide">
                                                        <div class="
                                d-flex
                                align-items-center
                                border border-dashed
                                rounded
                                p-2
                              ">
                                                            <div class="flex-shrink-0">
                                                                <img alt="" class="rounded"
                                                                     src="@/assets/images/small/img-9.jpg" width="65"/>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link class="stretched-link fw-medium"
                                                                        href="javascript:void(0);">Design
                                                                </b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <div class="swiper-slide">
                                                        <div class="
                                d-flex
                                align-items-center
                                border border-dashed
                                rounded
                                p-2
                              ">
                                                            <div class="flex-shrink-0">
                                                                <img alt="" class="rounded"
                                                                     src="@/assets/images/small/img-8.jpg" width="65"/>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link class="stretched-link fw-medium"
                                                                        href="javascript:void(0);">eCommerce
                                                                </b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <div class="swiper-slide">
                                                        <div class="
                                d-flex
                                align-items-center
                                border border-dashed
                                rounded
                                p-2
                              ">
                                                            <div class="flex-shrink-0">
                                                                <img alt="" class="rounded"
                                                                     src="@/assets/images/small/img-7.jpg" width="65"/>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link class="stretched-link fw-medium"
                                                                        href="javascript:void(0);">Templates
                                                                </b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <div class="swiper-slide">
                                                        <div class="
                                d-flex
                                align-items-center
                                border border-dashed
                                rounded
                                p-2
                              ">
                                                            <div class="flex-shrink-0">
                                                                <img alt="" class="rounded"
                                                                     src="@/assets/images/small/img-6.jpg" width="65"/>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link class="stretched-link fw-medium"
                                                                        href="javascript:void(0);">Admin Panal
                                                                </b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <div class="swiper-slide">
                                                        <div class="
                                d-flex
                                align-items-center
                                border border-dashed
                                rounded
                                p-2
                              ">
                                                            <div class="flex-shrink-0">
                                                                <img alt="" class="rounded"
                                                                     src="@/assets/images/small/img-5.jpg" width="65"/>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link class="stretched-link fw-medium"
                                                                        href="javascript:void(0);">Simple
                                                                </b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </swiper-slide>
                                                <swiper-slide>
                                                    <div class="swiper-slide">
                                                        <div class="
                                d-flex
                                align-items-center
                                border border-dashed
                                rounded
                                p-2
                              ">
                                                            <div class="flex-shrink-0">
                                                                <img alt="" class="rounded"
                                                                     src="@/assets/images/small/img-3.jpg" width="65"/>
                                                            </div>
                                                            <div class="flex-grow-1 ms-2">
                                                                <b-link class="stretched-link fw-medium"
                                                                        href="javascript:void(0);">Dark
                                                                </b-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </swiper-slide>
                                            </swiper>
                                        </div>
                                    </b-col>
                                </b-row>
                                <div class="gallery-light">
                                    <b-row>
                                        <b-col lg="4" sm="6" xl="3">
                                            <b-card class="gallery-box" no-body>
                                                <div class="gallery-container">
                                                    <b-link class="image-popup" href="assets/images/small/img-1.jpg"
                                                            title="">
                                                        <img alt=""
                                                             class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-1.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">
                                                                Glasses and laptop from above
                                                            </h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href="">Ron Mackie
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-thumb-up-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    2.2K
                                                                </b-button>
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-question-answer-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    1.3K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <b-card class="gallery-box" no-body>
                                                <div class="gallery-container">
                                                    <b-link class="image-popup" href="assets/images/small/img-2.jpg"
                                                            title="">
                                                        <img alt=""
                                                             class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-2.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">
                                                                Working at a coffee shop
                                                            </h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href="">Nancy
                                                                Martino
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-thumb-up-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    2.2K
                                                                </b-button>
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-question-answer-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    1.3K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <b-card class="gallery-box" no-body>
                                                <div class="gallery-container">
                                                    <b-link class="image-popup" href="assets/images/small/img-3.jpg"
                                                            title="">
                                                        <img alt=""
                                                             class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-3.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">
                                                                Photo was taken in Beach
                                                            </h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href="">Elwood
                                                                Arter
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-thumb-up-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    2.2K
                                                                </b-button>
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-question-answer-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    1.3K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <b-card class="gallery-box" no-body>
                                                <div class="gallery-container">
                                                    <b-link class="image-popup" href="assets/images/small/img-4.jpg"
                                                            title="">
                                                        <img alt=""
                                                             class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-4.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">Drawing a sketch</h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href="">Jason
                                                                McQuaid
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-thumb-up-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    2.2K
                                                                </b-button>
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-question-answer-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    1.3K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <b-card class="gallery-box" no-body>
                                                <div class="gallery-container">
                                                    <b-link class="image-popup" href="assets/images/small/img-5.jpg"
                                                            title="">
                                                        <img alt=""
                                                             class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-5.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">
                                                                Working from home little spot
                                                            </h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href="">Henry
                                                                Baird
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-thumb-up-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    2.2K
                                                                </b-button>
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-question-answer-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    1.3K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <b-card class="gallery-box" no-body>
                                                <div class="gallery-container">
                                                    <b-link class="image-popup" href="assets/images/small/img-6.jpg"
                                                            title="">
                                                        <img alt=""
                                                             class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-6.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">
                                                                Project discussion with team
                                                            </h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href="">Erica
                                                                Kernan
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-thumb-up-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    2.2K
                                                                </b-button>
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-question-answer-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    1.3K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <b-card class="gallery-box" no-body>
                                                <div class="gallery-container">
                                                    <b-link class="image-popup" href="assets/images/small/img-7.jpg"
                                                            title="">
                                                        <img alt=""
                                                             class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-7.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">
                                                                Sunrise above a beach
                                                            </h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href="">James
                                                                Ballard
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-thumb-up-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    2.2K
                                                                </b-button>
                                                                <b-button class="
                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-question-answer-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    1.3K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <b-card class="gallery-box" no-body>
                                                <div class="gallery-container">
                                                    <b-link class="image-popup" href="assets/images/small/img-8.jpg"
                                                            title="">
                                                        <img alt=""
                                                             class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-8.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">
                                                                Glasses and laptop from above
                                                            </h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href="">Ruby
                                                                Griffin
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button class="

                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-thumb-up-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    2.2K
                                                                </b-button>
                                                                <b-button class="

                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-question-answer-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    1.3K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <b-card class="gallery-box" no-body>
                                                <div class="gallery-container">
                                                    <b-link class="image-popup" href="assets/images/small/img-9.jpg"
                                                            title="">
                                                        <img alt=""
                                                             class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-9.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">
                                                                Dramatic clouds at the Golden Gate Bridge
                                                            </h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href="">Ron Mackie
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button class="

                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-thumb-up-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    2.2K
                                                                </b-button>
                                                                <b-button class="

                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-question-answer-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    1.3K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <b-card class="gallery-box" no-body>
                                                <div class="gallery-container">
                                                    <b-link class="image-popup" href="assets/images/small/img-10.jpg"
                                                            title="">
                                                        <img alt=""
                                                             class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-10.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">
                                                                Fun day at the Hill Station
                                                            </h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href="">Henry
                                                                Baird
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button class="

                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-thumb-up-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    2.2K
                                                                </b-button>
                                                                <b-button class="

                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-question-answer-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    1.3K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <b-card class="gallery-box" no-body>
                                                <div class="gallery-container">
                                                    <b-link class="image-popup" href="assets/images/small/img-11.jpg"
                                                            title="">
                                                        <img alt=""
                                                             class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-11.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">
                                                                Cycling in the countryside
                                                            </h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href="">Nancy
                                                                Martino
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button class="

                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-thumb-up-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    2.2K
                                                                </b-button>
                                                                <b-button class="

                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-question-answer-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    1.3K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <b-card class="gallery-box" no-body>
                                                <div class="gallery-container">
                                                    <b-link class="image-popup" href="assets/images/small/img-12.jpg"
                                                            title="">
                                                        <img alt=""
                                                             class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-12.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">
                                                                A mix of friends and strangers heading off to
                                                                find an adventure.
                                                            </h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-2">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href="">Erica
                                                                Kernan
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button class="

                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-thumb-up-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    2.2K
                                                                </b-button>
                                                                <b-button class="

                                    fs-12
                                    text-body text-decoration-none
                                    px-0
                                  " size="sm" type="button" variant="link">
                                                                    <i class="
                                      ri-question-answer-fill
                                      text-muted
                                      align-bottom
                                      me-1
                                    "></i>
                                                                    1.3K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </b-card>
                                        </b-col>
                                    </b-row>
                                    <div class="mt-4">
                                        <ul class="
                        pagination pagination-separated
                        justify-content-center
                        mb-0
                      ">
                                            <li class="page-item disabled">
                                                <b-link class="page-link" href="javascript:void(0);"><i
                                                    class="mdi mdi-chevron-left"></i>
                                                </b-link>
                                            </li>
                                            <li class="page-item active">
                                                <b-link class="page-link" href="javascript:void(0);">1</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="javascript:void(0);">2</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="javascript:void(0);">3</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="javascript:void(0);">4</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="javascript:void(0);">5</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="javascript:void(0);"><i
                                                    class="mdi mdi-chevron-right"></i>
                                                </b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="news" class="tab-pane" role="tabpanel">
                                <b-row>
                                    <b-col lg="6">
                                        <b-card class="border" no-body>
                                            <b-card-body>
                                                <div class="d-sm-flex">
                                                    <div class="flex-shrink-0">
                                                        <img alt="" class="rounded-1" src="@/assets/images/small/img-1.jpg"
                                                             width="115"/>
                                                    </div>
                                                    <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                                                        <ul class="list-inline mb-2">
                                                            <li class="list-inline-item">
                                                                <b-badge class="badge-soft-success fs-11"
                                                                         variant="soft-success">Business
                                                                </b-badge>
                                                            </li>
                                                        </ul>
                                                        <h5>
                                                            <b-link href="javascript:void(0);">A mix of friends and
                                                                strangers heading off to
                                                                find an adventure
                                                            </b-link>
                                                        </h5>
                                                        <ul class="list-inline mb-0">
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-user-3-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                James Ballard
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-calendar-2-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                23 Nov, 2021
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>

                                    <b-col lg="6">
                                        <b-card class="border" no-body>
                                            <b-card-body>
                                                <div class="d-sm-flex">
                                                    <div class="flex-shrink-0">
                                                        <img alt="" class="rounded-1" src="@/assets/images/small/img-2.jpg"
                                                             width="115"/>
                                                    </div>
                                                    <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                                                        <ul class="list-inline mb-2">
                                                            <li class="list-inline-item">
                                                                <b-badge class="badge-soft-warning fs-11"
                                                                         variant="soft-warning">Development
                                                                </b-badge>
                                                            </li>
                                                        </ul>
                                                        <h5>
                                                            <b-link href="javascript:void(0);">How to get creative in
                                                                your work ?
                                                            </b-link>
                                                        </h5>
                                                        <ul class="list-inline mb-0">
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-user-3-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                Ruby Griffin
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-calendar-2-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                23 Nov, 2021
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>

                                    <b-col lg="6">
                                        <b-card class="border" no-body>
                                            <b-card-body>
                                                <div class="d-sm-flex">
                                                    <div class="flex-shrink-0">
                                                        <img alt="" class="rounded-1" src="@/assets/images/small/img-3.jpg"
                                                             width="115"/>
                                                    </div>
                                                    <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                                                        <ul class="list-inline mb-2">
                                                            <li class="list-inline-item">
                                                                <b-badge class="badge-soft-info fs-11"
                                                                         variant="soft-info">Fashion
                                                                </b-badge>
                                                            </li>
                                                        </ul>
                                                        <h5>
                                                            <b-link href="javascript:void(0);">How to become a best sale
                                                                marketer in a
                                                                year!
                                                            </b-link>
                                                        </h5>
                                                        <ul class="list-inline mb-0">
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-user-3-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                Elwood Arter
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-calendar-2-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                23 Nov, 2021
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>

                                    <b-col lg="6">
                                        <b-card class="border" no-body>
                                            <b-card-body>
                                                <div class="d-sm-flex">
                                                    <div class="flex-shrink-0">
                                                        <img alt="" class="rounded-1" src="@/assets/images/small/img-4.jpg"
                                                             width="115"/>
                                                    </div>
                                                    <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                                                        <ul class="list-inline mb-2">
                                                            <li class="list-inline-item">
                                                                <b-badge class="badge-soft-primary fs-11"
                                                                         variant="soft-primary">Product
                                                                </b-badge>
                                                            </li>
                                                        </ul>
                                                        <h5>
                                                            <b-link href="javascript:void(0);">Manage white space in
                                                                responsive layouts ?
                                                            </b-link>
                                                        </h5>
                                                        <ul class="list-inline mb-0">
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-user-3-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                Nancy Martino
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-calendar-2-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                23 Nov, 2021
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>

                                    <b-col lg="6">
                                        <b-card class="border" no-body>
                                            <b-card-body>
                                                <div class="d-sm-flex">
                                                    <div class="flex-shrink-0">
                                                        <img alt="" class="rounded-1" src="@/assets/images/small/img-5.jpg"
                                                             width="115"/>
                                                    </div>
                                                    <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                                                        <ul class="list-inline mb-2">
                                                            <li class="list-inline-item">
                                                                <b-badge class="badge-soft-success fs-11"
                                                                         variant="soft-success">Business
                                                                </b-badge>
                                                            </li>
                                                        </ul>
                                                        <h5>
                                                            <b-link href="javascript:void(0);">Stack designer Olivia
                                                                Murphy offers freelancing
                                                                advice
                                                            </b-link>
                                                        </h5>
                                                        <ul class="list-inline mb-0">
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-user-3-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                Erica Kernan
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-calendar-2-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                11 Nov, 2021
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>

                                    <b-col lg="6">
                                        <b-card class="border" no-body>
                                            <b-card-body>
                                                <div class="d-sm-flex">
                                                    <div class="flex-shrink-0">
                                                        <img alt="" class="rounded-1" src="@/assets/images/small/img-6.jpg"
                                                             width="115"/>
                                                    </div>
                                                    <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                                                        <ul class="list-inline mb-2">
                                                            <li class="list-inline-item">
                                                                <b-badge class="badge-soft-danger fs-11"
                                                                         variant="soft-danger">Design
                                                                </b-badge>
                                                            </li>
                                                        </ul>
                                                        <h5>
                                                            <b-link href="javascript:void(0);">A day in the of a
                                                                professional fashion
                                                                designer
                                                            </b-link>
                                                        </h5>
                                                        <ul class="list-inline mb-0">
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-user-3-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                Jason McQuaid
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-calendar-2-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                14 Nov, 2021
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>

                                    <b-col lg="6">
                                        <b-card class="border" no-body>
                                            <b-card-body>
                                                <div class="d-sm-flex">
                                                    <div class="flex-shrink-0">
                                                        <img alt="" class="rounded-1" src="@/assets/images/small/img-7.jpg"
                                                             width="115"/>
                                                    </div>
                                                    <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                                                        <ul class="list-inline mb-2">
                                                            <li class="list-inline-item">
                                                                <b-badge class="badge-soft-danger fs-11"
                                                                         variant="soft-danger">Design
                                                                </b-badge>
                                                            </li>
                                                        </ul>
                                                        <h5>
                                                            <b-link href="javascript:void(0);">Design your apps in your
                                                                own way
                                                            </b-link>
                                                        </h5>
                                                        <ul class="list-inline mb-0">
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-user-3-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                Henry Baird
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-calendar-2-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                19 Nov, 2021
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>

                                    <b-col lg="6">
                                        <b-card class="border" no-body>
                                            <b-card-body>
                                                <div class="d-sm-flex">
                                                    <div class="flex-shrink-0">
                                                        <img alt="" class="rounded-1" src="@/assets/images/small/img-8.jpg"
                                                             width="115"/>
                                                    </div>
                                                    <div class="flex-grow-1 ms-sm-4 mt-3 mt-sm-0">
                                                        <ul class="list-inline mb-2">
                                                            <li class="list-inline-item">
                                                                <b-badge class="badge-soft-warning fs-11"
                                                                         variant="soft-warning">Development
                                                                </b-badge>
                                                            </li>
                                                        </ul>
                                                        <h5>
                                                            <b-link href="javascript:void(0);">How apps is changing the
                                                                IT world
                                                            </b-link>
                                                        </h5>
                                                        <ul class="list-inline mb-0">
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-user-3-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                Elwood Arter
                                                            </li>
                                                            <li class="list-inline-item">
                                                                <i class="
                                    ri-calendar-2-fill
                                    text-success
                                    align-middle
                                    me-1
                                  "></i>
                                                                10 Aug, 2021
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </b-card-body>
                                        </b-card>
                                    </b-col>
                                </b-row>

                                <div class="mt-4">
                                    <ul class="
                      pagination pagination-separated
                      justify-content-center
                      mb-0
                    ">
                                        <li class="page-item disabled">
                                            <b-link class="page-link" href="javascript:void(0);"><i
                                                class="mdi mdi-chevron-left"></i></b-link>
                                        </li>
                                        <li class="page-item active">
                                            <b-link class="page-link" href="javascript:void(0);">1</b-link>
                                        </li>
                                        <li class="page-item">
                                            <b-link class="page-link" href="javascript:void(0);">2</b-link>
                                        </li>
                                        <li class="page-item">
                                            <b-link class="page-link" href="javascript:void(0);">3</b-link>
                                        </li>
                                        <li class="page-item">
                                            <b-link class="page-link" href="javascript:void(0);">4</b-link>
                                        </li>
                                        <li class="page-item">
                                            <b-link class="page-link" href="javascript:void(0);">5</b-link>
                                        </li>
                                        <li class="page-item">
                                            <b-link class="page-link" href="javascript:void(0);"><i
                                                class="mdi mdi-chevron-right"></i>
                                            </b-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div id="video" class="tab-pane" role="tabpanel">
                                <b-row>
                                    <b-col class="video-list" lg="12">
                                        <div class="list-element">
                                            <h5 class="mb-1">
                                                <b-link href="javascript:void(0);">Admin dashboard templates - Material
                                                    Design for
                                                    Velzon
                                                </b-link>
                                            </h5>
                                            <p class="text-success">
                                                https://themesbrand.com/velzon/index.html
                                            </p>
                                            <div class="d-flex flex-column flex-sm-row">
                                                <div class="flex-shrink-0">
                                                    <iframe allowfullscreen
                                                            class="rounded" src="https://www.youtube.com/embed/GfSZtaoc5bw"
                                                            title="YouTube video"></iframe>
                                                </div>
                                                <div class="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                                                    <p class="text-muted mb-0">
                                                        Velzon admin is super flexible, powerful, clean,
                                                        modern & responsive admin template based on
                                                        <b>bootstrap 5</b> stable with unlimited
                                                        possibilities. You can simply change to any layout
                                                        or mode by changing a couple of lines of code. You
                                                        can start small and large projects or update design
                                                        in your existing project using Velzon it is very
                                                        quick and easy as it is beautiful, adroit, and
                                                        delivers the ultimate user experience.
                                                    </p>
                                                    <div class="border border-dashed mb-1 mt-3"></div>
                                                    <ul class="
                              list-inline
                              d-flex
                              align-items-center
                              g-3
                              text-muted
                              fs-14
                              mb-0
                            ">
                                                        <li class="list-inline-item me-3">
                                                            <i class="ri-thumb-up-line align-middle me-1"></i>335
                                                        </li>
                                                        <li class="list-inline-item me-3">
                                                            <i class="
                                  ri-question-answer-line
                                  align-middle
                                  me-1
                                "></i>102
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <i class="ri-user-line"></i>
                                                                </div>
                                                                <div class="flex-grow-1 fs-13 ms-1">
                                                                    <span class="fw-medium">Themesbrand</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="list-element mt-4">
                                            <h5 class="mb-1">
                                                <b-link href="javascript:void(0);">Create Responsive Admin Dashboard
                                                    using Html CSS
                                                </b-link>
                                            </h5>
                                            <p class="text-success">
                                                https://themesbrand.com/velzon/index.html
                                            </p>
                                            <div class="d-flex flex-column flex-sm-row">
                                                <div class="flex-shrink-0">
                                                    <iframe allowfullscreen
                                                            class="rounded" src="https://www.youtube.com/embed/Z-fV2lGKnnU"
                                                            title="YouTube video"></iframe>
                                                </div>
                                                <div class="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                                                    <p class="text-muted mb-0">
                                                        Velzon admin is super flexible, powerful, clean,
                                                        modern & responsive admin template based on
                                                        <b>bootstrap 5</b> stable with unlimited
                                                        possibilities. You can simply change to any layout
                                                        or mode by changing a couple of lines of code. You
                                                        can start small and large projects or update design
                                                        in your existing project using Velzon it is very
                                                        quick and easy as it is beautiful, adroit, and
                                                        delivers the ultimate user experience.
                                                    </p>
                                                    <div class="border border-dashed mb-1 mt-3"></div>
                                                    <ul class="
                              list-inline
                              d-flex
                              align-items-center
                              g-3
                              text-muted
                              fs-14
                              mb-0
                            ">
                                                        <li class="list-inline-item me-3">
                                                            <i class="ri-thumb-up-line align-middle me-1"></i>485
                                                        </li>
                                                        <li class="list-inline-item me-3">
                                                            <i class="
                                  ri-question-answer-line
                                  align-middle
                                  me-1
                                "></i>167
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <i class="ri-user-line"></i>
                                                                </div>
                                                                <div class="flex-grow-1 fs-13 ms-1">
                                                                    <span class="fw-medium">Themesbrand</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="list-element mt-4">
                                            <h5 class="mb-1">
                                                <b-link href="javascript:void(0);">Velzon - The Most Popular Bootstrap 5
                                                    HTML, Angular &
                                                    React Js Admin
                                                </b-link>
                                            </h5>
                                            <p class="text-success">
                                                https://themesbrand.com/velzon/index.html
                                            </p>
                                            <div class="d-flex flex-column flex-sm-row">
                                                <div class="flex-shrink-0">
                                                    <iframe allowfullscreen
                                                            class="rounded" src="https://www.youtube.com/embed/2RZQN_ko0iU"
                                                            title="YouTube video"></iframe>
                                                </div>
                                                <div class="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                                                    <p class="text-muted mb-0">
                                                        Velzon admin is super flexible, powerful, clean,
                                                        modern & responsive admin template based on
                                                        <b>bootstrap 5</b> stable with unlimited
                                                        possibilities. You can simply change to any layout
                                                        or mode by changing a couple of lines of code. You
                                                        can start small and large projects or update design
                                                        in your existing project using Velzon it is very
                                                        quick and easy as it is beautiful, adroit, and
                                                        delivers the ultimate user experience.
                                                    </p>
                                                    <div class="border border-dashed mb-1 mt-3"></div>
                                                    <ul class="
                              list-inline
                              d-flex
                              align-items-center
                              g-3
                              text-muted
                              fs-14
                              mb-0
                            ">
                                                        <li class="list-inline-item me-3">
                                                            <i class="ri-thumb-up-line align-middle me-1"></i>122
                                                        </li>
                                                        <li class="list-inline-item me-3">
                                                            <i class="
                                  ri-question-answer-line
                                  align-middle
                                  me-1
                                "></i>51
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <i class="ri-user-line"></i>
                                                                </div>
                                                                <div class="flex-grow-1 fs-13 ms-1">
                                                                    <span class="fw-medium">Themesbrand</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="list-element mt-4">
                                            <h5 class="mb-1">
                                                <b-link href="javascript:void(0);">Velzon Admin Dashboard (website
                                                    analytics) with
                                                    Bootstrap 5
                                                </b-link>
                                            </h5>
                                            <p class="text-success">
                                                https://themesbrand.com/velzon/index.html
                                            </p>
                                            <div class="d-flex flex-column flex-sm-row">
                                                <div class="flex-shrink-0">
                                                    <iframe allowfullscreen
                                                            class="rounded" src="https://www.youtube.com/embed/Z-fV2lGKnnU"
                                                            title="YouTube video"></iframe>
                                                </div>
                                                <div class="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                                                    <p class="text-muted mb-0">
                                                        Velzon admin is super flexible, powerful, clean,
                                                        modern & responsive admin template based on
                                                        <b>bootstrap 5</b> stable with unlimited
                                                        possibilities. You can simply change to any layout
                                                        or mode by changing a couple of lines of code. You
                                                        can start small and large projects or update design
                                                        in your existing project using Velzon it is very
                                                        quick and easy as it is beautiful, adroit, and
                                                        delivers the ultimate user experience.
                                                    </p>
                                                    <div class="border border-dashed mb-1 mt-3"></div>
                                                    <ul class="
                              list-inline
                              d-flex
                              align-items-center
                              g-3
                              text-muted
                              fs-14
                              mb-0
                            ">
                                                        <li class="list-inline-item me-3">
                                                            <i class="ri-thumb-up-line align-middle me-1"></i>485
                                                        </li>
                                                        <li class="list-inline-item me-3">
                                                            <i class="
                                  ri-question-answer-line
                                  align-middle
                                  me-1
                                "></i>69
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <i class="ri-user-line"></i>
                                                                </div>
                                                                <div class="flex-grow-1 fs-13 ms-1">
                                                                    <span class="fw-medium">Themesbrand</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="list-element mt-4">
                                            <h5 class="mb-1">
                                                <b-link href="javascript:void(0);">Dashboard Admin Basics - YouTube
                                                </b-link>
                                            </h5>
                                            <p class="text-success">
                                                https://themesbrand.com/velzon/index.html
                                            </p>
                                            <div class="d-flex flex-column flex-sm-row">
                                                <div class="flex-shrink-0">
                                                    <iframe allowfullscreen
                                                            class="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ"
                                                            title="YouTube video"></iframe>
                                                </div>
                                                <div class="flex-grow-1 ms-sm-3 mt-2 mt-sm-0">
                                                    <p class="text-muted mb-0">
                                                        Velzon admin is super flexible, powerful, clean,
                                                        modern & responsive admin template based on
                                                        <b>bootstrap 5</b> stable with unlimited
                                                        possibilities. You can simply change to any layout
                                                        or mode by changing a couple of lines of code. You
                                                        can start small and large projects or update design
                                                        in your existing project using Velzon it is very
                                                        quick and easy as it is beautiful, adroit, and
                                                        delivers the ultimate user experience.
                                                    </p>
                                                    <div class="border border-dashed mb-1 mt-3"></div>
                                                    <ul class="
                              list-inline
                              d-flex
                              align-items-center
                              g-3
                              text-muted
                              fs-14
                              mb-0
                            ">
                                                        <li class="list-inline-item me-3">
                                                            <i class="ri-thumb-up-line align-middle me-1"></i>58
                                                        </li>
                                                        <li class="list-inline-item me-3">
                                                            <i class="
                                  ri-question-answer-line
                                  align-middle
                                  me-1
                                "></i>24
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <div class="d-flex align-items-center">
                                                                <div class="flex-shrink-0">
                                                                    <i class="ri-user-line"></i>
                                                                </div>
                                                                <div class="flex-grow-1 fs-13 ms-1">
                                                                    <span class="fw-medium">Themesbrand</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </b-col>
                                    <div class="text-center">
                                        <b-button id="loadmore" class="text-success mt-2" variant="link">
                                            <i class="mdi mdi-loading mdi-spin fs-20 align-middle me-2"></i>
                                            Load more
                                        </b-button>
                                    </div>
                                </b-row>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
