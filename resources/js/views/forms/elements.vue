<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Basic Elements",
        meta: [{
            name: "description",
            content: appConfig.description
        }],
    },
    data() {
        return {
            title: "Basic Elements",
            items: [{
                text: "Forms",
                href: "/",
            },
                {
                    text: "Basic Elements",
                    active: true,
                },
            ],
        };
    },
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
                        <b-card-title class="mb-0 flex-grow-1">Input Example</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="form-grid-showcode">Show Code</label>
                                <input id="form-grid-showcode" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="live-preview">
                            <b-row class="gy-4">
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="basiInput">Basic Input</label>
                                        <input id="basiInput" class="form-control" type="password">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="labelInput">Input with Label</label>
                                        <input id="labelInput" class="form-control" type="password">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="placeholderInput">Input with Placeholder</label>
                                        <input id="placeholderInput" class="form-control" placeholder="Placeholder"
                                               type="password">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="valueInput">Input with Value</label>
                                        <input id="valueInput" class="form-control" type="text" value="Input value">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="readonlyPlaintext">Readonly Plain Text
                                            Input</label>
                                        <input id="readonlyPlaintext" class="form-control-plaintext" readonly
                                               type="text" value="Readonly input">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="readonlyInput">Readonly Input</label>
                                        <input id="readonlyInput" class="form-control" readonly
                                               type="text" value="Readonly input">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="disabledInput">Disabled Input</label>
                                        <input id="disabledInput" class="form-control" disabled
                                               type="text" value="Disabled input">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="iconInput">Input with Icon</label>
                                        <div class="form-icon">
                                            <input id="iconInput" class="form-control form-control-icon" placeholder="example@gmail.com"
                                                   type="email">
                                            <i class="ri-mail-unread-line"></i>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="iconrightInput">Input with Icon Right</label>
                                        <div class="form-icon right">
                                            <input id="iconrightInput" class="form-control form-control-icon"
                                                   placeholder="example@gmail.com" type="email">
                                            <i class="ri-mail-unread-line"></i>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="exampleInputdate">Input Date</label>
                                        <input id="exampleInputdate" class="form-control" type="date">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="exampleInputtime">Input Time</label>
                                        <input id="exampleInputtime" class="form-control" type="time">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="exampleInputpassword">Input Password</label>
                                        <input id="exampleInputpassword" class="form-control" type="password"
                                               value="44512465">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="exampleFormControlTextarea5">Example
                                            Textarea</label>
                                        <textarea id="exampleFormControlTextarea5" class="form-control"
                                                  rows="3"></textarea>
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="formtextInput">Form Text</label>
                                        <input id="formtextInput" class="form-control" type="password">
                                        <div id="passwordHelpBlock" class="form-text">
                                            Must be 8-20 characters long.
                                        </div>
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="colorPicker">Color Picker</label>
                                        <input id="colorPicker" class="form-control form-control-color w-100"
                                               type="color" value="#364574">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="borderInput">Input Border Style</label>
                                        <input id="borderInput" class="form-control border-dashed" placeholder="Enter your name"
                                               type="text">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <label class="form-label" for="exampleDataList">Datalist example</label>
                                    <input id="exampleDataList" class="form-control" list="datalistOptions"
                                           placeholder="Search your country...">
                                    <datalist id="datalistOptions">
                                        <option value="Switzerland"/>
                                        <option value="New York"/>
                                        <option value="France"/>
                                        <option value="Spain"/>
                                        <option value="Chicago"/>
                                        <option value="Bulgaria"/>
                                        <option value="Hong Kong"/>
                                    </datalist>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div>
                                        <label class="form-label" for="exampleInputrounded">Rounded Input</label>
                                        <input id="exampleInputrounded" class="form-control rounded-pill" placeholder="Enter your name"
                                               type="text">
                                    </div>
                                </b-col>
                                <b-col md="6" xxl="3">
                                    <div class="form-floating">
                                        <input id="firstnamefloatingInput" class="form-control" placeholder="Enter your firstname"
                                               type="text">
                                        <label for="firstnamefloatingInput">Floating Input</label>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 450px;"><code>&lt;!-- Basic Input --&gt;
