<script>
export default {};
</script>

<template>
    <div class="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div class="bg-overlay"></div>
        <div class="auth-page-content overflow-hidden pt-lg-5">
            <b-container>
                <b-row class="justify-content-center">
                    <b-col xl="5">
                        <b-card class="overflow-hidden" no-body>
                            <b-card-body class="p-4">
                                <div class="text-center">
                                    <img alt="" height="210"
                                         src="https://img.themesbrand.com/velzon/images/auth-offline.gif">
                                    <h3 class="mt-4 fw-semibold">We're currently offline</h3>
                                    <p class="text-muted mb-4 fs-14">We can't show you this images because you aren't
                                        connected to the internet. When you’re back online refresh the page or hit the
                                        button below</p>
                                    <b-button class="btn-border" onClick="window.location.href=window.location.href"
                                              variant="success"><i
                                        class="ri-refresh-line align-bottom"></i> Refresh
                                    </b-button>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>
