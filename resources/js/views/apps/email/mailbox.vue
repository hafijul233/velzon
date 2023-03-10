<script>
import {PlusCircleIcon} from '@zhuowenli/vue-feather-icons';
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Layout from "../../../layouts/main.vue";
import appConfig from "../../../../app.config";
import Lottie from "@/components/widgets/lottie.vue";
import animationData from "@/components/widgets/gsqxdxog.json";

export default {
    page: {
        title: "Mailbox",
        meta: [{
            name: "description",
            content: appConfig.description
        }],
    },
    data() {
        return {
            title: "Mailbox",
            items: [{
                text: "Apps",
                href: "/",
            },
                {
                    text: "Mailbox",
                    active: true,
                },
            ],
            defaultOptions: {
                animationData: animationData
            },
            emailsdata: [{
                "primary": [{
                    "id": 1,
                    "starred": true,
                    "readed": true,
                    "name": "Peter, me",
                    "title": "Hello",
                    "description": "Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)",
                    "date": "Mar 7",
                    "tabtype": "Inbox",
                    "userImg": "assets/images/users/avatar-2.jpg",
                    "labeltype": "Support"
                },
                    {
                        "id": 2,
                        "starred": true,
                        "readed": true,
                        "name": "Susanna",
                        "title": "Freelance - Since you asked... and i'm inconceivably bored at the train station",
                        "description": "Alright thanks. I'll have to re-book that somehow, i'll get back to you.",
                        "date": "Mar 7",
                        "tabtype": "Sent",
                        "userImg": "assets/images/users/avatar-3.jpg",
                        "labeltype": "Freelance"
                    },
                    {
                        "id": 3,
                        "starred": false,
                        "readed": false,
                        "name": "Web Support Dennis",
                        "counted": 7,
                        "title": "Re: New mail settings",
                        "description": "Will you answer him asap?",
                        "date": "Mar 5",
                        "tabtype": "Trash",
                        "userImg": "assets/images/users/avatar-4.jpg",
                        "labeltype": "Social"
                    }, {
                        "id": 4,
                        "starred": false,
                        "readed": true,
                        "name": "Peter",
                        "title": "Support - Off on Thursday",
                        "description": "Eff that place, you might as well stay here with us instead! Sent from my iPhone 4  4 mar 2014 at 5:55 pm",
                        "date": "Mar 4",
                        "tabtype": "Sent",
                        "userImg": "assets/images/users/avatar-5.jpg",
                        "labeltype": "Support"
                    }, {
                        "id": 5,
                        "starred": false,
                        "readed": true,
                        "name": "Medium",
                        "title": "Social - This Week's Top Stories",
                        "description": "Our top pick for you on Medium this week The Man Who Destroyed America’s Ego",
                        "date": "Feb 28",
                        "tabtype": "Inbox",
                        "userImg": "assets/images/users/avatar-6.jpg",
                        "labeltype": "Support"
                    }, {
                        "id": 6,
                        "starred": true,
                        "readed": true,
                        "name": "Death to Stock",
                        "title": "Montly High-Res Photos",
                        "description": "To create this month's pack, we hosted a party with local musician Jared Mahone here in Columbus, Ohio.",
                        "date": "Feb 28",
                        "tabtype": "Inbox",
                        "userImg": "assets/images/users/user-dummy-img.jpg",
                        "labeltype": "Friends"
                    }, {
                        "id": 7,
                        "starred": false,
                        "readed": false,
                        "name": "Miller, me",
                        "counted": 5,
                        "title": "Family - Last pic over my village",
                        "description": "Yeah i'd like that! Do you remember the video you showed me of your train ride between Colombo and Kandy? The one with the mountain view? I would love to see that one again!",
                        "date": "Feb 27",
                        "tabtype": "Inbox",
                        "userImg": "assets/images/users/avatar-8.jpg",
                        "labeltype": "Freelance"
                    }, {
                        "id": 7,
                        "starred": false,
                        "readed": false,
                        "name": "Andrew Zimmer",
                        "counted": 2,
                        "title": "Mochila Beta: Subscription Confirmed",
                        "description": "You've been confirmed! Welcome to the ruling class of the inbox. For your records, here is a copy of the information you submitted to us...",
                        "date": "Feb 27",
                        "tabtype": "Draft",
                        "userImg": "assets/images/users/avatar-9.jpg",
                        "labeltype": "Social"
                    }, {
                        "id": 9,
                        "starred": true,
                        "readed": true,
                        "name": "Infinity HR",
                        "title": "Sveriges Hetaste sommarjobb",
                        "description": "Hej Nicklas Sandell! Vi vill bjuda in dig till \"First tour 2014\", ett rekryteringsevent som erbjuder jobb på 16 semesterorter iSverige.",
                        "date": "Feb 27",
                        "tabtype": "Starred",
                        "userImg": "assets/images/users/avatar-10.jpg",
                        "labeltype": "Support"
                    }, {
                        "id": 10,
                        "starred": true,
                        "readed": true,
                        "name": "Revibe",
                        "title": "Friends - Weekend on Revibe",
                        "description": "Today's Friday and we thought maybe you want some music inspiration for the weekend. Here are some trending tracks and playlists we think you should give a listen!",
                        "date": "Feb 26",
                        "tabtype": "Starred",
                        "userImg": "assets/images/users/user-dummy-img.jpg",
                        "labeltype": "Support"
                    }, {
                        "id": 11,
                        "starred": false,
                        "readed": true,
                        "name": "Erik, me",
                        "title": "Regarding our meeting",
                        "description": "That's great, see you on Thursday!",
                        "date": "Feb 25",
                        "tabtype": "Inbox",
                        "userImg": "assets/images/users/avatar-4.jpg",
                        "labeltype": "Social"
                    }, {
                        "id": 12,
                        "starred": false,
                        "readed": false,
                        "name": "KanbanFlow",
                        "title": "Social - Task assigned: Clone ARP's website",
                        "description": "You have been assigned a task by Alex@Work on the board Web.",
                        "date": "Feb 24",
                        "tabtype": "Inbox",
                        "userImg": "assets/images/users/avatar-5.jpg",
                        "labeltype": "Friends"
                    }, {
                        "id": 13,
                        "starred": false,
                        "readed": false,
                        "name": "Tobias Berggren",
                        "title": "Let's go fishing!",
                        "description": "Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
                        "date": "Feb 23",
                        "tabtype": "Inbox",
                        "userImg": "assets/images/users/user-dummy-img.jpg",
                        "labeltype": "Family"
                    }, {
                        "id": 14,
                        "starred": false,
                        "readed": true,
                        "name": "Charukaw, me",
                        "title": "Hey man",
                        "description": "Nah man sorry i don't. Should i get it?",
                        "date": "Feb 23",
                        "tabtype": "Important",
                        "userImg": "assets/images/users/avatar-8.jpg",
                        "labeltype": "Support"

                    }, {
                        "id": 15,
                        "starred": true,
                        "readed": true,
                        "name": "Peter",
                        "title": "Support - Home again!",
                        "description": "That's just perfect! See you tomorrow.",
                        "date": "Feb 21",
                        "tabtype": "Starred",
                        "userImg": "assets/images/users/avatar-10.jpg",
                        "labeltype": "Freelance"
                    }, {
                        "id": 16,
                        "starred": true,
                        "readed": true,
                        "name": "Stack Exchange",
                        "title": "1 new items in your Stackexchange inbox",
                        "description": "The following items were added to your Stack Exchange global inbox since you last checked it.",
                        "date": "Feb 21",
                        "tabtype": "Starred",
                        "userImg": "assets/images/users/user-dummy-img.jpg",
                        "labeltype": "Freelance"
                    }, {
                        "id": 17,
                        "starred": false,
                        "readed": true,
                        "name": "Google Drive Team",
                        "title": "You can now use your storage in Google Drive",
                        "description": "Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.",
                        "date": "Feb 20",
                        "tabtype": "Spam",
                        "userImg": "assets/images/users/avatar-6.jpg",
                        "labeltype": "Social"
                    }, {
                        "id": 18,
                        "starred": false,
                        "readed": true,
                        "name": "Susanna",
                        "title": "Train/Bus",
                        "description": "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
                        "date": "Feb 19",
                        "tabtype": "Draft",
                        "userImg": "assets/images/users/user-dummy-img.jpg",
                        "labeltype": "Friends"
                    }
                ],
                "social": [{
                    "id": 21,
                    "starred": true,
                    "readed": false,
                    "name": "Peter, me",
                    "title": "Hello",
                    "description": "Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :)",
                    "date": "Mar 7",
                    "tabtype": "Inbox",
                    "userImg": "assets/images/users/avatar-8.jpg",
                    "labeltype": "Social"
                },
                    {
                        "id": 22,
                        "starred": true,
                        "readed": false,
                        "name": "Susanna",
                        "title": "Freelance - Since you asked... and i'm inconceivably bored at the train station",
                        "description": "Alright thanks. I'll have to re-book that somehow, i'll get back to you.",
                        "date": "Mar 7",
                        "tabtype": "Sent",
                        "userImg": "assets/images/users/avatar-10.jpg",
                        "labeltype": "Social"
                    },
                    {
                        "id": 23,
                        "starred": false,
                        "readed": true,
                        "name": "Web Support Dennis",
                        "counted": 7,
                        "title": "Re: New mail settings",
                        "description": "Will you answer him asap?",
                        "date": "Mar 5",
                        "tabtype": "Trash",
                        "userImg": "assets/images/users/avatar-3.jpg",
                        "labeltype": "Social"
                    }
                ],
                "promotions": [{
                    "id": 24,
                    "starred": false,
                    "readed": false,
                    "name": "Google Drive Team",
                    "title": "You can now use your storage in Google Drive",
                    "description": "Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.",
                    "date": "Feb 20",
                    "tabtype": "Spam",
                    "userImg": "assets/images/users/user-dummy-img.jpg",
                    "labeltype": "Social"
                },
                    {
                        "id": 25,
                        "starred": false,
                        "readed": true,
                        "name": "Susanna",
                        "title": "Train/Bus",
                        "description": "Yes ok, great! I'm not stuck in Stockholm anymore, we're making progress.",
                        "date": "Feb 19",
                        "tabtype": "Draft",
                        "userImg": "assets/images/users/avatar-3.jpg",
                        "labeltype": "Social"
                    }
                ]
            }],
            mailChatDetailElm: false,
            modalShow: false,
            modalShow1: false,
            removeModal: false,
            tabtype: 'primary',
            menutab: 'all',
            labeltype: 'all',
            value: ['support@themesbrand.com'],
            editor: ClassicEditor,
            editorData: "",
        };
    },
    components: {
        Layout,
        ckeditor: CKEditor.component,
        lottie: Lottie,
        PlusCircleIcon,
        Multiselect,
    },
    methods: {
        deleteMail() {
            this.removeModal = true;
            var checkall = document.getElementById('checkall');
            document.getElementById("delete-record").addEventListener("click", function () {
                document.querySelectorAll(".message-list li").forEach(function (element) {
                    if (element.classList.contains("active")) {
                        element.remove();
                    }
                });
                document.getElementById("btn-close").click();
                if (document.getElementById("email-topbar-actions"))
                    document.getElementById("email-topbar-actions").style.display = 'none';
                checkall.indeterminate = false;
                checkall.checked = false;
            });
        },

        checkBoxAll() {
            // checkbox-wrapper-mail
            document.querySelectorAll(".checkbox-wrapper-mail input").forEach(function (element) {
                element.addEventListener('click', function (el) {
                    if (el.target.checked == true) {
                        el.target.closest('li').classList.add("active");
                    } else {
                        el.target.closest('li').classList.remove("active");
                    }
                });
            });

            // checkbox
            var checkall = document.getElementById('checkall');
            var checkboxes = document.querySelectorAll('.checkbox-wrapper-mail input');
            checkboxes.forEach(function (element) {
                element.addEventListener('click', function (event) {
                    var checkboxes = document.querySelectorAll('.checkbox-wrapper-mail input');
                    var checkedCount = document.querySelectorAll(
                        '.checkbox-wrapper-mail input:checked').length;
                    checkall.checked = checkedCount > 0;
                    checkall.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;

                    if (event.target.closest('li').classList.contains("active")) {
                        (checkedCount > 0) ? document.getElementById("email-topbar-actions").style
                            .display = 'block' : document.getElementById("email-topbar-actions")
                            .style.display = 'none';
                    } else {
                        (checkedCount > 0) ? document.getElementById("email-topbar-actions").style
                            .display = 'block' : document.getElementById("email-topbar-actions")
                            .style.display = 'none';
                    }
                });
            });

            document.getElementById("email-topbar-actions").style.display = 'none';

            // checkbox all
            checkall.addEventListener('click', function (event) {
                var checkboxes = document.querySelectorAll('.checkbox-wrapper-mail input');
                checkboxes.forEach(function (chkbox) {
                    if (checkall.checked == true) {
                        chkbox.checked = true;
                    } else {
                        chkbox.checked = false;
                    }
                    var checkedCount = document.querySelectorAll(
                        '.checkbox-wrapper-mail input:checked').length;
                    event.checked = checkedCount > 0;
                    event.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
                    if (chkbox.checked == true) {
                        chkbox.parentNode.parentNode.parentNode.parentNode.classList.add("active");
                        (checkedCount > 0) ? document.getElementById("email-topbar-actions").style
                            .display = 'block' : document.getElementById("email-topbar-actions")
                            .style.display = 'none';
                    } else {
                        chkbox.checked = false;
                        chkbox.parentNode.parentNode.parentNode.parentNode.classList.remove(
                            "active");
                        (checkedCount > 0) ? document.getElementById("email-topbar-actions").style
                            .display = 'block' : document.getElementById("email-topbar-actions")
                            .style.display = 'none';
                    }
                });
            });
        },

        scrollToBottom(id) {
            setTimeout(function () {
                var simpleBar = (document.getElementById(id).querySelector("#chat-conversation .simplebar-content-wrapper")) ?
                    document.getElementById(id).querySelector("#chat-conversation .simplebar-content-wrapper") : '';
                var offsetHeight = document.getElementsByClassName("chat-conversation-list")[0] ?
                    document.getElementById(id).getElementsByClassName("chat-conversation-list")[0].scrollHeight - window.innerHeight + 750 : 0;
                if (offsetHeight)
                    simpleBar.scrollTo({
                        top: offsetHeight,
                        behavior: "smooth"
                    });
            }, 100);
        },

        changeUserScroll() {
            var currentChatId = "users-chat";
            this.scrollToBottom(currentChatId);
        },

        openemail() {
            document.body.classList.add("email-detail-show");
            document.querySelectorAll(".message-list li.unread").forEach(function (element) {
                if (element.classList.contains("unread")) {
                    event.target.closest('li').classList.remove("unread");
                }
            });

        },
        toggleFavourite(ele) {
            ele.target.closest('.favourite-btn').classList.toggle("active");
        },
        changetab(type) {
            this.tabtype = type;
        },
        changemenu(menu) {
            document.getElementById('mailfilter').style.display = 'flex';
            if (menu != 'all' && menu != 'Inbox') {
                this.tabtype = "primary";
                document.getElementById('mailfilter').style.display = 'none';
            }
            this.labeltype = 'changelable';
            this.menutab = menu;
        },
        changelable(lable) {
            document.getElementById('primarytab').click();
            this.menutab = 'changelable';
            this.labeltype = lable;
        },
        emailDetailChange() {
            document.querySelectorAll(".message-list li").forEach(function (item) {
                item.addEventListener("click", function () {
                    var subjectTitle = item.querySelector(".subject-title").innerHTML;
                    document.querySelector(".email-subject-title").innerHTML = subjectTitle;

                    var emailTitleLeftName = item.querySelector(".title-name").innerHTML;
                    document.querySelectorAll(".accordion-item.left").forEach(function (subitem) {
                        subitem.querySelector(".email-user-name").innerHTML =
                            emailTitleLeftName;
                        var userImg = item.querySelector(".mail-userimg").value;
                        subitem.querySelector("img").setAttribute("src", userImg);
                    });

                    var messageUserName = document.querySelector(".user-name-text").innerHTML;
                    var usermailProfile = document.querySelector(".header-profile-user")
                        .getAttribute("src");
                    document.querySelectorAll(".accordion-item.right").forEach(function (subitem) {
                        subitem.querySelector(".email-user-name-right").innerHTML =
                            messageUserName;
                        subitem.querySelector("img").setAttribute("src", usermailProfile);
                    });
                });
            });
        }
    },
    mounted() {
        setTimeout(() => {
            document.getElementById('elmLoader').style.display = 'none';
            document.getElementById('mail-list-data').style.display = 'block';
        }, 1000);

        var currentChatId = "users-chat";
        this.scrollToBottom(currentChatId);

        this.checkBoxAll();
        this.emailDetailChange();
        // document.getElementById("emailchat-btn-close").addEventListener("click", function () {
        //     document.getElementById("emailchat-detailElem").style.display = "none";
        // });
        // document.querySelectorAll(".email-chat-list a").forEach(function (item) {
        //     item.addEventListener("click", function () {
        //         document.getElementById("emailchat-detailElem").style.display = "block";

        //         var chatUserList = document.querySelector(".email-chat-list a.active");
        //         if (chatUserList) chatUserList.classList.remove("active");
        //         console.log('class',this.classList)
        //         this.classList.add("active");

        //         var username = item.querySelector(".chatlist-user-name").innerHTML;
        //         var userProfile = item.querySelector(".chatlist-user-image img").getAttribute(
        //             "src");

        //         document.querySelector(".email-chat-detail .profile-username").innerHTML = username;
        //         var conversationImg = document.getElementById("users-conversation");
        //         conversationImg.querySelectorAll(".left .chat-avatar").forEach(function (item) {
        //             if (userProfile) {
        //                 item.querySelector("img").setAttribute("src", userProfile);
        //             } else {
        //                 item.querySelector("img").setAttribute("src",
        //                     '@/assets/images/users/avatar-2.jpg');
        //             }
        //         });
        //     });
        // });

        // email chat detail element
        var dummyUserImage = "assets/images/users/user-dummy-img.jpg";
        document.querySelectorAll(".email-chat-list a").forEach(function (item) {
            if (item.classList.contains("active")) {
                document.getElementById("emailchat-detailElem").style.display = "block";
                var userListName = document.querySelector(".email-chat-list a.active").querySelector(".chatlist-user-name").innerHTML;
                var userListProfile = document.querySelector(".email-chat-list a.active").querySelector(".chatlist-user-image img").getAttribute("src");
                document.querySelector(".email-chat-detail .profile-username").innerHTML = userListName;
                document.getElementById("users-conversation").querySelectorAll(".left .chat-avatar").forEach(function (item) {
                    if (userListProfile) {
                        item.querySelector("img").setAttribute("src", userListProfile);
                    } else {
                        item.querySelector("img").setAttribute("src", dummyUserImage);
                    }
                });
            }
            item.addEventListener("click", function () {
                document.getElementById("emailchat-detailElem").style.display = "block";
                this.mailChatDetailElm = true;

                // chat user list link active
                var chatUserList = document.querySelector(".email-chat-list a.active");
                if (chatUserList) chatUserList.classList.remove("active");
                this.classList.add("active");

                //user Name and user Profile change on click
                var username = item.querySelector(".chatlist-user-name").innerHTML;
                var userProfile = item.querySelector(".chatlist-user-image img").getAttribute("src");

                document.querySelector(".email-chat-detail .profile-username").innerHTML = username;
                var conversationImg = document.getElementById("users-conversation");
                Array.from(conversationImg.querySelectorAll(".left .chat-avatar")).forEach(function (item) {
                    if (userProfile) {
                        item.querySelector("img").setAttribute("src", userProfile);
                    } else {
                        item.querySelector("img").setAttribute("src", dummyUserImage);
                    }
                });
            });
        }),

            document.getElementById("emailchat-btn-close").addEventListener("click", function () {
                document.getElementById("emailchat-detailElem").style.display = "none";
                this.mailChatDetailElm = false;
                document.querySelector(".email-chat-list a.active").classList.remove("active");
            });

        document.querySelectorAll('.tabtype a').forEach(function (mailTab) {
            mailTab.addEventListener("click", function () {
                var chatUserList = document.querySelector(".tabtype a.active");
                if (chatUserList) chatUserList.classList.remove("active");
                mailTab.classList.add('active');
            });
        });
        document.querySelectorAll('.mail-list a').forEach(function (mailTab) {
            mailTab.addEventListener("click", function () {
                var chatUserList = document.querySelector(".mail-list a.active");
                if (chatUserList) chatUserList.classList.remove("active");
                mailTab.classList.add('active');
            });
        });

        document.querySelector('.close-btn-email').addEventListener('click', () => {
            document.body.classList.remove('email-detail-show');
        });
        var isShowMenu = false;
        document.querySelectorAll(".email-menu-btn").forEach(function (item) {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                isShowMenu = true;
                document.getElementById('menusidebar').classList.add("menubar-show");
            });
        });

        document.querySelector('.email-wrapper').addEventListener('click', function () {
            if (document.querySelector(".email-menu-sidebar").classList.contains('menubar-show')) {
                if (!isShowMenu) {
                    document.querySelector(".email-menu-sidebar").classList.remove("menubar-show");
                }
                isShowMenu = false;
            }
        });

    }
};
</script>

