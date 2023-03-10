<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

export default {
    page: {
        title: "New Job",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "New Job",
            items: [
                {
                    text: "Jobs",
                    href: "/",
                },
                {
                    text: "New Job",
                    active: true,
                },
            ],
        };
    },
    components: {
        Layout,
        PageHeader,
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-form action="#">
                        <b-card-header>
                            <h5 class="card-title mb-0">Create Job</h5>
                        </b-card-header>
                        <b-card-body>
                            <b-row class="g-4">
                                <b-col lg="6">
                                    <div>
                                        <label class="form-label" for="job-title-Input">Job Title <span
                                            class="text-danger">*</span></label>
                                        <input id="job-title-Input" class="form-control" placeholder="Enter job title"
                                               required
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div>
                                        <label class="form-label" for="job-position-Input">Job Position <span
                                            class="text-danger">*</span></label>
                                        <input id="job-position-Input" class="form-control"
                                               placeholder="Enter job position"
                                               required
                                               type="text"/>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div>
                                        <label class="form-label" for="job-category-Input">Job Category <span
                                            class="text-danger">*</span></label>
                                        <select class="form-control" data-choices name="job-category-Input" required>
                                            <option value="">Select Category</option>
                                            <option value="Accounting & Finance">Accounting & Finance</option>
                                            <option value="Purchasing Manager">Purchasing Manager</option>
                                            <option value="Education & training">Education & training</option>
                                            <option value="Marketing & Advertising">Marketing & Advertising</option>
                                            <option value="It / Software Jobs">It / Software Jobs</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                            <option value="Administrative Officer">Administrative Officer</option>
                                            <option value="Government Jobs">Government Jobs</option>
                                        </select>
                                    </div>
                                </b-col>
                                <b-col lg="6">
                                    <div>
                                        <label class="form-label" for="job-type-Input">Job Type <span
                                            class="text-danger">*</span></label>
                                        <select class="form-control" data-choices name="job-type-Input" required>
                                            <option value="">Select job type</option>
                                            <option value="Full Time">Full Time</option>
                                            <option value="Part Time">Part Time</option>
                                            <option value="Freelance">Freelance</option>
                                            <option value="Intership">Intership</option>
                                        </select>
                                    </div>
                                </b-col>

                                <b-col lg="12">
                                    <div>
                                        <label class="form-label" for="description-field">Description <span
                                            class="text-danger">*</span></label>
                                        <textarea id="description-field" class="form-control"
                                                  placeholder="Enter description"
                                                  required
                                                  rows="3"></textarea>
                                    </div>
                                </b-col>

                                <b-col md="6">
                                    <div>
                                        <label class="form-label" for="vancancy-Input">No. of Vancancy <span
                                            class="text-danger">*</span></label>
                                        <input id="vancancy-Input" class="form-control" placeholder="No. of vancancy"
                                               required
                                               type="number"/>
                                    </div>
                                </b-col>
                                <b-col md="6">
                                    <div>
                                        <label class="form-label" for="experience-Input">Experience <span
                                            class="text-danger">*</span></label>
                                        <select class="form-control" data-choices name="experience-Input">
                                            <option value="">Select Experience</option>
                                            <option value="0 Year">0 Year</option>
                                            <option value="2 Yeasr">2 Years</option>
                                            <option value="3 Years">3 Years</option>
                                            <option value="4 Years">4 Years</option>
                                            <option value="5 Years">5 Years</option>
                                        </select>
                                    </div>
                                </b-col>

                                <b-col lg="6">
                                    <div>
                                        <label class="form-label" for="last-apply-date-Input">Last Date of Apply <span
                                            class="text-danger">*</span></label>
                                        <input id="last-apply-date-Input" class="form-control" data-date-format="d M, Y"
                                               data-provider="flatpickr"
                                               placeholder="Select date" required type="text"/>
                                    </div>
                                </b-col>

                                <b-col lg="6">
                                    <div>
                                        <label class="form-label" for="close-date-Input">Close Date <span
                                            class="text-danger">*</span></label>
                                        <input id="close-date-Input" class="form-control" data-date-format="d M, Y"
                                               data-provider="flatpickr"
                                               placeholder="Select date" required type="text"/>
                                    </div>
                                </b-col>

                                <b-col md="6">
                                    <div>
                                        <label class="form-label" for="start-salary-Input">Start Salary</label>
                                        <input id="start-salary-Input" class="form-control"
                                               placeholder="Enter start salary"
                                               required
                                               type="number"/>
                                    </div>
                                </b-col>

                                <b-col md="6">
                                    <div>
                                        <label class="form-label" for="last-salary-Input">Last Salary</label>
                                        <input id="last-salary-Input" class="form-control"
                                               placeholder="Enter end salary"
                                               required
                                               type="number"/>
                                    </div>
                                </b-col>

                                <b-col md="6">
                                    <div>
                                        <label class="form-label" for="country-Input">Country <span class="text-danger">*</span></label>
                                        <input id="country-Input" class="form-control" placeholder="Enter country"
                                               required type="text"/>
                                    </div>
                                </b-col>

                                <b-col md="6">
                                    <div>
                                        <label class="form-label" for="city-Input">State <span
                                            class="text-danger">*</span></label>
                                        <input id="city-Input" class="form-control" placeholder="Enter city" required
                                               type="text"/>
                                    </div>
                                </b-col>

                                <b-col lg="12">
                                    <div>
                                        <label class="form-label" for="website-field">Tags</label>
                                        <input id="choices-text-unique-values" class="form-control" data-choices
                                               data-choices-text-unique-true required type="text"
                                               value="Design, Remote"/>
                                    </div>
                                </b-col>

                                <b-col lg="12">
                                    <div class="hstack justify-content-end gap-2">
                                        <b-button type="button" variant="ghost-danger"><i
                                            class="ri-close-line align-bottom"></i>
                                            Cancel
                                        </b-button>
                                        <b-button type="submit" variant="primary">Add Job</b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-card-body>
                    </b-form>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
