<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/hrqwmuhr.json";
import animationData1 from "@/components/widgets/lupuorrc.json";
import animationData2 from "@/components/widgets/tdrtiskw.json";
import animationData3 from "@/components/widgets/zpxybbhl.json";
import animationData4 from "@/components/widgets/pithnlch.json";
import animationData5 from "@/components/widgets/tqywkdcz.json";

import 'prismjs';
import 'prismjs/themes/prism.css';

export default {
    data() {
        return {
            title: "Modals",
            items: [{
                text: "Base UI",
                href: "/",
            },
                {
                    text: "Modals",
                    active: true,
                },
            ],
            defaultOptions: {
                animationData: animationData
            },
            defaultOptions1: {
                animationData: animationData1
            },
            defaultOptions2: {
                animationData: animationData2
            },
            defaultOptions3: {
                animationData: animationData3
            },
            defaultOptions4: {
                animationData: animationData4
            },
            defaultOptions5: {
                animationData: animationData5
            },
            modalShow: false,
            modalShow1: false,
            modalShow2: false,
            modalShow3: false,
            modalShow4: false,
            modalShow5: false,
            modalShow6: false,
            modalShow7: false,
            modalShow8: false,
            modalShow9: false,
            modalShow10: false,
            modalShow11: false,
            modalShow12: false,
            modalShow13: false,
            modalShow14: false,
            modalShow15: false,
            modalShow16: false,
            modalShow17: false,
            modalShow18: false,
            modalShow19: false,
            modalShow20: false,
            modalShow21: false,
            modalShow22: false,
            modalShow23: false,
            modalShow24: false,
            modalShow25: false,
            modalShow26: false,
            modalShow27: false,
            modalShow28: false,
            modalShow29: false,
            modalShow30: false,
            modalShow31: false,
        };
    },
    name: "Modals",
    components: {
        Layout,
        PageHeader,
        lottie: Lottie,
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
    },
    methods: {
        changecustomerName(e) {
            const msg = document.querySelector(".varyingcontentModal");
            const customerName = document.getElementById("customer-name");
            this.modalShow6 = !this.modalShow6,
                msg.innerText = "New message to " + e;
            customerName.value = e;
        },

        toggleModal() {
            this.modalShow30 = !this.modalShow30;
            this.modalShow31 = !this.modalShow31;
        }
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Default Modal</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="default-modal">Show Code</label>
                                <input id="default-modal" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted text-muted">
                            Use
                            <code>modal-dialog</code> class to show default modal.
                        </p>
                        <div class="live-preview">
                            <div>
                                <b-button variant="primary" @click="modalShow = !modalShow">Standard Modal</b-button>
                                <b-modal v-model="modalShow" class="v-modal-custom" hide-footer title="Modal Heading">
                                    <h5 class="fs-15">Overflowing text to show scroll behavior</h5>
                                    <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                        dreams, he found himself transformed in his bed into a horrible
                                        vermin. He lay on his armour-like back, and if he lifted his head a
                                        little he could see his brown belly, slightly domed and divided by
                                        arches into stiff sections.</p>
                                    <p class="text-muted">The bedding was hardly able to cover it and seemed
                                        ready to slide off any moment. His many legs, pitifully thin
                                        compared with the size of the rest of him, waved about helplessly as
                                        he looked. "What's happened to me?" he thought.</p>
                                    <p class="text-muted">It wasn't a dream. His room, a proper human room
                                        although a little too small, lay peacefully between its four
                                        familiar walls.</p>
                                    <div class="modal-footer v-modal-footer">
                                        <b-button type="button" variant="light" @click="modalShow = false">Close
                                        </b-button>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Default Modals --&gt;
    &lt;b-button variant=&quot;primary&quot; @click=&quot;modalShow = !modalShow&quot;>Standard Modal&lt;/b-button&gt;
    &lt;b-modal v-model=&quot;modalShow&quot; hide-footer title=&quot;Modal Heading&quot; class=&quot;v-modal-custom&quot;&gt;
        &lt;h5 class=&quot;fs-15&quot;&gt;Overflowing text to show scroll behavior&lt;/h5&gt;
        &lt;p class=&quot;text-muted&quot;&gt;One morning, when Gregor Samsa woke from troubled
            dreams, he found himself transformed in his bed into a horrible
            vermin. He lay on his armour-like back, and if he lifted his head a
            little he could see his brown belly, slightly domed and divided by
            arches into stiff sections.&lt;/p&gt;
        &lt;p class=&quot;text-muted&quot;&gt;The bedding was hardly able to cover it and seemed
            ready to slide off any moment. His many legs, pitifully thin
            compared with the size of the rest of him, waved about helplessly as
            he looked. &quot;What's happened to me?&quot; he thought.&lt;/p&gt;
        &lt;p class=&quot;text-muted&quot;&gt;It wasn't a dream. His room, a proper human room
            although a little too small, lay peacefully between its four
            familiar walls.&lt;/p&gt;
        &lt;div class=&quot;modal-footer v-modal-footer&quot;&gt;
            &lt;b-button type=&quot;button&quot; variant=&quot;light&quot; @click=&quot;modalShow = false&quot;&gt;Close
            &lt;/b-button&gt;
            &lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Save Changes&lt;/b-button&gt;
        &lt;/div&gt;
    &lt;/b-modal&gt;
</code></pre>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Vertically Centered Modal</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="vertically-centered">Show Code</label>
                                <input id="vertically-centered" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>modal-dialog-centered</code> class to show vertically center the modal.
                        </p>
                        <div class="live-preview">
                            <div>
                                <b-button variant="primary" @click="modalShow1 = !modalShow1">Center Modal</b-button>
                                <b-modal v-model="modalShow1" centered class="v-modal-custom" hide-footer
                                         hide-header-close>
                                    <div class="modal-body text-center">
                                        <lottie :height="120" :options="defaultOptions"
                                                :width="120" colors="primary:#121331,secondary:#08a88a" trigger="loop"/>
                                        <div class="mt-4">
                                            <h4 class="mb-3">Oops something went wrong!</h4>
                                            <p class="text-muted mb-4">The transfer was not successfully
                                                received by us. the email of the recipient wasn't correct.</p>
                                            <div class="hstack gap-2 justify-content-center">
                                                <b-button type="button" variant="light" @click="modalShow1 = false">
                                                    Close
                                                </b-button>
                                                <b-link class="btn btn-danger" href="javascript:void(0);">Try Again
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-modal>
                            </div>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Vertically Centered --&gt;
    &lt;b-modal v-model="modalShow1" hide-footer class="v-modal-custom" hide-header-close centered&gt;
    ...
    &lt;/b-modal&gt;
</code></pre>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Grids in Modals</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="grid-modal-showcode">Show Code</label>
                                <input id="grid-modal-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>container-fluid</code> class within the modal-body to utilize the Bootstrap grid
                            system within a modal by nesting.
                        </p>
                        <div class="live-preview">
                            <b-button variant="primary" @click="modalShow2 = !modalShow2">Launch Demo Modal</b-button>
                            <b-modal v-model="modalShow2" class="v-modal-custom" hide-footer title="Grid Modals">
                                <form action="javascript:void(0);">
                                    <b-row class="g-3">
                                        <b-col xxl="6">
                                            <div>
                                                <label class="form-label" for="firstName">First Name</label>
                                                <input id="firstName" class="form-control" placeholder="Enter firstname"
                                                       type="text"/>
                                            </div>
                                        </b-col>
                                        <b-col xxl="6">
                                            <div>
                                                <label class="form-label" for="lastName">Last Name</label>
                                                <input id="lastName" class="form-control" placeholder="Enter lastname"
                                                       type="text"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="12">
                                            <label class="form-label">Gender</label>
                                            <div>
                                                <div class="form-check form-check-inline">
                                                    <input id="inlineRadio1" class="form-check-input"
                                                           name="inlineRadioOptions" type="radio" value="option1"/>
                                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input id="inlineRadio2" class="form-check-input"
                                                           name="inlineRadioOptions" type="radio" value="option2"/>
                                                    <label class="form-check-label" for="inlineRadio2">Female</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input id="inlineRadio3" class="form-check-input"
                                                           name="inlineRadioOptions" type="radio" value="option3"/>
                                                    <label class="form-check-label" for="inlineRadio3">Others</label>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col xxl="6">
                                            <label class="form-label" for="emailInput">Email</label>
                                            <input id="emailInput" class="form-control" placeholder="Enter your email"
                                                   type="email"/>
                                        </b-col>
                                        <b-col xxl="6">
                                            <label class="form-label" for="passwordInput">Password</label>
                                            <input id="passwordInput" class="form-control" placeholder="Enter password"
                                                   type="password" value="451326546"/>
                                        </b-col>
                                        <b-col lg="12">
                                            <div class="hstack gap-2 justify-content-end">
                                                <b-button type="button" variant="light" @click="modalShow2 = false">
                                                    Close
                                                </b-button>
                                                <b-button type="submit" variant="primary">Submit</b-button>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </form>
                            </b-modal>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Grids in modals --&gt;
    &lt;b-button variant=&quot;primary&quot; @click=&quot;modalShow2 = !modalShow2&quot;>Launch Demo Modal&lt;/b-button&gt;
    &lt;b-modal v-model=&quot;modalShow2&quot; hide-footer title=&quot;Grid Modals&quot; class=&quot;v-modal-custom&quot;&gt;
        &lt;form action=&quot;javascript:void(0);&quot;&gt;
            &lt;b-row class=&quot;g-3&quot;&gt;
                &lt;b-col xxl=&quot;6&quot;&gt;
                    &lt;div&gt;
                        &lt;label for=&quot;firstName&quot; class=&quot;form-label&quot;&gt;First Name&lt;/label&gt;
                        &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;firstName&quot;
                            placeholder=&quot;Enter firstname&quot; /&gt;
                    &lt;/div&gt;
                &lt;/b-col&gt;
                &lt;b-col xxl=&quot;6&quot;&gt;
                    &lt;div&gt;
                        &lt;label for=&quot;lastName&quot; class=&quot;form-label&quot;&gt;Last Name&lt;/label&gt;
                        &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;lastName&quot;
                            placeholder=&quot;Enter lastname&quot; /&gt;
                    &lt;/div&gt;
                &lt;/b-col&gt;
                &lt;b-col lg=&quot;12&quot;&gt;
                    &lt;label class=&quot;form-label&quot;&gt;Gender&lt;/label&gt;
                    &lt;div&gt;
                        &lt;div class=&quot;form-check form-check-inline&quot;&gt;
                            &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot;
                                name=&quot;inlineRadioOptions&quot; id=&quot;inlineRadio1&quot; value=&quot;option1&quot; /&gt;
                            &lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio1&quot;&gt;Male&lt;/label&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;form-check form-check-inline&quot;&gt;
                            &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot;
                                name=&quot;inlineRadioOptions&quot; id=&quot;inlineRadio2&quot; value=&quot;option2&quot; /&gt;
                            &lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio2&quot;&gt;Female&lt;/label&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;form-check form-check-inline&quot;&gt;
                            &lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot;
                                name=&quot;inlineRadioOptions&quot; id=&quot;inlineRadio3&quot; value=&quot;option3&quot; /&gt;
                            &lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio3&quot;&gt;Others&lt;/label&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/b-col&gt;
                &lt;b-col xxl=&quot;6&quot;&gt;
                    &lt;label for=&quot;emailInput&quot; class=&quot;form-label&quot;&gt;Email&lt;/label&gt;
                    &lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;emailInput&quot;
                        placeholder=&quot;Enter your email&quot; /&gt;
                &lt;/b-col&gt;
                &lt;b-col xxl=&quot;6&quot;&gt;
                    &lt;label for=&quot;passwordInput&quot; class=&quot;form-label&quot;&gt;Password&lt;/label&gt;
                    &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;passwordInput&quot;
                        value=&quot;451326546&quot; placeholder=&quot;Enter password&quot; /&gt;
                &lt;/b-col&gt;
                &lt;b-col lg=&quot;12&quot;&gt;
                    &lt;div class=&quot;hstack gap-2 justify-content-end&quot;&gt;
                        &lt;b-button type=&quot;button&quot; variant=&quot;light&quot; @click=&quot;modalShow2 = false&quot;&gt;
                            Close&lt;/b-button&gt;
                        &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/b-button&gt;
                    &lt;/div&gt;
                &lt;/b-col&gt;
            &lt;/b-row&gt;
        &lt;/form&gt;
    &lt;/b-modal&gt;
</code></pre>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>

            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Static Backdrop Modal</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="static-backdrop">Show Code</label>
                                <input id="static-backdrop" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>data-bs-backdrop="static"</code> to modal not to close when clicking outside the
                            modal.
                        </p>
                        <div class="live-preview">
                            <div>
                                <b-button variant="primary" @click="modalShow3 = !modalShow3">Static Backdrop Modal
                                </b-button>
                                <b-modal v-model="modalShow3" centered class="v-modal-custom" hide-footer
                                         hide-header-close no-close-on-backdrop>
                                    <div class="modal-body text-center">
                                        <lottie :height="120" :options="defaultOptions1"
                                                :width="120" colors="primary:#121331,secondary:#08a88a" trigger="loop"/>
                                        <div class="mt-4">
                                            <h4 class="mb-3">You've made it!</h4>
                                            <p class="text-muted mb-4">The transfer was not successfully
                                                received by us. the email of the recipient wasn't correct.</p>
                                            <div class="hstack gap-2 justify-content-center">
                                                <b-link class="btn btn-link link-success fw-medium"
                                                        href="javascript:void(0);"
                                                        @click="modalShow3 = false">
                                                    <i class="ri-close-line me-1 align-middle"></i> Close
                                                </b-link>
                                                <b-link class="btn btn-success" href="javascript:void(0);">
                                                    Completed
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-modal>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Static Backdrop --&gt;
    &lt;b-button variant=&quot;primary&quot; @click=&quot;modalShow3 = !modalShow3&quot;>Static Backdrop Modal
    &lt;/b-button&gt;
    &lt;b-modal v-model=&quot;modalShow3&quot; hide-footer class=&quot;v-modal-custom&quot; hide-header-close
        centered no-close-on-backdrop&gt;
        &lt;div class=&quot;modal-body text-center&quot;&gt;
            &lt;lottie colors=&quot;primary:#121331,secondary:#08a88a&quot; trigger=&quot;loop&quot;
                :options=&quot;defaultOptions1&quot; :height=&quot;120&quot; :width=&quot;120&quot; /&gt;
            &lt;div class=&quot;mt-4&quot;&gt;
                &lt;h4 class=&quot;mb-3&quot;&gt;You've made it!&lt;/h4&gt;
                &lt;p class=&quot;text-muted mb-4&quot;&gt;The transfer was not successfully
                    received by us. the email of the recipient wasn't correct.&lt;/p&gt;
                &lt;div class=&quot;hstack gap-2 justify-content-center&quot;&gt;
                    &lt;b-link href=&quot;javascript:void(0);&quot;
                        class=&quot;btn btn-link link-success fw-medium&quot;
                        @click=&quot;modalShow3 = false&quot;&gt;
                        &lt;i class=&quot;ri-close-line me-1 align-middle&quot;&gt;&lt;/i&gt; Close
                    &lt;/b-link&gt;
                    &lt;b-link href=&quot;javascript:void(0);&quot; class=&quot;btn btn-success&quot;&gt;
                        Completed&lt;/b-link&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-modal&gt;
</code></pre>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Toggle Between Modal</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="toggle-betweeen-modals">Show Code</label>
                                <input id="toggle-betweeen-modals" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Toggle between multiple modals with some clever placement of the
                            <code>data-bs-target</code> and
                            <code>data-bs-toggle</code> attributes.
                            Please note multiple modals cannot be open at the same time. this method simply toggles
                            between two separate modals.
                        </p>
                        <div class="live-preview">
                            <div>
                                <b-button variant="primary" @click="modalShow30 = !modalShow30">Open First Modal
                                </b-button>

                                <b-modal v-model="modalShow30" centered class="v-modal-custom" hide-footer
                                         hide-header-close>
                                    <div class="modal-body text-center">
                                        <lottie :height="130" :options="defaultOptions2"
                                                :width="130" colors="primary:#f7b84b,secondary:#405189" trigger="loop"/>
                                        <div class="mt-4 pt-4">
                                            <h4>Uh oh, something went wrong!</h4>
                                            <p class="text-muted">The transfer was not successfully received by
                                                us. the email of the recipient wasn't correct.</p>
                                            <b-button variant="warning" @click="toggleModal">Continue</b-button>
                                        </div>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow31" centered class="v-modal-custom" hide-footer
                                         hide-header-close>
                                    <div class="modal-body text-center">
                                        <lottie :height="150" :options="defaultOptions3"
                                                :width="150" colors="primary:#405189,secondary:#0ab39c" trigger="loop"/>
                                        <div class="mt-4 pt-3">
                                            <h4 class="mb-3">Follow-Up Email</h4>
                                            <p class="text-muted mb-4">Hide this modal and show the first with
                                                the button below Automatically Send your invitees a follow -Up
                                                email.</p>
                                            <div class="hstack gap-2 justify-content-center">
                                                <b-button variant="soft-danger" @click="toggleModal"> Back to First
                                                </b-button>
                                                <b-button type="button" variant="light" @click="modalShow31 = false">
                                                    Close
                                                </b-button>
                                            </div>
                                        </div>
                                    </div>
                                </b-modal>
                            </div>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Toggle Between Modals --&gt;
    &lt;b-button variant=&quot;primary&quot; @click=&quot;modalShow30 = !modalShow30&quot;>Open First Modal
    &lt;/b-button&gt;

    &lt;b-modal v-model=&quot;modalShow30&quot; hide-footer class=&quot;v-modal-custom&quot; hide-header-close
        centered&gt;
        &lt;div class=&quot;modal-body text-center&quot;&gt;
            &lt;lottie colors=&quot;primary:#f7b84b,secondary:#405189&quot; trigger=&quot;loop&quot;
                :options=&quot;defaultOptions2&quot; :height=&quot;130&quot; :width=&quot;130&quot; /&gt;
            &lt;div class=&quot;mt-4 pt-4&quot;&gt;
                &lt;h4&gt;Uh oh, something went wrong!&lt;/h4&gt;
                &lt;p class=&quot;text-muted&quot;&gt;The transfer was not successfully received by
                    us. the email of the recipient wasn't correct.&lt;/p&gt;
                &lt;b-button variant=&quot;warning&quot; @click=&quot;toggleModal&quot;&gt;Continue&lt;/b-button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-modal&gt;

    &lt;b-modal v-model=&quot;modalShow31&quot; hide-footer class=&quot;v-modal-custom&quot; hide-header-close
        centered&gt;
        &lt;div class=&quot;modal-body text-center&quot;&gt;
            &lt;lottie colors=&quot;primary:#405189,secondary:#0ab39c&quot; trigger=&quot;loop&quot;
                :options=&quot;defaultOptions3&quot; :height=&quot;150&quot; :width=&quot;150&quot; /&gt;
            &lt;div class=&quot;mt-4 pt-3&quot;&gt;
                &lt;h4 class=&quot;mb-3&quot;&gt;Follow-Up Email&lt;/h4&gt;
                &lt;p class=&quot;text-muted mb-4&quot;&gt;Hide this modal and show the first with
                    the button below Automatically Send your invitees a follow -Up
                    email.&lt;/p&gt;
                &lt;div class=&quot;hstack gap-2 justify-content-center&quot;&gt;
                    &lt;b-button variant=&quot;soft-danger&quot; @click=&quot;toggleModal&quot;&gt; Back to First
                    &lt;/b-button&gt;
                    &lt;b-button type=&quot;button&quot; variant=&quot;light&quot; @click=&quot;modalShow31 = false&quot;&gt;
                        Close&lt;/b-button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-modal&gt;
</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Tooltips and Popovers</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="tooltip-popover-modal">Show Code</label>
                                <input id="tooltip-popover-modal" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>


                    <b-card-body>
                        <p class="text-muted">
                            <b-link href="https://getbootstrap.com/docs/5.1/components/tooltips/">Tooltips</b-link>
                            and
                            <b-link href="https://getbootstrap.com/docs/5.1/components/popovers/">Popovers</b-link>
                            can be placed within modals as needed.When modals are closed, any tooltips and popovers
                            within are also automatically dismissed.
                        </p>

                        <div class="live-preview">
                            <b-button variant="primary" @click="modalShow4 = !modalShow4">Launch Demo Modal</b-button>
                            <b-modal v-model="modalShow4" class="v-modal-custom" hide-footer
                                     title="Tooltips and Popovers Modal">
                                <h5 class="fs-16">Popover in a Modal</h5>
                                <p class="text-muted">
                                    You only need to know a little to make a big
                                    <b-link class="popover-test fw-medium text-decoration-underline link-success"
                                            data-bs-container="body"
                                            data-bs-content="They're a good choice for more traditional projects."
                                            data-bs-original-title="Popover Title"
                                            data-bs-placement="bottom"
                                            data-bs-toggle="popover" href="#"
                                            title="Common Types of Fonts">Popover on Click
                                    </b-link>
                                    you
                                    do
                                    every day. So let's get started. First, some common types of fonts and
                                    what you need to know about them triggers a popover on click.
                                </p>
                                <h5 class="fs-16">Tooltips in a Modal</h5>
                                <p class="text-muted">
                                    Opposites attract, and that’s a fact. It’s in our
                                    <b-link class="tooltip-test text-decoration-underline fw-medium"
                                            data-bs-container="#exampleModalPopovers"
                                            data-bs-original-title="Tooltip title" data-bs-toggle="tooltip"
                                            href="#" title="Morton Bayer">
                                        graphic design
                                    </b-link>
                                    to be
                                    interested in the unusual, and that’s why using
                                    <b-link class="tooltip-test text-decoration-underline"
                                            data-bs-container="#exampleModalPopovers"
                                            data-bs-original-title="Tooltip title" data-bs-toggle="tooltip"
                                            href="#"
                                            title="Web Developers">design
                                    </b-link>
                                    contrasting
                                    colors
                                    in Graphic Design is a must.
                                </p>
                                <div class="modal-footer v-modal-footer">
                                    <div class="mx-auto">
                                        <b-link class="btn btn-link fw-medium" href="javascript:void(0);">
                                            Read More
                                            <i class="ri-arrow-right-line ms-1 align-middle"></i>
                                        </b-link>
                                    </div>
                                </div>
                            </b-modal>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Tooltips and Popovers --&gt;
    &lt;b-button variant=&quot;primary&quot; @click=&quot;modalShow4 = !modalShow4&quot;>Launch Demo Modal&lt;/b-button&gt;
                            &lt;b-modal v-model=&quot;modalShow4&quot; hide-footer title=&quot;Tooltips and Popovers Modal&quot;
                                class=&quot;v-modal-custom&quot;&gt;
                                &lt;h5 class=&quot;fs-16&quot;&gt;Popover in a Modal&lt;/h5&gt;
                                &lt;p class=&quot;text-muted&quot;&gt;
                                    You only need to know a little to make a big
                                    &lt;b-link href=&quot;#&quot;
                                        class=&quot;popover-test fw-medium text-decoration-underline link-success&quot;
                                        data-bs-toggle=&quot;popover&quot; title=&quot;Common Types of Fonts&quot;
                                        data-bs-content=&quot;They're a good choice for more traditional projects.&quot;
                                        data-bs-container=&quot;body&quot; data-bs-placement=&quot;bottom&quot;
                                        data-bs-original-title=&quot;Popover Title&quot;&gt;Popover on Click&lt;/b-link&gt; you
                                    do
                                    every day. So let's get started. First, some common types of fonts and
                                    what you need to know about them triggers a popover on click.
                                &lt;/p&gt;
                                &lt;h5 class=&quot;fs-16&quot;&gt;Tooltips in a Modal&lt;/h5&gt;
                                &lt;p class=&quot;text-muted&quot;&gt;
                                    Opposites attract, and that’s a fact. It’s in our
                                    &lt;b-link href=&quot;#&quot; class=&quot;tooltip-test text-decoration-underline fw-medium&quot;
                                        title=&quot;Morton Bayer&quot; data-bs-container=&quot;#exampleModalPopovers&quot;
                                        data-bs-toggle=&quot;tooltip&quot; data-bs-original-title=&quot;Tooltip title&quot;&gt;
                                        graphic design&lt;/b-link&gt; to be
                                    interested in the unusual, and that’s why using
                                    &lt;b-link href=&quot;#&quot; class=&quot;tooltip-test text-decoration-underline&quot;
                                        title=&quot;Web Developers&quot; data-bs-toggle=&quot;tooltip&quot;
                                        data-bs-container=&quot;#exampleModalPopovers&quot;
                                        data-bs-original-title=&quot;Tooltip title&quot;&gt;design&lt;/b-link&gt; contrasting
                                    colors
                                    in Graphic Design is a must.
                                &lt;/p&gt;
                                &lt;div class=&quot;modal-footer v-modal-footer&quot;&gt;
                                    &lt;div class=&quot;mx-auto&quot;&gt;
                                        &lt;b-link href=&quot;javascript:void(0);&quot; class=&quot;btn btn-link fw-medium&quot;&gt;
                                            Read More
                                            &lt;i class=&quot;ri-arrow-right-line ms-1 align-middle&quot;&gt;&lt;/i&gt;
                                        &lt;/b-link&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                            &lt;/b-modal&gt;
</code></pre>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Scrollable Modal</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="scrollable-modal">Show Code</label>
                                <input id="scrollable-modal" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>


                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>modal-dialog-scrollable</code> class to create a modal scrollable.
                        </p>

                        <div class="live-preview">
                            <div>
                                <b-button variant="primary" @click="modalShow5 = !modalShow5">Scrollable Modal
                                </b-button>
                                <b-modal v-model="modalShow5" class="v-modal-custom" hide-footer
                                         scrollable title="Scrollable Modal">
                                    <h6 class="fs-15">Give your text a good structure</h6>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">
                                                Raw denim you probably haven't heard of them jean shorts
                                                Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Too much or too little spacing, as in
                                                the example below, can make things unpleasant for the
                                                reader. The goal is to make your text as comfortable to read
                                                as possible.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">In some designs, you might adjust
                                                your tracking to create a certain artistic effect. It can
                                                also help you fix fonts that are poorly spaced to begin
                                                with.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">For that very reason, I went on a
                                                quest and spoke to many different professional graphic
                                                designers and asked them what graphic design tips they live.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">You've probably heard that opposites
                                                attract. The same is true for fonts. Don't be afraid to
                                                combine font styles that are different but complementary,
                                                like sans serif with serif, short with tall, or decorative
                                                with simple. Qui photo booth letterpress, commodo enim craft
                                                beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">For that very reason, I went on a
                                                quest and spoke to many different professional graphic
                                                designers and asked them what graphic design tips they live.
                                            </p>
                                        </div>
                                    </div>
                                    <h6 class="fs-16 my-3">Graphic Design</h6>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                                                It’s in our nature to be interested in the unusual, and
                                                that’s why using contrasting colors in Graphic Design is a
                                                must. It’s eye-catching, it makes a statement, it’s
                                                impressive graphic design. Increase or decrease the letter
                                                spacing depending.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                                                raw denim keffiyeh etsy art party before they sold out
                                                master cleanse gluten-free squid scenester freegan cosby
                                                sweater.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Just like in the image where we
                                                talked about using multiple fonts, you can see that the
                                                background in this graphic design is blurred. Whenever you
                                                put text on top of an image, it’s important that your
                                                viewers can understand.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                                                party before they sold out master cleanse gluten-free squid
                                                scenester freegan cosby sweater.</p>
                                        </div>
                                    </div>

                                    <div class="modal-footer v-modal-footer">
                                        <b-button type="button" variant="light" @click="modalShow5 = false">Close
                                        </b-button>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>
                            </div>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Scrollable Modal --&gt;
    &lt;b-modal v-model=&quot;modalShow5&quot; hide-footer title=&quot;Scrollable Modal&quot; class=&quot;v-modal-custom&quot; scrollable&gt;
        ...
    &lt;/b-modal&gt;
</code></pre>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>

            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Varying Modal Content</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="varying-modal-showcode">Show Code</label>
                                <input id="varying-modal-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>


                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>event.relatedTarget</code> and HTML
                            <code>data-bs-*</code> attributes to vary the contents of the modal depending on which
                            button was clicked.
                        </p>

                        <div class="live-preview">
                            <div>
                                <div class="hstack gap-2 flex-wrap">
                                    <b-button variant="primary" @click="changecustomerName('Mary')">Open Modal for Mary
                                    </b-button>
                                    <b-button variant="primary" @click="changecustomerName('Jennifer')">Open Modal for
                                        Jennifer
                                    </b-button>
                                    <b-button variant="primary" @click="changecustomerName('Roderick')">Open Modal for
                                        Roderick
                                    </b-button>
                                </div>
                                <b-modal v-model="modalShow6" class="v-modal-custom" hide-footer
                                         title="New message" title-class="varyingcontentModal">
                                    <form>
                                        <div class="mb-3">
                                            <label class="col-form-label" for="customer-name">Customer
                                                Name:</label>
                                            <input id="customer-name" class="form-control" type="text"/>
                                        </div>
                                        <div class="mb-3">
                                            <label class="col-form-label" for="message-text">Message:</label>
                                            <textarea id="message-text" class="form-control" rows="4"></textarea>
                                        </div>
                                    </form>
                                    <div class="modal-footer v-modal-footer">
                                        <b-button type="button" variant="light" @click="modalShow6 = false">Back
                                        </b-button>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>
                            </div>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Varying Modal Content --&gt;
    &lt;div class=&quot;hstack gap-2 flex-wrap&quot;&gt;
        &lt;b-button variant=&quot;primary&quot; @click=&quot;changecustomerName('Mary')&quot;&gt;Open Modal for Mary&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot; @click=&quot;changecustomerName('Jennifer')&quot;&gt;Open Modal for Jennifer&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot; @click=&quot;changecustomerName('Roderick')&quot;&gt;Open Modal for Roderick&lt;/b-button&gt;
    &lt;/div&gt;
    &lt;b-modal v-model=&quot;modalShow6&quot; hide-footer title=&quot;New message&quot;
        title-class=&quot;varyingcontentModal&quot; class=&quot;v-modal-custom&quot;&gt;
        &lt;form&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;customer-name&quot; class=&quot;col-form-label&quot;&gt;Customer
                    Name:&lt;/label&gt;
                &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;customer-name&quot; /&gt;
            &lt;/div&gt;
            &lt;div class=&quot;mb-3&quot;&gt;
                &lt;label for=&quot;message-text&quot; class=&quot;col-form-label&quot;&gt;Message:&lt;/label&gt;
                &lt;textarea class=&quot;form-control&quot; id=&quot;message-text&quot; rows=&quot;4&quot;&gt;&lt;/textarea&gt;
            &lt;/div&gt;
        &lt;/form&gt;
        &lt;div class=&quot;modal-footer v-modal-footer&quot;&gt;
            &lt;b-button type=&quot;button&quot; variant=&quot;light&quot; @click=&quot;modalShow6 = false&quot;&gt;Back
            &lt;/b-button&gt;
            &lt;b-button type=&quot;button&quot; variant=&quot;primary&quot;&gt;Save Changes&lt;/b-button&gt;
        &lt;/div&gt;
    &lt;/b-modal&gt;
</code></pre>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Optional Sizes</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="optional-sizes">Show Code</label>
                                <input id="optional-sizes" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>


                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>modal-fullscreen</code>,
                            <code>modal-xl</code>,
                            <code>modal-lg</code>, or
                            <code>modal-sm</code> class to modal-dialog class to set different size modal respectively.
                        </p>
                        <div class="live-preview">
                            <div>
                                <div class="hstack flex-wrap gap-2">
                                    <b-button variant="primary" @click="modalShow7 = !modalShow7">Fullscreen Modal
                                    </b-button>
                                    <b-button variant="info" @click="modalShow8 = !modalShow8">Extra large Modal
                                    </b-button>
                                    <b-button variant="success" @click="modalShow9 = !modalShow9">Large Modal
                                    </b-button>
                                    <b-button variant="danger" @click="modalShow10 = !modalShow10">Small Modal
                                    </b-button>
                                </div>
                                <b-modal v-model="modalShow7" class="v-modal-custom" fullscreen
                                         hide-footer title="Fullscreen Modal Heading">
                                    <h6 class="fs-15">Give your text a good structure</h6>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">
                                                Raw denim you probably haven't heard of them jean shorts
                                                Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Too much or too little spacing, as in
                                                the example below, can make things unpleasant for the
                                                reader. The goal is to make your text as comfortable to read
                                                as possible.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">In some designs, you might adjust
                                                your tracking to create a certain artistic effect. It can
                                                also help you fix fonts that are poorly spaced to begin
                                                with.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">For that very reason, I went on a
                                                quest and spoke to many different professional graphic
                                                designers and asked them what graphic design tips they live.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">You've probably heard that opposites
                                                attract. The same is true for fonts. Don't be afraid to
                                                combine font styles that are different but complementary,
                                                like sans serif with serif, short with tall, or decorative
                                                with simple. Qui photo booth letterpress, commodo enim craft
                                                beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">For that very reason, I went on a
                                                quest and spoke to many different professional graphic
                                                designers and asked them what graphic design tips they live.
                                            </p>
                                        </div>
                                    </div>
                                    <h6 class="fs-16 my-3">Graphic Design</h6>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                                                It’s in our nature to be interested in the unusual, and
                                                that’s why using contrasting colors in Graphic Design is a
                                                must. It’s eye-catching, it makes a statement, it’s
                                                impressive graphic design. Increase or decrease the letter
                                                spacing depending.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                                                raw denim keffiyeh etsy art party before they sold out
                                                master cleanse gluten-free squid scenester freegan cosby
                                                sweater.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Just like in the image where we
                                                talked about using multiple fonts, you can see that the
                                                background in this graphic design is blurred. Whenever you
                                                put text on top of an image, it’s important that your
                                                viewers can understand.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                                                party before they sold out master cleanse gluten-free squid
                                                scenester freegan cosby sweater.</p>
                                        </div>
                                    </div>
                                    <div class="modal-footer v-modal-footer">
                                        <b-link class="btn btn-link link-success fw-medium" href="javascript:void(0);"
                                                @click="modalShow7 = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-link>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow8" class="v-modal-custom" hide-footer
                                         size="xl" title="Extra large Modal">
                                    <h6 class="fs-15">Give your text a good structure</h6>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">
                                                Raw denim you probably haven't heard of them jean shorts
                                                Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Too much or too little spacing, as in
                                                the example below, can make things unpleasant for the
                                                reader. The goal is to make your text as comfortable to read
                                                as possible.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">In some designs, you might adjust
                                                your tracking to create a certain artistic effect. It can
                                                also help you fix fonts that are poorly spaced to begin
                                                with.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">For that very reason, I went on a
                                                quest and spoke to many different professional graphic
                                                designers and asked them what graphic design tips they live.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">You've probably heard that opposites
                                                attract. The same is true for fonts. Don't be afraid to
                                                combine font styles that are different but complementary,
                                                like sans serif with serif, short with tall, or decorative
                                                with simple. Qui photo booth letterpress, commodo enim craft
                                                beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">For that very reason, I went on a
                                                quest and spoke to many different professional graphic
                                                designers and asked them what graphic design tips they live.
                                            </p>
                                        </div>
                                    </div>
                                    <h6 class="fs-16 my-3">Graphic Design</h6>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                                                It’s in our nature to be interested in the unusual, and
                                                that’s why using contrasting colors in Graphic Design is a
                                                must. It’s eye-catching, it makes a statement, it’s
                                                impressive graphic design. Increase or decrease the letter
                                                spacing depending.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                                                raw denim keffiyeh etsy art party before they sold out
                                                master cleanse gluten-free squid scenester freegan cosby
                                                sweater.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Just like in the image where we
                                                talked about using multiple fonts, you can see that the
                                                background in this graphic design is blurred. Whenever you
                                                put text on top of an image, it’s important that your
                                                viewers can understand.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                                                party before they sold out master cleanse gluten-free squid
                                                scenester freegan cosby sweater.</p>
                                        </div>
                                    </div>
                                    <div class="modal-footer v-modal-footer">
                                        <b-link class="btn btn-link link-success fw-medium" href="javascript:void(0);"
                                                @click="modalShow8 = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-link>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow9" class="v-modal-custom" hide-footer size="lg"
                                         title="Large Modal">
                                    <h6 class="fs-15">Give your text a good structure</h6>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">
                                                Raw denim you probably haven't heard of them jean shorts
                                                Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Too much or too little spacing, as in
                                                the example below, can make things unpleasant for the
                                                reader. The goal is to make your text as comfortable to read
                                                as possible.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">In some designs, you might adjust
                                                your tracking to create a certain artistic effect. It can
                                                also help you fix fonts that are poorly spaced to begin
                                                with.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">For that very reason, I went on a
                                                quest and spoke to many different professional graphic
                                                designers and asked them what graphic design tips they live.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">You've probably heard that opposites
                                                attract. The same is true for fonts. Don't be afraid to
                                                combine font styles that are different but complementary,
                                                like sans serif with serif, short with tall, or decorative
                                                with simple. Qui photo booth letterpress, commodo enim craft
                                                beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">For that very reason, I went on a
                                                quest and spoke to many different professional graphic
                                                designers and asked them what graphic design tips they live.
                                            </p>
                                        </div>
                                    </div>
                                    <h6 class="fs-16 my-3">Graphic Design</h6>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                                                It’s in our nature to be interested in the unusual, and
                                                that’s why using contrasting colors in Graphic Design is a
                                                must. It’s eye-catching, it makes a statement, it’s
                                                impressive graphic design. Increase or decrease the letter
                                                spacing depending.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                                                raw denim keffiyeh etsy art party before they sold out
                                                master cleanse gluten-free squid scenester freegan cosby
                                                sweater.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Just like in the image where we
                                                talked about using multiple fonts, you can see that the
                                                background in this graphic design is blurred. Whenever you
                                                put text on top of an image, it’s important that your
                                                viewers can understand.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                                                party before they sold out master cleanse gluten-free squid
                                                scenester freegan cosby sweater.</p>
                                        </div>
                                    </div>
                                    <div class="modal-footer v-modal-footer">
                                        <b-link class="btn btn-link link-success fw-medium" href="javascript:void(0);"
                                                @click="modalShow9 = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-link>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow10" class="v-modal-custom" hide-footer size="sm"
                                         title="Small Modal">
                                    <h6 class="fs-15">Give your text a good structure</h6>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">
                                                Raw denim you probably haven't heard of them jean shorts
                                                Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Too much or too little spacing, as in
                                                the example below, can make things unpleasant for the
                                                reader. The goal is to make your text as comfortable to read
                                                as possible.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">In some designs, you might adjust
                                                your tracking to create a certain artistic effect. It can
                                                also help you fix fonts that are poorly spaced to begin
                                                with.</p>
                                        </div>
                                    </div>
                                    <div class="modal-footer v-modal-footer">
                                        <b-link class="btn btn-link link-success fw-medium" href="javascript:void(0);"
                                                @click="modalShow10 = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-link>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Optional Modal Sizes --&gt;
    &lt;b-modal v-model=&quot;modalShow7&quot; hide-footer title=&quot;Fullscreen Modal Heading&quot; class=&quot;v-modal-custom&quot; fullscreen&gt;
        ...
    &lt;/b-modal&gt;
</code>

<code>
    &lt;b-modal v-model=&quot;modalShow8&quot; hide-footer title=&quot;Extra large Modal&quot; class=&quot;v-modal-custom&quot; size=&quot;xl&quot;&gt;
        ...
    &lt;/b-modal&gt;
</code>

<code>
    &lt;b-modal v-model=&quot;modalShow9&quot; hide-footer title=&quot;Large Modal&quot; class=&quot;v-modal-custom&quot; size=&quot;lg&quot;&gt;
        ...
    &lt;/b-modal&gt;
</code>

<code>
    &lt;b-modal v-model=&quot;modalShow10&quot; hide-footer title=&quot;Small Modal&quot; class=&quot;v-modal-custom&quot; size=&quot;sm&quot;&gt;
        ...
    &lt;/b-modal&gt;</code></pre>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Fullscreen Responsive Modals</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="fullscreen-modal">Show Code</label>
                                <input id="fullscreen-modal" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted text-muted">Below mentioned modifier classes are used to show fullscreen
                            modal as per minimum screen requirement.</p>
                        <div class="live-preview">
                            <div>
                                <div class="hstack gap-2 flex-wrap">
                                    <b-button variant="primary" @click="modalShow16 = !modalShow16"> Fullscreen Modal
                                    </b-button>
                                    <b-button variant="primary" @click="modalShow11 = !modalShow11"> Full Screen Below
                                        sm
                                    </b-button>
                                    <b-button variant="primary" @click="modalShow12 = !modalShow12"> Full Screen Below
                                        md
                                    </b-button>
                                    <b-button variant="primary" @click="modalShow13 = !modalShow13"> Full Screen Below
                                        lg
                                    </b-button>
                                    <b-button variant="primary" @click="modalShow14 = !modalShow14"> Full Screen Below
                                        xl
                                    </b-button>
                                    <b-button variant="primary" @click="modalShow15 = !modalShow15"> Full Screen Below
                                        xxl
                                    </b-button>
                                </div>


                                <b-modal v-model="modalShow16" class="v-modal-custom" fullscreen
                                         hide-footer title="Full screen Modal">
                                    <h6 class="fs-15">Give your text a good structure</h6>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">
                                                Raw denim you probably haven't heard of them jean shorts
                                                Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Too much or too little spacing, as in
                                                the example below, can make things unpleasant for the
                                                reader. The goal is to make your text as comfortable to read
                                                as possible.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">In some designs, you might adjust
                                                your tracking to create a certain artistic effect. It can
                                                also help you fix fonts that are poorly spaced to begin
                                                with.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">For that very reason, I went on a
                                                quest and spoke to many different professional graphic
                                                designers and asked them what graphic design tips they live.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">You've probably heard that opposites
                                                attract. The same is true for fonts. Don't be afraid to
                                                combine font styles that are different but complementary,
                                                like sans serif with serif, short with tall, or decorative
                                                with simple. Qui photo booth letterpress, commodo enim craft
                                                beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">For that very reason, I went on a
                                                quest and spoke to many different professional graphic
                                                designers and asked them what graphic design tips they live.
                                            </p>
                                        </div>
                                    </div>
                                    <h6 class="fs-16 my-3">Graphic Design</h6>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Opposites attract, and that’s a fact.
                                                It’s in our nature to be interested in the unusual, and
                                                that’s why using contrasting colors in Graphic Design is a
                                                must. It’s eye-catching, it makes a statement, it’s
                                                impressive graphic design. Increase or decrease the letter
                                                spacing depending.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Trust fund seitan letterpress, keytar
                                                raw denim keffiyeh etsy art party before they sold out
                                                master cleanse gluten-free squid scenester freegan cosby
                                                sweater.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Just like in the image where we
                                                talked about using multiple fonts, you can see that the
                                                background in this graphic design is blurred. Whenever you
                                                put text on top of an image, it’s important that your
                                                viewers can understand.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Keytar raw denim keffiyeh etsy art
                                                party before they sold out master cleanse gluten-free squid
                                                scenester freegan cosby sweater.</p>
                                        </div>
                                    </div>
                                    <div class="modal-footer v-modal-footer">

                                        <b-link class="btn btn-link link-success fw-medium" href="javascript:void(0);"
                                                @click="modalShow16 = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-link>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow11" class="v-modal-custom"
                                         dialog-class="modal-fullscreen-sm-down"
                                         hide-footer title="Full screen below sm">
                                    <h6 class="fs-15">Give your text a good structure</h6>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">
                                                Raw denim you probably haven't heard of them jean shorts
                                                Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Too much or too little spacing, as in
                                                the example below, can make things unpleasant for the
                                                reader. The goal is to make your text as comfortable to read
                                                as possible.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">In some designs, you might adjust
                                                your tracking to create a certain artistic effect. It can
                                                also help you fix fonts that are poorly spaced to begin
                                                with.</p>
                                        </div>
                                    </div>
                                    <div class="modal-footer v-modal-footer">
                                        <b-link class="btn btn-link link-success fw-medium" href="javascript:void(0);"
                                                @click="modalShow11 = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-link>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow12" class="v-modal-custom"
                                         dialog-class="modal-fullscreen-md-down"
                                         hide-footer title="Full screen below md">
                                    <h6 class="fs-15">Give your text a good structure</h6>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">
                                                Raw denim you probably haven't heard of them jean shorts
                                                Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Too much or too little spacing, as in
                                                the example below, can make things unpleasant for the
                                                reader. The goal is to make your text as comfortable to read
                                                as possible.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">In some designs, you might adjust
                                                your tracking to create a certain artistic effect. It can
                                                also help you fix fonts that are poorly spaced to begin
                                                with.</p>
                                        </div>
                                    </div>
                                    <div class="modal-footer v-modal-footer">
                                        <b-link class="btn btn-link link-success fw-medium" href="javascript:void(0);"
                                                @click="modalShow12 = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-link>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow13" class="v-modal-custom"
                                         dialog-class="modal-fullscreen-lg-down"
                                         hide-footer title="Full screen below lg">
                                    <h6 class="fs-15">Give your text a good structure</h6>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">
                                                Raw denim you probably haven't heard of them jean shorts
                                                Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Too much or too little spacing, as in
                                                the example below, can make things unpleasant for the
                                                reader. The goal is to make your text as comfortable to read
                                                as possible.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">In some designs, you might adjust
                                                your tracking to create a certain artistic effect. It can
                                                also help you fix fonts that are poorly spaced to begin
                                                with.</p>
                                        </div>
                                    </div>
                                    <div class="modal-footer v-modal-footer">
                                        <b-link class="btn btn-link link-success fw-medium" href="javascript:void(0);"
                                                @click="modalShow13 = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-link>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow14" class="v-modal-custom"
                                         dialog-class="modal-fullscreen-xl-down"
                                         hide-footer title="Full screen below xl">
                                    <h6 class="fs-15">Give your text a good structure</h6>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">
                                                Raw denim you probably haven't heard of them jean shorts
                                                Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Too much or too little spacing, as in
                                                the example below, can make things unpleasant for the
                                                reader. The goal is to make your text as comfortable to read
                                                as possible.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">In some designs, you might adjust
                                                your tracking to create a certain artistic effect. It can
                                                also help you fix fonts that are poorly spaced to begin
                                                with.</p>
                                        </div>
                                    </div>
                                    <div class="modal-footer v-modal-footer">
                                        <b-link class="btn btn-link link-success fw-medium" href="javascript:void(0);"
                                                @click="modalShow14 = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-link>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow15" class="v-modal-custom"
                                         dialog-class="modal-fullscreen-xxl-down"
                                         hide-footer title="Full screen below xxl">
                                    <h6 class="fs-15">Give your text a good structure</h6>
                                    <div class="d-flex">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">
                                                Raw denim you probably haven't heard of them jean shorts
                                                Austin.
                                                Nesciunt tofu stumptown aliqua, retro synth master cleanse.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">Too much or too little spacing, as in
                                                the example below, can make things unpleasant for the
                                                reader. The goal is to make your text as comfortable to read
                                                as possible.</p>
                                        </div>
                                    </div>
                                    <div class="d-flex mt-2">
                                        <div class="flex-shrink-0">
                                            <i class="ri-checkbox-circle-fill text-success"></i>
                                        </div>
                                        <div class="flex-grow-1 ms-2">
                                            <p class="text-muted mb-0">In some designs, you might adjust
                                                your tracking to create a certain artistic effect. It can
                                                also help you fix fonts that are poorly spaced to begin
                                                with.</p>
                                        </div>
                                    </div>
                                    <div class="modal-footer v-modal-footer">

                                        <b-link class="btn btn-link link-success fw-medium" href="javascript:void(0);"
                                                @click="modalShow15 = false">
                                            <i class="ri-close-line me-1 align-middle"></i> Close
                                        </b-link>
                                        <b-button type="button" variant="primary">Save Changes</b-button>

                                    </div>
                                </b-modal>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup"><code>&lt;!-- Fullscreen Modals --&gt;

&lt;b-modal v-model=&quot;modalShow16&quot; hide-footer title=&quot;Full screen Modal&quot; class=&quot;v-modal-custom&quot; fullscreen&gt;
    ...
&lt;/b-modal&gt;
</code>

<code>
&lt;b-modal v-model=&quot;modalShow11&quot; hide-footer title=&quot;Full screen below sm&quot; dialog-class=&quot;modal-fullscreen-sm-down&quot; class=&quot;v-modal-custom&quot;&gt;
    ...
&lt;/b-modal&gt;
</code>

<code>
&lt;b-modal v-model=&quot;modalShow12&quot; hide-footer title=&quot;Full screen below md&quot; dialog-class=&quot;modal-fullscreen-md-down&quot; class=&quot;v-modal-custom&quot;&gt;
    ...
&lt;/b-modal&gt;
</code>

<code>
&lt;b-modal v-model=&quot;modalShow13&quot; hide-footer title=&quot;Full screen below lg&quot; dialog-class=&quot;modal-fullscreen-lg-down&quot; class=&quot;v-modal-custom&quot;&gt;
    ...
&lt;/b-modal&gt;
</code>

<code>
&lt;b-modal v-model=&quot;modalShow14&quot; hide-footer title=&quot;Full screen below xl&quot; dialog-class=&quot;modal-fullscreen-xl-down&quot; class=&quot;v-modal-custom&quot;&gt;
    ...
&lt;/b-modal&gt;
</code>

<code>
&lt;b-modal v-model=&quot;modalShow15&quot; hide-footer title=&quot;Full screen below xxl&quot; dialog-class=&quot;modal-fullscreen-xxl-down&quot; class=&quot;v-modal-custom&quot;&gt;
    ...
&lt;/b-modal&gt;
</code></pre>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Animation Modals</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="animation-modal-showcode">Show Code</label>
                                <input id="animation-modal-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>fadeInRight</code>,
                            <code>fadeInLeft</code>,
                            <code>fadeInUp</code>,
                            <code>flip</code>, or
                            <code>zoomIn</code> class to modal class to set different modal with animation effect
                            respectively.
                        </p>
                        <div class="live-preview">
                            <div>
                                <div class="hstack gap-2 flex-wrap">
                                    <b-button variant="primary" @click="modalShow17 = !modalShow17"> Fade In Right Modal
                                    </b-button>
                                    <b-button variant="primary" @click="modalShow18 = !modalShow18"> Fade In Left Modal
                                    </b-button>
                                    <b-button variant="primary" @click="modalShow19 = !modalShow19"> Fade In Up Modal
                                    </b-button>
                                    <b-button variant="primary" @click="modalShow20 = !modalShow20"> Flip Modal
                                    </b-button>
                                    <b-button variant="primary" @click="modalShow21 = !modalShow21"> Zoom In Modal
                                    </b-button>
                                </div>

                                <b-modal v-model="modalShow17" centered class="v-modal-custom"
                                         hide-footer modal-class="fadeInRight" title="Modal Heading">
                                    <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                    <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                        dreams, he found himself transformed in his bed into a horrible
                                        vermin. He lay on his armour-like back, and if he lifted his head a
                                        little he could see his brown belly, slightly domed and divided by
                                        arches into stiff sections.</p>
                                    <p class="text-muted">The bedding was hardly able to cover it and seemed
                                        ready to slide off any moment. His many legs, pitifully thin
                                        compared with the size of the rest of him, waved about helplessly as
                                        he looked. "What's happened to me?" he thought.</p>
                                    <div class="modal-footer v-modal-footer">
                                        <b-button type="button" variant="light" @click="modalShow17 = false">Close
                                        </b-button>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow18" centered class="v-modal-custom"
                                         hide-footer modal-class="fadeInLeft" title="Modal Heading">
                                    <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                    <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                        dreams, he found himself transformed in his bed into a horrible
                                        vermin. He lay on his armour-like back, and if he lifted his head a
                                        little he could see his brown belly, slightly domed and divided by
                                        arches into stiff sections.</p>
                                    <p class="text-muted">The bedding was hardly able to cover it and seemed
                                        ready to slide off any moment. His many legs, pitifully thin
                                        compared with the size of the rest of him, waved about helplessly as
                                        he looked. "What's happened to me?" he thought.</p>
                                    <div class="modal-footer v-modal-footer">
                                        <b-button type="button" variant="light" @click="modalShow18 = false">Close
                                        </b-button>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow19" centered class="v-modal-custom" hide-footer
                                         modal-class="fadeInUp" title="Modal Heading">
                                    <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                    <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                        dreams, he found himself transformed in his bed into a horrible
                                        vermin. He lay on his armour-like back, and if he lifted his head a
                                        little he could see his brown belly, slightly domed and divided by
                                        arches into stiff sections.</p>
                                    <p class="text-muted">The bedding was hardly able to cover it and seemed
                                        ready to slide off any moment. His many legs, pitifully thin
                                        compared with the size of the rest of him, waved about helplessly as
                                        he looked. "What's happened to me?" he thought.</p>
                                    <div class="modal-footer v-modal-footer">
                                        <b-button type="button" variant="light" @click="modalShow19 = false">Close
                                        </b-button>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow20" centered class="v-modal-custom" hide-footer
                                         modal-class="flip" title="Modal Heading">
                                    <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                    <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                        dreams, he found himself transformed in his bed into a horrible
                                        vermin. He lay on his armour-like back, and if he lifted his head a
                                        little he could see his brown belly, slightly domed and divided by
                                        arches into stiff sections.</p>
                                    <p class="text-muted">The bedding was hardly able to cover it and seemed
                                        ready to slide off any moment. His many legs, pitifully thin
                                        compared with the size of the rest of him, waved about helplessly as
                                        he looked. "What's happened to me?" he thought.</p>
                                    <div class="modal-footer v-modal-footer">
                                        <b-button type="button" variant="light" @click="modalShow20 = false">Close
                                        </b-button>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow21" centered class="v-modal-custom" hide-footer
                                         modal-class="zoomIn" title="Modal Heading">
                                    <h5 class="fs-16">Overflowing text to show scroll behavior</h5>
                                    <p class="text-muted">One morning, when Gregor Samsa woke from troubled
                                        dreams, he found himself transformed in his bed into a horrible
                                        vermin. He lay on his armour-like back, and if he lifted his head a
                                        little he could see his brown belly, slightly domed and divided by
                                        arches into stiff sections.</p>
                                    <p class="text-muted">The bedding was hardly able to cover it and seemed
                                        ready to slide off any moment. His many legs, pitifully thin
                                        compared with the size of the rest of him, waved about helplessly as
                                        he looked. "What's happened to me?" he thought.</p>
                                    <div class="modal-footer v-modal-footer">
                                        <b-button type="button" variant="light" @click="modalShow21 = false">Close
                                        </b-button>
                                        <b-button type="button" variant="primary">Save Changes</b-button>
                                    </div>
                                </b-modal>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup"><code>&lt;!-- Animation Modals --&gt;

&lt;b-modal v-model=&quot;modalShow17&quot; hide-footer title=&quot;Modal Heading&quot; modal-class=&quot;fadeInRight&quot; class=&quot;v-modal-custom&quot; centered&gt;
    ...
&lt;/b-modal&gt;

</code>

<code>
    &lt;b-modal v-model=&quot;modalShow18&quot; hide-footer title=&quot;Modal Heading&quot; modal-class=&quot;fadeInLeft&quot; class=&quot;v-modal-custom&quot; centered&gt;
        ...
    &lt;/b-modal&gt;

</code>

<code>
    &lt;b-modal v-model=&quot;modalShow19&quot; hide-footer title=&quot;Modal Heading&quot; modal-class=&quot;fadeInUp&quot; class=&quot;v-modal-custom&quot; centered&gt;
        ...
    &lt;/b-modal&gt;
</code>

<code>
    &lt;b-modal v-model=&quot;modalShow20&quot; hide-footer title=&quot;Modal Heading&quot; modal-class=&quot;flip&quot; class=&quot;v-modal-custom&quot; centered&gt;
        ...
    &lt;/b-modal&gt;

</code>

<code>
    &lt;b-modal v-model=&quot;modalShow21&quot; hide-footer title=&quot;Modal Heading&quot; modal-class=&quot;zoomIn&quot; class=&quot;v-modal-custom&quot; centered&gt;
    ...
    &lt;/b-modal&gt;

</code></pre>
                        </div>
                    </b-card-body>

                </b-card>

            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Modal Positions</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="positions-modal-showcode">Show Code</label>
                                <input id="positions-modal-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted text-muted">
                            Use
                            <code>modal-dialog-right</code>,
                            <code>modal-dialog-bottom</code>, or
                            <code>modal-dialog-bottom-right</code> class to modal-dialog class to set modal at different
                            positions respectively.
                        </p>
                        <div class="live-preview">
                            <div>
                                <div class="hstack gap-2 flex-wrap">
                                    <b-button variant="primary" @click="modalShow22 = !modalShow22">Top Modal</b-button>
                                    <b-button variant="secondary" @click="modalShow23 = !modalShow23">Top Right Modal
                                    </b-button>
                                    <b-button variant="success" @click="modalShow24 = !modalShow24">Bottom Modal
                                    </b-button>
                                    <b-button variant="danger" @click="modalShow25 = !modalShow25">Bottom Right Modal
                                    </b-button>
                                </div>

                                <b-modal v-model="modalShow22" class="v-modal-custom" hide-footer hide-header-close>
                                    <div class="modal-body text-center">
                                        <lottie :height="120" :options="defaultOptions4"
                                                :width="120" colors="primary:#121331,secondary:#08a88a" trigger="loop"/>
                                        <div class="mt-4">
                                            <h4 class="mb-3">Your event has been created.</h4>
                                            <p class="text-muted mb-4">The transfer was not successfully
                                                received by us. the email of the recipient wasn't correct.</p>
                                            <div class="hstack gap-2 justify-content-center">
                                                <b-link class="btn btn-link link-success fw-medium"
                                                        href="javascript:void(0);"
                                                        @click="modalShow22 = false">
                                                    <i class="ri-close-line me-1 align-middle"></i> Close
                                                </b-link>
                                                <b-link class="btn btn-success" href="javascript:void(0);">
                                                    Completed
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow23" class="v-modal-custom" dialog-class="modal-dialog-right"
                                         hide-footer hide-header-close>
                                    <div class="modal-body text-center">
                                        <lottie :height="120" :options="defaultOptions4"
                                                :width="120" colors="primary:#121331,secondary:#08a88a" trigger="loop"/>
                                        <div class="mt-4">
                                            <h4 class="mb-3">Your event has been created.</h4>
                                            <p class="text-muted mb-4">The transfer was not successfully
                                                received by us. the email of the recipient wasn't correct.</p>
                                            <div class="hstack gap-2 justify-content-center">
                                                <b-link class="btn btn-link link-success fw-medium"
                                                        href="javascript:void(0);"
                                                        @click="modalShow23 = false">
                                                    <i class="ri-close-line me-1 align-middle"></i> Close
                                                </b-link>
                                                <b-link class="btn btn-success" href="javascript:void(0);">
                                                    Completed
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow24" class="v-modal-custom" dialog-class="modal-dialog-bottom"
                                         hide-footer hide-header-close>
                                    <div class="modal-body text-center">
                                        <lottie :height="120" :options="defaultOptions4"
                                                :width="120" colors="primary:#121331,secondary:#08a88a" trigger="loop"/>
                                        <div class="mt-4">
                                            <h4 class="mb-3">Your event has been created.</h4>
                                            <p class="text-muted mb-4">The transfer was not successfully
                                                received by us. the email of the recipient wasn't correct.</p>
                                            <div class="hstack gap-2 justify-content-center">
                                                <b-link class="btn btn-link link-success fw-medium"
                                                        href="javascript:void(0);"
                                                        @click="modalShow24 = false">
                                                    <i class="ri-close-line me-1 align-middle"></i> Close
                                                </b-link>
                                                <b-link class="btn btn-success" href="javascript:void(0);">
                                                    Completed
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-modal>

                                <b-modal v-model="modalShow25" class="v-modal-custom"
                                         dialog-class="modal-dialog-bottom-right"
                                         hide-footer hide-header-close>
                                    <div class="modal-body text-center">
                                        <lottie :height="120" :options="defaultOptions4"
                                                :width="120" colors="primary:#121331,secondary:#08a88a" trigger="loop"/>
                                        <div class="mt-4">
                                            <h4 class="mb-3">Your event has been created.</h4>
                                            <p class="text-muted mb-4">The transfer was not successfully
                                                received by us. the email of the recipient wasn't correct.</p>
                                            <div class="hstack gap-2 justify-content-center">
                                                <b-link class="btn btn-link link-success fw-medium"
                                                        href="javascript:void(0);"
                                                        @click="modalShow25 = false">
                                                    <i class="ri-close-line me-1 align-middle"></i> Close
                                                </b-link>
                                                <b-link class="btn btn-success" href="javascript:void(0);">
                                                    Completed
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-modal>

                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup"><code>&lt;!-- Animation Modals --&gt;

    &lt;b-modal v-model=&quot;modalShow22&quot; hide-footer class=&quot;v-modal-custom&quot; hide-header-close&gt;
        ...
    &lt;/b-modal&gt;

</code>

<code>
    &lt;b-modal v-model=&quot;modalShow23&quot; hide-footer dialog-class=&quot;modal-dialog-right&quot; class=&quot;v-modal-custom&quot; hide-header-close&gt;
        ...
    &lt;/b-modal&gt;
</code>

<code>
    &lt;b-modal v-model=&quot;modalShow24&quot; hide-footer dialog-class=&quot;modal-dialog-bottom&quot; class=&quot;v-modal-custom&quot; hide-header-close&gt;
        ...
    &lt;/b-modal&gt;

</code>

<code>
    &lt;b-modal v-model=&quot;modalShow25&quot; hide-footer dialog-class=&quot;modal-dialog-bottom-right&quot; class=&quot;v-modal-custom&quot; hide-header-close&gt;
        ...
    &lt;/b-modal&gt;
</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row class="mt-2">
            <b-col lg="12">
                <div class="justify-content-between d-flex align-items-center mb-3">
                    <h5 class="mb-0 pb-1 text-decoration-underline">Custom Modals Example</h5>
                </div>
                <b-row>
                    <b-col md="6" xl="4">
                        <b-card class="text-center border" no-body>
                            <b-card-body class="p-4 pb-0">
                                <h5 class="mb-4">Success Message</h5>
                                <p class="text-muted">Here is an example of a sweet alert with a success message.</p>
                                <div>
                                    <b-button variant="primary" @click="modalShow26 = !modalShow26">Click me</b-button>
                                </div>

                                <b-row class="justify-content-center mt-2">
                                    <b-col lg="10">
                                        <div>
                                            <img alt="Mac Image" class="img-fluid"
                                                 src="@/assets/images/modals/success-payment.png">
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>

                        <b-modal v-model="modalShow26" body-class="p-0" centered class="v-modal-custom" hide-footer
                                 hide-header-close>
                            <div class="text-center px-5 pt-4">
                                <div class="text-end">
                                    <button aria-label="Close" class="btn-close text-end" data-bs-dismiss="modal"
                                            type="button" @click="modalShow26 = false"></button>
                                </div>
                                <div class="mt-2">
                                    <lottie :height="150" :options="defaultOptions5" :width="150" trigger="hover"/>

                                    <h4 class="mb-3 mt-4">Your Transaction is Successfull !</h4>
                                    <p class="text-muted fs-15 mb-4">Successful transaction is the status of
                                        operation whose result is the payment of the amount paid by the customer
                                        in favor of the merchant.</p>
                                    <div class="hstack gap-2 justify-content-center">
                                        <b-button variant="primary">New transaction</b-button>
                                        <b-button variant="soft-success"><i class="ri-links-line align-bottom"></i> Copy
                                            tracking link
                                        </b-button>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer bg-light p-3 mt-5 justify-content-center">
                                <p class="mb-0 text-muted">You like our service?
                                    <b-link class="link-secondary fw-semibold"
                                            href="javascript:void(0)">Invite
                                        Friends
                                    </b-link>
                                </p>
                            </div>
                        </b-modal>

                    </b-col>

                    <b-col md="6" xl="4">
                        <b-card class="text-center border" no-body>
                            <b-card-body class="p-4 pb-0">
                                <h5 class="mb-4">Login Modals</h5>
                                <p class="text-muted">Here is an example of a sweet alert with a error message.</p>
                                <div>
                                    <b-button variant="primary" @click="modalShow27 = !modalShow27">Click me</b-button>
                                </div>
                                <b-row class="justify-content-center mt-2">
                                    <b-col lg="10">
                                        <div>
                                            <img alt="Mac Image" class="img-fluid"
                                                 src="@/assets/images/modals/login.png">
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>

                        <b-modal v-model="modalShow27" body-class="p-0" centered class="v-modal-custom"
                                 content-class="border-0 overflow-hidden" header-class="p-0" hide-footer
                                 hide-header-close>
                            <div class="modal-body login-modal p-5">
                                <h5 class="text-white fs-20">Login</h5>
                                <p class="text-white-50 mb-4">Don't have an account?
                                    <b-link class="text-white"
                                            href="javascript:void(0);">Sign Up.
                                    </b-link>
                                </p>
                                <div class="vstack gap-2 justify-content-center">
                                    <b-button variant="light"><i class="ri-google-fill align-bottom text-danger"></i>
                                        Google
                                    </b-button>
                                    <b-button variant="info"><i class="ri-facebook-fill align-bottom"></i> Facebook
                                    </b-button>
                                </div>
                            </div>
                            <div class="modal-body p-5">
                                <h5 class="mb-3">Login with Email</h5>
                                <form>
                                    <div class="mb-2">
                                        <input id="exampleInputEmail1" class="form-control"
                                               placeholder="Enter your email/username"
                                               type="email">
                                    </div>
                                    <div class="mb-3">
                                        <input id="exampleInputPassword1" class="form-control"
                                               placeholder="Enter your password"
                                               type="password">
                                        <div class="mt-1 text-end">
                                            <b-link href="auth/reset-pwd-basic">Forgot password ?</b-link>
                                        </div>
                                    </div>
                                    <b-button class="w-100" type="submit" variant="primary">Submit</b-button>
                                </form>
                            </div>
                        </b-modal>
                    </b-col>

                    <b-col md="6" xl="4">
                        <b-card class="text-center border" no-body>
                            <b-card-body class="p-4 pb-0">
                                <h5 class="mb-4">Subscribe Modals</h5>
                                <p class="text-muted">Here is an example of a sweet alert with a warning message.</p>
                                <div>
                                    <b-button variant="primary" @click="modalShow28 = !modalShow28">Click me</b-button>
                                </div>
                                <b-row class="justify-content-center mt-2">
                                    <b-col lg="10">
                                        <div>
                                            <img alt="Mac Image" class="img-fluid"
                                                 src="@/assets/images/modals/subscribe.png">
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>

                        <b-modal v-model="modalShow28" body-class="p-0" centered class="v-modal-custom"
                                 content-class="border-0 overflow-hidden" header-class="p-0" hide-footer
                                 hide-header-close
                                 size="lg">
                            <b-row class="g-0">
                                <b-col lg="7">
                                    <div class="modal-body p-5">
                                        <h2 class="lh-base">Subscribe now today to get <span class="text-danger">20%
                                                off</span> experiences!</h2>
                                        <p class="text-muted mb-4">A free bet is a bet which is provided by a
                                            betting
                                            site for a customer to place and then benefit from the winnings.
                                            Free bets are commonly used as welcome offers.</p>
                                        <div class="input-group mb-3">

                                            <input aria-describedby="button-addon1"
                                                   aria-label="Example text with button addon" class="form-control"
                                                   placeholder="Enter your email"
                                                   type="text">
                                            <b-button id="button-addon1" type="button" variant="primary">Subscript Now
                                            </b-button>
                                        </div>

                                        <div class="form-check">
                                            <input id="exampleCheck1" class="form-check-input" type="checkbox">
                                            <label class="form-check-label" for="exampleCheck1">By subscribing
                                                to a particular channel or user on YouTube, you can receive
                                                instant updates.</label>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col lg="5">
                                    <div class="subscribe-modals-cover h-100">
                                        <img alt="" class="h-100 w-100 object-cover"
                                             src="@/assets/images/auth-one-bg.jpg"
                                             style="clip-path: polygon(100% 0%, 100% 100%, 100% 100%, 0% 100%, 25% 50%, 0% 0%);">
                                    </div>
                                </b-col>
                            </b-row>
                        </b-modal>
                    </b-col>

                    <b-col md="6" xl="4">
                        <b-card class="text-center border" no-body>
                            <b-card-body class="p-4 pb-0">
                                <h5 class="mb-4">Sign Up Modals</h5>
                                <p class="text-muted">Here is an example of a sweet alert with a community registration
                                    field. </p>
                                <div>
                                    <b-button variant="primary" @click="modalShow29 = !modalShow29">Click me</b-button>
                                </div>
                                <b-row class="justify-content-center mt-2">
                                    <b-col lg="10">
                                        <div>
                                            <img alt="Mac Image" class="img-fluid"
                                                 src="@/assets/images/modals/signup.png">
                                        </div>
                                    </b-col>
                                </b-row>
                            </b-card-body>
                        </b-card>

                        <b-modal v-model="modalShow29" body-class="p-0" centered class="v-modal-custom"
                                 content-class="border-0 overflow-hidden" header-class="p-3" hide-footer
                                 title="Sign Up">
                            <b-alert class="rounded-0 mb-0" show variant="success">
                                <p class="mb-0">Up to <span class="fw-semibold">50% OFF</span>, Hurry up before
                                    the stock ends</p>
                            </b-alert>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label class="form-label" for="fullName">Full Name</label>
                                        <input id="fullName" class="form-control" placeholder="Enter your name"
                                               type="text">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="emailInput1">Email address</label>
                                        <input id="emailInput1" class="form-control" placeholder="Enter your email"
                                               type="email">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="exampleInputPassword">Password</label>
                                        <input id="exampleInputPassword" class="form-control"
                                               placeholder="Enter your password"
                                               type="password">
                                    </div>
                                    <div class="mb-3 form-check">
                                        <input id="checkTerms" class="form-check-input" type="checkbox">
                                        <label class="form-check-label" for="checkTerms">I agree to the <span
                                            class="fw-semibold">Terms of Service</span> and Privacy
                                            Policy</label>
                                    </div>
                                    <div class="text-end">
                                        <b-button type="submit" variant="primary">Sign Up Now</b-button>
                                    </div>
                                </form>
                            </div>
                        </b-modal>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </Layout>
</template>
