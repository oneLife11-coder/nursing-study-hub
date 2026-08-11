// ============================================================================
// NURSING STUDY HUB
// GLOBAL STUDY COMMAND CENTER
// NOTES • FLASHCARDS • STUDY PLANS • EXAMS • ANALYTICS • BACKUP
// ============================================================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================================================
    // SETTINGS
    // ========================================================================

    const STORAGE = {

        notes:
            "nshTOOLS_notes",

        flashcards:
            "nshTOOLS_flashcards",

        exams:
            "nshTOOLS_exams",

        plan:
            "nshTOOLS_daily_plan",

        streak:
            "nshTOOLS_streak_data",

        settings:
            "nshTOOLS_settings"

    };


    const COURSES = [

        {
            id: "anatomy1",
            name: "Anatomy & Physiology I",
            icon: "🫀"
        },

        {
            id: "anatomy2",
            name: "Anatomy & Physiology II",
            icon: "❤️"
        },

        {
            id: "chemistry",
            name: "Chemistry",
            icon: "🧪"
        },

        {
            id: "microbiology",
            name: "Microbiology",
            icon: "🦠"
        },

        {
            id: "statistics",
            name: "Statistics",
            icon: "📊"
        },

        {
            id: "nutrition",
            name: "Nutrition & Diet",
            icon: "🍎"
        },

        {
            id: "labs",
            name: "Anatomy & Science Labs",
            icon: "🔬"
        },

        {
            id: "teas",
            name: "TEAS Practice Center",
            icon: "🎓"
        }

    ];


    const COURSE_MAP = {};

    COURSES.forEach(function (course) {

        COURSE_MAP[
            course.id
        ] = course;

    });


    // ========================================================================
    // BASIC HELPERS
    // ========================================================================

    function escapeHTML(value) {

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
                value === null ||
                value === undefined
            )
                ? fallback
                : value;

        } catch {

            return fallback;

        }

    }


    function saveJSON(
        key,
        value
    ) {

        localStorage.setItem(
            key,
            JSON.stringify(
                value
            )
        );

    }


    function uid(prefix) {

        return (
            prefix +
            "_" +
            Date.now() +
            "_" +
            Math.random()
                .toString(36)
                .slice(2, 9)
        );

    }


    function todayString() {

        const date =
            new Date();


        return [

            date.getFullYear(),

            String(
                date.getMonth() + 1
            ).padStart(
                2,
                "0"
            ),

            String(
                date.getDate()
            ).padStart(
                2,
                "0"
            )

        ].join("-");

    }


    function localDateString(
        date
    ) {

        return [

            date.getFullYear(),

            String(
                date.getMonth() + 1
            ).padStart(
                2,
                "0"
            ),

            String(
                date.getDate()
            ).padStart(
                2,
                "0"
            )

        ].join("-");

    }


    function formatDate(
        dateString
    ) {

        if (
            !dateString
        ) {

            return "";

        }


        const date =
            new Date(
                `${dateString}T12:00:00`
            );


        if (
            Number.isNaN(
                date.getTime()
            )
        ) {

            return dateString;

        }


        return date.toLocaleDateString(
            undefined,
            {
                month: "short",
                day: "numeric",
                year: "numeric"
            }
        );

    }


    function daysBetween(
        start,
        end
    ) {

        const one =
            new Date(
                `${start}T12:00:00`
            );


        const two =
            new Date(
                `${end}T12:00:00`
            );


        return Math.ceil(
            (
                two -
                one
            ) /
            86400000
        );

    }


    function shuffle(array) {

        const copy =
            [...array];


        for (
            let i =
                copy.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() *
                    (
                        i + 1
                    )
                );


            [
                copy[i],
                copy[j]
            ] = [
                copy[j],
                copy[i]
            ];

        }


        return copy;

    }


    function downloadText(
        filename,
        text
    ) {

        const blob =
            new Blob(
                [
                    text
                ],
                {
                    type:
                        "application/json"
                }
            );


        const url =
            URL.createObjectURL(
                blob
            );


        const link =
            document.createElement(
                "a"
            );


        link.href =
            url;


        link.download =
            filename;


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        setTimeout(
            function () {

                URL.revokeObjectURL(
                    url
                );

            },
            1000
        );

    }


    // ========================================================================
    // STREAK SYSTEM
    // ========================================================================

    function updateStudyStreak() {

        const today =
            todayString();


        const data =
            getJSON(
                STORAGE.streak,
                {
                    current: 0,
                    longest: 0,
                    lastStudyDate: "",
                    studyDates: []
                }
            );


        if (
            data.lastStudyDate !==
            today
        ) {

            if (
                data.lastStudyDate
            ) {

                const gap =
                    daysBetween(
                        data.lastStudyDate,
                        today
                    );


                if (
                    gap === 1
                ) {

                    data.current++;

                } else if (
                    gap > 1
                ) {

                    data.current = 1;

                }

            } else {

                data.current = 1;

            }


            data.lastStudyDate =
                today;


            if (
                !data.studyDates.includes(
                    today
                )
            ) {

                data.studyDates.push(
                    today
                );

            }


            data.studyDates =
                data.studyDates.slice(
                    -365
                );


            data.longest =
                Math.max(
                    data.longest,
                    data.current
                );


            saveJSON(
                STORAGE.streak,
                data
            );

        }


        const streakElement =
            document.getElementById(
                "study-streak"
            );


        if (
            streakElement
        ) {

            streakElement.textContent =
                data.current;

        }


        return data;

    }


    const streakData =
        updateStudyStreak();


    // ========================================================================
    // GLOBAL ANALYTICS
    // ========================================================================

    function getCourseProgress(
        courseId
    ) {

        const card =
            document.querySelector(
                `.course-card[data-course="${courseId}"]`
            );


        if (
            !card
        ) {

            return 0;

        }


        const spans =
            card.querySelectorAll(
                ".course-progress span"
            );


        if (
            spans.length <
            2
        ) {

            return 0;

        }


        return (
            Number(
                spans[1]
                    .textContent
                    .replace(
                        "%",
                        ""
                    )
            ) || 0
        );

    }


    function countMasteredItems() {

        let count =
            0;


        for (
            let i = 0;
            i < localStorage.length;
            i++
        ) {

            const key =
                localStorage.key(
                    i
                );


            if (
                !key
            ) {

                continue;

            }


            if (
                key.endsWith(
                    "_passed"
                ) &&
                localStorage.getItem(
                    key
                ) === "true"
            ) {

                count++;

            }

        }


        return count;

    }


    function parseWeakArray(
        value
    ) {

        try {

            const parsed =
                JSON.parse(
                    value
                );


            return Array.isArray(
                parsed
            )
                ? parsed
                : [];

        } catch {

            return [];

        }

    }


    function classifyStorageCourse(
        key
    ) {

        const value =
            key.toLowerCase();


        if (
            value.includes(
                "ap1"
            )
        ) {

            return "anatomy1";

        }


        if (
            value.includes(
                "ap2"
            )
        ) {

            return "anatomy2";

        }


        if (
            value.includes(
                "chem"
            )
        ) {

            return "chemistry";

        }


        if (
            value.includes(
                "micro"
            )
        ) {

            return "microbiology";

        }


        if (
            value.includes(
                "stat"
            )
        ) {

            return "statistics";

        }


        if (
            value.includes(
                "nut"
            )
        ) {

            return "nutrition";

        }


        if (
            value.includes(
                "lab"
            )
        ) {

            return "labs";

        }


        if (
            value.includes(
                "teas"
            )
        ) {

            return "teas";

        }


        return null;

    }


    function getUnifiedWeakData() {

        const byCourse = {};


        COURSES.forEach(
            function (
                course
            ) {

                byCourse[
                    course.id
                ] = 0;

            }
        );


        let total =
            0;


        for (
            let i = 0;
            i < localStorage.length;
            i++
        ) {

            const key =
                localStorage.key(
                    i
                );


            if (
                !key
            ) {

                continue;

            }


            if (
                key.endsWith(
                    "_missed"
                )
            ) {

                const items =
                    parseWeakArray(
                        localStorage.getItem(
                            key
                        )
                    );


                const courseId =
                    classifyStorageCourse(
                        key
                    );


                total +=
                    items.length;


                if (
                    courseId
                ) {

                    byCourse[
                        courseId
                    ] +=
                        items.length;

                }

            }

        }


        const teasStats =
            getJSON(
                "nshTEAS_FINAL_STATS",
                null
            );


        if (
            teasStats &&
            Array.isArray(
                teasStats.weak
            )
        ) {

            const alreadyCounted =
                Object.keys(
                    localStorage
                )
                    .some(
                        key =>
                            key
                                .toLowerCase()
                                .includes(
                                    "teas"
                                ) &&
                            key.endsWith(
                                "_missed"
                            )
                    );


            if (
                !alreadyCounted
            ) {

                byCourse.teas +=
                    teasStats.weak.length;


                total +=
                    teasStats.weak.length;

            }

        }


        return {
            total,
            byCourse
        };

    }


    function getQuestionCount() {

        return (
            Number(
                localStorage.getItem(
                    "nursingStudyHubQuestionsAnswered"
                )
            ) || 0
        );

    }


    function getAnalytics() {

        const progress = {};


        COURSES.forEach(
            function (
                course
            ) {

                progress[
                    course.id
                ] =
                    getCourseProgress(
                        course.id
                    );

            }
        );


        const progressValues =
            Object.values(
                progress
            );


        const overall =
            progressValues.length
                ? Math.round(
                    progressValues.reduce(
                        (
                            total,
                            value
                        ) =>
                            total +
                            value,
                        0
                    ) /
                    progressValues.length
                )
                : 0;


        const lowestCourse =
            COURSES
                .map(
                    course => ({
                        ...course,
                        progress:
                            progress[
                                course.id
                            ]
                    })
                )
                .sort(
                    (
                        a,
                        b
                    ) =>
                        a.progress -
                        b.progress
                )[0];


        return {

            progress,

            overall,

            mastered:
                countMasteredItems(),

            questions:
                getQuestionCount(),

            weak:
                getUnifiedWeakData(),

            streak:
                getJSON(
                    STORAGE.streak,
                    streakData
                ),

            lowestCourse

        };

    }


    // ========================================================================
    // STUDY COMMAND CENTER STYLES
    // ========================================================================

    function injectStyles() {

        if (
            document.getElementById(
                "study-tools-styles"
            )
        ) {

            return;

        }


        const style =
            document.createElement(
                "style"
            );


        style.id =
            "study-tools-styles";


        style.textContent = `

            .study-command-section {
                margin:34px 0;
            }

            .study-command-header {
                display:flex;
                align-items:flex-end;
                justify-content:space-between;
                gap:20px;
                margin-bottom:18px;
            }

            .study-command-header h2 {
                margin:4px 0 0;
            }

            .study-command-header > p {
                max-width:520px;
                margin:0;
                color:#667085;
                line-height:1.6;
            }

            .study-command-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(220px,1fr)
                    );
                gap:14px;
            }

            .study-tool-card {
                position:relative;
                overflow:hidden;
                text-align:left;
                padding:20px;
                border-radius:18px;
                border:1px solid #e5e7eb;
                background:#fff;
                cursor:pointer;
                transition:
                    transform .18s ease,
                    box-shadow .18s ease,
                    border-color .18s ease;
            }

            .study-tool-card:hover {
                transform:translateY(-2px);
                border-color:#818cf8;
                box-shadow:
                    0 14px 34px
                    rgba(15,23,42,.08);
            }

            .study-tool-icon {
                width:46px;
                height:46px;
                display:flex;
                align-items:center;
                justify-content:center;
                border-radius:14px;
                background:
                    linear-gradient(
                        135deg,
                        #eef2ff,
                        #ecfeff
                    );
                font-size:24px;
                margin-bottom:14px;
            }

            .study-tool-card h3 {
                margin:0 0 7px;
                color:#172033;
            }

            .study-tool-card p {
                margin:0;
                color:#667085;
                font-size:13px;
                line-height:1.6;
            }

            .study-tool-badge {
                position:absolute;
                top:14px;
                right:14px;
                min-width:28px;
                min-height:28px;
                padding:4px 8px;
                border-radius:999px;
                display:flex;
                align-items:center;
                justify-content:center;
                background:#eef2ff;
                color:#4338ca;
                font-size:11px;
                font-weight:900;
            }

            .study-tools-modal-overlay {
                position:fixed;
                inset:0;
                z-index:99999;
                padding:24px;
                display:flex;
                align-items:center;
                justify-content:center;
                background:
                    rgba(
                        15,
                        23,
                        42,
                        .62
                    );
                backdrop-filter:
                    blur(6px);
            }

            .study-tools-modal-overlay.hidden {
                display:none;
            }

            .study-tools-modal {
                width:min(
                    1050px,
                    96vw
                );
                max-height:92vh;
                overflow:auto;
                background:#fff;
                border-radius:24px;
                box-shadow:
                    0 30px 90px
                    rgba(0,0,0,.28);
            }

            .study-tools-modal-header {
                position:sticky;
                top:0;
                z-index:10;
                display:flex;
                align-items:flex-start;
                justify-content:space-between;
                gap:20px;
                padding:22px 24px;
                background:
                    rgba(
                        255,
                        255,
                        255,
                        .97
                    );
                border-bottom:
                    1px solid #e5e7eb;
                backdrop-filter:
                    blur(8px);
            }

            .study-tools-modal-header h2 {
                margin:3px 0 0;
            }

            .study-tools-close {
                width:40px;
                height:40px;
                border:0;
                border-radius:12px;
                background:#f1f5f9;
                cursor:pointer;
                font-size:23px;
                color:#475569;
            }

            .study-tools-modal-body {
                padding:24px;
            }

            .tools-label {
                font-size:10px;
                letter-spacing:1.3px;
                font-weight:900;
                color:#6366f1;
            }

            .tools-stats-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(145px,1fr)
                    );
                gap:12px;
                margin-bottom:24px;
            }

            .tools-stat {
                padding:17px;
                border-radius:16px;
                border:1px solid #e5e7eb;
                background:#f8fafc;
            }

            .tools-stat strong {
                display:block;
                font-size:25px;
                color:#172033;
                margin-bottom:3px;
            }

            .tools-stat span {
                font-size:11px;
                font-weight:800;
                color:#667085;
            }

            .tools-section {
                margin-top:24px;
                padding-top:22px;
                border-top:1px solid #edf0f4;
            }

            .tools-section:first-child {
                border-top:0;
                margin-top:0;
                padding-top:0;
            }

            .tools-section-header {
                display:flex;
                align-items:center;
                justify-content:space-between;
                gap:12px;
                margin-bottom:16px;
            }

            .tools-section-header h3 {
                margin:0;
            }

            .tools-button {
                border:1px solid #d0d5dd;
                background:#fff;
                color:#344054;
                padding:10px 14px;
                border-radius:11px;
                cursor:pointer;
                font-weight:800;
                font-size:12px;
            }

            .tools-button:hover {
                border-color:#6366f1;
            }

            .tools-button.primary {
                background:#4f46e5;
                color:#fff;
                border-color:#4f46e5;
            }

            .tools-button.danger {
                color:#b42318;
                border-color:#fda29b;
                background:#fff;
            }

            .tools-button.success {
                color:#067647;
                border-color:#86efac;
                background:#f0fdf4;
            }

            .tools-form-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(180px,1fr)
                    );
                gap:12px;
            }

            .tools-field {
                display:flex;
                flex-direction:column;
                gap:6px;
            }

            .tools-field.full {
                grid-column:
                    1 / -1;
            }

            .tools-field label {
                font-size:11px;
                font-weight:800;
                color:#475467;
            }

            .tools-field input,
            .tools-field textarea,
            .tools-field select {
                width:100%;
                box-sizing:border-box;
                padding:12px 13px;
                border:1px solid #d0d5dd;
                border-radius:11px;
                background:#fff;
                color:#172033;
                font:inherit;
            }

            .tools-field textarea {
                min-height:120px;
                resize:vertical;
            }

            .tools-list {
                display:flex;
                flex-direction:column;
                gap:10px;
            }

            .tools-list-item {
                padding:16px;
                border-radius:15px;
                background:#fff;
                border:1px solid #e5e7eb;
            }

            .tools-list-item-top {
                display:flex;
                align-items:flex-start;
                justify-content:space-between;
                gap:12px;
            }

            .tools-list-item h4 {
                margin:0 0 5px;
                color:#172033;
            }

            .tools-list-item p {
                margin:0;
                color:#667085;
                line-height:1.6;
                white-space:pre-wrap;
            }

            .tools-meta {
                display:flex;
                flex-wrap:wrap;
                gap:7px;
                margin-top:10px;
            }

            .tools-pill {
                padding:5px 8px;
                border-radius:999px;
                background:#f1f5f9;
                color:#475569;
                font-size:10px;
                font-weight:850;
            }

            .flashcard-study-area {
                min-height:310px;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                padding:24px;
                text-align:center;
                border:1px solid #dbe4f0;
                border-radius:22px;
                background:
                    linear-gradient(
                        145deg,
                        #f8fafc,
                        #eef2ff
                    );
            }

            .flashcard-study-area h2 {
                max-width:720px;
                line-height:1.5;
            }

            .flashcard-answer {
                margin-top:20px;
                padding-top:20px;
                width:100%;
                border-top:1px solid #cbd5e1;
                color:#475467;
                line-height:1.75;
                font-size:17px;
            }

            .flashcard-controls {
                display:flex;
                flex-wrap:wrap;
                justify-content:center;
                gap:10px;
                margin-top:18px;
            }

            .study-plan-summary {
                padding:20px;
                border-radius:18px;
                background:
                    linear-gradient(
                        135deg,
                        #eef2ff,
                        #ecfdf5
                    );
                border:1px solid #c7d2fe;
                margin-bottom:18px;
            }

            .study-plan-session {
                display:grid;
                grid-template-columns:
                    56px 1fr auto;
                gap:14px;
                align-items:center;
                padding:15px;
                border:1px solid #e5e7eb;
                border-radius:15px;
                background:#fff;
                margin-bottom:10px;
            }

            .study-plan-minutes {
                width:52px;
                height:52px;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
                border-radius:14px;
                background:#eef2ff;
                color:#4338ca;
                font-weight:900;
            }

            .study-plan-minutes small {
                font-size:8px;
            }

            .study-plan-session h4 {
                margin:0 0 5px;
            }

            .study-plan-session p {
                margin:0;
                color:#667085;
                font-size:12px;
                line-height:1.5;
            }

            .countdown-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(220px,1fr)
                    );
                gap:12px;
            }

            .countdown-card {
                padding:18px;
                border-radius:16px;
                border:1px solid #e5e7eb;
                background:#fff;
            }

            .countdown-number {
                font-size:34px;
                font-weight:900;
                color:#4f46e5;
                margin:8px 0;
            }

            .analytics-course-row {
                display:grid;
                grid-template-columns:
                    minmax(
                        150px,
                        1fr
                    )
                    minmax(
                        160px,
                        2fr
                    )
                    48px;
                gap:12px;
                align-items:center;
                margin-bottom:12px;
            }

            .analytics-bar {
                height:10px;
                background:#e5e7eb;
                border-radius:999px;
                overflow:hidden;
            }

            .analytics-bar > div {
                height:100%;
                border-radius:999px;
                background:
                    linear-gradient(
                        90deg,
                        #4f46e5,
                        #06b6d4
                    );
            }

            .weak-course-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(200px,1fr)
                    );
                gap:11px;
            }

            .weak-course-card {
                padding:16px;
                border-radius:15px;
                border:1px solid #e5e7eb;
                background:#fff;
            }

            .weak-course-card strong {
                display:block;
                font-size:24px;
                margin:7px 0;
                color:#b42318;
            }

            .tools-empty {
                padding:30px 18px;
                text-align:center;
                border:1px dashed #cbd5e1;
                border-radius:16px;
                color:#667085;
            }

            .backup-warning {
                padding:16px;
                border-radius:14px;
                background:#fff7ed;
                border:1px solid #fed7aa;
                color:#9a3412;
                line-height:1.6;
                margin:14px 0;
            }

            .tools-success-message {
                padding:15px;
                border-radius:13px;
                background:#ecfdf3;
                border:1px solid #a6f4c5;
                color:#067647;
                margin-bottom:15px;
            }

            .tools-error-message {
                padding:15px;
                border-radius:13px;
                background:#fef3f2;
                border:1px solid #fecdca;
                color:#b42318;
                margin-bottom:15px;
            }

            @media (
                max-width:700px
            ) {

                .study-command-header {
                    display:block;
                }

                .study-command-header > p {
                    margin-top:10px;
                }

                .study-tools-modal-overlay {
                    padding:0;
                    align-items:flex-end;
                }

                .study-tools-modal {
                    width:100%;
                    max-height:94vh;
                    border-radius:
                        22px 22px 0 0;
                }

                .study-tools-modal-body {
                    padding:18px;
                }

                .study-plan-session {
                    grid-template-columns:
                        52px 1fr;
                }

                .study-plan-session > button {
                    grid-column:
                        1 / -1;
                }

                .analytics-course-row {
                    grid-template-columns:
                        1fr 54px;
                }

                .analytics-course-row
                .analytics-bar {
                    grid-column:
                        1 / -1;
                }

            }

            body.dark-mode
            .study-tool-card,
            body.dark-mode
            .study-tools-modal,
            body.dark-mode
            .tools-list-item,
            body.dark-mode
            .study-plan-session,
            body.dark-mode
            .countdown-card,
            body.dark-mode
            .weak-course-card,
            body.dark-mode
            .tools-button {
                background:#111827;
                border-color:#334155;
                color:#e2e8f0;
            }

            body.dark-mode
            .study-tools-modal-header {
                background:
                    rgba(
                        17,
                        24,
                        39,
                        .97
                    );
                border-color:#334155;
            }

            body.dark-mode
            .study-tool-card h3,
            body.dark-mode
            .tools-list-item h4,
            body.dark-mode
            .study-plan-session h4,
            body.dark-mode
            .tools-stat strong {
                color:#f8fafc;
            }

            body.dark-mode
            .study-tool-card p,
            body.dark-mode
            .tools-list-item p,
            body.dark-mode
            .study-plan-session p {
                color:#cbd5e1;
            }

            body.dark-mode
            .tools-stat,
            body.dark-mode
            .study-plan-summary,
            body.dark-mode
            .flashcard-study-area {
                background:#172033;
                border-color:#334155;
            }

            body.dark-mode
            .tools-field input,
            body.dark-mode
            .tools-field textarea,
            body.dark-mode
            .tools-field select {
                background:#0f172a;
                border-color:#334155;
                color:#f8fafc;
            }

            body.dark-mode
            .analytics-bar {
                background:#334155;
            }

            body.dark-mode
            .tools-pill {
                background:#1e293b;
                color:#cbd5e1;
            }

        `;


        document.head.appendChild(
            style
        );

    }


    injectStyles();


    // ========================================================================
    // COMMAND CENTER DASHBOARD SECTION
    // ========================================================================

    const coursesSection =
        document.querySelector(
            ".courses-section"
        );


    const commandSection =
        document.createElement(
            "section"
        );


    commandSection.id =
        "study-command-center";


    commandSection.className =
        "study-command-section";


    function renderCommandSection() {

        const analytics =
            getAnalytics();


        const notes =
            getJSON(
                STORAGE.notes,
                []
            );


        const flashcards =
            getJSON(
                STORAGE.flashcards,
                []
            );


        const exams =
            getJSON(
                STORAGE.exams,
                []
            )
                .filter(
                    exam =>
                        daysBetween(
                            todayString(),
                            exam.date
                        ) >= 0
                );


        const plan =
            getJSON(
                STORAGE.plan,
                null
            );


        const planToday =
            plan &&
            plan.date ===
            todayString()
                ? plan.sessions.length
                : 0;


        commandSection.innerHTML = `

            <div class="study-command-header">

                <div>

                    <p class="section-label">
                        STUDY COMMAND CENTER
                    </p>

                    <h2>
                        Your Study Tools
                    </h2>

                </div>

                <p>

                    Plan your day,
                    review weak areas,
                    build personal flashcards,
                    track exams and protect
                    your study progress.

                </p>

            </div>


            <div class="study-command-grid">


                <button
                    class="study-tool-card"
                    data-study-tool="planner"
                >

                    <div class="study-tool-icon">
                        📅
                    </div>

                    <div class="study-tool-badge">
                        ${planToday}
                    </div>

                    <h3>
                        Daily Study Plan
                    </h3>

                    <p>

                        Build a smart study schedule
                        based on your available time,
                        course progress and weak areas.

                    </p>

                </button>


                <button
                    class="study-tool-card"
                    data-study-tool="weak"
                >

                    <div class="study-tool-icon">
                        🎯
                    </div>

                    <div class="study-tool-badge">
                        ${analytics.weak.total}
                    </div>

                    <h3>
                        Weak Areas
                    </h3>

                    <p>

                        See which courses contain
                        the most missed questions
                        and decide what to repair first.

                    </p>

                </button>


                <button
                    class="study-tool-card"
                    data-study-tool="flashcards"
                >

                    <div class="study-tool-icon">
                        🧠
                    </div>

                    <div class="study-tool-badge">
                        ${flashcards.length}
                    </div>

                    <h3>
                        My Flashcards
                    </h3>

                    <p>

                        Create your own recall cards
                        and study them in randomized
                        flashcard mode.

                    </p>

                </button>


                <button
                    class="study-tool-card"
                    data-study-tool="notes"
                >

                    <div class="study-tool-icon">
                        📝
                    </div>

                    <div class="study-tool-badge">
                        ${notes.length}
                    </div>

                    <h3>
                        Study Notes
                    </h3>

                    <p>

                        Save personal notes,
                        memory tricks and reminders
                        for any course.

                    </p>

                </button>


                <button
                    class="study-tool-card"
                    data-study-tool="exams"
                >

                    <div class="study-tool-icon">
                        ⏳
                    </div>

                    <div class="study-tool-badge">
                        ${exams.length}
                    </div>

                    <h3>
                        Exam Countdown
                    </h3>

                    <p>

                        Add upcoming exams
                        and see exactly how many
                        study days remain.

                    </p>

                </button>


                <button
                    class="study-tool-card"
                    data-study-tool="analytics"
                >

                    <div class="study-tool-icon">
                        📈
                    </div>

                    <div class="study-tool-badge">
                        ${analytics.overall}%
                    </div>

                    <h3>
                        Progress Analytics
                    </h3>

                    <p>

                        Compare course progress,
                        question volume,
                        mastery and study streak.

                    </p>

                </button>


                <button
                    class="study-tool-card"
                    data-study-tool="backup"
                >

                    <div class="study-tool-icon">
                        💾
                    </div>

                    <h3>
                        Backup & Restore
                    </h3>

                    <p>

                        Export all Nursing Study Hub
                        progress to a backup file
                        or restore it later.

                    </p>

                </button>

            </div>

        `;


        commandSection
            .querySelectorAll(
                "[data-study-tool]"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            openTool(
                                button.dataset
                                    .studyTool
                            );

                        }
                    );

                }
            );

    }


    if (
        coursesSection
    ) {

        coursesSection.before(
            commandSection
        );


        renderCommandSection();

    }


    // ========================================================================
    // GLOBAL MODAL
    // ========================================================================

    const overlay =
        document.createElement(
            "div"
        );


    overlay.id =
        "study-tools-overlay";


    overlay.className =
        "study-tools-modal-overlay hidden";


    overlay.innerHTML = `

        <div class="study-tools-modal">

            <div class="study-tools-modal-header">

                <div>

                    <div
                        id="tools-modal-label"
                        class="tools-label"
                    >
                        STUDY COMMAND CENTER
                    </div>

                    <h2 id="tools-modal-title">
                        Study Tools
                    </h2>

                </div>

                <button
                    id="tools-modal-close"
                    class="study-tools-close"
                    aria-label="Close"
                >
                    ×
                </button>

            </div>

            <div
                id="tools-modal-body"
                class="study-tools-modal-body"
            ></div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    const modalTitle =
        document.getElementById(
            "tools-modal-title"
        );


    const modalLabel =
        document.getElementById(
            "tools-modal-label"
        );


    const modalBody =
        document.getElementById(
            "tools-modal-body"
        );


    function openOverlay() {

        overlay.classList.remove(
            "hidden"
        );


        document.body.style.overflow =
            "hidden";

    }


    function closeOverlay() {

        overlay.classList.add(
            "hidden"
        );


        document.body.style.overflow =
            "";


        renderCommandSection();

    }


    document
        .getElementById(
            "tools-modal-close"
        )
        .addEventListener(
            "click",
            closeOverlay
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

                closeOverlay();

            }

        }
    );


    document.addEventListener(
        "keydown",
        function (
            event
        ) {

            if (
                event.key ===
                "Escape" &&
                !overlay
                    .classList
                    .contains(
                        "hidden"
                    )
            ) {

                closeOverlay();

            }

        }
    );


    // ========================================================================
    // OPEN TOOL ROUTER
    // ========================================================================

    function openTool(
        tool
    ) {

        modalLabel.textContent =
            "STUDY COMMAND CENTER";


        if (
            tool === "planner"
        ) {

            renderPlanner();

        }


        if (
            tool === "weak"
        ) {

            renderWeakAreas();

        }


        if (
            tool === "flashcards"
        ) {

            renderFlashcards();

        }


        if (
            tool === "notes"
        ) {

            renderNotes();

        }


        if (
            tool === "exams"
        ) {

            renderExams();

        }


        if (
            tool === "analytics"
        ) {

            renderAnalytics();

        }


        if (
            tool === "backup"
        ) {

            renderBackup();

        }


        openOverlay();

    }


    // ========================================================================
    // NOTES
    // ========================================================================

    function renderNotes() {

        modalTitle.textContent =
            "My Study Notes";


        const notes =
            getJSON(
                STORAGE.notes,
                []
            );


        modalBody.innerHTML = `

            <div class="tools-section">

                <div class="tools-section-header">

                    <div>

                        <h3>
                            Add a Note
                        </h3>

                    </div>

                </div>

                <div class="tools-form-grid">

                    <div class="tools-field">

                        <label>
                            Course
                        </label>

                        <select id="note-course">

                            <option value="general">
                                General
                            </option>

                            ${
                                COURSES.map(
                                    course => `

                                        <option value="${course.id}">
                                            ${course.icon}
                                            ${course.name}
                                        </option>

                                    `
                                ).join("")
                            }

                        </select>

                    </div>


                    <div class="tools-field">

                        <label>
                            Title
                        </label>

                        <input
                            id="note-title"
                            type="text"
                            maxlength="100"
                            placeholder="Example: Cranial nerve trick"
                        >

                    </div>


                    <div class="tools-field full">

                        <label>
                            Note
                        </label>

                        <textarea
                            id="note-body"
                            placeholder="Write your note, memory trick, concept explanation or reminder..."
                        ></textarea>

                    </div>

                </div>


                <div
                    style="
                        margin-top:12px;
                        text-align:right;
                    "
                >

                    <button
                        id="save-note"
                        class="tools-button primary"
                    >
                        Save Note
                    </button>

                </div>

            </div>


            <div class="tools-section">

                <div class="tools-section-header">

                    <h3>
                        Saved Notes
                    </h3>

                    <span class="tools-pill">
                        ${notes.length}
                        total
                    </span>

                </div>


                <div class="tools-list">

                    ${
                        notes.length
                            ? notes
                                .slice()
                                .reverse()
                                .map(
                                    note => {

                                        const course =
                                            COURSE_MAP[
                                                note.course
                                            ];


                                        return `

                                            <div class="tools-list-item">

                                                <div class="tools-list-item-top">

                                                    <div>

                                                        <h4>
                                                            ${
                                                                escapeHTML(
                                                                    note.title ||
                                                                    "Untitled Note"
                                                                )
                                                            }
                                                        </h4>

                                                        <div class="tools-meta">

                                                            <span class="tools-pill">

                                                                ${
                                                                    course
                                                                        ? `${course.icon} ${course.name}`
                                                                        : "General"
                                                                }

                                                            </span>

                                                            <span class="tools-pill">

                                                                ${
                                                                    formatDate(
                                                                        note.date
                                                                    )
                                                                }

                                                            </span>

                                                        </div>

                                                    </div>

                                                    <button
                                                        class="tools-button danger"
                                                        data-delete-note="${note.id}"
                                                    >
                                                        Delete
                                                    </button>

                                                </div>

                                                <p
                                                    style="margin-top:12px;"
                                                >
                                                    ${
                                                        escapeHTML(
                                                            note.body
                                                        )
                                                    }
                                                </p>

                                            </div>

                                        `;

                                    }
                                )
                                .join("")
                            : `

                                <div class="tools-empty">

                                    No notes yet.
                                    Add your first study note above.

                                </div>

                            `
                    }

                </div>

            </div>

        `;


        document
            .getElementById(
                "save-note"
            )
            .addEventListener(
                "click",
                function () {

                    const course =
                        document
                            .getElementById(
                                "note-course"
                            )
                            .value;


                    const title =
                        document
                            .getElementById(
                                "note-title"
                            )
                            .value
                            .trim();


                    const body =
                        document
                            .getElementById(
                                "note-body"
                            )
                            .value
                            .trim();


                    if (
                        !body
                    ) {

                        window.alert(
                            "Write something in the note first."
                        );

                        return;

                    }


                    const updated =
                        getJSON(
                            STORAGE.notes,
                            []
                        );


                    updated.push({

                        id:
                            uid(
                                "note"
                            ),

                        course,

                        title:
                            title ||
                            "Study Note",

                        body,

                        date:
                            todayString(),

                        createdAt:
                            Date.now()

                    });


                    saveJSON(
                        STORAGE.notes,
                        updated
                    );


                    renderNotes();

                    renderCommandSection();

                }
            );


        modalBody
            .querySelectorAll(
                "[data-delete-note]"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            const updated =
                                getJSON(
                                    STORAGE.notes,
                                    []
                                )
                                    .filter(
                                        note =>
                                            note.id !==
                                            button.dataset
                                                .deleteNote
                                    );


                            saveJSON(
                                STORAGE.notes,
                                updated
                            );


                            renderNotes();

                            renderCommandSection();

                        }
                    );

                }
            );

    }


    // ========================================================================
    // FLASHCARDS
    // ========================================================================

    let flashcardSession = [];

    let flashcardIndex = 0;

    let flashcardRevealed = false;


    function renderFlashcards() {

        modalTitle.textContent =
            "My Flashcards";


        const cards =
            getJSON(
                STORAGE.flashcards,
                []
            );


        modalBody.innerHTML = `

            <div class="tools-section">

                <div class="tools-section-header">

                    <h3>
                        Create Flashcard
                    </h3>

                </div>


                <div class="tools-form-grid">

                    <div class="tools-field">

                        <label>
                            Course
                        </label>

                        <select id="flash-course">

                            ${
                                COURSES.map(
                                    course => `

                                        <option value="${course.id}">
                                            ${course.icon}
                                            ${course.name}
                                        </option>

                                    `
                                ).join("")
                            }

                            <option value="general">
                                General
                            </option>

                        </select>

                    </div>


                    <div class="tools-field">

                        <label>
                            Tag
                        </label>

                        <input
                            id="flash-tag"
                            type="text"
                            maxlength="40"
                            placeholder="Example: heart"
                        >

                    </div>


                    <div class="tools-field full">

                        <label>
                            Front / Question
                        </label>

                        <textarea
                            id="flash-front"
                            placeholder="What do you want to recall?"
                        ></textarea>

                    </div>


                    <div class="tools-field full">

                        <label>
                            Back / Answer
                        </label>

                        <textarea
                            id="flash-back"
                            placeholder="Write the answer or explanation."
                        ></textarea>

                    </div>

                </div>


                <div
                    style="
                        margin-top:12px;
                        display:flex;
                        justify-content:flex-end;
                        gap:10px;
                        flex-wrap:wrap;
                    "
                >

                    ${
                        cards.length
                            ? `

                                <button
                                    id="study-flashcards"
                                    class="tools-button success"
                                >
                                    🧠 Study ${cards.length} Cards
                                </button>

                            `
                            : ""
                    }

                    <button
                        id="save-flashcard"
                        class="tools-button primary"
                    >
                        Add Flashcard
                    </button>

                </div>

            </div>


            <div class="tools-section">

                <div class="tools-section-header">

                    <h3>
                        Flashcard Library
                    </h3>

                    <span class="tools-pill">
                        ${cards.length}
                        cards
                    </span>

                </div>


                <div class="tools-list">

                    ${
                        cards.length
                            ? cards
                                .slice()
                                .reverse()
                                .map(
                                    card => {

                                        const course =
                                            COURSE_MAP[
                                                card.course
                                            ];


                                        return `

                                            <div class="tools-list-item">

                                                <div class="tools-list-item-top">

                                                    <div>

                                                        <h4>
                                                            ${
                                                                escapeHTML(
                                                                    card.front
                                                                )
                                                            }
                                                        </h4>

                                                        <div class="tools-meta">

                                                            <span class="tools-pill">

                                                                ${
                                                                    course
                                                                        ? `${course.icon} ${course.name}`
                                                                        : "General"
                                                                }

                                                            </span>

                                                            ${
                                                                card.tag
                                                                    ? `

                                                                        <span class="tools-pill">
                                                                            #${escapeHTML(card.tag)}
                                                                        </span>

                                                                    `
                                                                    : ""
                                                            }

                                                        </div>

                                                    </div>

                                                    <button
                                                        class="tools-button danger"
                                                        data-delete-flashcard="${card.id}"
                                                    >
                                                        Delete
                                                    </button>

                                                </div>

                                                <p
                                                    style="
                                                        margin-top:12px;
                                                        font-weight:700;
                                                    "
                                                >
                                                    Answer:
                                                    ${
                                                        escapeHTML(
                                                            card.back
                                                        )
                                                    }
                                                </p>

                                            </div>

                                        `;

                                    }
                                )
                                .join("")
                            : `

                                <div class="tools-empty">

                                    No personal flashcards yet.

                                </div>

                            `
                    }

                </div>

            </div>

        `;


        document
            .getElementById(
                "save-flashcard"
            )
            .addEventListener(
                "click",
                function () {

                    const course =
                        document
                            .getElementById(
                                "flash-course"
                            )
                            .value;


                    const tag =
                        document
                            .getElementById(
                                "flash-tag"
                            )
                            .value
                            .trim();


                    const front =
                        document
                            .getElementById(
                                "flash-front"
                            )
                            .value
                            .trim();


                    const back =
                        document
                            .getElementById(
                                "flash-back"
                            )
                            .value
                            .trim();


                    if (
                        !front ||
                        !back
                    ) {

                        window.alert(
                            "Add both the front and back of the flashcard."
                        );

                        return;

                    }


                    const updated =
                        getJSON(
                            STORAGE.flashcards,
                            []
                        );


                    updated.push({

                        id:
                            uid(
                                "flash"
                            ),

                        course,

                        tag,

                        front,

                        back,

                        date:
                            todayString(),

                        createdAt:
                            Date.now()

                    });


                    saveJSON(
                        STORAGE.flashcards,
                        updated
                    );


                    renderFlashcards();

                    renderCommandSection();

                }
            );


        const study =
            document.getElementById(
                "study-flashcards"
            );


        if (
            study
        ) {

            study.addEventListener(
                "click",
                startFlashcardSession
            );

        }


        modalBody
            .querySelectorAll(
                "[data-delete-flashcard]"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            const updated =
                                getJSON(
                                    STORAGE.flashcards,
                                    []
                                )
                                    .filter(
                                        card =>
                                            card.id !==
                                            button.dataset
                                                .deleteFlashcard
                                    );


                            saveJSON(
                                STORAGE.flashcards,
                                updated
                            );


                            renderFlashcards();

                            renderCommandSection();

                        }
                    );

                }
            );

    }


    function startFlashcardSession() {

        flashcardSession =
            shuffle(
                getJSON(
                    STORAGE.flashcards,
                    []
                )
            );


        if (
            !flashcardSession.length
        ) {

            return;

        }


        flashcardIndex =
            0;


        flashcardRevealed =
            false;


        renderFlashcardStudy();

    }


    function renderFlashcardStudy() {

        const card =
            flashcardSession[
                flashcardIndex
            ];


        const course =
            COURSE_MAP[
                card.course
            ];


        modalTitle.textContent =
            "Flashcard Study Mode";


        modalBody.innerHTML = `

            <div class="tools-meta">

                <span class="tools-pill">

                    Card
                    ${flashcardIndex + 1}
                    of
                    ${flashcardSession.length}

                </span>

                <span class="tools-pill">

                    ${
                        course
                            ? `${course.icon} ${course.name}`
                            : "General"
                    }

                </span>

                ${
                    card.tag
                        ? `

                            <span class="tools-pill">
                                #${escapeHTML(card.tag)}
                            </span>

                        `
                        : ""
                }

            </div>


            <div
                class="flashcard-study-area"
                style="margin-top:16px;"
            >

                <div class="tools-label">
                    ${
                        flashcardRevealed
                            ? "ANSWER"
                            : "QUESTION"
                    }
                </div>

                <h2>
                    ${
                        escapeHTML(
                            flashcardRevealed
                                ? card.back
                                : card.front
                        )
                    }
                </h2>

                ${
                    flashcardRevealed
                        ? `

                            <div class="flashcard-answer">

                                <strong>
                                    Question:
                                </strong>

                                ${
                                    escapeHTML(
                                        card.front
                                    )
                                }

                            </div>

                        `
                        : ""
                }

            </div>


            <div class="flashcard-controls">

                <button
                    id="flashcard-library"
                    class="tools-button"
                >
                    ← Library
                </button>


                ${
                    flashcardRevealed
                        ? `

                            <button
                                id="flashcard-again"
                                class="tools-button danger"
                            >
                                Again
                            </button>

                            <button
                                id="flashcard-knew"
                                class="tools-button success"
                            >
                                I Knew It ✓
                            </button>

                        `
                        : `

                            <button
                                id="flashcard-reveal"
                                class="tools-button primary"
                            >
                                Reveal Answer
                            </button>

                        `
                }

            </div>

        `;


        document
            .getElementById(
                "flashcard-library"
            )
            .addEventListener(
                "click",
                renderFlashcards
            );


        const reveal =
            document.getElementById(
                "flashcard-reveal"
            );


        if (
            reveal
        ) {

            reveal.addEventListener(
                "click",
                function () {

                    flashcardRevealed =
                        true;


                    renderFlashcardStudy();

                }
            );

        }


        const again =
            document.getElementById(
                "flashcard-again"
            );


        if (
            again
        ) {

            again.addEventListener(
                "click",
                function () {

                    const current =
                        flashcardSession.splice(
                            flashcardIndex,
                            1
                        )[0];


                    flashcardSession.push(
                        current
                    );


                    if (
                        flashcardIndex >=
                        flashcardSession.length
                    ) {

                        flashcardIndex =
                            0;

                    }


                    flashcardRevealed =
                        false;


                    renderFlashcardStudy();

                }
            );

        }


        const knew =
            document.getElementById(
                "flashcard-knew"
            );


        if (
            knew
        ) {

            knew.addEventListener(
                "click",
                function () {

                    if (
                        flashcardIndex <
                        flashcardSession.length -
                        1
                    ) {

                        flashcardIndex++;

                        flashcardRevealed =
                            false;


                        renderFlashcardStudy();

                    } else {

                        modalBody.innerHTML = `

                            <div
                                class="tools-empty"
                                style="padding:45px 20px;"
                            >

                                <div
                                    style="
                                        font-size:46px;
                                        margin-bottom:12px;
                                    "
                                >
                                    🧠
                                </div>

                                <h2>
                                    Flashcard Round Complete
                                </h2>

                                <p>

                                    You reached the end
                                    of this randomized deck.

                                </p>

                                <button
                                    id="flashcards-again"
                                    class="tools-button primary"
                                    style="margin-top:15px;"
                                >
                                    Study Again
                                </button>

                            </div>

                        `;


                        document
                            .getElementById(
                                "flashcards-again"
                            )
                            .addEventListener(
                                "click",
                                startFlashcardSession
                            );

                    }

                }
            );

        }

    }


    // ========================================================================
    // EXAM COUNTDOWN
    // ========================================================================

    function renderExams() {

        modalTitle.textContent =
            "Exam Countdown";


        const exams =
            getJSON(
                STORAGE.exams,
                []
            )
                .slice()
                .sort(
                    (
                        a,
                        b
                    ) =>
                        a.date
                            .localeCompare(
                                b.date
                            )
                );


        modalBody.innerHTML = `

            <div class="tools-section">

                <div class="tools-section-header">

                    <h3>
                        Add Upcoming Exam
                    </h3>

                </div>


                <div class="tools-form-grid">

                    <div class="tools-field">

                        <label>
                            Exam Name
                        </label>

                        <input
                            id="exam-name"
                            type="text"
                            maxlength="80"
                            placeholder="Example: A&P II Exam 2"
                        >

                    </div>


                    <div class="tools-field">

                        <label>
                            Course
                        </label>

                        <select id="exam-course">

                            ${
                                COURSES.map(
                                    course => `

                                        <option value="${course.id}">
                                            ${course.icon}
                                            ${course.name}
                                        </option>

                                    `
                                ).join("")
                            }

                        </select>

                    </div>


                    <div class="tools-field">

                        <label>
                            Exam Date
                        </label>

                        <input
                            id="exam-date"
                            type="date"
                            min="${todayString()}"
                        >

                    </div>

                </div>


                <div
                    style="
                        text-align:right;
                        margin-top:12px;
                    "
                >

                    <button
                        id="save-exam"
                        class="tools-button primary"
                    >
                        Add Countdown
                    </button>

                </div>

            </div>


            <div class="tools-section">

                <div class="tools-section-header">

                    <h3>
                        Upcoming Exams
                    </h3>

                </div>


                ${
                    exams.length
                        ? `

                            <div class="countdown-grid">

                                ${
                                    exams.map(
                                        exam => {

                                            const course =
                                                COURSE_MAP[
                                                    exam.course
                                                ];


                                            const days =
                                                daysBetween(
                                                    todayString(),
                                                    exam.date
                                                );


                                            return `

                                                <div class="countdown-card">

                                                    <span class="tools-pill">

                                                        ${
                                                            course
                                                                ? `${course.icon} ${course.name}`
                                                                : "Exam"
                                                        }

                                                    </span>

                                                    <h3>
                                                        ${
                                                            escapeHTML(
                                                                exam.name
                                                            )
                                                        }
                                                    </h3>

                                                    <div class="countdown-number">

                                                        ${
                                                            days < 0
                                                                ? "Past"
                                                                : days === 0
                                                                    ? "Today"
                                                                    : days
                                                        }

                                                    </div>

                                                    ${
                                                        days > 0
                                                            ? `

                                                                <div
                                                                    style="
                                                                        font-size:11px;
                                                                        font-weight:800;
                                                                        color:#667085;
                                                                    "
                                                                >
                                                                    DAYS REMAINING
                                                                </div>

                                                            `
                                                            : ""
                                                    }

                                                    <p
                                                        style="
                                                            color:#667085;
                                                            font-size:12px;
                                                        "
                                                    >
                                                        ${formatDate(exam.date)}
                                                    </p>

                                                    <button
                                                        class="tools-button danger"
                                                        data-delete-exam="${exam.id}"
                                                    >
                                                        Remove
                                                    </button>

                                                </div>

                                            `;

                                        }
                                    ).join("")
                                }

                            </div>

                        `
                        : `

                            <div class="tools-empty">
                                No exams added yet.
                            </div>

                        `
                }

            </div>

        `;


        document
            .getElementById(
                "save-exam"
            )
            .addEventListener(
                "click",
                function () {

                    const name =
                        document
                            .getElementById(
                                "exam-name"
                            )
                            .value
                            .trim();


                    const course =
                        document
                            .getElementById(
                                "exam-course"
                            )
                            .value;


                    const date =
                        document
                            .getElementById(
                                "exam-date"
                            )
                            .value;


                    if (
                        !name ||
                        !date
                    ) {

                        window.alert(
                            "Add the exam name and date."
                        );

                        return;

                    }


                    const updated =
                        getJSON(
                            STORAGE.exams,
                            []
                        );


                    updated.push({

                        id:
                            uid(
                                "exam"
                            ),

                        name,

                        course,

                        date,

                        createdAt:
                            Date.now()

                    });


                    saveJSON(
                        STORAGE.exams,
                        updated
                    );


                    renderExams();

                    renderCommandSection();

                }
            );


        modalBody
            .querySelectorAll(
                "[data-delete-exam]"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            saveJSON(

                                STORAGE.exams,

                                getJSON(
                                    STORAGE.exams,
                                    []
                                )
                                    .filter(
                                        exam =>
                                            exam.id !==
                                            button.dataset
                                                .deleteExam
                                    )

                            );


                            renderExams();

                            renderCommandSection();

                        }
                    );

                }
            );

    }


    // ========================================================================
    // WEAK AREA CENTER
    // ========================================================================

    function renderWeakAreas() {

        modalTitle.textContent =
            "Unified Weak Areas";


        const weak =
            getUnifiedWeakData();


        const rows =
            COURSES
                .map(
                    course => ({
                        ...course,
                        weak:
                            weak.byCourse[
                                course.id
                            ] || 0
                    })
                )
                .sort(
                    (
                        a,
                        b
                    ) =>
                        b.weak -
                        a.weak
                );


        modalBody.innerHTML = `

            <div class="tools-stats-grid">

                <div class="tools-stat">

                    <strong>
                        ${weak.total}
                    </strong>

                    <span>
                        SAVED WEAK QUESTIONS
                    </span>

                </div>

                <div class="tools-stat">

                    <strong>

                        ${
                            rows.filter(
                                item =>
                                    item.weak >
                                    0
                            ).length
                        }

                    </strong>

                    <span>
                        COURSES WITH WEAK AREAS
                    </span>

                </div>

            </div>


            <div class="tools-section">

                <div class="tools-section-header">

                    <div>

                        <h3>
                            Where to Focus
                        </h3>

                    </div>

                </div>


                ${
                    weak.total
                        ? `

                            <div class="weak-course-grid">

                                ${
                                    rows.map(
                                        course => `

                                            <div class="weak-course-card">

                                                <div
                                                    style="
                                                        font-size:24px;
                                                    "
                                                >
                                                    ${course.icon}
                                                </div>

                                                <h4>
                                                    ${course.name}
                                                </h4>

                                                <strong>
                                                    ${course.weak}
                                                </strong>

                                                <span
                                                    style="
                                                        font-size:11px;
                                                        color:#667085;
                                                    "
                                                >
                                                    saved weak items
                                                </span>

                                                <button
                                                    class="tools-button ${
                                                        course.weak
                                                            ? "primary"
                                                            : ""
                                                    }"
                                                    data-open-course="${course.id}"
                                                    style="
                                                        width:100%;
                                                        margin-top:12px;
                                                    "
                                                >
                                                    Open Course →
                                                </button>

                                            </div>

                                        `
                                    ).join("")
                                }

                            </div>

                        `
                        : `

                            <div class="tools-empty">

                                <div
                                    style="
                                        font-size:40px;
                                        margin-bottom:10px;
                                    "
                                >
                                    🎯
                                </div>

                                <h3>
                                    No weak areas saved yet
                                </h3>

                                <p>

                                    Complete quizzes and practice
                                    questions. Missed items will
                                    appear here automatically.

                                </p>

                            </div>

                        `
                }

            </div>


            <div class="tools-section">

                <div class="study-plan-summary">

                    <strong>
                        Smart Rule
                    </strong>

                    <p
                        style="
                            margin-bottom:0;
                            color:#475467;
                            line-height:1.6;
                        "
                    >

                        If one course has substantially
                        more weak items than the others,
                        spend your first study block there.
                        Fixing recurring mistakes usually
                        gives a better return than rereading
                        material you already know.

                    </p>

                </div>

            </div>

        `;


        modalBody
            .querySelectorAll(
                "[data-open-course]"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            closeOverlay();


                            const card =
                                document.querySelector(
                                    `.course-card[data-course="${button.dataset.openCourse}"]`
                                );


                            if (
                                card
                            ) {

                                card.click();

                            }

                        }
                    );

                }
            );

    }


    // ========================================================================
    // DAILY STUDY PLAN
    // ========================================================================

    function getStudyPriorityCourses() {

        const analytics =
            getAnalytics();


        return COURSES
            .map(
                course => {

                    const progress =
                        analytics.progress[
                            course.id
                        ];


                    const weak =
                        analytics.weak.byCourse[
                            course.id
                        ] || 0;


                    const score =
                        (
                            100 -
                            progress
                        ) +
                        Math.min(
                            100,
                            weak *
                            8
                        );


                    return {
                        ...course,
                        progress,
                        weak,
                        priorityScore:
                            score
                    };

                }
            )
            .sort(
                (
                    a,
                    b
                ) =>
                    b.priorityScore -
                    a.priorityScore
            );

    }


    function generateDailyPlan(
        totalMinutes
    ) {

        const priorities =
            getStudyPriorityCourses();


        const exams =
            getJSON(
                STORAGE.exams,
                []
            )
                .filter(
                    exam => {

                        const days =
                            daysBetween(
                                todayString(),
                                exam.date
                            );


                        return (
                            days >= 0 &&
                            days <= 21
                        );

                    }
                )
                .sort(
                    (
                        a,
                        b
                    ) =>
                        a.date.localeCompare(
                            b.date
                        )
                );


        const examBoost = {};


        exams.forEach(
            function (
                exam
            ) {

                examBoost[
                    exam.course
                ] =
                    (
                        examBoost[
                            exam.course
                        ] ||
                        0
                    ) +
                    Math.max(
                        10,
                        30 -
                        daysBetween(
                            todayString(),
                            exam.date
                        )
                    );

            }
        );


        priorities.forEach(
            function (
                item
            ) {

                item.priorityScore +=
                    examBoost[
                        item.id
                    ] || 0;

            }
        );


        priorities.sort(
            (
                a,
                b
            ) =>
                b.priorityScore -
                a.priorityScore
        );


        let sessionCount;


        if (
            totalMinutes <=
            45
        ) {

            sessionCount = 2;

        } else if (
            totalMinutes <=
            90
        ) {

            sessionCount = 3;

        } else {

            sessionCount = 4;

        }


        sessionCount =
            Math.min(
                sessionCount,
                priorities.length
            );


        const selected =
            priorities.slice(
                0,
                sessionCount
            );


        const base =
            Math.floor(
                totalMinutes /
                sessionCount
            );


        let remaining =
            totalMinutes -
            base *
            sessionCount;


        const sessions =
            selected.map(
                function (
                    course,
                    index
                ) {

                    let minutes =
                        base;


                    if (
                        remaining >
                        0
                    ) {

                        minutes++;

                        remaining--;

                    }


                    let focus =
                        "Learn and review the next incomplete topic.";


                    if (
                        course.weak >=
                        5
                    ) {

                        focus =
                            "Start with weak-area questions, then review the concepts behind every miss.";

                    } else if (
                        course.progress >=
                        75
                    ) {

                        focus =
                            "Use active recall and mixed practice instead of passive rereading.";

                    }


                    if (
                        index ===
                        selected.length -
                        1 &&
                        totalMinutes >=
                        60
                    ) {

                        focus +=
                            " Finish with 5 minutes of recall without notes.";

                    }


                    return {

                        id:
                            uid(
                                "session"
                            ),

                        course:
                            course.id,

                        minutes,

                        focus,

                        completed:
                            false

                    };

                }
            );


        const plan = {

            date:
                todayString(),

            totalMinutes,

            sessions,

            createdAt:
                Date.now()

        };


        saveJSON(
            STORAGE.plan,
            plan
        );


        return plan;

    }


    function renderPlanner() {

        modalTitle.textContent =
            "Daily Study Plan";


        let plan =
            getJSON(
                STORAGE.plan,
                null
            );


        if (
            plan &&
            plan.date !==
            todayString()
        ) {

            plan = null;

        }


        modalBody.innerHTML = `

            <div class="tools-section">

                <div class="tools-section-header">

                    <div>

                        <h3>
                            Build Today's Plan
                        </h3>

                    </div>

                </div>


                <div class="tools-form-grid">

                    <div class="tools-field">

                        <label>
                            How much time do you have today?
                        </label>

                        <select id="planner-minutes">

                            <option value="30">
                                30 minutes
                            </option>

                            <option value="45">
                                45 minutes
                            </option>

                            <option
                                value="60"
                                selected
                            >
                                1 hour
                            </option>

                            <option value="90">
                                1.5 hours
                            </option>

                            <option value="120">
                                2 hours
                            </option>

                            <option value="180">
                                3 hours
                            </option>

                        </select>

                    </div>

                </div>


                <div
                    style="
                        margin-top:12px;
                    "
                >

                    <button
                        id="generate-plan"
                        class="tools-button primary"
                    >
                        Generate Smart Plan
                    </button>

                </div>

            </div>


            <div class="tools-section">

                <div class="tools-section-header">

                    <h3>
                        Today's Schedule
                    </h3>

                    ${
                        plan
                            ? `

                                <span class="tools-pill">
                                    ${plan.totalMinutes}
                                    minutes
                                </span>

                            `
                            : ""
                    }

                </div>

                <div id="daily-plan-content">

                    ${
                        plan
                            ? renderPlanHTML(
                                plan
                            )
                            : `

                                <div class="tools-empty">

                                    Generate today's study plan.
                                    The planner prioritizes weak areas,
                                    incomplete courses and upcoming exams.

                                </div>

                            `
                    }

                </div>

            </div>

        `;


        document
            .getElementById(
                "generate-plan"
            )
            .addEventListener(
                "click",
                function () {

                    const minutes =
                        Number(
                            document
                                .getElementById(
                                    "planner-minutes"
                                )
                                .value
                        );


                    generateDailyPlan(
                        minutes
                    );


                    renderPlanner();

                    renderCommandSection();

                }
            );


        bindPlanButtons();

    }


    function renderPlanHTML(
        plan
    ) {

        const complete =
            plan.sessions.filter(
                session =>
                    session.completed
            ).length;


        return `

            <div class="study-plan-summary">

                <strong>

                    ${
                        complete ===
                        plan.sessions.length
                            ? "✅ Today's plan complete"
                            : `${complete} of ${plan.sessions.length} sessions complete`
                    }

                </strong>

                <p
                    style="
                        margin-bottom:0;
                        color:#475467;
                    "
                >

                    ${
                        complete ===
                        plan.sessions.length
                            ? "You finished the study blocks you planned for today."
                            : "Work through these sessions in order. Use active recall and practice before rereading."
                    }

                </p>

            </div>


            ${
                plan.sessions.map(
                    function (
                        session,
                        index
                    ) {

                        const course =
                            COURSE_MAP[
                                session.course
                            ];


                        return `

                            <div class="study-plan-session">

                                <div class="study-plan-minutes">

                                    ${session.minutes}

                                    <small>
                                        MIN
                                    </small>

                                </div>

                                <div>

                                    <h4>

                                        ${index + 1}.
                                        ${
                                            course
                                                ? `${course.icon} ${course.name}`
                                                : "Study Session"
                                        }

                                        ${
                                            session.completed
                                                ? " ✓"
                                                : ""
                                        }

                                    </h4>

                                    <p>
                                        ${escapeHTML(session.focus)}
                                    </p>

                                </div>

                                <button
                                    class="tools-button ${
                                        session.completed
                                            ? "success"
                                            : "primary"
                                    }"
                                    data-plan-session="${session.id}"
                                >

                                    ${
                                        session.completed
                                            ? "Completed ✓"
                                            : "Mark Done"
                                    }

                                </button>

                            </div>

                        `;

                    }
                ).join("")
            }

        `;

    }


    function bindPlanButtons() {

        modalBody
            .querySelectorAll(
                "[data-plan-session]"
            )
            .forEach(
                function (
                    button
                ) {

                    button.addEventListener(
                        "click",
                        function () {

                            const plan =
                                getJSON(
                                    STORAGE.plan,
                                    null
                                );


                            if (
                                !plan
                            ) {

                                return;

                            }


                            const session =
                                plan.sessions.find(
                                    item =>
                                        item.id ===
                                        button.dataset
                                            .planSession
                                );


                            if (
                                session
                            ) {

                                session.completed =
                                    !session.completed;

                            }


                            saveJSON(
                                STORAGE.plan,
                                plan
                            );


                            renderPlanner();

                            renderCommandSection();

                        }
                    );

                }
            );

    }


    // ========================================================================
    // ANALYTICS
    // ========================================================================

    function renderAnalytics() {

        modalTitle.textContent =
            "Progress Analytics";


        const analytics =
            getAnalytics();


        const courseRows =
            COURSES.map(
                function (
                    course
                ) {

                    const progress =
                        analytics.progress[
                            course.id
                        ];


                    return `

                        <div class="analytics-course-row">

                            <div>
                                ${course.icon}
                                ${course.name}
                            </div>

                            <div class="analytics-bar">

                                <div
                                    style="width:${progress}%"
                                ></div>

                            </div>

                            <strong>
                                ${progress}%
                            </strong>

                        </div>

                    `;

                }
            )
            .join("");


        const bestCourses =
            COURSES
                .map(
                    course => ({
                        ...course,
                        progress:
                            analytics.progress[
                                course.id
                            ]
                    })
                )
                .sort(
                    (
                        a,
                        b
                    ) =>
                        b.progress -
                        a.progress
                );


        modalBody.innerHTML = `

            <div class="tools-stats-grid">

                <div class="tools-stat">

                    <strong>
                        ${analytics.overall}%
                    </strong>

                    <span>
                        OVERALL PROGRESS
                    </span>

                </div>

                <div class="tools-stat">

                    <strong>
                        ${analytics.mastered}
                    </strong>

                    <span>
                        MASTERED ITEMS
                    </span>

                </div>

                <div class="tools-stat">

                    <strong>
                        ${analytics.questions}
                    </strong>

                    <span>
                        QUESTIONS ANSWERED
                    </span>

                </div>

                <div class="tools-stat">

                    <strong>
                        ${analytics.weak.total}
                    </strong>

                    <span>
                        WEAK ITEMS
                    </span>

                </div>

                <div class="tools-stat">

                    <strong>
                        ${analytics.streak.current}
                    </strong>

                    <span>
                        CURRENT STREAK
                    </span>

                </div>

                <div class="tools-stat">

                    <strong>
                        ${analytics.streak.longest}
                    </strong>

                    <span>
                        LONGEST STREAK
                    </span>

                </div>

            </div>


            <div class="tools-section">

                <div class="tools-section-header">

                    <h3>
                        Course Progress
                    </h3>

                </div>

                ${courseRows}

            </div>


            <div class="tools-section">

                <div class="study-plan-summary">

                    <strong>
                        Recommended Focus
                    </strong>

                    <p
                        style="
                            margin-bottom:0;
                            color:#475467;
                            line-height:1.65;
                        "
                    >

                        Your lowest-progress course
                        currently appears to be

                        <strong>
                            ${
                                analytics.lowestCourse
                                    ? `${analytics.lowestCourse.icon} ${analytics.lowestCourse.name}`
                                    : "your next incomplete course"
                            }.
                        </strong>

                        Balance course completion
                        with weak-question repair.
                        Once a subject reaches strong
                        mastery, spend more time
                        retrieving and applying information
                        than rereading it.

                    </p>

                </div>

            </div>


            <div class="tools-section">

                <div class="tools-section-header">

                    <h3>
                        Course Ranking
                    </h3>

                </div>

                <div class="tools-list">

                    ${
                        bestCourses.map(
                            (
                                course,
                                index
                            ) => `

                                <div class="tools-list-item">

                                    <strong>
                                        #${index + 1}
                                        ${course.icon}
                                        ${course.name}
                                    </strong>

                                    <span
                                        style="
                                            float:right;
                                            font-weight:900;
                                        "
                                    >
                                        ${course.progress}%
                                    </span>

                                </div>

                            `
                        ).join("")
                    }

                </div>

            </div>

        `;

    }


    // ========================================================================
    // BACKUP / EXPORT / IMPORT
    // ========================================================================

    function collectBackup() {

        const data = {};


        for (
            let i = 0;
            i < localStorage.length;
            i++
        ) {

            const key =
                localStorage.key(
                    i
                );


            if (
                !key
            ) {

                continue;

            }


            if (
                key.startsWith(
                    "nsh"
                ) ||
                key.startsWith(
                    "nursingStudyHub"
                )
            ) {

                data[
                    key
                ] =
                    localStorage.getItem(
                        key
                    );

            }

        }


        return {

            app:
                "Nursing Study Hub",

            version:
                1,

            created:
                new Date()
                    .toISOString(),

            data

        };

    }


    function renderBackup(
        message = "",
        type = "success"
    ) {

        modalTitle.textContent =
            "Backup & Restore";


        const backup =
            collectBackup();


        const keyCount =
            Object.keys(
                backup.data
            ).length;


        modalBody.innerHTML = `

            ${
                message
                    ? `

                        <div
                            class="${
                                type === "success"
                                    ? "tools-success-message"
                                    : "tools-error-message"
                            }"
                        >
                            ${escapeHTML(message)}
                        </div>

                    `
                    : ""
            }


            <div class="tools-stats-grid">

                <div class="tools-stat">

                    <strong>
                        ${keyCount}
                    </strong>

                    <span>
                        SAVED DATA RECORDS
                    </span>

                </div>

                <div class="tools-stat">

                    <strong>
                        💾
                    </strong>

                    <span>
                        LOCAL BROWSER STORAGE
                    </span>

                </div>

            </div>


            <div class="tools-section">

                <div class="tools-section-header">

                    <h3>
                        Export Backup
                    </h3>

                </div>

                <p
                    style="
                        color:#667085;
                        line-height:1.65;
                    "
                >

                    Export your course progress,
                    quiz history, weak areas,
                    notes, flashcards,
                    TEAS statistics,
                    exam countdowns and study tools
                    into one JSON backup file.

                </p>

                <button
                    id="export-study-data"
                    class="tools-button primary"
                >
                    Download Backup File
                </button>

            </div>


            <div class="tools-section">

                <div class="tools-section-header">

                    <h3>
                        Restore Backup
                    </h3>

                </div>

                <div class="backup-warning">

                    Restoring a backup can replace
                    Nursing Study Hub data currently
                    stored in this browser.
                    Export your current data first
                    if you want to preserve it.

                </div>

                <div class="tools-field">

                    <label>
                        Choose Nursing Study Hub backup file
                    </label>

                    <input
                        id="import-study-data"
                        type="file"
                        accept=".json,application/json"
                    >

                </div>

                <button
                    id="restore-study-data"
                    class="tools-button"
                    style="margin-top:12px;"
                >
                    Restore Selected Backup
                </button>

            </div>


            <div class="tools-section">

                <div class="tools-section-header">

                    <h3>
                        Reset Study Tools Only
                    </h3>

                </div>

                <p
                    style="
                        color:#667085;
                        line-height:1.6;
                    "
                >

                    This removes personal notes,
                    flashcards, exam countdowns
                    and daily plans.

                    It does not intentionally erase
                    your course quiz progress.

                </p>

                <button
                    id="reset-study-tools"
                    class="tools-button danger"
                >
                    Reset Study Tools
                </button>

            </div>

        `;


        document
            .getElementById(
                "export-study-data"
            )
            .addEventListener(
                "click",
                function () {

                    const date =
                        todayString();


                    downloadText(

                        `NursingStudyHub_Backup_${date}.json`,

                        JSON.stringify(
                            collectBackup(),
                            null,
                            2
                        )

                    );

                }
            );


        document
            .getElementById(
                "restore-study-data"
            )
            .addEventListener(
                "click",
                function () {

                    const input =
                        document.getElementById(
                            "import-study-data"
                        );


                    const file =
                        input.files[
                            0
                        ];


                    if (
                        !file
                    ) {

                        renderBackup(
                            "Choose a backup file first.",
                            "error"
                        );

                        return;

                    }


                    const reader =
                        new FileReader();


                    reader.onload =
                        function () {

                            try {

                                const backup =
                                    JSON.parse(
                                        reader.result
                                    );


                                if (
                                    !backup ||
                                    backup.app !==
                                    "Nursing Study Hub" ||
                                    !backup.data ||
                                    typeof backup.data !==
                                    "object"
                                ) {

                                    throw new Error(
                                        "Invalid backup"
                                    );

                                }


                                const approved =
                                    window.confirm(
                                        "Restore this Nursing Study Hub backup? Existing saved study data may be replaced."
                                    );


                                if (
                                    !approved
                                ) {

                                    return;

                                }


                                Object.entries(
                                    backup.data
                                )
                                    .forEach(
                                        function (
                                            [
                                                key,
                                                value
                                            ]
                                        ) {

                                            if (
                                                key.startsWith(
                                                    "nsh"
                                                ) ||
                                                key.startsWith(
                                                    "nursingStudyHub"
                                                )
                                            ) {

                                                localStorage.setItem(
                                                    key,
                                                    value
                                                );

                                            }

                                        }
                                    );


                                renderBackup(
                                    "Backup restored successfully. Refresh the page to reload all course progress.",
                                    "success"
                                );


                                renderCommandSection();

                            } catch {

                                renderBackup(
                                    "That file does not appear to be a valid Nursing Study Hub backup.",
                                    "error"
                                );

                            }

                        };


                    reader.readAsText(
                        file
                    );

                }
            );


        document
            .getElementById(
                "reset-study-tools"
            )
            .addEventListener(
                "click",
                function () {

                    const confirmed =
                        window.confirm(
                            "Delete your notes, flashcards, exam countdowns and daily study plan?"
                        );


                    if (
                        !confirmed
                    ) {

                        return;

                    }


                    [
                        STORAGE.notes,
                        STORAGE.flashcards,
                        STORAGE.exams,
                        STORAGE.plan,
                        STORAGE.settings
                    ]
                        .forEach(
                            key =>
                                localStorage.removeItem(
                                    key
                                )
                        );


                    renderBackup(
                        "Study tools were reset. Course learning progress was left in place.",
                        "success"
                    );


                    renderCommandSection();

                }
            );

    }


    // ========================================================================
    // EXISTING DASHBOARD WEAK-AREA BUTTON
    // Redirect it to the new unified center.
    // ========================================================================

    const existingWeakButton =
        document.getElementById(
            "weak-area-button"
        );


    if (
        existingWeakButton
    ) {

        existingWeakButton.addEventListener(

            "click",

            function (
                event
            ) {

                event.preventDefault();

                event.stopPropagation();

                event.stopImmediatePropagation();

                openTool(
                    "weak"
                );

            },

            true

        );

    }


    // ========================================================================
    // KEEP DASHBOARD COUNTS SYNCED
    // ========================================================================

    function syncDashboard() {

        const analytics =
            getAnalytics();


        const questions =
            document.getElementById(
                "questions-answered"
            );


        if (
            questions
        ) {

            questions.textContent =
                analytics.questions;

        }


        const mastered =
            document.getElementById(
                "topics-mastered"
            );


        if (
            mastered
        ) {

            const existing =
                Number(
                    mastered.textContent
                ) || 0;


            mastered.textContent =
                Math.max(
                    existing,
                    analytics.mastered
                );

        }


        const streak =
            document.getElementById(
                "study-streak"
            );


        if (
            streak
        ) {

            streak.textContent =
                analytics.streak.current;

        }

    }


    // ========================================================================
    // WATCH FOR COURSE PROGRESS CHANGES
    // ========================================================================

    let refreshTimer =
        null;


    const progressObserver =
        new MutationObserver(
            function () {

                clearTimeout(
                    refreshTimer
                );


                refreshTimer =
                    setTimeout(
                        function () {

                            syncDashboard();

                            if (
                                overlay
                                    .classList
                                    .contains(
                                        "hidden"
                                    )
                            ) {

                                renderCommandSection();

                            }

                        },
                        250
                    );

            }
        );


    document
        .querySelectorAll(
            ".course-card .course-progress"
        )
        .forEach(
            function (
                element
            ) {

                progressObserver.observe(
                    element,
                    {
                        childList: true,
                        subtree: true,
                        characterData: true
                    }
                );

            }
        );


    // ========================================================================
    // INITIALIZE
    // ========================================================================

    syncDashboard();

    renderCommandSection();

});