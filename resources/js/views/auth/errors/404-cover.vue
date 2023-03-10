<script>
export default {};
</script>

<template>
    <div class="auth-page-wrapper py-5 d-flex justify-content-center align-items-center min-vh-100">

        <div class="auth-page-content overflow-hidden p-0">
            <b-container>
                <b-row class="justify-content-center">
                    <b-col lg="8" xl="7">
                        <div class="text-center">
                            <img alt="error img" class="img-fluid" src="@/assets/images/error400-cover.png">
                            <div class="mt-3">
                                <h3 class="text-uppercase">Sorry, Page not Found 😭</h3>
                                <p class="text-muted mb-4">The page you are looking for not available!</p>
                                <router-link class="btn btn-success" to="/"><i class="mdi mdi-home me-1"></i>Back to
                                    home
                                </router-link>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
