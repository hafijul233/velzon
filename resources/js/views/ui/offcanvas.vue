<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";

import 'prismjs';
import 'prismjs/themes/prism.css';

export default {
    data() {
        return {
            title: "Offcanvas",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Offcanvas",
                    active: true,
                },
            ],
        };
    },
    name: "Offcanvas",
    components: {
        Layout,
        PageHeader,
    },
    mounted() {
        const checkbox = document.getElementsByClassName("code-switcher");
        Array.from(checkbox).forEach((check) => {
            check.addEventListener('change', () => {
                const card = check.closest('.card');
                const preview = card.querySelector(".live-preview");
                const code = card.querySelector(".code-view");
                if (check.checked) {
                    // do this
                    preview.classList.add("d-none");
                    code.classList.remove("d-none");
                } else {
                    // do that
                    preview.classList.remove("d-none");
                    code.classList.add("d-none");
                }
            });
        });
    }
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Default Offcanvas</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="default-example">Show Code</label>
                                <input id="default-example" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use the
                            <code>offcanvas</code> class to set a default offcanvas.
                        </p>
                        <div class="live-preview">
                            <div class="hstack flex-wrap gap-2">
                                <b-link aria-controls="offcanvasExample" class="btn btn-secondary"
                                        data-bs-toggle="offcanvas"
                                        href="#offcanvasExample" role="button">Link with href
                                </b-link>
                                <b-button aria-controls="offcanvasExample" data-bs-target="#offcanvasExample"
                                          data-bs-toggle="offcanvas"
                                          type="button" variant="secondary">Button
                                    with
                                    data-bs-target
                                </b-button>
                            </div>

                            <div id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
                                 class="offcanvas offcanvas-start"
                                 tabindex="-1">
                                <div class="offcanvas-header border-bottom">
                                    <h5 id="offcanvasExampleLabel" class="offcanvas-title">Recent Acitivity</h5>
                                    <button aria-label="Close" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            type="button"></button>
                                </div>
                                <div class="offcanvas-body p-0 overflow-hidden">
                                    <div data-simplebar style="height: calc(100vh - 112px);">
                                        <div class="acitivity-timeline p-4">
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-1.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Oliver Phillips
                                                        <b-badge class="text-primary align-middle"
                                                                 variant="soft-primary">New
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">We talked about a project on linkedin.
                                                    </p>
                                                    <small class="mb-0 text-muted">Today</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div
                                                        class="avatar-title bg-soft-success text-success rounded-circle">
                                                        N
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Nancy Martino
                                                        <b-badge class="text-secondary align-middle"
                                                                 variant="soft-secondary">In
                                                            Progress
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">
                                                        <i class="ri-file-text-line align-middle ms-2"></i> Create new
                                                        project Buildng product
                                                    </p>
                                                    <div class="avatar-group mb-2">
                                                        <b-link class="avatar-group-item"
                                                                data-bs-original-title="Christi"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <img alt class="rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-4.jpg"/>
                                                        </b-link>
                                                        <b-link class="avatar-group-item"
                                                                data-bs-original-title="Frank Hook"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <img alt class="rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-3.jpg"/>
                                                        </b-link>
                                                        <b-link class="avatar-group-item" data-bs-original-title=" Ruby"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <div class="avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </b-link>
                                                        <b-link class="avatar-group-item" data-bs-original-title="more"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <div class="avatar-xs">
                                                                <div class="avatar-title rounded-circle">2+</div>
                                                            </div>
                                                        </b-link>
                                                    </div>
                                                    <small class="mb-0 text-muted">Yesterday</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-2.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Natasha Carey
                                                        <b-badge class="text-success align-middle"
                                                                 variant="soft-success">Completed
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">Adding a new event with attachments</p>
                                                    <b-row class="border border-dashed gx-2 p-2 mb-2">
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-2.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-3.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-4.jpg"/>
                                                        </b-col>
                                                    </b-row>
                                                    <small class="mb-0 text-muted">25 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-6.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Bethany Johnson</h6>
                                                    <p class="text-muted mb-2">added a new member to velzon dashboard
                                                    </p>
                                                    <small class="mb-0 text-muted">19 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div
                                                            class="avatar-title rounded-circle bg-soft-danger text-danger">
                                                            <i class="ri-shopping-bag-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Your order is placed
                                                        <b-badge class="text-danger align-middle ms-1"
                                                                 variant="soft-danger">Out
                                                            of Delivery
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">These customers can rest assured their
                                                        order has been placed.</p>
                                                    <small class="mb-0 text-muted">16 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-7.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Lewis Pratt</h6>
                                                    <p class="text-muted mb-2">They all have something to say beyond the
                                                        words on the page. They can come across as casual or neutral,
                                                        exotic or graphic.</p>
                                                    <small class="mb-0 text-muted">22 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div class="avatar-title rounded-circle bg-soft-info text-info">
                                                            <i class="ri-line-chart-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Monthly sales report</h6>
                                                    <p class="text-muted mb-2">
                                                        <span class="text-danger">2 days left</span> notification to
                                                        submit the monthly sales report.
                                                        <b-link class="link-warning text-decoration-underline"
                                                                href="javascript:void(0);">Reports
                                                            Builder
                                                        </b-link>
                                                    </p>
                                                    <small class="mb-0 text-muted">15 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-8.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        New ticket received
                                                        <b-badge class="text-success align-middle"
                                                                 variant="soft-success">Completed
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">
                                                        User
                                                        <span class="text-secondary">Erica245</span> submitted a ticket.
                                                    </p>
                                                    <small class="mb-0 text-muted">26 Aug</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="offcanvas-foorter border-top p-3 text-center">
                                    <b-link class="link-success" href="javascript:void(0);">
                                        View All Acitivity
                                        <i class="ri-arrow-right-s-line align-middle ms-1"></i>
                                    </b-link>
                                </div>
                            </div>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Base Examples --&gt;
