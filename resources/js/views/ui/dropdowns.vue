<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";

import "prismjs";
import "prismjs/themes/prism.css";

export default {
    data() {
        return {
            title: "Dropdowns",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Dropdowns",
                    active: true,
                },
            ],
        };
    },
    name: "Dropdowns",
    components: {
        Layout,
        PageHeader,
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
                        <b-card-title class="mb-0 flex-grow-1">Single Button Dropdown</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="dropdown-base-example">Show Code</label>
                                <input id="dropdown-base-example" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>b-dropdown</code> to create a dropdown toggle with
                            &lt;button&gt; element.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-3">

                                <b-dropdown text="Dropdown button" variant="primary">
                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                    <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                </b-dropdown>

                                <div class="dropdown">
                                    <b-link aria-expanded="false" class="btn btn-secondary dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            href="#">Dropdown link
                                    </b-link>

                                    <div class="dropdown-menu">
                                        <b-link class="dropdown-item" href="#">Action</b-link>
                                        <b-link class="dropdown-item" href="#">Another action</b-link>
                                        <b-link class="dropdown-item" href="#">Something else here</b-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 300px">
    <code>&lt;!-- Single Button Dropdown --&gt;
    &lt;b-dropdown variant=&quot;secondary&quot; text=&quot;Dropdown button&quot; id=&quot;dropdownMenuButton&quot;&gt;
    &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;
    </code>
    <code>&lt;b-dropdown variant=&quot;secondary&quot; text=&quot;Dropdown link&quot;&gt;
    &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
    &lt;/b-dropdown&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Dropdown Color Variant</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="dropdown-variant">Show Code</label>
                                <input id="dropdown-variant" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>b-dropdown variant=""</code> class with below mentioned variation to color
                            dropdown toggle.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-3">
                                <div>
                                    <b-button-group class="me-3">
                                        <b-dropdown variant="primary">
                                            <template v-slot:button-content> Primary</template>
                                            <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Another action
                                            </b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Something else here
                                            </b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item href="javascript: void(0);">Separated link
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </b-button-group>

                                    <b-button-group class="me-3">
                                        <b-dropdown variant="success">
                                            <template v-slot:button-content> Success</template>
                                            <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Another action
                                            </b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Something else here
                                            </b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item href="javascript: void(0);">Separated link
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </b-button-group>

                                    <b-button-group class="me-3">
                                        <b-dropdown variant="light">
                                            <template v-slot:button-content> Light</template>
                                            <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Another action
                                            </b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Something else here
                                            </b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item href="javascript: void(0);">Separated link
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </b-button-group>
                                    <b-button-group class="me-3">
                                        <b-dropdown variant="info">
                                            <template v-slot:button-content> Info</template>
                                            <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Another action
                                            </b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Something else here
                                            </b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item href="javascript: void(0);">Separated link
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </b-button-group>
                                    <b-button-group class="me-3">
                                        <b-dropdown variant="secondary">
                                            <template v-slot:button-content> Secondary</template>
                                            <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Another action
                                            </b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Something else here
                                            </b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item href="javascript: void(0);">Separated link
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </b-button-group>

                                    <b-button-group class="me-3">
                                        <b-dropdown variant="warning">
                                            <template v-slot:button-content> Warning</template>
                                            <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Another action
                                            </b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Something else here
                                            </b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item href="javascript: void(0);">Separated link
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </b-button-group>
                                    <b-button-group class="me-3">
                                        <b-dropdown variant="danger">
                                            <template v-slot:button-content> Danger</template>
                                            <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Another action
                                            </b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Something else here
                                            </b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item href="javascript: void(0);">Separated link
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </b-button-group>

                                    <b-button-group>
                                        <b-dropdown variant="dark">
                                            <template v-slot:button-content> Dark</template>
                                            <b-dropdown-item href="javascript: void(0);">Action</b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Another action
                                            </b-dropdown-item>
                                            <b-dropdown-item href="javascript: void(0);">Something else here
                                            </b-dropdown-item>
                                            <b-dropdown-divider></b-dropdown-divider>
                                            <b-dropdown-item href="javascript: void(0);">Separated link
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </b-button-group>
                                </div>
                            </div>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;!-- Dropdown Variant --&gt;
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;primary&quot; text=&quot;Primary&quot;&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;success&quot; text=&quot;Success&quot;&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;light&quot; text=&quot;Light&quot;&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;info&quot; text=&quot;Info&quot;&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;secondary&quot; text=&quot;Secondary&quot;&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;warning&quot; text=&quot;Warning&quot;&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;danger&quot; text=&quot;Danger&quot;&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code>

<code>&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;dark&quot; text=&quot;Dark&quot;&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item&quot; href=&quot;/#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;&lt;!-- /btn-group --&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Split Button Dropdown</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="spilt-button-dropdown">Show Code</label>
                                <input id="spilt-button-dropdown" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>b-dropdown split</code> to create split button
                            dropdowns as a single button dropdown.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-3">
                                <b-dropdown split text="Primary" variant="primary">
                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                </b-dropdown>
                                <b-dropdown split text="Success" variant="success">
                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                </b-dropdown>
                                <b-dropdown split text="Light" variant="light">
                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                </b-dropdown>


                                <b-dropdown split text="Info" variant="info">
                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                </b-dropdown>
                                <b-dropdown split text="Secondary" variant="secondary">
                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                </b-dropdown>
                                <b-dropdown split text="Warning" variant="warning">
                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                </b-dropdown>
                                <b-dropdown split text="Danger" variant="danger">
                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                </b-dropdown>
                                <b-dropdown split text="Dark" variant="dark">
                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                                </b-dropdown>
                            </div>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;!-- Split Button Dropdown --&gt;

&lt;b-dropdown split variant=&quot;primary&quot; text=&quot;Primary&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;b-dropdown split variant=&quot;suceess&quot; text=&quot;Success&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;b-dropdown split variant=&quot;light&quot; text=&quot;Light&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;b-dropdown split variant=&quot;info&quot; text=&quot;Info&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;b-dropdown split variant=&quot;secondary&quot; text=&quot;Secondary&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;b-dropdown split variant=&quot;Warning&quot; text=&quot;warning&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;b-dropdown split variant=&quot;danger&quot; text=&quot;Danger&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;</code>

<code>&lt;b-dropdown split variant=&quot;dark&quot; text=&quot;Dark&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Dropdown Sizing</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="dropdown-size">Show Code</label>
                                <input id="dropdown-size" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>b-dropdown size="lg"</code> class to create a large size dropdown button
                            and <code>b-dropdown size="sm"</code> to create a small size dropdown button.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-3 align-items-center">
                                <b-dropdown size="lg" variant="primary">
                                    <template v-slot:button-content>
                                        Large button
                                    </template>
                                    <b-dropdown-item-button>Action</b-dropdown-item-button>
                                    <b-dropdown-item-button>Another action</b-dropdown-item-button>
                                    <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                                </b-dropdown>

                                <b-dropdown size="lg" split text="Large split button" variant="light">
                                    <b-dropdown-item-button>Action</b-dropdown-item-button>
                                    <b-dropdown-item-button>Another action</b-dropdown-item-button>
                                    <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                                </b-dropdown>

                                <b-dropdown size="sm" variant="primary">
                                    <template v-slot:button-content>
                                        Small button
                                    </template>
                                    <b-dropdown-item-button>Action</b-dropdown-item-button>
                                    <b-dropdown-item-button>Another action</b-dropdown-item-button>
                                    <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                                </b-dropdown>

                                <b-dropdown size="sm" split text="Small split button" variant="light">
                                    <b-dropdown-item-button>Action</b-dropdown-item-button>
                                    <b-dropdown-item-button>Another action</b-dropdown-item-button>
                                    <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                                </b-dropdown>
                            </div>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;!-- Dropdown Sizing --&gt;
&lt;b-button-group&gt;
&lt;b-dropdown size=&quot;lg&quot; variant=&quot;primary&quot; text=&quot;Large button&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group&gt;
&lt;b-dropdown split size=&quot;lg&quot; variant=&quot;light&quot; text=&quot;Large split button&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group&gt;
&lt;b-dropdown size=&quot;sm&quot; variant=&quot;primary&quot; text=&quot;Small button&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>

<code>&lt;b-button-group&gt;
&lt;b-dropdown split size=&quot;sm&quot; variant=&quot;light&quot; text=&quot;Small split button&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
</pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Dark Dropdowns</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="dark-dropdowns">Show Code</label>
                                <input id="dark-dropdowns" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>b-dropdown menu-class="dropdown-menu-dark"</code> class onto an existing
                            dropdown-menu to create dropdown items dark.
                        </p>
                        <div class="live-preview">
                            <b-dropdown menu-class="dropdown-menu-dark" text="Dropdown button" variant="light">
                                <b-dropdown-item-button>Action</b-dropdown-item-button>
                                <b-dropdown-item-button>Another action</b-dropdown-item-button>
                                <b-dropdown-item-button>Something else here</b-dropdown-item-button>
                                <b-dropdown-divider></b-dropdown-divider>
                                <b-dropdown-item-button>Separated link</b-dropdown-item-button>

                            </b-dropdown>

                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 200px">
<code>&lt;!-- Dark Dropdowns --&gt;
&lt;b-dropdown variant=&quot;secondary&quot; text=&quot;Dropdown button&quot; dark &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
</code>
  </pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Alignment options</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="alignment-options">Show Code</label>
                                <input id="alignment-options" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Dropdown demo with various
                            <code>dropdown alignment</code> options.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-3">
                                <b-button-group>
                                    <b-dropdown text="Dropdown" variant="secondary">
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                    </b-dropdown>
                                </b-button-group>
                                <b-button-group>
                                    <b-dropdown right text="Right-aligned menu" variant="secondary">
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                    </b-dropdown>
                                </b-button-group>

                                <b-button-group>
                                    <b-dropdown right text="Left-aligned, right-aligned lg"
                                                toggle-class="dropdown-menu-lg-end"
                                                variant="secondary">
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                    </b-dropdown>
                                </b-button-group>

                                <b-button-group>
                                    <b-dropdown text="Right-aligned, left-aligned lg"
                                                toggle-class="dropdown-menu-lg-start"
                                                variant="secondary">
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                    </b-dropdown>
                                </b-button-group>

                                <b-btn-group class="dropstart">
                                    <b-dropdown dropleft text="Dropstart" variant="secondary">
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                    </b-dropdown>
                                </b-btn-group>

                                <b-btn-group class="dropend">
                                    <b-dropdown dropright text="Dropend" variant="secondary">
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                    </b-dropdown>
                                </b-btn-group>

                                <b-btn-group class="dropup">
                                    <b-dropdown dropup text="Dropup" variant="secondary">
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                    </b-dropdown>
                                </b-btn-group>
                            </div>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Alignment options --&gt;
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;secondary&quot; text=&quot;Dropdown&quot; id=&quot;dropdownMenuButton&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
<code>
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;secondary&quot; right text=&quot;Right-aligned menu&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
<code>
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;secondary&quot; right text=&quot;Left-aligned, right-aligned lg&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
<code>
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;secondary&quot; left text=&quot;Right-aligned, left-aligned lg&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
<code>
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;secondary&quot; dropleft text=&quot;Dropstart&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
<code>
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;secondary&quot; dropright  text=&quot;Dropend&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
<code>
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;secondary&quot; dropup text=&quot;Dropup&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
</pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Dropdown Options</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="dropdown-options">Show Code</label>
                                <input id="dropdown-options" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>data-bs-offset</code> or <code>data-bs-reference</code> to
                            change the position of the dropdown.
                        </p>

                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-3">

                                <b-dropdown id="dropdown-offset" class="me-1" offset="10, 20" text="Offset"
                                            variant="secondary">
                                    <b-dropdown-item href="#">Action</b-dropdown-item>
                                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                                    <b-dropdown-item href="#">Something else here</b-dropdown-item>
                                </b-dropdown>

                                <b-button-group>
                                    <button class="btn btn-secondary" type="button">
                                        Reference
                                    </button>
                                    <button id="dropdownMenuReference"
                                            aria-expanded="false"
                                            class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                            data-bs-reference="parent" data-bs-toggle="dropdown"
                                            type="button">
                                        <span class="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul aria-labelledby="dropdownMenuReference" class="dropdown-menu">
                                        <li>
                                            <b-link class="dropdown-item" href="#">Action</b-link>
                                        </li>
                                        <li>
                                            <b-link class="dropdown-item" href="#">Another action</b-link>
                                        </li>
                                        <li>
                                            <b-link class="dropdown-item" href="#">Something else here</b-link>
                                        </li>
                                        <li>
                                            <hr class="dropdown-divider"/>
                                        </li>
                                        <li>
                                            <b-link class="dropdown-item" href="#">Separated link</b-link>
                                        </li>
                                    </ul>
                                </b-button-group>
                            </div>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Dropdown Options --&gt;
&lt;b-dropdown variant=&quot;secondary&quot; offset="20" text=&quot;Offset&quot; id=&quot;dropdownMenuOffset&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
</code>

<code>
&lt;b-button-group&gt;
&lt;b-dropdown split variant=&quot;secondary&quot; dropup text=&quot;Reference&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
</pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Auto Close Behavior</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="auto-close-behavior">Show Code</label>
                                <input id="auto-close-behavior" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            By default, the dropdown menu is closed when clicking inside or
                            outside the dropdown menu. You can use the
                            <code>autoClose</code> option to change this behavior of the
                            dropdown.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-3">
                                <b-button-group>
                                    <b-dropdown text="Default dropdown" variant="light">
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                    </b-dropdown>
                                </b-button-group>

                                <b-button-group>

                                    <b-button-group>
                                        <b-dropdown auto-close="inside" text="Clickable outside" variant="light">
                                            <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                            <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                            <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        </b-dropdown>
                                    </b-button-group>
                                </b-button-group>

                                <b-button-group>
                                    <b-dropdown auto-close="outside" text="Clickable inside" variant="light">
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                    </b-dropdown>
                                </b-button-group>

                                <b-button-group>
                                    <b-dropdown :auto-close="false" text="Manual close" variant="light">
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                        <b-dropdown-item href="#">Menu item</b-dropdown-item>
                                    </b-dropdown>
                                </b-button-group>
                            </div>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Default dropdown --&gt;
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;light&quot; text=&quot;Default dropdown&quot; id=&quot;defaultDropdown&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
<code>&lt;!-- Clickable outside dropdown --&gt;
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;light&quot; text=&quot;Clickable outside&quot; auto-close=&quot;inside&quot; id=&quot;dropdownMenuClickableOutside&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
<code>&lt;!-- Clickable inside dropdown --&gt;
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;light&quot; text=&quot;Clickable inside&quot; auto-close=&quot;outside&quot; id=&quot;dropdownMenuClickableInside&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
<code>&lt;!-- Manual close dropdown --&gt;
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;light&quot; text=&quot;Manual close&quot; :auto-close=&quot;false&quot; id=&quot;dropdownMenuClickable&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Menu item&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>
</pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Dropdown Menu Item Color</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="dropdown-menu-item-color">Show Code</label>
                                <input id="dropdown-menu-item-color" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Example of dropdown menu and dropdown item color.
                        </p>
                        <div class="live-preview">
                            <b-row>
                                <b-col xxl="3">
                                    <div>
                                        <h6 class="font-size-13 mb-3">
                                            Dropdown Menu Success link example
                                        </h6>
                                        <div class="clearfix">
                                            <div
                                                class="dropdown-menu d-inline-block position-relative dropdownmenu-success"
                                                style="z-index: 1">
                                                <b-link class="dropdown-item" href="#">Action</b-link>
                                                <b-link class="dropdown-item" href="#">Another action</b-link>
                                                <b-link class="dropdown-item active" href="#">Something else here
                                                </b-link>
                                                <div class="dropdown-divider"></div>
                                                <b-link class="dropdown-item" href="#">Separated link</b-link>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="9">
                                    <div class="mt-lg-0 mt-3">
                                        <h6 class="font-size-13 mb-0">
                                            Dropdown Menu link Color example
                                        </h6>
                                        <div>
                                            <b-row>
                                                <b-col lg="4" sm="6">
                                                    <div class="mt-3">
                                                        <p class="font-size-13 mb-2">
                                                            Dropdown menu Primary link
                                                        </p>
                                                        <b-button-group>
                                                            <b-dropdown menu-class="dropdownmenu-primary" text="Primary"
                                                                        variant="primary">
                                                                <b-dropdown-item href="#">Action</b-dropdown-item>
                                                                <b-dropdown-item href="#">Another action
                                                                </b-dropdown-item>
                                                                <b-dropdown-item href="#">Something else here
                                                                </b-dropdown-item>
                                                                <b-dropdown-divider></b-dropdown-divider>
                                                                <b-dropdown-item href="#">Separated link
                                                                </b-dropdown-item>
                                                            </b-dropdown>
                                                        </b-button-group>
                                                    </div>
                                                </b-col>
                                                <b-col lg="4" sm="6">
                                                    <div class="mt-3">
                                                        <p class="font-size-13 mb-2">
                                                            Dropdown menu Secondary link
                                                        </p>
                                                        <b-button-group>
                                                            <b-dropdown menu-class="dropdownmenu-secondary"
                                                                        text="Secondary"
                                                                        variant="secondary">
                                                                <b-dropdown-item href="#">Action</b-dropdown-item>
                                                                <b-dropdown-item href="#">Another action
                                                                </b-dropdown-item>
                                                                <b-dropdown-item href="#">Something else here
                                                                </b-dropdown-item>
                                                                <b-dropdown-divider></b-dropdown-divider>
                                                                <b-dropdown-item href="#">Separated link
                                                                </b-dropdown-item>
                                                            </b-dropdown>
                                                        </b-button-group>
                                                    </div>
                                                </b-col>
                                                <b-col lg="4" sm="6">
                                                    <div class="mt-3">
                                                        <p class="font-size-13 mb-2">
                                                            Dropdown menu Success link
                                                        </p>
                                                        <b-button-group>
                                                            <b-dropdown menu-class="dropdownmenu-success" text="Success"
                                                                        variant="success">
                                                                <b-dropdown-item href="#">Action</b-dropdown-item>
                                                                <b-dropdown-item href="#">Another action
                                                                </b-dropdown-item>
                                                                <b-dropdown-item href="#">Something else here
                                                                </b-dropdown-item>
                                                                <b-dropdown-divider></b-dropdown-divider>
                                                                <b-dropdown-item href="#">Separated link
                                                                </b-dropdown-item>
                                                            </b-dropdown>
                                                        </b-button-group>
                                                    </div>
                                                </b-col>
                                                <b-col lg="4" sm="6">
                                                    <div class="mt-3">
                                                        <p class="font-size-13 mb-2">
                                                            Dropdown menu Warning link
                                                        </p>
                                                        <b-button-group>
                                                            <b-dropdown menu-class="dropdownmenu-warning" text="Warning"
                                                                        variant="warning">
                                                                <b-dropdown-item href="#">Action</b-dropdown-item>
                                                                <b-dropdown-item href="#">Another action
                                                                </b-dropdown-item>
                                                                <b-dropdown-item href="#">Something else here
                                                                </b-dropdown-item>
                                                                <b-dropdown-divider></b-dropdown-divider>
                                                                <b-dropdown-item href="#">Separated link
                                                                </b-dropdown-item>
                                                            </b-dropdown>
                                                        </b-button-group>
                                                    </div>
                                                </b-col>
                                                <b-col lg="4" sm="6">
                                                    <div class="mt-3">
                                                        <p class="font-size-13 mb-2">
                                                            Dropdown menu Info link
                                                        </p>
                                                        <b-button-group>
                                                            <b-dropdown menu-class="dropdownmenu-info" text="Info"
                                                                        variant="info">
                                                                <b-dropdown-item href="#">Action</b-dropdown-item>
                                                                <b-dropdown-item href="#">Another action
                                                                </b-dropdown-item>
                                                                <b-dropdown-item href="#">Something else here
                                                                </b-dropdown-item>
                                                                <b-dropdown-divider></b-dropdown-divider>
                                                                <b-dropdown-item href="#">Separated link
                                                                </b-dropdown-item>
                                                            </b-dropdown>
                                                        </b-button-group>
                                                    </div>
                                                </b-col>
                                                <b-col lg="4" sm="6">
                                                    <div class="mt-3">
                                                        <p class="font-size-13 mb-2">
                                                            Dropdown menu Danger link
                                                        </p>
                                                        <b-button-group>
                                                            <b-dropdown menu-class="dropdownmenu-danger" text="Danger"
                                                                        variant="danger">
                                                                <b-dropdown-item href="#">Action</b-dropdown-item>
                                                                <b-dropdown-item href="#">Another action
                                                                </b-dropdown-item>
                                                                <b-dropdown-item href="#">Something else here
                                                                </b-dropdown-item>
                                                                <b-dropdown-divider></b-dropdown-divider>
                                                                <b-dropdown-item href="#">Separated link
                                                                </b-dropdown-item>
                                                            </b-dropdown>
                                                        </b-button-group>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Dropdown Menu Item Color --&gt;
&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-primary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Primary&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-primary&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-secondary dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Secondary&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-secondary&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-success dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Success&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-success&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-warning dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Warning&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-warning&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-info dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Info&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-info&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code>

<code>&lt;div class=&quot;btn-group&quot;&gt;
&lt;button type=&quot;button&quot; class=&quot;btn btn-danger dropdown-toggle&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Danger&lt;/button&gt;
&lt;div class=&quot;dropdown-menu dropdownmenu-danger&quot;&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;
&lt;div class=&quot;dropdown-divider&quot;&gt;&lt;/div&gt;
&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!-- btn-group --&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Menu Content</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="menu-content">Show Code</label>
                                <input id="menu-content" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Example of dropdown menu containing
                            <code>Headers, Text and Forms</code> content.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex flex-wrap gap-2">
                                <!-- Header -->
                                <b-button-group>
                                    <b-dropdown text="Header" variant="primary">
                                        <b-dropdown-header> Welcome Jessie!</b-dropdown-header>
                                        <b-dropdown-item>Action</b-dropdown-item>
                                        <b-dropdown-item>Another action</b-dropdown-item>
                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                        <b-dropdown-divider></b-dropdown-divider>
                                        <b-dropdown-item>Separated link</b-dropdown-item>
                                    </b-dropdown>
                                </b-button-group>

                                <!-- Text -->
                                <b-button-group>
                                    <b-dropdown menu-class="dropdown-menu-md p-3" text="Text" variant="success">
                                        <p>Some example text that's free-flowing within the dropdown menu.</p>
                                        <p class="mb-0">And this is more example text.</p>
                                    </b-dropdown>
                                </b-button-group>

                                <!-- Forms -->
                                <b-button-group>
                                    <b-dropdown menu-class="dropdown-menu-md p-4" text="Forms" variant="light">
                                        <form>
                                            <div class="mb-2">
                                                <label class="form-label" for="exampleDropdownFormEmail">Email
                                                    address</label>
                                                <input id="exampleDropdownFormEmail" class="form-control"
                                                       placeholder="email@example.com"
                                                       type="email"/>
                                            </div>
                                            <div class="mb-2">
                                                <label class="form-label"
                                                       for="exampleDropdownFormPassword">Password</label>
                                                <input id="exampleDropdownFormPassword" class="form-control"
                                                       placeholder="Password"
                                                       type="password"/>
                                            </div>
                                            <div class="mb-2">
                                                <div class="form-check custom-checkbox">
                                                    <input id="rememberdropdownCheck" class="form-check-input"
                                                           type="checkbox"/>
                                                    <label class="form-check-label" for="rememberdropdownCheck">Remember
                                                        me</label>
                                                </div>
                                            </div>
                                            <b-button type="submit" variant="primary"> Sign in</b-button>
                                        </form>
                                    </b-dropdown>
                                </b-button-group>
                            </div>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Menu Content --&gt;
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;primary&quot; text=&quot;Header&quot; &gt;
&lt;b-dropdown-header&gt;Welcome Jessie! &lt;/b-dropdown-header&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Another action&lt;/b-dropdown-item&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Something else here&lt;/b-dropdown-item&gt;
&lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>


<code>&lt;!-- text Content --&gt;
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;success&quot; text=&quot;Text&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;&lt;p&gt;
Some example text that's free-flowing within the dropdown menu.
&lt;/p&gt;
&lt;p class=&quot;mb-0&quot;&gt;
And this is more example text.
&lt;/p&gt;&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>


<code>&lt;!-- Forms Content --&gt;
&lt;b-button-group&gt;
&lt;b-dropdown variant=&quot;light&quot; text=&quot;Forms&quot; &gt;
&lt;b-dropdown-item href=&quot;#&quot;&gt;&lt;form&gt;
&lt;div class=&quot;mb-2&quot;&gt;
&lt;label class=&quot;form-label&quot; for=&quot;exampleDropdownFormEmail&quot;&gt;Email address&lt;/label&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormEmail&quot; placeholder=&quot;email@example.com&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-2&quot;&gt;
&lt;label class=&quot;form-label&quot; for=&quot;exampleDropdownFormPassword&quot;&gt;Password&lt;/label&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;exampleDropdownFormPassword&quot; placeholder=&quot;Password&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-2&quot;&gt;
&lt;div class=&quot;form-check custom-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;rememberdropdownCheck&quot;&gt;
    &lt;label class=&quot;form-check-label&quot; for=&quot;rememberdropdownCheck&quot;&gt;Remember me&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Sign in&lt;/button&gt;
&lt;/form&gt;&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
&lt;/b-button-group&gt;</code>

</pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Notifications</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="default">Show Code</label>
                                <input id="default" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Dropdown with notification containing multiple tabs.
                        </p>
                        <div class="live-preview">
                            <b-row class="g-3">
                                <b-col lg="5" md="6" xxl="3">
                                    <div
                                        aria-labelledby="page-header-notifications-dropdown"
                                        class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100"
                                        style="z-index: 1">
                                        <div class="dropdown-head bg-primary bg-pattern rounded-top">
                                            <div class="p-3">
                                                <b-row class="align-items-center">
                                                    <b-col>
                                                        <h6 class="m-0 fs-16 fw-semibold text-white">
                                                            Notifications
                                                        </h6>
                                                    </b-col>
                                                    <div class="col-auto dropdown-tabs">
                                                        <b-badge class="fs-13" data-key="t-view-all"
                                                                 variant="soft-light">4 New
                                                        </b-badge>
                                                    </div>
                                                </b-row>
                                            </div>

                                            <div class="px-2 pt-2">
                                                <ul id="notificationItemsTab1"
                                                    class="nav nav-tabs dropdown-tabs nav-tabs-custom"
                                                    data-dropdown-tabs="true" role="tablist">
                                                    <li class="nav-item waves-effect waves-light">
                                                        <b-link aria-selected="true" class="nav-link active"
                                                                data-bs-toggle="tab" href="#all-noti-tab1"
                                                                role="tab">All (4)
                                                        </b-link>
                                                    </li>
                                                    <li class="nav-item waves-effect waves-light">
                                                        <b-link aria-selected="false" class="nav-link"
                                                                data-bs-toggle="tab" href="#messages-tab1"
                                                                role="tab">Messages
                                                        </b-link>
                                                    </li>
                                                    <li class="nav-item waves-effect waves-light">
                                                        <b-link aria-selected="false" class="nav-link"
                                                                data-bs-toggle="tab" href="#alerts-tab1"
                                                                role="tab">Alerts
                                                        </b-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div id="notificationItemsTabContent4" class="tab-content">
                                            <div id="all-noti-tab1" class="tab-pane fade show active py-2 ps-2"
                                                 role="tabpanel">
                                                <div class="pe-2" data-simplebar style="max-height: 300px">
                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 avatar-xs me-3">
                                <span class="avatar-title bg-soft-info text-info rounded-circle fs-16">
                                  <i class="bx bx-badge-check"></i>
                                </span>
                                                            </div>
                                                            <div class="flex-1">
                                                                <h6 class="mt-0 mb-2 lh-base">
                                                                    Your
                                                                    <b>Elite</b> author Graphic Optimization
                                                                    <span class="text-secondary">reward</span> is
                                                                    ready!
                                                                </h6>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> Just
                                    30 sec ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-2.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Angela Bernier
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        Answered to your comment on the cash flow
                                                                        forecast's graph 🔔.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 48 min
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 avatar-xs me-3">
                                <span class="avatar-title bg-soft-danger text-danger rounded-circle fs-16">
                                  <i class="bx bx-message-square-dots"></i>
                                </span>
                                                            </div>
                                                            <div class="flex-1">
                                                                <h6 class="mt-0 mb-2 fs-13 lh-base">
                                                                    You have received
                                                                    <b class="text-success">20</b> new messages in
                                                                    the conversation
                                                                </h6>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 2 hrs
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-8.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Maureen Gibson
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        We talked about a project on linkedin.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 4 hrs
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="my-3 text-center">
                                                        <b-button type="button" variant="soft-success">
                                                            View All Notifications
                                                            <i class="ri-arrow-right-line align-middle"></i>
                                                        </b-button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="messages-tab1" aria-labelledby="messages-tab"
                                                 class="tab-pane fade py-2 ps-2"
                                                 role="tabpanel">
                                                <div class="pe-2" data-simplebar style="max-height: 300px">
                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-3.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        James Lemire
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        We talked about a project on linkedin.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 30 min
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-2.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Angela Bernier
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        Answered to your comment on the cash flow
                                                                        forecast's graph 🔔.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 2 hrs
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-6.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Kenneth Brown
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        Mentionned you in his comment on 📃 invoice
                                                                        #12501.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 10 hrs
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-8.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Maureen Gibson
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        We talked about a project on linkedin.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 3 days
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="my-3 text-center">
                                                        <b-button type="button" variant="soft-success">
                                                            View All Messages
                                                            <i class="ri-arrow-right-line align-middle"></i>
                                                        </b-button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="alerts-tab1" aria-labelledby="alerts-tab" class="tab-pane fade p-4"
                                                 role="tabpanel">
                                                <div class="w-50 pt-3 mx-auto">
                                                    <img alt="user-pic" class="img-fluid"
                                                         src="@/assets/images/svg/bell.svg"/>
                                                </div>
                                                <div class="text-center pb-5 mt-2">
                                                    <h6 class="fs-18 fw-semibold lh-base">
                                                        Hey! You have no any notifications
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="5" md="6" xxl="3">
                                    <div
                                        aria-labelledby="page-header-notifications-dropdown"
                                        class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100"
                                        style="z-index: 1">
                                        <div class="dropdown-head bg-success bg-pattern rounded-top">
                                            <div class="p-3">
                                                <b-row class="align-items-center">
                                                    <b-col>
                                                        <h6 class="m-0 fs-16 fw-semibold text-white">
                                                            Notifications
                                                        </h6>
                                                    </b-col>
                                                    <div class="col-auto dropdown-tabs">
                                                        <b-badge class="fs-13" data-key="t-view-all"
                                                                 variant="soft-light">4 New
                                                        </b-badge>
                                                    </div>
                                                </b-row>
                                            </div>

                                            <div class="px-2 pt-2">
                                                <ul id="notificationItemsTab2"
                                                    class="nav nav-tabs dropdown-tabs nav-tabs-custom"
                                                    data-dropdown-tabs="true" role="tablist">
                                                    <li class="nav-item waves-effect waves-light">
                                                        <b-link aria-selected="true" class="nav-link active"
                                                                data-bs-toggle="tab" href="#all-noti-tab2"
                                                                role="tab">All (4)
                                                        </b-link>
                                                    </li>
                                                    <li class="nav-item waves-effect waves-light">
                                                        <b-link aria-selected="false" class="nav-link"
                                                                data-bs-toggle="tab" href="#messages-tab2"
                                                                role="tab">Messages
                                                        </b-link>
                                                    </li>
                                                    <li class="nav-item waves-effect waves-light">
                                                        <b-link aria-selected="false" class="nav-link"
                                                                data-bs-toggle="tab" href="#alerts-tab2"
                                                                role="tab">Alerts
                                                        </b-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div id="notificationItemsTabContent1" class="tab-content">
                                            <div id="all-noti-tab2" class="tab-pane fade show active py-2 ps-2"
                                                 role="tabpanel">
                                                <div class="pe-2" data-simplebar style="max-height: 300px">
                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 avatar-xs me-3">
                                <span class="avatar-title bg-soft-info text-info rounded-circle fs-16">
                                  <i class="bx bx-badge-check"></i>
                                </span>
                                                            </div>
                                                            <div class="flex-1">
                                                                <h6 class="mt-0 mb-2 lh-base">
                                                                    Your
                                                                    <b>Elite</b> author Graphic Optimization
                                                                    <span class="text-secondary">reward</span> is
                                                                    ready!
                                                                </h6>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> Just
                                    30 sec ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-2.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Angela Bernier
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        Answered to your comment on the cash flow
                                                                        forecast's graph 🔔.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 48 min
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 avatar-xs me-3">
                                <span class="avatar-title bg-soft-danger text-danger rounded-circle fs-16">
                                  <i class="bx bx-message-square-dots"></i>
                                </span>
                                                            </div>
                                                            <div class="flex-1">
                                                                <h6 class="mt-0 mb-2 fs-13 lh-base">
                                                                    You have received
                                                                    <b class="text-success">20</b> new messages in
                                                                    the conversation
                                                                </h6>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 2 hrs
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-8.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Maureen Gibson
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        We talked about a project on linkedin.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 4 hrs
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="my-3 text-center">
                                                        <b-button type="button" variant="soft-success">
                                                            View All Notifications
                                                            <i class="ri-arrow-right-line align-middle"></i>
                                                        </b-button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="messages-tab2" aria-labelledby="messages-tab"
                                                 class="tab-pane fade py-2 ps-2"
                                                 role="tabpanel">
                                                <div class="pe-2" data-simplebar style="max-height: 300px">
                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-3.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        James Lemire
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        We talked about a project on linkedin.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 30 min
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-2.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Angela Bernier
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        Answered to your comment on the cash flow
                                                                        forecast's graph 🔔.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 2 hrs
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-6.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Kenneth Brown
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        Mentionned you in his comment on 📃 invoice
                                                                        #12501.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 10 hrs
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-8.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Maureen Gibson
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        We talked about a project on linkedin.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 3 days
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="my-3 text-center">
                                                        <b-button type="button" variant="soft-success">
                                                            View All Messages
                                                            <i class="ri-arrow-right-line align-middle"></i>
                                                        </b-button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="alerts-tab2" aria-labelledby="alerts-tab" class="tab-pane fade p-4"
                                                 role="tabpanel">
                                                <div class="w-50 pt-3 mx-auto">
                                                    <img alt="user-pic" class="img-fluid"
                                                         src="@/assets/images/svg/bell.svg"/>
                                                </div>
                                                <div class="text-center pb-5 mt-2">
                                                    <h6 class="fs-18 fw-semibold lh-base">
                                                        Hey! You have no any notifications
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="5" md="6" xxl="3">
                                    <div
                                        aria-labelledby="page-header-notifications-dropdown"
                                        class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 d-inline-block position-relative w-100"
                                        style="z-index: 1">
                                        <div class="dropdown-head bg-secondary bg-pattern rounded-top">
                                            <div class="p-3">
                                                <b-row class="align-items-center">
                                                    <b-col>
                                                        <h6 class="m-0 fs-16 fw-semibold text-white">
                                                            Notifications
                                                        </h6>
                                                    </b-col>
                                                    <div class="col-auto dropdown-tabs">
                                                        <b-badge class="fs-13" data-key="t-view-all"
                                                                 variant="soft-light">4 New
                                                        </b-badge>
                                                    </div>
                                                </b-row>
                                            </div>

                                            <div class="px-2 pt-2">
                                                <ul id="notificationItemsTab3"
                                                    class="nav nav-tabs dropdown-tabs nav-tabs-custom"
                                                    data-dropdown-tabs="true" role="tablist">
                                                    <li class="nav-item waves-effect waves-light">
                                                        <b-link aria-selected="true" class="nav-link active"
                                                                data-bs-toggle="tab" href="#all-noti-tab3"
                                                                role="tab">All (4)
                                                        </b-link>
                                                    </li>
                                                    <li class="nav-item waves-effect waves-light">
                                                        <b-link aria-selected="false" class="nav-link"
                                                                data-bs-toggle="tab" href="#messages-tab3"
                                                                role="tab">Messages
                                                        </b-link>
                                                    </li>
                                                    <li class="nav-item waves-effect waves-light">
                                                        <b-link aria-selected="false" class="nav-link"
                                                                data-bs-toggle="tab" href="#alerts-tab3"
                                                                role="tab">Alerts
                                                        </b-link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div id="notificationItemsTabContent3" class="tab-content">
                                            <div id="all-noti-tab3" class="tab-pane fade show active py-2 ps-2"
                                                 role="tabpanel">
                                                <div class="pe-2" data-simplebar style="max-height: 300px">
                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 avatar-xs me-3">
                                <span class="avatar-title bg-soft-info text-info rounded-circle fs-16">
                                  <i class="bx bx-badge-check"></i>
                                </span>
                                                            </div>
                                                            <div class="flex-1">
                                                                <h6 class="mt-0 mb-2 lh-base">
                                                                    Your
                                                                    <b>Elite</b> author Graphic Optimization
                                                                    <span class="text-secondary">reward</span> is
                                                                    ready!
                                                                </h6>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> Just
                                    30 sec ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-2.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Angela Bernier
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        Answered to your comment on the cash flow
                                                                        forecast's graph 🔔.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 48 min
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <div class="flex-shrink-0 avatar-xs me-3">
                                <span class="avatar-title bg-soft-danger text-danger rounded-circle fs-16">
                                  <i class="bx bx-message-square-dots"></i>
                                </span>
                                                            </div>
                                                            <div class="flex-1">
                                                                <h6 class="mt-0 mb-2 fs-13 lh-base">
                                                                    You have received
                                                                    <b class="text-success">20</b> new messages in
                                                                    the conversation
                                                                </h6>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 2 hrs
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-8.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Maureen Gibson
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        We talked about a project on linkedin.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 4 hrs
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="my-3 text-center">
                                                        <b-button type="button" variant="soft-success">
                                                            View All Notifications
                                                            <i class="ri-arrow-right-line align-middle"></i>
                                                        </b-button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="messages-tab3" aria-labelledby="messages-tab"
                                                 class="tab-pane fade py-2 ps-2"
                                                 role="tabpanel">
                                                <div class="pe-2" data-simplebar style="max-height: 300px">
                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-3.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        James Lemire
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        We talked about a project on linkedin.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 30 min
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-2.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Angela Bernier
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        Answered to your comment on the cash flow
                                                                        forecast's graph 🔔.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 2 hrs
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-6.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Kenneth Brown
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        Mentionned you in his comment on 📃 invoice
                                                                        #12501.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 10 hrs
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="text-reset notification-item d-block dropdown-item">
                                                        <div class="d-flex">
                                                            <img alt="user-pic"
                                                                 class="me-3 rounded-circle avatar-xs"
                                                                 src="@/assets/images/users/avatar-8.jpg"/>
                                                            <div class="flex-1">
                                                                <b-link href="#!">
                                                                    <h6 class="mt-0 mb-1 fs-13 fw-semibold">
                                                                        Maureen Gibson
                                                                    </h6>
                                                                </b-link>
                                                                <div class="fs-13 text-muted">
                                                                    <p class="mb-1">
                                                                        We talked about a project on linkedin.
                                                                    </p>
                                                                </div>
                                                                <p class="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                  <span>
                                    <i class="mdi mdi-clock-outline"></i> 3 days
                                    ago
                                  </span>
                                                                </p>
                                                            </div>
                                                            <div class="px-2 fs-16">
                                                                <input class="form-check-input" type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="my-3 text-center">
                                                        <b-button type="button" variant="soft-success">
                                                            View All Messages
                                                            <i class="ri-arrow-right-line align-middle"></i>
                                                        </b-button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="alerts-tab3" aria-labelledby="alerts-tab" class="tab-pane fade p-4"
                                                 role="tabpanel">
                                                <div class="w-50 pt-3 mx-auto">
                                                    <img alt="user-pic" class="img-fluid"
                                                         src="@/assets/images/svg/bell.svg"/>
                                                </div>
                                                <div class="text-center pb-5 mt-2">
                                                    <h6 class="fs-18 fw-semibold lh-base">
                                                        Hey! You have no any notifications
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Notifications --&gt;
&lt;b-dropdown size=&quot;lg&quot; variant=&quot;primary&quot; class=&quot; dropdown-menu-end p-0 d-inline-block position-relative&quot; id=&quot;dropdownMenuButton&quot;&gt;
&lt;b-dropdown-header&gt;&lt;div class=&quot;col&quot;&gt;
    &lt;h6 class=&quot;m-0 fs-16 fw-semibold text-white&quot;&gt; Notifications &lt;/h6&gt;
&lt;/div&gt;
&lt;div class=&quot;col-auto dropdown-tabs&quot;&gt;
    &lt;span class=&quot;badge badge-soft-light fs-13&quot; data-key=&quot;t-view-all&quot;&gt; 4 New&lt;/span&gt;
&lt;/div&gt; &lt;/b-dropdown-header&gt;

&lt;b-card&gt;
  &lt;b-tabs content-class="mt-3" fill&gt;
    &lt;b-tab title="All (4)" active&gt;
    &lt;div data-simplebar style=&quot;max-height: 300px;&quot; class=&quot;pe-2&quot;&gt;
&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;div class=&quot;avatar-xs me-3&quot;&gt;
            &lt;span class=&quot;avatar-title bg-soft-info text-info rounded-circle fs-16&quot;&gt;
                &lt;i class=&quot;bx bx-badge-check&quot;&gt;&lt;/i&gt;
            &lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-2 lh-base&quot;&gt;Your &lt;b&gt;Elite&lt;/b&gt; author Graphic Optimization &lt;span class=&quot;text-secondary&quot;&gt;reward&lt;/span&gt; is ready!&lt;/h6&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; Just 30 sec ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;img src=&quot;assets/images/users/avatar-2.jpg&quot;
            class=&quot;me-3 rounded-circle avatar-xs&quot; alt=&quot;user-pic&quot;&gt;
        &lt;div class=&quot;flex-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-1 fs-13 fw-semibold&quot;&gt;Angela Bernier&lt;/h6&gt;
            &lt;div class=&quot;fs-13 text-muted&quot;&gt;
                &lt;p class=&quot;mb-1&quot;&gt;Answered to your comment on the cash flow forecast's graph 🔔.&lt;/p&gt;
            &lt;/div&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 48 min ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;div class=&quot;avatar-xs me-3&quot;&gt;
            &lt;span class=&quot;avatar-title bg-soft-danger text-danger rounded-circle fs-16&quot;&gt;
                &lt;i class='bx bx-message-square-dots' &gt;&lt;/i&gt;
            &lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=&quot;flex-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-2 fs-13 lh-base&quot;&gt;You have received &lt;b class=&quot;text-success&quot;&gt;20&lt;/b&gt; new messages in the conversation&lt;/h6&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 2 hrs ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;img src=&quot;assets/images/users/avatar-8.jpg&quot;
            class=&quot;me-3 rounded-circle avatar-xs&quot; alt=&quot;user-pic&quot;&gt;
        &lt;div class=&quot;flex-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-1 fs-13 fw-semibold&quot;&gt;Maureen Gibson&lt;/h6&gt;
            &lt;div class=&quot;fs-13 text-muted&quot;&gt;
                &lt;p class=&quot;mb-1&quot;&gt;We talked about a project on linkedin.&lt;/p&gt;
            &lt;/div&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 4 hrs ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;div class=&quot;my-3 text-center&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-soft-success waves-effect waves-light&quot;&gt;View All Notifications &lt;i class=&quot;ri-arrow-right-line align-middle&quot;&gt;&lt;/i&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
    &lt;/b-tab&gt;

    &lt;b-tab title="Messages"&gt;
    &lt;div data-simplebar style=&quot;max-height: 300px;&quot; class=&quot;pe-2&quot;&gt;
&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;img src=&quot;assets/images/users/avatar-3.jpg&quot;
            class=&quot;me-3 rounded-circle avatar-xs&quot; alt=&quot;user-pic&quot;&gt;
        &lt;div class=&quot;flex-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-1 fs-13 fw-semibold&quot;&gt;James Lemire&lt;/h6&gt;
            &lt;div class=&quot;fs-13 text-muted&quot;&gt;
                &lt;p class=&quot;mb-1&quot;&gt;We talked about a project on linkedin.&lt;/p&gt;
            &lt;/div&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 30 min ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;img src=&quot;assets/images/users/avatar-2.jpg&quot;
            class=&quot;me-3 rounded-circle avatar-xs&quot; alt=&quot;user-pic&quot;&gt;
        &lt;div class=&quot;flex-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-1 fs-13 fw-semibold&quot;&gt;Angela Bernier&lt;/h6&gt;
            &lt;div class=&quot;fs-13 text-muted&quot;&gt;
                &lt;p class=&quot;mb-1&quot;&gt;Answered to your comment on the cash flow forecast's graph 🔔.&lt;/p&gt;
            &lt;/div&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 2 hrs ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;img src=&quot;assets/images/users/avatar-6.jpg&quot;
            class=&quot;me-3 rounded-circle avatar-xs&quot; alt=&quot;user-pic&quot;&gt;
        &lt;div class=&quot;flex-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-1 fs-13 fw-semibold&quot;&gt;Kenneth Brown&lt;/h6&gt;
            &lt;div class=&quot;fs-13 text-muted&quot;&gt;
                &lt;p class=&quot;mb-1&quot;&gt;Mentionned you in his comment on 📃 invoice #12501.&lt;/p&gt;
            &lt;/div&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 10 hrs ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;a href=&quot;#!&quot; class=&quot;text-reset notification-item d-block dropdown-item&quot;&gt;
    &lt;div class=&quot;d-flex&quot;&gt;
        &lt;img src=&quot;assets/images/users/avatar-8.jpg&quot;
            class=&quot;me-3 rounded-circle avatar-xs&quot; alt=&quot;user-pic&quot;&gt;
        &lt;div class=&quot;flex-1&quot;&gt;
            &lt;h6 class=&quot;mt-0 mb-1 fs-13 fw-semibold&quot;&gt;Maureen Gibson&lt;/h6&gt;
            &lt;div class=&quot;fs-13 text-muted&quot;&gt;
                &lt;p class=&quot;mb-1&quot;&gt;We talked about a project on linkedin.&lt;/p&gt;
            &lt;/div&gt;
            &lt;p class=&quot;mb-0 fs-11 fw-medium text-uppercase text-muted&quot;&gt;
                &lt;span&gt;&lt;i class=&quot;mdi mdi-clock-outline&quot;&gt;&lt;/i&gt; 3 days ago&lt;/span&gt;
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div class=&quot;px-2 fs-16&quot;&gt;
            &lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot;&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/a&gt;

&lt;div class=&quot;my-3 text-center&quot;&gt;
    &lt;button type=&quot;button&quot; class=&quot;btn btn-soft-success waves-effect waves-light&quot;&gt;View All Messages &lt;i class=&quot;ri-arrow-right-line align-middle&quot;&gt;&lt;/i&gt;&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
    &lt;/b-tab&gt;

    &lt;b-tab title="Alerts"&gt;
    &lt;div class=&quot;w-50 pt-3 mx-auto&quot;&gt;
&lt;img src=&quot;assets/images/svg/bell.svg&quot; class=&quot;img-fluid&quot; alt=&quot;user-pic&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;text-center pb-5 mt-2&quot;&gt;
&lt;h6 class=&quot;fs-18 fw-semibold lh-base&quot;&gt;Hey! You have no any notifications &lt;/h6&gt;
&lt;/div&gt;
&lt;/div&gt;
    &lt;/b-tab&gt;

  &lt;/b-tabs&gt;
&lt;/b-card&gt;
&lt;/b-dropdown&gt;
</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