<template>
    <Layout>
        <div class="email-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
            <div id="menusidebar" class="email-menu-sidebar">
                <div class="p-4 d-flex flex-column h-100">
                    <div class="pb-4 border-bottom border-bottom-dashed">
                        <b-button class="w-100" type="button" variant="danger" @click="modalShow = !modalShow">
                            <plus-circle-icon class="icon-xs me-1 icon-dual-light"></plus-circle-icon>
                            Compose
                        </b-button>
                    </div>

                    <div class="mx-n4 px-4 email-menu-sidebar-scroll" data-simplebar>
                        <div class="mail-list mt-3">
                            <b-link class="active" href="#" @click="changemenu('all')"><i
                                class="ri-mail-fill me-3 align-middle fw-medium"></i> <span
                                class="mail-list-link">All</span>
                                <b-badge class="badge-soft-success ms-auto  "
                                         variant="soft-success">5
                                </b-badge>
                            </b-link>
                            <b-link href="#" @click="changemenu('Inbox')"><i
                                class="ri-inbox-archive-fill me-3 align-middle fw-medium"></i> Inbox
                                <b-badge
                                    class="badge-soft-success ms-auto  " variant="soft-success">5
                                </b-badge>
                            </b-link>
                            <b-link href="#" @click="changemenu('Sent')"><i
                                class="ri-send-plane-2-fill me-3 align-middle fw-medium"></i> Sent
                            </b-link>
                            <b-link href="#" @click="changemenu('Draft')"><i
                                class="ri-edit-2-fill me-3 align-middle fw-medium"></i>Draft
                            </b-link>
                            <b-link href="#" @click="changemenu('Spam')"><i
                                class="ri-error-warning-fill me-3 align-middle fw-medium"></i>Spam
                            </b-link>
                            <b-link href="#" @click="changemenu('Trash')"><i
                                class="ri-delete-bin-5-fill me-3 align-middle fw-medium"></i>Trash
                            </b-link>
                            <b-link href="#" @click="changemenu('Starred')"><i
                                class="ri-star-fill me-3 align-middle fw-medium"></i>Starred
                            </b-link>
                            <b-link href="#" @click="changemenu('Important')"><i
                                class="ri-price-tag-3-fill me-3 align-middle fw-medium"></i>Important
                            </b-link>
                        </div>

                        <div>
                            <h5 class="fs-12 text-uppercase text-muted mt-4">Labels</h5>

                            <div class="mail-list mt-1">
                                <b-link href="#" @click="changelable('Support')"><span
                                    class="ri-checkbox-blank-circle-line me-2 text-info"></span> Support
                                    <b-badge
                                        class="badge-soft-success ms-auto" variant="soft-success">3
                                    </b-badge>
                                </b-link>
                                <b-link href="#" @click="changelable('Freelance')"><span
                                    class="ri-checkbox-blank-circle-line me-2 text-warning"></span> Freelance
                                </b-link>
                                <b-link href="#" @click="changelable('Social')"><span
                                    class="ri-checkbox-blank-circle-line me-2 text-primary"></span> Social
                                </b-link>
                                <b-link href="#" @click="changelable('Friends')"><span
                                    class="ri-checkbox-blank-circle-line me-2 text-danger"></span> Friends
                                    <b-badge
                                        class="badge-soft-success ms-auto" variant="soft-success">2
                                    </b-badge>
                                </b-link>
                                <b-link href="#" @click="changelable('Family')"><span
                                    class="ri-checkbox-blank-circle-line me-2 text-success"></span> Family
                                </b-link>
                            </div>
                        </div>

                        <div class="border-top border-top-dashed pt-3 mt-3">
                            <b-link class="btn btn-icon btn-sm btn-soft-info btn-rounded float-end" href="#"><i
                                class="bx bx-plus fs-16"></i></b-link>
                            <h5 class="fs-12 text-uppercase text-muted mb-3">Chat</h5>

                            <div class="mt-2 vstack email-chat-list mx-n4">
                                <b-link class="d-flex align-items-center" href="javascript: void(0);">
                                    <div class="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                        <img alt="" class="img-fluid rounded-circle"
                                             src="@/assets/images/users/avatar-2.jpg">
                                    </div>

                                    <div class="flex-grow-1 chat-user-box overflow-hidden" @click="changeUserScroll">
                                        <h5 class="fs-13 text-truncate mb-0 chatlist-user-name">Julia Martina</h5>
                                        <small class="text-muted text-truncate mb-0">Hello ! are you there?</small>
                                    </div>
                                </b-link>

                                <b-link class="d-flex align-items-center active" href="javascript: void(0);">
                                    <div class="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                        <img alt="" class="img-fluid rounded-circle"
                                             src="@/assets/images/users/avatar-4.jpg">
                                    </div>

                                    <div class="flex-grow-1 chat-user-box overflow-hidden" @click="changeUserScroll">
                                        <h5 class="fs-13 text-truncate mb-0 chatlist-user-name">Julian Rosa</h5>
                                        <small class="text-muted text-truncate mb-0">What about our next..</small>
                                    </div>
                                </b-link>

                                <b-link class="d-flex align-items-center" href="javascript: void(0);">
                                    <div class="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                        <img alt="" class="img-fluid rounded-circle"
                                             src="@/assets/images/users/avatar-3.jpg">
                                    </div>

                                    <div class="flex-grow-1 chat-user-box overflow-hidden" @click="changeUserScroll">
                                        <h5 class="fs-13 text-truncate mb-0 chatlist-user-name">David Medina</h5>
                                        <small class="text-muted text-truncate mb-0">Yeah everything is fine</small>
                                    </div>
                                </b-link>

                                <b-link class="d-flex align-items-center" href="javascript: void(0);">
                                    <div class="flex-shrink-0 me-2 avatar-xxs chatlist-user-image">
                                        <img alt="" class="img-fluid rounded-circle"
                                             src="@/assets/images/users/avatar-5.jpg">
                                    </div>

                                    <div class="flex-grow-1 chat-user-box overflow-hidden" @click="changeUserScroll">
                                        <h5 class="fs-13 text-truncate mb-0 chatlist-user-name">Jay Baker</h5>
                                        <small class="text-muted text-truncate mb-0">Wow that's great</small>
                                    </div>
                                </b-link>
                            </div>
                        </div>
                    </div>

                    <div class="mt-auto">
                        <h5 class="fs-13">1.75 GB of 10 GB used</h5>
                        <div class="progress progress-sm">
                            <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25"
                                 class="progress-bar bg-success" role="progressbar" style="width: 25%"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="email-content">
                <div class="px-4 pt-4 pb-0">
                    <div class="border-bottom border-bottom-dashed">
                        <b-row class="mt-n2 mb-3 mb-sm-0">
                            <b-col class="d-block d-lg-none" order="1" sm="auto">
                                <b-button class="btn-icon fs-16 email-menu-btn" size="sm" type="button"
                                          variant="soft-success">
                                    <i class="ri-menu-2-fill align-bottom"></i>
                                </b-button>
                            </b-col>
                            <b-col order="3" order-sm="2" sm>
                                <div class="hstack gap-sm-1 align-items-center flex-wrap email-topbar-link">
                                    <div class="form-check fs-14 m-0">
                                        <input id="checkall" class="form-check-input" type="checkbox" value="">
                                        <label class="form-check-label" for="flexCheck18"></label>
                                    </div>
                                    <div id="email-topbar-actions">
                                        <b-button v-b-tooltip.hover class="btn-icon fs-16" size="sm"
                                                  title="Archive" type="button" variant="ghost-secondary">
                                            <i class="ri-inbox-archive-fill align-bottom"></i>
                                        </b-button>
                                        <b-button v-b-tooltip.hover class="btn-icon fs-16" size="sm"
                                                  title="Report Spam" type="button" variant="ghost-secondary">
                                            <i class="ri-error-warning-fill align-bottom"></i>
                                        </b-button>
                                        <b-button class="btn-icon fs-16" data-bs-placement="top" data-bs-trigger="hover"
                                                  size="sm" title="Trash" type="button"
                                                  variant="ghost-secondary" @click="deleteMail">
                                            <i class="ri-delete-bin-5-fill align-bottom"></i>
                                        </b-button>
                                    </div>
                                    <div class="vr align-self-center mx-2"></div>
                                    <b-button v-b-tooltip.hover class="btn-icon fs-16" size="sm" title="Labels"
                                              type="button" variant="ghost-secondary">
                                        <i class="ri-mail-open-fill align-bottom"></i>
                                    </b-button>
                                    <b-button v-b-tooltip.hover class="btn-icon fs-16" size="sm" title="Labels"
                                              type="button" variant="ghost-secondary">
                                        <i class="ri-price-tag-3-fill align-bottom"></i>
                                    </b-button>
                                </div>
                            </b-col>
                            <div class="col-auto order-2 order-sm-3">
                                <div class="d-flex gap-sm-1 email-topbar-link">
                                    <b-button class="btn-icon fs-16" size="sm" type="button" variant="ghost-secondary">
                                        <i class="ri-refresh-line align-bottom"></i>
                                    </b-button>
                                    <div class="dropdown">
                                        <button aria-expanded="false" aria-haspopup="true"
                                                class="btn btn-ghost-secondary btn-icon btn-sm fs-16"
                                                data-bs-toggle="dropdown" type="button">
                                            <i class="ri-more-2-fill align-bottom"></i>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <b-link class="dropdown-item" href="#">Mark as Unread</b-link>
                                            <b-link class="dropdown-item" href="#">Mark as Important</b-link>
                                            <b-link class="dropdown-item" href="#">Add to Tasks</b-link>
                                            <b-link class="dropdown-item" href="#">Add Star</b-link>
                                            <b-link class="dropdown-item" href="#">Mute</b-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-row>

                        <b-row class="align-items-center mt-3">
                            <b-col>
                                <ul id="mailfilter"
                                    class="nav nav-tabs nav-tabs-custom nav-success gap-1 text-center border-bottom-0"
                                    role="tablist">
                                    <li class="nav-item tabtype">
                                        <b-link id="primarytab" class="nav-link fw-semibold active" href="#"
                                                @click="changetab('primary')">
                                            <i class="ri-inbox-fill align-bottom d-inline-block"></i>
                                            <span class="ms-1 d-none d-sm-inline-block">Primary</span>
                                        </b-link>
                                    </li>
                                    <li class="nav-item tabtype">
                                        <b-link class="nav-link fw-semibold" href="#">
                                            <i class="ri-group-fill align-bottom d-inline-block"></i>
                                            <span class="ms-1 d-none d-sm-inline-block">Social</span>
                                        </b-link>
                                    </li>
                                    <li class="nav-item tabtype">
                                        <b-link class="nav-link fw-semibold" href="#">
                                            <i class="ri-price-tag-3-fill align-bottom d-inline-block"></i>
                                            <span class="ms-1 d-none d-sm-inline-block">Promotions</span>
                                        </b-link>
                                    </li>
                                </ul>
                            </b-col>
                            <div class="col-auto">
                                <div class="text-muted">1-50 of 154</div>
                            </div>
                        </b-row>
                    </div>
                    <div id="emailsdatas" class="message-list-content mx-n4 px-4 message-list-scroll" data-simplebar>
                        <div id="elmLoader">
                            <div class="spinner-border text-primary avatar-sm" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <ul id="mail-list-data" class="message-list" style="display: none">
                            <div v-if="tabtype == 'primary'">
                                <div v-for="(data, index) of emailsdata[0].primary" :key="index">
                                    <li v-if="menutab == 'all' || data.tabtype == menutab || labeltype == 'all' || data.labeltype == labeltype"
                                        :class="{ 'unread': data.readed == false }">
                                        <div>
                                            <div class="col-mail col-mail-1">
                                                <div class="form-check checkbox-wrapper-mail fs-14">
                                                    <span id="id" hidden>{{ data.id }}</span>
                                                    <input id="flexCheck20" class="form-check-input" type="checkbox"
                                                           value="">
                                                    <label class="form-check-label" for="flexCheck20"></label>
                                                </div>
                                                <b-button :class="{ 'active': data.starred == true }"
                                                          class="btn avatar-xs mt-n1 p-0 favourite-btn fs-15"
                                                          type="button"
                                                          variant="transparent"
                                                          @click="toggleFavourite">
                                                    <i class="ri-star-fill"></i>
                                                </b-button>

                                                <b-link class="title-name" href="javascript: void(0);"
                                                        @click="openemail">{{
                                                        data.name
                                                    }}
                                                </b-link>
                                            </div>
                                            <div class="col-mail col-mail-2" @click="openemail">
                                                <b-link class="subject" href="javascript: void(0);"> <span
                                                    class="subject-title">{{ data.title }}</span> – <span
                                                    class="teaser">{{ data.description }}</span>
                                                </b-link>
                                                <div class="date">{{ data.date }}</div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </div>
                            <div v-if="tabtype == 'social'">
                                <li v-for="(data, index) of emailsdata[0].social" :key="index"
                                    :class="{ 'unread': data.readed == false }">
                                    <div class="col-mail col-mail-1" @click="openemail">
                                        <div class="form-check checkbox-wrapper-mail fs-14">
                                            <input id="flexCheck20" class="form-check-input" type="checkbox" value="">
                                            <label class="form-check-label" for="flexCheck20"></label>
                                        </div>
                                        <b-button :class="{ 'active': data.starred == true }"
                                                  class="btn avatar-xs p-0 favourite-btn fs-15 sszxfsf"
                                                  type="button" @click="toggleFavourite">
                                            <i class="ri-star-fill"></i>
                                        </b-button>
                                        <b-link class="title" href="javascript: void(0);">{{ data.name }}</b-link>
                                    </div>
                                    <div class="col-mail col-mail-2" @click="openemail">
                                        <b-link class="subject" href="javascript: void(0);"> <span
                                            class="subject-title">{{
                                                data.title
                                            }}</span> – <span class="teaser">{{
                                                data.description
                                            }}</span>
                                        </b-link>
                                        <div class="date">{{ data.date }}</div>
                                    </div>
                                </li>
                            </div>
                            <div v-if="tabtype == 'promotions'">
                                <li v-for="(data, index) of emailsdata[0].promotions" :key="index"
                                    :class="{ 'unread': data.readed == false }">
                                    <div class="col-mail col-mail-1">
                                        <div class="form-check checkbox-wrapper-mail fs-14">
                                            <input id="flexCheck20" class="form-check-input" type="checkbox" value="">
                                            <label class="form-check-label" for="flexCheck20"></label>
                                        </div>
                                        <b-button :class="{ 'active': data.starred == true }"
                                                  class="btn avatar-xs p-0 favourite-btn fs-15"
                                                  type="button" @click="toggleFavourite">
                                            <i class="ri-star-fill"></i>
                                        </b-button>
                                        <b-link class="title" href="javascript: void(0);">{{ data.name }}</b-link>
                                    </div>
                                    <div class="col-mail col-mail-2" @click="openemail">
                                        <b-link class="subject" href="javascript: void(0);"> <span
                                            class="subject-title">{{
                                                data.title
                                            }}</span> – <span class="teaser">{{
                                                data.description
                                            }}</span>
                                        </b-link>
                                        <div class="date">{{ data.date }}</div>
                                    </div>
                                </li>
                            </div>
                            <li class="bg-transparent text-center">
                                <b-button class="btn-rounded px-2" pill size="sm" type="button" variant="soft-info"><i
                                    class="mdi mdi-spin mdi-loading me-2"></i>Load More
                                </b-button>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>


            <div class="email-detail-content">
                <div class="p-4 d-flex flex-column h-100">
                    <div class="pb-4 border-bottom border-bottom-dashed">
                        <b-row>
                            <b-col>
                                <div class="">
                                    <b-button id="close-btn-email" class="btn-icon fs-16 close-btn-email" size="sm"
                                              type="button" variant="soft-danger">
                                        <i class="ri-close-fill align-bottom"></i>
                                    </b-button>
                                </div>
                            </b-col>
                            <div class="col-auto">
                                <div class="hstack gap-sm-1 align-items-center flex-wrap email-topbar-link">
                                    <b-button class=" btn-icon fs-16 favourite-btn active" size="sm" type="button"
                                              variant="ghost-secondary">
                                        <i class="ri-star-fill align-bottom"></i>
                                    </b-button>
                                    <b-button class="btn-icon fs-16" size="sm" variant="ghost-secondary">
                                        <i class="ri-printer-fill align-bottom"></i>
                                    </b-button>
                                    <b-button class="btn-icon btn-sm fs-16 remove-mail" type="button"
                                              variant="ghost-secondary"
                                              @click="removeModal = !removeModal">
                                        <i class="ri-delete-bin-5-fill align-bottom"></i>
                                    </b-button>
                                    <div class="dropdown">
                                        <button aria-expanded="false" aria-haspopup="true"
                                                class="btn btn-ghost-secondary btn-icon btn-sm fs-16"
                                                data-bs-toggle="dropdown" type="button">
                                            <i class="ri-more-2-fill align-bottom"></i>
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-end">
                                            <b-link class="dropdown-item" href="#">Mark as Unread</b-link>
                                            <b-link class="dropdown-item" href="#">Mark as Important</b-link>
                                            <b-link class="dropdown-item" href="#">Add to Tasks</b-link>
                                            <b-link class="dropdown-item" href="#">Add Star</b-link>
                                            <b-link class="dropdown-item" href="#">Mute</b-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-row>
                    </div>

                    <div class="mx-n4 px-4 email-detail-content-scroll" data-simplebar>
                        <div class="mt-4 mb-3">
                            <h5 class="fw-bold email-subject-title">New updates for Skote Theme</h5>
                        </div>

                        <div class="accordion accordion-flush">
                            <div class="accordion-item border-dashed">
                                <div class="accordion-header">
                                    <b-link v-b-toggle.email-collapseOne
                                            class="btn w-100 text-start px-0 bg-transparent shadow-none collapsed"
                                            role="button">
                                        <div class="d-flex align-items-center text-muted">
                                            <div class="flex-shrink-0 avatar-xs me-3">
                                                <img alt="" class="img-fluid rounded-circle"
                                                     src="@/assets/images//users/avatar-3.jpg">
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-14 text-truncate mb-0">Jack Davis</h5>
                                                <div class="text-truncate fs-12">to: me</div>
                                            </div>
                                            <div class="flex-shrink-0 align-self-start">
                                                <div class="text-muted fs-12">09 Jan 2022, 11:12 AM</div>
                                            </div>
                                        </div>
                                    </b-link>
                                </div>

                                <b-collapse id="email-collapseOne">
                                    <div class="accordion-body text-body px-0">
                                        <div>
                                            <p>Hi,</p>
                                            <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque
                                                arcu leo, facilisis in fringilla id, luctus in tortor.
                                            </p>
                                            <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam
                                                eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed
                                                bibendum orci non tincidunt ultrices.</p>
                                            <p>Sincerly,</p>

                                            <div class="d-flex gap-3">
                                                <div class="border rounded avatar-xl h-auto">
                                                    <img alt="" class="img-fluid rouned-top"
                                                         src="@/assets/images/small/img-2.jpg">
                                                    <div class="py-2 text-center">
                                                        <b-link class="d-block fw-semibold" href="">Download</b-link>
                                                    </div>
                                                </div>
                                                <div class="border rounded avatar-xl h-auto">
                                                    <img alt="" class="img-fluid rouned-top"
                                                         src="@/assets/images/small/img-6.jpg">
                                                    <div class="py-2 text-center">
                                                        <b-link class="d-block fw-semibold" href="">Download</b-link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-collapse>
                            </div>


                            <div class="accordion-item border-dashed">
                                <div class="accordion-header">
                                    <b-link v-b-toggle.email-collapseTwo
                                            class="btn w-100 text-start px-0 bg-transparent shadow-none collapsed"
                                            role="button">
                                        <div class="d-flex align-items-center text-muted">
                                            <div class="flex-shrink-0 avatar-xs me-3">
                                                <img alt="" class="img-fluid rounded-circle"
                                                     src="@/assets/images//users/avatar-1.jpg">
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-14 text-truncate mb-0">Anna Adame</h5>
                                                <div class="text-truncate fs-12">to: jackdavis@email.com</div>
                                            </div>
                                            <div class="flex-shrink-0 align-self-start">
                                                <div class="text-muted fs-12">09 Jan 2022, 02:15 PM</div>
                                            </div>
                                        </div>
                                    </b-link>
                                </div>

                                <b-collapse id="email-collapseTwo">
                                    <div class="accordion-body text-body px-0">
                                        <div>
                                            <p>Hi,</p>
                                            <p>If several languages coalesce, the grammar of the resulting language is
                                                more simple and regular than that of the individual.</p>
                                            <p>Thank you</p>
                                        </div>
                                    </div>
                                </b-collapse>
                            </div>


                            <div class="accordion-item border-dashed">
                                <div class="accordion-header">
                                    <b-link v-b-toggle.email-collapseThree
                                            class="btn w-100 text-start px-0 bg-transparent shadow-none"
                                            role="button">
                                        <div class="d-flex align-items-center text-muted">
                                            <div class="flex-shrink-0 avatar-xs me-3">
                                                <img alt="" class="img-fluid rounded-circle"
                                                     src="@/assets/images//users/avatar-3.jpg">
                                            </div>
                                            <div class="flex-grow-1 overflow-hidden">
                                                <h5 class="fs-14 text-truncate mb-0">Jack Davis</h5>
                                                <div class="text-truncate fs-12">to: me</div>
                                            </div>
                                            <div class="flex-shrink-0 align-self-start">
                                                <div class="text-muted fs-12">10 Jan 2022, 10:08 AM</div>
                                            </div>
                                        </div>
                                    </b-link>
                                </div>

                                <b-collapse id="email-collapseThree" visible>
                                    <div class="accordion-body text-body px-0">
                                        <div>
                                            <p>Hi,</p>
                                            <p>Everyone realizes why a new common language would be desirable: one could
                                                refuse to pay expensive translators. To achieve this, it would be
                                                necessary to have uniform grammar pronunciation.</p>
                                            <p>Thank you</p>
                                        </div>
                                    </div>
                                </b-collapse>
                            </div>


                        </div>
                    </div>
                    <div class="mt-auto">
                        <b-form class="mt-2">
                            <div>
                                <label class="form-label" for="exampleFormControlTextarea1">Reply :</label>
                                <textarea id="exampleFormControlTextarea1"
                                          class="form-control border-bottom-0 rounded-top rounded-0 border"
                                          placeholder="Enter message"
                                          rows="3"></textarea>
                                <div class="bg-light px-2 py-1 rouned-bottom border">
                                    <b-row>
                                        <b-col>
                                            <b-btn-group>
                                                <b-button class="py-0 fs-15" data-bs-placement="top"
                                                          data-bs-toggle="tooltip" size="sm"
                                                          title="Bold" type="button" variant="light">
                                                    <i
                                                        class="ri-bold align-bottom"></i></b-button>
                                                <b-button class="py-0 fs-15" data-bs-placement="top"
                                                          data-bs-toggle="tooltip" size="sm"
                                                          title="Italic" type="button"
                                                          variant="light"><i
                                                    class="ri-italic align-bottom"></i></b-button>
                                                <b-button class="py-0 fs-15" data-bs-placement="top"
                                                          data-bs-toggle="tooltip" size="sm"
                                                          title="Link" type="button" variant="light">
                                                    <i
                                                        class="ri-link align-bottom"></i></b-button>
                                                <b-button class="py-0 fs-15" data-bs-placement="top"
                                                          data-bs-toggle="tooltip" size="sm"
                                                          title="Image" type="button"
                                                          variant="light"><i
                                                    class="ri-image-2-line align-bottom"></i></b-button>
                                            </b-btn-group>
                                        </b-col>
                                        <div class="col-auto">
                                            <b-btn-group class="btn-group">
                                                <b-button size="sm" type="button" variant="success"><i
                                                    class="ri-send-plane-2-fill align-bottom"></i></b-button>
                                                <button aria-expanded="false"
                                                        class="btn btn-sm btn-success dropdown-toggle dropdown-toggle-split"
                                                        data-bs-toggle="dropdown" type="button">
                                                    <span class="visually-hidden">Toggle Dropdown</span>
                                                </button>
                                                <ul class="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <b-link class="dropdown-item" href="#"><i
                                                            class="ri-timer-line text-muted me-1 align-bottom"></i>
                                                            Schedule Send
                                                        </b-link>
                                                    </li>
                                                </ul>
                                            </b-btn-group>
                                        </div>
                                    </b-row>
                                </div>
                            </div>
                        </b-form>
                    </div>
                </div>
            </div>

        </div>
        <div id="emailchat-detailElem" class="email-chat-detail" style="display: none;">
            <b-card class="mb-0" no-body>
                <b-card-header class="align-items-center d-flex bg-primary text-white-50">
                    <div class="flex-grow-1">
                        <h5 class="fs-13 text-white mb-1 profile-username">Julian Rosa</h5>
                        <p class="mb-0 fs-12 lh-1">Active</p>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="mt-n3 me-n3">
                            <b-button id="emailchat-btn-close" class="text-white fs-16 text-decoration-none"
                                      type="button"
                                      variant="link"><i class="ri-close-fill"></i></b-button>
                        </div>
                    </div>
                </b-card-header>

                <b-card-body class="p-0">
                    <div id="users-chat">
                        <div id="chat-conversation" class="chat-conversation p-3" data-simplebar="init"
                             style="height: 250px;">
                            <div class="simplebar-wrapper" style="margin: -16px;">
                                <div class="simplebar-height-auto-observer-wrapper">
                                    <div class="simplebar-height-auto-observer"></div>
                                </div>
                                <div class="simplebar-mask">
                                    <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                                        <div aria-label="scrollable content" class="simplebar-content-wrapper"
                                             role="region"
                                             style="height: 100%; overflow: hidden scroll;"
                                             tabindex="0">
                                            <div class="simplebar-content" style="padding: 16px;">
                                                <ul id="users-conversation"
                                                    class="list-unstyled chat-conversation-list chat-sm">
                                                    <li class="chat-list left">
                                                        <div class="conversation-list">
                                                            <div class="chat-avatar">
                                                                <img alt="" src="@/assets/images/users/avatar-4.jpg">
                                                            </div>
                                                            <div class="user-chat-content">
                                                                <div class="ctext-wrap">
                                                                    <div class="ctext-wrap-content">
                                                                        <p class="mb-0 ctext-content">Good morning 😊
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        class="dropdown align-self-start message-box-drop">
                                                                        <b-link aria-expanded="false"
                                                                                aria-haspopup="true"
                                                                                class="dropdown-toggle"
                                                                                data-bs-toggle="dropdown"
                                                                                href="#"
                                                                                role="button">
                                                                            <i class="ri-more-2-fill"></i>
                                                                        </b-link>
                                                                        <div class="dropdown-menu">
                                                                            <b-link class="dropdown-item" href="#"><i
                                                                                class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                                            </b-link>
                                                                            <b-link class="dropdown-item" href="#"><i
                                                                                class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy
                                                                            </b-link>
                                                                            <b-link class="dropdown-item delete-item"
                                                                                    href="#"><i
                                                                                class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                                            </b-link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="conversation-name"><small
                                                                    class="text-muted time">09:07 am</small> <span
                                                                    class="text-success check-message-icon"><i
                                                                    class="ri-check-double-line align-bottom"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>


                                                    <li class="chat-list right">
                                                        <div class="conversation-list">
                                                            <div class="user-chat-content">
                                                                <div class="ctext-wrap">
                                                                    <div class="ctext-wrap-content">
                                                                        <p class="mb-0 ctext-content">Good morning, How
                                                                            are you? What about our next meeting?</p>
                                                                    </div>
                                                                    <div
                                                                        class="dropdown align-self-start message-box-drop">
                                                                        <b-link aria-expanded="false"
                                                                                aria-haspopup="true"
                                                                                class="dropdown-toggle"
                                                                                data-bs-toggle="dropdown"
                                                                                href="#"
                                                                                role="button">
                                                                            <i class="ri-more-2-fill"></i>
                                                                        </b-link>
                                                                        <div class="dropdown-menu">
                                                                            <b-link class="dropdown-item" href="#"><i
                                                                                class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                                            </b-link>
                                                                            <b-link class="dropdown-item" href="#"><i
                                                                                class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy
                                                                            </b-link>
                                                                            <b-link class="dropdown-item delete-item"
                                                                                    href="#"><i
                                                                                class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                                            </b-link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="conversation-name"><small
                                                                    class="text-muted time">09:08 am</small> <span
                                                                    class="text-success check-message-icon"><i
                                                                    class="ri-check-double-line align-bottom"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>


                                                    <li class="chat-list left">
                                                        <div class="conversation-list">
                                                            <div class="chat-avatar">
                                                                <img alt="" src="@/assets/images/users/avatar-4.jpg">
                                                            </div>
                                                            <div class="user-chat-content">
                                                                <div class="ctext-wrap">
                                                                    <div class="ctext-wrap-content">
                                                                        <p class="mb-0 ctext-content">Yeah everything is
                                                                            fine. Our next meeting tomorrow at 10.00 AM
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        class="dropdown align-self-start message-box-drop">
                                                                        <b-link aria-expanded="false"
                                                                                aria-haspopup="true"
                                                                                class="dropdown-toggle"
                                                                                data-bs-toggle="dropdown"
                                                                                href="#"
                                                                                role="button">
                                                                            <i class="ri-more-2-fill"></i>
                                                                        </b-link>
                                                                        <div class="dropdown-menu">
                                                                            <b-link class="dropdown-item" href="#"><i
                                                                                class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                                            </b-link>
                                                                            <b-link class="dropdown-item" href="#"><i
                                                                                class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy
                                                                            </b-link>
                                                                            <b-link class="dropdown-item delete-item"
                                                                                    href="#"><i
                                                                                class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                                            </b-link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="conversation-name"><small
                                                                    class="text-muted time">09:10 am</small> <span
                                                                    class="text-success check-message-icon"><i
                                                                    class="ri-check-double-line align-bottom"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>


                                                    <li class="chat-list right">
                                                        <div class="conversation-list">
                                                            <div class="user-chat-content">
                                                                <div class="ctext-wrap">
                                                                    <div class="ctext-wrap-content">
                                                                        <p class="mb-0 ctext-content">Wow that's great
                                                                        </p>
                                                                    </div>
                                                                    <div
                                                                        class="dropdown align-self-start message-box-drop">
                                                                        <b-link aria-expanded="false"
                                                                                aria-haspopup="true"
                                                                                class="dropdown-toggle"
                                                                                data-bs-toggle="dropdown"
                                                                                href="#"
                                                                                role="button">
                                                                            <i class="ri-more-2-fill"></i>
                                                                        </b-link>
                                                                        <div class="dropdown-menu">
                                                                            <b-link class="dropdown-item" href="#"><i
                                                                                class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                                            </b-link>
                                                                            <b-link class="dropdown-item" href="#"><i
                                                                                class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy
                                                                            </b-link>
                                                                            <b-link class="dropdown-item delete-item"
                                                                                    href="#"><i
                                                                                class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                                            </b-link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="conversation-name"><small
                                                                    class="text-muted time">09:12 am</small> <span
                                                                    class="text-success check-message-icon"><i
                                                                    class="ri-check-double-line align-bottom"></i></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="simplebar-placeholder" style="width: auto; height: 479px;"></div>
                            </div>
                            <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                                <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                            </div>
                            <div class="simplebar-track simplebar-vertical" style="visibility: visible;">
                                <div class="simplebar-scrollbar"
                                     style="height: 130px; display: block; transform: translate3d(0px, 120px, 0px);">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="border-top border-top-dashed">
                        <b-row class="g-2 mx-3 mt-2 mb-3">
                            <b-col>
                                <div class="position-relative">
                                    <input class="form-control border-light bg-light" placeholder="Enter Message..."
                                           type="text">
                                </div>
                            </b-col>
                            <div class="col-auto">
                                <b-button type="submit" variant="info"><i class="mdi mdi-send"></i></b-button>
                            </div>
                        </b-row>
                    </div>
                </b-card-body>
            </b-card>
        </div>

        <b-modal v-model="modalShow" centered class="v-modal-custom" header-class="p-3 bg-light" hide-footer
                 size="lg" title="New Message">
            <div>
                <div class="mb-3 position-relative">
                    <Multiselect v-model="value" :close-on-select="false" :create-option="true"
                                 :options="[
    { value: 'support@themesbrand.com', label: 'support@themesbrand.com' },
    { value: 'photoshop', label: 'themesbrand@gmail.com' },
]" :searchable="true" class="form-control email-compose-input" mode="tags"/>
                    <div class="position-absolute top-0 end-0">
                        <div class="d-flex">
                            <button v-b-toggle.CcRecipientsCollapse class="btn btn-link text-reset fw-semibold px-2"
                                    type="button">
                                Cc
                            </button>
                            <button v-b-toggle.BccRecipientsCollapse class="btn btn-link text-reset fw-semibold px-2"
                                    type="button">
                                Bcc
                            </button>
                        </div>
                    </div>
                </div>
                <b-collapse id="CcRecipientsCollapse">
                    <div class="mb-3">
                        <label>Cc:</label>
                        <input class="form-control" data-choices data-choices-limit="15" data-choices-removeItem
                               placeholder="Cc recipients" type="text">
                    </div>
                </b-collapse>
                <b-collapse id="BccRecipientsCollapse">
                    <div class="mb-3">
                        <label>Bcc:</label>
                        <input class="form-control" data-choices data-choices-limit="15" data-choices-removeItem
                               placeholder="Bcc recipients" type="text">
                    </div>
                </b-collapse>

                <div class="mb-3">
                    <input class="form-control" placeholder="Subject" type="text">
                </div>
                <div class="ck-editor-reverse">
                    <div id="email-editor"></div>
                    <ckeditor id="email-editor" v-model="editorData" :editor="editor"></ckeditor>
                </div>

            </div>
            <div class="modal-footer v-modal-footer">
                <b-button data-bs-dismiss="modal" type="button" variant="ghost-danger"
                          @click="modalShow = false">Discard
                </b-button>

                <b-btn-group class="btn-group">
                    <b-button type="button" variant="success">Send</b-button>
                    <button aria-expanded="false" class="btn btn-success dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" type="button">
                        <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                            <b-link class="dropdown-item" href="#"><i
                                class="ri-timer-line text-muted me-1 align-bottom"></i> Schedule Send
                            </b-link>
                        </li>
                    </ul>
                </b-btn-group>
            </div>
        </b-modal>

        <!-- remove modal  -->
        <b-modal id="removeItemModal" v-model="removeModal" centered class="v-modal-custom"
                 header-class="p-3 bg-light" hide-footer no-close-on-backdrop>
            <div class="mt-2 text-center">

                <lottie :height="100" :options="defaultOptions" :width="100"
                        colors="primary:#f7b84b,secondary:#f06548" trigger="loop"/>

                <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                    <h4>Are you Sure ?</h4>
                    <p class="text-muted mx-4 mb-0">Are you Sure You want to Remove this Record ?</p>
                </div>
            </div>
            <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
                <b-button id="btn-close" class="w-sm" type="button" variant="light"
                          @click="removeModal = false">Close
                </b-button>
                <b-button id="delete-record" class="w-sm" type="button" variant="danger">Yes, Delete It!</b-button>
            </div>
        </b-modal>

    </Layout>
</template>