&lt;div class=&quot;hstack flex-wrap gap-2&quot;&gt;
    &lt;a class=&quot;btn btn-light&quot; data-bs-toggle=&quot;offcanvas&quot; href=&quot;#offcanvasExample&quot; role=&quot;button&quot; aria-controls=&quot;offcanvasExample&quot;&gt;
        Link with href
    &lt;/a&gt;
    &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasExample&quot; aria-controls=&quot;offcanvasExample&quot;&gt;
        Button with data-bs-target
    &lt;/button&gt;
&lt;/div&gt;

&lt;div class=&quot;offcanvas offcanvas-start&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasExample&quot; aria-labelledby=&quot;offcanvasExampleLabel&quot;&gt;
    &lt;div class=&quot;offcanvas-header&quot;&gt;
        &lt;h5 class=&quot;offcanvas-title&quot; id=&quot;offcanvasExampleLabel&quot;&gt;Offcanvas&lt;/h5&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;offcanvas-body&quot;&gt;
        ...
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Placement Offcanvas</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="placement-showcode">Show Code</label>
                                <input id="placement-showcode" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>offcanvas-top</code>,
                            <code>offcanvas-end</code>,
                            <code>offcanvas-bottom</code>, or
                            <code>offcanvas-start</code> to offcanvas class to set different Offcanvas Placement.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-2">
                                <b-button aria-controls="offcanvasTop" data-bs-target="#offcanvasTop"
                                          data-bs-toggle="offcanvas"
                                          type="button" variant="primary">Toggle Top
                                    Offcanvas
                                </b-button>
                                <b-button aria-controls="offcanvasRight" data-bs-target="#offcanvasRight"
                                          data-bs-toggle="offcanvas"
                                          type="button" variant="secondary">Toggle Right
                                    Offcanvas
                                </b-button>
                                <b-button aria-controls="offcanvasBottom" data-bs-target="#offcanvasBottom"
                                          data-bs-toggle="offcanvas"
                                          type="button" variant="success">Toggle
                                    Bottom
                                    Offcanvas
                                </b-button>
                                <b-button aria-controls="offcanvasLeft" data-bs-target="#offcanvasLeft"
                                          data-bs-toggle="offcanvas"
                                          type="button" variant="danger">Toggle Left
                                    Offcanvas
                                </b-button>
                            </div>

                            <!-- top offcanvas -->
                            <div id="offcanvasTop" aria-labelledby="offcanvasTopLabel" class="offcanvas offcanvas-top"
                                 style="min-height:46vh;" tabindex="-1">
                                <div class="offcanvas-header border-bottom">
                                    <h5 id="offcanvasTopLabel" class="offcanvas-title">Gallery</h5>
                                    <button aria-label="Close" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            type="button"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <b-row class="gallery-light">
                                        <b-col lg="4" sm="6" xl="3">
                                            <div class="gallery-box card light mb-0">
                                                <div class="gallery-container">
                                                    <b-link href="#" title>
                                                        <img alt
                                                             class="gallery-img img-fluid mx-auto"
                                                             src="@/assets/images/small/img-12.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">A mix of friends and strangers
                                                                heading off to find an adventure.</h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href>Erica Kernan
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    3.4K
                                                                </b-button>
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    1.3k
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <div class="gallery-box card light mb-0">
                                                <div class="gallery-container">
                                                    <b-link href="#" title>
                                                        <img alt
                                                             class="gallery-img img-fluid mx-auto"
                                                             src="@/assets/images/small/img-9.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">Dramatic clouds at the Golden
                                                                Gate Bridge</h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href>Ron Mackie
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    5.1K
                                                                </b-button>
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    4.7k
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <div class="gallery-box card mb-0">
                                                <div class="gallery-container">
                                                    <b-link href="#" title>
                                                        <img alt
                                                             class="gallery-img img-fluid mx-auto"
                                                             src="@/assets/images/small/img-11.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">Cycling in the countryside</h5>
                                                        </div>
                                                    </b-link>
                                                </div>

                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href>Nancy Martino
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    3.2K
                                                                </b-button>
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    1.1K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col class="d-md-none d-xl-block" lg="4" sm="6" xl="3">
                                            <div class="gallery-box card mb-0">
                                                <div class="gallery-container">
                                                    <b-link href="#" title>
                                                        <img alt
                                                             class="gallery-img img-fluid mx-auto"
                                                             src="@/assets/images/small/img-10.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">Fun day at the Hill Station</h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href>Henry Baird
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    632
                                                                </b-button>
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    95
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>

                            <!-- right offcanvas -->
                            <div id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
                                 class="offcanvas offcanvas-end"
                                 tabindex="-1">
                                <div class="offcanvas-header border-bottom">
                                    <h5 id="offcanvasRightLabel" class="offcanvas-title">Recent Acitivity</h5>
                                    <button aria-label="Close" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            type="button"></button>
                                </div>
                                <div class="offcanvas-body p-0 overflow-hidden">
                                    <div data-simplebar style="height: calc(100vh - 112px);">
                                        <div class="acitivity-timeline p-4">
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-1.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Oliver Phillips
                                                        <b-badge class="text-primary align-middle"
                                                                 variant="soft-primary">New
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">We talked about a project on linkedin.
                                                    </p>
                                                    <small class="mb-0 text-muted">Today</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div
                                                        class="avatar-title bg-soft-success text-success rounded-circle">
                                                        N
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Nancy Martino
                                                        <b-badge class="text-secondary align-middle"
                                                                 variant="soft-secondary">In
                                                            Progress
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">
                                                        <i class="ri-file-text-line align-middle ms-2"></i> Create new
                                                        project Buildng product
                                                    </p>
                                                    <div class="avatar-group mb-2">
                                                        <b-link class="avatar-group-item"
                                                                data-bs-original-title="Christi"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <img alt class="rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-4.jpg"/>
                                                        </b-link>
                                                        <b-link class="avatar-group-item"
                                                                data-bs-original-title="Frank Hook"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <img alt class="rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-3.jpg"/>
                                                        </b-link>
                                                        <b-link class="avatar-group-item" data-bs-original-title=" Ruby"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <div class="avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </b-link>
                                                        <b-link class="avatar-group-item" data-bs-original-title="more"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <div class="avatar-xs">
                                                                <div class="avatar-title rounded-circle">2+</div>
                                                            </div>
                                                        </b-link>
                                                    </div>
                                                    <small class="mb-0 text-muted">Yesterday</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-2.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Natasha Carey
                                                        <b-badge class="text-success align-middle"
                                                                 variant="soft-success">Completed
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">Adding a new event with attachments</p>
                                                    <b-row class="border border-dashed gx-2 p-2 mb-2">
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-2.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-3.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-4.jpg"/>
                                                        </b-col>
                                                    </b-row>
                                                    <small class="mb-0 text-muted">25 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-6.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Bethany Johnson</h6>
                                                    <p class="text-muted mb-2">added a new member to velzon dashboard
                                                    </p>
                                                    <small class="mb-0 text-muted">19 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div
                                                            class="avatar-title rounded-circle bg-soft-danger text-danger">
                                                            <i class="ri-shopping-bag-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Your order is placed
                                                        <b-badge class="text-danger align-middle ms-1"
                                                                 variant="soft-danger">Out
                                                            of Delivery
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">These customers can rest assured their
                                                        order has been placed.</p>
                                                    <small class="mb-0 text-muted">16 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-7.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Lewis Pratt</h6>
                                                    <p class="text-muted mb-2">They all have something to say beyond the
                                                        words on the page. They can come across as casual or neutral,
                                                        exotic or graphic.</p>
                                                    <small class="mb-0 text-muted">22 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div class="avatar-title rounded-circle bg-soft-info text-info">
                                                            <i class="ri-line-chart-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Monthly sales report</h6>
                                                    <p class="text-muted mb-2">
                                                        <span class="text-danger">2 days left</span> notification to
                                                        submit the monthly sales report.
                                                        <b-link class="link-warning text-decoration-underline"
                                                                href="javascript:void(0);">Reports
                                                            Builder
                                                        </b-link>
                                                    </p>
                                                    <small class="mb-0 text-muted">15 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-8.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        New ticket received
                                                        <b-badge class="text-success align-middle"
                                                                 variant="soft-success">Completed
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">
                                                        User
                                                        <span class="text-secondary">Erica245</span> submitted a ticket.
                                                    </p>
                                                    <small class="mb-0 text-muted">26 Aug</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="offcanvas-foorter border p-3 text-center">
                                    <b-link class="link-success" href="javascript:void(0);">
                                        View All Acitivity
                                        <i class="ri-arrow-right-s-line align-middle ms-1"></i>
                                    </b-link>
                                </div>
                            </div>

                            <!-- bottom offcanvas -->
                            <div id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel"
                                 class="offcanvas offcanvas-bottom"
                                 style="min-height:46vh;" tabindex="-1">
                                <div class="offcanvas-header border-bottom">
                                    <h5 id="offcanvasBottomLabel" class="offcanvas-title">Gallery</h5>
                                    <button aria-label="Close" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            type="button"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <b-row class="gallery-light">
                                        <b-col lg="4" sm="6" xl="3">
                                            <div class="gallery-box card light mb-0">
                                                <div class="gallery-container">
                                                    <b-link href="#" title>
                                                        <img alt
                                                             class="gallery-img img-fluid mx-auto"
                                                             src="@/assets/images/small/img-12.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">A mix of friends and strangers
                                                                heading off to find an adventure.</h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href>Erica Kernan
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    3.4K
                                                                </b-button>
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    1.3k
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <div class="gallery-box card light mb-0">
                                                <div class="gallery-container">
                                                    <b-link href="#" title>
                                                        <img alt
                                                             class="gallery-img img-fluid mx-auto"
                                                             src="@/assets/images/small/img-9.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">Dramatic clouds at the Golden
                                                                Gate Bridge</h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href>Ron Mackie
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    5.1K
                                                                </b-button>
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    4.7k
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col lg="4" sm="6" xl="3">
                                            <div class="gallery-box card mb-0">
                                                <div class="gallery-container">
                                                    <b-link href="#" title>
                                                        <img alt
                                                             class="gallery-img img-fluid mx-auto"
                                                             src="@/assets/images/small/img-11.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">Cycling in the countryside</h5>
                                                        </div>
                                                    </b-link>
                                                </div>

                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href>Nancy Martino
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    3.2K
                                                                </b-button>
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    1.1K
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col class="d-md-none d-xl-block" lg="4" sm="6" xl="3">
                                            <div class="gallery-box card mb-0">
                                                <div class="gallery-container">
                                                    <b-link href="#" title>
                                                        <img alt
                                                             class="gallery-img img-fluid mx-auto"
                                                             src="@/assets/images/small/img-10.jpg"/>
                                                        <div class="gallery-overlay">
                                                            <h5 class="overlay-caption">Fun day at the Hill Station</h5>
                                                        </div>
                                                    </b-link>
                                                </div>
                                                <div class="box-content">
                                                    <div class="d-flex align-items-center mt-1">
                                                        <div class="flex-grow-1 text-muted">
                                                            by
                                                            <b-link class="text-body text-truncate" href>Henry Baird
                                                            </b-link>
                                                        </div>
                                                        <div class="flex-shrink-0">
                                                            <div class="d-flex gap-3">
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-thumb-up-fill text-muted align-bottom me-1"></i>
                                                                    632
                                                                </b-button>
                                                                <b-button
                                                                    class="fs-12 text-body text-decoration-none px-0"
                                                                    size="sm" type="button"
                                                                    variant="link">
                                                                    <i
                                                                        class="ri-question-answer-fill text-muted align-bottom me-1"></i>
                                                                    95
                                                                </b-button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </div>
                            </div>

                            <!-- left offcanvas -->
                            <div id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel"
                                 class="offcanvas offcanvas-start"
                                 tabindex="-1">
                                <div class="offcanvas-header border-bottom">
                                    <h5 id="offcanvasLeftLabel" class="offcanvas-title">Recent Acitivity</h5>
                                    <button aria-label="Close" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            type="button"></button>
                                </div>
                                <div class="offcanvas-body p-0 overflow-hidden">
                                    <div data-simplebar style="height: calc(100vh - 112px);">
                                        <div class="acitivity-timeline p-4">
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-1.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Oliver Phillips
                                                        <b-badge class="text-primary align-middle"
                                                                 variant="soft-primary">New
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">We talked about a project on linkedin.
                                                    </p>
                                                    <small class="mb-0 text-muted">Today</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div
                                                        class="avatar-title bg-soft-success text-success rounded-circle">
                                                        N
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Nancy Martino
                                                        <b-badge class="text-secondary align-middle"
                                                                 variant="soft-secondary">In
                                                            Progress
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">
                                                        <i class="ri-file-text-line align-middle ms-2"></i> Create new
                                                        project Buildng product
                                                    </p>
                                                    <div class="avatar-group mb-2">
                                                        <b-link class="avatar-group-item"
                                                                data-bs-original-title="Christi"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <img alt class="rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-4.jpg"/>
                                                        </b-link>
                                                        <b-link class="avatar-group-item"
                                                                data-bs-original-title="Frank Hook"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <img alt class="rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-3.jpg"/>
                                                        </b-link>
                                                        <b-link class="avatar-group-item" data-bs-original-title=" Ruby"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <div class="avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </b-link>
                                                        <b-link class="avatar-group-item" data-bs-original-title="more"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <div class="avatar-xs">
                                                                <div class="avatar-title rounded-circle">2+</div>
                                                            </div>
                                                        </b-link>
                                                    </div>
                                                    <small class="mb-0 text-muted">Yesterday</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-2.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Natasha Carey
                                                        <b-badge class="text-success align-middle"
                                                                 variant="soft-success">Completed
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">Adding a new event with attachments</p>
                                                    <b-row class="border border-dashed gx-2 p-2 mb-2">
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-2.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-3.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-4.jpg"/>
                                                        </b-col>
                                                    </b-row>
                                                    <small class="mb-0 text-muted">25 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-6.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Bethany Johnson</h6>
                                                    <p class="text-muted mb-2">added a new member to velzon dashboard
                                                    </p>
                                                    <small class="mb-0 text-muted">19 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div
                                                            class="avatar-title rounded-circle bg-soft-danger text-danger">
                                                            <i class="ri-shopping-bag-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Your order is placed
                                                        <b-badge class="text-danger align-middle ms-1"
                                                                 variant="soft-danger">Out
                                                            of Delivery
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">These customers can rest assured their
                                                        order has been placed.</p>
                                                    <small class="mb-0 text-muted">16 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-7.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Lewis Pratt</h6>
                                                    <p class="text-muted mb-2">They all have something to say beyond the
                                                        words on the page. They can come across as casual or neutral,
                                                        exotic or graphic.</p>
                                                    <small class="mb-0 text-muted">22 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div class="avatar-title rounded-circle bg-soft-info text-info">
                                                            <i class="ri-line-chart-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Monthly sales report</h6>
                                                    <p class="text-muted mb-2">
                                                        <span class="text-danger">2 days left</span> notification to
                                                        submit the monthly sales report.
                                                        <b-link class="link-warning text-decoration-underline"
                                                                href="javascript:void(0);">Reports
                                                            Builder
                                                        </b-link>
                                                    </p>
                                                    <small class="mb-0 text-muted">15 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-8.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        New ticket received
                                                        <b-badge class="text-success align-middle"
                                                                 variant="soft-success">Completed
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">
                                                        User
                                                        <span class="text-secondary">Erica245</span> submitted a ticket.
                                                    </p>
                                                    <small class="mb-0 text-muted">26 Aug</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="offcanvas-foorter border-top p-3 text-center">
                                    <b-link class="link-success" href="javascript:void(0);">
                                        View All Acitivity
                                        <i class="ri-arrow-right-s-line align-middle ms-1"></i>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Placement Offcanvas --&gt;
