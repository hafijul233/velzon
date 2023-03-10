<script>
import {authMethods} from "@/state/helpers";
import appConfig from "../../../app.config.json";

import {email, helpers, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import Lottie from "@/components/widgets/lottie.vue";

import animationData from "@/components/widgets/rhvddzym.json";

export default {
    components: {lottie: Lottie},
    setup() {
        return {v$: useVuelidate()};
    },
    validations: {
        email: {
            required: helpers.withMessage("Email is required", required),
            email: helpers.withMessage("Please enter valid email", email),
        },
    },
    page: {
        title: "Forgot Password",
        meta: [
            {
                name: "description",
                content: appConfig.description,
            },
        ],
    },
    data() {
        return {
            email: "",
            submitted: false,
            error: null,
            tryingToReset: false,
            isResetError: false,
            defaultOptions: {animationData: animationData},
        };
    },
    methods: {
        ...authMethods,
        // Try to register the user in with the email, fullname
        // and password they provided.
        tryToReset() {
            this.submitted = true;
            // stop here if form is invalid
            this.v$.$touch();

            if (this.v$.$invalid) {
                return;
            } else {
                if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
                    this.tryingToReset = true;
                    // Reset the authError if it existed.
                    this.error = null;
                    return (
                        this.resetPassword({
                            email: this.email,
                        })
                            // eslint-disable-next-line no-unused-vars
                            .then((token) => {
                                this.tryingToReset = false;
                                this.isResetError = false;
                            })
                            .catch((error) => {
                                this.tryingToReset = false;
                                this.error = error ? error : "";
                                this.isResetError = true;
                            })
                    );
                }
            }
        },
    },
};
</script>

<template>
    <div class="auth-page-wrapper pt-5">
        <div id="auth-particles" class="auth-one-bg-position auth-one-bg">
            <div class="bg-overlay"></div>

            <div class="shape">
                <svg version="1.1" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                </svg>
            </div>
        </div>

        <div class="auth-page-content">
            <b-container>
                <b-row>
                    <b-col lg="12">
                        <div class="text-center mt-sm-5 mb-4 text-white-50">
                            <div>
                                <router-link class="d-inline-block auth-logo" to="/">
                                    <img alt="" height="20" src="@/assets/images/logo-light.png"/>
                                </router-link>
                            </div>
                            <p class="mt-3 fs-15 fw-medium">
                                Premium Admin & Dashboard Template
                            </p>
                        </div>
                    </b-col>
                </b-row>

                <b-row class="justify-content-center">
                    <b-col lg="6" md="8" xl="5">
                        <b-card class="mt-4" no-body>
                            <b-card-body class="p-4">
                                <div class="text-center mt-2">
                                    <h5 class="text-primary">Forgot Password?</h5>
                                    <p class="text-muted">Reset password with velzon</p>

                                    <lottie :height="120" :options="defaultOptions"
                                            :width="120"
                                            class="avatar-xl" colors="primary:#0ab39c,secondary:#405189"/>

                                </div>

                                <div class="p-2">
                                    <b-alert v-model="isResetError" class="mb-4" dismissible variant="danger">{{
                                            error
                                        }}
                                    </b-alert>
                                    <form @submit.prevent="tryToReset">
                                        <div class="mb-4">
                                            <label class="form-label">Email</label>
                                            <input id="email" v-model="email" :class="{ 'is-invalid': submitted && v$.email.$errors }" class="form-control"
                                                   placeholder="Enter Email"
                                                   type="email"/>
                                            <div v-for="(item, index) in v$.email.$errors" :key="index"
                                                 class="invalid-feedback">
                                                <span v-if="item.$message">{{ item.$message }}</span>
                                            </div>
                                        </div>

                                        <div class="text-center mt-4">
                                            <b-button class="w-100" type="submit" variant="success">
                                                Send Reset Link
                                            </b-button>
                                        </div>
                                    </form>
                                </div>
                            </b-card-body>
                        </b-card>

                        <div class="mt-4 text-center">
                            <p class="mb-0">
                                Wait, I remember my password...
                                <router-link class="fw-semibold text-primary text-decoration-underline" to="/login">
                                    Click here
                                </router-link>
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <footer class="footer">
            <b-container>
                <b-row>
                    <b-col lg="12">
                        <div class="text-center">
                            <p class="mb-0 text-muted">
                                &copy; {{ new Date().getFullYear() }} Velzon. Crafted with
                                <i class="mdi mdi-heart text-danger"></i> by Themesbrand
                            </p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </footer>
    </div>
</template>
