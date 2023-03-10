<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";

import "prismjs";
import "prismjs/themes/prism.css";

export default {
    data() {
        return {
            title: "General",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "General",
                    active: true,
                },
            ],
        };
    },
    name: "General",
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
            <b-col>
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Popovers</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="popover-showcode">Show Code</label>
                                <input id="popover-showcode" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>

                        <p class="text-muted">Popovers example are available with follwing options , Directions are
                            mirrored when
                            using in Bootstrap RTL.</p>
                        <div class="live-preview">
                            <div class="hstack flex-wrap gap-2">

                                <b-button id="popover-button-top" variant="light">
                                    Popover on top
                                </b-button>
                                <b-popover html placement="top" target="popover-button-top" triggers="focus">
                                    <template #title>Top Popover</template>
                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                </b-popover>

                                <b-button id="popover-button-right" variant="light">
                                    Popover on right
                                </b-button>
                                <b-popover html placement="right" target="popover-button-right" triggers="focus">
                                    <template #title>Right Popover</template>
                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                </b-popover>

                                <b-button id="popover-button-bottom" variant="light">
                                    Popover on bottom
                                </b-button>
                                <b-popover html placement="bottom" target="popover-button-bottom" triggers="focus">
                                    <template #title>Bottom Popover</template>
                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                </b-popover>


                                <b-button id="popover-button-left" variant="light">
                                    Popover on left
                                </b-button>
                                <b-popover html placement="left" target="popover-button-left" triggers="focus">
                                    <template #title>Left Popover</template>
                                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                </b-popover>

                                <b-button id="popover-button-variant" href="#" tabindex="0" variant="success">
                                    Dismissible popover
                                </b-button>
                                <b-popover html target="popover-button-variant" triggers="focus" variant="danger">
                                    <template #title>Dismissible Popover</template>
                                    And here some amazing content. Its very engaging. Right?
                                </b-popover>
                            </div>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup"
                   style="height: 275px;"><code>&lt;div class=&quot;hstack flex-wrap gap-2&quot;&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; v-b-popover.click.top=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Top Popover&quot;&gt;
Popover on top
&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; v-b-popover.click.right=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Right Popover&quot;&gt;
Popover on right
&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; v-b-popover.click.bottom=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Bottom Popover&quot;&gt;
Popover on bottom
&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; v-b-popover.click.left=&quot;&lsquo;Vivamus sagittis lacus vel augue laoreet rutrum faucibus.&rsquo;&quot; title=&quot;Left Popover&quot;&gt;
Popover on left
&lt;/b-button&gt;
&lt;b-button variant=&quot;success&quot; id=&quot;popover-button-variant&quot; href=&quot;#&quot; tabindex=&quot;0&quot;&gt;Dismissible popover&lt;/b-button&gt;
&lt;b-popover target=&quot;popover-button-variant&quot; variant=&quot;danger&quot; triggers=&quot;focus&quot;&gt;
&lt;template #title&gt;Dismissible Popover&lt;/template&gt; And here some amazing content. Its very engaging. Right?&lt;/b-popover&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Tooltips</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="tooltips-showcode">Show Code</label>
                                <input id="tooltips-showcode" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Tooltip example are available with follwing options, Directions are
                            mirrored when
                            using in Bootstrap RTL.</p>
                        <div class="live-preview">
                            <div class="hstack flex-wrap gap-2">
                                <b-button v-b-tooltip.hover title="Tooltip on top" variant="light">Tooltip on top
                                </b-button>
                                <b-button v-b-tooltip.hover.right title="Tooltip on right" variant="light">Tooltip on
                                    right
                                </b-button>
                                <b-button v-b-tooltip.hover.bottom title="Tooltip on bottom" variant="light">Tooltip on
                                    bottom
                                </b-button>
                                <b-button v-b-tooltip.hover.left title="Tooltip on left" variant="light">Tooltip on left
                                </b-button>
                                <b-button v-b-tooltip.hover title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
                                          variant="primary">
                                    Tooltip with HTML
                                </b-button>
                            </div>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Tooltips --&gt;
