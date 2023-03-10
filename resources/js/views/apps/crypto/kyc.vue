<script>
import {ref, watch} from "vue";
import useVuelidate from "@vuelidate/core";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import DropZone from "@/components/widgets/dropZone";

import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/lupuorrc.json";

export default {
    page: {
        title: "KYC Application",
        meta: [{name: "description", content: appConfig.description}],
    },
    setup() {
        let files = ref([]);
        let dropzoneFile = ref("");
        const drop = (e) => {
            dropzoneFile.value = e.dataTransfer.files[0];
            files.value.push(dropzoneFile.value);
        };
        const selectedFile = () => {
            dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
            files.value.push(dropzoneFile.value);
        };
        watch(
            () => [...files.value],
            (currentValue) => {
                return currentValue;
            }
        );
        return {dropzoneFile, drop, selectedFile, files, v$: useVuelidate()};
    },
    data() {
        return {
            title: "KYC Application",
            items: [
                {
                    text: "Crypto",
                    href: "/",
                },
                {
                    text: "KYC Application",
                    active: true,
                },
            ],
            modalShow: false,
            date: null,
            defaultOptions: {animationData: animationData},
            value: null,
        };
    },
    components: {
        Layout,
        PageHeader,
        lottie: Lottie,
        DropZone,
        Multiselect,
        flatPickr
    },
    mounted() {
        // Checkout nav tab
        document.querySelectorAll(".checkout-tab").forEach((form) => {
            // next tab
            form.querySelectorAll(".nexttab").forEach((nextButton) => {
                var tabEl = form.querySelectorAll('button[data-bs-toggle="pill"]');
                tabEl.forEach(function (item) {
                    item.addEventListener("show.bs.tab", (event) => {
                        event.target.classList.add("done");
                    });
                });
                nextButton.addEventListener("click", () => {
                    var nextTab = nextButton.getAttribute("data-nexttab");
                    document.getElementById(nextTab).click();
                });
            });

            //Pervies tab
            form.querySelectorAll(".previestab").forEach((prevButton) => {
                prevButton.addEventListener("click", () => {
                    var prevTab = prevButton.getAttribute("data-previous");
                    var totalDone = prevButton.closest("form");
                    for (var i = totalDone - 1; i < totalDone; i++) {
                        prevButton.closest("form").querySelectorAll(".custom-nav .done")[i]
                            ? prevButton.closest("form").querySelectorAll(".custom-nav .done")[i].classList.remove("done")
                            : "";
                    }
                    document.getElementById(prevTab).click();
                });
            });

            // Step number click
            var tabButtons = form.querySelectorAll('button[data-bs-toggle="pill"]');
            tabButtons.forEach((button, i) => {
                button.setAttribute("data-position", i);
                button.addEventListener("click", () => {
                    form.querySelectorAll(".custom-nav .done").length > 0
                        ? form.querySelectorAll(".custom-nav .done").forEach((doneTab) => {
                            doneTab.classList.remove("done");
                        })
                        : "";
                    for (var j = 0; j <= i; j++) {
                        tabButtons[j].classList.contains("active")
                            ? tabButtons[j].classList.remove("done")
                            : tabButtons[j].classList.add("done");
                    }
                });
            });
        });
    },
    methods: {
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>

        <b-row class="justify-content-center">
            <b-col lg="6">
                <b-card no-body>
                    <b-card-body>
                        <div class="text-center">
                            <b-row class="justify-content-center">
                                <b-col lg="9">
                                    <h4 class="mt-4 fw-semibold">KYC Verification</h4>
                                    <p class="text-muted mt-3">
                                        When you get your KYC verification process done, you have
                                        given the crypto exchange in this case, information.
                                    </p>
                                    <div class="mt-4">
                                        <b-button type="button" variant="primary" @click="modalShow = !modalShow">
                                            Click here for Verification
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>

                            <b-row class="justify-content-center mt-5 mb-2">
                                <b-col cols="8" sm="7">
                                    <img alt="" class="img-fluid" src="@/assets/images/verification-img.png"/>
                                </b-col>
                            </b-row>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>


        <b-modal v-model="modalShow" body-class="p-0" centered class="v-modal-custom" header-class="p-3"
                 hide-footer size="lg" title="Verify your Account" title-class="text-uppercase">
            <form action="#" class="checkout-tab">
                <div class="modal-body p-0">
                    <div class="step-arrow-nav">
                        <ul class="nav nav-pills nav-justified custom-nav" role="tablist">
                            <li class="nav-item" role="presentation">
                                <b-button id="pills-bill-info-tab" aria-controls="pills-bill-info" aria-selected="true"
                                          class="nav-link p-3 active"
                                          data-bs-target="#pills-bill-info" data-bs-toggle="pill" role="tab"
                                          type="button"
                                          variant="link">
                                    Personal Info
                                </b-button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <b-button id="pills-bill-address-tab" aria-controls="pills-bill-address"
                                          aria-selected="false"
                                          class="nav-link p-3"
                                          data-bs-target="#pills-bill-address" data-bs-toggle="pill" role="tab"
                                          type="button"
                                          variant="link">
                                    Bank Details
                                </b-button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <b-button id="pills-payment-tab" aria-controls="pills-payment" aria-selected="false"
                                          class="nav-link p-3"
                                          data-bs-target="#pills-payment" data-bs-toggle="pill" role="tab"
                                          type="button"
                                          variant="link">
                                    Document Verification
                                </b-button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <b-button id="pills-finish-tab" aria-controls="pills-finish" aria-selected="false"
                                          class="nav-link p-3"
                                          data-bs-target="#pills-finish" data-bs-toggle="pill" role="tab"
                                          type="button"
                                          variant="link">
                                    Verified
                                </b-button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="tab-content">
                        <div id="pills-bill-info" aria-labelledby="pills-bill-info-tab"
                             class="tab-pane fade show active"
                             role="tabpanel">
                            <b-row class="g-3">
                                <b-col lg="6">
                                    <div>
                                        <label class="form-label" for="firstName">First Name</label>
                                        <input id="firstName" class="form-control" placeholder="Enter your firstname"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div>
                                        <label class="form-label" for="lastName">Last Name</label>
                                        <input id="lastName" class="form-control" placeholder="Enter your lastname"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div>
                                        <label class="form-label" for="phoneNumber">Phone</label>
                                        <input id="phoneNumber" class="form-control"
                                               placeholder="Enter your phone number"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div>
                                        <label class="form-label" for="dateofBirth">Date of Birth</label>
                                        <flat-pickr v-model="date" class="form-control"
                                                    placeholder="Enter your date of birth"></flat-pickr>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div>
                                        <label class="form-label" for="emailID">Email ID</label>
                                        <input id="emailID" class="form-control" placeholder="Enter your email"
                                               type="email"/>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div>
                                        <label class="form-label" for="password">Password</label>
                                        <input id="password" class="form-control" placeholder="Enter your password"
                                               type="password"/>
                                    </div>
                                </b-col>
                                <b-col lg="4">
                                    <div>
                                        <label class="form-label" for="confirmPassword">Confirm Password</label>
                                        <input id="confirmPassword" class="form-control"
                                               placeholder="Enter your confirm password"
                                               type="password"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div>
                                        <label class="form-label" for="vatNo">VAT/TIN No.</label>
                                        <input id="vatNo" class="form-control" placeholder="Enter your VAT/TIN no"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div>
                                        <label class="form-label" for="serviceTax">Service Tax No.</label>
                                        <input id="serviceTax" class="form-control"
                                               placeholder="Enter your service tax no"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="12">
                                    <div>
                                        <label class="form-label" for="country-select">Country</label>

                                        <Multiselect v-model="value" :close-on-select="true" :create-option="true"
                                                     :options="[
                        { value: '', label: 'Select country' },
                        { value: 'Argentina', label: 'Argentina' },
                        { value: 'Belgium', label: 'Belgium' },
                        { value: 'Brazil', label: 'Brazil' },
                        { value: 'Colombia', label: 'Colombia' },
                        { value: 'Denmark', label: 'Denmark' },
                        { value: 'France', label: 'France' },
                        { value: 'Germany', label: 'Germany' },
                        { value: 'Mexico', label: 'Mexico' },
                        { value: 'Russia', label: 'Russia' },
                        { value: 'Spain', label: 'Spain' },
                        { value: 'Syria', label: 'Syria' },
                        {
                          value: 'United Kingdom',
                          label: 'United Kingdom',
                        },
                        {
                          value: 'United States of America',
                          label: 'United States of America',
                        },
                      ]"
                                                     :searchable="true" class="form-control"/>
                                    </div>
                                </b-col>
                                <b-col lg="12">
                                    <div class="d-flex align-items-start gap-3 mt-3">
                                        <b-button class="btn-label right ms-auto nexttab"
                                                  data-nexttab="pills-bill-address-tab"
                                                  type="button"
                                                  variant="primary">
                                            <i class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                            Next Step
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                        <div id="pills-bill-address" aria-labelledby="pills-bill-address-tab" class="tab-pane fade"
                             role="tabpanel">
                            <b-row>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="banknameInput">Bank Name</label>
                                        <input id="banknameInput" class="form-control"
                                               placeholder="Enter your bank name"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="branchInput">Branch</label>
                                        <input id="branchInput" class="form-control" placeholder="Branch" type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="12">
                                    <div class="mb-3">
                                        <label class="form-label" for="accountnameInput">Account Holder Name</label>
                                        <input id="accountnameInput" class="form-control"
                                               placeholder="Enter account holder name"
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="accountnumberInput">Account Number</label>
                                        <input id="accountnumberInput" class="form-control"
                                               placeholder="Enter account number"
                                               type="number"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div class="mb-3">
                                        <label class="form-label" for="ifscInput">IFSC</label>
                                        <input id="ifscInput" class="form-control" placeholder="IFSC" type="number"/>
                                    </div>
                                </b-col>
                                <b-col lg="12">
                                    <div class="hstack align-items-start gap-3 mt-4">
                                        <b-button class="btn-label previestab" data-previous="pills-bill-info-tab"
                                                  type="button"
                                                  variant="light">
                                            <i class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>Back to
                                            Personal Info
                                        </b-button>
                                        <b-button class="btn-label right ms-auto nexttab"
                                                  data-nexttab="pills-payment-tab"
                                                  type="button"
                                                  variant="primary">
                                            <i class="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>Next
                                            Step
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>

                        <div id="pills-payment" aria-labelledby="pills-payment-tab" class="tab-pane fade"
                             role="tabpanel">
                            <h5 class="mb-3">Choose Document Type</h5>

                            <div class="d-flex gap-2">
                                <div>
                                    <input id="passport" checked class="btn-check" name="choose-document" type="radio"/>
                                    <label class="btn btn-outline-info" for="passport">Passport</label>
                                </div>
                                <div>
                                    <input id="aadhar-card" class="btn-check" name="choose-document" type="radio"/>
                                    <label class="btn btn-outline-info" for="aadhar-card">Aadhar Card</label>
                                </div>
                                <div>
                                    <input id="pan-card" class="btn-check" name="choose-document" type="radio"/>
                                    <label class="btn btn-outline-info" for="pan-card">Pan Card</label>
                                </div>
                                <div>
                                    <input id="other" class="btn-check" name="choose-document" type="radio"/>
                                    <label class="btn btn-outline-info" for="other">Other</label>
                                </div>
                            </div>

                            <DropZone class="mb-2" @change="selectedFile" @drop.prevent="drop"/>
                            <div class="vstack gap-2">
                                <div v-for="(file, index) of files" :key="index" class="border rounded">
                                    <div class="d-flex align-items-center p-2">
                                        <div class="flex-grow-1">
                                            <div class="pt-1">
                                                <h5 class="fs-14 mb-1" data-dz-name="">
                                                    {{ file.name }}
                                                </h5>
                                                <p class="fs-13 text-muted mb-0" data-dz-size="">
                                                    <strong>{{ file.size / 1024 }}</strong> KB
                                                </p>
                                                <strong class="error text-danger" data-dz-errormessage=""></strong>
                                            </div>
                                        </div>
                                        <div class="flex-shrink-0 ms-3">
                                            <b-button data-dz-remove="" size="sm" variant="danger"
                                                      @click="deleteRecord">
                                                Delete
                                            </b-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex align-items-start gap-3 mt-4">
                                <b-button class="btn-label previestab" data-previous="pills-bill-address-tab"
                                          type="button"
                                          variant="light">
                                    <i class="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>Back to Bank
                                    Details
                                </b-button>
                                <b-button class="btn-label right ms-auto nexttab" data-nexttab="pills-finish-tab"
                                          type="button"
                                          variant="primary">
                                    <i class="ri-save-line label-icon align-middle fs-16 ms-2"></i>Submit
                                </b-button>
                            </div>
                        </div>

                        <div id="pills-finish" aria-labelledby="pills-finish-tab" class="tab-pane fade" role="tabpanel">
                            <b-row class="text-center justify-content-center">
                                <b-col lg="11">
                                    <div class="mb-4">
                                        <lottie :height="120" :options="defaultOptions"
                                                :width="120"
                                                colors="primary:#0ab39c,secondary:#405189"/>
                                    </div>
                                    <h5>Verification Completed</h5>
                                    <p class="text-muted mb-4">
                                        To stay verified, don't remove the meta tag form your
                                        site's home page. To avoid losing verification, you may
                                        want to add multiple methods form the
                                        <span class="fw-medium">Crypto > KYC Application.</span>
                                    </p>

                                    <div class="hstack justify-content-center gap-2">
                                        <b-button type="button" variant="ghost-success" @click="modalShow = false">
                                            Done
                                            <i class="ri-thumb-up-fill align-bottom me-1"></i>
                                        </b-button>
                                        <b-button type="button" variant="primary">
                                            <i class="ri-home-4-line align-bottom ms-1"></i> Back
                                            to Home
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </div>
            </form>
        </b-modal>
    </Layout>
</template>