&lt;div&gt;
    &lt;label for=&quot;basiInput&quot; class=&quot;form-label&quot;&gt;Basic Input&lt;/label&gt;
    &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;basiInput&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Input with Label --&gt;
&lt;div&gt;
    &lt;label for=&quot;labelInput&quot; class=&quot;form-label&quot;&gt;Input with Label&lt;/label&gt;
    &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;labelInput&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Input with Placeholder --&gt;
&lt;div&gt;
    &lt;label for=&quot;placeholderInput&quot; class=&quot;form-label&quot;&gt;Input with Placeholder&lt;/label&gt;
    &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;placeholderInput&quot; placeholder=&quot;Placeholder&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Input with Value --&gt;
&lt;div&gt;
    &lt;label for=&quot;valueInput&quot; class=&quot;form-label&quot;&gt;Input with Value&lt;/label&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;valueInput&quot; value=&quot;Input value&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Readonly Plain Text Input --&gt;
&lt;div&gt;
    &lt;label for=&quot;readonlyPlaintext&quot; class=&quot;form-label&quot;&gt;Readonly Plain Text Input&lt;/label&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control-plaintext&quot; id=&quot;readonlyPlaintext&quot; value=&quot;Readonly input&quot; readonly&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Readonly Input --&gt;
&lt;div&gt;
    &lt;label for=&quot;readonlyInput&quot; class=&quot;form-label&quot;&gt;Readonly Input&lt;/label&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;readonlyInput&quot; value=&quot;Readonly input&quot; readonly&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Disabled Input --&gt;
&lt;div&gt;
    &lt;label for=&quot;disabledInput&quot; class=&quot;form-label&quot;&gt;Disabled Input&lt;/label&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;disabledInput&quot; value=&quot;Disabled input&quot; disabled&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Input with Icon --&gt;
&lt;div&gt;
    &lt;label for=&quot;iconInput&quot; class=&quot;form-label&quot;&gt;Input with Icon&lt;/label&gt;
    &lt;div class=&quot;form-icon&quot;&gt;
        &lt;input type=&quot;email&quot; class=&quot;form-control form-control-icon&quot; id=&quot;iconInput&quot; placeholder=&quot;example@gmail.com&quot;&gt;
        &lt;i class=&quot;ri-mail-unread-line&quot;&gt;&lt;/i&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Input with Icon Right --&gt;
&lt;div&gt;
    &lt;label for=&quot;iconrightInput&quot; class=&quot;form-label&quot;&gt;Input with Icon Right&lt;/label&gt;
    &lt;div class=&quot;form-icon right&quot;&gt;
        &lt;input type=&quot;email&quot; class=&quot;form-control form-control-icon&quot; id=&quot;iconrightInput&quot; placeholder=&quot;example@gmail.com&quot;&gt;
        &lt;i class=&quot;ri-mail-unread-line&quot;&gt;&lt;/i&gt;
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Input Date --&gt;
&lt;div&gt;
    &lt;label for=&quot;exampleInputdate&quot; class=&quot;form-label&quot;&gt;Input Date&lt;/label&gt;
    &lt;input type=&quot;date&quot; class=&quot;form-control&quot; id=&quot;exampleInputdate&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Input Time --&gt;
&lt;div&gt;
    &lt;label for=&quot;exampleInputtime&quot; class=&quot;form-label&quot;&gt;Input Time&lt;/label&gt;
    &lt;input type=&quot;time&quot; class=&quot;form-control&quot; id=&quot;exampleInputtime&quot; value=&quot;08:56 AM&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Input Password --&gt;
&lt;div&gt;
    &lt;label for=&quot;exampleInputpassword&quot; class=&quot;form-label&quot;&gt;Input Password&lt;/label&gt;
    &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;exampleInputpassword&quot; value=&quot;44512465&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Example Textarea --&gt;
&lt;div&gt;
    &lt;label for=&quot;exampleFormControlTextarea5&quot; class=&quot;form-label&quot;&gt;Example Textarea&lt;/label&gt;
    &lt;textarea class=&quot;form-control&quot; id=&quot;exampleFormControlTextarea5&quot; rows=&quot;3&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Form Text --&gt;
