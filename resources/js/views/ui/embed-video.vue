<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";

import 'prismjs';
import 'prismjs/themes/prism.css';

export default {
    data() {
        return {
            title: "Embed Video",
            items: [
                {
                    text: "Base UI",
                    href: "/",
                },
                {
                    text: "Embed Video",
                    active: true,
                },
            ],
        };
    },
    name: "Embed Video",
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
            <b-col xl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Ratio Video 16:9</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="ratiovideo1-showcode">Show Code</label>
                                <input id="ratiovideo1-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Wrap any embed in
                            <code>&lt;iframe&gt;</code> tag, in a parent element, use
                            <code>ratio-16x9</code> class to set aspect ratio 16:9.
                        </p>
                        <div class="live-preview">
                            <!-- 16:9 aspect ratio -->
                            <div class="ratio ratio-16x9">
                                <iframe allowfullscreen class="rounded"
                                        src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video"></iframe>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Ratio Video 16:9 --&gt;
&lt;div class=&quot;ratio ratio-16x9&quot;&gt;
&lt;iframe src=&quot;https://www.youtube.com/embed/1y_kfWUCFDQ&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>

                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Ratio Video 4:3</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="ratiovideo3-showcode">Show Code</label>
                                <input id="ratiovideo3-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>ratio-4x3</code> class to set aspect ratio 4:3.
                        </p>
                        <div class="live-preview">
                            <!-- 4:3 aspect ratio -->
                            <div class="ratio ratio-4x3">
                                <iframe allowfullscreen class="rounded"
                                        src="https://www.youtube.com/embed/PHcgN1GTjdU" title="YouTube video"></iframe>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Ratio Video 4:3 --&gt;
&lt;div class=&quot;ratio ratio-4x3&quot;&gt;
&lt;iframe src=&quot;https://www.youtube.com/embed/1y_kfWUCFDQ&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>

                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Custom Ratios</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="ratiovideocustom-showcode">Show Code</label>
                                <input id="ratiovideocustom-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>--vz-aspect-ratio: 50%</code> to style element to set aspect ratio 2:1.
                        </p>
                        <div class="live-preview">
                            <!-- 16:9 aspect ratio -->
                            <div class="ratio" style="--vz-aspect-ratio: 50%;">
                                <iframe allowfullscreen class="rounded"
                                        src="https://www.youtube.com/embed/2RZQN_ko0iU" title="YouTube video"></iframe>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Custom Ratio Video --&gt;
&lt;div class=&quot;ratio&quot; style=&quot;--vz-aspect-ratio: 50%;&quot;&gt;
&lt;iframe src=&quot;https://www.youtube.com/embed/2RZQN_ko0iU&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Ratio Video 21:9</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="ratiovideo2-showcode">Show Code</label>
                                <input id="ratiovideo2-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>ratio-21x9</code> class to set aspect ratio 21:9.
                        </p>
                        <div class="live-preview">
                            <!-- 21:9 aspect ratio -->
                            <div class="ratio ratio-21x9">
                                <iframe allowfullscreen class="rounded"
                                        src="https://www.youtube.com/embed/Z-fV2lGKnnU" title="YouTube video"></iframe>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Ratio Video 21:9 --&gt;
&lt;div class=&quot;ratio ratio-21x9&quot;&gt;
&lt;iframe src=&quot;https://www.youtube.com/embed/Z-fV2lGKnnU&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>

                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Ratio Video 1:1</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="ratiovideo4-showcode">Show Code</label>
                                <input id="ratiovideo4-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use
                            <code>ratio-1x1</code> class to set aspect ratio 1:1.
                        </p>
                        <div class="live-preview">
                            <!-- 1:1 aspect ratio -->
                            <div class="ratio ratio-1x1">
                                <iframe allowfullscreen class="rounded"
                                        src="https://www.youtube.com/embed/GfSZtaoc5bw" title="YouTube video"></iframe>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;!-- Ratio Video 1:1 --&gt;
&lt;div class=&quot;ratio ratio-1x1&quot;&gt;
&lt;iframe src=&quot;https://www.youtube.com/embed/GfSZtaoc5bw&quot; title=&quot;YouTube video&quot; allowfullscreen&gt;&lt;/iframe&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
