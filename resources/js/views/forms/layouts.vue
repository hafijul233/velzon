<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Layouts",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Form Layout",
            items: [
                {
                    text: "Forms",
                    href: "/",
                },
                {
                    text: "Form Layout",
                    active: true,
                },
            ],
            value: null,
            value1: null,
            value5: null,
            value2: null,
            value3: null,
            value4: null,
            config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: "M j, Y",
                altInput: true,
                dateFormat: "d M, Y",
            },
            date: null,
            date1: null,
            date3: null,
        };
    },
    components: {
        Layout,
        PageHeader,
        Multiselect,
        flatPickr,
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
                        <b-card-title class="mb-0 flex-grow-1">Form Grid</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="form-grid-showcode">Show Code</label>
                                <input id="form-grid-showcode" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            More complex forms can be built using our grid classes. Use these
                            for form layouts that require multiple columns, varied widths, and
                            additional alignment options.
                            <span class="fw-medium">Requires the <code>$enable-grid-classes</code> Sass variable to
                be enabled</span>
                            (on by default).
                        </p>
                        <div class="live-preview">
                            <form action="javascript:void(0);">
                                <b-row>
                                    <b-col md="6">
                                        <div class="mb-3">
                                            <label class="form-label" for="firstNameinput">First Name</label>
                                            <input id="firstNameinput" class="form-control" placeholder="Enter your firstname"
                                                   type="text"/>
                                        </div>
                                    </b-col>
                                    <b-col md="6">
                                        <div class="mb-3">
                                            <label class="form-label" for="lastNameinput">Last Name</label>
                                            <input id="lastNameinput" class="form-control" placeholder="Enter your lastname"
                                                   type="text"/>
                                        </div>
                                    </b-col>
                                    <b-col md="12">
                                        <div class="mb-3">
                                            <label class="form-label" for="compnayNameinput">Company Name</label>
                                            <input id="compnayNameinput" class="form-control" placeholder="Enter company name"
                                                   type="text"/>
                                        </div>
                                    </b-col>
                                    <b-col md="6">
                                        <div class="mb-3">
                                            <label class="form-label" for="phonenumberInput">Phone Number</label>
                                            <input id="phonenumberInput" class="form-control" placeholder="+(245) 451 45123"
                                                   type="tel"/>
                                        </div>
                                    </b-col>
                                    <b-col md="6">
                                        <div class="mb-3">
                                            <label class="form-label" for="emailidInput">Email Address</label>
                                            <input id="emailidInput" class="form-control" placeholder="example@gamil.com"
                                                   type="email"/>
                                        </div>
                                    </b-col>
                                    <b-col md="12">
                                        <div class="mb-3">
                                            <label class="form-label" for="address1ControlTextarea">Address</label>
                                            <input id="address1ControlTextarea" class="form-control" placeholder="Address 1"
                                                   type="text"/>
                                        </div>
                                    </b-col>
                                    <b-col md="6">
                                        <div class="mb-3">
                                            <label class="form-label" for="citynameInput">City</label>
                                            <input id="citynameInput" class="form-control" placeholder="Enter your city"
                                                   type="email"/>
                                        </div>
                                    </b-col>
                                    <b-col md="6">
                                        <div class="mb-3">
                                            <label class="form-label" for="ForminputState">State</label>

                                            <Multiselect v-model="value" :close-on-select="true" :create-option="true"
                                                         :options="[
                          { value: 'choose', label: 'Choose...' },
                          { value: '...', label: '...' },
                        ]"
                                                         :searchable="true"/>
                                        </div>
                                    </b-col>
                                    <b-col lg="12">
                                        <div class="text-end">
                                            <b-button type="submit" variant="primary">
                                                Submit
                                            </b-button>
                                        </div>
                                    </b-col>
                                </b-row>
                            </form>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;form action=&quot;javascript:void(0);&quot;&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;firstNameinput&quot; class=&quot;form-label&quot;&gt;First Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your firstname&quot; id=&quot;firstNameinput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;lastNameinput&quot; class=&quot;form-label&quot;&gt;Last Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your lastname&quot; id=&quot;lastNameinput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;compnayNameinput&quot; class=&quot;form-label&quot;&gt;Company Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Enter company name&quot; id=&quot;compnayNameinput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;phonenumberInput&quot; class=&quot;form-label&quot;&gt;Phone Number&lt;/label&gt;