&lt;div&gt;
    &lt;label for=&quot;formtextInput&quot; class=&quot;form-label&quot;&gt;Form Text&lt;/label&gt;
    &lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;formtextInput&quot;&gt;
    &lt;div id=&quot;passwordHelpBlock&quot; class=&quot;form-text&quot;&gt;
        Must be 8-20 characters long.
    &lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Color Picker --&gt;
&lt;div&gt;
    &lt;label for=&quot;colorPicker&quot; class=&quot;form-label&quot;&gt;Color Picker&lt;/label&gt;
    &lt;input type=&quot;color&quot; class=&quot;form-control form-control-color w-100&quot; id=&quot;colorPicker&quot; value=&quot;#364574&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Input Border Style --&gt;
&lt;div&gt;
    &lt;label for=&quot;borderInput&quot; class=&quot;form-label&quot;&gt;Input Border Style&lt;/label&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control border-dashed&quot; id=&quot;borderInput&quot; placeholder=&quot;Enter your name&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Datalist example --&gt;
&lt;label for=&quot;exampleDataList&quot; class=&quot;form-label&quot;&gt;Datalist example&lt;/label&gt;
&lt;input class=&quot;form-control&quot; list=&quot;datalistOptions&quot; id=&quot;exampleDataList&quot; placeholder=&quot;Search your country...&quot;&gt;
&lt;datalist id=&quot;datalistOptions&quot;&gt;
    &lt;option value=&quot;Switzerland&quot;&gt;
    &lt;option value=&quot;New York&quot;&gt;
    &lt;option value=&quot;France&quot;&gt;
    &lt;option value=&quot;Spain&quot;&gt;
    &lt;option value=&quot;Chicago&quot;&gt;
    &lt;option value=&quot;Bulgaria&quot;&gt;
    &lt;option value=&quot;Hong Kong&quot;&gt;
&lt;/datalist&gt;</code>

<code>&lt;!-- Rounded Input --&gt;
&lt;div&gt;
    &lt;label for=&quot;exampleInputrounded&quot; class=&quot;form-label&quot;&gt;Rounded Input&lt;/label&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control rounded-pill&quot; id=&quot;exampleInputrounded&quot; placeholder=&quot;Enter your name&quot;&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Input Sizing</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="sizing-input-showcode">Show Code</label>
                                <input id="sizing-input-showcode" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>form-control-lg</code> class to set large size input and Use
                            <code>form-control-sm</code>
                            class to set small size input. No class is needed for default size input.
                        </p>
                        <div class="live-preview">
                            <b-row class="align-items-center g-3">
                                <b-col lg="4">
                                    <input class="form-control form-control-sm" placeholder=".form-control-sm"
                                           type="text">
                                </b-col>
                                <b-col lg="4">
                                    <input class="form-control" placeholder=".form-control" type="text">
                                </b-col>
                                <b-col lg="4">
                                    <input class="form-control form-control-lg" placeholder=".form-control-lg"
                                           type="text">
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
                            <pre
                                class="language-markup"><code>&lt;!-- Form Control Sm --&gt;
&lt;input class=&quot;form-control form-control-sm&quot; type=&quot;text&quot; placeholder=&quot;.form-control-sm&quot;&gt;</code>

<code>&lt;!-- Form Control Default --&gt;
&lt;input class=&quot;form-control&quot; type=&quot;text&quot; placeholder=&quot;.form-control-sm&quot;&gt;</code>

