// ============================================================================
// NURSING PREP LAB
// UX FIXES
//
// 1. STUDY COMMAND CENTER ONLY ON DASHBOARD
// 2. FOCUSED WEAK-AREA REVIEW
// 3. STEP-BY-STEP BACK NAVIGATION
// ============================================================================

(function () {

    "use strict";


    document.addEventListener(
        "DOMContentLoaded",
        function () {


            // =================================================================
            // COURSE CONFIGURATION
            // =================================================================

            const COURSE_CONFIG = {

                anatomy1: {

                    name:
                        "Anatomy & Physiology I",

                    icon:
                        "🫀",

                    card:
                        "anatomy1",

                    prefixes: [
                        "nshAP1_"
                    ]

                },


                anatomy2: {

                    name:
                        "Anatomy & Physiology II",

                    icon:
                        "❤️",

                    card:
                        "anatomy2",

                    prefixes: [
                        "nshAP2_"
                    ]

                },


                chemistry: {

                    name:
                        "Chemistry",

                    icon:
                        "🧪",

                    card:
                        "chemistry",

                    prefixes: [
                        "nshCHEM_FINAL_",
                        "nshCHEM_"
                    ]

                },


                microbiology: {

                    name:
                        "Microbiology",

                    icon:
                        "🦠",

                    card:
                        "microbiology",

                    prefixes: [
                        "nshMICRO_FINAL_",
                        "nshMICRO_"
                    ]

                },


                statistics: {

                    name:
                        "Statistics",

                    icon:
                        "📊",

                    card:
                        "statistics",

                    prefixes: [
                        "nshSTAT_"
                    ]

                },


                nutrition: {

                    name:
                        "Nutrition & Diet",

                    icon:
                        "🍎",

                    card:
                        "nutrition",

                    prefixes: [
                        "nshNUT_FINAL_",
                        "nshNUT_"
                    ]

                },


                labs: {

                    name:
                        "Anatomy & Science Labs",

                    icon:
                        "🔬",

                    card:
                        "labs",

                    prefixes: [
                        "nshLABS_",
                        "nshLAB_",
                        "nshSCIENCELAB_"
                    ]

                },


                teas: {

                    name:
                        "TEAS Practice Center",

                    icon:
                        "🎓",

                    card:
                        "teas",

                    prefixes: [
                        "nshTEAS_"
                    ]

                }

            };


            const DASHBOARD_SELECTORS = [

                ".dashboard-intro",

                ".progress-overview",

                "#study-command-center",

                ".courses-section",

                ".weak-areas-section",

                "footer"

            ];


            const OVERLAY_SELECTOR = [

                ".study-overlay",

                ".study-tools-modal-overlay",

                "#nsh-ux-weak-overlay"

            ].join(",");


            let restoringHistory =
                false;


            let historyReady =
                false;


            let internalDepth =
                0;


            let lastNavigationSignature =
                "";


            let lastNavigationSnapshot =
                null;


            let navigationTimer =
                null;


            let currentWeakFilter =
                "all";


            // =================================================================
            // BASIC HELPERS
            // =================================================================

            function escapeHTML(
                value
            ) {

                return String(
                    value ?? ""
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


            function parseJSON(
                value,
                fallback = null
            ) {

                try {

                    const parsed =
                        JSON.parse(
                            value
                        );


                    return (
                        parsed === null ||
                        parsed === undefined
                    )
                        ? fallback
                        : parsed;

                } catch {

                    return fallback;

                }

            }


            function isHidden(
                element
            ) {

                if (
                    !element
                ) {

                    return true;

                }


                if (
                    element.classList.contains(
                        "hidden"
                    )
                ) {

                    return true;

                }


                const style =
                    window.getComputedStyle(
                        element
                    );


                return (
                    style.display ===
                    "none" ||
                    style.visibility ===
                    "hidden"
                );

            }


            function scrollTop() {

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
                    document.getElementById(
                        "nsh-ux-toast-container"
                    );


                if (
                    !container
                ) {

                    container =
                        document.createElement(
                            "div"
                        );


                    container.id =
                        "nsh-ux-toast-container";


                    document.body.appendChild(
                        container
                    );

                }


                const toast =
                    document.createElement(
                        "div"
                    );


                toast.className =
                    "nsh-ux-toast";


                toast.textContent =
                    message;


                container.appendChild(
                    toast
                );


                requestAnimationFrame(
                    function () {

                        toast.classList.add(
                            "show"
                        );

                    }
                );


                setTimeout(
                    function () {

                        toast.classList.remove(
                            "show"
                        );


                        setTimeout(
                            function () {

                                toast.remove();

                            },
                            220
                        );

                    },
                    3200
                );

            }


            function getCourseCard(
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


                return document.querySelector(
                    `.course-card[data-course="${config.card}"]`
                );

            }


            function clickCourseCard(
                courseId
            ) {

                const card =
                    getCourseCard(
                        courseId
                    );


                if (
                    !card
                ) {

                    showToast(
                        "That course could not be opened."
                    );


                    return false;

                }


                card.click();


                return true;

            }


            function pageMatchesCourse(
                page,
                courseId
            ) {

                if (
                    !page
                ) {

                    return false;

                }


                const id =
                    (
                        page.id ||
                        ""
                    )
                        .toLowerCase();


                const classes =
                    (
                        page.className ||
                        ""
                    )
                        .toLowerCase();


                const haystack =
                    `${id} ${classes}`;


                if (
                    courseId ===
                    "anatomy1"
                ) {

                    return (
                        haystack.includes(
                            "anatomy1"
                        ) ||
                        id ===
                        "anatomy1-page"
                    );

                }


                if (
                    courseId ===
                    "anatomy2"
                ) {

                    return (
                        haystack.includes(
                            "anatomy2"
                        ) ||
                        haystack.includes(
                            "ap2"
                        )
                    );

                }


                if (
                    courseId ===
                    "chemistry"
                ) {

                    return haystack.includes(
                        "chem"
                    );

                }


                if (
                    courseId ===
                    "microbiology"
                ) {

                    return haystack.includes(
                        "micro"
                    );

                }


                if (
                    courseId ===
                    "statistics"
                ) {

                    return haystack.includes(
                        "stat"
                    );

                }


                if (
                    courseId ===
                    "nutrition"
                ) {

                    return haystack.includes(
                        "nutri"
                    );

                }


                if (
                    courseId ===
                    "labs"
                ) {

                    return haystack.includes(
                        "lab"
                    );

                }


                if (
                    courseId ===
                    "teas"
                ) {

                    return haystack.includes(
                        "teas"
                    );

                }


                return false;

            }


            function findTopicCard(
                topicId,
                courseId = null
            ) {

                if (
                    !topicId
                ) {

                    return null;

                }


                const cards =
                    Array.from(
                        document.querySelectorAll(
                            ".topic-card"
                        )
                    );


                return (
                    cards.find(
                        function (
                            card
                        ) {

                            const datasetValues =
                                Object.values(
                                    card.dataset ||
                                    {}
                                );


                            const matchesTopic =
                                datasetValues.includes(
                                    topicId
                                );


                            if (
                                !matchesTopic
                            ) {

                                return false;

                            }


                            if (
                                !courseId
                            ) {

                                return true;

                            }


                            const page =
                                card.closest(
                                    ".course-page"
                                );


                            if (
                                !page
                            ) {

                                return true;

                            }


                            return pageMatchesCourse(
                                page,
                                courseId
                            );

                        }
                    ) ||
                    null
                );

            }


            function getTopicTitle(
                topicId,
                courseId
            ) {

                const card =
                    findTopicCard(
                        topicId,
                        courseId
                    ) ||
                    findTopicCard(
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


                return topicId
                    ? topicId
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
                        )
                    : "Mixed Weak Areas";

            }


            // =================================================================
            // UX STYLES
            // =================================================================

            function injectStyles() {

                if (
                    document.getElementById(
                        "nsh-ux-fixes-styles"
                    )
                ) {

                    return;

                }


                const style =
                    document.createElement(
                        "style"
                    );


                style.id =
                    "nsh-ux-fixes-styles";


                style.textContent = `

                    /* ========================================================
                       DASHBOARD-ONLY STUDY COMMAND CENTER
                    ======================================================== */

                    body.nsh-ux-inside-content
                    #study-command-center {

                        display:
                            none !important;

                    }


                    /* ========================================================
                       WEAK AREA MODAL
                    ======================================================== */

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
                            2147483000;

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
                                .68
                            );

                        backdrop-filter:
                            blur(
                                8px
                            );

                        -webkit-backdrop-filter:
                            blur(
                                8px
                            );

                    }


                    .nsh-ux-weak-modal {

                        width:
                            min(
                                1100px,
                                96vw
                            );

                        max-height:
                            92vh;

                        overflow:
                            auto;

                        border-radius:
                            24px;

                        background:
                            #fff;

                        color:
                            #172033;

                        box-shadow:
                            0 30px 90px
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
                            5;

                        display:
                            flex;

                        align-items:
                            flex-start;

                        justify-content:
                            space-between;

                        gap:
                            18px;

                        padding:
                            22px 24px;

                        background:
                            rgba(
                                255,
                                255,
                                255,
                                .97
                            );

                        border-bottom:
                            1px solid
                            #e5e7eb;

                        backdrop-filter:
                            blur(
                                10px
                            );

                    }


                    .nsh-ux-weak-header-left {

                        display:
                            flex;

                        align-items:
                            flex-start;

                        gap:
                            14px;

                        min-width:
                            0;

                    }


                    .nsh-ux-weak-header h2 {

                        margin:
                            3px 0 5px;

                    }


                    .nsh-ux-weak-header p {

                        margin:
                            0;

                        color:
                            #667085;

                        line-height:
                            1.55;

                    }


                    .nsh-ux-back-button,
                    .nsh-ux-close-button,
                    .nsh-ux-action,
                    .nsh-ux-filter,
                    .nsh-ux-modal-back {

                        border:
                            1px solid
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
                            9px 13px;

                        font-weight:
                            800;

                        cursor:
                            pointer;

                    }


                    .nsh-ux-back-button:hover,
                    .nsh-ux-action:hover,
                    .nsh-ux-filter:hover,
                    .nsh-ux-modal-back:hover {

                        border-color:
                            #6366f1;

                    }


                    .nsh-ux-close-button {

                        width:
                            42px;

                        padding:
                            0;

                        font-size:
                            22px;

                        flex:
                            0 0 auto;

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
                                    170px,
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
                            1px solid
                            #e5e7eb;

                        border-radius:
                            16px;

                        background:
                            #f8fafc;

                    }


                    .nsh-ux-summary-card strong {

                        display:
                            block;

                        font-size:
                            26px;

                        margin-bottom:
                            3px;

                    }


                    .nsh-ux-summary-card span {

                        font-size:
                            11px;

                        color:
                            #667085;

                        font-weight:
                            800;

                    }


                    .nsh-ux-filter-row {

                        display:
                            flex;

                        gap:
                            8px;

                        flex-wrap:
                            wrap;

                        margin-bottom:
                            20px;

                    }


                    .nsh-ux-filter.active {

                        border-color:
                            #4f46e5;

                        background:
                            #4f46e5;

                        color:
                            #fff;

                    }


                    .nsh-ux-weak-groups {

                        display:
                            flex;

                        flex-direction:
                            column;

                        gap:
                            14px;

                    }


                    .nsh-ux-weak-group {

                        padding:
                            18px;

                        border-radius:
                            18px;

                        border:
                            1px solid
                            #e5e7eb;

                        background:
                            #fff;

                    }


                    .nsh-ux-weak-group-top {

                        display:
                            flex;

                        align-items:
                            flex-start;

                        justify-content:
                            space-between;

                        gap:
                            14px;

                    }


                    .nsh-ux-weak-group h3 {

                        margin:
                            7px 0 5px;

                    }


                    .nsh-ux-weak-group p {

                        margin:
                            0;

                        color:
                            #667085;

                        line-height:
                            1.55;

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
                            5px 9px;

                        border-radius:
                            999px;

                        background:
                            #eef2ff;

                        color:
                            #4338ca;

                        font-size:
                            10px;

                        font-weight:
                            900;

                    }


                    .nsh-ux-count-pill {

                        background:
                            #fff1f2;

                        color:
                            #be123c;

                        flex:
                            0 0 auto;

                    }


                    .nsh-ux-weak-actions {

                        display:
                            flex;

                        flex-wrap:
                            wrap;

                        gap:
                            9px;

                        margin-top:
                            15px;

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


                    .nsh-ux-detail-list {

                        margin-top:
                            14px;

                        display:
                            flex;

                        flex-direction:
                            column;

                        gap:
                            9px;

                    }


                    .nsh-ux-detail-card {

                        padding:
                            13px;

                        border-radius:
                            13px;

                        background:
                            #f8fafc;

                        border:
                            1px solid
                            #e5e7eb;

                    }


                    .nsh-ux-detail-card strong {

                        display:
                            block;

                        margin-bottom:
                            5px;

                    }


                    .nsh-ux-detail-card p {

                        margin:
                            4px 0;

                    }


                    .nsh-ux-empty {

                        text-align:
                            center;

                        padding:
                            42px 20px;

                        border:
                            1px dashed
                            #cbd5e1;

                        border-radius:
                            18px;

                        color:
                            #667085;

                    }


                    .nsh-ux-empty-icon {

                        font-size:
                            44px;

                        margin-bottom:
                            10px;

                    }


                    /* ========================================================
                       TOAST
                    ======================================================== */

                    #nsh-ux-toast-container {

                        position:
                            fixed;

                        z-index:
                            2147483646;

                        top:
                            calc(
                                var(
                                    --nsh-header-height,
                                    78px
                                ) +
                                14px
                            );

                        right:
                            18px;

                        width:
                            min(
                                380px,
                                calc(
                                    100vw -
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
                            13px 15px;

                        border-radius:
                            13px;

                        background:
                            #111827;

                        color:
                            #fff;

                        box-shadow:
                            0 12px 35px
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
                            opacity .2s ease,
                            transform .2s ease;

                    }


                    .nsh-ux-toast.show {

                        opacity:
                            1;

                        transform:
                            translateY(
                                0
                            );

                    }


                    .nsh-ux-modal-back {

                        margin-right:
                            10px;

                        white-space:
                            nowrap;

                    }


                    /* ========================================================
                       DARK MODE
                    ======================================================== */

                    body.dark-mode
                    .nsh-ux-weak-modal,

                    body.dark-mode
                    .nsh-ux-weak-group,

                    body.dark-mode
                    .nsh-ux-back-button,

                    body.dark-mode
                    .nsh-ux-close-button,

                    body.dark-mode
                    .nsh-ux-action,

                    body.dark-mode
                    .nsh-ux-filter,

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
                    .nsh-ux-weak-group p {

                        color:
                            #cbd5e1;

                    }


                    body.dark-mode
                    .nsh-ux-summary-card,

                    body.dark-mode
                    .nsh-ux-detail-card {

                        background:
                            #172033;

                        border-color:
                            #334155;

                        color:
                            #f8fafc;

                    }


                    body.dark-mode
                    .nsh-ux-summary-card span {

                        color:
                            #cbd5e1;

                    }


                    /* ========================================================
                       MOBILE
                    ======================================================== */

                    @media (
                        max-width:
                            700px
                    ) {

                        #nsh-ux-weak-overlay {

                            padding:
                                0;

                            align-items:
                                flex-end;

                        }


                        .nsh-ux-weak-modal {

                            width:
                                100%;

                            max-height:
                                94vh;

                            border-radius:
                                22px 22px 0 0;

                        }


                        .nsh-ux-weak-header,
                        .nsh-ux-weak-body {

                            padding:
                                18px;

                        }


                        .nsh-ux-weak-header-left {

                            display:
                                block;

                        }


                        .nsh-ux-back-button {

                            margin-bottom:
                                10px;

                        }


                        .nsh-ux-weak-group-top {

                            display:
                                block;

                        }


                        .nsh-ux-count-pill {

                            margin-top:
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

                    }

                `;


                document.head.appendChild(
                    style
                );

            }


            injectStyles();


            // =================================================================
            // DASHBOARD-ONLY STUDY COMMAND CENTER
            // =================================================================

            function getVisibleBasePage() {

                const lesson =
                    Array
                        .from(
                            document.querySelectorAll(
                                ".lesson-page"
                            )
                        )
                        .find(
                            function (
                                page
                            ) {

                                return !isHidden(
                                    page
                                );

                            }
                        );


                if (
                    lesson
                ) {

                    return {

                        type:
                            "lesson",

                        id:
                            lesson.id ||
                            ""

                    };

                }


                const course =
                    Array
                        .from(
                            document.querySelectorAll(
                                ".course-page"
                            )
                        )
                        .find(
                            function (
                                page
                            ) {

                                return !isHidden(
                                    page
                                );

                            }
                        );


                if (
                    course
                ) {

                    return {

                        type:
                            "course",

                        id:
                            course.id ||
                            ""

                    };

                }


                return {

                    type:
                        "dashboard",

                    id:
                        "dashboard"

                };

            }


            function syncDashboardOnlyTools() {

                const commandCenter =
                    document.getElementById(
                        "study-command-center"
                    );


                const base =
                    getVisibleBasePage();


                const insideContent =
                    base.type !==
                    "dashboard";


                document.body
                    .classList
                    .toggle(
                        "nsh-ux-inside-content",
                        insideContent
                    );


                document.body
                    .classList
                    .toggle(
                        "nsh-ux-on-dashboard",
                        !insideContent
                    );


                if (
                    !commandCenter
                ) {

                    return;

                }


                if (
                    insideContent
                ) {

                    commandCenter
                        .classList
                        .add(
                            "hidden"
                        );

                } else {

                    commandCenter
                        .classList
                        .remove(
                            "hidden"
                        );

                }

            }


            // =================================================================
            // WEAK-AREA STORAGE DETECTION
            // =================================================================

            function classifyStorageCourse(
                key
            ) {

                const lower =
                    String(
                        key ||
                        ""
                    )
                        .toLowerCase();


                if (
                    lower.includes(
                        "nshap1"
                    )
                ) {

                    return "anatomy1";

                }


                if (
                    lower.includes(
                        "nshap2"
                    )
                ) {

                    return "anatomy2";

                }


                if (
                    lower.includes(
                        "chem"
                    )
                ) {

                    return "chemistry";

                }


                if (
                    lower.includes(
                        "micro"
                    )
                ) {

                    return "microbiology";

                }


                if (
                    lower.includes(
                        "stat"
                    )
                ) {

                    return "statistics";

                }


                if (
                    lower.includes(
                        "nut"
                    )
                ) {

                    return "nutrition";

                }


                if (
                    lower.includes(
                        "lab"
                    )
                ) {

                    return "labs";

                }


                if (
                    lower.includes(
                        "teas"
                    )
                ) {

                    return "teas";

                }


                return null;

            }


            function isWeakStorageKey(
                key
            ) {

                const lower =
                    String(
                        key ||
                        ""
                    )
                        .toLowerCase();


                return (

                    lower.endsWith(
                        "_missed"
                    ) ||

                    lower.endsWith(
                        "_weak"
                    ) ||

                    lower.endsWith(
                        "_weak_questions"
                    ) ||

                    lower.endsWith(
                        "_weakquestions"
                    )

                );

            }


            function extractTopicId(
                key,
                courseId
            ) {

                const config =
                    COURSE_CONFIG[
                        courseId
                    ];


                if (
                    !config
                ) {

                    return "";

                }


                const suffixes = [

                    "_missed",

                    "_weak_questions",

                    "_weakquestions",

                    "_weak"

                ];


                let cleaned =
                    String(
                        key ||
                        ""
                    );


                for (
                    const prefix
                    of
                    config.prefixes
                ) {

                    if (
                        cleaned.startsWith(
                            prefix
                        )
                    ) {

                        cleaned =
                            cleaned.slice(
                                prefix.length
                            );


                        break;

                    }

                }


                for (
                    const suffix
                    of
                    suffixes
                ) {

                    if (
                        cleaned
                            .toLowerCase()
                            .endsWith(
                                suffix
                            )
                    ) {

                        cleaned =
                            cleaned.slice(
                                0,
                                -suffix.length
                            );


                        break;

                    }

                }


                cleaned =
                    cleaned
                        .replace(
                            /^final_/i,
                            ""
                        )
                        .replace(
                            /^topic_/i,
                            ""
                        )
                        .replace(
                            /^questions?_?/i,
                            ""
                        )
                        .replace(
                            /^weak_?/i,
                            ""
                        )
                        .replace(
                            /^missed_?/i,
                            ""
                        )
                        .replace(
                            /^_+|_+$/g,
                            ""
                        );


                if (
                    !cleaned
                ) {

                    return "";

                }


                const candidates = [

                    cleaned,

                    cleaned.replaceAll(
                        "_",
                        "-"
                    ),

                    cleaned.replaceAll(
                        "_",
                        ""
                    )

                ];


                for (
                    const candidate
                    of
                    candidates
                ) {

                    if (
                        findTopicCard(
                            candidate,
                            courseId
                        ) ||
                        findTopicCard(
                            candidate
                        )
                    ) {

                        return candidate;

                    }

                }


                return cleaned.replaceAll(
                    "_",
                    "-"
                );

            }


            function normalizeWeakItems(
                rawValue
            ) {

                const parsed =
                    parseJSON(
                        rawValue,
                        []
                    );


                if (
                    Array.isArray(
                        parsed
                    )
                ) {

                    return parsed;

                }


                if (
                    parsed &&
                    Array.isArray(
                        parsed.items
                    )
                ) {

                    return parsed.items;

                }


                if (
                    parsed &&
                    Array.isArray(
                        parsed.questions
                    )
                ) {

                    return parsed.questions;

                }


                if (
                    parsed &&
                    Array.isArray(
                        parsed.weak
                    )
                ) {

                    return parsed.weak;

                }


                if (
                    parsed &&
                    Array.isArray(
                        parsed.missed
                    )
                ) {

                    return parsed.missed;

                }


                return [];

            }


            function mergeWeakGroup(
                map,
                courseId,
                topicId,
                items,
                sourceKey
            ) {

                if (
                    !courseId ||
                    !items.length
                ) {

                    return;

                }


                const key =
                    `${courseId}::${topicId || "mixed"}`;


                if (
                    !map.has(
                        key
                    )
                ) {

                    map.set(
                        key,
                        {

                            courseId,

                            topicId:
                                topicId ||
                                "",

                            items:
                                [],

                            sourceKeys:
                                []

                        }
                    );

                }


                const group =
                    map.get(
                        key
                    );


                group
                    .sourceKeys
                    .push(
                        sourceKey
                    );


                const seen =
                    new Set(

                        group.items.map(
                            function (
                                item
                            ) {

                                if (
                                    typeof item ===
                                    "string" ||
                                    typeof item ===
                                    "number"
                                ) {

                                    return String(
                                        item
                                    );

                                }


                                return String(

                                    item
                                        ?.id ??

                                    item
                                        ?.questionId ??

                                    item
                                        ?.question ??

                                    item
                                        ?.prompt ??

                                    JSON.stringify(
                                        item
                                    )

                                );

                            }
                        )

                    );


                items.forEach(
                    function (
                        item
                    ) {

                        const identity =
                            (
                                typeof item ===
                                "string" ||
                                typeof item ===
                                "number"
                            )
                                ? String(
                                    item
                                )
                                : String(

                                    item
                                        ?.id ??

                                    item
                                        ?.questionId ??

                                    item
                                        ?.question ??

                                    item
                                        ?.prompt ??

                                    JSON.stringify(
                                        item
                                    )

                                );


                        if (
                            !seen.has(
                                identity
                            )
                        ) {

                            seen.add(
                                identity
                            );


                            group.items.push(
                                item
                            );

                        }

                    }
                );

            }


            function getWeakGroups() {

                const groups =
                    new Map();


                for (
                    let index = 0;
                    index <
                    localStorage.length;
                    index++
                ) {

                    const key =
                        localStorage.key(
                            index
                        );


                    if (
                        !key ||
                        !isWeakStorageKey(
                            key
                        )
                    ) {

                        continue;

                    }


                    const courseId =
                        classifyStorageCourse(
                            key
                        );


                    if (
                        !courseId
                    ) {

                        continue;

                    }


                    const items =
                        normalizeWeakItems(
                            localStorage.getItem(
                                key
                            )
                        );


                    if (
                        !items.length
                    ) {

                        continue;

                    }


                    const topicId =
                        extractTopicId(
                            key,
                            courseId
                        );


                    mergeWeakGroup(

                        groups,

                        courseId,

                        topicId,

                        items,

                        key

                    );

                }


                // -------------------------------------------------------------
                // TEAS FALLBACK
                // Some TEAS builds store weak information inside FINAL_STATS.
                // -------------------------------------------------------------

                const teasStats =
                    parseJSON(
                        localStorage.getItem(
                            "nshTEAS_FINAL_STATS"
                        ),
                        null
                    );


                const alreadyHasTeas =
                    Array
                        .from(
                            groups.values()
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

                    mergeWeakGroup(

                        groups,

                        "teas",

                        "",

                        teasStats.weak,

                        "nshTEAS_FINAL_STATS"

                    );

                }


                return Array
                    .from(
                        groups.values()
                    )
                    .map(
                        function (
                            group
                        ) {

                            return {

                                ...group,

                                title:
                                    getTopicTitle(
                                        group.topicId,
                                        group.courseId
                                    )

                            };

                        }
                    )
                    .sort(
                        function (
                            a,
                            b
                        ) {

                            if (
                                a.courseId !==
                                b.courseId
                            ) {

                                return COURSE_CONFIG[
                                    a.courseId
                                ]
                                    .name
                                    .localeCompare(

                                        COURSE_CONFIG[
                                            b.courseId
                                        ].name

                                    );

                            }


                            return a
                                .title
                                .localeCompare(
                                    b.title
                                );

                        }
                    );

            }


            function weakItemDetails(
                item
            ) {

                if (
                    !item ||
                    typeof item !==
                    "object"
                ) {

                    return null;

                }


                const question =
                    item.question ||
                    item.prompt ||
                    item.text ||
                    item.stem ||
                    "";


                const correctAnswer =
                    item.correctAnswer ??
                    item.correct ??
                    item.answer ??
                    "";


                const userAnswer =
                    item.userAnswer ??
                    item.selectedAnswer ??
                    item.selected ??
                    item.response ??
                    "";


                const explanation =
                    item.explanation ||
                    item.rationale ||
                    item.reason ||
                    "";


                if (

                    !question &&
                    !correctAnswer &&
                    !userAnswer &&
                    !explanation

                ) {

                    return null;

                }


                return {

                    question,

                    correctAnswer,

                    userAnswer,

                    explanation

                };

            }


            // =================================================================
            // WEAK AREA MODAL
            // =================================================================

            function ensureWeakOverlay() {

                let overlay =
                    document.getElementById(
                        "nsh-ux-weak-overlay"
                    );


                if (
                    overlay
                ) {

                    return overlay;

                }


                overlay =
                    document.createElement(
                        "div"
                    );


                overlay.id =
                    "nsh-ux-weak-overlay";


                overlay.className =
                    "hidden";


                overlay.setAttribute(
                    "role",
                    "dialog"
                );


                overlay.setAttribute(
                    "aria-modal",
                    "true"
                );


                overlay.setAttribute(
                    "aria-label",
                    "Focused weak area review"
                );


                overlay.innerHTML = `

                    <div class="nsh-ux-weak-modal">

                        <div class="nsh-ux-weak-header">

                            <div class="nsh-ux-weak-header-left">

                                <button
                                    type="button"
                                    class="nsh-ux-back-button"
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
                                        Review only the concepts
                                        and questions that need attention.
                                    </p>

                                </div>

                            </div>

                            <button
                                type="button"
                                class="nsh-ux-close-button"
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


                document.body.appendChild(
                    overlay
                );


                document
                    .getElementById(
                        "nsh-ux-weak-back"
                    )
                    .addEventListener(
                        "click",
                        function () {

                            stepBackOrCloseOverlay();

                        }
                    );


                document
                    .getElementById(
                        "nsh-ux-weak-close"
                    )
                    .addEventListener(
                        "click",
                        function () {

                            stepBackOrCloseOverlay();

                        }
                    );


                overlay.addEventListener(
                    "click",
                    function (
                        event
                    ) {

                        if (
                            event.target ===
                            overlay
                        ) {

                            stepBackOrCloseOverlay();

                        }

                    }
                );


                return overlay;

            }


            function renderWeakGroup(
                group
            ) {

                const config =
                    COURSE_CONFIG[
                        group.courseId
                    ];


                const detailItems =
                    group
                        .items
                        .map(
                            weakItemDetails
                        )
                        .filter(
                            Boolean
                        )
                        .slice(
                            0,
                            3
                        );


                return `

                    <article class="nsh-ux-weak-group">

                        <div class="nsh-ux-weak-group-top">

                            <div>

                                <span class="nsh-ux-course-pill">

                                    ${config.icon}

                                    ${escapeHTML(
                                        config.name
                                    )}

                                </span>


                                <h3>
                                    ${escapeHTML(
                                        group.title
                                    )}
                                </h3>


                                <p>

                                    ${group.items.length}

                                    saved weak

                                    ${
                                        group.items.length ===
                                        1
                                            ? "question"
                                            : "questions"
                                    }

                                    ${
                                        group.topicId
                                            ? "from this topic."
                                            : "from this course."
                                    }

                                </p>

                            </div>


                            <span class="nsh-ux-count-pill">

                                ${group.items.length}

                                to review

                            </span>

                        </div>


                        ${
                            detailItems.length
                                ? `

                                    <div class="nsh-ux-detail-list">

                                        ${
                                            detailItems
                                                .map(
                                                    function (
                                                        detail
                                                    ) {

                                                        return `

                                                            <div class="nsh-ux-detail-card">

                                                                ${
                                                                    detail.question
                                                                        ? `

                                                                            <strong>

                                                                                ${
                                                                                    escapeHTML(
                                                                                        detail.question
                                                                                    )
                                                                                }

                                                                            </strong>

                                                                        `
                                                                        : ""
                                                                }


                                                                ${
                                                                    detail.userAnswer
                                                                        ? `

                                                                            <p>

                                                                                <b>
                                                                                    Your answer:
                                                                                </b>

                                                                                ${
                                                                                    escapeHTML(
                                                                                        String(
                                                                                            detail.userAnswer
                                                                                        )
                                                                                    )
                                                                                }

                                                                            </p>

                                                                        `
                                                                        : ""
                                                                }


                                                                ${
                                                                    detail.correctAnswer
                                                                        ? `

                                                                            <p>

                                                                                <b>
                                                                                    Correct answer:
                                                                                </b>

                                                                                ${
                                                                                    escapeHTML(
                                                                                        String(
                                                                                            detail.correctAnswer
                                                                                        )
                                                                                    )
                                                                                }

                                                                            </p>

                                                                        `
                                                                        : ""
                                                                }


                                                                ${
                                                                    detail.explanation
                                                                        ? `

                                                                            <p>

                                                                                <b>
                                                                                    Why:
                                                                                </b>

                                                                                ${
                                                                                    escapeHTML(
                                                                                        String(
                                                                                            detail.explanation
                                                                                        )
                                                                                    )
                                                                                }

                                                                            </p>

                                                                        `
                                                                        : ""
                                                                }

                                                            </div>

                                                        `;

                                                    }
                                                )
                                                .join("")
                                        }

                                    </div>

                                `
                                : ""
                        }


                        <div class="nsh-ux-weak-actions">

                            ${
                                group.topicId
                                    ? `

                                        <button
                                            type="button"
                                            class="nsh-ux-action primary"
                                            data-ux-course="${group.courseId}"
                                            data-ux-open-topic="${escapeHTML(
                                                group.topicId
                                            )}"
                                        >
                                            Open Related Topic →
                                        </button>

                                    `
                                    : ""
                            }


                            <button
                                type="button"
                                class="nsh-ux-action focus"
                                data-ux-practice-weak="${group.courseId}"
                            >

                                🎯 Practice

                                ${escapeHTML(
                                    config.name
                                )}

                                Weak Questions

                            </button>

                        </div>

                    </article>

                `;

            }


            function renderWeakOverlay() {

                const body =
                    document.getElementById(
                        "nsh-ux-weak-body"
                    );


                if (
                    !body
                ) {

                    return;

                }


                const allGroups =
                    getWeakGroups();


                const visibleGroups =
                    currentWeakFilter ===
                    "all"
                        ? allGroups
                        : allGroups.filter(
                            function (
                                group
                            ) {

                                return (
                                    group.courseId ===
                                    currentWeakFilter
                                );

                            }
                        );


                const total =
                    allGroups.reduce(
                        function (
                            sum,
                            group
                        ) {

                            return (
                                sum +
                                group.items.length
                            );

                        },
                        0
                    );


                const courseCount =
                    new Set(
                        allGroups.map(
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
                                currentWeakFilter ===
                                "all"
                                    ? "active"
                                    : ""
                            }"
                            data-ux-weak-filter="all"
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
                                    allGroups
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
                                                    group.items.length
                                                );

                                            },
                                            0
                                        );


                                if (
                                    !count
                                ) {

                                    return "";

                                }


                                const config =
                                    COURSE_CONFIG[
                                        courseId
                                    ];


                                return `

                                    <button
                                        type="button"
                                        class="nsh-ux-filter ${
                                            currentWeakFilter ===
                                            courseId
                                                ? "active"
                                                : ""
                                        }"
                                        data-ux-weak-filter="${courseId}"
                                    >

                                        ${config.icon}

                                        ${escapeHTML(
                                            config.name
                                        )}

                                        (${count})

                                    </button>

                                `;

                            }
                        )
                        .join("")

                ].join("");


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
                                ${allGroups.length}
                            </strong>

                            <span>
                                WEAK TOPICS / GROUPS
                            </span>

                        </div>

                    </div>


                    ${
                        allGroups.length
                            ? `

                                <div class="nsh-ux-filter-row">

                                    ${filters}

                                </div>


                                <div class="nsh-ux-weak-groups">

                                    ${
                                        visibleGroups
                                            .map(
                                                renderWeakGroup
                                            )
                                            .join("")
                                    }

                                </div>

                            `
                            : `

                                <div class="nsh-ux-empty">

                                    <div class="nsh-ux-empty-icon">
                                        🎯
                                    </div>

                                    <h3>
                                        No weak areas are saved right now.
                                    </h3>

                                    <p>
                                        Missed quiz and exam questions
                                        will appear here automatically.
                                    </p>

                                </div>

                            `
                    }

                `;


                body
                    .querySelectorAll(
                        "[data-ux-weak-filter]"
                    )
                    .forEach(
                        function (
                            button
                        ) {

                            button.addEventListener(
                                "click",
                                function () {

                                    currentWeakFilter =
                                        button.dataset
                                            .uxWeakFilter;


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

                            button.addEventListener(
                                "click",
                                function () {

                                    openExactTopic(

                                        button.dataset
                                            .uxCourse,

                                        button.dataset
                                            .uxOpenTopic

                                    );

                                }
                            );

                        }
                    );


                body
                    .querySelectorAll(
                        "[data-ux-practice-weak]"
                    )
                    .forEach(
                        function (
                            button
                        ) {

                            button.addEventListener(
                                "click",
                                function () {

                                    openCourseWeakPractice(

                                        button.dataset
                                            .uxPracticeWeak

                                    );

                                }
                            );

                        }
                    );

            }


            function openWeakOverlay() {

                const overlay =
                    ensureWeakOverlay();


                currentWeakFilter =
                    "all";


                renderWeakOverlay();


                overlay.classList.remove(
                    "hidden"
                );


                document.body.style.overflow =
                    "hidden";


                scheduleNavigationCapture();

            }


            function closeWeakOverlayDirect() {

                const overlay =
                    document.getElementById(
                        "nsh-ux-weak-overlay"
                    );


                if (
                    !overlay
                ) {

                    return;

                }


                overlay.classList.add(
                    "hidden"
                );


                document.body.style.overflow =
                    "";

            }


            // =================================================================
            // EXACT WEAK TOPIC NAVIGATION
            // =================================================================

            function openExactTopic(
                courseId,
                topicId
            ) {

                closeWeakOverlayDirect();


                if (
                    !clickCourseCard(
                        courseId
                    )
                ) {

                    return;

                }


                setTimeout(
                    function () {

                        const topicCard =
                            findTopicCard(
                                topicId,
                                courseId
                            ) ||
                            findTopicCard(
                                topicId
                            );


                        if (
                            topicCard
                        ) {

                            topicCard.click();


                            scrollTop();

                        } else {

                            showToast(
                                "The course opened, but that exact topic could not be matched automatically."
                            );

                        }

                    },
                    160
                );

            }


            // =================================================================
            // EXISTING COURSE-SPECIFIC WEAK PRACTICE
            // =================================================================

            function findNativeWeakButton(
                courseId
            ) {

                const visibleCourse =
                    Array
                        .from(
                            document.querySelectorAll(
                                ".course-page"
                            )
                        )
                        .find(
                            function (
                                page
                            ) {

                                return (

                                    !isHidden(
                                        page
                                    ) &&

                                    pageMatchesCourse(
                                        page,
                                        courseId
                                    )

                                );

                            }
                        );


                if (
                    !visibleCourse
                ) {

                    return null;

                }


                const scope =
                    visibleCourse;


                const preferredSelectors = {

                    anatomy2: [

                        "#ap2-weak-button",

                        "#anatomy2-weak-button"

                    ],


                    chemistry: [

                        "#chem-weak-button"

                    ],


                    microbiology: [

                        "#micro-weak-button",

                        "#microbiology-weak-button"

                    ],


                    statistics: [

                        "#stat-weak-button",

                        "#statistics-weak-button"

                    ],


                    nutrition: [

                        "#nut-weak-button",

                        "#nutrition-weak-button"

                    ],


                    labs: [

                        "#lab-weak-button",

                        "#labs-weak-button"

                    ],


                    teas: [

                        "#teas-weak-button",

                        "#teas-weakness-button"

                    ]

                };


                const selectors =
                    preferredSelectors[
                        courseId
                    ] ||
                    [];


                for (
                    const selector
                    of
                    selectors
                ) {

                    const button =
                        scope.querySelector(
                            selector
                        );


                    if (
                        button
                    ) {

                        return button;

                    }

                }


                return (
                    Array
                        .from(
                            scope.querySelectorAll(
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


            function openCourseWeakPractice(
                courseId
            ) {

                closeWeakOverlayDirect();


                if (
                    !clickCourseCard(
                        courseId
                    )
                ) {

                    return;

                }


                setTimeout(
                    function () {

                        const weakButton =
                            findNativeWeakButton(
                                courseId
                            );


                        if (
                            weakButton
                        ) {

                            weakButton.click();


                            return;

                        }


                        const groups =
                            getWeakGroups()
                                .filter(
                                    function (
                                        group
                                    ) {

                                        return (
                                            group.courseId ===
                                            courseId
                                        );

                                    }
                                );


                        if (

                            groups.length ===
                            1 &&

                            groups[
                                0
                            ].topicId

                        ) {

                            const topicCard =
                                findTopicCard(

                                    groups[
                                        0
                                    ].topicId,

                                    courseId

                                ) ||
                                findTopicCard(

                                    groups[
                                        0
                                    ].topicId

                                );


                            if (
                                topicCard
                            ) {

                                topicCard.click();


                                showToast(
                                    "Opened the exact topic containing your saved weak questions."
                                );


                                return;

                            }

                        }


                        showToast(
                            "This course does not expose a separate weak-question practice button yet. Open one of its weak topics from the Weak Areas screen."
                        );

                    },
                    180
                );

            }


            // =================================================================
            // GLOBAL WEAK AREA BUTTON INTERCEPT
            // =================================================================

            document.addEventListener(
                "click",
                function (
                    event
                ) {

                    const weakDashboardButton =
                        event.target.closest(
                            "#weak-area-button"
                        );


                    const weakToolCard =
                        event.target.closest(
                            '[data-study-tool="weak"]'
                        );


                    if (

                        !weakDashboardButton &&
                        !weakToolCard

                    ) {

                        return;

                    }


                    event.preventDefault();


                    event.stopPropagation();


                    event.stopImmediatePropagation();


                    openWeakOverlay();

                },
                true
            );


            // =================================================================
            // STEP-BY-STEP HISTORY
            // =================================================================

            function getOpenOverlay() {

                return (
                    Array
                        .from(
                            document.querySelectorAll(
                                OVERLAY_SELECTOR
                            )
                        )
                        .find(
                            function (
                                overlay
                            ) {

                                return !isHidden(
                                    overlay
                                );

                            }
                        ) ||
                    null
                );

            }


            function getNavigationSnapshot() {

                const base =
                    getVisibleBasePage();


                const overlay =
                    getOpenOverlay();


                return {

                    baseType:
                        base.type,

                    baseId:
                        base.id,

                    overlayId:
                        overlay
                            ?.id ||
                        ""

                };

            }


            function navigationSignature(
                snapshot
            ) {

                return (

                    `${snapshot.baseType}:` +

                    `${snapshot.baseId}|` +

                    `overlay:` +

                    `${snapshot.overlayId}`

                );

            }


            function scheduleNavigationCapture() {

                clearTimeout(
                    navigationTimer
                );


                navigationTimer =
                    setTimeout(
                        captureNavigationState,
                        80
                    );

            }


            function captureNavigationState() {

                syncDashboardOnlyTools();


                syncVisibleBackLabels();


                ensureOpenModalBackButton();


                if (
                    restoringHistory
                ) {

                    return;

                }


                const snapshot =
                    getNavigationSnapshot();


                const signature =
                    navigationSignature(
                        snapshot
                    );


                if (
                    !historyReady
                ) {

                    history.replaceState(

                        {

                            nshUx:
                                true,

                            snapshot

                        },

                        "",

                        window.location.href

                    );


                    lastNavigationSignature =
                        signature;


                    lastNavigationSnapshot =
                        snapshot;


                    historyReady =
                        true;


                    return;

                }


                if (
                    signature ===
                    lastNavigationSignature
                ) {

                    return;

                }


                // -------------------------------------------------------------
                // NATIVE MODAL CLOSE
                //
                // If a modal is closed through an existing X/Exit button,
                // treat that as a BACK action instead of creating a new
                // history step that would reopen the modal later.
                // -------------------------------------------------------------

                if (

                    lastNavigationSnapshot
                        ?.overlayId &&

                    !snapshot
                        .overlayId &&

                    lastNavigationSnapshot
                        .baseType ===
                    snapshot
                        .baseType &&

                    lastNavigationSnapshot
                        .baseId ===
                    snapshot
                        .baseId &&

                    internalDepth >
                    0

                ) {

                    window.history.back();


                    return;

                }


                history.pushState(

                    {

                        nshUx:
                            true,

                        snapshot

                    },

                    "",

                    window.location.href

                );


                internalDepth +=
                    1;


                lastNavigationSignature =
                    signature;


                lastNavigationSnapshot =
                    snapshot;

            }


            // =================================================================
            // VIEW RESTORATION
            // =================================================================

            function hideAllOverlays() {

                document
                    .querySelectorAll(
                        OVERLAY_SELECTOR
                    )
                    .forEach(
                        function (
                            overlay
                        ) {

                            overlay.classList.add(
                                "hidden"
                            );

                        }
                    );


                document.body.style.overflow =
                    "";

            }


            function showDashboardDirect() {

                document
                    .querySelectorAll(
                        ".course-page,.lesson-page"
                    )
                    .forEach(
                        function (
                            page
                        ) {

                            page.classList.add(
                                "hidden"
                            );

                        }
                    );


                DASHBOARD_SELECTORS.forEach(
                    function (
                        selector
                    ) {

                        const element =
                            document.querySelector(
                                selector
                            );


                        if (
                            element
                        ) {

                            element.classList.remove(
                                "hidden"
                            );

                        }

                    }
                );


                syncDashboardOnlyTools();


                scrollTop();

            }


            function restoreSnapshot(
                snapshot
            ) {

                if (
                    !snapshot
                ) {

                    return;

                }


                restoringHistory =
                    true;


                hideAllOverlays();


                document
                    .querySelectorAll(
                        ".course-page,.lesson-page"
                    )
                    .forEach(
                        function (
                            page
                        ) {

                            page.classList.add(
                                "hidden"
                            );

                        }
                    );


                if (
                    snapshot.baseType ===
                    "dashboard"
                ) {

                    DASHBOARD_SELECTORS.forEach(
                        function (
                            selector
                        ) {

                            const element =
                                document.querySelector(
                                    selector
                                );


                            if (
                                element
                            ) {

                                element.classList.remove(
                                    "hidden"
                                );

                            }

                        }
                    );

                } else {

                    DASHBOARD_SELECTORS.forEach(
                        function (
                            selector
                        ) {

                            const element =
                                document.querySelector(
                                    selector
                                );


                            if (
                                element
                            ) {

                                element.classList.add(
                                    "hidden"
                                );

                            }

                        }
                    );


                    const page =
                        snapshot.baseId
                            ? document.getElementById(
                                snapshot.baseId
                            )
                            : null;


                    if (
                        page
                    ) {

                        page.classList.remove(
                            "hidden"
                        );

                    } else {

                        showDashboardDirect();

                    }

                }


                if (
                    snapshot.overlayId
                ) {

                    const overlay =
                        document.getElementById(
                            snapshot.overlayId
                        );


                    if (
                        overlay
                    ) {

                        overlay.classList.remove(
                            "hidden"
                        );


                        document.body.style.overflow =
                            "hidden";

                    }

                }


                syncDashboardOnlyTools();


                syncVisibleBackLabels();


                ensureOpenModalBackButton();


                lastNavigationSnapshot =
                    getNavigationSnapshot();


                lastNavigationSignature =
                    navigationSignature(
                        lastNavigationSnapshot
                    );


                setTimeout(
                    function () {

                        restoringHistory =
                            false;

                    },
                    100
                );


                scrollTop();

            }


            function stepBackOrCloseOverlay() {

                const overlay =
                    getOpenOverlay();


                if (
                    internalDepth >
                    0
                ) {

                    window.history.back();


                    return;

                }


                if (
                    overlay
                ) {

                    overlay.classList.add(
                        "hidden"
                    );


                    document.body.style.overflow =
                        "";


                    scheduleNavigationCapture();


                    return;

                }


                const base =
                    getVisibleBasePage();


                if (
                    base.type !==
                    "dashboard"
                ) {

                    showDashboardDirect();


                    scheduleNavigationCapture();

                }

            }


            window.addEventListener(
                "popstate",
                function (
                    event
                ) {

                    if (

                        !event.state
                            ?.nshUx ||

                        !event.state
                            .snapshot

                    ) {

                        return;

                    }


                    if (
                        internalDepth >
                        0
                    ) {

                        internalDepth -=
                            1;

                    }


                    restoreSnapshot(
                        event.state.snapshot
                    );

                }
            );


            // =================================================================
            // CHANGE COURSE / LESSON BACK BUTTONS
            // =================================================================

            function isPageBackButton(
                button
            ) {

                if (
                    !button
                ) {

                    return false;

                }


                if (
                    button.classList.contains(
                        "back-button"
                    )
                ) {

                    return true;

                }


                const text =
                    button
                        .textContent
                        .trim()
                        .toLowerCase();


                const insidePage =
                    Boolean(
                        button.closest(
                            ".course-page,.lesson-page"
                        )
                    );


                return (

                    insidePage &&

                    (

                        text.startsWith(
                            "← dashboard"
                        ) ||

                        text.startsWith(
                            "← course"
                        ) ||

                        text ===
                        "back" ||

                        text.startsWith(
                            "← back"
                        )

                    )

                );

            }


            document.addEventListener(
                "click",
                function (
                    event
                ) {

                    const button =
                        event.target.closest(
                            "button"
                        );


                    if (
                        !isPageBackButton(
                            button
                        )
                    ) {

                        return;

                    }


                    event.preventDefault();


                    event.stopPropagation();


                    event.stopImmediatePropagation();


                    stepBackOrCloseOverlay();

                },
                true
            );


            function syncVisibleBackLabels() {

                const base =
                    getVisibleBasePage();


                if (
                    base.type ===
                    "lesson"
                ) {

                    const page =
                        document.getElementById(
                            base.id
                        );


                    const back =
                        page
                            ?.querySelector(
                                ".back-button"
                            );


                    if (

                        back &&

                        back
                            .textContent
                            .trim()
                            .toLowerCase()
                            .includes(
                                "dashboard"
                            )

                    ) {

                        back.textContent =
                            "← Course";

                    }

                }


                if (
                    base.type ===
                    "course"
                ) {

                    const page =
                        document.getElementById(
                            base.id
                        );


                    const back =
                        page
                            ?.querySelector(
                                ".back-button"
                            );


                    if (

                        back &&

                        back
                            .textContent
                            .trim() !==
                        "← Dashboard"

                    ) {

                        back.textContent =
                            "← Dashboard";

                    }

                }

            }


            // =================================================================
            // BACK BUTTON INSIDE QUIZ / STUDY MODALS
            // =================================================================

            function ensureOpenModalBackButton() {

                const overlays =
                    Array
                        .from(
                            document.querySelectorAll(
                                ".study-overlay,.study-tools-modal-overlay"
                            )
                        )
                        .filter(
                            function (
                                overlay
                            ) {

                                return !isHidden(
                                    overlay
                                );

                            }
                        );


                overlays.forEach(
                    function (
                        overlay
                    ) {

                        if (
                            overlay.querySelector(
                                ".nsh-ux-modal-back"
                            )
                        ) {

                            return;

                        }


                        const header =
                            overlay.querySelector(

                                ".study-modal-header," +

                                ".study-tools-modal-header"

                            );


                        if (
                            !header
                        ) {

                            return;

                        }


                        const button =
                            document.createElement(
                                "button"
                            );


                        button.type =
                            "button";


                        button.className =
                            "nsh-ux-modal-back";


                        button.textContent =
                            "← Back";


                        button.setAttribute(
                            "aria-label",
                            "Go back one step"
                        );


                        button.addEventListener(
                            "click",
                            function (
                                event
                            ) {

                                event.preventDefault();


                                event.stopPropagation();


                                stepBackOrCloseOverlay();

                            }
                        );


                        header.prepend(
                            button
                        );

                    }
                );

            }


            // =================================================================
            // WATCH SITE FOR NAVIGATION CHANGES
            // =================================================================

            const observer =
                new MutationObserver(
                    function () {

                        syncDashboardOnlyTools();


                        scheduleNavigationCapture();

                    }
                );


            observer.observe(
                document.body,
                {

                    childList:
                        true,

                    subtree:
                        true,

                    attributes:
                        true,

                    attributeFilter: [

                        "class",

                        "style"

                    ]

                }
            );


            // =================================================================
            // ESCAPE KEY
            // =================================================================

            document.addEventListener(
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


                    const overlay =
                        getOpenOverlay();


                    if (
                        !overlay
                    ) {

                        return;

                    }


                    event.preventDefault();


                    event.stopPropagation();


                    stepBackOrCloseOverlay();

                },
                true
            );


            // =================================================================
            // INITIALIZE
            // =================================================================

            setTimeout(
                function () {

                    ensureWeakOverlay();


                    syncDashboardOnlyTools();


                    syncVisibleBackLabels();


                    captureNavigationState();

                },
                350
            );


            setTimeout(
                function () {

                    syncDashboardOnlyTools();


                    scheduleNavigationCapture();

                },
                1200
            );


            console.log(
                "🎯 Nursing Prep Lab UX fixes initialized."
            );

        }
    );

})();