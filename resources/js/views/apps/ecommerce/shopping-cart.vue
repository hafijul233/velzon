<script>
import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import PageHeader from "@/components/page-header";

import animationData from "@/components/widgets/nkmsrxys.json";
import animationData1 from "@/components/widgets/gsqxdxog.json";

import Lottie from "@/components/widgets/lottie.vue";

export default {
    page: {
        title: "Shopping Cart",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    components: {
        Layout,
        PageHeader,
        lottie: Lottie,
    },
    data() {
        return {
            title: "Shopping Cart",
            items: [
                {
                    text: "Ecommerce",
                    href: "/",
                },
                {
                    text: "Shopping Cart",
                    active: true,
                },
            ],
            removeItemModal: false,
            taxRate: 0.125,
            shippingRate: 65.0,
            discountRate: 0.15,
            quantity: "",
            currencySign: "$",
            defaultOptions: {animationData: animationData},
            defaultOptions1: {animationData: animationData1},
            value: 2,
            value1: 1,
            value2: 1,
        };
    },

    mounted() {
        setTimeout(() => {
            this.isData();
        }, 100);
    },
    methods: {
        deleteProduct() {
            this.removeItemModal = true;
            if (document.getElementById("removeItemModal")) {
                document.getElementById("removeItemModal")
                addEventListener("click", (e) => {
                    document
                        .getElementById("remove-product")
                        .addEventListener("click", () => {
                            if (e.target.closest('.product')) {
                                e.target.closest('.product').remove();
                            }
                            this.recalculateCart();
                            this.removeItemModal = false;
                        });
                });
            }
        },

        isData() {
            const plus = document.getElementsByClassName("plus");
            const minus = document.getElementsByClassName("minus");
            var product = document.getElementsByClassName("product");

            if (plus) {
                Array.prototype.forEach.call(plus, (e) => {
                    e.addEventListener("click", (event) => {

                        let par = event.target.closest(".input-step");

                        par.getElementsByClassName("product-quantity")[0].value++;
                        Array.prototype.forEach.call(product, () => {
                            this.updateQuantity(event.target);
                        });
                    });
                });
            }

            if (minus) {
                Array.prototype.forEach.call(minus, (e) => {
                    e.addEventListener("click", (event) => {
                        let par = event.target.closest(".input-step");
                        if (par.getElementsByClassName("product-quantity")[0].value > 0)
                            par.getElementsByClassName("product-quantity")[0].value--;
                        Array.prototype.forEach.call(product, () => {
                            this.updateQuantity(event.target);
                        });
                    });
                });
            }
        },

        updateQuantity(quantityInput) {
            var productRow = quantityInput.closest(".product");
            var price;

            Array.prototype.forEach.call(
                productRow.getElementsByClassName("product-price"),
                (e) => {
                    price = parseFloat(e.innerHTML);
                }
            );

            if (
                quantityInput.previousElementSibling &&
                quantityInput.previousElementSibling.classList.contains(
                    "product-quantity"
                )
            ) {
                this.quantity = quantityInput.previousElementSibling.value;
            } else if (
                quantityInput.nextElementSibling &&
                quantityInput.nextElementSibling.classList.contains("product-quantity")
            ) {
                this.quantity = quantityInput.nextElementSibling.value;
            }
            var linePrice = price * this.quantity;
            /* Update line price display and recalc cart totals */
            Array.prototype.forEach.call(
                productRow.getElementsByClassName("product-line-price"),
                (e) => {
                    e.innerHTML = linePrice.toFixed(2);
                    this.recalculateCart();
                }
            );
        },
        recalculateCart() {
            var subtotal = 0;

            Array.prototype.forEach.call(
                document.getElementsByClassName("product"),
                (item) => {
                    Array.prototype.forEach.call(
                        item.getElementsByClassName("product-line-price"),
                        (e) => {
                            subtotal += parseFloat(e.innerHTML);
                        }
                    );
                }
            );

            /* Calculate totals */
            var tax = subtotal * this.taxRate;
            var discount = subtotal * this.discountRate;

            var shipping = subtotal > 0 ? this.shippingRate : 0;
            var total = subtotal + tax + shipping - discount;

            document.getElementById("cart-subtotal").innerHTML =
                this.currencySign + subtotal.toFixed(2);
            document.getElementById("cart-tax").innerHTML =
                this.currencySign + tax.toFixed(2);
            document.getElementById("cart-shipping").innerHTML =
                this.currencySign + shipping.toFixed(2);
            document.getElementById("cart-total").innerHTML =
                this.currencySign + total.toFixed(2);
            document.getElementById("cart-discount").innerHTML =
                "-" + this.currencySign + discount.toFixed(2);
        },
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row class="mb-3">
            <b-col xl="8">
                <b-row class="align-items-center gy-3 mb-3">
                    <b-col sm>
                        <div>
                            <h5 class="fs-14 mb-0">Your Cart (03 items)</h5>
                        </div>
                    </b-col>
                    <b-col sm="auto">
                        <router-link class="link-primary text-decoration-underline" to="/ecommerce/products">Continue
                            Shopping
                        </router-link>
                    </b-col>
                </b-row>

                <b-card class="product" no-body>
                    <b-card-body>
                        <b-row class="gy-3">
                            <b-col sm="auto">
                                <div class="avatar-lg bg-light rounded p-1">
                                    <img alt="" class="img-fluid d-block" src="@/assets/images/products/img-8.png"/>
                                </div>
                            </b-col>
                            <b-col sm>
                                <h5 class="fs-14 text-truncate">
                                    <router-link class="text-dark" to="/ecommerce/product-details">Sweatshirt for Men
                                        (Pink)
                                    </router-link>
                                </h5>
                                <ul class="list-inline text-muted">
                                    <li class="list-inline-item">
                                        Color : <span class="fw-medium">Pink</span>
                                    </li>
                                    <li class="list-inline-item">
                                        Size : <span class="fw-medium">M</span>
                                    </li>
                                </ul>

                                <div class="input-step">
                                    <button class="minus" type="button">–</button>
                                    <input v-model="value" class="product-quantity" max="100" min="0" type="number"/>
                                    <button class="plus" type="button">+</button>
                                </div>
                            </b-col>
                            <b-col sm="auto">
                                <div class="text-lg-end">
                                    <p class="text-muted mb-1">Item Price:</p>
                                    <h5 class="fs-14">
                                        $<span id="ticket_price" class="product-price">119.99</span>
                                    </h5>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-footer>
                        <b-row class="align-items-center gy-3">
                            <b-col sm>
                                <div class="d-flex flex-wrap my-n1">
                                    <div>
                                        <b-link class="d-block text-body p-1 px-2" @click="deleteProduct">
                                            <i class="ri-delete-bin-fill text-muted align-bottom me-1"></i>
                                            Remove
                                        </b-link>
                                    </div>
                                    <div>
                                        <b-link class="d-block text-body p-1 px-2" href="#"><i
                                            class="ri-star-fill text-muted align-bottom me-1"></i>
                                            Add Wishlist
                                        </b-link>
                                    </div>
                                </div>
                            </b-col>
                            <b-col sm="auto">
                                <div class="d-flex align-items-center gap-2 text-muted">
                                    <div>Total :</div>
                                    <h5 class="fs-14 mb-0">
                                        $<span class="product-line-price">239.98</span>
                                    </h5>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-footer>
                </b-card>

                <b-card class="product" no-body>
                    <b-card-body>
                        <b-row class="gy-3">
                            <b-col sm="auto">
                                <div class="avatar-lg bg-light rounded p-1">
                                    <img alt="" class="img-fluid d-block" src="@/assets/images/products/img-7.png"/>
                                </div>
                            </b-col>
                            <b-col sm>
                                <h5 class="fs-14 text-truncate">
                                    <router-link class="text-dark" to="/ecommerce/product-details">Noise NoiseFit Endure
                                        Smart Watch
                                    </router-link>
                                </h5>

                                <ul class="list-inline text-muted">
                                    <li class="list-inline-item">
                                        Color : <span class="fw-medium">Black</span>
                                    </li>
                                    <li class="list-inline-item">
                                        Size : <span class="fw-medium">32.5mm</span>
                                    </li>
                                </ul>

                                <div class="input-step">
                                    <button class="minus" type="button">–</button>
                                    <input v-model="value1" class="product-quantity" max="100" min="0" type="number"/>
                                    <button class="plus" type="button">+</button>
                                </div>
                            </b-col>
                            <b-col sm="auto">
                                <div class="text-lg-end">
                                    <p class="text-muted mb-1">Item Price:</p>
                                    <h5 class="fs-14">
                                        $<span class="product-price">94.99</span>
                                    </h5>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-footer>
                        <b-row class="align-items-center gy-3">
                            <b-col sm>
                                <div class="d-flex flex-wrap my-n1">
                                    <div>
                                        <b-link class="d-block text-body p-1 px-2" @click="deleteProduct">
                                            <i class="ri-delete-bin-fill text-muted align-bottom me-1"></i>
                                            Remove
                                        </b-link>
                                    </div>
                                    <div>
                                        <b-link class="d-block text-body p-1 px-2" href="#"><i
                                            class="ri-star-fill text-muted align-bottom me-1"></i>
                                            Add Wishlist
                                        </b-link>
                                    </div>
                                </div>
                            </b-col>
                            <b-col sm="auto">
                                <div class="d-flex align-items-center gap-2 text-muted">
                                    <div>Total :</div>
                                    <h5 class="fs-14 mb-0">
                                        $<span class="product-line-price">94.99</span>
                                    </h5>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-footer>
                </b-card>

                <b-card class="product" no-body>
                    <b-card-body>
                        <b-row class="gy-3">
                            <b-col sm="auto">
                                <div class="avatar-lg bg-light rounded p-1">
                                    <img alt="" class="img-fluid d-block" src="@/assets/images/products/img-3.png"/>
                                </div>
                            </b-col>
                            <b-col sm>
                                <h5 class="fs-14 text-truncate">
                                    <router-link class="text-dark" to="/ecommerce/product-details">350 ml Glass Grocery
                                        Container
                                    </router-link>
                                </h5>

                                <ul class="list-inline text-muted">
                                    <li class="list-inline-item">
                                        Color : <span class="fw-medium">White</span>
                                    </li>
                                    <li class="list-inline-item">
                                        Size : <span class="fw-medium">350 ml</span>
                                    </li>
                                </ul>

                                <div class="input-step">
                                    <button class="minus" type="button">–</button>
                                    <input v-model="value2" class="product-quantity" max="100" min="0" type="number"/>
                                    <button class="plus" type="button">+</button>
                                </div>
                            </b-col>
                            <b-col sm="auto">
                                <div class="text-lg-end">
                                    <p class="text-muted mb-1">Item Price:</p>
                                    <h5 class="fs-14">
                                        $<span class="product-price">24.99</span>
                                    </h5>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                    <b-card-footer>
                        <b-row class="align-items-center gy-3">
                            <b-col sm>
                                <div class="d-flex flex-wrap my-n1">
                                    <div>
                                        <b-link class="d-block text-body p-1 px-2" @click="deleteProduct">
                                            <i class="ri-delete-bin-fill text-muted align-bottom me-1"></i>
                                            Remove
                                        </b-link>
                                    </div>
                                    <div>
                                        <b-link class="d-block text-body p-1 px-2" href="#"><i
                                            class="ri-star-fill text-muted align-bottom me-1"></i>
                                            Add Wishlist
                                        </b-link>
                                    </div>
                                </div>
                            </b-col>
                            <b-col sm="auto">
                                <div class="d-flex align-items-center gap-2 text-muted">
                                    <div>Total :</div>
                                    <h5 class="fs-14 mb-0">
                                        $<span class="product-line-price">24.99</span>
                                    </h5>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-footer>
                </b-card>

                <div class="text-end mb-4">
                    <router-link class="btn btn-success btn-label right ms-auto" to="/ecommerce/checkout"><i
                        class="ri-arrow-right-line label-icon align-bottom fs-16 ms-2"></i>
                        Checkout
                    </router-link>
                </div>
            </b-col>

            <b-col xl="4">
                <div class="sticky-side-div">
                    <b-card no-body>
                        <b-card-header class="border-bottom-dashed">
                            <h5 class="card-title mb-0">Order Summary</h5>
                        </b-card-header>
                        <b-card-header class="bg-soft-light border-bottom-dashed">
                            <div class="text-center">
                                <h6 class="mb-2">
                                    Have a <span class="fw-semibold">promo</span> code ?
                                </h6>
                            </div>
                            <div class="hstack gap-3 px-3 mx-n3">
                                <input aria-label="Add Promo Code here..." class="form-control me-auto"
                                       placeholder="Enter coupon code"
                                       type="text"/>
                                <b-button class="w-xs" type="button" variant="success">
                                    Apply
                                </b-button>
                            </div>
                        </b-card-header>
                        <b-card-body class="pt-2">
                            <div class="table-responsive">
                                <table class="table table-borderless mb-0">
                                    <tbody>
                                    <tr>
                                        <td>Sub Total :</td>
                                        <td id="cart-subtotal" class="text-end">$ 359.96</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Discount <span class="text-muted">(VELZON15)</span> :
                                        </td>
                                        <td id="cart-discount" class="text-end">- $ 53.99</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Charge :</td>
                                        <td id="cart-shipping" class="text-end">$ 65.00</td>
                                    </tr>
                                    <tr>
                                        <td>Estimated Tax (12.5%) :</td>
                                        <td id="cart-tax" class="text-end">$ 44.99</td>
                                    </tr>
                                    <tr class="table-active">
                                        <th>Total (USD) :</th>
                                        <td class="text-end">
                        <span id="cart-total" class="fw-semibold">
                          $415.96
                        </span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </b-card-body>
                    </b-card>

                    <b-alert class="border-dashed" role="alert" show variant="danger">
                        <div class="d-flex align-items-center">
                            <lottie :height="80" :options="defaultOptions" :width="80"
                                    colors="primary:#121331,secondary:#f06548"
                                    style="margin:0px;"/>
                            <div class="ms-2">
                                <h5 class="fs-14 text-danger fw-semibold">
                                    Buying for a loved one?
                                </h5>
                                <p class="text-black mb-1">
                                    Gift wrap and personalised message on card, <br/>Only for
                                    <span class="fw-semibold">$9.99</span> USD
                                </p>
                                <button class="btn ps-0 btn-sm btn-link text-danger text-uppercase" type="button">
                                    Add Gift Wrap
                                </button>
                            </div>
                        </div>
                    </b-alert>
                </div>
            </b-col>
        </b-row>


        <!-- edit customer modal  -->
        <b-modal id="removeItemModal" v-model="removeItemModal" centered class="v-modal-custom" hide-footer
                 modal-class="zoomIn" no-close-on-backdrop title="Update Customer">
            <div class="mt-2 text-center">
                <lottie :height="100" :options="defaultOptions" :width="100"
                        colors="primary:#121331,secondary:#f06548"/>
                <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                    <h4>Are you Sure ?</h4>
                    <p class="text-muted mx-4 mb-0">
                        Are you Sure You want to Remove this Product ?
                    </p>
                </div>
            </div>
            <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                <b-button class="w-sm" type="button" variant="light" @click="removeItemModal = false">
                    Close
                </b-button>
                <b-button id="remove-product" class="w-sm" type="button" variant="danger" @click="deleteProduct">
                    Yes, Delete It!
                </b-button>
            </div>
        </b-modal>
    </Layout>
</template>
