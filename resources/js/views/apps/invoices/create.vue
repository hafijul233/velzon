<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import axios from 'axios';
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

export default {
    page: {
        title: "Create Invoice",
        meta: [{
            name: "description",
            content: appConfig.description
        }],
    },
    data() {
        return {
            title: "Create Invoice",
            items: [{
                text: "Velzon",
                href: "/",
            },
                {
                    text: "Create Invoice",
                    active: true,
                },
            ],
            value: null,
            paymentvalue: null,
            value1: null,
            config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: "M j, Y",
                altInput: true,
                enableTime: true,
            },
            paymentSign: "$",
            date: null,
            count: 1,
            taxRate: 0.125,
            shippingRate: 65.0,
            discountRate: 0.15,
            inputVal: 0,
            inputVal1: 5,
            products: [],
            allproductdata: [],
            productvalue: null,
            newproductvalue: ['', ''],
            productids: [],
        };
    },
    components: {
        Layout,
        PageHeader,
        Multiselect,
        flatPickr,
    },
    methods: {
        selectedv(val) {
            if (val) {
                let result = this.allproductdata.findIndex(o => o.name == val);
                var darray = JSON.parse(JSON.stringify(this.newproductvalue));
                for (var i = 1; i <= darray.length; i++) {
                    if (darray[i - 1] == val) {
                        document.getElementById('productprice' + i).value = this.allproductdata[result].price;
                    }
                }
                this.productids.push(this.allproductdata[result]._id);
            }
        },
        createinvoice() {
            var data = {
                company_address: document.getElementById('companyAddress').value,
                postalcode: document.getElementById('companyaddpostalcode').value,
                registration_no: document.getElementById('registrationNumber').value,
                email: document.getElementById('companyEmail').value,
                website: document.getElementById('companyWebsite').value,
                contact: document.getElementById('compnayContactno').value,
                invoiceId: document.getElementById('invoicenoInput').value,
                dat: document.getElementById('invoicedate').value,
                status: document.getElementById('paymentstatus').value,
                billing_name: document.getElementById('billingName').value,
                billing_address: document.getElementById('billingAddress').value,
                billing_phone: document.getElementById('billingPhoneno').value,
                billing_taxno: document.getElementById('billingTaxno').value,
                shipping_name: document.getElementById('shippingName').value,
                shipping_address: document.getElementById('shippingAddress').value,
                shipping_phone: document.getElementById('shippingPhoneno').value,
                shipping_taxno: document.getElementById('shippingTaxno').value,
                sub_total: document.getElementById('cart-subtotal').value,
                estimated_tax: document.getElementById('cart-tax').value,
                discount: document.getElementById('cart-discount').value,
                shipping_charge: document.getElementById('cart-shipping').value,
                card_holder_name: document.getElementById('cardholderName').value,
                card_number: document.getElementById('cardNumber').value,
                total_amount: document.getElementById('amountTotalPay').value,
                notes: document.getElementById('exampleFormControlTextarea1').value,
                productDetails: this.productids,
            };
            axios.post('https://api-node.themesbrand.website/apps/invoice', data).then((data) => {
                console.log(data);
            }).catch((er) => {
                console.log(er);
            });
        },
        new_link() {
            this.newproductvalue[this.count] = '';
            this.count++;
            setTimeout(() => {
                this.remove();
            }, 400);
        },
        remove() {
            document.querySelectorAll(".product-removal a").forEach((el) => {
                el.addEventListener("click", (e) => {
                    this.removeItem(e);
                    this.resetRow();
                    this.count--;
                });
            });
        },
        resetRow() {
            document
                .getElementById("newlink")
                .querySelectorAll("tr")
                .forEach((subItem, index) => {
                    var incid = index + 1;
                    subItem.querySelector(".product-id").innerHTML = incid;
                });
        },
        removeItem(removeButton) {
            removeButton.target.closest("tr").remove();
            this.recalculateCart();
        },
        recalculateCart() {
            var subtotal = 0;
            setTimeout(() => {
                Array.prototype.forEach.call(
                    document.getElementsByClassName("product"),
                    (item) => {
                        Array.prototype.forEach.call(
                            item.getElementsByClassName("product-line-price"),
                            (e) => {
                                if (e.value) {
                                    subtotal += parseFloat(e.value.slice(1));
                                }
                            }
                        );
                    },
                    100
                );

                /* Calculate totals */
                var tax = subtotal * this.taxRate;
                var discount = subtotal * this.discountRate;

                var shipping = subtotal > 0 ? this.shippingRate : 0;
                var total = subtotal + tax + shipping - discount;

                document.getElementById("cart-subtotal").value =
                    this.paymentSign + subtotal.toFixed(2);
                document.getElementById("cart-tax").value =
                    this.paymentSign + tax.toFixed(2);
                document.getElementById("cart-shipping").value =
                    this.paymentSign + shipping.toFixed(2);
                document.getElementById("cart-total").value =
                    this.paymentSign + total.toFixed(2);
                document.getElementById("cart-discount").value =
                    this.paymentSign + discount.toFixed(2);
                document.getElementById("totalamountInput").value =
                    this.paymentSign + total.toFixed(2);
                document.getElementById("amountTotalPay").value =
                    this.paymentSign + total.toFixed(2);
            }, 100);
        },
        isData() {

            const plus = document.getElementsByClassName("plus");
            const minus = document.getElementsByClassName("minus");

            if (plus) {
                Array.prototype.forEach.call(plus, (e) => {
                    e.addEventListener("click", (event) => {
                        console.log(event.target.previousElementSibling.value);

                        if (parseInt(e.previousElementSibling.value) < 10) {
                            event.target.previousElementSibling.value++;

                            var itemAmount =
                                e.parentElement.parentElement.previousElementSibling.querySelector(
                                    ".product-price"
                                ).value;

                            var priceselection =
                                e.parentElement.parentElement.nextElementSibling.querySelector(
                                    ".product-line-price"
                                );
                            var productQty =
                                e.parentElement.querySelector(".product-quantity").value;

                            this.updateQuantity(productQty, itemAmount, priceselection);
                        }
                    });
                });
            }

            if (minus) {
                Array.prototype.forEach.call(minus, (e) => {
                    e.addEventListener("click", (event) => {
                        if (parseInt(e.nextElementSibling.value) > 1) {
                            event.target.nextElementSibling.value--;
                            var itemAmount =
                                e.parentElement.parentElement.previousElementSibling.querySelector(
                                    ".product-price"
                                ).value;
                            var priceselection =
                                e.parentElement.parentElement.nextElementSibling.querySelector(
                                    ".product-line-price"
                                );
                            // var productQty = 1;
                            var productQty =
                                e.parentElement.querySelector(".product-quantity").value;
                            this.updateQuantity(productQty, itemAmount, priceselection);
                        }
                    });
                });
            }
        },
        updateQuantity(amount, itemQuntity, priceselection) {
            let linePrice = amount * itemQuntity;
            /* Update line price display and recalc cart totals */
            linePrice = linePrice.toFixed(2);
            priceselection.value = this.paymentSign + linePrice;

            this.recalculateCart();
        },
        amountKeyup() {
            Array.prototype.forEach.call(
                document.getElementsByClassName("product-price"),
                (item) => {
                    item.addEventListener("keyup", (e) => {
                        let priceselection =
                            item.parentElement.nextElementSibling.nextElementSibling.querySelector(
                                ".product-line-price"
                            );

                        let amount = e.target.value;
                        let itemQuntity =
                            item.parentElement.nextElementSibling.querySelector(
                                ".product-quantity"
                            ).value;

                        this.updateQuantity(amount, itemQuntity, priceselection);
                    });
                }
            );
        },
        plusamount() {
            event.target.previousElementSibling.value++;
            var itemAmount =
                event.target.parentElement.parentElement.previousElementSibling.querySelector(
                    ".product-price"
                ).value;

            var priceselection =
                event.target.parentElement.parentElement.nextElementSibling.querySelector(
                    ".product-line-price"
                );
            var productQty =
                event.target.parentElement.querySelector(".product-quantity").value;

            this.updateQuantity(productQty, itemAmount, priceselection);
        },
        minusamount() {
            event.target.nextElementSibling.value--;
            var itemAmount =
                event.target.parentElement.parentElement.previousElementSibling.querySelector(
                    ".product-price"
                ).value;
            var priceselection =
                event.target.parentElement.parentElement.nextElementSibling.querySelector(
                    ".product-line-price"
                );
            var productQty =
                event.target.parentElement.querySelector(".product-quantity").value;
            this.updateQuantity(productQty, itemAmount, priceselection);
        }
    },
    watch: {
        newproductvalue() {
            console.log('this.newproductvalue');
        },
        productvalue(value) {
            console.log(this.newproductvalue);
            this.newproductvalue.forEach(e => {
                console.log('the value', e);
            });
            document.getElementById('productprice').value = '';
            if (value) {
                let result = this.allproductdata.findIndex(o => o.name == value);
                document.getElementById('productprice').value = this.allproductdata[result].price;
                this.productids.push(this.allproductdata[result]._id);
            }
        }
    },
    beforeMount() {
        axios.get('https://api-node.themesbrand.website/apps/product').then((data) => {
            this.allproductdata = data.data.data;
            data.data.data.forEach(item => {
                var ndata = {
                    value: item.name,
                    label: item.name
                };
                this.products.push(ndata);
            });
        }).catch((er) => {
            console.log(er);
        });
    },
    mounted() {
        this.remove();
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row class="justify-content-center">
            <b-col xxl="9">
                <b-card no-body>
                    <form class="needs-validation" novalidate>
                        <b-card-body class="border-bottom border-bottom-dashed p-4">
                            <b-row>
                                <b-col lg="4">
                                    <div class="profile-user mx-auto mb-3">
                                        <input id="profile-img-file-input" class="profile-img-file-input" required
                                               type="file"/>
                                        <label class="d-block" for="profile-img-file-input" tabindex="0">
                      <span
                          class="overflow-hidden border border-dashed d-flex align-items-center justify-content-center rounded"
                          style="height: 60px; width: 256px">
                        <img alt="logo dark"
                             class="card-logo card-logo-dark user-profile-image img-fluid"
                             src="@/assets/images/logo-dark.png"/>
                        <img alt="logo light"
                             class="card-logo card-logo-light user-profile-image img-fluid"
                             src="@/assets/images/logo-light.png"/>
                      </span>
                                        </label>
                                    </div>
                                    <div>
                                        <div>
                                            <label for="companyAddress">Address</label>
                                        </div>
                                        <div class="mb-2">
                      <textarea id="companyAddress" class="form-control bg-light border-0" placeholder="Company Address"
                                required rows="3"></textarea>
                                            <div class="invalid-feedback">Please enter a address</div>
                                        </div>
                                        <div>
                                            <input id="companyaddpostalcode" class="form-control bg-light border-0"
                                                   maxlength="6" minlength="5"
                                                   placeholder="Enter Postal Code" required type="text"/>
                                            <div class="invalid-feedback">
                                                The US zip code must contain 5 digits, Ex. 45678
                                            </div>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col class="ms-auto" lg="4">
                                    <div class="mb-2">
                                        <input id="registrationNumber" class="form-control bg-light border-0"
                                               maxlength="12" placeholder="Legal Registration No"
                                               required type="text"/>
                                        <div class="invalid-feedback">
                                            Please enter a registration no, Ex., 012345678912
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <input id="companyEmail" class="form-control bg-light border-0"
                                               placeholder="Email Address"
                                               required type="email"/>
                                        <div class="invalid-feedback">
                                            Please enter a valid email, Ex., example@gamil.com
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <input id="companyWebsite" class="form-control bg-light border-0"
                                               placeholder="Website"
                                               required
                                               type="text"/>
                                        <div class="invalid-feedback">
                                            Please enter a website, Ex., www.example.com
                                        </div>
                                    </div>
                                    <div>
                                        <input id="compnayContactno" class="form-control bg-light border-0"
                                               data-plugin="cleave-phone"
                                               placeholder="Contact No" required type="text"/>
                                        <div class="invalid-feedback">
                                            Please enter a contact number
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-body>
                        <b-card-body class="p-4">
                            <b-row class="g-3">
                                <b-col lg="3" sm="6">
                                    <label for="invoicenoInput">Invoice No</label>
                                    <input id="invoicenoInput" class="form-control bg-light border-0"
                                           placeholder="Invoice No"
                                           readonly
                                           type="text" value="#VL25000355"/>
                                </b-col>
                                <b-col lg="3" sm="6">
                                    <div>
                                        <label for="date-field">Date</label>

                                        <flat-pickr id="invoicedate" v-model="date" :config="config"
                                                    class="form-control bg-light border-light border-0"
                                                    placeholder="Select date and time"></flat-pickr>
                                    </div>
                                </b-col>
                                <b-col lg="3" sm="6">
                                    <label for="choices-payment-status">Payment Status</label>
                                    <div class="input-light">
                                        <Multiselect id="paymentstatus" v-model="paymentvalue" :close-on-select="true"
                                                     :create-option="true" :options="[
                        { value: '', label: 'Select Payment Status' },
                        { value: 'Paid', label: 'Paid' },
                        { value: 'Unpaid', label: 'Unpaid' },
                        { value: 'Refund', label: 'Refund' },
                      ]" :searchable="true"
                                                     class="form-control w-md"/>
                                    </div>
                                </b-col>
                                <b-col lg="3" sm="6">
                                    <div>
                                        <label for="totalamountInput">Total Amount</label>
                                        <input id="totalamountInput" class="form-control bg-light border-0"
                                               placeholder="$0.00"
                                               readonly
                                               type="text"/>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-body>
                        <b-card-body class="p-4 border-top border-top-dashed">
                            <b-row>
                                <b-col lg="4" sm="6">
                                    <div>
                                        <label class="text-muted text-uppercase fw-semibold" for="billingName">Billing
                                            Address</label>
                                    </div>
                                    <div class="mb-2">
                                        <input id="billingName" class="form-control bg-light border-0"
                                               placeholder="Full Name"
                                               required
                                               type="text"/>
                                        <div class="invalid-feedback">Please enter a full name</div>
                                    </div>
                                    <div class="mb-2">
                    <textarea id="billingAddress" class="form-control bg-light border-0" placeholder="Address" required
                              rows="3"></textarea>
                                        <div class="invalid-feedback">Please enter a address</div>
                                    </div>
                                    <div class="mb-2">
                                        <input id="billingPhoneno" class="form-control bg-light border-0"
                                               data-plugin="cleave-phone"
                                               placeholder="(123)456-7890" required type="text"/>
                                        <div class="invalid-feedback">
                                            Please enter a phone number
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <input id="billingTaxno" class="form-control bg-light border-0"
                                               placeholder="Tax Number"
                                               required
                                               type="text"/>
                                        <div class="invalid-feedback">
                                            Please enter a tax number
                                        </div>
                                    </div>
                                    <div class="form-check">
                                        <input id="same" class="form-check-input" name="same"
                                               onchange="billingFunction()"
                                               type="checkbox"/>
                                        <label class="form-check-label" for="same">
                                            Will your Billing and Shipping address same?
                                        </label>
                                    </div>
                                </b-col>
                                <b-col class="ms-auto" sm="6">
                                    <b-row>
                                        <b-col lg="8">
                                            <div>
                                                <label class="text-muted text-uppercase fw-semibold" for="shippingName">Shipping
                                                    Address</label>
                                            </div>
                                            <div class="mb-2">
                                                <input id="shippingName" class="form-control bg-light border-0"
                                                       placeholder="Full Name"
                                                       required type="text"/>
                                                <div class="invalid-feedback">
                                                    Please enter a full name
                                                </div>
                                            </div>
                                            <div class="mb-2">
                        <textarea id="shippingAddress" class="form-control bg-light border-0" placeholder="Address"
                                  required rows="3"></textarea>
                                                <div class="invalid-feedback">
                                                    Please enter a address
                                                </div>
                                            </div>
                                            <div class="mb-2">
                                                <input id="shippingPhoneno" class="form-control bg-light border-0"
                                                       data-plugin="cleave-phone"
                                                       placeholder="(123)456-7890" required type="text"/>
                                                <div class="invalid-feedback">
                                                    Please enter a phone number
                                                </div>
                                            </div>
                                            <div>
                                                <input id="shippingTaxno" class="form-control bg-light border-0"
                                                       placeholder="Tax Number"
                                                       required type="text"/>
                                                <div class="invalid-feedback">
                                                    Please enter a tax number
                                                </div>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-card-body>
                        <b-card-body class="p-4">
                            <div class="table-responsive">
                                <table class="invoice-table table table-borderless table-nowrap mb-0">
                                    <thead class="align-middle">
                                    <tr class="table-active">
                                        <th scope="col" style="width: 50px">#</th>
                                        <th scope="col">Product Details</th>
                                        <th scope="col" style="width: 152px">
                                            <div class="d-flex currency-select input-light align-items-center">
                                                Rate

                                                <Multiselect v-model="value1" :close-on-select="true"
                                                             :create-option="true"
                                                             :options="[
                              { value: '$', label: '($)' },
                              { value: '£', label: '(£)' },
                              { value: '₹', label: '(₹)' },
                              { value: '€', label: '(€)' },
                            ]"
                                                             :searchable="true" class="bg-light"/>
                                            </div>
                                        </th>
                                        <th scope="col" style="width: 120px">Quantity</th>
                                        <th class="text-end" scope="col" style="width: 150px">
                                            Amount
                                        </th>
                                        <th class="text-end" scope="col" style="width: 105px"></th>
                                    </tr>
                                    </thead>
                                    <tbody id="newlink">

                                    <tr v-for="n in count" :id="n" :key="n" class="product">
                                        <th class="product-id" scope="row">{{ n }}</th>
                                        <td class="text-start">
                                            <Multiselect v-model="newproductvalue[n - 1]" :close-on-select="true"
                                                         :create-option="true"
                                                         :options="products" :searchable="true"
                                                         class="form-control w-md"
                                                         @select="selectedv(newproductvalue[n - 1])"/>
                                        </td>
                                        <td>
                                            <input :id="'productprice' + n"
                                                   class="form-control product-price bg-light border-0"
                                                   placeholder="0.00"
                                                   required type="number"/>
                                            <div class="invalid-feedback">Please enter a rate</div>
                                        </td>
                                        <td>
                                            <div class="input-step">
                                                <button type="button" @click="minusamount(this)">–</button>
                                                <input class="product-quantity" readonly type="number"/>
                                                <button type="button" @click="plusamount(this)">+</button>
                                            </div>
                                        </td>
                                        <td class="text-end">
                                            <div>
                                                <input class="form-control bg-light border-0 product-line-price"
                                                       placeholder="$0.00"
                                                       readonly type="text"/>
                                            </div>
                                        </td>
                                        <td class="product-removal">
                                            <b-link class="btn btn-success" href="javascript:void(0)">Delete</b-link>
                                        </td>
                                    </tr>

                                    </tbody>
                                    <tr id="newForm" style="display: none"></tr>
                                    <tr>
                                        <td colspan="9">
                                            <b-link class="btn btn-soft-secondary fw-medium" @click="new_link"><i
                                                class="ri-add-fill me-1 align-bottom"></i> Add
                                                Item
                                            </b-link>
                                        </td>
                                    </tr>
                                    <tr class="border-top border-top-dashed mt-2">
                                        <td colspan="3"></td>
                                        <td class="p-0" colspan="2">
                                            <table
                                                class="table table-borderless table-sm table-nowrap align-middle mb-0">
                                                <tbody>
                                                <tr>
                                                    <th scope="row">Sub Total</th>
                                                    <td style="width: 150px">
                                                        <input id="cart-subtotal" class="form-control bg-light border-0"
                                                               placeholder="$0.00"
                                                               readonly type="text"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Estimated Tax (12.5%)</th>
                                                    <td>
                                                        <input id="cart-tax" class="form-control bg-light border-0"
                                                               placeholder="$0.00"
                                                               readonly type="text"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        Discount
                                                        <small class="text-muted">(VELZON15)</small>
                                                    </th>
                                                    <td>
                                                        <input id="cart-discount" class="form-control bg-light border-0"
                                                               placeholder="$0.00"
                                                               readonly type="text"/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Shipping Charge</th>
                                                    <td>
                                                        <input id="cart-shipping" class="form-control bg-light border-0"
                                                               placeholder="$0.00"
                                                               readonly type="text"/>
                                                    </td>
                                                </tr>
                                                <tr class="border-top border-top-dashed">
                                                    <th scope="row">Total Amount</th>
                                                    <td>
                                                        <input id="cart-total" class="form-control bg-light border-0"
                                                               placeholder="$0.00"
                                                               readonly type="text"/>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            <b-row class="mt-3">
                                <b-col lg="4">
                                    <div class="mb-2">
                                        <label class="form-label text-muted text-uppercase fw-semibold"
                                               for="choices-payment-type">Payment
                                            Details</label>

                                        <div class="input-light">
                                            <Multiselect v-model="value" :close-on-select="true"
                                                         :create-option="true" :options="[
                          { value: '', label: 'Payment Method' },
                          { value: 'Mastercard', label: 'Mastercard' },
                          { value: 'Credit Card', label: 'Credit Card' },
                          { value: 'Visa', label: 'Visa' },
                          { value: 'Paypal', label: 'Paypal' },
                        ]"
                                                         :searchable="true" class="form-control w-md"/>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <input id="cardholderName" class="form-control bg-light border-0"
                                               placeholder="Card Holder Name"
                                               type="text"/>
                                    </div>
                                    <div class="mb-2">
                                        <input id="cardNumber" class="form-control bg-light border-0"
                                               placeholder="xxxx xxxx xxxx xxxx"
                                               type="text"/>
                                    </div>
                                    <div>
                                        <input id="amountTotalPay" class="form-control bg-light border-0"
                                               placeholder="$0.00"
                                               readonly
                                               type="text"/>
                                    </div>
                                </b-col>
                            </b-row>
                            <div class="mt-4">
                                <label class="form-label text-muted text-uppercase fw-semibold"
                                       for="exampleFormControlTextarea1">NOTES</label>
                                <textarea id="exampleFormControlTextarea1" class="form-control alert alert-info"
                                          placeholder="Notes"
                                          required
                                          rows="2">All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.</textarea>
                            </div>
                            <div class="hstack gap-2 justify-content-end d-print-none mt-4">
                                <b-button type="button" variant="success" @click="createinvoice">
                                    <i class="ri-printer-line align-bottom me-1"></i> Save
                                </b-button>
                                <b-link class="btn btn-primary" href="javascript:void(0);"><i
                                    class="ri-download-2-line align-bottom me-1"></i> Download
                                    Invoice
                                </b-link>
                                <b-link class="btn btn-danger" href="javascript:void(0);"><i
                                    class="ri-send-plane-fill align-bottom me-1"></i> Send
                                    Invoice
                                </b-link>
                            </div>
                        </b-card-body>
                    </form>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
