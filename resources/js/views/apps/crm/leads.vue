<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import Swal from "sweetalert2";
import axios from 'axios';
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/msoeawqm.json";
import animationData1 from "@/components/widgets/gsqxdxog.json";

export default {
    page: {
        title: "Leads",
        meta: [{
            name: "description",
            content: appConfig.description
        }],
    },
    components: {
        Layout,
        PageHeader,
        lottie: Lottie,
        Multiselect,
        flatPickr
    },
    data() {
        return {
            title: "Leads",
            addLeadsModal: false,
            items: [{
                text: "CRM",
                href: "/",
            },
                {
                    text: "Leads",
                    active: true,
                },
            ],
            timeConfig: {
                enableTime: false,
                dateFormat: "d M, Y",
            },
            date2: null,
            defaultOptions: {
                animationData: animationData
            },
            defaultOptions1: {
                animationData: animationData1
            },
            page: 1,
            perPage: 8,
            pages: [],
            value: null,
            searchQuery: null,
            date: null,
            tagvalue: null,
            tagoption: [{
                value: 'Lead',
                label: 'Lead'
            },
                {
                    value: 'Partner',
                    label: 'Partner'
                },
                {
                    value: 'Exiting',
                    label: 'Exiting'
                },
                {
                    value: 'Long-tern',
                    label: 'Long-tern'
                },
            ],
            rangeDateconfig: {
                mode: "range",
                dateFormat: "d M, Y",
            },
            leads: [{
                id: 1,
                leadsId: "#VZ2101",
                name: "Alexis Clarke",
                company: "Force Medicines",
                score: "147",
                phone: "580-464-4694",
                location: "Los Angeles, USA",
                date: "07 Apr, 2021",
            },
                {
                    id: 2,
                    leadsId: "#VZ2102",
                    name: "James Morris",
                    company: "iTest Factory",
                    score: "230",
                    phone: "863-577-5537",
                    location: "Phoenix, USA",
                    date: "15 Feb, 2021",
                },
                {
                    id: 3,
                    leadsId: "#VZ2103",
                    name: "Nancy Martino",
                    company: "Syntyce Solutions",
                    score: "159",
                    phone: "786-253-9927",
                    location: "London, UK",
                    date: "02 Jan, 2022",
                },
                {
                    id: 4,
                    leadsId: "#VZ2104",
                    name: "Michael Morris",
                    company: "Micro Design",
                    score: "352",
                    phone: "786-253-9927",
                    location: "Damascus, Syria",
                    date: "19 May, 2021",
                },
                {
                    id: 5,
                    leadsId: "#VZ2105",
                    name: "Kevin Dawson",
                    company: "Nesta Technologies",
                    score: "78",
                    phone: "213-741-4294",
                    location: "Bogota, Colombia",
                    date: "14 Apr, 2021",
                },
                {
                    id: 6,
                    leadsId: "#VZ2106",
                    name: "Herbert Stokes",
                    company: "Zoetic Fashion",
                    score: "85",
                    phone: "414-453-5725",
                    location: "Windhoek, Namibia",
                    date: "07 Jun, 2022",
                },
                {
                    id: 7,
                    leadsId: "#VZ2107",
                    name: "Glen Matney",
                    company: "Moetic Fashion",
                    score: "365",
                    phone: "515-395-1069",
                    location: "Berlin, Germany",
                    date: "02 Nov, 2021",
                },
                {
                    id: 8,
                    leadsId: "#VZ2108",
                    name: "Charles Kubik",
                    company: "Syntyce Solutions",
                    score: "236",
                    phone: "231-480-8536",
                    location: "Brasilia, Brazil",
                    date: "25 Sep, 2021",
                },
                {
                    id: 9,
                    leadsId: "#VZ2109",
                    name: "Thomas Taylor",
                    company: "Digitech Galaxy",
                    score: "754",
                    phone: "231-480-8536",
                    location: "Windhoek, Namibia",
                    date: "16 Sep, 2021",
                },
                {
                    id: 10,
                    leadsId: "#VZ21010",
                    name: "Tonya Noble",
                    company: "Micro Design",
                    score: "193",
                    phone: "745-321-9874",
                    location: "London, UK",
                    date: "23 Nov, 2021",
                },
                {
                    id: 11,
                    leadsId: "#VZ21011",
                    name: "Anna Martino",
                    company: "Syntyce Solutions",
                    score: "254",
                    phone: "654-987-0123",
                    location: "London, UK",
                    date: "02 Jan, 2022",
                },
            ],
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.leads);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.leadsId.toLowerCase().includes(search) ||
                        data.name.toLowerCase().includes(search) ||
                        data.company.toLowerCase().includes(search) ||
                        data.score.toString().toLowerCase().includes(search) ||
                        data.phone.toLowerCase().includes(search) ||
                        data.location.toLowerCase().includes(search) ||
                        data.date.toLowerCase().includes(search)
                    );
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        leads() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    filters: {
        trimWords(value) {
            return value.split(" ").splice(0, 20).join(" ") + "...";
        },
    },
    methods: {
        editdata(data) {
            this.addLeadsModal = true;
            document.querySelector('.exampleModalLabel').innerHTML = "Edit Lead";
            document.getElementById('id').value = data._id;
            document.getElementById('customername').value = data.name;
            document.getElementById('companyname').value = data.company;
            document.getElementById('leadsscore').value = data.score;
            document.getElementById('phone').value = data.phone;
            document.getElementById('location').value = data.location;
            document.getElementById('date').value = data.date;
            this.tagvalue = data.tags;
            document.getElementById('edit-btn').style.display = 'block';
            document.getElementById('add-btn').style.display = 'none';
        },
        updateorder() {
            let result = this.leads.findIndex(o => o._id == document.getElementById('id').value);
            this.leads[result].name = document.getElementById('customername').value;
            this.leads[result].company = document.getElementById('companyname').value;
            this.leads[result].score = document.getElementById('leadsscore').value;
            this.leads[result].phone = document.getElementById('phone').value;
            this.leads[result].location = document.getElementById('location').value;
            this.leads[result].tags = this.tagvalue;
            this.leads[result].date = document.getElementById('date').value;
            document.getElementById('closemodal').click();
            axios.patch(`https://api-node.themesbrand.website/apps/lead/${document.getElementById('id').value}`, this.leads[
                result])
                .then(() => {

                }).catch((er) => {
                console.log(er);
            });
        },
        deletedata(event) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                cancelButtonColor: "#f46a6a",
                confirmButtonColor: "#34c38f",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.value) {
                    this.leads.splice(this.leads.indexOf(event), 1);
                    axios.delete(`https://api-node.themesbrand.website/apps/contact/${event._id}`)
                        .then(() => {

                        }).catch((er) => {
                        console.log(er);
                    });
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
            });
        },
        deleteMultiple() {
            let ids_array = [];
            var items = document.getElementsByName("chk_child");
            items.forEach(function (ele) {
                if (ele.checked == true) {
                    var trNode = ele.parentNode.parentNode.parentNode;
                    var id = trNode.querySelector(".id a").innerHTML;
                    ids_array.push(id);
                }
            });
            if (typeof ids_array !== "undefined" && ids_array.length > 0) {
                if (confirm("Are you sure you want to delete this?")) {
                    var cusList = this.leads;
                    ids_array.forEach(function (id) {
                        cusList = cusList.filter(function (orders) {
                            return orders._id != id;
                        });
                    });
                    this.leads = cusList;
                    document.getElementById("checkAll").checked = false;
                    var itemss = document.getElementsByName("chk_child");
                    itemss.forEach(function (ele) {
                        if (ele.checked == true) {
                            ele.checked = false;
                            ele.closest("tr").classList.remove("table-active");
                        }
                    });
                } else {
                    return false;
                }
            } else {
                Swal.fire({
                    title: "Please select at least one checkbox",
                    confirmButtonClass: "btn btn-info",
                    buttonsStyling: false,
                    showCloseButton: true,
                });
            }
        },
        addorder() {
            var id = this.leads.length + 1;
            var name = document.getElementById('customername').value;
            var company = document.getElementById('companyname').value;
            var score = document.getElementById('leadsscore').value;
            var phone = document.getElementById('phone').value;
            var location = document.getElementById('location').value;
            var date = document.getElementById('date').value;

            var data = {
                id: id,
                name: name,
                company: company,
                score: score,
                phone: phone,
                location: location,
                date: date,
            };
            this.leads.push(data);
            axios.post(`https://api-node.themesbrand.website/apps/lead`, data)
                .then(() => {

                }).catch((er) => {
                console.log(er);
            });
            document.getElementById('closemodal').click();
            document.getElementById("addform").reset();
        },
        addnew() {
            this.addLeadsModal = true;
            this.tagvalue = null;
            document.getElementById("addform").reset();
            document.querySelector('.exampleModalLabel').innerHTML = "Add Leads";
            document.getElementById('add-btn').style.display = 'block';
            document.getElementById('edit-btn').style.display = 'none';
        },
        setPages() {
            let numberOfPages = Math.ceil(this.leads.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(leads) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return leads.slice(from, to);
        },
    },
    mounted() {
        var checkAll = document.getElementById("checkAll");
        if (checkAll) {
            checkAll.onclick = function () {
                var checkboxes = document.querySelectorAll(
                    '.form-check-all input[type="checkbox"]'
                );

                if (checkAll.checked == true) {
                    checkboxes.forEach(function (checkbox) {
                        checkbox.checked = true;
                        checkbox.closest("tr").classList.add("table-active");
                        document.getElementById('remove-actions').style.display = 'block';
                    });
                } else {
                    checkboxes.forEach(function (checkbox) {
                        checkbox.checked = false;
                        checkbox.closest("tr").classList.remove("table-active");
                        document.getElementById('remove-actions').style.display = 'none';
                    });
                }
            };
        }

        var checkboxes = document.querySelectorAll('#leadsList .form-check-input');
        Array.from(checkboxes).forEach(function (element) {
            element.addEventListener('change', function (event) {
                var checkedCount = document.querySelectorAll('#leadsList .form-check-input:checked').length;

                if (event.target.closest("tr").classList.contains("table-active")) {
                    (checkedCount > 0) ? document.getElementById("remove-actions").style.display = 'block' : document.getElementById("remove-actions").style.display = 'none';
                } else {
                    (checkedCount > 0) ? document.getElementById("remove-actions").style.display = 'block' : document.getElementById("remove-actions").style.display = 'none';
                }
            });
        });
    },
    beforeMount() {
        axios.get('https://api-node.themesbrand.website/apps/lead').then((data) => {
            this.leads = [];
            data.data.data.forEach((row) => {
                const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep",
                    "Oct", "Nov", "Dec"
                ];
                var dd = new Date(row.date);
                row.date = dd.getDate() + " " + monthNames[dd.getMonth()] + ", " + dd.getFullYear();
                row.image_src = 'https://api-node.themesbrand.website/images/users/' + row.image_src;
                this.leads.push(row);
            });
        }).catch((er) => {
            console.log(er);
        });

    },

};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col lg="12">
                <b-card id="leadsList" no-body>
                    <b-card-header class="border-0">
                        <b-row class="g-4 align-items-center">
                            <b-col sm="3">
                                <div class="search-box">
                                    <input v-model="searchQuery" class="form-control search" placeholder="Search for..."
                                           type="text"/>
                                    <i class="ri-search-line search-icon"></i>
                                </div>
                            </b-col>
                            <b-col class="ms-auto" sm="auto">
                                <div class="hstack gap-2">
                                    <b-button id="remove-actions" variant="soft-danger" @click="deleteMultiple">
                                        <i class="ri-delete-bin-2-line"></i>
                                    </b-button>
                                    <b-button data-bs-toggle="offcanvas" href="#offcanvasExample" type="button"
                                              variant="info">
                                        <i class="ri-filter-3-line align-bottom me-1"></i> Fliters
                                    </b-button>
                                    <b-button id="create-btn" class="add-btn" type="button" variant="success"
                                              @click="addnew">
                                        <i class="ri-add-line align-bottom me-1"></i> Add Leads
                                    </b-button>
                                    <span class="dropdown">
                    <button id="dropdownMenuButton1" aria-expanded="false" class="btn btn-soft-info btn-icon fs-14"
                            data-bs-toggle="dropdown" type="button">
                      <i class="ri-settings-4-line"></i>
                    </button>
                    <ul aria-labelledby="dropdownMenuButton1" class="dropdown-menu">
                      <li>
                        <b-link class="dropdown-item" href="#">Copy</b-link>
                      </li>
                      <li>
                        <b-link class="dropdown-item" href="#">Move to pipline</b-link>
                      </li>
                      <li>
                        <b-link class="dropdown-item" href="#">Add to exceptions</b-link>
                      </li>
                      <li>
                        <b-link class="dropdown-item" href="#">Switch to common form view</b-link>
                      </li>
                      <li>
                        <b-link class="dropdown-item" href="#">Reset form view to default</b-link>
                      </li>
                    </ul>
                  </span>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-header>
                    <b-card-body>
                        <div>
                            <div class="table-responsive table-card">
                                <table id="customerTable" class="table align-middle">
                                    <thead class="table-light">
                                    <tr>
                                        <th scope="col" style="width: 50px">
                                            <div class="form-check">
                                                <input id="checkAll" class="form-check-input" type="checkbox"
                                                       value="option"/>
                                            </div>
                                        </th>
                                        <th class="sort" data-sort="name">Name</th>
                                        <th class="sort" data-sort="company_name">Company</th>
                                        <th class="sort" data-sort="leads_score">Leads Score</th>
                                        <th class="sort" data-sort="phone">Phone</th>
                                        <th class="sort" data-sort="location">Location</th>
                                        <th class="sort" data-sort="tags">Tags</th>
                                        <th class="sort" data-sort="date">Create Date</th>
                                        <th class="sort" data-sort="action">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody class="list form-check-all">
                                    <tr v-for="(data, index) of resultQuery" :key="index">
                                        <th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" name="chk_child" type="checkbox"
                                                       value="option1"/>
                                            </div>
                                        </th>
                                        <td class="id" style="display: none">
                                            <b-link class="fw-medium link-primary" href="javascript:void(0);">
                                                {{ data._id }}
                                            </b-link>
                                        </td>
                                        <td class="">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0"><img :src="data.image_src" alt=""
                                                                                class="user_image avatar-xs rounded-circle">
                                                </div>
                                                <div class="flex-grow-1 ms-2 name">{{ data.name }}</div>
                                            </div>
                                        </td>
                                        <td class="company_name">{{ data.company }}</td>
                                        <td class="leads_score">{{ data.score }}</td>
                                        <td class="phone">{{ data.phone }}</td>
                                        <td class="location">{{ data.location }}</td>
                                        <td class="tags">
                        <span v-for="(tag, index) of data.tags" :key="index">
                          &nbsp;<b-badge class="badge-soft-primary" variant="soft-primary"> {{ tag }}</b-badge>
                        </span>
                                        </td>
                                        <td class="date">{{ data.date }}</td>
                                        <td>
                                            <ul class="list-inline hstack gap-2 mb-0">
                                                <li class="list-inline-item edit" data-bs-placement="top"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-trigger="hover" title="Call">
                                                    <b-link class="text-muted d-inline-block"
                                                            href="javascript:void(0);">
                                                        <i class="ri-phone-line fs-16"></i>
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item edit" data-bs-placement="top"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-trigger="hover" title="Message">
                                                    <b-link class="text-muted d-inline-block"
                                                            href="javascript:void(0);">
                                                        <i class="ri-question-answer-line fs-16"></i>
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item" data-bs-placement="top"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-trigger="hover" title="View">
                                                    <b-link href="javascript:void(0);"><i
                                                        class="ri-eye-fill align-bottom text-muted"></i>
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item" @click="editdata(data)">
                                                    <b-link class="edit-item-btn"><i
                                                        class="ri-pencil-fill align-bottom text-muted"></i>
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item" @click="deletedata(data)">
                                                    <b-link class="remove-item-btn">
                                                        <i class="ri-delete-bin-fill align-bottom text-muted"></i>
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div class="noresult" style="display: none">
                                    <div class="text-center">
                                        <lottie :height="75" :options="defaultOptions"
                                                :width="75"
                                                class="avatar-xl" colors="primary:#121331,secondary:#08a88a"/>
                                        <h5 class="mt-2">Sorry! No Result Found</h5>
                                        <p class="text-muted mb-0">
                                            We've searched more than 150+ Orders We did not find any
                                            orders for you search.
                                        </p>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-end p-3">
                                    <div class="pagination-wrap hstack gap-2">
                                        <b-link v-if="page != 1" class="page-item pagination-prev disabled" href="#"
                                                @click="page--">
                                            Previous
                                        </b-link>
                                        <ul class="pagination listjs-pagination mb-0">
                                            <li v-for="(pageNumber, index) in pages.slice(page - 1, page + 5)"
                                                :key="index" :class="{
                        active: pageNumber == page,
                        disabled: pageNumber == '...',
                      }"
                                                @click="page = pageNumber">
                                                <b-link class="page" href="#">{{ pageNumber }}</b-link>
                                            </li>
                                        </ul>
                                        <b-link v-if="page < pages.length" class="page-item pagination-next" href="#"
                                                @click="page++">
                                            Next
                                        </b-link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"
                             class="offcanvas offcanvas-end"
                             tabindex="-1">
                            <div class="offcanvas-header bg-light">
                                <h5 id="offcanvasExampleLabel" class="offcanvas-title">
                                    Leads Fliters
                                </h5>
                                <button aria-label="Close" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                        type="button"></button>
                            </div>
                            <!--end offcanvas-header-->
                            <b-form action="" class="d-flex flex-column justify-content-end h-100">
                                <div class="offcanvas-body">
                                    <div class="mb-4">
                                        <label class="form-label text-muted text-uppercase fw-semibold mb-3"
                                               for="datepicker-range">Date</label>
                                        <flat-pickr id="demo-datepicker" v-model="date" :config="rangeDateconfig"
                                                    class="form-control flatpickr-input"
                                                    placeholder="Select date"></flat-pickr>
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label text-muted text-uppercase fw-semibold mb-3"
                                               for="country-select">Country</label>

                                        <Multiselect v-model="value" :close-on-select="true" :create-option="true"
                                                     :options="[
                        { value: '', label: 'Select country' },
                        { value: 'Argentina', label: 'Argentina' },
                        { value: 'Belgium', label: 'Belgium' },
                        { value: 'Brazil', label: 'Brazil' },
                        { value: 'Colombia', label: 'Colombia' },
                        { value: 'Denmark', label: 'Denmark' },
                        { value: 'France', label: 'France' },
                        { value: 'Germany', label: 'Germany' },
                        { value: 'Mexico', label: 'Mexico' },
                        { value: 'Russia', label: 'Russia' },
                        { value: 'Spain', label: 'Spain' },
                        { value: 'Syria', label: 'Syria' },
                        { value: 'United Kingdom', label: 'United Kingdom' },
                        {
                          value: 'United States of America',
                          label: 'United States of America',
                        },
                      ]"
                                                     :searchable="true" class="form-control"/>
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label text-muted text-uppercase fw-semibold mb-3"
                                               for="status-select">Status</label>
                                        <b-row class="g-2">
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="inlineCheckbox1" class="form-check-input" type="checkbox"
                                                           value="option1"/>
                                                    <label class="form-check-label" for="inlineCheckbox1">New
                                                        Leads</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="inlineCheckbox2" class="form-check-input" type="checkbox"
                                                           value="option2"/>
                                                    <label class="form-check-label" for="inlineCheckbox2">Old
                                                        Leads</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="inlineCheckbox3" class="form-check-input" type="checkbox"
                                                           value="option3"/>
                                                    <label class="form-check-label" for="inlineCheckbox3">Loss
                                                        Leads</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="inlineCheckbox4" class="form-check-input" type="checkbox"
                                                           value="option4"/>
                                                    <label class="form-check-label" for="inlineCheckbox4">Follow
                                                        Up</label>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </div>
                                    <div class="mb-4">
                                        <label class="form-label text-muted text-uppercase fw-semibold mb-3"
                                               for="leadscore">Lead
                                            Score</label>
                                        <b-row class="g-2 align-items-center">
                                            <b-col lg>
                                                <input id="leadscore" class="form-control" placeholder="0"
                                                       type="number"/>
                                            </b-col>
                                            <b-col lg="auto">To</b-col>
                                            <b-col lg>
                                                <input id="leadscore" class="form-control" placeholder="0"
                                                       type="number"/>
                                            </b-col>
                                        </b-row>
                                    </div>
                                    <div>
                                        <label class="form-label text-muted text-uppercase fw-semibold mb-3"
                                               for="leads-tags">Tags</label>
                                        <b-row class="g-3">
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="marketing" class="form-check-input" type="checkbox"
                                                           value="marketing"/>
                                                    <label class="form-check-label" for="marketing">Marketing</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="management" class="form-check-input" type="checkbox"
                                                           value="management"/>
                                                    <label class="form-check-label" for="management">Management</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="business" class="form-check-input" type="checkbox"
                                                           value="business"/>
                                                    <label class="form-check-label" for="business">Business</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="investing" class="form-check-input" type="checkbox"
                                                           value="investing"/>
                                                    <label class="form-check-label" for="investing">Investing</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="partner" class="form-check-input" type="checkbox"
                                                           value="partner"/>
                                                    <label class="form-check-label" for="partner">Partner</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="lead" class="form-check-input" type="checkbox"
                                                           value="lead"/>
                                                    <label class="form-check-label" for="lead">Leads</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="sale" class="form-check-input" type="checkbox"
                                                           value="sale"/>
                                                    <label class="form-check-label" for="sale">Sale</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="owner" class="form-check-input" type="checkbox"
                                                           value="owner"/>
                                                    <label class="form-check-label" for="owner">Owner</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="banking" class="form-check-input" type="checkbox"
                                                           value="banking"/>
                                                    <label class="form-check-label" for="banking">Banking</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="banking" class="form-check-input" type="checkbox"
                                                           value="banking"/>
                                                    <label class="form-check-label" for="banking">Exiting</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="banking" class="form-check-input" type="checkbox"
                                                           value="banking"/>
                                                    <label class="form-check-label" for="banking">Finance</label>
                                                </div>
                                            </b-col>
                                            <b-col lg="6">
                                                <div class="form-check">
                                                    <input id="banking" class="form-check-input" type="checkbox"
                                                           value="banking"/>
                                                    <label class="form-check-label" for="banking">Fashion</label>
                                                </div>
                                            </b-col>
                                        </b-row>
                                    </div>
                                </div>
                                <!--end offcanvas-body-->
                                <div class="offcanvas-footer border-top p-3 text-center hstack gap-2">
                                    <b-button class="w-100" variant="light">Clear Filter</b-button>
                                    <b-button class="w-100" type="submit" variant="success">
                                        Filters
                                    </b-button>
                                </div>
                                <!--end offcanvas-footer-->
                            </b-form>
                        </div>
                        <!--end offcanvas-->
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <b-modal id="showmodal" v-model="addLeadsModal" centered class="v-modal-custom"
                 header-class="p-3 bg-soft-info" hide-footer size="lg" title-class="exampleModalLabel">
            <b-form id="addform" action="" autocomplete="off" class="tablelist-form">
                <input id="id" type="hidden"/>
                <b-row class="g-3">
                    <b-col lg="12">
                        <div>
                            <label class="form-label" for="name-field">Name</label>
                            <input id="customername" class="form-control" placeholder="Enter Name" required
                                   type="text"/>
                        </div>
                    </b-col>
                    <b-col lg="12">
                        <div>
                            <label class="form-label" for="company_name-field">Company Name</label>
                            <input id="companyname" class="form-control" placeholder="Enter company name" required
                                   type="text"/>
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div>
                            <label class="form-label" for="leads_score-field">Leads Score</label>
                            <input id="leadsscore" class="form-control" placeholder="Enter lead score" required
                                   type="text"/>
                        </div>
                    </b-col>
                    <b-col lg="6">
                        <div>
                            <label class="form-label" for="phone-field">Phone</label>
                            <input id="phone" class="form-control" placeholder="Enter phone no" required type="text"/>
                        </div>
                    </b-col>
                    <b-col lg="12">
                        <div>
                            <label class="form-label" for="location-field">Location</label>
                            <input id="location" class="form-control" placeholder="Enter location" required
                                   type="text"/>
                        </div>
                    </b-col>
                    <div>
                        <label class="form-label" for="">Tags</label>
                        <Multiselect v-model="tagvalue" :close-on-select="true" :create-option="false"
                                     :options="tagoption"
                                     :searchable="true" mode="tags"/>
                    </div>
                    <b-col lg="12">
                        <div>
                            <label class="form-label" for="date-field">Created Date</label>
                            <flat-pickr id="date" v-model="date2" :config="timeConfig"
                                        class="form-control flatpickr-input" placeholder="Select date"></flat-pickr>
                        </div>
                    </b-col>
                </b-row>
                <div class="modal-footer v-modal-footer mt-3">
                    <div class="hstack gap-2 justify-content-end">
                        <b-button id="closemodal" type="button" variant="light" @click="addLeadsModal = false">Close
                        </b-button>
                        <b-button id="add-btn" type="submit" variant="success" @click="addorder">Add leads</b-button>
                        <b-button id="edit-btn" type="button" variant="success" @click="updateorder">Update</b-button>
                    </div>
                </div>
            </b-form>
        </b-modal>
    </Layout>
</template>