<code>&lt;!-- Form Control Lg --&gt;
&lt;input class=&quot;form-control form-control-lg&quot; type=&quot;text&quot; placeholder=&quot;.form-control-sm&quot;&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">File Input</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="file-input-showcode">Show Code</label>
                                <input id="file-input-showcode" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="live-preview">
                            <b-row class="align-items-center g-3">
                                <b-col lg="4">
                                    <div>
                                        <label class="form-label" for="formFile">Default File Input Example</label>
                                        <p class="text-muted">Use <code>input</code> attribute with
                                            <code>type="file"</code> tag for default file input.
                                        </p>
                                        <input id="formFile" class="form-control" type="file">
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div>
                                        <label class="form-label" for="formFileMultiple">Multiple Files Input
                                            Example</label>
                                        <p class="text-muted">Use <code>multiple</code> attribute within the input
                                            attribute to select multiple files.</p>
                                        <input id="formFileMultiple" class="form-control" multiple type="file">
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div>
                                        <label class="form-label" for="formFileDisabled">Disabled File Input
                                            Example</label>
                                        <p class="text-muted">Use <code>disabled</code> attribute within the input
                                            attribute to disable the file input.</p>
                                        <input id="formFileDisabled" class="form-control" disabled type="file">
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row class="mt-4 align-items-center g-3">
                                <h5 class="fs-14">File Input Sizing</h5>
                                <b-col lg="4">
                                    <div>
                                        <label class="form-label" for="formSizeSmall">Small Size File Input
                                            Example</label>
                                        <p class="text-muted">Use <code>form-control-sm</code> class within the
                                            form-control class to set a small size file input.</p>
                                        <input id="formSizeSmall" class="form-control form-control-sm" type="file">
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div>
                                        <label class="form-label" for="formSizeDefault">Default Size File Input
                                            Example</label>
                                        <p class="text-muted">Use <code>form-control </code>class and
                                            <code>type="file"</code> attribute within the input attribute to set a
                                            default size file input.
                                        </p>
                                        <input id="formSizeDefault" class="form-control" type="file">
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div>
                                        <label class="form-label" for="formSizeLarge">Large Size File Input
                                            Example</label>
                                        <p class="text-muted">Use <code>form-control-lg</code> class within the
                                            form-control class to set a large size file input.</p>

                                        <input id="formSizeLarge" class="form-control form-control-lg" type="file">
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Default File Input Example --&gt;
&lt;div&gt;
    &lt;label for=&quot;formFile&quot; class=&quot;form-label&quot;&gt;Default file input example&lt;/label&gt;
    &lt;input class=&quot;form-control&quot; type=&quot;file&quot; id=&quot;formFile&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Multiple Files Input Example --&gt;
&lt;div&gt;
    &lt;label for=&quot;formFileMultiple&quot; class=&quot;form-label&quot;&gt;Multiple files input example&lt;/label&gt;
    &lt;input class=&quot;form-control&quot; type=&quot;file&quot; id=&quot;formFileMultiple&quot; multiple&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Disabled File Input Example --&gt;
&lt;div&gt;
    &lt;label for=&quot;formFileDisabled&quot; class=&quot;form-label&quot;&gt;Disabled File Input Example&lt;/label&gt;
    &lt;input class=&quot;form-control&quot; type=&quot;file&quot; id=&quot;formFileDisabled&quot; disabled&gt;
&lt;/div&gt;</code>

<code>&lt;!-- File Input Sizing Small --&gt;
&lt;div&gt;
    &lt;input class=&quot;form-control form-control-sm&quot; id=&quot;formFileSm&quot; type=&quot;file&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- File Input Sizing Default --&gt;
&lt;div&gt;
    &lt;input class=&quot;form-control&quot; id=&quot;formFileSm&quot; type=&quot;file&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- File Input Sizing Large --&gt;
