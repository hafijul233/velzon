<script>
import {CountTo} from "vue3-count-to";

import {ActivityIcon, ClockIcon, ExternalLinkIcon, UsersIcon,} from '@zhuowenli/vue-feather-icons'

export default {
    components: {
        CountTo,
        UsersIcon,
        ActivityIcon,
        ClockIcon,
        ExternalLinkIcon
    }
};
</script>

<template>
    <b-row>
        <b-col md="6">
            <b-card class="card-animate" no-body>
                <b-card-body>
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="fw-medium text-muted mb-0">Users</p>
                            <h2 class="mt-4 ff-secondary fw-semibold">
                                <count-to :duration='5000' :endVal='28' :startVal='0'></count-to>
                                k
                            </h2>
                            <p class="mb-0 text-muted">
                                <b-badge class="bg-light text-success mb-0">
                                    <i class="ri-arrow-up-line align-middle"></i> 16.24 %
                                </b-badge>
                                vs. previous month
                            </p>
                        </div>
                        <div>
                            <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info rounded-circle fs-2">
                  <users-icon class="text-info icon-md"></users-icon>
                </span>
                            </div>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col md="6">
            <b-card class="card-animate" no-body>
                <b-card-body>
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="fw-medium text-muted mb-0">Sessions</p>
                            <h2 class="mt-4 ff-secondary fw-semibold">
                                <count-to :duration='5000' :endVal='97' :startVal='0'></count-to>
                                k
                            </h2>
                            <p class="mb-0 text-muted">
                                <b-badge class="bg-light text-danger mb-0">
                                    <i class="ri-arrow-down-line align-middle"></i> 3.96 %
                                </b-badge>
                                vs. previous month
                            </p>
                        </div>
                        <div>
                            <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info rounded-circle fs-2">
                  <activity-icon class="text-info icon-md" name="activity"></activity-icon>
                </span>
                            </div>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>

    <b-row>
        <b-col md="6">
            <b-card class="card-animate" no-body>
                <b-card-body>
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="fw-medium text-muted mb-0">Avg. Visit Duration</p>
                            <h2 class="mt-4 ff-secondary fw-semibold">
                                <count-to :duration='5000' :endVal='3' :startVal='0'></count-to>
                                m
                                <count-to :duration='5000' :endVal='40' :startVal='0'></count-to>
                                sec
                            </h2>
                            <p class="mb-0 text-muted">
                                <b-badge class="bg-light text-danger mb-0">
                                    <i class="ri-arrow-down-line align-middle"></i> 0.24 %
                                </b-badge>
                                vs. previous month
                            </p>
                        </div>
                        <div>
                            <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info rounded-circle fs-2">
                  <clock-icon class="text-info icon-md" name="clock"></clock-icon>
                </span>
                            </div>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>

        <b-col md="6">
            <b-card class="card-animate" no-body>
                <b-card-body>
                    <div class="d-flex justify-content-between">
                        <div>
                            <p class="fw-medium text-muted mb-0">Bounce Rate</p>
                            <h2 class="mt-4 ff-secondary fw-semibold">
                                <count-to :duration='5000' :endVal='33' :startVal='0'></count-to>
                                %
                            </h2>
                            <p class="mb-0 text-muted">
                                <b-badge class="bg-light text-success mb-0">
                                    <i class="ri-arrow-up-line align-middle"></i> 7.05 %
                                </b-badge>
                                vs. previous month
                            </p>
                        </div>
                        <div>
                            <div class="avatar-sm flex-shrink-0">
                <span class="avatar-title bg-soft-info rounded-circle fs-2">
                  <external-link-icon class="text-info icon-md"></external-link-icon>
                </span>
                            </div>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </b-col>
    </b-row>
</template>
