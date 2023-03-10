<script>
import moment from "moment";
import Swal from "sweetalert2";
import "@fullcalendar/core";
import {SimpleBar} from "simplebar-vue3";
import {CalendarIcon} from "@zhuowenli/vue-feather-icons";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, {Draggable} from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";

import FullCalendar from "@fullcalendar/vue3";

import {helpers, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import Layout from "../../layouts/main.vue";
import PageHeader from "@/components/page-header";
import appConfig from "../../../app.config";

import {categories, INITIAL_EVENTS} from "./utils";

export default {
    setup() {
        return {v$: useVuelidate()};
    },
    validations: {
        event: {
            title: {
                required: helpers.withMessage("Title is required", required),
            },
            category: {
                required: helpers.withMessage("Category is required", required),
            },
            location: {
                required: helpers.withMessage("Location is required", required),
            },
            descri: {
                required: helpers.withMessage("Descri is required", required),
            },
        },
    },
    page: {
        title: "Calendar",
        meta: [{name: "description", content: appConfig.description}],
    },
    data() {
        return {
            title: "Calendar",
            items: [
                {
                    text: "Apps",
                    href: "/",
                },
                {
                    text: "Calendar",
                    active: true,
                },
            ],
            calendarOptions: {
                timeZone: "local",
                droppable: true,
                navLinks: true,
                plugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    bootstrapPlugin,
                    listPlugin,
                ],
                themeSystem: "bootstrap",
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                },
                windowResize: () => {
                    this.getInitialView();
                },
                initialView: this.getInitialView(),
                initialEvents: INITIAL_EVENTS,
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                dateClick: this.dateClicked,
                eventClick: this.editEvent,
                eventsSet: this.handleEvents,
            },
            currentEvents: [],
            showModal: false,
            eventModal: false,
            eventEditModal: false,
            categories: categories,
            submitted: false,
            submit: false,
            newEventData: {},
            edit: {},
            deleteId: {},
            event: {
                title: "",
                category: "",
                location: "",
                descri: "",
                date: ""
            },
            editevent: {
                editTitle: "",
                editcategory: "",
                editlocation: "",
                editdescri: "",
                editdates: "",
                editcalendardates: ""
            },
            config: {
                wrap: true, // set wrap to true only when using 'input-group'
                altFormat: "M j, Y",
                altInput: true,
                dateFormat: "d M, Y",
                mode: "range",
            },
            timeConfig: {
                enableTime: false,
                altInput: true,
                dateFormat: "Z",
                altFormat: "d M, Y",
                mode: "range",
            },
            date2: null,
        };
    },
    components: {
        Layout,
        PageHeader,
        FullCalendar,
        SimpleBar,
        CalendarIcon,
        flatPickr,
    },
    mounted() {
        new Draggable(document.getElementById("external-events"), {
            itemSelector: ".external-event",
            eventData: function (eventEl) {
                return {
                    title: eventEl.innerText,
                    start: new Date(),
                    className: eventEl.getAttribute("data-class"),
                };
            },
        });
    },
    methods: {
        formatDate(date) {
            var monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            var d = new Date(date),
                month = "" + monthNames[d.getMonth()].slice(0, 3),
                day = "" + d.getDate(),
                year = d.getFullYear();
            if (month.length < 2) month = "0" + month;
            if (day.length < 2) day = "0" + day;
            return [day + " " + month, year].join(" ");
        },


        dateStamp(start, end) {
            let date;
            if (end == null) {
                date = this.formatDate(start);
            } else {
                date = this.formatDate(start) + " - " + this.formatDate(end);
            }
            return date;
        },


        formatTime(params) {
            params = new Date(params);
            if (params.getHours() != null) {
                let hour = params.getHours();
                let minute = params.getMinutes() ? params.getMinutes() : "00";
                let timeFormat = hour >= 12 ? "PM" : "AM";
                hour = hour % 12;
                hour = hour ? hour : 12;
                minute = (minute < 10 && minute != 0) ? "0" + minute : minute;
                return hour + ":" + minute + " " + timeFormat;
            }
        },

        timeStamp(start, end) {
            let time;
            if (this.formatTime(start) == this.formatTime(end)) {
                time = "Full day event";
            } else {
                time = this.formatTime(start) + " - " + this.formatTime(end);
            }
            return time;
        },

        getInitialView() {
            if (window.innerWidth >= 768 && window.innerWidth < 1200) {
                return "timeGridWeek";
            } else if (window.innerWidth <= 768) {
                return "listMonth";
            } else {
                return "dayGridMonth";
            }
        },
        /**
         * Modal form submit
         */
        // eslint-disable-next-line no-unused-vars
        handleSubmit(e) {
            this.submitted = true;
            // stop here if form is invalid
            this.v$.$touch();
            if (this.v$.$invalid) {
                return;
            } else {
                const title = this.event.title;
                const category = this.event.category;
                const calendarApi = this.newEventData.view.calendar;
                const location = this.event.location;
                const descri = this.event.descri;
                const date = this.event.date.split(" ").filter(((item) => (item !== "to")));
                const startDate = date[0];
                const endDate = date[1];

                calendarApi.addEvent(
                    {
                        id: (Math.floor(Math.random() * 100 + 20) - 20),
                        title,
                        start: startDate,
                        end: endDate,
                        classNames: category,
                        extendedProps: {department: "All Day Event", location, description: descri}
                    });

                // this.currentEvents.unshift(data);
                this.successmsg();
                this.showModal = false;
                this.newEventData = {};
            }
            this.submitted = false;
            this.event = {};
        },
        // eslint-disable-next-line no-unused-vars
        hideModal(e) {
            this.submitted = false;
            this.showModal = false;
            this.event = {};
        },
        /**
         * Edit event modal submit
         */
        // eslint-disable-next-line no-unused-vars
        editSubmit(e) {
            this.submit = true;
            const editTitle = this.editevent.editTitle;
            const editcategory = this.editevent.editcategory;
            const editlocation = this.editevent.editlocation;
            const editdescri = this.editevent.editdescri;
            const date = this.editevent.editcalendardates.split(" ").filter(((item) => (item !== "to")));
            const startDate = date[0];
            const endDate = date[1];

            this.edit.setProp("title", editTitle);
            this.edit.setProp("classNames", editcategory);
            this.edit.setStart(startDate);
            this.edit.setEnd(endDate);
            this.edit.setExtendedProp("location", editlocation);
            this.edit.setExtendedProp("description", editdescri);
            this.successmsg();
            this.eventModal = false;
            this.eventEditModal = false;
        },

        /**
         * Delete event
         */
        deleteEvent() {
            this.edit.remove();
            this.eventModal = false;
            this.eventEditModal = false;
        },
        /**
         * Modal open for add event
         */
        dateClicked(info) {
            this.newEventData = info;
            this.showModal = true;
        },
        /**
         * Modal open for edit event
         */
        editEvent(info) {
            this.edit = info.event;
            this.editevent.editTitle = this.edit.title;
            this.editevent.editcategory = this.edit.classNames;
            this.editevent.editlocation = this.edit.extendedProps.location;
            this.editevent.editdescri = this.edit.extendedProps.description;
            this.editevent.editdates = this.dateStamp(this.edit.start, this.edit.end);
            this.editevent.editcalendardates = moment(this.edit.start).toISOString() + " to " + moment(this.edit.end ? this.edit.end : this.edit.start).toISOString();
            this.eventModal = true;
        },

        closeModal() {
            this.eventModal = false;
            this.eventEditModal = false;
        },

        confirm() {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to delete this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#34c38f",
                cancelButtonColor: "#f46a6a",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.value) {
                    this.deleteEvent();
                    Swal.fire("Deleted!", "Event has been deleted.", "success");
                }
            });
        },

        /**
         * Show list of events
         */
        handleEvents(events) {
            this.currentEvents = events.reverse();
        },

        /**
         * Show successfull Save Dialog
         */
        successmsg() {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Event has been saved",
                showConfirmButton: false,
                timer: 1000,
            });
        },
    },
};
</script>

