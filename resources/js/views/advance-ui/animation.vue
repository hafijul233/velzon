<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";
import 'aos/dist/aos.css';
import AOS from "aos";

import "prismjs";
import "prismjs/themes/prism.css";

export default {
    page: {
        title: "Animation",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Animation",
            items: [
                {
                    text: "Advance UI",
                    href: "/",
                },
                {
                    text: "Animation",
                    active: true,
                },
            ],
        };
    },
    mounted() {
        setTimeout(() => {
            AOS.init({easing: "ease-out-back", duration: 1e3});
        }, 200);
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
                    <b-card-header>
                        <div class="text-center">
                            <b-card-title class="mb-0">Fade Animation</b-card-title>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <div class="live-preview">
                            <div>
                                <b-row>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Fade Up</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="fade-up">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col lg="8" sm="10">
                                                    <div data-aos="fade-up">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Fade Down</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="fade-down">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col lg="8" sm="10">
                                                    <div data-aos="fade-down">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Fade Right</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="fade-right">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="fade-right">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Fade Left</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="fade-left">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="fade-left">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Fade Up Right</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="fade-up-right">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="fade-up-right">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Fade Up Left</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="fade-up-left">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="fade-up-left">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Fade Down Right</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="fade-down-right">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="fade-down-right">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Fade Down Left</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="fade-down-left">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="fade-down-left">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <div class="text-center">
                            <b-card-title class="mb-0">Flip Animation</b-card-title>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <div class="live-preview">
                            <div>
                                <b-row>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Flip Left</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="flip-left">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="flip-left">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Flip Right</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="flip-right">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="flip-right">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Flip Up</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="flip-up">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="flip-up">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Flip Down</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="flip-down">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="flip-down">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <div class="text-center">
                            <b-card-title class="mb-0">Zoom Animation</b-card-title>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <div class="live-preview">
                            <div>
                                <b-row>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Zoom In</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="zoom-in">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="zoom-in">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>

                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Zoom In Up</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="zoom-in-up">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="zoom-in-up">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>

                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Zoom In Down</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="zoom-in-down">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="zoom-in-down">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>

                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Zoom In Right</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="zoom-in-right">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="zoom-in-right">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>

                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Zoom In Left</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="zoom-in-left">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="zoom-in-left">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Zoom Out</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="zoom-in">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="zoom-out">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>

                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Zoom Out Up</h4>
                                            <pre><code
                                                class="language-markup">&lt;div data-aos="zoom-out-up">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="zoom-out-up">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>

                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Zoom Out Down</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="zoom-out-down">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="zoom-out-down">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>

                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Zoom Out Right</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="zoom-out-right">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="zoom-out-right">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>

                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Zoom Out Left</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="zoom-out-left">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="zoom-out-left">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <div class="text-center">
                            <b-card-title class="mb-0">Animation Examples</b-card-title>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <div class="live-preview">
                            <div>
                                <b-row>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Duration</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="fade-up" data-aos-duration="3000">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="fade-up" data-aos-duration="3000">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Easing="linear"</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="fade-down" data-aos-duration="1500"
                                                         data-aos-easing="linear">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Offset</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="fade-right" data-aos-easing="ease-in-sine"
                                                         data-aos-offset="300">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Offset</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="fade-left" data-aos-offset="500" data-aos-duration="500">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="fade-left" data-aos-duration="500"
                                                         data-aos-offset="500">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>

                                <b-row>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Easing="ease-in-back"</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="fade-zoom-in" data-aos-delay="300"
                                                         data-aos-easing="ease-in-back"
                                                         data-aos-offset="0">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="p-4 pb-0 border mt-4">
                                            <h4 class="mb-4 text-center">Easing="ease-out-cubic"</h4>
                                            <pre><code class="language-markup">&lt;div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">&lt;/div></code></pre>

                                            <b-row class="justify-content-center">
                                                <b-col md="8" sm="10">
                                                    <div data-aos="flip-left" data-aos-duration="2000"
                                                         data-aos-easing="ease-out-cubic">
                                                        <img alt="Mac Image" class="img-fluid"
                                                             src="@/assets/images/mac-img.png"/>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
