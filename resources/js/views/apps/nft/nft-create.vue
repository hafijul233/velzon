<script>
import {ref, watch} from "vue";
import useVuelidate from "@vuelidate/core";
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import DropZone from "@/components/widgets/nftdropZone";

export default {
    data() {
        return {
            title: "Create NFT",
            items: [{
                text: "NFT Marketplace",
                href: "/",
            },
                {
                    text: "Create NFT",
                    active: true,
                },
            ],
        };
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

        return {
            dropzoneFile,
            files,
            drop,
            selectedFile,
            v$: useVuelidate()
        };
    },
    components: {
        Layout,
        PageHeader,
        DropZone,
    },
    methods: {
        deleteRecord(ele) {
            ele.target.parentElement.parentElement.parentElement.remove();
        },
    },
    mounted() {

    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col lg="12">
                <b-card no-body>
                    <b-card-header>
                        <h5 class="card-title mb-0">Create New File</h5>
                    </b-card-header>
                    <b-card-body>
                        <form>
                            <b-row class="g-3">
                                <b-col lg="12">
                                    <h5 class="fw-semibold mb-3">Image, Video, Audio, or 3D Model</h5>
                                    <DropZone @change="selectedFile" @drop.prevent="drop"/>
                                    <ul id="dropzone-preview" class="list-unstyled mb-0">
                                        <div v-for="(file, index) of files" :key="index" class="border rounded">
                                            <div class="d-flex p-2">
                                                <div class="flex-grow-1">
                                                    <div class="pt-1">
                                                        <h5 class="fs-14 mb-1" data-dz-name="">
                                                            {{ file.name }}
                                                        </h5>
                                                        <p class="fs-13 text-muted mb-0" data-dz-size="">
                                                            <strong>{{ file.size / 1024 }}</strong> KB
                                                        </p>
                                                        <strong class="error text-danger"
                                                                data-dz-errormessage=""></strong>
                                                    </div>
                                                </div>
                                                <div class="flex-shrink-0 ms-3">
                                                    <b-button data-dz-remove="" size="sm" variant="danger"
                                                              @click="deleteRecord"> Delete
                                                    </b-button>
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </b-col>
                                <b-col lg="12">
                                    <label class="form-label" for="productName">Product Name</label>
                                    <input id="productName" class="form-control" placeholder="Enter product name"
                                           type="text">
                                </b-col>
                                <b-col lg="12">
                                    <label class="form-label" for="discription">Discription</label>
                                    <textarea id="discription" class="form-control" placeholder="Enter discription"
                                              rows="3"></textarea>
                                </b-col>
                                <b-col lg="12">
                                    <label class="form-label" for="externalLink">External link</label>
                                    <input id="externalLink" class="form-control" placeholder="Enter external link"
                                           type="text">
                                </b-col>
                                <b-col lg="4">
                                    <label class="form-label" for="itemPrice">Item Price</label>
                                    <input id="itemPrice" class="form-control" placeholder="Price" type="text">
                                </b-col>
                                <b-col lg="4">
                                    <label class="form-label" for="size">Size</label>
                                    <input id="size" class="form-control" placeholder="Size" type="text">
                                </b-col>
                                <b-col lg="4">
                                    <label class="form-label" for="properties">Properties</label>
                                    <input id="properties" class="form-control" placeholder="Properties" type="text">
                                </b-col>
                                <b-col lg="12">
                                    <div>
                                        <div class="form-check form-check-inline">
                                            <input id="inlineCheckbox1" class="form-check-input" type="checkbox"
                                                   value="option1">
                                            <label class="form-check-label" for="inlineCheckbox1">Put on sale</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input id="inlineCheckbox2" class="form-check-input" type="checkbox"
                                                   value="option2">
                                            <label class="form-check-label" for="inlineCheckbox2">Instant sale
                                                price</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input id="inlineCheckbox3" class="form-check-input" type="checkbox"
                                                   value="option3">
                                            <label class="form-check-label" for="inlineCheckbox3">Unlock one
                                                purchased</label>
                                        </div>
                                    </div>
                                </b-col>
                                <b-col lg="12">
                                    <div class="text-end">
                                        <b-button variant="primary">Create Item</b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
