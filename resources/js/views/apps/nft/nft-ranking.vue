<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
    data() {
        return {
            title: "Ranking",
            items: [{
                text: "NFT Marketplace",
                href: "/",
            },
                {
                    text: "Ranking",
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
            <b-col lg="12">
                <b-card id="contactList" no-body>
                    <b-card-header>
                        <div class="d-flex align-items center">
                            <h5 class="mb-0 flex-grow-1">The top NFTs ranking on Velzon</h5>
                            <p class="text-muted mb-0">Updated: 28 April, 2022 08:05:00</p>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <b-row class="justify-content-between g-3">
                            <b-col sm="6" xxl="3">
                                <div class="search-box">
                                    <input class="form-control search" placeholder="Search for ..." type="text">
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </b-col>
                            <b-col sm="4" xxl="2">
                                <div>
                                    <select id="idStatus" class="form-control" data-choices
                                            data-choices-search-false name="choices-single-default">
                                        <option selected value="All Time">All Time</option>
                                        <option value="1 Day">1 Day</option>
                                        <option value="7 Days">7 Days</option>
                                        <option value="15 Days">15 Days</option>
                                        <option value="1 Month">1 Month</option>
                                        <option value="6 Month">6 Month</option>
                                    </select>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-body>
                        <div class="table-responsive table-card">
                            <table id="customerTable" class="table align-middle table-nowrap table-hover">
                                <thead class="table-light text-muted">
                                <tr>
                                    <th class="sort" data-sort="ranking" scope="col" style="width: 98px;">Ranking
                                    </th>
                                    <th class="sort" data-sort="collection" scope="col">Collection</th>
                                    <th class="sort" data-sort="volume_price" scope="col">Volume (USD)</th>
                                    <th class="sort" data-sort="24h" scope="col">24h%</th>
                                    <th class="sort" data-sort="7d" scope="col">7d%</th>
                                    <th class="sort" data-sort="item" scope="col">Item</th>
                                    <th class="sort" data-sort="floor-price" scope="col">Floor Price</th>
                                </tr>
                                </thead>
                                <tbody class="list form-check-all">
                                <tr>
                                    <td class="ranking text-info fw-semibold">
                                        #1
                                    </td>
                                    <td class="collection">
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-xs rounded-circle object-cover me-2"
                                                 src="@/assets/images/nft/img-01.jpg">
                                            <b-link class="link-dark" href="/apps/nft-item-detail">Abstract
                                                face
                                                painting
                                            </b-link>
                                        </div>
                                    </td>
                                    <td class="volume_price">7,50,000</td>
                                    <td>
                                        <h6 class="text-success mb-1 24h">342.35 ETH</h6>
                                    </td>
                                    <td>
                                        <h6 class="text-success mb-1 7d">312.35 ETH</h6>
                                    </td>
                                    <td class="item">10k</td>
                                    <td class="floor-price">33.02</td>
                                </tr>
                                <tr>
                                    <td class="ranking text-info fw-semibold">
                                        #2
                                    </td>
                                    <td class="collection">
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-xs rounded-circle object-cover me-2"
                                                 src="https://img.themesbrand.com/velzon/images/img-1.gif">
                                            <b-link class="link-dark" href="/apps/nft-item-detail">Patterns
                                                arts &
                                                culture
                                            </b-link>
                                        </div>
                                    </td>
                                    <td class="volume_price">32,850</td>
                                    <td>
                                        <h6 class="text-danger mb-1 24h">-42.03 ETH</h6>
                                    </td>
                                    <td>
                                        <h6 class="text-success mb-1 7d">20.14 ETH</h6>
                                    </td>
                                    <td class="item">8k</td>
                                    <td class="floor-price">74.69</td>
                                </tr>
                                <tr>
                                    <td class="ranking text-info fw-semibold">
                                        #3
                                    </td>
                                    <td class="collection">
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-xs rounded-circle object-cover me-2"
                                                 src="@/assets/images/nft/img-02.jpg">
                                            <b-link class="link-dark" href="/apps/nft-item-detail">Creative
                                                filtered portrait
                                            </b-link>
                                        </div>
                                    </td>
                                    <td class="volume_price">1,36,000</td>
                                    <td>
                                        <h6 class="text-success mb-1 24h">170.31 ETH</h6>
                                    </td>
                                    <td>
                                        <h6 class="text-danger mb-1 7d">-415.21 ETH</h6>
                                    </td>
                                    <td class="item">15k</td>
                                    <td class="floor-price">67.16</td>
                                </tr>
                                <tr>
                                    <td class="ranking">
                                        #4
                                    </td>
                                    <td class="collection">
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-xs rounded-circle object-cover me-2"
                                                 src="https://img.themesbrand.com/velzon/images/img-2.gif">
                                            <b-link class="link-dark" href="/apps/nft-item-detail">Long-tailed
                                                macaque
                                            </b-link>
                                        </div>
                                    </td>
                                    <td class="volume_price">3,63,000</td>
                                    <td>
                                        <h6 class="text-success mb-1 24h">709.13 ETH</h6>
                                    </td>
                                    <td>
                                        <h6 class="text-danger mb-1 7d">-645.10 ETH</h6>
                                    </td>
                                    <td class="item">21k</td>
                                    <td class="floor-price">137.09</td>
                                </tr>
                                <tr>
                                    <td class="ranking">
                                        #5
                                    </td>
                                    <td class="collection">
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-xs rounded-circle object-cover me-2"
                                                 src="@/assets/images/nft/img-04.jpg">
                                            <b-link class="link-dark" href="/apps/nft-item-detail">Robotic Body
                                                Art
                                            </b-link>
                                        </div>
                                    </td>
                                    <td class="volume_price">25,800</td>
                                    <td>
                                        <h6 class="text-danger mb-1 24h">-347.42 ETH</h6>
                                    </td>
                                    <td>
                                        <h6 class="text-danger mb-1 7d">-321.17 ETH</h6>
                                    </td>
                                    <td class="item">17k</td>
                                    <td class="floor-price">343.75</td>
                                </tr>
                                <tr>
                                    <td class="ranking">
                                        #6
                                    </td>
                                    <td class="collection">
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-xs rounded-circle object-cover me-2"
                                                 src="@/assets/images/nft/img-06.jpg">
                                            <b-link class="link-dark" href="/apps/nft-item-detail">Smillevers
                                                Crypto
                                            </b-link>
                                        </div>
                                    </td>
                                    <td class="volume_price">37,100</td>
                                    <td>
                                        <h6 class="text-success mb-1 24h">1.42 ETH</h6>
                                    </td>
                                    <td>
                                        <h6 class="text-success mb-1 7d">0.64 ETH</h6>
                                    </td>
                                    <td class="item">31k</td>
                                    <td class="floor-price">1.87</td>
                                </tr>
                                <tr>
                                    <td class="ranking">
                                        #7
                                    </td>
                                    <td class="collection">
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-xs rounded-circle object-cover me-2"
                                                 src="https://img.themesbrand.com/velzon/images/img-5.gif">
                                            <b-link class="link-dark" href="/apps/nft-item-detail">The
                                                Chirstoper
                                            </b-link>
                                        </div>
                                    </td>
                                    <td class="volume_price">1,87,600</td>
                                    <td>
                                        <h6 class="text-danger mb-1 24h">-31.49 ETH</h6>
                                    </td>
                                    <td>
                                        <h6 class="text-success mb-1 7d">26.07 ETH</h6>
                                    </td>
                                    <td class="item">18k</td>
                                    <td class="floor-price">101.12</td>
                                </tr>
                                <tr>
                                    <td class="ranking">
                                        #8
                                    </td>
                                    <td class="collection">
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-xs rounded-circle object-cover me-2"
                                                 src="https://img.themesbrand.com/velzon/images/img-3.gif">
                                            <b-link class="link-dark" href="/apps/nft-item-detail">Walking on
                                                air
                                            </b-link>
                                        </div>
                                    </td>
                                    <td class="volume_price">4,62,000</td>
                                    <td>
                                        <h6 class="text-success mb-1 24h">238.13 ETH</h6>
                                    </td>
                                    <td>
                                        <h6 class="text-success mb-1 7d">183.40 ETH</h6>
                                    </td>
                                    <td class="item">8.3k</td>
                                    <td class="floor-price">143.39</td>
                                </tr>
                                <tr>
                                    <td class="ranking">
                                        #9
                                    </td>
                                    <td class="collection">
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-xs rounded-circle object-cover me-2"
                                                 src="@/assets/images/nft/img-05.jpg">
                                            <b-link class="link-dark" href="/apps/nft-item-detail">The
                                                Chirstoper
                                            </b-link>
                                        </div>
                                    </td>
                                    <td class="volume_price">74,950</td>
                                    <td>
                                        <h6 class="text-danger mb-1 24h">-31.49 ETH</h6>
                                    </td>
                                    <td>
                                        <h6 class="text-danger mb-1 7d">-26.07 ETH</h6>
                                    </td>
                                    <td class="item">7.9k</td>
                                    <td class="floor-price">101.12</td>
                                </tr>
                                <tr>
                                    <td class="ranking">
                                        #10
                                    </td>
                                    <td class="collection">
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-xs rounded-circle object-cover me-2"
                                                 src="@/assets/images/nft/img-03.jpg">
                                            <b-link class="link-dark" href="/apps/nft-item-detail">Walking on
                                                air
                                            </b-link>
                                        </div>
                                    </td>
                                    <td class="volume_price">3,35,750</td>
                                    <td>
                                        <h6 class="text-success mb-1 24h">238.13 ETH</h6>
                                    </td>
                                    <td>
                                        <h6 class="text-danger mb-1 7d">-64.30 ETH</h6>
                                    </td>
                                    <td class="item">8.3k</td>
                                    <td class="floor-price">143.39</td>
                                </tr>
                                <tr>
                                    <td class="ranking">
                                        #11
                                    </td>
                                    <td class="collection">
                                        <div class="d-flex align-items-center">
                                            <img alt="" class="avatar-xs rounded-circle object-cover me-2"
                                                 src="@/assets/images/nft/img-04.jpg">
                                            <b-link class="link-dark" href="/apps/nft-item-detail">Highstreet
                                                IHO
                                                Part
                                            </b-link>
                                        </div>
                                    </td>
                                    <td class="volume_price">35,750</td>
                                    <td>
                                        <h6 class="text-success mb-1 24h">23.10 ETH</h6>
                                    </td>
                                    <td>
                                        <h6 class="text-danger mb-1 7d">-64.36 ETH</h6>
                                    </td>
                                    <td class="item">12.3k</td>
                                    <td class="floor-price">367.39</td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="noresult" style="display: none">
                                <div class="text-center">
                                    <lord-icon colors="primary:#405189,secondary:#0ab39c"
                                               src="https://cdn.lordicon.com/msoeawqm.json"
                                               style="width:75px;height:75px"
                                               trigger="loop">
                                    </lord-icon>
                                    <h5 class="mt-2">Sorry! No Result Found</h5>
                                    <p class="text-muted mb-0">We've searched more than 150+ transactions We did not
                                        find any transactions for you search.</p>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex justify-content-end mt-3">
                            <div class="pagination-wrap hstack gap-2">
                                <b-link class="page-item pagination-prev disabled" href="#">
                                    Previous
                                </b-link>
                                <ul class="pagination listjs-pagination mb-0"></ul>
                                <b-link class="page-item pagination-next" href="#">
                                    Next
                                </b-link>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