&lt;div class=&quot;d-flex flex-wrap gap-2&quot;&gt;
    &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasTop&quot; aria-controls=&quot;offcanvasTop&quot;&gt;Toggle Top offcanvas&lt;/button&gt;
    &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasRight&quot; aria-controls=&quot;offcanvasRight&quot;&gt;Toggle Right offcanvas&lt;/button&gt;
    &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasBottom&quot; aria-controls=&quot;offcanvasBottom&quot;&gt;Toggle Bottom offcanvas&lt;/button&gt;
    &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasLeft&quot; aria-controls=&quot;offcanvasLeft&quot;&gt;Toggle Left offcanvas&lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;!-- top offcanvas --&gt;
&lt;div class=&quot;offcanvas offcanvas-top&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasTop&quot; aria-labelledby=&quot;offcanvasTopLabel&quot;&gt;
    &lt;div class=&quot;offcanvas-header&quot;&gt;
        &lt;h5 id=&quot;offcanvasTopLabel&quot;&gt;Offcanvas Top&lt;/h5&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;offcanvas-body&quot;&gt;
        ...
    &lt;/div&gt;
&lt;/d0iv&gt;</code>

<code>&lt;!-- right offcanvas --&gt;
&lt;div class=&quot;offcanvas offcanvas-end&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasRight&quot; aria-labelledby=&quot;offcanvasRightLabel&quot;&gt;
    &lt;div class=&quot;offcanvas-header&quot;&gt;
        &lt;h5 id=&quot;offcanvasRightLabel&quot;&gt;Offcanvas Right&lt;/h5&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;offcanvas-body&quot;&gt;
        ...
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- bottom offcanvas --&gt;
&lt;div class=&quot;offcanvas offcanvas-bottom&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasBottom&quot; aria-labelledby=&quot;offcanvasBottomLabel&quot;&gt;
    &lt;div class=&quot;offcanvas-header&quot;&gt;
        &lt;h5 id=&quot;offcanvasBottomLabel&quot;&gt;Offcanvas Bottom&lt;/h5&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;offcanvas-body&quot;&gt;
        ...
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- left offcanvas --&gt;
&lt;div class=&quot;offcanvas offcanvas-start&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasLeft&quot; aria-labelledby=&quot;offcanvasLeftLabel&quot;&gt;
    &lt;div class=&quot;offcanvas-header&quot;&gt;
        &lt;h5 id=&quot;offcanvasLeftLabel&quot;&gt;Offcanvas Left&lt;/h5&gt;
        &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;offcanvas-body&quot;&gt;
        ...
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Backdrop Offcanvas</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="backdrop-showcode">Show Code</label>
                                <input id="backdrop-showcode" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Here are the example of offcanvas with scrolling active and backdrop
                            visible.</p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-2">
                                <b-button aria-controls="offcanvasScrolling" data-bs-target="#offcanvasScrolling"
                                          data-bs-toggle="offcanvas"
                                          type="button" variant="light">Enable
                                    Body
                                    Scrolling
                                </b-button>
                                <b-button aria-controls="offcanvasWithBackdrop" data-bs-target="#offcanvasWithBackdrop"
                                          data-bs-toggle="offcanvas"
                                          type="button" variant="light">
                                    Enable
                                    Backdrop (Default)
                                </b-button>
                                <b-button aria-controls="offcanvasWithBothOptions"
                                          data-bs-target="#offcanvasWithBothOptions" data-bs-toggle="offcanvas"
                                          type="button"
                                          variant="light">
                                    Enable Both Scrolling & Backdrop
                                </b-button>
                            </div>

                            <div id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel"
                                 class="offcanvas offcanvas-start"
                                 data-bs-backdrop="false" data-bs-scroll="true" tabindex="-1">
                                <div class="offcanvas-header border-bottom">
                                    <h5 id="offcanvasScrollingLabel" class="offcanvas-title">Customer Activity</h5>
                                    <button aria-label="Close" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            type="button"></button>
                                </div>
                                <div class="offcanvas-body p-0 overflow-hidden">
                                    <div data-simplebar style="height: calc(100vh - 112px);">
                                        <div class="acitivity-timeline p-4">
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-1.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Oliver Phillips
                                                        <b-badge class="text-primary align-middle"
                                                                 variant="soft-primary">New
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">We talked about a project on linkedin.
                                                    </p>
                                                    <small class="mb-0 text-muted">Today</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div
                                                        class="avatar-title bg-soft-success text-success rounded-circle">
                                                        N
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Nancy Martino
                                                        <b-badge class="text-secondary align-middle"
                                                                 variant="soft-secondary">In
                                                            Progress
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">
                                                        <i class="ri-file-text-line align-middle ms-2"></i> Create new
                                                        project Buildng product
                                                    </p>
                                                    <div class="avatar-group mb-2">
                                                        <b-link class="avatar-group-item"
                                                                data-bs-original-title="Christi"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <img alt class="rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-4.jpg"/>
                                                        </b-link>
                                                        <b-link class="avatar-group-item"
                                                                data-bs-original-title="Frank Hook"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <img alt class="rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-3.jpg"/>
                                                        </b-link>
                                                        <b-link class="avatar-group-item" data-bs-original-title=" Ruby"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <div class="avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </b-link>
                                                        <b-link class="avatar-group-item" data-bs-original-title="more"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <div class="avatar-xs">
                                                                <div class="avatar-title rounded-circle">2+</div>
                                                            </div>
                                                        </b-link>
                                                    </div>
                                                    <small class="mb-0 text-muted">Yesterday</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-2.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Natasha Carey
                                                        <b-badge class="text-success align-middle"
                                                                 variant="soft-success">Completed
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">Adding a new event with attachments</p>
                                                    <b-row class="border border-dashed gx-2 p-2 mb-2">
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-2.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-3.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-4.jpg"/>
                                                        </b-col>
                                                    </b-row>
                                                    <small class="mb-0 text-muted">25 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-6.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Bethany Johnson</h6>
                                                    <p class="text-muted mb-2">added a new member to velzon dashboard
                                                    </p>
                                                    <small class="mb-0 text-muted">19 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div
                                                            class="avatar-title rounded-circle bg-soft-danger text-danger">
                                                            <i class="ri-shopping-bag-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Your order is placed
                                                        <b-badge class="text-danger align-middle ms-1"
                                                                 variant="soft-danger">Out
                                                            of Delivery
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">These customers can rest assured their
                                                        order has been placed.</p>
                                                    <small class="mb-0 text-muted">16 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-7.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Lewis Pratt</h6>
                                                    <p class="text-muted mb-2">They all have something to say beyond the
                                                        words on the page. They can come across as casual or neutral,
                                                        exotic or graphic.</p>
                                                    <small class="mb-0 text-muted">22 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div class="avatar-title rounded-circle bg-soft-info text-info">
                                                            <i class="ri-line-chart-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Monthly sales report</h6>
                                                    <p class="text-muted mb-2">
                                                        <span class="text-danger">2 days left</span> notification to
                                                        submit the monthly sales report.
                                                        <b-link class="link-warning text-decoration-underline"
                                                                href="javascript:void(0);">Reports
                                                            Builder
                                                        </b-link>
                                                    </p>
                                                    <small class="mb-0 text-muted">15 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-8.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        New ticket received
                                                        <b-badge class="text-success align-middle"
                                                                 variant="soft-success">Completed
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">
                                                        User
                                                        <span class="text-secondary">Erica245</span> submitted a ticket.
                                                    </p>
                                                    <small class="mb-0 text-muted">26 Aug</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="offcanvas-foorter border-top p-3 text-center">
                                    <b-link class="link-success" href="javascript:void(0);">
                                        View All Acitivity
                                        <i class="ri-arrow-right-s-line align-middle ms-1"></i>
                                    </b-link>
                                </div>
                            </div>

                            <div id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel"
                                 class="offcanvas offcanvas-start"
                                 tabindex="-1">
                                <div class="offcanvas-header border-bottom">
                                    <h5 id="offcanvasWithBackdropLabel" class="offcanvas-title">Customer Activity</h5>
                                    <button aria-label="Close" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            type="button"></button>
                                </div>
                                <div class="offcanvas-body p-0 overflow-hidden">
                                    <div data-simplebar style="height: calc(100vh - 112px);">
                                        <div class="acitivity-timeline p-4">
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-1.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Oliver Phillips
                                                        <b-badge class="text-primary align-middle"
                                                                 variant="soft-primary">New
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">We talked about a project on linkedin.
                                                    </p>
                                                    <small class="mb-0 text-muted">Today</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div
                                                        class="avatar-title bg-soft-success text-success rounded-circle">
                                                        N
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Nancy Martino
                                                        <b-badge class="text-secondary align-middle"
                                                                 variant="soft-secondary">In
                                                            Progress
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">
                                                        <i class="ri-file-text-line align-middle ms-2"></i> Create new
                                                        project Buildng product
                                                    </p>
                                                    <div class="avatar-group mb-2">
                                                        <b-link class="avatar-group-item"
                                                                data-bs-original-title="Christi"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <img alt class="rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-4.jpg"/>
                                                        </b-link>
                                                        <b-link class="avatar-group-item"
                                                                data-bs-original-title="Frank Hook"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <img alt class="rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-3.jpg"/>
                                                        </b-link>
                                                        <b-link class="avatar-group-item" data-bs-original-title=" Ruby"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <div class="avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </b-link>
                                                        <b-link class="avatar-group-item" data-bs-original-title="more"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <div class="avatar-xs">
                                                                <div class="avatar-title rounded-circle">2+</div>
                                                            </div>
                                                        </b-link>
                                                    </div>
                                                    <small class="mb-0 text-muted">Yesterday</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-2.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Natasha Carey
                                                        <b-badge class="text-success align-middle"
                                                                 variant="soft-success">Completed
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">Adding a new event with attachments</p>
                                                    <b-row class="border border-dashed gx-2 p-2 mb-2">
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-2.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-3.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-4.jpg"/>
                                                        </b-col>
                                                    </b-row>
                                                    <small class="mb-0 text-muted">25 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-6.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Bethany Johnson</h6>
                                                    <p class="text-muted mb-2">added a new member to velzon dashboard
                                                    </p>
                                                    <small class="mb-0 text-muted">19 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div
                                                            class="avatar-title rounded-circle bg-soft-danger text-danger">
                                                            <i class="ri-shopping-bag-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Your order is placed
                                                        <b-badge class="text-danger align-middle ms-1"
                                                                 variant="soft-danger">Out
                                                            of Delivery
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">These customers can rest assured their
                                                        order has been placed.</p>
                                                    <small class="mb-0 text-muted">16 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-7.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Lewis Pratt</h6>
                                                    <p class="text-muted mb-2">They all have something to say beyond the
                                                        words on the page. They can come across as casual or neutral,
                                                        exotic or graphic.</p>
                                                    <small class="mb-0 text-muted">22 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div class="avatar-title rounded-circle bg-soft-info text-info">
                                                            <i class="ri-line-chart-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Monthly sales report</h6>
                                                    <p class="text-muted mb-2">
                                                        <span class="text-danger">2 days left</span> notification to
                                                        submit the monthly sales report.
                                                        <b-link class="link-warning text-decoration-underline"
                                                                href="javascript:void(0);">Reports
                                                            Builder
                                                        </b-link>
                                                    </p>
                                                    <small class="mb-0 text-muted">15 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-8.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        New ticket received
                                                        <b-badge class="text-success align-middle"
                                                                 variant="soft-success">Completed
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">
                                                        User
                                                        <span class="text-secondary">Erica245</span> submitted a ticket.
                                                    </p>
                                                    <small class="mb-0 text-muted">26 Aug</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="offcanvas-foorter border-top p-3 text-center">
                                    <b-link class="link-success" href="javascript:void(0);">
                                        View All Acitivity
                                        <i class="ri-arrow-right-s-line align-middle ms-1"></i>
                                    </b-link>
                                </div>
                            </div>

                            <div id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel"
                                 class="offcanvas offcanvas-start"
                                 data-bs-scroll="true" tabindex="-1">
                                <div class="offcanvas-header border-bottom">
                                    <h5 id="offcanvasWithBothOptionsLabel" class="offcanvas-title">Customer Activity
                                    </h5>
                                    <button aria-label="Close" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            type="button"></button>
                                </div>
                                <div class="offcanvas-body p-0 overflow-hidden">
                                    <div data-simplebar style="height: calc(100vh - 112px);">
                                        <div class="acitivity-timeline p-4">
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-1.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Oliver Phillips
                                                        <b-badge class="text-primary align-middle"
                                                                 variant="soft-primary">New
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">We talked about a project on linkedin.
                                                    </p>
                                                    <small class="mb-0 text-muted">Today</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div
                                                        class="avatar-title bg-soft-success text-success rounded-circle">
                                                        N
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Nancy Martino
                                                        <b-badge class="text-secondary align-middle"
                                                                 variant="soft-secondary">In
                                                            Progress
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">
                                                        <i class="ri-file-text-line align-middle ms-2"></i> Create new
                                                        project Buildng product
                                                    </p>
                                                    <div class="avatar-group mb-2">
                                                        <b-link class="avatar-group-item"
                                                                data-bs-original-title="Christi"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <img alt class="rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-4.jpg"/>
                                                        </b-link>
                                                        <b-link class="avatar-group-item"
                                                                data-bs-original-title="Frank Hook"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <img alt class="rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-3.jpg"/>
                                                        </b-link>
                                                        <b-link class="avatar-group-item" data-bs-original-title=" Ruby"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <div class="avatar-xs">
                                                                <div
                                                                    class="avatar-title rounded-circle bg-light text-primary">
                                                                    R
                                                                </div>
                                                            </div>
                                                        </b-link>
                                                        <b-link class="avatar-group-item" data-bs-original-title="more"
                                                                data-bs-placement="top" data-bs-toggle="tooltip"
                                                                href="javascript: void(0);"
                                                                title>
                                                            <div class="avatar-xs">
                                                                <div class="avatar-title rounded-circle">2+</div>
                                                            </div>
                                                        </b-link>
                                                    </div>
                                                    <small class="mb-0 text-muted">Yesterday</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-2.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Natasha Carey
                                                        <b-badge class="text-success align-middle"
                                                                 variant="soft-success">Completed
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">Adding a new event with attachments</p>
                                                    <b-row class="border border-dashed gx-2 p-2 mb-2">
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-2.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-3.jpg"/>
                                                        </b-col>
                                                        <b-col cols="4">
                                                            <img alt class="img-fluid rounded"
                                                                 src="@/assets/images/small/img-4.jpg"/>
                                                        </b-col>
                                                    </b-row>
                                                    <small class="mb-0 text-muted">25 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-6.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Bethany Johnson</h6>
                                                    <p class="text-muted mb-2">added a new member to velzon dashboard
                                                    </p>
                                                    <small class="mb-0 text-muted">19 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div
                                                            class="avatar-title rounded-circle bg-soft-danger text-danger">
                                                            <i class="ri-shopping-bag-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        Your order is placed
                                                        <b-badge class="text-danger align-middle ms-1"
                                                                 variant="soft-danger">Out
                                                            of Delivery
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">These customers can rest assured their
                                                        order has been placed.</p>
                                                    <small class="mb-0 text-muted">16 Nov</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-7.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Lewis Pratt</h6>
                                                    <p class="text-muted mb-2">They all have something to say beyond the
                                                        words on the page. They can come across as casual or neutral,
                                                        exotic or graphic.</p>
                                                    <small class="mb-0 text-muted">22 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item py-3 d-flex">
                                                <div class="flex-shrink-0">
                                                    <div class="avatar-xs acitivity-avatar">
                                                        <div class="avatar-title rounded-circle bg-soft-info text-info">
                                                            <i class="ri-line-chart-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">Monthly sales report</h6>
                                                    <p class="text-muted mb-2">
                                                        <span class="text-danger">2 days left</span> notification to
                                                        submit the monthly sales report.
                                                        <b-link class="link-warning text-decoration-underline"
                                                                href="javascript:void(0);">Reports
                                                            Builder
                                                        </b-link>
                                                    </p>
                                                    <small class="mb-0 text-muted">15 Oct</small>
                                                </div>
                                            </div>
                                            <div class="acitivity-item d-flex">
                                                <div class="flex-shrink-0">
                                                    <img alt class="avatar-xs rounded-circle acitivity-avatar"
                                                         src="@/assets/images/users/avatar-8.jpg"/>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-1">
                                                        New ticket received
                                                        <b-badge class="text-success align-middle"
                                                                 variant="soft-success">Completed
                                                        </b-badge>
                                                    </h6>
                                                    <p class="text-muted mb-2">
                                                        User
                                                        <span class="text-secondary">Erica245</span> submitted a ticket.
                                                    </p>
                                                    <small class="mb-0 text-muted">26 Aug</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="offcanvas-foorter border-top p-3 text-center">
                                    <b-link class="link-success" href="javascript:void(0);">
                                        View All Acitivity
                                        <i class="ri-arrow-right-s-line align-middle ms-1"></i>
                                    </b-link>
                                </div>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Backdrop Offcanvas --&gt;