&lt;input type=&quot;tel&quot; class=&quot;form-control&quot; placeholder=&quot;+(245) 451 45123&quot; id=&quot;phonenumberInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;emailidInput&quot; class=&quot;form-label&quot;&gt;Email Address&lt;/label&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; placeholder=&quot;example@gamil.com&quot; id=&quot;emailidInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;address1ControlTextarea&quot; class=&quot;form-label&quot;&gt;Address&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Address 1&quot; id=&quot;address1ControlTextarea&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;citynameInput&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; placeholder=&quot;Enter your city&quot; id=&quot;citynameInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-6&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;ForminputState&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
&lt;select id=&quot;ForminputState&quot; class=&quot;form-select&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-lg-12&quot;&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;
&lt;/form&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Gutters</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="gutters-showcode">Show Code</label>
                                <input id="gutters-showcode" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            By adding
                            <a class="text-decoration-underline" href="/docs/5.1/layout/gutters/">gutter modifier
                                classes</a>, you can
                            have control over the gutter width in as well the
                            inline as block direction.
                            <span class="fw-medium">Also requires the <code>$enable-grid-classes</code> Sass
                variable to be enabled</span>
                            (on by default).
                        </p>
                        <div class="live-preview">
                            <form action="javascript:void(0);" class="row g-3">
                                <b-col md="12">
                                    <label class="form-label" for="fullnameInput">Name</label>
                                    <input id="fullnameInput" class="form-control" placeholder="Enter your name"
                                           type="text"/>
                                </b-col>
                                <b-col md="6">
                                    <label class="form-label" for="inputEmail4">Email</label>
                                    <input id="inputEmail4" class="form-control" placeholder="Email" type="email"/>
                                </b-col>
                                <b-col md="6">
                                    <label class="form-label" for="inputPassword4">Password</label>
                                    <input id="inputPassword4" class="form-control" placeholder="Password"
                                           type="password"/>
                                </b-col>
                                <b-col cols="12">
                                    <label class="form-label" for="inputAddress">Address</label>
                                    <input id="inputAddress" class="form-control" placeholder="1234 Main St"
                                           type="text"/>
                                </b-col>
                                <b-col cols="12">
                                    <label class="form-label" for="inputAddress2">Address 2</label>
                                    <input id="inputAddress2" class="form-control" placeholder="Apartment, studio, or floor"
                                           type="text"/>
                                </b-col>
                                <b-col md="6">
                                    <label class="form-label" for="inputCity">City</label>
                                    <input id="inputCity" class="form-control" placeholder="Enter your city"
                                           type="text"/>
                                </b-col>
                                <b-col md="4">
                                    <label class="form-label" for="inputState">State</label>

                                    <Multiselect v-model="value2" :close-on-select="true" :create-option="true"
                                                 :options="[
                      { value: 'choose', label: 'Choose...' },
                      { value: '...', label: '...' },
                    ]"
                                                 :searchable="true"/>
                                </b-col>
                                <b-col md="2">
                                    <label class="form-label" for="inputZip">Zip</label>
                                    <input id="inputZip" class="form-control" placeholder="Zin code" type="text"/>
                                </b-col>
                                <b-col cols="12">
                                    <div class="form-check">
                                        <input id="gridCheck" class="form-check-input" type="checkbox"/>
                                        <label class="form-check-label" for="gridCheck">
                                            Check me out
                                        </label>
                                    </div>
                                </b-col>
                                <b-col cols="12">
                                    <div class="text-end">
                                        <b-button type="submit" variant="primary">
                                            Sign in
                                        </b-button>
                                    </div>
                                </b-col>
                            </form>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;form action=&quot;javascript:void(0);&quot; class=&quot;row g-3&quot;&gt;
