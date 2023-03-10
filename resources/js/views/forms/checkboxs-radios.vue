<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Checkboxs & Radios",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Checkboxs & Radios",
            items: [
                {
                    text: "Forms",
                    href: "/",
                },
                {
                    text: "Checkboxs & Radios",
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
                        <b-card-title class="mb-0 flex-grow-1">Checkbox</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="default">Show Code</label>
                                <input id="default" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <div class="live-preview">
                            <b-row>
                                <b-col lg="4" md="6">
                                    <div>
                                        <p class="text-muted fw-medium">Default Checkbox</p>
                                        <p class="text-muted">Use <code>type="checkbox"</code> attribute to set a
                                            checkbox and add <code>checked</code>
                                            attribute to set a checkbox checked by default.</p>
                                        <div class="form-check mb-2">
                                            <input id="formCheck1" class="form-check-input" type="checkbox">
                                            <label class="form-check-label" for="formCheck1">
                                                Default checkbox
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input id="formCheck2" checked class="form-check-input" type="checkbox">
                                            <label class="form-check-label" for="formCheck2">
                                                Checked checkbox
                                            </label>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="4" md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted fw-medium">Disabled Checkbox</p>
                                        <p class="text-muted">Use <code>disabled</code> attribute to set a checkbox
                                            disabled and add <code>checked</code>
                                            attribute to set a checkbox checked by default.</p>
                                        <div>
                                            <div class="form-check form-check-right mb-2">
                                                <input id="flexCheckDisabled" class="form-check-input" disabled
                                                       type="checkbox" value="">
                                                <label class="form-check-label" for="flexCheckDisabled">
                                                    Disabled checkbox
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="form-check form-check-right">
                                                <input id="flexCheckCheckedDisabled" checked class="form-check-input"
                                                       disabled type="checkbox" value="">
                                                <label class="form-check-label" for="flexCheckCheckedDisabled">
                                                    Disabled checked checkbox
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="4" md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted fw-medium">Checkbox Right</p>
                                        <p class="text-muted">Use <code>form-check-right</code> class to form-check
                                            class to set a checkbox on the right side.</p>
                                        <div class="form-check form-check-right mb-2">
                                            <input id="formCheckboxRight1" checked="" class="form-check-input"
                                                   name="formCheckboxRight" type="checkbox">
                                            <label class="form-check-label" for="formCheckboxRight1">
                                                Form Radio Right
                                            </label>
                                        </div>
                                        <div>
                                            <div class="form-check form-check-right">
                                                <input id="flexCheckCheckedRightDisabled" checked class="form-check-input"
                                                       disabled type="checkbox" value="">
                                                <label class="form-check-label" for="flexCheckCheckedRightDisabled">
                                                    Disabled checked checkbox
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="6">
                                    <div class="mt-3">
                                        <p class="text-muted fw-medium">Indeterminate</p>
                                        <div>
                                            <div class="form-check">
                                                <input id="defaultIndeterminateCheck" class="form-check-input" type="checkbox"
                                                       value="">
                                                <label class="form-check-label" for="defaultIndeterminateCheck">
                                                    Indeterminate checkbox
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Base Example --&gt;
&lt;div class=&quot;form-check mb-2&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck1&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck1&quot;&gt;
Default checkbox
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck2&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck2&quot;&gt;
Checked checkbox
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Disabled Checkbox --&gt;
&lt;div class=&quot;form-check form-check-right mb-2&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; name=&quot;formCheckboxRight&quot; id=&quot;formCheckboxRight1&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheckboxRight1&quot;&gt;
Form Radio Right
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div&gt;
&lt;div class=&quot;form-check form-check-right&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;flexCheckCheckedDisabled&quot; checked disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexCheckCheckedDisabled&quot;&gt;
Disabled checked checkbox
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Form Checkbox Right --&gt;
&lt;div class=&quot;form-check form-check-right mb-2&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; name=&quot;formCheckboxRight&quot; id=&quot;formCheckboxRight1&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheckboxRight1&quot;&gt;
Form Radio Right
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div&gt;
&lt;div class=&quot;form-check form-check-right&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;flexCheckCheckedDisabled&quot; checked disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexCheckCheckedDisabled&quot;&gt;
Disabled checked checkbox
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Indeterminate --&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;flexCheckIndeterminate&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexCheckIndeterminate&quot;&gt;
Indeterminate checkbox
&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Custom Checkboxes</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="custom-checkboxes-showcode">Show Code</label>
                                <input id="custom-checkboxes-showcode" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="live-preview">
                            <b-row>
                                <b-col md="6">
                                    <div>

                                        <p class="text-muted">Use <code>form-check-</code> class with below-mentioned
                                            color variation to set a color checkbox.</p>
                                        <div>
                                            <div class="form-check mb-3">
                                                <input id="formCheck6" checked class="form-check-input" type="checkbox">
                                                <label class="form-check-label" for="formCheck6">
                                                    Checkbox Primary
                                                </label>
                                            </div>
                                            <div class="form-check form-check-secondary mb-3">
                                                <input id="formCheck7" checked class="form-check-input" type="checkbox">
                                                <label class="form-check-label" for="formCheck7">
                                                    Checkbox Secondary
                                                </label>
                                            </div>
                                            <div class="form-check form-check-success mb-3">
                                                <input id="formCheck8" checked class="form-check-input" type="checkbox">
                                                <label class="form-check-label" for="formCheck8">
                                                    Checkbox Success
                                                </label>
                                            </div>
                                            <div class="form-check form-check-warning mb-3">
                                                <input id="formCheck9" checked class="form-check-input" type="checkbox">
                                                <label class="form-check-label" for="formCheck9">
                                                    Checkbox Warning
                                                </label>
                                            </div>
                                            <div class="form-check form-check-danger mb-3">
                                                <input id="formCheck10" checked class="form-check-input"
                                                       type="checkbox">
                                                <label class="form-check-label" for="formCheck10">
                                                    Checkbox Danger
                                                </label>
                                            </div>
                                            <div class="form-check form-check-info mb-3">
                                                <input id="formCheck11" checked class="form-check-input"
                                                       type="checkbox">
                                                <label class="form-check-label" for="formCheck11">
                                                    Checkbox Info
                                                </label>
                                            </div>
                                            <div class="form-check form-check-dark">
                                                <input id="formCheck12" checked class="form-check-input"
                                                       type="checkbox">
                                                <label class="form-check-label" for="formCheck12">
                                                    Checkbox Dark
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted">Use <code>form-check-outline</code> class and
                                            <code>form-check-</code> class with below-mentioned color variation to set a
                                            color checkbox with outline.
                                        </p>
                                        <div>
                                            <div class="form-check form-check-outline form-check-primary mb-3">
                                                <input id="formCheck13" checked class="form-check-input"
                                                       type="checkbox">
                                                <label class="form-check-label" for="formCheck13">
                                                    Checkbox Outline Primary
                                                </label>
                                            </div>
                                            <div class="form-check form-check-outline form-check-secondary mb-3">
                                                <input id="formCheck14" checked class="form-check-input"
                                                       type="checkbox">
                                                <label class="form-check-label" for="formCheck14">
                                                    Checkbox Outline Secondary
                                                </label>
                                            </div>
                                            <div class="form-check form-check-outline form-check-success mb-3">
                                                <input id="formCheck15" checked class="form-check-input"
                                                       type="checkbox">
                                                <label class="form-check-label" for="formCheck15">
                                                    Checkbox Outline Success
                                                </label>
                                            </div>
                                            <div class="form-check form-check-outline form-check-warning mb-3">
                                                <input id="formCheck16" checked class="form-check-input"
                                                       type="checkbox">
                                                <label class="form-check-label" for="formCheck16">
                                                    Checkbox Outline Warning
                                                </label>
                                            </div>
                                            <div class="form-check form-check-outline form-check-danger mb-3">
                                                <input id="formCheck17" checked class="form-check-input"
                                                       type="checkbox">
                                                <label class="form-check-label" for="formCheck17">
                                                    Checkbox Outline Danger
                                                </label>
                                            </div>
                                            <div class="form-check form-check-outline form-check-info mb-3">
                                                <input id="formCheck18" checked class="form-check-input"
                                                       type="checkbox">
                                                <label class="form-check-label" for="formCheck18">
                                                    Checkbox Outline Info
                                                </label>
                                            </div>
                                            <div class="form-check form-check-outline form-check-dark">
                                                <input id="formCheck19" checked class="form-check-input"
                                                       type="checkbox">
                                                <label class="form-check-label" for="formCheck19">
                                                    Checkbox Outline Dark
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Custom Checkboxes Color --&gt;
&lt;div class=&quot;form-check mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck6&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck6&quot;&gt;
Checkbox Primary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-secondary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck7&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck7&quot;&gt;
Checkbox Secondary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-success mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck8&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck8&quot;&gt;
Checkbox Success
&lt;/label&gt;
&lt;/div&gt;</code>
<Code>&lt;div class=&quot;form-check form-check-warning mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck9&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck9&quot;&gt;
Checkbox Warning
&lt;/label&gt;
&lt;/div&gt;</Code>
<code>&lt;div class=&quot;form-check form-check-danger mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck10&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck10&quot;&gt;
Checkbox Danger
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-info mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck11&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck11&quot;&gt;
Checkbox Info
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-dark mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck12&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck12&quot;&gt;
Checkbox Dark
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-light&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck12&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck12&quot;&gt;
Checkbox Light
&lt;/label&gt;
&lt;/div&gt;</code>


<code>&lt;!-- Custom Outline Checkboxes --&gt;
&lt;div class=&quot;form-check form-check-outline form-check-primary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck13&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck13&quot;&gt;
Checkbox Outline Primary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-outline form-check-secondary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck14&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck14&quot;&gt;
Checkbox Outline Secondary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-outline form-check-success mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck15&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck15&quot;&gt;
Checkbox Outline Success
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-outline form-check-warning mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck16&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck16&quot;&gt;
Checkbox Outline Warning
&lt;/label&gt;
&lt;/div&gt;</code>
<Code>&lt;div class=&quot;form-check form-check-outline form-check-danger mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck17&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck17&quot;&gt;
Checkbox Outline Danger
&lt;/label&gt;
&lt;/div&gt;</Code>
<code>&lt;div class=&quot;form-check form-check-outline form-check-info mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck18&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck18&quot;&gt;
Checkbox Outline Info
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-outline form-check-dark mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck19&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck19&quot;&gt;
Checkbox Outline Dark
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-outline form-check-light mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;formCheck20&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formCheck20&quot;&gt;
Checkbox Outline light
&lt;/label&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Radios</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="radios-btn-showcode">Show Code</label>
                                <input id="radios-btn-showcode" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <div class="live-preview">
                            <b-row>
                                <b-col lg="4" md="6">
                                    <div>
                                        <p class="text-muted fw-medium">Default Radios</p>
                                        <p class="text-muted">Use <code>type="radio"</code> attribute to set a radio
                                            button and add <code>checked</code>
                                            attribute to set a radio checked by default.</p>
                                        <div class="form-check mb-2">
                                            <input id="flexRadioDefault1" class="form-check-input" name="flexRadioDefault"
                                                   type="radio">
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                Default radio
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input id="flexRadioDefault2" checked class="form-check-input"
                                                   name="flexRadioDefault" type="radio">
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                Default checked radio
                                            </label>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col lg="4" md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted fw-medium">Disabled Radios</p>
                                        <p class="text-muted">Use <code>disabled</code> attribute to set a radio button
                                            disabled and add <code>checked</code>
                                            attribute to set a radio checked by default.</p>
                                        <div class="form-check mb-2">
                                            <input id="flexRadioDisabled" class="form-check-input" disabled
                                                   name="flexRadioDisabled" type="radio">
                                            <label class="form-check-label" for="flexRadioDisabled">
                                                Disabled radio
                                            </label>
                                        </div>
                                        <div>
                                            <div class="form-check">
                                                <input id="flexRadioCheckedDisabled" checked class="form-check-input"
                                                       disabled name="flexRadioDisabled" type="radio">
                                                <label class="form-check-label" for="flexRadioCheckedDisabled">
                                                    Disabled checked radio
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="4" md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted fw-medium">Radio Right</p>
                                        <p class="text-muted">Use <code>form-check-right</code> class to form-check
                                            class to set a radio button on the right side.</p>
                                        <div class="form-check form-check-right mb-2">
                                            <input id="formradioRight1" class="form-check-input" name="formradioRight"
                                                   type="radio">
                                            <label class="form-check-label" for="formradioRight1">
                                                Form Radio Right
                                            </label>
                                        </div>
                                        <div>
                                            <div class="form-check form-check-right">
                                                <input id="flexCheckCheckedDisabled2" checked class="form-check-input"
                                                       disabled name="formradioRight" type="radio"
                                                       value="">
                                                <label class="form-check-label" for="flexCheckCheckedDisabled2">
                                                    Disabled checked radio
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Base Radios --&gt;
&lt;div class=&quot;form-check mb-2&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;flexRadioDefault&quot; id=&quot;flexRadioDefault1&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexRadioDefault1&quot;&gt;
Default radio
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;flexRadioDefault&quot; id=&quot;flexRadioDefault2&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexRadioDefault2&quot;&gt;
Default checked radio
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Disabled Radios --&gt;
&lt;div class=&quot;form-check mb-2&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;flexRadioDisabled&quot; id=&quot;flexRadioDisabled&quot; disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexRadioDisabled&quot;&gt;
Disabled radio
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;flexRadioDisabled&quot; id=&quot;flexRadioCheckedDisabled&quot; checked disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexRadioCheckedDisabled&quot;&gt;
Disabled checked radio
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Form Radio Right --&gt;
&lt;div class=&quot;form-check form-check-right mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradioRight&quot; id=&quot;formradioRight1&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight1&quot;&gt;
Form Radio Right
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div&gt;
&lt;div class=&quot;form-check form-check-right&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; value=&quot;&quot; id=&quot;flexCheckCheckedDisabled&quot; checked disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexCheckCheckedDisabled&quot;&gt;
Disabled checked radio
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Custom Radio</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="custom-radio-showcode">Show Code</label>
                                <input id="custom-radio-showcode" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="live-preview">
                            <b-row>
                                <b-col md="6">
                                    <div>
                                        <p class="text-muted">Use <code>form-check-</code> class with below-mentioned
                                            color variation to set a color radio.</p>

                                        <div class="form-check form-radio-primary mb-3">
                                            <input id="formradioRight5" checked class="form-check-input"
                                                   name="formradiocolor1" type="radio">
                                            <label class="form-check-label" for="formradioRight5">
                                                Radio Primary
                                            </label>
                                        </div>

                                        <div class="form-check form-radio-secondary mb-3">
                                            <input id="formradioRight6" checked class="form-check-input"
                                                   name="formradiocolor2" type="radio">
                                            <label class="form-check-label" for="formradioRight6">
                                                Radio Secondary
                                            </label>
                                        </div>

                                        <div class="form-check form-radio-success mb-3">
                                            <input id="formradioRight7" checked class="form-check-input"
                                                   name="formradiocolor3" type="radio">
                                            <label class="form-check-label" for="formradioRight7">
                                                Radio Success
                                            </label>
                                        </div>

                                        <div class="form-check form-radio-warning mb-3">
                                            <input id="formradioRight8" checked class="form-check-input"
                                                   name="formradiocolor4" type="radio">
                                            <label class="form-check-label" for="formradioRight8">
                                                Radio Warning
                                            </label>
                                        </div>

                                        <div class="form-check form-radio-danger mb-3">
                                            <input id="formradioRight9" checked class="form-check-input"
                                                   name="formradiocolor5" type="radio">
                                            <label class="form-check-label" for="formradioRight9">
                                                Radio Danger
                                            </label>
                                        </div>

                                        <div class="form-check form-radio-info mb-3">
                                            <input id="formradioRight10" checked class="form-check-input"
                                                   name="formradiocolor6" type="radio">
                                            <label class="form-check-label" for="formradioRight10">
                                                Radio Info
                                            </label>
                                        </div>

                                        <div class="form-check form-radio-dark">
                                            <input id="formradioRight11" checked class="form-check-input"
                                                   name="formradiocolor7" type="radio">
                                            <label class="form-check-label" for="formradioRight11">
                                                Radio Dark
                                            </label>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted">Use <code>form-check-outline</code> class and
                                            <code>form-check-</code> class with below-mentioned color variation to set a
                                            color radio with outline.
                                        </p>

                                        <div class="form-check form-radio-outline form-radio-primary mb-3">
                                            <input id="formradioRight13" checked class="form-check-input"
                                                   name="formradiocolor9" type="radio">
                                            <label class="form-check-label" for="formradioRight13">
                                                Radio Outline Primary
                                            </label>
                                        </div>

                                        <div class="form-check form-radio-outline form-radio-secondary mb-3">
                                            <input id="formradioRight14" checked class="form-check-input"
                                                   name="formradiocolor10" type="radio">
                                            <label class="form-check-label" for="formradioRight14">
                                                Radio Outline Secondary
                                            </label>
                                        </div>

                                        <div class="form-check form-radio-outline form-radio-success mb-3">
                                            <input id="formradioRight15" checked class="form-check-input"
                                                   name="formradiocolor11" type="radio">
                                            <label class="form-check-label" for="formradioRight15">
                                                Radio Outline Success
                                            </label>
                                        </div>

                                        <div class="form-check form-radio-outline form-radio-warning mb-3">
                                            <input id="formradioRight16" checked class="form-check-input"
                                                   name="formradiocolor12" type="radio">
                                            <label class="form-check-label" for="formradioRight16">
                                                Radio Outline Warning
                                            </label>
                                        </div>

                                        <div class="form-check form-radio-outline form-radio-danger mb-3">
                                            <input id="formradioRight17" checked class="form-check-input"
                                                   name="formradiocolor13" type="radio">
                                            <label class="form-check-label" for="formradioRight17">
                                                Radio Outline Danger
                                            </label>
                                        </div>

                                        <div class="form-check form-radio-outline form-radio-info mb-3">
                                            <input id="formradioRight18" checked class="form-check-input"
                                                   name="formradiocolor14" type="radio">
                                            <label class="form-check-label" for="formradioRight18">
                                                Radio Outline Info
                                            </label>
                                        </div>

                                        <div class="form-check form-radio-outline form-radio-dark">
                                            <input id="formradioRight19" checked class="form-check-input"
                                                   name="formradiocolor15" type="radio">
                                            <label class="form-check-label" for="formradioRight19">
                                                Radio Outline Dark
                                            </label>
                                        </div>

                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px"><code>&lt;!-- Custom Radio Color --&gt;
&lt;div class=&quot;form-check form-radio-primary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor1&quot; id=&quot;formradioRight5&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight5&quot;&gt;
Radio Primary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-secondary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor2&quot; id=&quot;formradioRight6&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight6&quot;&gt;
Radio Secondary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-success mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor3&quot; id=&quot;formradioRight7&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight7&quot;&gt;
Radio Success
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-warning mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor4&quot; id=&quot;formradioRight8&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight8&quot;&gt;
Radio Warning
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-danger mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor5&quot; id=&quot;formradioRight9&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight9&quot;&gt;
Radio Danger
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-info mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor6&quot; id=&quot;formradioRight10&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight10&quot;&gt;
Radio Info
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-dark mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor7&quot; id=&quot;formradioRight11&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight11&quot;&gt;
Radio Dark
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-light&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor8&quot; id=&quot;formradioRight12&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight12&quot;&gt;
Radio light
&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Custom Outline Radio --&gt;
&lt;div class=&quot;form-check form-radio-outline form-radio-primary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor9&quot; id=&quot;formradioRight13&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight13&quot;&gt;
Radio Outline Primary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-secondary mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor10&quot; id=&quot;formradioRight14&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight14&quot;&gt;
Radio Outline Secondary
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-success mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor11&quot; id=&quot;formradioRight15&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight15&quot;&gt;
Radio Outline Success
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-warning mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor12&quot; id=&quot;formradioRight16&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight16&quot;&gt;
Radio Outline Warning
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-danger mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor13&quot; id=&quot;formradioRight17&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight17&quot;&gt;
Radio Outline Danger
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-info mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor14&quot; id=&quot;formradioRight18&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight18&quot;&gt;
Radio Outline Info
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-dark mb-3&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor15&quot; id=&quot;formradioRight19&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight19&quot;&gt;
Radio Outline Dark
&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-radio-outline form-radio-light&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;formradiocolor16&quot; id=&quot;formradioRight20&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;formradioRight20&quot;&gt;
Radio Outline light
&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>

                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Switches</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="switches-showcode">Show Code</label>
                                <input id="switches-showcode" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <div class="live-preview">
                            <b-row>
                                <b-col lg="4" md="6">
                                    <div>
                                        <p class="text-muted fw-medium">Deafult Switchs</p>
                                        <p class="text-muted">Use <code>form-switch</code> class to form-check class to
                                            set a switch and add <code>checked</code>
                                            attribute to set a switch checked by default.</p>
                                        <div class="form-check form-switch mb-2">
                                            <input id="flexSwitchCheckDefault" class="form-check-input" role="switch"
                                                   type="checkbox">
                                            <label class="form-check-label" for="flexSwitchCheckDefault">Default switch
                                                input</label>
                                        </div>

                                        <div class="form-check form-switch">
                                            <input id="flexSwitchCheckChecked" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch
                                                input</label>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="4" md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted fw-medium">Disabled Switchs</p>
                                        <p class="text-muted">Use <code>disabled</code> attribute to set a radio button
                                            disabled and add <code>checked</code>
                                            attribute to set a switch checked by default.</p>
                                        <div class="form-check form-switch mb-2">
                                            <input id="flexSwitchCheckDisabled" class="form-check-input" disabled
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="flexSwitchCheckDisabled">Switch
                                                input</label>
                                        </div>

                                        <div class="form-check form-switch">
                                            <input id="flexSwitchCheckCheckedDisabled1" checked class="form-check-input"
                                                   disabled role="switch" type="checkbox">
                                            <label class="form-check-label"
                                                   for="flexSwitchCheckCheckedDisabled1">Disabled checked switch
                                                input</label>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="4" md="6">
                                    <div class="mt-4 mt-md-0">
                                        <p class="text-muted fw-medium">Switch Right</p>
                                        <p class="text-muted">Use <code>form-check-right</code> class to form-check
                                            class to set a switch button on the right side.</p>
                                        <div>
                                            <div class="form-check form-switch form-check-right mb-2">
                                                <input id="flexSwitchCheckRightDisabled" checked class="form-check-input"
                                                       role="switch" type="checkbox">
                                                <label class="form-check-label"
                                                       for="flexSwitchCheckRightDisabled">Switch Right input</label>
                                            </div>
                                        </div>

                                        <div>
                                            <div class="form-check form-switch form-check-right">
                                                <input id="flexSwitchCheckCheckedDisabled2" class="form-check-input" disabled
                                                       role="switch" type="checkbox">
                                                <label class="form-check-label"
                                                       for="flexSwitchCheckCheckedDisabled2">Disabled checked switch
                                                    input</label>
                                            </div>
                                        </div>

                                    </div>
                                </b-col>

                                <b-col lg="4" md="6">
                                    <div class="mt-3">
                                        <p class="text-muted fw-medium">Switch sizes</p>
                                        <p class="text-muted">Use <code>form-switch-md</code> class to set a medium size
                                            switch button and
                                            <code>form-switch-lg</code> class to form-check class to set a large size
                                            switch button respectively.
                                            No such class is required for small size switch button.
                                        </p>

                                        <div class="form-check form-switch mb-3" dir="ltr">
                                            <input id="customSwitchsizesm" checked="" class="form-check-input"
                                                   type="checkbox">
                                            <label class="form-check-label" for="customSwitchsizesm">Small Size
                                                Switch</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-md mb-3" dir="ltr">
                                            <input id="customSwitchsizemd" class="form-check-input" type="checkbox">
                                            <label class="form-check-label" for="customSwitchsizemd">Medium Size
                                                Switch</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-lg" dir="ltr">
                                            <input id="customSwitchsizelg" checked="" class="form-check-input"
                                                   type="checkbox">
                                            <label class="form-check-label" for="customSwitchsizelg">Large Size
                                                Switch</label>
                                        </div>
                                    </div>
                                </b-col>

                            </b-row>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Base Switchs --&gt;
&lt;div class=&quot;form-check form-switch&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckDefault&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexSwitchCheckDefault&quot;&gt;Default switch checkbox input&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckChecked&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexSwitchCheckChecked&quot;&gt;Checked switch checkbox input&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Disabled Switchs --&gt;
&lt;div class=&quot;form-check form-switch&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckDisabled&quot; disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexSwitchCheckDisabled&quot;&gt;Disabled switch checkbox input&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckCheckedDisabled&quot; checked disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexSwitchCheckCheckedDisabled&quot;&gt;Disabled checked switch checkbox input&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Form Switch Right --&gt;
&lt;div class=&quot;form-check form-switch form-check-right&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckRightDisabled&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexSwitchCheckRightDisabled&quot;&gt;Disabled switch checkbox input&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-check-right&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;flexSwitchCheckCheckedDisabled&quot; disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;flexSwitchCheckCheckedDisabled&quot;&gt;Disabled checked switch checkbox input&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Switch sizes --&gt;
&lt;div class=&quot;form-check form-switch&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;customSwitchsizesm&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;customSwitchsizesm&quot;&gt;Small Size Switch&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-switch-md&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;customSwitchsizemd&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;customSwitchsizemd&quot;&gt;Medium Size Switch&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-switch-lg&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;customSwitchsizelg&quot; checked=&quot;&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;customSwitchsizelg&quot;&gt;Large Size Switch&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Switches Color</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="switches-color-showcode">Show Code</label>
                                <input id="switches-color-showcode" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>form-check-</code> class with below-mentioned color variation to
                            set a color switch.</p>
                        <div class="live-preview">
                            <b-row>
                                <b-col md="6">
                                    <div>
                                        <div class="form-check form-switch mb-3">
                                            <input id="SwitchCheck1" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck1">Switch Default</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-secondary mb-3">
                                            <input id="SwitchCheck2" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck2">Switch Secondary</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-success mb-3">
                                            <input id="SwitchCheck3" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck3">Switch Success</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-warning mb-2 mb-md-0">
                                            <input id="SwitchCheck4" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck4">Switch Warning</label>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col md="6">
                                    <div>
                                        <div class="form-check form-switch form-switch-danger mb-3">
                                            <input id="SwitchCheck5" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck5">Switch Danger</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-info mb-3">
                                            <input id="SwitchCheck6" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck6">Switch Info</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-dark mb-3">
                                            <input id="SwitchCheck7" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck7">Switch Dark</label>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Switches Color --&gt;
&lt;div class=&quot;form-check form-switch&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck1&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck1&quot;&gt;Switch Default&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-switch-secondary&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck2&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck2&quot;&gt;Switch Secondary&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-switch-success&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck3&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck3&quot;&gt;Switch Success&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-switch-warning&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck4&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck4&quot;&gt;Switch Warning&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-switch-danger&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck5&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck5&quot;&gt;Switch Danger&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-switch-info&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck6&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck6&quot;&gt;Switch Info&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-switch-dark&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck7&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck7&quot;&gt;Switch Dark&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Custom Switches</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="custom-switches-showcode">Show Code</label>
                                <input id="custom-switches-showcode" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>form-switch-custom</code> class &amp; <code>form-switch-</code>
                            class with below-mentioned color
                            variation to set a color radius.</p>
                        <div class="live-preview">
                            <b-row>
                                <b-col md="6">
                                    <div>
                                        <div class="form-check form-switch form-switch-custom form-switch-primary mb-3">
                                            <input id="SwitchCheck9" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck9">Switch Primary</label>
                                        </div>

                                        <div
                                            class="form-check form-switch form-switch-custom form-switch-secondary mb-3">
                                            <input id="SwitchCheck10" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck10">Switch Secondary</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-custom form-switch-success mb-3">
                                            <input id="SwitchCheck11" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck11">Switch Success</label>
                                        </div>

                                        <div
                                            class="form-check form-switch form-switch-custom form-switch-warning mb-2 mb-md-0">
                                            <input id="SwitchCheck12" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck12">Switch Warning</label>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col md="6">
                                    <div class="mt-4 mt-md-0">
                                        <div class="form-check form-switch form-switch-custom form-switch-danger mb-3">
                                            <input id="SwitchCheck13" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck13">Switch Danger</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-custom form-switch-info mb-3">
                                            <input id="SwitchCheck14" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck14">Switch Info</label>
                                        </div>

                                        <div class="form-check form-switch form-switch-custom form-switch-dark mb-3">
                                            <input id="SwitchCheck15" checked class="form-check-input"
                                                   role="switch" type="checkbox">
                                            <label class="form-check-label" for="SwitchCheck15">Switch Dark</label>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Custom Switches --&gt;
&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-primary&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck9&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck9&quot;&gt;Switch Default&lt;/label&gt;
&lt;/div&gt;</code>

<Code>&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-secondary&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck10&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck10&quot;&gt;Switch Secondary&lt;/label&gt;
&lt;/div&gt;</Code>

<code>&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-success&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck11&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck11&quot;&gt;Switch Success&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-warning&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck12&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck12&quot;&gt;Switch Warning&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-danger&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck13&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck13&quot;&gt;Switch Danger&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-info&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck14&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck14&quot;&gt;Switch Info&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;div class=&quot;form-check form-switch form-switch-custom form-switch-dark&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; role=&quot;switch&quot; id=&quot;SwitchCheck15&quot; checked&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;SwitchCheck15&quot;&gt;Switch Dark&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Inline Checkbox & Radios</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="Inline-shocade">Show Code</label>
                                <input id="Inline-shocade" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Use <code>form-check-inline</code> class to form-check class to set
                            horizontally align checkboxes, radios, or switches.</p>
                        <div class="live-preview">
                            <b-row>
                                <b-col lg="4">
                                    <div class="mt-4 mt-lg-0">
                                        <div class="form-check form-check-inline">
                                            <input id="inlineCheckbox6" class="form-check-input" type="checkbox"
                                                   value="option1">
                                            <label class="form-check-label" for="inlineCheckbox6">1</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input id="inlineCheckbox7" class="form-check-input" type="checkbox"
                                                   value="option2">
                                            <label class="form-check-label" for="inlineCheckbox7">2</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input id="inlineCheckbox8" class="form-check-input" disabled
                                                   type="checkbox" value="option3">
                                            <label class="form-check-label" for="inlineCheckbox8">3 (disabled)</label>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="4">
                                    <div class="mt-4 mt-lg-0">
                                        <div class="form-check form-check-inline">
                                            <input id="inlineRadio1" class="form-check-input" name="inlineRadioOptions1"
                                                   type="radio" value="option1">
                                            <label class="form-check-label" for="inlineRadio1">1</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input id="inlineRadio2" class="form-check-input" name="inlineRadioOptions2"
                                                   type="radio" value="option2">
                                            <label class="form-check-label" for="inlineRadio2">2</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input id="inlineRadio3" class="form-check-input" disabled
                                                   name="inlineRadioOptions3" type="radio" value="option3">
                                            <label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="4">
                                    <div class="mt-4 mt-lg-0">
                                        <div class="form-check form-switch form-check-inline" dir="ltr">
                                            <input id="inlineswitch5" class="form-check-input" type="checkbox">
                                            <label class="form-check-label" for="inlineswitch5">1</label>
                                        </div>
                                        <div class="form-check form-switch form-check-inline" dir="ltr">
                                            <input id="inlineswitch6" class="form-check-input" type="checkbox">
                                            <label class="form-check-label" for="inlineswitch6">2</label>
                                        </div>
                                        <div class="form-check form-switch form-check-inline" dir="ltr">
                                            <input id="inlineswitchdisabled2" class="form-check-input" disabled
                                                   type="checkbox">
                                            <label class="form-check-label" for="inlineswitchdisabled2">2</label>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Inline Checkbox --&gt;
&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox1&quot; value=&quot;option1&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineCheckbox1&quot;&gt;1&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox2&quot; value=&quot;option2&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineCheckbox2&quot;&gt;2&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox3&quot; value=&quot;option3&quot; disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineCheckbox3&quot;&gt;3 (disabled)&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Inline Radios --&gt;
&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions1&quot; id=&quot;inlineRadio1&quot; value=&quot;option1&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio1&quot;&gt;1&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions2&quot; id=&quot;inlineRadio2&quot; value=&quot;option2&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio2&quot;&gt;2&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions3&quot; id=&quot;inlineRadio3&quot; value=&quot;option3&quot; disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineRadio3&quot;&gt;3 (disabled)&lt;/label&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Inline Switches --&gt;
&lt;div class=&quot;form-check form-switch form-check-inline&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;inlineswitch&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineswitch&quot;&gt;1&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-check-inline&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;inlineswitch1&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineswitch1&quot;&gt;2&lt;/label&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-check-inline&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;inlineswitchdisabled&quot; disabled&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineswitchdisabled&quot;&gt;2&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Without Labels</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="without-labels-shocade">Show Code</label>
                                <input id="without-labels-shocade" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Omit the wrapping, <code>form-check</code> class for checkboxes,
                            radios,
                            or switches that have no label text. Remember to still provide some form of accessible
                            name
                            for assistive technologies (for instance, using aria-label).</p>
                        <div class="live-preview">
                            <b-row>
                                <b-col lg="4">
                                    <div class="mt-4 mt-lg-0">
                                        <div class="form-check form-check-inline">
                                            <input id="inlineCheckbox1" class="form-check-input" type="checkbox"
                                                   value="option1">
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input id="inlineCheckbox2" class="form-check-input" type="checkbox"
                                                   value="option2">
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input id="inlineCheckbox3" class="form-check-input" disabled
                                                   type="checkbox" value="option3">
                                        </div>
                                    </div>
                                </b-col>


                                <b-col lg="4">
                                    <div class="mt-4 mt-lg-0">
                                        <div class="form-check form-check-inline">
                                            <input id="WithoutinlineRadio1" class="form-check-input" name="inlineRadioOptions"
                                                   type="radio" value="option1">
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input id="WithoutinlineRadio2" class="form-check-input" name="inlineRadioOptions"
                                                   type="radio" value="option2">
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input id="WithoutinlineRadio3" class="form-check-input" disabled
                                                   name="inlineRadioOptions" type="radio" value="option3">
                                        </div>
                                    </div>
                                </b-col>


                                <b-col lg="4">
                                    <div class="mt-4 mt-lg-0">
                                        <div class="form-check form-switch form-check-inline" dir="ltr">
                                            <input id="inlineswitch" class="form-check-input" type="checkbox">
                                        </div>
                                        <div class="form-check form-switch form-check-inline" dir="ltr">
                                            <input id="inlineswitch1" class="form-check-input" type="checkbox">
                                        </div>
                                        <div class="form-check form-switch form-check-inline" dir="ltr">
                                            <input id="inlineswitchdisabled" class="form-check-input" disabled
                                                   type="checkbox">
                                        </div>
                                    </div>
                                </b-col>

                            </b-row>
                        </div>


                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Without labels Checkbox --&gt;
&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox1&quot; value=&quot;option1&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox2&quot; value=&quot;option2&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineCheckbox3&quot; value=&quot;option3&quot; disabled&gt;
&lt;/div&gt;</code>


<code>&lt;!-- Without labels Radios --&gt;
&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions&quot; id=&quot;WithoutinlineRadio1&quot; value=&quot;option1&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions&quot; id=&quot;WithoutinlineRadio2&quot; value=&quot;option2&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-check-inline&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;radio&quot; name=&quot;inlineRadioOptions&quot; id=&quot;WithoutinlineRadio3&quot; value=&quot;option3&quot; disabled&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Without labels Switches --&gt;
&lt;div class=&quot;form-check form-switch form-check-inline&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;inlineswitch&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-check-inline&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;inlineswitch1&quot;&gt;
&lt;/div&gt;</code>
<code>&lt;div class=&quot;form-check form-switch form-check-inline&quot; dir=&quot;ltr&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;inlineswitchdisabled&quot; disabled&gt;
&lt;/div&gt;</code></pre>
                        </div>

                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Radio Toggle Buttons</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="radio-toggle-shocade">Show Code</label>
                                <input id="radio-toggle-shocade" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Create button-like checkboxes and radio buttons by using
                            <code>btn</code>
                            styles rather than form-check-label class on the &lt;label&gt; elements. These toggle
                            buttons can further be grouped in a
                            <b-link
                                href="https://getbootstrap.com/docs/5.1/components/button-group/">button group
                            </b-link>
                            if
                            needed.
                        </p>
                        <div class="live-preview">
                            <div class="hstack gap-2 flex-wrap">
                                <input id="option1" checked class="btn-check" name="options" type="radio">
                                <label class="btn btn-secondary" for="option1">Checked</label>

                                <input id="option2" class="btn-check" name="options" type="radio">
                                <label class="btn btn-secondary" for="option2">Radio</label>

                                <input id="option3" class="btn-check" disabled name="options" type="radio">
                                <label class="btn btn-secondary" for="option3">Disabled</label>

                                <input id="option4" class="btn-check" name="options" type="radio">
                                <label class="btn btn-secondary" for="option4">Radio</label>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Radio toggle buttons   --&gt;
&lt;div class=&quot;hstack gap-2 flex-wrap&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options&quot; id=&quot;option1&quot;  checked&gt;
&lt;label class=&quot;btn btn-secondary&quot; for=&quot;option1&quot;&gt;Checked&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options&quot; id=&quot;option2&quot; &gt;
&lt;label class=&quot;btn btn-secondary&quot; for=&quot;option2&quot;&gt;Radio&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options&quot; id=&quot;option3&quot;  disabled&gt;
&lt;label class=&quot;btn btn-secondary&quot; for=&quot;option3&quot;&gt;Disabled&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options&quot; id=&quot;option4&quot; &gt;
&lt;label class=&quot;btn btn-secondary&quot; for=&quot;option4&quot;&gt;Radio&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Outlined Styles</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="outline-style-shocade">Show Code</label>
                                <input id="outline-style-shocade" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Different variants of <code>btn</code> attribute, such as the various
                            outlined styles, are supported.</p>
                        <div class="live-preview">

                            <div class="hstack gap-2 flex-wrap">
                                <input id="btn-check-outlined" class="btn-check" type="checkbox">
                                <label class="btn btn-outline-primary" for="btn-check-outlined">Single
                                    toggle</label>

                                <input id="btn-check-2-outlined" checked class="btn-check" type="checkbox">
                                <label class="btn btn-outline-secondary" for="btn-check-2-outlined">Checked</label>

                                <input id="success-outlined" checked class="btn-check" name="options-outlined"
                                       type="radio">
                                <label class="btn btn-outline-success" for="success-outlined">Checked success
                                    radio</label>

                                <input id="danger-outlined" class="btn-check" name="options-outlined" type="radio">
                                <label class="btn btn-outline-danger" for="danger-outlined">Danger radio</label>
                            </div>
                        </div>
                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 275px;">
<code>&lt;!-- Outlined Styles --&gt;
&lt;div class=&quot;hstack gap-2 flex-wrap&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btn-check-outlined&quot;&gt;
&lt;label class=&quot;btn btn-outline-primary&quot; for=&quot;btn-check-outlined&quot;&gt;Single toggle&lt;/label&gt;

&lt;input type=&quot;checkbox&quot; class=&quot;btn-check&quot; id=&quot;btn-check-2-outlined&quot; checked&gt;
&lt;label class=&quot;btn btn-outline-secondary&quot; for=&quot;btn-check-2-outlined&quot;&gt;Checked&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options-outlined&quot; id=&quot;success-outlined&quot; checked&gt;
&lt;label class=&quot;btn btn-outline-success&quot; for=&quot;success-outlined&quot;&gt;Checked success radio&lt;/label&gt;

&lt;input type=&quot;radio&quot; class=&quot;btn-check&quot; name=&quot;options-outlined&quot; id=&quot;danger-outlined&quot;&gt;
&lt;label class=&quot;btn btn-outline-danger&quot; for=&quot;danger-outlined&quot;&gt;Danger radio&lt;/label&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>

        </b-row>
    </Layout>
</template>
