<template>
    <div :class="{ 'active-dropzone': active }" class="dropzone position-relative" @dragenter.prevent="toggleActive"
         @dragleave.prevent="toggleActive" @dragover.prevent @drop.prevent="toggleActive">
        <label class="bg-light text-dark stretched-link" for="dropzoneFile">Drag and Drop your files or Browse</label>
        <input id="dropzoneFile" class="dropzoneFile btn btn-primary" type="file"/>
    </div>
</template>


<script>
import {ref} from "vue";

export default {
    name: "dropzone",
    setup() {
        const active = ref(false);
        const toggleActive = () => {
            active.value = !active.value;
        };
        return {
            active,
            toggleActive
        };
    },
};
</script>
