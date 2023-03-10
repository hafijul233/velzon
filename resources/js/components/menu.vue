<script>
import {layoutComputed} from "@/state/helpers";
import {SimpleBar} from "simplebar-vue3";

export default {
    components: {
        SimpleBar
    },
    data() {
        return {
            settings: {
                minScrollbarLength: 60,
            },
        };
    },
    computed: {
        ...layoutComputed,
        layoutType: {
            get() {
                return this.$store ? this.$store.state.layout.layoutType : {} || {};
            },
        },
    },

    watch: {
        $route: {
            handler: "onRoutechange",
            immediate: true,
            deep: true,
        },
    },

    mounted() {
        if (document.querySelectorAll(".navbar-nav .collapse")) {
            let collapses = document.querySelectorAll(".navbar-nav .collapse");

            collapses.forEach((collapse) => {
                // Hide sibling collapses on `show.bs.collapse`
                collapse.addEventListener("show.bs.collapse", (e) => {
                    e.stopPropagation();
                    let closestCollapse = collapse.parentElement.closest(".collapse");
                    if (closestCollapse) {
                        let siblingCollapses =
                            closestCollapse.querySelectorAll(".collapse");
                        siblingCollapses.forEach((siblingCollapse) => {
                            if (siblingCollapse.classList.contains("show")) {
                                siblingCollapse.classList.remove("show");
                            }
                        });
                    } else {
                        let getSiblings = (elem) => {
                            // Setup siblings array and get the first sibling
                            let siblings = [];
                            let sibling = elem.parentNode.firstChild;
                            // Loop through each sibling and push to the array
                            while (sibling) {
                                if (sibling.nodeType === 1 && sibling !== elem) {
                                    siblings.push(sibling);
                                }
                                sibling = sibling.nextSibling;
                            }
                            return siblings;
                        };
                        let siblings = getSiblings(collapse.parentElement);
                        siblings.forEach((item) => {
                            if (item.childNodes.length > 2)
                                item.firstElementChild.setAttribute("aria-expanded", "false");
                            let ids = item.querySelectorAll("*[id]");
                            ids.forEach((item1) => {
                                item1.classList.remove("show");
                                if (item1.childNodes.length > 2) {
                                    let val = item1.querySelectorAll("ul li a");

                                    val.forEach((subitem) => {
                                        if (subitem.hasAttribute("aria-expanded"))
                                            subitem.setAttribute("aria-expanded", "false");
                                    });
                                }
                            });
                        });
                    }
                });

                // Hide nested collapses on `hide.bs.collapse`
                collapse.addEventListener("hide.bs.collapse", (e) => {
                    e.stopPropagation();
                    let childCollapses = collapse.querySelectorAll(".collapse");
                    childCollapses.forEach((childCollapse) => {
                        let childCollapseInstance = childCollapse;
                        childCollapseInstance.style.display = "none";
                    });
                });
            });
        }
    },

    methods: {
        onRoutechange(ele) {
            this.initActiveMenu(ele.path);
            if (document.getElementsByClassName("mm-active").length > 0) {
                const currentPosition = document.getElementsByClassName("mm-active")[0].offsetTop;
                if (currentPosition > 500)
                    if (this.$refs.isSimplebar)
                        this.$refs.isSimplebar.value.getScrollElement().scrollTop = currentPosition + 300;
            }
        },

        initActiveMenu(ele) {
            setTimeout(() => {
                if (document.querySelector("#navbar-nav")) {
                    let a = document.querySelector("#navbar-nav").querySelector('[href="' + ele + '"]');
                    if (a) {
                        a.classList.add("active");
                        let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
                        if (parentCollapseDiv) {
                            parentCollapseDiv.classList.add("show");
                            parentCollapseDiv.parentElement.children[0].classList.add("active");
                            parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
                            if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
                                parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
                                if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
                                    parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
                                const grandparent = parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.parentElement.closest(".collapse");
                                if (grandparent && grandparent && grandparent.previousElementSibling) {
                                    grandparent.previousElementSibling.classList.add("active");
                                    grandparent.classList.add("show");
                                }
                            }
                        }
                    }
                }
            }, 0);
        },
    },
};
</script>

