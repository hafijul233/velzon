<script>
import SwiperCore, {Autoplay, Navigation, Pagination, Thumbs} from "swiper";
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/swiper-bundle.css";
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

SwiperCore.use([Autoplay, Thumbs, Pagination, Navigation]);

export default {
    page: {
        title: "Swiper",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Swiper Slider",
            items: [
                {
                    text: "Advance UI",
                    href: "/",
                },
                {
                    text: "Swiper Slider",
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
            <b-col lg="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Default Swiper</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>default-swiper</code> class to set a default swiper.
                        </p>
                        <swiper :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }" class="default-swiper rounded">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-1.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-2.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-3.jpg"/>
                            </swiper-slide>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Navigation & Pagination Swiper</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>navigation-swiper</code> class to set a swiper with
                            navigation and pagination.
                        </p>
                        <swiper :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }" :loop="true" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :pagination="{
  clickable: true,
  el: '.swiper-pagination',
}" class="navigation-swiper rounded">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-4.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-5.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-6.jpg"/>
                            </swiper-slide>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Pagination Dynamic Swiper</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>pagination-dynamic-swiper</code> class to set a dynamic
                            swiper with pagination.
                        </p>
                        <swiper :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }" :loop="true" :pagination="{
  clickable: true,
  el: '.swiper-pagination',
  dynamicBullets: true,
}" class="pagination-dynamic-swiper rounded">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-7.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-8.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-9.jpg"/>
                            </swiper-slide>
                            <div class="swiper-pagination dynamic-pagination"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Pagination Fraction Swiper</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>pagination-fraction-swiper</code> class to set a
                            fraction swiper with pagination.
                        </p>
                        <swiper :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }" :loop="true" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :pagination="{
  clickable: true,
  el: '.swiper-pagination',
  type: 'fraction',
}" class="pagination-fraction-swiper">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-10.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-11.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-12.jpg"/>
                            </swiper-slide>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Pagination Custom Swiper</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>pagination-custom-swiper</code> class to set a swiper
                            with custom pagination.
                        </p>
                        <swiper :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }" :loop="true" :pagination="{
  clickable: true,
  el: '.swiper-pagination',
  renderBullet: function (index, className) {
    return '<span class=' + className + '>' + (index + 1) + '</span>';
  },
}" class="pagination-custom-swiper rounded">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-2.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-3.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-4.jpg"/>
                            </swiper-slide>
                            <div class="swiper-pagination pagination-custom"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Pagination Progress Swiper</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>pagination-progress-swiper</code> class to set a swiper
                            with progress pagination.
                        </p>
                        <swiper :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }" :loop="true" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :pagination="{
  clickable: true,
  el: '.swiper-pagination',
  type: 'fraction',
}" class="pagination-progress-swiper rounded">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-5.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-6.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-7.jpg"/>
                            </swiper-slide>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-pagination"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Scrollbar Swiper</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>pagination-scrollbar-swiper</code> class to set a swiper
                            with scrollbar pagination.
                        </p>
                        <swiper :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }" :loop="true" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :scrollbar="{
  el: '.swiper-scrollbar',
  hide: true,
}" class="pagination-scrollbar-swiper rounded">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-8.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-9.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-10.jpg"/>
                            </swiper-slide>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                            <div class="swiper-scrollbar"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Vertical Swiper</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>vertical-swiper</code> class to set a vertical swiper.
                        </p>
                        <swiper :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }" :direction="'vertical'" :loop="true" :pagination="{
  el: '.swiper-pagination',
  clickable: true,
}" class="vertical-swiper rounded" style="height: 324px">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-11.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-12.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-1.jpg"/>
                            </swiper-slide>
                            <div class="swiper-pagination"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>


            <b-col lg="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Mousewheel Control Swiper</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>mousewheel-control-swiper</code> class to set a swiper
                            with mousewheel scroll.
                        </p>
                        <swiper :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }" :direction="'vertical'" :loop="true"
                                :mousewheel="true"
                                :pagination="{
  el: '.swiper-pagination',
  clickable: true,
}" class="mousewheel-control-swiper rounded" style="height: 324px">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-3.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-4.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-5.jpg"/>
                            </swiper-slide>
                            <div class="swiper-pagination"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>


            <b-col lg="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Effect Fade Swiper</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>effect-fade-swiper</code> class to set a swiper with
                            fade effect.
                        </p>
                        <swiper :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }" :effect="'fade'" :loop="true" :pagination="{
  el: '.swiper-pagination',
  clickable: true,
}" class="effect-fade-swiper rounded">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-6.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-7.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-8.jpg"/>
                            </swiper-slide>
                            <div class="swiper-pagination"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Effect Creative Swiper</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>effect-creative-swiper</code> class to set a swiper with
                            creative custom effect.
                        </p>
                        <swiper :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :creativeEffect="{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }" :effect="'creative'"
                                :loop="true" :pagination="{
  el: '.swiper-pagination',
  clickable: true,
  dynamicBullets: true,
}" class="effect-creative-swiper rounded">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-9.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-10.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-11.jpg"/>
                            </swiper-slide>
                            <div class="swiper-pagination"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6" xl="4">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Effect Flip Swiper</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>effect-flip-swiper</code> class to set a swiper with
                            flip effect.
                        </p>
                        <swiper :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }" :effect="'flip'" :grabCursor="true" :loop="true"
                                :pagination="{
  el: '.swiper-pagination',
  clickable: true,
}" class="effect-flip-swiper rounded">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-12.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-1.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-2.jpg"/>
                            </swiper-slide>
                            <div class="swiper-pagination"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Effect Coverflow Swiper</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>effect-coverflow-swiper</code> class to set a swiper
                            with coverflow effect.
                        </p>
                        <swiper :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :centeredSlides="true" :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }"
                                :effect="'coverflow'"
                                :grabCursor="true" :loop="true" :pagination="{
  el: '.swiper-pagination',
  clickable: true,
  dynamicBullets: true,
}" :slidesPerView="4" class="effect-coverflow-swiper rounded pb-5">
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-4.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-5.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-6.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-7.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-8.jpg"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img alt class="img-fluid" src="@/assets/images/small/img-9.jpg"/>
                            </swiper-slide>
                            <div class="swiper-pagination swiper-pagination-dark"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>


            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Responsive Breakpoints Swiper</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>responsive-swiper</code> class to set a responsive
                            swiper.
                        </p>
                        <swiper :breakpoints="{
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 50,
  },
}" :loop="true"
                                :pagination="{
                el: '.swiper-pagination',
                clickable: true,
              }"
                                :slidesPerView="1" :spaceBetween="10" class="swiper responsive-swiper rounded gallery-light pb-4">
                            <swiper-slide>
                                <b-card class="gallery-box" no-body>
                                    <div class="gallery-container">
                                        <b-link class="image-popup" href="assets/images/small/img-1.jpg" title>
                                            <img alt
                                                 class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-1.jpg"/>
                                            <div class="gallery-overlay">
                                                <h5 class="overlay-caption">Glasses and laptop from above</h5>
                                            </div>
                                        </b-link>
                                    </div>
                                    <div class="box-content">
                                        <div class="d-flex align-items-center mt-1">
                                            <div class="flex-grow-1 text-muted">
                                                by
                                                <b-link class="text-body text-truncate" href>Ron Mackie</b-link>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="d-flex gap-3">
                                                    <b-button class="fs-12 text-body text-decoration-none px-0" size="sm" type="button"
                                                              variant="link">
                                                        <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                        2.2K
                                                    </b-button>
                                                    <b-button class="fs-12 text-body text-decoration-none px-0" size="sm" type="button"
                                                              variant="link">
                                                        <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                        1.3K
                                                    </b-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-card>
                            </swiper-slide>
                            <swiper-slide>
                                <b-card class="gallery-box" no-body>
                                    <div class="gallery-container">
                                        <b-link class="image-popup" href="assets/images/small/img-2.jpg" title>
                                            <img alt
                                                 class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-2.jpg"/>
                                            <div class="gallery-overlay">
                                                <h5 class="overlay-caption">Working at a coffee shop</h5>
                                            </div>
                                        </b-link>
                                    </div>
                                    <div class="box-content">
                                        <div class="d-flex align-items-center mt-1">
                                            <div class="flex-grow-1 text-muted">
                                                by
                                                <b-link class="text-body text-truncate" href>Nancy Martino</b-link>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="d-flex gap-3">
                                                    <b-button class="fs-12 text-body text-decoration-none px-0" size="sm" type="button"
                                                              variant="link">
                                                        <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                        3.2K
                                                    </b-button>
                                                    <b-button class="fs-12 text-body text-decoration-none px-0" size="sm" type="button"
                                                              variant="link">
                                                        <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                        1.1K
                                                    </b-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-card>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="gallery-box card mb-0">
                                    <div class="gallery-container">
                                        <b-link class="image-popup" href="assets/images/small/img-10.jpg" title>
                                            <img alt
                                                 class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-10.jpg"/>
                                            <div class="gallery-overlay">
                                                <h5 class="overlay-caption">Fun day at the Hill Station</h5>
                                            </div>
                                        </b-link>
                                    </div>
                                    <div class="box-content">
                                        <div class="d-flex align-items-center mt-1">
                                            <div class="flex-grow-1 text-muted">
                                                by
                                                <b-link class="text-body text-truncate" href>Henry Baird</b-link>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="d-flex gap-3">
                                                    <b-button class="fs-12 text-body text-decoration-none px-0" size="sm" type="button"
                                                              variant="link">
                                                        <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                        632
                                                    </b-button>
                                                    <b-button class="fs-12 text-body text-decoration-none px-0" size="sm" type="button"
                                                              variant="link">
                                                        <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                        95
                                                    </b-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <b-card class="gallery-box" no-body>
                                    <div class="gallery-container">
                                        <b-link class="image-popup" href="assets/images/small/img-4.jpg" title>
                                            <img alt
                                                 class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-4.jpg"/>
                                            <div class="gallery-overlay">
                                                <h5 class="overlay-caption">Drawing a sketch</h5>
                                            </div>
                                        </b-link>
                                    </div>
                                    <div class="box-content">
                                        <div class="d-flex align-items-center mt-1">
                                            <div class="flex-grow-1 text-muted">
                                                by
                                                <b-link class="text-body text-truncate" href>Jason McQuaid</b-link>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="d-flex gap-3">
                                                    <b-button class="fs-12 text-body text-decoration-none px-0" size="sm" type="button"
                                                              variant="link">
                                                        <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                        825
                                                    </b-button>
                                                    <b-button class="fs-12 text-body text-decoration-none px-0" size="sm" type="button"
                                                              variant="link">
                                                        <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                        101
                                                    </b-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-card>
                            </swiper-slide>
                            <swiper-slide>
                                <b-card class="gallery-box" no-body>
                                    <div class="gallery-container">
                                        <b-link class="image-popup" href="assets/images/small/img-6.jpg" title>
                                            <img alt
                                                 class="gallery-img img-fluid mx-auto" src="@/assets/images/small/img-6.jpg"/>
                                            <div class="gallery-overlay">
                                                <h5 class="overlay-caption">Project discussion with team</h5>
                                            </div>
                                        </b-link>
                                    </div>
                                    <div class="box-content">
                                        <div class="d-flex align-items-center mt-1">
                                            <div class="flex-grow-1 text-muted">
                                                by
                                                <b-link class="text-body text-truncate" href>Erica Kernan</b-link>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="d-flex gap-3">
                                                    <b-button class="fs-12 text-body text-decoration-none px-0" size="sm" type="button"
                                                              variant="link">
                                                        <i class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                        3.4K
                                                    </b-button>
                                                    <b-button class="fs-12 text-body text-decoration-none px-0" size="sm" type="button"
                                                              variant="link">
                                                        <i class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                        1.3k
                                                    </b-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-card>
                            </swiper-slide>
                            <div class="swiper-pagination swiper-pagination-dark"></div>
                        </swiper>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