&lt;div class=&quot;d-flex flex-wrap gap-2&quot;&gt;
    &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasScrolling&quot; aria-controls=&quot;offcanvasScrolling&quot;&gt;Enable body scrolling&lt;/button&gt;
    &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasWithBackdrop&quot; aria-controls=&quot;offcanvasWithBackdrop&quot;&gt;Enable backdrop (default)&lt;/button&gt;
    &lt;button class=&quot;btn btn-light&quot; type=&quot;button&quot; data-bs-toggle=&quot;offcanvas&quot; data-bs-target=&quot;#offcanvasWithBothOptions&quot; aria-controls=&quot;offcanvasWithBothOptions&quot;&gt;Enable both scrolling &amp; backdrop&lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;offcanvas offcanvas-start&quot; data-bs-scroll=&quot;true&quot; data-bs-backdrop=&quot;false&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasScrolling&quot; aria-labelledby=&quot;offcanvasScrollingLabel&quot;&gt;
    &lt;div class=&quot;offcanvas-header&quot;&gt;
      &lt;h5 class=&quot;offcanvas-title&quot; id=&quot;offcanvasScrollingLabel&quot;&gt;Colored with scrolling&lt;/h5&gt;
      &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;offcanvas-body&quot;&gt;
        ...
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;offcanvas offcanvas-start&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasWithBackdrop&quot; aria-labelledby=&quot;offcanvasWithBackdropLabel&quot;&gt;
    &lt;div class=&quot;offcanvas-header&quot;&gt;
      &lt;h5 class=&quot;offcanvas-title&quot; id=&quot;offcanvasWithBackdropLabel&quot;&gt;Offcanvas with backdrop&lt;/h5&gt;
      &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;offcanvas-body&quot;&gt;
      ...
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;offcanvas offcanvas-start&quot; data-bs-scroll=&quot;true&quot; tabindex=&quot;-1&quot; id=&quot;offcanvasWithBothOptions&quot; aria-labelledby=&quot;offcanvasWithBothOptionsLabel&quot;&gt;
    &lt;div class=&quot;offcanvas-header&quot;&gt;
      &lt;h5 class=&quot;offcanvas-title&quot; id=&quot;offcanvasWithBothOptionsLabel&quot;&gt;Backdroped with scrolling&lt;/h5&gt;
      &lt;button type=&quot;button&quot; class=&quot;btn-close text-reset&quot; data-bs-dismiss=&quot;offcanvas&quot; aria-label=&quot;Close&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
    &lt;div class=&quot;offcanvas-body&quot;&gt;
        ...
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