<template>
    <b-container fluid>
        <div id="two-column-menu"></div>

        <template v-if="layoutType === 'twocolumn'">
            <SimpleBar id="navbar-nav" class="navbar-nav">
                <li class="menu-title">
                    <span data-key="t-menu"> {{ $t("t-menu") }}</span>
                </li>
                <li class="nav-item">
                    <b-link aria-controls="sidebarDashboards" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarDashboards" role="button">
                        <i class="ri-dashboard-2-line"></i>
                        <span data-key="t-dashboards"> {{ $t("t-dashboards") }}</span>
                    </b-link>
                    <div id="sidebarDashboards" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link custom-abc" data-key="t-analytics"
                                             to="/dashboard/analytics">
                                    {{ $t("t-analytics") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-crm" to="/dashboard/crm">
                                    {{ $t("t-crm") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-ecommerce" to="/">
                                    {{ $t("t-ecommerce") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-crypto" to="/dashboard/crypto">
                                    {{ $t("t-crypto") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-projects" to="/dashboard/projects">
                                    {{ $t("t-projects") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-nft" to="/dashboard/nft">
                                    {{ $t("t-nft") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <!-- end Dashboard Menu -->
                <li class="nav-item">
                    <b-link aria-controls="sidebarApps" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarApps" role="button">
                        <i class="ri-apps-2-line"></i>
                        <span data-key="t-apps"> {{ $t("t-apps") }}</span>
                    </b-link>
                    <div id="sidebarApps" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-calendar" to="/calendar">
                                    {{ $t("t-calendar") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-chat" to="/chat">
                                    {{ $t("t-chat") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-mailbox" to="/mailbox">
                                    {{ $t("t-mailbox") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarEcommerce" aria-expanded="false" class="nav-link"
                                        data-bs-toggle="collapse"
                                        data-key="t-ecommerce" href="#sidebarEcommerce" role="button">
                                    {{ $t("t-ecommerce") }}
                                </b-link>
                                <div id="sidebarEcommerce" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-products"
                                                         to="/ecommerce/products">
                                                {{ $t("t-products") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-product-Details"
                                                         to="/ecommerce/product-details">
                                                {{ $t("t-product-Details") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-create-product"
                                                         to="/ecommerce/add-product">
                                                {{ $t("t-create-product") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-orders" to="/ecommerce/orders">
                                                {{ $t("t-orders") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-order-details"
                                                         to="/ecommerce/order-details">
                                                {{ $t("t-order-details") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-customers"
                                                         to="/ecommerce/customers">
                                                {{ $t("t-customers") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-shopping-cart"
                                                         to="/ecommerce/shopping-cart">
                                                {{ $t("t-shopping-cart") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-checkout"
                                                         to="/ecommerce/checkout">
                                                {{ $t("t-checkout") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-sellers" to="/ecommerce/sellers">
                                                {{ $t("t-sellers") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-sellers-details"
                                                         to="/ecommerce/seller-details">
                                                {{ $t("t-sellers-details") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarProjects" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-projects" href="#sidebarProjects" role="button">
                                    {{ $t("t-projects") }}
                                </b-link>
                                <div id="sidebarProjects" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-list" to="/apps/projects-list">
                                                {{ $t("t-list") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-overview"
                                                         to="/apps/projects-overview">
                                                {{ $t("t-overview") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-create-project"
                                                         to="/apps/projects-create">
                                                {{ $t("t-create-project") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarTasks" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-tasks" href="#sidebarTasks" role="button">
                                    {{ $t("t-tasks") }}
                                </b-link>
                                <div id="sidebarTasks" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-kanbanboard"
                                                         to="/apps/tasks-kanban">
                                                {{ $t("t-kanbanboard") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-list-view"
                                                         to="/apps/tasks-list-view">
                                                {{ $t("t-list-view") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-task-details"
                                                         to="/apps/tasks-details">
                                                {{ $t("t-task-details") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarCRM" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-crm" href="#sidebarCRM" role="button">
                                    {{ $t("t-crm") }}
                                </b-link>
                                <div id="sidebarCRM" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-contacts" to="/apps/crm-contacts">
                                                {{ $t("t-contacts") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-companies"
                                                         to="/apps/crm-companies">
                                                {{ $t("t-companies") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-deals" to="/apps/crm-deals">
                                                {{ $t("t-deals") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-leads" to="/apps/crm-leads">
                                                {{ $t("t-leads") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarCrypto" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-crypto" href="#sidebarCrypto" role="button">
                                    {{ $t("t-crypto") }}
                                </b-link>
                                <div id="sidebarCrypto" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-transactions"
                                                         to="/crypto/transactions">
                                                {{ $t("t-transactions") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-buy-sell" to="/crypto/buy-sell">
                                                {{ $t("t-buy-sell") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-orders" to="/crypto/orders">
                                                {{ $t("t-orders") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-my-wallet" to="/crypto/wallet">
                                                {{ $t("t-my-wallet") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-ico-list" to="/crypto/ico">
                                                {{ $t("t-ico-list") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-kyc-application" to="/crypto/kyc">
                                                {{ $t("t-kyc-application") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarInvoices" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-invoices" href="#sidebarInvoices" role="button">
                                    {{ $t("t-invoices") }}
                                </b-link>
                                <div id="sidebarInvoices" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-list-view" to="/invoices/list">
                                                {{ $t("t-list-view") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-details" to="/invoices/detail">
                                                {{ $t("t-details") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-create-invoice"
                                                         to="/invoices/create">
                                                {{ $t("t-create-invoice") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarTickets" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-supprt-tickets" href="#sidebarTickets"
                                        role="button">
                                    {{ $t("t-supprt-tickets") }}
                                </b-link>
                                <div id="sidebarTickets" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-list-view"
                                                         to="/apps/tickets-list">
                                                {{ $t("t-list-view") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-ticket-details"
                                                         to="/apps/tickets-details">
                                                {{ $t("t-ticket-details") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="menu-title">
                    <i class="ri-more-fill"></i>
                    <span data-key="t-pages">{{ $t("t-pages") }}</span>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarAuth" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarAuth" role="button">
                        <i class="ri-account-circle-line"></i>
                        <span data-key="t-authentication">{{
                                $t("t-authentication")
                            }}</span>
                    </b-link>
                    <div id="sidebarAuth" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <b-link aria-controls="sidebarSignIn" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-signin" href="#sidebarSignIn" role="button">
                                    {{ $t("t-signin") }}
                                </b-link>
                                <div id="sidebarSignIn" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic" to="/auth/signin-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover" to="/auth/signin-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarSignUp" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-signup" href="#sidebarSignUp" role="button">
                                    {{ $t("t-signup") }}
                                </b-link>
                                <div id="sidebarSignUp" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic" to="/auth/signup-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover" to="/auth/signup-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="nav-item">
                                <b-link aria-controls="sidebarResetPass" aria-expanded="false" class="nav-link"
                                        data-bs-toggle="collapse"
                                        data-key="t-password-reset" href="#sidebarResetPass"
                                        role="button">
                                    {{ $t("t-password-reset") }}
                                </b-link>
                                <div id="sidebarResetPass" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic" to="/auth/reset-pwd-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover" to="/auth/reset-pwd-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="nav-item">
                                <b-link aria-controls="sidebarLockScreen" aria-expanded="false" class="nav-link"
                                        data-bs-toggle="collapse"
                                        data-key="t-lock-screen" href="#sidebarLockScreen"
                                        role="button">
                                    {{ $t("t-lock-screen") }}
                                </b-link>
                                <div id="sidebarLockScreen" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic"
                                                         to="/auth/lockscreen-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover"
                                                         to="/auth/lockscreen-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="nav-item">
                                <b-link aria-controls="sidebarLogout" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-logout" href="#sidebarLogout" role="button">
                                    {{ $t("t-logout") }}
                                </b-link>
                                <div id="sidebarLogout" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic" to="/auth/logout-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover" to="/auth/logout-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarSuccessMsg" aria-expanded="false" class="nav-link"
                                        data-bs-toggle="collapse"
                                        data-key="t-success-message" href="#sidebarSuccessMsg"
                                        role="button">
                                    {{ $t("t-success-message") }}
                                </b-link>
                                <div id="sidebarSuccessMsg" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic"
                                                         to="/auth/success-msg-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover"
                                                         to="/auth/success-msg-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarTwoStep" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-two-step-verification" href="#sidebarTwoStep"
                                        role="button">
                                    {{ $t("t-two-step-verification") }}
                                </b-link>
                                <div id="sidebarTwoStep" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic" to="/auth/twostep-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover" to="/auth/twostep-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarErrors" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-errors" href="#sidebarErrors" role="button">
                                    {{ $t("t-errors") }}
                                </b-link>
                                <div id="sidebarErrors" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-404-basic" to="/auth/404-basic">
                                                {{ $t("t-404-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-404-cover" to="/auth/404-cover">
                                                {{ $t("t-404-cover") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-404-alt" to="/auth/404">
                                                {{ $t("t-404-alt") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-500" to="/auth/500">
                                                {{ $t("t-500") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarPages" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarPages" role="button">
                        <i class="ri-pages-line"></i>
                        <span data-key="t-pages">{{ $t("t-pages") }}</span>
                    </b-link>
                    <div id="sidebarPages" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-starter" to="/pages/starter">
                                    {{ $t("t-starter") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarProfile" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-profile" href="#sidebarProfile" role="button">
                                    {{ $t("t-profile") }}
                                </b-link>
                                <div id="sidebarProfile" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-simple-page" to="/pages/profile">
                                                {{ $t("t-simple-page") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-settings"
                                                         to="/pages/profile-setting">
                                                {{ $t("t-settings") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-team" to="/pages/team">
                                    {{ $t("t-team") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-timeline" to="/pages/timeline">
                                    {{ $t("t-timeline") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-faqs" to="/pages/faqs">
                                    {{ $t("t-faqs") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-pricing" to="/pages/pricing">
                                    {{ $t("t-pricing") }}
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-maintenance" to="/pages/maintenance">
                                    {{ $t("t-maintenance") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-coming-soon" to="/pages/coming-soon">
                                    {{ $t("t-coming-soon") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-sitemap" to="/pages/sitemap">
                                    {{ $t("t-sitemap") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-search-results" to="/pages/search-results">
                                    {{ $t("t-search-results") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="menu-title">
                    <i class="ri-more-fill"></i>
                    <span data-key="t-components">{{ $t("t-components") }}</span>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarUI" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarUI" role="button">
                        <i class="ri-pencil-ruler-2-line"></i>
                        <span data-key="t-base-ui">{{ $t("t-base-ui") }}</span>
                    </b-link>
                    <div id="sidebarUI" class="collapse menu-dropdown mega-dropdown-menu">
                        <b-row>
                            <b-col col lg="4">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-alerts" to="/ui/alerts">
                                            {{ $t("t-alerts") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-badges" to="/ui/badges">
                                            {{ $t("t-badges") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-buttons" to="/ui/buttons">
                                            {{ $t("t-buttons") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-colors" to="/ui/colors">
                                            {{ $t("t-colors") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-cards" to="/ui/cards">{{
                                                $t("t-cards")
                                            }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-carousel" to="/ui/carousel">
                                            {{ $t("t-carousel") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-dropdowns" to="/ui/dropdowns">
                                            {{ $t("t-dropdowns") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-grid" to="/ui/grid">{{
                                                $t("t-grid")
                                            }}
                                        </router-link>
                                    </li>
                                </ul>
                            </b-col>
                            <b-col col lg="4">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-images" to="/ui/images">
                                            {{ $t("t-images") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-tabs" to="/ui/tabs">{{
                                                $t("t-tabs")
                                            }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-accordion-collapse"
                                                     to="/ui/accordions">
                                            {{ $t("t-accordion-collapse") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-modals" to="/ui/modals">
                                            {{ $t("t-modals") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-offcanvas" to="/ui/offcanvas">
                                            {{ $t("t-offcanvas") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-placeholders" to="/ui/placeholders">
                                            {{ $t("t-placeholders") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-progress" to="/ui/progress">
                                            {{ $t("t-progress") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-notifications" to="/ui/notifications">
                                            {{ $t("t-notifications") }}
                                        </router-link>
                                    </li>
                                </ul>
                            </b-col>
                            <b-col col lg="4">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-media-object" to="/ui/media">
                                            {{ $t("t-media-object") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-embed-video" to="/ui/embed-video">
                                            {{ $t("t-embed-video") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-typography" to="/ui/typography">
                                            {{ $t("t-typography") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-lists" to="/ui/lists">{{
                                                $t("t-lists")
                                            }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-general" to="/ui/general">
                                            {{ $t("t-general") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-ribbons" to="/ui/ribbons">
                                            {{ $t("t-ribbons") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-utilities" to="/ui/utilities">
                                            {{ $t("t-utilities") }}
                                        </router-link>
                                    </li>
                                </ul>
                            </b-col>
                        </b-row>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarAdvanceUI" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarAdvanceUI" role="button">
                        <i class="ri-stack-line"></i>
                        <span data-key="t-advance-ui">{{ $t("t-advance-ui") }}</span>
                        <b-badge class="badge-pill" data-key="t-new" variant="success">{{
                                $t("t-new")
                            }}
                        </b-badge>
                    </b-link>
                    <div id="sidebarAdvanceUI" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-sweet-alerts" to="/advance-ui/sweetalerts">
                                    {{ $t("t-sweet-alerts") }}
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-scrollbar" to="/advance-ui/scrollbar">
                                    {{ $t("t-scrollbar") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-animation" to="/advance-ui/animation">
                                    {{ $t("t-animation") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-swiper-slider" to="/advance-ui/swiper">
                                    {{ $t("t-swiper-slider") }}
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-highlight" to="/advance-ui/highlight">
                                    {{ $t("t-highlight") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-scrollSpy" to="/advance-ui/scrollspy">
                                    {{ $t("t-scrollSpy") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link menu-link" to="/widgets">
                        <i class="ri-honour-line"></i>
                        <span data-key="t-widgets">{{ $t("t-widgets") }}</span>
                    </router-link>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarForms" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarForms" role="button">
                        <i class="ri-file-list-3-line"></i>
                        <span data-key="t-forms">{{ $t("t-forms") }}</span>
                    </b-link>
                    <div id="sidebarForms" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-basic-elements" to="/form/elements">
                                    {{ $t("t-basic-elements") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-form-select" to="/form/select">
                                    {{ $t("t-form-select") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-checkboxs-radios" to="/form/checkboxs-radios">
                                    {{ $t("t-checkboxs-radios") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-pickers" to="/form/pickers">
                                    {{ $t("t-pickers") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-input-masks" to="/form/masks">
                                    {{ $t("t-input-masks") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-advanced" to="/form/advanced">
                                    {{ $t("t-advanced") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-range-slider" to="/form/range-sliders">
                                    {{ $t("t-range-slider") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-validation" to="/form/validation">
                                    {{ $t("t-validation") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-wizard" to="/form/wizard">{{
                                        $t("t-wizard")
                                    }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-editors" to="/form/editors">{{
                                        $t("t-editors")
                                    }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-file-uploads" to="/form/file-uploads">
                                    {{ $t("t-file-uploads") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-form-layouts" to="/form/layouts">
                                    {{ $t("t-form-layouts") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarTables" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarTables" role="button">
                        <i class="ri-layout-grid-line"></i>
                        <span data-key="t-tables">{{ $t("t-tables") }}</span>
                    </b-link>
                    <div id="sidebarTables" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-basic-tables" to="/tables/basic">
                                    {{ $t("t-basic-tables") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-grid-js" to="/tables/gridjs">
                                    {{ $t("t-grid-js") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarCharts" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarCharts" role="button">
                        <i class="ri-pie-chart-line"></i>
                        <span data-key="t-charts">{{ $t("t-charts") }}</span>
                    </b-link>
                    <div id="sidebarCharts" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <b-link aria-controls="sidebarApexcharts" aria-expanded="false" class="nav-link"
                                        data-bs-toggle="collapse"
                                        data-key="t-apexcharts" href="#sidebarApexcharts" role="button">
                                    {{ $t("t-apexcharts") }}
                                </b-link>
                                <div id="sidebarApexcharts" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-line" to="/charts/apex-line">
                                                {{ $t("t-line") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-area" to="/charts/apex-area">
                                                {{ $t("t-area") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-column" to="/charts/apex-column">
                                                {{ $t("t-column") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-bar" to="/charts/apex-bar">
                                                {{ $t("t-bar") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-mixed" to="/charts/apex-mixed">
                                                {{ $t("t-mixed") }}
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-candlstick"
                                                         to="/charts/apex-candlestick">
                                                {{ $t("t-candlstick") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-boxplot"
                                                         to="/charts/apex-boxplot">
                                                {{ $t("t-boxplot") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-bubble" to="/charts/apex-bubble">
                                                {{ $t("t-bubble") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-scatter"
                                                         to="/charts/apex-scatter">
                                                {{ $t("t-scatter") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-heatmap"
                                                         to="/charts/apex-heatmap">
                                                {{ $t("t-heatmap") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-treemap"
                                                         to="/charts/apex-treemap">
                                                {{ $t("t-treemap") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-pie" to="/charts/apex-pie">
                                                {{ $t("t-pie") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-radialbar"
                                                         to="/charts/apex-radialbar">
                                                {{ $t("t-radialbar") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-radar" to="/charts/apex-radar">
                                                {{ $t("t-radar") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-polar-area"
                                                         to="/charts/apex-polararea">
                                                {{ $t("t-polar-area") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-chartjs" to="/charts/chartjs">
                                    {{ $t("t-chartjs") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-echarts" to="/charts/echart">
                                    {{ $t("t-echarts") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarIcons" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarIcons" role="button">
                        <i class="ri-compasses-2-line"></i>
                        <span data-key="t-icons">{{ $t("t-icons") }}</span>
                    </b-link>
                    <div id="sidebarIcons" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-remix" to="/icons/remix">{{
                                        $t("t-remix")
                                    }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-boxicons" to="/icons/boxicons">
                                    {{ $t("t-boxicons") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-material-design" to="/icons/materialdesign">
                                    {{ $t("t-material-design") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-line-awesome" to="/icons/lineawesome">
                                    {{ $t("t-line-awesome") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-feather" to="/icons/feather">
                                    {{ $t("t-feather") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarMaps" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarMaps" role="button">
                        <i class="ri-map-pin-line"></i>
                        <span data-key="t-maps">{{ $t("t-maps") }}</span>
                    </b-link>
                    <div id="sidebarMaps" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-google" to="/maps/google">
                                    {{ $t("t-google") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-leaflet" to="/maps/leaflet">
                                    {{ $t("t-leaflet") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarMultilevel" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarMultilevel" role="button">
                        <i class="ri-share-line"></i>
                        <span data-key="t-multi-level">{{ $t("t-multi-level") }}</span>
                    </b-link>
                    <div id="sidebarMultilevel" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <b-link class="nav-link" data-key="t-level-1.1" href="#">
                                    {{ $t("t-level-1.1") }}
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarAccount" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-level-1.2" href="#sidebarAccount" role="button">
                                    {{ $t("t-level-1.2") }}
                                </b-link>
                                <div id="sidebarAccount" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <b-link class="nav-link" data-key="t-level-2.1" href="#">
                                                {{ $t("t-level-2.1") }}
                                            </b-link>
                                        </li>
                                        <li class="nav-item">
                                            <b-link aria-controls="sidebarCrm" aria-expanded="false" class="nav-link"
                                                    data-bs-toggle="collapse"
                                                    data-key="t-level-2.2" href="#sidebarCrm"
                                                    role="button">
                                                {{ $t("t-level-2.2") }}
                                            </b-link>
                                            <div id="sidebarCrm" class="collapse menu-dropdown">
                                                <ul class="nav nav-sm flex-column">
                                                    <li class="nav-item">
                                                        <b-link class="nav-link" data-key="t-level-3.1" href="#">
                                                            {{ $t("t-level-3.1") }}
                                                        </b-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <b-link class="nav-link" data-key="t-level-3.2" href="#">
                                                            {{ $t("t-level-3.2") }}
                                                        </b-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </SimpleBar>
        </template>

        <template v-else>
            <ul id="navbar-nav" class="navbar-nav h-100">
                <li class="menu-title">
                    <span data-key="t-menu"> {{ $t("t-menu") }}</span>
                </li>
                <li class="nav-item">
                    <b-link aria-controls="sidebarDashboards" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarDashboards" role="button">
                        <i class="ri-dashboard-2-line"></i>
                        <span data-key="t-dashboards"> {{ $t("t-dashboards") }}</span>
                    </b-link>
                    <div id="sidebarDashboards" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link custom-abc" data-key="t-analytics"
                                             to="/dashboard/analytics">
                                    {{ $t("t-analytics") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-crm" to="/dashboard/crm">
                                    {{ $t("t-crm") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-ecommerce" to="/">
                                    {{ $t("t-ecommerce") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-crypto" to="/dashboard/crypto">
                                    {{ $t("t-crypto") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-projects" to="/dashboard/projects">
                                    {{ $t("t-projects") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-nft" to="/dashboard/nft">
                                    {{ $t("t-nft") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-job" to="/dashboard/job">
                                    {{ $t("t-job") }}
                                    <b-badge class="badge-pill" data-key="t-new" variant="success">{{
                                            $t("t-new")
                                        }}
                                    </b-badge>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <!-- end Dashboard Menu -->
                <li class="nav-item">
                    <b-link aria-controls="sidebarApps" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarApps" role="button">
                        <i class="ri-apps-2-line"></i>
                        <span data-key="t-apps"> {{ $t("t-apps") }}</span>
                    </b-link>
                    <div id="sidebarApps" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-calendar" to="/calendar">
                                    {{ $t("t-calendar") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-chat" to="/chat">
                                    {{ $t("t-chat") }}
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <b-link aria-controls="sidebaremail" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-projects" href="#sidebaremail" role="button">
                                    {{ $t("t-email") }}
                                </b-link>
                                <div id="sidebaremail" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-mailbox" to="/mailbox">
                                                {{ $t("t-mailbox") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <b-link aria-controls="sidebarsubemail" aria-expanded="false" class="nav-link"
                                                    data-bs-toggle="collapse"
                                                    data-key="t-projects" href="#sidebarsubemail"
                                                    role="button">
                                                {{ $t("t-email-templates") }}
                                            </b-link>
                                            <div id="sidebarsubemail" class="collapse menu-dropdown">
                                                <ul class="nav nav-sm flex-column">
                                                    <li class="nav-item">
                                                        <router-link class="nav-link" data-key="t-products"
                                                                     to="/email/email-basic">
                                                            {{ $t("t-basic-action") }}
                                                        </router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link class="nav-link" data-key="t-products"
                                                                     to="/email/email-ecommerce">
                                                            {{ $t("t-ecommerce-action") }}
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarEcommerce" aria-expanded="false" class="nav-link"
                                        data-bs-toggle="collapse"
                                        data-key="t-ecommerce" href="#sidebarEcommerce" role="button">
                                    {{ $t("t-ecommerce") }}
                                </b-link>
                                <div id="sidebarEcommerce" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-products"
                                                         to="/ecommerce/products">
                                                {{ $t("t-products") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-product-Details"
                                                         to="/ecommerce/product-details">
                                                {{ $t("t-product-Details") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-create-product"
                                                         to="/ecommerce/add-product">
                                                {{ $t("t-create-product") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-orders" to="/ecommerce/orders">
                                                {{ $t("t-orders") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-order-details"
                                                         to="/ecommerce/order-details">
                                                {{ $t("t-order-details") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-customers"
                                                         to="/ecommerce/customers">
                                                {{ $t("t-customers") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-shopping-cart"
                                                         to="/ecommerce/shopping-cart">
                                                {{ $t("t-shopping-cart") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-checkout"
                                                         to="/ecommerce/checkout">
                                                {{ $t("t-checkout") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-sellers" to="/ecommerce/sellers">
                                                {{ $t("t-sellers") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-sellers-details"
                                                         to="/ecommerce/seller-details">
                                                {{ $t("t-sellers-details") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarProjects" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-projects" href="#sidebarProjects" role="button">
                                    {{ $t("t-projects") }}
                                </b-link>
                                <div id="sidebarProjects" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-list" to="/apps/projects-list">
                                                {{ $t("t-list") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-overview"
                                                         to="/apps/projects-overview">
                                                {{ $t("t-overview") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-create-project"
                                                         to="/apps/projects-create">
                                                {{ $t("t-create-project") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarTasks" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-tasks" href="#sidebarTasks" role="button">
                                    {{ $t("t-tasks") }}
                                </b-link>
                                <div id="sidebarTasks" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-kanbanboard"
                                                         to="/apps/tasks-kanban">
                                                {{ $t("t-kanbanboard") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-list-view"
                                                         to="/apps/tasks-list-view">
                                                {{ $t("t-list-view") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-task-details"
                                                         to="/apps/tasks-details">
                                                {{ $t("t-task-details") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarCRM" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-crm" href="#sidebarCRM" role="button">
                                    {{ $t("t-crm") }}
                                </b-link>
                                <div id="sidebarCRM" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-contacts" to="/apps/crm-contacts">
                                                {{ $t("t-contacts") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-companies"
                                                         to="/apps/crm-companies">
                                                {{ $t("t-companies") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-deals" to="/apps/crm-deals">
                                                {{ $t("t-deals") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-leads" to="/apps/crm-leads">
                                                {{ $t("t-leads") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarCrypto" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-crypto" href="#sidebarCrypto" role="button">
                                    {{ $t("t-crypto") }}
                                </b-link>
                                <div id="sidebarCrypto" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-transactions"
                                                         to="/crypto/transactions">
                                                {{ $t("t-transactions") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-buy-sell" to="/crypto/buy-sell">
                                                {{ $t("t-buy-sell") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-orders" to="/crypto/orders">
                                                {{ $t("t-orders") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-my-wallet" to="/crypto/wallet">
                                                {{ $t("t-my-wallet") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-ico-list" to="/crypto/ico">
                                                {{ $t("t-ico-list") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-kyc-application" to="/crypto/kyc">
                                                {{ $t("t-kyc-application") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarInvoices" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-invoices" href="#sidebarInvoices" role="button">
                                    {{ $t("t-invoices") }}
                                </b-link>
                                <div id="sidebarInvoices" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-list-view" to="/invoices/list">
                                                {{ $t("t-list-view") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-details" to="/invoices/detail">
                                                {{ $t("t-details") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-create-invoice"
                                                         to="/invoices/create">
                                                {{ $t("t-create-invoice") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarTickets" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-supprt-tickets" href="#sidebarTickets"
                                        role="button">
                                    {{ $t("t-supprt-tickets") }}
                                </b-link>
                                <div id="sidebarTickets" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-list-view"
                                                         to="/apps/tickets-list">
                                                {{ $t("t-list-view") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-ticket-details"
                                                         to="/apps/tickets-details">
                                                {{ $t("t-ticket-details") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="nftmarketplace" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-supprt-tickets" href="#nftmarketplace"
                                        role="button">
                                    {{ $t("t-nft-marketplace") }}
                                </b-link>
                                <div id="nftmarketplace" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-list-view"
                                                         to="/apps/nft-marketplace">
                                                {{ $t("t-marketplace") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-ticket-details"
                                                         to="/apps/nft-explore">
                                                {{ $t("t-explore-now") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-ticket-details"
                                                         to="/apps/nft-auction">
                                                {{ $t("t-live-auction") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-ticket-details"
                                                         to="/apps/nft-item-detail">
                                                {{ $t("t-item-details") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-ticket-details"
                                                         to="/apps/nft-collection">
                                                {{ $t("t-collections") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-ticket-details"
                                                         to="/apps/nft-creators">
                                                {{ $t("t-creators") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-ticket-details"
                                                         to="/apps/nft-ranking">
                                                {{ $t("t-ranking") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-ticket-details"
                                                         to="/apps/nft-wallet">
                                                {{ $t("t-wallet-connect") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-ticket-details"
                                                         to="/apps/nft-create">
                                                {{ $t("t-create-nft") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-file-manager" to="/apps-file-manager">
                                    {{ $t("t-file-manager") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-to-do" to="/apps-todo">
                                    {{ $t("t-to-do") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="jobs" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-jobs"
                                        href="#jobs" role="button">
                                    {{ $t("t-jobs") }}
                                    <b-badge class="badge-pill" data-key="t-new" variant="success">{{
                                            $t("t-new")
                                        }}
                                    </b-badge>
                                </b-link>
                                <div id="jobs" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-statistics" to="/jobs/statistics">
                                                {{ $t("t-statistics") }}
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <b-link aria-controls="sidebarjoblist" aria-expanded="false" class="nav-link"
                                                    data-bs-toggle="collapse"
                                                    data-key="t-projects" href="#sidebarjoblist"
                                                    role="button">
                                                {{ $t("t-job-lists") }}
                                            </b-link>
                                            <div id="sidebarjoblist" class="collapse menu-dropdown">
                                                <ul class="nav nav-sm flex-column">
                                                    <li class="nav-item">
                                                        <router-link class="nav-link" data-key="t-lists"
                                                                     to="/jobs/lists">
                                                            {{ $t("t-lists") }}
                                                        </router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link class="nav-link" data-key="t-grid"
                                                                     to="/jobs/grid-lists">
                                                            {{ $t("t-grid") }}
                                                        </router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link class="nav-link" data-key="t-overview"
                                                                     to="/jobs/details">
                                                            {{ $t("t-overview") }}
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li class="nav-item">
                                            <b-link aria-controls="sidebarcandidatelists" aria-expanded="false"
                                                    class="nav-link" data-bs-toggle="collapse"
                                                    data-key="t-projects" href="#sidebarcandidatelists"
                                                    role="button">
                                                {{ $t("t-candidate-lists") }}
                                            </b-link>
                                            <div id="sidebarcandidatelists" class="collapse menu-dropdown">
                                                <ul class="nav nav-sm flex-column">
                                                    <li class="nav-item">
                                                        <router-link class="nav-link" data-key="t-lists"
                                                                     to="/jobs/candidate-lists">
                                                            {{ $t("t-list-view") }}
                                                        </router-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <router-link class="nav-link" data-key="t-grid"
                                                                     to="/jobs/candidate-grid">
                                                            {{ $t("t-grid-view") }}
                                                        </router-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-application"
                                                         to="/jobs/application">
                                                {{ $t("t-application") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-new" to="/jobs/new">
                                                {{ $t("t-new-job") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-companies-list"
                                                         to="/jobs/companies-list">
                                                {{ $t("t-companies-list") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-job-categories"
                                                         to="/jobs/categories">
                                                {{ $t("t-job-categories") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-api-key" to="/apps-api-key">
                                    {{ $t("t-api-key") }}
                                    <b-badge class="badge-pill" data-key="t-new" variant="success">{{
                                            $t("t-new")
                                        }}
                                    </b-badge>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="menu-title">
                    <i class="ri-more-fill"></i>
                    <span data-key="t-pages">{{ $t("t-pages") }}</span>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarAuth" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarAuth" role="button">
                        <i class="ri-account-circle-line"></i>
                        <span data-key="t-authentication">{{
                                $t("t-authentication")
                            }}</span>
                    </b-link>
                    <div id="sidebarAuth" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <b-link aria-controls="sidebarSignIn" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-signin" href="#sidebarSignIn" role="button">
                                    {{ $t("t-signin") }}
                                </b-link>
                                <div id="sidebarSignIn" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic" to="/auth/signin-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover" to="/auth/signin-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarSignUp" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-signup" href="#sidebarSignUp" role="button">
                                    {{ $t("t-signup") }}
                                </b-link>
                                <div id="sidebarSignUp" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic" to="/auth/signup-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover" to="/auth/signup-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="nav-item">
                                <b-link aria-controls="sidebarResetPass" aria-expanded="false" class="nav-link"
                                        data-bs-toggle="collapse"
                                        data-key="t-password-reset" href="#sidebarResetPass"
                                        role="button">
                                    {{ $t("t-password-reset") }}
                                </b-link>
                                <div id="sidebarResetPass" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic" to="/auth/reset-pwd-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover" to="/auth/reset-pwd-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="nav-item">
                                <b-link aria-controls="sidebarcreatepassword" aria-expanded="false" class="nav-link"
                                        data-bs-toggle="collapse"
                                        data-key="t-lock-screen" href="#sidebarcreatepassword"
                                        role="button">
                                    {{ $t("t-password-create") }}
                                </b-link>
                                <div id="sidebarcreatepassword" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic"
                                                         to="/auth/create-pwd-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover"
                                                         to="/auth/create-pwd-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarLockScreen" aria-expanded="false" class="nav-link"
                                        data-bs-toggle="collapse"
                                        data-key="t-lock-screen" href="#sidebarLockScreen"
                                        role="button">
                                    {{ $t("t-lock-screen") }}
                                </b-link>
                                <div id="sidebarLockScreen" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic"
                                                         to="/auth/lockscreen-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover"
                                                         to="/auth/lockscreen-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li class="nav-item">
                                <b-link aria-controls="sidebarLogout" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-logout" href="#sidebarLogout" role="button">
                                    {{ $t("t-logout") }}
                                </b-link>
                                <div id="sidebarLogout" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic" to="/auth/logout-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover" to="/auth/logout-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarSuccessMsg" aria-expanded="false" class="nav-link"
                                        data-bs-toggle="collapse"
                                        data-key="t-success-message" href="#sidebarSuccessMsg"
                                        role="button">
                                    {{ $t("t-success-message") }}
                                </b-link>
                                <div id="sidebarSuccessMsg" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic"
                                                         to="/auth/success-msg-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover"
                                                         to="/auth/success-msg-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarTwoStep" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-two-step-verification" href="#sidebarTwoStep"
                                        role="button">
                                    {{ $t("t-two-step-verification") }}
                                </b-link>
                                <div id="sidebarTwoStep" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-basic" to="/auth/twostep-basic">
                                                {{ $t("t-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-cover" to="/auth/twostep-cover">
                                                {{ $t("t-cover") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarErrors" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-errors" href="#sidebarErrors" role="button">
                                    {{ $t("t-errors") }}
                                </b-link>
                                <div id="sidebarErrors" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-404-basic" to="/auth/404-basic">
                                                {{ $t("t-404-basic") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-404-cover" to="/auth/404-cover">
                                                {{ $t("t-404-cover") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-404-alt" to="/auth/404">
                                                {{ $t("t-404-alt") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-500" to="/auth/500">
                                                {{ $t("t-500") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-offline-page" to="/auth/ofline">
                                                {{ $t("t-offline-page") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarPages" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarPages" role="button">
                        <i class="ri-pages-line"></i>
                        <span data-key="t-pages">{{ $t("t-pages") }}</span>
                    </b-link>
                    <div id="sidebarPages" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-starter" to="/pages/starter">
                                    {{ $t("t-starter") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarProfile" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-profile" href="#sidebarProfile" role="button">
                                    {{ $t("t-profile") }}
                                </b-link>
                                <div id="sidebarProfile" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-simple-page" to="/pages/profile">
                                                {{ $t("t-simple-page") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-settings"
                                                         to="/pages/profile-setting">
                                                {{ $t("t-settings") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-team" to="/pages/team">
                                    {{ $t("t-team") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-timeline" to="/pages/timeline">
                                    {{ $t("t-timeline") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-faqs" to="/pages/faqs">
                                    {{ $t("t-faqs") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-pricing" to="/pages/pricing">
                                    {{ $t("t-pricing") }}
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-maintenance" to="/pages/maintenance">
                                    {{ $t("t-maintenance") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-coming-soon" to="/pages/coming-soon">
                                    {{ $t("t-coming-soon") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-sitemap" to="/pages/sitemap">
                                    {{ $t("t-sitemap") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-search-results" to="/pages/search-results">
                                    {{ $t("t-search-results") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-privacy-policy" to="/pages/privacy-policy">
                                    {{ $t("t-privacy-policy") }}
                                    <b-badge class="badge-pill" data-key="t-new" variant="success">{{
                                            $t("t-new")
                                        }}
                                    </b-badge>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-term-conditions" to="/pages/term-conditions">
                                    {{ $t("t-term-conditions") }}
                                    <b-badge class="badge-pill" data-key="t-new" variant="success">{{
                                            $t("t-new")
                                        }}
                                    </b-badge>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="nav-item">
                    <b-link aria-controls="sidebarlanding" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                            data-key="t-projects"
                            href="#sidebarlanding" role="button">
                        <i class="ri-rocket-line"></i>
                        <span data-key="t-landing">{{ $t("t-landing") }}</span>
                    </b-link>
                    <div id="sidebarlanding" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <b-link class="nav-link menu-link" href="/landing" target="_blank">
                                    <span data-key="t-landing">{{ $t("t-one-page") }}</span>
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link class="nav-link menu-link" href="/nft-landing" target="_blank">
                                    <span data-key="t-landing">{{ $t("t-nft-landing") }}</span>
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link class="nav-link menu-link" href="/job-landing" target="_blank">
                                    <span data-key="t-landing">{{ $t("t-job") }}</span>
                                    <b-badge class="badge-pill" data-key="t-new" variant="success">{{
                                            $t("t-new")
                                        }}
                                    </b-badge>
                                </b-link>
                            </li>

                        </ul>
                    </div>
                </li>
                <li class="menu-title">
                    <i class="ri-more-fill"></i>
                    <span data-key="t-components">{{ $t("t-components") }}</span>
                </li>
                <li class="nav-item">
                    <b-link aria-controls="sidebarUI" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarUI" role="button">
                        <i class="ri-pencil-ruler-2-line"></i>
                        <span data-key="t-base-ui">{{ $t("t-base-ui") }}</span>
                    </b-link>
                    <div id="sidebarUI" class="collapse menu-dropdown mega-dropdown-menu">
                        <b-row>
                            <b-col col lg="4">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-alerts" to="/ui/alerts">
                                            {{ $t("t-alerts") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-badges" to="/ui/badges">
                                            {{ $t("t-badges") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-buttons" to="/ui/buttons">
                                            {{ $t("t-buttons") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-colors" to="/ui/colors">
                                            {{ $t("t-colors") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-cards" to="/ui/cards">{{
                                                $t("t-cards")
                                            }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-carousel" to="/ui/carousel">
                                            {{ $t("t-carousel") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-dropdowns" to="/ui/dropdowns">
                                            {{ $t("t-dropdowns") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-grid" to="/ui/grid">{{
                                                $t("t-grid")
                                            }}
                                        </router-link>
                                    </li>
                                </ul>
                            </b-col>
                            <b-col col lg="4">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-images" to="/ui/images">
                                            {{ $t("t-images") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-tabs" to="/ui/tabs">{{
                                                $t("t-tabs")
                                            }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-accordion-collapse"
                                                     to="/ui/accordions">
                                            {{ $t("t-accordion-collapse") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-modals" to="/ui/modals">
                                            {{ $t("t-modals") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-offcanvas" to="/ui/offcanvas">
                                            {{ $t("t-offcanvas") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-placeholders" to="/ui/placeholders">
                                            {{ $t("t-placeholders") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-progress" to="/ui/progress">
                                            {{ $t("t-progress") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-notifications" to="/ui/notifications">
                                            {{ $t("t-notifications") }}
                                        </router-link>
                                    </li>
                                </ul>
                            </b-col>
                            <b-col col lg="4">
                                <ul class="nav nav-sm flex-column">
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-media-object" to="/ui/media">
                                            {{ $t("t-media-object") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-embed-video" to="/ui/embed-video">
                                            {{ $t("t-embed-video") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-typography" to="/ui/typography">
                                            {{ $t("t-typography") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-lists" to="/ui/lists">{{
                                                $t("t-lists")
                                            }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-general" to="/ui/general">
                                            {{ $t("t-general") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-ribbons" to="/ui/ribbons">
                                            {{ $t("t-ribbons") }}
                                        </router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" data-key="t-utilities" to="/ui/utilities">
                                            {{ $t("t-utilities") }}
                                        </router-link>
                                    </li>
                                </ul>
                            </b-col>
                        </b-row>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarAdvanceUI" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarAdvanceUI" role="button">
                        <i class="ri-stack-line"></i>
                        <span data-key="t-advance-ui">{{ $t("t-advance-ui") }}</span>

                    </b-link>
                    <div id="sidebarAdvanceUI" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-sweet-alerts" to="/advance-ui/sweetalerts">
                                    {{ $t("t-sweet-alerts") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-scrollbar" to="/advance-ui/scrollbar">
                                    {{ $t("t-scrollbar") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-animation" to="/advance-ui/animation">
                                    {{ $t("t-animation") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-swiper-slider" to="/advance-ui/swiper">
                                    {{ $t("t-swiper-slider") }}
                                </router-link>
                            </li>

                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-highlight" to="/advance-ui/highlight">
                                    {{ $t("t-highlight") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-scrollSpy" to="/advance-ui/scrollspy">
                                    {{ $t("t-scrollSpy") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link menu-link" to="/widgets">
                        <i class="ri-honour-line"></i>
                        <span data-key="t-widgets">{{ $t("t-widgets") }}</span>
                    </router-link>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarForms" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarForms" role="button">
                        <i class="ri-file-list-3-line"></i>
                        <span data-key="t-forms">{{ $t("t-forms") }}</span>
                    </b-link>
                    <div id="sidebarForms" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-basic-elements" to="/form/elements">
                                    {{ $t("t-basic-elements") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-form-select" to="/form/select">
                                    {{ $t("t-form-select") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-checkboxs-radios" to="/form/checkboxs-radios">
                                    {{ $t("t-checkboxs-radios") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-pickers" to="/form/pickers">
                                    {{ $t("t-pickers") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-input-masks" to="/form/masks">
                                    {{ $t("t-input-masks") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-advanced" to="/form/advanced">
                                    {{ $t("t-advanced") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-range-slider" to="/form/range-sliders">
                                    {{ $t("t-range-slider") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-validation" to="/form/validation">
                                    {{ $t("t-validation") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-wizard" to="/form/wizard">{{
                                        $t("t-wizard")
                                    }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-editors" to="/form/editors">{{
                                        $t("t-editors")
                                    }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-file-uploads" to="/form/file-uploads">
                                    {{ $t("t-file-uploads") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-form-layouts" to="/form/layouts">
                                    {{ $t("t-form-layouts") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarTables" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarTables" role="button">
                        <i class="ri-layout-grid-line"></i>
                        <span data-key="t-tables">{{ $t("t-tables") }}</span>
                    </b-link>
                    <div id="sidebarTables" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-basic-tables" to="/tables/basic">
                                    {{ $t("t-basic-tables") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-grid-js" to="/tables/gridjs">
                                    {{ $t("t-grid-js") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarCharts" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarCharts" role="button">
                        <i class="ri-pie-chart-line"></i>
                        <span data-key="t-charts">{{ $t("t-charts") }}</span>
                    </b-link>
                    <div id="sidebarCharts" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <b-link aria-controls="sidebarApexcharts" aria-expanded="false" class="nav-link"
                                        data-bs-toggle="collapse"
                                        data-key="t-apexcharts" href="#sidebarApexcharts" role="button">
                                    {{ $t("t-apexcharts") }}
                                </b-link>
                                <div id="sidebarApexcharts" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-line" to="/charts/apex-line">
                                                {{ $t("t-line") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-area" to="/charts/apex-area">
                                                {{ $t("t-area") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-column" to="/charts/apex-column">
                                                {{ $t("t-column") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-bar" to="/charts/apex-bar">
                                                {{ $t("t-bar") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-mixed" to="/charts/apex-mixed">
                                                {{ $t("t-mixed") }}
                                            </router-link>
                                        </li>

                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-candlstick"
                                                         to="/charts/apex-candlestick">
                                                {{ $t("t-candlstick") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-boxplot"
                                                         to="/charts/apex-boxplot">
                                                {{ $t("t-boxplot") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-bubble" to="/charts/apex-bubble">
                                                {{ $t("t-bubble") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-scatter"
                                                         to="/charts/apex-scatter">
                                                {{ $t("t-scatter") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-heatmap"
                                                         to="/charts/apex-heatmap">
                                                {{ $t("t-heatmap") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-treemap"
                                                         to="/charts/apex-treemap">
                                                {{ $t("t-treemap") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-pie" to="/charts/apex-pie">
                                                {{ $t("t-pie") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-radialbar"
                                                         to="/charts/apex-radialbar">
                                                {{ $t("t-radialbar") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-radar" to="/charts/apex-radar">
                                                {{ $t("t-radar") }}
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link class="nav-link" data-key="t-polar-area"
                                                         to="/charts/apex-polararea">
                                                {{ $t("t-polar-area") }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-chartjs" to="/charts/chartjs">
                                    {{ $t("t-chartjs") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-echarts" to="/charts/echart">
                                    {{ $t("t-echarts") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarIcons" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarIcons" role="button">
                        <i class="ri-compasses-2-line"></i>
                        <span data-key="t-icons">{{ $t("t-icons") }}</span>
                    </b-link>
                    <div id="sidebarIcons" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-remix" to="/icons/remix">{{
                                        $t("t-remix")
                                    }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-boxicons" to="/icons/boxicons">
                                    {{ $t("t-boxicons") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-material-design" to="/icons/materialdesign">
                                    {{ $t("t-material-design") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-line-awesome" to="/icons/lineawesome">
                                    {{ $t("t-line-awesome") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-feather" to="/icons/feather">
                                    {{ $t("t-feather") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-feather" to="/icons/crypto">
                                    {{ $t("t-crypto-svg") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarMaps" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarMaps" role="button">
                        <i class="ri-map-pin-line"></i>
                        <span data-key="t-maps">{{ $t("t-maps") }}</span>
                    </b-link>
                    <div id="sidebarMaps" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-google" to="/maps/google">
                                    {{ $t("t-google") }}
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" data-key="t-leaflet" to="/maps/leaflet">
                                    {{ $t("t-leaflet") }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="nav-item">
                    <b-link aria-controls="sidebarMultilevel" aria-expanded="false" class="nav-link menu-link" data-bs-toggle="collapse"
                            href="#sidebarMultilevel" role="button">
                        <i class="ri-share-line"></i>
                        <span data-key="t-multi-level">{{ $t("t-multi-level") }}</span>
                    </b-link>
                    <div id="sidebarMultilevel" class="collapse menu-dropdown">
                        <ul class="nav nav-sm flex-column">
                            <li class="nav-item">
                                <b-link class="nav-link" data-key="t-level-1.1" href="#">
                                    {{ $t("t-level-1.1") }}
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link aria-controls="sidebarAccount" aria-expanded="false" class="nav-link" data-bs-toggle="collapse"
                                        data-key="t-level-1.2" href="#sidebarAccount" role="button">
                                    {{ $t("t-level-1.2") }}
                                </b-link>
                                <div id="sidebarAccount" class="collapse menu-dropdown">
                                    <ul class="nav nav-sm flex-column">
                                        <li class="nav-item">
                                            <b-link class="nav-link" data-key="t-level-2.1" href="#">
                                                {{ $t("t-level-2.1") }}
                                            </b-link>
                                        </li>
                                        <li class="nav-item">
                                            <b-link aria-controls="sidebarCrm" aria-expanded="false" class="nav-link"
                                                    data-bs-toggle="collapse"
                                                    data-key="t-level-2.2" href="#sidebarCrm"
                                                    role="button">
                                                {{ $t("t-level-2.2") }}
                                            </b-link>
                                            <div id="sidebarCrm" class="collapse menu-dropdown">
                                                <ul class="nav nav-sm flex-column">
                                                    <li class="nav-item">
                                                        <b-link class="nav-link" data-key="t-level-3.1" href="#">
                                                            {{ $t("t-level-3.1") }}
                                                        </b-link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <b-link class="nav-link" data-key="t-level-3.2" href="#">
                                                            {{ $t("t-level-3.2") }}
                                                        </b-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </template>
    </b-container>
</template>
