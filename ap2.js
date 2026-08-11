// ============================================================
// NURSING STUDY HUB
// ANATOMY & PHYSIOLOGY II
// FULL COURSE BUILD
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================================
    // SETTINGS
    // ========================================================

    const COURSE_TITLE =
        "Anatomy & Physiology II";

    const PASS_SCORE =
        90;

    const TOPIC_QUIZ_LENGTH =
        10;

    const PRACTICE_LENGTH =
        25;

    const FINAL_EXAM_LENGTH =
        50;

    const SHARED_QUESTIONS_KEY =
        "nursingStudyHubQuestionsAnswered";


    // ========================================================
    // EXISTING WEBSITE ELEMENTS
    // ========================================================

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

    const anatomy1Page =
        document.getElementById("anatomy1-page");

    const anatomy1Card =
        document.querySelector(
            '.course-card[data-course="anatomy1"]'
        );

    const anatomy2Card =
        document.querySelector(
            '.course-card[data-course="anatomy2"]'
        );

    const overallProgress =
        document.getElementById("overall-progress");

    const overallProgressBar =
        document.getElementById("overall-progress-bar");

    const topicsMastered =
        document.getElementById("topics-mastered");

    const questionsAnswered =
        document.getElementById("questions-answered");


    // ========================================================
    // MODULE STRUCTURE
    // ========================================================

    const MODULES = [

        {
            number: 1,
            title: "Endocrine Regulation"
        },

        {
            number: 2,
            title: "Blood & Hematology"
        },

        {
            number: 3,
            title: "Cardiovascular System"
        },

        {
            number: 4,
            title: "Lymphatic & Immune Systems"
        },

        {
            number: 5,
            title: "Respiratory System"
        },

        {
            number: 6,
            title: "Digestive System & Metabolism"
        },

        {
            number: 7,
            title: "Urinary System, Fluids & Acid-Base"
        },

        {
            number: 8,
            title: "Reproduction, Pregnancy & Genetics"
        }

    ];


    // ========================================================
    // HELPER FOR CREATING TOPICS
    // ========================================================

    function createTopic(
        id,
        number,
        module,
        title,
        description,
        objectives,
        facts,
        sections,
        clinical,
        traps,
        summary,
        tags = ["Theory", "Clinical", "Quiz"]
    ) {

        return {

            id,
            number,
            module,
            title,
            description,
            objectives,
            facts,
            sections,
            clinical,
            traps,
            summary,
            tags

        };

    }


    // ========================================================
    // COMPLETE A&P II CURRICULUM
    // ========================================================

    const AP2_TOPICS = [


        // ====================================================
        // TOPIC 1
        // ====================================================

        createTopic(

            "endocrine-principles",

            1,

            1,

            "Endocrine Principles & Hormone Signaling",

            "Build the foundation for endocrine physiology by learning how hormones are released, transported, recognized by target cells and controlled through feedback mechanisms.",

            [

                "Distinguish endocrine signaling from neural, paracrine and autocrine signaling.",

                "Compare water-soluble and lipid-soluble hormone mechanisms.",

                "Explain how receptors determine target-cell specificity.",

                "Explain negative-feedback regulation of endocrine pathways.",

                "Describe receptor up-regulation and down-regulation."

            ],

            [

                [
                    "Hormone",
                    "A chemical messenger released into body fluids that changes the activity of specific target cells."
                ],

                [
                    "Endocrine Gland",
                    "A ductless gland that releases hormones into interstitial fluid and blood."
                ],

                [
                    "Target Cell",
                    "A cell that can respond to a hormone because it possesses the appropriate receptor."
                ],

                [
                    "Hormone Receptor",
                    "A protein that selectively binds a hormone and initiates a cellular response."
                ],

                [
                    "Water-Soluble Hormone",
                    "A hormone that usually binds to a plasma-membrane receptor and activates intracellular signaling pathways."
                ],

                [
                    "Lipid-Soluble Hormone",
                    "A hormone that can enter target cells and usually binds an intracellular receptor."
                ],

                [
                    "Second Messenger",
                    "An intracellular signaling molecule generated after receptor activation."
                ],

                [
                    "Tropic Hormone",
                    "A hormone whose major target is another endocrine gland."
                ],

                [
                    "Negative Feedback",
                    "Regulation in which a hormone or its physiological effect reduces further secretion from the pathway."
                ],

                [
                    "Up-Regulation",
                    "An increase in receptor number or cellular sensitivity."
                ],

                [
                    "Down-Regulation",
                    "A decrease in receptor number or responsiveness after prolonged stimulation."
                ],

                [
                    "Half-Life",
                    "The time required for the blood concentration of a substance to decrease by one-half."
                ]

            ],

            [

                {
                    label: "ENDOCRINE COMMUNICATION",

                    title:
                        "How Hormones Communicate Between Organs",

                    paragraphs: [

                        "The endocrine system allows cells in one part of the body to influence distant tissues. Endocrine cells release hormones into the extracellular fluid. The hormones enter the bloodstream and circulate throughout the body.",

                        "Even though many tissues are exposed to a circulating hormone, only cells containing the correct receptor respond. This receptor specificity explains why insulin can circulate throughout the body while producing different effects in liver, skeletal muscle and adipose tissue.",

                        "Endocrine signaling is generally slower to begin than direct nervous-system signaling because hormones must be released, transported and bind receptors. However, endocrine effects may persist much longer than a brief neural signal.",

                        "The body also uses local chemical communication. Paracrine signals influence nearby cells, while autocrine signals influence the same cell that released the signal."

                    ],

                    table: {

                        headers: [
                            "Communication Type",
                            "How It Travels",
                            "Typical Target"
                        ],

                        rows: [

                            [
                                "Endocrine",
                                "Blood",
                                "Distant cells"
                            ],

                            [
                                "Neural",
                                "Axons and synapses",
                                "Specific postsynaptic cells"
                            ],

                            [
                                "Paracrine",
                                "Local extracellular fluid",
                                "Nearby cells"
                            ],

                            [
                                "Autocrine",
                                "Local extracellular fluid",
                                "Same cell"
                            ]

                        ]

                    }

                },


                {
                    label: "HORMONE MECHANISMS",

                    title:
                        "Water-Soluble vs. Lipid-Soluble Hormones",

                    paragraphs: [

                        "Water-soluble hormones cannot freely pass through the hydrophobic interior of the plasma membrane. Peptide hormones such as insulin and many catecholamines therefore bind receptors located on the cell surface.",

                        "Activation of the membrane receptor triggers intracellular signaling. Second messengers such as cyclic AMP can amplify the original hormonal signal, meaning that a small amount of hormone can produce a large cellular response.",

                        "Lipid-soluble hormones such as steroid hormones can cross the plasma membrane. They commonly bind receptors in the cytoplasm or nucleus. The hormone-receptor complex can then alter gene transcription and change which proteins the cell produces.",

                        "Because lipid-soluble hormones frequently alter gene expression, their responses may begin more slowly but can persist for a longer period."

                    ],

                    table: {

                        headers: [
                            "Feature",
                            "Water-Soluble",
                            "Lipid-Soluble"
                        ],

                        rows: [

                            [
                                "Receptor",
                                "Usually membrane",
                                "Usually intracellular"
                            ],

                            [
                                "Typical signal",
                                "Second messenger",
                                "Gene transcription"
                            ],

                            [
                                "Blood transport",
                                "Often free",
                                "Often protein-bound"
                            ],

                            [
                                "Examples",
                                "Insulin, ADH",
                                "Cortisol, aldosterone"
                            ]

                        ]

                    }

                },


                {
                    label: "FEEDBACK",

                    title:
                        "Negative Feedback Keeps Hormones Under Control",

                    paragraphs: [

                        "Most endocrine systems operate through negative feedback. When the final hormone concentration or physiological effect becomes adequate, that signal reduces activity earlier in the pathway.",

                        "A common endocrine pattern begins with the hypothalamus. The hypothalamus stimulates the anterior pituitary, which releases a tropic hormone. That hormone stimulates a peripheral endocrine gland. The final hormone then acts on target tissues and feeds back to the pituitary and hypothalamus.",

                        "For example, hypothalamic TRH supports TSH secretion from the anterior pituitary. TSH stimulates the thyroid. Rising thyroid hormone concentrations then suppress further TRH and TSH secretion.",

                        "Negative feedback prevents uncontrolled hormone production while allowing secretion to increase when the physiological effect becomes inadequate."

                    ],

                    flow: [

                        [
                            "Hypothalamus",
                            "Releasing hormone begins the endocrine axis."
                        ],

                        [
                            "Anterior Pituitary",
                            "Tropic hormone stimulates another gland."
                        ],

                        [
                            "Peripheral Gland",
                            "Final hormone enters circulation."
                        ],

                        [
                            "Target Tissue",
                            "Physiological response occurs."
                        ],

                        [
                            "Negative Feedback",
                            "Final hormone suppresses earlier parts of the pathway."
                        ]

                    ]

                }

            ],

            {
                title:
                    "Primary vs. Secondary Endocrine Disorders",

                scenario:
                    "Suppose thyroid hormone is low. If the thyroid gland itself is failing, pituitary TSH will usually rise because the pituitary is trying to stimulate the thyroid. If the pituitary itself is failing, both TSH and thyroid hormone may be low.",

                connection:
                    "The same feedback logic can be applied to many endocrine disorders. Always ask which gland is failing and what the controlling hormone should do in response."

            },

            [

                "Do not assume that every circulating hormone affects every tissue.",

                "Negative feedback does not mean hormone levels must always decrease. It means the response opposes the original disturbance.",

                "A hormone can be present normally but produce little effect if its receptor or intracellular signaling pathway is defective."

            ],

            [

                "Hormones affect target cells with the correct receptors.",

                "Water-soluble hormones usually use membrane receptors.",

                "Lipid-soluble hormones often use intracellular receptors.",

                "Second messengers amplify hormonal signals.",

                "Most endocrine pathways use negative feedback.",

                "Tropic hormones regulate other endocrine glands.",

                "Receptor number influences tissue sensitivity."

            ]

        ),


        // ====================================================
        // TOPIC 2
        // ====================================================

        createTopic(

            "hypothalamus-pituitary",

            2,

            1,

            "Hypothalamus & Pituitary Gland",

            "Learn how the hypothalamus controls the anterior and posterior pituitary and how pituitary hormones regulate growth, thyroid, adrenal, reproductive and water-balance physiology.",

            [

                "Explain how the hypothalamus controls the anterior pituitary.",

                "Explain how ADH and oxytocin reach the posterior pituitary.",

                "Match major anterior pituitary hormones with their targets.",

                "Explain the physiological effects of ADH and oxytocin.",

                "Apply negative feedback to hypothalamic-pituitary axes."

            ],

            [

                [
                    "Hypothalamus",
                    "A brain region that integrates nervous and endocrine regulation and controls much of pituitary function."
                ],

                [
                    "Anterior Pituitary",
                    "The glandular portion of the pituitary that synthesizes several major hormones."
                ],

                [
                    "Posterior Pituitary",
                    "The neural portion of the pituitary that stores and releases hypothalamic ADH and oxytocin."
                ],

                [
                    "Pituitary Portal System",
                    "Blood vessels carrying hypothalamic releasing hormones directly to the anterior pituitary."
                ],

                [
                    "Growth Hormone",
                    "An anterior pituitary hormone that promotes growth and influences metabolism."
                ],

                [
                    "TSH",
                    "Thyroid-stimulating hormone that stimulates thyroid hormone secretion."
                ],

                [
                    "ACTH",
                    "Adrenocorticotropic hormone that stimulates the adrenal cortex, especially cortisol production."
                ],

                [
                    "FSH",
                    "Follicle-stimulating hormone involved in follicular development and spermatogenesis."
                ],

                [
                    "LH",
                    "Luteinizing hormone involved in ovulation, corpus luteum function and testosterone secretion."
                ],

                [
                    "Prolactin",
                    "An anterior pituitary hormone that promotes milk production."
                ],

                [
                    "ADH",
                    "A hypothalamic hormone released from the posterior pituitary that increases renal water reabsorption."
                ],

                [
                    "Oxytocin",
                    "A hypothalamic hormone released from the posterior pituitary that promotes uterine contraction and milk ejection."
                ]

            ],

            [

                {
                    label: "ANATOMY",

                    title:
                        "The Pituitary Has Two Very Different Lobes",

                    paragraphs: [

                        "The pituitary gland sits below the hypothalamus and connects to it through the infundibulum. Although the anterior and posterior pituitary lie beside one another, they function very differently.",

                        "The anterior pituitary is glandular tissue. Hypothalamic neurons release regulatory hormones into capillaries. These hormones travel through the hypophyseal portal system directly to anterior pituitary endocrine cells.",

                        "The posterior pituitary is neural tissue. ADH and oxytocin are actually synthesized by neurons in the hypothalamus. The hormones travel down axons and are stored in nerve terminals in the posterior pituitary until release.",

                        "Therefore, the posterior pituitary releases hormones, but it does not synthesize ADH or oxytocin."

                    ]

                },


                {
                    label: "ANTERIOR PITUITARY",

                    title:
                        "Major Anterior Pituitary Hormones",

                    paragraphs: [

                        "Growth hormone acts on many tissues and also stimulates production of insulin-like growth factors, particularly from the liver. Growth hormone supports bone and tissue growth while also changing carbohydrate and fat metabolism.",

                        "TSH stimulates thyroid follicular cells to produce thyroid hormones. ACTH stimulates the adrenal cortex and is especially important for cortisol secretion.",

                        "FSH and LH are called gonadotropins because they act on the gonads. FSH supports ovarian follicle development and spermatogenesis. LH triggers ovulation and stimulates testosterone production in the testes.",

                        "Prolactin stimulates milk production in mammary glands. Its secretion is strongly influenced by hypothalamic dopamine."

                    ],

                    table: {

                        headers: [
                            "Hormone",
                            "Primary Target",
                            "Major Function"
                        ],

                        rows: [

                            [
                                "GH",
                                "Many tissues",
                                "Growth and metabolism"
                            ],

                            [
                                "TSH",
                                "Thyroid",
                                "T3/T4 secretion"
                            ],

                            [
                                "ACTH",
                                "Adrenal cortex",
                                "Cortisol secretion"
                            ],

                            [
                                "FSH",
                                "Gonads",
                                "Follicles / sperm"
                            ],

                            [
                                "LH",
                                "Gonads",
                                "Ovulation / testosterone"
                            ],

                            [
                                "Prolactin",
                                "Mammary gland",
                                "Milk production"
                            ]

                        ]

                    }

                },


                {
                    label: "POSTERIOR PITUITARY",

                    title:
                        "ADH & Oxytocin",

                    paragraphs: [

                        "ADH secretion is strongly stimulated when plasma osmolality rises. Specialized hypothalamic osmoreceptors detect this increased concentration. ADH then increases water permeability in kidney collecting ducts, allowing more water to return to the bloodstream.",

                        "Significant reductions in blood volume or pressure can also increase ADH. In this situation the body prioritizes preservation of circulating volume even if osmolality is not elevated.",

                        "Oxytocin participates in two classic physiological processes. During childbirth, cervical stretch stimulates oxytocin release, which strengthens uterine contractions. During breastfeeding, infant suckling stimulates oxytocin release and contraction of myoepithelial cells around mammary glands, causing milk ejection.",

                        "Oxytocin therefore provides classic examples of positive feedback, while ADH is primarily involved in homeostatic water regulation."

                    ]

                }

            ],

            {
                title:
                    "ADH Deficiency",

                scenario:
                    "If ADH secretion or action becomes inadequate, collecting ducts remain relatively impermeable to water. Large quantities of dilute urine may be produced.",

                connection:
                    "The physiological sequence is straightforward: less ADH → less water reabsorbed → more dilute urine → increased free-water loss and dehydration risk."

            },

            [

                "The posterior pituitary stores and releases ADH and oxytocin but does not synthesize them.",

                "Prolactin produces milk. Oxytocin causes milk ejection.",

                "TSH is not thyroid hormone. It stimulates thyroid hormone secretion."

            ],

            [

                "Anterior pituitary is controlled through hypothalamic releasing and inhibiting hormones.",

                "Posterior pituitary is neural tissue.",

                "GH supports growth and metabolism.",

                "TSH stimulates the thyroid.",

                "ACTH stimulates the adrenal cortex.",

                "FSH and LH regulate reproductive function.",

                "ADH conserves body water.",

                "Oxytocin supports labor and milk ejection."

            ]

        ),


        // ====================================================
        // TOPIC 3
        // ====================================================

        createTopic(

            "thyroid-parathyroid",

            3,

            1,

            "Thyroid, Parathyroid & Calcium Regulation",

            "Learn thyroid hormone synthesis and effects and understand how parathyroid hormone, vitamin D, bone, kidney and intestine cooperate to regulate calcium.",

            [

                "Describe thyroid follicle anatomy.",

                "Explain how T3 and T4 are regulated.",

                "Explain the physiological effects of thyroid hormone.",

                "Explain how PTH raises blood calcium.",

                "Connect PTH, vitamin D, kidney, intestine and bone."

            ],

            [

                [
                    "T3",
                    "Triiodothyronine, the more biologically active thyroid hormone at many target tissues."
                ],

                [
                    "T4",
                    "Thyroxine, the major thyroid hormone released into circulation and a precursor of T3."
                ],

                [
                    "Follicular Cell",
                    "A thyroid cell that synthesizes and releases T3 and T4."
                ],

                [
                    "Thyroglobulin",
                    "A large protein used as the scaffold for thyroid hormone synthesis."
                ],

                [
                    "Iodide",
                    "The iodine ion required for thyroid hormone synthesis."
                ],

                [
                    "Parafollicular Cell",
                    "A thyroid C cell that produces calcitonin."
                ],

                [
                    "Calcitonin",
                    "A thyroid hormone that can reduce osteoclast activity."
                ],

                [
                    "Parathyroid Hormone",
                    "The major hormone released in response to low blood calcium."
                ],

                [
                    "Vitamin D",
                    "A steroid-like hormone system that increases intestinal calcium absorption."
                ],

                [
                    "Hypocalcemia",
                    "Abnormally low blood calcium."
                ],

                [
                    "Hypercalcemia",
                    "Abnormally high blood calcium."
                ]

            ],

            [

                {
                    label: "THYROID",

                    title:
                        "Thyroid Follicles & T3/T4",

                    paragraphs: [

                        "The thyroid gland contains spherical follicles filled with a protein-rich material called colloid. Follicular cells surround each follicle and synthesize thyroid hormones.",

                        "Thyroid hormone synthesis requires iodine. Follicular cells actively transport iodide from the blood and incorporate iodine into tyrosine residues within thyroglobulin.",

                        "TSH from the anterior pituitary stimulates most steps of thyroid hormone synthesis and release. The thyroid secretes mostly T4 and smaller amounts of T3. Peripheral tissues can convert T4 into the more active T3.",

                        "Thyroid hormones increase metabolic activity in many tissues and are essential for normal growth and nervous-system development."

                    ]

                },


                {
                    label: "THYROID FEEDBACK",

                    title:
                        "TRH → TSH → T3/T4",

                    paragraphs: [

                        "The hypothalamus produces TRH, which promotes TSH secretion from the anterior pituitary. TSH stimulates thyroid follicular cells.",

                        "As T3 and T4 concentrations increase, they provide negative feedback to both the pituitary and hypothalamus, reducing further TSH and TRH secretion.",

                        "This relationship is important when interpreting thyroid disorders. A failing thyroid may produce low thyroid hormone despite high TSH stimulation. A failing pituitary may produce both low TSH and low thyroid hormone."

                    ],

                    flow: [

                        [
                            "Hypothalamus",
                            "TRH"
                        ],

                        [
                            "Anterior Pituitary",
                            "TSH"
                        ],

                        [
                            "Thyroid",
                            "T3 and T4"
                        ],

                        [
                            "Target Tissues",
                            "Metabolic effects"
                        ],

                        [
                            "Negative Feedback",
                            "T3/T4 suppress TRH and TSH"
                        ]

                    ]

                },


                {
                    label: "CALCIUM",

                    title:
                        "Parathyroid Hormone & Vitamin D",

                    paragraphs: [

                        "Blood calcium must be kept within a narrow range because calcium is required for muscle contraction, neurotransmitter release, blood coagulation and intracellular signaling.",

                        "When blood calcium falls, parathyroid chief cells release PTH. PTH increases renal calcium reabsorption, promotes phosphate excretion and stimulates formation of active vitamin D.",

                        "Active vitamin D increases calcium absorption from the intestine. PTH also supports mobilization of calcium from bone when necessary.",

                        "Bone should therefore be viewed as both structural tissue and a large calcium reservoir that communicates with the kidneys and gastrointestinal system."

                    ],

                    table: {

                        headers: [
                            "Hormone",
                            "Major Effect"
                        ],

                        rows: [

                            [
                                "PTH",
                                "Raises low blood calcium"
                            ],

                            [
                                "Vitamin D",
                                "Increases intestinal calcium absorption"
                            ],

                            [
                                "Calcitonin",
                                "Can reduce osteoclast activity"
                            ]

                        ]

                    }

                }

            ],

            {
                title:
                    "Hypocalcemia",

                scenario:
                    "Significant decreases in extracellular calcium can increase neuromuscular excitability, producing tingling, muscle spasms or tetany.",

                connection:
                    "Calcium stabilizes excitable membranes and is also directly involved in muscle contraction and neurotransmitter release."

            },

            [

                "PTH is produced by parathyroid glands, not by the thyroid gland.",

                "TSH stimulates T3/T4 production. It does not directly regulate PTH.",

                "Calcitonin has a smaller day-to-day role in adult calcium regulation than PTH and vitamin D."

            ],

            [

                "Follicular cells make T3 and T4.",

                "Iodine is required for thyroid hormone synthesis.",

                "TSH stimulates thyroid hormone secretion.",

                "T3/T4 provide negative feedback.",

                "PTH rises when calcium falls.",

                "Vitamin D increases intestinal calcium absorption.",

                "Calcium is essential for nerve, muscle and clotting functions."

            ]

        ),


        // ====================================================
        // TOPIC 4
        // ====================================================

        createTopic(

            "adrenal-pancreas",

            4,

            1,

            "Adrenal Glands, Pancreas & Metabolic Hormones",

            "Integrate adrenal cortex and medulla physiology with insulin, glucagon, stress responses and fed-versus-fasting metabolism.",

            [

                "Differentiate adrenal cortex and medulla.",

                "Explain aldosterone physiology.",

                "Explain cortisol physiology.",

                "Compare insulin and glucagon.",

                "Connect endocrine hormones with stress and energy balance."

            ],

            [

                [
                    "Adrenal Cortex",
                    "The outer adrenal region that produces steroid hormones."
                ],

                [
                    "Aldosterone",
                    "A mineralocorticoid that increases sodium reabsorption and potassium secretion."
                ],

                [
                    "Cortisol",
                    "A glucocorticoid involved in stress metabolism and suppression of inflammation."
                ],

                [
                    "Adrenal Medulla",
                    "The inner adrenal region that releases catecholamines."
                ],

                [
                    "Epinephrine",
                    "A catecholamine that supports fight-or-flight responses."
                ],

                [
                    "Insulin",
                    "A pancreatic beta-cell hormone that promotes glucose use and nutrient storage."
                ],

                [
                    "Glucagon",
                    "A pancreatic alpha-cell hormone that supports blood glucose during fasting."
                ],

                [
                    "Beta Cell",
                    "A pancreatic islet cell that produces insulin."
                ],

                [
                    "Alpha Cell",
                    "A pancreatic islet cell that produces glucagon."
                ],

                [
                    "Somatostatin",
                    "A pancreatic delta-cell hormone that inhibits several endocrine and digestive processes."
                ],

                [
                    "Melatonin",
                    "A pineal hormone involved in circadian rhythms."
                ]

            ],

            [

                {
                    label: "ADRENAL CORTEX",

                    title:
                        "Aldosterone & Cortisol",

                    paragraphs: [

                        "The adrenal cortex is the outer region of each adrenal gland. Because cortical hormones are steroids, they are synthesized from cholesterol and generally act through intracellular receptors.",

                        "Aldosterone acts mainly on the distal nephron. It promotes sodium reabsorption while increasing potassium secretion. Retaining sodium can contribute to water retention and support extracellular-fluid volume.",

                        "Aldosterone secretion is controlled mainly by the renin-angiotensin-aldosterone system and blood potassium rather than ACTH.",

                        "Cortisol increases fuel availability during stress. It supports gluconeogenesis, affects protein and fat metabolism and suppresses many inflammatory and immune processes. ACTH is an important regulator of cortisol."

                    ]

                },


                {
                    label: "ADRENAL MEDULLA",

                    title:
                        "The Endocrine Side of the Sympathetic Response",

                    paragraphs: [

                        "The adrenal medulla functions like a modified sympathetic ganglion. Sympathetic preganglionic neurons stimulate chromaffin cells, which release epinephrine and norepinephrine into the bloodstream.",

                        "These hormones reinforce the sympathetic fight-or-flight response. Heart rate and cardiac contractility increase, fuel is mobilized and blood flow is redirected toward tissues needed for immediate physical activity.",

                        "Because catecholamines enter the circulation, adrenal-medullary effects can persist longer than neurotransmitter released at a single sympathetic nerve ending."

                    ]

                },


                {
                    label: "PANCREAS",

                    title:
                        "Insulin & Glucagon",

                    paragraphs: [

                        "The endocrine pancreas is organized into clusters called pancreatic islets. Beta cells produce insulin, alpha cells produce glucagon and delta cells produce somatostatin.",

                        "After a meal, rising blood glucose stimulates insulin secretion. Insulin promotes glucose uptake in insulin-sensitive tissues and supports glycogen synthesis, fat storage and protein synthesis.",

                        "During fasting, glucagon becomes relatively more important. Glucagon stimulates hepatic glycogen breakdown and gluconeogenesis, helping maintain blood glucose for tissues that depend strongly on glucose.",

                        "Insulin and glucagon therefore help shift metabolism between nutrient storage after eating and fuel mobilization during fasting."

                    ],

                    table: {

                        headers: [
                            "State",
                            "Hormone Pattern",
                            "Metabolic Direction"
                        ],

                        rows: [

                            [
                                "Fed",
                                "Insulin ↑",
                                "Storage and synthesis"
                            ],

                            [
                                "Fasting",
                                "Glucagon relatively ↑",
                                "Fuel mobilization"
                            ]

                        ]

                    }

                }

            ],

            {
                title:
                    "Diabetes Physiology",

                scenario:
                    "When insulin secretion is inadequate or tissues respond poorly to insulin, blood glucose can remain elevated even though large amounts of extracellular fuel are available.",

                connection:
                    "The disorder involves abnormal regulation of glucose uptake, storage and hepatic glucose production—not simply eating too much sugar."

            },

            [

                "ACTH is important for cortisol but is not the primary control of aldosterone.",

                "The adrenal medulla is functionally connected to the sympathetic nervous system.",

                "Insulin does more than lower glucose; it promotes a broad anabolic storage state."

            ],

            [

                "Adrenal cortex produces steroid hormones.",

                "Aldosterone retains sodium and promotes potassium secretion.",

                "Cortisol supports stress metabolism.",

                "Adrenal medulla releases catecholamines.",

                "Beta cells make insulin.",

                "Alpha cells make glucagon.",

                "Insulin dominates fed-state storage.",

                "Glucagon supports fasting-state glucose."

            ]

        ),


        // ====================================================
        // TOPIC 5
        // ====================================================

        createTopic(

            "blood-rbc",

            5,

            2,

            "Blood Composition, Plasma & Red Blood Cells",

            "Learn the components of blood, plasma proteins, erythrocyte structure, hemoglobin, hematocrit, erythropoiesis and red-cell destruction.",

            [

                "Identify the major components of whole blood.",

                "Explain plasma-protein functions.",

                "Explain how red-cell structure supports gas transport.",

                "Describe erythropoietin and erythropoiesis.",

                "Trace hemoglobin breakdown."

            ],

            [

                [
                    "Plasma",
                    "The liquid extracellular matrix of blood."
                ],

                [
                    "Formed Elements",
                    "Erythrocytes, leukocytes and platelets."
                ],

                [
                    "Albumin",
                    "The major plasma protein contributing to colloid osmotic pressure."
                ],

                [
                    "Globulin",
                    "A plasma-protein category including antibodies and transport proteins."
                ],

                [
                    "Fibrinogen",
                    "A soluble plasma protein converted into fibrin during clotting."
                ],

                [
                    "Erythrocyte",
                    "A red blood cell specialized for respiratory-gas transport."
                ],

                [
                    "Hemoglobin",
                    "An iron-containing protein that carries oxygen."
                ],

                [
                    "Hematocrit",
                    "The percentage of blood volume occupied by red cells."
                ],

                [
                    "Erythropoietin",
                    "A kidney-derived hormone that stimulates red-cell production."
                ],

                [
                    "Reticulocyte",
                    "An immature red cell recently released from bone marrow."
                ],

                [
                    "Bilirubin",
                    "A pigment formed from heme breakdown."
                ],

                [
                    "Anemia",
                    "A reduction in effective red-cell mass or hemoglobin that can reduce oxygen-carrying capacity."
                ]

            ],

            [

                {
                    label: "BLOOD COMPOSITION",

                    title:
                        "Plasma + Formed Elements",

                    paragraphs: [

                        "Blood is classified as a connective tissue because living cells are suspended in an extracellular matrix. In blood, that matrix is plasma.",

                        "Plasma consists mostly of water but also contains electrolytes, nutrients, hormones, dissolved gases, metabolic wastes and plasma proteins.",

                        "Albumin contributes strongly to plasma colloid osmotic pressure and transports many substances. Globulins include transport proteins and immunoglobulins. Fibrinogen is important in blood coagulation.",

                        "The formed elements are erythrocytes, leukocytes and platelets."

                    ]

                },


                {
                    label: "ERYTHROCYTES",

                    title:
                        "Built to Carry Oxygen",

                    paragraphs: [

                        "Mature erythrocytes have a biconcave shape. This geometry increases surface area and decreases the distance gases must diffuse.",

                        "Mature human red cells lack a nucleus and most organelles. This leaves additional room for hemoglobin but also means red cells cannot repair themselves or divide.",

                        "Hemoglobin contains four globin protein chains, each associated with a heme group containing iron. Oxygen binds reversibly to heme iron.",

                        "Hemoglobin also contributes to carbon-dioxide transport and hydrogen-ion buffering, linking red-cell physiology with respiratory and acid-base physiology."

                    ]

                },


                {
                    label: "ERYTHROPOIESIS",

                    title:
                        "How the Body Makes More Red Cells",

                    paragraphs: [

                        "When tissue oxygen delivery falls, the kidneys respond by increasing erythropoietin production. EPO enters the blood and stimulates red bone marrow to accelerate erythrocyte production.",

                        "Developing red cells eventually lose their nuclei and enter the bloodstream as reticulocytes. Reticulocytes finish maturing after entering circulation.",

                        "Old erythrocytes are removed mainly by macrophages in the spleen, liver and bone marrow. Iron can be recycled, globin is broken into amino acids and heme is converted into bilirubin."

                    ],

                    flow: [

                        [
                            "Low Oxygen Delivery",
                            "Kidney detects reduced oxygen availability."
                        ],

                        [
                            "EPO Increases",
                            "Bone marrow receives a stronger erythropoietic signal."
                        ],

                        [
                            "Reticulocytes Increase",
                            "New red cells enter blood."
                        ],

                        [
                            "Oxygen Capacity Improves",
                            "The original stimulus decreases."
                        ]

                    ]

                }

            ],

            {
                title:
                    "Anemia & Oxygen Delivery",

                scenario:
                    "A patient can have an oxygen saturation of 98% and still have reduced oxygen-carrying capacity if hemoglobin concentration is extremely low.",

                connection:
                    "Pulse oximetry estimates how much of the existing hemoglobin is saturated. It does not directly measure how much hemoglobin is present."

            },

            [

                "Hematocrit and hemoglobin are related measurements but are not the same thing.",

                "Normal oxygen saturation does not guarantee normal oxygen content.",

                "Platelets are formed elements but are cell fragments rather than complete cells."

            ],

            [

                "Plasma is the liquid blood matrix.",

                "Albumin supports plasma osmotic pressure.",

                "Erythrocytes contain hemoglobin.",

                "Hematocrit measures red-cell volume percentage.",

                "Kidneys produce erythropoietin.",

                "EPO stimulates red bone marrow.",

                "Reticulocytes are immature circulating red cells.",

                "Heme breakdown contributes to bilirubin production."

            ]

        ),


        // ====================================================
        // TOPIC 6
        // ====================================================

        createTopic(

            "white-blood-cells",

            6,

            2,

            "Hematopoiesis & White Blood Cells",

            "Learn how blood cells develop and distinguish neutrophils, eosinophils, basophils, monocytes and lymphocytes by anatomy and function.",

            [

                "Describe hematopoietic stem-cell differentiation.",

                "Compare myeloid and lymphoid lineages.",

                "Identify granulocytes and agranulocytes.",

                "Match each major leukocyte with its major physiological role.",

                "Recognize leukocytes on a blood smear."

            ],

            [

                [
                    "Hematopoietic Stem Cell",
                    "A multipotent marrow cell that gives rise to all formed elements."
                ],

                [
                    "Myeloid Lineage",
                    "The blood-cell lineage producing erythrocytes, platelets, granulocytes and monocytes."
                ],

                [
                    "Lymphoid Lineage",
                    "The lineage producing B cells, T cells and NK cells."
                ],

                [
                    "Neutrophil",
                    "A rapid phagocytic leukocyte important in many bacterial infections."
                ],

                [
                    "Eosinophil",
                    "A granulocyte important in parasite defense and allergic responses."
                ],

                [
                    "Basophil",
                    "A granulocyte that releases histamine and other inflammatory mediators."
                ],

                [
                    "Monocyte",
                    "A large circulating leukocyte that can enter tissues and become macrophage-like cells."
                ],

                [
                    "Lymphocyte",
                    "A leukocyte category containing B cells, T cells and NK cells."
                ],

                [
                    "Granulocyte",
                    "A leukocyte with prominent cytoplasmic granules."
                ],

                [
                    "Differential Count",
                    "A measurement of the numbers or percentages of different white-cell types."
                ]

            ],

            [

                {
                    label: "HEMATOPOIESIS",

                    title:
                        "One Stem Cell Produces Many Blood Cells",

                    paragraphs: [

                        "All formed elements originate from hematopoietic stem cells located primarily in red bone marrow. These stem cells can self-renew and produce progenitor cells.",

                        "Two major developmental branches are commonly emphasized: the myeloid lineage and lymphoid lineage.",

                        "The myeloid lineage produces erythrocytes, platelets, neutrophils, eosinophils, basophils and monocytes. The lymphoid lineage produces B lymphocytes, T lymphocytes and natural killer cells.",

                        "Growth factors and cytokines influence which cell types are produced according to physiological demand."

                    ]

                },


                {
                    label: "LEUKOCYTES",

                    title:
                        "Know the Five Major White Blood Cells",

                    paragraphs: [

                        "Neutrophils are the most abundant circulating leukocytes and rapidly migrate into tissues during many acute bacterial infections. They are strong phagocytes.",

                        "Eosinophils are especially involved in defense against parasites and in allergic inflammation. Basophils are uncommon but release histamine and other mediators.",

                        "Monocytes circulate in blood and can migrate into tissues, where they differentiate into macrophage-like cells. Lymphocytes include B cells, T cells and NK cells and are central to immune function."

                    ],

                    table: {

                        headers: [
                            "Cell",
                            "Major Role"
                        ],

                        rows: [

                            [
                                "Neutrophil",
                                "Acute phagocytosis"
                            ],

                            [
                                "Eosinophil",
                                "Parasites and allergy"
                            ],

                            [
                                "Basophil",
                                "Inflammatory mediators"
                            ],

                            [
                                "Monocyte",
                                "Tissue macrophage precursor"
                            ],

                            [
                                "Lymphocyte",
                                "Adaptive/NK immune functions"
                            ]

                        ]

                    }

                },


                {
                    label: "LAB",

                    title:
                        "Recognizing Leukocytes on a Blood Smear",

                    paragraphs: [

                        "Neutrophils usually have segmented, multilobed nuclei. Eosinophils commonly have bilobed nuclei and large red-orange granules.",

                        "Basophils contain dark purple-blue granules that may partially obscure the nucleus. Monocytes are large cells with kidney-shaped or folded nuclei.",

                        "Many lymphocytes have a large round nucleus with only a thin rim of cytoplasm.",

                        "Microscopic appearance helps identification, while a complete differential count provides quantitative information."

                    ]

                }

            ],

            {
                title:
                    "Neutrophilia",

                scenario:
                    "A patient with an acute bacterial infection develops a marked increase in circulating neutrophils.",

                connection:
                    "This pattern fits neutrophil physiology because neutrophils are rapid innate phagocytes recruited during many bacterial infections."

            },

            [

                "Neutrophils—not eosinophils—are the classic answer for rapid bacterial phagocytosis.",

                "Basophils and mast cells share some functions but are not identical cells.",

                "Not every lymphocyte performs the same task."

            ],

            [

                "All blood cells arise from hematopoietic stem cells.",

                "Myeloid and lymphoid lineages form different cell families.",

                "Neutrophils are rapid phagocytes.",

                "Eosinophils are associated with parasites and allergy.",

                "Basophils release inflammatory mediators.",

                "Monocytes can become tissue macrophages.",

                "B and T lymphocytes participate in adaptive immunity."

            ]

        ),


        // ====================================================
        // TOPIC 7
        // ====================================================

        createTopic(

            "hemostasis",

            7,

            2,

            "Hemostasis & Coagulation",

            "Understand vascular spasm, platelet plug formation, coagulation, fibrin formation, clot retraction and fibrinolysis.",

            [

                "Describe the major stages of hemostasis.",

                "Explain platelet adhesion, activation and aggregation.",

                "Explain thrombin and fibrin formation.",

                "Explain why coagulation must remain localized.",

                "Describe fibrinolysis."

            ],

            [

                [
                    "Hemostasis",
                    "The physiological process that limits blood loss after vessel injury."
                ],

                [
                    "Vascular Spasm",
                    "Immediate vasoconstriction of an injured vessel."
                ],

                [
                    "Platelet Adhesion",
                    "Attachment of platelets to exposed structures at a damaged vessel wall."
                ],

                [
                    "Platelet Aggregation",
                    "Recruitment and attachment of additional platelets."
                ],

                [
                    "Coagulation",
                    "An enzyme cascade that produces fibrin."
                ],

                [
                    "Thrombin",
                    "An enzyme that converts fibrinogen into fibrin."
                ],

                [
                    "Fibrin",
                    "Insoluble protein strands that stabilize a clot."
                ],

                [
                    "Fibrinogen",
                    "A soluble plasma protein that is the precursor of fibrin."
                ],

                [
                    "Fibrinolysis",
                    "The enzymatic breakdown of fibrin."
                ],

                [
                    "Plasmin",
                    "An enzyme that digests fibrin."
                ],

                [
                    "Thrombus",
                    "A clot that forms within a vessel and remains attached at its site of formation."
                ]

            ],

            [

                {
                    label: "PRIMARY HEMOSTASIS",

                    title:
                        "Vascular Spasm & Platelet Plug",

                    paragraphs: [

                        "Damage to a blood vessel exposes structures beneath the endothelial lining. The damaged vessel immediately constricts, reducing local blood flow.",

                        "Platelets adhere to the damaged surface and become activated. Activated platelets change shape and release signaling substances that recruit additional platelets.",

                        "More platelets aggregate at the site, creating a temporary platelet plug. This plug forms rapidly but is initially fragile."

                    ],

                    flow: [

                        [
                            "Vessel Injury",
                            "Endothelium is disrupted."
                        ],

                        [
                            "Vascular Spasm",
                            "Blood flow decreases."
                        ],

                        [
                            "Platelet Adhesion",
                            "Platelets attach."
                        ],

                        [
                            "Platelet Activation",
                            "Chemical signals are released."
                        ],

                        [
                            "Platelet Aggregation",
                            "A temporary plug forms."
                        ]

                    ]

                },


                {
                    label: "COAGULATION",

                    title:
                        "Building a Fibrin Mesh",

                    paragraphs: [

                        "Coagulation uses a cascade of plasma proteins called clotting factors. These reactions converge on activation of factor X and formation of thrombin.",

                        "Thrombin converts soluble fibrinogen into insoluble fibrin strands. The fibrin strands form a mesh around the platelet plug.",

                        "Fibrin stabilizes the initial platelet plug and traps additional formed elements, creating a stronger clot.",

                        "Thrombin also amplifies several steps in the coagulation pathway, allowing rapid clot formation at the damaged site."

                    ]

                },


                {
                    label: "CLOT REMOVAL",

                    title:
                        "Fibrinolysis",

                    paragraphs: [

                        "Hemostasis must stop once the injured vessel has been repaired. Otherwise, the clot could continue enlarging and obstruct blood flow.",

                        "The enzyme plasmin breaks fibrin into smaller fragments. This process is called fibrinolysis.",

                        "Normal circulation therefore depends on a balance between clot formation and mechanisms that limit and eventually remove the clot."

                    ]

                }

            ],

            {
                title:
                    "Bleeding vs. Thrombosis",

                scenario:
                    "Too little platelet or coagulation activity can cause excessive bleeding, while excessive clot formation can obstruct blood vessels.",

                connection:
                    "Normal hemostasis requires a carefully controlled balance between procoagulant, anticoagulant and fibrinolytic mechanisms."

            },

            [

                "The platelet plug and fibrin clot are related but distinct parts of hemostasis.",

                "Fibrinogen is soluble. Fibrin is insoluble.",

                "Fibrinolysis removes fibrin after clotting; it is not simply the prevention of clot formation."

            ],

            [

                "Vascular spasm reduces blood loss.",

                "Platelets create the initial plug.",

                "Coagulation stabilizes the plug.",

                "Thrombin converts fibrinogen to fibrin.",

                "Fibrin forms the clot mesh.",

                "Plasmin breaks down fibrin.",

                "Hemostasis must remain localized."

            ]

        ),


        // ====================================================
        // TOPIC 8
        // ====================================================

        createTopic(

            "blood-groups",

            8,

            2,

            "ABO, Rh & Transfusion Physiology",

            "Master ABO antigens and antibodies, Rh physiology, agglutination, transfusion compatibility and maternal Rh sensitization.",

            [

                "Determine ABO antigen and antibody patterns.",

                "Explain why incompatible transfusions cause hemolysis.",

                "Distinguish Rh physiology from ABO physiology.",

                "Explain Rh sensitization.",

                "Apply compatibility reasoning."

            ],

            [

                [
                    "Antigen",
                    "A molecule recognized specifically by an antibody or immune receptor."
                ],

                [
                    "Antibody",
                    "An immunoglobulin that binds a specific antigen."
                ],

                [
                    "Type A",
                    "Red cells carry A antigen and plasma normally contains anti-B antibodies."
                ],

                [
                    "Type B",
                    "Red cells carry B antigen and plasma normally contains anti-A antibodies."
                ],

                [
                    "Type AB",
                    "Red cells carry A and B antigens and plasma normally lacks anti-A and anti-B."
                ],

                [
                    "Type O",
                    "Red cells lack A and B antigens and plasma normally contains anti-A and anti-B."
                ],

                [
                    "Rh Positive",
                    "Red cells express the Rh D antigen."
                ],

                [
                    "Rh Negative",
                    "Red cells lack the Rh D antigen."
                ],

                [
                    "Agglutination",
                    "Clumping caused when antibodies bind antigens on multiple cells."
                ],

                [
                    "Hemolysis",
                    "Destruction of red blood cells."
                ],

                [
                    "Crossmatch",
                    "Compatibility testing performed before many transfusions."
                ],

                [
                    "Rh Sensitization",
                    "Formation of anti-D antibodies after exposure of an Rh-negative individual to Rh-positive red cells."
                ]

            ],

            [

                {
                    label: "ABO SYSTEM",

                    title:
                        "Antigens on Red Cells, Antibodies in Plasma",

                    paragraphs: [

                        "ABO blood type is determined by which A and B antigens are present on the red-cell surface.",

                        "A person with type A blood has A antigen on the red cells and normally has anti-B antibodies in plasma. A person with type B has B antigen and anti-A antibodies.",

                        "Type AB red cells carry both A and B antigens and normally lack anti-A and anti-B. Type O red cells carry neither A nor B but the plasma contains both antibodies.",

                        "These naturally occurring antibodies make incompatible ABO transfusion potentially dangerous."

                    ],

                    table: {

                        headers: [
                            "Blood Type",
                            "RBC Antigens",
                            "Plasma Antibodies"
                        ],

                        rows: [

                            [
                                "A",
                                "A",
                                "Anti-B"
                            ],

                            [
                                "B",
                                "B",
                                "Anti-A"
                            ],

                            [
                                "AB",
                                "A and B",
                                "None"
                            ],

                            [
                                "O",
                                "None",
                                "Anti-A and Anti-B"
                            ]

                        ]

                    }

                },


                {
                    label: "TRANSFUSION",

                    title:
                        "Why Incompatible Blood Is Dangerous",

                    paragraphs: [

                        "If a recipient has antibodies against an antigen on donor red cells, those antibodies may bind the transfused cells.",

                        "Antibody binding can cause agglutination, complement activation and hemolysis. Severe hemolytic transfusion reactions can damage the kidneys, disrupt circulation and become life-threatening.",

                        "Compatibility testing therefore considers more than simply remembering a blood-type nickname."

                    ]

                },


                {
                    label: "RH SYSTEM",

                    title:
                        "Rh Sensitization",

                    paragraphs: [

                        "The Rh system differs from ABO because Rh-negative individuals do not normally possess anti-D antibodies simply because they lack D antigen.",

                        "Anti-D antibodies usually develop only after exposure to Rh-positive red cells, such as through transfusion or pregnancy.",

                        "Once sensitization occurs, an Rh-negative mother carrying a later Rh-positive fetus can have circulating IgG anti-D antibodies that cross the placenta and damage fetal red cells."

                    ]

                }

            ],

            {
                title:
                    "Hemolytic Transfusion Reaction",

                scenario:
                    "If type B red cells are transfused into a type A recipient, anti-B antibodies in the recipient can bind the donor cells.",

                connection:
                    "The antigen-antibody interaction can produce agglutination and intravascular hemolysis."

            },

            [

                "ABO antibodies and Rh antibodies develop differently.",

                "Universal-donor shortcuts depend on which blood component is being transfused.",

                "Type O plasma contains anti-A and anti-B even though type O red cells lack A/B antigens."

            ],

            [

                "ABO type depends on red-cell antigens.",

                "Type A has anti-B.",

                "Type B has anti-A.",

                "Type AB has both antigens.",

                "Type O has neither antigen.",

                "Rh-positive red cells express D antigen.",

                "Rh-negative individuals can become sensitized.",

                "Incompatible transfusion can cause hemolysis."

            ]

        ),


        // ====================================================
        // TOPIC 9
        // ====================================================

        createTopic(

            "heart-anatomy",

            9,

            3,

            "Heart Anatomy & Blood Flow",

            "Master heart chambers, valves, great vessels, wall layers, pericardium, internal landmarks, coronary circulation and the complete blood-flow sequence.",

            [

                "Trace blood through every chamber, valve and great vessel.",

                "Compare right and left ventricular structure.",

                "Identify heart-wall layers.",

                "Explain AV and semilunar valve function.",

                "Explain coronary circulation."

            ],

            [

                [
                    "Right Atrium",
                    "Receives systemic venous blood from the venae cavae and coronary sinus."
                ],

                [
                    "Right Ventricle",
                    "Pumps blood through the pulmonary valve into the pulmonary trunk."
                ],

                [
                    "Left Atrium",
                    "Receives oxygenated blood from pulmonary veins."
                ],

                [
                    "Left Ventricle",
                    "Pumps blood through the aortic valve into systemic circulation."
                ],

                [
                    "Tricuspid Valve",
                    "The right atrioventricular valve."
                ],

                [
                    "Mitral Valve",
                    "The left atrioventricular valve."
                ],

                [
                    "Pulmonary Valve",
                    "The semilunar valve between right ventricle and pulmonary trunk."
                ],

                [
                    "Aortic Valve",
                    "The semilunar valve between left ventricle and aorta."
                ],

                [
                    "Chordae Tendineae",
                    "Fibrous cords connecting AV valve cusps to papillary muscles."
                ],

                [
                    "Papillary Muscle",
                    "Ventricular muscle that helps prevent AV valve prolapse."
                ],

                [
                    "Myocardium",
                    "The muscular heart-wall layer that generates force."
                ],

                [
                    "Endocardium",
                    "The smooth internal lining of heart chambers."
                ],

                [
                    "Pericardium",
                    "The membranous sac surrounding the heart."
                ],

                [
                    "Coronary Artery",
                    "An artery that supplies myocardium."
                ],

                [
                    "Coronary Sinus",
                    "A large venous channel returning much cardiac venous blood to the right atrium."
                ]

            ],

            [

                {
                    label: "BLOOD FLOW",

                    title:
                        "Trace Blood Through the Heart",

                    paragraphs: [

                        "The right and left sides of the heart are two pumps arranged in series. The right heart receives deoxygenated systemic venous blood and pumps it to the lungs.",

                        "The left heart receives oxygenated pulmonary venous blood and pumps it through the systemic circulation.",

                        "Because the circuits are connected in series, long-term output from the two ventricles must remain nearly equal."

                    ],

                    flow: [

                        [
                            "Venae Cavae",
                            "Blood enters the right atrium."
                        ],

                        [
                            "Tricuspid Valve",
                            "Blood enters the right ventricle."
                        ],

                        [
                            "Pulmonary Valve",
                            "Blood enters the pulmonary trunk."
                        ],

                        [
                            "Pulmonary Arteries",
                            "Blood travels toward lungs."
                        ],

                        [
                            "Pulmonary Veins",
                            "Oxygenated blood returns to left atrium."
                        ],

                        [
                            "Mitral Valve",
                            "Blood enters left ventricle."
                        ],

                        [
                            "Aortic Valve",
                            "Blood enters aorta."
                        ],

                        [
                            "Systemic Circulation",
                            "Blood travels to body tissues."
                        ]

                    ]

                },


                {
                    label: "VALVES",

                    title:
                        "Valves Open Because of Pressure Differences",

                    paragraphs: [

                        "Cardiac valves do not actively open and close. They move in response to pressure differences across the valve.",

                        "When atrial pressure exceeds ventricular pressure, an AV valve opens. When ventricular pressure becomes greater, the valve closes.",

                        "Papillary muscles and chordae tendineae prevent AV valve leaflets from everting backward into the atria during ventricular contraction.",

                        "Semilunar valves do not have chordae tendineae. They close when arterial pressure becomes greater than ventricular pressure."

                    ]

                },


                {
                    label: "STRUCTURE",

                    title:
                        "Why the Left Ventricle Has a Thicker Wall",

                    paragraphs: [

                        "The right ventricle pumps into the low-pressure pulmonary circuit. The left ventricle pumps into the much higher-resistance systemic circuit.",

                        "The left ventricle must therefore produce substantially more pressure and contains a much thicker layer of myocardium.",

                        "This is a classic example of the A&P principle that structure reflects function."

                    ]

                },


                {
                    label: "CORONARY CIRCULATION",

                    title:
                        "The Heart Must Supply Its Own Muscle",

                    paragraphs: [

                        "The blood inside cardiac chambers cannot adequately diffuse through the thick myocardium. Cardiac muscle therefore requires its own blood supply.",

                        "The coronary arteries arise near the base of the ascending aorta and supply oxygenated blood to the myocardium.",

                        "Cardiac veins collect venous blood and much of it enters the coronary sinus, which empties into the right atrium.",

                        "Because cardiac muscle relies heavily on aerobic metabolism, interruption of coronary blood flow can quickly impair myocardial function."

                    ]

                }

            ],

            {
                title:
                    "Coronary Artery Occlusion",

                scenario:
                    "An obstructed coronary artery reduces oxygen delivery to a region of ventricular myocardium.",

                connection:
                    "Prolonged ischemia can reduce contraction, destabilize electrical activity and eventually cause myocardial infarction."

            },

            [

                "Pulmonary arteries carry deoxygenated blood but are still arteries because they carry blood away from the heart.",

                "Chordae tendineae attach only to AV valves.",

                "The left ventricle is thicker because of systemic resistance, not because it normally contains more blood."

            ],

            [

                "Right heart pumps to lungs.",

                "Left heart pumps to systemic circulation.",

                "Know all four valves.",

                "AV valves have chordae and papillary muscles.",

                "Left ventricular myocardium is thickest.",

                "Coronary arteries supply myocardium.",

                "Coronary sinus drains into right atrium.",

                "Arteries are named by direction, not oxygen content."

            ],

            [
                "Theory",
                "Lab",
                "Practical",
                "Clinical",
                "Quiz"
            ]

        ),


        // ====================================================
        // TOPIC 10
        // ====================================================

        createTopic(

            "cardiac-conduction",

            10,

            3,

            "Cardiac Muscle, Conduction & Action Potentials",

            "Understand cardiac muscle structure, autorhythmicity, the conduction pathway, nodal action potentials, contractile-cell action potentials and autonomic control.",

            [

                "Trace the cardiac conduction pathway.",

                "Explain SA-node pacemaker activity.",

                "Compare pacemaker and ventricular action potentials.",

                "Explain the AV nodal delay.",

                "Explain sympathetic and parasympathetic effects."

            ],

            [

                [
                    "SA Node",
                    "The normal primary pacemaker located in the right atrium."
                ],

                [
                    "AV Node",
                    "A conduction structure that delays the impulse before ventricular activation."
                ],

                [
                    "AV Bundle",
                    "The Bundle of His that conducts from AV node into the interventricular septum."
                ],

                [
                    "Bundle Branches",
                    "Right and left conduction pathways running through the septum."
                ],

                [
                    "Purkinje Fibers",
                    "Rapid conduction fibers distributing excitation through ventricular myocardium."
                ],

                [
                    "Autorhythmic Cell",
                    "A cardiac cell capable of spontaneous depolarization."
                ],

                [
                    "Pacemaker Potential",
                    "A gradual spontaneous depolarization between action potentials."
                ],

                [
                    "Plateau Phase",
                    "A prolonged ventricular action-potential phase caused largely by calcium influx."
                ],

                [
                    "Gap Junction",
                    "A channel permitting electrical current to pass between cardiac cells."
                ],

                [
                    "Intercalated Disc",
                    "A specialized connection mechanically and electrically joining cardiac muscle cells."
                ],

                [
                    "Sympathetic Stimulation",
                    "Autonomic input that generally increases heart rate and contractility."
                ],

                [
                    "Parasympathetic Stimulation",
                    "Autonomic input that generally reduces heart rate."
                ]

            ],

            [

                {
                    label: "CONDUCTION",

                    title:
                        "SA Node → AV Node → Purkinje System",

                    paragraphs: [

                        "The SA node normally depolarizes faster than other autorhythmic tissues and therefore sets the normal rhythm of the heart.",

                        "Electrical activity spreads through atrial myocardium and reaches the AV node. Conduction slows at the AV node.",

                        "The AV nodal delay gives the atria time to complete contraction before strong ventricular contraction begins.",

                        "The impulse then enters the AV bundle, travels through right and left bundle branches and spreads through Purkinje fibers.",

                        "Rapid Purkinje conduction activates ventricular myocardium from the apex upward toward the outflow valves, creating an efficient squeezing pattern."

                    ],

                    flow: [

                        [
                            "SA Node",
                            "Initiates normal rhythm."
                        ],

                        [
                            "Atria",
                            "Depolarization spreads."
                        ],

                        [
                            "AV Node",
                            "Impulse is delayed."
                        ],

                        [
                            "AV Bundle",
                            "Signal enters septum."
                        ],

                        [
                            "Bundle Branches",
                            "Signal moves toward apex."
                        ],

                        [
                            "Purkinje Fibers",
                            "Ventricles rapidly activate."
                        ]

                    ]

                },


                {
                    label: "PACEMAKER CELLS",

                    title:
                        "Why the SA Node Fires Automatically",

                    paragraphs: [

                        "Pacemaker cells do not have a stable resting membrane potential. After repolarization, the membrane slowly begins depolarizing again.",

                        "This spontaneous pacemaker potential is created by changing ion conductances. Once threshold is reached, calcium channels contribute strongly to the nodal action-potential upstroke.",

                        "The rate at which pacemaker cells reach threshold can be altered by autonomic nerves.",

                        "Sympathetic stimulation increases the slope of pacemaker depolarization, so threshold is reached sooner. Parasympathetic stimulation slows this process."

                    ]

                },


                {
                    label: "CONTRACTILE CELLS",

                    title:
                        "The Cardiac Plateau",

                    paragraphs: [

                        "Ventricular contractile cells have a stable resting membrane potential and rapidly depolarize when neighboring cells provide sufficient current.",

                        "A rapid sodium influx produces the initial depolarization. Calcium entry then helps create a prolonged plateau.",

                        "The plateau lengthens the action potential and refractory period. As calcium channels close and potassium currents dominate, the membrane repolarizes.",

                        "The long refractory period prevents sustained tetanic contraction. This is essential because the heart must relax and refill between beats."

                    ],

                    table: {

                        headers: [
                            "Feature",
                            "Pacemaker Cell",
                            "Contractile Cell"
                        ],

                        rows: [

                            [
                                "Stable resting potential",
                                "No",
                                "Yes"
                            ],

                            [
                                "Automatic depolarization",
                                "Yes",
                                "No"
                            ],

                            [
                                "Upstroke",
                                "Mainly Ca²⁺",
                                "Mainly Na⁺"
                            ],

                            [
                                "Plateau",
                                "Minimal",
                                "Prominent"
                            ]

                        ]

                    }

                }

            ],

            {
                title:
                    "AV Conduction Block",

                scenario:
                    "If electrical conduction through the AV node or ventricular conduction system is impaired, atrial impulses may fail to reach the ventricles normally.",

                connection:
                    "Severe conduction block can produce different atrial and ventricular rhythms because lower pacemaker tissues may generate escape rhythms."

            },

            [

                "The SA node initiates electrical activity; it does not physically contract the ventricles itself.",

                "Pacemaker action potentials and ventricular action potentials are not the same.",

                "The long ventricular refractory period prevents tetanus."

            ],

            [

                "SA node normally sets the rhythm.",

                "AV node delays conduction.",

                "Purkinje fibers rapidly activate ventricles.",

                "Pacemaker cells depolarize spontaneously.",

                "Ventricular cells have a calcium-dependent plateau.",

                "Cardiac muscle has a long refractory period.",

                "Sympathetic activity increases heart rate.",

                "Parasympathetic activity slows heart rate."

            ]

        ),


        // ====================================================
        // TOPIC 11
        // ====================================================

        createTopic(

            "ecg-cardiac-cycle",

            11,

            3,

            "ECG, Cardiac Cycle & Heart Sounds",

            "Connect the ECG with atrial and ventricular electrical activity, pressure changes, valve movements, cardiac-cycle phases and heart sounds.",

            [

                "Identify the meaning of the P wave, QRS complex and T wave.",

                "Describe ventricular filling and ejection.",

                "Explain isovolumetric contraction and relaxation.",

                "Explain when valves open and close.",

                "Connect S1 and S2 with valve closure."

            ],

            [

                [
                    "P Wave",
                    "ECG deflection representing atrial depolarization."
                ],

                [
                    "QRS Complex",
                    "ECG complex representing ventricular depolarization."
                ],

                [
                    "T Wave",
                    "ECG deflection representing ventricular repolarization."
                ],

                [
                    "PR Interval",
                    "Time from the beginning of atrial depolarization to the beginning of ventricular depolarization."
                ],

                [
                    "Systole",
                    "The period of chamber contraction."
                ],

                [
                    "Diastole",
                    "The period of chamber relaxation and filling."
                ],

                [
                    "End-Diastolic Volume",
                    "The amount of blood in a ventricle at the end of filling."
                ],

                [
                    "End-Systolic Volume",
                    "The amount of blood remaining after ventricular ejection."
                ],

                [
                    "Stroke Volume",
                    "The volume ejected per beat."
                ],

                [
                    "Isovolumetric Contraction",
                    "A phase in which all valves are closed while ventricular pressure rises."
                ],

                [
                    "Isovolumetric Relaxation",
                    "A phase in which all valves are closed while ventricular pressure falls."
                ],

                [
                    "S1",
                    "The first heart sound associated mainly with AV-valve closure."
                ],

                [
                    "S2",
                    "The second heart sound associated mainly with semilunar-valve closure."
                ]

            ],

            [

                {
                    label: "ECG",

                    title:
                        "Electrical Activity Comes Before Mechanical Contraction",

                    paragraphs: [

                        "The ECG records electrical activity generated by the heart and detected at the body surface.",

                        "The P wave represents atrial depolarization. Atrial contraction follows shortly afterward.",

                        "The QRS complex represents ventricular depolarization. Atrial repolarization occurs at approximately the same time and is normally hidden by the larger ventricular signal.",

                        "The T wave represents ventricular repolarization. Ventricular relaxation follows."

                    ],

                    table: {

                        headers: [
                            "ECG",
                            "Electrical Event",
                            "Mechanical Event"
                        ],

                        rows: [

                            [
                                "P",
                                "Atrial depolarization",
                                "Atrial systole follows"
                            ],

                            [
                                "QRS",
                                "Ventricular depolarization",
                                "Ventricular systole follows"
                            ],

                            [
                                "T",
                                "Ventricular repolarization",
                                "Relaxation follows"
                            ]

                        ]

                    }

                },


                {
                    label: "CARDIAC CYCLE",

                    title:
                        "Pressure Determines Valve Movement",

                    paragraphs: [

                        "During ventricular filling, ventricular pressure is lower than atrial pressure. The AV valves are open and the semilunar valves are closed.",

                        "Ventricular depolarization initiates ventricular contraction. Pressure begins to rise. When ventricular pressure exceeds atrial pressure, the AV valves close, producing S1.",

                        "For a short period all valves are closed. This is isovolumetric contraction because pressure rises while volume remains unchanged.",

                        "When ventricular pressure becomes greater than arterial pressure, the semilunar valves open and ventricular ejection begins.",

                        "After repolarization, ventricular pressure falls. When arterial pressure becomes greater than ventricular pressure, semilunar valves close, producing S2.",

                        "All valves again remain closed briefly during isovolumetric relaxation. When ventricular pressure falls below atrial pressure, the AV valves reopen."

                    ]

                },


                {
                    label: "VOLUMES",

                    title:
                        "EDV, ESV & Stroke Volume",

                    paragraphs: [

                        "End-diastolic volume is the amount of blood present in the ventricle immediately before contraction.",

                        "End-systolic volume is the amount remaining after ventricular ejection.",

                        "Stroke volume equals the difference between them.",

                        "A ventricle that fills more strongly or contracts more powerfully may eject a larger stroke volume, while high resistance to ejection can reduce stroke volume."

                    ],

                    flow: [

                        [
                            "EDV",
                            "Blood present before systole."
                        ],

                        [
                            "Ventricular Ejection",
                            "A portion of EDV leaves the ventricle."
                        ],

                        [
                            "ESV",
                            "Blood remaining after systole."
                        ],

                        [
                            "Stroke Volume",
                            "EDV − ESV"
                        ]

                    ]

                }

            ],

            {
                title:
                    "Heart Murmur",

                scenario:
                    "A narrowed valve can produce turbulent forward flow, while an incompetent valve can allow backward flow.",

                connection:
                    "The timing of the abnormal sound during systole or diastole helps identify the affected valve and the type of defect."

            },

            [

                "The P wave is atrial depolarization—not atrial contraction itself.",

                "Atrial repolarization is usually hidden inside the QRS complex.",

                "S1 is mainly AV-valve closure. S2 is mainly semilunar-valve closure."

            ],

            [

                "P wave = atrial depolarization.",

                "QRS = ventricular depolarization.",

                "T wave = ventricular repolarization.",

                "AV valves are open during filling.",

                "AV valve closure produces S1.",

                "Semilunar closure produces S2.",

                "SV = EDV − ESV.",

                "All valves are closed during isovolumetric phases."

            ]

        ),


        // ====================================================
        // TOPIC 12
        // ====================================================

        createTopic(

            "cardiac-output",

            12,

            3,

            "Cardiac Output, Preload, Afterload & Contractility",

            "Master cardiac output, stroke volume, ejection fraction, venous return, preload, afterload, contractility and the Frank-Starling mechanism.",

            [

                "Explain cardiac output.",

                "Distinguish preload, afterload and contractility.",

                "Explain Frank-Starling physiology.",

                "Explain ejection fraction.",

                "Predict autonomic effects on cardiac output."

            ],

            [

                [
                    "Cardiac Output",
                    "The volume pumped by one ventricle each minute."
                ],

                [
                    "Heart Rate",
                    "The number of cardiac cycles per minute."
                ],

                [
                    "Stroke Volume",
                    "The amount of blood ejected from one ventricle per beat."
                ],

                [
                    "Preload",
                    "The degree of ventricular stretch before contraction."
                ],

                [
                    "Afterload",
                    "The pressure or resistance opposing ventricular ejection."
                ],

                [
                    "Contractility",
                    "The intrinsic strength of contraction at a given preload."
                ],

                [
                    "Frank-Starling Mechanism",
                    "Within physiological limits, greater ventricular filling increases contraction strength and stroke volume."
                ],

                [
                    "Ejection Fraction",
                    "The fraction of end-diastolic volume ejected during systole."
                ],

                [
                    "Venous Return",
                    "The flow of blood back toward the heart."
                ]

            ],

            [

                {
                    label: "CARDIAC OUTPUT",

                    title:
                        "CO = Heart Rate × Stroke Volume",

                    paragraphs: [

                        "Cardiac output represents how much blood one ventricle pumps each minute.",

                        "It is calculated by multiplying heart rate by stroke volume.",

                        "The body can therefore increase cardiac output by increasing heart rate, increasing stroke volume or increasing both.",

                        "During exercise, sympathetic activity increases heart rate and contractility while muscle activity and breathing increase venous return."

                    ]

                },


                {
                    label: "PRELOAD",

                    title:
                        "More Filling Can Produce More Force",

                    paragraphs: [

                        "Preload describes the degree of ventricular stretch at the end of diastole. It is strongly related to how much blood fills the ventricle.",

                        "Increasing venous return usually raises end-diastolic volume and therefore preload.",

                        "According to the Frank-Starling mechanism, greater filling stretches cardiac muscle fibers and produces a stronger contraction within physiological limits.",

                        "This mechanism helps the heart automatically match output with venous return."

                    ]

                },


                {
                    label: "AFTERLOAD",

                    title:
                        "The Resistance to Ejection",

                    paragraphs: [

                        "Afterload is the load the ventricle must overcome before it can eject blood.",

                        "For the left ventricle, systemic arterial pressure is a major contributor. If aortic pressure increases, the left ventricle must generate greater pressure before the aortic valve opens.",

                        "Greater afterload tends to reduce stroke volume if preload and contractility remain unchanged.",

                        "Chronic elevation of afterload can increase ventricular workload and contribute to ventricular hypertrophy."

                    ]

                },


                {
                    label: "CONTRACTILITY",

                    title:
                        "Changing Force Independently of Filling",

                    paragraphs: [

                        "Contractility describes contraction strength at a given preload.",

                        "Sympathetic stimulation increases calcium availability in cardiac muscle and therefore increases contractility.",

                        "Greater contractility allows the ventricle to eject more of its filled volume, reducing end-systolic volume and increasing stroke volume.",

                        "Ejection fraction expresses stroke volume as a fraction of end-diastolic volume."

                    ],

                    table: {

                        headers: [
                            "Factor",
                            "Typical Effect on Stroke Volume"
                        ],

                        rows: [

                            [
                                "Preload ↑",
                                "SV usually ↑"
                            ],

                            [
                                "Contractility ↑",
                                "SV ↑"
                            ],

                            [
                                "Afterload ↑",
                                "SV tends ↓"
                            ],

                            [
                                "Venous return ↑",
                                "Preload and SV usually ↑"
                            ]

                        ]

                    }

                }

            ],

            {
                title:
                    "Reduced Contractility",

                scenario:
                    "If ventricular contractility falls, more blood can remain in the ventricle after systole.",

                connection:
                    "End-systolic volume rises, stroke volume may fall and ejection fraction may decrease."

            },

            [

                "Preload is not the same as arterial blood pressure.",

                "Afterload describes resistance to ejection, not simply the amount of blood in the ventricle.",

                "Frank-Starling changes force because of filling, whereas contractility changes force at a given filling level."

            ],

            [

                "CO = HR × SV.",

                "Preload reflects ventricular filling.",

                "Afterload opposes ventricular ejection.",

                "Contractility changes contraction strength.",

                "Frank-Starling connects filling to force.",

                "Sympathetic activity increases contractility.",

                "Ejection fraction compares SV with EDV."

            ]

        ),


        // ====================================================
        // TOPIC 13
        // ====================================================

        createTopic(

            "blood-vessels",

            13,

            3,

            "Blood Vessels & Circulatory Pathways",

            "Compare arteries, arterioles, capillaries, venules and veins and connect vessel structure with pulmonary and systemic blood flow.",

            [

                "Compare artery and vein wall structure.",

                "Explain why arterioles are resistance vessels.",

                "Explain why capillaries are exchange vessels.",

                "Explain why veins serve as blood reservoirs.",

                "Trace pulmonary and systemic circulation."

            ],

            [

                [
                    "Artery",
                    "A vessel carrying blood away from the heart."
                ],

                [
                    "Arteriole",
                    "A small muscular vessel that strongly regulates vascular resistance."
                ],

                [
                    "Capillary",
                    "A microscopic vessel specialized for exchange."
                ],

                [
                    "Venule",
                    "A small vessel receiving blood from capillaries."
                ],

                [
                    "Vein",
                    "A vessel carrying blood toward the heart."
                ],

                [
                    "Tunica Intima",
                    "The innermost vessel layer."
                ],

                [
                    "Tunica Media",
                    "The middle vessel layer containing smooth muscle."
                ],

                [
                    "Tunica Externa",
                    "The outer connective-tissue layer."
                ],

                [
                    "Elastic Artery",
                    "A large artery that stretches during systole and recoils during diastole."
                ],

                [
                    "Muscular Artery",
                    "A medium-sized artery distributing blood to organs."
                ],

                [
                    "Capacitance Vessel",
                    "A vein capable of storing large blood volumes at low pressure."
                ],

                [
                    "Portal System",
                    "A vascular pathway in which blood passes through two capillary beds before returning to the heart."
                ]

            ],

            [

                {
                    label: "VESSEL WALL",

                    title:
                        "Structure Changes Across the Vascular Tree",

                    paragraphs: [

                        "Large arteries have relatively thick walls because they experience high pressures generated by ventricular contraction.",

                        "Elastic arteries such as the aorta contain abundant elastic tissue. They stretch during ventricular ejection and recoil during diastole, helping maintain continuous flow.",

                        "Muscular arteries distribute blood to specific organs. Arterioles have small lumens and substantial smooth muscle relative to their size.",

                        "Capillaries are extremely thin and consist primarily of endothelial cells and basement membrane. This minimizes diffusion distance.",

                        "Veins have thinner walls, larger lumens and greater compliance, allowing them to store large volumes of blood."

                    ]

                },


                {
                    label: "RESISTANCE",

                    title:
                        "Why Arterioles Control Blood Flow",

                    paragraphs: [

                        "Arterioles contain smooth muscle capable of changing vessel radius quickly.",

                        "Because resistance increases dramatically as radius decreases, small changes in arteriolar diameter can strongly change organ blood flow.",

                        "Arterioles are therefore called resistance vessels.",

                        "Local metabolites, sympathetic nerves, circulating hormones and endothelial signals all influence arteriolar tone."

                    ]

                },


                {
                    label: "CIRCULATION",

                    title:
                        "Pulmonary vs. Systemic Circulation",

                    paragraphs: [

                        "The pulmonary circulation begins when the right ventricle ejects blood into the pulmonary trunk. Blood flows through pulmonary arteries to pulmonary capillaries, where gas exchange occurs.",

                        "Pulmonary veins return oxygenated blood to the left atrium.",

                        "The systemic circulation begins at the left ventricle. Blood travels through the aorta and systemic arteries to tissue capillaries.",

                        "Systemic veins return blood through the venae cavae to the right atrium."

                    ],

                    table: {

                        headers: [
                            "Circuit",
                            "Begins",
                            "Ends"
                        ],

                        rows: [

                            [
                                "Pulmonary",
                                "Right ventricle",
                                "Left atrium"
                            ],

                            [
                                "Systemic",
                                "Left ventricle",
                                "Right atrium"
                            ]

                        ]

                    }

                }

            ],

            {
                title:
                    "Venous Return",

                scenario:
                    "Blood returning from the legs travels through veins operating at much lower pressure than arteries.",

                connection:
                    "Skeletal-muscle contractions, breathing-related pressure changes, venous valves and sympathetic venoconstriction help return blood toward the heart."

            },

            [

                "Arteries are named by direction of flow, not oxygen content.",

                "Pulmonary arteries are deoxygenated but remain arteries.",

                "Capillaries do not have the three thick tunics found in larger vessels."

            ],

            [

                "Arteries carry blood away from the heart.",

                "Veins carry blood toward the heart.",

                "Arterioles are major resistance vessels.",

                "Capillaries are exchange vessels.",

                "Veins are highly compliant.",

                "Elastic arteries act as pressure reservoirs.",

                "Pulmonary and systemic circuits are connected in series."

            ]

        ),


        // ====================================================
        // TOPIC 14
        // ====================================================

        createTopic(

            "blood-pressure",

            14,

            3,

            "Blood Pressure, Resistance, Capillary Exchange & Edema",

            "Integrate pressure gradients, resistance, vessel radius, baroreceptors, capillary fluid movement, venous return and edema physiology.",

            [

                "Relate blood flow to pressure and resistance.",

                "Explain effects of vessel radius.",

                "Define systolic, diastolic, pulse and mean pressure.",

                "Explain the baroreceptor reflex.",

                "Explain major mechanisms of edema."

            ],

            [

                [
                    "Blood Pressure",
                    "The force exerted by blood against vessel walls."
                ],

                [
                    "Systolic Pressure",
                    "Peak arterial pressure during ventricular systole."
                ],

                [
                    "Diastolic Pressure",
                    "Lowest arterial pressure during ventricular diastole."
                ],

                [
                    "Pulse Pressure",
                    "Systolic pressure minus diastolic pressure."
                ],

                [
                    "Mean Arterial Pressure",
                    "The average effective arterial pressure driving systemic blood flow."
                ],

                [
                    "Resistance",
                    "Opposition to blood flow."
                ],

                [
                    "Vasoconstriction",
                    "A reduction in vessel radius."
                ],

                [
                    "Vasodilation",
                    "An increase in vessel radius."
                ],

                [
                    "Baroreceptor",
                    "A stretch-sensitive arterial receptor involved in short-term blood-pressure regulation."
                ],

                [
                    "Capillary Hydrostatic Pressure",
                    "Pressure that favors fluid movement out of capillaries."
                ],

                [
                    "Plasma Colloid Osmotic Pressure",
                    "An inward osmotic force generated mainly by plasma proteins."
                ],

                [
                    "Edema",
                    "Excess accumulation of fluid in interstitial tissues."
                ]

            ],

            [

                {
                    label: "HEMODYNAMICS",

                    title:
                        "Flow Requires a Pressure Gradient",

                    paragraphs: [

                        "Blood moves from regions of higher pressure toward regions of lower pressure.",

                        "The amount of flow depends on the size of the pressure difference and the resistance opposing movement.",

                        "When resistance increases while the pressure difference remains unchanged, flow decreases.",

                        "Vessel radius is an especially powerful determinant of resistance. Arteriolar vasoconstriction greatly increases resistance, while vasodilation lowers resistance."

                    ]

                },


                {
                    label: "ARTERIAL PRESSURE",

                    title:
                        "Systolic, Diastolic, Pulse & Mean Pressure",

                    paragraphs: [

                        "Systolic pressure is the highest arterial pressure generated during ventricular ejection.",

                        "Diastolic pressure is the lowest arterial pressure before the next systole.",

                        "Pulse pressure is the difference between systolic and diastolic pressure.",

                        "Mean arterial pressure represents the average effective pressure driving systemic blood flow.",

                        "At normal heart rates, MAP is closer to diastolic pressure than systolic pressure because the heart spends more time in diastole."

                    ]

                },


                {
                    label: "BAROREFLEX",

                    title:
                        "Rapid Blood-Pressure Regulation",

                    paragraphs: [

                        "Baroreceptors in the carotid sinus and aortic arch detect arterial stretch.",

                        "When blood pressure rises, baroreceptor firing increases. Cardiovascular centers in the medulla respond by reducing sympathetic activity and increasing parasympathetic activity.",

                        "Heart rate falls and vascular tone can decrease, moving pressure downward.",

                        "When arterial pressure falls, baroreceptor firing decreases. Sympathetic activity increases, supporting heart rate, contractility, venous return and vascular resistance."

                    ],

                    flow: [

                        [
                            "Blood Pressure Falls",
                            "Arterial stretch decreases."
                        ],

                        [
                            "Baroreceptor Firing Falls",
                            "Medulla detects reduced input."
                        ],

                        [
                            "Sympathetic Output Rises",
                            "Heart and vessels respond."
                        ],

                        [
                            "CO and Resistance Rise",
                            "Pressure moves back upward."
                        ]

                    ]

                },


                {
                    label: "CAPILLARY EXCHANGE",

                    title:
                        "Why Fluid Leaves and Returns to Blood",

                    paragraphs: [

                        "Capillary hydrostatic pressure tends to push fluid out of capillaries into interstitial spaces.",

                        "Plasma proteins, especially albumin, create colloid osmotic pressure that tends to retain water within the vascular compartment.",

                        "Not all filtered fluid returns directly to capillaries. Lymphatic vessels collect excess interstitial fluid and proteins and eventually return them to the bloodstream.",

                        "Edema develops when filtration exceeds lymphatic return."

                    ],

                    table: {

                        headers: [
                            "Edema Mechanism",
                            "Example"
                        ],

                        rows: [

                            [
                                "Hydrostatic pressure ↑",
                                "Venous congestion"
                            ],

                            [
                                "Plasma protein ↓",
                                "Severe hypoalbuminemia"
                            ],

                            [
                                "Capillary permeability ↑",
                                "Inflammation"
                            ],

                            [
                                "Lymphatic drainage ↓",
                                "Lymphatic obstruction"
                            ]

                        ]

                    }

                }

            ],

            {
                title:
                    "Standing Suddenly",

                scenario:
                    "When a person stands quickly, gravity temporarily shifts blood toward the lower extremities and reduces venous return.",

                connection:
                    "The baroreceptor reflex rapidly increases sympathetic activity to support cardiac output and vascular tone."

            },

            [

                "Vasoconstriction increases resistance; it does not automatically increase flow through the constricted vessel.",

                "Mean arterial pressure is not simply the mathematical midpoint of systolic and diastolic pressure.",

                "Edema is a sign of abnormal fluid distribution, not a diagnosis by itself."

            ],

            [

                "Pressure gradients drive flow.",

                "Resistance opposes flow.",

                "Arteriolar radius strongly affects resistance.",

                "Pulse pressure = systolic − diastolic.",

                "Baroreceptors regulate blood pressure rapidly.",

                "Hydrostatic pressure favors filtration.",

                "Plasma proteins help retain vascular water.",

                "Abnormal filtration or lymph return can cause edema."

            ]

        ),


        // ====================================================
        // TOPIC 15
        // ====================================================

        createTopic(

            "lymphatic-system",

            15,

            4,

            "Lymphatic System Anatomy & Fluid Return",

            "Learn lymph formation, lymphatic vessels, nodes, spleen, thymus, tonsils, lacteals and the thoracic and right lymphatic ducts.",

            [

                "Explain how interstitial fluid becomes lymph.",

                "Trace lymph toward the venous circulation.",

                "Compare lymph node, spleen and thymus functions.",

                "Explain intestinal lipid transport through lacteals.",

                "Explain lymphedema."

            ],

            [

                [
                    "Lymph",
                    "Interstitial fluid that has entered lymphatic vessels."
                ],

                [
                    "Lymphatic Capillary",
                    "A blind-ended vessel that collects excess interstitial fluid and proteins."
                ],

                [
                    "Lymph Node",
                    "An encapsulated organ that filters lymph."
                ],

                [
                    "Spleen",
                    "A lymphoid organ that filters blood."
                ],

                [
                    "Thymus",
                    "A primary lymphoid organ where T lymphocytes mature."
                ],

                [
                    "Tonsil",
                    "Lymphoid tissue located near entrances to the pharynx."
                ],

                [
                    "Lacteal",
                    "A lymphatic capillary within an intestinal villus."
                ],

                [
                    "Thoracic Duct",
                    "The lymphatic duct draining most of the body."
                ],

                [
                    "Right Lymphatic Duct",
                    "The duct draining the right upper quadrant of the body."
                ],

                [
                    "Lymphedema",
                    "Persistent swelling caused by impaired lymphatic drainage."
                ]

            ],

            [

                {
                    label: "LYMPH FORMATION",

                    title:
                        "Returning Excess Tissue Fluid",

                    paragraphs: [

                        "Capillary filtration continuously moves fluid from blood into interstitial spaces. Most fluid eventually returns to the circulation, but an important portion enters lymphatic capillaries.",

                        "Lymphatic capillaries are highly permeable and can collect water, proteins and other substances that cannot easily return directly to blood capillaries.",

                        "Once interstitial fluid enters a lymphatic vessel, it is called lymph.",

                        "Lymphatic vessels contain valves and rely on skeletal-muscle activity, breathing and smooth-muscle contraction to move lymph toward the venous circulation."

                    ]

                },


                {
                    label: "LYMPHOID ORGANS",

                    title:
                        "Nodes, Spleen & Thymus",

                    paragraphs: [

                        "Lymph nodes filter lymph as it moves through lymphatic vessels. They provide organized environments where immune cells can encounter antigens carried from peripheral tissues.",

                        "The spleen filters blood rather than lymph. It removes old red cells and participates in immune responses against blood-borne antigens.",

                        "The thymus is a primary lymphoid organ that supports T-cell maturation.",

                        "Tonsils provide immune surveillance near entrances to the respiratory and digestive systems."

                    ],

                    table: {

                        headers: [
                            "Structure",
                            "High-Yield Function"
                        ],

                        rows: [

                            [
                                "Lymph Node",
                                "Filters lymph"
                            ],

                            [
                                "Spleen",
                                "Filters blood"
                            ],

                            [
                                "Thymus",
                                "T-cell maturation"
                            ],

                            [
                                "Tonsil",
                                "Mucosal immune surveillance"
                            ]

                        ]

                    }

                },


                {
                    label: "LYMPHATIC DUCTS",

                    title:
                        "Thoracic Duct vs. Right Lymphatic Duct",

                    paragraphs: [

                        "The right lymphatic duct drains the right side of the head and neck, right upper limb and right side of the thorax.",

                        "The thoracic duct drains the remainder of the body.",

                        "Both eventually return lymph to large veins near the junction of the internal jugular and subclavian veins.",

                        "This means most lymph in the body ultimately travels through the thoracic duct."

                    ]

                },


                {
                    label: "LIPID ABSORPTION",

                    title:
                        "Why Some Dietary Fat Travels Through Lymph",

                    paragraphs: [

                        "Long-chain dietary lipids are packaged into chylomicrons inside intestinal epithelial cells.",

                        "Chylomicrons are too large to enter ordinary intestinal blood capillaries efficiently.",

                        "Instead, they enter lymphatic capillaries called lacteals inside intestinal villi.",

                        "The lipid-rich lymph eventually reaches the thoracic duct and then enters the bloodstream."

                    ]

                }

            ],

            {
                title:
                    "Lymphedema",

                scenario:
                    "Damage to lymphatic vessels reduces the ability to return interstitial fluid and proteins to the circulation.",

                connection:
                    "Protein-rich fluid accumulates in tissues, causing persistent swelling."

            },

            [

                "Lymph nodes filter lymph. The spleen filters blood.",

                "The lymphatic system does not have one central pump equivalent to the heart.",

                "Most of the body drains through the thoracic duct."

            ],

            [

                "Lymph originates from interstitial fluid.",

                "Lymphatics return fluid and proteins.",

                "Lymph nodes filter lymph.",

                "The spleen filters blood.",

                "The thymus supports T-cell maturation.",

                "Lacteals absorb dietary lipids.",

                "Thoracic duct drains most of the body.",

                "Lymphatic obstruction causes lymphedema."

            ]

        ),


        // ====================================================
        // TOPIC 16
        // ====================================================

        createTopic(

            "innate-immunity",

            16,

            4,

            "Innate Immunity & Inflammation",

            "Study physical barriers, phagocytes, NK cells, complement, inflammation, leukocyte recruitment and fever.",

            [

                "Distinguish innate from adaptive immunity.",

                "Explain barrier defenses.",

                "Explain neutrophil, macrophage and NK-cell functions.",

                "Describe the inflammatory response.",

                "Explain fever physiology."

            ],

            [

                [
                    "Innate Immunity",
                    "A rapid nonspecific defense system present before a particular exposure."
                ],

                [
                    "Physical Barrier",
                    "A surface such as skin or mucosa that prevents pathogen entry."
                ],

                [
                    "Neutrophil",
                    "A rapid phagocyte involved in acute inflammation."
                ],

                [
                    "Macrophage",
                    "A tissue phagocyte that removes material and produces immune signals."
                ],

                [
                    "Natural Killer Cell",
                    "An innate lymphocyte capable of killing selected abnormal cells."
                ],

                [
                    "Complement",
                    "A plasma-protein cascade involved in inflammation, opsonization and membrane damage."
                ],

                [
                    "Opsonization",
                    "Coating of a target to make phagocytosis more efficient."
                ],

                [
                    "Inflammation",
                    "A protective tissue response to injury or harmful stimuli."
                ],

                [
                    "Histamine",
                    "An inflammatory mediator that increases vasodilation and vascular permeability."
                ],

                [
                    "Chemotaxis",
                    "Directed movement of cells toward a chemical signal."
                ],

                [
                    "Fever",
                    "A regulated elevation of body temperature caused by an increased hypothalamic set point."
                ]

            ],

            [

                {
                    label: "BARRIERS",

                    title:
                        "The First Line of Defense",

                    paragraphs: [

                        "Skin and mucous membranes create physical barriers against pathogen entry.",

                        "Mucus can trap microorganisms. Cilia move mucus through the respiratory tract. Acidic environments, antimicrobial proteins and normal microbiota further reduce pathogen survival.",

                        "These defenses are present continuously and do not require previous exposure to a specific organism."

                    ]

                },


                {
                    label: "INNATE CELLS",

                    title:
                        "Rapid Cellular Defenses",

                    paragraphs: [

                        "Neutrophils are often among the first leukocytes recruited during acute inflammation. They perform phagocytosis and kill many microorganisms.",

                        "Macrophages remove microorganisms and damaged tissue while also releasing cytokines that coordinate inflammatory and adaptive immune responses.",

                        "Natural killer cells recognize certain abnormal or stressed cells and can induce their death without using the same antigen-specific mechanisms as T cells."

                    ]

                },


                {
                    label: "INFLAMMATION",

                    title:
                        "Why Injured Tissue Becomes Red, Warm & Swollen",

                    paragraphs: [

                        "Inflammatory mediators cause local vasodilation, increasing blood flow and producing redness and warmth.",

                        "Vascular permeability increases, allowing fluid and proteins to enter tissues. This contributes to swelling.",

                        "Leukocytes adhere to vascular endothelium, migrate out of the bloodstream and follow chemotactic signals toward the site of injury.",

                        "The inflammatory response helps contain harmful agents, remove damaged tissue and begin repair."

                    ],

                    flow: [

                        [
                            "Tissue Injury",
                            "Inflammatory mediators are released."
                        ],

                        [
                            "Vasodilation",
                            "Blood flow increases."
                        ],

                        [
                            "Permeability Increases",
                            "Fluid and proteins enter tissue."
                        ],

                        [
                            "Leukocyte Recruitment",
                            "Immune cells migrate toward injury."
                        ],

                        [
                            "Cleanup & Repair",
                            "Damaged material is removed."
                        ]

                    ]

                },


                {
                    label: "FEVER",

                    title:
                        "A Higher Hypothalamic Set Point",

                    paragraphs: [

                        "Certain immune mediators promote production of prostaglandins that increase the hypothalamic temperature set point.",

                        "The body then temporarily acts as though its current temperature is too low. Vasoconstriction and shivering may occur until temperature reaches the new set point.",

                        "When the set point later returns toward normal, sweating and vasodilation help remove heat.",

                        "This differs from hyperthermia, where body temperature rises without an appropriate increase in the hypothalamic set point."

                    ]

                }

            ],

            {
                title:
                    "Acute Inflammation",

                scenario:
                    "A skin injury becomes red, warm, swollen and painful several hours after occurring.",

                connection:
                    "Vasodilation explains redness and heat, increased permeability contributes to swelling and inflammatory mediators contribute to pain."

            },

            [

                "Inflammation is not identical to infection. Sterile injury can produce inflammation.",

                "Fever and hyperthermia have different mechanisms.",

                "NK cells are innate lymphocytes, while B and T cells are adaptive lymphocytes."

            ],

            [

                "Innate immunity is rapid.",

                "Skin and mucosa provide barriers.",

                "Neutrophils are rapid phagocytes.",

                "Macrophages coordinate and phagocytose.",

                "NK cells kill selected abnormal cells.",

                "Complement supports several immune functions.",

                "Histamine promotes vasodilation and permeability.",

                "Fever involves a higher hypothalamic set point."

            ]

        ),


        // ====================================================
        // TOPIC 17
        // ====================================================

        createTopic(

            "adaptive-immunity",

            17,

            4,

            "Adaptive Immunity, B Cells, T Cells & Memory",

            "Learn antigen specificity, clonal selection, antibodies, MHC, helper and cytotoxic T cells, immune memory and vaccination.",

            [

                "Explain clonal selection.",

                "Compare humoral and cell-mediated immunity.",

                "Explain B-cell and plasma-cell function.",

                "Compare CD4 and CD8 T cells.",

                "Explain immune memory and vaccination."

            ],

            [

                [
                    "Adaptive Immunity",
                    "An antigen-specific defense system capable of immunological memory."
                ],

                [
                    "Antigen",
                    "A molecule recognized by an adaptive immune receptor."
                ],

                [
                    "B Lymphocyte",
                    "A lymphocyte that can differentiate into antibody-secreting plasma cells."
                ],

                [
                    "Plasma Cell",
                    "A differentiated B cell specialized for antibody secretion."
                ],

                [
                    "Antibody",
                    "An immunoglobulin that binds a particular antigen."
                ],

                [
                    "Helper T Cell",
                    "A CD4-positive T cell that coordinates immune responses."
                ],

                [
                    "Cytotoxic T Cell",
                    "A CD8-positive T cell that kills selected infected or abnormal cells."
                ],

                [
                    "Memory Cell",
                    "A long-lived lymphocyte that allows a faster response after re-exposure."
                ],

                [
                    "MHC I",
                    "An antigen-presenting molecule expressed by nearly all nucleated cells and recognized by CD8 T cells."
                ],

                [
                    "MHC II",
                    "An antigen-presenting molecule primarily on professional antigen-presenting cells and recognized by CD4 T cells."
                ],

                [
                    "Clonal Selection",
                    "Activation and expansion of lymphocytes whose receptors recognize a particular antigen."
                ],

                [
                    "Vaccination",
                    "Controlled antigen exposure designed to produce protective immune memory."
                ]

            ],

            [

                {
                    label: "SPECIFICITY",

                    title:
                        "Clonal Selection",

                    paragraphs: [

                        "Each naïve B or T lymphocyte expresses receptors with a particular antigen specificity.",

                        "When an antigen enters the body, only a small number of lymphocytes possess receptors capable of recognizing that antigen.",

                        "When those cells receive appropriate activation signals, they proliferate. This process is called clonal expansion.",

                        "Some descendants become short-lived effector cells, while others become long-lived memory cells."

                    ]

                },


                {
                    label: "B CELLS",

                    title:
                        "Humoral Immunity & Antibodies",

                    paragraphs: [

                        "Activated B lymphocytes can differentiate into plasma cells. Plasma cells secrete large quantities of antibodies.",

                        "Antibodies can neutralize toxins, block viral attachment, activate complement and coat pathogens to improve phagocytosis.",

                        "Antibodies do not generally enter living cells. They are therefore especially effective against extracellular targets.",

                        "Different antibody classes perform different specialized functions, but all rely on antigen-specific binding."

                    ]

                },


                {
                    label: "T CELLS",

                    title:
                        "Helper vs. Cytotoxic T Cells",

                    paragraphs: [

                        "T cells recognize antigen fragments displayed on MHC molecules.",

                        "CD4 helper T cells interact primarily with antigen presented on MHC II. They release cytokines and provide signals that coordinate other immune cells.",

                        "CD8 cytotoxic T cells interact primarily with antigen presented on MHC I. Once activated, they can kill selected infected or abnormal cells.",

                        "Dendritic cells are especially important for presenting antigen and activating naïve T cells."

                    ],

                    table: {

                        headers: [
                            "Cell",
                            "MHC",
                            "Primary Role"
                        ],

                        rows: [

                            [
                                "CD4 Helper T",
                                "MHC II",
                                "Immune coordination"
                            ],

                            [
                                "CD8 Cytotoxic T",
                                "MHC I",
                                "Kill selected cells"
                            ],

                            [
                                "B / Plasma Cell",
                                "Native antigen recognition",
                                "Antibody production"
                            ]

                        ]

                    }

                },


                {
                    label: "MEMORY",

                    title:
                        "Why the Second Exposure Is Faster",

                    paragraphs: [

                        "During a first exposure, rare antigen-specific lymphocytes must be activated and expanded. This takes time.",

                        "After the infection resolves, memory B and T cells remain.",

                        "If the antigen returns, memory cells respond more rapidly and often more strongly.",

                        "Vaccination uses this property by creating memory before natural exposure to the pathogen."

                    ]

                }

            ],

            {
                title:
                    "Vaccination",

                scenario:
                    "A vaccinated person later encounters the actual pathogen.",

                connection:
                    "Preexisting memory B and T cells respond more rapidly than naïve cells during a first exposure, improving the chance that the pathogen is controlled before severe disease develops."

            },

            [

                "Plasma cells—not cytotoxic T cells—produce antibodies.",

                "CD4 cells primarily recognize MHC II; CD8 cells primarily recognize MHC I.",

                "Adaptive immunity still depends heavily on signals generated by innate immune cells."

            ],

            [

                "Adaptive immunity is antigen specific.",

                "Clonal selection expands matching lymphocytes.",

                "Plasma cells secrete antibodies.",

                "CD4 cells coordinate immune responses.",

                "CD8 cells kill selected target cells.",

                "MHC I is associated with CD8 recognition.",

                "MHC II is associated with CD4 recognition.",

                "Memory cells create faster secondary responses."

            ]

        ),


        // ====================================================
        // TOPIC 18
        // ====================================================

        createTopic(

            "respiratory-anatomy",

            18,

            5,

            "Respiratory Anatomy & Respiratory Membrane",

            "Learn the conducting and respiratory zones, airway histology, lungs, pleura, alveoli, pulmonary surfactant and respiratory membrane.",

            [

                "Trace airflow from the upper airway to alveoli.",

                "Distinguish conducting and respiratory zones.",

                "Identify type I and type II alveolar cells.",

                "Explain pulmonary surfactant.",

                "Describe the respiratory membrane."

            ],

            [

                [
                    "Conducting Zone",
                    "Airways that transport and condition air without significant gas exchange."
                ],

                [
                    "Respiratory Zone",
                    "Airways and alveoli where gas exchange occurs."
                ],

                [
                    "Trachea",
                    "A conducting airway supported by C-shaped cartilage rings."
                ],

                [
                    "Primary Bronchus",
                    "A major airway entering each lung."
                ],

                [
                    "Bronchiole",
                    "A small airway with smooth muscle and little or no cartilage."
                ],

                [
                    "Alveolus",
                    "A microscopic air sac specialized for gas exchange."
                ],

                [
                    "Type I Alveolar Cell",
                    "A thin cell forming most of the gas-exchange surface."
                ],

                [
                    "Type II Alveolar Cell",
                    "An alveolar cell that produces surfactant."
                ],

                [
                    "Surfactant",
                    "A substance that reduces alveolar surface tension."
                ],

                [
                    "Pleura",
                    "The serous membrane surrounding the lungs and lining the thoracic cavity."
                ],

                [
                    "Respiratory Membrane",
                    "The thin barrier separating alveolar gas from pulmonary capillary blood."
                ],

                [
                    "Alveolar Macrophage",
                    "A phagocyte that removes particles and microorganisms from alveoli."
                ]

            ],

            [

                {
                    label: "AIRWAY",

                    title:
                        "Conducting Zone",

                    paragraphs: [

                        "Air enters through the nose or mouth and passes through the pharynx, larynx, trachea and progressively smaller bronchi.",

                        "The conducting zone warms, humidifies and filters inspired air.",

                        "The trachea and large bronchi contain cartilage that helps maintain airway patency.",

                        "Bronchioles contain smooth muscle but little or no cartilage, allowing their diameter to be changed physiologically."

                    ],

                    flow: [

                        [
                            "Nose / Mouth",
                            "Air enters."
                        ],

                        [
                            "Pharynx",
                            "Common passage."
                        ],

                        [
                            "Larynx",
                            "Voice and airway protection."
                        ],

                        [
                            "Trachea",
                            "Major conducting tube."
                        ],

                        [
                            "Bronchi",
                            "Distribute air."
                        ],

                        [
                            "Bronchioles",
                            "Control airway resistance."
                        ],

                        [
                            "Alveoli",
                            "Gas exchange."
                        ]

                    ]

                },


                {
                    label: "ALVEOLI",

                    title:
                        "Type I vs. Type II Cells",

                    paragraphs: [

                        "Type I alveolar cells are extremely thin simple squamous cells. Their thin structure minimizes diffusion distance.",

                        "Type II alveolar cells secrete pulmonary surfactant. Surfactant reduces surface tension and helps prevent alveolar collapse.",

                        "Alveolar macrophages patrol the alveolar surface and remove particles that bypass upper-airway defenses.",

                        "The lungs contain an enormous total alveolar surface area, making gas exchange highly efficient."

                    ]

                },


                {
                    label: "PLEURA",

                    title:
                        "Mechanical Coupling Between Lung & Chest Wall",

                    paragraphs: [

                        "Visceral pleura covers the surface of the lungs. Parietal pleura lines the internal thoracic wall.",

                        "A small amount of pleural fluid allows the membranes to slide with minimal friction.",

                        "The pressure inside the pleural cavity is normally lower than alveolar pressure. This pressure relationship helps maintain lung expansion.",

                        "If air enters the pleural space, the normal coupling between the lung and chest wall can be disrupted."

                    ]

                },


                {
                    label: "RESPIRATORY MEMBRANE",

                    title:
                        "A Barrier Designed for Diffusion",

                    paragraphs: [

                        "The respiratory membrane separates alveolar air from pulmonary capillary blood.",

                        "It consists mainly of alveolar epithelium, thin basement-membrane regions and capillary endothelium.",

                        "The membrane is extremely thin because diffusion becomes slower as diffusion distance increases.",

                        "Conditions that thicken the respiratory membrane or fill alveoli with fluid can impair oxygen transfer."

                    ]

                }

            ],

            {
                title:
                    "Pneumothorax",

                scenario:
                    "Air enters the pleural cavity and eliminates the normal negative intrapleural pressure.",

                connection:
                    "The affected lung can recoil inward because the pressure relationship that normally helps keep it expanded has been lost."

            },

            [

                "Bronchioles do not have the same cartilage support as large bronchi.",

                "Type I alveolar cells perform gas exchange. Type II cells produce surfactant.",

                "Pleural fluid lubricates the membranes; it does not directly inflate the lungs."

            ],

            [

                "Conducting zone transports and conditions air.",

                "Respiratory zone performs gas exchange.",

                "Bronchioles contain smooth muscle.",

                "Type I cells form the exchange surface.",

                "Type II cells produce surfactant.",

                "Pleura surrounds lungs.",

                "Respiratory membrane must remain thin.",

                "Alveolar macrophages remove inhaled debris."

            ],

            [
                "Theory",
                "Lab",
                "Practical",
                "Clinical",
                "Quiz"
            ]

        ),


        // ====================================================
        // TOPIC 19
        // ====================================================

        createTopic(

            "ventilation",

            19,

            5,

            "Pulmonary Ventilation & Breathing Mechanics",

            "Understand Boyle's law, diaphragm action, intrapulmonary and intrapleural pressures, inspiration, expiration and airway resistance.",

            [

                "Explain why inspiration occurs.",

                "Explain quiet expiration.",

                "Apply Boyle's law to breathing.",

                "Explain intrapleural pressure.",

                "Predict effects of changing airway radius."

            ],

            [

                [
                    "Pulmonary Ventilation",
                    "The movement of air into and out of the lungs."
                ],

                [
                    "Inspiration",
                    "Movement of air into the lungs."
                ],

                [
                    "Expiration",
                    "Movement of air out of the lungs."
                ],

                [
                    "Boyle's Law",
                    "At constant temperature, gas pressure varies inversely with volume."
                ],

                [
                    "Intrapulmonary Pressure",
                    "Pressure inside the alveoli."
                ],

                [
                    "Intrapleural Pressure",
                    "Pressure within the pleural cavity."
                ],

                [
                    "Diaphragm",
                    "The primary muscle of quiet inspiration."
                ],

                [
                    "Elastic Recoil",
                    "The tendency of stretched lung tissue to return toward resting size."
                ],

                [
                    "Airway Resistance",
                    "Opposition to movement of air through the airways."
                ],

                [
                    "Bronchodilation",
                    "An increase in bronchiolar radius."
                ],

                [
                    "Bronchoconstriction",
                    "A decrease in bronchiolar radius."
                ]

            ],

            [

                {
                    label: "INSPIRATION",

                    title:
                        "Volume Increases, Pressure Falls",

                    paragraphs: [

                        "During quiet inspiration, the diaphragm contracts and moves downward. External intercostal muscles also assist expansion of the thoracic cage.",

                        "Increasing thoracic volume expands the lungs. As alveolar volume increases, alveolar pressure falls slightly below atmospheric pressure.",

                        "Air moves from higher atmospheric pressure toward lower alveolar pressure.",

                        "Airflow stops at the end of inspiration when alveolar pressure again equals atmospheric pressure."

                    ],

                    flow: [

                        [
                            "Diaphragm Contracts",
                            "Thoracic volume increases."
                        ],

                        [
                            "Lungs Expand",
                            "Alveolar volume increases."
                        ],

                        [
                            "Alveolar Pressure Falls",
                            "Pressure becomes lower than atmosphere."
                        ],

                        [
                            "Air Enters",
                            "Air moves down its pressure gradient."
                        ]

                    ]

                },


                {
                    label: "EXPIRATION",

                    title:
                        "Quiet Expiration Is Usually Passive",

                    paragraphs: [

                        "During quiet expiration, the inspiratory muscles relax.",

                        "Elastic recoil decreases lung volume and raises alveolar pressure slightly above atmospheric pressure.",

                        "Air therefore flows out of the lungs.",

                        "Forced expiration is different because abdominal muscles and internal intercostals can actively reduce thoracic volume."

                    ]

                },


                {
                    label: "PLEURAL PRESSURE",

                    title:
                        "Keeping the Lung Expanded",

                    paragraphs: [

                        "The lungs naturally tend to recoil inward while the chest wall tends to recoil outward.",

                        "These opposing forces create a subatmospheric intrapleural pressure.",

                        "The difference between alveolar and intrapleural pressure is called transpulmonary pressure and helps maintain lung expansion.",

                        "If intrapleural pressure becomes equal to atmospheric pressure because of a pneumothorax, lung expansion can be lost."

                    ]

                },


                {
                    label: "AIRWAY RESISTANCE",

                    title:
                        "Small Radius Changes Have Large Effects",

                    paragraphs: [

                        "Bronchiolar smooth muscle alters airway diameter.",

                        "Bronchodilation reduces airway resistance and improves airflow.",

                        "Bronchoconstriction decreases radius and markedly increases resistance.",

                        "Because resistance changes strongly with radius, relatively small changes in bronchiolar diameter can significantly change the work of breathing."

                    ]

                }

            ],

            {
                title:
                    "Asthma Physiology",

                scenario:
                    "Inflammation, mucus and bronchiolar smooth-muscle contraction narrow conducting airways.",

                connection:
                    "The smaller airway radius sharply increases resistance, so the respiratory muscles must generate a larger pressure gradient to move air."

            },

            [

                "The diaphragm does not physically pull air into the lungs. It changes pressure by changing thoracic volume.",

                "Quiet expiration is generally passive.",

                "Airflow occurs because of pressure gradients."

            ],

            [

                "Boyle's law explains pressure-volume changes.",

                "Diaphragm is the main quiet inspiratory muscle.",

                "Inspiration lowers alveolar pressure.",

                "Quiet expiration depends on elastic recoil.",

                "Negative intrapleural pressure helps keep lungs open.",

                "Airway radius strongly affects resistance.",

                "Bronchoconstriction increases work of breathing."

            ]

        ),


        // ====================================================
        // TOPIC 20
        // ====================================================

        createTopic(

            "lung-volumes",

            20,

            5,

            "Lung Volumes, Compliance & Surfactant",

            "Learn tidal volume, respiratory reserves, residual volume, vital capacity, dead space, alveolar ventilation, compliance, elastic recoil and surfactant.",

            [

                "Define major lung volumes.",

                "Explain vital capacity and total lung capacity.",

                "Explain dead-space ventilation.",

                "Explain lung compliance.",

                "Explain surfactant and surface tension."

            ],

            [

                [
                    "Tidal Volume",
                    "The amount of air moved during one normal quiet breath."
                ],

                [
                    "Inspiratory Reserve Volume",
                    "Additional air that can be inhaled after a normal inspiration."
                ],

                [
                    "Expiratory Reserve Volume",
                    "Additional air that can be exhaled after a normal expiration."
                ],

                [
                    "Residual Volume",
                    "Air remaining after maximal forced expiration."
                ],

                [
                    "Vital Capacity",
                    "The maximum amount of air exhaled after maximal inspiration."
                ],

                [
                    "Total Lung Capacity",
                    "The total amount of air in the lungs after maximal inspiration."
                ],

                [
                    "Dead Space",
                    "Ventilated air that does not directly participate in gas exchange."
                ],

                [
                    "Alveolar Ventilation",
                    "The amount of fresh air reaching gas-exchanging alveoli each minute."
                ],

                [
                    "Compliance",
                    "The ease with which lungs expand."
                ],

                [
                    "Surface Tension",
                    "The inward force created by attraction between water molecules lining alveoli."
                ],

                [
                    "Surfactant",
                    "A substance that reduces alveolar surface tension."
                ]

            ],

            [

                {
                    label: "VOLUMES",

                    title:
                        "What Spirometry Measures",

                    paragraphs: [

                        "Tidal volume is the amount of air moved during a normal quiet breath.",

                        "Inspiratory reserve volume is the additional amount that can be inhaled after a normal inspiration. Expiratory reserve volume is the additional amount that can be exhaled after a normal expiration.",

                        "Residual volume remains in the lungs even after maximal forced expiration and cannot be exhaled.",

                        "Vital capacity equals tidal volume plus inspiratory reserve plus expiratory reserve.",

                        "Because residual volume cannot be exhaled, simple spirometry cannot directly measure residual volume or capacities that include it."

                    ]

                },


                {
                    label: "ALVEOLAR VENTILATION",

                    title:
                        "Not Every Breath Reaches Gas-Exchange Surfaces",

                    paragraphs: [

                        "Some inspired air remains in the conducting airways. This is called anatomic dead space.",

                        "Alveolar ventilation is the volume of fresh air actually reaching alveoli each minute.",

                        "A person who breathes extremely rapidly and shallowly may have a reasonable minute ventilation but poor alveolar ventilation because a large proportion of each small breath remains in dead space."

                    ]

                },


                {
                    label: "COMPLIANCE",

                    title:
                        "Ease of Lung Expansion",

                    paragraphs: [

                        "Compliance describes how easily lung volume changes in response to a pressure change.",

                        "Low-compliance lungs are stiff and require greater muscular effort to expand.",

                        "Pulmonary fibrosis is associated with reduced compliance.",

                        "In emphysema, lungs may become excessively compliant but lose elastic recoil, making expiration difficult."

                    ]

                },


                {
                    label: "SURFACTANT",

                    title:
                        "Preventing Alveolar Collapse",

                    paragraphs: [

                        "Water molecules lining alveoli attract one another and create surface tension.",

                        "Surface tension tends to reduce alveolar size and promotes collapse.",

                        "Surfactant produced by type II alveolar cells disrupts these cohesive forces.",

                        "Lower surface tension increases lung compliance and helps stabilize alveoli, especially at low lung volumes."

                    ]

                }

            ],

            {
                title:
                    "Prematurity & Surfactant",

                scenario:
                    "A very premature infant may not produce enough pulmonary surfactant.",

                connection:
                    "Surface tension rises, lung compliance decreases and much greater pressure is required to keep alveoli open."

            },

            [

                "Vital capacity does not include residual volume.",

                "High compliance is not always beneficial; lungs also require elastic recoil.",

                "Minute ventilation and alveolar ventilation are not the same."

            ],

            [

                "Tidal volume is a normal breath.",

                "Residual volume remains after maximal expiration.",

                "Vital capacity excludes residual volume.",

                "Dead space does not exchange gas.",

                "Alveolar ventilation determines fresh gas reaching alveoli.",

                "Compliance describes ease of expansion.",

                "Surfactant reduces surface tension.",

                "Low surfactant promotes alveolar collapse."

            ]

        ),


        // ====================================================
        // TOPIC 21
        // ====================================================

        createTopic(

            "gas-exchange",

            21,

            5,

            "Gas Exchange & Ventilation-Perfusion Matching",

            "Apply partial pressures, diffusion principles, respiratory-membrane properties, pulmonary blood flow, V/Q matching, shunt and dead-space physiology.",

            [

                "Explain oxygen and carbon-dioxide diffusion.",

                "Explain effects of surface area and membrane thickness.",

                "Define ventilation-perfusion matching.",

                "Differentiate shunt and dead-space physiology.",

                "Apply V/Q concepts clinically."

            ],

            [

                [
                    "Partial Pressure",
                    "The pressure contributed by one gas in a mixture."
                ],

                [
                    "External Respiration",
                    "Gas exchange between alveoli and pulmonary blood."
                ],

                [
                    "Internal Respiration",
                    "Gas exchange between systemic blood and tissues."
                ],

                [
                    "Diffusion",
                    "Net movement down a concentration or partial-pressure gradient."
                ],

                [
                    "Ventilation",
                    "Movement of fresh gas to alveoli."
                ],

                [
                    "Perfusion",
                    "Blood flow through pulmonary capillaries."
                ],

                [
                    "V/Q Ratio",
                    "The relationship between alveolar ventilation and pulmonary perfusion."
                ],

                [
                    "Physiologic Dead Space",
                    "Ventilated lung regions receiving insufficient blood flow."
                ],

                [
                    "Shunt",
                    "Blood flow through regions receiving little or no ventilation."
                ],

                [
                    "Pulmonary Edema",
                    "Fluid accumulation that can increase diffusion distance."
                ]

            ],

            [

                {
                    label: "DIFFUSION",

                    title:
                        "Oxygen and CO₂ Follow Partial-Pressure Gradients",

                    paragraphs: [

                        "Oxygen moves from alveoli, where oxygen partial pressure is relatively high, into pulmonary capillary blood, where oxygen partial pressure is lower.",

                        "Carbon dioxide moves in the opposite direction because venous blood arriving at the lungs contains a higher carbon-dioxide partial pressure than alveolar gas.",

                        "At systemic tissues, oxygen leaves blood and enters cells, while carbon dioxide produced by cellular metabolism enters blood.",

                        "Each gas moves according to its own gradient."

                    ]

                },


                {
                    label: "DIFFUSION RATE",

                    title:
                        "Surface Area & Membrane Thickness Matter",

                    paragraphs: [

                        "Diffusion increases when the partial-pressure difference becomes greater.",

                        "Diffusion also increases when more surface area is available.",

                        "Increasing membrane thickness slows diffusion.",

                        "The lungs are efficient because millions of alveoli provide enormous surface area and the respiratory membrane is extremely thin."

                    ],

                    table: {

                        headers: [
                            "Change",
                            "Effect on Gas Diffusion"
                        ],

                        rows: [

                            [
                                "Pressure gradient ↑",
                                "Diffusion ↑"
                            ],

                            [
                                "Surface area ↑",
                                "Diffusion ↑"
                            ],

                            [
                                "Membrane thickness ↑",
                                "Diffusion ↓"
                            ],

                            [
                                "Alveolar surface loss",
                                "Diffusion ↓"
                            ]

                        ]

                    }

                },


                {
                    label: "V/Q MATCHING",

                    title:
                        "Air and Blood Must Reach the Same Alveolus",

                    paragraphs: [

                        "An alveolus can only exchange gas effectively when it receives both ventilation and perfusion.",

                        "A low V/Q region receives adequate blood flow but insufficient ventilation.",

                        "A high V/Q region receives adequate ventilation but insufficient blood flow.",

                        "The pulmonary circulation uses local responses to improve matching. Low alveolar oxygen causes nearby pulmonary arterioles to constrict, redirecting blood toward better-ventilated areas."

                    ]

                },


                {
                    label: "SHUNT VS. DEAD SPACE",

                    title:
                        "Two Opposite V/Q Problems",

                    paragraphs: [

                        "A shunt-like region receives blood but little or no ventilation. Blood passes through without becoming fully oxygenated.",

                        "A dead-space-like region receives ventilation but little or no perfusion. The inspired air therefore cannot participate effectively in exchange.",

                        "Pulmonary embolism is a classic cause of increased physiologic dead space because blood flow is suddenly blocked while ventilation may continue."

                    ]

                }

            ],

            {
                title:
                    "Pulmonary Embolism",

                scenario:
                    "A thrombus blocks blood flow through a pulmonary artery supplying a ventilated region of lung.",

                connection:
                    "The alveoli still receive air but no longer receive adequate blood flow, creating high-V/Q dead-space physiology."

            },

            [

                "Ventilation alone does not guarantee oxygenation.",

                "Pulmonary arterioles constrict—not dilate—in response to low alveolar oxygen.",

                "Shunt and dead space represent opposite V/Q extremes."

            ],

            [

                "Oxygen diffuses from alveoli into blood.",

                "Carbon dioxide diffuses from blood into alveoli.",

                "Surface area improves diffusion.",

                "Thickness slows diffusion.",

                "Efficient exchange requires ventilation and perfusion.",

                "Low V/Q = ventilation problem.",

                "High V/Q = perfusion problem.",

                "Pulmonary embolism increases dead-space physiology."

            ]

        ),


        // ====================================================
        // TOPIC 22
        // ====================================================

        createTopic(

            "oxygen-transport",

            22,

            5,

            "Oxygen Transport & Hemoglobin Dissociation",

            "Learn dissolved and hemoglobin-bound oxygen, saturation, oxygen content and factors shifting the oxygen-hemoglobin dissociation curve.",

            [

                "Distinguish PO2 from oxygen content.",

                "Explain hemoglobin saturation.",

                "Interpret the oxygen-hemoglobin dissociation curve.",

                "Explain right and left shifts.",

                "Connect temperature, CO2 and pH with oxygen unloading."

            ],

            [

                [
                    "Oxyhemoglobin",
                    "Hemoglobin with oxygen bound to heme."
                ],

                [
                    "Hemoglobin Saturation",
                    "The percentage of available oxygen-binding sites occupied by oxygen."
                ],

                [
                    "PO2",
                    "The partial pressure of dissolved oxygen."
                ],

                [
                    "Oxygen Content",
                    "The total amount of oxygen carried in blood."
                ],

                [
                    "Dissociation Curve",
                    "The relationship between PO2 and hemoglobin saturation."
                ],

                [
                    "Bohr Effect",
                    "Reduced hemoglobin oxygen affinity when CO2 or hydrogen-ion concentration increases."
                ],

                [
                    "Right Shift",
                    "A decrease in hemoglobin oxygen affinity that promotes unloading."
                ],

                [
                    "Left Shift",
                    "An increase in hemoglobin oxygen affinity."
                ],

                [
                    "2,3-BPG",
                    "A red-cell metabolite that decreases hemoglobin oxygen affinity."
                ],

                [
                    "Carbon Monoxide",
                    "A gas that binds hemoglobin with very high affinity and reduces oxygen-carrying capacity."
                ]

            ],

            [

                {
                    label: "TRANSPORT",

                    title:
                        "Most Oxygen Travels on Hemoglobin",

                    paragraphs: [

                        "Only a small fraction of oxygen is dissolved directly in plasma. The overwhelming majority is carried by hemoglobin.",

                        "The dissolved portion determines PO2, while hemoglobin concentration and saturation determine most total oxygen content.",

                        "This distinction is clinically important because two patients with the same PO2 may carry very different total amounts of oxygen if their hemoglobin concentrations differ."

                    ]

                },


                {
                    label: "DISSOCIATION CURVE",

                    title:
                        "A Sigmoid Relationship",

                    paragraphs: [

                        "The oxygen-hemoglobin dissociation curve has a sigmoid shape because oxygen binding is cooperative.",

                        "At high PO2 in the lungs, the curve is relatively flat. Moderate decreases in alveolar PO2 therefore produce relatively small changes in hemoglobin saturation.",

                        "At tissue-level PO2, the curve becomes steeper. A modest reduction in PO2 causes substantial oxygen unloading.",

                        "This shape allows reliable oxygen loading in the lungs and flexible unloading in metabolically active tissues."

                    ]

                },


                {
                    label: "RIGHT SHIFT",

                    title:
                        "Active Tissues Need Easier Oxygen Unloading",

                    paragraphs: [

                        "Increasing carbon dioxide, hydrogen ion concentration, temperature and 2,3-BPG shifts the dissociation curve to the right.",

                        "A right shift means hemoglobin has lower oxygen affinity. At a given PO2, it releases more oxygen.",

                        "Active skeletal muscle produces heat, carbon dioxide and acid. These local conditions therefore promote oxygen unloading precisely where oxygen demand is high.",

                        "A left shift produces the opposite effect and increases oxygen affinity."

                    ],

                    table: {

                        headers: [
                            "Right Shift",
                            "Left Shift"
                        ],

                        rows: [

                            [
                                "CO₂ ↑",
                                "CO₂ ↓"
                            ],

                            [
                                "pH ↓",
                                "pH ↑"
                            ],

                            [
                                "Temperature ↑",
                                "Temperature ↓"
                            ],

                            [
                                "2,3-BPG ↑",
                                "2,3-BPG ↓"
                            ],

                            [
                                "Oxygen unloading ↑",
                                "Oxygen unloading ↓"
                            ]

                        ]

                    }

                }

            ],

            {
                title:
                    "Severe Anemia",

                scenario:
                    "A patient has SpO₂ 98% but a very low hemoglobin concentration.",

                connection:
                    "Most available hemoglobin may be saturated, but there may not be enough hemoglobin molecules to carry a normal total amount of oxygen."

            },

            [

                "PO2 and oxygen content are not the same.",

                "Right shift means lower oxygen affinity and easier unloading.",

                "Normal oxygen saturation does not rule out severe anemia."

            ],

            [

                "Most oxygen travels on hemoglobin.",

                "PO2 represents dissolved oxygen.",

                "Hemoglobin concentration influences oxygen content.",

                "The dissociation curve is sigmoid.",

                "Right shift promotes unloading.",

                "CO2, heat and acid shift the curve right.",

                "Left shift increases oxygen affinity.",

                "Pulse oximetry does not measure hemoglobin concentration."

            ]

        ),


        // ====================================================
        // TOPIC 23
        // ====================================================

        createTopic(

            "co2-respiratory-control",

            23,

            5,

            "CO₂ Transport, Chemoreceptors & Respiratory Control",

            "Connect carbon-dioxide transport with bicarbonate and pH and learn how medullary centers and central and peripheral chemoreceptors regulate ventilation.",

            [

                "Describe the major forms of CO2 transport.",

                "Explain bicarbonate formation.",

                "Explain central chemoreceptor function.",

                "Explain peripheral chemoreceptor function.",

                "Predict ventilation responses to changing CO2."

            ],

            [

                [
                    "Bicarbonate",
                    "The major form in which carbon dioxide is transported in blood."
                ],

                [
                    "Carbonic Anhydrase",
                    "An enzyme that rapidly catalyzes CO2 and carbonic-acid reactions."
                ],

                [
                    "Carbaminohemoglobin",
                    "Hemoglobin with carbon dioxide bound to globin chains."
                ],

                [
                    "Chloride Shift",
                    "Exchange of bicarbonate and chloride across the red-cell membrane."
                ],

                [
                    "Medulla Oblongata",
                    "A brainstem region containing major respiratory rhythm-generating networks."
                ],

                [
                    "Pons",
                    "A brainstem region that modifies the respiratory pattern."
                ],

                [
                    "Central Chemoreceptor",
                    "A receptor responding strongly to CO2-related changes in cerebrospinal-fluid pH."
                ],

                [
                    "Peripheral Chemoreceptor",
                    "A receptor in carotid and aortic bodies responding to low O2 and changes in CO2 and pH."
                ],

                [
                    "Hyperventilation",
                    "Ventilation exceeding metabolic CO2 production."
                ],

                [
                    "Hypoventilation",
                    "Ventilation insufficient to remove metabolically produced CO2."
                ]

            ],

            [

                {
                    label: "CO2 TRANSPORT",

                    title:
                        "Most Carbon Dioxide Becomes Bicarbonate",

                    paragraphs: [

                        "Carbon dioxide is transported in three major forms. Some remains dissolved in plasma, some binds to hemoglobin and most becomes bicarbonate.",

                        "CO2 diffuses into red cells, where carbonic anhydrase rapidly combines it with water to form carbonic acid.",

                        "Carbonic acid dissociates into hydrogen ions and bicarbonate.",

                        "Much of the bicarbonate leaves the red cell in exchange for chloride. Hemoglobin buffers many of the generated hydrogen ions.",

                        "In the lungs, these reactions reverse and carbon dioxide is regenerated for exhalation."

                    ],

                    flow: [

                        [
                            "CO₂ Enters RBC",
                            "Produced by tissues."
                        ],

                        [
                            "Carbonic Anhydrase",
                            "CO₂ + water form carbonic acid."
                        ],

                        [
                            "H⁺ + HCO₃⁻",
                            "Carbonic acid dissociates."
                        ],

                        [
                            "Bicarbonate Enters Plasma",
                            "Chloride shifts into RBC."
                        ],

                        [
                            "Lungs",
                            "Process reverses and CO₂ is exhaled."
                        ]

                    ]

                },


                {
                    label: "CENTRAL CONTROL",

                    title:
                        "CO₂ Is a Powerful Respiratory Signal",

                    paragraphs: [

                        "Carbon dioxide readily crosses the blood-brain barrier. Hydrogen ions do not cross as freely.",

                        "When arterial CO2 rises, more CO2 enters cerebrospinal fluid. Carbonic acid forms and local hydrogen-ion concentration increases.",

                        "Central chemoreceptors detect this change and stimulate respiratory centers, increasing ventilation.",

                        "Increased ventilation removes additional CO2 and therefore opposes the original rise."

                    ]

                },


                {
                    label: "PERIPHERAL CONTROL",

                    title:
                        "Carotid & Aortic Bodies",

                    paragraphs: [

                        "Peripheral chemoreceptors are located in carotid and aortic bodies.",

                        "They respond to arterial CO2 and pH and are especially important for sensing substantial decreases in arterial oxygen.",

                        "When arterial oxygen falls severely, peripheral chemoreceptor activity increases and stimulates ventilation."

                    ]

                },


                {
                    label: "VENTILATION & PH",

                    title:
                        "Changing CO₂ Changes Acid-Base Balance",

                    paragraphs: [

                        "Hyperventilation removes CO2 faster than metabolism produces it. Carbon dioxide falls and blood pH tends to increase.",

                        "Hypoventilation retains carbon dioxide. CO2 rises and blood pH tends to decrease.",

                        "This relationship explains respiratory alkalosis and respiratory acidosis."

                    ]

                }

            ],

            {
                title:
                    "Acute Hyperventilation",

                scenario:
                    "A person breathes rapidly during severe anxiety and removes carbon dioxide faster than the body produces it.",

                connection:
                    "Falling CO2 reduces carbonic acid and hydrogen-ion concentration, shifting blood toward respiratory alkalosis."

            },

            [

                "Central chemoreceptors mainly respond to CO2 through changes in CSF pH.",

                "Most CO2 travels as bicarbonate rather than dissolved gas.",

                "Hyperventilation lowers CO2. Hypoventilation raises CO2."

            ],

            [

                "Most CO2 is transported as bicarbonate.",

                "Carbonic anhydrase accelerates bicarbonate formation.",

                "Chloride shift supports bicarbonate transport.",

                "Central chemoreceptors strongly monitor CO2-related pH.",

                "Peripheral chemoreceptors sense low arterial oxygen.",

                "Hyperventilation lowers CO2.",

                "Hypoventilation raises CO2."

            ]

        ),


        // ====================================================
        // TOPIC 24
        // ====================================================

        createTopic(

            "gi-anatomy",

            24,

            6,

            "GI Anatomy, Wall Layers & Motility",

            "Trace the digestive tract, learn the common GI wall layers, enteric nervous system, peristalsis, segmentation and major sphincters.",

            [

                "Trace food through the GI tract.",

                "Identify the four major wall layers.",

                "Explain the enteric nervous system.",

                "Distinguish peristalsis and segmentation.",

                "Explain major sphincters."

            ],

            [

                [
                    "Alimentary Canal",
                    "The continuous digestive tube from mouth to anus."
                ],

                [
                    "Mucosa",
                    "The innermost GI layer responsible for absorption, secretion and protection."
                ],

                [
                    "Submucosa",
                    "A connective-tissue layer containing blood vessels and the submucosal plexus."
                ],

                [
                    "Muscularis Externa",
                    "The smooth-muscle layer responsible for much GI motility."
                ],

                [
                    "Serosa",
                    "The outer visceral peritoneal covering of many digestive organs."
                ],

                [
                    "Myenteric Plexus",
                    "An enteric nerve network strongly involved in GI motility."
                ],

                [
                    "Submucosal Plexus",
                    "An enteric network involved in secretion and local blood flow."
                ],

                [
                    "Peristalsis",
                    "A coordinated wave that propels GI contents."
                ],

                [
                    "Segmentation",
                    "Mixing contractions that repeatedly divide intestinal contents."
                ],

                [
                    "Pyloric Sphincter",
                    "A sphincter regulating stomach emptying into the duodenum."
                ]

            ],

            [

                {
                    label: "PATHWAY",

                    title:
                        "Mouth → Esophagus → Stomach → Intestines",

                    paragraphs: [

                        "The digestive tract is a continuous tube beginning at the mouth and ending at the anus.",

                        "Food passes from the oral cavity through the pharynx and esophagus into the stomach.",

                        "It then moves into the small intestine: duodenum, jejunum and ileum.",

                        "Material continues through the large intestine before reaching the rectum and anal canal.",

                        "Accessory digestive organs assist digestion but food does not pass through them."

                    ],

                    flow: [

                        [
                            "Mouth",
                            "Ingestion and chewing."
                        ],

                        [
                            "Esophagus",
                            "Transport."
                        ],

                        [
                            "Stomach",
                            "Storage and mixing."
                        ],

                        [
                            "Small Intestine",
                            "Most digestion and absorption."
                        ],

                        [
                            "Large Intestine",
                            "Water recovery and feces formation."
                        ],

                        [
                            "Rectum",
                            "Storage before elimination."
                        ]

                    ]

                },


                {
                    label: "WALL LAYERS",

                    title:
                        "The Common GI Wall Plan",

                    paragraphs: [

                        "Most of the digestive tract contains four major wall layers.",

                        "The mucosa lines the lumen and is specialized for absorption, secretion and protection.",

                        "The submucosa contains connective tissue, blood vessels and the submucosal nerve plexus.",

                        "The muscularis externa contains smooth muscle and the myenteric nerve plexus and generates motility.",

                        "The outermost layer is either serosa or adventitia depending on the organ's relationship with the peritoneum."

                    ]

                },


                {
                    label: "MOTILITY",

                    title:
                        "Peristalsis vs. Segmentation",

                    paragraphs: [

                        "Peristalsis is primarily propulsive. Circular muscle contracts behind a bolus while the region ahead relaxes, moving material forward.",

                        "Segmentation is primarily a mixing movement. Alternating intestinal contractions repeatedly divide and recombine luminal contents.",

                        "Mixing improves contact between nutrients, digestive enzymes and absorptive surfaces.",

                        "The enteric nervous system can coordinate many of these movements without direct commands from the brain, although autonomic input modifies the activity."

                    ]

                }

            ],

            {
                title:
                    "Gastroesophageal Reflux",

                scenario:
                    "If the lower esophageal sphincter fails to maintain an adequate barrier, gastric contents can reflux into the esophagus.",

                connection:
                    "The esophageal lining is less protected against prolonged acid exposure than the stomach."

            },

            [

                "Accessory organs aid digestion but are not part of the lumen pathway.",

                "Peristalsis propels while segmentation primarily mixes.",

                "The enteric nervous system can function independently but is modified by autonomic input."

            ],

            [

                "Know GI organs in order.",

                "Mucosa faces the lumen.",

                "Submucosa contains vessels and nerve plexus.",

                "Muscularis externa generates movement.",

                "Myenteric plexus regulates motility.",

                "Peristalsis propels.",

                "Segmentation mixes.",

                "Small intestine performs most absorption."

            ]

        ),


        // ====================================================
        // TOPIC 25
        // ====================================================

        createTopic(

            "digestion",

            25,

            6,

            "Digestive Secretions & Chemical Digestion",

            "Learn gastric acid, pepsin, pancreatic enzymes, bicarbonate, bile, intestinal enzymes and digestion of carbohydrates, proteins and fats.",

            [

                "Explain stomach secretion.",

                "Explain pancreatic enzyme and bicarbonate secretion.",

                "Explain bile function.",

                "Trace carbohydrate digestion.",

                "Trace protein and lipid digestion."

            ],

            [

                [
                    "Hydrochloric Acid",
                    "Stomach acid that denatures proteins and activates pepsin."
                ],

                [
                    "Pepsin",
                    "A stomach protease involved in protein digestion."
                ],

                [
                    "Intrinsic Factor",
                    "A stomach protein required for efficient vitamin B12 absorption."
                ],

                [
                    "Pancreatic Amylase",
                    "An enzyme that digests carbohydrates."
                ],

                [
                    "Pancreatic Lipase",
                    "A major enzyme that digests triglycerides."
                ],

                [
                    "Trypsin",
                    "A pancreatic protease activated in the small intestine."
                ],

                [
                    "Pancreatic Bicarbonate",
                    "An alkaline secretion that neutralizes acidic chyme."
                ],

                [
                    "Bile",
                    "A liver secretion that assists fat digestion and absorption."
                ],

                [
                    "Bile Salt",
                    "An amphipathic molecule that emulsifies fats and helps form micelles."
                ],

                [
                    "Brush-Border Enzyme",
                    "An enzyme attached to the intestinal microvilli."
                ],

                [
                    "CCK",
                    "A hormone that promotes pancreatic enzyme secretion and gallbladder contraction."
                ],

                [
                    "Secretin",
                    "A hormone that promotes bicarbonate-rich pancreatic secretion."
                ]

            ],

            [

                {
                    label: "STOMACH",

                    title:
                        "Acid, Pepsin & Intrinsic Factor",

                    paragraphs: [

                        "Parietal cells secrete hydrochloric acid and intrinsic factor.",

                        "Acid helps denature proteins and creates the acidic environment needed for pepsin activity.",

                        "Chief cells secrete pepsinogen, an inactive precursor. Acid helps convert pepsinogen into active pepsin.",

                        "Intrinsic factor binds vitamin B12 and is essential for efficient B12 absorption later in the ileum."

                    ]

                },


                {
                    label: "PANCREAS",

                    title:
                        "Enzymes + Bicarbonate",

                    paragraphs: [

                        "The exocrine pancreas releases digestive enzymes and bicarbonate-rich fluid into the duodenum.",

                        "Pancreatic amylase continues carbohydrate digestion. Pancreatic lipase digests triglycerides. Pancreatic proteases digest proteins.",

                        "Many proteases are secreted as inactive precursors so they do not digest pancreatic tissue.",

                        "Bicarbonate neutralizes gastric acid entering the duodenum and creates a pH more appropriate for pancreatic enzyme function."

                    ]

                },


                {
                    label: "BILE",

                    title:
                        "Emulsification Is Not Enzymatic Digestion",

                    paragraphs: [

                        "The liver produces bile. The gallbladder stores and concentrates it.",

                        "Bile salts are amphipathic molecules. They interact with both water and lipids.",

                        "Bile salts break large lipid globules into smaller droplets. This emulsification increases the surface area available to pancreatic lipase.",

                        "Bile therefore assists fat digestion but is not itself a digestive enzyme."

                    ]

                },


                {
                    label: "MACRONUTRIENTS",

                    title:
                        "What Digestion Produces",

                    paragraphs: [

                        "Carbohydrates must ultimately be reduced to monosaccharides before absorption.",

                        "Proteins are broken into amino acids and small peptides.",

                        "Triglycerides are broken into fatty acids and monoglycerides.",

                        "Most final digestion occurs in the small intestine with the help of pancreatic and brush-border enzymes."

                    ],

                    table: {

                        headers: [
                            "Nutrient",
                            "Absorbable Products"
                        ],

                        rows: [

                            [
                                "Carbohydrate",
                                "Monosaccharides"
                            ],

                            [
                                "Protein",
                                "Amino acids / small peptides"
                            ],

                            [
                                "Triglyceride",
                                "Fatty acids / monoglycerides"
                            ]

                        ]

                    }

                }

            ],

            {
                title:
                    "Pancreatic Insufficiency",

                scenario:
                    "If the pancreas cannot release enough digestive enzymes, nutrient digestion becomes incomplete.",

                connection:
                    "Fat digestion is often especially impaired because pancreatic lipase is a major triglyceride-digesting enzyme."

            },

            [

                "Bile is not a digestive enzyme.",

                "Pepsin acts in the stomach, while pancreatic proteases act mainly in the intestine.",

                "Intrinsic factor is required for vitamin B12—not iron—absorption."

            ],

            [

                "Parietal cells produce HCl and intrinsic factor.",

                "Chief cells produce pepsinogen.",

                "Pancreas releases enzymes and bicarbonate.",

                "Bicarbonate neutralizes gastric acid.",

                "Bile emulsifies fat.",

                "CCK promotes enzyme secretion and gallbladder contraction.",

                "Secretin promotes bicarbonate secretion.",

                "Most digestion finishes in small intestine."

            ]

        ),


        // ====================================================
        // TOPIC 26
        // ====================================================

        createTopic(

            "absorption-liver",

            26,

            6,

            "Nutrient Absorption, Liver, Gallbladder & Pancreas",

            "Understand villi and microvilli, blood versus lymph nutrient transport, hepatic portal circulation, liver metabolism and accessory digestive organs.",

            [

                "Explain how villi and microvilli increase absorption.",

                "Trace monosaccharides and amino acids to the liver.",

                "Trace lipids through lacteals.",

                "Explain major liver functions.",

                "Differentiate liver, gallbladder and pancreatic roles."

            ],

            [

                [
                    "Villus",
                    "A finger-like intestinal projection that increases surface area."
                ],

                [
                    "Microvillus",
                    "A microscopic epithelial projection forming the brush border."
                ],

                [
                    "Lacteal",
                    "A lymphatic capillary inside an intestinal villus."
                ],

                [
                    "Chylomicron",
                    "A lipoprotein particle transporting absorbed dietary triglycerides."
                ],

                [
                    "Hepatic Portal Vein",
                    "A vein carrying nutrient-rich blood from digestive organs to the liver."
                ],

                [
                    "Liver",
                    "A major metabolic organ that processes nutrients and produces bile."
                ],

                [
                    "Gallbladder",
                    "An organ that stores and concentrates bile."
                ],

                [
                    "Enterocyte",
                    "An absorptive epithelial cell of the small intestine."
                ],

                [
                    "Micelle",
                    "A bile-salt structure that carries lipid digestion products to enterocytes."
                ],

                [
                    "Glycogen",
                    "A storage polymer of glucose."
                ]

            ],

            [

                {
                    label: "SURFACE AREA",

                    title:
                        "Why the Small Intestine Absorbs So Efficiently",

                    paragraphs: [

                        "The small intestine contains circular folds, villi and microscopic microvilli.",

                        "Each level of folding increases the total surface area available for nutrient absorption.",

                        "Inside each villus are blood capillaries and a central lymphatic lacteal.",

                        "This arrangement allows water-soluble and lipid-soluble nutrients to enter different transport pathways."

                    ]

                },


                {
                    label: "PORTAL BLOOD",

                    title:
                        "Carbohydrates & Amino Acids Go to the Liver First",

                    paragraphs: [

                        "Monosaccharides and amino acids enter blood capillaries inside intestinal villi.",

                        "These capillaries eventually drain into the hepatic portal vein.",

                        "Portal blood travels to liver sinusoids before returning to the general circulation.",

                        "The liver can therefore process, store or modify absorbed nutrients before they reach the rest of the body."

                    ]

                },


                {
                    label: "LIPID ABSORPTION",

                    title:
                        "Micelles → Chylomicrons → Lacteals",

                    paragraphs: [

                        "Bile salts organize lipid digestion products into micelles, which carry fatty acids and monoglycerides toward the intestinal brush border.",

                        "Lipids enter enterocytes and are reassembled into triglycerides.",

                        "The triglycerides are packaged into chylomicrons.",

                        "Chylomicrons are too large to efficiently enter ordinary blood capillaries and instead enter lacteals.",

                        "They travel through lymphatic vessels and eventually reach the bloodstream through the thoracic duct."

                    ]

                },


                {
                    label: "LIVER",

                    title:
                        "The Central Metabolic Processing Organ",

                    paragraphs: [

                        "The liver performs hundreds of functions. It stores glycogen, synthesizes albumin and many clotting proteins and metabolizes nutrients.",

                        "It detoxifies or chemically modifies many drugs and other substances.",

                        "It converts ammonia generated during amino-acid metabolism into urea.",

                        "The liver produces bile. The gallbladder stores and concentrates bile but does not produce it.",

                        "The pancreas functions both as an exocrine digestive organ and as an endocrine gland."

                    ]

                }

            ],

            {
                title:
                    "Loss of Bile Flow",

                scenario:
                    "If bile cannot reach the small intestine, normal fat emulsification and micelle formation are impaired.",

                connection:
                    "Fat absorption can decline, and absorption of fat-soluble vitamins can also be reduced."

            },

            [

                "The liver produces bile; the gallbladder stores it.",

                "Most water-soluble nutrients enter portal blood before reaching systemic circulation.",

                "Chylomicrons enter lymph before entering blood."

            ],

            [

                "Villi and microvilli increase absorptive surface area.",

                "Monosaccharides enter blood.",

                "Amino acids enter blood.",

                "Portal blood travels to liver first.",

                "Dietary lipids form chylomicrons.",

                "Chylomicrons enter lacteals.",

                "Liver makes bile.",

                "Gallbladder stores bile."

            ]

        ),


        // ====================================================
        // TOPIC 27
        // ====================================================

        createTopic(

            "metabolism",

            27,

            6,

            "Cellular Metabolism, Fed State & Fasting",

            "Integrate glycolysis, citric acid cycle, electron transport, glycogen metabolism, gluconeogenesis, beta oxidation and fed-versus-fasting physiology.",

            [

                "Distinguish catabolism and anabolism.",

                "Trace aerobic glucose metabolism.",

                "Explain glycogenesis and glycogenolysis.",

                "Explain gluconeogenesis and beta oxidation.",

                "Compare fed and fasting metabolism."

            ],

            [

                [
                    "Metabolism",
                    "The sum of all chemical reactions occurring in the body."
                ],

                [
                    "Catabolism",
                    "Breakdown pathways that generally release usable energy."
                ],

                [
                    "Anabolism",
                    "Synthetic pathways that generally require energy."
                ],

                [
                    "Glycolysis",
                    "The cytosolic pathway converting glucose into pyruvate."
                ],

                [
                    "Citric Acid Cycle",
                    "A mitochondrial pathway oxidizing acetyl-CoA."
                ],

                [
                    "Electron Transport Chain",
                    "The inner-mitochondrial system responsible for most aerobic ATP production."
                ],

                [
                    "Glycogenesis",
                    "Formation of glycogen from glucose."
                ],

                [
                    "Glycogenolysis",
                    "Breakdown of glycogen."
                ],

                [
                    "Gluconeogenesis",
                    "Formation of glucose from noncarbohydrate precursors."
                ],

                [
                    "Lipolysis",
                    "Breakdown of stored triglycerides."
                ],

                [
                    "Beta Oxidation",
                    "Mitochondrial breakdown of fatty acids into acetyl-CoA."
                ],

                [
                    "Fed State",
                    "The post-meal metabolic state dominated by nutrient use and storage."
                ],

                [
                    "Fasting State",
                    "A state dominated by mobilization of stored fuels."
                ]

            ],

            [

                {
                    label: "CELLULAR RESPIRATION",

                    title:
                        "Glucose → ATP",

                    paragraphs: [

                        "Glycolysis occurs in the cytoplasm and converts one glucose molecule into pyruvate while generating a small amount of ATP.",

                        "When oxygen and mitochondrial function are adequate, pyruvate enters mitochondria and is converted to acetyl-CoA.",

                        "Acetyl-CoA enters the citric acid cycle. The cycle generates reduced electron carriers.",

                        "These electron carriers donate electrons to the electron transport chain.",

                        "The resulting proton gradient powers ATP synthase, producing most ATP generated during aerobic glucose metabolism."

                    ],

                    flow: [

                        [
                            "Glycolysis",
                            "Glucose → pyruvate."
                        ],

                        [
                            "Acetyl-CoA",
                            "Pyruvate enters mitochondrion."
                        ],

                        [
                            "Citric Acid Cycle",
                            "Electron carriers are generated."
                        ],

                        [
                            "Electron Transport",
                            "Proton gradient is created."
                        ],

                        [
                            "ATP Synthase",
                            "Most ATP is generated."
                        ]

                    ]

                },


                {
                    label: "FED STATE",

                    title:
                        "Insulin Promotes Storage",

                    paragraphs: [

                        "After eating, absorbed nutrients enter the circulation and insulin secretion increases.",

                        "Insulin promotes glucose uptake in insulin-responsive tissues and encourages glycogen synthesis.",

                        "It also promotes fat storage and protein synthesis.",

                        "The fed state is therefore generally anabolic: the body uses incoming nutrients and stores excess fuel."

                    ]

                },


                {
                    label: "FASTING",

                    title:
                        "Stored Fuel Becomes Available",

                    paragraphs: [

                        "When nutrient absorption ends, insulin falls and glucagon becomes relatively more important.",

                        "The liver initially releases glucose through glycogenolysis.",

                        "As fasting continues, gluconeogenesis produces new glucose from substances such as lactate, glycerol and amino-acid carbon skeletons.",

                        "Adipose tissue releases fatty acids. Most tissues can use those fatty acids through beta oxidation.",

                        "During prolonged fasting, the liver also produces increasing quantities of ketone bodies."

                    ]

                },


                {
                    label: "COMPARE",

                    title:
                        "Fed vs. Fasting Metabolism",

                    paragraphs: [

                        "The fed state focuses on storage and synthesis. The fasting state focuses on maintaining blood fuels by releasing stored nutrients.",

                        "These states are coordinated by hormones rather than being simple on/off conditions."

                    ],

                    table: {

                        headers: [
                            "Fed",
                            "Fasting"
                        ],

                        rows: [

                            [
                                "Insulin relatively high",
                                "Glucagon relatively high"
                            ],

                            [
                                "Glycogenesis",
                                "Glycogenolysis"
                            ],

                            [
                                "Lipogenesis",
                                "Lipolysis"
                            ],

                            [
                                "Storage",
                                "Fuel mobilization"
                            ]

                        ]

                    }

                }

            ],

            {
                title:
                    "Severe Insulin Deficiency",

                scenario:
                    "When insulin signaling is severely deficient, blood glucose can be high while cells behave metabolically as though the body is fasting.",

                connection:
                    "Fat breakdown and hepatic fuel production rise because the normal insulin signal of nutrient abundance is missing."

            },

            [

                "Glycolysis occurs in the cytoplasm, not mitochondria.",

                "Most aerobic ATP comes from oxidative phosphorylation rather than glycolysis.",

                "Glycogenolysis and gluconeogenesis are not the same process."

            ],

            [

                "Catabolism breaks down molecules.",

                "Anabolism builds molecules.",

                "Glycolysis occurs in cytoplasm.",

                "Citric acid cycle occurs in mitochondria.",

                "Electron transport produces most aerobic ATP.",

                "Insulin promotes fed-state storage.",

                "Glucagon supports fasting metabolism.",

                "Beta oxidation breaks down fatty acids."

            ]

        ),


        // ====================================================
        // TOPIC 28
        // ====================================================

        createTopic(

            "renal-anatomy",

            28,

            7,

            "Kidney Anatomy & Nephron Organization",

            "Learn kidney gross anatomy, renal blood flow, the renal corpuscle, nephron segments, collecting system and juxtamedullary nephrons.",

            [

                "Identify kidney cortex and medulla.",

                "Trace urine through calyces and renal pelvis.",

                "Trace renal blood flow.",

                "Trace filtrate through nephron segments.",

                "Compare cortical and juxtamedullary nephrons."

            ],

            [

                [
                    "Renal Cortex",
                    "The outer kidney region containing renal corpuscles and convoluted tubules."
                ],

                [
                    "Renal Medulla",
                    "The inner region organized into renal pyramids."
                ],

                [
                    "Renal Pyramid",
                    "A cone-shaped medullary structure."
                ],

                [
                    "Minor Calyx",
                    "A cup-like structure receiving urine from a renal papilla."
                ],

                [
                    "Renal Pelvis",
                    "A funnel-like structure that directs urine toward the ureter."
                ],

                [
                    "Nephron",
                    "The functional unit of the kidney."
                ],

                [
                    "Glomerulus",
                    "A capillary tuft where blood filtration begins."
                ],

                [
                    "Glomerular Capsule",
                    "A cup-like structure that receives glomerular filtrate."
                ],

                [
                    "Proximal Convoluted Tubule",
                    "A nephron segment responsible for extensive reabsorption."
                ],

                [
                    "Nephron Loop",
                    "A nephron segment important in generating the medullary osmotic gradient."
                ],

                [
                    "Distal Convoluted Tubule",
                    "A segment involved in regulated electrolyte and acid-base handling."
                ],

                [
                    "Collecting Duct",
                    "A tubular structure involved in final urine concentration."
                ],

                [
                    "Afferent Arteriole",
                    "The vessel carrying blood into the glomerulus."
                ],

                [
                    "Efferent Arteriole",
                    "The vessel carrying blood away from the glomerulus."
                ]

            ],

            [

                {
                    label: "GROSS ANATOMY",

                    title:
                        "Cortex → Medulla → Calyces → Pelvis",

                    paragraphs: [

                        "The kidneys lie retroperitoneally on the posterior abdominal wall.",

                        "The outer renal cortex contains renal corpuscles and portions of nephron tubules.",

                        "The renal medulla contains pyramids. Each pyramid ends at a renal papilla.",

                        "Urine leaving a papilla enters a minor calyx. Minor calyces combine into major calyces.",

                        "Major calyces empty into the renal pelvis, which narrows into the ureter."

                    ],

                    flow: [

                        [
                            "Collecting / Papillary Duct",
                            "Urine leaves renal tissue."
                        ],

                        [
                            "Minor Calyx",
                            "Receives urine."
                        ],

                        [
                            "Major Calyx",
                            "Receives several minor calyces."
                        ],

                        [
                            "Renal Pelvis",
                            "Collects urine."
                        ],

                        [
                            "Ureter",
                            "Carries urine to bladder."
                        ]

                    ]

                },


                {
                    label: "RENAL BLOOD FLOW",

                    title:
                        "Afferent In, Efferent Out",

                    paragraphs: [

                        "Renal arteries divide repeatedly until blood reaches afferent arterioles.",

                        "Each afferent arteriole delivers blood to a glomerular capillary network.",

                        "Blood leaves the glomerulus through an efferent arteriole rather than a venule.",

                        "The efferent arteriole then forms peritubular capillaries or, in juxtamedullary nephrons, the vasa recta.",

                        "This arrangement places nephron tubules close to a second capillary network, supporting extensive reabsorption and secretion."

                    ]

                },


                {
                    label: "NEPHRON",

                    title:
                        "Follow the Filtrate",

                    paragraphs: [

                        "Filtrate enters the glomerular capsule and then passes into the proximal convoluted tubule.",

                        "The proximal tubule performs extensive reabsorption.",

                        "Fluid then travels through the nephron loop, which contributes to the medullary osmotic gradient.",

                        "The distal convoluted tubule performs additional regulated transport.",

                        "Finally, fluid enters collecting ducts where hormones such as ADH can strongly influence final water content."

                    ]

                },


                {
                    label: "NEPHRON TYPES",

                    title:
                        "Cortical vs. Juxtamedullary Nephrons",

                    paragraphs: [

                        "Most nephrons are cortical and contain relatively short nephron loops.",

                        "Juxtamedullary nephrons have long loops that extend deeply into the medulla.",

                        "These long loops are especially important for creating the medullary osmotic gradient necessary for producing concentrated urine.",

                        "The vasa recta surrounding these loops helps preserve the gradient."

                    ]

                }

            ],

            {
                title:
                    "Ureteral Obstruction",

                scenario:
                    "A urinary stone blocks a ureter and increases pressure upstream toward the kidney.",

                connection:
                    "Persistent pressure can impair filtration and eventually damage renal tissue."

            },

            [

                "The afferent arteriole enters the glomerulus; the efferent arteriole leaves.",

                "The glomerular filtrate is not yet final urine.",

                "Juxtamedullary nephrons are especially important for concentrating urine."

            ],

            [

                "Cortex contains renal corpuscles.",

                "Medulla contains renal pyramids.",

                "Urine flows through calyces to renal pelvis.",

                "Nephron is the functional unit.",

                "Afferent arteriole enters glomerulus.",

                "Efferent arteriole exits glomerulus.",

                "PCT performs extensive reabsorption.",

                "Collecting ducts help determine final water content."

            ],

            [
                "Theory",
                "Lab",
                "Practical",
                "Quiz"
            ]

        ),


        // ====================================================
        // TOPIC 29
        // ====================================================

        createTopic(

            "glomerular-filtration",

            29,

            7,

            "Glomerular Filtration & GFR",

            "Understand the filtration barrier, glomerular pressures, GFR, renal autoregulation and how afferent and efferent arterioles influence filtration.",

            [

                "Describe the glomerular filtration barrier.",

                "Explain the forces promoting and opposing filtration.",

                "Define GFR.",

                "Predict afferent and efferent arteriolar effects.",

                "Explain renal autoregulation."

            ],

            [

                [
                    "Glomerular Filtration",
                    "Movement of water and small solutes from glomerular blood into the nephron."
                ],

                [
                    "GFR",
                    "The volume of filtrate produced by all glomeruli per unit time."
                ],

                [
                    "Filtration Barrier",
                    "The specialized barrier separating glomerular blood from Bowman's space."
                ],

                [
                    "Podocyte",
                    "A specialized epithelial cell forming filtration slits."
                ],

                [
                    "Glomerular Hydrostatic Pressure",
                    "A pressure that strongly favors filtration."
                ],

                [
                    "Capsular Hydrostatic Pressure",
                    "Pressure within Bowman's space that opposes filtration."
                ],

                [
                    "Plasma Colloid Osmotic Pressure",
                    "An osmotic force from plasma proteins that opposes filtration."
                ],

                [
                    "Autoregulation",
                    "Kidney mechanisms that stabilize renal blood flow and GFR."
                ],

                [
                    "Macula Densa",
                    "Specialized distal-tubule cells that sense NaCl delivery."
                ],

                [
                    "Juxtaglomerular Cell",
                    "A modified arteriole cell capable of releasing renin."
                ],

                [
                    "Proteinuria",
                    "Abnormal urinary protein."
                ]

            ],

            [

                {
                    label: "FILTRATION BARRIER",

                    title:
                        "What Normally Crosses?",

                    paragraphs: [

                        "The glomerular filtration barrier contains three major components: fenestrated capillary endothelium, basement membrane and filtration slits between podocyte processes.",

                        "The barrier permits water and many small solutes to enter the filtrate.",

                        "Blood cells and most large plasma proteins are normally retained within the circulation.",

                        "Glucose, amino acids, sodium and urea can all be filtered. Filtration does not mean they will be excreted because tubular transport occurs later."

                    ]

                },


                {
                    label: "FILTRATION PRESSURE",

                    title:
                        "Forces Across the Glomerulus",

                    paragraphs: [

                        "Glomerular hydrostatic pressure pushes fluid from capillary blood into Bowman's space and strongly favors filtration.",

                        "Capsular hydrostatic pressure pushes back against filtration.",

                        "Plasma proteins create colloid osmotic pressure that draws water toward the blood and also opposes filtration.",

                        "The balance of these forces produces the net filtration pressure."

                    ]

                },


                {
                    label: "ARTERIOLES",

                    title:
                        "Changing GFR Through Arteriolar Tone",

                    paragraphs: [

                        "Constriction of the afferent arteriole decreases blood flow entering the glomerulus and generally lowers glomerular pressure and GFR.",

                        "Afferent dilation tends to increase glomerular blood flow and GFR.",

                        "Moderate constriction of the efferent arteriole can increase glomerular pressure because blood has greater difficulty leaving the glomerulus.",

                        "However, very severe efferent constriction can reduce renal blood flow enough that filtration eventually declines."

                    ],

                    table: {

                        headers: [
                            "Change",
                            "Typical GFR Effect"
                        ],

                        rows: [

                            [
                                "Afferent constriction",
                                "↓"
                            ],

                            [
                                "Afferent dilation",
                                "↑"
                            ],

                            [
                                "Moderate efferent constriction",
                                "↑ / maintain"
                            ],

                            [
                                "Efferent dilation",
                                "↓"
                            ]

                        ]

                    }

                },


                {
                    label: "AUTOREGULATION",

                    title:
                        "Keeping GFR Relatively Stable",

                    paragraphs: [

                        "The kidneys can stabilize renal blood flow and filtration over a range of arterial pressures.",

                        "The myogenic mechanism causes afferent smooth muscle to constrict when stretched by increased pressure and relax when pressure falls.",

                        "Tubuloglomerular feedback uses the macula densa to sense distal tubular sodium chloride delivery.",

                        "These mechanisms protect filtration from ordinary pressure fluctuations, although severe hypotension or strong sympathetic activation can override them."

                    ]

                }

            ],

            {
                title:
                    "Proteinuria",

                scenario:
                    "Damage to the glomerular filtration barrier allows proteins that are normally retained in plasma to enter tubular fluid.",

                connection:
                    "Persistent urinary protein can therefore indicate abnormal glomerular permeability, although other causes can also exist."

            },

            [

                "Filtered does not mean excreted.",

                "GFR is not the same as renal blood flow.",

                "Moderate efferent constriction and afferent constriction do not have the same effects."

            ],

            [

                "Filtration begins at the glomerulus.",

                "Cells and large proteins are normally retained.",

                "Glomerular pressure favors filtration.",

                "Plasma oncotic pressure opposes filtration.",

                "GFR measures filtrate formation.",

                "Afferent constriction lowers GFR.",

                "Macula densa participates in autoregulation.",

                "Proteinuria may indicate filtration-barrier damage."

            ]

        ),


        // ====================================================
        // TOPIC 30
        // ====================================================

        createTopic(

            "tubular-transport",

            30,

            7,

            "Tubular Reabsorption, Secretion & Urine Concentration",

            "Learn proximal-tubule transport, nephron-loop physiology, countercurrent multiplication, collecting ducts, ADH and renal transport maximum.",

            [

                "Differentiate reabsorption and secretion.",

                "Explain bulk reabsorption in the PCT.",

                "Explain descending and ascending loop functions.",

                "Explain the medullary gradient.",

                "Explain ADH and aquaporins."

            ],

            [

                [
                    "Tubular Reabsorption",
                    "Movement of substances from tubular fluid back to blood."
                ],

                [
                    "Tubular Secretion",
                    "Movement of substances from blood into tubular fluid."
                ],

                [
                    "Proximal Convoluted Tubule",
                    "The nephron segment responsible for bulk reabsorption."
                ],

                [
                    "Descending Limb",
                    "A loop segment highly permeable to water."
                ],

                [
                    "Thick Ascending Limb",
                    "A loop segment that reabsorbs Na+, K+ and Cl− but is relatively impermeable to water."
                ],

                [
                    "Countercurrent Multiplier",
                    "The mechanism creating the medullary osmotic gradient."
                ],

                [
                    "Vasa Recta",
                    "Capillaries that help preserve the medullary gradient."
                ],

                [
                    "Collecting Duct",
                    "A tubular pathway in which ADH strongly controls water permeability."
                ],

                [
                    "Aquaporin",
                    "A water-channel protein."
                ],

                [
                    "Renal Threshold",
                    "The plasma level above which tubular transport becomes unable to reclaim all of a filtered substance."
                ],

                [
                    "Glucosuria",
                    "Glucose present in urine."
                ]

            ],

            [

                {
                    label: "PCT",

                    title:
                        "Bulk Reabsorption",

                    paragraphs: [

                        "The proximal convoluted tubule reabsorbs most of the filtered water and sodium.",

                        "It also normally reabsorbs nearly all filtered glucose and amino acids.",

                        "Basolateral sodium-potassium pumps create sodium gradients that power several secondary active-transport systems.",

                        "Water follows solute osmotically, returning large quantities of filtered fluid to peritubular capillaries."

                    ]

                },


                {
                    label: "NEPHRON LOOP",

                    title:
                        "Creating the Medullary Gradient",

                    paragraphs: [

                        "The descending limb is highly permeable to water. As the tubular fluid moves deeper into the increasingly concentrated medulla, water leaves the tubule.",

                        "The thick ascending limb actively reabsorbs sodium, potassium and chloride but is relatively impermeable to water.",

                        "This makes the tubular fluid more dilute as it moves upward.",

                        "Opposing flow directions and different permeabilities create a countercurrent multiplier that establishes the corticomedullary osmotic gradient."

                    ]

                },


                {
                    label: "COLLECTING DUCT",

                    title:
                        "ADH Determines Final Water Excretion",

                    paragraphs: [

                        "When ADH is low, collecting ducts are relatively impermeable to water and dilute urine is produced.",

                        "When ADH rises, aquaporin channels are inserted into collecting-duct cell membranes.",

                        "Water then moves from tubular fluid into the hyperosmotic medullary interstitium and returns to blood.",

                        "The same nephron can therefore produce very dilute or concentrated urine depending on ADH and the medullary gradient."

                    ]

                },


                {
                    label: "TRANSPORT MAXIMUM",

                    title:
                        "Why Glucose Can Appear in Urine",

                    paragraphs: [

                        "Glucose is freely filtered by the glomerulus and normally reabsorbed in the proximal tubule.",

                        "Glucose transporters have a finite transport capacity.",

                        "If filtered glucose exceeds this capacity, some glucose remains in tubular fluid and appears in urine.",

                        "The retained glucose holds water in the tubule osmotically and can increase urine volume."

                    ]

                }

            ],

            {
                title:
                    "Hyperglycemia & Polyuria",

                scenario:
                    "Very high plasma glucose increases the amount of glucose filtered into the nephron until proximal transporters become saturated.",

                connection:
                    "Unreabsorbed glucose produces glucosuria and osmotic diuresis, increasing urinary water loss."

            },

            [

                "Reabsorption moves substances toward blood. Secretion moves substances into tubular fluid.",

                "The thick ascending limb reabsorbs salt but not water.",

                "ADH uses the medullary gradient; it does not create the entire gradient by itself."

            ],

            [

                "PCT performs bulk reabsorption.",

                "Descending limb loses water.",

                "Ascending limb reabsorbs salt.",

                "Countercurrent multiplication creates the medullary gradient.",

                "Vasa recta helps preserve the gradient.",

                "ADH inserts aquaporins.",

                "High ADH concentrates urine.",

                "Transport saturation can cause glucosuria."

            ]

        ),


        // ====================================================
        // TOPIC 31
        // ====================================================

        createTopic(

            "raas-fluid-electrolytes",

            31,

            7,

            "RAAS, ADH, Fluid & Electrolyte Balance",

            "Integrate renin, angiotensin II, aldosterone, ADH, ANP, thirst, sodium, potassium and extracellular-fluid regulation.",

            [

                "Trace the RAAS pathway.",

                "Explain angiotensin II.",

                "Explain aldosterone.",

                "Explain ADH and thirst.",

                "Explain sodium and potassium balance."

            ],

            [

                [
                    "Renin",
                    "A kidney enzyme that initiates the renin-angiotensin-aldosterone system."
                ],

                [
                    "Angiotensinogen",
                    "A liver-produced plasma protein acted on by renin."
                ],

                [
                    "Angiotensin I",
                    "The peptide formed when renin cleaves angiotensinogen."
                ],

                [
                    "ACE",
                    "An enzyme that converts angiotensin I into angiotensin II."
                ],

                [
                    "Angiotensin II",
                    "A powerful RAAS mediator that promotes vasoconstriction and volume-retaining responses."
                ],

                [
                    "Aldosterone",
                    "A hormone that increases sodium reabsorption and potassium secretion."
                ],

                [
                    "ADH",
                    "A hormone that increases renal water reabsorption."
                ],

                [
                    "ANP",
                    "An atrial hormone that promotes sodium and water loss."
                ],

                [
                    "Osmolality",
                    "The concentration of osmotically active particles."
                ],

                [
                    "Sodium",
                    "The major extracellular cation."
                ],

                [
                    "Potassium",
                    "The major intracellular cation."
                ]

            ],

            [

                {
                    label: "RAAS",

                    title:
                        "Low Perfusion → Renin → Angiotensin II",

                    paragraphs: [

                        "Renin secretion rises when renal perfusion falls, when the macula densa detects reduced sodium chloride delivery or when sympathetic beta-1 stimulation increases.",

                        "Renin cleaves liver-derived angiotensinogen into angiotensin I.",

                        "ACE converts angiotensin I into angiotensin II.",

                        "Angiotensin II constricts blood vessels and stimulates aldosterone, ADH and thirst.",

                        "Together these responses support arterial pressure and extracellular-fluid volume."

                    ],

                    flow: [

                        [
                            "Low Renal Perfusion",
                            "Renin is released."
                        ],

                        [
                            "Angiotensinogen",
                            "Renin produces angiotensin I."
                        ],

                        [
                            "ACE",
                            "Angiotensin II forms."
                        ],

                        [
                            "Angiotensin II",
                            "Vasoconstriction + hormones."
                        ],

                        [
                            "Volume & Pressure",
                            "Rise toward normal."
                        ]

                    ]

                },


                {
                    label: "ALDOSTERONE",

                    title:
                        "Sodium Retention & Potassium Secretion",

                    paragraphs: [

                        "Aldosterone acts in the distal nephron and promotes sodium reabsorption.",

                        "Water tends to follow retained sodium, so aldosterone can support extracellular-fluid volume.",

                        "Aldosterone simultaneously increases potassium secretion.",

                        "This links regulation of blood volume with potassium homeostasis."

                    ]

                },


                {
                    label: "ADH",

                    title:
                        "Water Balance & Osmolality",

                    paragraphs: [

                        "Hypothalamic osmoreceptors detect changes in extracellular-fluid osmolality.",

                        "When osmolality rises, ADH release increases and thirst is stimulated.",

                        "ADH increases collecting-duct water permeability. Drinking adds water to the body.",

                        "Both mechanisms decrease the concentration of extracellular solutes toward normal.",

                        "Large decreases in circulating volume can also strongly stimulate ADH even if osmolality is not high."

                    ]

                },


                {
                    label: "SODIUM & POTASSIUM",

                    title:
                        "Two Major Electrolytes with Different Locations",

                    paragraphs: [

                        "Sodium is the major extracellular cation and is a major determinant of extracellular-fluid osmolality.",

                        "Potassium is the major intracellular cation.",

                        "Only a small proportion of total body potassium is outside cells, but that extracellular concentration strongly influences membrane potential.",

                        "Significant potassium abnormalities can therefore disrupt nerve, skeletal muscle and cardiac electrical activity."

                    ]

                }

            ],

            {
                title:
                    "Hyperkalemia",

                scenario:
                    "A substantial increase in extracellular potassium changes the potassium gradient across cardiac-cell membranes.",

                connection:
                    "Because resting membrane potential depends heavily on potassium, severe hyperkalemia can interfere with normal cardiac conduction and rhythm."

            },

            [

                "Serum sodium concentration is not a direct measurement of total-body sodium.",

                "ADH primarily regulates water. Aldosterone primarily alters sodium and potassium transport.",

                "RAAS is stimulated by inadequate effective perfusion rather than simply low serum sodium."

            ],

            [

                "Renin begins RAAS.",

                "ACE produces angiotensin II.",

                "Angiotensin II causes vasoconstriction.",

                "Aldosterone retains sodium.",

                "Aldosterone promotes potassium secretion.",

                "ADH conserves water.",

                "Sodium is the major extracellular cation.",

                "Potassium strongly affects membrane potential."

            ]

        ),


        // ====================================================
        // TOPIC 32
        // ====================================================

        createTopic(

            "acid-base",

            32,

            7,

            "Acid-Base Balance & Compensation",

            "Master the bicarbonate buffer system, respiratory and metabolic acid-base disorders and the coordinated roles of lungs and kidneys.",

            [

                "Explain bicarbonate buffering.",

                "Differentiate respiratory and metabolic disorders.",

                "Predict compensatory responses.",

                "Explain renal acid excretion.",

                "Distinguish acidosis from acidemia."

            ],

            [

                [
                    "Buffer",
                    "A chemical system that resists large changes in pH."
                ],

                [
                    "Bicarbonate Buffer",
                    "A major extracellular buffer involving carbon dioxide and bicarbonate."
                ],

                [
                    "Respiratory Acidosis",
                    "A process in which primary CO2 retention lowers pH."
                ],

                [
                    "Respiratory Alkalosis",
                    "A process in which primary CO2 loss raises pH."
                ],

                [
                    "Metabolic Acidosis",
                    "A process involving reduced bicarbonate or increased nonvolatile acid."
                ],

                [
                    "Metabolic Alkalosis",
                    "A process involving increased bicarbonate or loss of nonvolatile acid."
                ],

                [
                    "Compensation",
                    "A physiological response that moves pH toward normal without removing the original problem."
                ],

                [
                    "Hydrogen-Ion Secretion",
                    "Renal movement of hydrogen ions into tubular fluid."
                ],

                [
                    "Bicarbonate Reabsorption",
                    "Renal recovery of filtered bicarbonate."
                ],

                [
                    "Ammonium",
                    "An important form in which the kidney excretes acid."
                ],

                [
                    "Acidemia",
                    "A measured arterial pH below the normal range."
                ],

                [
                    "Alkalemia",
                    "A measured arterial pH above the normal range."
                ]

            ],

            [

                {
                    label: "BUFFER SYSTEM",

                    title:
                        "CO₂ + H₂O ↔ H₂CO₃ ↔ H⁺ + HCO₃⁻",

                    paragraphs: [

                        "The bicarbonate buffer system directly links respiratory physiology with kidney physiology.",

                        "Carbon dioxide combines with water to form carbonic acid. Carbonic acid can dissociate into hydrogen ions and bicarbonate.",

                        "The lungs regulate the carbon-dioxide component rapidly by changing ventilation.",

                        "The kidneys regulate bicarbonate and hydrogen ions more slowly but provide powerful long-term control.",

                        "Buffers act quickly, but permanent removal of acid ultimately requires respiratory or renal excretion."

                    ]

                },


                {
                    label: "RESPIRATORY",

                    title:
                        "Primary CO₂ Disorders",

                    paragraphs: [

                        "Hypoventilation causes carbon dioxide retention. Increasing CO2 shifts the buffer reaction toward more hydrogen ions and decreases pH. This is respiratory acidosis.",

                        "Hyperventilation removes carbon dioxide faster than metabolism generates it. CO2 falls, hydrogen-ion concentration decreases and pH rises. This is respiratory alkalosis.",

                        "The kidneys compensate for respiratory disorders by altering hydrogen-ion excretion and bicarbonate handling over hours to days."

                    ]

                },


                {
                    label: "METABOLIC",

                    title:
                        "Primary Bicarbonate or Fixed-Acid Disorders",

                    paragraphs: [

                        "Metabolic acidosis occurs when bicarbonate is lost, acid excretion fails or excess nonvolatile acid accumulates.",

                        "The respiratory system compensates by increasing ventilation and reducing carbon dioxide.",

                        "Metabolic alkalosis occurs when acid is lost or bicarbonate is gained or retained.",

                        "Respiratory compensation tends to reduce ventilation and retain CO2, although ventilation cannot fall without limit because oxygen requirements remain."

                    ],

                    table: {

                        headers: [
                            "Primary Disorder",
                            "Primary Change",
                            "Compensation"
                        ],

                        rows: [

                            [
                                "Respiratory acidosis",
                                "CO₂ ↑",
                                "HCO₃⁻ retention ↑"
                            ],

                            [
                                "Respiratory alkalosis",
                                "CO₂ ↓",
                                "HCO₃⁻ excretion ↑"
                            ],

                            [
                                "Metabolic acidosis",
                                "HCO₃⁻ ↓",
                                "Ventilation ↑"
                            ],

                            [
                                "Metabolic alkalosis",
                                "HCO₃⁻ ↑",
                                "Ventilation ↓"
                            ]

                        ]

                    }

                },


                {
                    label: "RENAL CONTROL",

                    title:
                        "How the Kidneys Remove Acid",

                    paragraphs: [

                        "The kidneys reabsorb filtered bicarbonate so that this valuable buffer is not lost in urine.",

                        "Tubular cells also secrete hydrogen ions.",

                        "Because free urinary hydrogen-ion concentration cannot increase indefinitely, secreted H+ is buffered by phosphate and ammonia systems.",

                        "Ammonium excretion is particularly important during chronic acid loads because it allows large quantities of acid to be removed while adding new bicarbonate to blood."

                    ]

                }

            ],

            {
                title:
                    "Severe Diarrhea",

                scenario:
                    "Large gastrointestinal bicarbonate losses can cause metabolic acidosis.",

                connection:
                    "The respiratory compensation is increased ventilation, which lowers carbon dioxide and helps move pH toward normal."

            },

            [

                "Acidosis and acidemia are related but not identical terms.",

                "Compensation does not remove the original disease process.",

                "Respiratory disorders are defined by primary CO2 changes; metabolic disorders involve bicarbonate or nonvolatile acid."

            ],

            [

                "Bicarbonate buffer connects lungs and kidneys.",

                "More CO2 tends to lower pH.",

                "Less CO2 tends to raise pH.",

                "Hypoventilation causes respiratory acidosis.",

                "Hyperventilation causes respiratory alkalosis.",

                "Metabolic acidosis stimulates ventilation.",

                "Kidneys reabsorb bicarbonate.",

                "Kidneys excrete hydrogen ions."

            ]

        ),


        // ====================================================
        // TOPIC 33
        // ====================================================

        createTopic(

            "male-reproduction",

            33,

            8,

            "Male Reproductive System & Spermatogenesis",

            "Learn testicular anatomy, seminiferous tubules, Sertoli and Leydig cells, spermatogenesis, reproductive ducts, accessory glands and hormonal control.",

            [

                "Trace the sperm pathway.",

                "Distinguish Sertoli and Leydig cells.",

                "Explain spermatogenesis.",

                "Explain FSH and LH.",

                "Describe accessory-gland functions."

            ],

            [

                [
                    "Testis",
                    "The male gonad producing sperm and testosterone."
                ],

                [
                    "Seminiferous Tubule",
                    "The testicular tubule where sperm production occurs."
                ],

                [
                    "Sertoli Cell",
                    "A support cell that assists developing germ cells."
                ],

                [
                    "Leydig Cell",
                    "An interstitial testicular cell that produces testosterone."
                ],

                [
                    "Spermatogenesis",
                    "The process of producing mature sperm."
                ],

                [
                    "Epididymis",
                    "A duct where sperm mature and are stored."
                ],

                [
                    "Ductus Deferens",
                    "A muscular duct transporting sperm from the epididymis."
                ],

                [
                    "Seminal Vesicle",
                    "An accessory gland contributing nutrient-rich alkaline fluid to semen."
                ],

                [
                    "Prostate",
                    "An accessory gland contributing secretions to semen."
                ],

                [
                    "Testosterone",
                    "The major androgen produced primarily by Leydig cells."
                ],

                [
                    "FSH",
                    "A pituitary hormone acting mainly on Sertoli cells."
                ],

                [
                    "LH",
                    "A pituitary hormone stimulating Leydig cells."
                ],

                [
                    "Inhibin",
                    "A Sertoli-cell hormone providing negative feedback on FSH."
                ]

            ],

            [

                {
                    label: "ANATOMY",

                    title:
                        "Trace the Sperm Pathway",

                    paragraphs: [

                        "Sperm production begins inside seminiferous tubules of the testes.",

                        "Developing sperm eventually enter a network of ducts and reach the epididymis, where they mature and are stored.",

                        "During ejaculation, sperm travel through the ductus deferens and ejaculatory duct before entering the urethra.",

                        "Accessory glands add most of the fluid that forms semen."

                    ],

                    flow: [

                        [
                            "Seminiferous Tubules",
                            "Sperm production."
                        ],

                        [
                            "Epididymis",
                            "Maturation and storage."
                        ],

                        [
                            "Ductus Deferens",
                            "Transport."
                        ],

                        [
                            "Ejaculatory Duct",
                            "Accessory secretions combine."
                        ],

                        [
                            "Urethra",
                            "Semen exits."
                        ]

                    ]

                },


                {
                    label: "SPERMATOGENESIS",

                    title:
                        "Mitosis → Meiosis → Differentiation",

                    paragraphs: [

                        "Spermatogonia divide by mitosis. Some descendants remain stem cells while others enter the pathway toward sperm formation.",

                        "Primary spermatocytes undergo meiosis I, producing secondary spermatocytes.",

                        "Secondary spermatocytes undergo meiosis II and produce haploid spermatids.",

                        "Spermiogenesis changes spermatids into streamlined spermatozoa with a head, midpiece and flagellum."

                    ]

                },


                {
                    label: "HORMONES",

                    title:
                        "GnRH → FSH/LH → Testes",

                    paragraphs: [

                        "GnRH from the hypothalamus stimulates the anterior pituitary to release FSH and LH.",

                        "LH stimulates Leydig cells to produce testosterone.",

                        "FSH acts mainly on Sertoli cells and supports spermatogenesis.",

                        "Testosterone provides negative feedback to the hypothalamus and pituitary.",

                        "Sertoli cells release inhibin, which provides negative feedback mainly on FSH."

                    ],

                    table: {

                        headers: [
                            "Hormone",
                            "Target",
                            "Effect"
                        ],

                        rows: [

                            [
                                "LH",
                                "Leydig cells",
                                "Testosterone"
                            ],

                            [
                                "FSH",
                                "Sertoli cells",
                                "Support spermatogenesis"
                            ],

                            [
                                "Inhibin",
                                "Pituitary",
                                "Decreases FSH"
                            ]

                        ]

                    }

                },


                {
                    label: "ACCESSORY GLANDS",

                    title:
                        "Semen Is More Than Sperm",

                    paragraphs: [

                        "Seminal vesicles produce a large proportion of semen volume and provide nutrients such as fructose.",

                        "The prostate contributes fluid containing enzymes and other compounds.",

                        "Bulbourethral glands release a mucus-like secretion into the urethra.",

                        "These glandular secretions support sperm transport and function."

                    ]

                }

            ],

            {
                title:
                    "Low LH",

                scenario:
                    "If LH secretion becomes very low, Leydig-cell stimulation decreases.",

                connection:
                    "Testosterone concentration can fall, which can impair spermatogenesis even if FSH remains present."

            },

            [

                "Sertoli cells support sperm; Leydig cells produce testosterone.",

                "FSH and LH do not act on the same primary testicular cell.",

                "Most semen volume comes from accessory gland secretions."

            ],

            [

                "Seminiferous tubules produce sperm.",

                "Epididymis supports maturation.",

                "Ductus deferens transports sperm.",

                "Sertoli cells support spermatogenesis.",

                "Leydig cells produce testosterone.",

                "LH stimulates Leydig cells.",

                "FSH stimulates Sertoli cells.",

                "Meiosis produces haploid gametes."

            ]

        ),


        // ====================================================
        // TOPIC 34
        // ====================================================

        createTopic(

            "female-reproduction",

            34,

            8,

            "Female Reproductive Anatomy & Ovarian Cycle",

            "Learn ovarian and uterine anatomy, follicle development, ovulation, corpus luteum physiology and hypothalamic-pituitary-ovarian regulation.",

            [

                "Trace the oocyte pathway.",

                "Explain follicular development.",

                "Explain FSH and LH.",

                "Explain the LH surge.",

                "Describe corpus luteum function."

            ],

            [

                [
                    "Ovary",
                    "The female gonad producing oocytes and reproductive hormones."
                ],

                [
                    "Ovarian Follicle",
                    "An ovarian structure containing a developing oocyte."
                ],

                [
                    "Ovulation",
                    "Release of a secondary oocyte from an ovarian follicle."
                ],

                [
                    "Corpus Luteum",
                    "The post-ovulation ovarian structure that secretes progesterone and estrogen."
                ],

                [
                    "Uterine Tube",
                    "The tube that receives the ovulated oocyte and is the usual site of fertilization."
                ],

                [
                    "Uterus",
                    "A muscular organ supporting implantation and fetal development."
                ],

                [
                    "Endometrium",
                    "The inner uterine lining."
                ],

                [
                    "Myometrium",
                    "The smooth-muscle layer of the uterus."
                ],

                [
                    "Follicular Phase",
                    "The ovarian phase before ovulation."
                ],

                [
                    "Luteal Phase",
                    "The ovarian phase after ovulation."
                ],

                [
                    "LH Surge",
                    "A rapid increase in LH that triggers ovulation."
                ],

                [
                    "Progesterone",
                    "A hormone that strongly supports the secretory endometrium."
                ]

            ],

            [

                {
                    label: "ANATOMY",

                    title:
                        "Ovary → Uterine Tube → Uterus",

                    paragraphs: [

                        "The ovaries contain follicles at different stages of development.",

                        "During ovulation, a secondary oocyte is released from the ovary into the pelvic cavity.",

                        "Fimbriae near the end of the uterine tube help sweep the oocyte into the tube.",

                        "Fertilization normally occurs in the uterine tube rather than the uterus.",

                        "The developing embryo later travels toward the uterine cavity for implantation."

                    ]

                },


                {
                    label: "FOLLICULAR PHASE",

                    title:
                        "FSH & Rising Estrogen",

                    paragraphs: [

                        "At the beginning of a new ovarian cycle, FSH supports development of ovarian follicles.",

                        "Developing follicles produce increasing quantities of estrogen.",

                        "For much of the follicular phase, estrogen contributes to negative feedback on the hypothalamus and pituitary.",

                        "One dominant follicle usually continues developing toward ovulation."

                    ]

                },


                {
                    label: "OVULATION",

                    title:
                        "High Estrogen Creates the LH Surge",

                    paragraphs: [

                        "Near midcycle, sustained high estrogen produces an unusual positive-feedback effect.",

                        "Hypothalamic and pituitary activity increases, causing a dramatic LH surge.",

                        "The LH surge triggers ovulation and transformation of the ruptured follicle into the corpus luteum.",

                        "This positive-feedback period is temporary and represents an important exception to the usual negative-feedback behavior of endocrine systems."

                    ]

                },


                {
                    label: "LUTEAL PHASE",

                    title:
                        "The Corpus Luteum & Progesterone",

                    paragraphs: [

                        "After ovulation, the corpus luteum secretes progesterone and estrogen.",

                        "Progesterone prepares and stabilizes the endometrium for possible implantation.",

                        "Progesterone and estrogen provide strong negative feedback, reducing FSH and LH secretion.",

                        "If pregnancy does not occur, the corpus luteum degenerates and ovarian hormone concentrations fall."

                    ]

                }

            ],

            {
                title:
                    "Anovulation",

                scenario:
                    "If the LH surge does not occur, the dominant follicle may fail to ovulate.",

                connection:
                    "Without normal ovulation, a functional corpus luteum may not form and the expected postovulatory progesterone increase may be absent."

            },

            [

                "Fertilization usually occurs in the uterine tube, not the uterus.",

                "The LH surge is produced by temporary positive feedback from sustained high estrogen.",

                "Progesterone is especially important after ovulation."

            ],

            [

                "FSH supports follicle development.",

                "Developing follicles make estrogen.",

                "High estrogen triggers positive feedback.",

                "LH surge causes ovulation.",

                "Corpus luteum forms after ovulation.",

                "Corpus luteum produces progesterone.",

                "Progesterone supports the endometrium.",

                "Falling hormones occur if pregnancy does not happen."

            ]

        ),


        // ====================================================
        // TOPIC 35
        // ====================================================

        createTopic(

            "uterine-cycle",

            35,

            8,

            "Uterine Cycle & Reproductive Hormone Integration",

            "Connect menstruation, proliferative and secretory phases with estrogen, progesterone, FSH, LH and ovarian events.",

            [

                "Describe the menstrual phase.",

                "Explain the proliferative phase.",

                "Explain the secretory phase.",

                "Connect ovarian and uterine cycles.",

                "Explain hormonal changes when pregnancy does not occur."

            ],

            [

                [
                    "Menstruation",
                    "Shedding of the functional endometrial layer."
                ],

                [
                    "Proliferative Phase",
                    "An estrogen-dominant uterine phase in which the endometrium rebuilds."
                ],

                [
                    "Secretory Phase",
                    "A progesterone-dominant uterine phase preparing the endometrium for implantation."
                ],

                [
                    "Functional Layer",
                    "The endometrial layer that thickens and is shed during menstruation."
                ],

                [
                    "Basal Layer",
                    "The deeper endometrial layer that remains and regenerates the functional layer."
                ],

                [
                    "Estrogen",
                    "A steroid hormone promoting endometrial proliferation."
                ],

                [
                    "Progesterone",
                    "A steroid hormone supporting secretory endometrial development."
                ],

                [
                    "Spiral Artery",
                    "An artery supplying the functional endometrium."
                ],

                [
                    "Corpus Luteum Regression",
                    "Loss of luteal hormone secretion when pregnancy does not occur."
                ]

            ],

            [

                {
                    label: "MENSTRUATION",

                    title:
                        "Hormone Withdrawal Causes Shedding",

                    paragraphs: [

                        "If implantation does not occur, the corpus luteum degenerates.",

                        "Progesterone and estrogen concentrations fall.",

                        "Loss of ovarian hormone support causes changes in spiral arteries and breakdown of the functional endometrial layer.",

                        "The functional layer is shed as menstrual flow.",

                        "The deeper basal layer remains and provides the source for rebuilding the endometrium."

                    ]

                },


                {
                    label: "PROLIFERATIVE PHASE",

                    title:
                        "Estrogen Rebuilds the Endometrium",

                    paragraphs: [

                        "As ovarian follicles develop, estrogen concentrations rise.",

                        "Estrogen stimulates endometrial cells to proliferate and rebuild the functional layer.",

                        "This uterine proliferative phase occurs during the ovarian follicular phase.",

                        "Endometrial glands are relatively straight during this rebuilding stage."

                    ]

                },


                {
                    label: "SECRETORY PHASE",

                    title:
                        "Progesterone Prepares for Implantation",

                    paragraphs: [

                        "After ovulation, progesterone from the corpus luteum becomes dominant.",

                        "Progesterone causes endometrial glands to become secretory and increases conditions favorable for implantation.",

                        "This uterine secretory phase corresponds to the ovarian luteal phase.",

                        "If implantation occurs, hormonal signals preserve progesterone production. If not, the corpus luteum regresses."

                    ],

                    table: {

                        headers: [
                            "Ovarian Phase",
                            "Major Hormone",
                            "Uterine Phase"
                        ],

                        rows: [

                            [
                                "Early follicular",
                                "Hormones low",
                                "Menstrual"
                            ],

                            [
                                "Follicular",
                                "Estrogen",
                                "Proliferative"
                            ],

                            [
                                "Luteal",
                                "Progesterone",
                                "Secretory"
                            ]

                        ]

                    }

                }

            ],

            {
                title:
                    "Cycle Integration",

                scenario:
                    "A patient ovulates normally but the corpus luteum fails early.",

                connection:
                    "Progesterone support of the secretory endometrium would fall prematurely, potentially affecting endometrial maintenance."

            },

            [

                "Menstruation occurs because ovarian hormones fall, not because FSH directly sheds the endometrium.",

                "The proliferative phase is mainly estrogen driven.",

                "The secretory phase is mainly progesterone driven."

            ],

            [

                "Falling estrogen/progesterone triggers menstruation.",

                "Basal endometrium remains.",

                "Estrogen drives proliferation.",

                "Progesterone drives secretory changes.",

                "Follicular phase aligns with proliferative phase.",

                "Luteal phase aligns with secretory phase.",

                "Corpus luteum regression causes hormone withdrawal."

            ]

        ),


        // ====================================================
        // TOPIC 36
        // ====================================================

        createTopic(

            "pregnancy-genetics",

            36,

            8,

            "Fertilization, Pregnancy, Development, Lactation & Genetics",

            "Integrate fertilization, implantation, hCG, placental physiology, embryonic and fetal development, labor, lactation, meiosis and basic inheritance.",

            [

                "Trace fertilization through implantation.",

                "Explain hCG and corpus luteum maintenance.",

                "Describe placenta functions.",

                "Distinguish embryonic and fetal development.",

                "Explain prolactin and oxytocin.",

                "Review meiosis and basic inheritance."

            ],

            [

                [
                    "Fertilization",
                    "Fusion of sperm and oocyte, usually occurring in the uterine tube."
                ],

                [
                    "Zygote",
                    "The single diploid cell formed at fertilization."
                ],

                [
                    "Morula",
                    "A solid ball of cells produced during early cleavage."
                ],

                [
                    "Blastocyst",
                    "An early developmental stage that normally implants in the uterus."
                ],

                [
                    "Implantation",
                    "Attachment and invasion of the blastocyst into the endometrium."
                ],

                [
                    "Trophoblast",
                    "The outer blastocyst layer that contributes to placental structures."
                ],

                [
                    "hCG",
                    "A hormone that maintains the corpus luteum early in pregnancy."
                ],

                [
                    "Placenta",
                    "A temporary organ supporting maternal-fetal exchange and endocrine signaling."
                ],

                [
                    "Embryonic Period",
                    "The early period when major organ systems are established."
                ],

                [
                    "Fetal Period",
                    "The later period dominated by growth and maturation."
                ],

                [
                    "Parturition",
                    "The process of childbirth."
                ],

                [
                    "Prolactin",
                    "A hormone that promotes milk production."
                ],

                [
                    "Oxytocin",
                    "A hormone that promotes milk ejection and uterine contraction."
                ],

                [
                    "Meiosis",
                    "Cell division producing haploid gametes."
                ],

                [
                    "Genotype",
                    "The genetic makeup of an individual."
                ],

                [
                    "Phenotype",
                    "Observable characteristics produced by genotype and environment."
                ]

            ],

            [

                {
                    label: "FERTILIZATION",

                    title:
                        "From Gametes to Blastocyst",

                    paragraphs: [

                        "Fertilization usually occurs in the uterine tube when a sperm cell fuses with a secondary oocyte.",

                        "The genetic material combines and restores the diploid chromosome number, producing a zygote.",

                        "The zygote undergoes repeated mitotic divisions called cleavage while traveling toward the uterus.",

                        "A solid morula forms first, followed by a fluid-filled blastocyst.",

                        "The blastocyst contains an inner cell mass that contributes to the embryo and a trophoblast that contributes to extraembryonic structures."

                    ],

                    flow: [

                        [
                            "Fertilization",
                            "Zygote forms."
                        ],

                        [
                            "Cleavage",
                            "Rapid mitotic divisions."
                        ],

                        [
                            "Morula",
                            "Solid ball of cells."
                        ],

                        [
                            "Blastocyst",
                            "Inner cell mass + trophoblast."
                        ],

                        [
                            "Implantation",
                            "Blastocyst enters endometrium."
                        ]

                    ]

                },


                {
                    label: "IMPLANTATION & hCG",

                    title:
                        "Maintaining Early Pregnancy",

                    paragraphs: [

                        "After reaching the uterus, the blastocyst attaches to and begins entering the endometrium.",

                        "Trophoblast-derived tissue produces human chorionic gonadotropin.",

                        "hCG maintains the corpus luteum so that progesterone secretion remains high.",

                        "Progesterone maintains the endometrium and prevents menstruation during early pregnancy.",

                        "As the placenta develops, it eventually becomes an important source of progesterone and estrogen."

                    ]

                },


                {
                    label: "PLACENTA",

                    title:
                        "Exchange & Endocrine Organ",

                    paragraphs: [

                        "The placenta allows maternal and fetal circulations to exchange gases, nutrients and wastes across a specialized barrier.",

                        "Maternal and fetal blood normally remain in separate vascular spaces rather than freely mixing.",

                        "Oxygen and nutrients move toward fetal blood, while carbon dioxide and many wastes move toward maternal blood.",

                        "The placenta is also an endocrine organ and produces hormones necessary for maintaining pregnancy."

                    ]

                },


                {
                    label: "DEVELOPMENT",

                    title:
                        "Embryonic vs. Fetal Period",

                    paragraphs: [

                        "The embryonic period is dominated by establishment of the basic body plan and formation of major organ systems.",

                        "Because fundamental structures are developing, this period is especially sensitive to disruption.",

                        "The fetal period begins later and is characterized mainly by growth, differentiation and functional maturation of already-established structures.",

                        "Development requires coordinated cell division, migration, differentiation and programmed cell death."

                    ]

                },


                {
                    label: "LABOR & LACTATION",

                    title:
                        "Oxytocin and Prolactin",

                    paragraphs: [

                        "During labor, cervical stretch promotes oxytocin release. Oxytocin strengthens uterine contraction, which increases cervical stretch.",

                        "This is a positive-feedback loop that ends when delivery removes the stimulus.",

                        "After birth, prolactin stimulates milk production.",

                        "Infant suckling stimulates oxytocin release, causing contraction of myoepithelial cells and milk ejection.",

                        "The distinction is important: prolactin produces milk; oxytocin ejects milk."

                    ]

                },


                {
                    label: "GENETICS",

                    title:
                        "Meiosis, Genotype & Phenotype",

                    paragraphs: [

                        "Meiosis reduces chromosome number from diploid to haploid so that fertilization can restore the normal diploid number.",

                        "Genetic variation is increased by crossing over and independent assortment.",

                        "An allele is an alternative form of a gene.",

                        "Genotype describes an individual's genetic makeup, while phenotype describes observable characteristics.",

                        "Some traits follow simple dominant-recessive inheritance, but many human characteristics are influenced by multiple genes and environmental factors."

                    ]

                }

            ],

            {
                title:
                    "Pregnancy Testing",

                scenario:
                    "After implantation, trophoblast-derived hCG rises and can eventually be detected in blood or urine.",

                connection:
                    "hCG preserves corpus-luteum progesterone production during early pregnancy until placental hormone production becomes established."

            },

            [

                "Fertilization normally occurs in the uterine tube; implantation occurs in the uterus.",

                "Prolactin produces milk while oxytocin causes milk ejection.",

                "Not all human traits follow simple Mendelian dominant-recessive inheritance."

            ],

            [

                "Fertilization creates a diploid zygote.",

                "Cleavage produces morula and blastocyst stages.",

                "Blastocyst implants into endometrium.",

                "hCG maintains the corpus luteum.",

                "Placenta performs exchange and endocrine functions.",

                "Embryonic period establishes organ systems.",

                "Fetal period emphasizes growth and maturation.",

                "Prolactin produces milk.",

                "Oxytocin supports labor and milk ejection.",

                "Meiosis produces haploid gametes."

            ]

        )

    ];


    // ========================================================
    // COURSE INFORMATION
    // ========================================================

    const TOPIC_COUNT =
        AP2_TOPICS.length;


    const TOPIC_MAP =
        {};


    AP2_TOPICS.forEach(
        function (topic) {

            TOPIC_MAP[
                topic.id
            ] = topic;

        }
    );


    // ========================================================
    // STORAGE HELPERS
    // ========================================================

    function storageFor(topicId) {

        const base =
            `nshAP2_${topicId}`;

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


    function getNumber(key) {

        return Number(
            localStorage.getItem(key)
        ) || 0;

    }


    function getBoolean(key) {

        return (
            localStorage.getItem(key) ===
            "true"
        );

    }


    function getArray(key) {

        const raw =
            localStorage.getItem(key);


        if (!raw) {

            return [];

        }


        try {

            const parsed =
                JSON.parse(raw);

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


    function shuffle(array) {

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


    function scrollTop() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    // ========================================================
    // ADD FULL-COURSE STYLES
    // ========================================================

    function createAP2Styles() {

        if (
            document.getElementById(
                "ap2-full-course-styles"
            )
        ) {

            return;

        }


        const style =
            document.createElement("style");


        style.id =
            "ap2-full-course-styles";


        style.textContent = `

            /* ===============================================
               A&P II COURSE ACCENT
            =============================================== */

            .ap2-course-page
            .course-page-title {
                background:
                    linear-gradient(
                        135deg,
                        #effaff,
                        #ffffff
                    );

                border-color:
                    #d7edf7;
            }


            .ap2-course-page
            .course-page-icon {
                background:
                    linear-gradient(
                        135deg,
                        #dff7ff,
                        #e0f2fe
                    );
            }


            body.dark-mode
            .ap2-course-page
            .course-page-title {
                background:
                    linear-gradient(
                        135deg,
                        #10212c,
                        #111827
                    );

                border-color:
                    #1e3a4a;
            }


            body.dark-mode
            .ap2-course-page
            .course-page-icon {
                background:
                    #123147;
            }



            /* ===============================================
               OBJECTIVES
            =============================================== */

            .ap2-objectives {
                margin-top: 22px;

                padding: 22px;

                border-radius: 18px;

                background:
                    linear-gradient(
                        135deg,
                        #f5f7ff,
                        #f8fcff
                    );

                border:
                    1px solid #e3e8f6;
            }


            .ap2-objectives h3 {
                margin-bottom: 12px;

                font-size: 16px;
            }


            .ap2-objectives ul {
                padding-left: 20px;
            }


            .ap2-objectives li {
                margin-bottom: 9px;

                color: #475467;

                font-size: 14px;

                line-height: 1.55;
            }



            /* ===============================================
               PROSE
            =============================================== */

            .ap2-prose {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }


            .ap2-prose p {
                color: #475467;

                line-height: 1.75;

                font-size: 15px;
            }


            .ap2-prose strong {
                color: #172033;
            }



            /* ===============================================
               TABLE
            =============================================== */

            .ap2-table-wrap {
                width: 100%;

                overflow-x: auto;

                margin-top: 24px;

                border:
                    1px solid #e7eaf0;

                border-radius: 16px;
            }


            .ap2-table {
                width: 100%;

                border-collapse: collapse;

                min-width: 520px;
            }


            .ap2-table th,
            .ap2-table td {
                padding: 13px 15px;

                border-bottom:
                    1px solid #e7eaf0;

                text-align: left;

                vertical-align: top;

                font-size: 13px;

                line-height: 1.5;
            }


            .ap2-table th {
                background: #f8fafc;

                color: #344054;

                font-weight: 800;
            }


            .ap2-table td {
                color: #667085;
            }


            .ap2-table tr:last-child td {
                border-bottom: none;
            }



            /* ===============================================
               EXAM TRAPS
            =============================================== */

            .ap2-exam-traps {
                display: flex;

                flex-direction: column;

                gap: 11px;
            }


            .ap2-exam-trap {
                padding: 16px 18px;

                border-radius: 14px;

                background: #fff8ed;

                border: 1px solid #fed7aa;

                color: #9a3412;

                line-height: 1.55;

                font-size: 13px;
            }


            .ap2-exam-trap strong {
                color: #7c2d12;
            }



            /* ===============================================
               DARK MODE
            =============================================== */

            body.dark-mode
            .ap2-objectives {
                background: #151e2e;

                border-color: #263043;
            }


            body.dark-mode
            .ap2-objectives li,
            body.dark-mode
            .ap2-prose p {
                color: #cbd5e1;
            }


            body.dark-mode
            .ap2-prose strong {
                color: #f1f5f9;
            }


            body.dark-mode
            .ap2-table-wrap {
                border-color: #263043;
            }


            body.dark-mode
            .ap2-table th {
                background: #172033;

                color: #e2e8f0;
            }


            body.dark-mode
            .ap2-table td {
                color: #aab4c5;
            }


            body.dark-mode
            .ap2-table th,
            body.dark-mode
            .ap2-table td {
                border-bottom-color: #263043;
            }


            body.dark-mode
            .ap2-exam-trap {
                background: #352111;

                border-color: #7c3d12;

                color: #fed7aa;
            }


            body.dark-mode
            .ap2-exam-trap strong {
                color: #fdba74;
            }

        `;


        document.head.appendChild(
            style
        );

    }


    createAP2Styles();


    // ========================================================
    // CREATE COURSE + LESSON PAGES
    // ========================================================

    const anatomy2Page =
        document.createElement("section");


    anatomy2Page.id =
        "anatomy2-page";

    anatomy2Page.className =
        "course-page ap2-course-page hidden";


    footer.before(
        anatomy2Page
    );


    const anatomy2LessonPage =
        document.createElement("section");


    anatomy2LessonPage.id =
        "ap2-full-lesson-page";

    anatomy2LessonPage.className =
        "lesson-page hidden";


    footer.before(
        anatomy2LessonPage
    );


    // ========================================================
    // RENDER COURSE PAGE
    // ========================================================

    function renderCoursePage() {

        const modulesHTML =
            MODULES.map(
                function (module) {

                    const topics =
                        AP2_TOPICS.filter(
                            function (topic) {

                                return (
                                    topic.module ===
                                    module.number
                                );

                            }
                        );


                    return `

                        <div class="module-section">

                            <div class="module-heading">

                                <span class="module-number">
                                    ${
                                        String(
                                            module.number
                                        )
                                        .padStart(
                                            2,
                                            "0"
                                        )
                                    }
                                </span>


                                <div>

                                    <p class="section-label">
                                        MODULE ${module.number}
                                    </p>

                                    <h2>
                                        ${module.title}
                                    </h2>

                                </div>

                            </div>


                            <div class="topic-list">

                                ${
                                    topics.map(
                                        function (topic) {

                                            return `

                                                <article
                                                    class="topic-card ap2-topic-card"
                                                    data-ap2-topic="${topic.id}"
                                                >

                                                    <div class="topic-status">
                                                        ${topic.number}
                                                    </div>


                                                    <div class="topic-information">

                                                        <h3>
                                                            ${topic.title}
                                                        </h3>

                                                        <p>
                                                            ${topic.description}
                                                        </p>


                                                        <div class="topic-tags">

                                                            ${
                                                                topic.tags.map(
                                                                    function (tag) {

                                                                        return `
                                                                            <span>
                                                                                ${tag}
                                                                            </span>
                                                                        `;

                                                                    }
                                                                ).join("")
                                                            }

                                                        </div>

                                                    </div>


                                                    <button class="topic-button">
                                                        Start →
                                                    </button>

                                                </article>

                                            `;

                                        }
                                    ).join("")
                                }

                            </div>

                        </div>

                    `;

                }
            )
            .join("");


        anatomy2Page.innerHTML = `

            <div class="course-page-header">

                <button
                    id="ap2-back-dashboard"
                    class="back-button"
                >
                    ← Dashboard
                </button>


                <div class="course-page-title">

                    <div class="course-page-icon">
                        ❤️
                    </div>


                    <div>

                        <p class="section-label">
                            FULL COURSE
                        </p>


                        <h1>
                            Anatomy & Physiology II
                        </h1>


                        <p>
                            A complete ${
                                TOPIC_COUNT
                            }-topic A&P II curriculum
                            covering endocrine physiology,
                            blood, cardiovascular,
                            immunity, respiration,
                            digestion, metabolism,
                            kidney function,
                            fluid balance,
                            reproduction and development.
                        </p>

                    </div>

                </div>

            </div>



            <div class="course-main-progress">

                <div>

                    <p>
                        Course Mastery
                    </p>

                    <h2>

                        <span id="ap2-course-progress">
                            0
                        </span>%

                    </h2>

                </div>


                <div class="course-progress-large">

                    <div
                        id="ap2-course-progress-bar"
                        class="course-progress-large-fill"
                    >
                    </div>

                </div>

            </div>


            ${modulesHTML}


            <div class="final-practice-card">

                <div>

                    <p class="section-label">
                        COMPREHENSIVE REVIEW
                    </p>


                    <h2>
                        A&P II Mastery Center
                    </h2>


                    <p>
                        Practice questions from the
                        entire course, target missed
                        concepts or take the
                        50-question comprehensive exam.
                    </p>

                </div>


                <div class="final-practice-actions">

                    <button id="ap2-weak-button">
                        🎯 Weak Areas
                    </button>

                    <button id="ap2-practice-button">
                        Practice Questions
                    </button>

                    <button id="ap2-exam-button">
                        Start Mastery Exam
                    </button>

                </div>

            </div>

        `;


        document
            .getElementById(
                "ap2-back-dashboard"
            )
            .addEventListener(
                "click",
                showDashboard
            );


        document
            .querySelectorAll(
                ".ap2-topic-card"
            )
            .forEach(
                function (card) {

                    card.addEventListener(
                        "click",
                        function () {

                            showTopic(
                                card.dataset.ap2Topic
                            );

                        }
                    );


                    const button =
                        card.querySelector(
                            ".topic-button"
                        );


                    button.addEventListener(
                        "click",
                        function (event) {

                            event.stopPropagation();


                            showTopic(
                                card.dataset.ap2Topic
                            );

                        }
                    );

                }
            );


        document
            .getElementById(
                "ap2-practice-button"
            )
            .addEventListener(
                "click",
                startMixedPractice
            );


        document
            .getElementById(
                "ap2-exam-button"
            )
            .addEventListener(
                "click",
                startFinalExam
            );


        document
            .getElementById(
                "ap2-weak-button"
            )
            .addEventListener(
                "click",
                startWeakPractice
            );

    }


    renderCoursePage();


    // ========================================================
    // NAVIGATION
    // ========================================================

    function hideMainViews() {

        if (dashboardIntro) {
            dashboardIntro.classList.add("hidden");
        }


        if (progressOverview) {
            progressOverview.classList.add("hidden");
        }


        if (coursesSection) {
            coursesSection.classList.add("hidden");
        }


        if (weakAreasSection) {
            weakAreasSection.classList.add("hidden");
        }


        if (anatomy1Page) {
            anatomy1Page.classList.add("hidden");
        }


        anatomy2Page.classList.add(
            "hidden"
        );


        document
            .querySelectorAll(
                ".lesson-page"
            )
            .forEach(
                function (page) {

                    page.classList.add(
                        "hidden"
                    );

                }
            );


        if (footer) {
            footer.classList.add("hidden");
        }


        closeModal();

    }


    function showAP2Course() {

        hideMainViews();


        anatomy2Page.classList.remove(
            "hidden"
        );


        updateProgress();

        scrollTop();

    }


    function showDashboard() {

        anatomy2Page.classList.add(
            "hidden"
        );


        anatomy2LessonPage.classList.add(
            "hidden"
        );


        if (anatomy1Page) {
            anatomy1Page.classList.add("hidden");
        }


        if (dashboardIntro) {
            dashboardIntro.classList.remove("hidden");
        }


        if (progressOverview) {
            progressOverview.classList.remove("hidden");
        }


        if (coursesSection) {
            coursesSection.classList.remove("hidden");
        }


        if (weakAreasSection) {
            weakAreasSection.classList.remove("hidden");
        }


        if (footer) {
            footer.classList.remove("hidden");
        }


        closeModal();

        updateProgress();

        updateCombinedDashboard();

        scrollTop();

    }


    // ========================================================
    // INTERCEPT A&P II CARD
    // This prevents the old "coming next" message.
    // ========================================================

    document.addEventListener(
        "click",
        function (event) {

            const card =
                event.target.closest(
                    '.course-card[data-course="anatomy2"]'
                );


            if (!card) {

                return;

            }


            event.preventDefault();

            event.stopPropagation();

            event.stopImmediatePropagation();


            showAP2Course();

        },
        true
    );


    // ========================================================
    // LESSON HTML HELPERS
    // ========================================================

    function renderParagraphs(
        paragraphs
    ) {

        return `

            <div class="ap2-prose">

                ${
                    paragraphs.map(
                        function (paragraph) {

                            return `
                                <p>
                                    ${paragraph}
                                </p>
                            `;

                        }
                    ).join("")
                }

            </div>

        `;

    }


    function renderFacts(
        facts
    ) {

        return `

            <div class="definition-grid">

                ${
                    facts.map(
                        function (fact) {

                            return `

                                <div class="definition-card">

                                    <h3>
                                        ${fact[0]}
                                    </h3>

                                    <p>
                                        ${fact[1]}
                                    </p>

                                </div>

                            `;

                        }
                    ).join("")
                }

            </div>

        `;

    }


    function renderChecklist(
        items
    ) {

        return `

            <div class="summary-checklist">

                ${
                    items.map(
                        function (item) {

                            return `

                                <div>
                                    ✓ ${item}
                                </div>

                            `;

                        }
                    ).join("")
                }

            </div>

        `;

    }


    function renderTable(
        table
    ) {

        if (!table) {

            return "";

        }


        return `

            <div class="ap2-table-wrap">

                <table class="ap2-table">

                    <thead>

                        <tr>

                            ${
                                table.headers.map(
                                    function (header) {

                                        return `
                                            <th>
                                                ${header}
                                            </th>
                                        `;

                                    }
                                ).join("")
                            }

                        </tr>

                    </thead>


                    <tbody>

                        ${
                            table.rows.map(
                                function (row) {

                                    return `

                                        <tr>

                                            ${
                                                row.map(
                                                    function (cell) {

                                                        return `
                                                            <td>
                                                                ${cell}
                                                            </td>
                                                        `;

                                                    }
                                                ).join("")
                                            }

                                        </tr>

                                    `;

                                }
                            ).join("")
                        }

                    </tbody>

                </table>

            </div>

        `;

    }


    function renderFlow(
        flow
    ) {

        if (!flow) {

            return "";

        }


        return `

            <div class="organization-flow">

                ${
                    flow.map(
                        function (
                            item,
                            index
                        ) {

                            return `

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
                                    index <
                                    flow.length - 1
                                        ? `
                                            <div class="organization-arrow">
                                                ↓
                                            </div>
                                        `
                                        : ""
                                }

                            `;

                        }
                    ).join("")
                }

            </div>

        `;

    }


    function renderClinical(
        clinical
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
                            ${clinical.title}
                        </h3>

                    </div>

                </div>


                <p>
                    ${clinical.scenario}
                </p>


                <div class="clinical-question">

                    <strong>
                        Why does this happen?
                    </strong>


                    <p class="clinical-answer">
                        ${clinical.connection}
                    </p>

                </div>

            </div>

        `;

    }


    // ========================================================
    // CURRENT LESSON
    // ========================================================

    let currentTopic =
        null;


    let lessonObserver =
        null;


    // ========================================================
    // OPEN TOPIC
    // ========================================================

    function showTopic(
        topicId
    ) {

        const topic =
            TOPIC_MAP[
                topicId
            ];


        if (!topic) {

            return;

        }


        currentTopic =
            topic;


        hideMainViews();


        renderLesson(
            topic
        );


        anatomy2LessonPage.classList.remove(
            "hidden"
        );


        updateLessonProgress(
            topic
        );


        observeLesson(
            topic
        );


        scrollTop();

    }


    // ========================================================
    // RENDER FULL LESSON
    // ========================================================

    function renderLesson(
        topic
    ) {

        const sectionsHTML =
            topic.sections.map(
                function (
                    section,
                    index
                ) {

                    return `

                        <section
                            id="ap2-detail-${topic.id}-${index}"
                            class="lesson-section"
                        >

                            <div class="lesson-section-number">

                                ${
                                    String(
                                        index + 3
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


                                ${
                                    renderParagraphs(
                                        section.paragraphs
                                    )
                                }


                                ${
                                    renderFlow(
                                        section.flow
                                    )
                                }


                                ${
                                    renderTable(
                                        section.table
                                    )
                                }

                            </div>

                        </section>

                    `;

                }
            )
            .join("");


        const navigationHTML =
            topic.sections.map(
                function (
                    section,
                    index
                ) {

                    return `

                        <a
                            href="#ap2-detail-${topic.id}-${index}"
                        >
                            ${section.label}
                        </a>

                    `;

                }
            )
            .join("");


        anatomy2LessonPage.innerHTML = `

            <div class="lesson-top-bar">

                <button
                    id="ap2-back-course"
                    class="back-button"
                >
                    ← A&P II
                </button>


                <div class="lesson-progress-text">

                    <span>
                        Topic ${topic.number}
                        of ${TOPIC_COUNT}
                    </span>

                    <span>
                        ${topic.title}
                    </span>

                </div>

            </div>



            <div class="lesson-hero">

                <div class="lesson-hero-content">

                    <p class="section-label">
                        ANATOMY & PHYSIOLOGY II
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
                            🎯 Learning Objectives
                        </span>

                        <span>
                            🧠 ${
                                topic.facts.length
                            } Review Concepts
                        </span>

                        <span>
                            🩺 Clinical Application
                        </span>

                        <span>
                            ⚠️ Exam Traps
                        </span>

                        <span>
                            ✅ Mastery Quiz
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

                <a href="#ap2-overview">
                    Overview
                </a>

                <a href="#ap2-concepts">
                    Core Concepts
                </a>

                ${navigationHTML}

                <a href="#ap2-clinical">
                    Clinical
                </a>

                <a href="#ap2-exam-traps">
                    Exam Traps
                </a>

                <a href="#ap2-summary">
                    Summary
                </a>

            </nav>



            <div class="lesson-layout">


                <article class="lesson-content">


                    <!-- OVERVIEW -->

                    <section
                        id="ap2-overview"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            01
                        </div>


                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                LESSON OVERVIEW
                            </p>


                            <h2>
                                What You Will Learn
                            </h2>


                            ${renderParagraphs([
                                topic.description,
                                "This lesson is designed to teach the physiology before asking you to memorize details. Focus on cause-and-effect relationships, then use the terminology to describe those relationships precisely."
                            ])}


                            <div class="ap2-objectives">

                                <h3>
                                    🎯 Learning Objectives
                                </h3>


                                <ul>

                                    ${
                                        topic.objectives.map(
                                            function (objective) {

                                                return `
                                                    <li>
                                                        ${objective}
                                                    </li>
                                                `;

                                            }
                                        ).join("")
                                    }

                                </ul>

                            </div>

                        </div>

                    </section>



                    <!-- CORE TERMS -->

                    <section
                        id="ap2-concepts"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            02
                        </div>


                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                CORE CONCEPTS
                            </p>


                            <h2>
                                Essential Terminology
                            </h2>


                            ${renderParagraphs([
                                "These concepts form the vocabulary for the lesson. Do not memorize the terms in isolation. Connect each definition to the mechanisms explained in the sections below."
                            ])}


                            ${renderFacts(topic.facts)}

                        </div>

                    </section>



                    ${sectionsHTML}



                    <!-- CLINICAL -->

                    <section
                        id="ap2-clinical"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    topic.sections.length +
                                    3
                                )
                                .padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>


                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                CLINICAL / NURSING CONNECTION
                            </p>


                            <h2>
                                Apply the Physiology
                            </h2>


                            ${
                                renderClinical(
                                    topic.clinical
                                )
                            }

                        </div>

                    </section>



                    <!-- EXAM TRAPS -->

                    <section
                        id="ap2-exam-traps"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    topic.sections.length +
                                    4
                                )
                                .padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>


                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                COMMON EXAM TRAPS
                            </p>


                            <h2>
                                Don't Mix These Up
                            </h2>


                            <div class="ap2-exam-traps">

                                ${
                                    topic.traps.map(
                                        function (trap) {

                                            return `

                                                <div class="ap2-exam-trap">

                                                    <strong>
                                                        ⚠️ Watch out:
                                                    </strong>

                                                    ${trap}

                                                </div>

                                            `;

                                        }
                                    ).join("")
                                }

                            </div>

                        </div>

                    </section>



                    <!-- SUMMARY -->

                    <section
                        id="ap2-summary"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    topic.sections.length +
                                    5
                                )
                                .padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>


                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                EXAM REVIEW
                            </p>


                            <h2>
                                High-Yield Summary
                            </h2>


                            ${
                                renderChecklist(
                                    topic.summary
                                )
                            }


                            <div class="mastery-reminder">

                                <span>
                                    🎯
                                </span>


                                <div>

                                    <strong>
                                        Mastery Requirement
                                    </strong>


                                    <p>
                                        Complete Quick Review
                                        and earn at least
                                        ${PASS_SCORE}% on
                                        the randomized quiz.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>



                    <!-- ACTIONS -->

                    <section class="lesson-actions">

                        <div>

                            <p class="section-label">
                                RETRIEVAL PRACTICE
                            </p>


                            <h2>
                                Master ${topic.title}
                            </h2>


                            <p>
                                Use Quick Review first,
                                then take the randomized
                                topic mastery quiz.
                            </p>

                        </div>


                        <div class="lesson-action-buttons">

                            <button
                                id="ap2-review-button"
                                class="secondary-lesson-button"
                            >
                                🧠 Quick Review
                            </button>


                            <button
                                id="ap2-topic-quiz-button"
                                class="primary-lesson-button"
                            >
                                🎯 Start Mastery Quiz
                            </button>

                        </div>

                    </section>

                </article>



                <!-- SIDEBAR -->

                <aside class="lesson-sidebar">


                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            TOPIC PROGRESS
                        </p>


                        <div class="sidebar-progress-number">

                            <span id="ap2-topic-progress">
                                0
                            </span>%

                        </div>


                        <div class="sidebar-progress-bar">

                            <div
                                id="ap2-topic-progress-fill"
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
                            id="ap2-topic-checklist"
                            class="sidebar-checklist"
                        >

                            <div>
                                <span>○</span>
                                Read full lesson
                            </div>

                            <div>
                                <span>○</span>
                                Complete Quick Review
                            </div>

                            <div>
                                <span>○</span>
                                Pass mastery quiz
                            </div>

                            <div>
                                <span>○</span>
                                Reach ${PASS_SCORE}% mastery
                            </div>

                        </div>

                    </div>



                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            BEST QUIZ SCORE
                        </p>


                        <div class="sidebar-progress-number">

                            <span id="ap2-best-score">
                                0
                            </span>%

                        </div>

                    </div>



                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            THIS LESSON
                        </p>


                        <p>
                            ${topic.objectives.length}
                            learning objectives
                        </p>

                        <p>
                            ${topic.facts.length}
                            core concepts
                        </p>

                        <p>
                            ${topic.sections.length}
                            detailed teaching sections
                        </p>

                    </div>



                    <div class="sidebar-card sidebar-tip">

                        <span>
                            💡
                        </span>


                        <div>

                            <strong>
                                How to Study
                            </strong>


                            <p>
                                Read the explanation once.
                                Then close it mentally and
                                explain the mechanism from
                                memory before using
                                Quick Review.
                            </p>

                        </div>

                    </div>

                </aside>


            </div>

        `;


        document
            .getElementById(
                "ap2-back-course"
            )
            .addEventListener(
                "click",
                showAP2Course
            );


        document
            .getElementById(
                "ap2-review-button"
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
                "ap2-topic-quiz-button"
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

    function observeLesson(
        topic
    ) {

        if (lessonObserver) {

            lessonObserver.disconnect();

        }


        const summary =
            document.getElementById(
                "ap2-summary"
            );


        if (
            !summary ||
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
                        function (entry) {

                            if (
                                entry.isIntersecting &&
                                !anatomy2LessonPage
                                    .classList
                                    .contains(
                                        "hidden"
                                    )
                            ) {

                                const keys =
                                    storageFor(
                                        topic.id
                                    );


                                localStorage.setItem(
                                    keys.read,
                                    "true"
                                );


                                updateLessonProgress(
                                    topic
                                );


                                updateProgress();

                            }

                        }
                    );

                },

                {
                    threshold: 0.25
                }

            );


        lessonObserver.observe(
            summary
        );

    }


    // ========================================================
    // PROGRESS
    // ========================================================

    function calculateTopicProgress(
        topic
    ) {

        const keys =
            storageFor(
                topic.id
            );


        let progress =
            0;


        if (
            getBoolean(
                keys.read
            )
        ) {

            progress += 30;

        }


        if (
            getBoolean(
                keys.review
            )
        ) {

            progress += 30;

        }


        if (
            getBoolean(
                keys.passed
            )
        ) {

            progress += 40;

        }


        return progress;

    }


    function isMastered(
        topic
    ) {

        const keys =
            storageFor(
                topic.id
            );


        return (
            getNumber(
                keys.score
            ) >=
            PASS_SCORE
        );

    }


    function updateChecklistItem(
        items,
        index,
        complete
    ) {

        if (
            !items ||
            !items[index]
        ) {

            return;

        }


        const item =
            items[index];


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


    function updateLessonProgress(
        topic
    ) {

        const keys =
            storageFor(
                topic.id
            );


        const progress =
            calculateTopicProgress(
                topic
            );


        const progressText =
            document.getElementById(
                "ap2-topic-progress"
            );


        const progressFill =
            document.getElementById(
                "ap2-topic-progress-fill"
            );


        const best =
            document.getElementById(
                "ap2-best-score"
            );


        if (progressText) {

            progressText.textContent =
                progress;

        }


        if (progressFill) {

            progressFill.style.width =
                `${progress}%`;

        }


        if (best) {

            best.textContent =
                getNumber(
                    keys.score
                );

        }


        const checklist =
            document.querySelectorAll(
                "#ap2-topic-checklist > div"
            );


        updateChecklistItem(
            checklist,
            0,
            getBoolean(
                keys.read
            )
        );


        updateChecklistItem(
            checklist,
            1,
            getBoolean(
                keys.review
            )
        );


        updateChecklistItem(
            checklist,
            2,
            getBoolean(
                keys.passed
            )
        );


        updateChecklistItem(
            checklist,
            3,
            isMastered(
                topic
            )
        );

    }


    function countMastered() {

        return AP2_TOPICS.filter(
            function (topic) {

                return isMastered(
                    topic
                );

            }
        ).length;

    }


    function getCoursePercent() {

        return Math.round(
            (
                countMastered() /
                TOPIC_COUNT
            ) * 100
        );

    }


    function updateProgress() {

        const mastered =
            countMastered();


        const percent =
            getCoursePercent();


        const courseProgress =
            document.getElementById(
                "ap2-course-progress"
            );


        const courseProgressBar =
            document.getElementById(
                "ap2-course-progress-bar"
            );


        if (courseProgress) {

            courseProgress.textContent =
                percent;

        }


        if (courseProgressBar) {

            courseProgressBar.style.width =
                `${percent}%`;

        }


        document
            .querySelectorAll(
                ".ap2-topic-card"
            )
            .forEach(
                function (card) {

                    const topic =
                        TOPIC_MAP[
                            card.dataset.ap2Topic
                        ];


                    const status =
                        card.querySelector(
                            ".topic-status"
                        );


                    const button =
                        card.querySelector(
                            ".topic-button"
                        );


                    const masteredTopic =
                        isMastered(
                            topic
                        );


                    const topicProgress =
                        calculateTopicProgress(
                            topic
                        );


                    if (status) {

                        status.textContent =
                            masteredTopic
                                ? "✓"
                                : topic.number;

                    }


                    if (button) {

                        if (masteredTopic) {

                            button.textContent =
                                "Review →";

                        } else if (
                            topicProgress > 0
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


        if (anatomy2Card) {

            const spans =
                anatomy2Card.querySelectorAll(
                    ".course-progress span"
                );


            if (
                spans.length > 1
            ) {

                spans[1].textContent =
                    `${percent}%`;

            }

        }


        if (
            currentTopic &&
            !anatomy2LessonPage
                .classList
                .contains(
                    "hidden"
                )
        ) {

            updateLessonProgress(
                currentTopic
            );

        }


        if (questionsAnswered) {

            questionsAnswered.textContent =
                getNumber(
                    SHARED_QUESTIONS_KEY
                );

        }


        updateCombinedDashboard();

    }


    // ========================================================
    // COMBINED DASHBOARD
    // ========================================================

    function getAP1Percent() {

        if (!anatomy1Card) {

            return 0;

        }


        const spans =
            anatomy1Card.querySelectorAll(
                ".course-progress span"
            );


        if (
            spans.length < 2
        ) {

            return 0;

        }


        return Number(
            spans[1]
                .textContent
                .replace(
                    "%",
                    ""
                )
        ) || 0;

    }


    function countAP1Mastered() {

        if (!anatomy1Page) {

            return 0;

        }


        return Array
            .from(
                anatomy1Page
                    .querySelectorAll(
                        ".topic-status"
                    )
            )
            .filter(
                function (status) {

                    return (
                        status.textContent
                            .trim() ===
                        "✓"
                    );

                }
            )
            .length;

    }


    function updateCombinedDashboard() {

        const ap1Percent =
            getAP1Percent();


        const ap2Percent =
            getCoursePercent();


        const combinedPercent =
            Math.round(
                (
                    ap1Percent +
                    ap2Percent
                ) / 2
            );


        if (overallProgress) {

            overallProgress.textContent =
                combinedPercent;

        }


        if (overallProgressBar) {

            overallProgressBar.style.width =
                `${combinedPercent}%`;

        }


        if (topicsMastered) {

            topicsMastered.textContent =
                countAP1Mastered() +
                countMastered();

        }


        if (questionsAnswered) {

            questionsAnswered.textContent =
                getNumber(
                    SHARED_QUESTIONS_KEY
                );

        }

    }


    // ========================================================
    // MODAL
    // ========================================================

    const overlay =
        document.createElement("div");


    overlay.id =
        "ap2-full-study-overlay";

    overlay.className =
        "study-overlay hidden";


    overlay.innerHTML = `

        <div class="study-modal">

            <div class="study-modal-header">

                <div>

                    <p
                        id="ap2-modal-label"
                        class="study-modal-label"
                    >
                    </p>


                    <h2 id="ap2-modal-title">
                    </h2>

                </div>


                <button
                    id="ap2-modal-close"
                    class="study-modal-close"
                >
                    ×
                </button>

            </div>


            <div id="ap2-modal-content">
            </div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    const modalLabel =
        document.getElementById(
            "ap2-modal-label"
        );


    const modalTitle =
        document.getElementById(
            "ap2-modal-title"
        );


    const modalContent =
        document.getElementById(
            "ap2-modal-content"
        );


    document
        .getElementById(
            "ap2-modal-close"
        )
        .addEventListener(
            "click",
            closeModal
        );


    overlay.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                overlay
            ) {

                closeModal();

            }

        }
    );


    function openModal() {

        overlay.classList.remove(
            "hidden"
        );


        document.body.style.overflow =
            "hidden";

    }


    function closeModal() {

        overlay.classList.add(
            "hidden"
        );


        document.body.style.overflow =
            "";

    }


    // ========================================================
    // QUICK REVIEW
    // ========================================================

    let reviewTopic =
        null;

    let reviewOrder =
        [];

    let reviewIndex =
        0;

    let reviewRevealed =
        false;


    function startQuickReview(
        topic
    ) {

        reviewTopic =
            topic;


        reviewOrder =
            shuffle(
                topic.facts.map(
                    function (
                        fact,
                        index
                    ) {

                        return index;

                    }
                )
            );


        reviewIndex =
            0;


        reviewRevealed =
            false;


        modalLabel.textContent =
            `A&P II • TOPIC ${topic.number}`;


        modalTitle.textContent =
            "Quick Review";


        openModal();

        renderReview();

    }


    function renderReview() {

        const topic =
            reviewTopic;


        const factIndex =
            reviewOrder[
                reviewIndex
            ];


        const fact =
            topic.facts[
                factIndex
            ];


        const keys =
            storageFor(
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


        const percentage =
            Math.round(
                (
                    (reviewIndex + 1) /
                    reviewOrder.length
                ) * 100
            );


        modalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>
                        Card ${reviewIndex + 1}
                        of ${reviewOrder.length}
                    </span>

                    <span>
                        ${percentage}%
                    </span>

                </div>


                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percentage}%"
                    >
                    </div>

                </div>

            </div>


            <div class="review-body">

                <div class="review-card">

                    ${
                        reviewRevealed
                            ? `

                                <p class="review-type">
                                    ANSWER
                                </p>


                                <h3 class="review-question">
                                    ${fact[0]}
                                </h3>


                                <p class="review-answer">
                                    ${fact[1]}
                                </p>


                                <p class="review-hint">
                                    Explain the concept
                                    aloud before continuing.
                                </p>

                            `
                            : `

                                <p class="review-type">
                                    ACTIVE RECALL
                                </p>


                                <h3 class="review-question">
                                    Explain:
                                    "${fact[0]}"
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
                            id="ap2-review-prev"
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
                            id="ap2-review-mark"
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
                            reviewRevealed
                                ? `

                                    <button
                                        id="ap2-review-next"
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
                                        id="ap2-review-reveal"
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
                "ap2-review-prev"
            );


        const mark =
            document.getElementById(
                "ap2-review-mark"
            );


        const reveal =
            document.getElementById(
                "ap2-review-reveal"
            );


        const next =
            document.getElementById(
                "ap2-review-next"
            );


        if (previous) {

            previous.addEventListener(
                "click",
                function () {

                    if (
                        reviewIndex > 0
                    ) {

                        reviewIndex--;

                        reviewRevealed =
                            false;

                        renderReview();

                    }

                }
            );

        }


        if (mark) {

            mark.addEventListener(
                "click",
                function () {

                    const markedItems =
                        getArray(
                            keys.marked
                        );


                    const position =
                        markedItems.indexOf(
                            factIndex
                        );


                    if (
                        position >= 0
                    ) {

                        markedItems.splice(
                            position,
                            1
                        );

                    } else {

                        markedItems.push(
                            factIndex
                        );

                    }


                    saveArray(
                        keys.marked,
                        markedItems
                    );


                    renderReview();

                }
            );

        }


        if (reveal) {

            reveal.addEventListener(
                "click",
                function () {

                    reviewRevealed =
                        true;

                    renderReview();

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

                        reviewRevealed =
                            false;

                        renderReview();

                    } else {

                        completeReview(
                            topic
                        );

                    }

                }
            );

        }

    }


    function completeReview(
        topic
    ) {

        const keys =
            storageFor(
                topic.id
            );


        localStorage.setItem(
            keys.review,
            "true"
        );


        updateProgress();

        updateLessonProgress(
            topic
        );


        modalContent.innerHTML = `

            <div class="results">

                <div class="results-icon">
                    🧠
                </div>


                <p class="study-modal-label">
                    REVIEW COMPLETE
                </p>


                <h2>
                    ${topic.title}
                </h2>


                <p class="results-message">
                    You completed all
                    ${topic.facts.length}
                    active-recall cards.
                </p>


                <div class="result-grid">

                    <div class="result-card">

                        <strong>
                            ${topic.facts.length}
                        </strong>

                        <span>
                            Concepts Reviewed
                        </span>

                    </div>


                    <div class="result-card">

                        <strong>
                            ${
                                getArray(
                                    keys.marked
                                ).length
                            }
                        </strong>

                        <span>
                            Review Later
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


                <div
                    class="study-actions-group"
                    style="justify-content:center;"
                >

                    <button
                        id="ap2-review-again"
                        class="study-button"
                    >
                        Review Again
                    </button>


                    <button
                        id="ap2-review-finish"
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
                "ap2-review-again"
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
                "ap2-review-finish"
            )
            .addEventListener(
                "click",
                closeModal
            );

    }


    // ========================================================
    // QUIZ QUESTION GENERATOR
    // ========================================================

    function createQuestion(
        topic,
        factIndex
    ) {

        const correctFact =
            topic.facts[
                factIndex
            ];


        const distractors =
            shuffle(
                topic.facts
                    .map(
                        function (
                            fact,
                            index
                        ) {

                            return index;

                        }
                    )
                    .filter(
                        function (index) {

                            return (
                                index !==
                                factIndex
                            );

                        }
                    )
            )
            .slice(
                0,
                3
            );


        const definitionMode =
            Math.random() <
            0.5;


        let questionText;

        let rawOptions;


        if (definitionMode) {

            questionText =
                `Which statement best describes
                <strong>${correctFact[0]}</strong>?`;


            rawOptions = [

                {
                    text:
                        correctFact[1],

                    correct:
                        true
                },

                ...distractors.map(
                    function (index) {

                        return {

                            text:
                                topic.facts[
                                    index
                                ][1],

                            correct:
                                false

                        };

                    }
                )

            ];

        } else {

            questionText =
                `Which term matches this definition?
                <br><br>
                <strong>
                    ${correctFact[1]}
                </strong>`;


            rawOptions = [

                {
                    text:
                        correctFact[0],

                    correct:
                        true
                },

                ...distractors.map(
                    function (index) {

                        return {

                            text:
                                topic.facts[
                                    index
                                ][0],

                            correct:
                                false

                        };

                    }
                )

            ];

        }


        const options =
            shuffle(
                rawOptions
            );


        return {

            topicId:
                topic.id,

            topicNumber:
                topic.number,

            topicTitle:
                topic.title,

            factIndex:
                factIndex,

            question:
                questionText,

            options:
                options.map(
                    function (option) {

                        return option.text;

                    }
                ),

            correct:
                options.findIndex(
                    function (option) {

                        return option.correct;

                    }
                ),

            explanation:
                `<strong>${correctFact[0]}:</strong>
                ${correctFact[1]}`

        };

    }


    // ========================================================
    // QUIZ STATE
    // ========================================================

    let quizQuestions =
        [];

    let quizIndex =
        0;

    let quizCorrect =
        0;

    let quizSelected =
        null;

    let quizChecked =
        false;

    let quizMode =
        "topic";

    let quizTopic =
        null;


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


        const indexes =
            shuffle(
                topic.facts.map(
                    function (
                        fact,
                        index
                    ) {

                        return index;

                    }
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
                function (index) {

                    return createQuestion(
                        topic,
                        index
                    );

                }
            );


        beginQuiz(
            `A&P II • TOPIC ${topic.number}`,
            `${topic.title} Mastery Quiz`
        );

    }


    // ========================================================
    // ALL FACTS
    // ========================================================

    function allFacts() {

        const result =
            [];


        AP2_TOPICS.forEach(
            function (topic) {

                topic.facts.forEach(
                    function (
                        fact,
                        index
                    ) {

                        result.push({

                            topic:
                                topic,

                            factIndex:
                                index

                        });

                    }
                );

            }
        );


        return result;

    }


    // ========================================================
    // MIXED PRACTICE
    // ========================================================

    function startMixedPractice() {

        quizMode =
            "practice";


        quizTopic =
            null;


        quizQuestions =
            shuffle(
                allFacts()
            )
            .slice(
                0,
                PRACTICE_LENGTH
            )
            .map(
                function (item) {

                    return createQuestion(
                        item.topic,
                        item.factIndex
                    );

                }
            );


        beginQuiz(
            "A&P II • MIXED PRACTICE",
            "A&P II Practice Questions"
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


        const selected =
            [];


        AP2_TOPICS.forEach(
            function (topic) {

                selected.push({

                    topic:
                        topic,

                    factIndex:
                        Math.floor(
                            Math.random() *
                            topic.facts.length
                        )

                });

            }
        );


        const remaining =
            FINAL_EXAM_LENGTH -
            selected.length;


        const extras =
            shuffle(
                allFacts()
            )
            .slice(
                0,
                Math.max(
                    0,
                    remaining
                )
            );


        quizQuestions =
            shuffle(
                [
                    ...selected,
                    ...extras
                ]
            )
            .slice(
                0,
                FINAL_EXAM_LENGTH
            )
            .map(
                function (item) {

                    return createQuestion(
                        item.topic,
                        item.factIndex
                    );

                }
            );


        beginQuiz(
            "A&P II • COMPREHENSIVE EXAM",
            "A&P II Mastery Exam"
        );

    }


    // ========================================================
    // WEAK AREA PRACTICE
    // ========================================================

    function getWeakFacts() {

        const weak =
            [];


        AP2_TOPICS.forEach(
            function (topic) {

                const keys =
                    storageFor(
                        topic.id
                    );


                getArray(
                    keys.missed
                )
                .forEach(
                    function (factIndex) {

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
            getWeakFacts();


        if (
            weak.length === 0
        ) {

            modalLabel.textContent =
                "A&P II • SMART REVIEW";


            modalTitle.textContent =
                "Weak Areas";


            modalContent.innerHTML = `

                <div class="results">

                    <div class="results-icon">
                        🎯
                    </div>


                    <h2>
                        No A&P II weak areas yet
                    </h2>


                    <p class="results-message">
                        Concepts you answer
                        incorrectly will automatically
                        appear here for later practice.
                    </p>


                    <button
                        id="ap2-empty-weak"
                        class="
                            study-button
                            primary
                        "
                    >
                        Got It
                    </button>

                </div>

            `;


            openModal();


            document
                .getElementById(
                    "ap2-empty-weak"
                )
                .addEventListener(
                    "click",
                    closeModal
                );


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
                function (item) {

                    return createQuestion(
                        item.topic,
                        item.factIndex
                    );

                }
            );


        beginQuiz(
            "A&P II • SMART REVIEW",
            "Study My A&P II Weak Areas"
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


        modalLabel.textContent =
            label;


        modalTitle.textContent =
            title;


        openModal();

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


        const percentage =
            Math.round(
                (
                    (quizIndex + 1) /
                    quizQuestions.length
                ) * 100
            );


        const optionsHTML =
            question.options.map(
                function (
                    option,
                    index
                ) {

                    let className =
                        "quiz-option";


                    if (
                        quizSelected ===
                        index
                    ) {

                        className +=
                            " selected";

                    }


                    if (quizChecked) {

                        if (
                            index ===
                            question.correct
                        ) {

                            className +=
                                " correct";

                        } else if (
                            index ===
                            quizSelected
                        ) {

                            className +=
                                " incorrect";

                        }

                    }


                    return `

                        <button
                            class="${className}"
                            data-ap2-answer="${index}"
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
            ).join("");


        let feedback =
            "";


        if (quizChecked) {

            const correct =
                quizSelected ===
                question.correct;


            feedback = `

                <div
                    class="
                        quiz-feedback
                        ${
                            correct
                                ? "correct"
                                : "incorrect"
                        }
                    "
                >

                    <strong>

                        ${
                            correct
                                ? "✓ Correct"
                                : "✕ Not quite"
                        }

                    </strong>


                    <p>
                        ${question.explanation}
                    </p>

                </div>

            `;

        }


        modalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>
                        Question ${quizIndex + 1}
                        of ${quizQuestions.length}
                    </span>


                    <span>
                        ${percentage}%
                    </span>

                </div>


                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percentage}%"
                    >
                    </div>

                </div>

            </div>


            <div class="quiz-body">

                <div class="quiz-card">

                    <p class="quiz-type">
                        TOPIC ${question.topicNumber}
                        •
                        ${question.topicTitle}
                    </p>


                    <h3 class="quiz-question">
                        ${question.question}
                    </h3>


                    <div class="quiz-options">
                        ${optionsHTML}
                    </div>


                    ${feedback}

                </div>


                <div class="study-actions">

                    <div class="study-actions-group">

                        <button
                            id="ap2-quiz-exit"
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
                                        id="ap2-quiz-next"
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
                                        id="ap2-quiz-check"
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
                "[data-ap2-answer]"
            )
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            if (quizChecked) {

                                return;

                            }


                            quizSelected =
                                Number(
                                    button.dataset
                                        .ap2Answer
                                );


                            renderQuiz();

                        }
                    );

                }
            );


        const check =
            document.getElementById(
                "ap2-quiz-check"
            );


        const next =
            document.getElementById(
                "ap2-quiz-next"
            );


        const exit =
            document.getElementById(
                "ap2-quiz-exit"
            );


        if (check) {

            check.addEventListener(
                "click",
                checkAnswer
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
                closeModal
            );

        }

    }


    // ========================================================
    // CHECK ANSWER
    // ========================================================

    function checkAnswer() {

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

            removeWeak(
                question
            );

        } else {

            addWeak(
                question
            );

        }


        const total =
            getNumber(
                SHARED_QUESTIONS_KEY
            );


        localStorage.setItem(
            SHARED_QUESTIONS_KEY,
            total + 1
        );


        quizChecked =
            true;


        if (questionsAnswered) {

            questionsAnswered.textContent =
                total + 1;

        }


        renderQuiz();

    }


    // ========================================================
    // WEAK STORAGE
    // ========================================================

    function addWeak(
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
            storageFor(
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


    function removeWeak(
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
            storageFor(
                topic.id
            );


        const updated =
            getArray(
                keys.missed
            )
            .filter(
                function (index) {

                    return (
                        index !==
                        question.factIndex
                    );

                }
            );


        saveArray(
            keys.missed,
            updated
        );

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

            saveTopicResult(
                quizTopic,
                percentage
            );

        }


        updateProgress();


        showResults(
            percentage
        );

    }


    function saveTopicResult(
        topic,
        percentage
    ) {

        const keys =
            storageFor(
                topic.id
            );


        const previousBest =
            getNumber(
                keys.score
            );


        const best =
            Math.max(
                previousBest,
                percentage
            );


        localStorage.setItem(
            keys.score,
            best
        );


        localStorage.setItem(
            keys.attempts,
            getNumber(
                keys.attempts
            ) + 1
        );


        if (
            percentage >=
            PASS_SCORE
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

    function showResults(
        percentage
    ) {

        const incorrect =
            quizQuestions.length -
            quizCorrect;


        const passed =
            percentage >=
            PASS_SCORE;


        let title;

        let message;

        let icon;


        if (
            quizMode === "topic"
        ) {

            title =
                passed
                    ? `${quizTopic.title} Mastered!`
                    : "Review and Try Again";


            message =
                passed
                    ? `You reached the ${PASS_SCORE}% mastery requirement.`
                    : `You need at least ${PASS_SCORE}% to master this topic.`;


            icon =
                passed
                    ? "🏆"
                    : "📚";

        } else if (
            quizMode === "final"
        ) {

            title =
                "A&P II Comprehensive Exam Complete";


            message =
                `You completed ${quizQuestions.length}
                mixed questions from the full course.`;


            icon =
                "🏆";

        } else if (
            quizMode === "weak"
        ) {

            title =
                "Weak-Area Review Complete";


            message =
                "Concepts answered correctly were removed from your weak-area list.";


            icon =
                "🎯";

        } else {

            title =
                "A&P II Practice Complete";


            message =
                "Incorrect concepts were automatically saved for Smart Review.";


            icon =
                "🧠";

        }


        let thirdValue =
            getWeakFacts().length;


        let thirdLabel =
            "Weak Concepts";


        if (
            quizMode === "topic" &&
            quizTopic
        ) {

            thirdValue =
                `${getNumber(
                    storageFor(
                        quizTopic.id
                    ).score
                )}%`;


            thirdLabel =
                "Best Score";

        }


        modalContent.innerHTML = `

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
                            ${thirdValue}
                        </strong>

                        <span>
                            ${thirdLabel}
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
                                    id="ap2-result-retake"
                                    class="study-button"
                                >
                                    🔄 New Quiz
                                </button>


                                <button
                                    id="ap2-result-review"
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
                                    id="ap2-result-weak"
                                    class="study-button"
                                >
                                    🎯 Remaining Weak Areas
                                </button>

                            `
                            : ""
                    }


                    <button
                        id="ap2-result-finish"
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
                "ap2-result-retake"
            );


        const review =
            document.getElementById(
                "ap2-result-review"
            );


        const weak =
            document.getElementById(
                "ap2-result-weak"
            );


        const finish =
            document.getElementById(
                "ap2-result-finish"
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


        if (weak) {

            weak.addEventListener(
                "click",
                startWeakPractice
            );

        }


        if (finish) {

            finish.addEventListener(
                "click",
                closeModal
            );

        }

    }


    // ========================================================
    // A&P I PROGRESS WATCHER
    // ========================================================

    if (anatomy1Card) {

        const observer =
            new MutationObserver(
                function () {

                    updateCombinedDashboard();

                }
            );


        observer.observe(
            anatomy1Card,
            {

                subtree:
                    true,

                childList:
                    true,

                characterData:
                    true

            }
        );

    }


    // ========================================================
    // DASHBOARD RETURN WATCHER
    // ========================================================

    document.addEventListener(
        "click",
        function (event) {

            if (
                event.target.closest(
                    "#back-to-dashboard"
                )
            ) {

                setTimeout(
                    updateCombinedDashboard,
                    0
                );

            }

        },
        true
    );


    // ========================================================
    // ESCAPE KEY
    // ========================================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                !overlay.classList.contains(
                    "hidden"
                )
            ) {

                closeModal();

            }

        }
    );


    // ========================================================
    // INITIALIZE
    // ========================================================

    updateProgress();


    setTimeout(
        updateCombinedDashboard,
        0
    );

});