<template>
    <Layout>
        <PageHeader :items="items" :title="title"/>

        <b-row>
            <b-col cols="12">
                <b-row>
                    <b-col xl="3">
                        <b-card class="card-h-100" no-body>
                            <b-card-body>
                                <b-button id="btn-new-event" class="w-100" variant="primary" @click="showModal = true">
                                    <i class="mdi mdi-plus"></i> Create New Event
                                </b-button>

                                <div id="external-events">
                                    <br/>
                                    <p class="text-muted">
                                        Drag and drop your event or click in the calendar
                                    </p>
                                    <div class="external-event fc-event bg-soft-success text-success"
                                         data-class="bg-soft-success">
                                        <i class="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>New Event
                                        Planning
                                    </div>
                                    <div class="external-event fc-event bg-soft-info text-info"
                                         data-class="bg-soft-info">
                                        <i class="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>Meeting
                                    </div>
                                    <div class="external-event fc-event bg-soft-warning text-warning"
                                         data-class="bg-soft-warning">
                                        <i class="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>Generating
                                        Reports
                                    </div>
                                    <div class="external-event fc-event bg-soft-danger text-danger"
                                         data-class="bg-soft-danger">
                                        <i class="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>Create New theme
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                        <div>
                            <h5 class="mb-1">Upcoming Events</h5>
                            <p class="text-muted">Don't miss scheduled events</p>
                            <SimpleBar class="upcoming-events pe-2 me-n1 mb-3" data-simplebar="init"
                                       style="height: 400px">
                                <b-card v-for="event in currentEvents" :key="event.id" class="mb-3" no-body>
                                    <b-card-body>
                                        <div class="d-flex mb-3">
                                            <div class="flex-grow-1">
                                                <i :class="`mdi mdi-checkbox-blank-circle me-2 ${event.classNames}`"></i><span
                                                class="fw-medium">{{ this.dateStamp(event.start, event.end) }}</span>
                                            </div>
                                            <div class="flex-shrink-0">
                                                <b-badge class="badge-soft-primary ms-auto" tag="small"
                                                         variant="soft-primary">{{
                                                        this.timeStamp(event.start, event.end)
                                                    }}
                                                </b-badge>
                                            </div>
                                        </div>
                                        <h6 class="card-title fs-16">{{ event.title }}</h6>
                                        <p class="text-muted text-truncate-two-lines mb-0">{{
                                                (event.extendedProps &&
                                                    event.extendedProps.description) ?
                                                    event.extendedProps.description : "N.A."
                                            }}</p>
                                    </b-card-body>
                                </b-card>
                            </SimpleBar>
                        </div>
                        <b-card no-body>
                            <b-card-body class="bg-soft-info">
                                <div class="d-flex">
                                    <div class="flex-shrink-0">
                                        <CalendarIcon class="text-info icon-dual-info"></CalendarIcon>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h6 class="fs-15">Welcome to your Calendar!</h6>
                                        <p class="text-muted mb-0">
                                            Event that applications book will appear here. Click on an
                                            event to see the details and manage applicants event.
                                        </p>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-card>
                    </b-col>
                    <b-col xl="9">
                        <b-card class="card-h-100" no-body>
                            <b-card-body>
                                <FullCalendar :options="calendarOptions"/>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
                <div style="clear: both"></div>
            </b-col>
        </b-row>

        <b-modal v-model="showModal" body-class="p-4" centered class="v-modal-custom"
                 header-class="p-3 bg-soft-info" hide-footer title="Add New Event" title-class="text-black font-18">
            <form id="form-event" name="event-form" @submit.prevent="handleSubmit">
                <div class="text-end">
                    <a id="edit-event-btn" class="btn btn-sm btn-soft-primary" data-id="new-event" hidden="true"
                       href="#" onclick="editEvent(this)" role="button">Edit</a>
                </div>
                <div class="row event-form">
                    <div class="col-12">
                        <div class="mb-3">
                            <label class="form-label">Type</label>
                            <select v-model="event.category" :class="{ 'is-invalid': submitted && v$.event.category.errors }" class="form-control"
                                    name="category">
                                <option v-for="option in categories" :key="option.backgroundColor"
                                        :value="`${option.value}`">
                                    {{ option.name }}
                                </option>
                            </select>
                            <div v-if="submitted && v$.event.category.$error" class="invalid-feedback">
                <span v-if="v$.event.category.required.$message">{{
                        v$.event.category.required.$message
                    }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-3">
                            <label class="form-label">Event Name</label>
                            <input id="name" v-model="event.title" :class="{ 'is-invalid': submitted && v$.event.title.$error }" class="form-control"
                                   placeholder="Insert Event name"
                                   type="text"/>
                            <div v-if="submitted && v$.event.title.$error" class="invalid-feedback">
                <span v-if="v$.event.title.required.$message">{{
                        v$.event.title.required.$message
                    }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="mb-3">
                            <label>Event Date</label>
                            <div class="input-group">
                                <flat-pickr id="caledate" v-model="event.date" :config="timeConfig"
                                            class="form-control flatpickr-input" placeholder="Select date"></flat-pickr>
                                <span class="input-group-text"><i class="ri-calendar-event-line"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="event-location">Location</label>
                            <div>
                                <input id="event-location" v-model="event.location" :class="{ 'is-invalid': submitted && v$.event.location.$error }"
                                       class="form-control d-block"
                                       name="event-location" placeholder="Event location"
                                       type="text">
                                <div v-if="submitted && v$.event.location.$error" class="invalid-feedback">
                  <span v-if="v$.event.location.required.$message">{{
                          v$.event.location.required.$message
                      }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <input id="eventid" name="eventid" type="hidden" value="">
                    <div class="col-12">
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea id="event-description" v-model="event.descri" :class="{ 'is-invalid': submitted && v$.event.descri.$error }"
                                      class="form-control d-block" placeholder="Enter a description" rows="3"
                                      spellcheck="false"></textarea>
                            <div v-if="submitted && v$.event.descri.$error" class="invalid-feedback">
                <span v-if="v$.event.descri.required.$message">{{
                        v$.event.descri.required.$message
                    }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-end pt-3">
                    <b-button variant="light" @click="hideModal">Close</b-button>
                    <b-button class="ms-1" type="submit" variant="success">Create event</b-button>
                </div>
            </form>
        </b-modal>


        <b-modal v-model="eventModal" :title="this.editevent.editTitle" body-class="p-4" centered
                 class="v-modal-custom" header-class="p-3 bg-soft-info" hide-footer title-class="text-black font-18">
            <div class="text-end">
                <a id="edit-event-btn" class="btn btn-sm btn-soft-primary" data-id="edit-event" href="#" role="button"
                   @click="this.eventEditModal = true, this.eventModal = false">Edit</a>
            </div>
            <div class="event-details">
                <div class="d-flex mb-2">
                    <div class="flex-grow-1 d-flex align-items-center">
                        <div class="flex-shrink-0 me-3">
                            <i class="ri-calendar-event-line text-muted fs-16"></i>
                        </div>
                        <div class="flex-grow-1">
                            <h6 id="event-start-date-tag" class="d-block fw-semibold mb-0">
                                {{ this.editevent.editdates }}
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0 me-3">
                        <i class="ri-time-line text-muted fs-16"></i>
                    </div>
                    <div class="flex-grow-1">
                        <h6 class="d-block fw-semibold mb-0"><span id="event-timepicker1-tag"></span> - <span
                            id="event-timepicker2-tag"></span></h6>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-2">
                    <div class="flex-shrink-0 me-3">
                        <i class="ri-map-pin-line text-muted fs-16"></i>
                    </div>
                    <div class="flex-grow-1">
                        <h6 class="d-block fw-semibold mb-0"> <span id="event-location-tag">
                {{ this.editevent.editlocation || "No Location" }}
              </span></h6>
                    </div>
                </div>
                <div class="d-flex mb-3">
                    <div class="flex-shrink-0 me-3">
                        <i class="ri-discuss-line text-muted fs-16"></i>
                    </div>
                    <div class="flex-grow-1">
                        <p id="event-description-tag" class="d-block text-muted mb-0">
                            {{ this.editevent.editdescri || "N.A." }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="hstack gap-2 justify-content-end">
                <button id="btn-delete-event" class="btn btn-soft-danger" type="button" @click="confirm"><i
                    class="ri-close-line align-bottom"></i> Delete
                </button>
            </div>
        </b-modal>

        <b-modal v-model="eventEditModal" :title="this.editevent.editTitle" body-class="p-4"
                 centered class="v-modal-custom" header-class="p-3 bg-soft-info" hide-footer title-class="text-black font-18">
            <form id="form-event" name="event-form" @submit.prevent="editSubmit">
                <div class="row event-form">
                    <div class="col-12">
                        <div class="mb-3">
                            <label class="form-label">Type</label>
                            <select v-model="editevent.editcategory" class="form-control" name="category">
                                <option v-for="option in categories" :key="option.backgroundColor"
                                        :value="`${option.value}`">
                                    {{ option.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-3">
                            <label class="form-label">Event Name</label>
                            <input id="name" v-model="this.editevent.editTitle" class="form-control" placeholder="Insert Event name"
                                   type="text"/>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="mb-3">
                            <label>Event Date</label>
                            <div class="input-group">
                                <flat-pickr id="caledate" v-model="editevent.editcalendardates"
                                            :config="timeConfig"
                                            class="form-control flatpickr-input" placeholder="Select date"></flat-pickr>
                                <span class="input-group-text"><i class="ri-calendar-event-line"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="event-location">Location</label>
                            <div>
                                <input id="event-location" v-model="editevent.editlocation" class="form-control d-block"
                                       name="event-location"
                                       placeholder="Event location" type="text"/>
                            </div>
                        </div>
                    </div>

                    <input id="eventid" name="eventid" type="hidden" value="">
                    <div class="col-12">
                        <div class="mb-3">
                            <label class="form-label">Description</label>
                            <textarea id="event-description" v-model="editevent.editdescri" class="form-control d-block"
                                      placeholder="Enter a description" rows="3" spellcheck="false"></textarea>
                        </div>
                    </div>
                </div>
                <div class="hstack gap-2 justify-content-end">
                    <button id="btn-delete-event" class="btn btn-soft-danger" type="button" @click="confirm"><i
                        class="ri-close-line align-bottom"></i> Delete
                    </button>
                    <button id="btn-save-event" class="btn btn-success" type="submit">Update Event</button>
                </div>
            </form>
        </b-modal>
    </Layout>
</template>
