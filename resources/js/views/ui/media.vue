<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";

import "prismjs";
import "prismjs/themes/prism.css";

export default {
    data() {
        return {
            title: "Media",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Media",
                    active: true,
                },
            ],
        };
    },
    name: "Media",
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
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Examples</b-card-title>
                        <div class="flex-shrink-0">
                            <div
                                class="form-check form-switch form-switch-right form-switch-md"
                            >
                                <label class="form-label text-muted" for="default"
                                >Show Code</label
                                >
                                <input
                                    id="default"
                                    class="form-check-input code-switcher"
                                    type="checkbox"
                                />
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-mub-card-body mb-4">
                            Use few flex utilities that allow even more flexibility and
                            customization than before.
                        </p>

                        <div class="live-preview">
                            <div class="d-flex align-items-start text-muted mb-4">
                                <div class="flex-shrink-0 me-3">
                                    <img
                                        alt="..."
                                        class="avatar-sm rounded"
                                        src="@/assets/images/users/avatar-2.jpg"
                                    />
                                </div>

                                <div class="flex-grow-1">
                                    <h5 class="fs-14">Media heading</h5>
                                    This is some content from a media component. You can replace
                                    this with any content and adjust it as needed.
                                </div>
                            </div>

                            <div class="d-flex align-items-start text-muted mb-4">
                                <div class="flex-grow-1">
                                    <h5 class="fs-14">Media heading</h5>
                                    This is some content from a media component. You can replace
                                    this with any content and adjust it as needed.
                                </div>
                                <div class="flex-shrink-0 ms-3">
                                    <img
                                        alt="..."
                                        class="avatar-sm rounded"
                                        src="@/assets/images/users/avatar-3.jpg"
                                    />
                                </div>
                            </div>

                            <div class="d-flex align-items-start text-muted">
                                <div class="flex-shrink-0 me-3">
                                    <img
                                        alt="..."
                                        class="avatar-sm rounded"
                                        src="@/assets/images/users/avatar-2.jpg"
                                    />
                                </div>
                                <div class="flex-grow-1">
                                    <h5 class="fs-14">Media heading</h5>
                                    This is some content from a media component. You can replace
                                    this with any content and adjust it as needed.
                                </div>
                            </div>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;div class=&quot;d-flex align-items-start text-muted mb-4&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;

&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;fs-14&quot;&gt;Media heading&lt;/h5&gt;
This is some content from a media component. You can replace this with any content and adjust it as needed.
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex align-items-start text-muted mb-4&quot;&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;fs-14&quot;&gt;Media heading&lt;/h5&gt;
This is some content from a media component. You can replace this with any content and adjust it as needed.
&lt;/div&gt;
&lt;div class=&quot;flex-shrink-0 ms-3&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex align-items-start text-muted&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;fs-14&quot;&gt;Media heading&lt;/h5&gt;
This is some content from a media component. You can replace this with any content and adjust it as needed.
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Nesting Example</b-card-title>
                        <div class="flex-shrink-0">
                            <div
                                class="form-check form-switch form-switch-right form-switch-md"
                            >
                                <label class="form-label text-muted" for="nestingmedia-showcode"
                                >Show Code</label
                                >
                                <input
                                    id="nestingmedia-showcode"
                                    class="form-check-input code-switcher"
                                    type="checkbox"
                                />
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted mb-4">
                            Media objects can be infinitely nested, though we suggest you stop
                            at some point. Place nested
                            <code>d-flex align-items-start</code> within the
                            <code>flex-grow-1</code> of a parent media object.
                        </p>
                        <div class="live-preview">
                            <div class="d-flex align-items-start text-muted mb-4">
                                <div class="flex-shrink-0 me-3">
                                    <img
                                        alt="..."
                                        class="avatar-sm rounded"
                                        src="@/assets/images/users/avatar-2.jpg"
                                    />
                                </div>
                                <div class="flex-grow-1">
                                    <h5 class="fs-14">Media heading</h5>
                                    This is some content from a media component. You can replace
                                    this with any content and adjust it as needed.
                                    <div class="d-flex align-items-start text-muted mt-3">
                                        <div class="flex-shrink-0 me-3">
                                            <img
                                                alt="..."
                                                class="avatar-sm rounded"
                                                src="@/assets/images/users/avatar-3.jpg"
                                            />
                                        </div>
                                        <div class="flex-grow-1">
                                            <h5 class="fs-14">Media heading</h5>
                                            This is some content from a media component. You can
                                            replace this with any content and adjust it as needed.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex align-items-start text-muted">
                                <div class="flex-shrink-0 me-3">
                                    <img
                                        alt="..."
                                        class="avatar-sm rounded"
                                        src="@/assets/images/users/avatar-4.jpg"
                                    />
                                </div>
                                <div class="flex-grow-1">
                                    <h5 class="fs-14">Media heading</h5>
                                    This is some content from a media component. You can replace
                                    this with any content and adjust it as needed.
                                </div>
                            </div>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Nesting Example --&gt;
