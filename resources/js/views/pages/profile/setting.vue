<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import axios from 'axios';
import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";

export default {
    page: {
        title: "Setting",
        meta: [{
            name: "description",
            content: appConfig.description
        }],
    },
    data() {
        return {
            title: "Setting",
            items: [{
                text: "Velzon",
                href: "/",
            },
                {
                    text: "Setting",
                    active: true,
                },
            ],
            value: ['javascript'],
            date: null,
        };
    },
    components: {
        Layout,
        Multiselect,
        flatPickr
    },
    methods: {
        changepass() {
            var data = {
                password: document.getElementById('oldpasswordInput').value,
                new_password: document.getElementById('newpasswordInput').value,
                confirm_password: document.getElementById('confirmpasswordInput').value
            };
            axios.patch('https://api-node.themesbrand.website/updatepassword', data).then((data) => {
                console.log(data);
            }).catch((e) => {
                console.log(e);
            });
        },
        updatedata() {
            var userid = localStorage.getItem('userid');
            var data = {
                first_name: document.getElementById('firstnameInput').value,
                last_name: document.getElementById('lastnameInput').value,
                phone: document.getElementById('phonenumberInput').value,
                email: document.getElementById('emailInput').value,
                joining_date: document.getElementById('dateinput').value,
                skills: document.getElementById('skillsinput').value,
                designation: document.getElementById('designationInput').value,
                website: document.getElementById('websiteInput1').value,
                city: document.getElementById('cityInput').value,
                country: document.getElementById('countryInput').value,
                zipcode: document.getElementById('zipcodeInput').value,
                Description: document.getElementById('exampleFormControlTextarea').value,
            };
            axios.patch('https://api-node.themesbrand.website/user/' + userid, data).then((data) => {
                console.log(data);
            }).catch((e) => {
                console.log(e);
            });
        }
    },
};
</script>