&lt;div class=&quot;col-md-12&quot;&gt;
&lt;label for=&quot;fullnameInput&quot; class=&quot;form-label&quot;&gt;Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;fullnameInput&quot; placeholder=&quot;Enter your name&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;inputEmail4&quot; class=&quot;form-label&quot;&gt;Email&lt;/label&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;inputEmail4&quot; placeholder=&quot;Email&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;inputPassword4&quot; class=&quot;form-label&quot;&gt;Password&lt;/label&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;inputPassword4&quot; placeholder=&quot;Password&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;label for=&quot;inputAddress&quot; class=&quot;form-label&quot;&gt;Address&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputAddress&quot; placeholder=&quot;1234 Main St&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;label for=&quot;inputAddress2&quot; class=&quot;form-label&quot;&gt;Address 2&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputAddress2&quot; placeholder=&quot;Apartment, studio, or floor&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-6&quot;&gt;
&lt;label for=&quot;inputCity&quot; class=&quot;form-label&quot;&gt;City&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputCity&quot; placeholder=&quot;Enter your city&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-4&quot;&gt;
&lt;label for=&quot;inputState&quot; class=&quot;form-label&quot;&gt;State&lt;/label&gt;
&lt;select id=&quot;inputState&quot; class=&quot;form-select&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;
&lt;div class=&quot;col-md-2&quot;&gt;
&lt;label for=&quot;inputZip&quot; class=&quot;form-label&quot;&gt;Zip&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inputZip&quot; placeholder=&quot;Zin code&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;gridCheck&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;gridCheck&quot;&gt;
Check me out
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Sign in&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Vertical Form</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="vertical-form-showcode">Show Code</label>
                                <input id="vertical-form-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Example of vertical form using <code>form-control</code> class. No
                            need to specify row and col class to create vertical form.
                        </p>
                        <div class="live-preview">
                            <form action="javascript:void(0);">
                                <div class="mb-3">
                                    <label class="form-label" for="employeeName">Employee Name</label>
                                    <input id="employeeName" class="form-control" placeholder="Enter emploree name"
                                           type="text"/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="employeeUrl">Employee Department URL</label>
                                    <input id="employeeUrl" class="form-control" placeholder="Enter emploree url"
                                           type="url"/>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="StartleaveDate">Start Leave Date</label>

                                    <flat-pickr v-model="date" class="form-control"></flat-pickr>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="EndleaveDate">End Leave Date</label>

                                    <flat-pickr v-model="date1" class="form-control"></flat-pickr>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label" for="VertimeassageInput">Message</label>
                                    <textarea id="VertimeassageInput" class="form-control" placeholder="Enter your message"
                                              rows="3"></textarea>
                                </div>
                                <div class="text-end">
                                    <b-button type="submit" variant="primary">
                                        Add Leave
                                    </b-button>
                                </div>
                            </form>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;form action=&quot;&quot;&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;employeeName&quot; class=&quot;form-label&quot;&gt;Employee Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;employeeName&quot; placeholder=&quot;Enter emploree name&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;employeeUrl&quot; class=&quot;form-label&quot;&gt;Employee Department URL&lt;/label&gt;
