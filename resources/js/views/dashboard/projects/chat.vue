<script>
export default {
    mounted() {
        // chat
        var currentChatId = "users-chat";
        scrollToBottom(currentChatId);

        // // Scroll to Bottom
        function scrollToBottom(id) {
            setTimeout(function () {
                var simpleBar = document.getElementById(id).querySelector(
                    "#chat-conversation .simplebar-content-wrapper") ?
                    document.getElementById(id).querySelector(
                        "#chat-conversation .simplebar-content-wrapper") : '';

                var offsetHeight = document.getElementsByClassName("chat-conversation-list")[0] ?
                    document.getElementById(id).getElementsByClassName("chat-conversation-list")[0]
                        .scrollHeight - window.innerHeight + 600 : 0;

                if (offsetHeight)
                    simpleBar.scrollTo({
                        top: offsetHeight,
                        behavior: "smooth"
                    });
            }, 300);
        }
    },
};
</script>

<template>
    <b-card class="card-height-100" no-body>
        <b-card-header class="align-items-center d-flex">
            <b-card-title class="mb-0 flex-grow-1">Chat</b-card-title>
            <div class="flex-shrink-0">
                <div class="dropdown card-header-dropdown">
                    <b-link aria-expanded="false" aria-haspopup="true" class="text-reset dropdown-btn" data-bs-toggle="dropdown"
                            href="#">
                        <span class="text-muted"><i class="ri-settings-4-line align-middle me-1"></i>Setting <i
                            class="mdi mdi-chevron-down ms-1"></i></span>
                    </b-link>
                    <div class="dropdown-menu dropdown-menu-end">
                        <b-link class="dropdown-item" href="#"><i
                            class="ri-user-2-fill align-bottom text-muted me-2"></i>
                            View Profile
                        </b-link>
                        <b-link class="dropdown-item" href="#"><i
                            class="ri-inbox-archive-line align-bottom text-muted me-2"></i> Archive
                        </b-link>
                        <b-link class="dropdown-item" href="#"><i
                            class="ri-mic-off-line align-bottom text-muted me-2"></i>
                            Muted
                        </b-link>
                        <b-link class="dropdown-item" href="#"><i
                            class="ri-delete-bin-5-line align-bottom text-muted me-2"></i> Delete
                        </b-link>
                    </div>
                </div>
            </div>
        </b-card-header>

        <b-card-body class="p-0">
            <div id="users-chat">
                <div id="chat-conversation" class="chat-conversation p-3" data-simplebar style="height: 400px;">
                    <ul id="users-conversation" class="list-unstyled chat-conversation-list chat-sm">
                        <li class="chat-list left">
                            <div class="conversation-list">
                                <div class="chat-avatar">
                                    <img alt="" src="@/assets/images/users/avatar-2.jpg">
                                </div>
                                <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                        <div class="ctext-wrap-content">
                                            <p class="mb-0 ctext-content">Good morning 😊</p>
                                        </div>
                                        <div class="dropdown align-self-start message-box-drop">
                                            <b-link aria-expanded="false" aria-haspopup="true" class="dropdown-toggle"
                                                    data-bs-toggle="dropdown" href="#"
                                                    role="button">
                                                <i class="ri-more-2-fill"></i>
                                            </b-link>
                                            <div class="dropdown-menu">
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-share-line me-2 text-muted align-bottom"></i>Forward
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark
                                                </b-link>
                                                <b-link class="dropdown-item delete-item" href="#"><i
                                                    class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="conversation-name"><small class="text-muted time">09:07 am</small> <span
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
                                            <p class="mb-0 ctext-content">Good morning, How are you?
                                                What about our next meeting?</p>
                                        </div>
                                        <div class="dropdown align-self-start message-box-drop">
                                            <b-link aria-expanded="false" aria-haspopup="true" class="dropdown-toggle"
                                                    data-bs-toggle="dropdown" href="#"
                                                    role="button">
                                                <i class="ri-more-2-fill"></i>
                                            </b-link>
                                            <div class="dropdown-menu">
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-share-line me-2 text-muted align-bottom"></i>Forward
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark
                                                </b-link>
                                                <b-link class="dropdown-item delete-item" href="#"><i
                                                    class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="conversation-name"><small class="text-muted time">09:08 am</small> <span
                                        class="text-success check-message-icon"><i
                                        class="ri-check-double-line align-bottom"></i></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="chat-list left">
                            <div class="conversation-list">
                                <div class="chat-avatar">
                                    <img alt="" src="@/assets/images/users/avatar-2.jpg">
                                </div>
                                <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                        <div class="ctext-wrap-content">
                                            <p class="mb-0 ctext-content">Yeah everything is fine.
                                                Our next meeting tomorrow at 10.00 AM</p>
                                        </div>
                                        <div class="dropdown align-self-start message-box-drop">
                                            <b-link aria-expanded="false" aria-haspopup="true" class="dropdown-toggle"
                                                    data-bs-toggle="dropdown" href="#"
                                                    role="button">
                                                <i class="ri-more-2-fill"></i>
                                            </b-link>
                                            <div class="dropdown-menu">
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-share-line me-2 text-muted align-bottom"></i>Forward
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark
                                                </b-link>
                                                <b-link class="dropdown-item delete-item" href="#"><i
                                                    class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ctext-wrap">
                                        <div class="ctext-wrap-content">
                                            <p class="mb-0 ctext-content">Hey, I'm going to meet a
                                                friend of mine at the department store. I have to
                                                buy some presents for my parents 🎁.</p>
                                        </div>
                                        <div class="dropdown align-self-start message-box-drop">
                                            <b-link aria-expanded="false" aria-haspopup="true" class="dropdown-toggle"
                                                    data-bs-toggle="dropdown" href="#"
                                                    role="button">
                                                <i class="ri-more-2-fill"></i>
                                            </b-link>
                                            <div class="dropdown-menu">
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-share-line me-2 text-muted align-bottom"></i>Forward
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark
                                                </b-link>
                                                <b-link class="dropdown-item delete-item" href="#"><i
                                                    class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="conversation-name"><small class="text-muted time">09:10 am</small> <span
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
                                            <p class="mb-0 ctext-content">Wow that's great</p>
                                        </div>
                                        <div class="dropdown align-self-start message-box-drop">
                                            <b-link aria-expanded="false" aria-haspopup="true" class="dropdown-toggle"
                                                    data-bs-toggle="dropdown" href="#"
                                                    role="button">
                                                <i class="ri-more-2-fill"></i>
                                            </b-link>
                                            <div class="dropdown-menu">
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-share-line me-2 text-muted align-bottom"></i>Forward
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-file-copy-line me-2 text-muted align-bottom"></i>Copy
                                                </b-link>
                                                <b-link class="dropdown-item" href="#"><i
                                                    class="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark
                                                </b-link>
                                                <b-link class="dropdown-item delete-item" href="#"><i
                                                    class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                </b-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="conversation-name"><small class="text-muted time">09:12 am</small> <span
                                        class="text-success check-message-icon"><i
                                        class="ri-check-double-line align-bottom"></i></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li class="chat-list left">
                            <div class="conversation-list">
                                <div class="chat-avatar">
                                    <img alt="" src="@/assets/images/users/avatar-2.jpg">
                                </div>
                                <div class="user-chat-content">
                                    <div class="ctext-wrap">
                                        <div class="message-img mb-0">
                                            <div class="message-img-list">
                                                <div>
                                                    <b-link class="popup-img d-inline-block"
                                                            href="@/assets/images/small/img-1.jpg">
                                                        <img alt="" class="rounded border"
                                                             src="@/assets/images/small/img-1.jpg">
                                                    </b-link>
                                                </div>
                                                <div class="message-img-link">
                                                    <ul class="list-inline mb-0">
                                                        <li class="list-inline-item dropdown">
                                                            <b-link aria-expanded="false" aria-haspopup="true" class="dropdown-toggle"
                                                                    data-bs-toggle="dropdown" href="#"
                                                                    role="button">
                                                                <i class="ri-more-fill"></i>
                                                            </b-link>
                                                            <div class="dropdown-menu">
                                                                <b-link class="dropdown-item"
                                                                        download=""
                                                                        href="@/assets/images/small/img-1.jpg">
                                                                    <i
                                                                        class="ri-download-2-line me-2 text-muted align-bottom"></i>Download
                                                                </b-link>
                                                                <b-link class="dropdown-item" href="#"><i
                                                                    class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                                </b-link>
                                                                <b-link class="dropdown-item" href="#"><i
                                                                    class="ri-share-line me-2 text-muted align-bottom"></i>Forward
                                                                </b-link>
                                                                <b-link class="dropdown-item" href="#"><i
                                                                    class="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark
                                                                </b-link>
                                                                <b-link class="dropdown-item delete-item" href="#"><i
                                                                    class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                                </b-link>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="message-img-list">
                                                <div>
                                                    <b-link class="popup-img d-inline-block"
                                                            href="@/assets/images/small/img-2.jpg">
                                                        <img alt="" class="rounded border"
                                                             src="@/assets/images/small/img-2.jpg">
                                                    </b-link>
                                                </div>
                                                <div class="message-img-link">
                                                    <ul class="list-inline mb-0">
                                                        <li class="list-inline-item dropdown">
                                                            <b-link aria-expanded="false" aria-haspopup="true" class="dropdown-toggle"
                                                                    data-bs-toggle="dropdown" href="#"
                                                                    role="button">
                                                                <i class="ri-more-fill"></i>
                                                            </b-link>
                                                            <div class="dropdown-menu">
                                                                <b-link class="dropdown-item"
                                                                        download=""
                                                                        href="@/assets/images/small/img-2.jpg">
                                                                    <i
                                                                        class="ri-download-2-line me-2 text-muted align-bottom"></i>Download
                                                                </b-link>
                                                                <b-link class="dropdown-item" href="#"><i
                                                                    class="ri-reply-line me-2 text-muted align-bottom"></i>Reply
                                                                </b-link>
                                                                <b-link class="dropdown-item" href="#"><i
                                                                    class="ri-share-line me-2 text-muted align-bottom"></i>Forward
                                                                </b-link>
                                                                <b-link class="dropdown-item" href="#"><i
                                                                    class="ri-bookmark-line me-2 text-muted align-bottom"></i>Bookmark
                                                                </b-link>
                                                                <b-link class="dropdown-item delete-item" href="#"><i
                                                                    class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>Delete
                                                                </b-link>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="conversation-name"><small class="text-muted time">09:30 am</small> <span
                                        class="text-success check-message-icon"><i
                                        class="ri-check-double-line align-bottom"></i></span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
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
                        <b-button type="submit" variant="info"><span class="d-none d-sm-inline-block me-2">Send</span>
                            <i class="mdi mdi-send float-end"></i>
                        </b-button>
                    </div>
                </b-row>
            </div>
        </b-card-body>
    </b-card>
</template>