&lt;div class=&quot;d-flex align-items-start text-muted mb-4&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;fs-14&quot;&gt;Media heading&lt;/h5&gt;
This is some content from a media component. You can replace this with any content and adjust it as needed.
&lt;div class=&quot;d-flex align-items-start text-muted mt-3&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;fs-14&quot;&gt;Media heading&lt;/h5&gt;
This is some content from a media component. You can replace this with any content and adjust it as needed.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex align-items-start text-muted&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;fs-14&quot;&gt;Media heading&lt;/h5&gt;
This is some content from a media component. You can replace this with any content and adjust it as needed.
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
                        <b-card-title class="mb-0 flex-grow-1">Media Alignment</b-card-title>
                        <div class="flex-shrink-0">
                            <div
                                class="form-check form-switch form-switch-right form-switch-md"
                            >
                                <label
                                    class="form-label text-muted"
                                    for="media-alignment-showcode"
                                >Show Code</label
                                >
                                <input
                                    id="media-alignment-showcode"
                                    class="form-check-input code-switcher"
                                    type="checkbox"
                                />
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-mub-card-body mb-4">
                            The images or other media can be aligned top, middle, or bottom.
                            The default is top aligned.
                        </p>

                        <div class="live-preview">
                            <div class="d-flex align-items-start text-muted mb-4">
                                <div class="flex-shrink-0 me-3">
                                    <img
                                        alt="..."
                                        class="avatar-sm rounded"
                                        src="@/assets/images/users/avatar-2.jpg"
                                    />
                                </div>

                                <div class="flex-grow-1">
                                    <h5 class="fs-14">Top Aligned media</h5>
                                    <p class="mb-1">
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                        scelerisque ante sollicitudin. Cras purus odio, vestibulum
                                        in vulputate at, tempus viverra turpis. Fusce condimentum
                                        nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                        in faucibus.
                                    </p>
                                    <p class="mb-0">
                                        Donec sed odio dui. Nullam quis risus eget urna mollis
                                        ornare vel eu leo. Cum sociis natoque penatibus et magnis
                                        dis parturient montes, nascetur ridiculus mus.
                                    </p>
                                </div>
                            </div>

                            <div class="d-flex align-items-center text-muted mb-4">
                                <div class="flex-shrink-0 me-3">
                                    <img
                                        alt="..."
                                        class="avatar-sm rounded"
                                        src="@/assets/images/users/avatar-6.jpg"
                                    />
                                </div>

                                <div class="flex-grow-1">
                                    <h5 class="fs-14">Center Aligned media</h5>
                                    <p class="mb-1">
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                        scelerisque ante sollicitudin. Cras purus odio, vestibulum
                                        in vulputate at, tempus viverra turpis. Fusce condimentum
                                        nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                        in faucibus.
                                    </p>
                                    <p class="mb-0">
                                        Donec sed odio dui. Nullam quis risus eget urna mollis
                                        ornare vel eu leo. Cum sociis natoque penatibus et magnis
                                        dis parturient montes, nascetur ridiculus mus.
                                    </p>
                                </div>
                            </div>

                            <div class="d-flex align-items-end text-muted">
                                <div class="flex-shrink-0 me-3">
                                    <img
                                        alt="..."
                                        class="avatar-sm rounded"
                                        src="@/assets/images/users/avatar-8.jpg"
                                    />
                                </div>

                                <div class="flex-grow-1">
                                    <h5 class="fs-14">Bottom Aligned media</h5>
                                    <p class="mb-1">
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                                        scelerisque ante sollicitudin. Cras purus odio, vestibulum
                                        in vulputate at, tempus viverra turpis. Fusce condimentum
                                        nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                        in faucibus.
                                    </p>
                                    <p class="mb-0">
                                        Donec sed odio dui. Nullam quis risus eget urna mollis
                                        ornare vel eu leo. Cum sociis natoque penatibus et magnis
                                        dis parturient montes, nascetur ridiculus mus.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Media Alignment --&gt;
&lt;div class=&quot;d-flex align-items-start text-muted mb-4&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;fs-14&quot;&gt;Top Aligned media&lt;/h5&gt;
&lt;p class=&quot;mb-1&quot;&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
&lt;p class=&quot;mb-0&quot;&gt;Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex align-items-center text-muted mb-4&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;fs-14&quot;&gt;Center Aligned media&lt;/h5&gt;
&lt;p class=&quot;mb-1&quot;&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
&lt;p class=&quot;mb-0&quot;&gt;Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;d-flex align-items-end text-muted&quot;&gt;
&lt;div class=&quot;flex-shrink-0 me-3&quot;&gt;
&lt;img src=&quot;...&quot; class=&quot;avatar-sm rounded&quot; alt=&quot;...&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;flex-grow-1&quot;&gt;
&lt;h5 class=&quot;fs-14&quot;&gt;Bottom Aligned media&lt;/h5&gt;
&lt;p class=&quot;mb-1&quot;&gt;Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.&lt;/p&gt;
&lt;p class=&quot;mb-0&quot;&gt;Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
