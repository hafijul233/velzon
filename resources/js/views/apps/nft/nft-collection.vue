<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
    data() {
        return {
            title: "Collections",
            items: [{
                text: "NFT Marketplace",
                href: "/",
            },
                {
                    text: "Collections",
                    active: true,
                },
            ],
        };
    },
    components: {
        Layout,
        PageHeader,
    },
    methods: {},
    mounted() {
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row class="g-4 mb-3 align-items-center">
            <b-col sm="auto">
                <div>
                    <h5 class="mb-0">Top Collections</h5>
                </div>
            </b-col>
            <b-col sm>
                <div class="d-flex justify-content-sm-end gap-2">
                    <div class="search-box ms-2">
                        <input class="form-control" placeholder="Search..." type="text">
                        <i class="ri-search-line search-icon"></i>
                    </div>
                    <div class="w-md">
                        <select class="form-control w-md" data-choices data-choices-search-false>
                            <option value="All">All</option>
                            <option selected value="Today">Today</option>
                            <option value="Yesterday">Yesterday</option>
                            <option value="Last 7 Days">Last 7 Days</option>
                            <option value="Last 30 Days">Last 30 Days</option>
                            <option value="This Month">This Month</option>
                            <option value="Last Year">Last Year</option>
                        </select>
                    </div>
                </div>
            </b-col>
        </b-row>

        <b-row>
            <b-col md="4" sm="6" xl="3">
                <b-card no-body>
                    <b-card-body>
                        <b-row class="g-1 mb-3">
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-06.jpg">
                                <img alt="" class="img-fluid rounded mt-1"
                                     src="https://img.themesbrand.com/velzon/images/img-2.gif">
                            </b-col>
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded mb-1"
                                     src="https://img.themesbrand.com/velzon/images/img-5.gif">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-03.jpg">
                            </b-col>
                        </b-row>
                        <b-link class="float-end" href="#!"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </b-link>
                        <h5 class="mb-0 fs-16">
                            <b-link href="#!">Artwork
                                <b-badge class="badge-soft-success" variant="soft-success">206</b-badge>
                            </b-link>
                        </h5>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="4" sm="6" xl="3">
                <b-card no-body>
                    <b-card-body>
                        <b-row class="g-1 mb-3">
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-05.jpg">
                                <img alt="" class="img-fluid rounded mt-1"
                                     src="https://img.themesbrand.com/velzon/images/img-1.gif">
                            </b-col>
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded mb-1"
                                     src="https://img.themesbrand.com/velzon/images/img-4.gif">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-04.jpg">
                            </b-col>
                        </b-row>
                        <b-link class="float-end" href="#!"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </b-link>
                        <h5 class="mb-0 fs-16">
                            <b-link href="#!">Crypto Card
                                <b-badge class="badge-soft-success" variant="soft-success">743</b-badge>
                            </b-link>
                        </h5>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="4" sm="6" xl="3">
                <b-card no-body>
                    <b-card-body>
                        <b-row class="g-1 mb-3">
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-02.jpg">
                                <img alt="" class="img-fluid rounded mt-1"
                                     src="https://img.themesbrand.com/velzon/images/img-3.gif">
                            </b-col>
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded mb-1"
                                     src="https://img.themesbrand.com/velzon/images/img-1.gif">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-01.jpg">
                            </b-col>
                        </b-row>
                        <b-link class="float-end" href="#!"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </b-link>
                        <h5 class="mb-0 fs-16">
                            <b-link href="#!">Music
                                <b-badge class="badge-soft-success" variant="soft-success">679</b-badge>
                            </b-link>
                        </h5>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="4" sm="6" xl="3">
                <b-card no-body>
                    <b-card-body>
                        <b-row class="g-1 mb-3">
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-03.jpg">
                                <img alt="" class="img-fluid rounded mt-1"
                                     src="https://img.themesbrand.com/velzon/images/img-5.gif">
                            </b-col>
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded mb-1"
                                     src="https://img.themesbrand.com/velzon/images/img-2.gif">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-05.jpg">
                            </b-col>
                        </b-row>
                        <b-link class="float-end" href="#!"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </b-link>
                        <h5 class="mb-0 fs-16">
                            <b-link href="#!">Games
                                <b-badge class="badge-soft-success" variant="soft-success">341</b-badge>
                            </b-link>
                        </h5>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="4" sm="6" xl="3">
                <b-card no-body>
                    <b-card-body>
                        <b-row class="g-1 mb-3">
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-02.jpg">
                                <img alt="" class="img-fluid rounded mt-1"
                                     src="https://img.themesbrand.com/velzon/images/img-3.gif">
                            </b-col>
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded mb-1"
                                     src="https://img.themesbrand.com/velzon/images/img-1.gif">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-01.jpg">
                            </b-col>
                        </b-row>
                        <b-link class="float-end" href="#!"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </b-link>
                        <h5 class="mb-0 fs-16">
                            <b-link href="#!">Photography
                                <b-badge class="badge-soft-success" variant="soft-success">1452</b-badge>
                            </b-link>
                        </h5>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="4" sm="6" xl="3">
                <b-card no-body>
                    <b-card-body>
                        <b-row class="g-1 mb-3">
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-05.jpg">
                                <img alt="" class="img-fluid rounded mt-1"
                                     src="https://img.themesbrand.com/velzon/images/img-1.gif">
                            </b-col>
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded mb-1"
                                     src="https://img.themesbrand.com/velzon/images/img-4.gif">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-04.jpg">
                            </b-col>
                        </b-row>
                        <b-link class="float-end" href="#!"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </b-link>
                        <h5 class="mb-0 fs-16">
                            <b-link href="#!">3d Style
                                <b-badge class="badge-soft-success" variant="soft-success">4781</b-badge>
                            </b-link>
                        </h5>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="4" sm="6" xl="3">
                <b-card no-body>
                    <b-card-body>
                        <b-row class="g-1 mb-3">
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-06.jpg">
                                <img alt="" class="img-fluid rounded mt-1"
                                     src="https://img.themesbrand.com/velzon/images/img-2.gif">
                            </b-col>
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded mb-1"
                                     src="https://img.themesbrand.com/velzon/images/img-5.gif">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-03.jpg">
                            </b-col>
                        </b-row>
                        <b-link class="float-end" href="#!"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </b-link>
                        <h5 class="mb-0 fs-16">
                            <b-link href="#!">Collectibles
                                <b-badge class="badge-soft-success" variant="soft-success">3468</b-badge>
                            </b-link>
                        </h5>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col md="4" sm="6" xl="3">
                <b-card no-body>
                    <b-card-body>
                        <b-row class="g-1 mb-3">
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-03.jpg">
                                <img alt="" class="img-fluid rounded mt-1"
                                     src="https://img.themesbrand.com/velzon/images/img-5.gif">
                            </b-col>
                            <b-col cols="6">
                                <img alt="" class="img-fluid rounded mb-1"
                                     src="https://img.themesbrand.com/velzon/images/img-2.gif">
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-05.jpg">
                            </b-col>
                        </b-row>
                        <b-link class="float-end" href="#!"> View All <i class="ri-arrow-right-line align-bottom"></i>
                        </b-link>
                        <h5 class="mb-0 fs-16">
                            <b-link href="#!">Videos
                                <b-badge class="badge-soft-success" variant="soft-success">1674</b-badge>
                            </b-link>
                        </h5>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row class="g-0 text-center text-sm-start align-items-center mb-4">
            <b-col sm="6">
                <div>
                    <p class="mb-sm-0 text-muted">Showing <span class="fw-semibold">1</span> to <span
                        class="fw-semibold">8</span> of <span
                        class="fw-semibold text-decoration-underline">12</span> entries</p>
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
                    <li class="page-item ">
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
    </Layout>
</template>
