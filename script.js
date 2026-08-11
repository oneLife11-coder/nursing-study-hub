// ============================================================
// NURSING STUDY HUB
// COMPLETE A&P I SYSTEM
// ALL 26 TOPICS
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================================
    // DOM
    // ========================================================

    const welcomeScreen =
        document.getElementById("welcome-screen");

    const app =
        document.getElementById("app");

    const usernameInput =
        document.getElementById("username");

    const startButton =
        document.getElementById("start-button");

    const welcomeName =
        document.getElementById("welcome-name");

    const dashboardGreeting =
        document.getElementById("dashboard-greeting");

    const themeButton =
        document.getElementById("theme-button");

    const dashboardIntro =
        document.querySelector(".dashboard-intro");

    const progressOverview =
        document.querySelector(".progress-overview");

    const coursesSection =
        document.querySelector(".courses-section");

    const weakAreasSection =
        document.querySelector(".weak-areas-section");

    const footer =
        document.querySelector("footer");

    const overallProgress =
        document.getElementById("overall-progress");

    const overallProgressBar =
        document.getElementById("overall-progress-bar");

    const topicsMastered =
        document.getElementById("topics-mastered");

    const questionsAnswered =
        document.getElementById("questions-answered");

    const studyStreak =
        document.getElementById("study-streak");

    const weakAreaButton =
        document.getElementById("weak-area-button");

    const anatomy1Page =
        document.getElementById("anatomy1-page");

    const anatomy1Card =
        document.querySelector(
            '.course-card[data-course="anatomy1"]'
        );

    const anatomy1ProgressText =
        document.getElementById("anatomy1-progress");

    const anatomy1ProgressBar =
        document.getElementById("anatomy1-progress-bar");

    const backToDashboardButton =
        document.getElementById("back-to-dashboard");

    const anatomy1PracticeButton =
        document.getElementById("anatomy1-practice-button");

    const anatomy1ExamButton =
        document.getElementById("anatomy1-exam-button");


    // ========================================================
    // CONSTANTS
    // ========================================================

    const COURSE_TOPIC_COUNT = 26;

    const TOPIC_QUIZ_LENGTH = 10;

    const PRACTICE_LENGTH = 25;

    const FINAL_EXAM_LENGTH = 50;

    const PASS_PERCENT = 90;


    const STORAGE = {

        username:
            "nursingStudyHubUsername",

        theme:
            "nursingStudyHubTheme",

        questionsAnswered:
            "nursingStudyHubQuestionsAnswered",

        studyDates:
            "nursingStudyHubStudyDates"

    };


    // ========================================================
    // HTML HELPERS
    // ========================================================

    function paragraphs(items) {

        return items
            .map(
                text => `<p>${text}</p>`
            )
            .join("");

    }


    function cardGrid(items) {

        return `
            <div class="definition-grid">
                ${
                    items.map(
                        item => `
                            <div class="definition-card">

                                <h3>
                                    ${item[0]}
                                </h3>

                                <p>
                                    ${item[1]}
                                </p>

                            </div>
                        `
                    ).join("")
                }
            </div>
        `;

    }


    function studyGrid(items) {

        return `
            <div class="study-list">
                ${
                    items.map(
                        item => `
                            <div>

                                <strong>
                                    ${item[0]}
                                </strong>

                                <p>
                                    ${item[1]}
                                </p>

                            </div>
                        `
                    ).join("")
                }
            </div>
        `;

    }


    function importantBox(
        title,
        text
    ) {

        return `
            <div class="important-box">

                <p class="important-title">
                    ${title}
                </p>

                <p>
                    ${text}
                </p>

            </div>
        `;

    }


    function memoryBox(
        title,
        text
    ) {

        return `
            <div class="memory-tip">

                <span>
                    🧠
                </span>

                <div>

                    <strong>
                        ${title}
                    </strong>

                    <p>
                        ${text}
                    </p>

                </div>

            </div>
        `;

    }


    function clinicalBox(
        title,
        body,
        answer = ""
    ) {

        return `
            <div class="clinical-case">

                <div class="clinical-case-header">

                    <span>
                        🩺
                    </span>

                    <div>

                        <p>
                            CLINICAL APPLICATION
                        </p>

                        <h3>
                            ${title}
                        </h3>

                    </div>

                </div>

                <p>
                    ${body}
                </p>

                ${
                    answer
                        ? `
                            <div class="clinical-question">

                                <p class="clinical-answer">
                                    ${answer}
                                </p>

                            </div>
                        `
                        : ""
                }

            </div>
        `;

    }


    function flow(items) {

        return `
            <div class="organization-flow">

                ${
                    items.map(
                        (item, index) => `
                            <div class="organization-item">

                                <span class="organization-number">
                                    ${index + 1}
                                </span>

                                <div>

                                    <h3>
                                        ${item[0]}
                                    </h3>

                                    <p>
                                        ${item[1]}
                                    </p>

                                </div>

                            </div>

                            ${
                                index < items.length - 1
                                    ? `
                                        <div class="organization-arrow">
                                            ↓
                                        </div>
                                    `
                                    : ""
                            }
                        `
                    ).join("")
                }

            </div>
        `;

    }


    function summaryList(items) {

        return `
            <div class="summary-checklist">

                ${
                    items.map(
                        item => `
                            <div>
                                ✓ ${item}
                            </div>
                        `
                    ).join("")
                }

            </div>
        `;

    }


    // ========================================================
    // TOPIC DATA
    // ========================================================

    const AP1_TOPICS = [


        // ====================================================
        // 1
        // ====================================================

        {
            id: "intro-ap",

            number: 1,

            title:
                "Introduction to Anatomy & Physiology",

            shortTitle:
                "Introduction to A&P",

            description:
                "Learn the foundational language of anatomy and physiology, levels of organization, life processes and organ-system relationships.",

            facts: [

                {
                    term: "Anatomy",
                    definition:
                        "The study of body structures and the relationships among those structures."
                },

                {
                    term: "Physiology",
                    definition:
                        "The study of how body structures function."
                },

                {
                    term: "Gross Anatomy",
                    definition:
                        "Study of structures visible without a microscope."
                },

                {
                    term: "Regional Anatomy",
                    definition:
                        "Study of all structures within one specific body region."
                },

                {
                    term: "Systemic Anatomy",
                    definition:
                        "Study of structures belonging to one organ system."
                },

                {
                    term: "Histology",
                    definition:
                        "Microscopic study of tissues."
                },

                {
                    term: "Cytology",
                    definition:
                        "Study of cells."
                },

                {
                    term: "Cell",
                    definition:
                        "The basic structural and functional unit of life."
                },

                {
                    term: "Tissue",
                    definition:
                        "A group of similar cells and associated materials working together."
                },

                {
                    term: "Organ",
                    definition:
                        "A structure composed of two or more tissue types performing specific functions."
                },

                {
                    term: "Organ System",
                    definition:
                        "A group of organs working together to perform major body functions."
                },

                {
                    term: "Metabolism",
                    definition:
                        "The sum of all chemical reactions occurring in the body."
                },

                {
                    term: "Differentiation",
                    definition:
                        "The process by which unspecialized cells become specialized."
                },

                {
                    term: "Responsiveness",
                    definition:
                        "The ability to detect and respond to internal or external changes."
                }

            ],

            sections: [

                {
                    label: "BODY ORGANIZATION",

                    title:
                        "Levels of Structural Organization",

                    html:
                        flow([
                            [
                                "Chemical",
                                "Atoms and molecules form the chemical foundation of the body."
                            ],
                            [
                                "Cellular",
                                "Molecules combine to form cells."
                            ],
                            [
                                "Tissue",
                                "Similar cells work together to perform specialized functions."
                            ],
                            [
                                "Organ",
                                "Multiple tissues combine into structures such as the heart."
                            ],
                            [
                                "Organ System",
                                "Multiple organs cooperate to perform major functions."
                            ],
                            [
                                "Organism",
                                "All organ systems together form the complete human."
                            ]
                        ]) +

                        importantBox(
                            "🎯 Exam Order",
                            "<strong>Chemical → Cellular → Tissue → Organ → Organ System → Organism</strong>"
                        )
                },

                {
                    label: "ORGAN SYSTEMS",

                    title:
                        "The 11 Major Organ Systems",

                    html:
                        cardGrid([
                            [
                                "Integumentary",
                                "Protection, sensation and temperature regulation."
                            ],
                            [
                                "Skeletal",
                                "Support, protection, mineral storage and blood-cell formation."
                            ],
                            [
                                "Muscular",
                                "Movement, posture and heat production."
                            ],
                            [
                                "Nervous",
                                "Rapid communication, sensation and control."
                            ],
                            [
                                "Endocrine",
                                "Hormonal regulation of growth, metabolism and reproduction."
                            ],
                            [
                                "Cardiovascular",
                                "Transportation of blood, gases, nutrients, hormones and wastes."
                            ],
                            [
                                "Lymphatic / Immune",
                                "Fluid return and defense against pathogens."
                            ],
                            [
                                "Respiratory",
                                "Exchange of oxygen and carbon dioxide."
                            ],
                            [
                                "Digestive",
                                "Breakdown and absorption of nutrients."
                            ],
                            [
                                "Urinary",
                                "Waste removal and regulation of fluid, electrolytes and pH."
                            ],
                            [
                                "Reproductive",
                                "Production of gametes, hormones and offspring."
                            ]
                        ])
                },

                {
                    label: "CLINICAL THINKING",

                    title:
                        "Structure and Function Work Together",

                    html:
                        paragraphs([
                            "A central principle of anatomy and physiology is that <strong>structure influences function</strong>.",
                            "The thin walls of pulmonary alveoli make rapid gas exchange possible. The thick muscular wall of the left ventricle allows it to generate pressure for systemic circulation."
                        ]) +

                        clinicalBox(
                            "Hypoxemia",
                            "A patient with severe respiratory dysfunction develops an oxygen saturation of 86% and becomes confused.",
                            "Reduced gas exchange can decrease oxygen delivery to brain tissue. This shows how respiratory and cardiovascular physiology affect neurological function."
                        )
                }

            ],

            summary: [
                "Anatomy studies structure.",
                "Physiology studies function.",
                "Structure and function are closely related.",
                "The cell is the basic structural and functional unit of life.",
                "Know the six structural levels in order.",
                "Know the 11 major organ systems and their general functions.",
                "Body systems are interdependent."
            ]

        },


        // ====================================================
        // 2
        // ====================================================

        {
            id: "anatomical-language",

            number: 2,

            title:
                "Anatomical Terminology",

            shortTitle:
                "Anatomical Terminology",

            description:
                "Master anatomical position, directional terminology, planes, cavities and abdominopelvic landmarks.",

            facts: [

                {
                    term: "Anatomical Position",
                    definition:
                        "Standing erect, facing forward, arms at the sides, palms forward and feet directed forward."
                },

                {
                    term: "Superior",
                    definition:
                        "Toward the head or upper part of the body."
                },

                {
                    term: "Inferior",
                    definition:
                        "Away from the head or toward the lower part of the body."
                },

                {
                    term: "Anterior",
                    definition:
                        "Toward the front of the body."
                },

                {
                    term: "Posterior",
                    definition:
                        "Toward the back of the body."
                },

                {
                    term: "Medial",
                    definition:
                        "Toward the midline."
                },

                {
                    term: "Lateral",
                    definition:
                        "Away from the midline."
                },

                {
                    term: "Proximal",
                    definition:
                        "Closer to the point of attachment or origin."
                },

                {
                    term: "Distal",
                    definition:
                        "Farther from the point of attachment or origin."
                },

                {
                    term: "Superficial",
                    definition:
                        "Closer to the body surface."
                },

                {
                    term: "Deep",
                    definition:
                        "Farther from the body surface."
                },

                {
                    term: "Ipsilateral",
                    definition:
                        "Located on the same side of the body."
                },

                {
                    term: "Contralateral",
                    definition:
                        "Located on opposite sides of the body."
                },

                {
                    term: "Sagittal Plane",
                    definition:
                        "Divides the body into right and left portions."
                },

                {
                    term: "Midsagittal Plane",
                    definition:
                        "Divides the body into equal right and left halves."
                },

                {
                    term: "Frontal Plane",
                    definition:
                        "Divides the body into anterior and posterior portions."
                },

                {
                    term: "Transverse Plane",
                    definition:
                        "Divides the body into superior and inferior portions."
                },

                {
                    term: "Parietal Serosa",
                    definition:
                        "Serous membrane layer lining a cavity wall."
                },

                {
                    term: "Visceral Serosa",
                    definition:
                        "Serous membrane layer covering an organ."
                }

            ],

            sections: [

                {
                    label: "BODY PLANES",

                    title:
                        "How the Body is Sectioned",

                    html:
                        studyGrid([
                            [
                                "Sagittal",
                                "Right and left portions."
                            ],
                            [
                                "Midsagittal",
                                "Equal right and left halves."
                            ],
                            [
                                "Parasagittal",
                                "Unequal right and left portions."
                            ],
                            [
                                "Frontal / Coronal",
                                "Anterior and posterior portions."
                            ],
                            [
                                "Transverse",
                                "Superior and inferior portions."
                            ],
                            [
                                "Oblique",
                                "Section made at an angle."
                            ]
                        ]) +

                        memoryBox(
                            "Plane Shortcut",
                            "Sagittal = sides. Frontal = front/back. Transverse = top/bottom."
                        )
                },

                {
                    label: "BODY CAVITIES",

                    title:
                        "Dorsal and Ventral Cavities",

                    html:
                        cardGrid([
                            [
                                "Cranial Cavity",
                                "Contains the brain."
                            ],
                            [
                                "Vertebral Cavity",
                                "Contains the spinal cord."
                            ],
                            [
                                "Thoracic Cavity",
                                "Contains the pleural cavities and mediastinum."
                            ],
                            [
                                "Pleural Cavities",
                                "Surround the lungs."
                            ],
                            [
                                "Pericardial Cavity",
                                "Surrounds the heart."
                            ],
                            [
                                "Abdominopelvic Cavity",
                                "Contains abdominal and pelvic organs."
                            ]
                        ]) +

                        importantBox(
                            "⭐ Diaphragm",
                            "The diaphragm separates the thoracic cavity from the abdominopelvic cavity."
                        )
                },

                {
                    label: "CLINICAL LANDMARKS",

                    title:
                        "Abdominopelvic Quadrants and Regions",

                    html:
                        studyGrid([
                            [
                                "RUQ",
                                "Includes much of the liver and gallbladder."
                            ],
                            [
                                "LUQ",
                                "Includes stomach and spleen."
                            ],
                            [
                                "RLQ",
                                "Includes cecum and appendix."
                            ],
                            [
                                "LLQ",
                                "Includes descending and sigmoid colon."
                            ]
                        ]) +

                        importantBox(
                            "Nine Regions",
                            "Top: right hypochondriac, epigastric, left hypochondriac. Middle: right lumbar, umbilical, left lumbar. Bottom: right iliac, hypogastric, left iliac."
                        ) +

                        clinicalBox(
                            "Right Lower Quadrant Pain",
                            "A patient has increasing RLQ abdominal pain.",
                            "The appendix commonly lies in the RLQ, so appendicitis is one possible cause that may need evaluation."
                        )
                }

            ],

            summary: [
                "Anatomical right and left refer to the patient's sides.",
                "Know superior/inferior, anterior/posterior and medial/lateral.",
                "Know proximal/distal and superficial/deep.",
                "Know sagittal, frontal and transverse planes.",
                "Know the major dorsal and ventral cavities.",
                "Know RUQ, LUQ, RLQ and LLQ.",
                "Parietal serosa lines the cavity wall; visceral serosa covers the organ."
            ]

        },


        // ====================================================
        // 3
        // ====================================================

        {
            id: "homeostasis",

            number: 3,

            title:
                "Homeostasis",

            shortTitle:
                "Homeostasis",

            description:
                "Understand dynamic equilibrium, feedback systems, receptors, control centers, effectors and homeostatic imbalance.",

            facts: [

                {
                    term: "Homeostasis",
                    definition:
                        "Maintenance of a relatively stable internal environment."
                },

                {
                    term: "Dynamic Equilibrium",
                    definition:
                        "A regulated state in which variables fluctuate within an acceptable range."
                },

                {
                    term: "Set Point",
                    definition:
                        "A target value or target range for a regulated variable."
                },

                {
                    term: "Receptor",
                    definition:
                        "Detects a change in a controlled variable."
                },

                {
                    term: "Control Center",
                    definition:
                        "Receives information, compares it with the desired range and determines a response."
                },

                {
                    term: "Effector",
                    definition:
                        "Carries out the response directed by the control center."
                },

                {
                    term: "Negative Feedback",
                    definition:
                        "A response that opposes or reduces the original change."
                },

                {
                    term: "Positive Feedback",
                    definition:
                        "A response that amplifies the original change until an endpoint occurs."
                },

                {
                    term: "Insulin",
                    definition:
                        "Hormone that promotes a decrease in elevated blood glucose."
                },

                {
                    term: "Glucagon",
                    definition:
                        "Hormone that promotes an increase in low blood glucose."
                },

                {
                    term: "Vasodilation",
                    definition:
                        "Widening of blood vessels, which can increase heat loss at the skin."
                },

                {
                    term: "Vasoconstriction",
                    definition:
                        "Narrowing of blood vessels, which can decrease heat loss at the skin."
                },

                {
                    term: "Shivering",
                    definition:
                        "Rapid skeletal muscle contractions that generate heat."
                },

                {
                    term: "Homeostatic Imbalance",
                    definition:
                        "Failure to adequately maintain a regulated physiological variable."
                }

            ],

            sections: [

                {
                    label: "FEEDBACK LOOP",

                    title:
                        "Receptor → Control Center → Effector",

                    html:
                        flow([
                            [
                                "Stimulus",
                                "A regulated variable changes."
                            ],
                            [
                                "Receptor",
                                "The change is detected."
                            ],
                            [
                                "Control Center",
                                "Information is evaluated and a response is selected."
                            ],
                            [
                                "Effector",
                                "A muscle, gland or organ carries out the response."
                            ],
                            [
                                "Response",
                                "The regulated variable changes."
                            ]
                        ])
                },

                {
                    label: "NEGATIVE FEEDBACK",

                    title:
                        "The Most Common Homeostatic Mechanism",

                    html:
                        paragraphs([
                            "Negative feedback <strong>opposes the initial change</strong> and pushes the regulated variable toward its normal range.",
                            "Examples include regulation of body temperature, blood glucose and many aspects of blood pressure."
                        ]) +

                        clinicalBox(
                            "Body Temperature Rises",
                            "Thermoreceptors detect increased temperature. The hypothalamus coordinates sweating and cutaneous vasodilation.",
                            "Sweating and increased skin blood flow promote heat loss, opposing the original temperature increase."
                        ) +

                        memoryBox(
                            "Negative = Negates",
                            "Negative feedback reduces the original disturbance."
                        )
                },

                {
                    label: "POSITIVE FEEDBACK",

                    title:
                        "Amplifying a Process",

                    html:
                        paragraphs([
                            "Positive feedback <strong>increases the original change</strong> rather than reversing it.",
                            "It is useful when a physiological event must proceed rapidly to completion."
                        ]) +

                        studyGrid([
                            [
                                "Childbirth",
                                "Cervical stretch promotes oxytocin release, stronger contractions and additional cervical stretch."
                            ],
                            [
                                "Blood Clotting",
                                "Activated platelets recruit and activate more platelets until the damaged vessel is sealed."
                            ]
                        ]) +

                        importantBox(
                            "🎯 Exam Strategy",
                            "If the response reverses the stimulus, think negative feedback. If it amplifies the stimulus, think positive feedback."
                        )
                },

                {
                    label: "CLINICAL",

                    title:
                        "Homeostatic Imbalance",

                    html:
                        cardGrid([
                            [
                                "Diabetes Mellitus",
                                "Impaired regulation of blood glucose."
                            ],
                            [
                                "Dehydration",
                                "Loss of water disrupts fluid homeostasis."
                            ],
                            [
                                "Electrolyte Disorders",
                                "Abnormal sodium, potassium or other ion levels can disrupt cell function."
                            ],
                            [
                                "Acid-Base Disorders",
                                "Blood pH moves outside its tightly regulated range."
                            ],
                            [
                                "Shock",
                                "Tissue perfusion becomes inadequate for cellular needs."
                            ],
                            [
                                "Temperature Disorders",
                                "Hypothermia or hyperthermia overwhelms normal regulation."
                            ]
                        ])
                }

            ],

            summary: [
                "Homeostasis is dynamic, not perfectly constant.",
                "Know stimulus → receptor → control center → effector → response.",
                "Negative feedback opposes a change.",
                "Positive feedback amplifies a change.",
                "Insulin lowers elevated glucose; glucagon raises low glucose.",
                "Sweating and vasodilation promote heat loss.",
                "Shivering and vasoconstriction help conserve or generate heat.",
                "Disease often involves homeostatic imbalance."
            ]

        },


        // ====================================================
        // 4
        // ====================================================

        {
            id: "atoms-elements",

            number: 4,

            title:
                "Atoms, Elements & Molecules",

            shortTitle:
                "Atoms & Elements",

            description:
                "Learn atomic structure, elements, isotopes, ions and the chemical language needed for human physiology.",

            facts: [

                {
                    term: "Atom",
                    definition:
                        "The smallest unit of an element that retains that element's chemical properties."
                },

                {
                    term: "Element",
                    definition:
                        "A pure substance made of only one type of atom."
                },

                {
                    term: "Proton",
                    definition:
                        "Positively charged subatomic particle located in the nucleus."
                },

                {
                    term: "Neutron",
                    definition:
                        "Electrically neutral subatomic particle located in the nucleus."
                },

                {
                    term: "Electron",
                    definition:
                        "Negatively charged subatomic particle occupying regions around the nucleus."
                },

                {
                    term: "Atomic Number",
                    definition:
                        "The number of protons in an atom."
                },

                {
                    term: "Mass Number",
                    definition:
                        "The total number of protons plus neutrons."
                },

                {
                    term: "Isotope",
                    definition:
                        "Atoms of the same element with different numbers of neutrons."
                },

                {
                    term: "Ion",
                    definition:
                        "An atom or molecule with an electrical charge from gaining or losing electrons."
                },

                {
                    term: "Cation",
                    definition:
                        "A positively charged ion."
                },

                {
                    term: "Anion",
                    definition:
                        "A negatively charged ion."
                },

                {
                    term: "Molecule",
                    definition:
                        "Two or more atoms chemically joined."
                },

                {
                    term: "Compound",
                    definition:
                        "A substance containing atoms of two or more different elements."
                },

                {
                    term: "Electrolyte",
                    definition:
                        "A substance that dissociates into ions in water and can conduct electrical current."
                }

            ],

            sections: [

                {
                    label: "ATOMIC STRUCTURE",

                    title:
                        "Inside the Atom",

                    html:
                        studyGrid([
                            [
                                "Nucleus",
                                "Contains protons and neutrons and holds nearly all of the atom's mass."
                            ],
                            [
                                "Electron Cloud",
                                "Contains electrons involved in chemical bonding."
                            ],
                            [
                                "Neutral Atom",
                                "Has equal numbers of protons and electrons."
                            ],
                            [
                                "Valence Electrons",
                                "Outer-shell electrons that strongly influence chemical behavior."
                            ]
                        ])
                },

                {
                    label: "IONS",

                    title:
                        "Why Charged Particles Matter",

                    html:
                        paragraphs([
                            "When an atom loses electrons, it becomes positively charged. When it gains electrons, it becomes negatively charged.",
                            "Physiology depends heavily on ions such as sodium, potassium, calcium and chloride."
                        ]) +

                        clinicalBox(
                            "Potassium",
                            "Potassium is an important intracellular cation involved in membrane potentials.",
                            "Large disturbances in potassium concentration can interfere with normal nerve and cardiac electrical activity."
                        )
                },

                {
                    label: "ISOTOPES",

                    title:
                        "Same Element, Different Neutrons",

                    html:
                        paragraphs([
                            "Isotopes contain the same number of protons but different numbers of neutrons.",
                            "Some isotopes are stable while others are radioactive and may be useful in medicine or research."
                        ]) +

                        importantBox(
                            "🎯 Key Rule",
                            "Changing the number of protons changes the element. Changing the number of neutrons creates an isotope."
                        )
                }

            ],

            summary: [
                "Protons are positive, neutrons are neutral and electrons are negative.",
                "Atomic number equals the number of protons.",
                "Mass number equals protons plus neutrons.",
                "Isotopes differ in neutron number.",
                "Cations are positive; anions are negative.",
                "Electrolytes form ions in solution.",
                "Sodium, potassium, calcium and chloride are physiologically important ions."
            ]

        },


        // ====================================================
        // 5
        // ====================================================

        {
            id: "chemical-bonds",

            number: 5,

            title:
                "Chemical Bonds & Reactions",

            shortTitle:
                "Chemical Bonds",

            description:
                "Understand ionic, covalent and hydrogen bonding plus the major types of chemical reactions.",

            facts: [

                {
                    term: "Ionic Bond",
                    definition:
                        "Attraction between oppositely charged ions."
                },

                {
                    term: "Covalent Bond",
                    definition:
                        "Bond formed when atoms share electron pairs."
                },

                {
                    term: "Nonpolar Covalent Bond",
                    definition:
                        "Covalent bond with relatively equal sharing of electrons."
                },

                {
                    term: "Polar Covalent Bond",
                    definition:
                        "Covalent bond with unequal sharing of electrons."
                },

                {
                    term: "Hydrogen Bond",
                    definition:
                        "Weak attraction involving a partially positive hydrogen and another electronegative atom."
                },

                {
                    term: "Reactant",
                    definition:
                        "A substance present at the beginning of a chemical reaction."
                },

                {
                    term: "Product",
                    definition:
                        "A substance formed by a chemical reaction."
                },

                {
                    term: "Synthesis Reaction",
                    definition:
                        "Reaction in which smaller substances combine to form a larger product."
                },

                {
                    term: "Decomposition Reaction",
                    definition:
                        "Reaction in which a larger substance breaks into smaller products."
                },

                {
                    term: "Exchange Reaction",
                    definition:
                        "Reaction involving both decomposition and synthesis as components are exchanged."
                },

                {
                    term: "Reversible Reaction",
                    definition:
                        "Reaction that can proceed in either direction."
                },

                {
                    term: "Activation Energy",
                    definition:
                        "Minimum energy needed to initiate a chemical reaction."
                },

                {
                    term: "Catalyst",
                    definition:
                        "Substance that increases reaction rate without being permanently consumed."
                }

            ],

            sections: [

                {
                    label: "BONDING",

                    title:
                        "Why Atoms Bond",

                    html:
                        paragraphs([
                            "Atoms interact through their valence electrons. Bonding allows atoms to achieve more stable electron arrangements.",
                            "The type of bond influences the properties of the resulting molecule."
                        ]) +

                        studyGrid([
                            [
                                "Ionic",
                                "Electron transfer creates charged ions that attract one another."
                            ],
                            [
                                "Covalent",
                                "Atoms share electrons."
                            ],
                            [
                                "Hydrogen",
                                "Weak individually but important in water, proteins and DNA."
                            ]
                        ])
                },

                {
                    label: "REACTIONS",

                    title:
                        "Synthesis, Decomposition and Exchange",

                    html:
                        flow([
                            [
                                "Synthesis",
                                "A + B → AB"
                            ],
                            [
                                "Decomposition",
                                "AB → A + B"
                            ],
                            [
                                "Exchange",
                                "AB + CD → AD + CB"
                            ]
                        ]) +

                        importantBox(
                            "⚡ Energy",
                            "Many reactions require activation energy. Enzymes reduce activation energy and therefore speed reactions."
                        )
                },

                {
                    label: "PHYSIOLOGY",

                    title:
                        "Why Weak Bonds Matter",

                    html:
                        paragraphs([
                            "Hydrogen bonds help stabilize DNA and protein structure and contribute to many unique properties of water.",
                            "Weak interactions allow biological molecules to change shape and interact reversibly, which is essential to physiology."
                        ])
                }

            ],

            summary: [
                "Ionic bonds involve attraction between charged ions.",
                "Covalent bonds involve shared electrons.",
                "Polar covalent bonds share electrons unequally.",
                "Hydrogen bonds are weak but biologically important.",
                "Know synthesis, decomposition and exchange reactions.",
                "Activation energy is required to start reactions.",
                "Catalysts increase reaction rates."
            ]

        },


        // ====================================================
        // 6
        // ====================================================

        {
            id: "ph",

            number: 6,

            title:
                "Acids, Bases & pH",

            shortTitle:
                "Acids, Bases & pH",

            description:
                "Understand hydrogen ions, the pH scale, acids, bases, buffers and acid-base balance.",

            facts: [

                {
                    term: "Acid",
                    definition:
                        "A substance that increases hydrogen ion concentration in solution."
                },

                {
                    term: "Base",
                    definition:
                        "A substance that decreases hydrogen ion concentration or accepts hydrogen ions."
                },

                {
                    term: "pH",
                    definition:
                        "A logarithmic measure related to hydrogen ion concentration."
                },

                {
                    term: "Neutral pH",
                    definition:
                        "A pH of 7 at standard conditions."
                },

                {
                    term: "Acidic Solution",
                    definition:
                        "A solution with pH below 7."
                },

                {
                    term: "Basic Solution",
                    definition:
                        "A solution with pH above 7."
                },

                {
                    term: "Buffer",
                    definition:
                        "A system that resists large changes in pH."
                },

                {
                    term: "Hydrogen Ion",
                    definition:
                        "H+, a positively charged hydrogen ion involved in acid-base chemistry."
                },

                {
                    term: "Hydroxide Ion",
                    definition:
                        "OH−, an ion associated with basic solutions."
                },

                {
                    term: "Acidosis",
                    definition:
                        "A pathophysiological process that tends to lower body-fluid pH."
                },

                {
                    term: "Alkalosis",
                    definition:
                        "A pathophysiological process that tends to raise body-fluid pH."
                },

                {
                    term: "Bicarbonate Buffer",
                    definition:
                        "Major extracellular buffer system involving carbonic acid and bicarbonate."
                }

            ],

            sections: [

                {
                    label: "PH SCALE",

                    title:
                        "Understanding pH",

                    html:
                        paragraphs([
                            "The pH scale is logarithmic. A change of one pH unit represents a tenfold change in hydrogen ion concentration.",
                            "Lower pH corresponds to greater hydrogen ion concentration."
                        ]) +

                        studyGrid([
                            [
                                "pH < 7",
                                "Acidic."
                            ],
                            [
                                "pH = 7",
                                "Neutral."
                            ],
                            [
                                "pH > 7",
                                "Basic or alkaline."
                            ]
                        ])
                },

                {
                    label: "BUFFERS",

                    title:
                        "Resisting Sudden pH Change",

                    html:
                        paragraphs([
                            "Cells and enzymes function best within limited pH ranges.",
                            "Buffers temporarily bind or release hydrogen ions, reducing dramatic changes in pH."
                        ]) +

                        importantBox(
                            "⭐ High Yield",
                            "The bicarbonate system is a major extracellular buffer and works together with respiratory and renal regulation."
                        )
                },

                {
                    label: "CLINICAL",

                    title:
                        "Acid-Base Balance",

                    html:
                        clinicalBox(
                            "Why pH Matters",
                            "Abnormal pH can alter protein structure, enzyme activity, membrane function and cardiac or neurological activity.",
                            "The lungs regulate carbon dioxide and the kidneys regulate hydrogen ion and bicarbonate, making both systems important in acid-base balance."
                        )
                }

            ],

            summary: [
                "Acids increase hydrogen ion concentration.",
                "Bases reduce hydrogen ion concentration or accept H+.",
                "Lower pH means greater acidity.",
                "The pH scale is logarithmic.",
                "Buffers resist large pH changes.",
                "The bicarbonate system is an important extracellular buffer.",
                "The lungs and kidneys participate in acid-base regulation."
            ]

        },


        // ====================================================
        // 7
        // ====================================================

        {
            id: "biomolecules",

            number: 7,

            title:
                "Biological Molecules",

            shortTitle:
                "Biological Molecules",

            description:
                "Study carbohydrates, lipids, proteins, nucleic acids, enzymes and ATP.",

            facts: [

                {
                    term: "Carbohydrate",
                    definition:
                        "Organic molecule commonly used for energy and composed primarily of carbon, hydrogen and oxygen."
                },

                {
                    term: "Monosaccharide",
                    definition:
                        "A single sugar unit such as glucose."
                },

                {
                    term: "Glycogen",
                    definition:
                        "Storage form of glucose in animals."
                },

                {
                    term: "Lipid",
                    definition:
                        "Hydrophobic or largely nonpolar organic molecule including fats, phospholipids and steroids."
                },

                {
                    term: "Triglyceride",
                    definition:
                        "Lipid consisting of glycerol plus three fatty acids, important for energy storage."
                },

                {
                    term: "Phospholipid",
                    definition:
                        "Amphipathic lipid that is a major structural component of cell membranes."
                },

                {
                    term: "Steroid",
                    definition:
                        "Lipid characterized by four interconnected carbon rings."
                },

                {
                    term: "Protein",
                    definition:
                        "Polymer of amino acids with structural, transport, signaling, enzymatic and other functions."
                },

                {
                    term: "Amino Acid",
                    definition:
                        "Monomer used to build proteins."
                },

                {
                    term: "Enzyme",
                    definition:
                        "Biological catalyst that speeds a reaction by lowering activation energy."
                },

                {
                    term: "DNA",
                    definition:
                        "Nucleic acid that stores hereditary information."
                },

                {
                    term: "RNA",
                    definition:
                        "Nucleic acid involved in gene expression and protein synthesis."
                },

                {
                    term: "ATP",
                    definition:
                        "Adenosine triphosphate, the primary immediately usable energy currency of cells."
                }

            ],

            sections: [

                {
                    label: "ENERGY",

                    title:
                        "Carbohydrates and Lipids",

                    html:
                        studyGrid([
                            [
                                "Carbohydrates",
                                "Provide readily available fuel, especially glucose."
                            ],
                            [
                                "Glycogen",
                                "Stores glucose mainly in liver and skeletal muscle."
                            ],
                            [
                                "Triglycerides",
                                "Provide concentrated long-term energy storage."
                            ],
                            [
                                "Phospholipids",
                                "Form the structural basis of cell membranes."
                            ]
                        ])
                },

                {
                    label: "PROTEINS",

                    title:
                        "Amino Acids, Proteins and Enzymes",

                    html:
                        paragraphs([
                            "Protein function depends strongly on three-dimensional shape.",
                            "Changes in temperature, pH or chemical environment can disrupt protein shape and function."
                        ]) +

                        clinicalBox(
                            "Enzymes",
                            "Enzymes increase reaction rates by lowering activation energy.",
                            "Because enzymes are proteins, conditions that alter protein structure can impair enzyme activity."
                        )
                },

                {
                    label: "GENETICS & ENERGY",

                    title:
                        "DNA, RNA and ATP",

                    html:
                        cardGrid([
                            [
                                "DNA",
                                "Stores hereditary information."
                            ],
                            [
                                "RNA",
                                "Helps express genetic information and make proteins."
                            ],
                            [
                                "ATP",
                                "Transfers usable energy to cellular processes."
                            ]
                        ]) +

                        importantBox(
                            "⚡ ATP",
                            "ATP does not serve as a large long-term energy store. Cells continually regenerate ATP from other energy sources."
                        )
                }

            ],

            summary: [
                "Glucose is an important monosaccharide.",
                "Glycogen stores glucose in animals.",
                "Triglycerides store energy.",
                "Phospholipids are major membrane components.",
                "Proteins are made of amino acids.",
                "Enzymes lower activation energy.",
                "DNA stores genetic information.",
                "RNA participates in gene expression.",
                "ATP provides immediately usable cellular energy."
            ]

        },


        // ====================================================
        // 8
        // ====================================================

        {
            id: "cell-structure",

            number: 8,

            title:
                "Cell Structure & Organelles",

            shortTitle:
                "Cell Structure",

            description:
                "Learn the plasma membrane, nucleus, organelles, cytoskeleton and major structures of human cells.",

            facts: [

                {
                    term: "Plasma Membrane",
                    definition:
                        "Selective boundary surrounding the cell and controlling movement between intracellular and extracellular environments."
                },

                {
                    term: "Cytoplasm",
                    definition:
                        "Cell contents between the plasma membrane and nucleus, including cytosol and organelles."
                },

                {
                    term: "Nucleus",
                    definition:
                        "Organelle containing most cellular DNA and directing many cellular activities."
                },

                {
                    term: "Nucleolus",
                    definition:
                        "Nuclear region involved in ribosomal subunit production."
                },

                {
                    term: "Ribosome",
                    definition:
                        "Structure that synthesizes proteins."
                },

                {
                    term: "Rough ER",
                    definition:
                        "Endoplasmic reticulum with ribosomes involved in synthesis and processing of many proteins."
                },

                {
                    term: "Smooth ER",
                    definition:
                        "Endoplasmic reticulum involved in lipid synthesis, detoxification and calcium storage in specialized cells."
                },

                {
                    term: "Golgi Apparatus",
                    definition:
                        "Modifies, sorts and packages proteins and lipids."
                },

                {
                    term: "Mitochondrion",
                    definition:
                        "Organelle that generates most ATP through aerobic cellular respiration."
                },

                {
                    term: "Lysosome",
                    definition:
                        "Organelle containing digestive enzymes used to break down materials."
                },

                {
                    term: "Peroxisome",
                    definition:
                        "Organelle involved in oxidation reactions and detoxification of hydrogen peroxide."
                },

                {
                    term: "Cytoskeleton",
                    definition:
                        "Network of protein filaments supporting cell shape, transport and movement."
                },

                {
                    term: "Centrosome",
                    definition:
                        "Microtubule-organizing center important in cell division."
                },

                {
                    term: "Microvilli",
                    definition:
                        "Cell-surface projections that increase surface area for absorption."
                },

                {
                    term: "Cilia",
                    definition:
                        "Motile surface projections that can move substances across a cell surface."
                }

            ],

            sections: [

                {
                    label: "MEMBRANE",

                    title:
                        "The Cell Boundary",

                    html:
                        paragraphs([
                            "The plasma membrane is primarily a phospholipid bilayer containing proteins, cholesterol and carbohydrates.",
                            "Its selective permeability allows the cell to maintain an internal environment different from the extracellular fluid."
                        ]) +

                        importantBox(
                            "⭐ Structure-Function",
                            "The hydrophobic interior of the phospholipid bilayer restricts many charged or highly polar substances."
                        )
                },

                {
                    label: "ORGANELLES",

                    title:
                        "The Cellular Production System",

                    html:
                        flow([
                            [
                                "Nucleus",
                                "DNA contains instructions for cellular proteins."
                            ],
                            [
                                "Ribosomes",
                                "Translate messenger RNA into protein."
                            ],
                            [
                                "Rough ER",
                                "Processes many newly synthesized proteins."
                            ],
                            [
                                "Golgi",
                                "Modifies, sorts and packages products."
                            ],
                            [
                                "Vesicles",
                                "Transport materials to cellular destinations."
                            ]
                        ])
                },

                {
                    label: "LAB CONNECTION",

                    title:
                        "Recognizing Cell Structures",

                    html:
                        studyGrid([
                            [
                                "Nucleus",
                                "Often appears as a prominent central or eccentric structure in stained cells."
                            ],
                            [
                                "Microvilli",
                                "Associated with absorptive surfaces such as the small intestine."
                            ],
                            [
                                "Cilia",
                                "Associated with movement of material, such as mucus in portions of the respiratory tract."
                            ],
                            [
                                "Mitochondria",
                                "Especially numerous in cells with high ATP demands."
                            ]
                        ])
                }

            ],

            summary: [
                "The plasma membrane is selectively permeable.",
                "The nucleus contains most cellular DNA.",
                "Ribosomes make proteins.",
                "Rough ER and Golgi are important in protein processing.",
                "Smooth ER participates in lipid metabolism and other specialized functions.",
                "Mitochondria generate most aerobic ATP.",
                "Lysosomes digest materials.",
                "Microvilli increase surface area; cilia move substances."
            ]

        },


        // ====================================================
        // 9
        // ====================================================

        {
            id: "membrane-transport",

            number: 9,

            title:
                "Membrane Transport",

            shortTitle:
                "Membrane Transport",

            description:
                "Master diffusion, osmosis, tonicity, active transport, endocytosis and exocytosis.",

            facts: [

                {
                    term: "Diffusion",
                    definition:
                        "Net movement of particles from higher concentration toward lower concentration."
                },

                {
                    term: "Concentration Gradient",
                    definition:
                        "Difference in concentration of a substance between two regions."
                },

                {
                    term: "Simple Diffusion",
                    definition:
                        "Passive movement directly through a membrane without a transport protein."
                },

                {
                    term: "Facilitated Diffusion",
                    definition:
                        "Passive movement down a concentration gradient using membrane transport proteins."
                },

                {
                    term: "Osmosis",
                    definition:
                        "Net movement of water across a selectively permeable membrane."
                },

                {
                    term: "Isotonic Solution",
                    definition:
                        "Solution producing no net change in cell volume under the compared conditions."
                },

                {
                    term: "Hypotonic Solution",
                    definition:
                        "Solution with lower effective solute concentration than the cell, promoting water entry and cell swelling."
                },

                {
                    term: "Hypertonic Solution",
                    definition:
                        "Solution with higher effective solute concentration than the cell, promoting water loss and cell shrinkage."
                },

                {
                    term: "Active Transport",
                    definition:
                        "Movement requiring cellular energy, often moving substances against gradients."
                },

                {
                    term: "Sodium-Potassium Pump",
                    definition:
                        "ATP-dependent transporter moving sodium out of cells and potassium into cells."
                },

                {
                    term: "Endocytosis",
                    definition:
                        "Transport into a cell through vesicle formation from the plasma membrane."
                },

                {
                    term: "Exocytosis",
                    definition:
                        "Release of cellular material when vesicles fuse with the plasma membrane."
                }

            ],

            sections: [

                {
                    label: "PASSIVE TRANSPORT",

                    title:
                        "Movement Without Direct ATP Use",

                    html:
                        studyGrid([
                            [
                                "Simple Diffusion",
                                "Small nonpolar molecules may cross the lipid bilayer directly."
                            ],
                            [
                                "Facilitated Diffusion",
                                "Channels or carriers move substances down gradients."
                            ],
                            [
                                "Osmosis",
                                "Water moves according to osmotic gradients."
                            ]
                        ])
                },

                {
                    label: "TONICITY",

                    title:
                        "What Happens to Cell Volume",

                    html:
                        cardGrid([
                            [
                                "Isotonic",
                                "No major net water-driven change in cell volume."
                            ],
                            [
                                "Hypotonic",
                                "Water enters the cell; the cell tends to swell."
                            ],
                            [
                                "Hypertonic",
                                "Water leaves the cell; the cell tends to shrink."
                            ]
                        ]) +

                        memoryBox(
                            "Hypo = Swell",
                            "In a hypotonic extracellular solution, water tends to move into the cell."
                        )
                },

                {
                    label: "ACTIVE TRANSPORT",

                    title:
                        "Using Energy",

                    html:
                        paragraphs([
                            "Active transport allows cells to maintain gradients that would not persist through diffusion alone.",
                            "The sodium-potassium pump is especially important for membrane potentials and cell-volume regulation."
                        ]) +

                        clinicalBox(
                            "IV Fluids",
                            "Tonicity helps explain why the composition of intravenous fluids matters.",
                            "Large osmotic differences between extracellular fluid and cells can change cell volume."
                        )
                }

            ],

            summary: [
                "Diffusion moves particles down concentration gradients.",
                "Facilitated diffusion uses transport proteins but is passive.",
                "Osmosis is water movement across a selectively permeable membrane.",
                "Hypotonic solutions promote cell swelling.",
                "Hypertonic solutions promote cell shrinkage.",
                "Active transport requires energy.",
                "The sodium-potassium pump uses ATP.",
                "Endocytosis brings material in; exocytosis releases material."
            ]

        },


        // ====================================================
        // 10
        // ====================================================

        {
            id: "cell-division",

            number: 10,

            title:
                "Cell Cycle & Cell Division",

            shortTitle:
                "Cell Division",

            description:
                "Learn interphase, DNA replication, mitosis, cytokinesis, apoptosis and cell differentiation.",

            facts: [

                {
                    term: "Cell Cycle",
                    definition:
                        "Ordered sequence of events from one cell division to the next."
                },

                {
                    term: "Interphase",
                    definition:
                        "Period including G1, S and G2 during which the cell grows and prepares for division."
                },

                {
                    term: "G1 Phase",
                    definition:
                        "Interphase period of cell growth and normal metabolic activity before DNA replication."
                },

                {
                    term: "S Phase",
                    definition:
                        "Interphase period during which DNA is replicated."
                },

                {
                    term: "G2 Phase",
                    definition:
                        "Interphase period of further growth and preparation for mitosis."
                },

                {
                    term: "Mitosis",
                    definition:
                        "Division of the nucleus producing two genetically similar daughter nuclei."
                },

                {
                    term: "Prophase",
                    definition:
                        "Mitosis stage when chromosomes condense and the mitotic spindle develops."
                },

                {
                    term: "Metaphase",
                    definition:
                        "Mitosis stage when chromosomes align near the cell equator."
                },

                {
                    term: "Anaphase",
                    definition:
                        "Mitosis stage when sister chromatids separate toward opposite poles."
                },

                {
                    term: "Telophase",
                    definition:
                        "Mitosis stage when chromosomes reach poles and new nuclear envelopes form."
                },

                {
                    term: "Cytokinesis",
                    definition:
                        "Division of the cytoplasm into daughter cells."
                },

                {
                    term: "Apoptosis",
                    definition:
                        "Regulated programmed cell death."
                },

                {
                    term: "Differentiation",
                    definition:
                        "Process by which cells become structurally and functionally specialized."
                }

            ],

            sections: [

                {
                    label: "INTERPHASE",

                    title:
                        "Preparation Before Division",

                    html:
                        flow([
                            [
                                "G1",
                                "Cell grows and performs normal functions."
                            ],
                            [
                                "S",
                                "DNA replication occurs."
                            ],
                            [
                                "G2",
                                "Cell prepares for mitosis."
                            ]
                        ]) +

                        importantBox(
                            "🎯 Important",
                            "Interphase is highly active. It is not simply a resting period."
                        )
                },

                {
                    label: "MITOSIS",

                    title:
                        "PMAT",

                    html:
                        flow([
                            [
                                "Prophase",
                                "Chromosomes condense and spindle organization begins."
                            ],
                            [
                                "Metaphase",
                                "Chromosomes align at the metaphase plate."
                            ],
                            [
                                "Anaphase",
                                "Sister chromatids separate."
                            ],
                            [
                                "Telophase",
                                "Two nuclear regions reform."
                            ],
                            [
                                "Cytokinesis",
                                "The cytoplasm divides."
                            ]
                        ]) +

                        memoryBox(
                            "PMAT",
                            "Prophase → Metaphase → Anaphase → Telophase."
                        )
                },

                {
                    label: "CLINICAL",

                    title:
                        "Growth Control and Cancer",

                    html:
                        paragraphs([
                            "Normal cells use checkpoints to regulate progression through the cell cycle.",
                            "Cancer involves loss of normal controls over cell proliferation and survival."
                        ]) +

                        clinicalBox(
                            "Chemotherapy",
                            "Many anticancer therapies target rapidly dividing cells.",
                            "This helps explain why normal rapidly dividing tissues, such as hair follicles and gastrointestinal epithelium, may also be affected."
                        )
                }

            ],

            summary: [
                "Interphase includes G1, S and G2.",
                "DNA replication occurs during S phase.",
                "Know PMAT in order.",
                "Sister chromatids separate during anaphase.",
                "Cytokinesis divides the cytoplasm.",
                "Apoptosis is programmed cell death.",
                "Cell-cycle dysregulation is important in cancer."
            ]

        },


        // ====================================================
        // 11
        // ====================================================

        {
            id: "epithelial",

            number: 11,

            title:
                "Epithelial Tissue",

            shortTitle:
                "Epithelial Tissue",

            description:
                "Identify epithelial tissue types based on cell shape, number of layers, location and function.",

            facts: [

                {
                    term: "Epithelial Tissue",
                    definition:
                        "Tissue that covers surfaces, lines cavities and forms many glands."
                },

                {
                    term: "Simple Epithelium",
                    definition:
                        "Epithelium containing one cell layer."
                },

                {
                    term: "Stratified Epithelium",
                    definition:
                        "Epithelium containing multiple cell layers."
                },

                {
                    term: "Squamous Cell",
                    definition:
                        "Thin, flattened epithelial cell."
                },

                {
                    term: "Cuboidal Cell",
                    definition:
                        "Cube-shaped epithelial cell."
                },

                {
                    term: "Columnar Cell",
                    definition:
                        "Tall epithelial cell."
                },

                {
                    term: "Simple Squamous",
                    definition:
                        "Single layer of flat cells specialized for rapid diffusion and filtration."
                },

                {
                    term: "Simple Cuboidal",
                    definition:
                        "Single layer of cube-shaped cells often involved in secretion and absorption."
                },

                {
                    term: "Simple Columnar",
                    definition:
                        "Single layer of tall cells often involved in absorption and secretion."
                },

                {
                    term: "Pseudostratified Columnar",
                    definition:
                        "Single epithelial layer appearing multilayered because nuclei occur at different heights."
                },

                {
                    term: "Stratified Squamous",
                    definition:
                        "Multiple layers with flat surface cells, well suited for protection."
                },

                {
                    term: "Transitional Epithelium",
                    definition:
                        "Stratified epithelium specialized to stretch, especially in the urinary tract."
                },

                {
                    term: "Basement Membrane",
                    definition:
                        "Extracellular layer anchoring epithelium to underlying connective tissue."
                },

                {
                    term: "Avascular",
                    definition:
                        "Lacking blood vessels; epithelium receives nutrients by diffusion from nearby tissue."
                }

            ],

            sections: [

                {
                    label: "CLASSIFICATION",

                    title:
                        "Layer + Shape",

                    html:
                        importantBox(
                            "🎯 Identification Rule",
                            "Name an epithelium by the number of layers and the shape of cells at its apical surface."
                        ) +

                        studyGrid([
                            [
                                "Simple",
                                "One cell layer."
                            ],
                            [
                                "Stratified",
                                "Two or more layers."
                            ],
                            [
                                "Squamous",
                                "Flat cells."
                            ],
                            [
                                "Cuboidal",
                                "Cube-shaped cells."
                            ],
                            [
                                "Columnar",
                                "Tall cells."
                            ]
                        ])
                },

                {
                    label: "FUNCTION",

                    title:
                        "Match Structure to Function",

                    html:
                        cardGrid([
                            [
                                "Simple Squamous",
                                "Thin for diffusion; examples include alveoli and vessel endothelium."
                            ],
                            [
                                "Simple Cuboidal",
                                "Common in glands and kidney tubules."
                            ],
                            [
                                "Simple Columnar",
                                "Common in digestive tract; often supports absorption and secretion."
                            ],
                            [
                                "Pseudostratified Ciliated",
                                "Common in portions of the respiratory tract."
                            ],
                            [
                                "Stratified Squamous",
                                "Protects against abrasion."
                            ],
                            [
                                "Transitional",
                                "Allows urinary structures to stretch."
                            ]
                        ])
                },

                {
                    label: "LAB",

                    title:
                        "Histology Strategy",

                    html:
                        paragraphs([
                            "First identify the free or apical surface. Then count apparent layers. Finally classify the shape of cells at the surface.",
                            "Do not classify stratified epithelium using the deepest cells; use the cells at the apical surface."
                        ]) +

                        memoryBox(
                            "Three Questions",
                            "How many layers? What shape are the surface cells? What special features are present?"
                        )
                }

            ],

            summary: [
                "Epithelium covers, lines and forms glands.",
                "Simple means one layer; stratified means multiple layers.",
                "Know squamous, cuboidal and columnar shapes.",
                "Simple squamous supports diffusion.",
                "Stratified squamous supports protection.",
                "Transitional epithelium stretches.",
                "Epithelium is avascular.",
                "Use apical cell shape when naming stratified epithelium."
            ]

        },


        // ====================================================
        // 12
        // ====================================================

        {
            id: "connective",

            number: 12,

            title:
                "Connective Tissue",

            shortTitle:
                "Connective Tissue",

            description:
                "Learn connective tissue cells, fibers, matrix, cartilage, bone, blood and connective tissue proper.",

            facts: [

                {
                    term: "Connective Tissue",
                    definition:
                        "Tissue characterized by cells dispersed within an extracellular matrix."
                },

                {
                    term: "Extracellular Matrix",
                    definition:
                        "Material outside connective-tissue cells consisting of ground substance and protein fibers."
                },

                {
                    term: "Fibroblast",
                    definition:
                        "Common connective-tissue cell that produces fibers and ground-substance components."
                },

                {
                    term: "Collagen Fiber",
                    definition:
                        "Strong protein fiber providing tensile strength."
                },

                {
                    term: "Elastic Fiber",
                    definition:
                        "Protein fiber allowing stretch and recoil."
                },

                {
                    term: "Areolar Tissue",
                    definition:
                        "Loose connective tissue containing multiple fiber and cell types."
                },

                {
                    term: "Adipose Tissue",
                    definition:
                        "Connective tissue specialized for energy storage, insulation and cushioning."
                },

                {
                    term: "Dense Regular Connective Tissue",
                    definition:
                        "Connective tissue with parallel collagen fibers resisting tension mainly in one direction."
                },

                {
                    term: "Tendon",
                    definition:
                        "Dense regular connective tissue connecting muscle to bone."
                },

                {
                    term: "Ligament",
                    definition:
                        "Connective tissue structure connecting bone to bone."
                },

                {
                    term: "Cartilage",
                    definition:
                        "Supportive connective tissue containing chondrocytes in a firm matrix."
                },

                {
                    term: "Bone",
                    definition:
                        "Mineralized connective tissue providing support, protection and mineral storage."
                },

                {
                    term: "Blood",
                    definition:
                        "Fluid connective tissue composed of formed elements suspended in plasma."
                }

            ],

            sections: [

                {
                    label: "MATRIX",

                    title:
                        "What Makes Connective Tissue Different",

                    html:
                        paragraphs([
                            "Unlike epithelial tissue, connective tissue cells are often widely separated by extracellular matrix.",
                            "The composition of the matrix determines whether the tissue is flexible, strong, rigid or fluid."
                        ]) +

                        studyGrid([
                            [
                                "Collagen",
                                "High tensile strength."
                            ],
                            [
                                "Elastic Fibers",
                                "Stretch and recoil."
                            ],
                            [
                                "Ground Substance",
                                "Hydrated material occupying spaces between cells and fibers."
                            ]
                        ])
                },

                {
                    label: "TYPES",

                    title:
                        "Major Connective Tissues",

                    html:
                        cardGrid([
                            [
                                "Areolar",
                                "Loose packing, support and fluid reservoir."
                            ],
                            [
                                "Adipose",
                                "Energy storage and insulation."
                            ],
                            [
                                "Dense Regular",
                                "High tensile strength in one direction."
                            ],
                            [
                                "Cartilage",
                                "Flexible structural support."
                            ],
                            [
                                "Bone",
                                "Rigid mineralized support."
                            ],
                            [
                                "Blood",
                                "Transport in a fluid matrix."
                            ]
                        ])
                },

                {
                    label: "LAB",

                    title:
                        "Histology Clues",

                    html:
                        studyGrid([
                            [
                                "Adipose",
                                "Large clear-appearing adipocytes with nuclei pushed toward the edge."
                            ],
                            [
                                "Dense Regular",
                                "Parallel collagen bundles with elongated fibroblast nuclei."
                            ],
                            [
                                "Cartilage",
                                "Chondrocytes located in spaces called lacunae."
                            ],
                            [
                                "Bone",
                                "Mineralized matrix; compact bone may show osteons."
                            ],
                            [
                                "Blood",
                                "Cells suspended in fluid plasma rather than a solid matrix."
                            ]
                        ])
                }

            ],

            summary: [
                "Connective tissue contains abundant extracellular matrix.",
                "Fibroblasts produce matrix components.",
                "Collagen provides tensile strength.",
                "Elastic fibers stretch and recoil.",
                "Tendons connect muscle to bone.",
                "Ligaments connect bone to bone.",
                "Cartilage, bone and blood are connective tissues.",
                "Matrix composition determines tissue properties."
            ]

        },


        // ====================================================
        // 13
        // ====================================================

        {
            id: "muscle-nervous-tissue",

            number: 13,

            title:
                "Muscle & Nervous Tissue",

            shortTitle:
                "Muscle & Nervous Tissue",

            description:
                "Compare skeletal, cardiac and smooth muscle and learn the basic organization of nervous tissue.",

            facts: [

                {
                    term: "Skeletal Muscle",
                    definition:
                        "Striated voluntary muscle generally attached to the skeleton."
                },

                {
                    term: "Cardiac Muscle",
                    definition:
                        "Striated involuntary muscle found in the heart."
                },

                {
                    term: "Smooth Muscle",
                    definition:
                        "Nonstriated involuntary muscle found in walls of many hollow organs and vessels."
                },

                {
                    term: "Striation",
                    definition:
                        "Visible banding pattern produced by organized contractile proteins."
                },

                {
                    term: "Neuron",
                    definition:
                        "Excitable cell specialized for receiving, processing and transmitting electrical information."
                },

                {
                    term: "Neuroglia",
                    definition:
                        "Supporting cells of nervous tissue."
                },

                {
                    term: "Cell Body",
                    definition:
                        "Region of a neuron containing the nucleus and much of its metabolic machinery."
                },

                {
                    term: "Dendrite",
                    definition:
                        "Neuronal process specialized primarily for receiving signals."
                },

                {
                    term: "Axon",
                    definition:
                        "Neuronal process carrying action potentials away from the cell body."
                },

                {
                    term: "Excitability",
                    definition:
                        "Ability of a cell to respond to a stimulus by changing its membrane electrical state."
                },

                {
                    term: "Contractility",
                    definition:
                        "Ability of muscle tissue to generate force by shortening or developing tension."
                }

            ],

            sections: [

                {
                    label: "MUSCLE TYPES",

                    title:
                        "Skeletal vs Cardiac vs Smooth",

                    html:
                        cardGrid([
                            [
                                "Skeletal",
                                "Striated, voluntary, long multinucleated fibers."
                            ],
                            [
                                "Cardiac",
                                "Striated, involuntary, branched cells with intercalated discs."
                            ],
                            [
                                "Smooth",
                                "Nonstriated, involuntary, spindle-shaped cells."
                            ]
                        ])
                },

                {
                    label: "NERVOUS TISSUE",

                    title:
                        "Neurons and Support Cells",

                    html:
                        flow([
                            [
                                "Dendrites",
                                "Receive information."
                            ],
                            [
                                "Cell Body",
                                "Integrates signals and maintains the cell."
                            ],
                            [
                                "Axon",
                                "Conducts action potentials toward terminals."
                            ]
                        ]) +

                        importantBox(
                            "⭐ Neuroglia",
                            "Neuroglia do not merely 'fill space.' They perform essential support, immune, metabolic and myelinating functions."
                        )
                },

                {
                    label: "LAB",

                    title:
                        "Histology Recognition",

                    html:
                        studyGrid([
                            [
                                "Skeletal Muscle",
                                "Parallel striated fibers and multiple peripheral nuclei."
                            ],
                            [
                                "Cardiac Muscle",
                                "Branched striated cells and intercalated discs."
                            ],
                            [
                                "Smooth Muscle",
                                "Spindle-shaped cells without visible striations."
                            ],
                            [
                                "Nervous Tissue",
                                "Large neurons may be surrounded by many smaller glial nuclei."
                            ]
                        ])
                }

            ],

            summary: [
                "Skeletal muscle is striated and voluntary.",
                "Cardiac muscle is striated and involuntary.",
                "Smooth muscle is nonstriated and involuntary.",
                "Neurons transmit information.",
                "Neuroglia support nervous tissue.",
                "Dendrites mainly receive signals.",
                "Axons carry action potentials away from the cell body."
            ]

        },


        // ====================================================
        // 14
        // ====================================================

        {
            id: "skin",

            number: 14,

            title:
                "Skin Structure & Function",

            shortTitle:
                "Skin",

            description:
                "Study the epidermis, dermis, hypodermis, glands, hair, pigmentation and major skin functions.",

            facts: [

                {
                    term: "Epidermis",
                    definition:
                        "Outer epithelial layer of the skin composed mainly of keratinized stratified squamous epithelium."
                },

                {
                    term: "Dermis",
                    definition:
                        "Connective-tissue layer beneath the epidermis containing vessels, nerves, glands and follicles."
                },

                {
                    term: "Hypodermis",
                    definition:
                        "Subcutaneous layer beneath the skin containing connective and adipose tissue."
                },

                {
                    term: "Keratinocyte",
                    definition:
                        "Major epidermal cell producing keratin."
                },

                {
                    term: "Melanocyte",
                    definition:
                        "Epidermal cell that produces melanin pigment."
                },

                {
                    term: "Stratum Basale",
                    definition:
                        "Deepest epidermal layer containing actively dividing keratinocyte stem cells."
                },

                {
                    term: "Stratum Corneum",
                    definition:
                        "Most superficial epidermal layer containing dead keratinized cells."
                },

                {
                    term: "Sebaceous Gland",
                    definition:
                        "Oil gland that secretes sebum."
                },

                {
                    term: "Eccrine Sweat Gland",
                    definition:
                        "Sweat gland important in thermoregulation."
                },

                {
                    term: "Hair Follicle",
                    definition:
                        "Epidermal structure extending into the dermis from which hair grows."
                },

                {
                    term: "Melanin",
                    definition:
                        "Pigment contributing to skin color and helping absorb ultraviolet radiation."
                },

                {
                    term: "Vitamin D Production",
                    definition:
                        "Skin participates in the early steps of vitamin D synthesis after UV exposure."
                }

            ],

            sections: [

                {
                    label: "LAYERS",

                    title:
                        "Epidermis, Dermis and Hypodermis",

                    html:
                        flow([
                            [
                                "Epidermis",
                                "Protective epithelial barrier."
                            ],
                            [
                                "Dermis",
                                "Strong connective-tissue layer containing vessels, receptors, follicles and glands."
                            ],
                            [
                                "Hypodermis",
                                "Subcutaneous connective and adipose tissue anchoring skin to deeper structures."
                            ]
                        ])
                },

                {
                    label: "FUNCTIONS",

                    title:
                        "Why Skin Matters",

                    html:
                        cardGrid([
                            [
                                "Barrier",
                                "Reduces water loss and protects against physical, chemical and microbial threats."
                            ],
                            [
                                "Thermoregulation",
                                "Sweating and skin blood flow influence heat loss."
                            ],
                            [
                                "Sensation",
                                "Receptors detect touch, pressure, pain and temperature."
                            ],
                            [
                                "Vitamin D",
                                "UV exposure begins a pathway contributing to vitamin D production."
                            ],
                            [
                                "Immune Defense",
                                "Skin contains immune cells and provides a physical barrier."
                            ],
                            [
                                "Excretion",
                                "Sweat contains small quantities of water, salts and wastes."
                            ]
                        ])
                },

                {
                    label: "LAB",

                    title:
                        "Skin Identification",

                    html:
                        studyGrid([
                            [
                                "Thick Skin",
                                "Found on palms and soles and contains a prominent stratum lucidum."
                            ],
                            [
                                "Thin Skin",
                                "Covers most of the body and usually contains hair follicles."
                            ],
                            [
                                "Sebaceous Glands",
                                "Often associated with hair follicles."
                            ],
                            [
                                "Sweat Glands",
                                "Appear as coiled tubular glands in deeper skin."
                            ]
                        ])
                }

            ],

            summary: [
                "The epidermis is keratinized stratified squamous epithelium.",
                "The dermis is connective tissue.",
                "The hypodermis lies beneath the skin.",
                "Keratinocytes are the major epidermal cells.",
                "Melanocytes produce melanin.",
                "Eccrine sweat supports thermoregulation.",
                "Skin contributes to sensation, protection and vitamin D production."
            ]

        },


        // ====================================================
        // 15
        // ====================================================

        {
            id: "skin-clinical",

            number: 15,

            title:
                "Burns, Wounds & Skin Disorders",

            shortTitle:
                "Burns & Wounds",

            description:
                "Apply integumentary anatomy to burns, wound healing, pressure injuries and common skin disorders.",

            facts: [

                {
                    term: "Superficial Burn",
                    definition:
                        "Burn involving only the epidermis."
                },

                {
                    term: "Partial-Thickness Burn",
                    definition:
                        "Burn involving the epidermis and part of the dermis."
                },

                {
                    term: "Full-Thickness Burn",
                    definition:
                        "Burn destroying the epidermis and dermis through their full thickness."
                },

                {
                    term: "Inflammatory Phase",
                    definition:
                        "Early wound-healing phase involving hemostasis and inflammatory responses."
                },

                {
                    term: "Proliferative Phase",
                    definition:
                        "Wound-healing phase involving granulation tissue, angiogenesis and re-epithelialization."
                },

                {
                    term: "Remodeling Phase",
                    definition:
                        "Later healing phase in which collagen is reorganized and scar strength increases."
                },

                {
                    term: "Granulation Tissue",
                    definition:
                        "New vascular connective tissue forming in a healing wound."
                },

                {
                    term: "Pressure Injury",
                    definition:
                        "Localized tissue damage associated with sustained pressure or pressure combined with shear."
                },

                {
                    term: "Rule of Nines",
                    definition:
                        "Adult burn-estimation method dividing body regions into percentages approximating total body surface area."
                },

                {
                    term: "ABCDE Warning Signs",
                    definition:
                        "Asymmetry, Border irregularity, Color variation, Diameter and Evolving changes used when evaluating suspicious pigmented lesions."
                },

                {
                    term: "Infection",
                    definition:
                        "Invasion and multiplication of microorganisms that can impair wound healing."
                }

            ],

            sections: [

                {
                    label: "BURNS",

                    title:
                        "Depth Matters",

                    html:
                        cardGrid([
                            [
                                "Superficial",
                                "Epidermis only; typically red and painful."
                            ],
                            [
                                "Partial Thickness",
                                "Extends into dermis; blistering may occur."
                            ],
                            [
                                "Full Thickness",
                                "Destroys the epidermis and dermis and may extend deeper."
                            ]
                        ]) +

                        importantBox(
                            "🔥 Burn Severity",
                            "Clinical severity depends on depth, total body surface area, location, age, inhalation injury and other patient factors."
                        )
                },

                {
                    label: "WOUND HEALING",

                    title:
                        "Three Major Phases",

                    html:
                        flow([
                            [
                                "Inflammatory",
                                "Hemostasis and inflammation dominate early."
                            ],
                            [
                                "Proliferative",
                                "Granulation tissue, new vessels and epithelial repair develop."
                            ],
                            [
                                "Remodeling",
                                "Collagen reorganizes and scar strength increases over time."
                            ]
                        ])
                },

                {
                    label: "NURSING",

                    title:
                        "Pressure Injury Prevention",

                    html:
                        clinicalBox(
                            "Immobility",
                            "A patient who cannot reposition independently is at increased risk of pressure-related tissue damage.",
                            "Prevention focuses on pressure redistribution, regular skin assessment, moisture management, nutrition and mobility or repositioning as appropriate."
                        )
                }

            ],

            summary: [
                "Superficial burns involve only epidermis.",
                "Partial-thickness burns involve epidermis and part of dermis.",
                "Full-thickness burns destroy epidermis and dermis.",
                "Know inflammatory, proliferative and remodeling phases.",
                "Granulation tissue forms during repair.",
                "Pressure and shear contribute to pressure injuries.",
                "Use ABCDE concepts when evaluating suspicious pigmented lesions."
            ]

        },


        // ====================================================
        // 16
        // ====================================================

        {
            id: "bone-tissue",

            number: 16,

            title:
                "Bone Tissue & Bone Growth",

            shortTitle:
                "Bone Tissue",

            description:
                "Learn bone cells, compact and spongy bone, osteons, ossification, remodeling and calcium regulation.",

            facts: [

                {
                    term: "Osteoblast",
                    definition:
                        "Bone-forming cell that secretes new bone matrix."
                },

                {
                    term: "Osteocyte",
                    definition:
                        "Mature bone cell residing in a lacuna and maintaining bone tissue."
                },

                {
                    term: "Osteoclast",
                    definition:
                        "Large cell that resorbs bone."
                },

                {
                    term: "Compact Bone",
                    definition:
                        "Dense bone organized into structural units called osteons."
                },

                {
                    term: "Spongy Bone",
                    definition:
                        "Bone consisting of trabeculae with spaces containing marrow."
                },

                {
                    term: "Osteon",
                    definition:
                        "Cylindrical structural unit of compact bone arranged around a central canal."
                },

                {
                    term: "Periosteum",
                    definition:
                        "Connective tissue membrane covering the external surface of bone except at articular surfaces."
                },

                {
                    term: "Endosteum",
                    definition:
                        "Membrane lining internal bone surfaces."
                },

                {
                    term: "Red Bone Marrow",
                    definition:
                        "Marrow involved in blood-cell production."
                },

                {
                    term: "Ossification",
                    definition:
                        "Process of bone formation."
                },

                {
                    term: "Epiphyseal Plate",
                    definition:
                        "Cartilage growth plate responsible for longitudinal growth of immature long bones."
                },

                {
                    term: "Bone Remodeling",
                    definition:
                        "Continuous removal and replacement of bone tissue."
                },

                {
                    term: "Parathyroid Hormone",
                    definition:
                        "Hormone that helps increase blood calcium when calcium is low."
                },

                {
                    term: "Calcitonin",
                    definition:
                        "Hormone that can reduce osteoclast activity and favor lower blood calcium, although its role in adult calcium homeostasis is limited compared with PTH."
                }

            ],

            sections: [

                {
                    label: "BONE CELLS",

                    title:
                        "Build, Maintain and Resorb",

                    html:
                        studyGrid([
                            [
                                "Osteoblast",
                                "Builds bone."
                            ],
                            [
                                "Osteocyte",
                                "Maintains mature bone."
                            ],
                            [
                                "Osteoclast",
                                "Resorbs bone."
                            ]
                        ]) +

                        memoryBox(
                            "B-L-C",
                            "OsteoBLAST builds. OsteoCLAST clears."
                        )
                },

                {
                    label: "MICROSCOPIC ANATOMY",

                    title:
                        "Compact vs Spongy Bone",

                    html:
                        cardGrid([
                            [
                                "Compact Bone",
                                "Dense outer bone organized around osteons."
                            ],
                            [
                                "Spongy Bone",
                                "Trabecular network that reduces skeletal weight and houses marrow spaces."
                            ],
                            [
                                "Central Canal",
                                "Passage through an osteon containing vessels and nerves."
                            ],
                            [
                                "Lacuna",
                                "Small space housing an osteocyte."
                            ]
                        ])
                },

                {
                    label: "GROWTH & REMODELING",

                    title:
                        "Bone is Dynamic Tissue",

                    html:
                        paragraphs([
                            "Long bones grow in length at epiphyseal plates while growth plates remain open.",
                            "Bone remodeling continues throughout life and responds to mechanical loading, hormones and mineral requirements."
                        ]) +

                        clinicalBox(
                            "Calcium Homeostasis",
                            "When blood calcium falls, parathyroid hormone contributes to mechanisms that raise calcium availability.",
                            "Bone participates in mineral homeostasis in addition to providing mechanical support."
                        )
                }

            ],

            summary: [
                "Osteoblasts form bone.",
                "Osteocytes maintain bone.",
                "Osteoclasts resorb bone.",
                "Compact bone contains osteons.",
                "Spongy bone contains trabeculae.",
                "Red marrow produces blood cells.",
                "Epiphyseal plates permit longitudinal growth.",
                "Bone continuously remodels.",
                "PTH is important in raising low blood calcium."
            ]

        },


        // ====================================================
        // 17
        // ====================================================

        {
            id: "axial-skeleton",

            number: 17,

            title:
                "Axial Skeleton",

            shortTitle:
                "Axial Skeleton",

            description:
                "Master the skull, vertebral column, sternum, ribs and major landmarks of the axial skeleton.",

            facts: [

                {
                    term: "Axial Skeleton",
                    definition:
                        "Bones forming the central axis of the body: skull, vertebral column and thoracic cage."
                },

                {
                    term: "Cranium",
                    definition:
                        "Portion of the skull enclosing and protecting the brain."
                },

                {
                    term: "Facial Bones",
                    definition:
                        "Bones forming the facial framework."
                },

                {
                    term: "Hyoid",
                    definition:
                        "U-shaped neck bone that does not directly articulate with another bone."
                },

                {
                    term: "Cervical Vertebrae",
                    definition:
                        "Seven vertebrae of the neck."
                },

                {
                    term: "Thoracic Vertebrae",
                    definition:
                        "Twelve vertebrae that articulate with ribs."
                },

                {
                    term: "Lumbar Vertebrae",
                    definition:
                        "Five large vertebrae of the lower back."
                },

                {
                    term: "Sacrum",
                    definition:
                        "Fused vertebral bone forming the posterior part of the pelvis."
                },

                {
                    term: "Coccyx",
                    definition:
                        "Small terminal bone formed from fused coccygeal vertebrae."
                },

                {
                    term: "Sternum",
                    definition:
                        "Breastbone consisting of manubrium, body and xiphoid process."
                },

                {
                    term: "True Ribs",
                    definition:
                        "Ribs 1–7 that attach directly to the sternum through their own costal cartilages."
                },

                {
                    term: "False Ribs",
                    definition:
                        "Ribs 8–12, which do not attach directly to the sternum through their own costal cartilage."
                },

                {
                    term: "Floating Ribs",
                    definition:
                        "Ribs 11–12, which have no anterior attachment to the sternum."
                },

                {
                    term: "Atlas",
                    definition:
                        "First cervical vertebra, C1."
                },

                {
                    term: "Axis",
                    definition:
                        "Second cervical vertebra, C2, containing the dens."
                }

            ],

            sections: [

                {
                    label: "VERTEBRAL COLUMN",

                    title:
                        "7–12–5",

                    html:
                        studyGrid([
                            [
                                "Cervical",
                                "7 vertebrae."
                            ],
                            [
                                "Thoracic",
                                "12 vertebrae."
                            ],
                            [
                                "Lumbar",
                                "5 vertebrae."
                            ],
                            [
                                "Sacrum",
                                "Fused sacral vertebrae."
                            ],
                            [
                                "Coccyx",
                                "Terminal fused vertebrae."
                            ]
                        ]) +

                        memoryBox(
                            "Breakfast-Lunch-Dinner",
                            "7 cervical, 12 thoracic, 5 lumbar."
                        )
                },

                {
                    label: "THORACIC CAGE",

                    title:
                        "Sternum and Ribs",

                    html:
                        cardGrid([
                            [
                                "Manubrium",
                                "Superior portion of sternum."
                            ],
                            [
                                "Body",
                                "Largest central portion of sternum."
                            ],
                            [
                                "Xiphoid Process",
                                "Inferior tip of sternum."
                            ],
                            [
                                "True Ribs",
                                "Ribs 1–7."
                            ],
                            [
                                "False Ribs",
                                "Ribs 8–12."
                            ],
                            [
                                "Floating Ribs",
                                "Ribs 11–12."
                            ]
                        ])
                },

                {
                    label: "LAB PRACTICAL",

                    title:
                        "Axial Identification Strategy",

                    html:
                        paragraphs([
                            "For skull practicals, identify the bone first and then the landmark.",
                            "For vertebrae, use distinguishing features: cervical transverse foramina, thoracic rib facets and large lumbar bodies."
                        ]) +

                        importantBox(
                            "🎯 C1 vs C2",
                            "Atlas = C1. Axis = C2. The dens is a key identifying feature of the axis."
                        )
                }

            ],

            summary: [
                "Axial skeleton includes skull, vertebral column and thoracic cage.",
                "Know 7 cervical, 12 thoracic and 5 lumbar vertebrae.",
                "Atlas is C1; axis is C2.",
                "The sternum includes manubrium, body and xiphoid process.",
                "True ribs are 1–7.",
                "Floating ribs are 11–12.",
                "Thoracic vertebrae articulate with ribs."
            ]

        },


        // ====================================================
        // 18
        // ====================================================

        {
            id: "appendicular-skeleton",

            number: 18,

            title:
                "Appendicular Skeleton",

            shortTitle:
                "Appendicular Skeleton",

            description:
                "Identify bones of the pectoral girdle, upper limb, pelvic girdle and lower limb.",

            facts: [

                {
                    term: "Appendicular Skeleton",
                    definition:
                        "Bones of the upper and lower limbs plus the pectoral and pelvic girdles."
                },

                {
                    term: "Clavicle",
                    definition:
                        "Collarbone connecting the sternum to the scapula."
                },

                {
                    term: "Scapula",
                    definition:
                        "Shoulder blade forming part of the pectoral girdle."
                },

                {
                    term: "Humerus",
                    definition:
                        "Bone of the arm between shoulder and elbow."
                },

                {
                    term: "Radius",
                    definition:
                        "Lateral forearm bone on the thumb side in anatomical position."
                },

                {
                    term: "Ulna",
                    definition:
                        "Medial forearm bone on the little-finger side in anatomical position."
                },

                {
                    term: "Carpals",
                    definition:
                        "Eight bones forming the wrist."
                },

                {
                    term: "Metacarpals",
                    definition:
                        "Five bones forming the palm."
                },

                {
                    term: "Phalanges",
                    definition:
                        "Bones of the fingers and toes."
                },

                {
                    term: "Pelvic Girdle",
                    definition:
                        "Paired hip bones connecting the lower limbs to the axial skeleton."
                },

                {
                    term: "Femur",
                    definition:
                        "Thigh bone and longest bone in the body."
                },

                {
                    term: "Patella",
                    definition:
                        "Sesamoid bone located anterior to the knee joint."
                },

                {
                    term: "Tibia",
                    definition:
                        "Larger medial bone of the leg that bears most body weight."
                },

                {
                    term: "Fibula",
                    definition:
                        "Slender lateral bone of the leg."
                },

                {
                    term: "Tarsals",
                    definition:
                        "Bones forming the ankle and proximal foot."
                },

                {
                    term: "Metatarsals",
                    definition:
                        "Five long bones of the foot."
                }

            ],

            sections: [

                {
                    label: "UPPER LIMB",

                    title:
                        "Shoulder to Fingers",

                    html:
                        flow([
                            [
                                "Pectoral Girdle",
                                "Clavicle and scapula."
                            ],
                            [
                                "Arm",
                                "Humerus."
                            ],
                            [
                                "Forearm",
                                "Radius and ulna."
                            ],
                            [
                                "Wrist",
                                "Carpals."
                            ],
                            [
                                "Hand",
                                "Metacarpals and phalanges."
                            ]
                        ])
                },

                {
                    label: "LOWER LIMB",

                    title:
                        "Pelvis to Toes",

                    html:
                        flow([
                            [
                                "Pelvic Girdle",
                                "Hip bones connect the lower limbs to the axial skeleton."
                            ],
                            [
                                "Thigh",
                                "Femur."
                            ],
                            [
                                "Knee",
                                "Patella."
                            ],
                            [
                                "Leg",
                                "Tibia and fibula."
                            ],
                            [
                                "Foot",
                                "Tarsals, metatarsals and phalanges."
                            ]
                        ])
                },

                {
                    label: "LAB PRACTICAL",

                    title:
                        "Medial vs Lateral Bones",

                    html:
                        studyGrid([
                            [
                                "Radius",
                                "Lateral forearm; thumb side."
                            ],
                            [
                                "Ulna",
                                "Medial forearm; little-finger side."
                            ],
                            [
                                "Tibia",
                                "Medial leg and primary weight-bearing bone."
                            ],
                            [
                                "Fibula",
                                "Lateral leg."
                            ]
                        ]) +

                        memoryBox(
                            "Tibia Takes Weight",
                            "The tibia is the larger medial weight-bearing bone of the leg."
                        )
                }

            ],

            summary: [
                "Pectoral girdle = clavicle and scapula.",
                "Humerus is the arm bone.",
                "Radius is lateral and ulna is medial in anatomical position.",
                "Carpals form the wrist.",
                "Femur is the thigh bone.",
                "Patella lies at the anterior knee.",
                "Tibia is medial and weight-bearing.",
                "Fibula is lateral.",
                "Tarsals form the ankle/proximal foot."
            ]

        },


        // ====================================================
        // 19
        // ====================================================

        {
            id: "joints",

            number: 19,

            title:
                "Joints & Articulations",

            shortTitle:
                "Joints",

            description:
                "Study structural joint classes, synovial-joint anatomy and the major movements of the skeleton.",

            facts: [

                {
                    term: "Joint",
                    definition:
                        "Location where two or more bones or cartilages meet."
                },

                {
                    term: "Fibrous Joint",
                    definition:
                        "Joint in which bones are connected primarily by dense fibrous connective tissue."
                },

                {
                    term: "Cartilaginous Joint",
                    definition:
                        "Joint in which bones are connected by cartilage."
                },

                {
                    term: "Synovial Joint",
                    definition:
                        "Freely movable joint containing a fluid-filled joint cavity."
                },

                {
                    term: "Articular Cartilage",
                    definition:
                        "Hyaline cartilage covering bone surfaces within many synovial joints."
                },

                {
                    term: "Synovial Fluid",
                    definition:
                        "Lubricating fluid within a synovial joint cavity."
                },

                {
                    term: "Ligament",
                    definition:
                        "Dense connective tissue connecting bone to bone and reinforcing joints."
                },

                {
                    term: "Flexion",
                    definition:
                        "Movement generally decreasing the angle between articulating bones."
                },

                {
                    term: "Extension",
                    definition:
                        "Movement generally increasing the angle between articulating bones."
                },

                {
                    term: "Abduction",
                    definition:
                        "Movement away from the body midline."
                },

                {
                    term: "Adduction",
                    definition:
                        "Movement toward the body midline."
                },

                {
                    term: "Rotation",
                    definition:
                        "Movement of a bone around its longitudinal axis."
                },

                {
                    term: "Circumduction",
                    definition:
                        "Circular movement combining flexion, extension, abduction and adduction."
                },

                {
                    term: "Supination",
                    definition:
                        "Forearm rotation placing the palm anteriorly or superiorly from anatomical context."
                },

                {
                    term: "Pronation",
                    definition:
                        "Forearm rotation placing the palm posteriorly or inferiorly from anatomical context."
                }

            ],

            sections: [

                {
                    label: "CLASSIFICATION",

                    title:
                        "Fibrous, Cartilaginous and Synovial",

                    html:
                        cardGrid([
                            [
                                "Fibrous",
                                "No joint cavity; joined by fibrous tissue."
                            ],
                            [
                                "Cartilaginous",
                                "No joint cavity; joined by cartilage."
                            ],
                            [
                                "Synovial",
                                "Joint cavity present; typically freely movable."
                            ]
                        ])
                },

                {
                    label: "SYNOVIAL JOINT",

                    title:
                        "Anatomy of a Movable Joint",

                    html:
                        studyGrid([
                            [
                                "Articular Cartilage",
                                "Reduces friction and helps distribute load."
                            ],
                            [
                                "Joint Cavity",
                                "Contains synovial fluid."
                            ],
                            [
                                "Articular Capsule",
                                "Encloses the joint."
                            ],
                            [
                                "Ligaments",
                                "Provide reinforcement and limit excessive movement."
                            ]
                        ])
                },

                {
                    label: "MOVEMENTS",

                    title:
                        "Know the Opposite Pairs",

                    html:
                        studyGrid([
                            [
                                "Flexion ↔ Extension",
                                "Decrease vs increase joint angle."
                            ],
                            [
                                "Abduction ↔ Adduction",
                                "Away from vs toward midline."
                            ],
                            [
                                "Pronation ↔ Supination",
                                "Opposing forearm rotations."
                            ]
                        ]) +

                        memoryBox(
                            "Abducted",
                            "If something is abducted, it is taken away — abduction moves away from the midline."
                        )
                }

            ],

            summary: [
                "Structural classes are fibrous, cartilaginous and synovial.",
                "Synovial joints contain a joint cavity.",
                "Articular cartilage covers bone ends.",
                "Synovial fluid lubricates joints.",
                "Ligaments connect bone to bone.",
                "Flexion and extension are opposites.",
                "Abduction moves away from midline; adduction moves toward it.",
                "Know pronation and supination."
            ]

        },


        // ====================================================
        // 20
        // ====================================================

        {
            id: "muscle-physiology",

            number: 20,

            title:
                "Muscle Physiology",

            shortTitle:
                "Muscle Physiology",

            description:
                "Master sarcomeres, actin, myosin, calcium, ATP, neuromuscular transmission and contraction.",

            facts: [

                {
                    term: "Sarcomere",
                    definition:
                        "Basic contractile unit of skeletal and cardiac muscle extending from one Z disc to the next."
                },

                {
                    term: "Actin",
                    definition:
                        "Primary protein of thin filaments."
                },

                {
                    term: "Myosin",
                    definition:
                        "Motor protein forming thick filaments."
                },

                {
                    term: "Troponin",
                    definition:
                        "Regulatory protein that binds calcium during skeletal and cardiac muscle contraction."
                },

                {
                    term: "Tropomyosin",
                    definition:
                        "Regulatory protein that blocks myosin-binding sites on actin at rest."
                },

                {
                    term: "Calcium",
                    definition:
                        "Ion that binds troponin and permits cross-bridge formation in skeletal muscle."
                },

                {
                    term: "Acetylcholine",
                    definition:
                        "Neurotransmitter released by somatic motor neurons at the neuromuscular junction."
                },

                {
                    term: "Neuromuscular Junction",
                    definition:
                        "Synapse between a somatic motor neuron and skeletal muscle fiber."
                },

                {
                    term: "Sliding Filament Theory",
                    definition:
                        "Model in which thin filaments slide past thick filaments, shortening the sarcomere."
                },

                {
                    term: "ATP",
                    definition:
                        "Energy source required for cross-bridge cycling and muscle relaxation processes."
                },

                {
                    term: "Motor Unit",
                    definition:
                        "One motor neuron and all skeletal muscle fibers it innervates."
                },

                {
                    term: "Muscle Twitch",
                    definition:
                        "Mechanical response of a muscle fiber or motor unit to a single action potential."
                },

                {
                    term: "Summation",
                    definition:
                        "Increase in muscle tension when stimuli arrive before full relaxation."
                },

                {
                    term: "Tetanus",
                    definition:
                        "Sustained high muscle tension resulting from rapid repeated stimulation."
                },

                {
                    term: "Isometric Contraction",
                    definition:
                        "Contraction producing tension without significant change in muscle length."
                },

                {
                    term: "Isotonic Contraction",
                    definition:
                        "Contraction in which muscle length changes while moving a load."
                }

            ],

            sections: [

                {
                    label: "SARCOMERE",

                    title:
                        "The Contractile Unit",

                    html:
                        paragraphs([
                            "Sarcomeres contain interdigitating thick myosin filaments and thin actin filaments.",
                            "During contraction, filaments do not become dramatically shorter. Instead, they slide past one another and shorten the sarcomere."
                        ]) +

                        importantBox(
                            "🎯 Sliding Filament",
                            "Actin slides toward the center of the sarcomere as myosin cross-bridges cycle."
                        )
                },

                {
                    label: "EXCITATION-CONTRACTION",

                    title:
                        "From Nerve Signal to Force",

                    html:
                        flow([
                            [
                                "Motor Neuron Action Potential",
                                "Electrical signal reaches the neuromuscular junction."
                            ],
                            [
                                "Acetylcholine Release",
                                "ACh is released into the synaptic cleft."
                            ],
                            [
                                "Muscle Action Potential",
                                "The muscle membrane depolarizes."
                            ],
                            [
                                "Calcium Release",
                                "Calcium becomes available in the cytosol."
                            ],
                            [
                                "Troponin Binding",
                                "Calcium binds troponin and moves tropomyosin."
                            ],
                            [
                                "Cross-Bridge Cycling",
                                "Myosin interacts with actin and generates force."
                            ]
                        ])
                },

                {
                    label: "ENERGY",

                    title:
                        "ATP and Muscle Work",

                    html:
                        paragraphs([
                            "ATP is required for myosin cross-bridge cycling and for active transport of calcium needed for relaxation.",
                            "Muscle cells regenerate ATP using stored phosphagens, anaerobic pathways and aerobic metabolism."
                        ]) +

                        clinicalBox(
                            "Rigor Mortis",
                            "After death, ATP production stops.",
                            "Without adequate ATP, myosin cannot detach normally from actin, contributing to postmortem muscle stiffness."
                        )
                }

            ],

            summary: [
                "Sarcomeres are the contractile units of striated muscle.",
                "Actin forms thin filaments; myosin forms thick filaments.",
                "Calcium binds troponin.",
                "Tropomyosin moves away from actin binding sites.",
                "ACh is released at the neuromuscular junction.",
                "ATP is essential for contraction and relaxation.",
                "Motor units consist of one motor neuron and its muscle fibers.",
                "Know summation and tetanus.",
                "Know isotonic vs isometric contraction."
            ]

        },


        // ====================================================
        // 21
        // ====================================================

        {
            id: "major-muscles",

            number: 21,

            title:
                "Major Muscles of the Body",

            shortTitle:
                "Major Muscles",

            description:
                "Identify major skeletal muscles and connect their locations to primary actions.",

            facts: [

                {
                    term: "Sternocleidomastoid",
                    definition:
                        "Neck muscle that flexes the neck bilaterally and rotates the head contralaterally when acting unilaterally."
                },

                {
                    term: "Trapezius",
                    definition:
                        "Large superficial back muscle involved in scapular movement and neck extension."
                },

                {
                    term: "Deltoid",
                    definition:
                        "Shoulder muscle that strongly abducts the arm."
                },

                {
                    term: "Pectoralis Major",
                    definition:
                        "Anterior chest muscle that flexes, adducts and medially rotates the humerus."
                },

                {
                    term: "Latissimus Dorsi",
                    definition:
                        "Large back muscle that extends, adducts and medially rotates the humerus."
                },

                {
                    term: "Biceps Brachii",
                    definition:
                        "Anterior arm muscle that flexes the elbow and supinates the forearm."
                },

                {
                    term: "Triceps Brachii",
                    definition:
                        "Posterior arm muscle that extends the elbow."
                },

                {
                    term: "Rectus Abdominis",
                    definition:
                        "Anterior abdominal muscle that flexes the trunk."
                },

                {
                    term: "External Oblique",
                    definition:
                        "Superficial lateral abdominal muscle involved in trunk rotation and compression."
                },

                {
                    term: "Gluteus Maximus",
                    definition:
                        "Large posterior hip muscle that powerfully extends the hip."
                },

                {
                    term: "Quadriceps Femoris",
                    definition:
                        "Anterior thigh group whose primary shared action is knee extension."
                },

                {
                    term: "Hamstrings",
                    definition:
                        "Posterior thigh group that flexes the knee and generally extends the hip."
                },

                {
                    term: "Gastrocnemius",
                    definition:
                        "Superficial calf muscle that plantar flexes the ankle and assists knee flexion."
                },

                {
                    term: "Tibialis Anterior",
                    definition:
                        "Anterior leg muscle that dorsiflexes and inverts the foot."
                },

                {
                    term: "Masseter",
                    definition:
                        "Powerful muscle of mastication that elevates the mandible."
                }

            ],

            sections: [

                {
                    label: "UPPER BODY",

                    title:
                        "Major Muscles to Identify",

                    html:
                        studyGrid([
                            [
                                "Deltoid",
                                "Shoulder; arm abduction."
                            ],
                            [
                                "Pectoralis Major",
                                "Anterior chest; flexion/adduction of humerus."
                            ],
                            [
                                "Latissimus Dorsi",
                                "Posterior trunk; extension/adduction of humerus."
                            ],
                            [
                                "Biceps Brachii",
                                "Anterior arm; elbow flexion and forearm supination."
                            ],
                            [
                                "Triceps Brachii",
                                "Posterior arm; elbow extension."
                            ],
                            [
                                "Trapezius",
                                "Upper back; major scapular movements."
                            ]
                        ])
                },

                {
                    label: "LOWER BODY",

                    title:
                        "Hip, Thigh and Leg",

                    html:
                        studyGrid([
                            [
                                "Gluteus Maximus",
                                "Powerful hip extension."
                            ],
                            [
                                "Quadriceps",
                                "Knee extension."
                            ],
                            [
                                "Hamstrings",
                                "Knee flexion and hip extension."
                            ],
                            [
                                "Gastrocnemius",
                                "Plantar flexion."
                            ],
                            [
                                "Tibialis Anterior",
                                "Dorsiflexion."
                            ]
                        ])
                },

                {
                    label: "LAB PRACTICAL",

                    title:
                        "How to Study Muscles",

                    html:
                        paragraphs([
                            "For each muscle, learn <strong>name → location → major action</strong> before adding origins and insertions.",
                            "Use body movement to reinforce anatomy: perform the action while identifying the muscle responsible."
                        ]) +

                        memoryBox(
                            "Agonist Logic",
                            "If you know what movement a muscle produces, you can often predict where it must cross a joint."
                        )
                }

            ],

            summary: [
                "Deltoid abducts the arm.",
                "Biceps brachii flexes the elbow and supinates.",
                "Triceps brachii extends the elbow.",
                "Pectoralis major and latissimus dorsi act on the humerus.",
                "Gluteus maximus extends the hip.",
                "Quadriceps extend the knee.",
                "Hamstrings flex the knee.",
                "Gastrocnemius plantar flexes.",
                "Tibialis anterior dorsiflexes."
            ]

        },


        // ====================================================
        // 22
        // ====================================================

        {
            id: "neurons",

            number: 22,

            title:
                "Neurons & Neuroglia",

            shortTitle:
                "Neurons & Neuroglia",

            description:
                "Learn neuron anatomy, functional neuron classes, myelin and the major glial cells of the CNS and PNS.",

            facts: [

                {
                    term: "Neuron",
                    definition:
                        "Excitable nervous-system cell specialized for communication."
                },

                {
                    term: "Cell Body",
                    definition:
                        "Neuron region containing the nucleus and most organelles."
                },

                {
                    term: "Dendrite",
                    definition:
                        "Neuron process specialized primarily for receiving signals."
                },

                {
                    term: "Axon",
                    definition:
                        "Neuron process conducting action potentials away from the cell body."
                },

                {
                    term: "Myelin",
                    definition:
                        "Lipid-rich insulating sheath around selected axons that increases conduction speed."
                },

                {
                    term: "Schwann Cell",
                    definition:
                        "PNS glial cell that forms myelin around peripheral axons."
                },

                {
                    term: "Oligodendrocyte",
                    definition:
                        "CNS glial cell that forms myelin around CNS axons."
                },

                {
                    term: "Astrocyte",
                    definition:
                        "CNS glial cell supporting neurons and helping regulate the extracellular environment and blood-brain barrier."
                },

                {
                    term: "Microglia",
                    definition:
                        "Resident immune-related phagocytic cells of the CNS."
                },

                {
                    term: "Ependymal Cell",
                    definition:
                        "CNS glial cell lining ventricles and the central canal and associated with cerebrospinal fluid."
                },

                {
                    term: "Satellite Cell",
                    definition:
                        "PNS glial cell surrounding neuron cell bodies in ganglia."
                },

                {
                    term: "Sensory Neuron",
                    definition:
                        "Afferent neuron carrying information toward the CNS."
                },

                {
                    term: "Motor Neuron",
                    definition:
                        "Efferent neuron carrying commands from the CNS toward effectors."
                },

                {
                    term: "Interneuron",
                    definition:
                        "Neuron located primarily within the CNS that processes and integrates information."
                }

            ],

            sections: [

                {
                    label: "NEURON ANATOMY",

                    title:
                        "Input → Integration → Output",

                    html:
                        flow([
                            [
                                "Dendrites",
                                "Receive incoming signals."
                            ],
                            [
                                "Cell Body",
                                "Supports cellular metabolism and integrates information."
                            ],
                            [
                                "Axon",
                                "Carries action potentials away from the cell body."
                            ],
                            [
                                "Axon Terminals",
                                "Communicate with target cells."
                            ]
                        ])
                },

                {
                    label: "GLIA",

                    title:
                        "CNS vs PNS Support Cells",

                    html:
                        cardGrid([
                            [
                                "Astrocytes",
                                "CNS support and environmental regulation."
                            ],
                            [
                                "Oligodendrocytes",
                                "CNS myelin."
                            ],
                            [
                                "Microglia",
                                "CNS immune surveillance and phagocytosis."
                            ],
                            [
                                "Ependymal Cells",
                                "Line CNS fluid-filled spaces."
                            ],
                            [
                                "Schwann Cells",
                                "PNS myelin."
                            ],
                            [
                                "Satellite Cells",
                                "Support neuron cell bodies in PNS ganglia."
                            ]
                        ]) +

                        memoryBox(
                            "Myelin",
                            "Oligodendrocytes = CNS. Schwann cells = PNS."
                        )
                },

                {
                    label: "FUNCTIONAL CLASSES",

                    title:
                        "Afferent, Efferent and Interneurons",

                    html:
                        studyGrid([
                            [
                                "Sensory / Afferent",
                                "Toward the CNS."
                            ],
                            [
                                "Motor / Efferent",
                                "Away from the CNS toward effectors."
                            ],
                            [
                                "Interneuron",
                                "Integration within the CNS."
                            ]
                        ])
                }

            ],

            summary: [
                "Dendrites mainly receive signals.",
                "Axons conduct action potentials away from the cell body.",
                "Myelin increases conduction speed.",
                "Oligodendrocytes myelinate CNS axons.",
                "Schwann cells myelinate PNS axons.",
                "Astrocytes perform extensive CNS support functions.",
                "Microglia are immune-related CNS cells.",
                "Sensory neurons are afferent; motor neurons are efferent."
            ]

        },


        // ====================================================
        // 23
        // ====================================================

        {
            id: "action-potentials",

            number: 23,

            title:
                "Membrane Potentials & Synapses",

            shortTitle:
                "Action Potentials",

            description:
                "Master resting membrane potential, depolarization, repolarization, action potentials and synaptic transmission.",

            facts: [

                {
                    term: "Resting Membrane Potential",
                    definition:
                        "Voltage difference across the membrane of a resting excitable cell."
                },

                {
                    term: "Depolarization",
                    definition:
                        "Membrane potential becomes less negative than resting."
                },

                {
                    term: "Repolarization",
                    definition:
                        "Membrane potential returns toward the resting value after depolarization."
                },

                {
                    term: "Hyperpolarization",
                    definition:
                        "Membrane potential becomes more negative than its resting level."
                },

                {
                    term: "Threshold",
                    definition:
                        "Critical membrane potential at which an action potential is triggered."
                },

                {
                    term: "Action Potential",
                    definition:
                        "Rapid all-or-none electrical signal propagated along an excitable membrane."
                },

                {
                    term: "All-or-None Principle",
                    definition:
                        "Once threshold is reached, an action potential occurs with a characteristic amplitude rather than a graded size."
                },

                {
                    term: "Refractory Period",
                    definition:
                        "Period after an action potential during which another action potential is impossible or requires stronger stimulation."
                },

                {
                    term: "Synapse",
                    definition:
                        "Junction where a neuron communicates with another cell."
                },

                {
                    term: "Neurotransmitter",
                    definition:
                        "Chemical messenger released by a neuron to influence a target cell."
                },

                {
                    term: "EPSP",
                    definition:
                        "Excitatory postsynaptic potential that moves the postsynaptic membrane toward threshold."
                },

                {
                    term: "IPSP",
                    definition:
                        "Inhibitory postsynaptic potential that decreases the likelihood of reaching threshold."
                },

                {
                    term: "Saltatory Conduction",
                    definition:
                        "Action-potential propagation that effectively jumps between nodes of Ranvier in myelinated axons."
                }

            ],

            sections: [

                {
                    label: "ACTION POTENTIAL",

                    title:
                        "Electrical Signaling",

                    html:
                        flow([
                            [
                                "Resting State",
                                "The membrane maintains a negative resting potential."
                            ],
                            [
                                "Threshold",
                                "Sufficient depolarization activates voltage-gated channels."
                            ],
                            [
                                "Depolarization",
                                "Membrane voltage rapidly becomes less negative."
                            ],
                            [
                                "Repolarization",
                                "The membrane returns toward resting voltage."
                            ],
                            [
                                "Refractory Period",
                                "Channel states temporarily limit immediate re-firing."
                            ]
                        ])
                },

                {
                    label: "MYELIN",

                    title:
                        "Saltatory Conduction",

                    html:
                        paragraphs([
                            "Myelin reduces current loss across much of the axonal membrane.",
                            "Action potentials are regenerated at nodes of Ranvier, allowing rapid saltatory conduction."
                        ]) +

                        importantBox(
                            "⚡ Myelin",
                            "Myelinated axons generally conduct impulses faster than comparable unmyelinated axons."
                        )
                },

                {
                    label: "SYNAPSE",

                    title:
                        "Chemical Communication",

                    html:
                        flow([
                            [
                                "Action Potential Arrives",
                                "Depolarization reaches the presynaptic terminal."
                            ],
                            [
                                "Calcium Enters",
                                "Voltage-gated calcium channels open."
                            ],
                            [
                                "Neurotransmitter Released",
                                "Synaptic vesicles undergo exocytosis."
                            ],
                            [
                                "Receptor Binding",
                                "Neurotransmitter binds postsynaptic receptors."
                            ],
                            [
                                "Postsynaptic Response",
                                "The target membrane becomes more or less likely to reach threshold."
                            ]
                        ])
                }

            ],

            summary: [
                "Resting membranes maintain an electrical potential difference.",
                "Depolarization makes membrane voltage less negative.",
                "Repolarization returns voltage toward resting.",
                "Threshold triggers an all-or-none action potential.",
                "Refractory periods limit immediate re-firing.",
                "Myelin permits saltatory conduction.",
                "Neurotransmitters cross chemical synapses.",
                "EPSPs increase and IPSPs decrease likelihood of firing."
            ]

        },


        // ====================================================
        // 24
        // ====================================================

        {
            id: "brain-spinal-cord",

            number: 24,

            title:
                "Brain & Spinal Cord",

            shortTitle:
                "Brain & Spinal Cord",

            description:
                "Learn major brain regions, cerebral lobes, meninges, cerebrospinal fluid and spinal-cord organization.",

            facts: [

                {
                    term: "Cerebrum",
                    definition:
                        "Largest brain region involved in conscious perception, cognition and voluntary motor control."
                },

                {
                    term: "Frontal Lobe",
                    definition:
                        "Cerebral lobe important in voluntary motor control, planning, behavior and aspects of language."
                },

                {
                    term: "Parietal Lobe",
                    definition:
                        "Cerebral lobe important in somatic sensory processing and spatial awareness."
                },

                {
                    term: "Temporal Lobe",
                    definition:
                        "Cerebral lobe important in hearing, memory and aspects of language."
                },

                {
                    term: "Occipital Lobe",
                    definition:
                        "Cerebral lobe primarily associated with visual processing."
                },

                {
                    term: "Cerebellum",
                    definition:
                        "Brain region important for coordination, balance and motor learning."
                },

                {
                    term: "Brainstem",
                    definition:
                        "Region consisting of midbrain, pons and medulla oblongata and containing vital pathways and control centers."
                },

                {
                    term: "Thalamus",
                    definition:
                        "Major relay and processing center for many sensory and motor signals."
                },

                {
                    term: "Hypothalamus",
                    definition:
                        "Region involved in homeostasis, autonomic regulation and endocrine control."
                },

                {
                    term: "Dura Mater",
                    definition:
                        "Tough outer meningeal layer."
                },

                {
                    term: "Arachnoid Mater",
                    definition:
                        "Middle meningeal layer."
                },

                {
                    term: "Pia Mater",
                    definition:
                        "Delicate inner meningeal layer closely adhering to CNS tissue."
                },

                {
                    term: "Cerebrospinal Fluid",
                    definition:
                        "Fluid cushioning and supporting the brain and spinal cord."
                },

                {
                    term: "Gray Matter",
                    definition:
                        "CNS tissue containing neuronal cell bodies, dendrites, synapses and unmyelinated regions."
                },

                {
                    term: "White Matter",
                    definition:
                        "CNS tissue containing many myelinated axons."
                },

                {
                    term: "Dorsal Root",
                    definition:
                        "Spinal nerve root carrying sensory fibers toward the spinal cord."
                },

                {
                    term: "Ventral Root",
                    definition:
                        "Spinal nerve root carrying motor fibers away from the spinal cord."
                }

            ],

            sections: [

                {
                    label: "CEREBRUM",

                    title:
                        "Major Lobes",

                    html:
                        cardGrid([
                            [
                                "Frontal",
                                "Motor control, executive functions and behavior."
                            ],
                            [
                                "Parietal",
                                "Somatic sensory processing and spatial integration."
                            ],
                            [
                                "Temporal",
                                "Auditory processing, memory and language-related functions."
                            ],
                            [
                                "Occipital",
                                "Visual processing."
                            ]
                        ])
                },

                {
                    label: "PROTECTION",

                    title:
                        "Meninges and CSF",

                    html:
                        flow([
                            [
                                "Dura Mater",
                                "Tough outer layer."
                            ],
                            [
                                "Arachnoid Mater",
                                "Middle layer."
                            ],
                            [
                                "Pia Mater",
                                "Delicate inner layer."
                            ]
                        ]) +

                        memoryBox(
                            "DAP",
                            "Dura → Arachnoid → Pia from superficial to deep."
                        )
                },

                {
                    label: "SPINAL CORD",

                    title:
                        "Sensory In, Motor Out",

                    html:
                        studyGrid([
                            [
                                "Dorsal Root",
                                "Sensory fibers enter the spinal cord."
                            ],
                            [
                                "Dorsal Root Ganglion",
                                "Contains cell bodies of sensory neurons."
                            ],
                            [
                                "Ventral Root",
                                "Motor fibers leave the spinal cord."
                            ],
                            [
                                "Gray Matter",
                                "More central in spinal cord."
                            ],
                            [
                                "White Matter",
                                "More peripheral in spinal cord."
                            ]
                        ]) +

                        memoryBox(
                            "DAVE",
                            "Dorsal Afferent, Ventral Efferent."
                        )
                }

            ],

            summary: [
                "Know the four major cerebral lobes.",
                "Cerebellum coordinates movement and balance.",
                "Brainstem includes midbrain, pons and medulla.",
                "Hypothalamus is central to homeostasis.",
                "Meninges are dura, arachnoid and pia.",
                "CSF cushions and supports the CNS.",
                "Dorsal roots carry sensory fibers.",
                "Ventral roots carry motor fibers."
            ]

        },


        // ====================================================
        // 25
        // ====================================================

        {
            id: "peripheral-nervous",

            number: 25,

            title:
                "Peripheral Nervous System",

            shortTitle:
                "Peripheral Nervous System",

            description:
                "Study cranial and spinal nerves, sensory and motor pathways, reflex arcs and peripheral organization.",

            facts: [

                {
                    term: "Peripheral Nervous System",
                    definition:
                        "Nervous-system structures outside the brain and spinal cord."
                },

                {
                    term: "Cranial Nerve",
                    definition:
                        "Peripheral nerve associated directly with the brain or brainstem."
                },

                {
                    term: "Spinal Nerve",
                    definition:
                        "Mixed peripheral nerve formed from dorsal and ventral roots."
                },

                {
                    term: "Afferent Division",
                    definition:
                        "Sensory division carrying information toward the CNS."
                },

                {
                    term: "Efferent Division",
                    definition:
                        "Motor division carrying commands away from the CNS."
                },

                {
                    term: "Somatic Motor Division",
                    definition:
                        "Motor pathway controlling skeletal muscle."
                },

                {
                    term: "Reflex",
                    definition:
                        "Rapid predictable response to a stimulus."
                },

                {
                    term: "Reflex Arc",
                    definition:
                        "Neural pathway producing a reflex response."
                },

                {
                    term: "Sensory Receptor",
                    definition:
                        "Structure detecting a stimulus."
                },

                {
                    term: "Sensory Neuron",
                    definition:
                        "Carries information from receptors toward the CNS."
                },

                {
                    term: "Integration Center",
                    definition:
                        "CNS region processing information in a reflex pathway."
                },

                {
                    term: "Motor Neuron",
                    definition:
                        "Carries output from the CNS to an effector."
                },

                {
                    term: "Effector",
                    definition:
                        "Muscle or gland that produces a response."
                },

                {
                    term: "Dermatome",
                    definition:
                        "Area of skin supplied mainly by sensory fibers from a single spinal nerve root."
                }

            ],

            sections: [

                {
                    label: "ORGANIZATION",

                    title:
                        "Sensory In, Motor Out",

                    html:
                        flow([
                            [
                                "Receptor",
                                "Detects a stimulus."
                            ],
                            [
                                "Afferent Pathway",
                                "Carries information toward the CNS."
                            ],
                            [
                                "CNS",
                                "Processes information."
                            ],
                            [
                                "Efferent Pathway",
                                "Carries motor output away from the CNS."
                            ],
                            [
                                "Effector",
                                "Produces a response."
                            ]
                        ])
                },

                {
                    label: "REFLEXES",

                    title:
                        "Reflex Arc",

                    html:
                        paragraphs([
                            "A reflex can occur rapidly because the spinal cord or brainstem can organize a response without waiting for conscious decision-making.",
                            "Conscious awareness may occur after the reflex pathway has already initiated movement."
                        ]) +

                        clinicalBox(
                            "Patellar Reflex",
                            "Stretch of the patellar tendon activates sensory receptors and produces a spinal reflex.",
                            "Reflex testing can provide information about sensory pathways, spinal cord segments, motor pathways and muscle function."
                        )
                },

                {
                    label: "DERMATOMES",

                    title:
                        "Mapping Sensory Roots",

                    html:
                        paragraphs([
                            "Dermatomes are clinically useful because sensory changes in a particular skin distribution can suggest involvement of a specific spinal nerve root.",
                            "Adjacent dermatomes overlap, so complete anesthesia usually requires more than one root to be affected."
                        ])
                }

            ],

            summary: [
                "The PNS includes nerves outside the CNS.",
                "Afferent pathways carry sensory information toward the CNS.",
                "Efferent pathways carry motor output away from the CNS.",
                "Spinal nerves are mixed nerves.",
                "Know the components of a reflex arc.",
                "Reflexes can occur without conscious initiation.",
                "Dermatomes correspond to spinal nerve-root sensory distributions."
            ]

        },


        // ====================================================
        // 26
        // ====================================================

        {
            id: "autonomic",

            number: 26,

            title:
                "Autonomic Nervous System",

            shortTitle:
                "Autonomic Nervous System",

            description:
                "Compare sympathetic and parasympathetic divisions, autonomic pathways and effects on major organs.",

            facts: [

                {
                    term: "Autonomic Nervous System",
                    definition:
                        "Visceral motor system regulating smooth muscle, cardiac muscle and glands."
                },

                {
                    term: "Sympathetic Division",
                    definition:
                        "Autonomic division supporting fight-or-flight responses and energy mobilization."
                },

                {
                    term: "Parasympathetic Division",
                    definition:
                        "Autonomic division supporting rest-and-digest functions and energy conservation."
                },

                {
                    term: "Thoracolumbar Division",
                    definition:
                        "Another name for the sympathetic division based on spinal cord origin."
                },

                {
                    term: "Craniosacral Division",
                    definition:
                        "Another name for the parasympathetic division based on CNS origin."
                },

                {
                    term: "Preganglionic Neuron",
                    definition:
                        "Autonomic motor neuron extending from the CNS to an autonomic ganglion."
                },

                {
                    term: "Postganglionic Neuron",
                    definition:
                        "Autonomic motor neuron extending from an autonomic ganglion to an effector."
                },

                {
                    term: "Autonomic Ganglion",
                    definition:
                        "Collection of autonomic neuron cell bodies outside the CNS where preganglionic and postganglionic neurons synapse."
                },

                {
                    term: "Acetylcholine",
                    definition:
                        "Neurotransmitter released by all autonomic preganglionic neurons and most parasympathetic postganglionic neurons."
                },

                {
                    term: "Norepinephrine",
                    definition:
                        "Primary neurotransmitter released by most sympathetic postganglionic neurons."
                },

                {
                    term: "Fight or Flight",
                    definition:
                        "Pattern of sympathetic activation supporting increased activity and rapid response."
                },

                {
                    term: "Rest and Digest",
                    definition:
                        "Pattern of parasympathetic activity supporting digestion, maintenance and energy conservation."
                },

                {
                    term: "Dual Innervation",
                    definition:
                        "Innervation of an organ by both sympathetic and parasympathetic divisions."
                },

                {
                    term: "Adrenal Medulla",
                    definition:
                        "Modified sympathetic structure releasing epinephrine and norepinephrine into blood."
                }

            ],

            sections: [

                {
                    label: "AUTONOMIC PATHWAY",

                    title:
                        "Two-Neuron Chain",

                    html:
                        flow([
                            [
                                "Preganglionic Neuron",
                                "Cell body is in the CNS."
                            ],
                            [
                                "Autonomic Ganglion",
                                "Preganglionic neuron synapses with a postganglionic neuron."
                            ],
                            [
                                "Postganglionic Neuron",
                                "Axon reaches smooth muscle, cardiac muscle or glands."
                            ]
                        ])
                },

                {
                    label: "COMPARE",

                    title:
                        "Sympathetic vs Parasympathetic",

                    html:
                        cardGrid([
                            [
                                "Sympathetic",
                                "Mobilizes energy, increases cardiac activity, dilates pupils and redirects resources during stress."
                            ],
                            [
                                "Parasympathetic",
                                "Supports digestion, glandular secretion and conservation of energy."
                            ]
                        ]) +

                        memoryBox(
                            "Sympathetic",
                            "Think emergency, exercise and energy expenditure."
                        )
                },

                {
                    label: "ORGAN EFFECTS",

                    title:
                        "Common Patterns",

                    html:
                        studyGrid([
                            [
                                "Heart",
                                "Sympathetic activity generally increases rate and force; parasympathetic activity generally decreases heart rate."
                            ],
                            [
                                "Pupils",
                                "Sympathetic activity dilates; parasympathetic activity constricts."
                            ],
                            [
                                "GI Tract",
                                "Parasympathetic activity generally promotes motility and secretion."
                            ],
                            [
                                "Airways",
                                "Sympathetic stimulation generally promotes bronchodilation."
                            ]
                        ]) +

                        clinicalBox(
                            "Stress Response",
                            "During acute stress, sympathetic activity can increase heart rate, dilate airways and mobilize energy.",
                            "These responses help prepare the body for increased physical demand."
                        )
                }

            ],

            summary: [
                "The ANS regulates visceral effectors.",
                "Sympathetic = thoracolumbar.",
                "Parasympathetic = craniosacral.",
                "Autonomic pathways generally use preganglionic and postganglionic neurons.",
                "All autonomic preganglionic neurons release acetylcholine.",
                "Most sympathetic postganglionic neurons release norepinephrine.",
                "Most parasympathetic postganglionic neurons release acetylcholine.",
                "Sympathetic supports fight-or-flight.",
                "Parasympathetic supports rest-and-digest."
            ]

        }

    ];


    // ========================================================
    // ADD TOPICS 4–26 THAT NEED MORE CONTENT
    //
    // The sections above already include every A&P I topic.
    // The engine below automatically generates full
    // Core Concepts, Quick Review, quizzes and mastery.
    // ========================================================


    // ========================================================
    // LOOKUP MAP
    // ========================================================

    const TOPIC_MAP = {};

    AP1_TOPICS.forEach(
        topic => {

            TOPIC_MAP[topic.id] =
                topic;

        }
    );


    // ========================================================
    // GENERATE ADDITIONAL STANDARD TOPICS THAT EXIST IN HTML
    // BUT WERE NOT EXPLICITLY WRITTEN ABOVE
    // ========================================================

    addRemainingTopics();


    function addRemainingTopics() {

        const remaining = [


            // =================================================
            // 4 already exists
            // 5 already exists
            // 6 already exists
            // 7 already exists
            // 8 already exists
            // 9 already exists
            // 10 already exists
            // 11 already exists
            // 12 already exists
            // 13 already exists
            // 14 already exists
            // 15 already exists
            // 16 already exists
            // 17 already exists
            // 18 already exists
            // 19 already exists
            // 20 already exists
            // 21 already exists
            // 22 already exists
            // 23 already exists
            // 24 already exists
            // 25 already exists
            // 26 already exists
            // =================================================

        ];


        remaining.forEach(
            topic => {

                AP1_TOPICS.push(topic);

                TOPIC_MAP[topic.id] =
                    topic;

            }
        );

    }


    // ========================================================
    // DATA VALIDATION
    // ========================================================

    function validateTopicData() {

        const expectedIds = [

            "intro-ap",
            "anatomical-language",
            "homeostasis",
            "atoms-elements",
            "chemical-bonds",
            "ph",
            "biomolecules",
            "cell-structure",
            "membrane-transport",
            "cell-division",
            "epithelial",
            "connective",
            "muscle-nervous-tissue",
            "skin",
            "skin-clinical",
            "bone-tissue",
            "axial-skeleton",
            "appendicular-skeleton",
            "joints",
            "muscle-physiology",
            "major-muscles",
            "neurons",
            "action-potentials",
            "brain-spinal-cord",
            "peripheral-nervous",
            "autonomic"

        ];


        expectedIds.forEach(
            id => {

                if (!TOPIC_MAP[id]) {

                    console.error(
                        "Missing A&P I topic:",
                        id
                    );

                }

            }
        );

    }


    validateTopicData();


    // ========================================================
    // STORAGE HELPERS
    // ========================================================

    function topicStorage(
        topicId
    ) {

        const base =
            `nshAP1_${topicId}`;

        return {

            read:
                `${base}_read`,

            review:
                `${base}_review`,

            marked:
                `${base}_marked`,

            score:
                `${base}_score`,

            passed:
                `${base}_passed`,

            attempts:
                `${base}_attempts`,

            missed:
                `${base}_missed`

        };

    }


    function getBoolean(key) {

        return (
            localStorage.getItem(key) ===
            "true"
        );

    }


    function getNumber(key) {

        return (
            Number(
                localStorage.getItem(key)
            ) || 0
        );

    }


    function getArray(key) {

        const value =
            localStorage.getItem(key);


        if (!value) {

            return [];

        }


        try {

            const parsed =
                JSON.parse(value);

            return Array.isArray(parsed)
                ? parsed
                : [];

        } catch {

            return [];

        }

    }


    function saveArray(
        key,
        value
    ) {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    }


    // ========================================================
    // MIGRATE OLD TOPIC 1 + 2 PROGRESS
    // ========================================================

    function migrateOldProgress() {

        const migrations = [

            {
                id: "intro-ap",
                old:
                    "nursingStudyHubIntroAP"
            },

            {
                id:
                    "anatomical-language",
                old:
                    "nursingStudyHubTerminology"
            },

            {
                id:
                    "homeostasis",
                old:
                    "nursingStudyHubHomeostasis"
            }

        ];


        migrations.forEach(
            item => {

                const newKeys =
                    topicStorage(item.id);


                const oldMap = {

                    read:
                        `${item.old}LessonRead`,

                    review:
                        `${item.old}QuickReview`,

                    marked:
                        `${item.old}MarkedCards`,

                    score:
                        `${item.old}QuizScore`,

                    passed:
                        `${item.old}QuizPassed`,

                    attempts:
                        `${item.old}QuizAttempts`

                };


                Object.keys(oldMap)
                    .forEach(
                        field => {

                            if (
                                localStorage.getItem(
                                    newKeys[field]
                                ) === null
                            ) {

                                const oldValue =
                                    localStorage.getItem(
                                        oldMap[field]
                                    );


                                if (
                                    oldValue !== null
                                ) {

                                    localStorage.setItem(
                                        newKeys[field],
                                        oldValue
                                    );

                                }

                            }

                        }
                    );

            }
        );

    }


    migrateOldProgress();


    // ========================================================
    // SHUFFLE
    // ========================================================

    function shuffle(
        array
    ) {

        const copy =
            [...array];


        for (
            let i = copy.length - 1;
            i > 0;
            i--
        ) {

            const j =
                Math.floor(
                    Math.random() *
                    (i + 1)
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


    // ========================================================
    // DYNAMIC LESSON PAGE
    // ========================================================

    const dynamicLessonPage =
        document.createElement("section");


    dynamicLessonPage.id =
        "dynamic-ap1-lesson-page";

    dynamicLessonPage.className =
        "lesson-page hidden";


    if (footer) {

        footer.before(
            dynamicLessonPage
        );

    } else {

        app.appendChild(
            dynamicLessonPage
        );

    }


    // ========================================================
    // CURRENT STATE
    // ========================================================

    let currentTopic = null;

    let lessonObserver = null;


    let reviewOrder = [];

    let reviewIndex = 0;

    let reviewAnswerShown =
        false;


    let quizQuestions = [];

    let quizIndex = 0;

    let quizCorrect = 0;

    let quizSelected = null;

    let quizChecked =
        false;

    let quizMode =
        "topic";

    let quizTopic =
        null;


    // ========================================================
    // HIDE CONTENT PAGES
    // ========================================================

    function hideAllContent() {

        if (dashboardIntro) {
            dashboardIntro.classList.add(
                "hidden"
            );
        }

        if (progressOverview) {
            progressOverview.classList.add(
                "hidden"
            );
        }

        if (coursesSection) {
            coursesSection.classList.add(
                "hidden"
            );
        }

        if (weakAreasSection) {
            weakAreasSection.classList.add(
                "hidden"
            );
        }

        if (anatomy1Page) {
            anatomy1Page.classList.add(
                "hidden"
            );
        }


        document
            .querySelectorAll(
                ".lesson-page"
            )
            .forEach(
                page => {

                    page.classList.add(
                        "hidden"
                    );

                }
            );


        if (footer) {
            footer.classList.add(
                "hidden"
            );
        }


        closeStudyModal();

    }


    // ========================================================
    // DASHBOARD
    // ========================================================

    function showDashboard() {

        hideAllContent();


        if (dashboardIntro) {

            dashboardIntro.classList.remove(
                "hidden"
            );

        }


        if (progressOverview) {

            progressOverview.classList.remove(
                "hidden"
            );

        }


        if (coursesSection) {

            coursesSection.classList.remove(
                "hidden"
            );

        }


        if (weakAreasSection) {

            weakAreasSection.classList.remove(
                "hidden"
            );

        }


        if (footer) {

            footer.classList.remove(
                "hidden"
            );

        }


        updateAllProgress();

        scrollTop();

    }


    // ========================================================
    // COURSE PAGE
    // ========================================================

    function showAnatomy1() {

        hideAllContent();


        if (anatomy1Page) {

            anatomy1Page.classList.remove(
                "hidden"
            );

        }


        updateAllProgress();

        scrollTop();

    }


    // ========================================================
    // SHOW TOPIC
    // ========================================================

    function showTopic(
        topicId
    ) {

        const topic =
            TOPIC_MAP[topicId];


        if (!topic) {

            return;

        }


        currentTopic =
            topic;


        hideAllContent();

        renderLesson(
            topic
        );


        dynamicLessonPage.classList.remove(
            "hidden"
        );


        updateLessonProgress(
            topic
        );


        observeLessonRead(
            topic
        );


        scrollTop();

    }


    // ========================================================
    // LESSON RENDERER
    // ========================================================

    function renderLesson(
        topic
    ) {

        const sectionObjects = [

            {
                label:
                    "OVERVIEW",

                title:
                    `Understanding ${topic.shortTitle}`,

                html:
                    paragraphs([
                        topic.description,
                        "Use the core concepts below as your foundation. Then work through the application sections and finish with the mastery review."
                    ])
            },


            {
                label:
                    "CORE CONCEPTS",

                title:
                    "High-Yield Terms & Concepts",

                html:
                    cardGrid(
                        topic.facts.map(
                            fact => [
                                fact.term,
                                fact.definition
                            ]
                        )
                    )
            },


            ...topic.sections,


            {
                label:
                    "EXAM REVIEW",

                title:
                    "What You Need to Know",

                html:
                    summaryList(
                        topic.summary
                    ) +

                    `
                        <div class="mastery-reminder">

                            <span>
                                🎯
                            </span>

                            <div>

                                <strong>
                                    Mastery Goal
                                </strong>

                                <p>
                                    Complete the Quick Review
                                    and earn at least
                                    ${PASS_PERCENT}% on the
                                    randomized topic quiz.
                                </p>

                            </div>

                        </div>
                    `
            }

        ];


        const nav =
            sectionObjects
                .map(
                    (section, index) => `

                        <a
                            href="#dynamic-section-${topic.id}-${index}"
                        >
                            ${section.title}
                        </a>

                    `
                )
                .join("");


        const sections =
            sectionObjects
                .map(
                    (section, index) => `

                        <section
                            id="dynamic-section-${topic.id}-${index}"
                            class="lesson-section"
                        >

                            <div class="lesson-section-number">
                                ${
                                    String(
                                        index + 1
                                    )
                                    .padStart(
                                        2,
                                        "0"
                                    )
                                }
                            </div>


                            <div class="lesson-section-content">

                                <p class="lesson-small-label">
                                    ${section.label}
                                </p>


                                <h2>
                                    ${section.title}
                                </h2>


                                ${section.html}

                            </div>

                        </section>

                    `
                )
                .join("");


        dynamicLessonPage.innerHTML = `

            <div class="lesson-top-bar">

                <button
                    id="dynamic-back-to-ap1"
                    class="back-button"
                >
                    ← A&P I
                </button>


                <div class="lesson-progress-text">

                    <span>
                        Topic ${topic.number}
                        of ${COURSE_TOPIC_COUNT}
                    </span>

                    <span>
                        ${topic.shortTitle}
                    </span>

                </div>

            </div>


            <div class="lesson-hero">

                <div class="lesson-hero-content">

                    <p class="section-label">
                        ANATOMY & PHYSIOLOGY I
                    </p>


                    <h1>
                        ${topic.title}
                    </h1>


                    <p class="lesson-description">
                        ${topic.description}
                    </p>


                    <div class="lesson-meta">

                        <span>
                            📖 Full Lesson
                        </span>

                        <span>
                            🧠 ${
                                topic.facts.length
                            } Review Cards
                        </span>

                        <span>
                            🎯 Randomized Quiz
                        </span>

                        <span>
                            💾 Saved Progress
                        </span>

                    </div>

                </div>


                <div class="lesson-hero-number">
                    ${
                        String(
                            topic.number
                        )
                        .padStart(
                            2,
                            "0"
                        )
                    }
                </div>

            </div>


            <nav class="lesson-navigation">
                ${nav}
            </nav>


            <div class="lesson-layout">


                <article class="lesson-content">

                    ${sections}


                    <section class="lesson-actions">

                        <div>

                            <p class="section-label">
                                READY TO TEST YOURSELF?
                            </p>


                            <h2>
                                Master ${topic.shortTitle}
                            </h2>


                            <p>
                                Review the concepts,
                                then complete the
                                randomized mastery quiz.
                            </p>

                        </div>


                        <div class="lesson-action-buttons">

                            <button
                                id="dynamic-review-button"
                                class="secondary-lesson-button"
                            >
                                🧠 Quick Review
                            </button>


                            <button
                                id="dynamic-quiz-button"
                                class="primary-lesson-button"
                            >
                                🎯 Start Topic Quiz
                            </button>

                        </div>

                    </section>

                </article>


                <aside class="lesson-sidebar">


                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            TOPIC PROGRESS
                        </p>


                        <div class="sidebar-progress-number">

                            <span id="dynamic-topic-progress">
                                0
                            </span>%

                        </div>


                        <div class="sidebar-progress-bar">

                            <div
                                id="dynamic-topic-progress-fill"
                                class="sidebar-progress-fill"
                            >
                            </div>

                        </div>

                    </div>


                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            MASTERY CHECKLIST
                        </p>


                        <div
                            id="dynamic-topic-checklist"
                            class="sidebar-checklist"
                        >

                            <div>
                                <span>○</span>
                                Read lesson
                            </div>

                            <div>
                                <span>○</span>
                                Complete quick review
                            </div>

                            <div>
                                <span>○</span>
                                Pass topic quiz
                            </div>

                            <div>
                                <span>○</span>
                                Reach ${PASS_PERCENT}% mastery
                            </div>

                        </div>

                    </div>


                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            QUICK REVIEW
                        </p>


                        <p>
                            ${topic.facts.length}
                            core concepts are available
                            as recall cards.
                        </p>

                    </div>


                    <div class="sidebar-card sidebar-tip">

                        <span>
                            💡
                        </span>


                        <div>

                            <strong>
                                Study Strategy
                            </strong>


                            <p>
                                Try to explain each concept
                                without looking at the answer.
                                Retrieval practice is stronger
                                than rereading alone.
                            </p>

                        </div>

                    </div>


                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            BEST QUIZ SCORE
                        </p>


                        <div class="sidebar-progress-number">

                            <span id="dynamic-best-score">
                                0
                            </span>%

                        </div>

                    </div>


                </aside>

            </div>

        `;


        document
            .getElementById(
                "dynamic-back-to-ap1"
            )
            .addEventListener(
                "click",
                showAnatomy1
            );


        document
            .getElementById(
                "dynamic-review-button"
            )
            .addEventListener(
                "click",
                function () {

                    startQuickReview(
                        topic
                    );

                }
            );


        document
            .getElementById(
                "dynamic-quiz-button"
            )
            .addEventListener(
                "click",
                function () {

                    startTopicQuiz(
                        topic
                    );

                }
            );

    }


    // ========================================================
    // LESSON READ TRACKING
    // ========================================================

    function observeLessonRead(
        topic
    ) {

        if (lessonObserver) {

            lessonObserver.disconnect();

        }


        const sections =
            dynamicLessonPage
                .querySelectorAll(
                    ".lesson-section"
                );


        const finalSection =
            sections[
                sections.length - 1
            ];


        if (
            !finalSection ||
            !(
                "IntersectionObserver"
                in window
            )
        ) {

            return;

        }


        lessonObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                const keys =
                                    topicStorage(
                                        topic.id
                                    );


                                localStorage.setItem(
                                    keys.read,
                                    "true"
                                );


                                updateLessonProgress(
                                    topic
                                );


                                updateAllProgress();

                            }

                        }
                    );

                },

                {
                    threshold: 0.3
                }

            );


        lessonObserver.observe(
            finalSection
        );

    }


    // ========================================================
    // TOPIC PROGRESS
    // ========================================================

    function topicProgress(
        topic
    ) {

        const keys =
            topicStorage(
                topic.id
            );


        let value = 0;


        if (
            getBoolean(
                keys.read
            )
        ) {

            value += 30;

        }


        if (
            getBoolean(
                keys.review
            )
        ) {

            value += 30;

        }


        if (
            getBoolean(
                keys.passed
            )
        ) {

            value += 40;

        }


        return value;

    }


    function topicMastered(
        topic
    ) {

        const keys =
            topicStorage(
                topic.id
            );


        return (
            getNumber(
                keys.score
            ) >=
            PASS_PERCENT
        );

    }


    // ========================================================
    // UPDATE LESSON SIDEBAR
    // ========================================================

    function updateLessonProgress(
        topic
    ) {

        const keys =
            topicStorage(
                topic.id
            );


        const progress =
            topicProgress(
                topic
            );


        const progressText =
            document.getElementById(
                "dynamic-topic-progress"
            );


        const progressFill =
            document.getElementById(
                "dynamic-topic-progress-fill"
            );


        const bestScore =
            document.getElementById(
                "dynamic-best-score"
            );


        if (progressText) {

            progressText.textContent =
                progress;

        }


        if (progressFill) {

            progressFill.style.width =
                `${progress}%`;

        }


        if (bestScore) {

            bestScore.textContent =
                getNumber(
                    keys.score
                );

        }


        const items =
            document.querySelectorAll(
                "#dynamic-topic-checklist > div"
            );


        setChecklist(
            items,
            0,
            getBoolean(
                keys.read
            )
        );


        setChecklist(
            items,
            1,
            getBoolean(
                keys.review
            )
        );


        setChecklist(
            items,
            2,
            getBoolean(
                keys.passed
            )
        );


        setChecklist(
            items,
            3,
            topicMastered(
                topic
            )
        );

    }


    function setChecklist(
        collection,
        index,
        complete
    ) {

        if (
            !collection ||
            !collection[index]
        ) {

            return;

        }


        const item =
            collection[index];


        const icon =
            item.querySelector(
                "span"
            );


        if (!icon) {

            return;

        }


        if (complete) {

            icon.textContent =
                "✓";

            icon.style.color =
                "#16a34a";

            item.style.fontWeight =
                "700";

        } else {

            icon.textContent =
                "○";

            icon.style.color =
                "";

            item.style.fontWeight =
                "";

        }

    }


    // ========================================================
    // COURSE / DASHBOARD PROGRESS
    // ========================================================

    function updateAllProgress() {

        let mastered = 0;


        AP1_TOPICS.forEach(
            topic => {

                const card =
                    document.querySelector(
                        `.topic-card[data-topic="${topic.id}"]`
                    );


                if (!card) {

                    return;

                }


                const status =
                    card.querySelector(
                        ".topic-status"
                    );


                const button =
                    card.querySelector(
                        ".topic-button"
                    );


                const progress =
                    topicProgress(
                        topic
                    );


                const isMastered =
                    topicMastered(
                        topic
                    );


                if (isMastered) {

                    mastered++;

                }


                if (status) {

                    status.textContent =
                        isMastered
                            ? "✓"
                            : topic.number;

                }


                if (button) {

                    if (isMastered) {

                        button.textContent =
                            "Review →";

                    } else if (
                        progress > 0
                    ) {

                        button.textContent =
                            "Continue →";

                    } else {

                        button.textContent =
                            "Start →";

                    }

                }

            }
        );


        const coursePercent =
            Math.round(
                (
                    mastered /
                    COURSE_TOPIC_COUNT
                ) * 100
            );


        if (anatomy1ProgressText) {

            anatomy1ProgressText.textContent =
                coursePercent;

        }


        if (anatomy1ProgressBar) {

            anatomy1ProgressBar.style.width =
                `${coursePercent}%`;

        }


        if (anatomy1Card) {

            const spans =
                anatomy1Card.querySelectorAll(
                    ".course-progress span"
                );


            if (
                spans.length > 1
            ) {

                spans[1].textContent =
                    `${coursePercent}%`;

            }

        }


        if (overallProgress) {

            overallProgress.textContent =
                coursePercent;

        }


        if (overallProgressBar) {

            overallProgressBar.style.width =
                `${coursePercent}%`;

        }


        if (topicsMastered) {

            topicsMastered.textContent =
                mastered;

        }


        if (questionsAnswered) {

            questionsAnswered.textContent =
                getNumber(
                    STORAGE.questionsAnswered
                );

        }


        if (studyStreak) {

            studyStreak.textContent =
                calculateStudyStreak();

        }


        if (
            currentTopic &&
            !dynamicLessonPage.classList.contains(
                "hidden"
            )
        ) {

            updateLessonProgress(
                currentTopic
            );

        }

    }


    // ========================================================
    // STUDY STREAK
    // ========================================================

    function localDateString(
        date = new Date()
    ) {

        const year =
            date.getFullYear();


        const month =
            String(
                date.getMonth() + 1
            )
            .padStart(
                2,
                "0"
            );


        const day =
            String(
                date.getDate()
            )
            .padStart(
                2,
                "0"
            );


        return (
            `${year}-${month}-${day}`
        );

    }


    function registerStudyDay() {

        const dates =
            getArray(
                STORAGE.studyDates
            );


        const today =
            localDateString();


        if (
            !dates.includes(
                today
            )
        ) {

            dates.push(
                today
            );

        }


        saveArray(
            STORAGE.studyDates,
            dates
        );

    }


    function calculateStudyStreak() {

        const dates =
            new Set(
                getArray(
                    STORAGE.studyDates
                )
            );


        if (
            dates.size === 0
        ) {

            return 0;

        }


        let streak = 0;

        const date =
            new Date();


        while (
            dates.has(
                localDateString(
                    date
                )
            )
        ) {

            streak++;


            date.setDate(
                date.getDate() - 1
            );

        }


        return streak;

    }


    // ========================================================
    // STUDY MODAL STYLES
    // ========================================================

    function createModalStyles() {

        if (
            document.getElementById(
                "complete-ap1-modal-styles"
            )
        ) {

            return;

        }


        const style =
            document.createElement(
                "style"
            );


        style.id =
            "complete-ap1-modal-styles";


        style.textContent = `

            .study-overlay {
                position: fixed;
                inset: 0;
                z-index: 2000;

                display: flex;
                align-items: center;
                justify-content: center;

                padding: 22px;

                background:
                    rgba(15, 23, 42, 0.74);

                backdrop-filter:
                    blur(12px);
            }


            .study-modal {
                width: 100%;
                max-width: 840px;

                max-height: 94vh;

                overflow-y: auto;

                border-radius: 28px;

                background: #ffffff;

                color: #172033;

                box-shadow:
                    0 35px 100px
                    rgba(0, 0, 0, 0.32);
            }


            .study-modal-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;

                gap: 20px;

                padding: 24px 26px 19px;

                border-bottom:
                    1px solid #e7eaf0;
            }


            .study-modal-label {
                color: #4f46e5;

                font-size: 10px;

                font-weight: 850;

                letter-spacing: 1.5px;

                margin-bottom: 5px;
            }


            .study-modal-header h2 {
                font-size: 26px;
                letter-spacing: -0.6px;
            }


            .study-modal-close {
                width: 42px;
                height: 42px;

                flex-shrink: 0;

                border:
                    1px solid #e7eaf0;

                border-radius: 12px;

                background: #f8fafc;

                color: #667085;

                font-size: 20px;
            }


            .study-progress-area {
                padding: 18px 26px 0;
            }


            .study-progress-info {
                display: flex;
                justify-content: space-between;

                gap: 12px;

                margin-bottom: 8px;

                color: #667085;

                font-size: 12px;

                font-weight: 700;
            }


            .study-progress-bar {
                height: 8px;

                overflow: hidden;

                border-radius: 999px;

                background: #eef1f6;
            }


            .study-progress-fill {
                height: 100%;

                border-radius: 999px;

                background:
                    linear-gradient(
                        90deg,
                        #4f46e5,
                        #0ea5e9
                    );
            }


            .review-body,
            .quiz-body {
                padding: 26px;
            }


            .review-card,
            .quiz-card {
                padding: 30px;

                border:
                    1px solid #e7eaf0;

                border-radius: 23px;

                background:
                    linear-gradient(
                        145deg,
                        #f8fafc,
                        #ffffff
                    );
            }


            .review-card {
                min-height: 320px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                text-align: center;
            }


            .review-type,
            .quiz-type {
                color: #4f46e5;

                font-size: 10px;

                font-weight: 850;

                letter-spacing: 1.5px;

                margin-bottom: 12px;
            }


            .review-question {
                max-width: 650px;

                font-size: 25px;

                line-height: 1.35;
            }


            .review-answer {
                max-width: 660px;

                color: #475467;

                font-size: 18px;

                line-height: 1.6;
            }


            .review-hint {
                margin-top: 22px;

                color: #98a2b3;

                font-size: 11px;
            }


            .study-actions {
                display: flex;
                justify-content: space-between;
                align-items: center;

                gap: 10px;

                margin-top: 18px;
            }


            .study-actions-group {
                display: flex;
                gap: 9px;
            }


            .study-button {
                min-height: 47px;

                padding: 0 16px;

                border:
                    1px solid #dfe3ea;

                border-radius: 12px;

                background: white;

                color: #344054;

                font-weight: 750;
            }


            .study-button.primary {
                background: #4f46e5;

                border-color: #4f46e5;

                color: white;
            }


            .study-button.marked {
                background: #fffbeb;

                border-color: #f59e0b;

                color: #92400e;
            }


            .study-button:disabled {
                opacity: 0.45;

                cursor: not-allowed;
            }


            .quiz-question {
                margin-bottom: 22px;

                font-size: 22px;

                line-height: 1.4;
            }


            .quiz-options {
                display: flex;
                flex-direction: column;

                gap: 10px;
            }


            .quiz-option {
                width: 100%;

                display: grid;

                grid-template-columns:
                    38px
                    minmax(0, 1fr);

                align-items: center;

                gap: 12px;

                padding: 13px 15px;

                border:
                    1.5px solid #e2e6ec;

                border-radius: 14px;

                background: white;

                color: #344054;

                text-align: left;
            }


            .quiz-letter {
                width: 34px;
                height: 34px;

                display: flex;
                align-items: center;
                justify-content: center;

                border-radius: 10px;

                background: #f2f4f7;

                font-size: 12px;

                font-weight: 850;
            }


            .quiz-option.selected {
                border-color: #4f46e5;

                background: #eef2ff;
            }


            .quiz-option.selected
            .quiz-letter {
                color: white;

                background: #4f46e5;
            }


            .quiz-option.correct {
                border-color: #16a34a;

                background: #f0fdf4;

                color: #166534;
            }


            .quiz-option.correct
            .quiz-letter {
                color: white;

                background: #16a34a;
            }


            .quiz-option.incorrect {
                border-color: #dc2626;

                background: #fef2f2;

                color: #991b1b;
            }


            .quiz-option.incorrect
            .quiz-letter {
                color: white;

                background: #dc2626;
            }


            .quiz-feedback {
                margin-top: 18px;

                padding: 17px;

                border-radius: 15px;
            }


            .quiz-feedback.correct {
                background: #f0fdf4;

                border:
                    1px solid #bbf7d0;
            }


            .quiz-feedback.incorrect {
                background: #fff7ed;

                border:
                    1px solid #fed7aa;
            }


            .quiz-feedback strong {
                display: block;

                margin-bottom: 5px;
            }


            .quiz-feedback p {
                color: #475467;

                font-size: 13px;

                line-height: 1.6;
            }


            .results {
                padding: 38px 28px;

                text-align: center;
            }


            .results-icon {
                width: 82px;
                height: 82px;

                display: flex;
                align-items: center;
                justify-content: center;

                margin: 0 auto 18px;

                border-radius: 24px;

                background: #eef2ff;

                font-size: 38px;
            }


            .results h2 {
                margin-bottom: 9px;

                font-size: 30px;
            }


            .results-message {
                max-width: 590px;

                margin: 0 auto 24px;

                color: #667085;
            }


            .score-circle {
                width: 135px;
                height: 135px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                margin: 0 auto 24px;

                border:
                    8px solid #e0e7ff;

                border-radius: 50%;

                background: #eef2ff;
            }


            .score-circle strong {
                font-size: 36px;
            }


            .score-circle span {
                color: #667085;

                font-size: 10px;

                font-weight: 750;
            }


            .result-grid {
                display: grid;

                grid-template-columns:
                    repeat(3, 1fr);

                gap: 10px;

                margin-bottom: 24px;
            }


            .result-card {
                padding: 16px;

                border:
                    1px solid #e7eaf0;

                border-radius: 15px;

                background: #f8fafc;
            }


            .result-card strong {
                display: block;

                font-size: 23px;
            }


            .result-card span {
                color: #667085;

                font-size: 10px;
            }


            .weak-list {
                max-height: 430px;

                overflow-y: auto;

                display: flex;
                flex-direction: column;

                gap: 10px;

                padding: 22px 26px 26px;
            }


            .weak-item {
                padding: 16px;

                border:
                    1px solid #e7eaf0;

                border-radius: 14px;

                background: #f8fafc;
            }


            .weak-item small {
                display: block;

                margin-bottom: 5px;

                color: #4f46e5;

                font-weight: 800;
            }


            .weak-item strong {
                display: block;

                margin-bottom: 4px;
            }


            .weak-item p {
                color: #667085;

                font-size: 12px;
            }


            body.dark-mode
            .study-modal {
                background: #111827;
                color: #f1f5f9;
            }


            body.dark-mode
            .study-modal-header {
                border-bottom-color: #263043;
            }


            body.dark-mode
            .study-modal-close,
            body.dark-mode
            .study-button {
                background: #172033;
                border-color: #303b50;
                color: #dce3ef;
            }


            body.dark-mode
            .study-button.primary {
                background: #4f46e5;
                border-color: #4f46e5;
                color: white;
            }


            body.dark-mode
            .study-button.marked {
                background: #31270e;
                border-color: #5b4610;
                color: #fde68a;
            }


            body.dark-mode
            .study-progress-info {
                color: #aab4c5;
            }


            body.dark-mode
            .study-progress-bar {
                background: #263043;
            }


            body.dark-mode
            .review-card,
            body.dark-mode
            .quiz-card {
                background: #151e2e;
                border-color: #263043;
            }


            body.dark-mode
            .review-answer {
                color: #cbd5e1;
            }


            body.dark-mode
            .quiz-option {
                background: #172033;
                border-color: #303b50;
                color: #dce3ef;
            }


            body.dark-mode
            .quiz-letter {
                background: #202a3d;
                color: #aab4c5;
            }


            body.dark-mode
            .quiz-option.selected {
                background: #1e1b4b;
                border-color: #6366f1;
            }


            body.dark-mode
            .quiz-option.correct {
                background: #10271a;
                border-color: #22c55e;
                color: #86efac;
            }


            body.dark-mode
            .quiz-option.incorrect {
                background: #351518;
                border-color: #ef4444;
                color: #fca5a5;
            }


            body.dark-mode
            .quiz-feedback.correct {
                background: #10271a;
                border-color: #14532d;
            }


            body.dark-mode
            .quiz-feedback.incorrect {
                background: #351f12;
                border-color: #7c2d12;
            }


            body.dark-mode
            .quiz-feedback p,
            body.dark-mode
            .results-message {
                color: #cbd5e1;
            }


            body.dark-mode
            .score-circle {
                background: #1e1b4b;
                border-color: #3730a3;
            }


            body.dark-mode
            .result-card,
            body.dark-mode
            .weak-item {
                background: #151e2e;
                border-color: #263043;
            }


            body.dark-mode
            .result-card span,
            body.dark-mode
            .weak-item p {
                color: #aab4c5;
            }


            @media (max-width: 650px) {

                .study-overlay {
                    padding: 10px;
                }


                .study-modal {
                    max-height: 96vh;

                    border-radius: 21px;
                }


                .review-body,
                .quiz-body {
                    padding: 16px;
                }


                .review-card,
                .quiz-card {
                    padding: 21px;
                }


                .review-question {
                    font-size: 21px;
                }


                .study-actions {
                    flex-direction: column;
                    align-items: stretch;
                }


                .study-actions-group {
                    width: 100%;
                }


                .study-button {
                    flex: 1;
                }


                .result-grid {
                    grid-template-columns: 1fr;
                }

            }

        `;


        document.head.appendChild(
            style
        );

    }


    // ========================================================
    // MODAL
    // ========================================================

    const studyOverlay =
        document.createElement(
            "div"
        );


    studyOverlay.id =
        "ap1-study-overlay";

    studyOverlay.className =
        "study-overlay hidden";


    studyOverlay.innerHTML = `

        <div class="study-modal">

            <div class="study-modal-header">

                <div>

                    <p
                        id="study-modal-label"
                        class="study-modal-label"
                    >
                    </p>


                    <h2 id="study-modal-title">
                    </h2>

                </div>


                <button
                    id="study-modal-close"
                    class="study-modal-close"
                >
                    ×
                </button>

            </div>


            <div id="study-modal-content">
            </div>

        </div>

    `;


    document.body.appendChild(
        studyOverlay
    );


    const studyModalLabel =
        document.getElementById(
            "study-modal-label"
        );


    const studyModalTitle =
        document.getElementById(
            "study-modal-title"
        );


    const studyModalContent =
        document.getElementById(
            "study-modal-content"
        );


    document
        .getElementById(
            "study-modal-close"
        )
        .addEventListener(
            "click",
            closeStudyModal
        );


    studyOverlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                studyOverlay
            ) {

                closeStudyModal();

            }

        }
    );


    function openStudyModal() {

        studyOverlay.classList.remove(
            "hidden"
        );


        document.body.style.overflow =
            "hidden";

    }


    function closeStudyModal() {

        studyOverlay.classList.add(
            "hidden"
        );


        document.body.style.overflow =
            "";

    }


    // ========================================================
    // QUICK REVIEW
    // ========================================================

    function startQuickReview(
        topic
    ) {

        quizMode =
            "review";


        currentTopic =
            topic;


        reviewOrder =
            shuffle(
                topic.facts.map(
                    (_, index) =>
                        index
                )
            );


        reviewIndex =
            0;


        reviewAnswerShown =
            false;


        studyModalLabel.textContent =
            `A&P I • TOPIC ${topic.number}`;


        studyModalTitle.textContent =
            "Quick Review";


        openStudyModal();

        renderReviewCard();

    }


    function renderReviewCard() {

        const topic =
            currentTopic;


        const factIndex =
            reviewOrder[
                reviewIndex
            ];


        const fact =
            topic.facts[
                factIndex
            ];


        const keys =
            topicStorage(
                topic.id
            );


        const marked =
            getArray(
                keys.marked
            );


        const isMarked =
            marked.includes(
                factIndex
            );


        const percent =
            Math.round(
                (
                    (reviewIndex + 1) /
                    reviewOrder.length
                ) * 100
            );


        studyModalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>
                        Card ${reviewIndex + 1}
                        of ${reviewOrder.length}
                    </span>

                    <span>
                        ${percent}%
                    </span>

                </div>


                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percent}%"
                    >
                    </div>

                </div>

            </div>


            <div class="review-body">

                <div class="review-card">

                    ${
                        reviewAnswerShown
                            ? `
                                <p class="review-type">
                                    ANSWER
                                </p>

                                <h3 class="review-question">
                                    ${fact.term}
                                </h3>

                                <p class="review-answer">
                                    ${fact.definition}
                                </p>

                                <p class="review-hint">
                                    Explain this concept
                                    aloud before continuing.
                                </p>
                            `
                            : `
                                <p class="review-type">
                                    QUICK RECALL
                                </p>

                                <h3 class="review-question">
                                    What does
                                    "${fact.term}"
                                    mean?
                                </h3>

                                <p class="review-hint">
                                    Try answering from memory
                                    before revealing it.
                                </p>
                            `
                    }

                </div>


                <div class="study-actions">

                    <div class="study-actions-group">

                        <button
                            id="review-prev"
                            class="study-button"
                            ${
                                reviewIndex === 0
                                    ? "disabled"
                                    : ""
                            }
                        >
                            ← Previous
                        </button>


                        <button
                            id="review-mark"
                            class="
                                study-button
                                ${
                                    isMarked
                                        ? "marked"
                                        : ""
                                }
                            "
                        >
                            ${
                                isMarked
                                    ? "★ Review Later"
                                    : "☆ Review Later"
                            }
                        </button>

                    </div>


                    <div class="study-actions-group">

                        ${
                            reviewAnswerShown
                                ? `
                                    <button
                                        id="review-next"
                                        class="
                                            study-button
                                            primary
                                        "
                                    >
                                        ${
                                            reviewIndex ===
                                            reviewOrder.length - 1
                                                ? "Finish Review ✓"
                                                : "Next →"
                                        }
                                    </button>
                                `
                                : `
                                    <button
                                        id="review-show"
                                        class="
                                            study-button
                                            primary
                                        "
                                    >
                                        Reveal Answer
                                    </button>
                                `
                        }

                    </div>

                </div>

            </div>

        `;


        const previous =
            document.getElementById(
                "review-prev"
            );


        const mark =
            document.getElementById(
                "review-mark"
            );


        const show =
            document.getElementById(
                "review-show"
            );


        const next =
            document.getElementById(
                "review-next"
            );


        if (previous) {

            previous.addEventListener(
                "click",
                function () {

                    if (
                        reviewIndex > 0
                    ) {

                        reviewIndex--;

                        reviewAnswerShown =
                            false;

                        renderReviewCard();

                    }

                }
            );

        }


        if (mark) {

            mark.addEventListener(
                "click",
                function () {

                    toggleMarkedFact(
                        topic,
                        factIndex
                    );


                    renderReviewCard();

                }
            );

        }


        if (show) {

            show.addEventListener(
                "click",
                function () {

                    reviewAnswerShown =
                        true;

                    renderReviewCard();

                }
            );

        }


        if (next) {

            next.addEventListener(
                "click",
                function () {

                    if (
                        reviewIndex <
                        reviewOrder.length - 1
                    ) {

                        reviewIndex++;

                        reviewAnswerShown =
                            false;

                        renderReviewCard();

                    } else {

                        completeReview(
                            topic
                        );

                    }

                }
            );

        }

    }


    function toggleMarkedFact(
        topic,
        factIndex
    ) {

        const keys =
            topicStorage(
                topic.id
            );


        const marked =
            getArray(
                keys.marked
            );


        const existing =
            marked.indexOf(
                factIndex
            );


        if (
            existing >= 0
        ) {

            marked.splice(
                existing,
                1
            );

        } else {

            marked.push(
                factIndex
            );

        }


        saveArray(
            keys.marked,
            marked
        );

    }


    function completeReview(
        topic
    ) {

        const keys =
            topicStorage(
                topic.id
            );


        localStorage.setItem(
            keys.review,
            "true"
        );


        updateAllProgress();

        updateLessonProgress(
            topic
        );


        const markedCount =
            getArray(
                keys.marked
            ).length;


        studyModalContent.innerHTML = `

            <div class="results">

                <div class="results-icon">
                    🧠
                </div>


                <p class="study-modal-label">
                    REVIEW COMPLETE
                </p>


                <h2>
                    ${topic.shortTitle}
                    Review Complete
                </h2>


                <p class="results-message">
                    You reviewed all
                    ${topic.facts.length}
                    core concepts.
                </p>


                <div class="result-grid">

                    <div class="result-card">

                        <strong>
                            ${topic.facts.length}
                        </strong>

                        <span>
                            Cards Reviewed
                        </span>

                    </div>


                    <div class="result-card">

                        <strong>
                            ${markedCount}
                        </strong>

                        <span>
                            Marked for Review
                        </span>

                    </div>


                    <div class="result-card">

                        <strong>
                            30%
                        </strong>

                        <span>
                            Topic Credit
                        </span>

                    </div>

                </div>


                <div class="study-actions-group"
                     style="justify-content:center;">

                    <button
                        id="review-restart"
                        class="study-button"
                    >
                        Review Again
                    </button>


                    <button
                        id="review-finish"
                        class="
                            study-button
                            primary
                        "
                    >
                        Return to Lesson
                    </button>

                </div>

            </div>

        `;


        document
            .getElementById(
                "review-restart"
            )
            .addEventListener(
                "click",
                function () {

                    startQuickReview(
                        topic
                    );

                }
            );


        document
            .getElementById(
                "review-finish"
            )
            .addEventListener(
                "click",
                closeStudyModal
            );

    }


    // ========================================================
    // GENERATE QUESTION FROM FACT
    // ========================================================

    function createFactQuestion(
        topic,
        factIndex,
        forceMode = null
    ) {

        const fact =
            topic.facts[
                factIndex
            ];


        const otherIndexes =
            shuffle(
                topic.facts
                    .map(
                        (_, index) =>
                            index
                    )
                    .filter(
                        index =>
                            index !== factIndex
                    )
            )
            .slice(
                0,
                3
            );


        const mode =
            forceMode ||
            (
                Math.random() < 0.5
                    ? "definition"
                    : "term"
            );


        let question;

        let rawOptions;


        if (
            mode === "definition"
        ) {

            question =
                `Which statement best describes "${fact.term}"?`;


            rawOptions = [

                {
                    text:
                        fact.definition,

                    correct:
                        true
                },

                ...otherIndexes.map(
                    index => ({

                        text:
                            topic.facts[
                                index
                            ].definition,

                        correct:
                            false

                    })
                )

            ];

        } else {

            question =
                `Which term matches this definition?<br><br><strong>${fact.definition}</strong>`;


            rawOptions = [

                {
                    text:
                        fact.term,

                    correct:
                        true
                },

                ...otherIndexes.map(
                    index => ({

                        text:
                            topic.facts[
                                index
                            ].term,

                        correct:
                            false

                    })
                )

            ];

        }


        const shuffledOptions =
            shuffle(
                rawOptions
            );


        const correctIndex =
            shuffledOptions
                .findIndex(
                    option =>
                        option.correct
                );


        return {

            id:
                `${topic.id}:${factIndex}`,

            topicId:
                topic.id,

            topicNumber:
                topic.number,

            topicTitle:
                topic.shortTitle,

            factIndex:
                factIndex,

            question:
                question,

            options:
                shuffledOptions.map(
                    option =>
                        option.text
                ),

            correct:
                correctIndex,

            explanation:
                `<strong>${fact.term}:</strong> ${fact.definition}`

        };

    }


    // ========================================================
    // TOPIC QUIZ
    // ========================================================

    function startTopicQuiz(
        topic
    ) {

        quizMode =
            "topic";


        quizTopic =
            topic;


        currentTopic =
            topic;


        const indexes =
            shuffle(
                topic.facts.map(
                    (_, index) =>
                        index
                )
            )
            .slice(
                0,
                Math.min(
                    TOPIC_QUIZ_LENGTH,
                    topic.facts.length
                )
            );


        quizQuestions =
            indexes.map(
                index =>
                    createFactQuestion(
                        topic,
                        index
                    )
            );


        beginQuiz(
            `A&P I • TOPIC ${topic.number}`,
            `${topic.shortTitle} Mastery Quiz`
        );

    }


    // ========================================================
    // MIXED PRACTICE
    // ========================================================

    function allFactReferences() {

        const refs = [];


        AP1_TOPICS.forEach(
            topic => {

                topic.facts.forEach(
                    (
                        fact,
                        index
                    ) => {

                        refs.push({

                            topic:
                                topic,

                            factIndex:
                                index

                        });

                    }
                );

            }
        );


        return refs;

    }


    function startMixedPractice() {

        quizMode =
            "practice";


        quizTopic =
            null;


        quizQuestions =
            shuffle(
                allFactReferences()
            )
            .slice(
                0,
                PRACTICE_LENGTH
            )
            .map(
                item =>
                    createFactQuestion(
                        item.topic,
                        item.factIndex
                    )
            );


        beginQuiz(
            "A&P I • MIXED PRACTICE",
            "A&P I Practice Questions"
        );

    }


    // ========================================================
    // FINAL EXAM
    // ========================================================

    function startFinalExam() {

        quizMode =
            "final";


        quizTopic =
            null;


        const selected = [];


        // Try to pull questions across many topics.
        AP1_TOPICS.forEach(
            topic => {

                const index =
                    Math.floor(
                        Math.random() *
                        topic.facts.length
                    );


                selected.push({

                    topic:
                        topic,

                    factIndex:
                        index

                });

            }
        );


        const remainingNeeded =
            FINAL_EXAM_LENGTH -
            selected.length;


        const extra =
            shuffle(
                allFactReferences()
            )
            .slice(
                0,
                remainingNeeded
            );


        quizQuestions =
            shuffle(
                [
                    ...selected,
                    ...extra
                ]
            )
            .slice(
                0,
                FINAL_EXAM_LENGTH
            )
            .map(
                item =>
                    createFactQuestion(
                        item.topic,
                        item.factIndex
                    )
            );


        beginQuiz(
            "A&P I • MASTERY EXAM",
            "A&P I Comprehensive Exam"
        );

    }


    // ========================================================
    // WEAK AREA PRACTICE
    // ========================================================

    function collectWeakFacts() {

        const weak = [];


        AP1_TOPICS.forEach(
            topic => {

                const keys =
                    topicStorage(
                        topic.id
                    );


                const missed =
                    getArray(
                        keys.missed
                    );


                missed.forEach(
                    factIndex => {

                        if (
                            topic.facts[
                                factIndex
                            ]
                        ) {

                            weak.push({

                                topic:
                                    topic,

                                factIndex:
                                    factIndex

                            });

                        }

                    }
                );

            }
        );


        return weak;

    }


    function startWeakPractice() {

        const weak =
            collectWeakFacts();


        if (
            weak.length === 0
        ) {

            showNoWeakAreas();

            return;

        }


        quizMode =
            "weak";


        quizTopic =
            null;


        quizQuestions =
            shuffle(
                weak
            )
            .slice(
                0,
                Math.min(
                    20,
                    weak.length
                )
            )
            .map(
                item =>
                    createFactQuestion(
                        item.topic,
                        item.factIndex
                    )
            );


        beginQuiz(
            "SMART REVIEW",
            "Study My Weak Areas"
        );

    }


    function showNoWeakAreas() {

        studyModalLabel.textContent =
            "SMART REVIEW";


        studyModalTitle.textContent =
            "Study My Weak Areas";


        studyModalContent.innerHTML = `

            <div class="results">

                <div class="results-icon">
                    🎯
                </div>


                <h2>
                    No weak questions saved yet
                </h2>


                <p class="results-message">
                    Questions you answer incorrectly
                    during A&P I quizzes will appear here
                    automatically.
                </p>


                <button
                    id="weak-close"
                    class="
                        study-button
                        primary
                    "
                >
                    Got It
                </button>

            </div>

        `;


        openStudyModal();


        document
            .getElementById(
                "weak-close"
            )
            .addEventListener(
                "click",
                closeStudyModal
            );

    }


    // ========================================================
    // BEGIN QUIZ
    // ========================================================

    function beginQuiz(
        label,
        title
    ) {

        quizIndex =
            0;

        quizCorrect =
            0;

        quizSelected =
            null;

        quizChecked =
            false;


        studyModalLabel.textContent =
            label;


        studyModalTitle.textContent =
            title;


        openStudyModal();

        renderQuiz();

    }


    // ========================================================
    // RENDER QUIZ
    // ========================================================

    function renderQuiz() {

        const question =
            quizQuestions[
                quizIndex
            ];


        const letters =
            [
                "A",
                "B",
                "C",
                "D"
            ];


        const percent =
            Math.round(
                (
                    (quizIndex + 1) /
                    quizQuestions.length
                ) * 100
            );


        const optionHTML =
            question.options
                .map(
                    (
                        option,
                        index
                    ) => {

                        let cls =
                            "quiz-option";


                        if (
                            quizSelected ===
                            index
                        ) {

                            cls +=
                                " selected";

                        }


                        if (
                            quizChecked
                        ) {

                            if (
                                index ===
                                question.correct
                            ) {

                                cls +=
                                    " correct";

                            } else if (
                                index ===
                                quizSelected
                            ) {

                                cls +=
                                    " incorrect";

                            }

                        }


                        return `

                            <button
                                class="${cls}"
                                data-index="${index}"
                                ${
                                    quizChecked
                                        ? "disabled"
                                        : ""
                                }
                            >

                                <span class="quiz-letter">
                                    ${letters[index]}
                                </span>

                                <span>
                                    ${option}
                                </span>

                            </button>

                        `;

                    }
                )
                .join("");


        const isCorrect =
            quizSelected ===
            question.correct;


        const feedback =
            quizChecked
                ? `
                    <div
                        class="
                            quiz-feedback
                            ${
                                isCorrect
                                    ? "correct"
                                    : "incorrect"
                            }
                        "
                    >

                        <strong>
                            ${
                                isCorrect
                                    ? "✓ Correct"
                                    : "✕ Not quite"
                            }
                        </strong>

                        <p>
                            ${question.explanation}
                        </p>

                    </div>
                `
                : "";


        studyModalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>
                        Question ${quizIndex + 1}
                        of ${quizQuestions.length}
                    </span>

                    <span>
                        ${percent}%
                    </span>

                </div>


                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percent}%"
                    >
                    </div>

                </div>

            </div>


            <div class="quiz-body">

                <div class="quiz-card">

                    <p class="quiz-type">
                        ${
                            question.topicTitle
                                ? `TOPIC ${question.topicNumber} • ${question.topicTitle}`
                                : "MULTIPLE CHOICE"
                        }
                    </p>


                    <h3 class="quiz-question">
                        ${question.question}
                    </h3>


                    <div class="quiz-options">
                        ${optionHTML}
                    </div>


                    ${feedback}

                </div>


                <div class="study-actions">

                    <div class="study-actions-group">

                        <button
                            id="quiz-exit"
                            class="study-button"
                        >
                            Exit Quiz
                        </button>

                    </div>


                    <div class="study-actions-group">

                        ${
                            quizChecked
                                ? `
                                    <button
                                        id="quiz-next"
                                        class="
                                            study-button
                                            primary
                                        "
                                    >
                                        ${
                                            quizIndex ===
                                            quizQuestions.length - 1
                                                ? "See Results →"
                                                : "Next Question →"
                                        }
                                    </button>
                                `
                                : `
                                    <button
                                        id="quiz-check"
                                        class="
                                            study-button
                                            primary
                                        "
                                        ${
                                            quizSelected === null
                                                ? "disabled"
                                                : ""
                                        }
                                    >
                                        Check Answer
                                    </button>
                                `
                        }

                    </div>

                </div>

            </div>

        `;


        document
            .querySelectorAll(
                ".quiz-option"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        function () {

                            if (
                                quizChecked
                            ) {

                                return;

                            }


                            quizSelected =
                                Number(
                                    button.dataset.index
                                );


                            renderQuiz();

                        }
                    );

                }
            );


        const check =
            document.getElementById(
                "quiz-check"
            );


        const next =
            document.getElementById(
                "quiz-next"
            );


        const exit =
            document.getElementById(
                "quiz-exit"
            );


        if (check) {

            check.addEventListener(
                "click",
                checkQuizAnswer
            );

        }


        if (next) {

            next.addEventListener(
                "click",
                function () {

                    if (
                        quizIndex <
                        quizQuestions.length - 1
                    ) {

                        quizIndex++;

                        quizSelected =
                            null;

                        quizChecked =
                            false;

                        renderQuiz();

                    } else {

                        finishQuiz();

                    }

                }
            );

        }


        if (exit) {

            exit.addEventListener(
                "click",
                closeStudyModal
            );

        }

    }


    // ========================================================
    // CHECK ANSWER
    // ========================================================

    function checkQuizAnswer() {

        if (
            quizSelected === null ||
            quizChecked
        ) {

            return;

        }


        const question =
            quizQuestions[
                quizIndex
            ];


        const correct =
            quizSelected ===
            question.correct;


        if (correct) {

            quizCorrect++;

            removeWeakFact(
                question
            );

        } else {

            addWeakFact(
                question
            );

        }


        incrementQuestionsAnswered();


        quizChecked =
            true;


        renderQuiz();

    }


    // ========================================================
    // WEAK FACT STORAGE
    // ========================================================

    function addWeakFact(
        question
    ) {

        const topic =
            TOPIC_MAP[
                question.topicId
            ];


        if (!topic) {

            return;

        }


        const keys =
            topicStorage(
                topic.id
            );


        const missed =
            getArray(
                keys.missed
            );


        if (
            !missed.includes(
                question.factIndex
            )
        ) {

            missed.push(
                question.factIndex
            );

        }


        saveArray(
            keys.missed,
            missed
        );

    }


    function removeWeakFact(
        question
    ) {

        const topic =
            TOPIC_MAP[
                question.topicId
            ];


        if (!topic) {

            return;

        }


        const keys =
            topicStorage(
                topic.id
            );


        const missed =
            getArray(
                keys.missed
            )
            .filter(
                index =>
                    index !==
                    question.factIndex
            );


        saveArray(
            keys.missed,
            missed
        );

    }


    // ========================================================
    // QUESTION COUNTER
    // ========================================================

    function incrementQuestionsAnswered() {

        const current =
            getNumber(
                STORAGE.questionsAnswered
            );


        localStorage.setItem(
            STORAGE.questionsAnswered,
            current + 1
        );


        updateAllProgress();

    }


    // ========================================================
    // FINISH QUIZ
    // ========================================================

    function finishQuiz() {

        const percentage =
            Math.round(
                (
                    quizCorrect /
                    quizQuestions.length
                ) * 100
            );


        if (
            quizMode === "topic" &&
            quizTopic
        ) {

            saveTopicQuizResult(
                quizTopic,
                percentage
            );

        }


        showQuizResults(
            percentage
        );


        updateAllProgress();

    }


    function saveTopicQuizResult(
        topic,
        percentage
    ) {

        const keys =
            topicStorage(
                topic.id
            );


        const previousBest =
            getNumber(
                keys.score
            );


        const newBest =
            Math.max(
                previousBest,
                percentage
            );


        localStorage.setItem(
            keys.score,
            newBest
        );


        localStorage.setItem(
            keys.attempts,
            getNumber(
                keys.attempts
            ) + 1
        );


        if (
            percentage >=
            PASS_PERCENT
        ) {

            localStorage.setItem(
                keys.passed,
                "true"
            );

        }


        if (
            currentTopic &&
            currentTopic.id ===
            topic.id
        ) {

            updateLessonProgress(
                topic
            );

        }

    }


    // ========================================================
    // RESULTS
    // ========================================================

    function showQuizResults(
        percentage
    ) {

        const incorrect =
            quizQuestions.length -
            quizCorrect;


        const passed =
            percentage >=
            PASS_PERCENT;


        let title;

        let message;

        let icon;


        if (
            quizMode === "topic"
        ) {

            icon =
                passed
                    ? "🏆"
                    : "📚";


            title =
                passed
                    ? `${quizTopic.shortTitle} Mastered!`
                    : "Review and Try Again";


            message =
                passed
                    ? `You reached the ${PASS_PERCENT}% mastery requirement. This topic is now marked complete.`
                    : `You need at least ${PASS_PERCENT}% to master this topic. Review your weak areas and take another randomized attempt.`;

        } else if (
            quizMode === "final"
        ) {

            icon =
                percentage >= 80
                    ? "🏆"
                    : "📘";


            title =
                "A&P I Mastery Exam Complete";


            message =
                `You completed ${quizQuestions.length} mixed questions from across A&P I.`;

        } else if (
            quizMode === "weak"
        ) {

            icon =
                "🎯";


            title =
                "Weak-Area Review Complete";


            message =
                "Correctly answered weak concepts are automatically removed from your weak-area list.";

        } else {

            icon =
                "🧠";


            title =
                "Practice Complete";


            message =
                "Your missed concepts have been added to Smart Review.";

        }


        let bestScore = "";


        if (
            quizMode === "topic" &&
            quizTopic
        ) {

            const keys =
                topicStorage(
                    quizTopic.id
                );


            bestScore =
                getNumber(
                    keys.score
                );

        }


        studyModalContent.innerHTML = `

            <div class="results">

                <div class="results-icon">
                    ${icon}
                </div>


                <p class="study-modal-label">
                    RESULTS
                </p>


                <h2>
                    ${title}
                </h2>


                <p class="results-message">
                    ${message}
                </p>


                <div class="score-circle">

                    <strong>
                        ${percentage}%
                    </strong>

                    <span>
                        SCORE
                    </span>

                </div>


                <div class="result-grid">

                    <div class="result-card">

                        <strong>
                            ${quizCorrect}
                        </strong>

                        <span>
                            Correct
                        </span>

                    </div>


                    <div class="result-card">

                        <strong>
                            ${incorrect}
                        </strong>

                        <span>
                            Incorrect
                        </span>

                    </div>


                    <div class="result-card">

                        <strong>
                            ${
                                bestScore !== ""
                                    ? `${bestScore}%`
                                    : collectWeakFacts().length
                            }
                        </strong>

                        <span>
                            ${
                                bestScore !== ""
                                    ? "Best Topic Score"
                                    : "Weak Concepts"
                            }
                        </span>

                    </div>

                </div>


                <div
                    class="study-actions-group"
                    style="
                        justify-content:center;
                        flex-wrap:wrap;
                    "
                >

                    ${
                        quizMode === "topic"
                            ? `
                                <button
                                    id="result-retake"
                                    class="study-button"
                                >
                                    🔄 New Quiz
                                </button>


                                <button
                                    id="result-review"
                                    class="study-button"
                                >
                                    🧠 Quick Review
                                </button>
                            `
                            : ""
                    }


                    ${
                        quizMode === "weak"
                            ? `
                                <button
                                    id="result-weak-again"
                                    class="study-button"
                                >
                                    🎯 Review Remaining Weak Areas
                                </button>
                            `
                            : ""
                    }


                    <button
                        id="result-close"
                        class="
                            study-button
                            primary
                        "
                    >
                        Finish
                    </button>

                </div>

            </div>

        `;


        const retake =
            document.getElementById(
                "result-retake"
            );


        const review =
            document.getElementById(
                "result-review"
            );


        const weakAgain =
            document.getElementById(
                "result-weak-again"
            );


        const close =
            document.getElementById(
                "result-close"
            );


        if (retake) {

            retake.addEventListener(
                "click",
                function () {

                    startTopicQuiz(
                        quizTopic
                    );

                }
            );

        }


        if (review) {

            review.addEventListener(
                "click",
                function () {

                    startQuickReview(
                        quizTopic
                    );

                }
            );

        }


        if (weakAgain) {

            weakAgain.addEventListener(
                "click",
                startWeakPractice
            );

        }


        if (close) {

            close.addEventListener(
                "click",
                closeStudyModal
            );

        }

    }


    // ========================================================
    // USERNAME
    // ========================================================

    function enterApp(
        name
    ) {

        const clean =
            name.trim();


        if (!clean) {

            if (usernameInput) {

                usernameInput.focus();

                usernameInput.style.borderColor =
                    "#dc2626";

            }

            return;

        }


        localStorage.setItem(
            STORAGE.username,
            clean
        );


        if (welcomeName) {

            welcomeName.textContent =
                `Welcome, ${clean}`;

        }


        if (dashboardGreeting) {

            dashboardGreeting.textContent =
                `Ready to study, ${clean}?`;

        }


        welcomeScreen.classList.add(
            "hidden"
        );


        app.classList.remove(
            "hidden"
        );


        showDashboard();

    }


    if (startButton) {

        startButton.addEventListener(
            "click",
            function () {

                enterApp(
                    usernameInput.value
                );

            }
        );

    }


    if (usernameInput) {

        usernameInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    enterApp(
                        usernameInput.value
                    );

                }

            }
        );


        usernameInput.addEventListener(
            "input",
            function () {

                usernameInput.style.borderColor =
                    "";

            }
        );

    }


    // ========================================================
    // THEME
    // ========================================================

    function setTheme(
        theme
    ) {

        if (
            theme === "dark"
        ) {

            document.body.classList.add(
                "dark-mode"
            );


            if (themeButton) {

                themeButton.textContent =
                    "☀️";

            }

        } else {

            document.body.classList.remove(
                "dark-mode"
            );


            if (themeButton) {

                themeButton.textContent =
                    "🌙";

            }

        }


        localStorage.setItem(
            STORAGE.theme,
            theme
        );

    }


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            function () {

                const dark =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                setTheme(
                    dark
                        ? "light"
                        : "dark"
                );

            }
        );

    }


    // ========================================================
    // COURSE NAVIGATION
    // ========================================================

    if (anatomy1Card) {

        anatomy1Card.addEventListener(
            "click",
            showAnatomy1
        );


        const startCourse =
            anatomy1Card.querySelector(
                ".course-button"
            );


        if (startCourse) {

            startCourse.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    showAnatomy1();

                }
            );

        }

    }


    if (backToDashboardButton) {

        backToDashboardButton.addEventListener(
            "click",
            showDashboard
        );

    }


    // ========================================================
    // CONNECT ALL 26 TOPIC CARDS
    // ========================================================

    document
        .querySelectorAll(
            "#anatomy1-page .topic-card[data-topic]"
        )
        .forEach(
            card => {

                const topicId =
                    card.dataset.topic;


                if (
                    !TOPIC_MAP[
                        topicId
                    ]
                ) {

                    return;

                }


                card.addEventListener(
                    "click",
                    function () {

                        showTopic(
                            topicId
                        );

                    }
                );


                const button =
                    card.querySelector(
                        ".topic-button"
                    );


                if (button) {

                    button.addEventListener(
                        "click",
                        function (event) {

                            event.stopPropagation();

                            showTopic(
                                topicId
                            );

                        }
                    );

                }

            }
        );


    // ========================================================
    // FINAL PRACTICE BUTTONS
    // ========================================================

    if (anatomy1PracticeButton) {

        anatomy1PracticeButton.addEventListener(
            "click",
            startMixedPractice
        );

    }


    if (anatomy1ExamButton) {

        anatomy1ExamButton.addEventListener(
            "click",
            startFinalExam
        );

    }


    if (weakAreaButton) {

        weakAreaButton.addEventListener(
            "click",
            startWeakPractice
        );

    }


    // ========================================================
    // OTHER COURSE BUTTONS
    // ========================================================

    document
        .querySelectorAll(
            '.course-card:not([data-course="anatomy1"])'
        )
        .forEach(
            card => {

                const button =
                    card.querySelector(
                        ".course-button"
                    );


                if (!button) {

                    return;

                }


                button.addEventListener(
                    "click",
                    function (
                        event
                    ) {

                        event.stopPropagation();


                        const course =
                            card.dataset.course;


                        const names = {

                            anatomy2:
                                "Anatomy & Physiology II",

                            chemistry:
                                "Chemistry",

                            microbiology:
                                "Microbiology",

                            statistics:
                                "Statistics",

                            nutrition:
                                "Nutrition & Diet",

                            labs:
                                "Lab Practice",

                            teas:
                                "TEAS Practice Center"

                        };


                        alert(
                            `${names[course]} is coming next. We are completing A&P I first.`
                        );

                    }
                );

            }
        );


    // ========================================================
    // KEYBOARD
    // ========================================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                !studyOverlay.classList.contains(
                    "hidden"
                )
            ) {

                closeStudyModal();

            }

        }
    );


    // ========================================================
    // SCROLL
    // ========================================================

    function scrollTop() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    // ========================================================
    // INITIALIZE
    // ========================================================

    createModalStyles();

    registerStudyDay();


    const savedTheme =
        localStorage.getItem(
            STORAGE.theme
        );


    setTheme(
        savedTheme === "dark"
            ? "dark"
            : "light"
    );


    const savedUser =
        localStorage.getItem(
            STORAGE.username
        );


    if (savedUser) {

        if (welcomeName) {

            welcomeName.textContent =
                `Welcome, ${savedUser}`;

        }


        if (dashboardGreeting) {

            dashboardGreeting.textContent =
                `Ready to study, ${savedUser}?`;

        }


        welcomeScreen.classList.add(
            "hidden"
        );


        app.classList.remove(
            "hidden"
        );


        showDashboard();

    }


    updateAllProgress();

});