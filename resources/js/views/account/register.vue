<script>
import {email, helpers, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import axios from 'axios';
import appConfig from "../../../app.config";

export default {
    setup() {
        return {
            v$: useVuelidate()
        };
    },
    page: {
        title: "Register",
        meta: [{
            name: "description",
            content: appConfig.description,
        },],
    },
    components: {},
    data() {
        return {
            user: {
                username: "",
                email: "",
                password: "",
                confirm_password: "",
            },
            submitted: false,
            regError: null,
            tryingToRegister: false,
            isRegisterError: false,
            registerSuccess: false,
        };
    },
    validations: {
        user: {
            username: {
                required: helpers.withMessage("Username is required", required),
            },
            email: {
                required: helpers.withMessage("Email is required", required),
                email: helpers.withMessage("Please enter valid email", email),
            },
            password: {
                required: helpers.withMessage("Password is required", required),
            },
            confirm_password: {
                required: helpers.withMessage("Confirm Password is required", required),
            },
        },
    },
    computed: {
        notification() {
            return this.$store ? this.$store.state.notification : null;
        },
    },
    methods: {


        // Try to register the user in with the email, username
        // and password they provided.
        async tryToRegisterIn() {
            this.submitted = true;
            // stop here if form is invalid
            this.v$.$touch();
            const result = await axios.post('https://api-node.themesbrand.website/auth/signup', {
                email: this.user.email,
                password: this.user.password,
                confirm_password: this.user.confirm_password
            });
            if (result.data.status == 'errors') {
                this.isRegisterError = true;
                return this.regError = result.data.message;
            }
            localStorage.setItem('jwt', result.data.token);
            this.$router.push({
                path: '/'
            });

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
            <Particles id="tsparticles" :options="{
        particles: {
          number: {
            value: 90,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.2,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 4,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: '#b61924',
          background_image: '',
          background_position: '50% 50%',
          background_repeat: 'no-repeat',
          background_size: 'cover',
        },
      }"/>
        </div>

        <div class="auth-page-content">
            <b-container>
                <b-row>
                    <b-col lg="12">
                        <div class="text-center mt-sm-5 mb-4 text-white-50">
                            <div>
                                <router-link class="d-inline-block auth-logo" to="/">
                                    <img alt="" height="20" src="@/assets/images/logo-light.png">
                                </router-link>
                            </div>
                            <p class="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
                        </div>
                    </b-col>
                </b-row>

                <b-row class="justify-content-center">
                    <b-col lg="6" md="8" xl="5">
                        <b-card class="mt-4" no-body>

                            <b-card-body class="p-4">
                                <div class="text-center mt-2">
                                    <h5 class="text-primary">Create New Account</h5>
                                    <p class="text-muted">Get your free velzon account now</p>
                                </div>
                                <div class="p-2 mt-4">
                                    <form class="needs-validation" @submit.prevent="tryToRegisterIn">
                                        <b-alert v-model="registerSuccess" class="mt-3" dismissible variant="success">
                                            Registration
                                            successfull.
                                        </b-alert>

                                        <b-alert v-model="isRegisterError" class="mt-3" dismissible variant="danger">
                                            {{ regError }}
                                        </b-alert>

                                        <div v-if="notification.message" :class="'alert ' + notification.type">
                                            {{ notification.message }}
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label" for="useremail">Email <span
                                                class="text-danger">*</span></label>
                                            <input id="useremail" v-model="user.email" :class="{
                        'is-invalid': submitted && v$.user.email.$error,
                      }" class="form-control"
                                                   placeholder="Enter email address" type="email">
                                            <div v-for="(item, index) in v$.user.email.$errors" :key="index"
                                                 class="invalid-feedback">
                                                <span v-if="item.$message">{{ item.$message }}</span>
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label" for="username">Username <span class="text-danger">*</span></label>
                                            <input id="username" v-model="user.username" :class="{
                        'is-invalid': submitted && v$.user.username.$error,
                      }" class="form-control" placeholder="Enter username" type="text">
                                            <div v-if="submitted && v$.user.username.$error" class="invalid-feedback">
                        <span v-if="v$.user.username.required.$message">{{
                                v$.user.username.required.$message
                            }}</span>
                                            </div>
                                        </div>

                                        <div class="mb-2">
                                            <label class="form-label" for="userpassword">Password <span
                                                class="text-danger">*</span></label>
                                            <input id="userpassword" v-model="user.password" :class="{
                        'is-invalid': submitted && v$.user.password.$error,
                      }" class="form-control" placeholder="Enter password" type="password">
                                            <div v-if="submitted && v$.user.password.$error" class="invalid-feedback">
                        <span v-if="v$.user.password.required.$message">{{
                                v$.user.password.required.$message
                            }}</span>
                                            </div>
                                        </div>

                                        <div class="mb-2">
                                            <label class="form-label" for="userpassword">Confirm Password <span
                                                class="text-danger">*</span></label>
                                            <input id="userconfirmpassword" v-model="user.confirm_password" :class="{
                        'is-invalid': submitted && v$.user.password.$error,
                      }"
                                                   class="form-control" placeholder="Enter password" type="password">
                                            <div v-if="submitted && v$.user.confirm_password.$error"
                                                 class="invalid-feedback">
                        <span v-if="v$.user.password.required.$message">{{
                                v$.user.confirm_password.required.$message
                            }}</span>
                                            </div>
                                        </div>

                                        <div class="mb-4">
                                            <p class="mb-0 fs-12 text-muted fst-italic">By registering you agree to the
                                                Velzon
                                                <b-link
                                                    class="text-primary text-decoration-underline fst-normal fw-medium"
                                                    href="#">
                                                    Terms of Use
                                                </b-link>
                                            </p>
                                        </div>

                                        <div class="mt-4">
                                            <b-button class="w-100" type="submit" variant="success">Sign Up</b-button>
                                        </div>

                                        <div class="mt-4 text-center">
                                            <div class="signin-other-title">
                                                <h5 class="fs-13 mb-4 title text-muted">Create account with</h5>
                                            </div>

                                            <div>
                                                <b-button class="btn-icon" type="button" variant="primary"><i
                                                    class="ri-facebook-fill fs-16"></i></b-button>
                                                <b-button class="btn-icon ms-1" type="button" variant="danger"><i
                                                    class="ri-google-fill fs-16"></i></b-button>
                                                <b-button class="btn-icon ms-1" type="button" variant="dark"><i
                                                    class="ri-github-fill fs-16"></i></b-button>
                                                <b-button class="btn-icon ms-1" type="button" variant="info"><i
                                                    class="ri-twitter-fill fs-16"></i></b-button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </b-card-body>
                        </b-card>

                        <div class="mt-4 text-center">
                            <p class="mb-0">Already have an account ?
                                <router-link class="fw-semibold text-primary text-decoration-underline"
                                             to="/login"> Signin
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
                            <p class="mb-0 text-muted">&copy; {{ new Date().getFullYear() }} Velzon. Crafted with <i
                                class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </footer>
    </div>
</template>
