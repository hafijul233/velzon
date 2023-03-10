<script>
import animationData from "@/components/widgets/hzomhqxz.json";
import Lottie from "@/components/widgets/lottie.vue";

export default {
    data() {
        return {
            defaultOptions: {animationData: animationData},
        };
    },
    components: {
        lottie: Lottie
    },
};
</script>

<template>
    <div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="bg-overlay"></div>
        <div class="auth-page-content overflow-hidden pt-lg-5">
            <b-container>
                <b-row>
                    <b-col lg="12">
                        <b-card class="overflow-hidden" no-body>
                            <b-row class="justify-content-center g-0">
                                <b-col lg="6">
                                    <div class="p-lg-5 p-4 auth-one-bg h-100">
                                        <div class="bg-overlay"></div>
                                        <div class="position-relative h-100 d-flex flex-column">
                                            <div class="mb-4">
                                                <router-link class="d-block" to="/">
                                                    <img alt="" height="18" src="@/assets/images/logo-light.png">
                                                </router-link>
                                            </div>
                                            <div class="mt-auto">
                                                <div class="mb-3">
                                                    <i class="ri-double-quotes-l display-4 text-success"></i>
                                                </div>

                                                <div id="qoutescarouselIndicators" class="carousel slide"
                                                     data-bs-ride="carousel">
                                                    <div class="carousel-indicators">
                                                        <button aria-current="true" aria-label="Slide 1"
                                                                class="active" data-bs-slide-to="0"
                                                                data-bs-target="#qoutescarouselIndicators"
                                                                type="button"></button>
                                                        <button aria-label="Slide 2" data-bs-slide-to="1"
                                                                data-bs-target="#qoutescarouselIndicators"
                                                                type="button"></button>
                                                        <button aria-label="Slide 3" data-bs-slide-to="2"
                                                                data-bs-target="#qoutescarouselIndicators"
                                                                type="button"></button>
                                                    </div>
                                                    <div class="carousel-inner text-center text-white-50 pb-5">
                                                        <div class="carousel-item active">
                                                            <p class="fs-15 fst-italic">" Great! Clean code, clean
                                                                design, easy for customization. Thanks very much! "</p>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <p class="fs-15 fst-italic">" The theme is really great with
                                                                an amazing customer support."</p>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <p class="fs-15 fst-italic">" Great! Clean code, clean
                                                                design, easy for customization. Thanks very much! "</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="6">
                                    <div class="p-lg-5 p-4 text-center">
                                        <lottie :height="180" :options="defaultOptions"
                                                :width="180" colors="primary:#405189,secondary:#08a88a"/>

                                        <div class="mt-4 pt-2">
                                            <h5>You are Logged Out</h5>
                                            <p class="text-muted">Thank you for using <span
                                                class="fw-semibold">velzon</span> admin template</p>
                                            <div class="mt-4">
                                                <router-link class="btn btn-success w-100" to="/auth/signin-basic">Sign
                                                    In
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>

                </b-row>
            </b-container>
        </div>

        <footer class="footer">
            <b-container>
                <b-row>
                    <b-col lg="12">
                        <div class="text-center">
                            <p class="mb-0">&copy; {{ new Date().getFullYear() }} Velzon. Crafted with <i
                                class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </footer>
    </div>
</template>