&lt;div class=&quot;hstack flex-wrap gap-2&quot;&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; v-b-tooltip.hover title=&quot;Tooltip on top&quot; &gt;
Tooltip on top
&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; v-b-tooltip.hover title=&quot;Tooltip on right&quot; &gt;
Tooltip on right
&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; v-b-tooltip.hover title=&quot;Tooltip on bottom&quot; &gt;
Tooltip on bottom
&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;light&quot; v-b-tooltip.hover title=&quot;Tooltip on left&quot; &gt;
Tooltip on left
&lt;/b-button&gt;
&lt;b-button type=&quot;button&quot; variant=&quot;primary&quot; v-b-tooltip.hover title=&quot;&lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt; &lt;b&gt;HTML&lt;/b&gt;&quot;&gt;
Tooltip with HTML
&lt;/b-button&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Breadcrumb</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="breadcrumb-showcode">Show Code</label>
                                <input id="breadcrumb-showcode" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Indicate the current page’s location within a navigational
                            hierarchy
                        </p>

                        <div class="live-preview">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb p-3 py-2 bg-light">
                                    <li aria-current="page" class="breadcrumb-item active">
                                        Home
                                    </li>
                                </ol>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb p-3 py-2 bg-light">
                                    <li class="breadcrumb-item">
                                        <b-link href="#">Home</b-link>
                                    </li>
                                    <li aria-current="page" class="breadcrumb-item active">
                                        Library
                                    </li>
                                </ol>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb p-3 py-2 bg-light">
                                    <li class="breadcrumb-item">
                                        <b-link href="#">Home</b-link>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <b-link href="#">Base UI</b-link>
                                    </li>
                                    <li aria-current="page" class="breadcrumb-item active">
                                        General
                                    </li>
                                </ol>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb p-3 py-2 bg-light mb-0">
                                    <li class="breadcrumb-item">
                                        <b-link href="#">
                                            <i class="ri-home-5-fill"></i>
                                        </b-link>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <b-link href="#">Base UI</b-link>
                                    </li>
                                    <li aria-current="page" class="breadcrumb-item active">
                                        General
                                    </li>
                                </ol>
                            </nav>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px"><code>&lt;nav aria-label=&quot;breadcrumb&quot;&gt;
&lt;b-breadcrumb&gt;
&lt;b-breadcrumb-item active aria-current=&quot;page&quot;&gt;Home&lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;

&lt;nav aria-label=&quot;breadcrumb&quot;&gt;
&lt;b-breadcrumb&gt;
&lt;b-breadcrumb-item&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/b-breadcrumb-item&gt;
&lt;b-breadcrumb-item active aria-current=&quot;page&quot;&gt;Library&lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;
&lt;/nav&gt;

&lt;nav aria-label=&quot;breadcrumb&quot;&gt;
&lt;b-breadcrumb&gt;
&lt;b-breadcrumb-item&gt;&lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;&lt;/b-breadcrumb-item&gt;
&lt;b-breadcrumb-item&gt;&lt;a href=&quot;#&quot;&gt;Base UI&lt;/a&gt;&lt;/b-breadcrumb-item&gt;
&lt;b-breadcrumb-item active aria-current=&quot;page&quot;&gt;General&lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;
&lt;/nav&gt;