&lt;div&gt;
    &lt;input class=&quot;form-control form-control-lg&quot; id=&quot;formFileSm&quot; type=&quot;file&quot;&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Input Group</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="input-group-showcode">Show Code</label>
                                <input id="input-group-showcode" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="live-preview">
                            <div>
                                <h5 class="fs-15">Basic example</h5>
                                <p class="text-muted">Use <code>input-group</code> class to div element which contains
                                    input attribute to wrap a default input in the group.</p>
                                <b-row class="g-3">
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <span id="basic-addon1" class="input-group-text">@</span>
                                            <input aria-describedby="basic-addon1" aria-label="Username" class="form-control"
                                                   placeholder="Username" type="text">
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <input aria-describedby="basic-addon2" aria-label="Recipient's username" class="form-control"
                                                   placeholder="Recipient's username" type="text">
                                            <span id="basic-addon2" class="input-group-text">@example.com</span>
                                        </div>
                                    </b-col>
                                    <b-col lg="12">
                                        <div class="input-group">
                                            <span class="input-group-text">$</span>
                                            <input aria-label="Amount (to the nearest dollar)" class="form-control"
                                                   type="text">
                                            <span class="input-group-text">.00</span>
                                        </div>
                                    </b-col>
                                    <b-col lg="12">
                                        <div class="input-group">
                                            <input aria-label="Username" class="form-control" placeholder="Username"
                                                   type="text">
                                            <span class="input-group-text">@</span>
                                            <input aria-label="Server" class="form-control" placeholder="Server"
                                                   type="text">
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <span class="input-group-text">With textarea</span>
                                            <textarea aria-label="With textarea" class="form-control"
                                                      rows="2"></textarea>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <label class="form-label" for="basic-url">Your vanity URL</label>
                                        <div class="input-group">
                                            <span id="basic-addon3"
                                                  class="input-group-text">https://example.com/users/</span>
                                            <input id="basic-url" aria-describedby="basic-addon3" class="form-control"
                                                   type="text">
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="mt-4">
                                <h5 class="fs-15">Wrapping</h5>
                                <p class="text-muted">Input groups wrap by default via <code>flex-wrap: wrap</code> in
                                    order to accommodate custom form field validation within an input group. You may
                                    disable this with <code>flex-nowrap</code> class.</p>
                                <div class="input-group flex-nowrap">
                                    <span id="addon-wrapping" class="input-group-text">@</span>
                                    <input aria-describedby="addon-wrapping" aria-label="Username" class="form-control" placeholder="Username"
                                           type="text">
                                </div>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Basic example --&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon1&quot;&gt;@&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Username&quot; aria-label=&quot;Username&quot; aria-describedby=&quot;basic-addon1&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Recipient's username&quot; aria-label=&quot;Recipient's username&quot; aria-describedby=&quot;basic-addon2&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon2&quot;&gt;@example.com&lt;/span&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;$&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Amount (to the nearest dollar)&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;.00&lt;/span&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Username&quot; aria-label=&quot;Username&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;@&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Server&quot; aria-label=&quot;Server&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;With textarea&lt;/span&gt;
    &lt;textarea class=&quot;form-control&quot; aria-label=&quot;With textarea&quot; rows=&quot;2&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;</code>
<code>&lt;label for=&quot;basic-url&quot; class=&quot;form-label&quot;&gt;Your vanity URL&lt;/label&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;basic-addon3&quot;&gt;https://example.com/users/&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;basic-url&quot; aria-describedby=&quot;basic-addon3&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Wrapping --&gt;
&lt;div class=&quot;input-group flex-nowrap&quot;&gt;
    &lt;span class=&quot;input-group-text&quot; id=&quot;addon-wrapping&quot;&gt;@&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Username&quot; aria-label=&quot;Username&quot; aria-describedby=&quot;addon-wrapping&quot;&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Input Group Sizing</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="input-group-sizing-showcode">Show Code</label>
                                <input id="input-group-sizing-showcode" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Use <code>input-group-sm</code> class to set a small size input group and
                            <code>input-group-lg</code> class to input-group class to set a large size input group
                            respectively. no such class is required for a default size input group.
                        </p>
                        <div class="live-preview">
                            <b-row class="align-items-center g-3">
                                <b-col lg="4">
                                    <div class="input-group input-group-sm">
                                        <span id="inputGroup-sizing-sm" class="input-group-text">Small</span>
                                        <input aria-describedby="inputGroup-sizing-sm" aria-label="Sizing example input" class="form-control"
                                               type="text">
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="input-group">
                                        <span id="inputGroup-sizing-default" class="input-group-text">Default</span>
                                        <input aria-describedby="inputGroup-sizing-default" aria-label="Sizing example input" class="form-control"
                                               type="text">
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div class="input-group input-group-lg">
                                        <span id="inputGroup-sizing-lg" class="input-group-text">Large</span>
                                        <input aria-describedby="inputGroup-sizing-lg" aria-label="Sizing example input" class="form-control"
                                               type="text">
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Input Group Sizing --&gt;
&lt;div class=&quot;input-group input-group-sm&quot;&gt;
&lt;span class=&quot;input-group-text&quot; id=&quot;inputGroup-sizing-sm&quot;&gt;Small&lt;/span&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Sizing example input&quot; aria-describedby=&quot;inputGroup-sizing-sm&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;input-group&quot;&gt;
&lt;span class=&quot;input-group-text&quot; id=&quot;inputGroup-sizing-default&quot;&gt;Default&lt;/span&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Sizing example input&quot; aria-describedby=&quot;inputGroup-sizing-default&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;input-group input-group-lg&quot;&gt;
&lt;span class=&quot;input-group-text&quot; id=&quot;inputGroup-sizing-lg&quot;&gt;Large&lt;/span&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Sizing example input&quot; aria-describedby=&quot;inputGroup-sizing-lg&quot;&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Multiple Inputs</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="input-group-multiple-showcode">Show
                                    Code</label>
                                <input id="input-group-multiple-showcode" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">While multiple <code>&lt;input&gt;</code>s are supported visually,
                            validation styles are only available for input groups with a single
                            <code>&lt;input&gt;</code>.
                        </p>
                        <div class="live-preview">
                            <div class="input-group mb-3">
                                <span class="input-group-text">First and last name</span>
                                <input aria-label="First name" class="form-control" type="text">
                                <input aria-label="Last name" class="form-control" type="text">
                            </div>

                            <div class="input-group mb-3">
                                <span class="input-group-text">$</span>
                                <span class="input-group-text">0.00</span>
                                <input aria-label="Dollar amount (with dot and two decimal places)" class="form-control"
                                       type="text">
                            </div>

                            <div class="input-group">
                                <input aria-label="Dollar amount (with dot and two decimal places)" class="form-control"
                                       type="text">
                                <span class="input-group-text">$</span>
                                <span class="input-group-text">0.00</span>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Multiple Inputs --&gt;
