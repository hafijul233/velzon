<script>
export default {};
</script>

<template>
    <div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="bg-overlay"></div>
        <div class="auth-page-content overflow-hidden pt-lg-5">
            <b-container>
                <b-row>
                    <b-col lg="12">
                        <b-card class="overflow-hidden" no-body>
                            <b-row class="g-0">
                                <b-col lg="6">
                                    <div class="p-lg-5 p-4 auth-one-bg h-100">
                                        <div class="bg-overlay"></div>
                                        <div class="position-relative h-100 d-flex flex-column">
                                            <div class="mb-4">
                                                <router-link class="d-block" to="/">
                                                    <img alt="" height="18" src="@/assets/images/logo-light.png">
                                                </router-link>
                                            </div>
                                            <div class="mt-auto">
                                                <div class="mb-3">
                                                    <i class="ri-double-quotes-l display-4 text-success"></i>
                                                </div>

                                                <div id="qoutescarouselIndicators" class="carousel slide"
                                                     data-bs-ride="carousel">
                                                    <div class="carousel-indicators">
                                                        <button aria-current="true" aria-label="Slide 1"
                                                                class="active" data-bs-slide-to="0"
                                                                data-bs-target="#qoutescarouselIndicators"
                                                                type="button"></button>
                                                        <button aria-label="Slide 2" data-bs-slide-to="1"
                                                                data-bs-target="#qoutescarouselIndicators"
                                                                type="button"></button>
                                                        <button aria-label="Slide 3" data-bs-slide-to="2"
                                                                data-bs-target="#qoutescarouselIndicators"
                                                                type="button"></button>
                                                    </div>
                                                    <div class="carousel-inner text-center text-white-50 pb-5">
                                                        <div class="carousel-item active">
                                                            <p class="fs-15 fst-italic">" Great! Clean code, clean
                                                                design, easy for customization. Thanks very much! "</p>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <p class="fs-15 fst-italic">" The theme is really great with
                                                                an amazing customer support."</p>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <p class="fs-15 fst-italic">" Great! Clean code, clean
                                                                design, easy for customization. Thanks very much! "</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="6">
                                    <div class="p-lg-5 p-4">
                                        <div>
                                            <h5 class="text-primary">Welcome Back !</h5>
                                            <p class="text-muted">Sign in to continue to Velzon.</p>
                                        </div>

                                        <div class="mt-4">
                                            <form>

                                                <div class="mb-3">
                                                    <label class="form-label" for="username">Username</label>
                                                    <input id="username" class="form-control"
                                                           placeholder="Enter username"
                                                           type="text">
                                                </div>

                                                <div class="mb-3">
                                                    <div class="float-end">
                                                        <router-link class="text-muted" to="/auth/reset-pwd-cover">
                                                            Forgot password?
                                                        </router-link>
                                                    </div>
                                                    <label class="form-label" for="password-input">Password</label>
                                                    <div class="position-relative auth-pass-inputgroup mb-3">
                                                        <input id="password-input" class="form-control pe-5"
                                                               placeholder="Enter password" type="password">
                                                        <b-button id="password-addon"
                                                                  class="position-absolute end-0 top-0 text-decoration-none text-muted"
                                                                  type="button" variant="link"><i
                                                            class="ri-eye-fill align-middle"></i></b-button>
                                                    </div>
                                                </div>

                                                <div class="form-check">
                                                    <input id="auth-remember-check" class="form-check-input"
                                                           type="checkbox"
                                                           value="">
                                                    <label class="form-check-label" for="auth-remember-check">Remember
                                                        me</label>
                                                </div>

                                                <div class="mt-4">
                                                    <b-button class="w-100" type="submit" variant="success">Sign In
                                                    </b-button>
                                                </div>

                                                <div class="mt-4 text-center">
                                                    <div class="signin-other-title">
                                                        <h5 class="fs-13 mb-4 title">Sign In with</h5>
                                                    </div>

                                                    <div>
                                                        <b-button class="btn-icon" type="button"
                                                                  variant="primary"><i
                                                            class="ri-facebook-fill fs-16"></i></b-button>
                                                        <b-button class="btn-icon ms-1" type="button"
                                                                  variant="danger"><i
                                                            class="ri-google-fill fs-16"></i></b-button>
                                                        <b-button class="btn-icon ms-1" type="button"
                                                                  variant="dark"><i
                                                            class="ri-github-fill fs-16"></i></b-button>
                                                        <b-button class="btn-icon ms-1" type="button"
                                                                  variant="info"><i
                                                            class="ri-twitter-fill fs-16"></i></b-button>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>

                                        <div class="mt-5 text-center">
                                            <p class="mb-0">Don't have an account ?
                                                <router-link class="fw-semibold text-primary text-decoration-underline"
                                                             to="/auth/signup-cover">
                                                    Signup
                                                </router-link>
                                            </p>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </div>

        <footer class="footer">
            <b-container>
                <b-row>
                    <b-col lg="12">
                        <div class="text-center">
                            <p class="mb-0">&copy; {{ new Date().getFullYear() }} Velzon. Crafted with <i
                                class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </footer>
    </div>
</template>
