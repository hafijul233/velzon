<script>
import {ref, watch} from "vue";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DropZone from "@/components/widgets/dropZone";
import useVuelidate from "@vuelidate/core";

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";

import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
    page: {
        title: "Create Project",
        meta: [{name: "description", content: appConfig.description}],
    },
    setup() {
        let files = ref([]);
        let dropzoneFile = ref("");
        const drop = (e) => {
            dropzoneFile.value = e.dataTransfer.files[0];
            files.value.push(dropzoneFile.value);
        };
        const selectedFile = () => {
            dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
            files.value.push(dropzoneFile.value);
        };
        watch(
            () => [...files.value],
            (currentValue) => {
                return currentValue;
            }
        );
        return {dropzoneFile, files, drop, selectedFile, v$: useVuelidate()};
    },
    data() {
        return {
            title: "Create Project",
            items: [
                {
                    text: "Projects",
                    href: "/",
                },
                {
                    text: "Create Project",
                    active: true,
                },
            ],
            value: ["C#", "HTML", "CSS"],
            value3: ["Private"],
            value4: ["Designing"],
            value5: ["Ellen Smith"],
            value1: ["Inprogress"],
            value2: ["High"],
            editor: ClassicEditor,
            editorData:
                "<p>It will be as simple as occidental in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p><ul><li>Product Design, Figma (Software), Prototype</li><li>Four Dashboards : Ecommerce, Analytics, Project etc.</li><li>Create calendar, chat and email app pages.</li><li>Add authentication pages</li></ul>",
            content: "<h1>Some initial content</h1>",
        };
    },
    methods: {
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
    },
    components: {
        DropZone,
        Layout,
        PageHeader,
        ckeditor: CKEditor.component,
        Multiselect,
        flatPickr
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col lg="8">
                <b-card no-body>
                    <b-card-body>
                        <div class="mb-3">
                            <label class="form-label" for="project-title-input">Project Title</label>
                            <input id="project-title-input" class="form-control" placeholder="Enter project title"
                                   type="text"/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="project-thumbnail-img">Thumbnail Image</label>
                            <input id="project-thumbnail-img" accept="image/png, image/gif, image/jpeg"
                                   class="form-control"
                                   type="file"/>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Project Description</label>
                            <ckeditor v-model="editorData" :editor="editor"></ckeditor>
                        </div>

                        <b-row>
                            <b-col lg="4">
                                <div class="mb-3 mb-lg-0">
                                    <label class="form-label" for="choices-priority-input">Priority</label>

                                    <Multiselect v-model="value2" :close-on-select="true" :create-option="true"
                                                 :options="[
                      { value: 'High', label: 'High' },
                      { value: 'Medium', label: 'Medium' },
                      { value: 'Low', label: 'Low' },
                    ]"
                                                 :searchable="true"/>
                                </div>
                            </b-col>
                            <b-col lg="4">
                                <div class="mb-3 mb-lg-0">
                                    <label class="form-label" for="choices-status-input">Status</label>

                                    <Multiselect v-model="value1" :close-on-select="true" :create-option="true"
                                                 :options="[
                      { value: 'Inprogress', label: 'Inprogress' },
                      { value: 'Completed', label: 'Completed' },
                    ]"
                                                 :searchable="true"/>
                                </div>
                            </b-col>
                            <b-col lg="4">
                                <div>
                                    <label class="form-label" for="datepicker-deadline-input">Deadline</label>

                                    <flat-pickr v-model="date" :config="config"
                                                class="form-control flatpickr-input"></flat-pickr>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>

                <b-card no-body>
                    <b-card-header>
                        <h5 class="card-title mb-0">Attached files</h5>
                    </b-card-header>
                    <b-card-body>
                        <div>
                            <p class="text-muted">Add Attached files here.</p>

                            <DropZone class="mb-2" @change="selectedFile" @drop.prevent="drop"/>
                            <div class="vstack gap-2">
                                <div v-for="(file, index) of files" :key="index" class="border rounded">
                                    <div class="d-flex align-items-center p-2">
                                        <div class="flex-grow-1">
                                            <div class="pt-1">
                                                <h5 class="fs-14 mb-1" data-dz-name="">
                                                    {{ file.name }}
                                                </h5>
                                                <p class="fs-13 text-muted mb-0" data-dz-size="">
                                                    <strong>{{ file.size / 1024 }}</strong> KB
                                                </p>
                                                <strong class="error text-danger" data-dz-errormessage=""></strong>
                                            </div>
                                        </div>
                                        <div class="flex-shrink-0 ms-3">
                                            <b-button data-dz-remove="" size="sm" variant="danger"
                                                      @click="deleteRecord">
                                                Delete
                                            </b-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
                <div class="text-end mb-4">
                    <b-button class="w-sm me-1" type="button" variant="danger">Delete</b-button>
                    <b-button class="w-sm me-1" type="submit" variant="secondary"> Draft</b-button>
                    <b-button class="w-sm" type="submit" variant="success">Create</b-button>
                </div>
            </b-col>
            <b-col lg="4">
                <b-card no-body>
                    <b-card-header>
                        <h5 class="card-title mb-0">Privacy</h5>
                    </b-card-header>
                    <b-card-body>
                        <div>
                            <label class="form-label" for="choices-privacy-status-input">Status</label>
                            <Multiselect v-model="value3" :close-on-select="true" :create-option="true"
                                         :options="[
                { value: 'Private', label: 'Private' },
                { value: 'Team', label: 'Team' },
                { value: 'Public', label: 'Public' },
              ]" :searchable="true"/>
                        </div>
                    </b-card-body>
                </b-card>

                <b-card no-body>
                    <b-card-header>
                        <h5 class="card-title mb-0">Tags</h5>
                    </b-card-header>
                    <b-card-body>
                        <div class="mb-3">
                            <label class="form-label" for="choices-categories-input">Categories</label>
                            <Multiselect v-model="value4" :close-on-select="true" :create-option="true"
                                         :options="[
                { value: 'Designing', label: 'Designing' },
                { value: 'Development', label: 'Development' },
              ]" :searchable="true"/>
                        </div>

                        <div>
                            <label class="form-label" for="choices-text-input">Skills</label>
                            <Multiselect v-model="value" :close-on-select="true" :create-option="true" :options="[
                  { value: 'UI/UX', label: 'UI/UX' },
                  { value: 'Figma', label: 'Figma' },
                  { value: 'HTML', label: 'HTML' },
                  { value: 'CSS', label: 'CSS' },
                  { value: 'Javascript', label: 'Javascript' },
                  { value: 'C#', label: 'C#' },
                  { value: 'Nodejs', label: 'Nodejs' },
                ]"
                                         :searchable="true"
                                         class="form-control" mode="tags"/>
                        </div>
                    </b-card-body>
                </b-card>

                <b-card no-body>
                    <b-card-header>
                        <h5 class="card-title mb-0">Members</h5>
                    </b-card-header>
                    <b-card-body>
                        <div class="mb-3">
                            <label class="form-label" for="choices-lead-input">Team Lead</label>
                            <Multiselect v-model="value5" :close-on-select="true" :create-option="true"
                                         :options="[
                { value: 'Brent Gonzalez', label: 'Brent Gonzalez' },
                { value: 'Darline Williams', label: 'Darline Williams' },
                { value: 'Sylvia Wright', label: 'Sylvia Wright' },
                { value: 'Ellen Smith', label: 'Ellen Smith' },
                { value: 'Jeffrey Salazar', label: 'Jeffrey Salazar' },
                { value: 'Mark Williams', label: 'Mark Williams' },
              ]" :searchable="true"/>
                        </div>

                        <div>
                            <label class="form-label">Team Members</label>
                            <div class="avatar-group">
                                <b-link v-b-tooltip.hover class="avatar-group-item" href="javascript: void(0);"
                                        title="Brent Gonzalez">
                                    <div class="avatar-xs">
                                        <img alt="" class="rounded-circle img-fluid"
                                             src="@/assets/images/users/avatar-3.jpg"/>
                                    </div>
                                </b-link>
                                <b-link v-b-tooltip.hover class="avatar-group-item" href="javascript: void(0);"
                                        title="Sylvia Wright">
                                    <div class="avatar-xs">
                                        <div class="avatar-title rounded-circle bg-secondary">
                                            S
                                        </div>
                                    </div>
                                </b-link>
                                <b-link v-b-tooltip.hover class="avatar-group-item" href="javascript: void(0);"
                                        title="Ellen Smith">
                                    <div class="avatar-xs">
                                        <img alt="" class="rounded-circle img-fluid"
                                             src="@/assets/images/users/avatar-4.jpg"/>
                                    </div>
                                </b-link>
                                <b-link v-b-tooltip.hover class="avatar-group-item" href="javascript: void(0);"
                                        title="Add Members">
                                    <div class="avatar-xs" data-bs-target="#inviteMembersModal" data-bs-toggle="modal">
                                        <div
                                            class="avatar-title fs-16 rounded-circle bg-light border-dashed border text-primary">
                                            +
                                        </div>
                                    </div>
                                </b-link>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
