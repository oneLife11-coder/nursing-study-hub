// ============================================================================
// NURSING STUDY HUB
// NUTRITION & DIET — COMPLETE COURSE
// Nursing / Health Sciences Prerequisite Nutrition
// ============================================================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================================================
    // COURSE SETTINGS
    // ========================================================================

    const COURSE_TITLE = "Nutrition & Diet";
    const PASS_SCORE = 90;
    const TOPIC_QUIZ_LENGTH = 12;
    const MIXED_PRACTICE_LENGTH = 30;
    const FINAL_EXAM_LENGTH = 60;

    const SHARED_QUESTIONS_KEY =
        "nursingStudyHubQuestionsAnswered";


    // ========================================================================
    // MODULES
    // ========================================================================

    const MODULES = [

        {
            number: 1,
            title: "Nutrition Foundations, Digestion & Energy"
        },

        {
            number: 2,
            title: "Macronutrients"
        },

        {
            number: 3,
            title: "Water, Electrolytes, Minerals & Vitamins"
        },

        {
            number: 4,
            title: "Energy Balance, Body Composition & Assessment"
        },

        {
            number: 5,
            title: "Healthy Eating Patterns & Food Labels"
        },

        {
            number: 6,
            title: "Nutrition Across the Lifespan"
        },

        {
            number: 7,
            title: "Clinical Nutrition & Therapeutic Diets"
        },

        {
            number: 8,
            title: "Nutrition Support, Food Safety & Special Diets"
        }

    ];


    // ========================================================================
    // DATA HELPERS
    // ========================================================================

    function section(
        label,
        title,
        paragraphs,
        table = null
    ) {

        return {
            label,
            title,
            paragraphs,
            table
        };
    }


    function worked(
        title,
        problem,
        steps,
        answer
    ) {

        return {
            title,
            problem,
            steps,
            answer
        };
    }


    function practice(
        prompt,
        answer,
        steps
    ) {

        return {
            prompt,
            answer,
            steps
        };
    }


    function topic(config) {

        return {

            tags: [
                "Theory",
                "Clinical",
                "Quiz"
            ],

            formulas: [],
            worked: [],
            practice: [],
            questions: [],
            memory: [],
            traps: [],
            summary: [],

            ...config

        };
    }


    // ========================================================================
    // COMPLETE NUTRITION COURSE
    // ========================================================================

    const NUTRITION_TOPICS = [

        // ====================================================================
        // MODULE 1
        // ====================================================================

        topic({

            id: "nutrition-foundations",

            number: 1,

            module: 1,

            title:
                "Nutrition Foundations & Essential Nutrients",

            description:
                "Understand what nutrition studies, the six nutrient classes, nutrient density, essential nutrients and the difference between undernutrition, overnutrition and balanced intake.",

            objectives: [

                "Define nutrition and nutrient.",

                "Identify the six major nutrient classes.",

                "Differentiate energy-yielding and non-energy-yielding nutrients.",

                "Explain nutrient density and energy density.",

                "Define essential nutrients and malnutrition."

            ],

            facts: [

                [
                    "Nutrition",
                    "The science of how food and nutrients support growth, metabolism, health and disease prevention."
                ],

                [
                    "Nutrient",
                    "A chemical substance in food needed for body structure, regulation, energy or other physiological functions."
                ],

                [
                    "Carbohydrate",
                    "An energy-yielding nutrient that is an important fuel source, especially for the nervous system and working muscle."
                ],

                [
                    "Fat",
                    "A concentrated energy source that also supports cell membranes, insulation, signaling and absorption of fat-soluble vitamins."
                ],

                [
                    "Protein",
                    "A nutrient supplying amino acids for body structure, enzymes, transport, immunity and other functions."
                ],

                [
                    "Vitamin",
                    "An organic micronutrient needed in small amounts to regulate body processes."
                ],

                [
                    "Mineral",
                    "An inorganic element needed for structural or regulatory functions."
                ],

                [
                    "Water",
                    "An essential nutrient that acts as a solvent, transport medium, temperature regulator and participant in many reactions."
                ],

                [
                    "Essential nutrient",
                    "A nutrient the body cannot make in adequate amounts and therefore must obtain from the diet."
                ],

                [
                    "Malnutrition",
                    "A state of nutrient imbalance that can result from deficiency, excess or inappropriate proportions of nutrients."
                ]

            ],

            sections: [

                section(

                    "BIG PICTURE",

                    "Nutrition Is More Than Calories",

                    [

                        "Nutrition examines what nutrients enter the body, how they are digested and absorbed, how cells use them and how intake patterns influence health over time.",

                        "A person's nutrition status depends not only on the amount of food eaten but also on nutrient quality, absorption, metabolism, disease, medications, socioeconomic factors and access to appropriate foods.",

                        "In nursing and health sciences, nutrition connects directly with wound healing, immune function, diabetes management, cardiovascular disease, renal disease, growth, pregnancy and recovery from illness."

                    ]

                ),

                section(

                    "NUTRIENT CLASSES",

                    "Six Major Nutrient Classes",

                    [

                        "The six major classes are carbohydrate, fat, protein, vitamins, minerals and water.",

                        "Carbohydrate, fat and protein are called macronutrients because they are generally needed in larger amounts and can contribute energy. Vitamins and minerals are micronutrients because smaller amounts are required, although they remain essential for normal physiology.",

                        "Water does not provide calories, but it is indispensable for circulation, temperature control, chemical reactions, digestion and elimination."

                    ]

                ),

                section(

                    "QUALITY",

                    "Nutrient Density and Energy Density",

                    [

                        "Nutrient density compares the amount of beneficial nutrients in a food with the amount of energy it provides. Foods rich in vitamins, minerals, fiber or protein relative to calories are often described as nutrient dense.",

                        "Energy density describes calories per gram of food. Fat increases energy density because fat provides more calories per gram than carbohydrate or protein.",

                        "A balanced diet emphasizes nutrient adequacy, variety, moderation and appropriate energy intake rather than judging foods only by a single nutrient."

                    ]

                ),

                section(

                    "MALNUTRITION",

                    "Deficiency and Excess Can Both Harm Health",

                    [

                        "Undernutrition can involve inadequate calories, protein or micronutrients. It may result in loss of body mass, impaired immunity, delayed wound healing and reduced functional capacity.",

                        "Overnutrition can involve chronic excess energy or specific nutrients and may contribute to obesity and metabolic disease.",

                        "Malnutrition can exist at any body size. A person can have excess body fat and still be deficient in iron, vitamin B12, protein or other nutrients."

                    ]

                )

            ],

            clinical: {

                title:
                    "Nutrition Risk During Hospitalization",

                scenario:
                    "A hospitalized patient has poor appetite, recent unintentional weight loss and a draining pressure injury.",

                connection:
                    "The patient may be at nutrition risk because inadequate energy and protein intake can impair tissue repair, while illness can increase metabolic demands."

            },

            memory: [

                "Six nutrients: carbohydrate, fat, protein, vitamins, minerals and water.",

                "Macro = needed in larger amounts; micro = needed in smaller amounts.",

                "Malnutrition can mean too little, too much or an unhealthy balance."

            ],

            traps: [

                "Vitamins and minerals do not provide calories.",

                "A high-calorie diet is not automatically nutrient dense.",

                "Normal body weight does not rule out nutrient deficiency."

            ],

            summary: [

                "Nutrition links food intake to body function and health.",

                "The body requires six major nutrient classes.",

                "Carbohydrate, fat and protein can provide energy.",

                "Vitamins, minerals and water regulate essential processes.",

                "Essential nutrients must be supplied by the diet.",

                "Malnutrition includes both deficiency and excess."

            ],

            questions: [

                {

                    id:
                        "found1",

                    type:
                        "mcq",

                    q:
                        "Which nutrient class does not provide calories but is essential for transport, temperature regulation and chemical reactions?",

                    choices: [

                        "Water",

                        "Fat",

                        "Carbohydrate",

                        "Protein"

                    ],

                    answer: 0,

                    explanation:
                        "Water provides no calories but is essential for circulation, thermoregulation, solvent functions and metabolism."

                }

            ]

        }),


        topic({

            id:
                "energy-nutrients",

            number: 2,

            module: 1,

            title:
                "Calories, Macronutrient Energy & Alcohol",

            description:
                "Calculate calories supplied by carbohydrate, protein, fat and alcohol and interpret macronutrient contribution to total energy intake.",

            objectives: [

                "State the kcal per gram of carbohydrate, protein, fat and alcohol.",

                "Calculate calories from grams of macronutrients.",

                "Calculate total calories from a food or meal.",

                "Calculate the percentage of calories supplied by a macronutrient.",

                "Explain why fat is more energy dense than carbohydrate or protein."

            ],

            facts: [

                [
                    "Kilocalorie",
                    "A unit of food energy; in everyday nutrition language, one kilocalorie is commonly called one Calorie."
                ],

                [
                    "Carbohydrate energy",
                    "Carbohydrate provides approximately 4 kcal per gram."
                ],

                [
                    "Protein energy",
                    "Protein provides approximately 4 kcal per gram."
                ],

                [
                    "Fat energy",
                    "Fat provides approximately 9 kcal per gram."
                ],

                [
                    "Alcohol energy",
                    "Alcohol provides approximately 7 kcal per gram but is not an essential nutrient."
                ],

                [
                    "Energy density",
                    "The amount of energy provided per gram of food."
                ]

            ],

            formulas: [

                "Carbohydrate kcal = grams × 4",

                "Protein kcal = grams × 4",

                "Fat kcal = grams × 9",

                "Alcohol kcal = grams × 7",

                "% kcal from nutrient = nutrient kcal ÷ total kcal × 100"

            ],

            sections: [

                section(

                    "ENERGY",

                    "How Food Supplies Usable Energy",

                    [

                        "Cells capture chemical energy from energy-yielding nutrients and convert part of it into ATP, the immediate energy currency used for cellular work.",

                        "Carbohydrate and protein each provide about 4 kcal per gram, whereas fat provides about 9 kcal per gram. This makes fat more than twice as energy dense by weight.",

                        "Alcohol provides about 7 kcal per gram. It contributes energy but is not required for normal physiology."

                    ]

                ),

                section(

                    "CALCULATION",

                    "Turning Grams Into Calories",

                    [

                        "Nutrition calculations often begin with grams of carbohydrate, fat and protein. Multiply each amount by its energy factor and then add the results.",

                        "These calculations are used when interpreting food labels, meal plans, enteral nutrition formulas and dietary records.",

                        "When determining percentage of calories from one macronutrient, first calculate calories from that nutrient and then divide by total calories."

                    ]

                ),

                section(

                    "INTERPRETATION",

                    "Calories Describe Energy, Not Overall Quality",

                    [

                        "Two meals can provide the same number of calories while differing greatly in fiber, vitamins, minerals, protein quality and sodium content.",

                        "Energy intake must therefore be interpreted together with nutrient adequacy and clinical context.",

                        "For patients with poor intake, energy density can sometimes help provide more calories in smaller volumes, while other patients benefit from lower-energy-density foods that increase fullness."

                    ]

                )

            ],

            worked: [

                worked(

                    "Calories From Macronutrients",

                    "A meal contains 50 g carbohydrate, 20 g protein and 10 g fat. Calculate total calories.",

                    [

                        "Carbohydrate: 50 × 4 = 200 kcal.",

                        "Protein: 20 × 4 = 80 kcal.",

                        "Fat: 10 × 9 = 90 kcal.",

                        "Total = 200 + 80 + 90 = 370 kcal."

                    ],

                    "370 kcal"

                ),

                worked(

                    "Percent of Calories From Fat",

                    "A 500-kcal meal contains 20 g fat. What percentage of calories comes from fat?",

                    [

                        "Fat kcal = 20 × 9 = 180 kcal.",

                        "Percent = 180 ÷ 500 × 100.",

                        "Percent = 36%."

                    ],

                    "36% of calories from fat"

                )

            ],

            practice: [

                practice(

                    "A snack contains 30 g carbohydrate, 5 g protein and 8 g fat. Calculate total calories.",

                    "212 kcal.",

                    [

                        "Carbohydrate: 30 × 4 = 120 kcal.",

                        "Protein: 5 × 4 = 20 kcal.",

                        "Fat: 8 × 9 = 72 kcal.",

                        "Total = 120 + 20 + 72 = 212 kcal."

                    ]

                ),

                practice(

                    "A 600-kcal meal contains 25 g protein. What percentage of calories comes from protein?",

                    "About 16.7%.",

                    [

                        "Protein kcal = 25 × 4 = 100 kcal.",

                        "100 ÷ 600 × 100 = 16.7%."

                    ]

                )

            ],

            clinical: {

                title:
                    "Enteral Formula Review",

                scenario:
                    "A nurse reviews a tube-feeding formula and needs to understand how its carbohydrate, protein and fat content contributes to total energy.",

                connection:
                    "Converting grams to calories helps verify the energy contribution of each macronutrient and supports nutrition-support calculations."

            },

            memory: [

                "4-4-9: carbohydrate 4, protein 4, fat 9 kcal/g.",

                "Alcohol = 7 kcal/g.",

                "To get percent calories: calculate nutrient calories first, then divide by total calories."

            ],

            traps: [

                "Do not multiply fat grams by 4; fat uses 9 kcal/g.",

                "Percentage of calories is not the same as percentage by weight.",

                "Alcohol provides energy but is not an essential nutrient."

            ],

            summary: [

                "Carbohydrate provides 4 kcal/g.",

                "Protein provides 4 kcal/g.",

                "Fat provides 9 kcal/g.",

                "Alcohol provides 7 kcal/g.",

                "Macronutrient percentages are based on calories, not grams alone."

            ],

            questions: [

                {

                    id:
                        "energy1",

                    type:
                        "numeric",

                    q:
                        "How many calories are supplied by 15 g of fat?",

                    answer:
                        135,

                    tolerance:
                        0.01,

                    unit:
                        "kcal",

                    explanation:
                        "15 g × 9 kcal/g = 135 kcal."

                },

                {

                    id:
                        "energy2",

                    type:
                        "numeric",

                    q:
                        "A food contains 40 g carbohydrate, 10 g protein and 5 g fat. How many total calories does it provide?",

                    answer:
                        245,

                    tolerance:
                        0.01,

                    unit:
                        "kcal",

                    explanation:
                        "40 × 4 = 160, 10 × 4 = 40, 5 × 9 = 45. Total = 245 kcal."

                }

            ],

            tags: [

                "Calculation",

                "High Yield",

                "Clinical"

            ]

        }),


        topic({

            id:
                "digestion-absorption",

            number: 3,

            module: 1,

            title:
                "Digestion, Absorption & Nutrient Transport",

            description:
                "Follow nutrients from the mouth through the gastrointestinal tract and connect digestive organs with mechanical digestion, enzymes, absorption and transport.",

            objectives: [

                "Differentiate mechanical and chemical digestion.",

                "Identify the major functions of the stomach, small intestine, pancreas, liver and gallbladder.",

                "Explain where most nutrient absorption occurs.",

                "Describe how absorbed nutrients enter blood or lymph.",

                "Connect malabsorption with nutrient deficiency."

            ],

            facts: [

                [
                    "Mechanical digestion",
                    "Physical breakdown of food into smaller pieces without changing its chemical identity."
                ],

                [
                    "Chemical digestion",
                    "Enzymatic breakdown of large food molecules into absorbable units."
                ],

                [
                    "Small intestine",
                    "Primary site of digestion and absorption of most nutrients."
                ],

                [
                    "Pancreas",
                    "Produces digestive enzymes and bicarbonate released into the small intestine."
                ],

                [
                    "Liver",
                    "Produces bile and performs major metabolic, storage and detoxification functions."
                ],

                [
                    "Gallbladder",
                    "Stores and concentrates bile before releasing it into the small intestine."
                ],

                [
                    "Villi",
                    "Fingerlike projections that increase the absorptive surface area of the small intestine."
                ],

                [
                    "Lacteal",
                    "Lymphatic vessel within an intestinal villus that participates in absorption of many dietary lipids."
                ]

            ],

            sections: [

                section(

                    "MOUTH TO STOMACH",

                    "Beginning Digestion",

                    [

                        "Chewing mechanically breaks food apart and mixes it with saliva. Salivary enzymes begin digestion of selected nutrients, especially starch.",

                        "The stomach stores food, mixes it with gastric secretions and begins substantial protein digestion. Hydrochloric acid helps denature proteins and creates an acidic environment for gastric enzymes.",

                        "The stomach absorbs only limited amounts of most nutrients; its main role is processing food before it enters the small intestine."

                    ]

                ),

                section(

                    "SMALL INTESTINE",

                    "The Main Site of Digestion and Absorption",

                    [

                        "Most enzymatic digestion and nutrient absorption occur in the small intestine. Bile helps disperse fat, while pancreatic enzymes break down carbohydrate, protein and fat.",

                        "Villi and microvilli greatly increase surface area, allowing efficient transport of digested nutrients across the intestinal lining.",

                        "Many water-soluble nutrients enter blood capillaries and travel first to the liver through the hepatic portal circulation. Many long-chain lipids enter lymphatic lacteals before reaching the bloodstream."

                    ]

                ),

                section(

                    "LARGE INTESTINE",

                    "Water, Electrolytes and the Microbiome",

                    [

                        "The large intestine absorbs water and electrolytes and houses a dense microbial community.",

                        "Gut microbes ferment certain fibers and produce metabolites such as short-chain fatty acids that can influence intestinal health.",

                        "Disruption of digestion or absorption can lead to diarrhea, weight loss, electrolyte imbalance and nutrient deficiencies depending on the site and severity."

                    ]

                )

            ],

            clinical: {

                title:
                    "Malabsorption",

                scenario:
                    "A patient has chronic diarrhea, weight loss and signs of multiple vitamin deficiencies.",

                connection:
                    "Damage to small-intestinal absorptive surfaces can reduce nutrient uptake because most nutrient absorption normally occurs there."

            },

            memory: [

                "Small intestine = major absorption center.",

                "Pancreas supplies enzymes; liver makes bile; gallbladder stores bile.",

                "Water-soluble nutrients mainly enter blood; many long-chain fats travel through lymph first."

            ],

            traps: [

                "The stomach is not the primary site of nutrient absorption.",

                "Bile emulsifies fat but is not a digestive enzyme.",

                "The pancreas produces digestive enzymes but does not store bile."

            ],

            summary: [

                "Digestion includes mechanical and chemical processes.",

                "The stomach begins major protein digestion.",

                "The small intestine performs most digestion and absorption.",

                "The pancreas supplies enzymes and bicarbonate.",

                "The liver produces bile and the gallbladder stores it.",

                "Villi increase absorptive surface area."

            ],

            questions: [

                {

                    id:
                        "digest1",

                    type:
                        "mcq",

                    q:
                        "Where does most nutrient absorption occur?",

                    choices: [

                        "Small intestine",

                        "Stomach",

                        "Esophagus",

                        "Mouth"

                    ],

                    answer:
                        0,

                    explanation:
                        "The small intestine is the primary site of digestion and absorption because of its enzymes, length and large villous surface area."

                }

            ]

        }),


        topic({

            id:
                "metabolism-atp",

            number: 4,

            module: 1,

            title:
                "Metabolism, ATP, Fed State & Fasting",

            description:
                "Understand anabolism, catabolism, ATP production and how metabolism changes after meals and during fasting.",

            objectives: [

                "Differentiate anabolism and catabolism.",

                "Explain the role of ATP.",

                "Describe the fed state and fasting state.",

                "Explain glycogen storage and mobilization.",

                "Connect prolonged inadequate intake with tissue breakdown."

            ],

            facts: [

                [
                    "Metabolism",
                    "The total set of chemical reactions occurring in the body."
                ],

                [
                    "Anabolism",
                    "Energy-requiring reactions that build larger molecules from smaller units."
                ],

                [
                    "Catabolism",
                    "Reactions that break larger molecules into smaller units and can release usable energy."
                ],

                [
                    "ATP",
                    "Adenosine triphosphate, the immediate energy currency used for cellular work."
                ],

                [
                    "Glycogen",
                    "Storage form of glucose, especially in liver and skeletal muscle."
                ],

                [
                    "Fed state",
                    "Period after eating when absorbed nutrients are available and storage pathways are active."
                ],

                [
                    "Fasting state",
                    "Period between meals when stored fuels are mobilized to maintain energy supply and blood glucose."
                ]

            ],

            sections: [

                section(

                    "CELLULAR ENERGY",

                    "ATP Connects Nutrients to Cellular Work",

                    [

                        "Energy from carbohydrate, fat and some amino acids is captured through metabolic pathways and converted into ATP.",

                        "ATP powers active transport, muscle contraction, biosynthesis and many other cellular processes.",

                        "Metabolic pathways are highly regulated so that fuel use changes according to nutrient availability, hormonal signals and tissue needs."

                    ]

                ),

                section(

                    "FED STATE",

                    "Storage and Synthesis After Eating",

                    [

                        "After a meal, rising nutrient availability and hormonal signals favor glucose use, glycogen formation, protein synthesis and fat storage when energy intake exceeds immediate needs.",

                        "The liver helps regulate blood glucose and processes absorbed nutrients arriving from the intestine.",

                        "Insulin is a major anabolic signal that promotes nutrient uptake and storage in many tissues."

                    ]

                ),

                section(

                    "FASTING",

                    "Mobilizing Stored Fuel",

                    [

                        "Between meals, liver glycogen helps maintain blood glucose. As fasting continues, fat mobilization increases and the liver can produce glucose from non-carbohydrate precursors.",

                        "During prolonged energy deficiency, the body attempts to conserve critical function but may eventually break down body protein as well as fat stores.",

                        "Severe illness can alter these normal patterns through stress hormones and inflammation, increasing catabolism even when nutrition is provided."

                    ]

                )

            ],

            clinical: {

                title:
                    "Catabolic Illness",

                scenario:
                    "A critically ill patient loses muscle despite receiving calories.",

                connection:
                    "Severe inflammation and stress can increase catabolic signaling, making preservation of lean tissue more difficult than in uncomplicated fasting."

            },

            memory: [

                "ANABOLIC = assemble/build.",

                "CATABOLIC = cut/break down.",

                "ATP = immediate energy currency."

            ],

            traps: [

                "Metabolism includes both building and breakdown reactions.",

                "Glycogen is stored carbohydrate, not stored fat.",

                "Critical illness metabolism is not identical to simple fasting."

            ],

            summary: [

                "Metabolism includes anabolism and catabolism.",

                "ATP powers cellular work.",

                "The fed state favors nutrient use and storage.",

                "Fasting mobilizes glycogen and fat stores.",

                "Prolonged deficiency or severe illness can increase body-protein breakdown."

            ]

        }),


        // ====================================================================
        // MODULE 2
        // ====================================================================

        topic({

            id:
                "carbohydrates",

            number: 5,

            module: 2,

            title:
                "Carbohydrates: Sugars, Starches & Glucose",

            description:
                "Learn carbohydrate structure, digestion, glucose metabolism, glycogen storage and common food sources.",

            objectives: [

                "Differentiate monosaccharides, disaccharides and polysaccharides.",

                "Identify glucose as a major metabolic fuel.",

                "Explain carbohydrate digestion and absorption.",

                "Describe glycogen storage.",

                "Recognize major food sources of carbohydrate."

            ],

            facts: [

                [
                    "Monosaccharide",
                    "Single sugar unit such as glucose, fructose or galactose."
                ],

                [
                    "Disaccharide",
                    "Two linked monosaccharides, such as sucrose, lactose or maltose."
                ],

                [
                    "Polysaccharide",
                    "Long chain of sugar units, including starch and glycogen."
                ],

                [
                    "Glucose",
                    "A major circulating carbohydrate fuel and preferred fuel for some tissues under ordinary conditions."
                ],

                [
                    "Glycogen",
                    "Storage form of glucose in liver and skeletal muscle."
                ],

                [
                    "Starch",
                    "Plant storage polysaccharide digested into glucose units."
                ],

                [
                    "Lactose",
                    "Milk sugar composed of glucose and galactose."
                ],

                [
                    "Sucrose",
                    "Table sugar composed of glucose and fructose."
                ]

            ],

            sections: [

                section(

                    "STRUCTURE",

                    "Simple and Complex Carbohydrates",

                    [

                        "Carbohydrates range from single sugar molecules to long polysaccharide chains. Monosaccharides are the absorbable units; larger carbohydrates must be broken down before absorption.",

                        "Starches are complex carbohydrates found in grains, legumes and starchy vegetables. Sugars can occur naturally in foods or be added during processing.",

                        "The health effect of a carbohydrate food depends on its overall food matrix, fiber, processing, portion size and accompanying nutrients—not simply whether it tastes sweet."

                    ]

                ),

                section(

                    "DIGESTION",

                    "From Starch to Absorbable Sugars",

                    [

                        "Carbohydrate digestion begins in the mouth, pauses substantially in the acidic stomach and continues in the small intestine with pancreatic and brush-border enzymes.",

                        "Monosaccharides are absorbed across the intestinal lining and delivered through portal blood to the liver.",

                        "The liver helps regulate how absorbed carbohydrate is stored, released or converted depending on energy needs."

                    ]

                ),

                section(

                    "GLYCOGEN",

                    "Short-Term Carbohydrate Storage",

                    [

                        "Liver glycogen can be broken down to help maintain blood glucose between meals.",

                        "Muscle glycogen provides local fuel for contracting muscle but does not directly serve as a major source of free glucose for the whole body.",

                        "When carbohydrate intake exceeds immediate energy and glycogen-storage needs, excess energy can contribute to fat storage."

                    ]

                )

            ],

            clinical: {

                title:
                    "Hypoglycemia Risk",

                scenario:
                    "A patient taking glucose-lowering medication skips a meal and becomes shaky and confused.",

                connection:
                    "Carbohydrate intake, medication action and liver glucose output interact to determine blood glucose availability."

            },

            memory: [

                "MONO = one sugar; DI = two; POLY = many.",

                "Liver glycogen helps support blood glucose.",

                "Muscle glycogen mainly fuels muscle itself."

            ],

            traps: [

                "Not all carbohydrate foods are nutritionally equivalent.",

                "Glycogen is the animal storage form of glucose; starch is the plant storage form.",

                "Lactose is not a monosaccharide."

            ],

            summary: [

                "Carbohydrates include sugars, starch and fiber.",

                "Monosaccharides are absorbable carbohydrate units.",

                "Glucose is a major metabolic fuel.",

                "Starch is a plant polysaccharide.",

                "Glycogen stores glucose in liver and muscle."

            ]

        }),


        topic({

            id:
                "fiber-glycemic",

            number: 6,

            module: 2,

            title:
                "Dietary Fiber, Glycemic Response & Added Sugars",

            description:
                "Understand soluble and insoluble fiber, gut effects, glycemic response and why carbohydrate quality matters.",

            objectives: [

                "Differentiate soluble and insoluble fiber.",

                "Explain major physiological benefits of dietary fiber.",

                "Define glycemic response.",

                "Explain why mixed meals alter glucose response.",

                "Differentiate naturally occurring sugars from added sugars."

            ],

            facts: [

                [
                    "Dietary fiber",
                    "Non-digestible carbohydrate components of plant foods that influence gastrointestinal and metabolic function."
                ],

                [
                    "Soluble fiber",
                    "Fiber that can dissolve or form viscous gels and may be fermented by gut microbes."
                ],

                [
                    "Insoluble fiber",
                    "Fiber that generally increases stool bulk and supports bowel regularity."
                ],

                [
                    "Glycemic response",
                    "Change in blood glucose after consuming carbohydrate-containing food."
                ],

                [
                    "Added sugar",
                    "Sugar added during processing, preparation or at the table rather than naturally incorporated into the intact food structure."
                ],

                [
                    "Fermentation",
                    "Microbial breakdown of some fibers in the colon, producing gases and metabolites including short-chain fatty acids."
                ]

            ],

            sections: [

                section(

                    "FIBER TYPES",

                    "Soluble and Insoluble Fiber",

                    [

                        "Different fibers behave differently in the gastrointestinal tract. Soluble viscous fibers can slow gastric emptying and nutrient absorption, while insoluble fibers often increase stool bulk.",

                        "Many whole plant foods contain mixtures of fiber types rather than only one category.",

                        "Fiber intake is associated with bowel health and can influence satiety, cholesterol metabolism and post-meal glucose response."

                    ]

                ),

                section(

                    "GLYCEMIC RESPONSE",

                    "Not All Carbohydrate Foods Raise Glucose Equally",

                    [

                        "The rise in blood glucose after a meal depends on carbohydrate amount, food structure, fiber, processing, cooking, fat, protein and the person's own metabolism.",

                        "Highly refined carbohydrate foods may be digested rapidly, while intact whole grains, legumes and mixed meals often produce a slower response.",

                        "Clinical carbohydrate planning therefore considers portion size and total carbohydrate rather than relying on one measure alone."

                    ]

                ),

                section(

                    "ADDED SUGARS",

                    "Calories With Limited Nutrient Contribution",

                    [

                        "Added sugars can increase energy intake without adding much fiber, protein, vitamins or minerals.",

                        "Naturally occurring sugars in whole fruit or milk are packaged with other nutrients and should not be evaluated exactly like added sugars in highly processed foods.",

                        "Excess intake of sugar-sweetened foods and beverages can displace more nutrient-dense choices."

                    ]

                )

            ],

            clinical: {

                title:
                    "Constipation Prevention",

                scenario:
                    "A patient with low activity and low intake of fruits, vegetables and whole grains develops constipation.",

                connection:
                    "Increasing appropriate fiber and fluid intake can support stool bulk and bowel regularity when not contraindicated."

            },

            memory: [

                "Soluble can form gel; insoluble adds bulk.",

                "Fiber is carbohydrate the human digestive enzymes do not fully digest.",

                "Glycemic response depends on the whole meal, not only the sugar label."

            ],

            traps: [

                "Fiber is not absorbed as glucose in the same way as digestible starch.",

                "Whole fruit and added sugar are not nutritionally identical.",

                "Rapidly increasing fiber without adequate fluid can worsen GI discomfort in some people."

            ],

            summary: [

                "Fiber supports gastrointestinal and metabolic health.",

                "Soluble and insoluble fibers have different properties.",

                "Mixed meals alter glycemic response.",

                "Food processing can change carbohydrate digestion speed.",

                "Added sugars can raise calories without adding many essential nutrients."

            ]

        }),


        topic({

            id:
                "lipids",

            number: 7,

            module: 2,

            title:
                "Lipids, Fatty Acids, Cholesterol & Lipoproteins",

            description:
                "Learn triglyceride structure, saturated and unsaturated fats, essential fatty acids, cholesterol and lipoprotein transport.",

            objectives: [

                "Describe triglyceride structure.",

                "Differentiate saturated, monounsaturated and polyunsaturated fatty acids.",

                "Explain essential fatty acids.",

                "Describe cholesterol functions.",

                "Differentiate major lipoprotein roles."

            ],

            facts: [

                [
                    "Triglyceride",
                    "Three fatty acids attached to glycerol; the major form of fat in foods and body fat stores."
                ],

                [
                    "Saturated fatty acid",
                    "Fatty acid with no carbon-carbon double bonds."
                ],

                [
                    "Monounsaturated fatty acid",
                    "Fatty acid with one carbon-carbon double bond."
                ],

                [
                    "Polyunsaturated fatty acid",
                    "Fatty acid with two or more carbon-carbon double bonds."
                ],

                [
                    "Essential fatty acid",
                    "Fatty acid that must be obtained from the diet because the body cannot synthesize enough of it."
                ],

                [
                    "Cholesterol",
                    "Sterol used in cell membranes and as a precursor for steroid hormones, bile acids and vitamin D."
                ],

                [
                    "LDL",
                    "Lipoprotein that delivers cholesterol from the liver to peripheral tissues; elevated levels are associated with atherosclerotic risk."
                ],

                [
                    "HDL",
                    "Lipoprotein involved in reverse cholesterol transport and other protective processes."
                ]

            ],

            sections: [

                section(

                    "FAT STRUCTURE",

                    "Triglycerides and Fatty Acids",

                    [

                        "Most dietary fat is consumed as triglycerides. During digestion, triglycerides are broken into smaller lipid products that can be absorbed and later reassembled.",

                        "Fatty acids differ in chain length and degree of saturation. These structural differences influence physical properties, membrane behavior and metabolism.",

                        "Unsaturated fats tend to remain more fluid at room temperature because double bonds create bends in fatty-acid chains."

                    ]

                ),

                section(

                    "CHOLESTEROL",

                    "Necessary Molecule, Not an Energy Nutrient",

                    [

                        "Cholesterol is essential for cell membranes and serves as a precursor for steroid hormones and bile acids.",

                        "The body synthesizes cholesterol, so dietary cholesterol is not an essential nutrient.",

                        "Blood cholesterol is transported in lipoprotein particles rather than floating freely in plasma."

                    ]

                ),

                section(

                    "LIPOPROTEINS",

                    "Transporting Lipids Through Blood",

                    [

                        "Lipoproteins package hydrophobic lipids with proteins and phospholipids so they can travel in the aqueous bloodstream.",

                        "LDL particles deliver cholesterol to tissues; persistently elevated LDL cholesterol is an important cardiovascular risk factor.",

                        "HDL participates in reverse cholesterol transport, although cardiovascular risk interpretation is broader than simply labeling one particle good and another bad."

                    ]

                )

            ],

            clinical: {

                title:
                    "Cardiovascular Risk",

                scenario:
                    "A patient has elevated LDL cholesterol and a diet high in saturated fat.",

                connection:
                    "Replacing some saturated-fat sources with unsaturated fats while improving overall dietary pattern can support cardiovascular risk reduction."

            },

            memory: [

                "SATURATED = no double bonds.",

                "MONO = one double bond; POLY = many.",

                "LDL delivers cholesterol outward; HDL participates in return transport."

            ],

            traps: [

                "Cholesterol is not a triglyceride.",

                "Dietary fat is not automatically unhealthy; type and overall dietary pattern matter.",

                "HDL and LDL are lipoproteins, not forms of cholesterol itself."

            ],

            summary: [

                "Triglycerides are the major form of dietary and stored fat.",

                "Fatty acids vary by saturation.",

                "Some fatty acids are essential.",

                "Cholesterol has structural and synthetic functions.",

                "Lipoproteins transport lipids through blood."

            ]

        }),


        topic({

            id:
                "protein",

            number: 8,

            module: 2,

            title:
                "Protein, Amino Acids & Nitrogen Balance",

            description:
                "Understand amino acids, complete proteins, protein turnover, nitrogen balance and the clinical importance of protein adequacy.",

            objectives: [

                "Describe protein structure and amino acids.",

                "Differentiate essential and nonessential amino acids.",

                "Explain protein quality and complementary proteins.",

                "Define nitrogen balance.",

                "Calculate protein intake when a target in g/kg is provided."

            ],

            facts: [

                [
                    "Amino acid",
                    "Nitrogen-containing building block of protein."
                ],

                [
                    "Essential amino acid",
                    "Amino acid that must be supplied by the diet in adequate amounts."
                ],

                [
                    "Protein turnover",
                    "Continuous breakdown and synthesis of body proteins."
                ],

                [
                    "Complete protein",
                    "Protein source supplying all essential amino acids in adequate proportions for human needs."
                ],

                [
                    "Complementary proteins",
                    "Different plant protein foods whose amino-acid patterns can collectively provide adequate essential amino acids."
                ],

                [
                    "Nitrogen balance",
                    "Relationship between nitrogen intake and nitrogen losses, used conceptually to assess protein balance."
                ],

                [
                    "Positive nitrogen balance",
                    "State in which nitrogen retention exceeds loss, such as during growth or tissue building."
                ],

                [
                    "Negative nitrogen balance",
                    "State in which nitrogen losses exceed intake, often seen with severe illness, injury or inadequate protein/energy intake."
                ]

            ],

            formulas: [

                "Protein grams = body weight (kg) × prescribed protein target (g/kg)"

            ],

            sections: [

                section(

                    "AMINO ACIDS",

                    "Protein Is Built From Amino Acids",

                    [

                        "Dietary proteins are digested into amino acids and small peptides that can be absorbed and used to synthesize body proteins.",

                        "Essential amino acids must come from the diet because the body cannot produce enough of them. Nonessential amino acids can generally be synthesized by the body under ordinary conditions.",

                        "Protein serves structural, enzymatic, transport, immune, signaling and fluid-balance functions."

                    ]

                ),

                section(

                    "QUALITY",

                    "Protein Quality Depends on Amino-Acid Supply and Digestibility",

                    [

                        "Animal proteins often provide all essential amino acids in proportions that support human needs, but many plant foods also contribute substantial protein.",

                        "A varied diet containing legumes, grains, nuts, seeds and other foods can provide adequate amino acids without requiring complementary plant proteins to be eaten at the exact same meal.",

                        "Overall protein adequacy also depends on total energy intake because inadequate calories increase the likelihood that amino acids will be oxidized for energy rather than used for tissue synthesis."

                    ]

                ),

                section(

                    "NITROGEN BALANCE",

                    "A Marker of Protein Gain or Loss",

                    [

                        "Because protein contains nitrogen, nitrogen balance can conceptually reflect whether the body is gaining or losing protein.",

                        "Growth, pregnancy and recovery from depletion can produce positive nitrogen balance. Severe illness, burns, trauma or inadequate intake can produce negative balance.",

                        "Clinical protein requirements are individualized according to disease, renal function, wounds, catabolic stress and treatment goals."

                    ]

                )

            ],

            worked: [

                worked(

                    "Protein Target",

                    "A 70-kg patient is prescribed 1.2 g protein/kg/day. Calculate the protein target.",

                    [

                        "Protein = 70 kg × 1.2 g/kg.",

                        "Protein = 84 g/day."

                    ],

                    "84 g protein/day"

                )

            ],

            practice: [

                practice(

                    "A 60-kg patient has a prescribed protein target of 1.5 g/kg/day. Calculate grams per day.",

                    "90 g/day.",

                    [

                        "60 × 1.5 = 90 g/day."

                    ]

                )

            ],

            clinical: {

                title:
                    "Wound Healing",

                scenario:
                    "A patient with a large pressure injury has poor appetite and low overall intake.",

                connection:
                    "Adequate protein and energy are important for collagen synthesis, immune function and tissue repair, but exact needs require individualized assessment."

            },

            memory: [

                "Protein → amino acids.",

                "Essential amino acids must come from food.",

                "Negative nitrogen balance = more protein being lost than retained."

            ],

            traps: [

                "Protein needs are not identical for every patient.",

                "Plant-based diets can provide adequate protein when overall intake is sufficient and varied.",

                "Protein cannot replace adequate total energy intake in a severely underfed patient."

            ],

            summary: [

                "Proteins are made from amino acids.",

                "Some amino acids are essential.",

                "Protein supports structure, enzymes, immunity and tissue repair.",

                "Protein turnover is continuous.",

                "Nitrogen balance reflects protein gain or loss conceptually.",

                "Clinical protein targets are individualized."

            ],

            questions: [

                {

                    id:
                        "protein1",

                    type:
                        "numeric",

                    q:
                        "A 75-kg patient is prescribed 1.0 g protein/kg/day. How many grams of protein are prescribed per day?",

                    answer:
                        75,

                    tolerance:
                        0.01,

                    unit:
                        "g/day",

                    explanation:
                        "75 kg × 1.0 g/kg = 75 g/day."

                }

            ],

            tags: [

                "Calculation",

                "Clinical",

                "High Yield"

            ]

        }),


        // ====================================================================
        // MODULE 3
        // ====================================================================

        topic({

            id:
                "water-fluid-balance",

            number: 9,

            module: 3,

            title:
                "Water, Hydration & Fluid Balance",

            description:
                "Understand body-water compartments, fluid intake and output, dehydration, overhydration and common fluid calculations.",

            objectives: [

                "Explain major functions of water.",

                "Differentiate intracellular and extracellular fluid.",

                "Describe fluid intake and loss pathways.",

                "Recognize basic signs of dehydration and fluid excess.",

                "Calculate a fluid target when a prescribed mL/kg factor is provided."

            ],

            facts: [

                [
                    "Intracellular fluid",
                    "Fluid located inside cells."
                ],

                [
                    "Extracellular fluid",
                    "Fluid outside cells, including interstitial fluid and plasma."
                ],

                [
                    "Hydration",
                    "State of adequate body water for physiological function."
                ],

                [
                    "Dehydration",
                    "Net deficit of body water relative to needs."
                ],

                [
                    "Fluid overload",
                    "Excess body fluid that may contribute to edema, hypertension or pulmonary congestion depending on severity and cause."
                ],

                [
                    "Osmosis",
                    "Movement of water across a selectively permeable membrane toward the side with higher effective solute concentration."
                ]

            ],

            formulas: [

                "Fluid mL/day = body weight (kg) × prescribed mL/kg/day factor"

            ],

            sections: [

                section(

                    "FUNCTION",

                    "Why Water Is Essential",

                    [

                        "Water is the major solvent for biochemical reactions and a major component of blood, intracellular fluid and extracellular fluid.",

                        "It transports nutrients and wastes, lubricates tissues, supports blood volume and helps regulate body temperature through heat distribution and sweating.",

                        "Water balance is controlled by intake, renal handling, hormones, thirst and losses through urine, stool, skin and respiration."

                    ]

                ),

                section(

                    "COMPARTMENTS",

                    "Water Moves Between Body Compartments",

                    [

                        "Intracellular fluid is contained within cells, while extracellular fluid includes plasma and interstitial fluid.",

                        "Changes in sodium and other effective solutes can shift water across cell membranes through osmosis.",

                        "The kidneys are central to long-term regulation of water and electrolyte balance."

                    ]

                ),

                section(

                    "CLINICAL BALANCE",

                    "Too Little and Too Much Can Both Be Dangerous",

                    [

                        "Dehydration may develop from poor intake, vomiting, diarrhea, fever, diuretics or other losses. Signs can include thirst, dry mucous membranes, reduced urine output, tachycardia and orthostatic symptoms depending on severity.",

                        "Fluid overload can occur with renal, cardiac or hepatic dysfunction or excessive fluid administration and may present with edema, rapid weight gain or respiratory symptoms.",

                        "Fluid goals must be individualized, especially in heart failure, kidney disease and critical illness."

                    ]

                )

            ],

            worked: [

                worked(

                    "Prescribed Fluid Factor",

                    "A 65-kg patient has an ordered fluid goal of 30 mL/kg/day. Calculate the daily target.",

                    [

                        "65 kg × 30 mL/kg = 1950 mL/day."

                    ],

                    "1950 mL/day"

                )

            ],

            practice: [

                practice(

                    "A 72-kg patient is prescribed 25 mL/kg/day. Calculate the daily fluid target.",

                    "1800 mL/day.",

                    [

                        "72 × 25 = 1800 mL/day."

                    ]

                )

            ],

            clinical: {

                title:
                    "Heart Failure",

                scenario:
                    "A patient with heart failure develops rapid weight gain and worsening lower-extremity edema.",

                connection:
                    "These findings may reflect fluid retention, so hydration recommendations must be individualized rather than assuming more fluid is always better."

            },

            memory: [

                "ICF = inside cells; ECF = outside cells.",

                "Water follows effective solute gradients by osmosis.",

                "Fluid goals must match the patient's clinical condition."

            ],

            traps: [

                "A universal fluid recommendation is unsafe for every patient.",

                "Edema can coexist with abnormal effective circulating volume.",

                "Short-term body-weight changes can reflect fluid shifts, not just fat change."

            ],

            summary: [

                "Water supports transport, temperature control and metabolism.",

                "Body water is divided into intracellular and extracellular compartments.",

                "The kidneys regulate long-term water balance.",

                "Dehydration and fluid overload have different clinical causes and risks.",

                "Fluid prescriptions are individualized."

            ],

            questions: [

                {

                    id:
                        "fluid1",

                    type:
                        "numeric",

                    q:
                        "A 50-kg patient is prescribed 30 mL/kg/day of fluid. What is the target?",

                    answer:
                        1500,

                    tolerance:
                        0.01,

                    unit:
                        "mL/day",

                    explanation:
                        "50 × 30 = 1500 mL/day."

                }

            ],

            tags: [

                "Calculation",

                "Clinical",

                "Physiology"

            ]

        }),


        topic({

            id:
                "sodium-potassium",

            number: 10,

            module: 3,

            title:
                "Sodium, Potassium & Electrolyte Balance",

            description:
                "Connect sodium and potassium with fluid balance, nerve and muscle function, blood pressure and clinical electrolyte disturbances.",

            objectives: [

                "Describe sodium's major physiological roles.",

                "Describe potassium's major physiological roles.",

                "Differentiate predominant extracellular and intracellular cations.",

                "Explain how sodium intake can influence fluid balance and blood pressure.",

                "Recognize why electrolyte disturbances can be dangerous."

            ],

            facts: [

                [
                    "Sodium",
                    "Major extracellular cation involved in fluid balance, nerve conduction and muscle function."
                ],

                [
                    "Potassium",
                    "Major intracellular cation important for membrane potential, nerve function and muscle contraction."
                ],

                [
                    "Hyponatremia",
                    "Abnormally low serum sodium concentration."
                ],

                [
                    "Hypernatremia",
                    "Abnormally high serum sodium concentration."
                ],

                [
                    "Hypokalemia",
                    "Abnormally low serum potassium concentration."
                ],

                [
                    "Hyperkalemia",
                    "Abnormally high serum potassium concentration."
                ],

                [
                    "Electrolyte",
                    "Substance that dissociates into charged ions in solution and contributes to electrical and osmotic processes."
                ]

            ],

            sections: [

                section(

                    "SODIUM",

                    "Major Extracellular Cation",

                    [

                        "Sodium is a major determinant of extracellular-fluid osmolality and volume. The kidneys regulate sodium balance through coordinated hormonal and renal mechanisms.",

                        "High sodium intake can contribute to higher blood pressure in salt-sensitive individuals and can worsen fluid retention in selected clinical conditions.",

                        "Processed and restaurant foods can contribute substantial sodium because sodium is used for preservation, texture and flavor."

                    ]

                ),

                section(

                    "POTASSIUM",

                    "Major Intracellular Cation",

                    [

                        "Potassium is essential for resting membrane potential and normal nerve and muscle function, including cardiac electrical activity.",

                        "Many fruits, vegetables, legumes and dairy foods contain potassium, but intake recommendations must be individualized in advanced kidney disease or other conditions affecting potassium handling.",

                        "Both low and high serum potassium can cause dangerous cardiac rhythm disturbances."

                    ]

                ),

                section(

                    "CLINICAL INTERPRETATION",

                    "Serum Levels Are Not Simply Dietary Intake",

                    [

                        "Serum sodium concentration reflects water balance as well as sodium content; hyponatremia can occur even when total body sodium is not low.",

                        "Potassium levels are influenced by renal function, medications, acid-base status and shifts between intracellular and extracellular compartments.",

                        "Electrolyte abnormalities therefore require clinical evaluation rather than assuming diet alone is responsible."

                    ]

                )

            ],

            clinical: {

                title:
                    "Potassium and Cardiac Rhythm",

                scenario:
                    "A patient taking a potassium-wasting diuretic develops weakness and palpitations.",

                connection:
                    "Low potassium can alter membrane potentials and cardiac conduction, illustrating why electrolytes are central to nutrition and physiology."

            },

            memory: [

                "Sodium = major outside-cell cation.",

                "Potassium = major inside-cell cation.",

                "Both too high and too low potassium can be dangerous for the heart."

            ],

            traps: [

                "Serum sodium concentration is not a simple measure of total sodium intake.",

                "High-potassium foods are not automatically appropriate for every renal patient.",

                "Electrolyte abnormalities often involve disease and medications as well as diet."

            ],

            summary: [

                "Sodium dominates extracellular cation concentration.",

                "Potassium dominates intracellular cation concentration.",

                "Both support nerve and muscle function.",

                "Sodium intake can influence blood pressure and fluid retention.",

                "Renal function strongly affects electrolyte balance."

            ]

        }),


        topic({

            id:
                "calcium-magnesium-phosphorus",

            number: 11,

            module: 3,

            title:
                "Calcium, Phosphorus, Magnesium & Bone Health",

            description:
                "Learn the structural and regulatory roles of major minerals involved in bone, muscle, nerve and energy metabolism.",

            objectives: [

                "Describe calcium's major functions.",

                "Explain phosphorus in bone and ATP.",

                "Describe magnesium's regulatory roles.",

                "Explain hormonal control of calcium balance conceptually.",

                "Connect nutrition with osteoporosis risk."

            ],

            facts: [

                [
                    "Calcium",
                    "Mineral required for bone structure, muscle contraction, nerve signaling and blood clotting."
                ],

                [
                    "Phosphorus",
                    "Mineral found in bone, ATP, nucleic acids and phospholipids."
                ],

                [
                    "Magnesium",
                    "Mineral involved in many enzyme reactions, ATP-dependent processes, nerve function and muscle function."
                ],

                [
                    "Bone remodeling",
                    "Continuous resorption and formation of bone tissue."
                ],

                [
                    "Parathyroid hormone",
                    "Hormone that helps regulate blood calcium through effects on bone, kidney and vitamin D activation."
                ],

                [
                    "Vitamin D",
                    "Fat-soluble vitamin/hormone system that supports calcium and phosphorus absorption and bone health."
                ]

            ],

            sections: [

                section(

                    "BONE MATRIX",

                    "Minerals Give Bone Strength",

                    [

                        "Bone contains a protein matrix strengthened by mineral crystals containing calcium and phosphorus. Bone is metabolically active rather than an inert storage structure.",

                        "Calcium is also required for muscle contraction and nerve signaling, so the body tightly regulates blood calcium concentration.",

                        "When dietary intake is chronically inadequate, hormonal regulation can increase calcium mobilization from bone to preserve critical blood calcium functions."

                    ]

                ),

                section(

                    "PHOSPHORUS & MAGNESIUM",

                    "More Than Bone Minerals",

                    [

                        "Phosphorus participates in ATP, DNA, RNA, cell membranes and acid-base buffering in addition to bone mineral.",

                        "Magnesium acts as a cofactor in many enzyme systems and is important for neuromuscular function and energy metabolism.",

                        "Deficiency or excess can occur with poor intake, gastrointestinal losses, renal dysfunction or medications depending on the mineral."

                    ]

                ),

                section(

                    "BONE HEALTH",

                    "Nutrition Works With Activity and Hormones",

                    [

                        "Bone health reflects genetics, age, hormone status, weight-bearing activity, calcium and vitamin D adequacy, protein intake and other lifestyle factors.",

                        "Peak bone mass develops earlier in life, making childhood, adolescence and young adulthood important periods for long-term skeletal health.",

                        "Later-life bone loss can increase fracture risk, especially when combined with falls."

                    ]

                )

            ],

            clinical: {

                title:
                    "Fracture Risk",

                scenario:
                    "An older adult has low bone mineral density and limited intake of calcium-rich foods.",

                connection:
                    "Bone health requires adequate mineral and vitamin D status along with physical activity and broader osteoporosis risk management."

            },

            memory: [

                "Calcium = bone + contraction + clotting + signaling.",

                "Phosphorus = bone + ATP + DNA/RNA + phospholipids.",

                "Magnesium = many enzymes + muscle/nerve function."

            ],

            traps: [

                "Most body calcium is stored in bone, but blood calcium has critical physiological functions.",

                "Bone health depends on more than calcium alone.",

                "Renal disease can alter phosphorus and magnesium handling."

            ],

            summary: [

                "Calcium supports bone, muscle, nerve and clotting functions.",

                "Phosphorus is part of bone, ATP and nucleic acids.",

                "Magnesium participates in many enzyme systems.",

                "Bone is continuously remodeled.",

                "Nutrition, hormones and physical activity all influence bone health."

            ]

        }),


        topic({

            id:
                "iron-zinc-trace",

            number: 12,

            module: 3,

            title:
                "Iron, Zinc, Iodine & Trace Minerals",

            description:
                "Understand iron transport and anemia, zinc in healing and immunity, iodine in thyroid hormone synthesis and the concept of trace minerals.",

            objectives: [

                "Explain iron's role in hemoglobin.",

                "Differentiate heme and nonheme iron conceptually.",

                "Describe zinc's major roles.",

                "Explain iodine's relationship to thyroid hormone.",

                "Recognize that trace minerals can be harmful in deficiency or excess."

            ],

            facts: [

                [
                    "Iron",
                    "Trace mineral required for hemoglobin, myoglobin and many enzymes."
                ],

                [
                    "Heme iron",
                    "Iron found in hemoglobin and myoglobin of animal foods and generally absorbed more efficiently than nonheme iron."
                ],

                [
                    "Nonheme iron",
                    "Iron form found in plant foods and many fortified foods; absorption varies with meal composition."
                ],

                [
                    "Ferritin",
                    "Major iron-storage protein and a commonly measured laboratory marker of body iron stores, though inflammation can affect interpretation."
                ],

                [
                    "Zinc",
                    "Trace mineral involved in enzymes, DNA synthesis, immunity, taste and wound healing."
                ],

                [
                    "Iodine",
                    "Trace mineral required for thyroid hormone synthesis."
                ],

                [
                    "Trace mineral",
                    "Mineral required in relatively small amounts but still essential for normal function."
                ]

            ],

            sections: [

                section(

                    "IRON",

                    "Oxygen Transport and Energy Metabolism",

                    [

                        "Iron is a key component of hemoglobin, allowing red blood cells to transport oxygen. It also participates in myoglobin and numerous enzymes.",

                        "Iron deficiency can progress from depleted stores to impaired red-cell production and eventually iron-deficiency anemia.",

                        "Heme iron is generally absorbed more efficiently, while nonheme iron absorption can be enhanced by vitamin C and influenced by other meal components."

                    ]

                ),

                section(

                    "ZINC",

                    "Growth, Immunity and Repair",

                    [

                        "Zinc is required for many enzymes and transcription factors and supports DNA synthesis, immune function, taste and wound healing.",

                        "Deficiency can occur with poor intake, malabsorption or increased losses and may impair healing and appetite.",

                        "Excessive supplementation can also cause problems, including interference with absorption of other minerals."

                    ]

                ),

                section(

                    "IODINE",

                    "Thyroid Hormone Production",

                    [

                        "Iodine is incorporated into thyroid hormones, which influence metabolism, growth and development.",

                        "Deficiency can impair thyroid hormone production, while excess iodine can also disrupt thyroid function in susceptible people.",

                        "Trace minerals are needed in small amounts, but small required quantities do not mean they are unimportant."

                    ]

                )

            ],

            clinical: {

                title:
                    "Microcytic Anemia",

                scenario:
                    "A patient has fatigue, low hemoglobin and low iron stores.",

                connection:
                    "Iron deficiency can limit hemoglobin synthesis and oxygen transport, but anemia evaluation should consider multiple possible causes."

            },

            memory: [

                "Iron → hemoglobin → oxygen transport.",

                "Zinc → wound healing + immunity + taste.",

                "Iodine → thyroid hormones."

            ],

            traps: [

                "Ferritin can rise with inflammation, so it is not interpreted in isolation.",

                "Not every anemia is caused by iron deficiency.",

                "More supplementation is not always better; trace minerals can be toxic in excess."

            ],

            summary: [

                "Iron is essential for hemoglobin and oxygen transport.",

                "Heme and nonheme iron differ in absorption.",

                "Zinc supports immunity and wound healing.",

                "Iodine is required for thyroid hormone synthesis.",

                "Trace minerals require balance because both deficiency and excess can be harmful."

            ]

        }),


        topic({

            id:
                "fat-soluble-vitamins",

            number: 13,

            module: 3,

            title:
                "Fat-Soluble Vitamins A, D, E & K",

            description:
                "Master the major functions, deficiency patterns and toxicity concerns of vitamins A, D, E and K.",

            objectives: [

                "Identify vitamins A, D, E and K as fat soluble.",

                "Describe key functions of each vitamin.",

                "Explain why fat malabsorption can cause deficiency.",

                "Recognize toxicity risk with excessive supplementation.",

                "Connect vitamin K with coagulation."

            ],

            facts: [

                [
                    "Vitamin A",
                    "Fat-soluble vitamin involved in vision, epithelial integrity, immunity and gene regulation."
                ],

                [
                    "Vitamin D",
                    "Fat-soluble vitamin/hormone system involved in calcium and phosphorus balance and bone health."
                ],

                [
                    "Vitamin E",
                    "Fat-soluble antioxidant that helps protect cell membranes from oxidative damage."
                ],

                [
                    "Vitamin K",
                    "Fat-soluble vitamin required for activation of several clotting proteins and proteins involved in bone metabolism."
                ],

                [
                    "Fat malabsorption",
                    "Impaired absorption of dietary fat that can reduce absorption of fat-soluble vitamins."
                ],

                [
                    "Toxicity",
                    "Harmful effects caused by excessive intake or accumulation of a nutrient."
                ]

            ],

            sections: [

                section(

                    "ABSORPTION",

                    "Fat-Soluble Means Fat-Dependent Absorption",

                    [

                        "Vitamins A, D, E and K are absorbed along with dietary lipids, so disorders that impair fat digestion or absorption can increase deficiency risk.",

                        "Unlike many water-soluble vitamins, fat-soluble vitamins can be stored in body tissues to a greater extent.",

                        "This storage helps buffer short-term low intake but also means excessive supplementation can lead to accumulation and toxicity for some vitamins."

                    ]

                ),

                section(

                    "A, D, E",

                    "Vision, Bone and Antioxidant Functions",

                    [

                        "Vitamin A supports visual pigments, epithelial tissues, immunity and gene expression. Deficiency can impair night vision and epithelial integrity.",

                        "Vitamin D supports intestinal calcium and phosphorus absorption and plays a central role in bone mineral homeostasis.",

                        "Vitamin E functions primarily as a lipid-phase antioxidant protecting cell membranes from oxidative injury."

                    ]

                ),

                section(

                    "VITAMIN K",

                    "Coagulation and Bone Proteins",

                    [

                        "Vitamin K is required for post-translational activation of several clotting proteins.",

                        "Because vitamin K intake can affect anticoagulation with warfarin, patients taking warfarin are typically counseled to keep vitamin K intake consistent rather than abruptly eliminating all vitamin K foods.",

                        "Medication-nutrient interactions should always be individualized with the treating team."

                    ]

                )

            ],

            clinical: {

                title:
                    "Fat Malabsorption",

                scenario:
                    "A patient with chronic fat malabsorption develops easy bruising and low vitamin levels.",

                connection:
                    "Poor fat absorption can reduce absorption of vitamins A, D, E and K; low vitamin K can impair activation of clotting proteins."

            },

            memory: [

                "Fat-soluble vitamins = A D E K.",

                "A = eyes/epithelium; D = bone/calcium; E = antioxidant; K = clotting.",

                "Stored more readily → greater toxicity concern with excessive supplements."

            ],

            traps: [

                "Warfarin patients should not automatically eliminate all vitamin K foods; consistency is commonly emphasized.",

                "Vitamin D is not only a bone nutrient; it functions as part of a hormone-like regulatory system.",

                "Fat-soluble vitamins can accumulate with excessive supplementation."

            ],

            summary: [

                "A, D, E and K are fat soluble.",

                "Fat malabsorption can cause deficiency.",

                "Vitamin A supports vision and epithelial tissues.",

                "Vitamin D supports mineral homeostasis and bone.",

                "Vitamin E acts as an antioxidant.",

                "Vitamin K supports clotting-protein activation."

            ]

        }),


        topic({

            id:
                "water-soluble-vitamins",

            number: 14,

            module: 3,

            title:
                "Water-Soluble Vitamins: B Vitamins & Vitamin C",

            description:
                "Learn the major metabolic roles of B vitamins and vitamin C, with emphasis on folate, B12, thiamin and deficiency patterns.",

            objectives: [

                "Identify B vitamins and vitamin C as water soluble.",

                "Explain the role of B vitamins in energy metabolism.",

                "Differentiate folate and vitamin B12 functions.",

                "Describe vitamin C functions.",

                "Recognize key deficiency patterns."

            ],

            facts: [

                [
                    "Thiamin",
                    "Vitamin B1, a coenzyme important in carbohydrate and energy metabolism and nervous-system function."
                ],

                [
                    "Riboflavin",
                    "Vitamin B2, a component of coenzymes involved in oxidation-reduction reactions."
                ],

                [
                    "Niacin",
                    "Vitamin B3, part of NAD and NADP coenzymes used in energy metabolism."
                ],

                [
                    "Folate",
                    "B vitamin required for one-carbon transfer reactions, DNA synthesis and normal cell division."
                ],

                [
                    "Vitamin B12",
                    "B vitamin required for normal neurologic function, DNA synthesis and red-blood-cell formation."
                ],

                [
                    "Vitamin C",
                    "Water-soluble vitamin important for collagen synthesis, antioxidant functions and enhancement of nonheme iron absorption."
                ],

                [
                    "Intrinsic factor",
                    "Protein produced by gastric parietal cells that is required for efficient vitamin B12 absorption in the terminal ileum."
                ]

            ],

            sections: [

                section(

                    "B VITAMINS",

                    "Coenzymes in Metabolism",

                    [

                        "Many B vitamins function as parts of coenzymes that help enzymes process carbohydrate, fat and amino acids.",

                        "They do not provide energy themselves, but deficiencies can impair the pathways that release and transfer energy from macronutrients.",

                        "Because these vitamins have different metabolic roles, deficiency patterns vary by vitamin."

                    ]

                ),

                section(

                    "FOLATE & B12",

                    "DNA Synthesis and Red Blood Cells",

                    [

                        "Folate and vitamin B12 are both important for normal DNA synthesis and red-blood-cell development. Deficiency can lead to megaloblastic anemia.",

                        "Vitamin B12 deficiency can additionally cause neurologic injury, making it important not to treat unexplained macrocytic anemia with folate alone without evaluating B12 status.",

                        "B12 absorption depends on gastric and ileal function and intrinsic factor, so deficiency can occur despite adequate intake."

                    ]

                ),

                section(

                    "VITAMIN C",

                    "Collagen and Iron Absorption",

                    [

                        "Vitamin C is required for collagen synthesis, making it important for connective tissue integrity and wound healing.",

                        "It also functions as an antioxidant and can enhance absorption of nonheme iron when consumed in the same meal.",

                        "Severe deficiency causes scurvy, characterized by impaired collagen-related tissues such as gums, skin and blood vessels."

                    ]

                )

            ],

            clinical: {

                title:
                    "Vitamin B12 Deficiency",

                scenario:
                    "An older adult has macrocytic anemia, numbness and impaired vibration sensation.",

                connection:
                    "Vitamin B12 deficiency can affect both blood-cell production and neurologic function, so the neurologic symptoms are a major clue."

            },

            memory: [

                "B vitamins help metabolism run; they do not directly provide calories.",

                "Folate + B12 = DNA/cell division; B12 also protects neurologic function.",

                "Vitamin C = collagen + antioxidant + helps nonheme iron absorption."

            ],

            traps: [

                "Folate can improve the anemia of B12 deficiency while neurologic injury progresses, so B12 status matters.",

                "Water-soluble does not mean toxicity is impossible.",

                "B vitamins do not provide calories themselves."

            ],

            summary: [

                "B vitamins often function as metabolic coenzymes.",

                "Folate and B12 support DNA synthesis and red-cell formation.",

                "B12 deficiency can cause neurologic damage.",

                "Intrinsic factor is required for efficient B12 absorption.",

                "Vitamin C supports collagen and nonheme iron absorption."

            ]

        }),


        // ====================================================================
        // MODULE 4
        // ====================================================================

        topic({

            id:
                "energy-balance",

            number: 15,

            module: 4,

            title:
                "Energy Balance, Metabolism & Weight Change",

            description:
                "Understand energy intake, energy expenditure, basal metabolism, thermic effect, physical activity and the limits of simple calorie-balance models.",

            objectives: [

                "Define energy balance.",

                "Identify major components of energy expenditure.",

                "Explain positive and negative energy balance.",

                "Recognize factors that influence resting energy expenditure.",

                "Explain why weight change is not perfectly predicted by a fixed calorie rule."

            ],

            facts: [

                [
                    "Energy balance",
                    "Relationship between energy intake and energy expenditure over time."
                ],

                [
                    "Resting energy expenditure",
                    "Energy used to maintain basic physiological functions at rest."
                ],

                [
                    "Thermic effect of food",
                    "Energy required for digestion, absorption and metabolism of food."
                ],

                [
                    "Physical activity",
                    "Variable component of energy expenditure arising from movement and exercise."
                ],

                [
                    "Positive energy balance",
                    "Energy intake exceeds expenditure over time."
                ],

                [
                    "Negative energy balance",
                    "Energy expenditure exceeds intake over time."
                ],

                [
                    "Adaptive thermogenesis",
                    "Metabolic adaptation that can alter energy expenditure in response to changes in intake, weight or environment."
                ]

            ],

            sections: [

                section(

                    "COMPONENTS",

                    "Where Energy Goes",

                    [

                        "Total energy expenditure includes resting metabolic needs, physical activity and the thermic effect of food, along with additional demands such as growth, pregnancy, fever or tissue repair.",

                        "Resting energy expenditure is influenced by body size, lean mass, age, hormones, illness and genetics.",

                        "Physical activity is often the most variable component between individuals and across days."

                    ]

                ),

                section(

                    "BALANCE",

                    "Positive and Negative Energy Balance",

                    [

                        "When energy intake chronically exceeds expenditure, stored body energy generally increases. When expenditure exceeds intake, stored energy is mobilized.",

                        "However, body weight does not change in a perfectly linear way because energy expenditure adapts as body size and intake change.",

                        "Short-term scale changes can also reflect fluid, glycogen and gastrointestinal contents rather than true fat gain or loss."

                    ]

                ),

                section(

                    "CLINICAL CONTEXT",

                    "Disease Can Change Energy Needs",

                    [

                        "Fever, severe infection, trauma and other catabolic conditions can increase energy expenditure, while immobility can decrease activity-related expenditure.",

                        "Overfeeding can worsen hyperglycemia, carbon dioxide production and fat accumulation, while underfeeding can worsen loss of lean tissue and delayed recovery.",

                        "Clinical energy targets are therefore individualized and may be estimated with equations or measured with specialized methods such as indirect calorimetry."

                    ]

                )

            ],

            clinical: {

                title:
                    "Rapid Weight Change",

                scenario:
                    "A patient gains 2 kg in 48 hours after receiving large amounts of intravenous fluid.",

                connection:
                    "Such rapid change is more consistent with fluid gain than new body fat, illustrating why scale weight must be interpreted with clinical context."

            },

            memory: [

                "Energy balance = intake versus expenditure over time.",

                "Short-term weight change can be mostly water.",

                "Resting metabolism + activity + thermic effect = major energy-expenditure components."

            ],

            traps: [

                "A single day's calorie imbalance does not translate directly into a fixed amount of fat change.",

                "Rapid hospital weight change often reflects fluid shifts.",

                "Energy needs can change during illness."

            ],

            summary: [

                "Energy balance compares intake and expenditure.",

                "Resting metabolism is a major expenditure component.",

                "Activity varies substantially among people.",

                "Positive balance tends to increase stored energy.",

                "Negative balance mobilizes stored energy.",

                "Weight changes are affected by fluid and metabolic adaptation."

            ]

        }),


        topic({

            id:
                "bmi-body-composition",

            number: 16,

            module: 4,

            title:
                "BMI, Body Composition & Weight Assessment",

            description:
                "Calculate BMI and percent weight change while understanding the limits of BMI and the importance of body composition and clinical context.",

            objectives: [

                "Calculate BMI from metric measurements.",

                "Explain what BMI can and cannot assess.",

                "Differentiate body weight from body composition.",

                "Calculate percent weight change.",

                "Recognize unintentional weight loss as a nutrition-risk clue."

            ],

            facts: [

                [
                    "BMI",
                    "Body mass index, calculated as weight in kilograms divided by height in meters squared."
                ],

                [
                    "Body composition",
                    "Relative amounts of fat mass, lean tissue, bone and body water."
                ],

                [
                    "Lean body mass",
                    "Body mass excluding most stored fat; includes muscle, organs, bone and body water."
                ],

                [
                    "Unintentional weight loss",
                    "Weight loss not intentionally pursued, which can signal poor intake, disease or malabsorption."
                ],

                [
                    "Percent weight change",
                    "Change in body weight expressed as a percentage of the previous or usual body weight."
                ]

            ],

            formulas: [

                "BMI = weight (kg) ÷ height (m)²",

                "% weight change = (usual weight − current weight) ÷ usual weight × 100"

            ],

            sections: [

                section(

                    "BMI",

                    "A Screening Tool, Not a Complete Diagnosis",

                    [

                        "BMI relates body weight to height and is widely used as a population and clinical screening measure.",

                        "It does not directly measure body fat, muscle mass, edema distribution or fat location. Athletes, older adults, people with edema and individuals with unusual body composition may therefore be misclassified.",

                        "BMI should be interpreted together with weight history, physical examination, functional status, disease and other assessment data."

                    ]

                ),

                section(

                    "BODY COMPOSITION",

                    "Weight Can Change Without Equivalent Fat Change",

                    [

                        "Body weight includes fat, lean tissue, bone, water and gastrointestinal contents.",

                        "A patient can lose muscle while gaining fluid and show little change on the scale.",

                        "This is why nutrition-focused physical assessment and strength/function measures can add information beyond body weight alone."

                    ]

                ),

                section(

                    "WEIGHT HISTORY",

                    "Unintentional Loss Is Clinically Important",

                    [

                        "The amount and speed of unintentional weight loss can provide important clues about nutrition risk.",

                        "Percent weight change allows comparison across people of different body sizes.",

                        "Rapid weight change must still be interpreted for possible fluid shifts, especially in hospitalized patients."

                    ]

                )

            ],

            worked: [

                worked(

                    "BMI",

                    "A patient weighs 72 kg and is 1.70 m tall. Calculate BMI.",

                    [

                        "Height squared = 1.70 × 1.70 = 2.89.",

                        "BMI = 72 ÷ 2.89 = 24.9."

                    ],

                    "BMI ≈ 24.9 kg/m²"

                ),

                worked(

                    "Percent Weight Loss",

                    "Usual weight is 80 kg and current weight is 72 kg. Calculate percent weight loss.",

                    [

                        "Weight loss = 80 − 72 = 8 kg.",

                        "8 ÷ 80 × 100 = 10%."

                    ],

                    "10% weight loss"

                )

            ],

            practice: [

                practice(

                    "A patient weighs 90 kg and is 1.80 m tall. Calculate BMI.",

                    "About 27.8 kg/m².",

                    [

                        "1.80² = 3.24.",

                        "90 ÷ 3.24 = 27.78."

                    ]

                ),

                practice(

                    "Usual weight is 70 kg and current weight is 63 kg. Calculate percent weight loss.",

                    "10%.",

                    [

                        "Loss = 7 kg.",

                        "7 ÷ 70 × 100 = 10%."

                    ]

                )

            ],

            clinical: {

                title:
                    "Edema Masks Weight Loss",

                scenario:
                    "A patient with severe illness has edema but obvious muscle wasting and poor intake.",

                connection:
                    "Fluid retention can hide loss of lean tissue, so body weight and BMI alone may underestimate malnutrition risk."

            },

            memory: [

                "BMI = kg ÷ m².",

                "Weight ≠ body composition.",

                "% weight loss uses usual weight in the denominator."

            ],

            traps: [

                "BMI does not directly measure body fat.",

                "Edema can artificially increase body weight.",

                "Percent weight change should use the correct baseline weight."

            ],

            summary: [

                "BMI relates weight to height.",

                "BMI is a screening tool with limitations.",

                "Body composition provides different information from body weight.",

                "Unintentional weight loss can signal nutrition risk.",

                "Fluid status must be considered when interpreting weight."

            ],

            questions: [

                {

                    id:
                        "bmi1",

                    type:
                        "numeric",

                    q:
                        "A patient weighs 64 kg and is 1.60 m tall. What is BMI?",

                    answer:
                        25,

                    tolerance:
                        0.05,

                    unit:
                        "kg/m²",

                    explanation:
                        "1.60² = 2.56; 64 ÷ 2.56 = 25."

                },

                {

                    id:
                        "bmi2",

                    type:
                        "numeric",

                    q:
                        "Usual weight is 100 kg and current weight is 90 kg. What percent of usual body weight was lost?",

                    answer:
                        10,

                    tolerance:
                        0.05,

                    unit:
                        "%",

                    explanation:
                        "(100 − 90) ÷ 100 × 100 = 10%."

                }

            ],

            tags: [

                "Calculation",

                "Assessment",

                "Clinical"

            ]

        }),


        topic({

            id:
                "nutrition-assessment",

            number: 17,

            module: 4,

            title:
                "Nutrition Screening, Assessment & Malnutrition",

            description:
                "Learn the difference between nutrition screening and full assessment and integrate intake, weight history, physical findings, function and disease severity.",

            objectives: [

                "Differentiate nutrition screening and assessment.",

                "Identify major components of nutrition assessment.",

                "Recognize common malnutrition risk factors.",

                "Explain why albumin is not a stand-alone nutrition marker.",

                "Describe the role of a registered dietitian nutritionist."

            ],

            facts: [

                [
                    "Nutrition screening",
                    "Rapid process used to identify people who may be at nutrition risk and need further assessment."
                ],

                [
                    "Nutrition assessment",
                    "Comprehensive evaluation of dietary intake, weight history, clinical status, physical findings and related data."
                ],

                [
                    "Malnutrition",
                    "Nutrition imbalance or deficiency that adversely affects body composition, function or clinical outcomes."
                ],

                [
                    "Nutrition-focused physical exam",
                    "Physical examination for signs of muscle loss, fat loss, fluid accumulation and selected micronutrient findings."
                ],

                [
                    "Registered dietitian nutritionist",
                    "Credentialed nutrition professional who performs nutrition assessment and medical nutrition therapy within scope and setting."
                ],

                [
                    "Inflammation",
                    "Biological response that can alter metabolism, fluid balance and many laboratory values used in nutrition assessment."
                ]

            ],

            sections: [

                section(

                    "SCREENING",

                    "Identify Risk Early",

                    [

                        "Nutrition screening is intended to be fast and sensitive. Common clues include poor intake, recent weight loss, swallowing difficulty, severe illness or conditions that impair digestion and absorption.",

                        "A positive screen does not diagnose malnutrition; it signals the need for more detailed assessment.",

                        "Early recognition is important because nutrition problems can worsen during hospitalization if intake remains poor."

                    ]

                ),

                section(

                    "ASSESSMENT",

                    "Use Multiple Data Sources",

                    [

                        "A full nutrition assessment considers food intake, weight history, gastrointestinal symptoms, functional status, physical examination, medications, disease severity and laboratory data.",

                        "No single measure is sufficient in all patients. For example, body weight can be distorted by edema and laboratory values can be altered by inflammation or organ dysfunction.",

                        "The best interpretation combines trends and clinical context."

                    ]

                ),

                section(

                    "LABS",

                    "Albumin Is Not a Stand-Alone Nutrition Diagnosis",

                    [

                        "Serum albumin can fall during inflammation, infection, liver disease, fluid shifts and other conditions independent of actual dietary protein intake.",

                        "Therefore, albumin alone should not be used to diagnose malnutrition or determine protein intake adequacy.",

                        "Laboratory results remain useful, but they should be interpreted according to what each marker actually reflects."

                    ]

                )

            ],

            clinical: {

                title:
                    "High-Risk Admission",

                scenario:
                    "A patient reports eating less than half of normal intake for two weeks and has visible muscle loss.",

                connection:
                    "These findings justify a more complete nutrition assessment because reduced intake and loss of lean tissue are major nutrition concerns."

            },

            memory: [

                "SCREEN = find risk quickly.",

                "ASSESS = investigate deeply.",

                "Albumin is affected by inflammation and is not a stand-alone nutrition marker."

            ],

            traps: [

                "Do not diagnose malnutrition from BMI alone.",

                "Do not use albumin alone as proof of protein deficiency.",

                "A positive screen means further assessment is needed, not that malnutrition is already confirmed."

            ],

            summary: [

                "Screening identifies people at nutrition risk.",

                "Assessment combines dietary, anthropometric, physical and clinical information.",

                "Weight and labs can be distorted by fluid and inflammation.",

                "Malnutrition can occur at any body size.",

                "Interprofessional nutrition care often includes the registered dietitian nutritionist."

            ]

        }),


        // ====================================================================
        // MODULE 5
        // ====================================================================

        topic({

            id:
                "dietary-guidance",

            number: 18,

            module: 5,

            title:
                "Healthy Eating Patterns, Variety & Nutrient Density",

            description:
                "Build balanced dietary patterns using variety, proportionality, nutrient density and minimally processed food choices.",

            objectives: [

                "Explain what a dietary pattern is.",

                "Describe nutrient density.",

                "Explain the role of fruits, vegetables, whole grains, protein foods and dairy or alternatives.",

                "Discuss limits of single-food thinking.",

                "Apply dietary-pattern thinking to nursing education."

            ],

            facts: [

                [
                    "Dietary pattern",
                    "Overall combination of foods and beverages habitually consumed over time."
                ],

                [
                    "Nutrient density",
                    "Amount of beneficial nutrients relative to energy content."
                ],

                [
                    "Whole grain",
                    "Grain containing bran, germ and endosperm in their original proportions."
                ],

                [
                    "Refined grain",
                    "Grain processed to remove some bran and germ, changing fiber and micronutrient content."
                ],

                [
                    "Variety",
                    "Eating foods from different groups and different foods within groups to improve nutrient coverage."
                ],

                [
                    "Moderation",
                    "Balancing foods and portions so that no single item or nutrient dominates intake excessively."
                ]

            ],

            sections: [

                section(

                    "PATTERNS",

                    "Health Is Shaped by the Whole Diet",

                    [

                        "A dietary pattern captures repeated food choices over days, weeks and years rather than judging one meal in isolation.",

                        "Patterns emphasizing vegetables, fruits, whole grains, legumes, nuts, seeds, appropriate protein foods and unsaturated fats can provide fiber and a broad range of micronutrients.",

                        "The exact foods can vary according to culture, budget, preference, allergies, ethics and medical needs."

                    ]

                ),

                section(

                    "NUTRIENT DENSITY",

                    "Choose Foods That Deliver More Than Calories",

                    [

                        "Nutrient-dense foods provide substantial vitamins, minerals, fiber or protein for their energy content.",

                        "Highly processed foods can still fit into an overall diet, but frequent intake of foods high in sodium, added sugars or saturated fat can crowd out nutrient-dense options.",

                        "Food quality and total quantity both matter."

                    ]

                ),

                section(

                    "PATIENT EDUCATION",

                    "Make Advice Practical",

                    [

                        "Nutrition education works best when it is specific, culturally respectful and achievable.",

                        "Rather than telling a patient to simply eat healthy, useful counseling identifies realistic substitutions, meal timing, affordable choices and barriers such as transportation, cooking ability or food insecurity.",

                        "Behavior change is more sustainable when recommendations fit the person's goals and daily life."

                    ]

                )

            ],

            clinical: {

                title:
                    "Food Insecurity",

                scenario:
                    "A patient with diabetes cannot consistently afford fresh foods and skips meals near the end of each month.",

                connection:
                    "Effective nutrition education must address access and affordability; idealized advice that ignores food insecurity is unlikely to be useful or safe."

            },

            memory: [

                "Pattern > one food.",

                "Variety improves nutrient coverage.",

                "Good counseling must fit culture, budget and access."

            ],

            traps: [

                "No single food determines overall diet quality.",

                "Healthy eating does not require one specific cultural diet.",

                "Nutrition counseling should not ignore food insecurity or affordability."

            ],

            summary: [

                "Dietary patterns reflect repeated choices over time.",

                "Nutrient density helps evaluate food quality.",

                "Variety supports nutrient adequacy.",

                "Whole grains retain bran, germ and endosperm.",

                "Patient-centered counseling must be practical and culturally respectful."

            ]

        }),


        topic({

            id:
                "food-labels",

            number: 19,

            module: 5,

            title:
                "Nutrition Facts Labels, Serving Sizes & Ingredient Lists",

            description:
                "Read food labels accurately, calculate totals from multiple servings and use ingredient lists to compare foods.",

            objectives: [

                "Identify serving size and servings per container.",

                "Calculate nutrient intake from multiple servings.",

                "Interpret percent Daily Value conceptually.",

                "Use ingredient-list order correctly.",

                "Recognize common label-reading mistakes."

            ],

            facts: [

                [
                    "Serving size",
                    "Standardized amount used to report nutrient information on a Nutrition Facts label."
                ],

                [
                    "Servings per container",
                    "Number of labeled servings in the entire package."
                ],

                [
                    "Percent Daily Value",
                    "Percentage showing how much one serving contributes to a reference daily amount for a nutrient."
                ],

                [
                    "Ingredient list",
                    "List of ingredients generally ordered from greatest to least by weight."
                ],

                [
                    "Added sugars",
                    "Sugars added during food processing or preparation rather than naturally occurring within intact foods."
                ],

                [
                    "Sodium",
                    "Electrolyte commonly present in substantial amounts in many processed and restaurant foods."
                ]

            ],

            formulas: [

                "Total nutrient eaten = nutrient per serving × number of servings eaten"

            ],

            sections: [

                section(

                    "SERVING SIZE",

                    "Start at the Top",

                    [

                        "The nutrient values on a label apply to the labeled serving size, not automatically to the entire package.",

                        "If a person consumes two servings, calories, carbohydrate, fat, protein, sodium and other listed nutrients are generally doubled.",

                        "Serving size is a reporting reference and is not necessarily an individualized recommendation for how much a specific person should eat."

                    ]

                ),

                section(

                    "DAILY VALUE",

                    "A Reference Tool",

                    [

                        "Percent Daily Value can help compare foods and identify whether one serving contributes relatively little or a substantial amount of a nutrient.",

                        "It is based on standardized reference values rather than a personalized prescription.",

                        "Patients with medical conditions may have individualized sodium, potassium, protein, carbohydrate or other targets that differ from general label references."

                    ]

                ),

                section(

                    "INGREDIENTS",

                    "Listed by Weight",

                    [

                        "Ingredient lists are generally ordered from greatest to least by weight at the time of manufacture.",

                        "This helps identify the dominant ingredients and potential allergens.",

                        "Claims on the front of a package should be checked against the Nutrition Facts panel and ingredient list rather than accepted at face value."

                    ]

                )

            ],

            worked: [

                worked(

                    "Multiple Servings",

                    "A label lists 220 kcal and 300 mg sodium per serving. You eat 2.5 servings. Calculate totals.",

                    [

                        "Calories: 220 × 2.5 = 550 kcal.",

                        "Sodium: 300 × 2.5 = 750 mg."

                    ],

                    "550 kcal and 750 mg sodium"

                )

            ],

            practice: [

                practice(

                    "A cereal has 180 kcal per serving. You eat 1.5 servings. How many calories did you consume?",

                    "270 kcal.",

                    [

                        "180 × 1.5 = 270 kcal."

                    ]

                ),

                practice(

                    "A soup has 640 mg sodium per serving and the can contains 2 servings. How much sodium is in the entire can?",

                    "1280 mg.",

                    [

                        "640 × 2 = 1280 mg."

                    ]

                )

            ],

            clinical: {

                title:
                    "Hidden Sodium",

                scenario:
                    "A patient with hypertension believes a canned soup is low sodium because the front of the package looks healthy.",

                connection:
                    "Checking serving size and sodium per serving can reveal a much higher total intake if the whole can is consumed."

            },

            memory: [

                "Label numbers are PER SERVING.",

                "Ingredients are listed greatest to least by weight.",

                "%DV is a reference, not a personalized prescription."

            ],

            traps: [

                "Do not assume one package equals one serving.",

                "Front-of-package marketing claims do not replace label reading.",

                "Percent Daily Value is not individualized to every patient."

            ],

            summary: [

                "Always identify serving size first.",

                "Multiply nutrients by servings actually eaten.",

                "%DV provides a standardized comparison tool.",

                "Ingredients are ordered by weight.",

                "Clinical targets may differ from general label references."

            ],

            questions: [

                {

                    id:
                        "label1",

                    type:
                        "numeric",

                    q:
                        "A food has 250 kcal per serving. You eat 3 servings. How many calories did you consume?",

                    answer:
                        750,

                    tolerance:
                        0.01,

                    unit:
                        "kcal",

                    explanation:
                        "250 × 3 = 750 kcal."

                }

            ],

            tags: [

                "Calculation",

                "Practical",

                "High Yield"

            ]

        }),


        topic({

            id:
                "supplements-herbals",

            number: 20,

            module: 5,

            title:
                "Dietary Supplements, Fortification & Safety",

            description:
                "Understand when supplements may be useful, why more is not always better and how medications and supplements can interact.",

            objectives: [

                "Differentiate foods, fortified foods and supplements.",

                "Explain deficiency-treatment versus routine high-dose supplementation.",

                "Recognize toxicity and interaction risks.",

                "Explain why supplement quality varies.",

                "Use a food-first framework while recognizing clinical exceptions."

            ],

            facts: [

                [
                    "Supplement",
                    "Product intended to add nutrients or other dietary substances to usual intake."
                ],

                [
                    "Fortification",
                    "Addition of nutrients to food, often to improve population nutrient intake."
                ],

                [
                    "Bioavailability",
                    "Proportion of an ingested nutrient that is absorbed and available for use or storage."
                ],

                [
                    "Tolerable upper intake level",
                    "Reference level representing the highest average daily intake unlikely to pose risk for most people in a defined group."
                ],

                [
                    "Drug-nutrient interaction",
                    "Interaction in which a medication affects nutrient status or a nutrient/supplement alters medication action, absorption or metabolism."
                ]

            ],

            sections: [

                section(

                    "WHEN SUPPLEMENTS HELP",

                    "Correcting Gaps and Treating Deficiency",

                    [

                        "Supplements can be useful when diet alone cannot meet needs, when a deficiency is documented, when absorption is impaired or during life stages with specific nutrient requirements.",

                        "Examples include prescribed iron for iron deficiency or vitamin B12 replacement when absorption is inadequate.",

                        "The appropriate dose depends on the nutrient, reason for treatment and patient condition."

                    ]

                ),

                section(

                    "RISKS",

                    "More Is Not Always Better",

                    [

                        "High-dose supplements can cause toxicity, compete with absorption of other nutrients or interact with medications.",

                        "Fat-soluble vitamins and some minerals are especially capable of accumulating when intake is excessive, though water-soluble nutrients can also cause adverse effects at high doses.",

                        "A supplement label should not be interpreted as proof that a product is necessary, effective or appropriate for every patient."

                    ]

                ),

                section(

                    "MEDICATIONS",

                    "Ask About All Products",

                    [

                        "Patients may not consider herbal products, energy products or vitamins to be medications, so clinicians should ask specifically about them.",

                        "Some supplements alter bleeding risk, blood pressure, glucose, sedation or drug metabolism.",

                        "Medication-supplement questions should be reviewed using reliable clinical resources and the healthcare team."

                    ]

                )

            ],

            clinical: {

                title:
                    "Supplement Reconciliation",

                scenario:
                    "A patient taking multiple prescription medications also uses several herbal and vitamin products but did not list them on the medication history.",

                connection:
                    "Supplement reconciliation matters because nutrients and herbal products can alter medication effects or create toxicity."

            },

            memory: [

                "Supplement ≠ automatically safe.",

                "Deficiency treatment is different from routine megadosing.",

                "Always ask about vitamins, minerals and herbals during medication review."

            ],

            traps: [

                "Natural does not automatically mean safe.",

                "Water-soluble vitamins are not completely free of toxicity risk.",

                "Supplements can interact with prescription medications."

            ],

            summary: [

                "Supplements can correct documented or predictable nutrient gaps.",

                "High doses can cause toxicity.",

                "Fortified foods add nutrients to the food supply.",

                "Bioavailability varies among nutrients and products.",

                "Medication-supplement interactions are clinically important."

            ]

        }),


        // ====================================================================
        // MODULE 6
        // ====================================================================

        topic({

            id:
                "pregnancy-lactation",

            number: 21,

            module: 6,

            title:
                "Pregnancy & Lactation Nutrition",

            description:
                "Understand physiologic changes, nutrient priorities, food safety and the importance of individualized pregnancy and breastfeeding nutrition.",

            objectives: [

                "Explain why nutrient needs change during pregnancy.",

                "Describe the importance of folate, iron, iodine and protein.",

                "Explain appropriate weight-gain counseling conceptually.",

                "Recognize major food-safety concerns in pregnancy.",

                "Describe nutritional demands of lactation."

            ],

            facts: [

                [
                    "Folate",
                    "B vitamin essential for DNA synthesis and early neural-tube development."
                ],

                [
                    "Iron",
                    "Mineral needed for expansion of maternal red-cell mass and fetal development."
                ],

                [
                    "Iodine",
                    "Mineral required for thyroid hormone production and neurodevelopment."
                ],

                [
                    "Lactation",
                    "Production of breast milk, which increases maternal energy and nutrient demands."
                ],

                [
                    "Neural tube",
                    "Embryonic structure that develops into the brain and spinal cord."
                ],

                [
                    "Foodborne illness",
                    "Illness caused by harmful microorganisms or toxins in food, with some pathogens posing special pregnancy risks."
                ]

            ],

            sections: [

                section(

                    "PREGNANCY",

                    "Nutrition Supports Maternal and Fetal Growth",

                    [

                        "Pregnancy increases demands for tissue growth, blood-volume expansion and fetal development. Nutrient needs rise, but the increase is not simply eating for two in a literal sense.",

                        "Folate is especially important around conception and early pregnancy because the neural tube closes early. Iron demand rises as maternal blood volume expands and fetal iron stores develop.",

                        "Iodine, protein, choline and many other nutrients also support normal development."

                    ]

                ),

                section(

                    "FOOD SAFETY",

                    "Pregnancy Changes the Risk Conversation",

                    [

                        "Certain foodborne infections can be especially serious during pregnancy, so safe food handling, appropriate cooking and avoidance of high-risk foods are important.",

                        "Alcohol exposure during pregnancy can harm fetal development; no amount should be assumed safe without individualized medical guidance.",

                        "Medication, herbal and supplement use should be reviewed because pregnancy changes risk-benefit considerations."

                    ]

                ),

                section(

                    "LACTATION",

                    "Milk Production Requires Nutrients and Energy",

                    [

                        "Lactation transfers water, energy, protein, fat, carbohydrate, vitamins and minerals into breast milk.",

                        "Maternal nutrient status influences some milk components more than others, and maternal diet must support both recovery and ongoing milk production.",

                        "Hydration needs rise with milk production, but forcing excessive fluid beyond thirst generally does not automatically increase milk supply."

                    ]

                )

            ],

            clinical: {

                title:
                    "Preconception Folate",

                scenario:
                    "A patient planning pregnancy asks why folate matters before conception.",

                connection:
                    "Neural-tube development begins very early, so adequate folate status is important before many people know they are pregnant."

            },

            memory: [

                "Pregnancy priorities: folate, iron, iodine, protein and overall nutrient adequacy.",

                "Neural tube develops early → folate matters before conception.",

                "Pregnancy nutrition is more than simply adding calories."

            ],

            traps: [

                "Do not use eating for two as a literal doubling of food intake.",

                "Supplements in pregnancy should not be self-megadosed.",

                "Food safety is especially important because some infections pose fetal risk."

            ],

            summary: [

                "Pregnancy increases needs for growth and blood-volume expansion.",

                "Folate supports neural-tube development.",

                "Iron supports maternal and fetal blood needs.",

                "Food safety is a major pregnancy concern.",

                "Lactation increases energy, nutrient and fluid demands."

            ]

        }),


        topic({

            id:
                "infancy-childhood",

            number: 22,

            module: 6,

            title:
                "Infant & Childhood Nutrition",

            description:
                "Learn how rapid growth, feeding development, iron status, food safety and responsive feeding shape nutrition in infancy and childhood.",

            objectives: [

                "Explain why infants have high nutrient needs relative to body size.",

                "Describe breast milk and infant formula as primary infant feeding sources.",

                "Explain transition to complementary foods.",

                "Recognize iron and vitamin D as common nutrient considerations.",

                "Describe responsive feeding and choking prevention."

            ],

            facts: [

                [
                    "Complementary foods",
                    "Foods introduced in addition to breast milk or formula when developmentally appropriate."
                ],

                [
                    "Responsive feeding",
                    "Caregiver approach that recognizes and responds appropriately to hunger and fullness cues."
                ],

                [
                    "Growth chart",
                    "Tool used to monitor growth patterns over time compared with reference populations."
                ],

                [
                    "Iron deficiency",
                    "Common pediatric nutrient deficiency that can affect red-cell production and development."
                ],

                [
                    "Choking hazard",
                    "Food or object capable of obstructing the airway, especially important in young children."
                ],

                [
                    "Food allergy",
                    "Immune-mediated adverse reaction to a food protein."
                ]

            ],

            sections: [

                section(

                    "INFANCY",

                    "Rapid Growth Requires Nutrient-Dense Feeding",

                    [

                        "Infants grow rapidly and have high nutrient needs relative to stomach size and body weight.",

                        "Breast milk or appropriately prepared infant formula provides the major source of nutrition early in life, with feeding plans individualized when medical conditions are present.",

                        "Growth trends are more informative than a single percentile because healthy children can grow along different trajectories."

                    ]

                ),

                section(

                    "COMPLEMENTARY FEEDING",

                    "Add Foods as Development Advances",

                    [

                        "Complementary foods are introduced when the infant is developmentally ready while milk feeding continues.",

                        "Iron-rich foods become important because infant iron stores decline over time and rapid growth increases demand.",

                        "Texture and food shape must match developmental ability to reduce choking risk."

                    ]

                ),

                section(

                    "CHILDHOOD",

                    "Build Skills and Variety",

                    [

                        "Children learn eating behaviors from repeated exposure, family patterns and caregiver modeling.",

                        "Responsive feeding separates caregiver and child roles: caregivers provide appropriate foods and structure while children respond to internal hunger and fullness cues.",

                        "Pressure, restriction and food rewards can sometimes interfere with self-regulation and create conflict around eating."

                    ]

                )

            ],

            clinical: {

                title:
                    "Growth Faltering",

                scenario:
                    "A toddler's weight crosses downward through multiple growth percentiles and intake is very limited.",

                connection:
                    "A changing growth trajectory combined with poor intake warrants further evaluation rather than relying on a single weight measurement."

            },

            memory: [

                "Infants need nutrient-dense feeding because stomachs are small and growth is fast.",

                "Watch trends on growth charts, not one point alone.",

                "Responsive feeding respects hunger and fullness cues."

            ],

            traps: [

                "A single percentile does not diagnose poor growth.",

                "Young-child food texture must consider choking risk.",

                "Iron needs become especially important as infant stores decline."

            ],

            summary: [

                "Infancy is a period of rapid growth.",

                "Milk feeding is central early in infancy.",

                "Complementary foods are added with developmental readiness.",

                "Iron-rich foods are important during transition.",

                "Growth trends and responsive feeding guide childhood nutrition."

            ]

        }),


        topic({

            id:
                "adolescence-aging",

            number: 23,

            module: 6,

            title:
                "Adolescence, Adulthood & Healthy Aging",

            description:
                "Connect nutrition with growth spurts, chronic-disease prevention, sarcopenia, appetite changes and functional health across adulthood.",

            objectives: [

                "Explain nutrient priorities during adolescence.",

                "Connect adult dietary patterns with chronic-disease risk.",

                "Define sarcopenia conceptually.",

                "Identify factors that increase malnutrition risk in older adults.",

                "Explain why protein, activity and hydration matter in aging."

            ],

            facts: [

                [
                    "Adolescence",
                    "Life stage marked by rapid growth, puberty and increased nutrient demands."
                ],

                [
                    "Sarcopenia",
                    "Age-associated decline in skeletal muscle mass, strength and function."
                ],

                [
                    "Functional status",
                    "Ability to perform activities and physical tasks important for independent living."
                ],

                [
                    "Polypharmacy",
                    "Use of multiple medications, which can influence appetite, taste, gastrointestinal function and nutrient status."
                ],

                [
                    "Food insecurity",
                    "Limited or uncertain access to adequate nutritious food."
                ],

                [
                    "Anorexia of aging",
                    "Reduced appetite that can occur with aging because of physiological, social and medical factors."
                ]

            ],

            sections: [

                section(

                    "ADOLESCENCE",

                    "Growth, Bone and Iron",

                    [

                        "Adolescence involves rapid gains in height, bone mass, lean tissue and reproductive development.",

                        "Iron needs can be substantial because of blood-volume expansion, growth and menstrual losses in many adolescents. Calcium, vitamin D, protein and overall energy adequacy support bone and tissue growth.",

                        "Skipping meals, restrictive dieting and disordered eating can compromise growth and mental health."

                    ]

                ),

                section(

                    "ADULTHOOD",

                    "Nutrition and Long-Term Risk",

                    [

                        "Adult dietary patterns influence cardiovascular, metabolic, skeletal and gastrointestinal health over decades.",

                        "Maintaining physical activity and adequate nutrient intake supports preservation of lean tissue and functional capacity.",

                        "Nutrition goals should evolve with medical conditions, medications, culture and lifestyle rather than relying on one universal plan."

                    ]

                ),

                section(

                    "OLDER ADULTS",

                    "Preserve Function, Hydration and Intake",

                    [

                        "Older adults may experience reduced appetite, dental problems, swallowing difficulty, social isolation, limited mobility and medication effects that reduce intake.",

                        "Sarcopenia increases fall risk and loss of independence. Adequate protein and resistance-type activity can help preserve muscle when medically appropriate.",

                        "Thirst perception can also decline with age, making hydration monitoring important."

                    ]

                )

            ],

            clinical: {

                title:
                    "Sarcopenia Risk",

                scenario:
                    "An older adult has unintentional weight loss, weak grip strength and difficulty rising from a chair.",

                connection:
                    "Loss of muscle mass and function may reflect sarcopenia and nutrition risk, requiring assessment of intake, illness and physical activity."

            },

            memory: [

                "Adolescence = growth + bone + iron demands.",

                "Older adulthood = protect muscle, hydration and function.",

                "Function can reveal nutrition problems that body weight alone misses."

            ],

            traps: [

                "Weight stability does not guarantee preserved muscle mass.",

                "Older adults can be dehydrated even without strong thirst.",

                "Restrictive dieting during adolescence can interfere with growth."

            ],

            summary: [

                "Adolescence has high growth-related nutrient demands.",

                "Adult dietary patterns affect chronic-disease risk.",

                "Sarcopenia involves loss of muscle and function.",

                "Older adults face multiple barriers to adequate intake.",

                "Hydration and functional status matter across aging."

            ]

        }),


        // ====================================================================
        // MODULE 7
        // ====================================================================

        topic({

            id:
                "diabetes-nutrition",

            number: 24,

            module: 7,

            title:
                "Diabetes Nutrition & Carbohydrate Management",

            description:
                "Connect carbohydrate intake, glucose monitoring, medication timing, fiber, meal consistency and individualized diabetes nutrition planning.",

            objectives: [

                "Explain how carbohydrate affects post-meal glucose.",

                "Describe carbohydrate consistency and counting conceptually.",

                "Explain why fiber and food quality matter.",

                "Connect medications with meal timing and hypoglycemia risk.",

                "Recognize that diabetes meal plans must be individualized."

            ],

            facts: [

                [
                    "Carbohydrate counting",
                    "Meal-planning method that tracks grams of carbohydrate consumed."
                ],

                [
                    "Hypoglycemia",
                    "Blood glucose below the desired range, which can cause autonomic and neurologic symptoms."
                ],

                [
                    "Hyperglycemia",
                    "Blood glucose above the desired range."
                ],

                [
                    "Insulin",
                    "Hormone that promotes glucose uptake and storage and lowers circulating blood glucose."
                ],

                [
                    "Glycemic response",
                    "Change in blood glucose after carbohydrate-containing food."
                ],

                [
                    "Meal consistency",
                    "Keeping carbohydrate amount or meal timing reasonably consistent when this supports a medication or insulin regimen."
                ]

            ],

            sections: [

                section(

                    "CARBOHYDRATE",

                    "Carbohydrate Has the Largest Immediate Meal Effect on Glucose",

                    [

                        "Digestible carbohydrate is broken down into absorbable sugars, making carbohydrate amount a major determinant of post-meal glucose rise.",

                        "Carbohydrate counting can help coordinate intake with insulin or medication plans, especially when exact insulin-to-carbohydrate ratios are prescribed.",

                        "Fiber-rich carbohydrate sources can improve satiety and may produce a slower glycemic response than highly refined foods."

                    ]

                ),

                section(

                    "MEDICATION TIMING",

                    "Food and Medication Must Work Together",

                    [

                        "Some glucose-lowering therapies can cause hypoglycemia if meals are delayed, skipped or contain substantially less carbohydrate than expected.",

                        "Patients should understand how their specific medications interact with meals rather than using generic advice.",

                        "Glucose monitoring, symptoms and medication regimen guide individualized meal planning."

                    ]

                ),

                section(

                    "PATTERN",

                    "No Single Diabetes Diet",

                    [

                        "Effective diabetes nutrition can be built from many cultural dietary patterns.",

                        "Priorities often include appropriate energy intake, fiber-rich foods, adequate protein, unsaturated fats, reduced highly refined foods and attention to cardiovascular risk factors.",

                        "The plan should match glucose goals, medications, kidney function, food preferences and access."

                    ]

                )

            ],

            clinical: {

                title:
                    "Missed Meal With Insulin",

                scenario:
                    "A patient receives rapid-acting insulin and then eats very little because of nausea.",

                connection:
                    "Mismatch between insulin action and carbohydrate intake can increase hypoglycemia risk, so intake and medication timing must be coordinated."

            },

            memory: [

                "Carbohydrate amount strongly affects post-meal glucose.",

                "Medication + meal timing matters.",

                "There is no single universal diabetic diet."

            ],

            traps: [

                "People with diabetes do not need to eliminate all carbohydrate.",

                "Skipping meals can be dangerous with some insulin or medication regimens.",

                "Carbohydrate quality and total amount both matter."

            ],

            summary: [

                "Carbohydrate is a major driver of post-meal glucose.",

                "Carbohydrate counting can support insulin matching.",

                "Fiber-rich foods can support glucose and cardiovascular goals.",

                "Medication timing influences hypoglycemia risk.",

                "Diabetes nutrition should be individualized."

            ]

        }),


        topic({

            id:
                "cardiovascular-dash",

            number: 25,

            module: 7,

            title:
                "Cardiovascular Nutrition, Sodium & DASH-Style Patterns",

            description:
                "Understand dietary strategies that support blood pressure and lipid management, including sodium reduction and replacement of saturated fat with unsaturated fat.",

            objectives: [

                "Explain diet's role in blood-pressure management.",

                "Describe DASH-style eating patterns conceptually.",

                "Explain saturated versus unsaturated fat replacement.",

                "Identify common high-sodium food sources.",

                "Connect fiber-rich foods with cardiovascular health."

            ],

            facts: [

                [
                    "DASH",
                    "Dietary pattern emphasizing fruits, vegetables, whole grains, legumes, nuts, low-fat dairy or alternatives and other nutrient-dense foods to support blood-pressure control."
                ],

                [
                    "Saturated fat",
                    "Fatty acids without double bonds; replacing some sources with unsaturated fats can improve LDL cholesterol."
                ],

                [
                    "Unsaturated fat",
                    "Monounsaturated and polyunsaturated fats containing one or more double bonds."
                ],

                [
                    "Soluble fiber",
                    "Fiber that can form viscous gels and may help lower LDL cholesterol when included in an overall healthy pattern."
                ],

                [
                    "Sodium sensitivity",
                    "Variation among individuals in blood-pressure response to sodium intake."
                ],

                [
                    "Atherosclerosis",
                    "Arterial disease characterized by plaque formation within vessel walls."
                ]

            ],

            sections: [

                section(

                    "BLOOD PRESSURE",

                    "Dietary Pattern and Sodium Matter",

                    [

                        "Blood pressure is influenced by genetics, body weight, physical activity, alcohol, sodium, potassium, medications and other factors.",

                        "DASH-style dietary patterns emphasize fruits, vegetables, whole grains, legumes, nuts and other minimally processed foods and are often paired with sodium reduction.",

                        "Replacing highly processed, sodium-dense foods with lower-sodium whole foods can reduce sodium intake without requiring food to be bland."

                    ]

                ),

                section(

                    "LIPIDS",

                    "Replace, Do Not Just Remove",

                    [

                        "Cardiovascular nutrition focuses not only on lowering saturated fat but also on what replaces it.",

                        "Replacing saturated-fat calories with unsaturated fats can improve LDL cholesterol, whereas replacing them with highly refined carbohydrate may provide less benefit.",

                        "Soluble fiber from foods such as oats, barley, beans and some fruits can also support LDL reduction."

                    ]

                ),

                section(

                    "WHOLE PATTERN",

                    "Cardiovascular Risk Is Multifactorial",

                    [

                        "Diet works together with physical activity, smoking status, sleep, medications, blood pressure control, diabetes management and genetics.",

                        "A single nutrient should not be treated as the entire cardiovascular story.",

                        "Patient education should focus on sustainable substitutions that fit cultural and financial realities."

                    ]

                )

            ],

            clinical: {

                title:
                    "Hypertension",

                scenario:
                    "A patient eats restaurant meals most days and has persistently elevated blood pressure.",

                connection:
                    "Restaurant and processed foods can contribute substantial sodium, so label awareness and lower-sodium substitutions may support blood-pressure management."

            },

            memory: [

                "DASH = fruits + vegetables + whole grains + legumes/nuts + lower-sodium pattern.",

                "Replace saturated fat with unsaturated fat.",

                "Processed foods are often major sodium sources."

            ],

            traps: [

                "Sodium sensitivity varies among people.",

                "Removing fat without considering replacement can miss the point.",

                "Cardiovascular risk is not determined by cholesterol alone."

            ],

            summary: [

                "Dietary patterns can support blood-pressure control.",

                "Sodium reduction can be helpful, especially in salt-sensitive individuals.",

                "Replacing saturated with unsaturated fat can improve LDL cholesterol.",

                "Soluble fiber can support lipid goals.",

                "Overall cardiovascular risk is multifactorial."

            ]

        }),


        topic({

            id:
                "renal-nutrition",

            number: 26,

            module: 7,

            title:
                "Kidney Disease Nutrition: Protein, Sodium, Potassium & Phosphorus",

            description:
                "Understand why renal nutrition varies by kidney function, dialysis status, electrolyte levels, fluid balance and stage of disease.",

            objectives: [

                "Explain why kidney disease changes nutrition priorities.",

                "Describe the roles of sodium, potassium and phosphorus restrictions conceptually.",

                "Explain why protein needs differ before versus during dialysis.",

                "Recognize fluid management concerns.",

                "Avoid one-size-fits-all renal diet advice."

            ],

            facts: [

                [
                    "Chronic kidney disease",
                    "Progressive reduction in kidney structure or function lasting over time."
                ],

                [
                    "Dialysis",
                    "Therapy that removes selected wastes and fluid when kidney function is inadequate."
                ],

                [
                    "Hyperkalemia",
                    "Elevated serum potassium concentration that can cause dangerous cardiac effects."
                ],

                [
                    "Hyperphosphatemia",
                    "Elevated serum phosphorus concentration, common in advanced kidney failure."
                ],

                [
                    "Fluid restriction",
                    "Prescribed limitation of fluid intake used in selected patients with impaired fluid excretion."
                ],

                [
                    "Phosphate binder",
                    "Medication taken with meals to reduce intestinal absorption of dietary phosphorus."
                ]

            ],

            sections: [

                section(

                    "INDIVIDUALIZATION",

                    "There Is No Single Renal Diet",

                    [

                        "Nutrition recommendations depend on kidney function, serum electrolytes, protein losses, urine output, dialysis modality, diabetes status and overall nutrition status.",

                        "A patient with early kidney disease and normal potassium may not need the same restrictions as a patient with dialysis-dependent kidney failure and recurrent hyperkalemia.",

                        "Unnecessary restrictions can worsen intake and malnutrition."

                    ]

                ),

                section(

                    "ELECTROLYTES",

                    "Sodium, Potassium and Phosphorus",

                    [

                        "Sodium reduction can help control edema and blood pressure in many renal patients.",

                        "Potassium restriction is based on serum level, kidney function, medications and treatment plan rather than automatically applied to everyone with kidney disease.",

                        "Phosphorus may accumulate in advanced kidney failure and contribute to mineral-bone complications; management may include dietary changes and phosphate binders."

                    ]

                ),

                section(

                    "PROTEIN & DIALYSIS",

                    "Protein Needs Change With Treatment",

                    [

                        "In selected nondialysis chronic kidney disease patients, protein intake may be moderated to reduce metabolic burden while maintaining nutrition adequacy.",

                        "Dialysis causes amino-acid and protein losses and is associated with greater catabolic stress, so protein needs are often higher than in nondialysis care.",

                        "Exact targets require individualized renal nutrition assessment."

                    ]

                )

            ],

            clinical: {

                title:
                    "Hyperkalemia",

                scenario:
                    "A patient with advanced kidney disease has recurrent high serum potassium.",

                connection:
                    "Potassium intake, medications, dialysis adequacy and acid-base status may all need review; a generic high-potassium healthy diet could be inappropriate."

            },

            memory: [

                "Renal nutrition depends on LABS + STAGE + DIALYSIS + URINE OUTPUT.",

                "Do not automatically restrict potassium in every CKD patient.",

                "Dialysis can increase protein needs because of losses and catabolism."

            ],

            traps: [

                "There is no one renal diet for all stages.",

                "Potassium restrictions should not be assumed without clinical indication.",

                "Protein goals differ between nondialysis and dialysis care."

            ],

            summary: [

                "Kidneys regulate fluid, electrolytes and waste handling.",

                "Renal nutrition is individualized.",

                "Sodium often affects edema and blood pressure.",

                "Potassium and phosphorus recommendations depend on labs and disease stage.",

                "Protein needs change with dialysis status."

            ]

        }),


        topic({

            id:
                "gi-disorders",

            number: 27,

            module: 7,

            title:
                "GI Disorders, Malabsorption, Lactose Intolerance & Celiac Disease",

            description:
                "Connect gastrointestinal disorders with nutrient digestion, absorption, symptom management and targeted dietary modification.",

            objectives: [

                "Differentiate food intolerance from food allergy.",

                "Explain lactose intolerance.",

                "Explain celiac disease conceptually.",

                "Describe how diarrhea and malabsorption affect nutrition status.",

                "Recognize when restrictive diets require dietitian guidance."

            ],

            facts: [

                [
                    "Lactose intolerance",
                    "Reduced ability to digest lactose because of low lactase activity, causing GI symptoms in susceptible individuals."
                ],

                [
                    "Celiac disease",
                    "Immune-mediated disorder triggered by gluten that damages small-intestinal mucosa in genetically susceptible people."
                ],

                [
                    "Malabsorption",
                    "Impaired absorption of one or more nutrients."
                ],

                [
                    "Steatorrhea",
                    "Excess fat in stool, often producing bulky, greasy stools and suggesting fat malabsorption."
                ],

                [
                    "Gluten",
                    "Protein complex found in wheat, barley and rye that triggers celiac disease."
                ],

                [
                    "Elimination diet",
                    "Temporary removal of selected foods to evaluate symptoms or manage a diagnosed condition under appropriate guidance."
                ]

            ],

            sections: [

                section(

                    "LACTOSE",

                    "Intolerance Is Dose and Person Dependent",

                    [

                        "Lactose intolerance results from insufficient lactase activity in the small intestine. Undigested lactose reaches the colon, where bacterial fermentation and osmotic effects can produce gas, cramping and diarrhea.",

                        "Tolerance varies. Some people can consume small amounts of lactose, especially with meals, while others need lactose-reduced products or lactase enzyme.",

                        "Lactose intolerance is not the same as milk-protein allergy."

                    ]

                ),

                section(

                    "CELIAC",

                    "Immune Injury to the Small Intestine",

                    [

                        "Celiac disease is an immune-mediated response to gluten that damages the intestinal mucosa and can impair absorption of iron, folate, fat-soluble vitamins and other nutrients.",

                        "Treatment requires a strict lifelong gluten-free diet after appropriate diagnosis.",

                        "Starting a gluten-free diet before diagnostic testing can make evaluation more difficult, so diagnosis should be coordinated with healthcare professionals."

                    ]

                ),

                section(

                    "MALABSORPTION",

                    "Symptoms Can Become Nutrition Problems",

                    [

                        "Chronic diarrhea or malabsorption can reduce energy and nutrient absorption and increase fluid and electrolyte losses.",

                        "The pattern of deficiency may suggest the affected gastrointestinal region or nutrient type.",

                        "Highly restrictive self-directed diets can create additional deficiencies and should be avoided without a clear diagnosis or rationale."

                    ]

                )

            ],

            clinical: {

                title:
                    "Celiac Disease",

                scenario:
                    "A patient with iron-deficiency anemia, chronic diarrhea and weight loss is diagnosed with celiac disease.",

                connection:
                    "Small-intestinal injury can impair iron and other nutrient absorption; strict gluten avoidance allows mucosal recovery in celiac disease."

            },

            memory: [

                "Lactose intolerance = enzyme problem, not immune allergy.",

                "Celiac = immune reaction to gluten + small-intestinal injury.",

                "Steatorrhea suggests fat malabsorption."

            ],

            traps: [

                "Lactose intolerance is not the same as milk allergy.",

                "Do not start a gluten-free diet solely because of vague symptoms without diagnostic evaluation.",

                "Restrictive diets can cause deficiencies if poorly planned."

            ],

            summary: [

                "Lactose intolerance results from low lactase activity.",

                "Celiac disease is immune mediated.",

                "Malabsorption can lead to weight loss and deficiency.",

                "Steatorrhea is associated with fat malabsorption.",

                "Targeted dietary treatment should match the diagnosis."

            ]

        }),


        topic({

            id:
                "malnutrition-wounds",

            number: 28,

            module: 7,

            title:
                "Protein-Calorie Malnutrition, Wounds & Recovery",

            description:
                "Understand how inadequate intake, inflammation and catabolic illness affect lean tissue, immunity, wound healing and functional recovery.",

            objectives: [

                "Describe effects of inadequate energy and protein intake.",

                "Explain how inflammation changes metabolism.",

                "Connect protein and micronutrients with wound healing.",

                "Recognize refeeding risk conceptually.",

                "Explain why nutrition support should be individualized."

            ],

            facts: [

                [
                    "Protein-calorie malnutrition",
                    "Inadequate intake or utilization of energy and protein leading to loss of body tissue and impaired function."
                ],

                [
                    "Catabolism",
                    "Metabolic breakdown of body tissues or stored nutrients."
                ],

                [
                    "Pressure injury",
                    "Localized tissue damage caused by pressure or pressure combined with shear."
                ],

                [
                    "Refeeding syndrome",
                    "Potentially dangerous electrolyte and fluid shifts that can occur when nutrition is restarted rapidly after severe undernutrition."
                ],

                [
                    "Lean tissue",
                    "Body tissue excluding most stored fat, including skeletal muscle and organs."
                ],

                [
                    "Wound healing",
                    "Coordinated process involving inflammation, tissue formation, collagen deposition and remodeling."
                ]

            ],

            sections: [

                section(

                    "UNDERNUTRITION",

                    "The Body Sacrifices Stores to Maintain Function",

                    [

                        "When energy intake is inadequate, the body mobilizes glycogen and fat and may increasingly break down protein to supply glucose precursors and amino acids.",

                        "Loss of skeletal muscle reduces strength, respiratory reserve, mobility and rehabilitation potential.",

                        "Immune function and wound healing can also be impaired when overall nutrient intake is inadequate."

                    ]

                ),

                section(

                    "WOUND HEALING",

                    "Energy and Protein Are Necessary but Not Alone",

                    [

                        "Wound repair requires adequate energy, protein, fluid and micronutrients involved in collagen synthesis and immune function.",

                        "Protein needs may rise with large wounds, but exact targets depend on kidney function, wound burden, illness severity and overall nutrition status.",

                        "Micronutrient supplements should correct documented or likely deficiencies rather than being assumed universally beneficial at high doses."

                    ]

                ),

                section(

                    "REFEEDING",

                    "Nutrition Can Be Dangerous If Restarted Too Quickly",

                    [

                        "Severely undernourished patients can develop dangerous electrolyte shifts when carbohydrate and calories are reintroduced rapidly.",

                        "Insulin release drives phosphate, potassium and magnesium into cells, which can lead to profound blood-level reductions.",

                        "High-risk patients require careful identification, gradual nutrition advancement and close electrolyte monitoring under clinical protocols."

                    ]

                )

            ],

            clinical: {

                title:
                    "Refeeding Risk",

                scenario:
                    "A severely underweight patient with minimal intake for many days is started on aggressive feeding.",

                connection:
                    "Rapid nutrition can trigger refeeding syndrome, so high-risk patients need controlled advancement and electrolyte monitoring."

            },

            memory: [

                "Malnutrition = loss of tissue and function, not just low weight.",

                "Wounds need energy + protein + fluids + micronutrient adequacy.",

                "Refeeding risk: phosphate, potassium and magnesium can fall rapidly."

            ],

            traps: [

                "Do not treat severe undernutrition by immediately giving maximal calories without assessing refeeding risk.",

                "Albumin alone does not diagnose protein malnutrition.",

                "High-dose micronutrients are not automatically indicated for every wound."

            ],

            summary: [

                "Undernutrition can reduce muscle, immunity and function.",

                "Inflammation can accelerate catabolism.",

                "Wound healing requires adequate energy and protein.",

                "Severe undernutrition can create refeeding risk.",

                "Nutrition rehabilitation must be individualized."

            ]

        }),


        // ====================================================================
        // MODULE 8
        // ====================================================================

        topic({

            id:
                "enteral-nutrition",

            number: 29,

            module: 8,

            title:
                "Enteral Nutrition & Tube-Feeding Calculations",

            description:
                "Learn when enteral nutrition is used, common feeding routes, aspiration precautions and basic formula-volume calculations.",

            objectives: [

                "Define enteral nutrition.",

                "Explain why enteral feeding is preferred when the GI tract is functional.",

                "Identify common feeding-tube routes.",

                "Calculate formula volume from kcal/mL concentration.",

                "Calculate hourly rate from total daily volume."

            ],

            facts: [

                [
                    "Enteral nutrition",
                    "Delivery of nutritionally complete formula into the gastrointestinal tract through a feeding tube."
                ],

                [
                    "Nasogastric tube",
                    "Tube passing through the nose into the stomach, commonly used for short-term feeding or decompression."
                ],

                [
                    "Gastrostomy tube",
                    "Tube placed through the abdominal wall directly into the stomach."
                ],

                [
                    "Jejunostomy tube",
                    "Tube delivering nutrition directly into the jejunum."
                ],

                [
                    "Continuous feeding",
                    "Enteral formula delivered slowly over many hours, commonly with a feeding pump."
                ],

                [
                    "Bolus feeding",
                    "Larger volume of formula delivered intermittently into the stomach when appropriate."
                ],

                [
                    "Aspiration",
                    "Entry of gastric or oropharyngeal contents into the airway."
                ]

            ],

            formulas: [

                "Formula volume (mL) = calorie goal ÷ formula kcal/mL",

                "Hourly rate (mL/hr) = total volume ÷ hours infused"

            ],

            sections: [

                section(

                    "WHEN USED",

                    "Use the GI Tract When It Works",

                    [

                        "Enteral nutrition is used when a patient cannot safely or adequately eat by mouth but has a gastrointestinal tract capable of digestion and absorption.",

                        "Compared with intravenous nutrition, enteral feeding uses normal intestinal pathways and helps maintain gut function.",

                        "Examples include severe dysphagia, neurologic impairment or prolonged inadequate oral intake when tube feeding is consistent with goals of care."

                    ]

                ),

                section(

                    "ROUTES",

                    "Tube Location Depends on Duration and Aspiration Risk",

                    [

                        "Nasogastric tubes are often used for shorter-term feeding, while gastrostomy or jejunostomy access may be selected for longer-term support.",

                        "Gastric feeding allows bolus or continuous methods in many patients. Jejunal feeding is generally delivered more slowly because the jejunum lacks the stomach's reservoir capacity.",

                        "Tube location and feeding schedule are chosen according to anatomy, aspiration risk, GI tolerance and clinical goals."

                    ]

                ),

                section(

                    "SAFETY",

                    "Positioning and Monitoring Matter",

                    [

                        "Head-of-bed elevation during feeding, verification of tube placement according to institutional policy and monitoring for intolerance are core safety practices.",

                        "Diarrhea during tube feeding has many possible causes, including medications, infection, formula factors and rate; it should not automatically be blamed on the formula.",

                        "Adequate water flushes are needed for hydration and tube patency according to the patient's fluid plan."

                    ]

                )

            ],

            worked: [

                worked(

                    "Formula Volume",

                    "A patient needs 1800 kcal/day from a formula providing 1.5 kcal/mL. How much formula is needed?",

                    [

                        "Volume = 1800 ÷ 1.5.",

                        "Volume = 1200 mL/day."

                    ],

                    "1200 mL/day"

                ),

                worked(

                    "Hourly Rate",

                    "1200 mL is to run over 20 hours. Calculate the rate.",

                    [

                        "Rate = 1200 ÷ 20.",

                        "Rate = 60 mL/hr."

                    ],

                    "60 mL/hr"

                )

            ],

            practice: [

                practice(

                    "A formula provides 2 kcal/mL. How much formula supplies 1600 kcal?",

                    "800 mL.",

                    [

                        "1600 ÷ 2 = 800 mL."

                    ]

                ),

                practice(

                    "1500 mL is infused over 24 hours. What rate is required?",

                    "62.5 mL/hr.",

                    [

                        "1500 ÷ 24 = 62.5 mL/hr."

                    ]

                )

            ],

            clinical: {

                title:
                    "Stroke With Dysphagia",

                scenario:
                    "A patient cannot safely swallow after a stroke but has a functioning gastrointestinal tract.",

                connection:
                    "Enteral nutrition can provide nutrients through the GI tract while aspiration risk and swallowing recovery are managed."

            },

            memory: [

                "Enteral = through the gut.",

                "If the gut works, enteral feeding is generally preferred over parenteral nutrition when feasible.",

                "Volume = kcal goal ÷ kcal/mL."

            ],

            traps: [

                "Do not assume diarrhea always means the tube-feeding formula is the cause.",

                "Jejunal feeding is not handled exactly like gastric bolus feeding.",

                "Enteral fluid flushes must respect any fluid restriction."

            ],

            summary: [

                "Enteral nutrition delivers formula into the GI tract.",

                "Tube route depends on duration, anatomy and tolerance.",

                "Aspiration precautions are important.",

                "Formula concentration determines volume needed for a calorie goal.",

                "Hourly rates are calculated from total volume and infusion time."

            ],

            questions: [

                {

                    id:
                        "en1",

                    type:
                        "numeric",

                    q:
                        "A tube-feeding formula provides 1.2 kcal/mL. How many mL are needed to provide 1800 kcal?",

                    answer:
                        1500,

                    tolerance:
                        0.1,

                    unit:
                        "mL",

                    explanation:
                        "1800 ÷ 1.2 = 1500 mL."

                },

                {

                    id:
                        "en2",

                    type:
                        "numeric",

                    q:
                        "A total of 1440 mL formula runs over 24 hours. What is the hourly rate?",

                    answer:
                        60,

                    tolerance:
                        0.1,

                    unit:
                        "mL/hr",

                    explanation:
                        "1440 ÷ 24 = 60 mL/hr."

                }

            ],

            tags: [

                "Calculation",

                "Clinical",

                "Nursing"

            ]

        }),


        topic({

            id:
                "parenteral-nutrition",

            number: 30,

            module: 8,

            title:
                "Parenteral Nutrition",

            description:
                "Understand when intravenous nutrition is used, major components, central versus peripheral delivery and major complications requiring monitoring.",

            objectives: [

                "Define parenteral nutrition.",

                "Explain major indications.",

                "Identify carbohydrate, amino acid, lipid, vitamin, mineral and electrolyte components.",

                "Differentiate central and peripheral delivery conceptually.",

                "Recognize major complications such as hyperglycemia, infection and electrolyte shifts."

            ],

            facts: [

                [
                    "Parenteral nutrition",
                    "Intravenous delivery of nutrients when the gastrointestinal tract cannot be used adequately."
                ],

                [
                    "Dextrose",
                    "Intravenous carbohydrate source commonly used in parenteral nutrition."
                ],

                [
                    "Amino acids",
                    "Intravenous protein source used in parenteral nutrition."
                ],

                [
                    "Lipid emulsion",
                    "Intravenous fat source that provides essential fatty acids and concentrated energy."
                ],

                [
                    "Central venous access",
                    "Catheter tip located in a large central vein, allowing infusion of highly concentrated solutions."
                ],

                [
                    "Catheter-related bloodstream infection",
                    "Bloodstream infection associated with an intravascular catheter."
                ],

                [
                    "Refeeding syndrome",
                    "Electrolyte and fluid shifts that can occur when nutrition is rapidly advanced in severely undernourished patients."
                ]

            ],

            sections: [

                section(

                    "INDICATION",

                    "Use When the GI Tract Cannot Be Used Adequately",

                    [

                        "Parenteral nutrition bypasses the gastrointestinal tract and delivers nutrients directly into the bloodstream.",

                        "It may be required with severe intestinal failure, prolonged ileus, certain bowel obstructions or other conditions in which enteral feeding is not feasible or sufficient.",

                        "Because it is invasive and metabolically complex, it is not chosen simply for convenience when oral or enteral nutrition can meet needs."

                    ]

                ),

                section(

                    "COMPONENTS",

                    "A Complete Intravenous Nutrition Mixture",

                    [

                        "Parenteral nutrition can provide dextrose, amino acids, lipid emulsion, electrolytes, vitamins, trace elements and fluid.",

                        "The formulation is individualized according to energy needs, organ function, glucose control, electrolyte status and fluid balance.",

                        "Central access allows more concentrated solutions, while peripheral formulations are limited by vein tolerance."

                    ]

                ),

                section(

                    "COMPLICATIONS",

                    "Monitoring Is Essential",

                    [

                        "Potential complications include catheter infection, thrombosis, hyperglycemia, electrolyte abnormalities, liver dysfunction and refeeding syndrome in susceptible patients.",

                        "Abrupt interruption of high-dextrose infusion can also create glucose-management concerns in selected patients depending on insulin exposure and metabolic status.",

                        "Parenteral nutrition therefore requires close interprofessional monitoring."

                    ]

                )

            ],

            clinical: {

                title:
                    "Severe Intestinal Failure",

                scenario:
                    "A patient cannot absorb enough nutrients through the gastrointestinal tract after major bowel resection.",

                connection:
                    "Parenteral nutrition may be required because intravenous delivery bypasses the impaired intestine."

            },

            memory: [

                "Enteral = gut; parenteral = IV.",

                "PN provides dextrose + amino acids + lipids + micronutrients + electrolytes + fluid.",

                "PN complications: infection, glucose, electrolytes, liver and line problems."

            ],

            traps: [

                "Parenteral nutrition is not preferred when the GI tract can safely and adequately be used.",

                "Central and peripheral PN are not interchangeable in concentration limits.",

                "Severely undernourished patients can develop refeeding syndrome with PN just as with enteral feeding."

            ],

            summary: [

                "Parenteral nutrition delivers nutrients intravenously.",

                "It is used when the GI tract cannot adequately support nutrition.",

                "PN contains macronutrients, micronutrients, electrolytes and fluid.",

                "Central access allows concentrated solutions.",

                "Close monitoring is required for metabolic and catheter complications."

            ]

        }),


        topic({

            id:
                "food-safety",

            number: 31,

            module: 8,

            title:
                "Food Safety, Foodborne Illness & Immunocompromised Patients",

            description:
                "Learn contamination prevention, cross-contamination, temperature control and why food safety is especially important in high-risk patients.",

            objectives: [

                "Explain cross-contamination.",

                "Describe the importance of hand hygiene and safe food handling.",

                "Explain why temperature control matters.",

                "Identify populations at higher risk for severe foodborne illness.",

                "Recognize common high-risk food practices."

            ],

            facts: [

                [
                    "Cross-contamination",
                    "Transfer of harmful microorganisms from one food, surface or object to another."
                ],

                [
                    "Foodborne illness",
                    "Disease caused by consuming food contaminated with pathogens or toxins."
                ],

                [
                    "Pasteurization",
                    "Heat treatment used to reduce harmful microorganisms in foods and beverages."
                ],

                [
                    "High-risk population",
                    "People more vulnerable to severe foodborne illness, including some pregnant, older, infant or immunocompromised individuals."
                ],

                [
                    "Temperature danger zone",
                    "Temperature range in which many foodborne bacteria can multiply rapidly; exact handling limits should follow current food-safety guidance."
                ],

                [
                    "Hand hygiene",
                    "Cleaning hands appropriately to reduce transmission of microorganisms."
                ]

            ],

            sections: [

                section(

                    "CONTAMINATION",

                    "Keep Raw and Ready-to-Eat Foods Separate",

                    [

                        "Raw meat, poultry, seafood and eggs can carry pathogens that contaminate cutting boards, utensils and ready-to-eat foods.",

                        "Separate equipment, cleaning and careful hand hygiene reduce cross-contamination.",

                        "Washing raw poultry can spread contaminated droplets around the kitchen rather than making the meat safer."

                    ]

                ),

                section(

                    "TEMPERATURE",

                    "Time and Temperature Control Microbial Growth",

                    [

                        "Food should be cooked, cooled and stored using safe time and temperature practices because many pathogens multiply rapidly under favorable conditions.",

                        "A refrigerator slows microbial growth but does not sterilize food.",

                        "Current safe cooking temperatures should be followed using reliable public-health guidance and a food thermometer rather than relying only on color."

                    ]

                ),

                section(

                    "HIGH-RISK PATIENTS",

                    "Consequences Can Be More Severe",

                    [

                        "People who are pregnant, very young, older or immunocompromised can experience more severe complications from foodborne pathogens.",

                        "Avoidance of unpasteurized products, undercooked animal foods and other high-risk foods may be especially important for these groups.",

                        "Food-safety counseling should match the person's immune status and current clinical guidance."

                    ]

                )

            ],

            clinical: {

                title:
                    "Neutropenia",

                scenario:
                    "A patient receiving intensive chemotherapy has severe neutropenia.",

                connection:
                    "Meticulous food safety is important because infection consequences can be severe, although specific restrictions should follow the oncology team's protocol."

            },

            memory: [

                "Clean, separate, cook and chill.",

                "Cross-contamination = microbes move from one surface or food to another.",

                "A refrigerator slows growth; it does not sterilize food."

            ],

            traps: [

                "Do not rely on meat color alone to judge safe cooking.",

                "Washing raw poultry can spread contamination.",

                "Food-safety restrictions should match the patient's risk level and current guidance."

            ],

            summary: [

                "Foodborne illness can result from contamination or toxins.",

                "Hand hygiene and separation prevent cross-contamination.",

                "Time and temperature affect microbial growth.",

                "High-risk patients can have more severe outcomes.",

                "Safe handling is part of clinical nutrition education."

            ]

        }),


        topic({

            id:
                "food-allergy-intolerance",

            number: 32,

            module: 8,

            title:
                "Food Allergy, Intolerance & Elimination Diets",

            description:
                "Differentiate immune-mediated food allergy from intolerance and learn the risks of unnecessary food restriction.",

            objectives: [

                "Differentiate food allergy and food intolerance.",

                "Explain anaphylaxis risk.",

                "Recognize lactose intolerance as non-immune mediated.",

                "Describe appropriate elimination-diet use.",

                "Explain nutritional risks of unnecessary restriction."

            ],

            facts: [

                [
                    "Food allergy",
                    "Immune-mediated adverse reaction to a food protein that can range from mild symptoms to anaphylaxis."
                ],

                [
                    "Food intolerance",
                    "Adverse reaction to food that is not primarily immune mediated, such as lactose intolerance."
                ],

                [
                    "Anaphylaxis",
                    "Rapid systemic allergic reaction that can threaten airway, breathing and circulation."
                ],

                [
                    "Elimination diet",
                    "Structured removal of selected foods for diagnosis or management, ideally followed by appropriate reassessment."
                ],

                [
                    "Cross-contact",
                    "Unintended transfer of an allergenic food protein to another food."
                ],

                [
                    "Lactase",
                    "Brush-border enzyme that digests lactose into glucose and galactose."
                ]

            ],

            sections: [

                section(

                    "ALLERGY",

                    "Immune Reactions Can Be Life-Threatening",

                    [

                        "Food allergy involves immune recognition of food proteins. Symptoms can involve skin, gastrointestinal tract, respiratory system and cardiovascular system.",

                        "Anaphylaxis is a medical emergency. Patients with diagnosed severe food allergy require an individualized emergency plan and strict avoidance of the responsible allergen.",

                        "Cross-contact can occur through shared utensils, surfaces, fryers or manufacturing equipment."

                    ]

                ),

                section(

                    "INTOLERANCE",

                    "Non-Immune Reactions",

                    [

                        "Food intolerance does not primarily involve the immune system. Lactose intolerance is caused by low lactase activity and usually causes gastrointestinal symptoms rather than anaphylaxis.",

                        "Tolerance may depend on dose and food preparation, so complete elimination is not always necessary for every intolerance.",

                        "A diagnosis should guide restriction rather than symptoms being attributed to foods without evaluation."

                    ]

                ),

                section(

                    "RESTRICTION",

                    "Elimination Diets Can Create Deficiency",

                    [

                        "Removing major food groups can reduce intake of protein, calcium, vitamin D, B vitamins or other nutrients depending on what is eliminated.",

                        "When medically necessary restrictions are used, replacement foods should be chosen to preserve nutrient adequacy.",

                        "Broad restrictive diets without clear indication can increase cost, food anxiety and malnutrition risk."

                    ]

                )

            ],

            clinical: {

                title:
                    "Milk Allergy vs Lactose Intolerance",

                scenario:
                    "One patient develops hives and wheezing after milk; another develops bloating and diarrhea after large amounts of milk.",

                connection:
                    "The first pattern suggests possible immune-mediated allergy, while the second is more consistent with lactose intolerance."

            },

            memory: [

                "ALLERGY = immune system.",

                "INTOLERANCE = not primarily immune mediated.",

                "Anaphylaxis = emergency."

            ],

            traps: [

                "Lactose intolerance does not cause classic IgE-mediated anaphylaxis.",

                "Do not use broad elimination diets without considering nutrient replacement.",

                "Cross-contact can expose a patient even when the allergen is not an intentional ingredient."

            ],

            summary: [

                "Food allergy is immune mediated.",

                "Food intolerance is not primarily immune mediated.",

                "Anaphylaxis can threaten life.",

                "Cross-contact matters in allergy prevention.",

                "Restrictive diets require attention to nutrient adequacy."

            ]

        }),


        topic({

            id:
                "vegetarian-cultural-patterns",

            number: 33,

            module: 8,

            title:
                "Vegetarian, Vegan & Culturally Responsive Nutrition",

            description:
                "Plan nutritionally adequate plant-based patterns and apply culturally respectful, patient-centered nutrition counseling.",

            objectives: [

                "Differentiate vegetarian and vegan dietary patterns.",

                "Identify nutrients requiring special attention in vegan diets.",

                "Explain complementary protein concepts.",

                "Recognize cultural and religious influences on food choices.",

                "Apply patient-centered counseling principles."

            ],

            facts: [

                [
                    "Vegetarian diet",
                    "Dietary pattern that excludes meat and may or may not include dairy products and eggs depending on the type."
                ],

                [
                    "Vegan diet",
                    "Dietary pattern excluding animal-derived foods."
                ],

                [
                    "Vitamin B12",
                    "Nutrient requiring reliable fortified-food or supplement sources in vegan diets because unfortified plant foods do not provide dependable amounts."
                ],

                [
                    "Complementary proteins",
                    "Plant proteins with different amino-acid profiles that can collectively supply all essential amino acids."
                ],

                [
                    "Cultural competence",
                    "Ability to provide respectful care that considers cultural beliefs, practices and context."
                ],

                [
                    "Patient-centered care",
                    "Care built around the patient's goals, values, preferences and circumstances."
                ]

            ],

            sections: [

                section(

                    "PLANT-BASED",

                    "Adequacy Requires Planning, Not Animal Foods",

                    [

                        "Well-planned vegetarian and vegan diets can provide adequate energy, protein, fiber and many micronutrients.",

                        "Vegan diets require a dependable source of vitamin B12 through fortified foods or supplementation. Attention may also be needed for iron, calcium, vitamin D, iodine, zinc and omega-3 fatty acids depending on food choices.",

                        "Protein adequacy is usually achievable through legumes, soy foods, grains, nuts, seeds and other plant foods when total energy intake is sufficient."

                    ]

                ),

                section(

                    "CULTURE",

                    "Food Is More Than Nutrients",

                    [

                        "Food choices are shaped by culture, religion, family, migration, identity, cost and tradition.",

                        "Telling a patient to abandon familiar foods can damage trust and may be unnecessary. Most nutrition goals can be adapted within many cultural cuisines.",

                        "Effective counseling asks what the patient actually eats and identifies realistic changes within that pattern."

                    ]

                ),

                section(

                    "PATIENT-CENTERED",

                    "Respect Preferences and Autonomy",

                    [

                        "Nutrition care should support the patient's health goals without moralizing food choices.",

                        "Clinicians should avoid assuming that one dietary pattern is inherently superior for every person.",

                        "When restrictions are needed, the goal is to preserve cultural meaning and enjoyment while meeting clinical requirements."

                    ]

                )

            ],

            clinical: {

                title:
                    "Vegan Patient With Low B12",

                scenario:
                    "A long-term vegan patient has macrocytic anemia and no consistent intake of B12-fortified foods or supplements.",

                connection:
                    "Vitamin B12 is a key nutrient requiring a dependable fortified or supplemental source in vegan diets."

            },

            memory: [

                "Vegan diets need a reliable B12 source.",

                "Plant protein adequacy comes from variety + enough total intake.",

                "Culturally responsive care adapts goals to the patient's food pattern."

            ],

            traps: [

                "Do not assume vegan diets are automatically deficient in protein.",

                "Do not assume a patient's culture from appearance alone.",

                "Diet counseling should not require abandoning culturally meaningful foods unless truly necessary."

            ],

            summary: [

                "Vegetarian and vegan diets can be nutritionally adequate.",

                "Vitamin B12 requires special planning in vegan diets.",

                "Plant proteins can collectively supply essential amino acids.",

                "Culture strongly influences food choices.",

                "Nutrition counseling should be patient centered and respectful."

            ]

        }),


        topic({

            id:
                "eating-disorders-evidence",

            number: 34,

            module: 8,

            title:
                "Disordered Eating, Eating Disorders & Nutrition Evidence",

            description:
                "Recognize warning signs of eating disorders, understand medical risk and learn how to evaluate nutrition claims using evidence rather than trends or social-media certainty.",

            objectives: [

                "Differentiate disordered eating from diagnosed eating disorders conceptually.",

                "Recognize common warning signs requiring referral.",

                "Explain why eating disorders can occur at any body size.",

                "Identify red flags in nutrition misinformation.",

                "Use study design, effect size and source quality when evaluating nutrition claims."

            ],

            facts: [

                [
                    "Eating disorder",
                    "Serious mental and physical health condition characterized by persistent disturbances in eating behavior and related thoughts or emotions."
                ],

                [
                    "Disordered eating",
                    "Problematic eating behaviors that may not meet full diagnostic criteria for an eating disorder but can still harm health."
                ],

                [
                    "Anorexia nervosa",
                    "Eating disorder involving restriction and intense disturbances related to weight, shape or fear of weight gain; it can occur across body sizes."
                ],

                [
                    "Bulimia nervosa",
                    "Eating disorder involving recurrent binge-eating episodes and compensatory behaviors."
                ],

                [
                    "Binge-eating disorder",
                    "Eating disorder involving recurrent binge-eating episodes without regular compensatory behaviors typical of bulimia nervosa."
                ],

                [
                    "Observational study",
                    "Study that measures exposures and outcomes without assigning the exposure."
                ],

                [
                    "Randomized trial",
                    "Experiment in which participants are randomly assigned to interventions, strengthening causal inference when well designed."
                ],

                [
                    "Confounding",
                    "Distortion of an association by another variable related to both exposure and outcome."
                ]

            ],

            sections: [

                section(

                    "EATING DISORDERS",

                    "Serious Conditions, Not Lifestyle Choices",

                    [

                        "Eating disorders can affect cardiovascular, gastrointestinal, endocrine, skeletal, neurologic and psychiatric health. Medical instability can occur even when outward appearance does not match stereotypes.",

                        "Warning signs include severe restriction, recurrent bingeing, purging, compulsive exercise, rapid weight change, dizziness, menstrual disturbance, food rituals or intense fear surrounding food and weight.",

                        "Treatment is interdisciplinary and may involve medical care, mental-health treatment and nutrition therapy."

                    ]

                ),

                section(

                    "WEIGHT STIGMA",

                    "Body Size Does Not Determine Severity",

                    [

                        "People in larger bodies can have severe restrictive eating disorders and malnutrition. A normal or high BMI does not guarantee adequate intake or medical stability.",

                        "Weight-stigmatizing language can delay recognition and reduce trust in healthcare.",

                        "Assessment should focus on behaviors, weight trajectory, symptoms, vital signs, labs and function rather than appearance alone."

                    ]

                ),

                section(

                    "NUTRITION CLAIMS",

                    "Evaluate Evidence Before Believing a Headline",

                    [

                        "Nutrition headlines often overstate findings from small observational studies, animal experiments or short-term surrogate outcomes.",

                        "Stronger interpretation asks about study design, sample size, comparison group, effect size, confidence intervals, confounding, funding and whether the outcome matters clinically.",

                        "A single study rarely settles a nutrition question. Consistency across multiple high-quality studies is more persuasive than viral testimonials or before-and-after photos."

                    ]

                )

            ],

            clinical: {

                title:
                    "Restriction at a Higher BMI",

                scenario:
                    "A patient in a larger body has rapidly lost weight through severe restriction and now has bradycardia and dizziness.",

                connection:
                    "Eating-disorder severity cannot be judged from BMI alone; rapid restriction and physiologic instability require urgent clinical evaluation."

            },

            memory: [

                "Eating disorders can occur at ANY body size.",

                "Evidence hierarchy matters: anecdotes are weak evidence for causation.",

                "One study ≠ settled science."

            ],

            traps: [

                "Do not assume someone is medically safe because BMI is normal or high.",

                "Do not diagnose or dismiss an eating disorder based only on appearance.",

                "Association in an observational study does not automatically prove causation."

            ],

            summary: [

                "Eating disorders are serious medical and mental-health conditions.",

                "Severity is not determined by body size alone.",

                "Disordered eating can harm health even without a formal diagnosis.",

                "Nutrition claims should be evaluated using study design and effect size.",

                "High-quality evidence is stronger than anecdotes and social-media claims."

            ],

            questions: [

                {

                    id:
                        "evidence1",

                    type:
                        "mcq",

                    q:
                        "Which statement is most accurate?",

                    choices: [

                        "Eating disorders can occur at any body size.",

                        "Eating disorders only occur in underweight patients.",

                        "A high BMI rules out malnutrition.",

                        "Observational studies always prove causation."

                    ],

                    answer:
                        0,

                    explanation:
                        "Eating disorders and malnutrition can occur across the body-size spectrum, and severity must be assessed clinically."

                }

            ],

            tags: [

                "Clinical",

                "Research",

                "High Yield"

            ]

        })

    ];


    // ========================================================================
    // MAPS
    // ========================================================================

    const TOPIC_COUNT =
        NUTRITION_TOPICS.length;


    const TOPIC_MAP = {};


    NUTRITION_TOPICS.forEach(
        function (item) {

            TOPIC_MAP[item.id] =
                item;

        }
    );


    // ========================================================================
    // DASHBOARD ELEMENTS
    // ========================================================================

    const dashboardIntro =
        document.querySelector(
            ".dashboard-intro"
        );


    const progressOverview =
        document.querySelector(
            ".progress-overview"
        );


    const coursesSection =
        document.querySelector(
            ".courses-section"
        );


    const weakAreasSection =
        document.querySelector(
            ".weak-areas-section"
        );


    const footer =
        document.querySelector(
            "footer"
        );


    const nutritionCard =
        document.querySelector(
            '.course-card[data-course="nutrition"]'
        );


    const overallProgress =
        document.getElementById(
            "overall-progress"
        );


    const overallProgressBar =
        document.getElementById(
            "overall-progress-bar"
        );


    const topicsMastered =
        document.getElementById(
            "topics-mastered"
        );


    const questionsAnswered =
        document.getElementById(
            "questions-answered"
        );


    if (
        !footer ||
        !nutritionCard
    ) {

        return;

    }


    const nutritionDashboardButton =
        nutritionCard.querySelector(
            ".course-button"
        );


    if (
        nutritionDashboardButton
    ) {

        nutritionDashboardButton.textContent =
            "Open Course →";

    }


    // ========================================================================
    // STORAGE
    // ========================================================================

    function storageFor(
        topicId
    ) {

        const base =
            `nshNUT_FINAL_${topicId}`;


        return {

            read:
                `${base}_read`,

            review:
                `${base}_review`,

            practice:
                `${base}_practice`,

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


    function getNumber(
        key
    ) {

        return Number(
            localStorage.getItem(
                key
            )
        ) || 0;

    }


    function getBoolean(
        key
    ) {

        return (
            localStorage.getItem(
                key
            ) === "true"
        );

    }


    function getArray(
        key
    ) {

        try {

            const value =
                JSON.parse(
                    localStorage.getItem(
                        key
                    ) || "[]"
                );


            return Array.isArray(
                value
            )
                ? value
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
            JSON.stringify(
                value
            )
        );

    }


    // ========================================================================
    // UTILITIES
    // ========================================================================

    function shuffle(
        array
    ) {

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


    function scrollTopSmooth() {

        window.scrollTo({

            top: 0,

            behavior:
                "smooth"

        });

    }


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
            );

    }


    // ========================================================================
    // COURSE STYLES
    // ========================================================================

    function createStyles() {

        if (
            document.getElementById(
                "nutrition-final-styles"
            )
        ) {

            return;

        }


        const style =
            document.createElement(
                "style"
            );


        style.id =
            "nutrition-final-styles";


        style.textContent = `

            .nutrition-course-page .course-page-title {
                background:
                    linear-gradient(
                        135deg,
                        #f0fdf4,
                        #ffffff
                    );
                border-color:#bbf7d0;
            }

            .nutrition-course-page .course-page-icon {
                background:
                    linear-gradient(
                        135deg,
                        #dcfce7,
                        #fef3c7
                    );
            }

            .nut-course-note {
                margin:20px 0;
                padding:20px;
                border-radius:18px;
                background:#f8fafc;
                border:1px solid #e5e7eb;
                color:#475467;
                line-height:1.75;
            }

            .nut-topic-stat-row {
                display:flex;
                gap:8px;
                flex-wrap:wrap;
                margin-top:12px;
            }

            .nut-topic-stat {
                display:inline-flex;
                align-items:center;
                padding:6px 10px;
                border-radius:999px;
                border:1px solid #e5e7eb;
                background:#f8fafc;
                color:#475467;
                font-size:11px;
                font-weight:700;
            }

            .nut-objectives {
                margin-top:20px;
                padding:20px;
                border-radius:18px;
                background:#f0fdf4;
                border:1px solid #bbf7d0;
            }

            .nut-objectives h3 {
                margin:0 0 12px;
                color:#166534;
            }

            .nut-objectives li {
                margin-bottom:8px;
                color:#475467;
                line-height:1.65;
                font-size:14px;
            }

            .nut-prose {
                display:flex;
                flex-direction:column;
                gap:15px;
            }

            .nut-prose p {
                margin:0;
                color:#475467;
                line-height:1.8;
                font-size:15px;
            }

            .nut-formula-box {
                margin-top:20px;
                padding:20px;
                border-radius:18px;
                background:#fffbeb;
                border:1px solid #fde68a;
            }

            .nut-formula-title {
                font-size:12px;
                letter-spacing:1px;
                font-weight:900;
                color:#a16207;
                margin-bottom:12px;
            }

            .nut-formula {
                padding:12px 14px;
                margin-top:8px;
                border-radius:12px;
                background:#ffffff;
                border:1px solid #fef3c7;
                font-family:
                    "Courier New",
                    monospace;
                color:#854d0e;
                font-weight:700;
                overflow-x:auto;
            }

            .nut-table-wrap {
                overflow-x:auto;
                margin-top:20px;
                border-radius:16px;
                border:1px solid #e5e7eb;
            }

            .nut-table {
                width:100%;
                border-collapse:collapse;
                min-width:520px;
            }

            .nut-table th,
            .nut-table td {
                padding:13px 15px;
                border-bottom:1px solid #e5e7eb;
                text-align:left;
                vertical-align:top;
                line-height:1.55;
                font-size:13px;
            }

            .nut-table th {
                background:#f8fafc;
                font-weight:800;
                color:#344054;
            }

            .nut-table td {
                color:#667085;
            }

            .nut-worked-grid {
                display:grid;
                grid-template-columns:
                    repeat(
                        auto-fit,
                        minmax(
                            260px,
                            1fr
                        )
                    );
                gap:16px;
                margin-top:20px;
            }

            .nut-worked-card {
                padding:20px;
                border-radius:18px;
                border:1px solid #bbf7d0;
                background:#f7fff9;
            }

            .nut-worked-card h3 {
                margin:0 0 10px;
                color:#166534;
            }

            .nut-worked-card ol {
                padding-left:20px;
                color:#475467;
            }

            .nut-worked-card li {
                margin-bottom:8px;
                line-height:1.55;
            }

            .nut-worked-problem {
                margin-bottom:14px;
                color:#475467;
                line-height:1.6;
            }

            .nut-worked-answer {
                margin-top:14px;
                padding:12px;
                border-radius:12px;
                background:#dcfce7;
                color:#166534;
                font-weight:900;
            }

            .nut-memory-box {
                margin-top:20px;
                padding:20px;
                border-radius:18px;
                background:#f0fdf4;
                border:1px solid #bbf7d0;
            }

            .nut-memory-box h3 {
                margin:0 0 14px;
                color:#166534;
            }

            .nut-memory-item {
                padding:10px 0;
                border-bottom:
                    1px solid
                    rgba(
                        22,
                        101,
                        52,
                        .12
                    );
                color:#166534;
                line-height:1.6;
            }

            .nut-memory-item:last-child {
                border-bottom:none;
            }

            .nut-traps {
                display:flex;
                flex-direction:column;
                gap:10px;
            }

            .nut-trap {
                padding:15px 17px;
                border-radius:14px;
                background:#fff7ed;
                border:1px solid #fed7aa;
                color:#9a3412;
                line-height:1.6;
            }

            .nut-practice-card {
                padding:22px;
                border:1px solid #e5e7eb;
                border-radius:18px;
                background:#ffffff;
            }

            .nut-practice-label {
                margin-bottom:8px;
                font-size:11px;
                font-weight:900;
                letter-spacing:1.2px;
                color:#16a34a;
            }

            .nut-practice-question {
                font-size:19px;
                line-height:1.55;
                color:#172033;
            }

            .nut-practice-solution {
                margin-top:18px;
                padding:18px;
                border-radius:15px;
                background:#f0fdf4;
                border:1px solid #bbf7d0;
            }

            .nut-practice-answer {
                margin-top:12px;
                font-weight:900;
                color:#166534;
            }

            .nut-numeric-wrap {
                margin-top:20px;
            }

            .nut-numeric-input {
                width:100%;
                padding:15px 16px;
                border:1px solid #d0d5dd;
                border-radius:12px;
                font-size:16px;
                outline:none;
                background:#ffffff;
            }

            .nut-numeric-input:focus {
                border-color:#22c55e;
                box-shadow:
                    0 0 0 3px
                    rgba(
                        34,
                        197,
                        94,
                        .12
                    );
            }

            body.dark-mode
            .nutrition-course-page
            .course-page-title {
                background:
                    linear-gradient(
                        135deg,
                        #13261b,
                        #111827
                    );
                border-color:#245238;
            }

            body.dark-mode
            .nutrition-course-page
            .course-page-icon {
                background:#173422;
            }

            body.dark-mode
            .nut-course-note,
            body.dark-mode
            .nut-topic-stat {
                background:#151e2e;
                border-color:#263043;
                color:#cbd5e1;
            }

            body.dark-mode
            .nut-objectives,
            body.dark-mode
            .nut-memory-box,
            body.dark-mode
            .nut-practice-solution {
                background:#14261a;
                border-color:#2f5f3f;
            }

            body.dark-mode
            .nut-objectives h3,
            body.dark-mode
            .nut-memory-box h3,
            body.dark-mode
            .nut-memory-item,
            body.dark-mode
            .nut-practice-answer {
                color:#86efac;
            }

            body.dark-mode
            .nut-objectives li,
            body.dark-mode
            .nut-prose p,
            body.dark-mode
            .nut-worked-problem,
            body.dark-mode
            .nut-worked-card li,
            body.dark-mode
            .nut-practice-solution li {
                color:#cbd5e1;
            }

            body.dark-mode
            .nut-formula-box {
                background:#2b2413;
                border-color:#66531e;
            }

            body.dark-mode
            .nut-formula {
                background:#171b22;
                border-color:#66531e;
                color:#fde68a;
            }

            body.dark-mode
            .nut-worked-card {
                background:#132019;
                border-color:#2f5f3f;
            }

            body.dark-mode
            .nut-worked-card h3,
            body.dark-mode
            .nut-worked-answer {
                color:#86efac;
            }

            body.dark-mode
            .nut-worked-answer {
                background:#183322;
            }

            body.dark-mode
            .nut-trap {
                background:#352111;
                border-color:#7c3d12;
                color:#fed7aa;
            }

            body.dark-mode
            .nut-practice-card {
                background:#111827;
                border-color:#263043;
            }

            body.dark-mode
            .nut-practice-question {
                color:#f1f5f9;
            }

            body.dark-mode
            .nut-numeric-input {
                background:#111827;
                border-color:#334155;
                color:#f8fafc;
            }

        `;


        document.head.appendChild(
            style
        );

    }


    createStyles();


    // ========================================================================
    // CREATE COURSE PAGE
    // ========================================================================

    const nutritionPage =
        document.createElement(
            "section"
        );


    nutritionPage.id =
        "nutrition-page";


    nutritionPage.className =
        "course-page nutrition-course-page hidden";


    footer.before(
        nutritionPage
    );


    // ========================================================================
    // CREATE LESSON PAGE
    // ========================================================================

    const nutritionLessonPage =
        document.createElement(
            "section"
        );


    nutritionLessonPage.id =
        "nutrition-full-lesson-page";


    nutritionLessonPage.className =
        "lesson-page hidden";


    footer.before(
        nutritionLessonPage
    );


    // ========================================================================
    // QUESTION BANK
    // ========================================================================

    function buildTermQuestions(
        item
    ) {

        const questions = [];


        item.facts.forEach(
            function (
                fact,
                index
            ) {

                const otherIndices =
                    item.facts
                        .map(
                            (
                                entry,
                                i
                            ) => i
                        )
                        .filter(
                            i =>
                                i !==
                                index
                        );


                const distractors =
                    shuffle(
                        otherIndices
                    )
                        .slice(
                            0,
                            3
                        );


                let raw = [

                    {
                        text:
                            fact[1],

                        correct:
                            true
                    },

                    ...distractors.map(
                        i => ({

                            text:
                                item.facts[i][1],

                            correct:
                                false

                        })
                    )

                ];


                raw =
                    shuffle(
                        raw
                    );


                questions.push({

                    id:
                        `${item.id}_definition_${index}`,

                    type:
                        "mcq",

                    q:
                        `Which statement best describes <strong>${fact[0]}</strong>?`,

                    choices:
                        raw.map(
                            option =>
                                option.text
                        ),

                    answer:
                        raw.findIndex(
                            option =>
                                option.correct
                        ),

                    explanation:
                        `<strong>${fact[0]}:</strong> ${fact[1]}`,

                    topicId:
                        item.id

                });


                raw = [

                    {
                        text:
                            fact[0],

                        correct:
                            true
                    },

                    ...distractors.map(
                        i => ({

                            text:
                                item.facts[i][0],

                            correct:
                                false

                        })
                    )

                ];


                raw =
                    shuffle(
                        raw
                    );


                questions.push({

                    id:
                        `${item.id}_term_${index}`,

                    type:
                        "mcq",

                    q:
                        `Which term matches this definition?<br><br><strong>${fact[1]}</strong>`,

                    choices:
                        raw.map(
                            option =>
                                option.text
                        ),

                    answer:
                        raw.findIndex(
                            option =>
                                option.correct
                        ),

                    explanation:
                        `The correct term is <strong>${fact[0]}</strong>.`,

                    topicId:
                        item.id

                });

            }
        );


        return questions;

    }


    function buildQuestionBank(
        item
    ) {

        const custom =
            (
                item.questions ||
                []
            ).map(
                question => ({

                    ...question,

                    topicId:
                        item.id

                })
            );


        return [

            ...custom,

            ...buildTermQuestions(
                item
            )

        ];

    }


    function selectTopicQuestions(
        item
    ) {

        const custom =
            shuffle(

                (
                    item.questions ||
                    []
                ).map(
                    question => ({

                        ...question,

                        topicId:
                            item.id

                    })
                )

            );


        const generated =
            shuffle(
                buildTermQuestions(
                    item
                )
            );


        const customTarget =
            Math.min(

                custom.length,

                Math.ceil(
                    TOPIC_QUIZ_LENGTH /
                    2
                )

            );


        const selected =
            custom.slice(
                0,
                customTarget
            );


        const needed =
            TOPIC_QUIZ_LENGTH -
            selected.length;


        return shuffle([

            ...selected,

            ...generated.slice(
                0,
                needed
            )

        ]);

    }


    function allQuestions() {

        return NUTRITION_TOPICS
            .flatMap(
                item =>
                    buildQuestionBank(
                        item
                    )
            );

    }


    function questionById(
        item,
        id
    ) {

        return (
            buildQuestionBank(
                item
            ).find(
                question =>
                    question.id ===
                    id
            ) || null
        );

    }


    // ========================================================================
    // COURSE PAGE
    // ========================================================================

    function topicCardHTML(
        item
    ) {

        const storage =
            storageFor(
                item.id
            );


        const mastered =
            getNumber(
                storage.score
            ) >= PASS_SCORE;


        return `

            <article
                class="topic-card nutrition-topic-card"
                data-nut-topic="${item.id}"
            >

                <div class="topic-status">
                    ${
                        mastered
                            ? "✓"
                            : item.number
                    }
                </div>

                <div class="topic-information">

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                    <div class="topic-tags">

                        ${
                            item.tags.map(
                                tag =>
                                    `<span>${tag}</span>`
                            ).join("")
                        }

                    </div>

                    <div class="nut-topic-stat-row">

                        <span class="nut-topic-stat">
                            📖
                            ${item.sections.length}
                            sections
                        </span>

                        <span class="nut-topic-stat">
                            🧮
                            ${item.practice.length}
                            practice drills
                        </span>

                        <span class="nut-topic-stat">
                            📝
                            ${item.worked.length}
                            worked examples
                        </span>

                        <span class="nut-topic-stat">
                            ❓
                            ${
                                buildQuestionBank(
                                    item
                                ).length
                            }
                            bank questions
                        </span>

                    </div>

                </div>

                <button class="topic-button">
                    Start →
                </button>

            </article>

        `;

    }


    function renderCoursePage() {

        const modulesHTML =
            MODULES.map(
                function (
                    module
                ) {

                    const topics =
                        NUTRITION_TOPICS
                            .filter(
                                item =>
                                    item.module ===
                                    module.number
                            );


                    return `

                        <div class="module-section">

                            <div class="module-heading">

                                <span class="module-number">
                                    ${
                                        String(
                                            module.number
                                        ).padStart(
                                            2,
                                            "0"
                                        )
                                    }
                                </span>

                                <div>

                                    <p class="section-label">
                                        MODULE
                                        ${module.number}
                                    </p>

                                    <h2>
                                        ${module.title}
                                    </h2>

                                </div>

                            </div>

                            <div class="topic-list">

                                ${
                                    topics
                                        .map(
                                            topicCardHTML
                                        )
                                        .join("")
                                }

                            </div>

                        </div>

                    `;

                }
            )
            .join("");


        nutritionPage.innerHTML = `

            <div class="course-page-header">

                <button
                    id="nut-back-dashboard"
                    class="back-button"
                >
                    ← Dashboard
                </button>

                <div class="course-page-title">

                    <div class="course-page-icon">
                        🍎
                    </div>

                    <div>

                        <p class="section-label">
                            COMPLETE COURSE
                        </p>

                        <h1>
                            Nutrition & Diet
                        </h1>

                        <p>
                            ${TOPIC_COUNT}
                            complete topics covering
                            nutrients, digestion,
                            metabolism, clinical nutrition,
                            lifespan nutrition,
                            tube feeding, food safety
                            and health-science applications.
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
                        <span
                            id="nut-course-progress"
                        >
                            0
                        </span>%
                    </h2>

                </div>

                <div class="course-progress-large">

                    <div
                        id="nut-course-progress-bar"
                        class="course-progress-large-fill"
                    ></div>

                </div>

            </div>


            <div class="nut-course-note">

                <strong>
                    Nutrition mastery:
                </strong>

                Read the full lesson,
                complete Quick Review,
                complete Practice Lab
                when available and score
                at least ${PASS_SCORE}%
                on the randomized mastery quiz.

                Missed questions are
                automatically saved to
                your Nutrition Weak Areas.

            </div>


            ${modulesHTML}


            <div class="final-practice-card">

                <div>

                    <p class="section-label">
                        FINAL REVIEW
                    </p>

                    <h2>
                        Nutrition Mastery Center
                    </h2>

                    <p>
                        Review weak concepts,
                        complete mixed practice
                        or take the
                        ${FINAL_EXAM_LENGTH}-question
                        comprehensive exam.
                    </p>

                </div>

                <div class="final-practice-actions">

                    <button
                        id="nut-weak-button"
                    >
                        🎯 Weak Areas
                    </button>

                    <button
                        id="nut-practice-button"
                    >
                        🧮 Mixed Practice
                    </button>

                    <button
                        id="nut-exam-button"
                    >
                        🏆 Final Mastery Exam
                    </button>

                </div>

            </div>

        `;


        document
            .getElementById(
                "nut-back-dashboard"
            )
            .addEventListener(
                "click",
                showDashboard
            );


        document
            .querySelectorAll(
                ".nutrition-topic-card"
            )
            .forEach(
                function (
                    card
                ) {

                    card
                        .addEventListener(
                            "click",
                            function () {

                                showTopic(
                                    card.dataset
                                        .nutTopic
                                );

                            }
                        );


                    const button =
                        card.querySelector(
                            ".topic-button"
                        );


                    button
                        .addEventListener(
                            "click",
                            function (
                                event
                            ) {

                                event.stopPropagation();


                                showTopic(
                                    card.dataset
                                        .nutTopic
                                );

                            }
                        );

                }
            );


        document
            .getElementById(
                "nut-weak-button"
            )
            .addEventListener(
                "click",
                startWeakPractice
            );


        document
            .getElementById(
                "nut-practice-button"
            )
            .addEventListener(
                "click",
                startMixedPractice
            );


        document
            .getElementById(
                "nut-exam-button"
            )
            .addEventListener(
                "click",
                startFinalExam
            );

    }


    renderCoursePage();


    // ========================================================================
    // NAVIGATION
    // ========================================================================

    function hideMainViews() {

        [

            dashboardIntro,

            progressOverview,

            coursesSection,

            weakAreasSection,

            footer

        ].forEach(
            function (
                element
            ) {

                if (
                    element
                ) {

                    element.classList.add(
                        "hidden"
                    );

                }

            }
        );


        document
            .querySelectorAll(
                ".course-page, .lesson-page"
            )
            .forEach(
                page =>
                    page.classList.add(
                        "hidden"
                    )
            );


        closeModal();

    }


    function showNutritionCourse() {

        hideMainViews();


        nutritionPage
            .classList
            .remove(
                "hidden"
            );


        updateProgress();


        scrollTopSmooth();

    }


    function showDashboard() {

        document
            .querySelectorAll(
                ".course-page, .lesson-page"
            )
            .forEach(
                page =>
                    page.classList.add(
                        "hidden"
                    )
            );


        [

            dashboardIntro,

            progressOverview,

            coursesSection,

            weakAreasSection,

            footer

        ].forEach(
            function (
                element
            ) {

                if (
                    element
                ) {

                    element
                        .classList
                        .remove(
                            "hidden"
                        );

                }

            }
        );


        closeModal();


        updateProgress();


        updateSharedDashboard();


        scrollTopSmooth();

    }


    document.addEventListener(

        "click",

        function (
            event
        ) {

            const card =
                event.target.closest(
                    '.course-card[data-course="nutrition"]'
                );


            if (
                !card
            ) {

                return;

            }


            event.preventDefault();

            event.stopPropagation();

            event.stopImmediatePropagation();


            showNutritionCourse();

        },

        true

    );


    // ========================================================================
    // RENDER HELPERS
    // ========================================================================

    function renderParagraphs(
        paragraphs
    ) {

        return `

            <div class="nut-prose">

                ${
                    paragraphs.map(
                        paragraph =>
                            `<p>${paragraph}</p>`
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
                        fact => `

                            <div class="definition-card">

                                <h3>
                                    ${fact[0]}
                                </h3>

                                <p>
                                    ${fact[1]}
                                </p>

                            </div>

                        `
                    ).join("")
                }

            </div>

        `;

    }


    function renderFormulas(
        formulas
    ) {

        if (
            !formulas ||
            !formulas.length
        ) {

            return "";

        }


        return `

            <div class="nut-formula-box">

                <div class="nut-formula-title">
                    🧮 FORMULAS
                </div>

                ${
                    formulas.map(
                        formula => `

                            <div class="nut-formula">
                                ${formula}
                            </div>

                        `
                    ).join("")
                }

            </div>

        `;

    }


    function renderTable(
        table
    ) {

        if (
            !table ||
            !table.length
        ) {

            return "";

        }


        const [
            headers,
            ...rows
        ] = table;


        return `

            <div class="nut-table-wrap">

                <table class="nut-table">

                    <thead>

                        <tr>

                            ${
                                headers.map(
                                    header =>
                                        `<th>${header}</th>`
                                ).join("")
                            }

                        </tr>

                    </thead>

                    <tbody>

                        ${
                            rows.map(
                                row => `

                                    <tr>

                                        ${
                                            row.map(
                                                cell =>
                                                    `<td>${cell}</td>`
                                            ).join("")
                                        }

                                    </tr>

                                `
                            ).join("")
                        }

                    </tbody>

                </table>

            </div>

        `;

    }


    function renderWorkedExamples(
        examples
    ) {

        if (
            !examples ||
            !examples.length
        ) {

            return `

                <div class="nut-course-note">

                    This topic is mainly
                    conceptual, so there
                    is no required
                    arithmetic example.

                </div>

            `;

        }


        return `

            <div class="nut-worked-grid">

                ${
                    examples.map(
                        example => `

                            <div class="nut-worked-card">

                                <h3>
                                    ${example.title}
                                </h3>

                                <div class="nut-worked-problem">
                                    ${example.problem}
                                </div>

                                <ol>

                                    ${
                                        example.steps.map(
                                            step =>
                                                `<li>${step}</li>`
                                        ).join("")
                                    }

                                </ol>

                                <div class="nut-worked-answer">

                                    Answer:
                                    ${example.answer}

                                </div>

                            </div>

                        `
                    ).join("")
                }

            </div>

        `;

    }


    function renderMemory(
        memory
    ) {

        return `

            <div class="nut-memory-box">

                <h3>
                    🧠 Memory Tricks
                </h3>

                ${
                    memory.map(
                        item => `

                            <div class="nut-memory-item">
                                ${item}
                            </div>

                        `
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
                        item =>
                            `<div>✓ ${item}</div>`
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
                            HEALTHCARE APPLICATION
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
                        Nutrition Connection
                    </strong>

                    <p class="clinical-answer">
                        ${clinical.connection}
                    </p>

                </div>

            </div>

        `;

    }


    function renderSection(
        item,
        part,
        index
    ) {

        return `

            <section
                id="nut-detail-${item.id}-${index}"
                class="lesson-section"
            >

                <div class="lesson-section-number">

                    ${
                        String(
                            index + 3
                        ).padStart(
                            2,
                            "0"
                        )
                    }

                </div>

                <div class="lesson-section-content">

                    <p class="lesson-small-label">
                        ${part.label}
                    </p>

                    <h2>
                        ${part.title}
                    </h2>

                    ${
                        renderParagraphs(
                            part.paragraphs ||
                            []
                        )
                    }

                    ${
                        renderTable(
                            part.table
                        )
                    }

                </div>

            </section>

        `;

    }


    // ========================================================================
    // LESSON ENGINE
    // ========================================================================

    let currentTopic =
        null;


    let lessonObserver =
        null;


    function showTopic(
        topicId
    ) {

        const item =
            TOPIC_MAP[
                topicId
            ];


        if (
            !item
        ) {

            return;

        }


        currentTopic =
            item;


        hideMainViews();


        renderLesson(
            item
        );


        nutritionLessonPage
            .classList
            .remove(
                "hidden"
            );


        updateLessonProgress(
            item
        );


        observeLesson(
            item
        );


        scrollTopSmooth();

    }


    function renderLesson(
        item
    ) {

        const navigation =
            item.sections.map(
                function (
                    part,
                    index
                ) {

                    return `

                        <a
                            href="#nut-detail-${item.id}-${index}"
                        >
                            ${part.label}
                        </a>

                    `;

                }
            ).join("");


        nutritionLessonPage.innerHTML = `

            <div class="lesson-top-bar">

                <button
                    id="nut-back-course"
                    class="back-button"
                >
                    ← Nutrition
                </button>

                <div class="lesson-progress-text">

                    <span>
                        Topic
                        ${item.number}
                        of
                        ${TOPIC_COUNT}
                    </span>

                    <span>
                        ${item.title}
                    </span>

                </div>

            </div>


            <div class="lesson-hero">

                <div class="lesson-hero-content">

                    <p class="section-label">
                        NUTRITION & DIET
                    </p>

                    <h1>
                        ${item.title}
                    </h1>

                    <p class="lesson-description">
                        ${item.description}
                    </p>

                    <div class="lesson-meta">

                        <span>
                            📖
                            ${item.sections.length}
                            Sections
                        </span>

                        <span>
                            🎯
                            ${item.objectives.length}
                            Objectives
                        </span>

                        <span>
                            🧮 Calculations
                        </span>

                        <span>
                            🩺 Clinical Examples
                        </span>

                        <span>
                            🧠 Memory Tricks
                        </span>

                        <span>
                            ❓ Mastery Quiz
                        </span>

                    </div>

                </div>

                <div class="lesson-hero-number">

                    ${
                        String(
                            item.number
                        ).padStart(
                            2,
                            "0"
                        )
                    }

                </div>

            </div>


            <nav class="lesson-navigation">

                <a href="#nut-overview">
                    Objectives
                </a>

                <a href="#nut-terminology">
                    Terminology
                </a>

                ${navigation}

                <a href="#nut-worked">
                    Worked Examples
                </a>

                <a href="#nut-clinical">
                    Clinical
                </a>

                <a href="#nut-memory">
                    Memory
                </a>

                <a href="#nut-traps">
                    Exam Traps
                </a>

                <a href="#nut-summary">
                    Summary
                </a>

            </nav>


            <div class="lesson-layout">

                <article class="lesson-content">


                    <section
                        id="nut-overview"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            01
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                LEARNING OBJECTIVES
                            </p>

                            <h2>
                                What You Need to Master
                            </h2>

                            ${
                                renderParagraphs([

                                    item.description,

                                    "Nutrition concepts should be interpreted in context. Focus on what the nutrient does, where it comes from, what happens when intake or absorption is inadequate and how the concept changes patient care."

                                ])
                            }

                            <div class="nut-objectives">

                                <h3>
                                    🎯 Learning Objectives
                                </h3>

                                <ul>

                                    ${
                                        item.objectives.map(
                                            objective =>
                                                `<li>${objective}</li>`
                                        ).join("")
                                    }

                                </ul>

                            </div>

                            ${
                                renderFormulas(
                                    item.formulas
                                )
                            }

                        </div>

                    </section>


                    <section
                        id="nut-terminology"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">
                            02
                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                ESSENTIAL TERMINOLOGY
                            </p>

                            <h2>
                                Core Concepts
                            </h2>

                            ${
                                renderFacts(
                                    item.facts
                                )
                            }

                        </div>

                    </section>


                    ${
                        item.sections.map(
                            (
                                part,
                                index
                            ) =>
                                renderSection(
                                    item,
                                    part,
                                    index
                                )
                        ).join("")
                    }


                    <section
                        id="nut-worked"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    item.sections.length +
                                    3
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                STEP-BY-STEP
                            </p>

                            <h2>
                                Worked Examples
                            </h2>

                            ${
                                renderWorkedExamples(
                                    item.worked
                                )
                            }

                        </div>

                    </section>


                    <section
                        id="nut-clinical"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    item.sections.length +
                                    4
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                HEALTHCARE APPLICATION
                            </p>

                            <h2>
                                Nutrition in Patient Care
                            </h2>

                            ${
                                renderClinical(
                                    item.clinical
                                )
                            }

                        </div>

                    </section>


                    <section
                        id="nut-memory"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    item.sections.length +
                                    5
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                MEMORY SYSTEM
                            </p>

                            <h2>
                                Remember the High-Yield Points
                            </h2>

                            ${
                                renderMemory(
                                    item.memory
                                )
                            }

                        </div>

                    </section>


                    <section
                        id="nut-traps"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    item.sections.length +
                                    6
                                ).padStart(
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
                                Do Not Mix These Up
                            </h2>

                            <div class="nut-traps">

                                ${
                                    item.traps.map(
                                        trap => `

                                            <div class="nut-trap">

                                                <strong>
                                                    ⚠️ Watch out:
                                                </strong>

                                                ${trap}

                                            </div>

                                        `
                                    ).join("")
                                }

                            </div>

                        </div>

                    </section>


                    <section
                        id="nut-summary"
                        class="lesson-section"
                    >

                        <div class="lesson-section-number">

                            ${
                                String(
                                    item.sections.length +
                                    7
                                ).padStart(
                                    2,
                                    "0"
                                )
                            }

                        </div>

                        <div class="lesson-section-content">

                            <p class="lesson-small-label">
                                HIGH-YIELD REVIEW
                            </p>

                            <h2>
                                Topic Summary
                            </h2>

                            ${
                                renderChecklist(
                                    item.summary
                                )
                            }

                            <div class="mastery-reminder">

                                <span>
                                    🎯
                                </span>

                                <div>

                                    <strong>
                                        Topic Mastery
                                    </strong>

                                    <p>

                                        Complete Quick Review,
                                        Practice Lab when available,
                                        and earn at least
                                        ${PASS_SCORE}%
                                        on the mastery quiz.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>


                    <section class="lesson-actions">

                        <div>

                            <p class="section-label">
                                READY TO PRACTICE?
                            </p>

                            <h2>
                                Master
                                ${item.title}
                            </h2>

                            <p>

                                Recall the key concepts,
                                solve the calculations without
                                looking at the answer and then
                                complete the randomized quiz.

                            </p>

                        </div>

                        <div class="lesson-action-buttons">

                            <button
                                id="nut-review-button"
                                class="secondary-lesson-button"
                            >
                                🧠 Quick Review
                            </button>

                            <button
                                id="nut-practice-lab-button"
                                class="secondary-lesson-button"
                            >
                                🧮 Practice Lab
                            </button>

                            <button
                                id="nut-topic-quiz-button"
                                class="primary-lesson-button"
                            >
                                🎯 Mastery Quiz
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

                            <span
                                id="nut-topic-progress"
                            >
                                0
                            </span>%

                        </div>

                        <div class="sidebar-progress-bar">

                            <div
                                id="nut-topic-progress-fill"
                                class="sidebar-progress-fill"
                            ></div>

                        </div>

                    </div>


                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            MASTERY CHECKLIST
                        </p>

                        <div
                            id="nut-topic-checklist"
                            class="sidebar-checklist"
                        >

                            <div>
                                <span>○</span>
                                Read lesson
                            </div>

                            <div>
                                <span>○</span>
                                Quick Review
                            </div>

                            <div>
                                <span>○</span>
                                Practice Lab
                            </div>

                            <div>
                                <span>○</span>
                                Pass quiz
                            </div>

                        </div>

                    </div>


                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            BEST QUIZ SCORE
                        </p>

                        <div class="sidebar-progress-number">

                            <span
                                id="nut-best-score"
                            >
                                0
                            </span>%

                        </div>

                    </div>


                    <div class="sidebar-card">

                        <p class="sidebar-label">
                            TOPIC DEPTH
                        </p>

                        <p>
                            ${item.sections.length}
                            lesson sections
                        </p>

                        <p>
                            ${item.worked.length}
                            worked examples
                        </p>

                        <p>
                            ${item.practice.length}
                            practice drills
                        </p>

                        <p>
                            ${
                                buildQuestionBank(
                                    item
                                ).length
                            }
                            question-bank items
                        </p>

                    </div>


                    <div class="sidebar-card sidebar-tip">

                        <span>
                            💡
                        </span>

                        <div>

                            <strong>
                                Nutrition Strategy
                            </strong>

                            <p>

                                Ask four things:
                                what does the nutrient do,
                                where does it come from,
                                what happens when it is
                                deficient or excessive,
                                and how does it change
                                patient care?

                            </p>

                        </div>

                    </div>

                </aside>

            </div>

        `;


        document
            .getElementById(
                "nut-back-course"
            )
            .addEventListener(
                "click",
                showNutritionCourse
            );


        document
            .getElementById(
                "nut-review-button"
            )
            .addEventListener(
                "click",
                function () {

                    startQuickReview(
                        item
                    );

                }
            );


        document
            .getElementById(
                "nut-practice-lab-button"
            )
            .addEventListener(
                "click",
                function () {

                    startPracticeLab(
                        item
                    );

                }
            );


        document
            .getElementById(
                "nut-topic-quiz-button"
            )
            .addEventListener(
                "click",
                function () {

                    startTopicQuiz(
                        item
                    );

                }
            );

    }


    // ========================================================================
    // READ TRACKING
    // ========================================================================

    function observeLesson(
        item
    ) {

        if (
            lessonObserver
        ) {

            lessonObserver.disconnect();

        }


        const summary =
            document.getElementById(
                "nut-summary"
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

                function (
                    entries
                ) {

                    entries.forEach(
                        function (
                            entry
                        ) {

                            if (

                                entry.isIntersecting &&

                                !nutritionLessonPage
                                    .classList
                                    .contains(
                                        "hidden"
                                    )

                            ) {

                                localStorage.setItem(
                                    storageFor(
                                        item.id
                                    ).read,
                                    "true"
                                );


                                updateLessonProgress(
                                    item
                                );


                                updateProgress();

                            }

                        }
                    );

                },

                {
                    threshold:
                        0.25
                }

            );


        lessonObserver.observe(
            summary
        );

    }


    // ========================================================================
    // PROGRESS
    // ========================================================================

    function calculateTopicProgress(
        item
    ) {

        const storage =
            storageFor(
                item.id
            );


        let progress =
            0;


        if (
            getBoolean(
                storage.read
            )
        ) {

            progress +=
                20;

        }


        if (
            getBoolean(
                storage.review
            )
        ) {

            progress +=
                20;

        }


        if (
            getBoolean(
                storage.practice
            )
        ) {

            progress +=
                20;

        }


        if (
            getBoolean(
                storage.passed
            )
        ) {

            progress +=
                40;

        }


        return progress;

    }


    function isMastered(
        item
    ) {

        return (
            getNumber(
                storageFor(
                    item.id
                ).score
            ) >=
            PASS_SCORE
        );

    }


    function setChecklist(
        items,
        index,
        complete
    ) {

        if (
            !items[index]
        ) {

            return;

        }


        const icon =
            items[index]
                .querySelector(
                    "span"
                );


        if (
            !icon
        ) {

            return;

        }


        icon.textContent =
            complete
                ? "✓"
                : "○";


        icon.style.color =
            complete
                ? "#16a34a"
                : "";


        items[index]
            .style
            .fontWeight =
            complete
                ? "700"
                : "";

    }


    function updateLessonProgress(
        item
    ) {

        const storage =
            storageFor(
                item.id
            );


        const progress =
            calculateTopicProgress(
                item
            );


        const text =
            document.getElementById(
                "nut-topic-progress"
            );


        const fill =
            document.getElementById(
                "nut-topic-progress-fill"
            );


        const best =
            document.getElementById(
                "nut-best-score"
            );


        if (
            text
        ) {

            text.textContent =
                progress;

        }


        if (
            fill
        ) {

            fill.style.width =
                `${progress}%`;

        }


        if (
            best
        ) {

            best.textContent =
                getNumber(
                    storage.score
                );

        }


        const items =
            document.querySelectorAll(
                "#nut-topic-checklist > div"
            );


        setChecklist(
            items,
            0,
            getBoolean(
                storage.read
            )
        );


        setChecklist(
            items,
            1,
            getBoolean(
                storage.review
            )
        );


        setChecklist(
            items,
            2,
            getBoolean(
                storage.practice
            )
        );


        setChecklist(
            items,
            3,
            getBoolean(
                storage.passed
            )
        );

    }


    function countMastered() {

        return NUTRITION_TOPICS
            .filter(
                isMastered
            )
            .length;

    }


    function getCoursePercent() {

        return Math.round(

            (
                countMastered() /
                TOPIC_COUNT
            ) *
            100

        );

    }


    function updateProgress() {

        const percent =
            getCoursePercent();


        const courseText =
            document.getElementById(
                "nut-course-progress"
            );


        const courseBar =
            document.getElementById(
                "nut-course-progress-bar"
            );


        if (
            courseText
        ) {

            courseText.textContent =
                percent;

        }


        if (
            courseBar
        ) {

            courseBar.style.width =
                `${percent}%`;

        }


        document
            .querySelectorAll(
                ".nutrition-topic-card"
            )
            .forEach(
                function (
                    card
                ) {

                    const item =
                        TOPIC_MAP[
                            card.dataset
                                .nutTopic
                        ];


                    const status =
                        card.querySelector(
                            ".topic-status"
                        );


                    const button =
                        card.querySelector(
                            ".topic-button"
                        );


                    const mastered =
                        isMastered(
                            item
                        );


                    const topicProgress =
                        calculateTopicProgress(
                            item
                        );


                    if (
                        status
                    ) {

                        status.textContent =
                            mastered
                                ? "✓"
                                : item.number;

                    }


                    if (
                        button
                    ) {

                        button.textContent =
                            mastered
                                ? "Review →"
                                : topicProgress > 0
                                    ? "Continue →"
                                    : "Start →";

                    }

                }
            );


        const spans =
            nutritionCard.querySelectorAll(
                ".course-progress span"
            );


        if (
            spans.length >
            1
        ) {

            spans[1].textContent =
                `${percent}%`;

        }


        const fill =
            nutritionCard.querySelector(
                ".course-progress-fill"
            );


        if (
            fill
        ) {

            fill.style.width =
                `${percent}%`;

        }


        if (

            currentTopic &&

            !nutritionLessonPage
                .classList
                .contains(
                    "hidden"
                )

        ) {

            updateLessonProgress(
                currentTopic
            );

        }


        if (
            questionsAnswered
        ) {

            questionsAnswered.textContent =
                getNumber(
                    SHARED_QUESTIONS_KEY
                );

        }


        updateSharedDashboard();

    }


    // ========================================================================
    // SHARED DASHBOARD
    // ========================================================================

    function readCoursePercent(
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


    function updateSharedDashboard() {

        const builtCourses = [

            "anatomy1",

            "anatomy2",

            "chemistry",

            "microbiology",

            "statistics",

            "nutrition"

        ];


        const values =
            builtCourses.map(
                readCoursePercent
            );


        const average =
            Math.round(

                values.reduce(
                    (
                        total,
                        value
                    ) =>
                        total +
                        value,
                    0
                ) /

                builtCourses.length

            );


        if (
            overallProgress
        ) {

            overallProgress.textContent =
                average;

        }


        if (
            overallProgressBar
        ) {

            overallProgressBar.style.width =
                `${average}%`;

        }


        if (
            topicsMastered
        ) {

            const mastered =
                Array.from(

                    document.querySelectorAll(
                        ".course-page .topic-status"
                    )

                ).filter(
                    status =>
                        status
                            .textContent
                            .trim() ===
                        "✓"
                ).length;


            topicsMastered.textContent =
                mastered;

        }


        if (
            questionsAnswered
        ) {

            questionsAnswered.textContent =
                getNumber(
                    SHARED_QUESTIONS_KEY
                );

        }

    }


    document
        .querySelectorAll(

            '.course-card[data-course="anatomy1"],' +

            '.course-card[data-course="anatomy2"],' +

            '.course-card[data-course="chemistry"],' +

            '.course-card[data-course="microbiology"],' +

            '.course-card[data-course="statistics"],' +

            '.course-card[data-course="nutrition"]'

        )
        .forEach(
            function (
                card
            ) {

                new MutationObserver(

                    function () {

                        setTimeout(
                            updateSharedDashboard,
                            0
                        );

                    }

                ).observe(

                    card,

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
        );


    // ========================================================================
    // MODAL
    // ========================================================================

    const overlay =
        document.createElement(
            "div"
        );


    overlay.id =
        "nutrition-study-overlay";


    overlay.className =
        "study-overlay hidden";


    overlay.innerHTML = `

        <div class="study-modal">

            <div class="study-modal-header">

                <div>

                    <p
                        id="nut-modal-label"
                        class="study-modal-label"
                    ></p>

                    <h2
                        id="nut-modal-title"
                    ></h2>

                </div>

                <button
                    id="nut-modal-close"
                    class="study-modal-close"
                >
                    ×
                </button>

            </div>

            <div
                id="nut-modal-content"
            ></div>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    const modalLabel =
        document.getElementById(
            "nut-modal-label"
        );


    const modalTitle =
        document.getElementById(
            "nut-modal-title"
        );


    const modalContent =
        document.getElementById(
            "nut-modal-content"
        );


    function openModal() {

        overlay
            .classList
            .remove(
                "hidden"
            );


        document.body.style.overflow =
            "hidden";

    }


    function closeModal() {

        overlay
            .classList
            .add(
                "hidden"
            );


        document.body.style.overflow =
            "";

    }


    document
        .getElementById(
            "nut-modal-close"
        )
        .addEventListener(
            "click",
            closeModal
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

                closeModal();

            }

        }

    );


    // ========================================================================
    // QUICK REVIEW
    // ========================================================================

    let reviewTopic =
        null;


    let reviewOrder =
        [];


    let reviewIndex =
        0;


    let reviewRevealed =
        false;


    function startQuickReview(
        item
    ) {

        reviewTopic =
            item;


        reviewOrder =
            shuffle(

                item.facts.map(
                    (
                        fact,
                        index
                    ) => index
                )

            );


        reviewIndex =
            0;


        reviewRevealed =
            false;


        modalLabel.textContent =
            `NUTRITION • TOPIC ${item.number}`;


        modalTitle.textContent =
            "Quick Review";


        openModal();


        renderReview();

    }


    function renderReview() {

        const item =
            reviewTopic;


        const factIndex =
            reviewOrder[
                reviewIndex
            ];


        const fact =
            item.facts[
                factIndex
            ];


        const storage =
            storageFor(
                item.id
            );


        const marked =
            getArray(
                storage.marked
            );


        const isMarked =
            marked.includes(
                factIndex
            );


        const percentage =
            Math.round(

                (
                    (
                        reviewIndex +
                        1
                    ) /

                    reviewOrder.length
                ) *

                100

            );


        modalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>
                        Card
                        ${reviewIndex + 1}
                        of
                        ${reviewOrder.length}
                    </span>

                    <span>
                        ${percentage}%
                    </span>

                </div>

                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percentage}%"
                    ></div>

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

                                    Explain the idea
                                    in your own words
                                    before moving on.

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

                                    Answer from memory
                                    before revealing it.

                                </p>

                            `
                    }

                </div>


                <div class="study-actions">

                    <div class="study-actions-group">

                        <button
                            id="nut-review-prev"
                            class="study-button"
                            ${
                                reviewIndex ===
                                0
                                    ? "disabled"
                                    : ""
                            }
                        >
                            ← Previous
                        </button>

                        <button
                            id="nut-review-mark"
                            class="study-button ${
                                isMarked
                                    ? "marked"
                                    : ""
                            }"
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
                                        id="nut-review-next"
                                        class="study-button primary"
                                    >

                                        ${
                                            reviewIndex ===
                                            reviewOrder.length -
                                            1
                                                ? "Finish Review ✓"
                                                : "Next →"
                                        }

                                    </button>

                                `
                                : `

                                    <button
                                        id="nut-review-reveal"
                                        class="study-button primary"
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
                "nut-review-prev"
            );


        const mark =
            document.getElementById(
                "nut-review-mark"
            );


        const reveal =
            document.getElementById(
                "nut-review-reveal"
            );


        const next =
            document.getElementById(
                "nut-review-next"
            );


        if (
            previous
        ) {

            previous.addEventListener(

                "click",

                function () {

                    if (
                        reviewIndex >
                        0
                    ) {

                        reviewIndex--;


                        reviewRevealed =
                            false;


                        renderReview();

                    }

                }

            );

        }


        if (
            mark
        ) {

            mark.addEventListener(

                "click",

                function () {

                    const array =
                        getArray(
                            storage.marked
                        );


                    const position =
                        array.indexOf(
                            factIndex
                        );


                    if (
                        position >=
                        0
                    ) {

                        array.splice(
                            position,
                            1
                        );

                    } else {

                        array.push(
                            factIndex
                        );

                    }


                    saveArray(
                        storage.marked,
                        array
                    );


                    renderReview();

                }

            );

        }


        if (
            reveal
        ) {

            reveal.addEventListener(

                "click",

                function () {

                    reviewRevealed =
                        true;


                    renderReview();

                }

            );

        }


        if (
            next
        ) {

            next.addEventListener(

                "click",

                function () {

                    if (
                        reviewIndex <
                        reviewOrder.length -
                        1
                    ) {

                        reviewIndex++;


                        reviewRevealed =
                            false;


                        renderReview();

                    } else {

                        localStorage.setItem(
                            storage.review,
                            "true"
                        );


                        updateProgress();


                        updateLessonProgress(
                            item
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
                                    ${item.title}
                                </h2>

                                <p class="results-message">

                                    You completed all
                                    ${item.facts.length}
                                    active-recall cards.

                                </p>

                                <button
                                    id="nut-review-done"
                                    class="study-button primary"
                                >
                                    Return to Lesson
                                </button>

                            </div>

                        `;


                        document
                            .getElementById(
                                "nut-review-done"
                            )
                            .addEventListener(
                                "click",
                                closeModal
                            );

                    }

                }

            );

        }

    }


    // ========================================================================
    // PRACTICE LAB
    // ========================================================================

    let practiceTopic =
        null;


    let practiceOrder =
        [];


    let practiceIndex =
        0;


    let practiceRevealed =
        false;


    function startPracticeLab(
        item
    ) {

        practiceTopic =
            item;


        if (
            !item.practice.length
        ) {

            localStorage.setItem(
                storageFor(
                    item.id
                ).practice,
                "true"
            );


            updateProgress();


            updateLessonProgress(
                item
            );


            modalLabel.textContent =
                `NUTRITION • TOPIC ${item.number}`;


            modalTitle.textContent =
                "Practice Lab";


            modalContent.innerHTML = `

                <div class="results">

                    <div class="results-icon">
                        🩺
                    </div>

                    <p class="study-modal-label">
                        CONCEPT APPLICATION
                    </p>

                    <h2>
                        ${item.title}
                    </h2>

                    <p class="results-message">

                        This lesson is mainly
                        conceptual. Your clinical
                        application, memory review
                        and exam traps serve as
                        the practice component.

                    </p>

                    <button
                        id="nut-concept-practice-done"
                        class="study-button primary"
                    >
                        Mark Practice Complete ✓
                    </button>

                </div>

            `;


            openModal();


            document
                .getElementById(
                    "nut-concept-practice-done"
                )
                .addEventListener(
                    "click",
                    closeModal
                );


            return;

        }


        practiceOrder =
            shuffle(

                item.practice.map(
                    (
                        problem,
                        index
                    ) => index
                )

            );


        practiceIndex =
            0;


        practiceRevealed =
            false;


        modalLabel.textContent =
            `NUTRITION • TOPIC ${item.number}`;


        modalTitle.textContent =
            "Practice Lab";


        openModal();


        renderPracticeLab();

    }


    function renderPracticeLab() {

        const item =
            practiceTopic;


        const problem =
            item.practice[
                practiceOrder[
                    practiceIndex
                ]
            ];


        const percentage =
            Math.round(

                (
                    (
                        practiceIndex +
                        1
                    ) /

                    practiceOrder.length
                ) *

                100

            );


        modalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>

                        Problem
                        ${practiceIndex + 1}
                        of
                        ${practiceOrder.length}

                    </span>

                    <span>
                        ${percentage}%
                    </span>

                </div>

                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percentage}%"
                    ></div>

                </div>

            </div>


            <div class="nut-practice-card">

                <p class="nut-practice-label">
                    CALCULATION / APPLICATION
                </p>

                <div class="nut-practice-question">
                    ${problem.prompt}
                </div>

                ${
                    practiceRevealed
                        ? `

                            <div class="nut-practice-solution">

                                <strong>
                                    Step-by-Step Solution
                                </strong>

                                <ol>

                                    ${
                                        problem.steps.map(
                                            step =>
                                                `<li>${step}</li>`
                                        ).join("")
                                    }

                                </ol>

                                <div class="nut-practice-answer">

                                    Answer:
                                    ${problem.answer}

                                </div>

                            </div>

                        `
                        : `

                            <p
                                style="
                                    margin-top:16px;
                                    color:#667085;
                                    line-height:1.65;
                                "
                            >

                                Solve the problem
                                before revealing the answer.
                                Write the formula first
                                and interpret what the
                                number means.

                            </p>

                        `
                }

            </div>


            <div class="study-actions">

                <div class="study-actions-group">

                    <button
                        id="nut-practice-prev"
                        class="study-button"
                        ${
                            practiceIndex ===
                            0
                                ? "disabled"
                                : ""
                        }
                    >
                        ← Previous
                    </button>

                </div>

                <div class="study-actions-group">

                    ${
                        practiceRevealed
                            ? `

                                <button
                                    id="nut-practice-next"
                                    class="study-button primary"
                                >

                                    ${
                                        practiceIndex ===
                                        practiceOrder.length -
                                        1
                                            ? "Complete Practice ✓"
                                            : "Next Problem →"
                                    }

                                </button>

                            `
                            : `

                                <button
                                    id="nut-practice-reveal"
                                    class="study-button primary"
                                >
                                    Show Solution
                                </button>

                            `
                    }

                </div>

            </div>

        `;


        const previous =
            document.getElementById(
                "nut-practice-prev"
            );


        const reveal =
            document.getElementById(
                "nut-practice-reveal"
            );


        const next =
            document.getElementById(
                "nut-practice-next"
            );


        if (
            previous
        ) {

            previous.addEventListener(

                "click",

                function () {

                    if (
                        practiceIndex >
                        0
                    ) {

                        practiceIndex--;


                        practiceRevealed =
                            false;


                        renderPracticeLab();

                    }

                }

            );

        }


        if (
            reveal
        ) {

            reveal.addEventListener(

                "click",

                function () {

                    practiceRevealed =
                        true;


                    renderPracticeLab();

                }

            );

        }


        if (
            next
        ) {

            next.addEventListener(

                "click",

                function () {

                    if (
                        practiceIndex <
                        practiceOrder.length -
                        1
                    ) {

                        practiceIndex++;


                        practiceRevealed =
                            false;


                        renderPracticeLab();

                    } else {

                        localStorage.setItem(

                            storageFor(
                                item.id
                            ).practice,

                            "true"

                        );


                        updateProgress();


                        updateLessonProgress(
                            item
                        );


                        modalContent.innerHTML = `

                            <div class="results">

                                <div class="results-icon">
                                    🧮
                                </div>

                                <p class="study-modal-label">
                                    PRACTICE COMPLETE
                                </p>

                                <h2>
                                    ${item.title}
                                </h2>

                                <p class="results-message">

                                    You completed all
                                    ${item.practice.length}
                                    practice problems.

                                </p>

                                <div
                                    class="study-actions-group"
                                    style="
                                        justify-content:center;
                                        flex-wrap:wrap;
                                    "
                                >

                                    <button
                                        id="nut-practice-quiz-now"
                                        class="study-button primary"
                                    >
                                        Start Mastery Quiz →
                                    </button>

                                    <button
                                        id="nut-practice-done"
                                        class="study-button"
                                    >
                                        Return to Lesson
                                    </button>

                                </div>

                            </div>

                        `;


                        document
                            .getElementById(
                                "nut-practice-quiz-now"
                            )
                            .addEventListener(

                                "click",

                                function () {

                                    startTopicQuiz(
                                        item
                                    );

                                }

                            );


                        document
                            .getElementById(
                                "nut-practice-done"
                            )
                            .addEventListener(
                                "click",
                                closeModal
                            );

                    }

                }

            );

        }

    }


    // ========================================================================
    // QUIZ STATE
    // ========================================================================

    let quizQuestions =
        [];


    let quizIndex =
        0;


    let quizCorrect =
        0;


    let quizSelected =
        null;


    let quizNumeric =
        "";


    let quizChecked =
        false;


    let quizMode =
        "topic";


    let quizTopic =
        null;


    // ========================================================================
    // QUIZ STARTERS
    // ========================================================================

    function startTopicQuiz(
        item
    ) {

        quizMode =
            "topic";


        quizTopic =
            item;


        quizQuestions =
            selectTopicQuestions(
                item
            );


        beginQuiz(

            `NUTRITION • TOPIC ${item.number}`,

            `${item.title} Mastery Quiz`

        );

    }


    function startMixedPractice() {

        quizMode =
            "practice";


        quizTopic =
            null;


        quizQuestions =
            shuffle(
                allQuestions()
            ).slice(
                0,
                MIXED_PRACTICE_LENGTH
            );


        beginQuiz(

            "NUTRITION • MIXED PRACTICE",

            "Nutrition Mixed Practice"

        );

    }


    function startFinalExam() {

        quizMode =
            "final";


        quizTopic =
            null;


        const guaranteed =
            NUTRITION_TOPICS.map(
                function (
                    item
                ) {

                    const custom =
                        (
                            item.questions ||
                            []
                        ).map(
                            question => ({

                                ...question,

                                topicId:
                                    item.id

                            })
                        );


                    const pool =
                        custom.length
                            ? custom
                            : buildTermQuestions(
                                item
                            );


                    return shuffle(
                        pool
                    )[0];

                }
            );


        const guaranteedIds =
            new Set(

                guaranteed.map(
                    question =>
                        `${question.topicId}|${question.id}`
                )

            );


        const extras =
            shuffle(

                allQuestions()
                    .filter(
                        question => {

                            return (

                                !guaranteedIds
                                    .has(
                                        `${question.topicId}|${question.id}`
                                    )

                            );

                        }
                    )

            ).slice(

                0,

                Math.max(

                    0,

                    FINAL_EXAM_LENGTH -
                    guaranteed.length

                )

            );


        quizQuestions =
            shuffle([

                ...guaranteed,

                ...extras

            ]).slice(
                0,
                FINAL_EXAM_LENGTH
            );


        beginQuiz(

            "NUTRITION • COMPREHENSIVE EXAM",

            "Nutrition Final Mastery Exam"

        );

    }


    // ========================================================================
    // WEAK AREAS
    // ========================================================================

    function getWeakQuestions() {

        const weak =
            [];


        NUTRITION_TOPICS
            .forEach(
                function (
                    item
                ) {

                    const ids =
                        getArray(
                            storageFor(
                                item.id
                            ).missed
                        );


                    ids.forEach(
                        function (
                            id
                        ) {

                            const question =
                                questionById(
                                    item,
                                    id
                                );


                            if (
                                question
                            ) {

                                weak.push(
                                    question
                                );

                            }

                        }
                    );

                }
            );


        return weak;

    }


    function startWeakPractice() {

        const weak =
            getWeakQuestions();


        if (
            !weak.length
        ) {

            modalLabel.textContent =
                "NUTRITION • SMART REVIEW";


            modalTitle.textContent =
                "Weak Areas";


            modalContent.innerHTML = `

                <div class="results">

                    <div class="results-icon">
                        🎯
                    </div>

                    <h2>
                        No Nutrition weak questions yet
                    </h2>

                    <p class="results-message">

                        Questions you miss
                        during Nutrition quizzes
                        will automatically appear here.

                    </p>

                    <button
                        id="nut-no-weak-close"
                        class="study-button primary"
                    >
                        Got It
                    </button>

                </div>

            `;


            openModal();


            document
                .getElementById(
                    "nut-no-weak-close"
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
            ).slice(

                0,

                Math.min(
                    25,
                    weak.length
                )

            );


        beginQuiz(

            "NUTRITION • SMART REVIEW",

            "Study My Nutrition Weak Areas"

        );

    }


    // ========================================================================
    // QUIZ ENGINE
    // ========================================================================

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


        quizNumeric =
            "";


        quizChecked =
            false;


        modalLabel.textContent =
            label;


        modalTitle.textContent =
            title;


        openModal();


        renderQuiz();

    }


    function answerReady(
        question
    ) {

        if (
            question.type ===
            "numeric"
        ) {

            return (
                String(
                    quizNumeric
                ).trim() !==
                ""
            );

        }


        return (
            quizSelected !==
            null
        );

    }


    function numericCorrect(
        question,
        value
    ) {

        const entered =
            Number(

                String(
                    value
                )
                    .replaceAll(
                        ",",
                        ""
                    )
                    .trim()

            );


        if (
            !Number.isFinite(
                entered
            )
        ) {

            return false;

        }


        const tolerance =
            Number(
                question.tolerance ??
                0
            );


        return (

            Math.abs(

                entered -
                Number(
                    question.answer
                )

            ) <=
            tolerance

        );

    }


    function renderQuiz() {

        const question =
            quizQuestions[
                quizIndex
            ];


        if (
            !question
        ) {

            return;

        }


        const item =
            TOPIC_MAP[
                question.topicId
            ];


        const percentage =
            Math.round(

                (
                    (
                        quizIndex +
                        1
                    ) /

                    quizQuestions.length
                ) *

                100

            );


        const letters = [

            "A",

            "B",

            "C",

            "D",

            "E"

        ];


        let answerArea =
            "";


        if (
            question.type ===
            "numeric"
        ) {

            answerArea = `

                <div class="nut-numeric-wrap">

                    <input
                        id="nut-numeric-answer"
                        class="nut-numeric-input"
                        inputmode="decimal"
                        placeholder="Enter your numerical answer"
                        value="${escapeHTML(quizNumeric)}"
                        ${
                            quizChecked
                                ? "disabled"
                                : ""
                        }
                    >

                    ${
                        question.unit
                            ? `

                                <div
                                    style="
                                        margin-top:8px;
                                        color:#667085;
                                        font-size:12px;
                                    "
                                >

                                    Answer unit:
                                    ${question.unit}

                                </div>

                            `
                            : ""
                    }

                </div>

            `;

        } else {

            answerArea = `

                <div class="quiz-options">

                    ${
                        question.choices.map(

                            function (
                                choice,
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


                                if (
                                    quizChecked
                                ) {

                                    if (
                                        index ===
                                        question.answer
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
                                        data-nut-answer="${index}"
                                        ${
                                            quizChecked
                                                ? "disabled"
                                                : ""
                                        }
                                    >

                                        <span class="quiz-letter">
                                            ${
                                                letters[index] ||
                                                index + 1
                                            }
                                        </span>

                                        <span>
                                            ${choice}
                                        </span>

                                    </button>

                                `;

                            }

                        ).join("")
                    }

                </div>

            `;

        }


        let feedback =
            "";


        if (
            quizChecked
        ) {

            const correct =
                question.type ===
                "numeric"
                    ? numericCorrect(
                        question,
                        quizNumeric
                    )
                    : (
                        quizSelected ===
                        question.answer
                    );


            feedback = `

                <div
                    class="quiz-feedback ${
                        correct
                            ? "correct"
                            : "incorrect"
                    }"
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

                    ${
                        question.type ===
                        "numeric"
                            ? `

                                <p>

                                    <strong>
                                        Expected:
                                    </strong>

                                    ${question.answer}
                                    ${question.unit || ""}

                                </p>

                            `
                            : ""
                    }

                </div>

            `;

        }


        modalContent.innerHTML = `

            <div class="study-progress-area">

                <div class="study-progress-info">

                    <span>

                        Question
                        ${quizIndex + 1}
                        of
                        ${quizQuestions.length}

                    </span>

                    <span>
                        ${percentage}%
                    </span>

                </div>

                <div class="study-progress-bar">

                    <div
                        class="study-progress-fill"
                        style="width:${percentage}%"
                    ></div>

                </div>

            </div>


            <div class="quiz-body">

                <div class="quiz-card">

                    <p class="quiz-type">

                        TOPIC
                        ${item.number}
                        •
                        ${item.title}

                    </p>

                    <h3 class="quiz-question">
                        ${question.q}
                    </h3>

                    ${answerArea}

                    ${feedback}

                </div>


                <div class="study-actions">

                    <div class="study-actions-group">

                        <button
                            id="nut-quiz-exit"
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
                                        id="nut-quiz-next"
                                        class="study-button primary"
                                    >

                                        ${
                                            quizIndex ===
                                            quizQuestions.length -
                                            1
                                                ? "See Results →"
                                                : "Next Question →"
                                        }

                                    </button>

                                `
                                : `

                                    <button
                                        id="nut-quiz-check"
                                        class="study-button primary"
                                        ${
                                            answerReady(
                                                question
                                            )
                                                ? ""
                                                : "disabled"
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
                "[data-nut-answer]"
            )
            .forEach(
                function (
                    button
                ) {

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
                                    button.dataset
                                        .nutAnswer
                                );


                            renderQuiz();

                        }

                    );

                }
            );


        const numericInput =
            document.getElementById(
                "nut-numeric-answer"
            );


        if (
            numericInput
        ) {

            numericInput.addEventListener(

                "input",

                function () {

                    quizNumeric =
                        numericInput.value;


                    const check =
                        document.getElementById(
                            "nut-quiz-check"
                        );


                    if (
                        check
                    ) {

                        check.disabled =
                            !String(
                                quizNumeric
                            ).trim();

                    }

                }

            );


            numericInput.addEventListener(

                "keydown",

                function (
                    event
                ) {

                    if (

                        event.key ===
                        "Enter" &&

                        String(
                            numericInput.value
                        ).trim()

                    ) {

                        quizNumeric =
                            numericInput.value;


                        checkAnswer();

                    }

                }

            );

        }


        const check =
            document.getElementById(
                "nut-quiz-check"
            );


        const next =
            document.getElementById(
                "nut-quiz-next"
            );


        const exit =
            document.getElementById(
                "nut-quiz-exit"
            );


        if (
            check
        ) {

            check.addEventListener(
                "click",
                checkAnswer
            );

        }


        if (
            next
        ) {

            next.addEventListener(

                "click",

                function () {

                    if (
                        quizIndex <
                        quizQuestions.length -
                        1
                    ) {

                        quizIndex++;


                        quizSelected =
                            null;


                        quizNumeric =
                            "";


                        quizChecked =
                            false;


                        renderQuiz();

                    } else {

                        finishQuiz();

                    }

                }

            );

        }


        if (
            exit
        ) {

            exit.addEventListener(
                "click",
                closeModal
            );

        }

    }


    // ========================================================================
    // WEAK STORAGE
    // ========================================================================

    function addWeak(
        question
    ) {

        const item =
            TOPIC_MAP[
                question.topicId
            ];


        if (
            !item
        ) {

            return;

        }


        const key =
            storageFor(
                item.id
            ).missed;


        const ids =
            getArray(
                key
            );


        if (
            !ids.includes(
                question.id
            )
        ) {

            ids.push(
                question.id
            );

        }


        saveArray(
            key,
            ids
        );

    }


    function removeWeak(
        question
    ) {

        const item =
            TOPIC_MAP[
                question.topicId
            ];


        if (
            !item
        ) {

            return;

        }


        const key =
            storageFor(
                item.id
            ).missed;


        saveArray(

            key,

            getArray(
                key
            ).filter(
                id =>
                    id !==
                    question.id
            )

        );

    }


    // ========================================================================
    // CHECK ANSWER
    // ========================================================================

    function checkAnswer() {

        const question =
            quizQuestions[
                quizIndex
            ];


        if (

            !question ||

            quizChecked ||

            !answerReady(
                question
            )

        ) {

            return;

        }


        const correct =
            question.type ===
            "numeric"
                ? numericCorrect(
                    question,
                    quizNumeric
                )
                : (
                    quizSelected ===
                    question.answer
                );


        if (
            correct
        ) {

            quizCorrect++;


            removeWeak(
                question
            );

        } else {

            addWeak(
                question
            );

        }


        localStorage.setItem(

            SHARED_QUESTIONS_KEY,

            getNumber(
                SHARED_QUESTIONS_KEY
            ) +
            1

        );


        quizChecked =
            true;


        renderQuiz();

    }


    // ========================================================================
    // SAVE TOPIC RESULT
    // ========================================================================

    function saveTopicResult(
        item,
        score
    ) {

        const storage =
            storageFor(
                item.id
            );


        localStorage.setItem(

            storage.score,

            Math.max(

                score,

                getNumber(
                    storage.score
                )

            )

        );


        localStorage.setItem(

            storage.attempts,

            getNumber(
                storage.attempts
            ) +
            1

        );


        if (
            score >=
            PASS_SCORE
        ) {

            localStorage.setItem(
                storage.passed,
                "true"
            );

        }


        updateLessonProgress(
            item
        );

    }


    function finishQuiz() {

        const score =
            Math.round(

                (
                    quizCorrect /
                    quizQuestions.length
                ) *

                100

            );


        if (

            quizMode ===
            "topic" &&

            quizTopic

        ) {

            saveTopicResult(
                quizTopic,
                score
            );

        }


        updateProgress();


        showResults(
            score
        );

    }


    // ========================================================================
    // RESULTS
    // ========================================================================

    function showResults(
        score
    ) {

        const incorrect =
            quizQuestions.length -
            quizCorrect;


        const passed =
            score >=
            PASS_SCORE;


        let title =
            "Practice Complete";


        let message =
            "Missed questions were automatically saved to Nutrition Weak Areas.";


        let icon =
            "🍎";


        if (
            quizMode ===
            "topic"
        ) {

            title =
                passed
                    ? `${quizTopic.title} Mastered!`
                    : "Review and Try Again";


            message =
                passed
                    ? `You reached the ${PASS_SCORE}% mastery requirement.`
                    : `You need at least ${PASS_SCORE}% to master this topic. Review your weak concepts, then try a new randomized quiz.`;


            icon =
                passed
                    ? "🏆"
                    : "📚";

        } else if (
            quizMode ===
            "final"
        ) {

            title =
                "Nutrition Final Mastery Exam Complete";


            message =
                `You completed ${quizQuestions.length} questions from the complete Nutrition course.`;


            icon =
                "🏆";

        } else if (
            quizMode ===
            "weak"
        ) {

            title =
                "Weak-Area Review Complete";


            message =
                "Questions answered correctly were removed from your Nutrition weak-area list.";


            icon =
                "🎯";

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
                        ${score}%
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
                                quizMode ===
                                "topic"
                                    ? `${getNumber(
                                        storageFor(
                                            quizTopic.id
                                        ).score
                                    )}%`
                                    : getWeakQuestions()
                                        .length
                            }

                        </strong>

                        <span>

                            ${
                                quizMode ===
                                "topic"
                                    ? "Best Score"
                                    : "Weak Questions"
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
                        quizMode ===
                        "topic"
                            ? `

                                <button
                                    id="nut-result-retake"
                                    class="study-button"
                                >
                                    🔄 New Quiz
                                </button>

                                <button
                                    id="nut-result-practice"
                                    class="study-button"
                                >
                                    🧮 Practice
                                </button>

                                <button
                                    id="nut-result-review"
                                    class="study-button"
                                >
                                    🧠 Quick Review
                                </button>

                            `
                            : ""
                    }


                    ${
                        getWeakQuestions()
                            .length
                            ? `

                                <button
                                    id="nut-result-weak"
                                    class="study-button"
                                >
                                    🎯 Weak Areas
                                </button>

                            `
                            : ""
                    }


                    <button
                        id="nut-result-finish"
                        class="study-button primary"
                    >
                        Finish
                    </button>

                </div>

            </div>

        `;


        const retake =
            document.getElementById(
                "nut-result-retake"
            );


        const practiceButton =
            document.getElementById(
                "nut-result-practice"
            );


        const review =
            document.getElementById(
                "nut-result-review"
            );


        const weak =
            document.getElementById(
                "nut-result-weak"
            );


        const finish =
            document.getElementById(
                "nut-result-finish"
            );


        if (
            retake
        ) {

            retake.addEventListener(

                "click",

                function () {

                    startTopicQuiz(
                        quizTopic
                    );

                }

            );

        }


        if (
            practiceButton
        ) {

            practiceButton.addEventListener(

                "click",

                function () {

                    startPracticeLab(
                        quizTopic
                    );

                }

            );

        }


        if (
            review
        ) {

            review.addEventListener(

                "click",

                function () {

                    startQuickReview(
                        quizTopic
                    );

                }

            );

        }


        if (
            weak
        ) {

            weak.addEventListener(
                "click",
                startWeakPractice
            );

        }


        if (
            finish
        ) {

            finish.addEventListener(
                "click",
                closeModal
            );

        }

    }


    // ========================================================================
    // ESCAPE KEY
    // ========================================================================

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

                closeModal();

            }

        }

    );


    // ========================================================================
    // INITIALIZE
    // ========================================================================

    updateProgress();


    setTimeout(
        updateSharedDashboard,
        0
    );

});