<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";

import "prismjs";
import "prismjs/themes/prism.css";

export default {
    data() {
        return {
            coloractive: true,
            connect: true,
            yes: true,
            colorfollow: true,
            coloron: true,
            colorbookmark: true,
            bookmark: true,
            onoffsecond: true,
            followsecond: true,
            onoff: true,
            follow: true,
            active: true,

            title: "Buttons",
            items: [{
                text: "Base UI",
                href: "/",
            },
                {
                    text: "Buttons",
                    active: true,
                },
            ],
            buttons: [{
                caption: 'Checkbox 1',
                state: true
            },
                {
                    caption: 'Checkbox 2',
                    state: false
                },
                {
                    caption: 'Checkbox 3',
                    state: false
                },
            ]
        };
    },
    name: "Buttons",
    components: {
        Layout,
        PageHeader,
    },
    methods: {
        changecoloractive() {

            this.coloractive = !this.coloractive;
        },
        changeconnect() {
            this.connect = !this.connect;
        },
        changeyes() {
            this.yes = !this.yes;
        },
        changecolorfollow() {
            this.colorfollow = !this.colorfollow;
        },
        changecoloron() {
            this.coloron = !this.coloron;
        },
        changecolorbookmark() {
            this.colorbookmark = !this.colorbookmark;
        },
        changebookmark() {
            this.bookmark = !this.bookmark;
        },
        changeonoffsecond() {
            this.onoffsecond = !this.onoffsecond;
        },
        changeonoff() {
            this.onoff = !this.onoff;
        },
        changefollow() {
            this.follow = !this.follow;
        },
        changefollowsecond() {
            this.followsecond = !this.followsecond;
        },
        changeactive() {
            this.active = !this.active;
        },
    },
    mounted() {
        const checkbox = document.getElementsByClassName("code-switcher");
        Array.from(checkbox).forEach((check) => {
            check.addEventListener("change", () => {
                const card = check.closest(".card");
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
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Default Buttons</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="default">Show Code</label>
                                <input id="default" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use the
                            <code>b-button</code> to show the default button style.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-2">
                                <b-button class="waves-effect waves-light" variant="primary">Primary</b-button>

                                <b-button class="dary waves-effect waves-light" variant="secondary">
                                    Secondary
                                </b-button>
                                <b-button class="ss waves-effect waves-light" variant="success">
                                    Success
                                </b-button>
                                <b-button class="waves-effect waves-light" variant="info">
                                    Info
                                </b-button>
                                <b-button class="ng waves-effect waves-light" variant="warning">
                                    Warning
                                </b-button>
                                <b-button class="r waves-effect waves-light" variant="danger">
                                    Danger
                                </b-button>
                                <b-button class="waves-effect waves-light" variant="dark">
                                    Dark
                                </b-button>
                                <b-button class="waves-effect" variant="link"> Link</b-button>
                                <b-button class="waves-effect" variant="light">
                                    Light
                                </b-button>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px"><code>&lt;!-- Base Buttons --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;btn btn-primary waves-effect waves-light&quot;&gt;Primary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;secondary&quot; class=&quot;waves-effect waves-light&quot;&gt;Secondary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; class=&quot;waves-effect waves-light&quot;&gt;Success&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;info&quot; class=&quot;waves-effect waves-light&quot;&gt;Info&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;warning&quot; class=&quot;waves-effect waves-light&quot;&gt;Warning&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;danger&quot; class=&quot;waves-effect waves-light&quot;&gt;Danger&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;dark&quot; class=&quot;waves-effect waves-light&quot;&gt;Dark&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;light&quot; class=&quot;waves-effect&quot;&gt;Light&lt;/b-button&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Outline Buttons</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="outline-button">Show Code</label>
                                <input id="outline-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>b-button variant="outline-</code> with the below-mentioned
                            variation to create a button with the outline.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-2">
                                <b-button class="waves-effect waves-light" variant="outline-primary">
                                    Primary
                                </b-button>
                                <b-button class="waves-effect waves-light" variant="outline-secondary">
                                    Secondary
                                </b-button>
                                <b-button class="waves-effect waves-light" variant="outline-success">
                                    Success
                                </b-button>
                                <b-button class="waves-effect waves-light" variant="outline-info">
                                    Info
                                </b-button>
                                <b-button class="waves-effect waves-light" variant="outline-warning">
                                    Warning
                                </b-button>
                                <b-button class="waves-effect waves-light" variant="outline-danger">
                                    Danger
                                </b-button>
                                <b-button class="waves-effect waves-light" variant="outline-dark">
                                    Dark
                                </b-button>
                                <b-button class="waves-effect" variant="outline-light">
                                    Light
                                </b-button>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup"
                   style="height: 275px"><code>&lt;!-- Outline Buttons --&gt;
&lt;b-button variant=&quot;outline-primary&quot; class=&quot;waves-effect waves-light&quot;&gt;Primary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-secondary&quot; class=&quot;waves-effect waves-light&quot;&gt;Secondary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-success&quot; class=&quot;waves-effect waves-light&quot;&gt;Success&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-info&quot; class=&quot; waves-effect waves-light&quot;&gt;Info&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-warning&quot; class=&quot;waves-effect waves-light&quot;&gt;Warning&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-danger&quot; class=&quot;waves-effect waves-light&quot;&gt;Danger&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-dark&quot; class=&quot;waves-effect waves-light&quot;&gt;Dark&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-light&quot; class=&quot;waves-effect&quot;&gt;Light&lt;/b-button&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Rounded Buttons</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="rounded-button">Show Code</label>
                                <input id="rounded-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use the
                            <code>pill</code> to make a rounded button.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-2">
                                <b-button class="waves-effect waves-light" pill variant="primary">
                                    Primary
                                </b-button>
                                <b-button class="waves-effect" pill variant="secondary">
                                    Secondary
                                </b-button>
                                <b-button class="waves-effect waves-light" pill variant="success">
                                    Success
                                </b-button>
                                <b-button class="waves-effect waves-light" pill variant="info">
                                    Info
                                </b-button>
                                <b-button class="waves-effect waves-light" pill variant="warning">
                                    Warning
                                </b-button>
                                <b-button class="waves-effect waves-light" pill variant="danger">
                                    Danger
                                </b-button>
                                <b-button class="waves-effect waves-light" pill variant="dark">
                                    Dark
                                </b-button>
                                <b-button class="waves-effect" pill variant="light">
                                    Light
                                </b-button>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px"><code>&lt;!-- Rounded Buttons --&gt;
&lt;b-button pill variant=&quot;primary&quot; class=&quot;waves-effect waves-light&quot;&gt;Primary&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;secondary&quot; class=&quot;waves-effect waves-light&quot;&gt;Secondary&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;success&quot; class=&quot;waves-effect waves-light&quot;&gt;Success&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;info&quot; class=&quot;waves-effect waves-light&quot;&gt;Info&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;warning&quot; class=&quot;waves-effect waves-light&quot;&gt;Warning&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;danger&quot; class=&quot;waves-effect waves-light&quot;&gt;Danger&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;dark&quot; class=&quot;waves-effect waves-light&quot;&gt;Dark&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;light&quot; class=&quot;waves-effect&quot;&gt;Light&lt;/b-button&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Soft Buttons</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="soft-button">Show Code</label>
                                <input id="soft-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>btn-soft-</code> class with the below-mentioned variation to
                            create a button with the soft background.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-2">
                                <b-button class="btn btn-soft-primary waves-effect waves-light">
                                    Primary
                                </b-button>
                                <b-button class="btn btn-soft-secondary waves-effect waves-light">
                                    Secondary
                                </b-button>
                                <b-button class="btn btn-soft-success waves-effect waves-light">
                                    Success
                                </b-button>
                                <b-button class="btn btn-soft-info waves-effect waves-light">
                                    Info
                                </b-button>
                                <b-button class="btn btn-soft-warning waves-effect waves-light">
                                    Warning
                                </b-button>
                                <b-button class="btn btn-soft-danger waves-effect waves-light">
                                    Danger
                                </b-button>
                                <b-button class="btn btn-soft-dark waves-effect waves-light">
                                    Dark
                                </b-button>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px"><code>&lt;!-- Soft Buttons --&gt;
&lt;b-button class=&quot;btn-soft-primary waves-effect waves-light&quot;&gt;Primary&lt;/b-button&gt;</code>

<code>&lt;b-button class=&quot;btn-soft-secondary waves-effect&quot;&gt;secondary&lt;/b-button&gt;</code>

<code>&lt;b-button class=&quot;btn-soft-success waves-effect waves-light&quot;&gt;Success&lt;/b-button&gt;</code>

<code>&lt;b-button class=&quot;btn-soft-info waves-effect waves-light&quot;&gt;Info&lt;/b-button&gt;</code>

<code>&lt;b-button class=&quot;btn-soft-warning waves-effect waves-light&quot;&gt;Warning&lt;/b-button&gt;</code>

<code>&lt;b-button class=&quot;btn-soft-danger waves-effect waves-light&quot;&gt;Danger&lt;/b-button&gt;</code>

<code>&lt;b-button class=&quot;btn-soft-dark waves-effect waves-light&quot;&gt;Dark&lt;/b-button&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Gradient Buttons</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="gradient-button">Show Code</label>
                                <input id="gradient-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>bg-gradient</code>class to create a gradient button.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-2">
                                <b-button class="bg-gradient waves-effect waves-light" variant="primary">
                                    Primary
                                </b-button>
                                <b-button class="bg-gradient waves-effect waves-light" variant="secondary">
                                    Secondary
                                </b-button>
                                <b-button class="bg-gradient waves-effect waves-light" variant="success">
                                    Success
                                </b-button>
                                <b-button class="bg-gradient waves-effect waves-light" variant="info">
                                    Info
                                </b-button>
                                <b-button class="bg-gradient waves-effect waves-light" variant="warning">
                                    Warning
                                </b-button>
                                <b-button class="bg-gradient waves-effect waves-light" variant="danger">
                                    Danger
                                </b-button>
                                <b-button class="bg-gradient waves-effect waves-light" variant="dark">
                                    Dark
                                </b-button>
                                <b-button class="bg-gradient waves-effect waves-light" variant="light">
                                    Light
                                </b-button>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre
                  class="language-markup"><code>&lt;!-- Gradient Buttons --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Primary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;secondary&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Secondary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Success&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;info&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Info&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;warning&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Warning&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;danger&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Danger&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;dark&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Dark&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;light&quot; class=&quot;bg-gradient waves-effect waves-light&quot;&gt;Light&lt;/b-button&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Animation Buttons</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="animation-button">Show Code</label>
                                <input id="animation-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>bg-animation</code>class to create an animated button.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-2">
                                <b-button class="btn-animation waves-effect waves-light" data-text="Primary"
                                          variant="primary">
                                    <span>Primary</span>
                                </b-button>
                                <b-button class="btn-animation waves-effect waves-light" data-text="Secondary"
                                          variant="secondary">
                                    <span>Secondary</span>
                                </b-button>
                                <b-button class="btn-animation waves-effect waves-light" data-text="Success"
                                          variant="success">
                                    <span>Success</span>
                                </b-button>
                                <b-button class="btn-animation waves-effect waves-light" data-text="Info"
                                          variant="info">
                                    <span>Info</span>
                                </b-button>
                                <b-button class="btn-animation waves-effect waves-light" data-text="Warning"
                                          variant="warning">
                                    <span>Warning</span>
                                </b-button>
                                <b-button class="btn-animation waves-effect waves-light" data-text="Danger"
                                          variant="danger">
                                    <span>Danger</span>
                                </b-button>
                                <b-button class="btn-animation waves-effect waves-light" data-text="Dark"
                                          variant="dark">
                                    <span>Dark</span>
                                </b-button>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre
                  class="language-markup"><code>&lt;!-- Animation Buttons --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Primary&quot;&gt;&lt;span&gt;Primary&lt;/span&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;secondary&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Secondary&quot;&gt;&lt;span&gt;Secondary&lt;/span&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Success&quot;&gt;&lt;span&gt;Success&lt;/span&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;info&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Info&quot;&gt;&lt;span&gt;Info&lt;/span&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;warning&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Warning&quot;&gt;&lt;span&gt;Warning&lt;/span&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;danger&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Danger&quot;&gt;&lt;span&gt;Danger&lt;/span&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;dark&quot; class=&quot;btn-animation waves-effect waves-light&quot; data-text=&quot;Dark&quot;&gt;&lt;span&gt;Dark&lt;/span&gt;&lt;/b-button&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Buttons with Label</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="label-button">Show Code</label>
                                <input id="label-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>btn-label</code>class to create a button with the label.
                        </p>
                        <div class="live-preview">
                            <b-row>
                                <b-col lg="4">
                                    <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                        <b-link class="btn btn-primary btn-label" href="javascript:void(0);">
                                            <div class="d-flex">
                                                <div class="flex-shrink-0">
                                                    <i class="ri-user-smile-line label-icon align-middle fs-16 me-2"></i>
                                                </div>
                                                <div class="flex-grow-1">Primary</div>
                                            </div>
                                        </b-link>
                                        <b-button class="btn-label" variant="success">
                                            <i class="ri-check-double-line label-icon align-middle fs-16 me-2"></i>
                                            Success
                                        </b-button>
                                        <b-button class="btn-label" variant="warning">
                                            <i class="ri-error-warning-line label-icon align-middle fs-16 me-2"></i>
                                            Warning
                                        </b-button>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                        <b-button class="btn-label" pill variant="primary">
                                            <i class="ri-user-smile-line label-icon align-middle rounded-pill fs-16 me-2"></i>
                                            Primary
                                        </b-button>
                                        <b-button class="btn-label" pill variant="success">
                                            <i class="ri-check-double-line label-icon align-middle rounded-pill fs-16 me-2"></i>
                                            Success
                                        </b-button>
                                        <b-button class="btn-label" pill variant="warning">
                                            <i class="ri-error-warning-line label-icon align-middle rounded-pill fs-16 me-2"></i>
                                            Warning
                                        </b-button>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="d-flex flex-wrap gap-2">
                                        <b-button class="btn-label right" variant="primary">
                                            <i class="ri-user-smile-line label-icon align-middle fs-16 ms-2"></i>
                                            Primary
                                        </b-button>
                                        <b-button class="btn-label right" pill variant="success">
                                            <i class="ri-check-double-line label-icon align-middle rounded-pill fs-16 ms-2"></i>
                                            Success
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup"
                   style="height: 275px"><code>&lt;!-- Buttons with Label --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle fs-16 me-2&quot;&gt;&lt;/i&gt; Primary&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle fs-16 me-2&quot;&gt;&lt;/i&gt; Success&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;warning&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-error-warning-line label-icon align-middle fs-16 me-2&quot;&gt;&lt;/i&gt; Warning&lt;/b-button&gt;</code>

<code>&lt;!-- Rounded with Label --&gt;
&lt;b-button pill variant=&quot;primary&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle rounded-pill fs-16 me-2&quot;&gt;&lt;/i&gt; Primary&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;success&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle rounded-pill fs-16 me-2&quot;&gt;&lt;/i&gt; Success&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;warning&quot; class=&quot;btn-label waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-error-warning-line label-icon align-middle rounded-pill fs-16 me-2&quot;&gt;&lt;/i&gt; Warning&lt;/b-button&gt;</code>

<code>&lt;!-- Buttons with Label Right --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;btn-label waves-effect right waves-light&quot;&gt;&lt;i class=&quot;ri-user-smile-line label-icon align-middle fs-16 ms-2&quot;&gt;&lt;/i&gt; Primary&lt;/b-button&gt;</code>

<code>&lt;b-button pill variant=&quot;success&quot; class=&quot;btn-label waves-effect right waves-light&quot;&gt;&lt;i class=&quot;ri-check-double-line label-icon align-middle rounded-pill fs-16 ms-2&quot;&gt;&lt;/i&gt; Success&lt;/b-button&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Load More Buttons</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="load-button">Show Code</label>
                                <input id="load-button" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Example of loading buttons.</p>
                        <div class="live-preview">
                            <b-row>
                                <b-col lg="6">
                                    <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                        <b-button class="btn-load" variant="outline-primary">
                      <span class="d-flex align-items-center">
                        <span class="spinner-border flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                        <span class="flex-grow-1 ms-2">
                          Loading...
                        </span>
                      </span>
                                        </b-button>
                                        <b-button class="btn-load" type="button" variant="success">
                      <span class="d-flex align-items-center">
                        <span class="spinner-border flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                        <span class="flex-grow-1 ms-2">
                          Loading...
                        </span>
                      </span>
                                        </b-button>
                                        <b-button class="btn-load" type="button" variant="outline-secondary">
                      <span class="d-flex align-items-center">
                        <span class="spinner-grow flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                        <span class="flex-grow-1 ms-2">
                          Loading...
                        </span>
                      </span>
                                        </b-button>
                                        <b-button class="btn-load" type="button" variant="danger">
                      <span class="d-flex align-items-center">
                        <span class="spinner-grow flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                        <span class="flex-grow-1 ms-2">
                          Loading...
                        </span>
                      </span>
                                        </b-button>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="d-flex flex-wrap gap-2 mb-3 mb-lg-0">
                                        <b-button class="btn-load" variant="outline-primary">
                      <span class="d-flex align-items-center">
                        <span class="flex-grow-1 me-2">
                          Loading...
                        </span>
                        <span class="spinner-border flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                      </span>
                                        </b-button>
                                        <b-button class="btn-load" type="button" variant="success">
                      <span class="d-flex align-items-center">
                        <span class="flex-grow-1 me-2">
                          Loading...
                        </span>
                        <span class="spinner-border flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                      </span>
                                        </b-button>
                                        <b-button class="btn-load" type="button" variant="outline-warning">
                      <span class="d-flex align-items-center">
                        <span class="flex-grow-1 me-2">
                          Loading...
                        </span>
                        <span class="spinner-grow flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                      </span>
                                        </b-button>
                                        <b-button class="btn-load" type="button" variant="info">
                      <span class="d-flex align-items-center">
                        <span class="flex-grow-1 me-2">
                          Loading...
                        </span>
                        <span class="spinner-grow flex-shrink-0" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </span>
                      </span>
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Load More Buttons --&gt;
&lt;div class=&quot;hstack flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
&lt;button class=&quot;btn btn-outline-primary btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;span class=&quot;flex-grow-1 ms-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
&lt;button class=&quot;btn btn-outline-primary btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;span class=&quot;spinner-border flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-warning btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info btn-load&quot;&gt;
&lt;span class=&quot;d-flex align-items-center&quot;&gt;
&lt;span class=&quot;flex-grow-1 me-2&quot;&gt;
Loading...
&lt;/span&gt;
&lt;span class=&quot;spinner-grow flex-shrink-0&quot; role=&quot;status&quot;&gt;
&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;
&lt;/span&gt;
&lt;/span&gt;
&lt;/button&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Border Buttons</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="border-button">Show Code</label>
                                <input id="border-button" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Example of simple bottom borderd buttons.</p>
                        <div class="live-preview">
                            <b-row>
                                <b-col lg="6">
                                    <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                        <b-button class="btn-border" variant="primary">Primary</b-button>
                                        <b-button class="btn-border" variant="secondary">Secondary</b-button>
                                        <b-button class="btn-border" variant="success">Success</b-button>
                                        <b-button class="btn-border" variant="warning">Warning</b-button>
                                        <b-button class="btn-border" variant="danger">Danger</b-button>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="hstack flex-wrap gap-2 mb-3 mb-lg-0">
                                        <b-button class="btn-border" variant="outline-primary">Primary</b-button>
                                        <b-button class="btn-border" variant="outline-secondary">Secondary</b-button>
                                        <b-button class="btn-border" variant="outline-success">Success</b-button>
                                        <b-button class="btn-border" variant="soft-warning">Warning</b-button>
                                        <b-button class="btn-border" variant="soft-danger">Danger</b-button>
                                        <b-button class="btn-border" variant="soft-dark">Dark</b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Border Buttons --&gt;
&lt;div class=&quot;hstack flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
&lt;button class=&quot;btn btn-primary btn-border&quot;&gt;Primary&lt;/button&gt;
&lt;button class=&quot;btn btn-secondary btn-border&quot;&gt;Secondary&lt;/button&gt;
&lt;button class=&quot;btn btn-success btn-border&quot;&gt;Success&lt;/button&gt;
&lt;button class=&quot;btn btn-warning btn-border&quot;&gt;Warning&lt;/button&gt;
&lt;button class=&quot;btn btn-danger btn-border&quot;&gt;Danger&lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;hstack flex-wrap gap-2 mb-3 mb-lg-0&quot;&gt;
&lt;button class=&quot;btn btn-outline-primary btn-border&quot;&gt;Primary&lt;/button&gt;
&lt;button class=&quot;btn btn-outline-secondary btn-border&quot;&gt;Secondary&lt;/button&gt;
&lt;button class=&quot;btn btn-outline-success btn-border&quot;&gt;Success&lt;/button&gt;
&lt;button class=&quot;btn btn-soft-warning btn-border&quot;&gt;Warning&lt;/button&gt;
&lt;button class=&quot;btn btn-soft-danger btn-border&quot;&gt;Danger&lt;/button&gt;
&lt;button class=&quot;btn btn-soft-dark btn-border&quot;&gt;Dark&lt;/button&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Custom Toggle Buttons</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="custom-toggle-button">Show Code</label>
                                <input id="custom-toggle-button" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Example of toggle buttons.</p>
                        <div class="live-preview">
                            <b-row>
                                <b-col lg="6">
                                    <div class="d-flex flex-wrap align-items-center gap-2">
                                        <b-button class="custom-toggle" data-bs-toggle="button" type="button"
                                                  variant="primary"
                                                  @click="changecoloractive">
                                            <span v-if="coloractive" class="icon-on"><i
                                                class="ri-alarm-line align-bottom"></i>Active</span>
                                            <span v-if="!coloractive" class="icon-off">Unactive</span>
                                        </b-button>
                                        <b-button class="custom-toggle" data-bs-toggle="button" type="button"
                                                  variant="secondary"
                                                  @click="changeconnect">
                      <span v-if="connect" class="icon-on"><i class="ri-user-add-line align-bottom me-1"></i>
                        Connect</span>
                                            <span v-if="!connect" class="icon-off"><i
                                                class="ri-check-fill align-bottom me-1"></i>
                        Unconnect</span>
                                        </b-button>
                                        <b-button class="custom-toggle" data-bs-toggle="button" type="button"
                                                  variant="success"
                                                  @click="changeyes">
                                            <span v-if="yes" class="icon-on"><i
                                                class="ri-thumb-up-line align-bottom me-1"></i> Yes</span>
                                            <span v-if="!yes" class="icon-off"><i
                                                class="ri-thumb-down-line align-bottom me-1"></i> No</span>
                                        </b-button>
                                        <b-button class="custom-toggle" data-bs-toggle="button" type="button"
                                                  variant="warning"
                                                  @click="changecolorfollow">
                      <span v-if="colorfollow" class="icon-on"><i class="ri-add-line align-bottom me-1"></i>
                        Follow</span>
                                            <span v-if="!colorfollow" class="icon-off"><i
                                                class="ri-user-unfollow-line align-bottom me-1"></i>
                        Unfollow</span>
                                        </b-button>
                                        <b-button class="custom-toggle" data-bs-toggle="button" type="button"
                                                  variant="danger"
                                                  @click="changecoloron">
                                            <span v-if="coloron" class="icon-on">On</span>
                                            <span v-if="!coloron" class="icon-off">Off</span>
                                        </b-button>
                                        <b-button class="custom-toggle" data-bs-toggle="button" type="button"
                                                  variant="dark"
                                                  @click="changecolorbookmark">
                      <span v-if="colorbookmark" class="icon-on"><i class="ri-bookmark-line align-bottom me-1"></i>
                        Bookmark</span>
                                            <span v-if="!colorbookmark" class="icon-off"><i
                                                class="ri-bookmark-3-fill align-bottom me-1"></i>
                        Unbookmark</span>
                                        </b-button>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="d-flex flex-wrap align-items-center gap-2">
                                        <b-button class="custom-toggle" data-bs-toggle="button" type="button"
                                                  variant="outline-primary"
                                                  @click="changeactive">
                                            <span v-if="active" class="icon-on">Active</span>
                                            <span v-if="!active" class="icon-off">Unactive</span>
                                        </b-button>
                                        <b-button class="custom-toggle" data-bs-toggle="button" type="button"
                                                  variant="outline-secondary"
                                                  @click="changefollow">
                                            <span v-if="follow" class="icon-on"><i
                                                class="ri-add-line align-bottom me-1"></i> Follow</span>
                                            <span v-if="!follow" class="icon-off"><i
                                                class="ri-user-unfollow-line align-bottom me-1"></i>
                        Unfollow</span>
                                        </b-button>
                                        <b-button class="custom-toggle" data-bs-toggle="button" type="button"
                                                  variant="outline-success"
                                                  @click="changeonoff">
                                            <span v-if="onoff" class="icon-on">On</span>
                                            <span v-if="!onoff" class="icon-off">Off</span>
                                        </b-button>
                                        <b-button class="custom-toggle" data-bs-toggle="button" type="button"
                                                  variant="soft-warning"
                                                  @click="changefollowsecond">
                                            <span v-if="followsecond" class="icon-on">Follow</span>
                                            <span v-if="!followsecond" class="icon-off">Unfollow</span>
                                        </b-button>
                                        <b-button class="custom-toggle" data-bs-toggle="button" type="button"
                                                  variant="soft-danger"
                                                  @click="changeonoffsecond">
                                            <span v-if="onoffsecond" class="icon-on">On</span>
                                            <span v-if="!onoffsecond" class="icon-off">Off</span>
                                        </b-button>
                                        <b-button class="custom-toggle" data-bs-toggle="button" type="button"
                                                  variant="dark"
                                                  @click="changebookmark">
                                            <span v-if="bookmark" class="icon-on"><i
                                                class="ri-bookmark-line align-bottom"></i></span>
                                            <span v-if="!bookmark" class="icon-off"><i
                                                class="ri-bookmark-3-fill align-bottom"></i></span>
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Custom Toggle Buttons --&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-alarm-line align-bottom&quot;&gt;&lt;/i&gt; Active&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;Unactive&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-user-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Connect&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-check-fill align-bottom me-1&quot;&gt;&lt;/i&gt; Unconnect&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-success custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-thumb-up-line align-bottom me-1&quot;&gt;&lt;/i&gt; Yes&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-thumb-down-line align-bottom me-1&quot;&gt;&lt;/i&gt; No&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-warning custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Follow&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-user-unfollow-line align-bottom me-1&quot;&gt;&lt;/i&gt; Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-danger custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-dark custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-bookmark-line align-bottom me-1&quot;&gt;&lt;/i&gt; Bookmark&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-bookmark-3-fill align-bottom me-1&quot;&gt;&lt;/i&gt; Unbookmark&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-primary custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;Active&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;Unactive&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-secondary custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-add-line align-bottom me-1&quot;&gt;&lt;/i&gt; Follow&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-user-unfollow-line align-bottom me-1&quot;&gt;&lt;/i&gt; Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-outline-success custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-soft-warning custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;Follow&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;Unfollow&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-soft-danger custom-toggle&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;On&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;Off&lt;/span&gt;
&lt;/button&gt;</code>

<code>&lt;button type=&quot;button&quot; class=&quot;btn btn-dark custom-toggle active&quot; data-bs-toggle=&quot;button&quot;&gt;
    &lt;span class=&quot;icon-on&quot;&gt;&lt;i class=&quot;ri-bookmark-line align-bottom&quot;&gt;&lt;/i&gt;&lt;/span&gt;
    &lt;span class=&quot;icon-off&quot;&gt;&lt;i class=&quot;ri-bookmark-3-fill align-bottom&quot;&gt;&lt;/i&gt;&lt;/span&gt;
&lt;/button&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Buttons Sizes</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="size-button">Show Code</label>
                                <input id="size-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>size="lg"</code> to create a large size button and
                            <code>size="sm"</code> to create a small size button.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap align-items-center gap-2">
                                <b-button size="lg" variant="primary">
                                    Large button
                                </b-button>
                                <b-button size="lg" variant="light"> Large button</b-button>

                                <b-button size="sm" variant="primary">
                                    Small button
                                </b-button>
                                <b-button size="sm" variant="light"> Small button</b-button>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Large Button --&gt;
&lt;b-button variant=&quot;primary&quot; size=&quot;lg&quot;&gt;Large button&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;light&quot; size=&quot;lg&quot;&gt;Large button&lt;/b-button&gt;</code>

<code>&lt;!-- Small Button --&gt;
&lt;b-button variant=&quot;primary&quot; size=&quot;sm&quot;&gt;Small button&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;light&quot; size=&quot;sm&quot;&gt;Small button&lt;/b-button&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Buttons Width</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="width-button">Show Code</label>
                                <input id="width-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>w-xs,w-sm,w-md,w-lg</code> class to make different sized
                            buttons respectively.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-2">
                                <b-button class="w-xs waves-effect waves-light" variant="primary">
                                    Xs
                                </b-button>
                                <b-button class="w-sm waves-effect waves-light" variant="danger">
                                    Small
                                </b-button>
                                <b-button class="w-md waves-effect waves-light" variant="warning">
                                    Medium
                                </b-button>
                                <b-button class="w-lg waves-effect waves-light" variant="success">
                                    Large
                                </b-button>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Width Button --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;w-xs waves-effect waves-light&quot;&gt;Xs&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;danger&quot; class=&quot;w-sm waves-effect waves-light&quot;&gt;Small&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;warning&quot; class=&quot;w-md waves-effect waves-light&quot;&gt;Medium&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; class=&quot;w-lg waves-effect waves-light&quot;&gt;Large&lt;/b-button&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Buttons Tag</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="tag-button">Show Code</label>
                                <input id="tag-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>b-button</code> with different HTML elements. (though some
                            browsers may apply a slightly different rendering)
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-2">
                                <b-link class="btn btn-primary waves-effect waves-light" href="#" role="button">Link
                                </b-link>
                                <b-button type="submit" variant="success">
                                    Button
                                </b-button>
                                <input class="btn btn-info" type="button" value="Input"/>
                                <input class="btn btn-danger" type="submit" value="Submit"/>
                                <input class="btn btn-warning" type="reset" value="Reset"/>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup"><code>&lt;!-- Tag Button --&gt;
&lt;a class=&quot;btn btn-primary waves-effect waves-light&quot; href=&quot;#&quot; role=&quot;button&quot;&gt;Link&lt;/a&gt;</code>

<code>&lt;b-button variant=&quot;success&quot; class=&quot;waves-effect waves-light&quot; type=&quot;submit&quot;&gt;Button&lt;/b-button&gt;</code>

<code>&lt;input class=&quot;btn btn-info&quot; type=&quot;button&quot; value=&quot;Input&quot;&gt;</code>

<code>&lt;input class=&quot;btn btn-danger&quot; type=&quot;submit&quot; value=&quot;Submit&quot;&gt;</code>

<code>&lt;input class=&quot;btn btn-warning&quot; type=&quot;reset&quot; value=&quot;Reset&quot;&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Buttons Toggle Status</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="toggle-button">Show Code</label>
                                <input id="toggle-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>data-bs-toggle="button"</code> to toggle a button’s active
                            state.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-2">
                                <b-button aria-pressed="false" class="waves-effect waves-light" data-bs-toggle="button"
                                          variant="primary">
                                    Single toggle
                                </b-button>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Toggle Button Status --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;waves-effect waves-light&quot; data-bs-toggle=&quot;button&quot; aria-pressed=&quot;false&quot;&gt;
Single toggle
&lt;/b-button&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Buttons Grid</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="grid-button">Show Code</label>
                                <input id="grid-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>block</code> class to create a full-width block button.
                        </p>
                        <div class="live-preview">
                            <div class="d-grid gap-2">
                                <b-button block variant="primary">Button</b-button>
                                <b-button block variant="primary">Button</b-button>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Buttons Grid --&gt;
&lt;div class=&quot;d-grid gap-2&quot; &gt;
&lt;b-button variant=&quot;primary&quot;&gt;Button&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Button&lt;/b-button&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Checkbox & Radio Buttons</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="checkbox-button">Show Code</label>
                                <input id="checkbox-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Combine button-like
                            <code>checkbox and radio</code>
                            <b-link href="https://getbootstrap.com/docs/5.1/forms/checks-radios/">toggle buttons
                            </b-link>
                            into a seamless looking button group.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap align-items-center gap-2">
                                <b-button-group>
                                    <b-button v-for="(btn, idx) in buttons" :key="idx" v-model:pressed="btn.state"
                                              variant="primary">
                                        {{ btn.caption }}
                                    </b-button>
                                </b-button-group>


                                <b-btn-group class="btn-group">
                                    <input id="btnradio1" checked class="btn-check" name="btnradio" type="radio"/>
                                    <label class="btn btn-outline-secondary mb-0" for="btnradio1">Radio 1</label>

                                    <input id="btnradio2" class="btn-check" name="btnradio" type="radio"/>
                                    <label class="btn btn-outline-secondary mb-0" for="btnradio2">Radio 2</label>

                                    <input id="btnradio3" class="btn-check" name="btnradio" type="radio"/>
                                    <label class="btn btn-outline-secondary mb-0" for="btnradio3">Radio 3</label>
                                </b-btn-group>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Checkbox Buttons --&gt;
&lt;b-button-group role=&quot;group&quot; aria-label=&quot;Basic checkbox toggle button group&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck1&quot; autocomplete=&quot;off&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck1&quot;&gt;Checkbox 1&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck2&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck2&quot;&gt;Checkbox 2&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btncheck3&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-primary&quot; for=&quot;btncheck3&quot;&gt;Checkbox 3&lt;/label&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;!-- Radio Buttons --&gt;
&lt;b-button-group role=&quot;group&quot; aria-label=&quot;Basic radio toggle button group&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio1&quot; autocomplete=&quot;off&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio1&quot;&gt;Radio 1&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio2&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio2&quot;&gt;Radio 2&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;btnradio&quot; id=&quot;btnradio3&quot; autocomplete=&quot;off&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btnradio3&quot;&gt;Radio 3&lt;/label&gt;
&lt;/b-button-group&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Buttons Group</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="group-button">Show Code</label>
                                <input id="group-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use the
                            <code>-button-group</code> in the parent class to wrap a series
                            of buttons.
                        </p>
                        <div class="live-preview">
                            <b-row>
                                <b-col sm="6">

                                    <b-button-group>
                                        <b-button variant="primary">Left</b-button>
                                        <b-button variant="primary">
                                            Middle
                                        </b-button>
                                        <b-button variant="primary">Right</b-button>
                                    </b-button-group>
                                </b-col>
                                <b-col sm="6">
                                    <b-button-group class="mt-4 mt-sm-0">

                                        <b-button class="btn-icon" variant="light">
                                            <i class="ri-align-right"></i>
                                        </b-button>
                                        <b-button class="btn-icon" variant="light">
                                            <i class="ri-align-center"></i>
                                        </b-button>
                                        <b-button class="btn-icon" variant="light">
                                            <i class="ri-align-left"></i>
                                        </b-button>
                                    </b-button-group>


                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Buttons Group --&gt;
&lt;b-button-group role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Left&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Middle&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group class=&quot;mt-4 mt-md-0&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;b-button variant=&quot;light&quot; &gt;&lt;i class=&quot;ri-align-right&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot; &gt;&lt;i class=&quot;ri-align-center&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot; &gt;&lt;i class=&quot;ri-align-left&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;
&lt;/b-button-group&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Icon Buttons</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="icon-button">Show Code</label>
                                <input id="icon-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>btn-icon</code> class to wrap icon in button
                        </p>
                        <div class="live-preview">
                            <b-row>
                                <b-col sm="6">
                                    <div class="hstack gap-2">
                                        <b-button class="btn-icon waves-effect waves-light" variant="primary">
                                            <i class="ri-map-pin-line"></i>
                                        </b-button>
                                        <b-button class="btn-icon waves-effect waves-light" variant="danger">
                                            <i class="ri-delete-bin-5-line"></i>
                                        </b-button>
                                        <b-button class="btn-icon waves-effect waves-light" variant="success">
                                            <i class="ri-check-double-line"></i>
                                        </b-button>
                                        <b-button class="btn-icon waves-effect" variant="light">
                                            <i class="ri-brush-2-fill"></i>
                                        </b-button>
                                    </div>
                                </b-col>
                                <b-col sm="6">
                                    <div class="hstack gap-2 mt-4 mt-sm-0">
                                        <b-button class="btn-icon waves-effect waves-light" variant="outline-primary">
                                            <i class="ri-24-hours-fill"></i>
                                        </b-button>
                                        <b-button class="btn-icon waves-effect waves-light" variant="outline-danger">
                                            <i class="ri-customer-service-2-line"></i>
                                        </b-button>
                                        <b-button class="btn-icon waves-effect waves-light" variant="outline-success">
                                            <i class="ri-mail-send-line"></i>
                                        </b-button>
                                        <b-button class="btn-icon waves-effect waves-light" variant="outline-warning">
                                            <i class="ri-menu-2-line"></i>
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Buttons Group --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-map-pin-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button variant=&quot;danger&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-delete-bin-5-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button variant=&quot;success&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-check-double-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button variant=&quot;light&quot; class=&quot;btn-icon waves-effect&quot;&gt;&lt;i class=&quot;ri-brush-2-fill&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>

<code>&lt;b-button variant=&quot;outline-primary &quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-24-hours-fill&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button variant=&quot;outline-danger&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-customer-service-2-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button variant=&quot;outline-success&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-mail-send-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code>
<code>&lt;b-button variant=&quot;outline-warning&quot; class=&quot;btn-icon waves-effect waves-light&quot;&gt;&lt;i class=&quot;ri-menu-2-line&quot;&gt;&lt;/i&gt;&lt;/b-button&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Buttons Toolbar</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="toolbar-button">Show Code</label>
                                <input id="toolbar-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>btn-toolbar</code> class to combine sets of button groups
                            into more complex components.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-3">

                                <b-button-toolbar>
                                    <b-button-group class="me-2">
                                        <b-button variant="light">1</b-button>
                                        <b-button variant="light">2</b-button>
                                        <b-button variant="light">3</b-button>
                                        <b-button variant="light">4</b-button>
                                    </b-button-group>
                                    <b-button-group class="me-2">
                                        <b-button variant="light">5</b-button>
                                        <b-button variant="light">6</b-button>
                                        <b-button variant="light">7</b-button>
                                    </b-button-group>
                                    <b-button-group class="me-2">
                                        <b-button variant="light">8</b-button>
                                    </b-button-group>
                                </b-button-toolbar>


                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup">
<code>&lt;!-- Buttons Toolbar --&gt;
&lt;b-button-toolbar role=&quot;toolbar&quot; aria-label=&quot;Toolbar with button groups&quot;&gt;
&lt;b-button-group class=&quot;me-2&quot; role=&quot;group&quot; aria-label=&quot;First group&quot;&gt;
&lt;b-button variant=&quot;light&quot;&gt;1&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;2&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;3&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;4&lt;/b-button&gt;
&lt;/b-button-group&gt;
&lt;b-button-group class=&quot;me-2&quot; role=&quot;group&quot; aria-label=&quot;Second group&quot;&gt;
&lt;b-button variant=&quot;light&quot;&gt;5&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;6&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;7&lt;/b-button&gt;
&lt;/b-button-group&gt;
&lt;b-button-group role=&quot;group&quot; aria-label=&quot;Third group&quot;&gt;
&lt;b-button variant=&quot;light&quot;&gt;8&lt;/b-button&gt;
&lt;/b-button-group&gt;
&lt;/b-button-toolbar&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Button Group Sizing</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="group-size-button">Show Code</label>
                                <input id="group-size-button" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>b-button-group size="</code> class with the below-mentioned variation
                            to set the different sizes of button groups.
                        </p>

                        <div class="live-preview">
                            <div class="d-flex flex-wrap align-items-center gap-2">

                                <b-button-group class="mt-2 btn-group" size="lg">
                                    <b-button variant="primary">Left</b-button>
                                    <b-button variant="primary">Middle</b-button>
                                    <b-button variant="primary">Right</b-button>
                                </b-button-group>

                                <b-button-group class="mt-2 btn-group" size="lg">
                                    <b-button variant="light">Left</b-button>
                                    <b-button variant="light">Middle</b-button>
                                    <b-button variant="light">Right</b-button>
                                </b-button-group>

                                <b-button-group class="mt-2 btn-group" size="sm">
                                    <b-button variant="secondary">Left</b-button>
                                    <b-button variant="secondary">Middle</b-button>
                                    <b-button variant="secondary">Right</b-button>
                                </b-button-group>


                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Group Buttons Sizing --&gt;
&lt;b-button-group size=&quot;lg&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Left&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Middle&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group size=&quot;md&quot; class=&quot;mt-2&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;b-button variant=&quot;light&quot;&gt;Left&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;Middle&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group size=&quot;sm&quot; class=&quot;mt-2&quot; role=&quot;group&quot; aria-label=&quot;Basic example&quot;&gt;
&lt;b-button variant=&quot;secondary&quot;&gt;Left&lt;/b-button&gt;
&lt;b-button variant=&quot;secondary&quot;&gt;Middle&lt;/b-button&gt;
&lt;b-button variant=&quot;secondary&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Vertical Variation</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="vertical-variation">Show Code</label>
                                <input id="vertical-variation" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Make a set of buttons appear
                            <code>vertically</code> stacked .Split button dropdowns are not
                            supported here.
                        </p>
                        <div class="live-preview">
                            <b-row>
                                <div class="col-auto">
                                    <b-btn-group class="btn-group">
                                        <b-button variant="primary">1</b-button>
                                        <b-button variant="primary">2</b-button>
                                        <b-btn-group class="btn-group" role="group">
                                            <button id="btnGroupDrop1" aria-expanded="false"
                                                    class="btn btn-primary btn-md dropdown-toggle"
                                                    data-bs-toggle="dropdown"
                                                    type="button" variant="primary">
                                                Dropdown
                                            </button>
                                            <ul aria-labelledby="btnGroupDrop1" class="dropdown-menu">
                                                <li>
                                                    <b-link class="dropdown-item" href="#">Dropdown link</b-link>
                                                </li>
                                                <li>
                                                    <b-link class="dropdown-item" href="#">Dropdown link</b-link>
                                                </li>
                                            </ul>
                                        </b-btn-group>
                                    </b-btn-group>
                                </div>
                                <div class="col-auto">
                                    <b-btn-group aria-label="Vertical button group" class="btn-group-vertical"
                                                 role="group">
                                        <b-button class="btn btn-light">Button</b-button>
                                        <b-btn-group class="btn-group" role="group">
                                            <b-dropdown id="btnGroupDrop1" text="Dropdown" variant="light">
                                                <b-dropdown-item>>Dropdown link</b-dropdown-item>
                                                <b-dropdown-item>>Dropdown link</b-dropdown-item>
                                            </b-dropdown>
                                        </b-btn-group>
                                        <b-button variant="light">Button</b-button>
                                        <b-button variant="light">Button</b-button>
                                    </b-btn-group>
                                </div>
                                <div class="col-auto">
                                    <b-btn-group aria-label="Vertical radio toggle button group"
                                                 class="btn-group-vertical"
                                                 role="group">
                                        <input id="vbtn-radio1" checked class="btn-check" name="vbtn" type="radio"/>
                                        <label class="btn btn-outline-secondary" for="vbtn-radio1">Radio 1</label>
                                        <input id="vbtn-radio2" class="btn-check" name="vbtn" type="radio"/>
                                        <label class="btn btn-outline-secondary" for="vbtn-radio2">Radio 2</label>
                                        <input id="vbtn-radio3" class="btn-check" name="vbtn" type="radio"/>
                                        <label class="btn btn-outline-secondary" for="vbtn-radio3">Radio 3</label>
                                    </b-btn-group>
                                </div>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Vertical Variation --&gt;
&lt;b-button-group role=&quot;group&quot; aria-label=&quot;Button group with nested dropdown&quot;&gt;
&lt;b-button variant=&quot;primary&quot;&gt;1&lt;/button&gt;
&lt;b-button variant=&quot;primary&quot;&gt;2&lt;/button&gt;
&lt;div class=&quot;btn-group&quot; role=&quot;group&quot;&gt;

&lt;b-dropdown right text=&quot;Dropdown&quot; id=&quot;btnGroupDrop1&quot; class=&quot;btn btn-primary&quot;&gt;
&lt;b-dropdown-item&gt;Dropdown link&lt;/a&gt;&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&gt;Dropdown link&lt;/a&gt;&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group vertical role=&quot;group&quot; &gt;
&lt;b-button variant=&quot;light&quot; &gt;Button&lt;/b-button&gt;
&lt;b-button-group role=&quot;group&quot;&gt;
&lt;b-dropdown right text=&quot;Dropdown&quot; id=&quot;btnGroupDrop1&quot; class=&quot;btn btn-light&quot;&gt;
&lt;b-dropdown-item&gt;Dropdown link&lt;/a&gt;&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&gt;Dropdown link&lt;/a&gt;&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;
&lt;b-button variant=&quot;light&quot;&gt;Button&lt;/b-button&gt;
&lt;b-button variant=&quot;light&quot;&gt;Button&lt;/b-button&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group vertical role=&quot;group&quot; aria-label=&quot;Vertical radio toggle button group&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio1&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio1&quot;&gt;Radio 1&lt;/label&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio2&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio2&quot;&gt;Radio 2&lt;/label&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;vbtn&quot; id=&quot;vbtn-radio3&quot;&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;vbtn-radio3&quot;&gt;Radio 3&lt;/label&gt;
&lt;/b-button-group&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
