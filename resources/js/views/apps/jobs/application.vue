<script>
import Layout from "../../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../../app.config";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/msoeawqm.json";
import animationData1 from "@/components/widgets/gsqxdxog.json";
import Swal from "sweetalert2";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";


export default {
    page: {
        title: "Application",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Application",
            items: [
                {
                    text: "Jobs",
                    href: "/",
                },
                {
                    text: "Application",
                    active: true,
                },
            ],
            createAppModal: false,
            status: null,
            status1: null,
            value: null,
            value1: null,
            searchQuery: null,
            statusvalue: null,
            jobvalue: null,
            date2: null,
            timeConfig: {
                enableTime: false,
                dateFormat: "d M, Y",
            },
            page: 1,
            perPage: 8,
            pages: [],
            statuscategory: 'All',
            application: [
                {
                    id: "001",
                    img: require("@/assets/images/companies/img-4.png"),
                    name: "Syntyce Solutions",
                    designation: "Web Designer",
                    date: "30 Sep, 2022",
                    contacts: "785-685-4616",
                    type: "Full Time",
                    status: "Rejected"
                },
                {
                    id: "002",
                    img: require("@/assets/images/brands/slack.png"),
                    name: "Plunkett Infotech",
                    designation: "Product Designer",
                    date: "26 Sep, 2022",
                    contacts: "734-544-2407",
                    type: "Full Time",
                    status: "New"
                }, {
                    id: "003",
                    img: require("@/assets/images/companies/img-4.png"),
                    name: "Martin's",
                    designation: "Business Associate",
                    date: "26 Sep, 2022",
                    contacts: "303-606-1985",
                    type: "Part Time",
                    status: "New"
                }, {
                    id: "004",
                    img: require("@/assets/images/companies/img-3.png"),
                    name: "Meta4Systems",
                    designation: "Magento Developer",
                    date: "27 Sep, 2022",
                    contacts: "610-440-0592",
                    type: "Part Time",
                    status: "Rejected"
                }, {
                    id: "005",
                    img: require("@/assets/images/companies/img-4.png"),
                    name: "Grey Fade",
                    designation: "Marketing Director",
                    date: "28 Sep, 2022",
                    contacts: "907-452-3702",
                    type: "Full Time",
                    status: "Pending"
                }, {
                    id: "006",
                    img: require("@/assets/images/brands/mail_chimp.png"),
                    name: "Syntyce Solutions",
                    designation: "Project Manager",
                    date: "28 Sep, 2022",
                    contacts: "803-740-3309",
                    type: "Part Time",
                    status: "Approved"
                }, {
                    id: "007",
                    img: require("@/assets/images/brands/dropbox.png"),
                    name: "Micro Design",
                    designation: "HTML Developer",
                    date: "29 Sep, 2022",
                    contacts: "563-940-8926",
                    type: "Part Time",
                    status: "New"
                }, {
                    id: "008",
                    img: require("@/assets/images/companies/img-6.png"),
                    name: "Android Galaxy",
                    designation: "Product Sales Specialist",
                    date: "29 Sep, 2022",
                    contacts: "352-403-5870",
                    type: "Full Time",
                    status: "Pending"
                }, {
                    id: "009",
                    img: require("@/assets/images/companies/img-1.png"),
                    name: "Digitech Galaxy",
                    designation: "Magento Developer",
                    date: "29 Sep, 2022",
                    contacts: "517-745-4446",
                    type: "Part Time",
                    status: "New"
                }, {
                    id: "010",
                    img: require("@/assets/images/brands/bitbucket.png"),
                    name: "iTest Factory",
                    designation: "Business Associate",
                    date: "30 Sep, 2022",
                    contacts: "814-434-0128",
                    type: "Part Time",
                    status: "Approved"
                }, {
                    id: "011",
                    img: require("@/assets/images/brands/dribbble.png"),
                    name: "Nesta Technologies",
                    designation: "UI/UX Designer",
                    date: "01 Sep, 2022",
                    contacts: "304-338-0822",
                    type: "Part Time",
                    status: "Pending"
                }, {
                    id: "012",
                    img: require("@/assets/images/companies/img-4.png"),
                    name: "Digitech Galaxy",
                    designation: "Product Designer",
                    date: "02 Sep, 2022",
                    contacts: "320-336-1796",
                    type: "Full Time",
                    status: "New"
                }, {
                    id: "012",
                    img: require("@/assets/images/brands/slack.png"),
                    name: "Syntyce Solutions",
                    designation: "Web Designer",
                    date: "02 Sep, 2022",
                    contacts: "785-685-4616",
                    type: "Full Time",
                    status: "Rejected"
                }
            ],
            defaultOptions: {
                animationData: animationData
            },
            defaultOptions1: {
                animationData: animationData1
            },
            isType: null,
        };
    },
    computed: {
        displayedPosts() {
            return this.paginate(this.application);
        },
        resultQuery() {
            if (this.searchQuery) {
                const search = this.searchQuery.toLowerCase();
                return this.displayedPosts.filter((data) => {
                    return (
                        data.name.toLowerCase().includes(search) ||
                        data.designation.toLowerCase().includes(search) ||
                        data.type.toLowerCase().includes(search) ||
                        data.contacts.toLowerCase().includes(search) ||
                        data.status.toLowerCase().includes(search)
                    );
                });
            } else if (this.status !== null || this.value !== null) {
                return this.displayedPosts.filter((data) => {
                    if (this.status != null && this.value != null) {
                        if (this.status === data.status) {
                            if (this.value === data.type) {
                                return data;
                            } else if (this.value == 'All') {
                                return data;
                            }
                        } else if (this.value == 'All' && this.status == 'All') {
                            return data;
                        } else if (this.status == 'All') {
                            if (this.value === data.type) {
                                return data;
                            }
                        }
                    } else if (this.status === data.status) {
                        return data;
                    } else if (this.value === data.type) {
                        return data;
                    } else if (this.status == 'All' || this.value == 'All') {
                        return data;
                    } else {
                        return null;
                    }
                });
            } else {
                return this.displayedPosts;
            }
        },
    },
    watch: {
        application() {
            this.setPages();
        },
    },
    created() {
        this.setPages();
    },
    methods: {
        setPages() {
            let numberOfPages = Math.ceil(this.application.length / this.perPage);
            this.pages = [];
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate(application) {
            let page = this.page;
            let perPage = this.perPage;
            let from = page * perPage - perPage;
            let to = page * perPage;
            return application.slice(from, to);
        },
        changecategory(data) {
            this.statuscategory = data;
        },
        onChangeStatus(e) {
            this.statuscategory = e;
        },
        onChangeType(e) {
            this.isType = e;
        },
        SearchData() {
            this.resultQuery;
            this.status = this.status1;
            this.value = this.value1;
        },

        handleApplicationdetails(e, item) {
            this.createAppModal = true;
            const modalHeader = document.querySelector('.exampleModalLabel');
            const addbtn = document.getElementById('add-btn');
            const editbtn = document.getElementById('edit-btn');

            if (e.path[1].id == "create-btn") {
                document.getElementById("addform").reset();
                modalHeader.innerHTML = "Add Application";
                addbtn.style.display = 'block';
                editbtn.style.display = 'none';

            } else {
                modalHeader.innerHTML = "Edit Application";
                addbtn.style.display = 'none';
                editbtn.style.display = 'block';

                document.getElementById("id-field").value = item.id;
                document.getElementById("companylogo-image-input").src = item.img;
                document.getElementById("company-field").value = item.name;
                document.getElementById("designation-field").value = item.designation;
                document.getElementById("date-field").value = item.date;
                document.getElementById("contact-field").value = item.contacts;
            }
        },

        deleteApplication(event) {
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
                    console.log("this.application.indexOf(event)", this.application.indexOf(event));
                    this.application.splice(this.application.indexOf(event), 1);
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
                    var newid = trNode.querySelector(".id a").innerHTML;
                    var id = newid.slice(3);
                    ids_array.push(id);
                }
            });
            if (typeof ids_array !== "undefined" && ids_array.length > 0) {
                if (confirm("Are you sure you want to delete this?")) {
                    var cusList = this.application;
                    ids_array.forEach(function (id) {
                        cusList = cusList.filter(function (application) {
                            console.log('application', application);
                            return application.id != id;
                        });
                    });
                    this.application = cusList;
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

        handleApplication() {
            const companyfield = document.getElementById('company-field').value;
            const designationfield = document.getElementById('designation-field').value;
            const contactfield = document.getElementById('contact-field').value;
            const date = document.getElementById('date-field').value;
            const closebtn = document.getElementById("close-modal");

            if (document.querySelector('.exampleModalLabel').innerHTML == "Add Application") {
                const id = this.application.length + 1;

                if (id != null && companyfield != null && designationfield != null && contactfield != null) {
                    const data = {
                        id: id,
                        img: require("@/assets/images/companies/img-4.png"),
                        name: companyfield,
                        designation: designationfield,
                        contacts: contactfield,
                        date: (date || new Date().toUTCString().slice(5, 16)),
                        type: (this.jobvalue || "Full Time"),
                        status: (this.statusvalue || "New")
                    };
                    closebtn.click();
                    this.application.unshift(data);
                }
                document.getElementById("addform").reset();
            } else {
                this.application;
                const id = document.getElementById("id-field").value;

                this.application.forEach(element => {
                    if (element.id.toString() == id.toString()) {
                        element.name = companyfield,
                            element.designation = designationfield,
                            element.contacts = contactfield,
                            element.date = (date || new Date().toUTCString().slice(5, 16)),
                            element.type = (this.jobvalue || "Full Time"),
                            element.status = (this.statusvalue || "New");
                    }
                });
                closebtn.click();
            }
        }

    },
    components: {
        Layout,
        PageHeader,
        lottie: Lottie,
        Multiselect,
        flatPickr
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

        var checkboxes = document.querySelectorAll('#applicationList .form-check-input');
        Array.from(checkboxes).forEach(function (element) {
            element.addEventListener('change', function (event) {
                var checkedCount = document.querySelectorAll('#applicationList .form-check-input:checked').length;

                if (event.target.closest("tr").classList.contains("table-active")) {
                    (checkedCount > 0) ? document.getElementById("remove-actions").style.display = 'block' : document.getElementById("remove-actions").style.display = 'none';
                } else {
                    (checkedCount > 0) ? document.getElementById("remove-actions").style.display = 'block' : document.getElementById("remove-actions").style.display = 'none';
                }
            });
        });
    }
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>
        <b-row>
            <b-col lg="12">
                <b-card id="applicationList" no-body>
                    <b-card-header class="border-0">
                        <div class="d-md-flex align-items-center">
                            <h5 class="card-title mb-3 mb-md-0 flex-grow-1">Job Application</h5>
                            <div class="flex-shrink-0">
                                <div class="d-flex gap-1 flex-wrap">
                                    <b-button id="create-btn" class="add-btn" type="button" variant="success"
                                              @click="(e) => handleApplicationdetails(e)"><i
                                        class="ri-add-line align-bottom me-1"></i>
                                        Create
                                        Application
                                    </b-button>
                                    <b-button type="button" variant="info"><i
                                        class="ri-file-download-line align-bottom me-1"></i>Import
                                    </b-button>
                                    <b-button id="remove-actions" class="btn btn-soft-danger" @click="deleteMultiple"><i
                                        class="ri-delete-bin-2-line"></i></b-button>
                                </div>
                            </div>
                        </div>
                    </b-card-header>
                    <b-card-body class="border border-dashed border-end-0 border-start-0">
                        <b-form>
                            <b-row class="g-3">
                                <b-col sm="6" xxl="5">
                                    <div class="search-box">
                                        <input v-model="searchQuery" class="form-control search"
                                               placeholder="Search for application ID, company, designation status or something..."
                                               type="text">
                                        <i class="ri-search-line search-icon"></i>
                                    </div>
                                </b-col>
                                <b-col sm="6" xxl="2">
                                    <div>
                                        <input id="demo-datepicker" class="form-control" data-date-format="d M, Y"
                                               data-provider="flatpickr"
                                               data-range-date="true" placeholder="Select date" type="text">
                                    </div>
                                </b-col>
                                <b-col sm="4" xxl="2">
                                    <div>
                                        <Multiselect v-model="status1" :close-on-select="true" :create-option="true"
                                                     :options="[
  { value: 'All', label: 'All' },
  { value: 'Approved', label: 'Approved' },
  { value: 'New', label: 'New' },
  { value: 'Pending', label: 'Pending' },
  { value: 'Rejected', label: 'Rejected' },
]"
                                                     :searchable="true" class="form-control"
                                                     placeholder="Select Status"/>
                                    </div>
                                </b-col>
                                <b-col sm="4" xxl="2">
                                    <div>

                                        <Multiselect v-model="value1" :close-on-select="true" :create-option="true"
                                                     :options="[
  { value: 'All', label: 'All' },
  { value: 'Full Time', label: 'Full Time' },
  { value: 'Part Time', label: 'Part Time' },
]"
                                                     :searchable="true" class="form-control" placeholder="Select Type"/>
                                    </div>
                                </b-col>
                                <b-col sm="4" xxl="1">
                                    <div>
                                        <b-button class="w-100" type="button" variant="primary" @click="SearchData"><i
                                            class="ri-equalizer-fill me-1 align-bottom"></i>
                                            Filters
                                        </b-button>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-card-body>
                    <b-card-body class="pt-0">
                        <div>
                            <ul class="nav nav-tabs nav-tabs-custom nav-success mb-3" role="tablist">
                                <li class="nav-item">
                                    <b-link id="All" aria-selected="true" class="nav-link active All py-3"
                                            data-bs-toggle="tab"
                                            href="#"
                                            role="tab" @click="changecategory('All')">
                                        All Application
                                    </b-link>
                                </li>
                                <li class="nav-item">
                                    <b-link id="New" aria-selected="false" class="nav-link py-3 New"
                                            data-bs-toggle="tab" href="#"
                                            role="tab" @click="changecategory('New')">
                                        New
                                    </b-link>
                                </li>
                                <li class="nav-item">
                                    <b-link id="Pending" aria-selected="false" class="nav-link py-3 Pending"
                                            data-bs-toggle="tab"
                                            href="#"
                                            role="tab" @click="changecategory('Pending')">
                                        Pending
                                        <b-badge class="align-middle ms-1" variant="danger">2</b-badge>
                                    </b-link>
                                </li>
                                <li class="nav-item">
                                    <b-link id="Approved" aria-selected="false" class="nav-link py-3 Approved"
                                            data-bs-toggle="tab"
                                            href="#"
                                            role="tab" @click="changecategory('Approved')">
                                        Approved
                                    </b-link>
                                </li>
                                <li class="nav-item">
                                    <b-link id="Rejected" aria-selected="false" class="nav-link py-3 Rejected"
                                            data-bs-toggle="tab"
                                            href="#"
                                            role="tab" @click="changecategory('Rejected')">
                                        Rejected
                                    </b-link>
                                </li>
                            </ul>

                            <div class="table-responsive table-card mb-1">
                                <table id="jobListTable" class="table table-nowrap align-middle">
                                    <thead class="text-muted table-light">
                                    <tr class="text-uppercase">
                                        <th scope="col" style="width: 25px;">
                                            <div class="form-check">
                                                <input id="checkAll" class="form-check-input" type="checkbox"
                                                       value="option">
                                            </div>
                                        </th>
                                        <th class="sort" data-sort="id" style="width: 140px;">Application ID</th>
                                        <th class="sort" data-sort="company">Company Name</th>
                                        <th class="sort" data-sort="designation">Designation</th>
                                        <th class="sort" data-sort="date">Apply Date</th>
                                        <th class="sort" data-sort="contacts">Contacts</th>
                                        <th class="sort" data-sort="type">Type</th>
                                        <th class="sort" data-sort="status">Status</th>
                                        <th class="sort" data-sort="city">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody v-for="(data, index) of resultQuery" :key="index"
                                           class="list form-check-all">
                                    <tr v-if="statuscategory == 'All' || statuscategory == data.status">
                                        <th scope="row">
                                            <div class="form-check">
                                                <input class="form-check-input" name="chk_child" type="checkbox"
                                                       value="option1">
                                            </div>
                                        </th>
                                        <td class="id">
                                            <b-link class="fw-medium link-primary" href="#">#VZ{{ data.id }}</b-link>
                                        </td>
                                        <td class="company">
                                            <div class="d-flex align-items-center">
                                                <div class="flex-shrink-0">
                                                    <img :src="data.img" alt=""
                                                         class="avatar-xxs rounded-circle image_src object-cover">
                                                </div>
                                                <div class="flex-grow-1 ms-2">{{ data.name }}</div>
                                            </div>
                                        </td>
                                        <td class="designation">{{ data.designation }}</td>
                                        <td class="date">{{ data.date }}</td>
                                        <td class="contacts">{{ data.contacts }}</td>
                                        <td class="type">{{ data.type }}</td>
                                        <td class="status"><span :class="{
  'badge-soft-success': data.status == 'Approved',
  'badge-soft-warning': data.status == 'Pending',
  'badge-soft-danger': data.status == 'Rejected',
  'badge-soft-info': data.status == 'New',
}" class="badge text-uppercase">{{ data.status }}</span>
                                        </td>
                                        <td>
                                            <ul class="list-inline hstack gap-2 mb-0">
                                                <li v-b-tooltip.hover class="list-inline-item" title="View">
                                                    <b-link class="text-primary d-inline-block"
                                                            href="/apps-job-details">
                                                        <i class="ri-eye-fill fs-16"></i>
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item edit" data-bs-placement="top"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-trigger="hover" title="Edit">
                                                    <b-link class="text-primary d-inline-block edit-item-btn"
                                                            @click="(e) => handleApplicationdetails(e, data)">
                                                        <i class="ri-pencil-fill fs-16"></i>
                                                    </b-link>
                                                </li>
                                                <li class="list-inline-item" data-bs-placement="top"
                                                    data-bs-toggle="tooltip"
                                                    data-bs-trigger="hover" title="Remove">
                                                    <b-link class="text-danger d-inline-block remove-item-btn"
                                                            @click="deleteApplication(data)">
                                                        <i class="ri-delete-bin-5-fill fs-16"></i>
                                                    </b-link>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div :class="{ 'd-block': resultQuery.length == 0 }" class="noresult"
                                     style="display: none">
                                    <div class="text-center">
                                        <lottie :height="75" :options="defaultOptions"
                                                :width="75"
                                                class="avatar-xl" colors="primary:#121331,secondary:#08a88a"/>
                                        <h5 class="mt-2">Sorry! No Result Found</h5>
                                        <p class="text-muted mb-0">
                                            We've searched more than 150+ result We did not find jobs for you search.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div class="d-flex justify-content-end">
                                <div class="pagination-wrap hstack gap-2">
                                    <b-link v-if="page != 1" class="page-item pagination-prev disabled" href="#"
                                            @click="page--">
                                        Previous
                                    </b-link>
                                    <ul class="pagination listjs-pagination mb-0">
                                        <li v-for="(pageNumber, index) in pages"
                                            :key="index"
                                            :class="{ active: pageNumber == page, disabled: pageNumber == '...', }"
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

                        <!-- create app modal  -->
                        <b-modal id="showModal" v-model="createAppModal" centered class="v-modal-custom"
                                 hide-footer no-close-on-backdrop title-class="exampleModalLabel">
                            <b-form id="addform" action="#" autocomplete="off" class="tablelist-form">
                                <input id="id-field" type="hidden"/>

                                <div id="modal-id" class="mb-3 d-none">
                                    <label class="form-label" for="applicationId">ID</label>
                                    <input id="applicationId" class="form-control" placeholder="ID" readonly
                                           type="text"/>
                                </div>

                                <div class="text-center">
                                    <div class="position-relative d-inline-block">
                                        <div class="position-absolute  bottom-0 end-0">
                                            <label class="mb-0" data-bs-placement="right" data-bs-toggle="tooltip"
                                                   for="companylogo-image-input" title="Select Image">
                                                <div class="avatar-xs cursor-pointer">
                                                    <div class="avatar-title bg-light border rounded-circle text-muted">
                                                        <i class="ri-image-fill"></i>
                                                    </div>
                                                </div>
                                            </label>
                                            <input id="companylogo-image-input"
                                                   accept="image/png, image/gif, image/jpeg" class="form-control d-none"
                                                   type="file"
                                                   value="">
                                        </div>
                                        <div class="avatar-lg p-1">
                                            <div class="avatar-title bg-light rounded-circle">
                                                <img id="companylogo-img"
                                                     class="avatar-md h-auto rounded-circle object-cover"
                                                     src="@/assets/images/users/multi-user.jpg"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="company-field">Company</label>
                                    <input id="company-field" class="form-control" placeholder="Enter company name"
                                           required
                                           type="text"/>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="designation-field">Designation</label>
                                    <input id="designation-field" class="form-control" placeholder="Enter designation"
                                           required
                                           type="text"/>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="date-field">Apply Date</label>
                                    <flat-pickr id="date-field" v-model="date2" :config="timeConfig"
                                                class="form-control flatpickr-input"
                                                placeholder="Select date"></flat-pickr>
                                </div>

                                <div class="mb-3">
                                    <label class="form-label" for="contact-field">Contacts</label>
                                    <input id="contact-field" class="form-control" placeholder="Enter contact"
                                           required type="text"/>
                                </div>

                                <b-row class="gy-4 mb-3">
                                    <b-col md="6">
                                        <div>
                                            <label class="form-label" for="status-input">Status</label>
                                            <Multiselect v-model="statusvalue"
                                                         :options="['Approved', 'New', 'Pending', 'Rejected']"
                                                         placeholder="Select Status"/>
                                        </div>
                                    </b-col>
                                    <b-col md="6">
                                        <div>
                                            <label class="form-label" for="type-input">Type</label>
                                            <Multiselect v-model="jobvalue" :options="['Full Time', 'Part Time']"
                                                         placeholder="Select Job Type"/>
                                        </div>
                                    </b-col>
                                </b-row>

                                <div class="hstack gap-2 justify-content-end mt-3">
                                    <b-button id="close-modal" type="button" variant="light"
                                              @click="createAppModal = false">Close
                                    </b-button>
                                    <b-button id="add-btn" type="button" variant="success" @click="handleApplication">
                                        Add
                                    </b-button>
                                    <b-button id="edit-btn" type="button" variant="success" @click="handleApplication">
                                        Update
                                    </b-button>
                                </div>
                            </b-form>
                        </b-modal>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
