<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import animationData from "@/components/widgets/lupuorrc.json";
import Lottie from "@/components/widgets/lottie.vue";

export default {
    page: {
        title: "Wizard",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Wizard",
            items: [
                {
                    text: "Forms",
                    href: "/",
                },
                {
                    text: "Wizard",
                    active: true,
                },
            ],
            defaultOptions: {animationData: animationData},
        };
    },
    components: {
        Layout,
        PageHeader,
        lottie: Lottie
    },
    mounted() {

        // user profile img file upload
        document.querySelector("#profile-img-file-input").addEventListener("change", function () {
            var preview = document.querySelector(".user-profile-image");
            var file = document.querySelector(".profile-img-file-input").files[0];
            var reader = new FileReader();

            reader.addEventListener(
                "load",
                function () {
                    preview.src = reader.result;
                },
                false
            );

            if (file) {
                reader.readAsDataURL(file);
            }
        });

        document.querySelectorAll(".form-steps").forEach(function (form) {

            // next tab
            form.querySelectorAll(".nexttab").forEach(function (nextButton) {
                var tabEl = form.querySelectorAll('button[data-bs-toggle="pill"]');
                tabEl.forEach(function (item) {
                    item.addEventListener('show.bs.tab', function (event) {
                        event.target.classList.add('done');
                    });
                });
                nextButton.addEventListener("click", function () {
                    var nextTab = nextButton.getAttribute('data-nexttab');
                    document.getElementById(nextTab).click();
                });
            });

            //Pervies tab
            form.querySelectorAll(".previestab").forEach(function (prevButton) {

                prevButton.addEventListener("click", function () {
                    var prevTab = prevButton.getAttribute('data-previous');
                    var totalDone = prevButton.closest("form").querySelectorAll(".custom-nav .done").length;
                    for (var i = totalDone - 1; i < totalDone; i++) {
                        (prevButton.closest("form").querySelectorAll(".custom-nav .done")[i]) ? prevButton.closest("form").querySelectorAll(".custom-nav .done")[i].classList.remove('done') : '';
                    }
                    document.getElementById(prevTab).click();
                });
            });

            // Step number click
            var tabButtons = form.querySelectorAll('button[data-bs-toggle="pill"]');
            tabButtons.forEach(function (button, i) {
                button.setAttribute("data-position", i);
                button.addEventListener("click", function () {
                    var getProgreebar = button.getAttribute("data-progressbar");
                    if (getProgreebar) {
                        var totallength = document.getElementById("custom-progress-bar").querySelectorAll("li").length - 1;
                        var current = i;
                        var percent = (current / totallength) * 100;
                        document.getElementById("custom-progress-bar").querySelector('.progress-bar').style.width = percent + "%";
                    }
                    (form.querySelectorAll(".custom-nav .done").length > 0) ?
                        form.querySelectorAll(".custom-nav .done").forEach(function (doneTab) {
                            doneTab.classList.remove('done');
                        }) : '';
                    for (var j = 0; j <= i; j++) {
                        tabButtons[j].classList.contains('active') ? tabButtons[j].classList.remove('done') : tabButtons[j].classList.add('done');
                    }
                });
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
                    <b-card-header>
                        <b-card-title class="mb-0">Progress Nav Steps</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <form action="#" autocomplete="off" class="form-steps">
                            <div class="text-center pt-3 pb-4 mb-1">
                                <h5>Signup Your Account</h5>
                            </div>
                            <div id="custom-progress-bar" class="progress-nav mb-4">
                                <div class="progress" style="height: 1px;">
                                    <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" class="progress-bar"
                                         role="progressbar" style="width: 0%;"></div>
                                </div>

                                <ul class="nav nav-pills progress-bar-tab custom-nav" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <b-button id="pills-gen-info-tab" aria-controls="pills-gen-info" aria-selected="true"
                                                  class="nav-link active" data-bs-target="#pills-gen-info"
                                                  data-bs-toggle="pill" data-progressbar="custom-progress-bar" pill
                                                  role="tab" type="button" variant="link">1
                                        </b-button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <b-button id="pills-info-desc-tab" aria-controls="pills-info-desc" aria-selected="false"
                                                  class="nav-link"
                                                  data-bs-target="#pills-info-desc" data-bs-toggle="pill"
                                                  data-progressbar="custom-progress-bar" pill role="tab"
                                                  type="button" variant="link">2
                                        </b-button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <b-button id="pills-success-tab" aria-controls="pills-success" aria-selected="false"
                                                  class="nav-link"
                                                  data-bs-target="#pills-success" data-bs-toggle="pill"
                                                  data-progressbar="custom-progress-bar"
                                                  pill role="tab" type="button"
                                                  variant="link">3
                                        </b-button>
                                    </li>
                                </ul>
                            </div>

                            <div class="tab-content">
                                <div id="pills-gen-info" aria-labelledby="pills-gen-info-tab" class="tab-pane fade show active"
                                     role="tabpanel">
                                    <div>
                                        <div class="mb-4">
                                            <div>
                                                <h5 class="mb-1">General Information</h5>
                                                <p class="text-muted">Fill all Information as below</p>
                                            </div>
                                        </div>
                                        <b-row>
                                            <b-col lg="6">
                                                <div class="mb-3">
                                                    <label class="form-label" for="gen-info-email-input">Email</label>
                                                    <input id="gen-info-email-input" class="form-control" placeholder="Enter email"
                                                           required type="email">
                                                    <div class="invalid-feedback">Please enter an email address</div>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="mb-3">
                                                    <label class="form-label" for="gen-info-username-input">User
                                                        Name</label>
                                                    <input id="gen-info-username-input" class="form-control" placeholder="Enter user name"
                                                           required type="text">
                                                    <div class="invalid-feedback">Please enter a user name</div>
                                                </div>
                                            </b-col>
                                        </b-row>
                                        <div class="mb-3">
                                            <label class="form-label" for="gen-info-password-input">Password</label>
                                            <input id="gen-info-password-input" class="form-control" placeholder="Enter Password"
                                                   required type="password">
                                            <div class="invalid-feedback">Please enter a password</div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <b-button class="btn-label right ms-auto nexttab
nexttab" data-nexttab="pills-info-desc-tab" type="button" variant="success"><i class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to
                                            more info
                                        </b-button>
                                    </div>
                                </div>

                                <div id="pills-info-desc" aria-labelledby="pills-info-desc-tab" class="tab-pane fade"
                                     role="tabpanel">
                                    <div>
                                        <div class="text-center">
                                            <div class="profile-user position-relative d-inline-block mx-auto mb-2">
                                                <img alt="user-profile-image"
                                                     class="rounded-circle avatar-lg img-thumbnail user-profile-image"
                                                     src="@/assets/images/users/user-dummy-img.jpg">
                                                <div class="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                    <input id="profile-img-file-input" accept="image/png, image/jpeg"
                                                           class="profile-img-file-input"
                                                           type="file">
                                                    <label class="profile-photo-edit avatar-xs"
                                                           for="profile-img-file-input">
                                                        <span class="avatar-title rounded-circle bg-light text-body">
                                                            <i class="ri-camera-fill"></i>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <h5 class="fs-14">Add Image</h5>

                                        </div>
                                        <div>
                                            <label class="form-label"
                                                   for="gen-info-description-input">Description</label>
                                            <textarea id="gen-info-description-input" class="form-control"
                                                      placeholder="Enter Description" required rows="2"></textarea>
                                            <div class="invalid-feedback">Please enter a description</div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <b-button class="text-decoration-none btn-label previestab" data-previous="pills-gen-info-tab"
                                                  type="button"
                                                  variant="link"><i
                                            class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back
                                            to General
                                        </b-button>
                                        <b-button class="btn-label right ms-auto nexttab
nexttab" data-nexttab="pills-success-tab" type="button" variant="success"><i
                                            class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Submit
                                        </b-button>
                                    </div>
                                </div>

                                <div id="pills-success" aria-labelledby="pills-success-tab" class="tab-pane fade"
                                     role="tabpanel">
                                    <div>
                                        <div class="text-center">

                                            <div class="mb-4">
                                                <lottie :height="120"
                                                        :options="defaultOptions" :width="120" colors="primary:#0ab39c,secondary:#405189"/>
                                            </div>
                                            <h5>Well Done !</h5>
                                            <p class="text-muted">You have Successfully Signed Up</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xl="6">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Arrow Nav Steps</b-card-title>
                    </b-card-header>
                    <b-card-body>
                        <form action="#" autocomplete="off" class="form-steps">
                            <div class="text-center pt-3 pb-4 mb-1">
                                <img alt="" height="17" src="@/assets/images/logo-dark.png">
                            </div>
                            <div class="step-arrow-nav mb-4">

                                <ul class="nav nav-pills custom-nav nav-justified" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <b-button id="steparrow-gen-info-tab" aria-controls="steparrow-gen-info" aria-selected="true"
                                                  class="nav-link done"
                                                  data-bs-target="#steparrow-gen-info" data-bs-toggle="pill" role="tab"
                                                  type="button" variant="link">General
                                        </b-button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <b-button id="steparrow-description-info-tab" aria-controls="steparrow-description-info"
                                                  aria-selected="false"
                                                  class="nav-link active" data-bs-target="#steparrow-description-info"
                                                  data-bs-toggle="pill" role="tab" type="button"
                                                  variant="link">Description
                                        </b-button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <b-button id="pills-experience-tab" aria-controls="pills-experience" aria-selected="false"
                                                  class="nav-link"
                                                  data-bs-target="#pills-experience" data-bs-toggle="pill" role="tab"
                                                  type="button" variant="link">Finish
                                        </b-button>
                                    </li>
                                </ul>
                            </div>

                            <div class="tab-content">
                                <div id="steparrow-gen-info" aria-labelledby="steparrow-gen-info-tab" class="tab-pane fade"
                                     role="tabpanel">
                                    <div>
                                        <b-row>
                                            <b-col lg="6">
                                                <div class="mb-3">
                                                    <label class="form-label"
                                                           for="steparrow-gen-info-email-input">Email</label>
                                                    <input id="steparrow-gen-info-email-input" class="form-control"
                                                           placeholder="Enter email" required
                                                           type="email">
                                                    <div class="invalid-feedback">Please enter an email address</div>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="mb-3">
                                                    <label class="form-label"
                                                           for="steparrow-gen-info-username-input">User Name</label>
                                                    <input id="steparrow-gen-info-username-input" class="form-control"
                                                           placeholder="Enter user name"
                                                           required type="text">
                                                    <div class="invalid-feedback">Please enter a user name</div>
                                                </div>
                                            </b-col>
                                        </b-row>
                                        <div class="mb-3">
                                            <label class="form-label"
                                                   for="steparrow-gen-info-password-input">Password</label>
                                            <input id="steparrow-gen-info-password-input" class="form-control"
                                                   placeholder="Enter password" required
                                                   type="password">
                                            <div class="invalid-feedback">Please enter a password</div>
                                        </div>
                                        <div>
                                            <label class="form-label"
                                                   for="steparrow-gen-info-confirm-password-input">Confirm
                                                Password</label>
                                            <input id="steparrow-gen-info-confirm-password-input" class="form-control"
                                                   placeholder="Enter confirm password"
                                                   type="password">
                                            <div class="invalid-feedback">Please enter a confirm password</div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <b-button class="btn-label right ms-auto nexttab nexttab" data-nexttab="steparrow-description-info-tab"
                                                  type="button"
                                                  variant="success"><i
                                            class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to
                                            more info
                                        </b-button>
                                    </div>
                                </div>

                                <div id="steparrow-description-info" aria-labelledby="steparrow-description-info-tab" class="tab-pane fade show active"
                                     role="tabpanel">
                                    <div>
                                        <div class="mb-3">
                                            <label class="form-label" for="formFile">Upload Image</label>
                                            <input id="formFile" class="form-control" type="file">
                                        </div>
                                        <div>
                                            <label class="form-label"
                                                   for="des-info-description-input">Description</label>
                                            <textarea id="des-info-description-input" class="form-control"
                                                      placeholder="Enter Description" required rows="3"></textarea>
                                            <div class="invalid-feedback">Please enter a description</div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <b-button class="btn-label previestab" data-previous="steparrow-gen-info-tab" type="button"
                                                  variant="light"><i
                                            class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i> Back
                                            to General
                                        </b-button>
                                        <b-button class="btn-label right ms-auto nexttab
nexttab" data-nexttab="pills-experience-tab" type="button" variant="success"><i
                                            class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Submit
                                        </b-button>
                                    </div>
                                </div>

                                <div id="pills-experience" class="tab-pane fade" role="tabpanel">
                                    <div class="text-center">

                                        <div class="avatar-md mt-5 mb-4 mx-auto">
                                            <div class="avatar-title bg-light text-success display-4 rounded-circle">
                                                <i class="ri-checkbox-circle-fill"></i>
                                            </div>
                                        </div>
                                        <h5>Well Done !</h5>
                                        <p class="text-muted">You have Successfully Signed Up</p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-col xl="12">
                <b-card no-body>
                    <b-card-header>
                        <b-card-title class="mb-0">Vertical nav Steps</b-card-title>
                    </b-card-header>
                    <b-card-body class="form-steps">
                        <form class="vertical-navs-step">
                            <b-row class="gy-5">
                                <b-col lg="3">
                                    <div aria-orientation="vertical" class="nav flex-column custom-nav nav-pills"
                                         role="tablist">
                                        <b-button id="v-pills-bill-info-tab" aria-controls="v-pills-bill-info" aria-selected="true"
                                                  class="nav-link done"
                                                  data-bs-target="#v-pills-bill-info" data-bs-toggle="pill" role="tab"
                                                  type="button" variant="link">
                                            <span class="step-title me-2">
                                                <i class="ri-close-circle-fill step-icon me-2"></i>
                                                Step 1
                                            </span>
                                            Billing Info
                                        </b-button>
                                        <b-button id="v-pills-bill-address-tab" aria-controls="v-pills-bill-address" aria-selected="false"
                                                  class="nav-link active" data-bs-target="#v-pills-bill-address"
                                                  data-bs-toggle="pill"
                                                  role="tab" type="button" variant="link">
                                            <span class="step-title me-2">
                                                <i class="ri-close-circle-fill step-icon me-2"></i>
                                                Step 2
                                            </span>
                                            Address
                                        </b-button>
                                        <b-button id="v-pills-payment-tab" aria-controls="v-pills-payment" aria-selected="false"
                                                  class="nav-link"
                                                  data-bs-target="#v-pills-payment" data-bs-toggle="pill" role="tab"
                                                  type="button" variant="link">
                                            <span class="step-title me-2">
                                                <i class="ri-close-circle-fill step-icon me-2"></i>
                                                Step 3
                                            </span>
                                            Payment
                                        </b-button>
                                        <b-button id="v-pills-finish-tab" aria-controls="v-pills-finish" aria-selected="false"
                                                  class="nav-link"
                                                  data-bs-target="#v-pills-finish" data-bs-toggle="pill" role="tab"
                                                  type="button" variant="link">
                                            <span class="step-title me-2">
                                                <i class="ri-close-circle-fill step-icon me-2"></i>
                                                Step 4
                                            </span>
                                            Finish
                                        </b-button>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="px-lg-4">
                                        <div class="tab-content">
                                            <div id="v-pills-bill-info" aria-labelledby="v-pills-bill-info-tab" class="tab-pane fade"
                                                 role="tabpanel">
                                                <div>
                                                    <h5>Billing Info</h5>
                                                    <p class="text-muted">Fill all information below</p>
                                                </div>

                                                <div>
                                                    <b-row class="g-3">
                                                        <b-col sm="6">
                                                            <label class="form-label" for="firstName">First
                                                                name</label>
                                                            <input id="firstName" class="form-control" placeholder="Enter first name"
                                                                   required type="text" value="">
                                                            <div class="invalid-feedback">Please enter a first name
                                                            </div>
                                                        </b-col>

                                                        <b-col sm="6">
                                                            <label class="form-label" for="lastName">Last
                                                                name</label>
                                                            <input id="lastName" class="form-control" placeholder="Enter Last Name"
                                                                   required type="text" value="">
                                                            <div class="invalid-feedback">Please enter a last name</div>
                                                        </b-col>

                                                        <b-col cols="12">
                                                            <label class="form-label" for="username">Username</label>
                                                            <div class="input-group">
                                                                <span class="input-group-text">@</span>
                                                                <input id="username" class="form-control" placeholder="Username"
                                                                       required type="text">
                                                                <div class="invalid-feedback">Please enter a user name
                                                                </div>
                                                            </div>
                                                        </b-col>

                                                        <b-col cols="12">
                                                            <label class="form-label" for="email">Email <span
                                                                class="text-muted">(Optional)</span></label>
                                                            <input id="email" class="form-control" placeholder="Enter Email"
                                                                   type="email"/>
                                                        </b-col>
                                                    </b-row>
                                                </div>

                                                <div class="d-flex align-items-start gap-3 mt-4">
                                                    <b-button class="btn-label right ms-auto nexttab
nexttab" data-nexttab="v-pills-bill-address-tab" type="button" variant="success"><i class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go
                                                        to Shipping
                                                    </b-button>
                                                </div>
                                            </div>
                                            <div id="v-pills-bill-address" aria-labelledby="v-pills-bill-address-tab"
                                                 class="tab-pane fade show active" role="tabpanel">
                                                <div>
                                                    <h5>Shipping Address</h5>
                                                    <p class="text-muted">Fill all information below</p>
                                                </div>

                                                <div>
                                                    <b-row class="g-3">
                                                        <b-col cols="12">
                                                            <label class="form-label" for="address">Address</label>
                                                            <input id="address" class="form-control" placeholder="1234 Main St"
                                                                   required type="text">
                                                            <div class="invalid-feedback">Please enter a address</div>
                                                        </b-col>

                                                        <b-col cols="12">
                                                            <label class="form-label" for="address2">Address 2 <span
                                                                class="text-muted">(Optional)</span></label>
                                                            <input id="address2" class="form-control" placeholder="Apartment or suite"
                                                                   type="text"/>
                                                        </b-col>

                                                        <b-col md="5">
                                                            <label class="form-label" for="country">Country</label>
                                                            <select id="country" class="form-select" required>
                                                                <option value="">Choose...</option>
                                                                <option>United States</option>
                                                            </select>
                                                            <div class="invalid-feedback">Please select a country</div>
                                                        </b-col>

                                                        <b-col md="4">
                                                            <label class="form-label" for="state">State</label>
                                                            <select id="state" class="form-select">
                                                                <option value="">Choose...</option>
                                                                <option>California</option>
                                                            </select>
                                                            <div class="invalid-feedback">Please select a state</div>
                                                        </b-col>

                                                        <b-col md="3">
                                                            <label class="form-label" for="zip">Zip</label>
                                                            <input id="zip" class="form-control" placeholder=""
                                                                   type="text"/>
                                                        </b-col>
                                                    </b-row>

                                                    <hr class="my-4 text-muted">

                                                    <div class="form-check mb-2">
                                                        <input id="same-address" class="form-check-input"
                                                               type="checkbox">
                                                        <label class="form-check-label" for="same-address">Shipping
                                                            address is the same as my billing address</label>
                                                    </div>

                                                    <div class="form-check">
                                                        <input id="save-info" class="form-check-input" type="checkbox">
                                                        <label class="form-check-label" for="save-info">Save this
                                                            information for next time</label>
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-start gap-3 mt-4">
                                                    <b-button class="btn-label previestab" data-previous="v-pills-bill-info-tab" type="button"
                                                              variant="light"><i
                                                        class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                                                        Back to Billing Info
                                                    </b-button>
                                                    <b-button class="btn-label right ms-auto nexttab
nexttab" data-nexttab="v-pills-payment-tab" type="button" variant="success"><i class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Go to
                                                        Payment
                                                    </b-button>
                                                </div>
                                            </div>
                                            <div id="v-pills-payment" aria-labelledby="v-pills-payment-tab" class="tab-pane fade"
                                                 role="tabpanel">
                                                <div>
                                                    <h5>Payment</h5>
                                                    <p class="text-muted">Fill all information below</p>
                                                </div>

                                                <div>
                                                    <div class="my-3">
                                                        <div class="form-check form-check-inline">
                                                            <input id="credit" checked class="form-check-input"
                                                                   name="paymentMethod" required type="radio">
                                                            <label class="form-check-label" for="credit">Credit
                                                                card</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input id="debit" class="form-check-input" name="paymentMethod"
                                                                   required type="radio">
                                                            <label class="form-check-label" for="debit">Debit
                                                                card</label>
                                                        </div>
                                                        <div class="form-check form-check-inline">
                                                            <input id="paypal" class="form-check-input" name="paymentMethod"
                                                                   required type="radio">
                                                            <label class="form-check-label" for="paypal">PayPal</label>
                                                        </div>
                                                    </div>

                                                    <b-row class="gy-3">
                                                        <b-col md="12">
                                                            <label class="form-label" for="cc-name">Name on
                                                                card</label>
                                                            <input id="cc-name" class="form-control" placeholder=""
                                                                   required type="text">
                                                            <small class="text-muted">Full name as displayed on
                                                                card</small>
                                                            <div class="invalid-feedback">
                                                                Name on card is required
                                                            </div>
                                                        </b-col>

                                                        <b-col md="6">
                                                            <label class="form-label" for="cc-number">Credit card
                                                                number</label>
                                                            <input id="cc-number" class="form-control" placeholder=""
                                                                   required type="text">
                                                            <div class="invalid-feedback">
                                                                Credit card number is required
                                                            </div>
                                                        </b-col>

                                                        <b-col md="3">
                                                            <label class="form-label"
                                                                   for="cc-expiration">Expiration</label>
                                                            <input id="cc-expiration" class="form-control" placeholder=""
                                                                   required type="text">
                                                            <div class="invalid-feedback">
                                                                Expiration date required
                                                            </div>
                                                        </b-col>

                                                        <b-col md="3">
                                                            <label class="form-label" for="cc-cvv">CVV</label>
                                                            <input id="cc-cvv" class="form-control" placeholder=""
                                                                   required type="text">
                                                            <div class="invalid-feedback">
                                                                Security code required
                                                            </div>
                                                        </b-col>
                                                    </b-row>
                                                </div>

                                                <div class="d-flex align-items-start gap-3 mt-4">
                                                    <b-button class="btn-label previestab" data-previous="v-pills-bill-address-tab" type="button"
                                                              variant="light"><i
                                                        class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                                                        Back to Shipping Info
                                                    </b-button>
                                                    <b-button class="btn-label right ms-auto nexttab
nexttab" data-nexttab="v-pills-finish-tab" type="button" variant="success"><i class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i> Order
                                                        Complete
                                                    </b-button>
                                                </div>
                                            </div>
                                            <div id="v-pills-finish" aria-labelledby="v-pills-finish-tab" class="tab-pane fade"
                                                 role="tabpanel">
                                                <div class="text-center pt-4 pb-2">

                                                    <div class="mb-4">
                                                        <lottie :height="120"
                                                                :options="defaultOptions" :width="120" colors="primary:#0ab39c,secondary:#405189"/>
                                                    </div>
                                                    <h5>Your Order is Completed !</h5>
                                                    <p class="text-muted">You Will receive an order confirmation
                                                        email
                                                        with details of your order.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="3">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h5 class="fs-14 text-primary mb-0"><i
                                            class="ri-shopping-cart-fill align-middle me-2"></i> Your cart</h5>
                                        <b-badge class="rounded-pill" pill variant="danger">3</b-badge>
                                    </div>
                                    <ul class="list-group mb-3">
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">Product name</h6>
                                                <small class="text-muted">Brief description</small>
                                            </div>
                                            <span class="text-muted">$12</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">Second product</h6>
                                                <small class="text-muted">Brief description</small>
                                            </div>
                                            <span class="text-muted">$8</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between lh-sm">
                                            <div>
                                                <h6 class="my-0">Third item</h6>
                                                <small class="text-muted">Brief description</small>
                                            </div>
                                            <span class="text-muted">$5</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between bg-light">
                                            <div class="text-success">
                                                <h6 class="my-0">Discount code</h6>
                                                <small>−$5 Discount</small>
                                            </div>
                                            <span class="text-success">−$5</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between">
                                            <span>Total (USD)</span>
                                            <strong>$20</strong>
                                        </li>
                                    </ul>
                                </b-col>
                            </b-row>
                        </form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