&lt;input type=&quot;url&quot; class=&quot;form-control&quot; id=&quot;employeeUrl&quot; placeholder=&quot;Enter emploree url&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;StartleaveDate&quot; class=&quot;form-label&quot;&gt;Start Leave Date&lt;/label&gt;
&lt;input type=&quot;date&quot; class=&quot;form-control&quot; id=&quot;StartleaveDate&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;EndleaveDate&quot; class=&quot;form-label&quot;&gt;End Leave Date&lt;/label&gt;
&lt;input type=&quot;date&quot; class=&quot;form-control&quot; id=&quot;EndleaveDate&quot;&gt;
&lt;/div&gt;
&lt;div class=&quot;mb-3&quot;&gt;
&lt;label for=&quot;VertimeassageInput&quot; class=&quot;form-label&quot;&gt;Message&lt;/label&gt;
&lt;textarea class=&quot;form-control&quot; id=&quot;VertimeassageInput&quot; rows=&quot;3&quot; placeholder=&quot;Enter your message&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Add Leave&lt;/button&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="6">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Horizontal Form</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="horizontal-form-showcode">Show Code</label>
                                <input id="horizontal-form-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Create horizontal forms with the grid by adding the
                            <code>row</code> class to form groups and using the
                            <code>col-*-*</code> class to specify the width of your labels and
                            controls. Be sure to add <code>col-form-label</code> class to your
                            <code>&lt;label&gt;</code>s as well so they’re vertically centered
                            with their associated form controls.
                        </p>
                        <div class="live-preview">
                            <form action="javascript:void(0);">
                                <b-row class="mb-3">
                                    <b-col lg="3">
                                        <label class="form-label" for="nameInput">Name</label>
                                    </b-col>
                                    <b-col lg="9">
                                        <input id="nameInput" class="form-control" placeholder="Enter your name"
                                               type="text"/>
                                    </b-col>
                                </b-row>
                                <b-row class="mb-3">
                                    <b-col lg="3">
                                        <label class="form-label" for="websiteUrl">Website URL</label>
                                    </b-col>
                                    <b-col lg="9">
                                        <input id="websiteUrl" class="form-control" placeholder="Enter your url"
                                               type="url"/>
                                    </b-col>
                                </b-row>
                                <b-row class="mb-3">
                                    <b-col lg="3">
                                        <label class="form-label" for="dateInput">Date</label>
                                    </b-col>
                                    <b-col lg="9">
                                        <flat-pickr v-model="date3" class="form-control"></flat-pickr>
                                    </b-col>
                                </b-row>
                                <b-row class="mb-3">
                                    <b-col lg="3">
                                        <label class="form-label" for="timeInput">Time</label>
                                    </b-col>
                                    <b-col lg="9">
                                        <input id="timeInput" class="form-control" data-provider="timepickr"
                                               data-time-basic="true"
                                               type="time"/>
                                    </b-col>
                                </b-row>
                                <b-row class="mb-3">
                                    <b-col lg="3">
                                        <label class="form-label" for="leaveemails">Email Id</label>
                                    </b-col>
                                    <b-col lg="9">
                                        <input id="leaveemails" class="form-control" placeholder="Enter your email"
                                               type="email"/>
                                    </b-col>
                                </b-row>
                                <b-row class="mb-3">
                                    <b-col lg="3">
                                        <label class="form-label" for="contactNumber">Contact Number</label>
                                    </b-col>
                                    <b-col lg="9">
                                        <input id="contactNumber" class="form-control" placeholder="+91 9876543210"
                                               type="number"/>
                                    </b-col>
                                </b-row>
                                <b-row class="mb-3">
                                    <b-col lg="3">
                                        <label class="form-label" for="meassageInput">Message</label>
                                    </b-col>
                                    <b-col lg="9">
                    <textarea id="meassageInput" class="form-control" placeholder="Enter your message"
                              rows="3"></textarea>
                                    </b-col>
                                </b-row>
                                <div class="text-end">
                                    <b-button type="submit" variant="primary">
                                        Add Leave
                                    </b-button>
                                </div>
                            </form>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 375px">
<code>&lt;form action=&quot;&quot;&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;nameInput&quot; class=&quot;form-label&quot;&gt;Name&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;nameInput&quot; placeholder=&quot;Enter your name&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;websiteUrl&quot; class=&quot;form-label&quot;&gt;Website URL&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;input type=&quot;url&quot; class=&quot;form-control&quot; id=&quot;websiteUrl&quot; placeholder=&quot;Enter your url&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;dateInput&quot; class=&quot;form-label&quot;&gt;Date&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;input type=&quot;date&quot; class=&quot;form-control&quot; id=&quot;dateInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;timeInput&quot; class=&quot;form-label&quot;&gt;Time&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;input type=&quot;time&quot; class=&quot;form-control&quot; id=&quot;timeInput&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;leaveemails&quot; class=&quot;form-label&quot;&gt;Email Id&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;leaveemails&quot; placeholder=&quot;Enter your email&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;contactNumber&quot; class=&quot;form-label&quot;&gt;Contact Number&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;input type=&quot;number&quot; class=&quot;form-control&quot; id=&quot;contactNumber&quot; placeholder=&quot;+91 9876543210&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;row mb-3&quot;&gt;
&lt;div class=&quot;col-lg-3&quot;&gt;
&lt;label for=&quot;meassageInput&quot; class=&quot;form-label&quot;&gt;Message&lt;/label&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-9&quot;&gt;
&lt;textarea class=&quot;form-control&quot; id=&quot;meassageInput&quot; rows=&quot;3&quot; placeholder=&quot;Enter your message&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Add Leave&lt;/button&gt;
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
                        <b-card-title class="mb-0 flex-grow-1"> Horizontal Form Label Sizing</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="horizontal-form-labelsize-showcode">Show
                                    Code</label>
                                <input id="horizontal-form-labelsize-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use <code>col-form-label-sm</code> class to set small size form
                            label or <code>col-form-label-lg</code> class to set large size
                            form label to &lt;label&gt;. No such class is required for the
                            default size form label.
                        </p>
                        <div class="live-preview">
                            <b-row class="align-items-center g-3">
                                <b-col xxl="4">
                                    <b-row>
                                        <label class="col-sm-2 col-form-label col-form-label-sm" for="colFormLabelSm">Email</label>
                                        <b-col sm="10">
                                            <input id="colFormLabelSm" class="form-control form-control-sm" placeholder="col-form-label-sm"
                                                   type="email"/>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col xxl="4">
                                    <b-row>
                                        <label class="col-sm-2 col-form-label" for="colFormLabel">Email</label>
                                        <b-col sm="10">
                                            <input id="colFormLabel" class="form-control" placeholder="col-form-label"
                                                   type="email"/>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <b-col xxl="4">
                                    <b-row>
                                        <label class="col-sm-2 col-form-label col-form-label-lg" for="colFormLabelLg">Email</label>
                                        <b-col sm="10">
                                            <input id="colFormLabelLg" class="form-control form-control-lg" placeholder="col-form-label-lg"
                                                   type="email"/>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;!-- Col Form Label Small --&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;label for=&quot;colFormLabelSm&quot; class=&quot;col-sm-2 col-form-label col-form-label-sm&quot;&gt;Email&lt;/label&gt;
