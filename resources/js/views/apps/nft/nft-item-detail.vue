<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
    data() {
        return {
            title: "Item Details",
            items: [{
                text: "NFT Marketplace",
                href: "/",
            },
                {
                    text: "Item Details",
                    active: true,
                },
            ],
        };
    },
    components: {
        Layout,
        PageHeader,
    },
    methods: {
        startCountDownDate(dateVal) {
            var countDownDate = new Date(dateVal).getTime();
            return countDownDate;
        },
    },
    mounted() {

        var setEndDate1 = "March 19, 2024 6:0:0";
        var cdd1 = this.startCountDownDate(setEndDate1);

        setInterval(function () {
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = cdd1 - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // add 0 at the beginning if days, hours, minutes, seconds values are less than 10
            days = days < 10 ? "0" + days : days;
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            // Output the result in an element with auction-item-x"
            document.querySelector("#" + "auction-time-1") ? document.querySelector("#" + "auction-time-1").textContent =
                days + " : " + hours + " : " + minutes + " : " + seconds : "";

            // If the count down is over, write some text
            if (distance < 0) {
                // clearInterval();
                document.querySelector("#" + "auction-time-1").textContent = "00 : 00 : 00 : 00";
            }
        }, 1000);
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-card no-body>
            <b-card-body>
                <b-row class="g-4">
                    <b-col lg="4">
                        <div class="sticky-side-div">
                            <b-card class="ribbon-box border shadow-none right" no-body>
                                <div class="ribbon-two ribbon-two-danger"><span><i
                                    class="ri-fire-fill align-bottom"></i> Hot</span></div>
                                <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-05.jpg">
                                <div class="position-absolute bottom-0 p-3">
                                    <div class="position-absolute top-0 end-0 start-0 bottom-0 bg-white opacity-25">
                                    </div>
                                    <b-row class="justify-content-center">
                                        <b-col cols="3">
                                            <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-02.jpg">
                                        </b-col>
                                        <b-col cols="3">
                                            <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-03.jpg">
                                        </b-col>
                                        <b-col cols="3">
                                            <img alt="" class="img-fluid rounded h-100 object-cover"
                                                 src="https://img.themesbrand.com/velzon/images/img-3.gif">
                                        </b-col>
                                        <b-col cols="3">
                                            <img alt="" class="img-fluid rounded" src="@/assets/images/nft/img-06.jpg">
                                        </b-col>
                                    </b-row>
                                </div>
                            </b-card>
                            <div class="hstack gap-2">
                                <b-button class="w-100" variant="success">Place Bid</b-button>
                            </div>
                        </div>
                    </b-col>
                    <b-col lg="8">
                        <div>
                            <div class="dropdown float-end">
                                <button aria-expanded="false" class="btn btn-ghost-primary btn-icon dropdown"
                                        data-bs-toggle="dropdown" type="button">
                                    <i class="ri-more-fill align-middle fs-16"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <b-link class="dropdown-item view-item-btn" href="javascript:void(0);"><i
                                            class="ri-eye-fill align-bottom me-2 text-muted"></i>View
                                        </b-link>
                                    </li>
                                    <li>
                                        <b-link class="dropdown-item edit-item-btn" href="#showModal"><i
                                            class="ri-pencil-fill align-bottom me-2 text-muted"></i> Edit
                                        </b-link>
                                    </li>
                                    <li>
                                        <b-link class="dropdown-item remove-item-btn" href="#deleteRecordModal"><i
                                            class="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Delete
                                        </b-link>
                                    </li>
                                </ul>
                            </div>
                            <b-badge class="badge-soft-info mb-3 fs-12" variant="soft-info"><i
                                class="ri-eye-line me-1 align-bottom"></i>
                                8,634 people views this
                            </b-badge>
                            <h4>Patterns arts & culture</h4>
                            <div class="hstack gap-3 flex-wrap">
                                <div class="text-muted">Creators :
                                    <b-link class="text-primary fw-medium" href="#">Nancy
                                        Martino
                                    </b-link>
                                </div>
                                <div class="vr"></div>
                                <div class="text-muted">Seller : <span class="text-body fw-medium">Rickey Teran</span>
                                </div>
                                <div class="vr"></div>
                                <div class="text-muted">Published : <span class="text-body fw-medium">29 April,
                                        2022</span></div>
                            </div>
                            <div class="d-flex flex-wrap gap-2 align-items-center mt-3">
                                <div class="text-muted fs-16">
                                    <span class="mdi mdi-star text-warning"></span>
                                    <span class="mdi mdi-star text-warning"></span>
                                    <span class="mdi mdi-star text-warning"></span>
                                    <span class="mdi mdi-star text-warning"></span>
                                    <span class="mdi mdi-star text-warning"></span>
                                </div>
                                <div class="text-muted">( 5.50k Customer Review )</div>
                            </div>
                            <b-row class="mt-4">
                                <b-col lg="3" sm="6">
                                    <div class="p-2 border border-dashed rounded text-center">
                                        <div>
                                            <p class="text-muted fw-medium mb-1">Price :</p>
                                            <h5 class="fs-17 text-success mb-0"><i class="mdi mdi-ethereum me-1"></i>
                                                83.06 ETH</h5>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col lg="3" sm="6">
                                    <div class="p-2 border border-dashed rounded text-center">
                                        <div>
                                            <p class="text-muted fw-medium mb-1">Highest bid</p>
                                            <h5 class="fs-17 mb-0">104.63 ETH</h5>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col lg="3" sm="6">
                                    <div class="p-2 border border-dashed rounded text-center">
                                        <div>
                                            <p class="text-muted fw-medium mb-1">Stock</p>
                                            <h5 class="fs-17 mb-0">12/58 Sale</h5>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col lg="3" sm="6">
                                    <div class="p-2 border border-dashed rounded text-center">
                                        <div>
                                            <p class="text-muted fw-medium mb-1">Auction Ends:</p>
                                            <h5 id="auction-time-1" class="mb-0"></h5>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                            <div class="mt-4 text-muted">
                                <h5 class="fs-14">Description :</h5>
                                <p>Cultural patterns are the similar behaviors within similar situations we witness due
                                    to shared beliefs, values, norms and social practices that are steady over time. In
                                    art, a pattern is a repetition of specific visual elements. The dictionary.com
                                    definition of "pattern" is: an arrangement of repeated or corresponding parts,
                                    decorative motifs, etc.</p>
                            </div>
                            <div class="product-content mt-5">
                                <h5 class="fs-14 mb-3">Product Description :</h5>
                                <nav>
                                    <ul id="nav-tab" class="nav nav-tabs nav-tabs-custom nav-success" role="tablist">
                                        <li class="nav-item">
                                            <b-link id="nav-speci-tab" aria-controls="nav-speci" aria-selected="true"
                                                    class="nav-link active" data-bs-toggle="tab" href="#nav-speci"
                                                    role="tab">Place Bids
                                            </b-link>
                                        </li>
                                        <li class="nav-item">
                                            <b-link id="nav-additional-tab" aria-controls="nav-additional"
                                                    aria-selected="false"
                                                    class="nav-link" data-bs-toggle="tab" href="#nav-additional"
                                                    role="tab">Additional Information
                                            </b-link>
                                        </li>
                                        <li class="nav-item">
                                            <b-link id="nav-detail-tab" aria-controls="nav-detail" aria-selected="false"
                                                    class="nav-link" data-bs-toggle="tab" href="#nav-detail"
                                                    role="tab">Details
                                            </b-link>
                                        </li>
                                    </ul>
                                </nav>
                                <div id="nav-tabContent" class="tab-content border border-top-0 p-4">
                                    <div id="nav-speci" aria-labelledby="nav-speci-tab"
                                         class="tab-pane fade show active"
                                         role="tabpanel">
                                        <div class="table-responsive">
                                            <table class="table align-middle table-nowrap mb-0">
                                                <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div class="d-flex align-items-center">
                                                            <img alt="" class="avatar-xs rounded object-cover"
                                                                 src="@/assets/images/nft/img-01.jpg"/>
                                                            <b-link class="link-dark" href="/apps/nft-item-detail">
                                                                    <span class="mb-0 ms-2">Brave
                                                                        Tigers NFT</span>
                                                            </b-link>
                                                        </div>
                                                    </th>
                                                    <td>0.235 ETH</td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <img alt="" class="avatar-xs rounded object-cover"
                                                                 src="@/assets/images/users/avatar-1.jpg"/>
                                                            <div class="ms-2">
                                                                <b-link href="#!">
                                                                    <h6 class="mb-1">Alexis Clarke</h6>
                                                                </b-link>
                                                                <p class="text-muted mb-0">Creators</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>29 min ago</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div class="d-flex align-items-center">
                                                            <img alt="" class="avatar-xs rounded object-cover"
                                                                 src="@/assets/images/nft/img-03.jpg"/>
                                                            <b-link class="link-dark" href="/apps/nft-item-detail">
                                                                    <span class="mb-0 ms-2">Creative
                                                                        filtered portrait</span>
                                                            </b-link>
                                                        </div>
                                                    </th>
                                                    <td>571.24 ETH</td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <img alt="" class="avatar-xs rounded object-cover"
                                                                 src="@/assets/images/users/avatar-3.jpg"/>
                                                            <div class="ms-2">
                                                                <b-link href="#!">
                                                                    <h6 class="mb-1">Glen Matney</h6>
                                                                </b-link>
                                                                <p class="text-muted mb-0">Creators</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>37 min ago</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div class="d-flex align-items-center">
                                                            <img
                                                                alt=""
                                                                class="avatar-xs rounded object-cover"
                                                                src="https://img.themesbrand.com/velzon/images/img-4.gif"/>
                                                            <b-link class="link-dark" href="/apps/nft-item-detail">
                                                                    <span class="mb-0 ms-2">Evolved
                                                                        Reality</span>
                                                            </b-link>
                                                        </div>
                                                    </th>
                                                    <td>130.39 ETH</td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <img alt="" class="avatar-xs rounded object-cover"
                                                                 src="@/assets/images/users/avatar-5.jpg"/>
                                                            <div class="ms-2">
                                                                <b-link href="#!">
                                                                    <h6 class="mb-1">Herbert Stokes</h6>
                                                                </b-link>
                                                                <p class="text-muted mb-0">Creators</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>1 hrs ago</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div class="d-flex align-items-center">
                                                            <img alt="" class="avatar-xs rounded object-cover"
                                                                 src="@/assets/images/nft/img-06.jpg"/>
                                                            <b-link class="link-dark" href="/apps/nft-item-detail">
                                                                    <span class="mb-0 ms-2">Robotic
                                                                        Body Art</span>
                                                            </b-link>
                                                        </div>
                                                    </th>
                                                    <td>81.72 ETH</td>
                                                    <td>
                                                        <div class="d-flex align-items-center">
                                                            <img alt="" class="avatar-xs rounded object-cover"
                                                                 src="@/assets/images/users/avatar-8.jpg"/>
                                                            <div class="ms-2">
                                                                <b-link href="#!">
                                                                    <h6 class="mb-1">Michael Morris</h6>
                                                                </b-link>
                                                                <p class="text-muted mb-0">Creators</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>1 hrs ago</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div id="nav-additional" aria-labelledby="nav-additional-tab" class="tab-pane fade"
                                         role="tabpanel">
                                        <div class="table-responsive">
                                            <table class="table mb-0">
                                                <tbody>
                                                <tr>
                                                    <th scope="row" style="width: 200px;">Size</th>
                                                    <td>650 x 650px (66.8 KB)</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Brand</th>
                                                    <td>Patterns arts & culture</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Formats</th>
                                                    <td>JPEG / PNG / PDF</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Token</th>
                                                    <td>VLZ74516523</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Blockchain</th>
                                                    <td>Ethereum</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Contacts</th>
                                                    <td>E545D145S5646544DS541SFDB213C5Z</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div id="nav-detail" aria-labelledby="nav-detail-tab" class="tab-pane fade"
                                         role="tabpanel">
                                        <div>
                                            <h5 class="font-size-16 mb-3">Patterns arts & culture</h5>
                                            <p>Cultural patterns are the similar behaviors within similar situations we
                                                witness due to shared beliefs, values, norms and social practices that
                                                are steady over time. In art, a pattern is a repetition of specific
                                                visual elements. The dictionary.com definition of "pattern" is: an
                                                arrangement of repeated or corresponding parts, decorative motifs, etc.
                                            </p>
                                            <div>
                                                <p class="mb-2"><i
                                                    class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                                                    On digital or printed media</p>
                                                <p class="mb-2"><i
                                                    class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                                                    For commercial and personal projects</p>
                                                <p class="mb-2"><i
                                                    class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                                                    From anywhere in the world</p>
                                                <p class="mb-0"><i
                                                    class="mdi mdi-circle-medium me-1 text-muted align-middle"></i>
                                                    Full copyrights sale</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5">
                                <div>
                                    <h5 class="fs-14 mb-3">Ratings & Reviews</h5>
                                </div>
                                <b-row class="gy-4 gx-0">
                                    <b-col lg="4">
                                        <div>
                                            <div class="pb-3">
                                                <div class="bg-light px-3 py-2 rounded-2 mb-2">
                                                    <div class="d-flex align-items-center">
                                                        <div class="flex-grow-1">
                                                            <div class="fs-16 align-middle text-warning">
                                                                <i class="ri-star-fill"></i>
                                                                <i class="ri-star-fill"></i>
                                                                <i class="ri-star-fill"></i>
                                                                <i class="ri-star-fill"></i>
                                                                <i class="ri-star-half-fill"></i>
                                                            </div>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <h6 class="mb-0">4.8 out of 5</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <div class="text-muted">Total <span class="fw-medium">7.32k</span>
                                                        reviews
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mt-3">
                                                <b-row class="align-items-center g-2">
                                                    <div class="col-auto">
                                                        <div class="p-2">
                                                            <h6 class="mb-0">5 star</h6>
                                                        </div>
                                                    </div>
                                                    <b-col>
                                                        <div class="p-2">
                                                            <b-progress :value="50.16"
                                                                        class="animated-progess progress-sm"
                                                                        variant="success"/>
                                                        </div>
                                                    </b-col>
                                                    <div class="col-auto">
                                                        <div class="p-2">
                                                            <h6 class="mb-0 text-muted">2758</h6>
                                                        </div>
                                                    </div>
                                                </b-row>

                                                <b-row class="align-items-center g-2">
                                                    <div class="col-auto">
                                                        <div class="p-2">
                                                            <h6 class="mb-0">4 star</h6>
                                                        </div>
                                                    </div>
                                                    <b-col>
                                                        <div class="p-2">
                                                            <b-progress :value="19.32"
                                                                        class="animated-progess progress-sm"
                                                                        variant="success"/>
                                                        </div>
                                                    </b-col>
                                                    <div class="col-auto">
                                                        <div class="p-2">
                                                            <h6 class="mb-0 text-muted">1063</h6>
                                                        </div>
                                                    </div>
                                                </b-row>

                                                <b-row class="align-items-center g-2">
                                                    <div class="col-auto">
                                                        <div class="p-2">
                                                            <h6 class="mb-0">3 star</h6>
                                                        </div>
                                                    </div>
                                                    <b-col>
                                                        <div class="p-2">
                                                            <b-progress :value="18.12"
                                                                        class="animated-progess progress-sm"
                                                                        variant="success"/>
                                                        </div>
                                                    </b-col>
                                                    <div class="col-auto">
                                                        <div class="p-2">
                                                            <h6 class="mb-0 text-muted">997</h6>
                                                        </div>
                                                    </div>
                                                </b-row>

                                                <b-row class="align-items-center g-2">
                                                    <div class="col-auto">
                                                        <div class="p-2">
                                                            <h6 class="mb-0">2 star</h6>
                                                        </div>
                                                    </div>
                                                    <b-col>
                                                        <div class="p-2">
                                                            <b-progress :value="7.42"
                                                                        class="animated-progess progress-sm"
                                                                        variant="warning"/>
                                                        </div>
                                                    </b-col>

                                                    <div class="col-auto">
                                                        <div class="p-2">
                                                            <h6 class="mb-0 text-muted">408</h6>
                                                        </div>
                                                    </div>
                                                </b-row>

                                                <b-row class="align-items-center g-2">
                                                    <div class="col-auto">
                                                        <div class="p-2">
                                                            <h6 class="mb-0">1 star</h6>
                                                        </div>
                                                    </div>
                                                    <b-col>
                                                        <div class="p-2">
                                                            <b-progress :value="4.98"
                                                                        class="animated-progess progress-sm"
                                                                        variant="danger"/>
                                                        </div>
                                                    </b-col>
                                                    <div class="col-auto">
                                                        <div class="p-2">
                                                            <h6 class="mb-0 text-muted">274</h6>
                                                        </div>
                                                    </div>
                                                </b-row>
                                            </div>
                                        </div>
                                    </b-col>

                                    <b-col lg="8">
                                        <div class="ps-lg-4">
                                            <div class="d-flex flex-wrap align-items-start gap-3">
                                                <h5 class="fs-14">Reviews: </h5>
                                            </div>

                                            <div class="me-lg-n3 pe-lg-4" data-simplebar style="max-height: 225px;">
                                                <ul class="list-unstyled mb-0">
                                                    <li class="py-2">
                                                        <div class="border border-dashed rounded p-3">
                                                            <div class="d-flex align-items-start mb-3">
                                                                <div class="hstack gap-3">
                                                                    <b-badge class="mb-0" pill tag="div"
                                                                             variant="success">
                                                                        <i class="mdi mdi-star"></i> 4.2
                                                                    </b-badge>
                                                                    <div class="vr"></div>
                                                                    <div class="flex-grow-1">
                                                                        <p class="text-muted mb-0"> Superb sweatshirt. I
                                                                            loved it. It is for winter.</p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="d-flex flex-grow-1 gap-2 mb-3">
                                                                <b-link class="d-block" href="#">
                                                                    <img alt="" class="avatar-sm rounded object-cover"
                                                                         src="@/assets/images/small/img-12.jpg"/>
                                                                </b-link>
                                                                <b-link class="d-block" href="#">
                                                                    <img alt="" class="avatar-sm rounded object-cover"
                                                                         src="@/assets/images/small/img-11.jpg"/>
                                                                </b-link>
                                                                <b-link class="d-block" href="#">
                                                                    <img alt="" class="avatar-sm rounded object-cover"
                                                                         src="@/assets/images/small/img-10.jpg"/>
                                                                </b-link>
                                                            </div>

                                                            <div class="d-flex align-items-end">
                                                                <div class="flex-grow-1">
                                                                    <h5 class="fs-14 mb-0">Henry</h5>
                                                                </div>

                                                                <div class="flex-shrink-0">
                                                                    <p class="text-muted fs-13 mb-0">12 Jul, 21</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="py-2">
                                                        <div class="border border-dashed rounded p-3">
                                                            <div class="d-flex align-items-start mb-3">
                                                                <div class="hstack gap-3">
                                                                    <b-badge class="mb-0" pill tag="div"
                                                                             variant="success">
                                                                        <i class="mdi mdi-star"></i> 4.0
                                                                    </b-badge>
                                                                    <div class="vr"></div>
                                                                    <div class="flex-grow-1">
                                                                        <p class="text-muted mb-0"> Great at this price,
                                                                            Product quality and look is awesome.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex align-items-end">
                                                                <div class="flex-grow-1">
                                                                    <h5 class="fs-14 mb-0">Nancy</h5>
                                                                </div>

                                                                <div class="flex-shrink-0">
                                                                    <p class="text-muted fs-13 mb-0">06 Jul, 21</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="py-2">
                                                        <div class="border border-dashed rounded p-3">
                                                            <div class="d-flex align-items-start mb-3">
                                                                <div class="hstack gap-3">

                                                                    <b-badge class="mb-0" pill tag="div"
                                                                             variant="success">
                                                                        <i class="mdi mdi-star"></i> 4.2
                                                                    </b-badge>
                                                                    <div class="vr"></div>
                                                                    <div class="flex-grow-1">
                                                                        <p class="text-muted mb-0">Good product. I am so
                                                                            happy.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex align-items-end">
                                                                <div class="flex-grow-1">
                                                                    <h5 class="fs-14 mb-0">Joseph</h5>
                                                                </div>

                                                                <div class="flex-shrink-0">
                                                                    <p class="text-muted fs-13 mb-0">06 Jul, 21</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="py-2">
                                                        <div class="border border-dashed rounded p-3">
                                                            <div class="d-flex align-items-start mb-3">
                                                                <div class="hstack gap-3">
                                                                    <b-badge class="mb-0" pill tag="div"
                                                                             variant="success">
                                                                        <i class="mdi mdi-star"></i> 4.1
                                                                    </b-badge>
                                                                    <div class="vr"></div>
                                                                    <div class="flex-grow-1">
                                                                        <p class="text-muted mb-0">Nice Product, Good
                                                                            Quality.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex align-items-end">
                                                                <div class="flex-grow-1">
                                                                    <h5 class="fs-14 mb-0">Jimmy</h5>
                                                                </div>

                                                                <div class="flex-shrink-0">
                                                                    <p class="text-muted fs-13 mb-0">24 Jun, 21</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-card-body>
        </b-card>
    </Layout>
</template>
