<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Validation",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Forms Validation",
            items: [
                {
                    text: "Forms",
                    href: "/",
                },
                {
                    text: "Forms Validation",
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
                        <b-card-title class="mb-0 flex-grow-1">Browser defaults</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="FormValidationDefault">Show Code</label>
                                <input id="FormValidationDefault" class="form-check-input code-switcher"
                                       type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">Not interested in custom validation feedback messages or writing
                            JavaScript to change form behaviors? All good, you can use the browser defaults. Try
                            submitting the form below. Depending on your browser and OS, you’ll see a slightly different
                            style of feedback.While these feedback styles cannot be styled with CSS, you can still
                            customize the feedback text through JavaScript.</p>

                        <div class="live-preview">
                            <form class="row g-3">
                                <b-col md="4">
                                    <label class="form-label" for="validationDefault01">First name</label>
                                    <input id="validationDefault01" class="form-control" required type="text"
                                           value="Mark">
                                </b-col>
                                <b-col md="4">
                                    <label class="form-label" for="validationDefault02">Last name</label>
                                    <input id="validationDefault02" class="form-control" required type="text"
                                           value="Otto">
                                </b-col>
                                <b-col md="4">
                                    <label class="form-label" for="validationDefaultUsername">Username</label>
                                    <div class="input-group">
                                        <span id="inputGroupPrepend2" class="input-group-text">@</span>
                                        <input id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" class="form-control"
                                               required type="text">
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <label class="form-label" for="validationDefault03">City</label>
                                    <input id="validationDefault03" class="form-control" required type="text">
                                </b-col>
                                <b-col md="3">
                                    <label class="form-label" for="validationDefault04">State</label>
                                    <select id="validationDefault04" class="form-select" required>
                                        <option disabled selected value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                </b-col>
                                <b-col md="3">
                                    <label class="form-label" for="validationDefault05">Zip</label>
                                    <input id="validationDefault05" class="form-control" required type="text">
                                </b-col>
                                <b-col cols="12">
                                    <div class="form-check">
                                        <input id="invalidCheck2" class="form-check-input" required type="checkbox"
                                               value="">
                                        <label class="form-check-label" for="invalidCheck2">
                                            Agree to terms and conditions
                                        </label>
                                    </div>
                                </b-col>
                                <b-col cols="12">
                                    <b-button type="submit" variant="primary">Submit form</b-button>
                                </b-col>
                            </form>
                        </div>


                        <div class="d-none code-view">
                            <pre class="language-markup" style="height: 352px">
<code>&lt;form class=&quot;row g-3&quot;&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;validationDefault01&quot; class=&quot;form-label&quot;&gt;First name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationDefault01&quot; value=&quot;Mark&quot; required&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;validationDefault02&quot; class=&quot;form-label&quot;&gt;Last name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationDefault02&quot; value=&quot;Otto&quot; required&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;validationDefaultUsername&quot; class=&quot;form-label&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group&quot;&gt;
&lt;span class=&quot;input-group-text&quot; id=&quot;inputGroupPrepend2&quot;&gt;@&lt;/span&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationDefaultUsername&quot; aria-describedby=&quot;inputGroupPrepend2&quot;
required&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;validationDefault03&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationDefault03&quot; required&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-3&quot;&gt;
&lt;label for=&quot;validationDefault04&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;validationDefault04&quot; required&gt;
&lt;option selected disabled value=&quot;&quot;&gt;Choose...&lt;/option&gt;
&lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-3&quot;&gt;
&lt;label for=&quot;validationDefault05&quot; class=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationDefault05&quot; required&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;invalidCheck2&quot; required&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;invalidCheck2&quot;&gt;
Agree to terms and conditions
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;button class=&quot;btn btn-primary&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                        </div>

                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Custom Styles</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="FormVaidationCustom">Show Code</label>
                                <input id="FormVaidationCustom" class="form-check-input code-switcher" type="checkbox">
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">For custom Bootstrap form validation messages, you’ll need to add the
                            <code>novalidate</code> boolean attribute to your <code>&lt;form&gt;</code>. This disables
                            the browser default feedback tooltips, but still provides access to the form validation APIs
                            in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button
                            and relay feedback to you. When attempting to submit, you’ll see the <code>:invalid</code>
                            and <code>:valid</code> styles applied to your form controls.
                        </p>

                        <div class="live-preview">
                            <form class="row g-3 needs-validation" novalidate>
                                <b-col md="4">
                                    <label class="form-label" for="validationCustom01">First name</label>
                                    <input id="validationCustom01" class="form-control" required type="text"
                                           value="Mark">
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </b-col>
                                <b-col md="4">
                                    <label class="form-label" for="validationCustom02">Last name</label>
                                    <input id="validationCustom02" class="form-control" required type="text"
                                           value="Otto">
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </b-col>
                                <b-col md="4">
                                    <label class="form-label" for="validationCustomUsername">Username</label>
                                    <div class="input-group has-validation">
                                        <span id="inputGroupPrepend" class="input-group-text">@</span>
                                        <input id="validationCustomUsername" aria-describedby="inputGroupPrepend" class="form-control"
                                               required type="text">
                                        <div class="invalid-feedback">
                                            Please choose a username.
                                        </div>
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <label class="form-label" for="validationCustom03">City</label>
                                    <input id="validationCustom03" class="form-control" required type="text">
                                    <div class="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </b-col>
                                <b-col md="3">
                                    <label class="form-label" for="validationCustom04">State</label>
                                    <select id="validationCustom04" class="form-select" required>
                                        <option disabled selected value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid state.
                                    </div>
                                </b-col>
                                <b-col md="3">
                                    <label class="form-label" for="validationCustom05">Zip</label>
                                    <input id="validationCustom05" class="form-control" required type="text">
                                    <div class="invalid-feedback">
                                        Please provide a valid zip.
                                    </div>
                                </b-col>
                                <b-col cols="12">
                                    <div class="form-check">
                                        <input id="invalidCheck" class="form-check-input" required type="checkbox"
                                               value="">
                                        <label class="form-check-label" for="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div class="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>
                                </b-col>
                                <b-col cols="12">
                                    <b-button type="submit" variant="primary" @click.prevent>Submit formaa</b-button>
                                </b-col>
                            </form>
                        </div>

                        <div class="d-none code-view">
                            <pre class="language-markup">
<code>&lt;form class=&quot;row g-3 needs-validation&quot; novalidate&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;validationCustom01&quot; class=&quot;form-label&quot;&gt;First name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationCustom01&quot; value=&quot;Mark&quot; required&gt;
&lt;div class=&quot;valid-feedback&quot;&gt;
Looks good!
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;validationCustom02&quot; class=&quot;form-label&quot;&gt;Last name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationCustom02&quot; value=&quot;Otto&quot; required&gt;
&lt;div class=&quot;valid-feedback&quot;&gt;
Looks good!
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;validationCustomUsername&quot; class=&quot;form-label&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group has-validation&quot;&gt;
&lt;span class=&quot;input-group-text&quot; id=&quot;inputGroupPrepend&quot;&gt;@&lt;/span&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationCustomUsername&quot; aria-describedby=&quot;inputGroupPrepend&quot;
required&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;
Please choose a username.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;validationCustom03&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationCustom03&quot; required&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;
Please provide a valid city.
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-3&quot;&gt;
&lt;label for=&quot;validationCustom04&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;validationCustom04&quot; required&gt;
&lt;option selected disabled value=&quot;&quot;&gt;Choose...&lt;/option&gt;
&lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;
Please select a valid state.
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-3&quot;&gt;
&lt;label for=&quot;validationCustom05&quot; class=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationCustom05&quot; required&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;
Please provide a valid zip.
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; value=&quot;&quot; id=&quot;invalidCheck&quot; required&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;invalidCheck&quot;&gt;
Agree to terms and conditions
&lt;/label&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;
You must agree before submitting.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;button class=&quot;btn btn-primary&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                        </div>

                    </b-card-body>
                </b-card>
            </b-col>

            <b-row>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-header class="align-items-center d-flex">
                            <b-card-title class="mb-0 flex-grow-1">Supported Elements</b-card-title>
                            <div class="flex-shrink-0">
                                <div class="form-check form-switch form-switch-right form-switch-md">
                                    <label class="form-label text-muted" for="FormVaidationSupported">Show Code</label>
                                    <input id="FormVaidationSupported" class="form-check-input code-switcher"
                                           type="checkbox">
                                </div>
                            </div>
                        </b-card-header>

                        <b-card-body>
                            <p class="text-muted">Block-level or inline-level form text can be created using
                                <code>.form-text</code>.
                            </p>

                            <div class="live-preview">
                                <form class="was-validated">
                                    <div class="mb-3">
                                        <label class="form-label" for="validationTextarea">Textarea</label>
                                        <textarea id="validationTextarea" class="form-control"
                                                  placeholder="Required example textarea" required></textarea>
                                        <div class="invalid-feedback">
                                            Please enter a message in the textarea.
                                        </div>
                                    </div>

                                    <div class="form-check mb-3">
                                        <input id="validationFormCheck1" class="form-check-input" required
                                               type="checkbox">
                                        <label class="form-check-label" for="validationFormCheck1">Check this
                                            checkbox</label>
                                        <div class="invalid-feedback">Example invalid feedback text</div>
                                    </div>

                                    <div class="form-check">
                                        <input id="validationFormCheck2" class="form-check-input" name="radio-stacked"
                                               required type="radio">
                                        <label class="form-check-label" for="validationFormCheck2">Toggle this
                                            radio</label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input id="validationFormCheck3" class="form-check-input" name="radio-stacked"
                                               required type="radio">
                                        <label class="form-check-label" for="validationFormCheck3">Or toggle this other
                                            radio</label>
                                        <div class="invalid-feedback">More example invalid feedback text</div>
                                    </div>

                                    <div class="mb-3">
                                        <select aria-label="select example" class="form-select" required>
                                            <option value="">Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <div class="invalid-feedback">Example invalid select feedback</div>
                                    </div>

                                    <div class="mb-3">
                                        <input aria-label="file example" class="form-control" required type="file">
                                        <div class="invalid-feedback">Example invalid form file feedback</div>
                                    </div>

                                    <div class="mb-0">
                                        <b-button disabled type="submit" variant="primary">Submit form</b-button>
                                    </div>
                                </form>
                            </div>


                            <div class="d-none code-view">
                                <pre class="language-markup" style="height: 352px">
<code>&lt;form class=&quot;was-validated&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;validationTextarea&quot; class=&quot;form-label&quot;&gt;Textarea&lt;/label&gt;
&lt;textarea class=&quot;form-control&quot; id=&quot;validationTextarea&quot; placeholder=&quot;Required example textarea&quot;
required&gt;&lt;/textarea&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;
Please enter a message in the textarea.
&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;form-check mb-3&quot;&gt;
&lt;input type=&quot;checkbox&quot; class=&quot;form-check-input&quot; id=&quot;validationFormCheck1&quot; required&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;validationFormCheck1&quot;&gt;Check this checkbox&lt;/label&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;Example invalid feedback text&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;form-check&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;form-check-input&quot; id=&quot;validationFormCheck2&quot; name=&quot;radio-stacked&quot; required&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;validationFormCheck2&quot;&gt;Toggle this radio&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;form-check mb-3&quot;&gt;
&lt;input type=&quot;radio&quot; class=&quot;form-check-input&quot; id=&quot;validationFormCheck3&quot; name=&quot;radio-stacked&quot; required&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;validationFormCheck3&quot;&gt;Or toggle this other radio&lt;/label&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;More example invalid feedback text&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;mb-3&quot;&gt;
&lt;select class=&quot;form-select&quot; required aria-label=&quot;select example&quot;&gt;
&lt;option value=&quot;&quot;&gt;Open this select menu&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;Example invalid select feedback&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;mb-3&quot;&gt;
&lt;input type=&quot;file&quot; class=&quot;form-control&quot; aria-label=&quot;file example&quot; required&gt;
&lt;div class=&quot;invalid-feedback&quot;&gt;Example invalid form file feedback&lt;/div&gt;
&lt;/div&gt;

&lt;div class=&quot;mb-3&quot;&gt;
&lt;button class=&quot;btn btn-primary&quot; type=&quot;submit&quot; disabled&gt;Submit form&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                            </div>

                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col lg="12">
                    <b-card no-body>
                        <b-card-header class="align-items-center d-flex">
                            <b-card-title class="mb-0 flex-grow-1">Tooltips</b-card-title>
                            <div class="flex-shrink-0">
                                <div class="form-check form-switch form-switch-right form-switch-md">
                                    <label class="form-label text-muted" for="FormVaidationTooltip">Show Code</label>
                                    <input id="FormVaidationTooltip" class="form-check-input code-switcher"
                                           type="checkbox">
                                </div>
                            </div>
                        </b-card-header>

                        <b-card-body>
                            <p class="text-muted">If your form layout allows it, you can swap the
                                <code>.{valid|invalid}-feedback</code> classes for <code>.{valid|invalid}-tooltip</code>
                                classes to display validation feedback in a styled tooltip. Be sure to have a parent
                                with <code>position: relative</code> on it for tooltip positioning. In the example
                                below, our column classes have this already, but your project may require an alternative
                                setup.
                            </p>

                            <div class="live-preview">
                                <form class="row g-3 needs-validation" novalidate>
                                    <b-col class="position-relative" md="4">
                                        <label class="form-label" for="validationTooltip01">First name</label>
                                        <input id="validationTooltip01" class="form-control" required type="text"
                                               value="Mark">
                                        <div class="valid-tooltip">
                                            Looks good!
                                        </div>
                                    </b-col>
                                    <b-col class="position-relative" md="4">
                                        <label class="form-label" for="validationTooltip02">Last name</label>
                                        <input id="validationTooltip02" class="form-control" required type="text"
                                               value="Otto">
                                        <div class="valid-tooltip">
                                            Looks good!
                                        </div>
                                    </b-col>
                                    <b-col class="position-relative" md="4">
                                        <label class="form-label" for="validationTooltipUsername">Username</label>
                                        <div class="input-group has-validation">
                                            <span id="validationTooltipUsernamePrepend"
                                                  class="input-group-text">@</span>
                                            <input id="validationTooltipUsername" aria-describedby="validationTooltipUsernamePrepend" class="form-control"
                                                   required type="text">
                                            <div class="invalid-tooltip">
                                                Please choose a unique and valid username.
                                            </div>
                                        </div>
                                    </b-col>
                                    <b-col class="position-relative" md="6">
                                        <label class="form-label" for="validationTooltip03">City</label>
                                        <input id="validationTooltip03" class="form-control" required type="text">
                                        <div class="invalid-tooltip">
                                            Please provide a valid city.
                                        </div>
                                    </b-col>
                                    <b-col class="position-relative" md="3">
                                        <label class="form-label" for="validationTooltip04">State</label>
                                        <select id="validationTooltip04" class="form-select" required>
                                            <option disabled selected value="">Choose...</option>
                                            <option>...</option>
                                        </select>
                                        <div class="invalid-tooltip">
                                            Please select a valid state.
                                        </div>
                                    </b-col>
                                    <b-col class="position-relative" md="3">
                                        <label class="form-label" for="validationTooltip05">Zip</label>
                                        <input id="validationTooltip05" class="form-control" required type="text">
                                        <div class="invalid-tooltip">
                                            Please provide a valid zip.
                                        </div>
                                    </b-col>
                                    <b-col cols="12">
                                        <b-button type="button" variant="primary">Submit form</b-button>
                                    </b-col>
                                </form>
                            </div>
                            <div class="d-none code-view">
                                <pre class="language-markup">
<code>&lt;form class=&quot;row g-3 needs-validation&quot; novalidate&gt;
&lt;div class=&quot;col-md-4 position-relative&quot;&gt;
&lt;label for=&quot;validationTooltip01&quot; class=&quot;form-label&quot;&gt;First name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationTooltip01&quot; value=&quot;Mark&quot; required&gt;
&lt;div class=&quot;valid-tooltip&quot;&gt;
Looks good!
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4 position-relative&quot;&gt;
&lt;label for=&quot;validationTooltip02&quot; class=&quot;form-label&quot;&gt;Last name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationTooltip02&quot; value=&quot;Otto&quot; required&gt;
&lt;div class=&quot;valid-tooltip&quot;&gt;
Looks good!
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4 position-relative&quot;&gt;
&lt;label for=&quot;validationTooltipUsername&quot; class=&quot;form-label&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group has-validation&quot;&gt;
&lt;span class=&quot;input-group-text&quot; id=&quot;validationTooltipUsernamePrepend&quot;&gt;@&lt;/span&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationTooltipUsername&quot;
aria-describedby=&quot;validationTooltipUsernamePrepend&quot; required&gt;
&lt;div class=&quot;invalid-tooltip&quot;&gt;
Please choose a unique and valid username.
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6 position-relative&quot;&gt;
&lt;label for=&quot;validationTooltip03&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationTooltip03&quot; required&gt;
&lt;div class=&quot;invalid-tooltip&quot;&gt;
Please provide a valid city.
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-3 position-relative&quot;&gt;
&lt;label for=&quot;validationTooltip04&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;validationTooltip04&quot; required&gt;
&lt;option selected disabled value=&quot;&quot;&gt;Choose...&lt;/option&gt;
&lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;
&lt;div class=&quot;invalid-tooltip&quot;&gt;
Please select a valid state.
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-3 position-relative&quot;&gt;
&lt;label for=&quot;validationTooltip05&quot; class=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;validationTooltip05&quot; required&gt;
&lt;div class=&quot;invalid-tooltip&quot;&gt;
Please provide a valid zip.
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;button class=&quot;btn btn-primary&quot; type=&quot;submit&quot;&gt;Submit form&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                            </div>

                        </b-card-body>
                    </b-card>
                </b-col>

            </b-row>

        </b-row>
    </Layout>
</template>
