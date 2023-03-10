<script>
export default {
    setup() {
        return {};
    },
};
</script>

<template>
    <b-card no-body>
        <b-card-header class="align-items-center d-flex">
            <b-card-title class="mb-0 flex-grow-1 py-1">My Tasks</b-card-title>
            <div class="flex-shrink-0">
                <div class="dropdown card-header-dropdown">
                    <b-link aria-expanded="false" aria-haspopup="true" class="text-reset dropdown-btn" data-bs-toggle="dropdown"
                            href="#">
                        <span class="text-muted">All Tasks <i class="mdi mdi-chevron-down ms-1"></i></span>
                    </b-link>
                    <div class="dropdown-menu dropdown-menu-end">
                        <b-link class="dropdown-item" href="#">All Tasks</b-link>
                        <b-link class="dropdown-item" href="#">Completed</b-link>
                        <b-link class="dropdown-item" href="#">Inprogress</b-link>
                        <b-link class="dropdown-item" href="#">Pending</b-link>
                    </div>
                </div>


            </div>
        </b-card-header>
        <b-card-body>
            <div class="table-responsive table-card">
                <table class="table table-borderless table-nowrap table-centered align-middle mb-0">
                    <thead class="table-light text-muted">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Dedline</th>
                        <th scope="col">Status</th>
                        <th scope="col">Assignee</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div class="form-check">
                                <input id="checkTask1" class="form-check-input fs-15" type="checkbox" value=""/>
                                <label class="form-check-label ms-2" for="checkTask1">
                                    Create new Admin Template
                                </label>
                            </div>
                        </td>
                        <td class="text-muted">03 Nov 2021</td>
                        <td>
                            <b-badge class="badge-soft-success" variant="soft-success">Completed</b-badge>
                        </td>
                        <td>
                            <b-link class="d-inline-block" data-bs-original-title="Mary Stoner" data-bs-placement="top"
                                    data-bs-toggle="tooltip" href="javascript: void(0);" title="">
                                <img alt="" class="rounded-circle avatar-xxs" src="@/assets/images/users/avatar-2.jpg"/>
                            </b-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-check">
                                <input id="checkTask2" class="form-check-input fs-15" type="checkbox" value=""/>
                                <label class="form-check-label ms-2" for="checkTask2">
                                    Marketing Coordinator
                                </label>
                            </div>
                        </td>
                        <td class="text-muted">17 Nov 2021</td>
                        <td>
                            <b-badge class="badge-soft-warning" variant="soft-warning">Progress</b-badge>
                        </td>
                        <td>
                            <b-link class="d-inline-block" data-bs-original-title="Den Davis" data-bs-placement="top"
                                    data-bs-toggle="tooltip" href="javascript: void(0);" title="">
                                <img alt="" class="rounded-circle avatar-xxs" src="@/assets/images/users/avatar-7.jpg"/>
                            </b-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-check">
                                <input id="checkTask3" class="form-check-input fs-15" type="checkbox" value=""/>
                                <label class="form-check-label ms-2" for="checkTask3">
                                    Administrative Analyst
                                </label>
                            </div>
                        </td>
                        <td class="text-muted">26 Nov 2021</td>
                        <td>
                            <b-badge class="badge-soft-success" variant="soft-success">Completed</b-badge>
                        </td>
                        <td>
                            <b-link class="d-inline-block" data-bs-original-title="Alex Brown" data-bs-placement="top"
                                    data-bs-toggle="tooltip" href="javascript: void(0);" title="">
                                <img alt="" class="rounded-circle avatar-xxs" src="@/assets/images/users/avatar-6.jpg"/>
                            </b-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-check">
                                <input id="checkTask4" class="form-check-input fs-15" type="checkbox" value=""/>
                                <label class="form-check-label ms-2" for="checkTask4">
                                    E-commerce Landing Page
                                </label>
                            </div>
                        </td>
                        <td class="text-muted">10 Dec 2021</td>
                        <td>
                            <b-badge class="badge-soft-danger" variant="soft-danger">Pending</b-badge>
                        </td>
                        <td>
                            <b-link class="d-inline-block" data-bs-original-title="Prezy Morin" data-bs-placement="top"
                                    data-bs-toggle="tooltip" href="javascript: void(0);" title="">
                                <img alt="" class="rounded-circle avatar-xxs" src="@/assets/images/users/avatar-5.jpg"/>
                            </b-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-check">
                                <input id="checkTask5" class="form-check-input fs-15" type="checkbox" value=""/>
                                <label class="form-check-label ms-2" for="checkTask5">
                                    UI/UX Design
                                </label>
                            </div>
                        </td>
                        <td class="text-muted">22 Dec 2021</td>
                        <td>
                            <b-badge class="badge-soft-warning" variant="soft-warning">Progress</b-badge>
                        </td>
                        <td>
                            <b-link class="d-inline-block" data-bs-original-title="Stine Nielsen" data-bs-placement="top"
                                    data-bs-toggle="tooltip" href="javascript: void(0);" title="">
                                <img alt="" class="rounded-circle avatar-xxs" src="@/assets/images/users/avatar-1.jpg"/>
                            </b-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-check">
                                <input id="checkTask6" class="form-check-input fs-15" type="checkbox" value=""/>
                                <label class="form-check-label ms-2" for="checkTask6">
                                    Projects Design
                                </label>
                            </div>
                        </td>
                        <td class="text-muted">31 Dec 2021</td>
                        <td>
                            <b-badge class="badge-soft-danger" variant="soft-danger">Pending</b-badge>
                        </td>
                        <td>
                            <b-link class="d-inline-block" data-bs-original-title="Jansh William" data-bs-placement="top"
                                    data-bs-toggle="tooltip" href="javascript: void(0);" title="">
                                <img alt="" class="rounded-circle avatar-xxs" src="@/assets/images/users/avatar-4.jpg"/>
                            </b-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="mt-3 text-center">
                <b-link class="text-muted text-decoration-underline" href="javascript:void(0);">Load More</b-link>
            </div>
        </b-card-body>
    </b-card>
</template>