&lt;div class=&quot;col-sm-10&quot;&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control form-control-sm&quot; id=&quot;colFormLabelSm&quot; placeholder=&quot;col-form-label-sm&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Col Form Label Default --&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;label for=&quot;colFormLabel&quot; class=&quot;col-sm-2 col-form-label&quot;&gt;Email&lt;/label&gt;
&lt;div class=&quot;col-sm-10&quot;&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;colFormLabel&quot; placeholder=&quot;col-form-label&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;</code>

<code>&lt;!-- Col Form Label Large --&gt;
&lt;div class=&quot;row&quot;&gt;
&lt;label for=&quot;lg&quot; class=&quot;col-sm-2 col-form-label col-form-label-lg&quot;&gt;Email&lt;/label&gt;
&lt;div class=&quot;col-sm-10&quot;&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control form-control-lg&quot; id=&quot;colFormLabelSm&quot; placeholder=&quot;col-form-label-lg&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Column Sizing</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="column-size-showcode">Show Code</label>
                                <input id="column-size-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Use <code>col-sm-</code> class with required size value to set
                            column size as per your requirement.
                        </p>
                        <div class="live-preview">
                            <b-row class="g-3">
                                <b-col sm="6">
                                    <input aria-label="First-Name" class="form-control" placeholder="Firstname"
                                           type="text"/>
                                </b-col>
                                <b-col sm="6">
                                    <input aria-label="Last-Name" class="form-control" placeholder="Lastname"
                                           type="text"/>
                                </b-col>
                                <b-col sm="4">
                                    <input aria-label="Email Id" class="form-control" placeholder="Email id"
                                           type="text"/>
                                </b-col>
                                <b-col sm="4">
                                    <input aria-label="Password" class="form-control" placeholder="Password"
                                           type="password"/>
                                </b-col>
                                <b-col sm="4">
                                    <input aria-label="confirm-password" class="form-control" placeholder="Confirm Password"
                                           type="password"/>
                                </b-col>
                                <b-col sm="7">
                                    <input aria-label="City" class="form-control" placeholder="City" type="text"/>
                                </b-col>
                                <b-col sm>
                                    <input aria-label="State" class="form-control" placeholder="State" type="text"/>
                                </b-col>
                                <b-col sm>
                                    <input aria-label="Zip" class="form-control" placeholder="Zip" type="text"/>
                                </b-col>
                            </b-row>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;div class=&quot;row g-3&quot;&gt;