<template>
    <Layout>
        <div class="position-relative mx-n4 mt-n4">
            <div class="profile-wid-bg profile-setting-img">
                <img alt="" class="profile-wid-img" src="@/assets/images/profile-bg.jpg"/>
                <div class="overlay-content">
                    <div class="text-end p-3">
                        <div class="p-0 ms-auto rounded-circle profile-photo-edit">
                            <input id="profile-foreground-img-file-input" class="profile-foreground-img-file-input"
                                   type="file"/>
                            <label class="profile-photo-edit btn btn-light" for="profile-foreground-img-file-input">
                                <i class="ri-image-edit-line align-bottom me-1"></i> Change
                                Cover
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <b-row>
            <b-col xxl="3">
                <b-card class="mt-n5" no-body>
                    <b-card-body class="p-4">
                        <div class="text-center">
                            <div class="
                  profile-user
                  position-relative
                  d-inline-block
                  mx-auto
                  mb-4
                ">
                                <img alt="user-profile-image" class="
                    rounded-circle
                    avatar-xl
                    img-thumbnail
                    user-profile-image
                  " src="@/assets/images/users/avatar-1.jpg"/>
                                <div class="avatar-xs p-0 rounded-circle profile-photo-edit">
                                    <input id="profile-img-file-input" class="profile-img-file-input" type="file"/>
                                    <label class="profile-photo-edit avatar-xs" for="profile-img-file-input">
                    <span class="avatar-title rounded-circle bg-light text-body">
                      <i class="ri-camera-fill"></i>
                    </span>
                                    </label>
                                </div>
                            </div>
                            <h5 class="fs-16 mb-1">Anna Adame</h5>
                            <p class="text-muted mb-0">Lead Designer / Developer</p>
                        </div>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center mb-5">
                            <div class="flex-grow-1">
                                <h5 class="card-title mb-0">Complete Your Profile</h5>
                            </div>
                            <div class="flex-shrink-0">
                                <b-link class="badge bg-light text-primary fs-12" href="javascript:void(0);"><i
                                    class="ri-edit-box-line align-bottom me-1"></i> Edit
                                </b-link>
                            </div>
                        </div>

                        <b-progress class="animated-progress custom-progress progress-label">
                            <b-progress-bar :value="30" variant="danger">
                                <div class="label">30%</div>
                            </b-progress-bar>
                        </b-progress>
                    </b-card-body>
                </b-card>
                <b-card no-body>
                    <b-card-body>
                        <div class="d-flex align-items-center mb-4">
                            <div class="flex-grow-1">
                                <h5 class="card-title mb-0">Portfolio</h5>
                            </div>
                            <div class="flex-shrink-0">
                                <b-link class="badge bg-light text-primary fs-12" href="javascript:void(0);"><i
                                    class="ri-add-fill align-bottom me-1"></i> Add
                                </b-link>
                            </div>
                        </div>
                        <div class="mb-3 d-flex">
                            <div class="avatar-xs d-block flex-shrink-0 me-3">
                <span class="avatar-title rounded-circle fs-16 bg-dark text-light">
                  <i class="ri-github-fill"></i>
                </span>
                            </div>
                            <input id="gitUsername" class="form-control" placeholder="Username" type="email"
                                   value="@daveadame"/>
                        </div>
                        <div class="mb-3 d-flex">
                            <div class="avatar-xs d-block flex-shrink-0 me-3">
                <span class="avatar-title rounded-circle fs-16 bg-primary">
                  <i class="ri-global-fill"></i>
                </span>
                            </div>
                            <input id="websiteInput" class="form-control" placeholder="www.example.com" type="text"
                                   value="www.velzon.com"/>
                        </div>
                        <div class="mb-3 d-flex">
                            <div class="avatar-xs d-block flex-shrink-0 me-3">
                <span class="avatar-title rounded-circle fs-16 bg-success">
                  <i class="ri-dribbble-fill"></i>
                </span>
                            </div>
                            <input id="dribbleName" class="form-control" placeholder="Username" type="text"
                                   value="@dave_adame"/>
                        </div>
                        <div class="d-flex">
                            <div class="avatar-xs d-block flex-shrink-0 me-3">
                <span class="avatar-title rounded-circle fs-16 bg-danger">
                  <i class="ri-pinterest-fill"></i>
                </span>
                            </div>
                            <input id="pinterestName" class="form-control" placeholder="Username" type="text"
                                   value="Advance Dave"/>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
            <b-col xxl="9">
                <b-card class="mt-xxl-n5" no-body>
                    <b-card-header>
                        <ul class="
                nav nav-tabs-custom
                rounded
                card-header-tabs
                border-bottom-0
              " role="tablist">
                            <li class="nav-item">
                                <b-link class="nav-link active" data-bs-toggle="tab" href="#personalDetails" role="tab">
                                    <i class="fas fa-home"></i>
                                    Personal Details
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link class="nav-link" data-bs-toggle="tab" href="#changePassword" role="tab">
                                    <i class="far fa-user"></i>
                                    Change Password
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link class="nav-link" data-bs-toggle="tab" href="#experience" role="tab">
                                    <i class="far fa-envelope"></i>
                                    Experience
                                </b-link>
                            </li>
                            <li class="nav-item">
                                <b-link class="nav-link" data-bs-toggle="tab" href="#privacy" role="tab">
                                    <i class="far fa-envelope"></i>
                                    Privacy Policy
                                </b-link>
                            </li>
                        </ul>
                    </b-card-header>
                    <b-card-body class="p-4">
                        <div class="tab-content">
                            <div id="personalDetails" class="tab-pane active" role="tabpanel">
                                <form action="javascript:void(0);">
                                    <b-row>
                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label class="form-label" for="firstnameInput">First Name</label>
                                                <input id="firstnameInput" class="form-control" placeholder="Enter your firstname"
                                                       type="text"
                                                       value="Dave"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label class="form-label" for="lastnameInput">Last Name</label>
                                                <input id="lastnameInput" class="form-control" placeholder="Enter your lastname"
                                                       type="text"
                                                       value="Adame"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label class="form-label" for="phonenumberInput">Phone Number</label>
                                                <input id="phonenumberInput" class="form-control" placeholder="Enter your phone number"
                                                       type="text" value="+(1) 987 6543"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label class="form-label" for="emailInput">Email Address</label>
                                                <input id="emailInput" class="form-control" placeholder="Enter your email"
                                                       type="email"
                                                       value="daveadame@velzon.com"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="12">
                                            <div class="mb-3">
                                                <label class="form-label" for="JoiningdatInput">Joining Date</label>

                                                <flat-pickr id="dateinput" v-model="date"
                                                            class="form-control"></flat-pickr>

                                            </div>
                                        </b-col>
                                        <b-col lg="12">
                                            <div class="mb-3">
                                                <label class="form-label" for="skillsInput">Skills</label>
                                                <Multiselect id="skillsinput" v-model="value" :close-on-select="false"
                                                             :create-option="true"
                                                             :options="[
                            { value: 'illustrator', label: 'Illustrator' },
                            { value: 'photoshop', label: 'Photoshop' },
                            { value: 'css', label: 'CSS' },
                            { value: 'html', label: 'HTML' },
                            { value: 'javascript', label: 'Javascript' },
                            { value: 'python', label: 'Python' },
                            { value: 'php', label: 'PHP' },
                          ]" :searchable="true" mode="tags"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label class="form-label" for="designationInput">Designation</label>
                                                <input id="designationInput" class="form-control" placeholder="Designation"
                                                       type="text"
                                                       value="Lead Designer / Developer"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="6">
                                            <div class="mb-3">
                                                <label class="form-label" for="websiteInput1">Website</label>
                                                <input id="websiteInput1" class="form-control" placeholder="www.example.com"
                                                       type="text"
                                                       value="www.velzon.com"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="4">
                                            <div class="mb-3">
                                                <label class="form-label" for="cityInput">City</label>
                                                <input id="cityInput" class="form-control" placeholder="City"
                                                       type="text" value="California"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="4">
                                            <div class="mb-3">
                                                <label class="form-label" for="countryInput">Country</label>
                                                <input id="countryInput" class="form-control" placeholder="Country"
                                                       type="text"
                                                       value="United States"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="4">
                                            <div class="mb-3">
                                                <label class="form-label" for="zipcodeInput">Zip Code</label>
                                                <input id="zipcodeInput" class="form-control" maxlength="6" minlength="5"
                                                       placeholder="Enter zipcode"
                                                       type="text" value="90011"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="12">
                                            <div class="mb-3 pb-2">
                                                <label class="form-label"
                                                       for="exampleFormControlTextarea">Description</label>
                                                <textarea id="exampleFormControlTextarea" class="form-control"
                                                          placeholder="Enter your description" rows="3">
