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
                            <b-row class="justify-content-center g-0">
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
                                                            <p class="fs-15">" Great! Clean code, clean design, easy for
                                                                customization. Thanks very much! "</p>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <p class="fs-15">" The theme is really great with an amazing
                                                                customer support."</p>
                                                        </div>
                                                        <div class="carousel-item">
                                                            <p class="fs-15">" Great! Clean code, clean design, easy for
                                                                customization. Thanks very much! "</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>

                                <b-col lg="6">
                                    <div class="p-lg-5 p-4">
                                        <div class="mb-4">
                                            <div class="avatar-lg mx-auto">
                                                <div
                                                    class="avatar-title bg-light text-primary display-5 rounded-circle">
                                                    <i class="ri-mail-line"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-muted text-center mx-lg-3">
                                            <h4 class="">Verify Your Email</h4>
                                            <p>Please enter the 4 digit code sent to <span
                                                class="fw-semibold">example@abc.com</span></p>
                                        </div>

                                        <div class="mt-4">
                                            <form>
                                                <b-row>
                                                    <b-col cols="3">
                                                        <div class="mb-3">
                                                            <label class="visually-hidden" for="digit1-input">Dight
                                                                1</label>
                                                            <input id="digit1-input"
                                                                   class="form-control form-control-lg bg-light border-light text-center"
                                                                   maxLength="1" onkeyup="moveToNext(this, 2)"
                                                                   type="text">
                                                        </div>
                                                    </b-col>

                                                    <b-col cols="3">
                                                        <div class="mb-3">
                                                            <label class="visually-hidden" for="digit2-input">Dight
                                                                2</label>
                                                            <input id="digit2-input"
                                                                   class="form-control form-control-lg bg-light border-light text-center"
                                                                   maxLength="1" onkeyup="moveToNext(this, 3)"
                                                                   type="text">
                                                        </div>
                                                    </b-col>

                                                    <b-col cols="3">
                                                        <div class="mb-3">
                                                            <label class="visually-hidden" for="digit3-input">Dight
                                                                3</label>
                                                            <input id="digit3-input"
                                                                   class="form-control form-control-lg bg-light border-light text-center"
                                                                   maxLength="1" onkeyup="moveToNext(this, 4)"
                                                                   type="text">
                                                        </div>
                                                    </b-col>

                                                    <b-col cols="3">
                                                        <div class="mb-3">
                                                            <label class="visually-hidden" for="digit4-input">Dight
                                                                4</label>
                                                            <input id="digit4-input"
                                                                   class="form-control form-control-lg bg-light border-light text-center"
                                                                   maxLength="1" onkeyup="moveToNext(this, 4)"
                                                                   type="text">
                                                        </div>
                                                    </b-col>
                                                </b-row>

                                                <div class="mt-3">
                                                    <b-button class="w-100" type="button" variant="success">Confirm
                                                    </b-button>
                                                </div>

                                            </form>

                                        </div>

                                        <div class="mt-5 text-center">
                                            <p class="mb-0">Didn't receive a code ?
                                                <router-link
                                                    class="fw-semibold text-primary text-decoration-underline"
                                                    to="/auth/reset-pwd-cover">Resend
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