&lt;div class=&quot;input-group mb-3&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;First and last name&lt;/span&gt;
    &lt;input type=&quot;text&quot; aria-label=&quot;First name&quot; class=&quot;form-control&quot;&gt;
    &lt;input type=&quot;text&quot; aria-label=&quot;Last name&quot; class=&quot;form-control&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;input-group mb-3&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;$&lt;/span&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;0.00&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Dollar amount (with dot and two decimal places)&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Dollar amount (with dot and two decimal places)&quot;&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;$&lt;/span&gt;
    &lt;span class=&quot;input-group-text&quot;&gt;0.00&lt;/span&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Buttons, Checkboxs and Radios Group</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="input-group-btncheck-showcode">Show
                                    Code</label>
                                <input id="input-group-btncheck-showcode" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="live-preview">
                            <div>
                                <p class="text-muted">Use any checkbox, radio, or button option within an input group’s
                                    addon instead of text. We recommend adding <code>mt-0</code> class to the
                                    <code>form-check-input</code> when there’s no visible text next to the input.
                                </p>
                                <b-row class="g-3">
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <div class="input-group-text">
                                                <input aria-label="Checkbox for following text input" class="form-check-input mt-0" type="checkbox"
                                                       value="">
                                            </div>
                                            <input aria-label="Text input with checkbox" class="form-control"
                                                   type="text">
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <div class="input-group-text">
                                                <input aria-label="Radio button for following text input" class="form-check-input mt-0" type="radio"
                                                       value="">
                                            </div>
                                            <input aria-label="Text input with radio button" class="form-control"
                                                   type="text">
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <b-button id="button-addon1" type="button"
                                                      variant="outline-primary">Button
                                            </b-button>
                                            <input aria-describedby="button-addon1" aria-label="Example text with button addon" class="form-control"
                                                   placeholder=""
                                                   type="text">
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <input aria-describedby="button-addon2" aria-label="Recipient's username" class="form-control"
                                                   type="text">
                                            <b-button id="button-addon2" type="button"
                                                      variant="outline-success">Button
                                            </b-button>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <b-button type="button" variant="primary">Button</b-button>
                                            <b-button type="button" variant="success">Button</b-button>
                                            <input aria-label="Example text with two button addons" class="form-control" placeholder=""
                                                   type="text">
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <input aria-label="Recipient's username with two button addons" class="form-control"
                                                   type="text">
                                            <b-button type="button" variant="primary">Button</b-button>
                                            <b-button type="button" variant="success">Button</b-button>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Checkbox Input --&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;div class=&quot;input-group-text&quot;&gt;
        &lt;input class=&quot;form-check-input mt-0&quot; type=&quot;checkbox&quot; value=&quot;&quot; aria-label=&quot;Checkbox for following text input&quot;&gt;
    &lt;/div&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Text input with checkbox&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Radio Input --&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;div class=&quot;input-group-text&quot;&gt;
        &lt;input class=&quot;form-check-input mt-0&quot; type=&quot;radio&quot; value=&quot;&quot; aria-label=&quot;Radio button for following text input&quot;&gt;
    &lt;/div&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Text input with radio button&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Buttons Input --&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot; id=&quot;button-addon1&quot;&gt;Button&lt;/button&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;&quot; aria-label=&quot;Example text with button addon&quot; aria-describedby=&quot;button-addon1&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Recipient's username&quot; aria-describedby=&quot;button-addon2&quot;&gt;
    &lt;button class=&quot;btn btn-outline-success&quot; type=&quot;button&quot; id=&quot;button-addon2&quot;&gt;Button&lt;/button&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
    &lt;button class=&quot;btn btn-success&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;&quot; aria-label=&quot;Example text with two button addons&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Recipient's username with two button addons&quot;&gt;
    &lt;button class=&quot;btn btn-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
    &lt;button class=&quot;btn btn-success&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Buttons with dropdowns</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="input-group-dropdown-showcode">Show
                                    Code</label>
                                <input id="input-group-dropdown-showcode" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="live-preview">
                            <div>
                                <p class="text-muted">You can use a button with the dropdown toggle to set the file
                                    input group.</p>
                                <b-row class="g-3">
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <b-dropdown text="Dropdown" variant="primary">
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-divider></b-dropdown-divider>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                            <input aria-label="Text input with dropdown button" class="form-control"
                                                   type="text">
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <input aria-label="Text input with dropdown button" class="form-control"
                                                   type="text">
                                            <b-dropdown right text="Dropdown" variant="success">
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-divider></b-dropdown-divider>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>
                                    </b-col>
                                    <b-col lg="12">
                                        <div class="input-group">
                                            <b-dropdown text="Dropdown" variant="outline-secondary">
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-divider></b-dropdown-divider>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>

                                            <input aria-label="Text input with 2 dropdown buttons" class="form-control"
                                                   type="text">
                                            <b-dropdown right text="Dropdown" variant="outline-secondary">
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-divider></b-dropdown-divider>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Buttons with dropdowns --&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;button class=&quot;btn btn-primary dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Dropdown&lt;/button&gt;
    &lt;ul class=&quot;dropdown-menu&quot;&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;hr class=&quot;dropdown-divider&quot;&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Text input with dropdown button&quot;&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Text input with dropdown button&quot;&gt;
    &lt;button class=&quot;btn btn-success dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Dropdown&lt;/button&gt;
    &lt;ul class=&quot;dropdown-menu dropdown-menu-end&quot;&gt;
      &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;hr class=&quot;dropdown-divider&quot;&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;button class=&quot;btn btn-outline-secondary dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Dropdown&lt;/button&gt;
    &lt;ul class=&quot;dropdown-menu&quot;&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action before&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action before&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;hr class=&quot;dropdown-divider&quot;&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-control&quot; aria-label=&quot;Text input with 2 dropdown buttons&quot;&gt;
    &lt;button class=&quot;btn btn-outline-secondary dropdown-toggle&quot; type=&quot;button&quot; data-bs-toggle=&quot;dropdown&quot; aria-expanded=&quot;false&quot;&gt;Dropdown&lt;/button&gt;
    &lt;ul class=&quot;dropdown-menu dropdown-menu-end&quot;&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Action&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Another action&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Something else here&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;hr class=&quot;dropdown-divider&quot;&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a class=&quot;dropdown-item&quot; href=&quot;#&quot;&gt;Separated link&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Custom Forms</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="input-group-custom-showcode">Show Code</label>
                                <input id="input-group-custom-showcode" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">Input groups include support for custom selects and custom file inputs.
                            Browser default versions of these are not supported.</p>
                        <div class="live-preview">
                            <div>
                                <h5 class="fs-15 mb-3">Select</h5>
                                <b-row class="g-3">
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <label class="input-group-text" for="inputGroupSelect01">Options</label>
                                            <select id="inputGroupSelect01" class="form-select">
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <select id="inputGroupSelect02" class="form-select">
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <label class="input-group-text" for="inputGroupSelect02">Options</label>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <b-button type="button" variant="outline-primary">Button</b-button>
                                            <select id="inputGroupSelect03" aria-label="Example select with button addon"
                                                    class="form-select">
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <select id="inputGroupSelect04" aria-label="Example select with button addon"
                                                    class="form-select">
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            <b-button type="button" variant="outline-secondary">Button</b-button>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                            <div class="mt-4">
                                <h5 class="fs-15 mb-3">File Input</h5>
                                <b-row class="g-3">
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <label class="input-group-text" for="inputGroupFile01">Upload</label>
                                            <input id="inputGroupFile01" class="form-control" type="file">
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <input id="inputGroupFile02" class="form-control" type="file">
                                            <label class="input-group-text" for="inputGroupFile02">Upload</label>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <b-button id="inputGroupFileAddon03" type="button"
                                                      variant="outline-primary">Button
                                            </b-button>
                                            <input id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload"
                                                   class="form-control" type="file">
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="input-group">
                                            <input id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                                   class="form-control" type="file">
                                            <b-button id="inputGroupFileAddon04" type="button"
                                                      variant="outline-success">Button
                                            </b-button>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;"><code>&lt;!-- Select --&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;label class=&quot;input-group-text&quot; for=&quot;inputGroupSelect01&quot;&gt;Options&lt;/label&gt;
    &lt;select class=&quot;form-select&quot; id=&quot;inputGroupSelect01&quot;&gt;
        &lt;option selected&gt;Choose...&lt;/option&gt;
        &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
        &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
        &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
    &lt;/select&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;select class=&quot;form-select&quot; id=&quot;inputGroupSelect02&quot;&gt;
        &lt;option selected&gt;Choose...&lt;/option&gt;
        &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
        &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
        &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
        &lt;/select&gt;
    &lt;label class=&quot;input-group-text&quot; for=&quot;inputGroupSelect02&quot;&gt;Options&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
    &lt;select class=&quot;form-select&quot; id=&quot;inputGroupSelect03&quot; aria-label=&quot;Example select with button addon&quot;&gt;
        &lt;option selected&gt;Choose...&lt;/option&gt;
        &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
        &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
        &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
    &lt;/select&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;select class=&quot;form-select&quot; id=&quot;inputGroupSelect04&quot; aria-label=&quot;Example select with button addon&quot;&gt;
        &lt;option selected&gt;Choose...&lt;/option&gt;
        &lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
        &lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
        &lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
    &lt;/select&gt;
    &lt;button class=&quot;btn btn-outline-secondary&quot; type=&quot;button&quot;&gt;Button&lt;/button&gt;