&lt;div class=&quot;col-sm-6&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Firstname&quot; aria-label=&quot;First-Name&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-6&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Lastname&quot; aria-label=&quot;Last-Name&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Email id&quot; aria-label=&quot;Email Id&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; placeholder=&quot;Password&quot; aria-label=&quot;Password&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-4&quot;&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; placeholder=&quot;Confirm Password&quot; aria-label=&quot;confirm-password&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-7&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;City&quot; aria-label=&quot;City&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;State&quot; aria-label=&quot;State&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; placeholder=&quot;Zip&quot; aria-label=&quot;Zip&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header class="align-items-center d-flex">
                        <b-card-title class="mb-0 flex-grow-1">Auto Sizing</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="auto-size-showcode">Show Code</label>
                                <input id="auto-size-showcode" class="form-check-input code-switcher" type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>

                    <b-card-body>
                        <p class="text-muted">
                            Change <code>col</code> class to <code>col-auto</code> class so
                            that your columns only take up as much space as needed. Put
                            another way, the column sizes itself based on the contents.
                        </p>
                        <div class="live-preview">
                            <form action="javascript:void(0);">
                                <b-row class="gy-2 gx-3 mb-3 align-items-center">
                                    <b-col sm="auto">
                                        <label class="visually-hidden" for="autoSizingInput">Name</label>
                                        <input id="autoSizingInput" class="form-control" placeholder="Jane Doe"
                                               type="text"/>
                                    </b-col>
                                    <b-col sm="auto">
                                        <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                                        <div class="input-group">
                                            <div class="input-group-text">@</div>
                                            <input id="autoSizingInputGroup" class="form-control" placeholder="Username"
                                                   type="text"/>
                                        </div>
                                    </b-col>
                                    <b-col sm="auto">
                                        <label class="visually-hidden" for="autoSizingSelect">Preference</label>

                                        <Multiselect v-model="value3" :close-on-select="true" :create-option="true"
                                                     :options="[
                        { value: '1', label: 'One' },
                        { value: '2', label: 'Two' },
                        { value: '3', label: 'Three' },
                      ]"
                                                     :searchable="true" class="w-lg"/>
                                    </b-col>
                                    <b-col sm="auto">
                                        <div class="form-check">
                                            <input id="autoSizingCheck" class="form-check-input" type="checkbox"/>
                                            <label class="form-check-label" for="autoSizingCheck">
                                                Remember me
                                            </label>
                                        </div>
                                    </b-col>
                                    <b-col sm="auto">
                                        <b-button type="submit" variant="primary">
                                            Submit
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </form>

                            <form action="javascript:void(0);">
                                <b-row class="gx-3 gy-2 align-items-center">
                                    <b-col sm="3">
                                        <label class="visually-hidden" for="specificSizeInputName">Name</label>
                                        <input id="specificSizeInputName" class="form-control" placeholder="Jane Doe"
                                               type="text"/>
                                    </b-col>
                                    <b-col sm="3">
                                        <label class="visually-hidden"
                                               for="specificSizeInputGroupUsername">Username</label>
                                        <div class="input-group">
                                            <div class="input-group-text">@</div>
                                            <input id="specificSizeInputGroupUsername" class="form-control" placeholder="Username"
                                                   type="text"/>
                                        </div>
                                    </b-col>
                                    <b-col sm="3">
                                        <label class="visually-hidden" for="specificSizeSelect">Preference</label>

                                        <Multiselect v-model="value4" :close-on-select="true" :create-option="true"
                                                     :options="[
                        { value: '1', label: 'One' },
                        { value: '2', label: 'Two' },
                        { value: '3', label: 'Three' },
                      ]"
                                                     :searchable="true"/>
                                    </b-col>
                                    <div class="col-auto">
                                        <div class="form-check">
                                            <input id="autoSizingCheck2" class="form-check-input" type="checkbox"/>
                                            <label class="form-check-label" for="autoSizingCheck2">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <b-button type="submit" variant="primary">
                                            Submit
                                        </b-button>
                                    </div>
                                </b-row>
                            </form>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;form action=&quot;javascript:void(0);&quot;&gt;
&lt;div class=&quot;row gy-2 gx-3 mb-3 align-items-center&quot;&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;autoSizingInput&quot;&gt;Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;autoSizingInput&quot; placeholder=&quot;Jane Doe&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;autoSizingInputGroup&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group&quot;&gt;
&lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;autoSizingInputGroup&quot; placeholder=&quot;Username&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;autoSizingSelect&quot;&gt;Preference&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;autoSizingSelect&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;autoSizingCheck&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;autoSizingCheck&quot;&gt;
Remember me
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-auto&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;
&lt;/form&gt;</code>

