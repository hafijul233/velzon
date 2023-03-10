<script>
import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

export default {
    page: {
        title: "Mask",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Input Mask",
            items: [
                {
                    text: "Forms",
                    href: "/",
                },
                {
                    text: "Input Mask",
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
                    <b-card-header>
                        <b-card-title class="mb-0">Examples</b-card-title>
                    </b-card-header>

                    <b-card-body>
                        <form action="#">
                            <div>
                                <b-row>
                                    <b-col xl="6">
                                        <div>
                                            <label class="form-label" for="regexp-mask">Dynamic mask</label>
                                            <input id="regexp-mask" v-maska="['# cm', '#.# cm', '#.## cm']"
                                                   class="form-control" type="text">
                                            <div class="text-muted">["# cm", "#.# cm", "#.## cm"]</div>
                                        </div>

                                        <div class="mt-4">
                                            <label class="form-label" for="phone-mask">Phone with code</label>
                                            <input id="phone-mask" v-maska="['+1 (###) ##-##-##', '+1 (###) ###-##-##']"
                                                   class="form-control"
                                                   type="text">
                                            <div class="text-muted">+1 (###) ###-####</div>
                                        </div>
                                        <div class="mt-4">
                                            <label class="form-label" for="number-mask">Credit card</label>
                                            <input id="number-mask" v-maska="'#### #### #### ####'" class="form-control"
                                                   type="text">
                                            <div class="text-muted">#### #### #### ####</div>
                                        </div>

                                    </b-col>

                                    <b-col xl="6">
                                        <div>
                                            <label class="form-label" for="date-mask">Date</label>
                                            <input id="date-mask" v-maska="'##/##/####'" class="form-control"
                                                   type="text">
                                            <div class="text-muted">##/##/####</div>
                                        </div>

                                        <div class="mt-4">
                                            <label class="form-label">Hex color</label>
                                            <input id="dynamic-mask"
                                                   v-maska="{ mask: ['!#HHHHHH', '!#HHHHHH-HH'], tokens: { 'H': { pattern: /[0-9a-fA-F]/, uppercase: true } } }"
                                                   class="form-control" type="text">
                                            <div class="text-muted">!#HHHHHH</div>
                                        </div>
                                        <div class="mt-4">
                                            <label class="form-label">CPF/CNPJ</label>
                                            <input id="currency-mask" v-maska="['###.###.###-##', '##.###.###/####-##']"
                                                   class="form-control"
                                                   type="text">
                                            <div class="text-muted">["###.###.###-##", "##.###.###/####-##"]</div>
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>

                        </form>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