&lt;nav aria-label=&quot;breadcrumb&quot;&gt;
&lt;b-breadcrumb&gt;
&lt;b-breadcrumb-item&gt;&lt;a href=&quot;#&quot;&gt;&lt;i class=&quot;ri-home-5-fill&quot;&gt;&lt;/i&gt;&lt;/a&gt;&lt;/b-breadcrumb-item&gt;
&lt;b-breadcrumb-item&gt;&lt;a href=&quot;#&quot;&gt;Base UI&lt;/a&gt;&lt;/b-breadcrumb-item&gt;
&lt;b-breadcrumb-item active aria-current=&quot;page&quot;&gt;General&lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;
&lt;/nav&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Pagination</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="pagination-showcode">Show Code</label>
                                <input id="pagination-showcode" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <div class="live-preview">
                            <b-row>
                                <b-col lg="6">
                                    <h5 class="fs-15">Default Pagination</h5>
                                    <p class="text-muted">
                                        Use
                                        <code>pagination</code> class to ul element to indicate a
                                        series of related content exists across multiple pages.
                                    </p>

                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">Previous</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">1</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">2</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">3</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">Next</b-link>
                                            </li>
                                        </ul>
                                    </nav>

                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <b-link aria-label="Previous" class="page-link" href="#">← &nbsp; Prev
                                                </b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">1</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">2</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">3</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link aria-label="Next" class="page-link" href="#">Next &nbsp; →
                                                </b-link>
                                            </li>
                                        </ul>
                                    </nav>
                                </b-col>

                                <b-col lg="6">
                                    <div class="mt-4 mt-lg-0">
                                        <h5 class="fs-15">Disabled and Active states</h5>
                                        <p class="text-muted">
                                            Use
                                            <code>disabled</code> class to links that appear
                                            un-clickable and <code>active</code> class to indicate the
                                            current page.
                                        </p>

                                        <!-- Pagination Disabled & Active -->
                                        <nav aria-label="...">
                                            <ul class="pagination">
                                                <li class="page-item disabled">
                                                    <b-link class="page-link" href="#" tabindex="-1">← &nbsp; Prev
                                                    </b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">1</b-link>
                                                </li>
                                                <li class="page-item active">
                                                    <b-link class="page-link" href="#">
                                                        2
                                                        <span class="sr-only">(current)</span>
                                                    </b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">3</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">Next &nbsp; →</b-link>
                                                </li>
                                            </ul>
                                        </nav>

                                        <nav aria-label="...">
                                            <ul class="pagination">
                                                <li class="page-item disabled">
                          <span class="page-link">
                            <i class="mdi mdi-chevron-left"></i>
                          </span>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">1</b-link>
                                                </li>
                                                <li class="page-item active">
                          <span class="page-link">
                            2
                            <span class="sr-only">(current)</span>
                          </span>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">3</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">
                                                        <i class="mdi mdi-chevron-right"></i>
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col lg="6">
                                    <div class="mt-4">
                                        <h5 class="fs-15">Sizing</h5>
                                        <p class="text-muted">
                                            Use
                                            <code>pagination-lg</code> or
                                            <code>pagination-sm</code> to set different pagination
                                            sizes.
                                        </p>
                                        <!-- Pagination Large -->
                                        <nav aria-label="...">
                                            <ul class="pagination pagination-lg">
                                                <li class="page-item disabled">
                                                    <b-link class="page-link" href="#" tabindex="-1">← &nbsp; Prev
                                                    </b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">1</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">2</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">3</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">Next &nbsp; →</b-link>
                                                </li>
                                            </ul>
                                        </nav>

                                        <!-- Pagination Small -->
                                        <nav aria-label="...">
                                            <ul class="pagination pagination-sm">
                                                <li class="page-item disabled">
                                                    <b-link class="page-link" href="#" tabindex="-1">← &nbsp; Prev
                                                    </b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">1</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">2</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">3</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">Next &nbsp; →</b-link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </b-col>

                                <b-col lg="6">
                                    <div class="mt-4">
                                        <h5 class="fs-15">Alignment</h5>

                                        <p class="text-muted">
                                            Use
                                            <code>justify-content-start</code>,
                                            <code>justify-content-start</code>, or
                                            <code>justify-content-start</code>, class to pagination
                                            class to change the alignment of pagination respectively.
                                        </p>
                                        <!-- Pagination Alignment -->

                                        <!-- Center Alignment -->
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination justify-content-center">
                                                <li class="page-item disabled">
                                                    <b-link class="page-link" href="#" tabindex="-1">← &nbsp; Prev
                                                    </b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">1</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">2</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">3</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">Next &nbsp; →</b-link>
                                                </li>
                                            </ul>
                                        </nav>

                                        <!-- Right Alignment -->
                                        <nav aria-label="Page navigation example">
                                            <ul class="pagination justify-content-end">
                                                <li class="page-item disabled">
                                                    <b-link class="page-link" href="#" tabindex="-1">← &nbsp; Prev
                                                    </b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">1</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">2</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">3</b-link>
                                                </li>
                                                <li class="page-item">
                                                    <b-link class="page-link" href="#">Next &nbsp; →</b-link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </b-col>
                            </b-row>

                            <b-row>
                                <b-col lg="6">
                                    <div class="mt-4">
                                        <h5 class="fs-15">Custom Separated Pagination</h5>
                                        <p class="text-muted">
                                            Use
                                            <code>pagination-separated</code> class to pagination
                                            class to set custom separated pagination.
                                        </p>
                                        <!-- Custom Separated Pagination Large -->
                                        <ul class="pagination pagination-lg pagination-separated">
                                            <li class="page-item disabled">
                                                <b-link class="page-link" href="#">←</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">1</b-link>
                                            </li>
                                            <li class="page-item active">
                                                <b-link class="page-link" href="#">2</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">3</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">4</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">5</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">→</b-link>
                                            </li>
                                        </ul>

                                        <!-- Pagination rounded -->
                                        <ul class="pagination pagination-separated">
                                            <li class="page-item disabled">
                                                <b-link class="page-link" href="#">←</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">1</b-link>
                                            </li>
                                            <li class="page-item active">
                                                <b-link class="page-link" href="#">2</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">3</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">4</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">5</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">→</b-link>
                                            </li>
                                        </ul>

                                        <!-- Custom Separated Pagination Large -->
                                        <ul class="pagination pagination-sm pagination-separated">
                                            <li class="page-item disabled">
                                                <b-link class="page-link" href="#">←</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">1</b-link>
                                            </li>
                                            <li class="page-item active">
                                                <b-link class="page-link" href="#">2</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">3</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">4</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">5</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">→</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </b-col>

                                <b-col lg="6">
                                    <div class="mt-4">
                                        <h5 class="fs-15">Custom Rounded Pagination</h5>
                                        <p class="text-muted">
                                            Use
                                            <code>pagination-rounded</code> class to pagination class
                                            to set custom rounded pagination.
                                        </p>
                                        <!-- Pagination rounded -->
                                        <ul class="pagination pagination-lg pagination-rounded">
                                            <li class="page-item disabled">
                                                <b-link class="page-link" href="#">←</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">1</b-link>
                                            </li>
                                            <li class="page-item active">
                                                <b-link class="page-link" href="#">2</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">3</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">4</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">5</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">→</b-link>
                                            </li>
                                        </ul>

                                        <!-- Pagination rounded -->
                                        <ul class="pagination pagination-rounded">
                                            <li class="page-item disabled">
                                                <b-link class="page-link" href="#">←</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">1</b-link>
                                            </li>
                                            <li class="page-item active">
                                                <b-link class="page-link" href="#">2</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">3</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">4</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">5</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">→</b-link>
                                            </li>
                                        </ul>

                                        <!-- Pagination rounded -->
                                        <ul class="pagination pagination-sm pagination-rounded">
                                            <li class="page-item disabled">
                                                <b-link class="page-link" href="#">←</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">1</b-link>
                                            </li>
                                            <li class="page-item active">
                                                <b-link class="page-link" href="#">2</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">3</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">4</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">5</b-link>
                                            </li>
                                            <li class="page-item">
                                                <b-link class="page-link" href="#">→</b-link>
                                            </li>
                                        </ul>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px"><code>&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