<code>&lt;form&gt;
&lt;div class=&quot;row gx-3 gy-2 align-items-center&quot;&gt;
&lt;div class=&quot;col-sm-3&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;specificSizeInputName&quot;&gt;Name&lt;/label&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;specificSizeInputName&quot; placeholder=&quot;Jane Doe&quot;&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-3&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;specificSizeInputGroupUsername&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group&quot;&gt;
&lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;specificSizeInputGroupUsername&quot; placeholder=&quot;Username&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-sm-3&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;specificSizeSelect&quot;&gt;Preference&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;specificSizeSelect&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-auto&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;autoSizingCheck2&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;autoSizingCheck2&quot;&gt;
Remember me
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-auto&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;&lt;!--end col--&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Inline Forms</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="inline-form-showcode">Show Code</label>
                                <input id="inline-form-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use <code>row-cols-*</code> class to set form inline.
                        </p>
                        <div class="live-preview">
                            <form action="javascript:void(0);">
                                <b-row class="row-cols-lg-auto g-3 align-items-center">
                                    <b-col cols="12">
                                        <label class="visually-hidden"
                                               for="inlineFormInputGroupUsername">Username</label>
                                        <div class="input-group">
                                            <div class="input-group-text">@</div>
                                            <input id="inlineFormInputGroupUsername" class="form-control" placeholder="Username"
                                                   type="text"/>
                                        </div>
                                    </b-col>
                                    <b-col cols="12">
                                        <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>

                                        <Multiselect v-model="value5" :close-on-select="true" :create-option="true"
                                                     :options="[
                        { value: '1', label: 'One' },
                        { value: '2', label: 'Two' },
                        { value: '3', label: 'Three' },
                      ]"
                                                     :searchable="true" class="w-md"/>
                                    </b-col>
                                    <b-col cols="12">
                                        <div class="form-check">
                                            <input id="inlineFormCheck" class="form-check-input" type="checkbox"/>
                                            <label class="form-check-label" for="inlineFormCheck">
                                                Remember me
                                            </label>
                                        </div>
                                    </b-col>
                                    <b-col cols="12">
                                        <b-button type="submit" variant="primary">
                                            Submit
                                        </b-button>
                                    </b-col>
                                </b-row>
                            </form>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;form action=&quot;javascript:void(0);&quot;&gt;
&lt;div class=&quot;row row-cols-lg-auto g-3 align-items-center&quot;&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;inlineFormInputGroupUsername&quot;&gt;Username&lt;/label&gt;
&lt;div class=&quot;input-group&quot;&gt;
&lt;div class=&quot;input-group-text&quot;&gt;@&lt;/div&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;inlineFormInputGroupUsername&quot; placeholder=&quot;Username&quot;&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;label class=&quot;visually-hidden&quot; for=&quot;inlineFormSelectPref&quot;&gt;Preference&lt;/label&gt;
&lt;select class=&quot;form-select&quot; id=&quot;inlineFormSelectPref&quot;&gt;
&lt;option selected&gt;Choose...&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;One&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;Two&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Three&lt;/option&gt;
&lt;/select&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;div class=&quot;form-check&quot;&gt;
&lt;input class=&quot;form-check-input&quot; type=&quot;checkbox&quot; id=&quot;inlineFormCheck&quot;&gt;
&lt;label class=&quot;form-check-label&quot; for=&quot;inlineFormCheck&quot;&gt;
Remember me
&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;div class=&quot;col-12&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;&lt;!--end col--&gt;
&lt;/div&gt;&lt;!--end row--&gt;
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
                        <b-card-title class="mb-0 flex-grow-1">Floating Labels</b-card-title>
                        <div class="flex-shrink-0">
                            <div class="form-check form-switch form-switch-right form-switch-md">
                                <label class="form-label text-muted" for="floating-form-showcode">Show Code</label>
                                <input id="floating-form-showcode" class="form-check-input code-switcher"
                                       type="checkbox"/>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <p class="text-muted">
                            Use <code>form-floating</code> class to enable floating labels
                            with Bootstrap’s textual form fields.
                        </p>
                        <div class="live-preview">
                            <form action="#">
                                <b-row class="g-3">
                                    <b-col lg="6">
                                        <div class="form-floating">
                                            <input id="firstnamefloatingInput" class="form-control" placeholder="Enter your firstname"
                                                   type="text"/>
                                            <label for="firstnamefloatingInput">First Name</label>
                                        </div>
                                    </b-col>
                                    <b-col lg="6">
                                        <div class="form-floating">
                                            <input id="lastnamefloatingInput" class="form-control" placeholder="Enter your Lastname"
                                                   type="text"/>
                                            <label for="lastnamefloatingInput">Last Name</label>
                                        </div>
                                    </b-col>
                                    <b-col lg="4">
                                        <div class="form-floating">
                                            <input id="emailfloatingInput" class="form-control" placeholder="Enter your email"
                                                   type="email"/>
                                            <label for="emailfloatingInput">Email Address</label>
                                        </div>
                                    </b-col>
                                    <b-col lg="4">
                                        <div class="form-floating">
                                            <input id="passwordfloatingInput" class="form-control" placeholder="Enter your password"
                                                   type="password"/>
                                            <label for="passwordfloatingInput">Password</label>
                                        </div>
                                    </b-col>
                                    <b-col lg="4">
                                        <div class="form-floating">
                                            <input id="passwordfloatingInput1" class="form-control" placeholder="Confirm password"
                                                   type="password"/>
                                            <label for="passwordfloatingInput1">Confirm Password</label>
                                        </div>
                                    </b-col>
                                    <b-col lg="4">
                                        <div class="form-floating">
                                            <input id="cityfloatingInput" class="form-control" placeholder="Enter your city"
                                                   type="text"/>
                                            <label for="cityfloatingInput">City</label>
                                        </div>
                                    </b-col>
                                    <b-col lg="4">
                                        <div class="form-floating">
                                            <select id="floatingSelect" aria-label="Floating label select example"
                                                    class="form-select">
                                                <option selected>Choose...</option>
                                                <option value="1">USA</option>
                                                <option value="2">Brazil</option>
                                                <option value="3">France</option>
                                                <option value="4">Germany</option>
                                            </select>
                                            <label for="floatingSelect">Country</label>
                                        </div>
                                    </b-col>
                                    <b-col lg="4">
                                        <div class="form-floating">
                                            <input id="zipfloatingInput" class="form-control" placeholder="Enter your zipcode"
                                                   type="number"/>
                                            <label for="zipfloatingInput">Zipcode</label>
                                        </div>
                                    </b-col>
                                    <b-col lg="12">
                                        <div class="text-end">
                                            <b-button type="submit" variant="primary">
                                                Submit
                                            </b-button>
                                        </div>
                                    </b-col>
                                </b-row>
                            </form>
                        </div>
                        <div class="d-none code-view">
              <pre class="language-markup" style="height: 275px">