Hi I'm Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.</textarea>
                                            </div>
                                        </b-col>
                                        <b-col lg="12">
                                            <div class="hstack gap-2 justify-content-end">
                                                <b-button type="submit" variant="primary" @click="updatedata">
                                                    Updates
                                                </b-button>
                                                <b-button type="button" variant="soft-success">
                                                    Cancel
                                                </b-button>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </form>
                            </div>
                            <div id="changePassword" class="tab-pane" role="tabpanel">
                                <form action="javascript:void(0);">
                                    <b-row class="g-2">
                                        <b-col lg="4">
                                            <div>
                                                <label class="form-label" for="oldpasswordInput">Old Password*</label>
                                                <input id="oldpasswordInput" class="form-control" placeholder="Enter current password"
                                                       type="password"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="4">
                                            <div>
                                                <label class="form-label" for="newpasswordInput">New Password*</label>
                                                <input id="newpasswordInput" class="form-control" placeholder="Enter new password"
                                                       type="password"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="4">
                                            <div>
                                                <label class="form-label" for="confirmpasswordInput">Confirm
                                                    Password*</label>
                                                <input id="confirmpasswordInput" class="form-control" placeholder="Confirm password"
                                                       type="password"/>
                                            </div>
                                        </b-col>
                                        <b-col lg="12">
                                            <div class="mb-3">
                                                <b-link class="link-primary text-decoration-underline"
                                                        href="javascript:void(0);">Forgot
                                                    Password
                                                    ?
                                                </b-link>
                                            </div>
                                        </b-col>
                                        <b-col lg="12">
                                            <div class="text-end">
                                                <b-button type="submit" variant="success" @click="changepass">
                                                    Change Password
                                                </b-button>
                                            </div>
                                        </b-col>
                                    </b-row>
                                </form>
                                <div class="mt-4 mb-3 border-bottom pb-2">
                                    <div class="float-end">
                                        <b-link class="link-primary" href="javascript:void(0);">All Logout</b-link>
                                    </div>
                                    <h5 class="card-title">Login History</h5>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="flex-shrink-0 avatar-sm">
                                        <div class="avatar-title bg-light text-primary rounded-3 fs-18">
                                            <i class="ri-smartphone-line"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6>iPhone 12 Pro</h6>
                                        <p class="text-muted mb-0">
                                            Los Angeles, United States - March 16 at 2:47PM
                                        </p>
                                    </div>
                                    <div>
                                        <b-link href="javascript:void(0);">Logout</b-link>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="flex-shrink-0 avatar-sm">
                                        <div class="avatar-title bg-light text-primary rounded-3 fs-18">
                                            <i class="ri-tablet-line"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6>Apple iPad Pro</h6>
                                        <p class="text-muted mb-0">
                                            Washington, United States - November 06 at 10:43AM
                                        </p>
                                    </div>
                                    <div>
                                        <b-link href="javascript:void(0);">Logout</b-link>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <div class="flex-shrink-0 avatar-sm">
                                        <div class="avatar-title bg-light text-primary rounded-3 fs-18">
                                            <i class="ri-smartphone-line"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6>Galaxy S21 Ultra 5G</h6>
                                        <p class="text-muted mb-0">
                                            Conneticut, United States - June 12 at 3:24PM
                                        </p>
                                    </div>
                                    <div>
                                        <b-link href="javascript:void(0);">Logout</b-link>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="flex-shrink-0 avatar-sm">
                                        <div class="avatar-title bg-light text-primary rounded-3 fs-18">
                                            <i class="ri-macbook-line"></i>
                                        </div>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6>Dell Inspiron 14</h6>
                                        <p class="text-muted mb-0">
                                            Phoenix, United States - July 26 at 8:10AM
                                        </p>
                                    </div>
                                    <div>
                                        <b-link href="javascript:void(0);">Logout</b-link>
                                    </div>
                                </div>
                            </div>
                            <div id="experience" class="tab-pane" role="tabpanel">
                                <form>
                                    <div id="newlink">
                                        <div id="1">
                                            <b-row>
                                                <b-col lg="12">
                                                    <div class="mb-3">
                                                        <label class="form-label" for="jobTitle">Job Title</label>
                                                        <input id="jobTitle" class="form-control" placeholder="Job title"
                                                               type="text"
                                                               value="Lead Designer / Developer"/>
                                                    </div>
                                                </b-col>
                                                <b-col lg="6">
                                                    <div class="mb-3">
                                                        <label class="form-label" for="companyName">Company Name</label>
                                                        <input id="companyName" class="form-control" placeholder="Company name"
                                                               type="text"
                                                               value="Themesbrand"/>
                                                    </div>
                                                </b-col>
                                                <b-col lg="6">
                                                    <div class="mb-3">
                                                        <label class="form-label" for="experienceYear">Experience
                                                            Years</label>
                                                        <b-row>
                                                            <b-col lg="5">
                                                                <Multiselect v-model="value2" :close-on-select="true"
                                                                             :create-option="true"
                                                                             :options="[
                                    { value: '', label: 'Select years' },
                                    { value: 'Choice 1', label: '2001' },
                                    { value: 'Choice 2', label: '2002' },
                                    { value: 'Choice 3', label: '2003' },
                                    { value: 'Choice 4', label: '2004' },
                                    { value: 'Choice 5', label: '2005' },
                                    { value: 'Choice 6', label: '2006' },
                                    { value: 'Choice 7', label: '2007' },
                                    { value: 'Choice 8', label: '2008' },
                                    { value: 'Choice 9', label: '2009' },
                                    { value: 'Choice 10', label: '2010' },
                                    { value: 'Choice 11', label: '2011' },
                                    { value: 'Choice 12', label: '2012' },
                                    { value: 'Choice 13', label: '2013' },
                                    { value: 'Choice 14', label: '2014' },
                                    { value: 'Choice 15', label: '2015' },
                                    { value: 'Choice 16', label: '2016' },
                                    { value: 'Choice 17', label: '2017' },
                                    { value: 'Choice 18', label: '2018' },
                                    { value: 'Choice 19', label: '2019' },
                                    { value: 'Choice 20', label: '2020' },
                                    { value: 'Choice 21', label: '2021' },
                                    { value: 'Choice 22', label: '2022' }


                                  ]" :searchable="true"
                                                                             class="form-control"/>
                                                            </b-col>
                                                            <b-col class="align-self-center" cols="auto">to</b-col>
                                                            <b-col lg="5">


                                                                <Multiselect v-model="value1" :close-on-select="true"
                                                                             :create-option="true"
                                                                             :options="[
                                    { value: '', label: 'Select years' },
                                    { value: 'Choice 1', label: '2001' },
                                    { value: 'Choice 2', label: '2002' },
                                    { value: 'Choice 3', label: '2003' },
                                    { value: 'Choice 4', label: '2004' },
                                    { value: 'Choice 5', label: '2005' },
                                    { value: 'Choice 6', label: '2006' },
                                    { value: 'Choice 7', label: '2007' },
                                    { value: 'Choice 8', label: '2008' },
                                    { value: 'Choice 9', label: '2009' },
                                    { value: 'Choice 10', label: '2010' },
                                    { value: 'Choice 11', label: '2011' },
                                    { value: 'Choice 12', label: '2012' },
                                    { value: 'Choice 13', label: '2013' },
                                    { value: 'Choice 14', label: '2014' },
                                    { value: 'Choice 15', label: '2015' },
                                    { value: 'Choice 16', label: '2016' },
                                    { value: 'Choice 17', label: '2017' },
                                    { value: 'Choice 18', label: '2018' },
                                    { value: 'Choice 19', label: '2019' },
                                    { value: 'Choice 20', label: '2020' },
                                    { value: 'Choice 21', label: '2021' },
                                    { value: 'Choice 22', label: '2022' }


                                  ]" :searchable="true"
                                                                             class="form-control"/>
                                                            </b-col>
                                                        </b-row>
                                                    </div>
                                                </b-col>
                                                <b-col lg="12">
                                                    <div class="mb-3">
                                                        <label class="form-label" for="jobDescription">Job
                                                            Description</label>
                                                        <textarea id="jobDescription" class="form-control" placeholder="Enter description"
                                                                  rows="3">
