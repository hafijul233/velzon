<script>
import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import PageHeader from "@/components/page-header";

import animationData from "@/components/widgets/lupuorrc.json";
import Lottie from "@/components/widgets/lottie.vue";

export default {
    page: {
        title: "Checkout",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    data() {
        return {
            title: "Checkout",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Checkout",
                    active: true,
                },
            ],
            defaultOptions: {animationData: animationData},
        };
    },
    components: {
        Layout,
        PageHeader,
        lottie: Lottie,
    },
    mounted() {
        document.querySelectorAll(".checkout-tab").forEach((form) => {
            // next tab
            form.querySelectorAll(".nexttab").forEach((nextButton) => {
                var tabEl = form.querySelectorAll('button[data-bs-toggle="pill"]');
                tabEl.forEach((item) => {
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
                    var totalDone = prevButton
                        .closest("form")
                        .querySelectorAll(".custom-nav .done").length;
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
                        ? form
                            .querySelectorAll(".custom-nav .done")
                            .forEach((doneTab) => {
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
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col xl="8">
                <b-card no-body>
                    <b-card-body class="checkout-tab">
                        <b-form action="#">
                            <div class="step-arrow-nav mt-n3 mx-n3 mb-3">
                                <ul class="nav nav-pills nav-justified custom-nav" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button id="pills-bill-info-tab" aria-controls="pills-bill-info"
                                                aria-selected="true"
                                                class="nav-link fs-15 p-3 active" data-bs-target="#pills-bill-info"
                                                data-bs-toggle="pill"
                                                role="tab"
                                                type="button">
                                            <i class="
                          ri-user-2-line
                          fs-16
                          avatar-xs d-inline-flex align-items-center justify-content-center
                          bg-soft-primary
                          text-primary
                          rounded-circle
                          align-middle
                          me-2
                        "></i>
                                            Personal Info
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button id="pills-bill-address-tab" aria-controls="pills-bill-address"
                                                aria-selected="false"
                                                class="nav-link fs-15 p-3" data-bs-target="#pills-bill-address"
                                                data-bs-toggle="pill"
                                                role="tab"
                                                type="button">
                                            <i class="
                          ri-truck-line
                          fs-16
                          avatar-xs d-inline-flex align-items-center justify-content-center
                          bg-soft-primary
                          text-primary
                          rounded-circle
                          align-middle
                          me-2
                        "></i>
                                            Shipping Info
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button id="pills-payment-tab" aria-controls="pills-payment"
                                                aria-selected="false"
                                                class="nav-link fs-15 p-3" data-bs-target="#pills-payment"
                                                data-bs-toggle="pill"
                                                role="tab"
                                                type="button">
                                            <i class="
                          ri-bank-card-line
                          fs-16
                          avatar-xs d-inline-flex align-items-center justify-content-center
                          bg-soft-primary
                          text-primary
                          rounded-circle
                          align-middle
                          me-2
                        "></i>
                                            Payment Info
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button id="pills-finish-tab" aria-controls="pills-finish" aria-selected="false"
                                                class="nav-link fs-15 p-3" data-bs-target="#pills-finish"
                                                data-bs-toggle="pill"
                                                role="tab"
                                                type="button">
                                            <i class="
                          ri-checkbox-circle-line
                          fs-16
                          avatar-xs d-inline-flex align-items-center justify-content-center
                          bg-soft-primary
                          text-primary
                          rounded-circle
                          align-middle
                          me-2
                        "></i>Finish
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <div class="tab-content">
                                <div id="pills-bill-info" aria-labelledby="pills-bill-info-tab"
                                     class="tab-pane fade show active"
                                     role="tabpanel">
                                    <div>
                                        <h5 class="mb-1">Billing Information</h5>
                                        <p class="text-muted mb-4">
                                            Please fill all information below
                                        </p>
                                    </div>

                                    <div>
                                        <b-row>
                                            <b-col sm="6">
                                                <div class="mb-3">
                                                    <label class="form-label" for="billinginfo-firstName">First
                                                        Name</label>
                                                    <input id="billinginfo-firstName" class="form-control"
                                                           placeholder="Enter first name"
                                                           type="text" value=""/>
                                                </div>
                                            </b-col>

                                            <b-col sm="6">
                                                <div class="mb-3">
                                                    <label class="form-label" for="billinginfo-lastName">Last
                                                        Name</label>
                                                    <input id="billinginfo-lastName" class="form-control"
                                                           placeholder="Enter last name"
                                                           type="text" value=""/>
                                                </div>
                                            </b-col>
                                        </b-row>

                                        <b-row>
                                            <b-col sm="6">
                                                <div class="mb-3">
                                                    <label class="form-label" for="billinginfo-email">Email
                                                        <span class="text-muted">(Optional)</span></label>
                                                    <input id="billinginfo-email" class="form-control"
                                                           placeholder="Enter email"
                                                           type="email"/>
                                                </div>
                                            </b-col>

                                            <b-col sm="6">
                                                <div class="mb-3">
                                                    <label class="form-label" for="billinginfo-phone">Phone</label>
                                                    <input id="billinginfo-phone" class="form-control"
                                                           placeholder="Enter phone no."
                                                           type="text"/>
                                                </div>
                                            </b-col>
                                        </b-row>

                                        <div class="mb-3">
                                            <label class="form-label" for="billinginfo-address">Address</label>
                                            <textarea id="billinginfo-address" class="form-control"
                                                      placeholder="Enter address"
                                                      rows="3"></textarea>
                                        </div>

                                        <b-row>
                                            <b-col md="4">
                                                <div class="mb-3">
                                                    <label class="form-label" for="country">Country</label>
                                                    <select id="country" class="form-select" data-plugin="choices">
                                                        <option value="">Select Country...</option>
                                                        <option selected>United States</option>
                                                    </select>
                                                </div>
                                            </b-col>

                                            <b-col md="4">
                                                <div class="mb-3">
                                                    <label class="form-label" for="state">State</label>
                                                    <select id="state" class="form-select" data-plugin="choices">
                                                        <option value="">Select State...</option>
                                                        <option value="Alabama">Alabama</option>
                                                        <option value="Alaska">Alaska</option>
                                                        <option value="American Samoa">
                                                            American Samoa
                                                        </option>
                                                        <option selected value="California">
                                                            California
                                                        </option>
                                                        <option value="Colorado">Colorado</option>
                                                        <option value="District Of Columbia">
                                                            District Of Columbia
                                                        </option>
                                                        <option value="Florida">Florida</option>
                                                        <option value="Georgia">Georgia</option>
                                                        <option value="Guam">Guam</option>
                                                        <option value="Hawaii">Hawaii</option>
                                                        <option value="Idaho">Idaho</option>
                                                        <option value="Kansas">Kansas</option>
                                                        <option value="Louisiana">Louisiana</option>
                                                        <option value="Montana">Montana</option>
                                                        <option value="Nevada">Nevada</option>
                                                        <option value="New Jersey">New Jersey</option>
                                                        <option value="New Mexico">New Mexico</option>
                                                        <option value="New York">New York</option>
                                                    </select>
                                                </div>
                                            </b-col>

                                            <b-col md="4">
                                                <div class="mb-3">
                                                    <label class="form-label" for="zip">Zip Code</label>
                                                    <input id="zip" class="form-control" placeholder="Enter zip code"
                                                           type="text"/>
                                                </div>
                                            </b-col>
                                        </b-row>

                                        <div class="d-flex align-items-start gap-3 mt-3">
                                            <b-button class="btn-label right ms-auto nexttab"
                                                      data-nexttab="pills-bill-address-tab"
                                                      type="button"
                                                      variant="primary">
                                                <i class="
                            ri-truck-line
                            label-icon
                            align-middle
                            fs-16
                            ms-2
                          "></i>Proceed to Shipping
                                            </b-button>
                                        </div>
                                    </div>
                                </div>

                                <div id="pills-bill-address" aria-labelledby="pills-bill-address-tab"
                                     class="tab-pane fade"
                                     role="tabpanel">
                                    <div>
                                        <h5 class="mb-1">Shipping Information</h5>
                                        <p class="text-muted mb-4">
                                            Please fill all information below
                                        </p>
                                    </div>

                                    <div class="mt-4">
                                        <div class="d-flex align-items-center mb-2">
                                            <div class="flex-grow-1">
                                                <h5 class="fs-14 mb-0">Saved Address</h5>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <b-button class="mb-3" size="sm" type="button" variant="success">
                                                    Add Address
                                                </b-button>
                                            </div>
                                        </div>
                                        <b-row class="gy-3">
                                            <b-col lg="4" sm="6">
                                                <div class="form-check card-radio">
                                                    <input id="shippingAddress01" checked class="form-check-input"
                                                           name="shippingAddress"
                                                           type="radio"/>
                                                    <label class="form-check-label" for="shippingAddress01">
                            <span class="
                                mb-4
                                fw-semibold
                                d-block
                                text-muted text-uppercase
                              ">Home Address</span>

                                                        <span class="fs-14 mb-2 d-block">Marcus Alfaro</span>
                                                        <span class="
                                text-muted
                                fw-normal
                                text-wrap
                                mb-1
                                d-block
                              ">4739 Bubby Drive Austin, TX 78729</span>
                                                        <span
                                                            class="text-muted fw-normal d-block">Mo. 012-345-6789</span>
                                                    </label>
                                                </div>
                                                <div class="
                            d-flex
                            flex-wrap
                            p-2
                            py-1
                            bg-light
                            rounded-bottom
                            border
                            mt-n1
                          ">
                                                    <div>
                                                        <b-link class="d-block text-body p-1 px-2" href="#">
                                                            <i class="ri-pencil-fill text-muted align-bottom me-1"></i>
                                                            Edit
                                                        </b-link>
                                                    </div>
                                                    <div>
                                                        <b-link class="d-block text-body p-1 px-2" href="#">
                                                            <i class="ri-delete-bin-fill text-muted align-bottom me-1"></i>
                                                            Remove
                                                        </b-link>
                                                    </div>
                                                </div>
                                            </b-col>
                                            <b-col lg="4" sm="6">
                                                <div class="form-check card-radio">
                                                    <input id="shippingAddress02" class="form-check-input"
                                                           name="shippingAddress"
                                                           type="radio"/>
                                                    <label class="form-check-label" for="shippingAddress02">
                            <span class="
                                mb-4
                                fw-semibold
                                d-block
                                text-muted text-uppercase
                              ">Office Address</span>

                                                        <span class="fs-14 mb-2 d-block">James Honda</span>
                                                        <span class="
                                text-muted
                                fw-normal
                                text-wrap
                                mb-1
                                d-block
                              ">1246 Virgil Street Pensacola, FL 32501
                            </span>
                                                        <span
                                                            class="text-muted fw-normal d-block">Mo. 012-345-6789</span>
                                                    </label>
                                                </div>
                                                <div class="
                            d-flex
                            flex-wrap
                            p-2
                            py-1
                            bg-light
                            rounded-bottom
                            border
                            mt-n1
                          ">
                                                    <div>
                                                        <b-link class="d-block text-body p-1 px-2" href="#">
                                                            <i class=" ri-pencil-fill text-muted align-bottom me-1"></i>
                                                            Edit
                                                        </b-link>
                                                    </div>
                                                    <div>
                                                        <b-link class="d-block text-body p-1 px-2" href="#"><i
                                                            class="ri-delete-bin-fill text-muted align-bottom me-1"></i>
                                                            Remove
                                                        </b-link>
                                                    </div>
                                                </div>
                                            </b-col>
                                        </b-row>

                                        <div class="mt-4">
                                            <h5 class="fs-14 mb-3">Shipping Method</h5>

                                            <b-row class="g-4">
                                                <b-col lg="6">
                                                    <div class="form-check card-radio">
                                                        <input id="shippingMethod01" checked class="form-check-input"
                                                               name="shippingMethod"
                                                               type="radio"/>
                                                        <label class="form-check-label" for="shippingMethod01">
                              <span class="
                                  fs-20
                                  float-end
                                  mt-2
                                  text-wrap
                                  d-block
                                  fw-semibold
                                ">Free</span>
                                                            <span
                                                                class="fs-14 mb-1 text-wrap d-block">Free Delivery</span>
                                                            <span class="text-muted fw-normal text-wrap d-block">Expected Delivery 3 to 5 Days</span>
                                                        </label>
                                                    </div>
                                                </b-col>
                                                <b-col lg="6">
                                                    <div class="form-check card-radio">
                                                        <input id="shippingMethod02" checked class="form-check-input"
                                                               name="shippingMethod"
                                                               type="radio"/>
                                                        <label class="form-check-label" for="shippingMethod02">
                              <span class="
                                  fs-20
                                  float-end
                                  mt-2
                                  text-wrap
                                  d-block
                                  fw-semibold
                                ">$24.99</span>
                                                            <span
                                                                class="fs-14 mb-1 text-wrap d-block">Express Delivery</span>
                                                            <span class="text-muted fw-normal text-wrap d-block">Delivery within 24hrs.</span>
                                                        </label>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <b-button class="btn-label previestab" data-previous="pills-bill-info-tab"
                                                  type="button"
                                                  variant="light">
                                            <i class="
                          ri-arrow-left-line
                          label-icon
                          align-middle
                          fs-16
                          me-2
                        "></i>Back to Personal Info
                                        </b-button>
                                        <b-button class="btn-label right ms-auto nexttab"
                                                  data-nexttab="pills-payment-tab"
                                                  type="button"
                                                  variant="primary">
                                            <i class="
                          ri-bank-card-line
                          label-icon
                          align-middle
                          fs-16
                          ms-2
                        "></i>Continue to Payment
                                        </b-button>
                                    </div>
                                </div>

                                <div id="pills-payment" aria-labelledby="pills-payment-tab" class="tab-pane fade"
                                     role="tabpanel">
                                    <div>
                                        <h5 class="mb-1">Payment Selection</h5>
                                        <p class="text-muted mb-4">
                                            Please select and enter your billing information
                                        </p>
                                    </div>

                                    <b-row class="g-4">
                                        <b-col lg="4" sm="6">
                                            <div aria-controls="paymentmethodCollapse" aria-expanded="false"
                                                 data-bs-target="#paymentmethodCollapse.show"
                                                 data-bs-toggle="collapse">
                                                <div class="form-check card-radio">
                                                    <input id="paymentMethod01" class="form-check-input"
                                                           name="paymentMethod"
                                                           type="radio"/>
                                                    <label class="form-check-label" for="paymentMethod01">
                                                        <span class="fs-16 text-muted me-2"><i
                                                            class="ri-paypal-fill align-bottom"></i></span>
                                                        <span class="fs-14 text-wrap">Paypal</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </b-col>
                                        <b-col lg="4" sm="6">
                                            <div aria-controls="paymentmethodCollapse" aria-expanded="true"
                                                 data-bs-target="#paymentmethodCollapse"
                                                 data-bs-toggle="collapse">
                                                <div class="form-check card-radio">
                                                    <input id="paymentMethod02" checked class="form-check-input"
                                                           name="paymentMethod"
                                                           type="radio"/>
                                                    <label class="form-check-label" for="paymentMethod02">
                                                        <span class="fs-16 text-muted me-2"><i
                                                            class="ri-bank-card-fill align-bottom"></i></span>
                                                        <span class="fs-14 text-wrap">Credit / Debit Card</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </b-col>

                                        <b-col lg="4" sm="6">
                                            <div aria-controls="paymentmethodCollapse" aria-expanded="false"
                                                 data-bs-target="#paymentmethodCollapse.show"
                                                 data-bs-toggle="collapse">
                                                <div class="form-check card-radio">
                                                    <input id="paymentMethod03" class="form-check-input"
                                                           name="paymentMethod"
                                                           type="radio"/>
                                                    <label class="form-check-label" for="paymentMethod03">
                            <span class="fs-16 text-muted me-2"><i
                                class="ri-money-dollar-box-fill align-bottom"></i></span>
                                                        <span class="fs-14 text-wrap">Cash on Delivery</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>

                                    <div id="paymentmethodCollapse" class="collapse show">
                                        <b-card class="p-4 border shadow-none mb-0 mt-4" no-body>
                                            <b-row class="gy-3">
                                                <b-col md="12">
                                                    <label class="form-label" for="cc-name">Name on card</label>
                                                    <input id="cc-name" class="form-control" placeholder="Enter name"
                                                           type="text"/>
                                                    <small class="text-muted">Full name as displayed on card</small>
                                                </b-col>

                                                <b-col md="6">
                                                    <label class="form-label" for="cc-number">Credit card number</label>
                                                    <input id="cc-number" class="form-control"
                                                           placeholder="xxxx xxxx xxxx xxxx"
                                                           type="text"/>
                                                </b-col>

                                                <b-col md="3">
                                                    <label class="form-label" for="cc-expiration">Expiration</label>
                                                    <input id="cc-expiration" class="form-control" placeholder="MM/YY"
                                                           type="text"/>
                                                </b-col>

                                                <b-col md="3">
                                                    <label class="form-label" for="cc-cvv">CVV</label>
                                                    <input id="cc-cvv" class="form-control" placeholder="xxx"
                                                           type="text"/>
                                                </b-col>
                                            </b-row>
                                        </b-card>
                                        <div class="text-muted mt-2 fst-italic">
                                            <i class="text-muted icon-xs" data-feather="lock"></i>
                                            Your transaction is secured with SSL encryption
                                        </div>
                                    </div>

                                    <div class="d-flex align-items-start gap-3 mt-4">
                                        <b-button class="btn-label previestab" data-previous="pills-bill-address-tab"
                                                  type="button"
                                                  variant="light">
                                            <i class="
                          ri-arrow-left-line
                          label-icon
                          align-middle
                          fs-16
                          me-2
                        "></i>Back to Shipping
                                        </b-button>
                                        <b-button class="btn-label right ms-auto nexttab"
                                                  data-nexttab="pills-finish-tab"
                                                  type="button"
                                                  variant="primary">
                                            <i class="
                          ri-shopping-basket-line
                          label-icon
                          align-middle
                          fs-16
                          ms-2
                        "></i>Complete Order
                                        </b-button>
                                    </div>
                                </div>

                                <div id="pills-finish" aria-labelledby="pills-finish-tab" class="tab-pane fade"
                                     role="tabpanel">
                                    <div class="text-center py-5">
                                        <div class="mb-4">
                                            <lottie :height="120" :options="defaultOptions"
                                                    :width="120"
                                                    colors="primary:#0ab39c,secondary:#405189"/>
                                        </div>
                                        <h5>Thank you ! Your Order is Completed !</h5>
                                        <p class="text-muted">
                                            You will receive an order confirmation email with details
                                            of your order.
                                        </p>

                                        <h3 class="fw-semibold">
                                            Order ID:
                                            <router-link class="text-decoration-underline"
                                                         to="/ecommerce/order-details">VZ2451
                                            </router-link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </b-form>
                    </b-card-body>
                </b-card>
            </b-col>

            <b-col xl="4">
                <b-card no-body>
                    <b-card-header>
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <h5 class="card-title mb-0">Order Summary</h5>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body>
                        <div class="table-responsive table-card">
                            <table class="table table-borderless align-middle mb-0">
                                <thead class="table-light text-muted">
                                <tr>
                                    <th scope="col" style="width: 90px">Product</th>
                                    <th scope="col">Product Info</th>
                                    <th class="text-end" scope="col">Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>
                                        <div class="avatar-md bg-light rounded p-1">
                                            <img alt="" class="img-fluid d-block"
                                                 src="@/assets/images/products/img-8.png"/>
                                        </div>
                                    </td>
                                    <td>
                                        <h5 class="fs-14">
                                            <router-link class="text-dark" to="/ecommerce/product-details">Sweatshirt
                                                for Men (Pink)
                                            </router-link>
                                        </h5>
                                        <p class="text-muted mb-0">$ 119.99 x 2</p>
                                    </td>
                                    <td class="text-end">$ 239.98</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="avatar-md bg-light rounded p-1">
                                            <img alt="" class="img-fluid d-block"
                                                 src="@/assets/images/products/img-7.png"/>
                                        </div>
                                    </td>
                                    <td>
                                        <h5 class="fs-14">
                                            <router-link class="text-dark" to="/ecommerce/product-details">Noise Evolve
                                                Smartwatch
                                            </router-link>
                                        </h5>
                                        <p class="text-muted mb-0">$ 94.99 x 1</p>
                                    </td>
                                    <td class="text-end">$ 94.99</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="avatar-md bg-light rounded p-1">
                                            <img alt="" class="img-fluid d-block"
                                                 src="@/assets/images/products/img-3.png"/>
                                        </div>
                                    </td>
                                    <td>
                                        <h5 class="fs-14">
                                            <router-link class="text-dark" to="/ecommerce/product-details">350 ml Glass
                                                Grocery Container
                                            </router-link>
                                        </h5>
                                        <p class="text-muted mb-0">$ 24.99 x 1</p>
                                    </td>
                                    <td class="text-end">$ 24.99</td>
                                </tr>
                                <tr>
                                    <td class="fw-semibold" colspan="2">Sub Total :</td>
                                    <td class="fw-semibold text-end">$ 359.96</td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        Discount <span class="text-muted">(VELZON15)</span> :
                                    </td>
                                    <td class="text-end">- $ 50.00</td>
                                </tr>
                                <tr>
                                    <td colspan="2">Shipping Charge :</td>
                                    <td class="text-end">$ 24.99</td>
                                </tr>
                                <tr>
                                    <td colspan="2">Estimated Tax (12%):</td>
                                    <td class="text-end">$ 18.20</td>
                                </tr>
                                <tr class="table-active">
                                    <th colspan="2">Total (USD) :</th>
                                    <td class="text-end">
                                        <span class="fw-semibold"> $353.15 </span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