&lt;/div&gt;</code>

<code>&lt;!-- File Input --&gt;
&lt;div class=&quot;input-group&quot;&gt;
    &lt;label class=&quot;input-group-text&quot; for=&quot;inputGroupFile01&quot;&gt;Upload&lt;/label&gt;
    &lt;input type=&quot;file&quot; class=&quot;form-control&quot; id=&quot;inputGroupFile01&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;input type=&quot;file&quot; class=&quot;form-control&quot; id=&quot;inputGroupFile02&quot;&gt;
    &lt;label class=&quot;input-group-text&quot; for=&quot;inputGroupFile02&quot;&gt;Upload&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;button class=&quot;btn btn-outline-primary&quot; type=&quot;button&quot; id=&quot;inputGroupFileAddon03&quot;&gt;Button&lt;/button&gt;
    &lt;input type=&quot;file&quot; class=&quot;form-control&quot; id=&quot;inputGroupFile03&quot; aria-describedby=&quot;inputGroupFileAddon03&quot; aria-label=&quot;Upload&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;input-group&quot;&gt;
    &lt;input type=&quot;file&quot; class=&quot;form-control&quot; id=&quot;inputGroupFile04&quot; aria-describedby=&quot;inputGroupFileAddon04&quot; aria-label=&quot;Upload&quot;&gt;
    &lt;button class=&quot;btn btn-outline-success&quot; type=&quot;button&quot; id=&quot;inputGroupFileAddon04&quot;&gt;Button&lt;/button&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