<code>&lt;form action=&quot;#&quot;&gt;
&lt;div class=&quot;row g-3&quot;&gt;
&lt;div class=&quot;col-lg-6&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;firstnamefloatingInput&quot; placeholder=&quot;Enter your firstname&quot;&gt;
&lt;label for=&quot;firstnamefloatingInput&quot;&gt;First Name&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-6&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;lastnamefloatingInput&quot; placeholder=&quot;Enter your Lastname&quot;&gt;
&lt;label for=&quot;lastnamefloatingInput&quot;&gt;Last Name&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;email&quot; class=&quot;form-control&quot; id=&quot;emailfloatingInput&quot; placeholder=&quot;Enter your email&quot;&gt;
&lt;label for=&quot;emailfloatingInput&quot;&gt;Email Address&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;passwordfloatingInput&quot; placeholder=&quot;Enter your password&quot;&gt;
&lt;label for=&quot;passwordfloatingInput&quot;&gt;Password&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;password&quot; class=&quot;form-control&quot; id=&quot;passwordfloatingInput1&quot; placeholder=&quot;Confirm password&quot;&gt;
&lt;label for=&quot;passwordfloatingInput1&quot;&gt;Confirm Password&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;text&quot; class=&quot;form-control&quot; id=&quot;cityfloatingInput&quot; placeholder=&quot;Enter your city&quot;&gt;
&lt;label for=&quot;cityfloatingInput&quot;&gt;City&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;select class=&quot;form-select&quot; id=&quot;floatingSelect&quot; aria-label=&quot;Floating label select example&quot;&gt;
&lt;option selected&gt;USA&lt;/option&gt;
&lt;option value=&quot;1&quot;&gt;Brazil&lt;/option&gt;
&lt;option value=&quot;2&quot;&gt;France&lt;/option&gt;
&lt;option value=&quot;3&quot;&gt;Germany&lt;/option&gt;
&lt;/select&gt;
&lt;label for=&quot;floatingSelect&quot;&gt;Country&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-4&quot;&gt;
&lt;div class=&quot;form-floating&quot;&gt;
&lt;input type=&quot;number&quot; class=&quot;form-control&quot; id=&quot;zipfloatingInput&quot; placeholder=&quot;Enter your zipcode&quot;&gt;
&lt;label for=&quot;zipfloatingInput&quot;&gt;Zipcode&lt;/label&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class=&quot;col-lg-12&quot;&gt;
&lt;div class=&quot;text-end&quot;&gt;
&lt;button type=&quot;submit&quot; class=&quot;btn btn-primary&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/form&gt;</code></pre>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
