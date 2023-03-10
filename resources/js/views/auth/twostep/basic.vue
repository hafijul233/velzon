<script>
export default {};
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
                                <div class="mb-4">
                                    <div class="avatar-lg mx-auto">
                                        <div class="avatar-title bg-light text-primary display-5 rounded-circle">
                                            <i class="ri-mail-line"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-2 mt-4">
                                    <div class="text-muted text-center mb-4 mx-lg-3">
                                        <h4 class="">Verify Your Email</h4>
                                        <p>Please enter the 4 digit code sent to <span class="fw-semibold">example@abc.com</span>
                                        </p>
                                    </div>

                                    <form>
                                        <b-row>
                                            <b-col cols="3">
                                                <div class="mb-3">
                                                    <label class="visually-hidden" for="digit1-input">Dight 1</label>
                                                    <input id="digit1-input"
                                                           class="form-control form-control-lg bg-light border-light text-center"
                                                           maxLength="1" onkeyup="moveToNext(this, 2)"
                                                           type="text">
                                                </div>
                                            </b-col>

                                            <b-col cols="3">
                                                <div class="mb-3">
                                                    <label class="visually-hidden" for="digit2-input">Dight 2</label>
                                                    <input id="digit2-input"
                                                           class="form-control form-control-lg bg-light border-light text-center"
                                                           maxLength="1" onkeyup="moveToNext(this, 3)"
                                                           type="text">
                                                </div>
                                            </b-col>

                                            <b-col cols="3">
                                                <div class="mb-3">
                                                    <label class="visually-hidden" for="digit3-input">Dight 3</label>
                                                    <input id="digit3-input"
                                                           class="form-control form-control-lg bg-light border-light text-center"
                                                           maxLength="1" onkeyup="moveToNext(this, 4)"
                                                           type="text">
                                                </div>
                                            </b-col>

                                            <b-col cols="3">
                                                <div class="mb-3">
                                                    <label class="visually-hidden" for="digit4-input">Dight 4</label>
                                                    <input id="digit4-input"
                                                           class="form-control form-control-lg bg-light border-light text-center"
                                                           maxLength="1" onkeyup="moveToNext(this, 4)"
                                                           type="text">
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </form>

                                    <div class="mt-3">
                                        <b-button class="w-100" type="button" variant="success">Confirm</b-button>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>

                        <div class="mt-4 text-center">
                            <p class="mb-0">Didn't receive a code ?
                                <router-link class="fw-semibold text-primary text-decoration-underline"
                                             to="/auth/reset-pwd-basic">Resend
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
