<script>
export default {
    setup() {
        return {
            tasks: [
                {
                    id: 1,
                    forId: "task_one",
                    text: "Review and make sure nothing slips through cracks",
                    date: "15 Sep, 2021",
                },
                {
                    id: 2,
                    forId: "task_two",
                    text: "Send meeting invites for sales upcampaign",
                    date: "20 Sep, 2021",
                },
                {
                    id: 3,
                    forId: "task_three",
                    text: "Weekly closed sales won checking with sales team",
                    date: "24 Sep, 2021",
                },
                {
                    id: 4,
                    forId: "task_four",
                    text: "Add notes that can be viewed from the individual view",
                    date: "27 Sep, 2021",
                },
                {
                    id: 5,
                    forId: "task_five",
                    text: "Move stuff to another page",
                    date: "27 Sep, 2021",
                },
                {
                    id: 6,
                    forId: "task_six",
                    text: "Styling wireframe design and documentation for velzon admin",
                    date: "27 Sep, 2021",
                },
            ],
        };
    },
};
</script>

<template>
    <b-card class="card-height-100" no-body>
        <b-card-header class="align-items-center d-flex">
            <b-card-title class="mb-0 flex-grow-1">My Tasks</b-card-title>
            <div class="flex-shrink-0">
                <div class="dropdown card-header-dropdown">
                    <b-link aria-expanded="false" aria-haspopup="true" class="text-reset dropdown-btn" data-bs-toggle="dropdown"
                            href="#">
                        <span class="text-muted"><i
                            class="ri-settings-4-line align-middle me-1 fs-15"></i>Settings</span>
                    </b-link>
                    <div class="dropdown-menu dropdown-menu-end">
                        <b-link class="dropdown-item" href="#">Edit</b-link>
                        <b-link class="dropdown-item" href="#">Remove</b-link>
                    </div>
                </div>
            </div>
        </b-card-header>

        <b-card-body class="p-0">
            <div class="align-items-center p-3 justify-content-between d-flex">
                <div class="flex-shrink-0">
                    <div class="text-muted">
                        <span class="fw-semibold">4</span> of
                        <span class="fw-semibold">10</span> remaining
                    </div>
                </div>
                <b-button size="sm" type="button" variant="success">
                    <i class="ri-add-line align-middle me-1"></i> Add Task
                </b-button>
            </div>

            <div data-simplebar style="max-height: 219px">
                <ul class="list-group list-group-flush border-dashed px-3">
                    <li v-for="(item, index) in tasks" :key="index" class="list-group-item ps-0">
                        <div class="d-flex align-items-start">
                            <div class="form-check ps-0 flex-sharink-0">
                                <input :id="`${item.forId}`" class="form-check-input ms-0" type="checkbox"/>
                            </div>
                            <div class="flex-grow-1">
                                <label :for="`${item.forId}`" class="form-check-label mb-0 ps-2">{{ item.text }}</label>
                            </div>
                            <div class="flex-shrink-0 ms-2">
                                <p class="text-muted fs-12 mb-0">{{ item.date }}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="p-3 pt-2">
                <a class="text-muted text-decoration-underline" href="javascript:void(0);">Show more...</a>
            </div>
        </b-card-body>
    </b-card>
</template>
