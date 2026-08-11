// ============================================================================
// NURSING PREP LAB - UX FIXES
//
// 1. Study Command Center only appears on the dashboard
// 2. Weak Areas shows focused missed-topic review
// 3. Back works one step at a time, including browser/iPhone swipe-back
// 4. Daily Study Plan remembers the selected study time
// 5. Mobile form fields stay visible above the on-screen keyboard
// 6. Popups do NOT close when the user taps/clicks outside them
//
// No MutationObserver. No repeating timer.
// ============================================================================

(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function () {
        const PLAN_KEY = "nshTOOLS_daily_plan";
        const PLAN_CHOICE_KEY = "nshUX_planner_minutes";

        const DASHBOARD_SELECTORS = [
            ".dashboard-intro",
            ".progress-overview",
            "#study-command-center",
            ".courses-section",
            ".weak-areas-section",
            "footer"
        ];

        const COURSE_CONFIG = {
            anatomy1: {
                name: "Anatomy & Physiology I",
                icon: "🫀",
                pageId: "anatomy1-page",
                prefixes: ["nshAP1_"],
                weakButtons: [
                    "#anatomy1-weak-button",
                    "#ap1-weak-button"
                ]
            },

            anatomy2: {
                name: "Anatomy & Physiology II",
                icon: "❤️",
                pageId: "anatomy2-page",
                prefixes: ["nshAP2_"],
                weakButtons: [
                    "#ap2-weak-button",
                    "#anatomy2-weak-button"
                ]
            },

            chemistry: {
                name: "Chemistry",
                icon: "🧪",
                pageId: "chemistry-page",
                prefixes: [
                    "nshCHEM_FINAL_",
                    "nshCHEM_"
                ],
                weakButtons: [
                    "#chem-weak-button"
                ]
            },

            microbiology: {
                name: "Microbiology",
                icon: "🦠",
                pageId: "microbiology-page",
                prefixes: [
                    "nshMICRO_FINAL_",
                    "nshMICRO_"
                ],
                weakButtons: [
                    "#micro-weak-button",
                    "#microbiology-weak-button"
                ]
            },

            statistics: {
                name: "Statistics",
                icon: "📊",
                pageId: "statistics-page",
                prefixes: [
                    "nshSTAT_"
                ],
                weakButtons: [
                    "#stat-weak-button",
                    "#statistics-weak-button"
                ]
            },

            nutrition: {
                name: "Nutrition & Diet",
                icon: "🍎",
                pageId: "nutrition-page",
                prefixes: [
                    "nshNUT_FINAL_",
                    "nshNUT_"
                ],
                weakButtons: [
                    "#nut-weak-button",
                    "#nutrition-weak-button"
                ]
            },

            labs: {
                name: "Anatomy & Science Labs",
                icon: "🔬",
                pageId: "lab-center-page",
                prefixes: [
                    "nshLABS_",
                    "nshLAB_",
                    "nshSCIENCELAB_"
                ],
                weakButtons: [
                    "#lab-weak-button",
                    "#labs-weak-button"
                ]
            },

            teas: {
                name: "TEAS Practice Center",
                icon: "🎓",
                pageId: "teas-center-page",
                prefixes: [
                    "nshTEAS_"
                ],
                weakButtons: [
                    "#teas-weak",
                    "#teas-weak-button",
                    "#teas-weakness-button"
                ]
            }
        };


        let rememberedCourseId = null;

        let activeWeakFilter =
            "all";

        let historyReady =
            false;

        let historyApplying =
            false;

        let historySuppressed =
            false;

        let historyCaptureTimer =
            null;

        let lastHistorySignature =
            "";

        let lastHistorySnapshot =
            null;

        let focusScrollTimer =
            null;


        // ====================================================================
        // BASIC HELPERS
        // ====================================================================

        function escapeHTML(
            value
        ) {

            return String(
                value ??
                ""
            )
                .replaceAll(
                    "&",
                    "&amp;"
                )
                .replaceAll(
                    "<",
                    "&lt;"
                )
                .replaceAll(
                    ">",
                    "&gt;"
                )
                .replaceAll(
                    '"',
                    "&quot;"
                )
                .replaceAll(
                    "'",
                    "&#039;"
                );

        }


        function getJSON(
            key,
            fallback
        ) {

            try {

                const value =
                    JSON.parse(
                        localStorage.getItem(
                            key
                        )
                    );


                return (
                    value ===
                    null ||
                    value ===
                    undefined
                )
                    ? fallback
                    : value;

            } catch {

                return fallback;

            }

        }


        function todayString() {

            const date =
                new Date();


            return [

                date.getFullYear(),

                String(
                    date.getMonth() +
                    1
                )
                    .padStart(
                        2,
                        "0"
                    ),

                String(
                    date.getDate()
                )
                    .padStart(
                        2,
                        "0"
                    )

            ].join(
                "-"
            );

        }


        function isVisible(
            element
        ) {

            if (
                !element ||
                element
                    .classList
                    .contains(
                        "hidden"
                    )
            ) {

                return false;

            }


            const style =
                window
                    .getComputedStyle(
                        element
                    );


            return (
                style.display !==
                "none" &&
                style.visibility !==
                "hidden"
            );

        }


        function scrollToTop() {

            window.scrollTo({

                top:
                    0,

                behavior:
                    window
                        .matchMedia(
                            "(prefers-reduced-motion: reduce)"
                        )
                        .matches
                        ? "auto"
                        : "smooth"

            });

        }


        function showToast(
            message
        ) {

            let container =
                document
                    .getElementById(
                        "nsh-ux-toast-container"
                    );


            if (
                !container
            ) {

                container =
                    document
                        .createElement(
                            "div"
                        );


                container.id =
                    "nsh-ux-toast-container";


                document.body
                    .appendChild(
                        container
                    );

            }


            const toast =
                document
                    .createElement(
                        "div"
                    );


            toast.className =
                "nsh-ux-toast";


            toast.textContent =
                message;


            container
                .appendChild(
                    toast
                );


            requestAnimationFrame(
                function () {

                    toast
                        .classList
                        .add(
                            "show"
                        );

                }
            );


            setTimeout(
                function () {

                    toast
                        .classList
                        .remove(
                            "show"
                        );


                    setTimeout(
                        function () {

                            toast
                                .remove();

                        },
                        200
                    );

                },
                2800
            );

        }


        // ====================================================================
        // STYLES
        // ====================================================================

        function injectStyles() {

            if (
                document
                    .getElementById(
                        "nsh-ux-fixes-styles"
                    )
            ) {

                return;

            }


            const style =
                document
                    .createElement(
                        "style"
                    );


            style.id =
                "nsh-ux-fixes-styles";


            style.textContent = `

                /* ============================================================
                   DASHBOARD-ONLY STUDY COMMAND CENTER
                ============================================================ */

                #app:has(
                    .course-page:not(.hidden),
                    .lesson-page:not(.hidden)
                )
                #study-command-center {
                    display:
                        none !important;
                }


                #study-command-center.nsh-ux-dashboard-hidden {
                    display:
                        none !important;
                }


                /* ============================================================
                   MODAL BACK BUTTON
                ============================================================ */

                .nsh-ux-modal-back {
                    min-height:
                        40px;

                    padding:
                        8px
                        12px;

                    margin-right:
                        10px;

                    border:
                        1px
                        solid
                        #d0d5dd;

                    border-radius:
                        11px;

                    background:
                        #fff;

                    color:
                        #344054;

                    font-weight:
                        800;

                    cursor:
                        pointer;

                    white-space:
                        nowrap;
                }


                .nsh-ux-modal-back:hover {
                    border-color:
                        #6366f1;

                    color:
                        #4338ca;
                }


                .study-modal-header.nsh-ux-header-with-back,
                .study-tools-modal-header.nsh-ux-header-with-back {
                    align-items:
                        center;
                }


                .nsh-ux-modal-header-left {
                    display:
                        flex;

                    align-items:
                        center;

                    gap:
                        10px;

                    min-width:
                        0;
                }


                /* ============================================================
                   FOCUSED WEAK AREAS
                ============================================================ */

                #nsh-ux-weak-overlay.hidden {
                    display:
                        none !important;
                }


                #nsh-ux-weak-overlay {
                    position:
                        fixed;

                    inset:
                        0;

                    z-index:
                        2147482000;

                    display:
                        flex;

                    align-items:
                        center;

                    justify-content:
                        center;

                    padding:
                        24px;

                    background:
                        rgba(
                            15,
                            23,
                            42,
                            .66
                        );

                    backdrop-filter:
                        blur(
                            7px
                        );

                    -webkit-backdrop-filter:
                        blur(
                            7px
                        );
                }


                .nsh-ux-weak-modal {
                    width:
                        min(
                            1080px,
                            96vw
                        );

                    max-height:
                        92vh;

                    overflow:
                        auto;

                    background:
                        #fff;

                    color:
                        #172033;

                    border-radius:
                        24px;

                    box-shadow:
                        0
                        30px
                        90px
                        rgba(
                            0,
                            0,
                            0,
                            .3
                        );
                }


                .nsh-ux-weak-header {
                    position:
                        sticky;

                    top:
                        0;

                    z-index:
                        10;

                    display:
                        flex;

                    align-items:
                        flex-start;

                    justify-content:
                        space-between;

                    gap:
                        18px;

                    padding:
                        22px
                        24px;

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            .97
                        );

                    border-bottom:
                        1px
                        solid
                        #e5e7eb;

                    backdrop-filter:
                        blur(
                            8px
                        );
                }


                .nsh-ux-weak-header-main {
                    display:
                        flex;

                    align-items:
                        flex-start;

                    gap:
                        12px;

                    min-width:
                        0;
                }


                .nsh-ux-weak-header h2 {
                    margin:
                        3px
                        0
                        5px;
                }


                .nsh-ux-weak-header p,
                .nsh-ux-weak-card p {
                    margin:
                        0;

                    color:
                        #667085;

                    line-height:
                        1.55;
                }


                .nsh-ux-close,
                .nsh-ux-back,
                .nsh-ux-filter,
                .nsh-ux-action {
                    border:
                        1px
                        solid
                        #d0d5dd;

                    background:
                        #fff;

                    color:
                        #344054;

                    border-radius:
                        11px;

                    min-height:
                        42px;

                    padding:
                        9px
                        13px;

                    font-weight:
                        800;

                    cursor:
                        pointer;
                }


                .nsh-ux-close {
                    width:
                        42px;

                    padding:
                        0;

                    font-size:
                        22px;

                    flex:
                        0
                        0
                        auto;
                }


                .nsh-ux-back:hover,
                .nsh-ux-filter:hover,
                .nsh-ux-action:hover {
                    border-color:
                        #6366f1;
                }


                .nsh-ux-weak-body {
                    padding:
                        24px;
                }


                .nsh-ux-weak-summary {
                    display:
                        grid;

                    grid-template-columns:
                        repeat(
                            auto-fit,
                            minmax(
                                180px,
                                1fr
                            )
                        );

                    gap:
                        12px;

                    margin-bottom:
                        20px;
                }


                .nsh-ux-summary-card {
                    padding:
                        17px;

                    border:
                        1px
                        solid
                        #e5e7eb;

                    border-radius:
                        16px;

                    background:
                        #f8fafc;
                }


                .nsh-ux-summary-card strong {
                    display:
                        block;

                    margin-bottom:
                        4px;

                    font-size:
                        26px;
                }


                .nsh-ux-summary-card span {
                    color:
                        #667085;

                    font-size:
                        11px;

                    font-weight:
                        900;
                }


                .nsh-ux-filter-row,
                .nsh-ux-weak-actions {
                    display:
                        flex;

                    flex-wrap:
                        wrap;

                    gap:
                        9px;
                }


                .nsh-ux-filter-row {
                    margin-bottom:
                        20px;
                }


                .nsh-ux-weak-actions {
                    margin-top:
                        15px;
                }


                .nsh-ux-filter.active {
                    background:
                        #4f46e5;

                    border-color:
                        #4f46e5;

                    color:
                        #fff;
                }


                .nsh-ux-weak-list {
                    display:
                        flex;

                    flex-direction:
                        column;

                    gap:
                        14px;
                }


                .nsh-ux-weak-card {
                    padding:
                        18px;

                    border:
                        1px
                        solid
                        #e5e7eb;

                    border-radius:
                        18px;

                    background:
                        #fff;
                }


                .nsh-ux-weak-card-top {
                    display:
                        flex;

                    align-items:
                        flex-start;

                    justify-content:
                        space-between;

                    gap:
                        16px;
                }


                .nsh-ux-course-pill,
                .nsh-ux-count-pill {
                    display:
                        inline-flex;

                    align-items:
                        center;

                    gap:
                        5px;

                    padding:
                        5px
                        9px;

                    border-radius:
                        999px;

                    font-size:
                        10px;

                    font-weight:
                        900;
                }


                .nsh-ux-course-pill {
                    background:
                        #eef2ff;

                    color:
                        #4338ca;
                }


                .nsh-ux-count-pill {
                    background:
                        #fff1f2;

                    color:
                        #be123c;

                    flex:
                        0
                        0
                        auto;
                }


                .nsh-ux-weak-card h3 {
                    margin:
                        8px
                        0
                        5px;
                }


                .nsh-ux-action.primary {
                    background:
                        #4f46e5;

                    border-color:
                        #4f46e5;

                    color:
                        #fff;
                }


                .nsh-ux-action.focus {
                    background:
                        #fff7ed;

                    border-color:
                        #fdba74;

                    color:
                        #9a3412;
                }


                .nsh-ux-empty {
                    padding:
                        42px
                        20px;

                    text-align:
                        center;

                    border:
                        1px
                        dashed
                        #cbd5e1;

                    border-radius:
                        18px;

                    color:
                        #667085;
                }


                .nsh-ux-empty-icon {
                    margin-bottom:
                        10px;

                    font-size:
                        44px;
                }


                /* ============================================================
                   TOAST
                ============================================================ */

                #nsh-ux-toast-container {
                    position:
                        fixed;

                    z-index:
                        2147483600;

                    top:
                        calc(
                            var(
                                --nsh-header-height,
                                78px
                            )
                            +
                            14px
                        );

                    right:
                        18px;

                    width:
                        min(
                            380px,
                            calc(
                                100vw
                                -
                                36px
                            )
                        );

                    pointer-events:
                        none;
                }


                .nsh-ux-toast {
                    margin-bottom:
                        8px;

                    padding:
                        13px
                        15px;

                    border-radius:
                        13px;

                    background:
                        #111827;

                    color:
                        #fff;

                    box-shadow:
                        0
                        12px
                        35px
                        rgba(
                            0,
                            0,
                            0,
                            .22
                        );

                    font-size:
                        12px;

                    line-height:
                        1.5;

                    opacity:
                        0;

                    transform:
                        translateY(
                            -8px
                        );

                    transition:
                        opacity
                        .2s
                        ease,
                        transform
                        .2s
                        ease;
                }


                .nsh-ux-toast.show {
                    opacity:
                        1;

                    transform:
                        translateY(
                            0
                        );
                }


                /* ============================================================
                   DARK MODE
                ============================================================ */

                body.dark-mode
                .nsh-ux-weak-modal,

                body.dark-mode
                .nsh-ux-weak-card,

                body.dark-mode
                .nsh-ux-close,

                body.dark-mode
                .nsh-ux-back,

                body.dark-mode
                .nsh-ux-filter,

                body.dark-mode
                .nsh-ux-action,

                body.dark-mode
                .nsh-ux-modal-back {
                    background:
                        #111827;

                    border-color:
                        #334155;

                    color:
                        #e2e8f0;
                }


                body.dark-mode
                .nsh-ux-weak-header {
                    background:
                        rgba(
                            17,
                            24,
                            39,
                            .97
                        );

                    border-color:
                        #334155;
                }


                body.dark-mode
                .nsh-ux-weak-header p,

                body.dark-mode
                .nsh-ux-weak-card p,

                body.dark-mode
                .nsh-ux-summary-card span {
                    color:
                        #cbd5e1;
                }


                body.dark-mode
                .nsh-ux-summary-card {
                    background:
                        #172033;

                    border-color:
                        #334155;

                    color:
                        #f8fafc;
                }


                /* ============================================================
                   MOBILE KEYBOARD + POPUP IMPROVEMENTS
                ============================================================ */

                @media (
                    max-width:
                    700px
                ) {

                    .study-tools-modal-overlay,
                    .study-overlay,
                    #nsh-ux-weak-overlay {
                        align-items:
                            flex-start !important;

                        justify-content:
                            center !important;

                        padding-top:
                            max(
                                8px,
                                env(
                                    safe-area-inset-top
                                )
                            ) !important;

                        padding-right:
                            0 !important;

                        padding-bottom:
                            max(
                                8px,
                                env(
                                    safe-area-inset-bottom
                                )
                            ) !important;

                        padding-left:
                            0 !important;
                    }


                    .study-tools-modal,
                    .study-modal,
                    .nsh-ux-weak-modal {
                        width:
                            100% !important;

                        max-width:
                            100% !important;

                        max-height:
                            calc(
                                var(
                                    --nsh-visual-height,
                                    100dvh
                                )
                                -
                                16px
                            ) !important;

                        overflow-y:
                            auto !important;

                        overscroll-behavior:
                            contain;

                        -webkit-overflow-scrolling:
                            touch;

                        scroll-padding-top:
                            100px;

                        scroll-padding-bottom:
                            45vh;

                        border-radius:
                            20px
                            20px
                            0
                            0;
                    }


                    .study-tools-modal-body,
                    .study-modal-content,
                    #nsh-ux-weak-body,
                    .nsh-ux-weak-body {
                        padding-bottom:
                            max(
                                42px,
                                env(
                                    safe-area-inset-bottom
                                )
                            ) !important;
                    }


                    .study-tools-modal input,
                    .study-tools-modal textarea,
                    .study-tools-modal select,

                    .study-modal input,
                    .study-modal textarea,
                    .study-modal select,

                    .nsh-ux-weak-modal input,
                    .nsh-ux-weak-modal textarea,
                    .nsh-ux-weak-modal select {
                        scroll-margin-top:
                            105px;

                        scroll-margin-bottom:
                            45vh;
                    }


                    .nsh-ux-weak-header,
                    .nsh-ux-weak-body {
                        padding:
                            18px;
                    }


                    .nsh-ux-weak-header-main,
                    .nsh-ux-weak-card-top {
                        display:
                            block;
                    }


                    .nsh-ux-back,
                    .nsh-ux-count-pill {
                        margin-bottom:
                            10px;
                    }


                    .nsh-ux-weak-actions {
                        display:
                            grid;

                        grid-template-columns:
                            1fr;
                    }


                    .nsh-ux-weak-actions
                    button {
                        width:
                            100%;
                    }


                    .nsh-ux-modal-back {
                        padding:
                            7px
                            9px;

                        font-size:
                            12px;
                    }

                }

            `;


            document.head
                .appendChild(
                    style
                );

        }


        // ====================================================================
        // VIEW HELPERS
        // ====================================================================

        function getVisibleCoursePage() {

            return (
                Array.from(
                    document
                        .querySelectorAll(
                            ".course-page"
                        )
                )
                    .find(
                        isVisible
                    ) ||
                null
            );

        }


        function getVisibleLessonPage() {

            return (
                Array.from(
                    document
                        .querySelectorAll(
                            ".lesson-page"
                        )
                )
                    .find(
                        isVisible
                    ) ||
                null
            );

        }


        function getVisibleStudyOverlay() {

            return (
                Array.from(
                    document
                        .querySelectorAll(
                            ".study-overlay," +
                            ".study-tools-modal-overlay"
                        )
                )
                    .find(
                        isVisible
                    ) ||
                null
            );

        }


        function inferCourseIdFromElement(
            element
        ) {

            if (
                !element
            ) {

                return rememberedCourseId;

            }


            const text =
                `${
                    element.id ||
                    ""
                } ${
                    element.className ||
                    ""
                }`
                    .toLowerCase();


            if (
                text.includes(
                    "anatomy1"
                ) ||
                text.includes(
                    "ap1"
                ) ||
                element.id ===
                "intro-ap-page"
            ) {

                return "anatomy1";

            }


            if (
                text.includes(
                    "anatomy2"
                ) ||
                text.includes(
                    "ap2"
                )
            ) {

                return "anatomy2";

            }


            if (
                text.includes(
                    "chem"
                )
            ) {

                return "chemistry";

            }


            if (
                text.includes(
                    "micro"
                )
            ) {

                return "microbiology";

            }


            if (
                text.includes(
                    "stat"
                )
            ) {

                return "statistics";

            }


            if (
                text.includes(
                    "nut"
                )
            ) {

                return "nutrition";

            }


            if (
                text.includes(
                    "lab"
                )
            ) {

                return "labs";

            }


            if (
                text.includes(
                    "teas"
                )
            ) {

                return "teas";

            }


            return rememberedCourseId;

        }


        function findCoursePage(
            courseId
        ) {

            const config =
                COURSE_CONFIG[
                    courseId
                ];


            if (
                !config
            ) {

                return null;

            }


            const direct =
                document
                    .getElementById(
                        config.pageId
                    );


            if (
                direct
            ) {

                return direct;

            }


            return (
                Array.from(
                    document
                        .querySelectorAll(
                            ".course-page"
                        )
                )
                    .find(
                        function (
                            page
                        ) {

                            return (
                                inferCourseIdFromElement(
                                    page
                                ) ===
                                courseId
                            );

                        }
                    ) ||
                null
            );

        }


        function setDashboardVisible(
            visible
        ) {

            DASHBOARD_SELECTORS
                .forEach(
                    function (
                        selector
                    ) {

                        const element =
                            document
                                .querySelector(
                                    selector
                                );


                        if (
                            element
                        ) {

                            element
                                .classList
                                .toggle(
                                    "hidden",
                                    !visible
                                );

                        }

                    }
                );

        }


        function closeWeakOverlayDirect() {

            const overlay =
                document
                    .getElementById(
                        "nsh-ux-weak-overlay"
                    );


            if (
                !overlay
            ) {

                return false;

            }


            const wasVisible =
                isVisible(
                    overlay
                );


            overlay
                .classList
                .add(
                    "hidden"
                );


            document.body
                .style
                .overflow =
                "";


            return wasVisible;

        }


        function closeVisibleStudyOverlayDirect() {

            const overlay =
                getVisibleStudyOverlay();


            if (
                !overlay
            ) {

                return false;

            }


            overlay
                .classList
                .add(
                    "hidden"
                );


            document.body
                .style
                .overflow =
                "";


            return true;

        }


        function showDashboardDirect() {

            closeWeakOverlayDirect();

            closeVisibleStudyOverlayDirect();


            document
                .querySelectorAll(
                    ".course-page," +
                    ".lesson-page"
                )
                .forEach(
                    function (
                        page
                    ) {

                        page
                            .classList
                            .add(
                                "hidden"
                            );

                    }
                );


            setDashboardVisible(
                true
            );


            rememberedCourseId =
                null;


            syncCommandCenterVisibility();

            scrollToTop();

        }


        function showCourseDirect(
            courseId
        ) {

            const page =
                findCoursePage(
                    courseId
                );


            if (
                !page
            ) {

                showToast(
                    "That course page could not be opened."
                );


                return false;

            }


            closeWeakOverlayDirect();

            closeVisibleStudyOverlayDirect();


            setDashboardVisible(
                false
            );


            document
                .querySelectorAll(
                    ".course-page," +
                    ".lesson-page"
                )
                .forEach(
                    function (
                        item
                    ) {

                        item
                            .classList
                            .add(
                                "hidden"
                            );

                    }
                );


            page
                .classList
                .remove(
                    "hidden"
                );


            rememberedCourseId =
                courseId;


            syncCommandCenterVisibility();

            scrollToTop();


            return true;

        }


        // ====================================================================
        // STUDY COMMAND CENTER - DASHBOARD ONLY
        // ====================================================================

        function syncCommandCenterVisibility() {

            const commandCenter =
                document
                    .getElementById(
                        "study-command-center"
                    );


            if (
                !commandCenter
            ) {

                return;

            }


            const insideCourse =
                Boolean(
                    getVisibleCoursePage() ||
                    getVisibleLessonPage()
                );


            commandCenter
                .classList
                .toggle(
                    "nsh-ux-dashboard-hidden",
                    insideCourse
                );


            const dashboardIntro =
                document
                    .querySelector(
                        ".dashboard-intro"
                    );


            if (
                !insideCourse &&
                dashboardIntro &&
                isVisible(
                    dashboardIntro
                )
            ) {

                commandCenter
                    .classList
                    .remove(
                        "hidden"
                    );

            }

        }


        function scheduleViewSync() {

            setTimeout(
                function () {

                    const course =
                        getVisibleCoursePage();


                    const lesson =
                        getVisibleLessonPage();


                    if (
                        course
                    ) {

                        rememberedCourseId =
                            inferCourseIdFromElement(
                                course
                            ) ||
                            rememberedCourseId;

                    }


                    if (
                        lesson &&
                        !rememberedCourseId
                    ) {

                        rememberedCourseId =
                            inferCourseIdFromElement(
                                lesson
                            );

                    }


                    syncCommandCenterVisibility();

                    ensureModalBackButtons();

                    restorePlannerChoice();

                },
                0
            );


            setTimeout(
                function () {

                    syncCommandCenterVisibility();

                    ensureModalBackButtons();

                    restorePlannerChoice();

                },
                100
            );

        }


        // ====================================================================
        // DAILY STUDY PLAN TIME MEMORY
        // ====================================================================

        function validPlannerMinutes(
            value
        ) {

            return [
                30,
                45,
                60,
                90,
                120,
                180
            ]
                .includes(
                    Number(
                        value
                    )
                );

        }


        function getSavedPlannerChoice() {

            const saved =
                Number(
                    localStorage
                        .getItem(
                            PLAN_CHOICE_KEY
                        )
                );


            if (
                validPlannerMinutes(
                    saved
                )
            ) {

                return saved;

            }


            const plan =
                getJSON(
                    PLAN_KEY,
                    null
                );


            if (
                plan &&
                plan.date ===
                todayString() &&
                validPlannerMinutes(
                    plan.totalMinutes
                )
            ) {

                return Number(
                    plan.totalMinutes
                );

            }


            return 60;

        }


        function savePlannerChoice(
            value
        ) {

            if (
                validPlannerMinutes(
                    value
                )
            ) {

                localStorage
                    .setItem(
                        PLAN_CHOICE_KEY,
                        String(
                            Number(
                                value
                            )
                        )
                    );

            }

        }


        function restorePlannerChoice() {

            const select =
                document
                    .getElementById(
                        "planner-minutes"
                    );


            if (
                !select
            ) {

                return;

            }


            const desired =
                String(
                    getSavedPlannerChoice()
                );


            const exists =
                Array.from(
                    select.options
                )
                    .some(
                        function (
                            option
                        ) {

                            return (
                                option.value ===
                                desired
                            );

                        }
                    );


            if (
                exists
            ) {

                select.value =
                    desired;

            }

        }


        // ====================================================================
        // MOBILE KEYBOARD / FORM VISIBILITY
        // ====================================================================

        function updateVisualViewportHeight() {

            const height =
                window.visualViewport
                    ? window
                        .visualViewport
                        .height
                    : window
                        .innerHeight;


            document
                .documentElement
                .style
                .setProperty(
                    "--nsh-visual-height",
                    `${
                        Math.round(
                            height
                        )
                    }px`
                );

        }


        function isEditableField(
            element
        ) {

            if (
                !(
                    element instanceof
                    HTMLElement
                )
            ) {

                return false;

            }


            return Boolean(
                element
                    .matches(
                        "input," +
                        "textarea," +
                        "select," +
                        "[contenteditable='true']"
                    )
            );

        }


        function isInsidePopup(
            element
        ) {

            return Boolean(
                element
                    .closest(
                        ".study-tools-modal," +
                        ".study-modal," +
                        ".nsh-ux-weak-modal"
                    )
            );

        }


        function keepFocusedFieldVisible(
            element
        ) {

            if (
                !isEditableField(
                    element
                ) ||
                !isInsidePopup(
                    element
                )
            ) {

                return;

            }


            clearTimeout(
                focusScrollTimer
            );


            focusScrollTimer =
                setTimeout(
                    function () {

                        if (
                            document
                                .activeElement !==
                            element
                        ) {

                            return;

                        }


                        element
                            .scrollIntoView({

                                behavior:
                                    window
                                        .matchMedia(
                                            "(prefers-reduced-motion: reduce)"
                                        )
                                        .matches
                                        ? "auto"
                                        : "smooth",

                                block:
                                    "center",

                                inline:
                                    "nearest"

                            });

                    },
                    260
                );

        }


        function keepActivePopupFieldVisible() {

            const active =
                document
                    .activeElement;


            if (
                isEditableField(
                    active
                ) &&
                isInsidePopup(
                    active
                )
            ) {

                keepFocusedFieldVisible(
                    active
                );

            }

        }


        document
            .addEventListener(
                "focusin",
                function (
                    event
                ) {

                    keepFocusedFieldVisible(
                        event.target
                    );

                },
                true
            );


        if (
            window
                .visualViewport
        ) {

            window
                .visualViewport
                .addEventListener(
                    "resize",
                    function () {

                        updateVisualViewportHeight();

                        keepActivePopupFieldVisible();

                    }
                );


            window
                .visualViewport
                .addEventListener(
                    "scroll",
                    function () {

                        keepActivePopupFieldVisible();

                    }
                );

        }


        window
            .addEventListener(
                "resize",
                updateVisualViewportHeight
            );


        updateVisualViewportHeight();


        // ====================================================================
        // WEAK AREA DATA
        // ====================================================================

        function parseArray(
            value
        ) {

            try {

                const parsed =
                    JSON.parse(
                        value ||
                        "[]"
                    );


                return Array
                    .isArray(
                        parsed
                    )
                    ? parsed
                    : [];

            } catch {

                return [];

            }

        }


        function weakKeyInfo(
            key
        ) {

            const lower =
                String(
                    key ||
                    ""
                )
                    .toLowerCase();


            const suffixes = [
                "_missed",
                "_weak_questions",
                "_weakquestions",
                "_weak"
            ];


            const suffix =
                suffixes
                    .find(
                        function (
                            item
                        ) {

                            return lower
                                .endsWith(
                                    item
                                );

                        }
                    );


            if (
                !suffix
            ) {

                return null;

            }


            for (
                const [
                    courseId,
                    config
                ]
                of
                Object.entries(
                    COURSE_CONFIG
                )
            ) {

                for (
                    const prefix
                    of
                    config.prefixes
                ) {

                    if (
                        !key
                            .startsWith(
                                prefix
                            )
                    ) {

                        continue;

                    }


                    let topicId =
                        key.slice(
                            prefix.length,
                            -suffix.length
                        );


                    topicId =
                        topicId
                            .replace(
                                /^final_/i,
                                ""
                            )
                            .replace(
                                /^topic_/i,
                                ""
                            )
                            .replace(
                                /^_+|_+$/g,
                                ""
                            )
                            .replaceAll(
                                "_",
                                "-"
                            );


                    return {

                        courseId,

                        topicId

                    };

                }

            }


            return null;

        }


        function getTopicCard(
            courseId,
            topicId
        ) {

            if (
                !topicId
            ) {

                return null;

            }


            const scope =
                findCoursePage(
                    courseId
                ) ||
                document;


            return (
                Array.from(
                    scope
                        .querySelectorAll(
                            ".topic-card"
                        )
                )
                    .find(
                        function (
                            card
                        ) {

                            return Object
                                .values(
                                    card.dataset ||
                                    {}
                                )
                                .some(
                                    function (
                                        value
                                    ) {

                                        return (
                                            String(
                                                value
                                            )
                                                .replaceAll(
                                                    "_",
                                                    "-"
                                                ) ===
                                            topicId
                                        );

                                    }
                                );

                        }
                    ) ||
                null
            );

        }


        function getTopicTitle(
            courseId,
            topicId
        ) {

            const card =
                getTopicCard(
                    courseId,
                    topicId
                );


            const heading =
                card
                    ?.querySelector(
                        "h3"
                    );


            if (
                heading
                    ?.textContent
                    .trim()
            ) {

                return heading
                    .textContent
                    .trim();

            }


            if (
                !topicId
            ) {

                return (
                    COURSE_CONFIG[
                        courseId
                    ]
                        ?.name ||
                    "Weak Questions"
                );

            }


            return topicId
                .replaceAll(
                    "-",
                    " "
                )
                .replace(
                    /\b\w/g,
                    function (
                        letter
                    ) {

                        return letter
                            .toUpperCase();

                    }
                );

        }


        function collectWeakGroups() {

            const map =
                new Map();


            for (
                let i = 0;
                i <
                localStorage.length;
                i++
            ) {

                const key =
                    localStorage
                        .key(
                            i
                        );


                if (
                    !key
                ) {

                    continue;

                }


                const info =
                    weakKeyInfo(
                        key
                    );


                if (
                    !info
                ) {

                    continue;

                }


                const items =
                    parseArray(
                        localStorage
                            .getItem(
                                key
                            )
                    );


                if (
                    !items.length
                ) {

                    continue;

                }


                const identity =
                    `${info.courseId}::${
                        info.topicId ||
                        "mixed"
                    }`;


                if (
                    !map
                        .has(
                            identity
                        )
                ) {

                    map
                        .set(
                            identity,
                            {

                                courseId:
                                    info.courseId,

                                topicId:
                                    info.topicId,

                                ids:
                                    [],

                                sourceKeys:
                                    []

                            }
                        );

                }


                const group =
                    map
                        .get(
                            identity
                        );


                group
                    .sourceKeys
                    .push(
                        key
                    );


                const existing =
                    new Set(
                        group
                            .ids
                            .map(
                                String
                            )
                    );


                items
                    .forEach(
                        function (
                            item
                        ) {

                            const value =
                                typeof item ===
                                "object"
                                    ? String(
                                        item?.id ??
                                        item?.questionId ??
                                        JSON.stringify(
                                            item
                                        )
                                    )
                                    : String(
                                        item
                                    );


                            if (
                                !existing
                                    .has(
                                        value
                                    )
                            ) {

                                existing
                                    .add(
                                        value
                                    );


                                group
                                    .ids
                                    .push(
                                        item
                                    );

                            }

                        }
                    );

            }


            const teasStats =
                getJSON(
                    "nshTEAS_FINAL_STATS",
                    null
                );


            const alreadyHasTeas =
                Array.from(
                    map
                        .values()
                )
                    .some(
                        function (
                            group
                        ) {

                            return (
                                group.courseId ===
                                "teas"
                            );

                        }
                    );


            if (
                !alreadyHasTeas &&
                teasStats &&
                Array.isArray(
                    teasStats.weak
                ) &&
                teasStats
                    .weak
                    .length
            ) {

                map
                    .set(
                        "teas::mixed",
                        {

                            courseId:
                                "teas",

                            topicId:
                                "",

                            ids:
                                teasStats.weak,

                            sourceKeys:
                                [
                                    "nshTEAS_FINAL_STATS"
                                ]

                        }
                    );

            }


            return Array.from(
                map.values()
            )
                .map(
                    function (
                        group
                    ) {

                        return {

                            ...group,

                            count:
                                group
                                    .ids
                                    .length,

                            title:
                                getTopicTitle(
                                    group.courseId,
                                    group.topicId
                                )

                        };

                    }
                )
                .sort(
                    function (
                        a,
                        b
                    ) {

                        const courseCompare =
                            COURSE_CONFIG[
                                a.courseId
                            ]
                                .name
                                .localeCompare(
                                    COURSE_CONFIG[
                                        b.courseId
                                    ]
                                        .name
                                );


                        return (
                            courseCompare !==
                            0
                        )
                            ? courseCompare
                            : a
                                .title
                                .localeCompare(
                                    b.title
                                );

                    }
                );

        }


        function findNativeWeakButton(
            courseId
        ) {

            const page =
                findCoursePage(
                    courseId
                );


            const config =
                COURSE_CONFIG[
                    courseId
                ];


            if (
                !page ||
                !config
            ) {

                return null;

            }


            for (
                const selector
                of
                config.weakButtons ||
                []
            ) {

                const button =
                    page
                        .querySelector(
                            selector
                        ) ||
                    document
                        .querySelector(
                            selector
                        );


                if (
                    button
                ) {

                    return button;

                }

            }


            return (
                Array.from(
                    page
                        .querySelectorAll(
                            "button"
                        )
                )
                    .find(
                        function (
                            button
                        ) {

                            const text =
                                button
                                    .textContent
                                    .trim()
                                    .toLowerCase();


                            return (
                                text.includes(
                                    "weak area"
                                ) ||
                                text.includes(
                                    "weak question"
                                ) ||
                                text.includes(
                                    "weakness"
                                )
                            );

                        }
                    ) ||
                null
            );

        }


        // ====================================================================
        // FOCUSED WEAK AREA CENTER
        // ====================================================================

        function ensureWeakOverlay() {

            let overlay =
                document
                    .getElementById(
                        "nsh-ux-weak-overlay"
                    );


            if (
                overlay
            ) {

                return overlay;

            }


            overlay =
                document
                    .createElement(
                        "div"
                    );


            overlay.id =
                "nsh-ux-weak-overlay";


            overlay.className =
                "hidden";


            overlay
                .setAttribute(
                    "role",
                    "dialog"
                );


            overlay
                .setAttribute(
                    "aria-modal",
                    "true"
                );


            overlay
                .setAttribute(
                    "aria-label",
                    "Focused weak area review"
                );


            overlay.innerHTML = `

                <div class="nsh-ux-weak-modal">

                    <div class="nsh-ux-weak-header">

                        <div class="nsh-ux-weak-header-main">

                            <button
                                type="button"
                                class="nsh-ux-back"
                                id="nsh-ux-weak-back"
                            >
                                ← Back
                            </button>


                            <div>

                                <div class="section-label">
                                    FOCUSED REVIEW
                                </div>

                                <h2>
                                    Your Weak Areas
                                </h2>

                                <p>
                                    Only the topics and questions
                                    you missed are shown here.
                                </p>

                            </div>

                        </div>


                        <button
                            type="button"
                            class="nsh-ux-close"
                            id="nsh-ux-weak-close"
                            aria-label="Close"
                        >
                            ×
                        </button>

                    </div>


                    <div
                        class="nsh-ux-weak-body"
                        id="nsh-ux-weak-body"
                    >
                    </div>

                </div>

            `;


            document.body
                .appendChild(
                    overlay
                );


            document
                .getElementById(
                    "nsh-ux-weak-back"
                )
                .addEventListener(
                    "click",
                    navigateBack
                );


            document
                .getElementById(
                    "nsh-ux-weak-close"
                )
                .addEventListener(
                    "click",
                    navigateBack
                );


            /*
             * IMPORTANT:
             * There is intentionally NO click-on-background
             * event here.
             *
             * The popup must stay open until the user
             * deliberately presses Back or X.
             */


            return overlay;

        }


        function openWeakOverlay(
            options = {}
        ) {

            const overlay =
                ensureWeakOverlay();


            activeWeakFilter =
                options.keepFilter
                    ? activeWeakFilter
                    : "all";


            renderWeakOverlay();


            overlay
                .classList
                .remove(
                    "hidden"
                );


            document.body
                .style
                .overflow =
                "hidden";


            ensureModalBackButtons();


            if (
                !options.skipHistory
            ) {

                pushCurrentViewSoon();

            }

        }


        function renderWeakCard(
            group
        ) {

            const course =
                COURSE_CONFIG[
                    group.courseId
                ];


            const hasExactTopic =
                Boolean(
                    group.topicId
                );


            const canPractice =
                Boolean(
                    findNativeWeakButton(
                        group.courseId
                    )
                );


            return `

                <article class="nsh-ux-weak-card">

                    <div class="nsh-ux-weak-card-top">

                        <div>

                            <span class="nsh-ux-course-pill">

                                ${course.icon}

                                ${escapeHTML(
                                    course.name
                                )}

                            </span>


                            <h3>
                                ${escapeHTML(
                                    group.title
                                )}
                            </h3>


                            <p>

                                ${group.count}

                                ${
                                    group.count ===
                                    1
                                        ? "missed question"
                                        : "missed questions"
                                }

                                saved from

                                ${
                                    hasExactTopic
                                        ? "this exact topic."
                                        : "this course."
                                }

                            </p>

                        </div>


                        <span class="nsh-ux-count-pill">

                            ${group.count}

                            to review

                        </span>

                    </div>


                    <div class="nsh-ux-weak-actions">

                        ${
                            hasExactTopic
                                ? `

                                    <button
                                        type="button"
                                        class="nsh-ux-action primary"
                                        data-ux-course="${group.courseId}"
                                        data-ux-open-topic="${escapeHTML(
                                            group.topicId
                                        )}"
                                    >
                                        Open Exact Topic →
                                    </button>

                                `
                                : ""
                        }


                        ${
                            canPractice
                                ? `

                                    <button
                                        type="button"
                                        class="nsh-ux-action focus"
                                        data-ux-practice-course="${group.courseId}"
                                    >
                                        🎯 Practice Only Weak Questions
                                    </button>

                                `
                                : ""
                        }

                    </div>

                </article>

            `;

        }


        function renderWeakOverlay() {

            const body =
                document
                    .getElementById(
                        "nsh-ux-weak-body"
                    );


            if (
                !body
            ) {

                return;

            }


            const groups =
                collectWeakGroups();


            const visibleGroups =
                activeWeakFilter ===
                "all"
                    ? groups
                    : groups
                        .filter(
                            function (
                                group
                            ) {

                                return (
                                    group.courseId ===
                                    activeWeakFilter
                                );

                            }
                        );


            const total =
                groups
                    .reduce(
                        function (
                            sum,
                            group
                        ) {

                            return (
                                sum +
                                group.count
                            );

                        },
                        0
                    );


            const courseCount =
                new Set(
                    groups
                        .map(
                            function (
                                group
                            ) {

                                return group.courseId;

                            }
                        )
                )
                    .size;


            const filters = [

                `

                    <button
                        type="button"
                        class="nsh-ux-filter ${
                            activeWeakFilter ===
                            "all"
                                ? "active"
                                : ""
                        }"
                        data-ux-filter="all"
                    >
                        All (${total})
                    </button>

                `,


                ...Object
                    .keys(
                        COURSE_CONFIG
                    )
                    .map(
                        function (
                            courseId
                        ) {

                            const count =
                                groups
                                    .filter(
                                        function (
                                            group
                                        ) {

                                            return (
                                                group.courseId ===
                                                courseId
                                            );

                                        }
                                    )
                                    .reduce(
                                        function (
                                            sum,
                                            group
                                        ) {

                                            return (
                                                sum +
                                                group.count
                                            );

                                        },
                                        0
                                    );


                            if (
                                !count
                            ) {

                                return "";

                            }


                            const course =
                                COURSE_CONFIG[
                                    courseId
                                ];


                            return `

                                <button
                                    type="button"
                                    class="nsh-ux-filter ${
                                        activeWeakFilter ===
                                        courseId
                                            ? "active"
                                            : ""
                                    }"
                                    data-ux-filter="${courseId}"
                                >

                                    ${course.icon}

                                    ${escapeHTML(
                                        course.name
                                    )}

                                    (${count})

                                </button>

                            `;

                        }
                    )

            ].join(
                ""
            );


            body.innerHTML = `

                <div class="nsh-ux-weak-summary">

                    <div class="nsh-ux-summary-card">

                        <strong>
                            ${total}
                        </strong>

                        <span>
                            SAVED WEAK QUESTIONS
                        </span>

                    </div>


                    <div class="nsh-ux-summary-card">

                        <strong>
                            ${courseCount}
                        </strong>

                        <span>
                            COURSES TO REVIEW
                        </span>

                    </div>


                    <div class="nsh-ux-summary-card">

                        <strong>
                            ${groups.length}
                        </strong>

                        <span>
                            WEAK TOPICS / GROUPS
                        </span>

                    </div>

                </div>


                ${
                    groups.length
                        ? `

                            <div class="nsh-ux-filter-row">

                                ${filters}

                            </div>


                            <div class="nsh-ux-weak-list">

                                ${
                                    visibleGroups
                                        .map(
                                            renderWeakCard
                                        )
                                        .join(
                                            ""
                                        )
                                }

                            </div>

                        `
                        : `

                            <div class="nsh-ux-empty">

                                <div class="nsh-ux-empty-icon">
                                    🎯
                                </div>

                                <h3>
                                    No weak areas saved right now.
                                </h3>

                                <p>
                                    Questions you miss during quizzes,
                                    practice and exams will appear here.
                                </p>

                            </div>

                        `
                }

            `;


            body
                .querySelectorAll(
                    "[data-ux-filter]"
                )
                .forEach(
                    function (
                        button
                    ) {

                        button
                            .addEventListener(
                                "click",
                                function () {

                                    activeWeakFilter =
                                        button
                                            .dataset
                                            .uxFilter;


                                    renderWeakOverlay();

                                }
                            );

                    }
                );


            body
                .querySelectorAll(
                    "[data-ux-open-topic]"
                )
                .forEach(
                    function (
                        button
                    ) {

                        button
                            .addEventListener(
                                "click",
                                function () {

                                    openExactWeakTopic(

                                        button
                                            .dataset
                                            .uxCourse,

                                        button
                                            .dataset
                                            .uxOpenTopic

                                    );

                                }
                            );

                    }
                );


            body
                .querySelectorAll(
                    "[data-ux-practice-course]"
                )
                .forEach(
                    function (
                        button
                    ) {

                        button
                            .addEventListener(
                                "click",
                                function () {

                                    openNativeWeakPractice(
                                        button
                                            .dataset
                                            .uxPracticeCourse
                                    );

                                }
                            );

                    }
                );

        }


        function openCourseViaCard(
            courseId
        ) {

            const card =
                document
                    .querySelector(
                        `.course-card[data-course="${courseId}"]`
                    );


            rememberedCourseId =
                courseId;


            if (
                !card
            ) {

                return showCourseDirect(
                    courseId
                );

            }


            card.click();

            scheduleViewSync();


            return true;

        }


        function openExactWeakTopic(
            courseId,
            topicId
        ) {

            historySuppressed =
                true;


            closeWeakOverlayDirect();


            if (
                !openCourseViaCard(
                    courseId
                )
            ) {

                historySuppressed =
                    false;


                return;

            }


            setTimeout(
                function () {

                    const card =
                        getTopicCard(
                            courseId,
                            topicId
                        );


                    if (
                        !card
                    ) {

                        historySuppressed =
                            false;


                        showToast(
                            "The course opened, but that exact topic could not be matched automatically."
                        );


                        pushCurrentViewSoon(
                            true
                        );


                        return;

                    }


                    rememberedCourseId =
                        courseId;


                    card.click();

                    scheduleViewSync();


                    setTimeout(
                        function () {

                            historySuppressed =
                                false;


                            pushCurrentViewSoon(
                                true
                            );

                        },
                        120
                    );

                },
                120
            );

        }


        function openNativeWeakPractice(
            courseId
        ) {

            historySuppressed =
                true;


            closeWeakOverlayDirect();


            if (
                !openCourseViaCard(
                    courseId
                )
            ) {

                historySuppressed =
                    false;


                return;

            }


            setTimeout(
                function () {

                    const button =
                        findNativeWeakButton(
                            courseId
                        );


                    if (
                        !button
                    ) {

                        historySuppressed =
                            false;


                        showToast(
                            "Use Open Exact Topic for this course's saved weakness."
                        );


                        pushCurrentViewSoon(
                            true
                        );


                        return;

                    }


                    button.click();

                    scheduleViewSync();


                    setTimeout(
                        function () {

                            historySuppressed =
                                false;


                            pushCurrentViewSoon(
                                true
                            );

                        },
                        120
                    );

                },
                140
            );

        }


        // ====================================================================
        // STEP-BY-STEP / BROWSER / IPHONE BACK
        // ====================================================================

        function getViewSnapshot() {

            const weakOverlay =
                document
                    .getElementById(
                        "nsh-ux-weak-overlay"
                    );


            const studyOverlay =
                getVisibleStudyOverlay();


            const lesson =
                getVisibleLessonPage();


            const course =
                getVisibleCoursePage();


            let baseType =
                "dashboard";


            let baseId =
                "dashboard";


            let courseId =
                rememberedCourseId;


            if (
                lesson
            ) {

                baseType =
                    "lesson";


                baseId =
                    lesson.id ||
                    "";


                courseId =
                    courseId ||
                    inferCourseIdFromElement(
                        lesson
                    );

            } else if (
                course
            ) {

                baseType =
                    "course";


                baseId =
                    course.id ||
                    "";


                courseId =
                    inferCourseIdFromElement(
                        course
                    ) ||
                    courseId;

            }


            let overlayId =
                "";


            if (
                weakOverlay &&
                isVisible(
                    weakOverlay
                )
            ) {

                overlayId =
                    "nsh-ux-weak-overlay";

            } else if (
                studyOverlay
            ) {

                overlayId =
                    studyOverlay.id ||
                    "study-overlay";

            }


            return {

                baseType,

                baseId,

                courseId:
                    courseId ||
                    "",

                overlayId

            };

        }


        function snapshotSignature(
            snapshot
        ) {

            return [

                snapshot.baseType,

                snapshot.baseId,

                snapshot.courseId,

                snapshot.overlayId

            ].join(
                "|"
            );

        }


        function currentHistoryDepth() {

            return Number(
                history.state
                    ?.nshUxDepth ||
                0
            );

        }


        function isBackwardTransition(
            previous,
            next
        ) {

            if (
                !previous ||
                !next
            ) {

                return false;

            }


            if (
                previous.overlayId &&
                !next.overlayId &&
                previous.baseType ===
                next.baseType &&
                previous.baseId ===
                next.baseId
            ) {

                return true;

            }


            if (
                previous.baseType ===
                "lesson" &&
                next.baseType ===
                "course" &&
                previous.courseId &&
                previous.courseId ===
                next.courseId
            ) {

                return true;

            }


            return (
                previous.baseType ===
                "course" &&
                next.baseType ===
                "dashboard"
            );

        }


        function initializeHistory() {

            const snapshot =
                getViewSnapshot();


            const existing =
                history.state ||
                {};


            const existingDepth =
                Number(
                    existing
                        .nshUxDepth ||
                    0
                );


            history
                .replaceState(
                    {

                        ...existing,

                        nshUx:
                            true,

                        nshUxDepth:
                            existingDepth,

                        nshUxSnapshot:
                            snapshot

                    },

                    "",

                    window.location.href

                );


            lastHistorySnapshot =
                snapshot;


            lastHistorySignature =
                snapshotSignature(
                    snapshot
                );


            historyReady =
                true;

        }


        function pushCurrentView(
            force = false
        ) {

            if (
                !historyReady ||
                historyApplying
            ) {

                return;

            }


            if (
                historySuppressed &&
                !force
            ) {

                return;

            }


            const snapshot =
                getViewSnapshot();


            const signature =
                snapshotSignature(
                    snapshot
                );


            if (
                !force &&
                signature ===
                lastHistorySignature
            ) {

                return;

            }


            if (
                !force &&
                currentHistoryDepth() >
                0 &&
                isBackwardTransition(
                    lastHistorySnapshot,
                    snapshot
                )
            ) {

                window
                    .history
                    .back();


                return;

            }


            const nextDepth =
                currentHistoryDepth() +
                1;


            const existing =
                history.state ||
                {};


            history
                .pushState(
                    {

                        ...existing,

                        nshUx:
                            true,

                        nshUxDepth:
                            nextDepth,

                        nshUxSnapshot:
                            snapshot

                    },

                    "",

                    window.location.href

                );


            lastHistorySnapshot =
                snapshot;


            lastHistorySignature =
                signature;

        }


        function pushCurrentViewSoon(
            force = false
        ) {

            clearTimeout(
                historyCaptureTimer
            );


            historyCaptureTimer =
                setTimeout(
                    function () {

                        pushCurrentView(
                            force
                        );

                    },
                    150
                );

        }


        function restoreSnapshot(
            snapshot
        ) {

            if (
                !snapshot
            ) {

                return;

            }


            historyApplying =
                true;


            closeWeakOverlayDirect();

            closeVisibleStudyOverlayDirect();


            document
                .querySelectorAll(
                    ".course-page," +
                    ".lesson-page"
                )
                .forEach(
                    function (
                        page
                    ) {

                        page
                            .classList
                            .add(
                                "hidden"
                            );

                    }
                );


            if (
                snapshot.baseType ===
                "dashboard"
            ) {

                setDashboardVisible(
                    true
                );

            } else {

                setDashboardVisible(
                    false
                );


                const page =
                    snapshot.baseId
                        ? document
                            .getElementById(
                                snapshot.baseId
                            )
                        : null;


                if (
                    page
                ) {

                    page
                        .classList
                        .remove(
                            "hidden"
                        );

                } else if (
                    snapshot.baseType ===
                    "course" &&
                    snapshot.courseId
                ) {

                    const coursePage =
                        findCoursePage(
                            snapshot.courseId
                        );


                    if (
                        coursePage
                    ) {

                        coursePage
                            .classList
                            .remove(
                                "hidden"
                            );

                    } else {

                        setDashboardVisible(
                            true
                        );

                    }

                } else {

                    setDashboardVisible(
                        true
                    );

                }

            }


            rememberedCourseId =
                snapshot.courseId ||
                null;


            if (
                snapshot.overlayId ===
                "nsh-ux-weak-overlay"
            ) {

                openWeakOverlay({

                    skipHistory:
                        true,

                    keepFilter:
                        true

                });

            } else if (
                snapshot.overlayId
            ) {

                const overlay =
                    document
                        .getElementById(
                            snapshot.overlayId
                        );


                if (
                    overlay
                ) {

                    overlay
                        .classList
                        .remove(
                            "hidden"
                        );


                    document.body
                        .style
                        .overflow =
                        "hidden";

                }

            }


            syncCommandCenterVisibility();

            ensureModalBackButtons();

            restorePlannerChoice();

            updateVisualViewportHeight();

            scrollToTop();


            lastHistorySnapshot =
                getViewSnapshot();


            lastHistorySignature =
                snapshotSignature(
                    lastHistorySnapshot
                );


            setTimeout(
                function () {

                    historyApplying =
                        false;

                },
                50
            );

        }


        function directBackOneStep() {

            const weakOverlay =
                document
                    .getElementById(
                        "nsh-ux-weak-overlay"
                    );


            if (
                weakOverlay &&
                isVisible(
                    weakOverlay
                )
            ) {

                closeWeakOverlayDirect();


                return;

            }


            if (
                closeVisibleStudyOverlayDirect()
            ) {

                scheduleViewSync();


                return;

            }


            const lesson =
                getVisibleLessonPage();


            if (
                lesson
            ) {

                const courseId =
                    rememberedCourseId ||
                    inferCourseIdFromElement(
                        lesson
                    );


                if (
                    courseId &&
                    showCourseDirect(
                        courseId
                    )
                ) {

                    return;

                }


                showDashboardDirect();


                return;

            }


            if (
                getVisibleCoursePage()
            ) {

                showDashboardDirect();

            }

        }


        function navigateBack() {

            if (
                historyReady &&
                currentHistoryDepth() >
                0
            ) {

                window
                    .history
                    .back();


                return;

            }


            directBackOneStep();

        }


        window
            .addEventListener(
                "popstate",
                function (
                    event
                ) {

                    if (
                        !event.state
                            ?.nshUx ||
                        !event.state
                            ?.nshUxSnapshot
                    ) {

                        return;

                    }


                    restoreSnapshot(
                        event.state
                            .nshUxSnapshot
                    );

                }
            );


        // ====================================================================
        // BACK BUTTON INSIDE POPUPS
        // ====================================================================

        function ensureModalBackButtons() {

            document
                .querySelectorAll(
                    ".study-modal-header," +
                    ".study-tools-modal-header"
                )
                .forEach(
                    function (
                        header
                    ) {

                        if (
                            header
                                .querySelector(
                                    ".nsh-ux-modal-back"
                                )
                        ) {

                            return;

                        }


                        const button =
                            document
                                .createElement(
                                    "button"
                                );


                        button.type =
                            "button";


                        button.className =
                            "nsh-ux-modal-back";


                        button.textContent =
                            "← Back";


                        button
                            .setAttribute(
                                "aria-label",
                                "Go back one step"
                            );


                        button
                            .addEventListener(
                                "click",
                                function (
                                    event
                                ) {

                                    event
                                        .preventDefault();


                                    event
                                        .stopPropagation();


                                    navigateBack();

                                }
                            );


                        const first =
                            header
                                .firstElementChild;


                        if (
                            first
                        ) {

                            const wrapper =
                                document
                                    .createElement(
                                        "div"
                                    );


                            wrapper.className =
                                "nsh-ux-modal-header-left";


                            header
                                .insertBefore(
                                    wrapper,
                                    first
                                );


                            wrapper
                                .appendChild(
                                    button
                                );


                            wrapper
                                .appendChild(
                                    first
                                );

                        } else {

                            header
                                .prepend(
                                    button
                                );

                        }


                        header
                            .classList
                            .add(
                                "nsh-ux-header-with-back"
                            );

                    }
                );

        }


        // ====================================================================
        // POPUP OUTSIDE-CLICK PROTECTION
        // ====================================================================

        function isPopupBackdropClick(
            target
        ) {

            if (
                !(
                    target instanceof
                    Element
                )
            ) {

                return false;

            }


            return (
                target.matches(
                    ".study-tools-modal-overlay"
                ) ||
                target.matches(
                    ".study-overlay"
                ) ||
                target.id ===
                "nsh-ux-weak-overlay"
            );

        }


        // ====================================================================
        // GLOBAL USER ACTIONS
        //
        // Window capture is intentional.
        // This runs before document-level course/study-tool listeners.
        // ====================================================================

        window
            .addEventListener(

                "change",

                function (
                    event
                ) {

                    if (
                        event.target
                            ?.id ===
                        "planner-minutes"
                    ) {

                        savePlannerChoice(
                            event.target.value
                        );

                    }

                },

                true

            );


        window
            .addEventListener(

                "click",

                function (
                    event
                ) {

                    const target =
                        event.target;


                    if (
                        !(
                            target instanceof
                            Element
                        )
                    ) {

                        return;

                    }


                    // ========================================================
                    // DO NOT CLOSE ANY POPUP BY CLICKING/TAPPING OUTSIDE
                    // ========================================================

                    if (
                        isPopupBackdropClick(
                            target
                        )
                    ) {

                        event
                            .preventDefault();


                        event
                            .stopPropagation();


                        event
                            .stopImmediatePropagation();


                        return;

                    }


                    // ========================================================
                    // SAVE STUDY PLAN SELECTION
                    // ========================================================

                    const generatePlan =
                        target
                            .closest(
                                "#generate-plan"
                            );


                    if (
                        generatePlan
                    ) {

                        const select =
                            document
                                .getElementById(
                                    "planner-minutes"
                                );


                        if (
                            select
                        ) {

                            savePlannerChoice(
                                select.value
                            );

                        }

                    }


                    // ========================================================
                    // FOCUSED WEAK AREA CENTER
                    // ========================================================

                    const dashboardWeak =
                        target
                            .closest(
                                "#weak-area-button"
                            );


                    const toolWeak =
                        target
                            .closest(
                                '[data-study-tool="weak"]'
                            );


                    if (
                        dashboardWeak ||
                        toolWeak
                    ) {

                        event
                            .preventDefault();


                        event
                            .stopPropagation();


                        event
                            .stopImmediatePropagation();


                        openWeakOverlay();


                        return;

                    }


                    // ========================================================
                    // WEBSITE BACK BUTTON
                    // ========================================================

                    const backButton =
                        target
                            .closest(
                                ".back-button"
                            );


                    if (
                        backButton &&
                        backButton
                            .closest(
                                ".course-page," +
                                ".lesson-page"
                            )
                    ) {

                        event
                            .preventDefault();


                        event
                            .stopPropagation();


                        event
                            .stopImmediatePropagation();


                        navigateBack();


                        return;

                    }


                    // ========================================================
                    // MODAL BACK BUTTON
                    // ========================================================

                    if (
                        target
                            .closest(
                                ".nsh-ux-modal-back"
                            )
                    ) {

                        return;

                    }


                    // ========================================================
                    // REMEMBER COURSE
                    // ========================================================

                    const courseCard =
                        target
                            .closest(
                                ".course-card[data-course]"
                            );


                    if (
                        courseCard
                    ) {

                        rememberedCourseId =
                            courseCard
                                .dataset
                                .course ||
                            null;

                    }


                    const visibleCourse =
                        getVisibleCoursePage();


                    if (
                        visibleCourse &&
                        (
                            target
                                .closest(
                                    ".topic-card"
                                ) ||
                            target
                                .closest(
                                    ".topic-button"
                                )
                        )
                    ) {

                        rememberedCourseId =
                            inferCourseIdFromElement(
                                visibleCourse
                            ) ||
                            rememberedCourseId;

                    }


                    scheduleViewSync();

                    pushCurrentViewSoon();

                },

                true

            );


        document
            .addEventListener(
                "keydown",
                function (
                    event
                ) {

                    if (
                        event.key !==
                        "Escape"
                    ) {

                        return;

                    }


                    const weakOverlay =
                        document
                            .getElementById(
                                "nsh-ux-weak-overlay"
                            );


                    if (
                        (
                            weakOverlay &&
                            isVisible(
                                weakOverlay
                            )
                        ) ||
                        getVisibleStudyOverlay()
                    ) {

                        event
                            .preventDefault();


                        navigateBack();

                    }

                }
            );


        window
            .addEventListener(
                "pageshow",
                function () {

                    updateVisualViewportHeight();

                    scheduleViewSync();

                }
            );


        // ====================================================================
        // INITIALIZE
        // ====================================================================

        injectStyles();

        ensureWeakOverlay();

        ensureModalBackButtons();

        restorePlannerChoice();

        syncCommandCenterVisibility();

        updateVisualViewportHeight();


        setTimeout(
            function () {

                ensureModalBackButtons();

                restorePlannerChoice();

                syncCommandCenterVisibility();

                initializeHistory();

            },
            300
        );


        console.log(
            "✅ Nursing Prep Lab UX fixes loaded: dashboard-only tools, focused weak review, step-back navigation, mobile keyboard support, protected popups and planner memory."
        );

    });

})();