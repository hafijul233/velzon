<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
    data() {
        return {
            title: "Marketplace",
            items: [{
                text: "NFT Marketplace",
                href: "/",
            },
                {
                    text: "Marketplace",
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
        <b-row>
            <b-col xl="8">
                <b-row>
                    <b-col lg="4" md="6">
                        <b-card no-body>
                            <b-card-body>
                                <b-row class="g-1 mb-3">
                                    <b-col lg="6">
                                        <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-05.jpg">
                                        <img alt="" class="img-fluid rounded mt-1"
                                             src="https://img.themesbrand.com/velzon/images/img-1.gif">
                                    </b-col>
                                    <b-col lg="6">
                                        <img alt="" class="img-fluid rounded mb-1"
                                             src="https://img.themesbrand.com/velzon/images/img-4.gif">
                                        <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-04.jpg">
                                    </b-col>
                                </b-row>
                                <b-link class="float-end" href="#!"> View All <i
                                    class="ri-arrow-right-line align-bottom"></i></b-link>
                                <h5 class="mb-0 fs-16">
                                    <b-link href="#!">Crypto Card
                                        <b-badge class="badge-soft-success" variant="soft-success">743</b-badge>
                                    </b-link>
                                </h5>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col lg="4" md="6">
                        <b-card no-body>
                            <b-card-body>
                                <b-row class="g-1 mb-3">
                                    <b-col lg="6">
                                        <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-06.jpg">
                                        <img alt="" class="img-fluid rounded mt-1"
                                             src="https://img.themesbrand.com/velzon/images/img-2.gif">
                                    </b-col>
                                    <b-col lg="6">
                                        <img alt="" class="img-fluid rounded mb-1"
                                             src="https://img.themesbrand.com/velzon/images/img-5.gif">
                                        <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-03.jpg">
                                    </b-col>
                                </b-row>
                                <b-link class="float-end" href="#!"> View All <i
                                    class="ri-arrow-right-line align-bottom"></i></b-link>
                                <h5 class="mb-0 fs-16">
                                    <b-link href="#!">Artwork
                                        <b-badge class="badge-soft-success" variant="soft-success">206</b-badge>
                                    </b-link>
                                </h5>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col lg="4" md="6">
                        <b-card no-body>
                            <b-card-body>
                                <b-row class="g-1 mb-3">
                                    <b-col lg="6">
                                        <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-02.jpg">
                                        <img alt="" class="img-fluid rounded mt-1"
                                             src="https://img.themesbrand.com/velzon/images/img-3.gif">
                                    </b-col>
                                    <b-col lg="6">
                                        <img alt="" class="img-fluid rounded mb-1"
                                             src="https://img.themesbrand.com/velzon/images/img-1.gif">
                                        <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-01.jpg">
                                    </b-col>
                                </b-row>
                                <b-link class="float-end" href="#!"> View All <i
                                    class="ri-arrow-right-line align-bottom"></i></b-link>
                                <h5 class="mb-0 fs-16">
                                    <b-link href="#!">Music
                                        <b-badge class="badge-soft-success" variant="soft-success">679</b-badge>
                                    </b-link>
                                </h5>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
            <b-col xl="4">
                <b-alert show variant="danger">
                    Up to <b>50% OFF</b>, Hurry up before the stock ends
                </b-alert>
                <b-card class="bg-primary pattern" no-body>
                    <b-card-body class="p-4">
                        <b-badge class="bg-info fw-medium mb-3 fs-12">Trending Artwork</b-badge>
                        <h3 class="text-white lh-base">Discover, Collect, Sell and Create your own NFT</h3>
                        <p class="text-white-75 mb-3">Take advantage of the first text-based NFT. Select a text or write
                            your own and let it live forever on the Ethereum blockchain you or future owners can add
                            text to an existing ChainText token..</p>
                        <div class="hstack gap-2">
                            <b-link class="btn btn-success" href="/apps/nft-create">Create NFT</b-link>
                            <b-link class="btn btn-danger" href="/apps/nft-explore">Explore Now</b-link>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card class="overflow-hidden shadow-none" no-body>
                    <b-card-body class="bg-soft-success text-success fw-semibold d-flex">
                        <marquee class="fs-14">
                            NFT art is a digital asset that is collectable, unique, and non-transferrable, Cortes
                            explained. Every NFT is unique in it's creative design and cannot be duplicated, making them
                            limited and rare. NFTs get their value because the transaction proves ownership of the art.
                        </marquee>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <div class="d-lg-flex align-items-center mb-4">
                    <div class="flex-grow-1">
                        <h5 class="card-title mb-0 fw-semibold fs-16">Trending Artwork</h5>
                    </div>
                    <div class="flex-shrink-0 mt-4 mt-lg-0">
                        <b-link class="btn btn-soft-primary" href="/apps/nft-explore">View All <i
                            class="ri-arrow-right-line align-bottom"></i></b-link>
                    </div>
                </div>
            </b-col>
        </b-row>

        <b-row class="row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
            <b-col>
                <b-card class="explore-box" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center mb-3">
                            <img alt="" class="avatar-xs rounded-circle" src="@/assets/images/users/avatar-2.jpg"/>
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-0 fs-15">Nancy Martino</h6>
                                <p class="mb-0 text-muted">Owners</p>
                            </div>
                            <div class="bookmark-icon">
                                <button aria-pressed="true" class="btn btn-icon active" data-bs-toggle="button"
                                        type="button"><i class="mdi mdi-cards-heart fs-16"></i></button>
                            </div>
                        </div>
                        <div class="explore-place-bid-img overflow-hidden rounded">
                            <img alt="" class="img-fluid explore-img" src="@/assets/images/nft/img-05.jpg">
                            <div class="bg-overlay"></div>
                            <div class="place-bid-btn">
                                <b-link class="btn btn-success" href="#!"><i
                                    class="ri-auction-fill align-bottom me-1"></i>
                                    Place Bid
                                </b-link>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p class="fw-medium mb-0 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                                19.29k </p>
                            <h5 class="text-success"><i class="mdi mdi-ethereum"></i> 97.8 ETH </h5>
                            <h6 class="fs-16 mb-0">
                                <b-link href="/apps/nft-item-detail">Patterns arts & culture</b-link>
                            </h6>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col>
                <b-card class="explore-box" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center mb-3">
                            <img alt="" class="avatar-xs rounded-circle" src="@/assets/images/users/avatar-9.jpg"/>
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-0 fs-15">Henry Baird</h6>
                                <p class="mb-0 text-muted">Creators</p>
                            </div>
                            <div class="bookmark-icon">
                                <button aria-pressed="true" class="btn btn-icon" data-bs-toggle="button"
                                        type="button"><i class="mdi mdi-cards-heart fs-16"></i></button>
                            </div>
                        </div>
                        <div class="explore-place-bid-img overflow-hidden rounded">
                            <img alt="" class="img-fluid explore-img" src="@/assets/images/nft/img-03.jpg">
                            <div class="bg-overlay"></div>
                            <div class="place-bid-btn">
                                <b-link class="btn btn-success" href="#!"><i
                                    class="ri-auction-fill align-bottom me-1"></i>
                                    Place Bid
                                </b-link>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p class="fw-medium mb-0 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                                31.64k </p>
                            <h5 class="text-success"><i class="mdi mdi-ethereum"></i> 475.23 ETH </h5>
                            <h6 class="fs-16 mb-0">
                                <b-link href="/apps/nft-item-detail">Evolved Reality</b-link>
                            </h6>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col>
                <b-card class="explore-box" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center mb-3">
                            <img alt="" class="avatar-xs rounded-circle" src="@/assets/images/users/avatar-10.jpg"/>
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-0 fs-15">Diana Kohler</h6>
                                <p class="mb-0 text-muted">Owners</p>
                            </div>
                            <div class="bookmark-icon">
                                <button aria-pressed="true" class="btn btn-icon active" data-bs-toggle="button"
                                        type="button"><i class="mdi mdi-cards-heart fs-16"></i></button>
                            </div>
                        </div>
                        <div class="explore-place-bid-img overflow-hidden rounded">
                            <img alt="" class="img-fluid explore-img"
                                 src="https://img.themesbrand.com/velzon/images/img-1.gif">
                            <div class="bg-overlay"></div>
                            <div class="place-bid-btn">
                                <b-link class="btn btn-success" href="#!"><i
                                    class="ri-auction-fill align-bottom me-1"></i>
                                    Place Bid
                                </b-link>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p class="fw-medium mb-0 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                                8.34k </p>
                            <h5 class="text-success"><i class="mdi mdi-ethereum"></i> 701.38 ETH </h5>
                            <h6 class="fs-16 mb-0">
                                <b-link href="/apps/nft-item-detail">Long-tailed macaque</b-link>
                            </h6>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col>
                <b-card class="explore-box" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center mb-3">
                            <img alt="" class="avatar-xs rounded-circle" src="@/assets/images/users/avatar-8.jpg"/>
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-0 fs-15">James Price</h6>
                                <p class="mb-0 text-muted">Owners</p>
                            </div>
                            <div class="bookmark-icon">
                                <button aria-pressed="true" class="btn btn-icon" data-bs-toggle="button"
                                        type="button"><i class="mdi mdi-cards-heart fs-16"></i></button>
                            </div>
                        </div>
                        <div class="explore-place-bid-img overflow-hidden rounded">
                            <img alt="" class="img-fluid explore-img" src="@/assets/images/nft/img-06.jpg">
                            <div class="bg-overlay"></div>
                            <div class="place-bid-btn">
                                <b-link class="btn btn-success" href="#!"><i
                                    class="ri-auction-fill align-bottom me-1"></i>
                                    Place Bid
                                </b-link>
                            </div>
                        </div>
                        <div class="mt-3">
                            <p class="fw-medium mb-0 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                                29.20k </p>
                            <h5 class="text-success"><i class="mdi mdi-ethereum"></i> 917.83 ETH </h5>
                            <h6 class="fs-16 mb-0">
                                <b-link href="/apps/nft-item-detail">Robotic Body Art</b-link>
                            </h6>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col>
                <b-card class="explore-box" no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center mb-3">
                            <img alt="" class="avatar-xs rounded-circle" src="@/assets/images/users/avatar-2.jpg"/>
                            <div class="ms-2 flex-grow-1">
                                <h6 class="mb-0 fs-15">Rickey Teran</h6>
                                <p class="mb-0 text-muted">Creators</p>
                            </div>
                            <div class="bookmark-icon">
                                <button aria-pressed="true" class="btn btn-icon" data-bs-toggle="button"
                                        type="button"><i class="mdi mdi-cards-heart fs-16"></i></button>
                            </div>
                        </div>
                        <div class="explore-place-bid-img overflow-hidden rounded">
                            <img alt="" class="img-fluid explore-img"
                                 src="https://img.themesbrand.com/velzon/images/img-3.gif">
                            <div class="bg-overlay"></div>
                            <div class="place-bid-btn">
                                <b-link class="btn btn-success" href="#!"><i
                                    class="ri-auction-fill align-bottom me-1"></i>
                                    Place Bid
                                </b-link>
                            </div>
                        </div>

                        <div class="mt-3">
                            <p class="fw-medium mb-0 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                                78.34k </p>
                            <h5 class="text-success"><i class="mdi mdi-ethereum"></i> 571.24 ETH </h5>
                            <h6 class="fs-16 mb-0">
                                <b-link href="/apps/nft-item-detail">Creative filtered portrait</b-link>
                            </h6>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <div class="d-lg-flex align-items-center mb-4">
                    <div class="flex-grow-1">
                        <h5 class="card-title mb-0 fw-semibold fs-16">Recent NFTs Artwork</h5>
                    </div>
                    <div class="flex-shrink-0 mt-4 mt-lg-0">
                        <b-link class="btn btn-soft-primary" href="/apps/nft-creators">View All <i
                            class="ri-arrow-right-line align-bottom"></i></b-link>
                    </div>
                </div>
            </b-col>
        </b-row>

        <b-row class="row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
            <b-col>
                <b-card class="explore-box card-animate" no-body>
                    <div class="bookmark-icon position-absolute top-0 end-0 p-2">
                        <button aria-pressed="true" class="btn btn-icon active" data-bs-toggle="button" type="button"><i
                            class="mdi mdi-cards-heart fs-16"></i></button>
                    </div>
                    <div class="explore-place-bid-img">
                        <img alt="" class="card-img-top explore-img" src="@/assets/images/nft/img-02.jpg"/>
                        <div class="bg-overlay"></div>
                        <div class="place-bid-btn">
                            <b-link class="btn btn-success" href="#!"><i class="ri-auction-fill align-bottom me-1"></i>
                                Place
                                Bid
                            </b-link>
                        </div>
                    </div>
                    <b-card-body>
                        <p class="fw-medium mb-0 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                            23.63k </p>
                        <h5 class="mb-1">
                            <b-link href="/apps/nft-item-detail">The Chirstoper</b-link>
                        </h5>
                        <p class="text-muted mb-0">Music</p>
                    </b-card-body>
                    <b-card-footer class="border-top border-top-dashed">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1 fs-14">
                                <i class="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest: <span
                                class="fw-medium">412.30ETH</span>
                            </div>
                            <h5 class="flex-shrink-0 fs-14 text-primary mb-0">394.7 ETH</h5>
                        </div>
                    </b-card-footer>
                </b-card>
            </b-col>
            <b-col>
                <b-card class="explore-box card-animate" no-body>
                    <div class="bookmark-icon position-absolute top-0 end-0 p-2">
                        <button aria-pressed="true" class="btn btn-icon active" data-bs-toggle="button" type="button"><i
                            class="mdi mdi-cards-heart fs-16"></i></button>
                    </div>
                    <div class="explore-place-bid-img">
                        <img alt="" class="card-img-top explore-img"
                             src="https://img.themesbrand.com/velzon/images/img-2.gif"/>
                        <div class="bg-overlay"></div>
                        <div class="place-bid-btn">
                            <b-link class="btn btn-success" href="#!"><i class="ri-auction-fill align-bottom me-1"></i>
                                Place
                                Bid
                            </b-link>
                        </div>
                    </div>
                    <b-card-body>
                        <p class="fw-medium mb-0 float-end"><i class="mdi mdi-heart text-danger align-middle"></i> 94.1k
                        </p>
                        <h5 class="mb-1">
                            <b-link href="/apps/nft-item-detail">Trendy fashion portraits</b-link>
                        </h5>
                        <p class="text-muted mb-0">3d Style</p>
                    </b-card-body>
                    <b-card-footer class="border-top border-top-dashed">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1 fs-14">
                                <i class="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest: <span
                                class="fw-medium">674.92 ETH</span>
                            </div>
                            <h5 class="flex-shrink-0 fs-14 text-primary mb-0">563.81 ETH</h5>
                        </div>
                    </b-card-footer>
                </b-card>
            </b-col>
            <b-col>
                <b-card class="explore-box card-animate" no-body>
                    <div class="bookmark-icon position-absolute top-0 end-0 p-2">
                        <button aria-pressed="true" class="btn btn-icon active" data-bs-toggle="button" type="button"><i
                            class="mdi mdi-cards-heart fs-16"></i></button>
                    </div>
                    <div class="explore-place-bid-img">
                        <img alt="" class="card-img-top explore-img" src="@/assets/images/nft/img-04.jpg"/>
                        <div class="bg-overlay"></div>
                        <div class="place-bid-btn">
                            <b-link class="btn btn-success" href="#!"><i class="ri-auction-fill align-bottom me-1"></i>
                                Place
                                Bid
                            </b-link>
                        </div>
                    </div>
                    <b-card-body>
                        <p class="fw-medium mb-0 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                            34.12k </p>
                        <h5 class="mb-1">
                            <b-link href="/apps/nft-item-detail">Smillevers Crypto</b-link>
                        </h5>
                        <p class="text-muted mb-0">Crypto Card</p>
                    </b-card-body>
                    <b-card-footer class="border-top border-top-dashed">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1 fs-14">
                                <i class="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest: <span
                                class="fw-medium">41.658 ETH</span>
                            </div>
                            <h5 class="flex-shrink-0 fs-14 text-primary mb-0">34.81 ETH</h5>
                        </div>
                    </b-card-footer>
                </b-card>
            </b-col>
            <b-col>
                <b-card class="explore-box card-animate" no-body>
                    <div class="bookmark-icon position-absolute top-0 end-0 p-2">
                        <button aria-pressed="true" class="btn btn-icon active" data-bs-toggle="button" type="button"><i
                            class="mdi mdi-cards-heart fs-16"></i></button>
                    </div>
                    <div class="explore-place-bid-img">
                        <img alt="" class="card-img-top explore-img"
                             src="https://img.themesbrand.com/velzon/images/img-4.gif"/>
                        <div class="bg-overlay"></div>
                        <div class="place-bid-btn">
                            <b-link class="btn btn-success" href="#!"><i class="ri-auction-fill align-bottom me-1"></i>
                                Place
                                Bid
                            </b-link>
                        </div>
                    </div>
                    <b-card-body>
                        <p class="fw-medium mb-0 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                            15.93k </p>
                        <h5 class="mb-1">
                            <b-link href="/apps/nft-item-detail">Evolved Reality</b-link>
                        </h5>
                        <p class="text-muted mb-0">Video</p>
                    </b-card-body>
                    <b-card-footer class="border-top border-top-dashed">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1 fs-14">
                                <i class="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest: <span
                                class="fw-medium">2.75ETH</span>
                            </div>
                            <h5 class="flex-shrink-0 fs-14 text-primary mb-0">3.167 ETH</h5>
                        </div>
                    </b-card-footer>
                </b-card>
            </b-col>
            <b-col>
                <b-card class="explore-box card-animate" no-body>
                    <div class="bookmark-icon position-absolute top-0 end-0 p-2">
                        <button aria-pressed="true" class="btn btn-icon active" data-bs-toggle="button" type="button"><i
                            class="mdi mdi-cards-heart fs-16"></i></button>
                    </div>
                    <div class="explore-place-bid-img">
                        <img alt="" class="card-img-top explore-img" src="@/assets/images/nft/img-01.jpg"/>
                        <div class="bg-overlay"></div>
                        <div class="place-bid-btn">
                            <b-link class="btn btn-success" href="#!"><i class="ri-auction-fill align-bottom me-1"></i>
                                Place
                                Bid
                            </b-link>
                        </div>
                    </div>
                    <b-card-body>
                        <p class="fw-medium mb-0 float-end"><i class="mdi mdi-heart text-danger align-middle"></i>
                            14.85k </p>
                        <h5 class="mb-1">
                            <b-link href="/apps/nft-item-detail">Abstract face painting</b-link>
                        </h5>
                        <p class="text-muted mb-0">Collectibles</p>
                    </b-card-body>
                    <b-card-footer class="border-top border-top-dashed">
                        <div class="d-flex align-items-center">
                            <div class="flex-grow-1 fs-14">
                                <i class="ri-price-tag-3-fill text-warning align-bottom me-1"></i> Highest: <span
                                class="fw-medium">122.34ETH</span>
                            </div>
                            <h5 class="flex-shrink-0 fs-14 text-primary mb-0">97.8 ETH</h5>
                        </div>
                    </b-card-footer>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <div class="d-lg-flex align-items-center mb-4">
                    <div class="flex-grow-1">
                        <h5 class="card-title mb-0 fw-semibold fs-16">Popular Creators</h5>
                    </div>
                    <div class="flex-shrink-0 mt-4 mt-lg-0">
                        <b-link class="btn btn-soft-primary" href="/apps/nft-creators">View All <i
                            class="ri-arrow-right-line align-bottom"></i></b-link>
                    </div>
                </div>
            </b-col>
        </b-row>

        <b-row class="row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1">
            <b-col>
                <b-card no-body>
                    <img alt="" class="card-img-top object-cover" height="120" src="@/assets/images/nft/img-03.jpg">
                    <b-card-body class="text-center">
                        <img alt="" class="avatar-md mt-n5 rounded-circle mx-auto d-block object-cover"
                             src="@/assets/images/users/avatar-1.jpg">
                        <h5 class="mt-3 mb-1">
                            <b-link href="#!">Tonya Noble</b-link>
                        </h5>
                        <p class="text-muted">5048 Products</p>
                        <div>
                            <b-button size="sm" variant="primary">Follow</b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col>
                <b-card no-body>
                    <img alt="" class="card-img-top object-cover"
                         height="120" src="https://img.themesbrand.com/velzon/images/img-5.gif">
                    <b-card-body class="text-center">
                        <img alt="" class="avatar-md mt-n5 rounded-circle mx-auto d-block object-cover"
                             src="@/assets/images/nft/img-04.jpg">
                        <h5 class="mt-3 mb-1">
                            <b-link href="#!">Kevin Dawson</b-link>
                        </h5>
                        <p class="text-muted">649 Products</p>
                        <div>
                            <b-button size="sm" variant="soft-primary">Unfollow</b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col>
                <b-card no-body>
                    <img alt="" class="card-img-top object-cover" height="120" src="@/assets/images/nft/img-01.jpg">
                    <b-card-body class="text-center">
                        <img alt="" class="avatar-md mt-n5 rounded-circle mx-auto d-block object-cover"
                             src="@/assets/images/nft/img-06.jpg">
                        <h5 class="mt-3 mb-1">
                            <b-link href="#!">Herbert Stokes</b-link>
                        </h5>
                        <p class="text-muted">918 Products</p>
                        <div>
                            <b-button size="sm" variant="soft-primary">Unfollow</b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col>
                <b-card no-body>
                    <img alt="" class="card-img-top object-cover" height="120" src="@/assets/images/nft/img-05.jpg">
                    <b-card-body class="text-center">
                        <img alt="" class="avatar-md mt-n5 rounded-circle mx-auto d-block object-cover"
                             src="https://img.themesbrand.com/velzon/images/img-2.gif">
                        <h5 class="mt-3 mb-1">
                            <b-link href="#!">Thomas Taylor</b-link>
                        </h5>
                        <p class="text-muted">345 Products</p>
                        <div>
                            <b-button size="sm" variant="primary">Follow</b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col>
                <b-card no-body>
                    <img alt="" class="card-img-top object-cover" height="120" src="@/assets/images/nft/img-02.jpg">
                    <b-card-body class="text-center">
                        <img alt="" class="avatar-md mt-n5 rounded-circle mx-auto d-block object-cover"
                             src="https://img.themesbrand.com/velzon/images/img-1.gif">
                        <h5 class="mt-3 mb-1">
                            <b-link href="#!">James Price</b-link>
                        </h5>
                        <p class="text-muted">745 Products</p>
                        <div>
                            <b-button size="sm" variant="primary">Follow</b-button>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>

<style scoped>
.pattern {
    background-image: url('../../../assets/images/nft/bg-pattern.png');
}
</style>