&lt;ul class=&quot;pagination&quot;&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Previous&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
&lt;ul class=&quot;pagination&quot;&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot; aria-label=&quot;Previous&quot;&gt;
&lt;i class=&quot;mdi mdi-chevron-left&quot;&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot; aria-label=&quot;Next&quot;&gt;
&lt;i class=&quot;mdi mdi-chevron-right&quot;&gt;&lt;/i&gt;
&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;</code>


<code>&lt;!-- Pagination Disabled &amp; Active --&gt;
&lt;nav aria-label=&quot;...&quot;&gt;
&lt;ul class=&quot;pagination&quot;&gt;
&lt;li class=&quot;page-item disabled&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item active&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2 &lt;span class=&quot;sr-only&quot;&gt;(current)&lt;/span&gt;&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;nav aria-label=&quot;...&quot;&gt;
&lt;ul class=&quot;pagination&quot;&gt;
&lt;li class=&quot;page-item disabled&quot;&gt;
&lt;span class=&quot;page-link&quot;&gt;&lt;i class=&quot;mdi mdi-chevron-left&quot;&gt;&lt;/i&gt;&lt;/span&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item active&quot;&gt;
&lt;span class=&quot;page-link&quot;&gt;
2
&lt;span class=&quot;sr-only&quot;&gt;(current)&lt;/span&gt;
&lt;/span&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;&lt;i class=&quot;mdi mdi-chevron-right&quot;&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;</code>


<code>&lt;!-- Pagination sizing --&gt;