You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. </textarea>
                                                    </div>
                                                </b-col>
                                                <div class="hstack gap-2 justify-content-end">
                                                    <b-link class="btn btn-success" href="javascript:void(0);">Delete
                                                    </b-link>
                                                </div>
                                            </b-row>
                                        </div>
                                    </div>
                                    <div id="newForm" style="display: none"></div>
                                    <b-col lg="12">
                                        <div class="hstack gap-2">
                                            <b-button type="button" variant="success">
                                                Update
                                            </b-button>
                                            <b-link class="btn btn-primary" href="javascript:void(0);">Add New</b-link>
                                        </div>
                                    </b-col>
                                </form>
                            </div>
                            <div id="privacy" class="tab-pane" role="tabpanel">
                                <div class="mb-4 pb-2">
                                    <h5 class="card-title text-decoration-underline mb-3">
                                        Security:
                                    </h5>
                                    <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
                                        <div class="flex-grow-1">
                                            <h6 class="fs-14 mb-1">Two-factor Authentication</h6>
                                            <p class="text-muted">
                                                Two-factor authentication is an enhanced security
                                                meansur. Once enabled, you'll be required to give two
                                                types of identification when you log into Google
                                                Authentication and SMS are Supported.
                                            </p>
                                        </div>
                                        <div class="flex-shrink-0 ms-sm-3">
                                            <b-link class="btn btn-sm btn-primary" href="javascript:void(0);">Enable
                                                Two-facor Authentication
                                            </b-link>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                        <div class="flex-grow-1">
                                            <h6 class="fs-14 mb-1">Secondary Verification</h6>
                                            <p class="text-muted">
                                                The first factor is a password and the second commonly
                                                includes a text with a code sent to your smartphone, or
                                                biometrics using your fingerprint, face, or retina.
                                            </p>
                                        </div>
                                        <div class="flex-shrink-0 ms-sm-3">
                                            <b-link class="btn btn-sm btn-primary" href="javascript:void(0);">Set up
                                                secondary method
                                            </b-link>
                                        </div>
                                    </div>
                                    <div class="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                        <div class="flex-grow-1">
                                            <h6 class="fs-14 mb-1">Backup Codes</h6>
                                            <p class="text-muted mb-sm-0">
                                                A backup code is automatically generated for you when
                                                you turn on two-factor authentication through your iOS
                                                or Android Twitter app. You can also generate a backup
                                                code on twitter.com.
                                            </p>
                                        </div>
                                        <div class="flex-shrink-0 ms-sm-3">
                                            <b-link class="btn btn-sm btn-primary" href="javascript:void(0);">Generate
                                                backup codes
                                            </b-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <h5 class="card-title text-decoration-underline mb-3">
                                        Application Notifications:
                                    </h5>
                                    <ul class="list-unstyled mb-0">
                                        <li class="d-flex">
                                            <div class="flex-grow-1">
                                                <label class="form-check-label fs-14" for="directMessage">Direct
                                                    messages</label>
                                                <p class="text-muted">
                                                    Messages from people you follow
                                                </p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="form-check form-switch">
                                                    <input id="directMessage" checked class="form-check-input"
                                                           role="switch" type="checkbox"/>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="d-flex mt-2">
                                            <div class="flex-grow-1">
                                                <label class="form-check-label fs-14" for="desktopNotification">
                                                    Show desktop notifications
                                                </label>
                                                <p class="text-muted">
                                                    Choose the option you want as your default setting.
                                                    Block a site: Next to "Not allowed to send
                                                    notifications," click Add.
                                                </p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="form-check form-switch">
                                                    <input id="desktopNotification" checked class="form-check-input"
                                                           role="switch"
                                                           type="checkbox"/>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="d-flex mt-2">
                                            <div class="flex-grow-1">
                                                <label class="form-check-label fs-14" for="emailNotification">
                                                    Show email notifications
                                                </label>
                                                <p class="text-muted">
                                                    Under Settings, choose Notifications. Under Select an
                                                    account, choose the account to enable notifications
                                                    for.
                                                </p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="form-check form-switch">
                                                    <input id="emailNotification" class="form-check-input" role="switch"
                                                           type="checkbox"/>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="d-flex mt-2">
                                            <div class="flex-grow-1">
                                                <label class="form-check-label fs-14" for="chatNotification">
                                                    Show chat notifications
                                                </label>
                                                <p class="text-muted">
                                                    To prevent duplicate mobile notifications from the
                                                    Gmail and Chat apps, in settings, turn off Chat
                                                    notifications.
                                                </p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="form-check form-switch">
                                                    <input id="chatNotification" class="form-check-input" role="switch"
                                                           type="checkbox"/>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="d-flex mt-2">
                                            <div class="flex-grow-1">
                                                <label class="form-check-label fs-14" for="purchaesNotification">
                                                    Show purchase notifications
                                                </label>
                                                <p class="text-muted">
                                                    Get real-time purchase alerts to protect yourself from
                                                    fraudulent charges.
                                                </p>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <div class="form-check form-switch">
                                                    <input id="purchaesNotification" class="form-check-input" role="switch"
                                                           type="checkbox"/>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="card-title text-decoration-underline mb-3">
                                        Delete This Account:
                                    </h5>
                                    <p class="text-muted">
                                        Go to the Data & Privacy section of your profile Account.
                                        Scroll to "Your data & privacy options." Delete your Profile
                                        Account. Follow the instructions to delete your account :
                                    </p>
                                    <div>
                                        <input id="passwordInput" class="form-control" placeholder="Enter your password"
                                               style="max-width: 265px"
                                               type="password" value="make@321654987"/>
                                    </div>
                                    <div class="hstack gap-2 mt-3">
                                        <b-link class="btn btn-soft-danger" href="javascript:void(0);">Close & Delete
                                            This Account
                                        </b-link>
                                        <b-link class="btn btn-light" href="javascript:void(0);">Cancel</b-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </Layout>
</template>
