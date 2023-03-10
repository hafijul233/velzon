<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Crypto Icon",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Crypto",
            items: [
                {
                    text: "Icons",
                    href: "/",
                },
                {
                    text: "Crypto",
                    active: true,
                },
            ],
        };
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
                        <h5 class="card-title mb-1">Examples</h5>
                        <p class="text-muted mb-0">Use
                            <code>&lt;img src="@/assets/images/svg/crypto-icons/**.svg"&gt;</code> class.
                        </p>
                    </b-card-header>
                    <b-card-body>
                        <b-row class="icon-demo-content">
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/$pac.svg"/>
                                    $pac
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/0xbtc.svg"/>
                                    0xbtc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/2give.svg"/>
                                    2give
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/aave.svg"/>
                                    aave
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/abt.svg"/>
                                    abt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/act.svg"/>
                                    act
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/actn.svg"/>
                                    actn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ada.svg"/>
                                    ada
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/add.svg"/>
                                    add
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/adx.svg"/>
                                    adx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ae.svg"/>
                                    ae
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/aeon.svg"/>
                                    aeon
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/aeur.svg"/>
                                    aeur
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/agi.svg"/>
                                    agi
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/agrs.svg"/>
                                    agrs
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/aion.svg"/>
                                    aion
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/algo.svg"/>
                                    algo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/amb.svg"/>
                                    amb
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/amp.svg"/>
                                    amp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ampl.svg"/>
                                    ampl
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ankr.svg"/>
                                    ankr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ant.svg"/>
                                    ant
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/apex.svg"/>
                                    apex
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/appc.svg"/>
                                    appc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ardr.svg"/>
                                    ardr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/arg.svg"/>
                                    arg
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ark.svg"/>
                                    ark
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/arn.svg"/>
                                    arn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/arnx.svg"/>
                                    arnx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ary.svg"/>
                                    ary
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ast.svg"/>
                                    ast
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/atm.svg"/>
                                    atm
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/atom.svg"/>
                                    atom
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/audr.svg"/>
                                    audr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/auto.svg"/>
                                    auto
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/aywa.svg"/>
                                    aywa
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bab.svg"/>
                                    bab
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bal.svg"/>
                                    bal
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/band.svg"/>
                                    band
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bat.svg"/>
                                    bat
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bay.svg"/>
                                    bay
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bcbc.svg"/>
                                    bcbc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bcc.svg"/>
                                    bcc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bcd.svg"/>
                                    bcd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bch.svg"/>
                                    bch
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bcio.svg"/>
                                    bcio
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bcn.svg"/>
                                    bcn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bco.svg"/>
                                    bco
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bcpt.svg"/>
                                    bcpt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bdl.svg"/>
                                    bdl
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/beam.svg"/>
                                    beam
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bela.svg"/>
                                    bela
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bix.svg"/>
                                    bix
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/blcn.svg"/>
                                    blcn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/blk.svg"/>
                                    blk
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/block.svg"/>
                                    block
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/blz.svg"/>
                                    blz
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bnb.svg"/>
                                    bnb
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bnt.svg"/>
                                    bnt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bnty.svg"/>
                                    bnty
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/booty.svg"/>
                                    booty
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bos.svg"/>
                                    bos
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bpt.svg"/>
                                    bpt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bq.svg"/>
                                    bq
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/brd.svg"/>
                                    brd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bsd.svg"/>
                                    bsd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bsv.svg"/>
                                    bsv
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/btc.svg"/>
                                    btc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/btcd.svg"/>
                                    btcd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/btch.svg"/>
                                    btch
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/btcp.svg"/>
                                    btcp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/btcz.svg"/>
                                    btcz
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/btdx.svg"/>
                                    btdx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/btg.svg"/>
                                    btg
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/btm.svg"/>
                                    btm
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bts.svg"/>
                                    bts
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/btt.svg"/>
                                    btt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/btx.svg"/>
                                    btx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/burst.svg"/>
                                    burst
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/bze.svg"/>
                                    bze
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/call.svg"/>
                                    call
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cc.svg"/>
                                    cc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cdn.svg"/>
                                    cdn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cdt.svg"/>
                                    cdt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cenz.svg"/>
                                    cenz
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/chain.svg"/>
                                    chain
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/chat.svg"/>
                                    chat
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/chips.svg"/>
                                    chips
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/chsb.svg"/>
                                    chsb
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cix.svg"/>
                                    cix
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/clam.svg"/>
                                    clam
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cloak.svg"/>
                                    cloak
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cmm.svg"/>
                                    cmm
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cmt.svg"/>
                                    cmt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cnd.svg"/>
                                    cnd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cnx.svg"/>
                                    cnx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cny.svg"/>
                                    cny
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cob.svg"/>
                                    cob
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/colx.svg"/>
                                    colx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/comp.svg"/>
                                    comp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/coqui.svg"/>
                                    coqui
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cred.svg"/>
                                    cred
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/crpt.svg"/>
                                    crpt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/crv.svg"/>
                                    crv
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/crw.svg"/>
                                    crw
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cs.svg"/>
                                    cs
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ctr.svg"/>
                                    ctr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ctxc.svg"/>
                                    ctxc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/cvc.svg"/>
                                    cvc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/d.svg"/>
                                    d
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dai.svg"/>
                                    dai
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dash.svg"/>
                                    dash
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dat.svg"/>
                                    dat
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/data.svg"/>
                                    data
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dbc.svg"/>
                                    dbc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dcn.svg"/>
                                    dcn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dcr.svg"/>
                                    dcr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/deez.svg"/>
                                    deez
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dent.svg"/>
                                    dent
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dew.svg"/>
                                    dew
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dgb.svg"/>
                                    dgb
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dgd.svg"/>
                                    dgd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dlt.svg"/>
                                    dlt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dnt.svg"/>
                                    dnt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dock.svg"/>
                                    dock
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/doge.svg"/>
                                    doge
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dot.svg"/>
                                    dot
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/drgn.svg"/>
                                    drgn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/drop.svg"/>
                                    drop
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dta.svg"/>
                                    dta
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dth.svg"/>
                                    dth
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/dtr.svg"/>
                                    dtr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ebst.svg"/>
                                    ebst
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/eca.svg"/>
                                    eca
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/edg.svg"/>
                                    edg
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/edo.svg"/>
                                    edo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/edoge.svg"/>
                                    edoge
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ela.svg"/>
                                    ela
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/elec.svg"/>
                                    elec
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/elf.svg"/>
                                    elf
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/elix.svg"/>
                                    elix
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ella.svg"/>
                                    ella
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/emb.svg"/>
                                    emb
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/emc.svg"/>
                                    emc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/emc2.svg"/>
                                    emc2
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/eng.svg"/>
                                    eng
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/enj.svg"/>
                                    enj
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/entrp.svg"/>
                                    entrp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/eon.svg"/>
                                    eon
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/eop.svg"/>
                                    eop
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/eos.svg"/>
                                    eos
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/eqli.svg"/>
                                    eqli
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/equa.svg"/>
                                    equa
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/etc.svg"/>

                                    etc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/eth.svg"/>

                                    eth
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ethos.svg"/>
                                    ethos
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/etn.svg"/>

                                    etn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/etp.svg"/>

                                    etp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/eur.svg"/>

                                    eur
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/evx.svg"/>

                                    evx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/exmo.svg"/>
                                    exmo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/exp.svg"/>

                                    exp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/fair.svg"/>
                                    fair
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/fct.svg"/>
                                    fct
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/fil.svg"/>
                                    fil
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/fjc.svg"/>
                                    fjc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/fldc.svg"/>
                                    fldc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/flo.svg"/>
                                    flo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/flux.svg"/>
                                    flux
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/fsn.svg"/>
                                    fsn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ftc.svg"/>
                                    ftc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/fuel.svg"/>
                                    fuel
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/fun.svg"/>
                                    fun
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/game.svg"/>
                                    game
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gas.svg"/>
                                    gas
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gbp.svg"/>
                                    gbp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gbx.svg"/>
                                    gbx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gbyte.svg"/>
                                    gbyte
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/generic.svg"/>
                                    generic
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gin.svg"/>
                                    gin
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/glxt.svg"/>
                                    glxt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gmr.svg"/>
                                    gmr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gno.svg"/>
                                    gno
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gnt.svg"/>
                                    gnt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gold.svg"/>
                                    gold
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/grc.svg"/>
                                    grc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/grin.svg"/>
                                    grin
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/grs.svg"/>
                                    grs
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/grt.svg"/>
                                    grt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gsc.svg"/>
                                    gsc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gto.svg"/>
                                    gto
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gup.svg"/>
                                    gup
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gusd.svg"/>
                                    gusd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gvt.svg"/>
                                    gvt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gxs.svg"/>
                                    gxs
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/gzr.svg"/>
                                    gzr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/hight.svg"/>
                                    hight
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/hns.svg"/>
                                    hns
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/hodl.svg"/>
                                    hodl
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/hot.svg"/>
                                    hot
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/hpb.svg"/>
                                    hpb
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/hsr.svg"/>
                                    hsr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ht.svg"/>
                                    ht
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/html.svg"/>
                                    html
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/huc.svg"/>
                                    huc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/husd.svg"/>
                                    husd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/hush.svg"/>
                                    hush
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/icn.svg"/>
                                    icn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/icp.svg"/>
                                    icp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/icx.svg"/>
                                    icx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ignis.svg"/>
                                    ignis
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ilk.svg"/>
                                    ilk
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ink.svg"/>
                                    ink
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ins.svg"/>
                                    ins
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ion.svg"/>
                                    ion
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/iop.svg"/>
                                    iop
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/iop.svg"/>
                                    iop
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/iost.svg"/>
                                    iost
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/iotx.svg"/>
                                    iotx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/iq.svg"/>
                                    iq
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/itc.svg"/>
                                    itc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/jnt.svg"/>
                                    jnt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/jpy.svg"/>
                                    jpy
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/kcs.svg"/>
                                    kcs
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/kin.svg"/>
                                    kin
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/klown.svg"/>
                                    klown
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/kmd.svg"/>
                                    kmd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/knc.svg"/>
                                    knc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/krb.svg"/>
                                    krb
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ksm.svg"/>
                                    ksm
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/lbc.svg"/>
                                    lbc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/lend.svg"/>
                                    lend
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/leo.svg"/>
                                    leo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/link.svg"/>
                                    link
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/lkk.svg"/>
                                    lkk
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/loom.svg"/>
                                    loom
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/lpt.svg"/>
                                    lpt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/lrc.svg"/>
                                    lrc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/lsk.svg"/>
                                    lsk
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ltc.svg"/>
                                    ltc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/lun.svg"/>
                                    lun
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/maid.svg"/>
                                    maid
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mana.svg"/>
                                    mana
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/matic.svg"/>
                                    matic
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/max.svg"/>
                                    max
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mcap.svg"/>
                                    mcap
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mco.svg"/>
                                    mco
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mda.svg"/>
                                    mda
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mds.svg"/>
                                    mds
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/med.svg"/>
                                    med
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/meetone.svg"/>
                                    meetone
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mft.svg"/>
                                    mft
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/miota.svg"/>
                                    miota
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mith.svg"/>
                                    mith
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mkr.svg"/>
                                    mkr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mln.svg"/>
                                    mln
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mnx.svg"/>
                                    mnx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mnz.svg"/>
                                    mnz
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/moac.svg"/>
                                    moac
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mod.svg"/>
                                    mod
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mona.svg"/>
                                    mona
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/msr.svg"/>
                                    msr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mth.svg"/>
                                    mth
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mtl.svg"/>
                                    mtl
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/music.svg"/>
                                    music
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/mzc.svg"/>
                                    mzc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nano.svg"/>
                                    nano
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nas.svg"/>
                                    nas
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nav.svg"/>
                                    nav
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ncash.svg"/>
                                    ncash
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ndz.svg"/> ndz
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nebl.svg"/>
                                    nebl
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/neo.svg"/>
                                    neo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/neos.svg"/>
                                    neos
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/neu.svg"/>
                                    neu
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nexo.svg"/>
                                    nexo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ngc.svg"/>
                                    ngc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nio.svg"/>
                                    nio
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nkn.svg"/>
                                    nkn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nlc2.svg"/>
                                    nlc2
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nlg.svg"/>
                                    nlg
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nmc.svg"/>
                                    nmc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nmr.svg"/>
                                    nmr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/npxs.svg"/>
                                    npxs
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ntbc.svg"/>
                                    ntbc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nuls.svg"/>
                                    nuls
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nxs.svg"/>
                                    nxs
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/nxt.svg"/>
                                    nxt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/oax.svg"/>
                                    oax
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ok.svg"/>
                                    ok
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/omg.svg"/>
                                    omg
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/omni.svg"/>
                                    omni
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/one.svg"/>
                                    one
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ong.svg"/>
                                    ong
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ont.svg"/>
                                    ont
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/oot.svg"/>
                                    oot
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ost.svg"/>
                                    ost
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ox.svg"/>
                                    ox
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/oxt.svg"/>
                                    oxt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/part.svg"/>
                                    part
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/pasc.svg"/>
                                    pasc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/pasl.svg"/>
                                    pasl
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/pax.svg"/>
                                    pax
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/paxg.svg"/>
                                    paxg
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/pay.svg"/>
                                    pay
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/payx.svg"/>
                                    payx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/pink.svg"/>
                                    pink
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/pirl.svg"/>
                                    pirl
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/pivx.svg"/>
                                    pivx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/plr.svg"/>
                                    plr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/poa.svg"/>
                                    poa
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/poe.svg"/>
                                    poe
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/polis.svg"/>
                                    polis
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/poly.svg"/>
                                    poly
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/pot.svg"/>
                                    pot
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/powr.svg"/>
                                    powr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ppc.svg"/>
                                    ppc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ppp.svg"/>
                                    ppp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ppt.svg"/>
                                    ppt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/pre.svg"/>
                                    pre
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/prl.svg"/>
                                    prl
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/pungo.svg"/>
                                    pungo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/pura.svg"/>
                                    pura
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/qash.svg"/>
                                    qash
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/qiwi.svg"/>
                                    qiwi
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/qlc.svg"/>
                                    qlc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/qrl.svg"/>
                                    qrl
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/qsp.svg"/>
                                    qsp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/qtum.svg"/>
                                    qtum
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/r.svg"/> r
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/rads.svg"/>
                                    rads
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/rap.svg"/>
                                    rap
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/rcn.svg"/>
                                    rcn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/rdd.svg"/>
                                    rdd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/rdn.svg"/>
                                    rdn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ren.svg"/>
                                    ren
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/rep.svg"/>
                                    rep
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/repv2.svg"/>
                                    repv2
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/req.svg"/>
                                    req
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/rhoc.svg"/>
                                    rhoc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ric.svg"/>
                                    ric
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/rise.svg"/>
                                    rise
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/rlc.svg"/>
                                    rlc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/rpx.svg"/>
                                    rpx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/rub.svg"/>
                                    rub
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/rvn.svg"/>
                                    rvn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ryo.svg"/>
                                    ryo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/safe.svg"/>
                                    safe
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs"
                                         src="@/assets/images/svg/crypto-icons/safemoon.svg"/>
                                    safemoon
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sai.svg"/>
                                    sai
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/salt.svg"/>
                                    salt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/san.svg"/>
                                    san
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sand.svg"/>
                                    sand
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sbd.svg"/>
                                    sbd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs"
                                         src="@/assets/images/svg/crypto-icons/sberbank.svg"/>
                                    sberbank
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sc.svg"/>
                                    sc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/shift.svg"/>
                                    shift
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sib.svg"/>
                                    sib
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sin.svg"/>
                                    sin
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/skl.svg"/>
                                    skl
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sky.svg"/>
                                    sky
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/slr.svg"/>
                                    slr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sls.svg"/>
                                    sls
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/smart.svg"/>
                                    smart
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sngls.svg"/>
                                    sngls
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/snm.svg"/>
                                    snm
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/snt.svg"/>
                                    snt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/snx.svg"/>
                                    snx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/soc.svg"/>
                                    soc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sol.svg"/>
                                    sol
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs"
                                         src="@/assets/images/svg/crypto-icons/spacehbit.svg"/>
                                    spacehbit
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/spank.svg"/>
                                    spank
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sphtx.svg"/>
                                    sphtx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/srn.svg"/>
                                    srn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/stak.svg"/>
                                    stak
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/start.svg"/>
                                    start
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/steem.svg"/>
                                    steem
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/storj.svg"/>
                                    storj
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/storm.svg"/>
                                    storm
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/stox.svg"/>
                                    stox
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/stq.svg"/>
                                    stq
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/strat.svg"/>
                                    strat
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/stx.svg"/>
                                    stx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sub.svg"/>
                                    sub
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sumo.svg"/>
                                    sumo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sushi.svg"/>
                                    sushi
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/sys.svg"/>
                                    sys
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/taas.svg"/>
                                    taas
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tau.svg"/>
                                    tau
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tbx.svg"/>
                                    tbx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tel.svg"/>
                                    tel
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ten.svg"/>
                                    ten
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tern.svg"/>
                                    tern
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tgch.svg"/>
                                    tgch
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/theta.svg"/>
                                    theta
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tix.svg"/>
                                    tix
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tkn.svg"/>
                                    tkn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tks.svg"/>
                                    tks
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tnb.svg"/>
                                    tnb
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tnc.svg"/>
                                    tnc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tnt.svg"/>
                                    tnt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tomo.svg"/>
                                    tomo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tpay.svg"/>
                                    tpay
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/trig.svg"/>
                                    trig
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/trtl.svg"/>
                                    trtl
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/trx.svg"/>
                                    trx
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tusd.svg"/>
                                    tusd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/tzc.svg"/>
                                    tzc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/ubq.svg"/>
                                    ubq
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/uma.svg"/>
                                    uma
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/uni.svg"/>
                                    uni
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/unity.svg"/>
                                    unity
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/usd.svg"/>
                                    usd
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/usdc.svg"/>
                                    usdc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/usdt.svg"/>
                                    usdt
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/utk.svg"/>
                                    utk
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/veri.svg"/>
                                    veri
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/vet.svg"/>
                                    vet
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/via.svg"/>
                                    via
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/vib.svg"/>
                                    vib
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/vibe.svg"/>
                                    vibe
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/vivo.svg"/>
                                    vivo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/vrc.svg"/>
                                    vrc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/vrsc.svg"/>
                                    vrsc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/vtc.svg"/>
                                    vtc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/vtho.svg"/>
                                    vtho
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/wabi.svg"/>
                                    wabi
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/wan.svg"/>
                                    wan
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/waves.svg"/>
                                    waves
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/wax.svg"/>
                                    wax
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/wbtc.svg"/>
                                    wbtc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/wgr.svg"/>
                                    wgr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/wicc.svg"/>
                                    wicc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/wings.svg"/>
                                    wings
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/wpr.svg"/>
                                    wpr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/wtc.svg"/>
                                    wtc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/x.svg"/>
                                    x
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xas.svg"/>
                                    xas
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xbc.svg"/>
                                    xbc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xbp.svg"/>
                                    xbp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xby.svg"/>
                                    xby
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xcp.svg"/>
                                    xcp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xdn.svg"/>
                                    xdn
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xem.svg"/>
                                    xem
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xin.svg"/>
                                    xin
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xlm.svg"/>
                                    xlm
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xmcc.svg"/>
                                    xmcc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xmg.svg"/>
                                    xmg
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xmo.svg"/>
                                    xmo
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xmr.svg"/>
                                    xmr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xmy.svg"/>
                                    xmy
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xp.svg"/>
                                    xp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xpa.svg"/>
                                    xpa
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xpm.svg"/>
                                    xpm
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xpr.svg"/>
                                    xpr
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xrp.svg"/>
                                    xrp
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xsg.svg"/>
                                    xsg
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xtz.svg"/>
                                    xtz
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xuc.svg"/>
                                    xuc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xvc.svg"/>
                                    xvc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xvg.svg"/>
                                    xvg
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/xzc.svg"/>
                                    xzc
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/yfi.svg"/>
                                    yfi
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/yoyow.svg"/>
                                    yoyow
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/zcl.svg"/>
                                    zcl
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/zec.svg"/>
                                    zec
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/zel.svg"/>
                                    zel
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/zen.svg"/>
                                    zen
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/zest.svg"/>
                                    zest
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/zil.svg"/>
                                    zil
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/zilla.svg"/>
                                    zilla
                                </div>
                            </b-col>
                            <b-col lg="4" sm="6" xl="3">
                                <div class="text-muted hstack gap-2">
                                    <img alt="" class="avatar-xxs" src="@/assets/images/svg/crypto-icons/zrx.svg"/>
                                    zrx
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