&lt;!-- Pagination Large --&gt;
&lt;nav aria-label=&quot;...&quot;&gt;
&lt;ul class=&quot;pagination pagination-lg&quot;&gt;
&lt;li class=&quot;page-item disabled&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;!-- Pagination Small --&gt;
&lt;nav aria-label=&quot;...&quot;&gt;
&lt;ul class=&quot;pagination pagination-sm&quot;&gt;
&lt;li class=&quot;page-item disabled&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;</code>


<code>&lt;!-- Pagination Alignment --&gt;

&lt;!-- Center Alignment --&gt;
&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
&lt;ul class=&quot;pagination justify-content-center&quot;&gt;
&lt;li class=&quot;page-item disabled&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;</code>

<code>&lt;!-- Right Alignment --&gt;
&lt;nav aria-label=&quot;Page navigation example&quot;&gt;
&lt;ul class=&quot;pagination justify-content-end&quot;&gt;
&lt;li class=&quot;page-item disabled&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot; tabindex=&quot;-1&quot;&gt;Previous&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;1&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;2&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;3&lt;/a&gt;&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a class=&quot;page-link&quot; href=&quot;#&quot;&gt;Next&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;</code>


<code>&lt;!-- Pagination Rounded --&gt;
&lt;ul class=&quot;pagination pagination-rounded&quot;&gt;
&lt;li class=&quot;page-item disabled&quot;&gt;
&lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;&lt;i class=&quot;mdi mdi-chevron-left&quot;&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;1&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item active&quot;&gt;
&lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;2&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;3&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;4&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;5&lt;/a&gt;
&lt;/li&gt;
&lt;li class=&quot;page-item&quot;&gt;
&lt;a href=&quot;#&quot; class=&quot;page-link&quot;&gt;&lt;i class=&quot;mdi mdi-chevron-right&quot;&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col>
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Spinners</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="spinners-showcode">Show Code</label>
                                <input id="spinners-showcode" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <div class="live-preview">
                            <b-row>
                                <b-col lg="6">
                                    <div>
                                        <h5 class="fs-15">Border spinner</h5>
                                        <p class="text-muted">
                                            Use
                                            <code>spinner-border</code> class for a lightweight
                                            loading indicator.
                                        </p>
                                        <div class="d-flex flex-wrap gap-3 mb-2">
                                            <!-- Border spinner -->
                                            <b-spinner label="Spinning" variant="primary"/>
                                            <b-spinner label="Spinning" variant="secondary"/>
                                            <b-spinner label="Spinning" variant="success"/>
                                            <b-spinner label="Spinning" variant="info"/>
                                            <b-spinner label="Spinning" variant="warning"/>
                                            <b-spinner label="Spinning" variant="danger"/>
                                            <b-spinner label="Spinning" variant="dark"/>
                                            <b-spinner label="Spinning" variant="light"/>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="6">
                                    <div>
                                        <h5 class="fs-15">Growing spinner</h5>
                                        <p class="text-muted">
                                            Use
                                            <code>spinner-grow</code> class for a lightweight spinner
                                            with growing effect.
                                        </p>
                                        <div class="d-flex flex-wrap gap-3 mb-2">
                                            <!-- Growing spinner -->
                                            <b-spinner label="Spinning" type="grow" variant="primary"/>
                                            <b-spinner label="Spinning" type="grow" variant="secondary"/>
                                            <b-spinner label="Spinning" type="grow" variant="success"/>
                                            <b-spinner label="Spinning" type="grow" variant="info"/>
                                            <b-spinner label="Spinning" type="grow" variant="warning"/>
                                            <b-spinner label="Spinning" type="grow" variant="danger"/>
                                            <b-spinner label="Spinning" type="grow" variant="dark"/>
                                            <b-spinner label="Spinning" type="grow" variant="light"/>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Border spinner --&gt;

&lt;b-spinner variant=&quot;primary&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;secondary&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;success&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;info&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;warning&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;danger&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;dark&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner variant=&quot;light&quot;&gt;&lt;/b-spinner&gt;
</code>
<code>&lt;!-- Growing spinner --&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;primary&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;secondary&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;success&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;info&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;warning&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;danger&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;dark&quot;&gt;&lt;/b-spinner&gt;

&lt;b-spinner type=&quot;grow&quot; variant=&quot;light&quot;&gt;&lt;/b-spinner&gt;
</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
