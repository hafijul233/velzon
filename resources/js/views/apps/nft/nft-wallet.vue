<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";

export default {
    data() {
        return {
            title: "Wallet connect",
            items: [{
                text: "NFT Marketplace",
                href: "/",
            },
                {
                    text: "Wallet connect",
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
        <b-row class="justify-content-center">
            <b-col xl="5">
                <div class="text-center mb-4">
                    <h4>Your current wallet</h4>
                    <p class="text-muted fs-13">WalletConnect is a convenient open source tool that enables a mobile
                        wallet to easily connect to decentralized web applications, and interact with them from your
                        phone.</p>
                </div>
            </b-col>
        </b-row>

        <b-row class="justify-content-center mb-4">
            <b-col lg="3">
                <b-card class="text-center" no-body>
                    <b-card-body class="py-5 px-4">
                        <img alt="" class="mb-3 pb-2" height="55" src="@/assets/images/nft/wallet/metamask.png">
                        <h5>Metamask</h5>
                        <p class="text-muted pb-1">MetaMask is a software cryptocurrency wallet used to interact with
                            the Ethereum blockchain.</p>
                        <b-link class="btn btn-danger" href="#!">Change Wallet</b-link>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row class="justify-content-center">
            <b-col xl="5">
                <div class="text-center mb-4">
                    <h4>Connect with one of our other available wallet providers.</h4>
                </div>
            </b-col>
        </b-row>

        <b-row class="justify-content-center">
            <b-col lg="3">
                <b-card class="text-center" no-body>
                    <b-card-body class="py-5 px-4">
                        <img alt="" class="mb-3 pb-2" height="55" src="@/assets/images/nft/wallet/metamask.png">
                        <h5>Metamask</h5>
                        <p class="text-muted pb-1">MetaMask is a software cryptocurrency wallet used to interact with
                            the Ethereum blockchain.</p>
                        <b-link class="btn btn-soft-info" href="#!">Connect Wallet</b-link>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="3">
                <b-card class="text-center" no-body>
                    <b-card-body class="py-5 px-4">
                        <img alt="" class="mb-3 pb-2" height="55" src="@/assets/images/nft/wallet/coinbase.png">
                        <h5>Coinbase Wallet</h5>
                        <p class="text-muted pb-1">Coinbase Wallet is a software product that gives you access to a wide
                            spectrum.</p>
                        <b-link class="btn btn-soft-info" href="#!">Connect Wallet</b-link>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="3">
                <b-card class="text-center" no-body>
                    <b-card-body class="py-5 px-4">
                        <img alt="" class="mb-3 pb-2" height="55" src="@/assets/images/nft/wallet/kukai.png">
                        <h5>Kukai wallet</h5>
                        <p class="text-muted pb-1">Kukai is a seamless browser-based wallet that allows users to store,
                            transfer, and delegate.</p>
                        <b-link class="btn btn-soft-info" href="#!">Connect Wallet</b-link>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="3">
                <b-card class="text-center" no-body>
                    <b-card-body class="py-5 px-4">
                        <img alt="" class="mb-3 pb-2" height="55" src="@/assets/images/nft/wallet/binance.png">
                        <h5>Binance</h5>
                        <p class="text-muted pb-1">Binance offers a relatively secure, versatile way to invest in and
                            trade cryptocurrencies.</p>
                        <b-link class="btn btn-soft-info" href="#!">Connect Wallet</b-link>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="3">
                <b-card class="text-center" no-body>
                    <b-card-body class="py-5 px-4">
                        <img alt="" class="mb-3 pb-2" height="55" src="@/assets/images/nft/wallet/enjin.png">
                        <h5>Enjin Wallet</h5>
                        <p class="text-muted pb-1">Enjin is a store of value that can be used in the non-fungible token
                            (NFT) marketplace.</p>
                        <b-link class="btn btn-soft-info" href="#!">Connect Wallet</b-link>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="3">
                <b-card class="text-center" no-body>
                    <b-card-body class="py-5 px-4">
                        <img alt="" class="mb-3 pb-2" height="55" src="@/assets/images/nft/wallet/alpha.png">
                        <h5>Alpha Wallet</h5>
                        <p class="text-muted pb-1">AlphaWallet uses the TokenScript framework, which makes tokens become
                            “smart”.</p>
                        <b-link class="btn btn-soft-info" href="#!">Connect Wallet</b-link>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col lg="3">
                <b-card class="text-center" no-body>
                    <b-card-body class="py-5 px-4">
                        <img alt="" class="mb-3 pb-2" height="55" src="@/assets/images/nft/wallet/math.png">
                        <h5>Math Wallet</h5>
                        <p class="text-muted pb-1">Math DApp Factory gives users tools that can simplify the development
                            of exchanges, games</p>
                        <b-link class="btn btn-soft-info" href="#!">Connect Wallet</b-link>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

    </Layout>
</template>
